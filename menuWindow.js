const ball = require("./ball.js");
const obstacle = require("./obstacle.js");
const r = require("raylib");

function draw(score, resetGame) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawText(`Score : ${score}`, 300, 400, 80, r.YELLOW);
    r.DrawText(`Press Enter for Restart`, 400, 500, 20, r.GRAY);
    r.DrawText(`Press Q for Exit`, 450, 900, 20, r.RED);

    if (r.IsKeyPressed(r.KEY_Q)) {
        r.CloseWindow();
        r.CloseWindow();
    }
    if (r.IsKeyPressed(r.KEY_ENTER)) return resetGame();

    r.EndDrawing();
    draw(score, resetGame);
}

module.exports = {
    draw,
};
