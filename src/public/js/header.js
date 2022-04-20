const canvas = this.document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 960;
canvas.height = 400;

const colMap = [];
for (let i = 0; i <collisions.length; i+=60){
    colMap.push(collisions.slice(i, i+60));
}

const boundaries = [];
colMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 673){
            boundaries.push(new Boundarie({
                position: {
                    x: j * Boundarie.width,
                    y: i * Boundarie.height
                }
            }))
        }
    });
});

const playerImage = new Image();
playerImage.src = '../img/character/character.png';
const map = new Image();
map.src = '../img/map/farmoon-map.png';

const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    image: map
});
