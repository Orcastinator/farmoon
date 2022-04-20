// SOCKETS
socket.on('playerInit', (data) => {
    ch.position.x = data.position.x;
    ch.position.y = data.position.y;
    u.player = ch;
    u.session = data.session;
});

socket.on('usersInit', (data) => {
    data.forEach(o => {
        let aux = new Player({
            position: {
                x: o.position.x,
                y: o.position.y
            },
            velocity: 1,
            image: playerImage
        });
        users.push(new User(aux, o.session));
    })
    animate();
})

socket.on('userOn', (data) => {
    let aux = new Player({
        position: {
            x: data.position.x,
            y: data.position.y
        },
        velocity: 1,
        image: playerImage
    });
    users.push(new User(aux, data.session));
});
socket.on('userOff', (data) => {
    users.splice(users.indexOf(data), 1);
});

socket.on('drawOtherPlayers', (data) => {
    users.forEach((o, i) =>{
        if (data.session === o.session){
            users[i].player.position.x = data.player.position.x;
            users[i].player.position.y = data.player.position.y;
        }
    })
});