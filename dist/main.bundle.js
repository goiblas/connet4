webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-game></app-game>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_game_module__ = __webpack_require__("../../../../../src/app/game/game.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__game_game_module__["a" /* GameModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"player__wrap\">\n    <div *ngFor=\"let player of players\" class=\"player\" [class.actived]=\"player.actived\">\n      <div class=\"player__name\">\n        {{player.name}}\n      </div>\n      <div class=\"player__wins\">\n        {{player.wins}}\n      </div>\n    </div>\n  </div>\n</header>\n\n<main>\n<div class=\"board\">\n  <div class=\"board__horizontal\" *ngFor=\"let horizontal of board\">\n      <div *ngFor=\"let chip of horizontal\">\n          <div class=\"board__chip\" [ngClass]=\"{'player1': chip.symbol === 'x', 'player2': chip.symbol === 'o', 'newChip': chip.isNew, 'winChip': chip.isWin}\"></div>\n      </div>\n    </div>\n      <div class=\"board__btns\">\n          <div *ngFor=\"let i of columns\" class=\"columnBtn\" (click)=\"columnSeleted(i)\">\n        </div>\n      </div>\n</div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/game/game.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".player {\n  padding: 17px 20px;\n  min-width: 20vw;\n  background-color: rgba(0, 0, 0, 0.12);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .player__name {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  .player__wins {\n    font-weight: 700; }\n  .player.actived {\n    background-color: #fff;\n    box-shadow: rgba(0, 0, 0, 0.3) 0 5px 14px -6px; }\n  .player__wrap {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding: 0.5rem;\n    margin-bottom: 1rem; }\n\n.header {\n  padding: 1rem 0; }\n\n.board {\n  position: relative;\n  max-width: 620px;\n  margin: auto; }\n  .board__horizontal {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .board__horizontal > div {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      position: relative;\n      height: 14.3vw; }\n      @media (min-width: 616px) {\n        .board__horizontal > div {\n          height: 88px; } }\n  .board__btns {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .board__btns button {\n      margin: auto; }\n  .board__chip {\n    width: 100%;\n    padding-bottom: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.12); }\n    .board__chip::before, .board__chip::after {\n      content: '';\n      display: block;\n      position: absolute;\n      pointer-events: none; }\n    .board__chip::after {\n      width: 100%;\n      height: 100%;\n      z-index: 2;\n      background-image: url(\"https://goiblas.github.io/connet4/assets/clip-path.svg\");\n      background-size: 100.02%; }\n    .board__chip::before {\n      width: 90%;\n      height: 90%;\n      top: 5%;\n      left: 5%;\n      border-radius: 100%; }\n    .board__chip.player1::before {\n      background-color: #F9D984; }\n    .board__chip.player2::before {\n      background-color: #ED5F75; }\n    .board__chip.winChip::before {\n      background-color: #fff; }\n\n.board__horizontal:nth-child(1) .newChip::before {\n  box-shadow: rgba(255, 255, 255, 0.85) 0 0 20px;\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n  -webkit-animation: downChip 0.1s ease-in forwards, innerEnlighten 0.5s alternate infinite;\n          animation: downChip 0.1s ease-in forwards, innerEnlighten 0.5s alternate infinite; }\n\n.board__horizontal:nth-child(1) .newChip.winChip::before {\n  -webkit-animation: downChip 0.1s ease-in forwards;\n          animation: downChip 0.1s ease-in forwards; }\n\n.board__horizontal:nth-child(2) .newChip::before {\n  box-shadow: rgba(255, 255, 255, 0.85) 0 0 20px;\n  -webkit-transform: translateY(-200%);\n          transform: translateY(-200%);\n  -webkit-animation: downChip 0.2s ease-in forwards, innerEnlighten 0.5s alternate infinite;\n          animation: downChip 0.2s ease-in forwards, innerEnlighten 0.5s alternate infinite; }\n\n.board__horizontal:nth-child(2) .newChip.winChip::before {\n  -webkit-animation: downChip 0.2s ease-in forwards;\n          animation: downChip 0.2s ease-in forwards; }\n\n.board__horizontal:nth-child(3) .newChip::before {\n  box-shadow: rgba(255, 255, 255, 0.85) 0 0 20px;\n  -webkit-transform: translateY(-300%);\n          transform: translateY(-300%);\n  -webkit-animation: downChip 0.3s ease-in forwards, innerEnlighten 0.5s alternate infinite;\n          animation: downChip 0.3s ease-in forwards, innerEnlighten 0.5s alternate infinite; }\n\n.board__horizontal:nth-child(3) .newChip.winChip::before {\n  -webkit-animation: downChip 0.3s ease-in forwards;\n          animation: downChip 0.3s ease-in forwards; }\n\n.board__horizontal:nth-child(4) .newChip::before {\n  box-shadow: rgba(255, 255, 255, 0.85) 0 0 20px;\n  -webkit-transform: translateY(-400%);\n          transform: translateY(-400%);\n  -webkit-animation: downChip 0.4s ease-in forwards, innerEnlighten 0.5s alternate infinite;\n          animation: downChip 0.4s ease-in forwards, innerEnlighten 0.5s alternate infinite; }\n\n.board__horizontal:nth-child(4) .newChip.winChip::before {\n  -webkit-animation: downChip 0.4s ease-in forwards;\n          animation: downChip 0.4s ease-in forwards; }\n\n.board__horizontal:nth-child(5) .newChip::before {\n  box-shadow: rgba(255, 255, 255, 0.85) 0 0 20px;\n  -webkit-transform: translateY(-500%);\n          transform: translateY(-500%);\n  -webkit-animation: downChip 0.5s ease-in forwards, innerEnlighten 0.5s alternate infinite;\n          animation: downChip 0.5s ease-in forwards, innerEnlighten 0.5s alternate infinite; }\n\n.board__horizontal:nth-child(5) .newChip.winChip::before {\n  -webkit-animation: downChip 0.5s ease-in forwards;\n          animation: downChip 0.5s ease-in forwards; }\n\n.board__horizontal:nth-child(6) .newChip::before {\n  box-shadow: rgba(255, 255, 255, 0.85) 0 0 20px;\n  -webkit-transform: translateY(-600%);\n          transform: translateY(-600%);\n  -webkit-animation: downChip 0.6s ease-in forwards, innerEnlighten 0.5s alternate infinite;\n          animation: downChip 0.6s ease-in forwards, innerEnlighten 0.5s alternate infinite; }\n\n.board__horizontal:nth-child(6) .newChip.winChip::before {\n  -webkit-animation: downChip 0.6s ease-in forwards;\n          animation: downChip 0.6s ease-in forwards; }\n\n.columnBtn {\n  cursor: pointer;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%; }\n\n@-webkit-keyframes downChip {\n  80% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  90% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px); }\n  100% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n\n@keyframes downChip {\n  80% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  90% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px); }\n  100% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n\n@-webkit-keyframes innerEnlighten {\n  0% {\n    box-shadow: inset rgba(0, 0, 0, 0.15) 0 0 0 2000px; }\n  100% {\n    box-shadow: inset transparent 0 0 0 2000px; } }\n\n@keyframes innerEnlighten {\n  0% {\n    box-shadow: inset rgba(0, 0, 0, 0.15) 0 0 0 2000px; }\n  100% {\n    box-shadow: inset transparent 0 0 0 2000px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux_player_player_action__ = __webpack_require__("../../../../../src/redux/player/player.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_board_board_actions__ = __webpack_require__("../../../../../src/redux/board/board.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_service__ = __webpack_require__("../../../../../src/app/game/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameComponent = (function () {
    function GameComponent(store, utils) {
        this.store = store;
        this.utils = utils;
        this.locked = false;
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('board').subscribe(function (stateBoard) {
            _this.board = stateBoard;
            _this.columns = stateBoard[0].map(function (cell, index) { return index; });
        });
        this.store.select('player').subscribe(function (players) {
            _this.players = players;
            _this.currentPlayer = players.filter(function (p) { return p.actived; })[0];
        });
    };
    GameComponent.prototype.columnSeleted = function (v) {
        var _this = this;
        var h = this.utils.getHorizontal(this.board, v);
        if (h >= 0 && !this.locked) {
            var chip = {
                v: v,
                h: h,
                symbol: this.currentPlayer.symbol
            };
            var action = new __WEBPACK_IMPORTED_MODULE_3__redux_board_board_actions__["b" /* BoardAdd */](chip);
            this.store.dispatch(action);
            var win = this.utils.isWin(this.board, chip);
            if (win) {
                this.board = this.utils.enlighten(this.board, win);
                this.locked = true;
                var actionAddWin = new __WEBPACK_IMPORTED_MODULE_2__redux_player_player_action__["c" /* WinPlayerAction */](this.currentPlayer.name);
                this.store.dispatch(actionAddWin);
                setTimeout(function () { return _this.restart(); }, 3000);
            }
            else {
                this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__redux_player_player_action__["b" /* TOGGLE_PLAYER */] });
            }
        }
    };
    GameComponent.prototype.restart = function () {
        this.locked = false;
        var action_reset = new __WEBPACK_IMPORTED_MODULE_3__redux_board_board_actions__["c" /* BoardReset */]();
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__redux_player_player_action__["b" /* TOGGLE_PLAYER */] });
        this.store.dispatch(action_reset);
    };
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__("../../../../../src/app/game/game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game/game.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_4__utils_service__["a" /* UtilsService */]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game/game.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_component__ = __webpack_require__("../../../../../src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_app_reducer__ = __webpack_require__("../../../../../src/redux/app.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_service__ = __webpack_require__("../../../../../src/app/game/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var GameModule = (function () {
    function GameModule() {
    }
    GameModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["i" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__redux_app_reducer__["a" /* AppReducer */]),
                __WEBPACK_IMPORTED_MODULE_5__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                    maxAge: 25 //  Retains last 25 states
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__utils_service__["a" /* UtilsService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__game_component__["a" /* GameComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__game_component__["a" /* GameComponent */]]
        })
    ], GameModule);
    return GameModule;
}());



/***/ }),

/***/ "../../../../../src/app/game/utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilsService = (function () {
    function UtilsService() {
        this.directions = [
            { h: 0, v: 1 },
            { h: 0, v: -1 },
            { h: 1, v: 0 },
            { h: 1, v: 1 },
            { h: 1, v: -1 },
            { h: -1, v: 0 },
            { h: -1, v: 1 },
            { h: -1, v: -1 }
        ];
        this.amount = 4;
    }
    UtilsService.prototype.getHorizontal = function (matriz, col) {
        var getColumn = matriz.map(function (horizontal) { return horizontal[col]; }).reverse();
        var position = getColumn.findIndex(function (c) { return c.symbol === 'e'; });
        if (position >= 0) {
            position = (getColumn.length - 1) - position;
        }
        return position;
    };
    UtilsService.prototype.isWin = function (matriz, lastPoint) {
        var _loop_1 = function (dir) {
            var check = [];
            var _loop_2 = function (i) {
                var point = null;
                matriz.map(function (v, indexV) {
                    // vertical
                    if (indexV === lastPoint.h + (dir.v * i)) {
                        v.map(function (h, indexH) {
                            // horizontal
                            if (indexH === lastPoint.v + (dir.h * i)) {
                                point = {
                                    h: indexH,
                                    v: indexV,
                                    symbol: h.symbol
                                };
                            }
                        });
                    }
                });
                check.push(point);
            };
            for (var i = 0; i < this_1.amount; i++) {
                _loop_2(i);
            }
            if (check.length === this_1.amount && check.every(function (obj) { return obj && obj.symbol === check[0].symbol; })) {
                return { value: check };
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.directions; _i < _a.length; _i++) {
            var dir = _a[_i];
            var state_1 = _loop_1(dir);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return false;
    };
    UtilsService.prototype.enlighten = function (matriz, points) {
        for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
            var point = points_1[_i];
            matriz[point.v][point.h].isWin = true;
        }
        return matriz;
    };
    UtilsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/redux/app.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_player_reducer__ = __webpack_require__("../../../../../src/redux/player/player.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__board_board_reducer__ = __webpack_require__("../../../../../src/redux/board/board.reducer.ts");


var AppReducer = {
    board: __WEBPACK_IMPORTED_MODULE_1__board_board_reducer__["a" /* boardReducer */],
    player: __WEBPACK_IMPORTED_MODULE_0__player_player_reducer__["a" /* playerReducer */]
};


/***/ }),

/***/ "../../../../../src/redux/board/board.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_CHIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RESET_BOARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BoardAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BoardReset; });
var ADD_CHIP = '[Board] add';
var RESET_BOARD = '[Board] reset';
var BoardAdd = (function () {
    function BoardAdd(chip) {
        this.chip = chip;
        this.type = ADD_CHIP;
    }
    return BoardAdd;
}());

var BoardReset = (function () {
    function BoardReset() {
        this.type = RESET_BOARD;
    }
    return BoardReset;
}());



/***/ }),

/***/ "../../../../../src/redux/board/board.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = boardReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__board_actions__ = __webpack_require__("../../../../../src/redux/board/board.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chip_model__ = __webpack_require__("../../../../../src/redux/board/chip.model.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


// 6 x 7
var initial = [[new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */]()],
    [new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */]()],
    [new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */]()],
    [new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */]()],
    [new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */]()],
    [new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */](), new __WEBPACK_IMPORTED_MODULE_1__chip_model__["a" /* P */]()]];
function removeNews(board) {
    return board.map(function (h) {
        return h.map(function (v) {
            if (v.isNew) {
                return __assign({}, v, { isNew: false });
            }
            else {
                return v;
            }
        });
    });
}
function boardReducer(oldState, action) {
    if (oldState === void 0) { oldState = initial; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__board_actions__["a" /* ADD_CHIP */]: {
            return removeNews(oldState).map(function (h, indexH) {
                if (indexH === action.chip.h) {
                    return h.map(function (v, indexV) {
                        if (indexV === action.chip.v) {
                            return __assign({}, v, { isNew: true, symbol: action.chip.symbol });
                        }
                        return v;
                    });
                }
                return h;
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__board_actions__["d" /* RESET_BOARD */]: {
            return initial;
        }
        default: {
            return oldState;
        }
    }
}


/***/ }),

/***/ "../../../../../src/redux/board/chip.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return P; });
var P = (function () {
    function P(symbol, isNew, isWin) {
        if (symbol === void 0) { symbol = 'e'; }
        if (isNew === void 0) { isNew = false; }
        if (isWin === void 0) { isWin = false; }
        this.symbol = symbol;
        this.isNew = isNew;
        this.isWin = isWin;
    }
    return P;
}());



/***/ }),

/***/ "../../../../../src/redux/player/player.action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TOGGLE_PLAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_WIN; });
/* unused harmony export SetPlayerAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WinPlayerAction; });
var TOGGLE_PLAYER = '[Player] toggle';
var ADD_WIN = '[Player] add win';
var SetPlayerAction = (function () {
    function SetPlayerAction() {
        this.type = TOGGLE_PLAYER;
    }
    return SetPlayerAction;
}());

var WinPlayerAction = (function () {
    function WinPlayerAction(name) {
        this.name = name;
        this.type = ADD_WIN;
    }
    return WinPlayerAction;
}());



/***/ }),

/***/ "../../../../../src/redux/player/player.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = playerReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_action__ = __webpack_require__("../../../../../src/redux/player/player.action.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialPlayer = [
    {
        name: 'Jugador 1',
        actived: true,
        symbol: 'x',
        wins: 0
    },
    {
        name: 'Jugador 2',
        actived: false,
        symbol: 'o',
        wins: 0
    }
];
function playerReducer(oldState, action) {
    if (oldState === void 0) { oldState = initialPlayer; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__player_action__["b" /* TOGGLE_PLAYER */]: {
            return oldState.map(function (player) {
                return __assign({}, player, { actived: !player.actived });
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__player_action__["a" /* ADD_WIN */]: {
            return oldState.map(function (player) {
                if (player.name === action.name) {
                    return __assign({}, player, { wins: ++player.wins });
                }
                return player;
            });
        }
        default: {
            return oldState;
        }
    }
}


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map