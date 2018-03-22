webpackJsonp([1],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/marvel/marvel.module": [
		270,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marvel_marvel__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.pushPage = __WEBPACK_IMPORTED_MODULE_2__marvel_marvel__["a" /* MarvelPage */];
        this.im = false;
        this.ca = false;
        this.hulk = false;
        this.bw = false;
    }
    HomePage.prototype.changeim = function () {
        if (this.im) {
            this.ca = false;
            this.bw = false;
            this.hulk = false;
        }
    };
    HomePage.prototype.changeca = function () {
        if (this.ca) {
            this.im = false;
            this.bw = false;
            this.hulk = false;
        }
    };
    HomePage.prototype.changehulk = function () {
        if (this.hulk) {
            this.im = false;
            this.bw = false;
            this.ca = false;
        }
    };
    HomePage.prototype.changebw = function () {
        if (this.bw) {
            this.im = false;
            this.hulk = false;
            this.ca = false;
        }
    };
    HomePage.prototype.navigate = function () {
        if (this.im) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__marvel_marvel__["a" /* MarvelPage */], {
                character: "Iron Man",
                images: "iman.png",
                description: "A wealthy American business magnate, playboy, and ingenious scientist, Anthony Edward Tony Stark suffers a severe chest injury during a kidnapping in which his captors attempt to force him to build a weapon of mass destruction. He instead creates a powered suit of armor to save his life and escape captivity. Later, Stark augments his suit with weapons and other technological devices he designed through his company, Stark Industries. He uses the suit and successive versions to protect the world as Iron Man, while at first concealing his true identity",
            });
        }
        else if (this.ca) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__marvel_marvel__["a" /* MarvelPage */], {
                character: "Captain America",
                images: "cam.png",
                description: "Frail, sickly young man who is enhanced to the peak of human ability by an experimental serum in order to aid the United States war effort. Evans, who previously worked with Marvel as the Human Torch in the Fantastic Four film series, said he declined the part three times before signing a six-picture deal with Marvel, explaining that, At the time, I remember telling a buddy of mine, 'If the movie bombs. If the movie hits. I was just scared. I realized my whole decision-making process was fear-based, and you never want to make a decision out of fear. I can't believe I was almost too chicken to play Captain America.Evans ultimately agreed to the role, saying, I think Marvel is doing a lot of good things right now, and its a fun character. ... I think the story of Steve Rogers is great. "
            });
        }
        else if (this.hulk) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__marvel_marvel__["a" /* MarvelPage */], {
                character: "The Incredible Hulk",
                images: "incred.png",
                description: "During the experimental detonation of a gamma bomb, scientist Robert Bruce Banner saves teenager Rick Jones who has driven onto the testing field; Banner pushes Jones into a trench to save him, but is hit with the blast, absorbing massive amounts of gamma radiation. He awakens later seemingly unscathed, but that night transforms into a lumbering grey form. A pursuing soldier dubs the creature a hulk.Originally, it was believed that Banner transformations into the Hulk were caused by sunset and undone at sunrise, but later, after Rick witnessed Banner turn into Hulk at daytime following a failed attempt by Ross' men to shoot the Hulk into space, it was discovered to be caused by anger. Banner was cured in The Incredible Hulk #4, but chose to restore Hulk's powers with Banner's intelligence. The gamma-ray machine needed to affect the transformation-induced side effects that made Banner temporarily sick and weak when returned to his normal state."
            });
        }
        else if (this.bw) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__marvel_marvel__["a" /* MarvelPage */], {
                character: "Black Widow",
                images: "black.png",
                description: "Natasha was born in Stalingrad (now Volgograd), Russia. The first and best-known Black Widow is a Russian agent trained as a spy, martial artist, and sniper, and outfitted with an arsenal of high-tech weaponry, including a pair of wrist-mounted energy weapons dubbed her Widow's Bite. She wears no costume during her first few appearances but simply evening wear and a veil. Romanova eventually defects to the U.S. for reasons that include her love for the reluctant-criminal turned superhero archer, Hawkeye."
            });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__marvel_marvel__["a" /* MarvelPage */], {
                character: "None",
                images: "none.png",
                description: "None of the character of the list Selected. Please select a Marvel Character from the list"
            });
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\BAMS\Desktop\Course Documents\Mobile web development\Assignment7\firstapp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      My First Ionic App\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    \n      <ion-item>\n        \n        <ion-avatar item-right >\n          <img src="assets/imgs/avatar.png">\n        </ion-avatar>\n        <h2>Avtar Singh Bamra</h2>\n        <p>March 16, 2017</p>\n      </ion-item>\n      <img src="assets/imgs/1.jpg">\n      <ion-card-content>\n        <p>Image Manipulation workshop was held under the banner of CSI-PIIT on 22nd February, 2013 was a hands-on session conducted by Mr. Avtar Singh Bamra. The workshop started with a brief introduction about the tools and options available for image manipulation.</p>\n      </ion-card-content>\n    \n      <ion-row>\n        <ion-col>\n          <button ion-button icon-left clear large>\n            <ion-icon name="thumbs-up"></ion-icon>\n            <div>150 Likes</div>\n          </button>\n          <button ion-button icon-right clear large>\n              <ion-icon name="thumbs-down"></ion-icon>\n              <div>15 Dislikes</div>\n            </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <button ion-button [navPush]="pushPage" [navParams]="{character:\'Marvel Studios\', images:\'marvel.png\', description: \'Marvel Studios, LLC (originally known as Marvel Films from 1993 to 1996) is an American motion picture studio based at The Walt Disney Studios in Burbank, California and is a subsidiary of Walt Disney Studios, itself a wholly owned division of The Walt Disney Company, with film producer Kevin Feige serving as president. Previously, the studio was a subsidiary of Marvel Entertainment until Disney reorganized the companies in August 2015.\'}" full color="danger" >Go to Marvel Page (Using navPush property)</button>\n    \n        <ion-list>\n            <ion-item>\n              <ion-thumbnail item-start>\n                <img src="assets/imgs/im.png">\n              </ion-thumbnail>\n              <ion-label>Iron Man</ion-label>\n              <ion-toggle [(ngModel)]="im" color="danger" value="im" checked="false" (ionChange)="changeim()"></ion-toggle>\n            </ion-item>\n            <ion-item>\n                <ion-thumbnail item-start>\n                  <img src="assets/imgs/ca.png">\n                </ion-thumbnail>\n                <ion-label>Captain America</ion-label>\n                <ion-toggle [(ngModel)]="ca" color="default" value="ca" checked="false" (ionChange)="changeca()"></ion-toggle>\n              </ion-item>\n              <ion-item>\n                  <ion-thumbnail item-start>\n                    <img src="assets/imgs/hulk.png">\n                  </ion-thumbnail>\n                  <ion-label>The Incredible Hulk</ion-label>\n                  <ion-toggle [(ngModel)]="hulk" color="secondary" value="hulk" checked="false" (ionChange)="changehulk()"></ion-toggle>\n                </ion-item>\n                <ion-item>\n                    <ion-thumbnail item-start>\n                      <img src="assets/imgs/bw.png">\n                    </ion-thumbnail>\n                    <ion-label>Black Widow</ion-label>\n                    <ion-toggle [(ngModel)]="bw" color="dark" value="ca" checked="false" (ionChange)="changebw()"></ion-toggle>\n                  </ion-item>\n          </ion-list>\n          <button ion-button (click)="navigate()" full color="dark">Toggle Character and tap here (using Push() Cmd)</button>\n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\BAMS\Desktop\Course Documents\Mobile web development\Assignment7\firstapp\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_marvel_marvel__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_marvel_marvel__["a" /* MarvelPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/marvel/marvel.module#MarvelPageModule', name: 'MarvelPage', segment: 'marvel', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_marvel_marvel__["a" /* MarvelPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\BAMS\Desktop\Course Documents\Mobile web development\Assignment7\firstapp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\BAMS\Desktop\Course Documents\Mobile web development\Assignment7\firstapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarvelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MarvelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MarvelPage = /** @class */ (function () {
    function MarvelPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.charName = navParams.get("character");
        this.image = navParams.get("images");
        this.desc = navParams.get("description");
    }
    MarvelPage.prototype.ionViewDidLoad = function () {
    };
    MarvelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-marvel',template:/*ion-inline-start:"C:\Users\BAMS\Desktop\Course Documents\Mobile web development\Assignment7\firstapp\src\pages\marvel\marvel.html"*/'<!--\n  Generated template for the MarvelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>marvel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <img src="assets/imgs/{{image}}"/>\n    <ion-card-content>\n      <ion-card-title>\n        {{charName}}\n        </ion-card-title>\n      <p>\n       {{desc}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\BAMS\Desktop\Course Documents\Mobile web development\Assignment7\firstapp\src\pages\marvel\marvel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MarvelPage);
    return MarvelPage;
}());

//# sourceMappingURL=marvel.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map