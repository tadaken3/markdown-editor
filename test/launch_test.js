const Application = require("spectron").Application;
const electron = require("electron");
const path = require("path");
const assert = require("assert");

const app = new Application({
    path: electron,
    args: [path.join(__dirname,"..")]
});

describe("アプリケーションの起動テスト", function() {
    this.timeout(10000);
    beforeEach(function() {
        return app.start();
    });
    afterEach(function() {
        return app.stop();
    });

    it("アプリケーションを起動するとウィンドウが1つ表示される", function(){
        return app.client.getWindowCount()
        .then((count) => assert.equal(count, 1));
    });
});
