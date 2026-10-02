const sketch = require("./sketch.js");

function loop() {
    while (sketch.running()) {
        sketch.update();
        sketch.draw();
    }
}

function main() {
    const width = 1000;
    const height = 1000;

    sketch.setup(width, height);
    loop();
    sketch.teardown();
}

main();
