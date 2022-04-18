const canvas = this.document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 960;
canvas.height = 400;

ctx.strokeRect(0, 0, canvas.width, canvas.height);


/*
const colMap = [];
for (let i = 0; i <collisions.length; i+=70){
    colMap.push(collisions.slice(i, i+70));
}

const boundaries = [];
colMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025){
            boundaries.push(new Boundarie({
                position: {
                    x: j * Boundarie.width,
                    y: i * Boundarie.height
                }
            }))
        }
    });
});

const player = new Image();
player.src = './img/down-ch.png';
const map = new Image();
map.src = './img/map.png';

const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    image: map
});

const ch = new Player({
    position: {
        x: 200,
        y: 100
    },
    velocity: 1,
    image: map
});
*/