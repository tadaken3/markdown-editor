/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 199);
/******/ })
/************************************************************************/
/******/ ({

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = __webpack_require__(198);

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileManager = function () {
    function FileManager() {
        _classCallCheck(this, FileManager);

        this.filePath = "";
    }

    _createClass(FileManager, [{
        key: "saveFile",
        value: function saveFile(filePath, text) {
            var _this = this;

            return new Promise(function (resolve) {
                _fs2.default.writeFileSync(filePath, text);
                _this.filePath = filePath;
                resolve();
            });
        }
    }, {
        key: "readFile",
        value: function readFile(filePath) {
            var _this2 = this;

            return new Promise(function (resolve) {
                var text = _fs2.default.readFileSync(filePath, 'utf8');
                _this2.filePath = filePath;
                resolve(text);
            });
        }
    }, {
        key: "overwriteFile",
        value: function overwriteFile(text) {
            return this.saveFile(this.filePath, text);
        }
    }, {
        key: "writePdf",
        value: function writePdf(filePath, pdf) {
            return new Promise(function (resolve) {
                _fs2.default.writeFileSync(filePath, pdf);
                resolve();
            });
        }
    }]);

    return FileManager;
}();

function createFileManager() {
    return new FileManager();
}

exports.default = createFileManager;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _electron = __webpack_require__(19);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainWindow = function () {
    function MainWindow() {
        var _this = this;

        _classCallCheck(this, MainWindow);

        this.window = new _electron.BrowserWindow({ width: 800, height: 600 });
        this.window.loadURL("file://" + __dirname + "/../../index.html");
        this.window.on("close", function () {
            _this.window = null;
        });
    }

    _createClass(MainWindow, [{
        key: "requestText",
        value: function requestText() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.window.webContents.send("REQUEST_TEXT");
                _electron.ipcMain.once("REPLY_TEXT", function (_e, text) {
                    return resolve(text);
                });
            });
        }
    }, {
        key: "sendText",
        value: function sendText(text) {
            this.window.webContents.send("SEND_TEXT", text);
        }
    }]);

    return MainWindow;
}();

function createMainWindow() {
    return new MainWindow();
}

exports.default = createMainWindow;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _electron = __webpack_require__(19);

var _events = __webpack_require__(197);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PDFWindow = function (_EventEmitter) {
    _inherits(PDFWindow, _EventEmitter);

    function PDFWindow(text) {
        _classCallCheck(this, PDFWindow);

        var _this = _possibleConstructorReturn(this, (PDFWindow.__proto__ || Object.getPrototypeOf(PDFWindow)).call(this, text));

        _this.window = new _electron.BrowserWindow({ show: false });
        _this.window.loadURL("file://" + __dirname + "/../../pdf.html");
        _electron.ipcMain.once("REQUEST_TEXT", function (e) {
            e.returnValue = text;
        });
        _electron.ipcMain.once("RENDERED_CONTENTS", function () {
            _this.emit("RENDERED_CONTENTS");
        });
        return _this;
    }

    _createClass(PDFWindow, [{
        key: "generatePDF",
        value: function generatePDF() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                _this2.window.webContents.printToPDF({}, function (error, data) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
        }
    }, {
        key: "close",
        value: function close() {
            var _this3 = this;

            this.window.close();
            this.window.on("closed", function () {
                _this3.window = null;
            });
        }
    }]);

    return PDFWindow;
}(_events2.default);

function createPDFWindow(contents, fileManager) {
    return new PDFWindow(contents, fileManager);
}

exports.default = createPDFWindow;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _electron = __webpack_require__(19);

function setAppMenu(options) {
    var template = [{
        label: "File",
        submenu: [{ label: "Open", accelerator: "CmdOrCtrl+O", click: function click() {
                return options.openFile();
            } }, { label: "Save", accelerator: "CmdOrCtrl+S", click: function click() {
                return options.saveFile();
            } }, { label: "Save As...", click: function click() {
                return options.saveAsNewFile();
            } }, { label: "Export PDF", click: function click() {
                return options.exportPDF();
            } }]
    }, {
        label: "Edit",
        submenu: [{ label: "Copy", accelerator: "CmdOrCtrl+C", role: "copy" }, { label: "Paste", accelerator: "CmdOrCtrl+P", role: "paste" }, { label: "Cut", accelerator: "CmdOrCtrl+X", role: "cut" }, { label: "Select All", accelerator: "CmdOrCtrl+A", role: "selectall" }]
    }, {
        label: "View",
        submenu: [{ label: "Toggle DevTools",
            accelerator: "CmdOrCtrl+L",
            click: function click() {
                return _electron.BrowserWindow.getFocusedWindow().toggleDevTools();
            }
        }]
    }];
    if (process.platform === "darwin") {
        template.unshift({ label: "MarkdownEditor",
            submenu: [{ label: "Quit", accelerator: "CmdOrCtrl+Q", click: function click() {
                    return _electron.app.quit();
                } }]
        });
    }
    _electron.Menu.setApplicationMenu(_electron.Menu.buildFromTemplate(template));
}
exports.default = setAppMenu;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _electron = __webpack_require__(19);

function showExportPDFDialog() {
    return new Promise(function (resolve, reject) {
        var file = _electron.dialog.showSaveDialog({
            title: "export as PDF",
            filters: [{ name: "pdf file", extensions: ["pdf"] }]
        });
        if (file) {
            resolve(file);
        } else {
            reject();
        }
    });
}

exports.default = showExportPDFDialog;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _electron = __webpack_require__(19);

function showOpenFileDialog() {
    return new Promise(function (resolve, reject) {
        var files = _electron.dialog.showOpenDialog({
            title: "open",
            properties: ["openFile"],
            filters: [{ name: "markdown file", extensions: ["md"] }]
        });

        if (files && files.length > 0) {
            resolve(files[0]);
        } else {
            reject();
        }
    });
}

exports.default = showOpenFileDialog;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _electron = __webpack_require__(19);

function showSaveAsNewFileDialog() {
    return new Promise(function (resolve, reject) {
        var file = _electron.dialog.showSaveDialog({
            title: "save",
            filters: [{ name: "markdown file", extensions: ["md"] }]
        });
        if (file) {
            resolve(file);
        } else {
            reject();
        }
    });
}

exports.default = showSaveAsNewFileDialog;

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _electron = __webpack_require__(19);

var _createMainWindow = __webpack_require__(184);

var _createMainWindow2 = _interopRequireDefault(_createMainWindow);

var _setAppMenu = __webpack_require__(186);

var _setAppMenu2 = _interopRequireDefault(_setAppMenu);

var _showSaveAsNewFileDialog = __webpack_require__(189);

var _showSaveAsNewFileDialog2 = _interopRequireDefault(_showSaveAsNewFileDialog);

var _createFileManager = __webpack_require__(183);

var _createFileManager2 = _interopRequireDefault(_createFileManager);

var _showOpenFileDialog = __webpack_require__(188);

var _showOpenFileDialog2 = _interopRequireDefault(_showOpenFileDialog);

var _createPDFWindow = __webpack_require__(185);

var _createPDFWindow2 = _interopRequireDefault(_createPDFWindow);

var _showExportPDFDialog = __webpack_require__(187);

var _showExportPDFDialog2 = _interopRequireDefault(_showExportPDFDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainWindow = null;
var fileManager = null;

function openFile() {
    console.log("openFile");
    (0, _showOpenFileDialog2.default)().then(function (filePath) {
        return fileManager.readFile(filePath);
    }).then(function (text) {
        return mainWindow.sendText(text);
    }).catch(function (error) {
        console.log(error);
    });
}

function saveFile() {
    console.log("saveFile");
    if (!fileManager.filePath) {
        saveAsNewFile();
        return;
    }
    mainWindow.requestText().then(function (text) {
        return fileManager.overwriteFile(text);
    }).catch(function (error) {
        console.log(error);
    });
}

function saveAsNewFile() {
    console.log("saveAsNewFile");
    Promise.all([(0, _showSaveAsNewFileDialog2.default)(), mainWindow.requestText()]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            filePath = _ref2[0],
            text = _ref2[1];

        return fileManager.saveFile(filePath, text);
    }).catch(function (error) {
        console.log(error);
    });
}

function exportPDF() {
    Promise.all([(0, _showExportPDFDialog2.default)(), mainWindow.requestText()]).then(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            filePath = _ref4[0],
            text = _ref4[1];

        var pdfWindow = (0, _createPDFWindow2.default)(text);
        pdfWindow.on("RENDERED_CONTENTS", function () {
            pdfWindow.generatePDF().then(function (pdf) {
                return fileManager.writePdf(filePath, pdf);
            }).then(function () {
                return pdfWindow.close();
            }).catch(function (error) {
                console.log(error);
                pdfWindow.close();
            });
        });
    }).catch(function (error) {
        console.log(error);
    });
}

_electron.app.on("ready", function () {
    mainWindow = (0, _createMainWindow2.default)();
    fileManager = (0, _createFileManager2.default)();
    (0, _setAppMenu2.default)({ openFile: openFile, saveFile: saveFile, saveAsNewFile: saveAsNewFile, exportPDF: exportPDF });
});

_electron.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        _electron.app.quit();
    }
});

_electron.app.on("activate", function (_e, hasVisibleWindows) {
    if (!hasVisibleWindows) {
        mainWindow = (0, _createMainWindow2.default)();
    }
});

/***/ })

/******/ });
//# sourceMappingURL=index.js.map