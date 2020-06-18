(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-actores-actores-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/actores/actores.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/actores/actores.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button default-href=\"home\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Actores, Act. y Tareas</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-button (click)=\"checarRed()\"> Toast</ion-button>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/componentes/actores/actores-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/componentes/actores/actores-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ActoresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActoresPageRoutingModule", function() { return ActoresPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _actores_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actores.page */ "./src/app/componentes/actores/actores.page.ts");




const routes = [
    {
        path: '',
        component: _actores_page__WEBPACK_IMPORTED_MODULE_3__["ActoresPage"]
    }
];
let ActoresPageRoutingModule = class ActoresPageRoutingModule {
};
ActoresPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActoresPageRoutingModule);



/***/ }),

/***/ "./src/app/componentes/actores/actores.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/componentes/actores/actores.module.ts ***!
  \*******************************************************/
/*! exports provided: ActoresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActoresPageModule", function() { return ActoresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _actores_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actores-routing.module */ "./src/app/componentes/actores/actores-routing.module.ts");
/* harmony import */ var _actores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actores.page */ "./src/app/componentes/actores/actores.page.ts");







let ActoresPageModule = class ActoresPageModule {
};
ActoresPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _actores_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActoresPageRoutingModule"]
        ],
        declarations: [_actores_page__WEBPACK_IMPORTED_MODULE_6__["ActoresPage"]]
    })
], ActoresPageModule);



/***/ }),

/***/ "./src/app/componentes/actores/actores.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/componentes/actores/actores.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FjdG9yZXMvYWN0b3Jlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/actores/actores.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/componentes/actores/actores.page.ts ***!
  \*****************************************************/
/*! exports provided: ActoresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActoresPage", function() { return ActoresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");



let ActoresPage = class ActoresPage {
    constructor(network) {
        this.network = network;
    }
    checarRed() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const disconnectSubscription = this.network.onDisconnect().subscribe(() => {
                console.log('network was disconnected :-(');
                this.enLinea = false;
                this.offLineToast();
            });
            const connectSubscription = this.network.onConnect().subscribe(() => {
                console.log('network connected!');
                this.enLinea = true;
                this.onLineToast();
                setTimeout(() => {
                    if (this.network.type === 'wifi') {
                        console.log('we got a wifi connection, woohoo!');
                        this.enLinea = true;
                        this.onLineToast();
                    }
                }, 3000);
            });
        });
    }
    onLineToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = document.createElement('ion-toast');
            toast.message = 'Conectado a Internet';
            toast.duration = 2000;
            document.body.appendChild(toast);
            return toast.present();
        });
    }
    offLineToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = document.createElement('ion-toast');
            toast.message = 'Sin Conexion a Internet';
            toast.duration = 2000;
            document.body.appendChild(toast);
            return toast.present();
        });
    }
    ngOnInit() {
    }
};
ActoresPage.ctorParameters = () => [
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"] }
];
ActoresPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-actores',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./actores.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/actores/actores.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./actores.page.scss */ "./src/app/componentes/actores/actores.page.scss")).default]
    })
], ActoresPage);



/***/ })

}]);
//# sourceMappingURL=componentes-actores-actores-module-es2015.js.map