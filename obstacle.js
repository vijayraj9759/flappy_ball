const r = require("raylib");

const color = {
    r: 255,
    g: 0,
    b: 0,
    a: 255,
};

function initialize(x, y, width, height) {
    return {
        x,
        y,
        width,
        height,
    };
}

function isOutOfScreen(obstacle) {
    return obstacle.x + obstacle.width <= 0;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function updateSize(obstacle) {
    obstacle.width = generateRandomNumber(20, 100);
    obstacle.height = generateRandomNumber(150, r.GetScreenHeight() - 150);
}

function update(obstacle) {
    if (isOutOfScreen(obstacle)) {
        obstacle.x = r.GetScreenWidth();
        updateSize(obstacle);
    } else {
        obstacle.x = obstacle.x - 5;
    }
}

function draw(obstacle) {
    r.DrawRectangleRec(obstacle, color);
}

module.exports = {
    initialize,
    color,
    update,
    draw,
};
