const width = 400, height = 400;
function setup() {
    createCanvas(width, height);
}

function draw() {
    var X = [...xs];
    var Y = [...ys];
    var N = Math.min(X.length, Y.length);
    noStroke();
    background(220);
    for (var i = 0; i < N; i++) {
        var x = X[i];
        var y = Y[i];
        fill(0,0,255);
        if (x * x + y * y <= 1) fill(255, 0, 0);
        circle(x * width, y * height, 5, 5);
    }
}
