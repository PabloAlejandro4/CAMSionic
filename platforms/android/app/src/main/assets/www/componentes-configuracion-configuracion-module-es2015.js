(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-configuracion-configuracion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/configuracion/configuracion.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/configuracion/configuracion.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button default-href=\"home\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Configuracion</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/componentes/configuracion/configuracion-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/componentes/configuracion/configuracion-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ConfiguracionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionPageRoutingModule", function() { return ConfiguracionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _configuracion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuracion.page */ "./src/app/componentes/configuracion/configuracion.page.ts");




const routes = [
    {
        path: '',
        component: _configuracion_page__WEBPACK_IMPORTED_MODULE_3__["ConfiguracionPage"]
    }
];
let ConfiguracionPageRoutingModule = class ConfiguracionPageRoutingModule {
};
ConfiguracionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfiguracionPageRoutingModule);



/***/ }),

/***/ "./src/app/componentes/configuracion/configuracion.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/componentes/configuracion/configuracion.module.ts ***!
  \*******************************************************************/
/*! exports provided: ConfiguracionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionPageModule", function() { return ConfiguracionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _configuracion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configuracion-routing.module */ "./src/app/componentes/configuracion/configuracion-routing.module.ts");
/* harmony import */ var _configuracion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuracion.page */ "./src/app/componentes/configuracion/configuracion.page.ts");







let ConfiguracionPageModule = class ConfiguracionPageModule {
};
ConfiguracionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _configuracion_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfiguracionPageRoutingModule"]
        ],
        declarations: [_configuracion_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracionPage"]]
    })
], ConfiguracionPageModule);



/***/ }),

/***/ "./src/app/componentes/configuracion/configuracion.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/componentes/configuracion/configuracion.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2NvbmZpZ3VyYWNpb24vY29uZmlndXJhY2lvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/configuracion/configuracion.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/componentes/configuracion/configuracion.page.ts ***!
  \*****************************************************************/
/*! exports provided: ConfiguracionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionPage", function() { return ConfiguracionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ConfiguracionPage = class ConfiguracionPage {
    constructor() { }
    ngOnInit() {
    }
};
ConfiguracionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-configuracion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./configuracion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/configuracion/configuracion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./configuracion.page.scss */ "./src/app/componentes/configuracion/configuracion.page.scss")).default]
    })
], ConfiguracionPage);



/***/ })

}]);
//# sourceMappingURL=componentes-configuracion-configuracion-module-es2015.js.map