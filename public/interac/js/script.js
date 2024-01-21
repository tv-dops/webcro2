const socket = io();

socket.emit('pageandstage', {page: 'Interac', stage: 'Interac'})

console.log('Working')