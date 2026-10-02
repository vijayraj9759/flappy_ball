const r = require("raylib");
const obstacle = require("./obstacle.js");
const ball = require("./ball.js");

let obstacle1;
let obstacle2;

let score = 0;

function drawMenuWindow() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawText(`Score : ${score}`, 300, 400, 80, r.YELLOW);
    r.DrawText(`Press Enter for Restart`, 400, 500, 20, r.GRAY);
    r.DrawText(`Press Q for Exit`, 450, 900, 20, r.RED);

    if (r.IsKeyPressed(r.KEY_Q)) {
        teardown();
        teardown();
    }
    if (r.IsKeyPressed(r.KEY_ENTER)) return resetGame();

    r.EndDrawing();
    drawMenuWindow();
}

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

    if (ball.ball.isCollided) {
        drawMenuWindow();
    }
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

function initializeObstacle(width, height) {
    obstacle1 = obstacle.initialize(width, 0, 30, 500);
    obstacle2 = obstacle.initialize(width * (3 / 2), 600, 80, height);
}

function setup(width, height) {
    const FPS = 60;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(width, height, "flappy_ball");
    r.SetTargetFPS(FPS);

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
