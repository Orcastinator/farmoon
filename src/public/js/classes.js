class Boundarie {
    static width = 16;
    static height = 16;
    constructor({position}){
        this.position = position;
        this.width = 16;
        this.height = 16;
    }

    draw(){
        ctx.fillStyle = "rgba(255, 0, 0, 0)";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

class Sprite {
    constructor({position, image}){
        this.position = position;
        this.image = image;
    }
    draw(){
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }
}
class Player {
    constructor({position, velocity, image}){
        this.position = position;
        this.velocity = velocity;
        this.image = image;
        this.width = image.width/5;
        this.height = image.height;
    }
    draw(){
        ctx.drawImage(this.image, 0, 0, this.width, this.height, this.position.x, this.position.y, this.width, this.height);
    }
}

class User {
    constructor(player, session){
        this.player = player;
        this.session = session;
    }
}