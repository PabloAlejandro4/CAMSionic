(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-calendario-calendario-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/calendario/calendario.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/calendario/calendario.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button default-href=\"home\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Calendario</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/componentes/calendario/calendario-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/componentes/calendario/calendario-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CalendarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioPageRoutingModule", function() { return CalendarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _calendario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendario.page */ "./src/app/componentes/calendario/calendario.page.ts");




const routes = [
    {
        path: '',
        component: _calendario_page__WEBPACK_IMPORTED_MODULE_3__["CalendarioPage"]
    }
];
let CalendarioPageRoutingModule = class CalendarioPageRoutingModule {
};
CalendarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalendarioPageRoutingModule);



/***/ }),

/***/ "./src/app/componentes/calendario/calendario.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/componentes/calendario/calendario.module.ts ***!
  \*************************************************************/
/*! exports provided: CalendarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioPageModule", function() { return CalendarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _calendario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendario-routing.module */ "./src/app/componentes/calendario/calendario-routing.module.ts");
/* harmony import */ var _calendario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendario.page */ "./src/app/componentes/calendario/calendario.page.ts");







let CalendarioPageModule = class CalendarioPageModule {
};
CalendarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _calendario_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalendarioPageRoutingModule"]
        ],
        declarations: [_calendario_page__WEBPACK_IMPORTED_MODULE_6__["CalendarioPage"]]
    })
], CalendarioPageModule);



/***/ }),

/***/ "./src/app/componentes/calendario/calendario.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/componentes/calendario/calendario.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2NhbGVuZGFyaW8vY2FsZW5kYXJpby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/calendario/calendario.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/componentes/calendario/calendario.page.ts ***!
  \***********************************************************/
/*! exports provided: CalendarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioPage", function() { return CalendarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CalendarioPage = class CalendarioPage {
    constructor() { }
    ngOnInit() {
    }
};
CalendarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendario',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calendario.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/calendario/calendario.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./calendario.page.scss */ "./src/app/componentes/calendario/calendario.page.scss")).default]
    })
], CalendarioPage);



/***/ })

}]);
//# sourceMappingURL=componentes-calendario-calendario-module-es2015.js.map