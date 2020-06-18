(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-recuperar-recuperar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/recuperar/recuperar.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/recuperar/recuperar.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>Recuperar contraseña</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/login'></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <br>\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>Escribe tu cuenta de correo electronico y te enviaremos una contraseña temporal con la que podras ingresar al sistema y editar a continuacion si lo deseas.</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-item>\n                <ion-input placeholder=\"Correo electronico\" value=\"{{correoelectronico}}\" [(ngModel)]=\"correoelectronico\"></ion-input>\n            </ion-item>\n            <br>\n            <ion-button (click)=\"loading()\" expand=\"block\" color=\"success\">\n                <ion-icon name=\"paper-plane\"></ion-icon>Enviar</ion-button>\n        </ion-card-content>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/componentes/recuperar/recuperar-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/componentes/recuperar/recuperar-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RecuperarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarPageRoutingModule", function() { return RecuperarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _recuperar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recuperar.page */ "./src/app/componentes/recuperar/recuperar.page.ts");




const routes = [
    {
        path: '',
        component: _recuperar_page__WEBPACK_IMPORTED_MODULE_3__["RecuperarPage"]
    }
];
let RecuperarPageRoutingModule = class RecuperarPageRoutingModule {
};
RecuperarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecuperarPageRoutingModule);



/***/ }),

/***/ "./src/app/componentes/recuperar/recuperar.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/componentes/recuperar/recuperar.module.ts ***!
  \***********************************************************/
/*! exports provided: RecuperarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarPageModule", function() { return RecuperarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _recuperar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recuperar-routing.module */ "./src/app/componentes/recuperar/recuperar-routing.module.ts");
/* harmony import */ var _recuperar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recuperar.page */ "./src/app/componentes/recuperar/recuperar.page.ts");







let RecuperarPageModule = class RecuperarPageModule {
};
RecuperarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recuperar_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecuperarPageRoutingModule"]
        ],
        declarations: [_recuperar_page__WEBPACK_IMPORTED_MODULE_6__["RecuperarPage"]]
    })
], RecuperarPageModule);



/***/ }),

/***/ "./src/app/componentes/recuperar/recuperar.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/componentes/recuperar/recuperar.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  width: 280px;\n  margin: auto;\n}\n\nion-item {\n  width: 280px;\n  margin: auto;\n}\n\nion-card {\n  text-align: center;\n  margin-top: 30px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcmVjdXBlcmFyL0M6XFxVc2Vyc1xcRW1tYW51ZWxPcnRpelxcRG9jdW1lbnRzXFxFc3RhZGlhc1RTVVxcQ0FNUy9zcmNcXGFwcFxcY29tcG9uZW50ZXNcXHJlY3VwZXJhclxccmVjdXBlcmFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvcmVjdXBlcmFyL3JlY3VwZXJhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9yZWN1cGVyYXIvcmVjdXBlcmFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufSIsImlvbi1idXR0b24ge1xuICB3aWR0aDogMjgwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW9uLWl0ZW0ge1xuICB3aWR0aDogMjgwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW9uLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/recuperar/recuperar.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/componentes/recuperar/recuperar.page.ts ***!
  \*********************************************************/
/*! exports provided: RecuperarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarPage", function() { return RecuperarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _servicios_recuperar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/recuperar.service */ "./src/app/componentes/servicios/recuperar.service.ts");




let RecuperarPage = class RecuperarPage {
    constructor(loadingCtrl, recuperar) {
        this.loadingCtrl = loadingCtrl;
        this.recuperar = recuperar;
    }
    loading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loader = this.loadingCtrl.create({
                message: 'Por favor espere...',
                duration: 3000
            });
            (yield loader).present();
            this.recuperar.EnviarCorreo(this.correoelectronico);
        });
    }
    ngOnInit() {
    }
};
RecuperarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _servicios_recuperar_service__WEBPACK_IMPORTED_MODULE_3__["RecuperarService"] }
];
RecuperarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recuperar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./recuperar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/recuperar/recuperar.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./recuperar.page.scss */ "./src/app/componentes/recuperar/recuperar.page.scss")).default]
    })
], RecuperarPage);



/***/ }),

/***/ "./src/app/componentes/servicios/recuperar.service.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/servicios/recuperar.service.ts ***!
  \************************************************************/
/*! exports provided: RecuperarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarService", function() { return RecuperarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let RecuperarService = class RecuperarService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urlApi;
    }
    EnviarCorreo(valor) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.httpClient.post(this.url + 'login/forgot', {
                parametro: 'email',
                valor
            }).subscribe(data => {
                console.log(data);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Listo',
                    text: 'Se ha enviado tu contraseña, esto puede tardar unos minutos ',
                    showConfirmButton: true
                });
                this.router.navigate(['login']);
            }, (err) => {
                console.log(err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Error',
                    text: '',
                    showConfirmButton: true
                });
            });
        });
    }
};
RecuperarService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RecuperarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RecuperarService);



/***/ })

}]);
//# sourceMappingURL=componentes-recuperar-recuperar-module-es2015.js.map