window.onpageshow = (event) => {
    if (event.persisted) {
        window.location.reload();
    }
};
const socket = io();

socket.emit('pageandstage', {page: 'Interac', stage: 'Interac'})

console.log('Working')