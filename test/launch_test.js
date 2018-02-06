const Application = require("spectron").Application;
const electron = require("electron");
const path = require("path");

const app = new Application({
    path: electron,
    args: [path.join(__dirname,"..")]
});

app.start()
    .then(() => app.client.getWindowCount())
    .then((count) => {
        if (count === 1) {
            console.log("success test :)");
        } else {
            console.log("failed test :(");
        }
        app.stop();
    });
