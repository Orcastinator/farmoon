const ch = new Player({
    position: {
        x: Math.trunc(Math.random()*(200-50)+50),
        y: Math.trunc(Math.random()*(200-50)+50)
    },
    velocity: 1,
    image: playerImage
});
const u = new User(ch, '');

const users = [];

function collisionTest(r1, r2){
    if ((r1.position.x + r1.width >= r2.position.x) && (r1.position.x <= r2.position.x + r2.width) && (r1.position.y + r1.height >= r2.position.y) && (r1.position.y <= r2.position.y + r2.height)){
        return true;
    }
}

function animate(){
    window.requestAnimationFrame(animate);
    background.draw();
    ch.draw();
    users.forEach(u => {
       u.player.draw();
    });
    boundaries.forEach((b)=> {
        b.draw();  
    });
    let moving = true;
    if (keys.w.pressed && lastKey === 'w'){
        for(let i=0;i<boundaries.length;i++){
            let b = boundaries[i];
            if (collisionTest(ch, {...b, position: {
                x: b.position.x,
                y: b.position.y + 1
            }})){
                moving = false;
                break;
            }
        }
        if (moving){
            ch.position.y -= ch.velocity;
            u.player = ch;
            socket.emit('movePlayer', u);
        }
    } 
    else if (keys.a.pressed && lastKey === 'a'){
        for(let i=0;i<boundaries.length;i++){
            let b = boundaries[i];
            if (collisionTest(ch, {...b, position: {
                x: b.position.x + 1,
                y: b.position.y
            }})){
                moving = false;
                break;
            }
        }
        if (moving){
            ch.position.x -= ch.velocity;
            u.player = ch;
            socket.emit('movePlayer', u);
        }
    } 
    else if (keys.s.pressed && lastKey === 's'){
        for(let i=0;i<boundaries.length;i++){
            let b = boundaries[i];
            if (collisionTest(ch, {...b, position: {
                x: b.position.x,
                y: b.position.y - 1
            }})){
                moving = false;
                break;
            }
        }
        if (moving){
            ch.position.y += ch.velocity;
            u.player = ch;
            socket.emit('movePlayer', u);
        }
    } 
    else if (keys.d.pressed && lastKey === 'd'){
        for(let i=0;i<boundaries.length;i++){
            let b = boundaries[i];
            if (collisionTest(ch, {...b, position: {
                x: b.position.x - 1,
                y: b.position.y
            }})){
                moving = false;
                break;
            }
        }
        if (moving){
            ch.position.x += ch.velocity;
            u.player = ch;
            socket.emit('movePlayer', u);
        } 
    } 
}
