const socket = io();

socket.emit('pageandstage', {page: 'ATB', stage: 'Login'})

console.log('Working')