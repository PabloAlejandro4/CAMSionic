(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-confirmarcodigo-confirmarcodigo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/confirmarcodigo/confirmarcodigo.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/confirmarcodigo/confirmarcodigo.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/recuperar'></ion-back-button>\n        </ion-buttons>\n        <ion-title>Confirmar codigo</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>Escribe el codigo de 6 digitos que ha llegado a tu correo </ion-card-title>\n            <br>\n            <ion-item style=\"margin-left: 20px; margin-right: 20px;\">\n                <ion-input placeholder=\"Codigo de confirmacion\" [(ngModel)]=\"codigo\"></ion-input>\n            </ion-item>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-item>\n                <ion-label position=\"floating\">Nueva Contraseña</ion-label>\n                <ion-input placeholder=\"Contraseña\" [(ngModel)]=\"password\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Confirmar Contraseña</ion-label>\n                <ion-input placeholder=\"Confirmar\" [(ngModel)]=\"confirmacion\"></ion-input>\n            </ion-item>\n            <br>\n            <ion-button expand=\"block\" color=\"success\" (click)=\"restablecer()\">\n                Restablecer</ion-button>\n        </ion-card-content>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/componentes/confirmarcodigo/confirmarcodigo-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/confirmarcodigo/confirmarcodigo-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ConfirmarcodigoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmarcodigoPageRoutingModule", function() { return ConfirmarcodigoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _confirmarcodigo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmarcodigo.page */ "./src/app/componentes/confirmarcodigo/confirmarcodigo.page.ts");




const routes = [
    {
        path: '',
        component: _confirmarcodigo_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmarcodigoPage"]
    }
];
let ConfirmarcodigoPageRoutingModule = class ConfirmarcodigoPageRoutingModule {
};
ConfirmarcodigoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmarcodigoPageRoutingModule);



/***/ }),

/***/ "./src/app/componentes/confirmarcodigo/confirmarcodigo.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/componentes/confirmarcodigo/confirmarcodigo.module.ts ***!
  \***********************************************************************/
/*! exports provided: ConfirmarcodigoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmarcodigoPageModule", function() { return ConfirmarcodigoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _confirmarcodigo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmarcodigo-routing.module */ "./src/app/componentes/confirmarcodigo/confirmarcodigo-routing.module.ts");
/* harmony import */ var _confirmarcodigo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmarcodigo.page */ "./src/app/componentes/confirmarcodigo/confirmarcodigo.page.ts");







let ConfirmarcodigoPageModule = class ConfirmarcodigoPageModule {
};
ConfirmarcodigoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confirmarcodigo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmarcodigoPageRoutingModule"]
        ],
        declarations: [_confirmarcodigo_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmarcodigoPage"]]
    })
], ConfirmarcodigoPageModule);



/***/ }),

/***/ "./src/app/componentes/confirmarcodigo/confirmarcodigo.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/componentes/confirmarcodigo/confirmarcodigo.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  text-align: center;\n  margin-top: 30px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\nion-item {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY29uZmlybWFyY29kaWdvL0M6XFxVc2Vyc1xcRW1tYW51ZWxPcnRpelxcRG9jdW1lbnRzXFxFc3RhZGlhc1RTVVxcQ0FNUy9zcmNcXGFwcFxcY29tcG9uZW50ZXNcXGNvbmZpcm1hcmNvZGlnb1xcY29uZmlybWFyY29kaWdvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvY29uZmlybWFyY29kaWdvL2NvbmZpcm1hcmNvZGlnby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2NvbmZpcm1hcmNvZGlnby9jb25maXJtYXJjb2RpZ28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59IiwiaW9uLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/componentes/confirmarcodigo/confirmarcodigo.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/componentes/confirmarcodigo/confirmarcodigo.page.ts ***!
  \*********************************************************************/
/*! exports provided: ConfirmarcodigoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmarcodigoPage", function() { return ConfirmarcodigoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let ConfirmarcodigoPage = class ConfirmarcodigoPage {
    constructor(router) {
        this.router = router;
    }
    restablecer() {
        this.router.navigate(['login']);
    }
    ngOnInit() {
    }
};
ConfirmarcodigoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ConfirmarcodigoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirmarcodigo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./confirmarcodigo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/confirmarcodigo/confirmarcodigo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./confirmarcodigo.page.scss */ "./src/app/componentes/confirmarcodigo/confirmarcodigo.page.scss")).default]
    })
], ConfirmarcodigoPage);



/***/ })

}]);
//# sourceMappingURL=componentes-confirmarcodigo-confirmarcodigo-module-es2015.js.map