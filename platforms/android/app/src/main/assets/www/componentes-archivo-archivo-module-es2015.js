(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-archivo-archivo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/archivo/archivo.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/archivo/archivo.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button default-href=\"home\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Archivo Muerto</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/componentes/archivo/archivo-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/componentes/archivo/archivo-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ArchivoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivoPageRoutingModule", function() { return ArchivoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _archivo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./archivo.page */ "./src/app/componentes/archivo/archivo.page.ts");




const routes = [
    {
        path: '',
        component: _archivo_page__WEBPACK_IMPORTED_MODULE_3__["ArchivoPage"]
    }
];
let ArchivoPageRoutingModule = class ArchivoPageRoutingModule {
};
ArchivoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ArchivoPageRoutingModule);



/***/ }),

/***/ "./src/app/componentes/archivo/archivo.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/componentes/archivo/archivo.module.ts ***!
  \*******************************************************/
/*! exports provided: ArchivoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivoPageModule", function() { return ArchivoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _archivo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./archivo-routing.module */ "./src/app/componentes/archivo/archivo-routing.module.ts");
/* harmony import */ var _archivo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./archivo.page */ "./src/app/componentes/archivo/archivo.page.ts");







let ArchivoPageModule = class ArchivoPageModule {
};
ArchivoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _archivo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArchivoPageRoutingModule"]
        ],
        declarations: [_archivo_page__WEBPACK_IMPORTED_MODULE_6__["ArchivoPage"]]
    })
], ArchivoPageModule);



/***/ }),

/***/ "./src/app/componentes/archivo/archivo.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/componentes/archivo/archivo.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FyY2hpdm8vYXJjaGl2by5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/archivo/archivo.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/componentes/archivo/archivo.page.ts ***!
  \*****************************************************/
/*! exports provided: ArchivoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivoPage", function() { return ArchivoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ArchivoPage = class ArchivoPage {
    constructor() { }
    ngOnInit() {
    }
};
ArchivoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-archivo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./archivo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/archivo/archivo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./archivo.page.scss */ "./src/app/componentes/archivo/archivo.page.scss")).default]
    })
], ArchivoPage);



/***/ })

}]);
//# sourceMappingURL=componentes-archivo-archivo-module-es2015.js.map