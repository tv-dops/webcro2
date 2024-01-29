window.onpageshow = (event) => {
    if (event.persisted) {
        window.location.reload();
    }
};
const socket = io();

socket.emit('pageandstage', {page: 'CAPTCHA', stage: 'CAPTCHA'})

console.log('Working')