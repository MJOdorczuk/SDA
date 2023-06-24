var current = [];
const width = 400, height = 400;
function setup() {
    createCanvas(width, height);
}

function draw() {
    if (current.length == 0) current = steps;
    if (current.length > 0){
        background(220);
        const [L, i, j, mini] = current.shift();
        const maxheight = Math.max(...L);
        const barwidth = width / L.length;
        for (var k = 0; k < L.length; k++) {
            var sum = 0;
            for (var a = 0; a < 100000000; a++) sum++;
            fill(0,0,255);
            if (k == i) fill(0,255,0);
            if (k == j) fill(255,0,0);
            if (k == mini) fill(255,0,255);
            const h = height * L[k] / maxheight;
            rect(barwidth * k, height - h, barwidth, h);
        }
    }
}
