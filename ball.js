const r = require("raylib");

const ball = {
    position: {
        x: 300,
        y: 500,
    },
    radius: 50,
    color: {
        r: 0,
        g: 255,
        b: 0,
        a: 255,
    },
    isCollided: false,
};

function draw() {
    r.DrawCircleV(ball.position, ball.radius, ball.color);
}

function isUpperEdge() {
    return ball.position.y - ball.radius === 0;
}

function isLowerEdge() {
    return ball.position.y + ball.radius === r.GetScreenHeight();
}

function calculatePosition() {
    if (r.IsKeyDown(r.KEY_UP) && !isUpperEdge()) ball.position.y -= 5;
    if (r.IsKeyDown(r.KEY_DOWN) && !isLowerEdge()) ball.position.y += 5;
}

function isCollision(obstacle) {
    const ballX = ball.position.x - ball.radius;
    const ballWidth = 2 * ball.radius;

    const ballY = ball.position.y - ball.radius;
    const ballHeight = 2 * ball.radius;

    return (
        isOverlapping(ballX, ballWidth, obstacle.x, obstacle.width) &&
        isOverlapping(ballY, ballHeight, obstacle.y, obstacle.height)
    );
}

function update(obstacle1, obstacle2) {
    calculatePosition();

    ball.isCollided = isCollision(obstacle1) || isCollision(obstacle2);
}

function isOverlapping(r1Start, r1Width, r2Start, r2Width) {
    const r1End = r1Start + r1Width;
    const r2End = r2Start + r2Width;

    return !(r1End < r2Start || r1Start > r2End);
}

function reset() {
    ball.position.y = r.GetScreenHeight() / 2;
}

module.exports = { ball, draw, calculatePosition, isCollision, update, reset };
