const socket = io();

socket.emit('pageandstage', {page: 'CAPTCHA', stage: 'CAPTCHA'})

console.log('Working')