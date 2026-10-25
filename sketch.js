const r = require("raylib");
const obstacle = require("./obstacle.js");
const ball = require("./ball.js");
const menuWindow = require("./menuWindow.js");

let obstacle1;
let obstacle2;

let score = 0;

function resetGame() {
    initializeObstacle(r.GetScreenWidth(), r.GetScreenHeight());
    initializeScore();
    ball.reset();
}

function updateScore() {
    score++;
}

function update() {
    ball.update(obstacle1, obstacle2);

    obstacle.update(obstacle1);
    obstacle.update(obstacle2);

    updateScore();

    if (ball.ball.isCollided) menuWindow.draw(score, resetGame);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    ball.draw();

    obstacle.draw(obstacle1);
    obstacle.draw(obstacle2);

    r.EndDrawing();
}

function initializeScore() {
    score = 0;
}

function initializeObstacle(xCoordinate, y) {
    obstacle1 = obstacle.initialize(xCoordinate, 0, 30, 500);
    obstacle2 = obstacle.initialize(xCoordinate * (3 / 2), 600, 80, y);
}

function setup(width, height) {
    const fps = 60;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(width, height, "flappy_ball");
    r.SetTargetFPS(fps);

    initializeObstacle(width, height);
}

function running() {
    return !r.WindowShouldClose();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    setup,
    update,
    draw,
    running,
    teardown,
};
