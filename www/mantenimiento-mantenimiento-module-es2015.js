(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mantenimiento-mantenimiento-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mantenimiento/mantenimiento.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mantenimiento/mantenimiento.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button default-href=\"home\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Mantenimiento</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/mantenimiento/mantenimiento-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/mantenimiento/mantenimiento-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MantenimientoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MantenimientoPageRoutingModule", function() { return MantenimientoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mantenimiento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mantenimiento.page */ "./src/app/mantenimiento/mantenimiento.page.ts");




const routes = [
    {
        path: '',
        component: _mantenimiento_page__WEBPACK_IMPORTED_MODULE_3__["MantenimientoPage"]
    }
];
let MantenimientoPageRoutingModule = class MantenimientoPageRoutingModule {
};
MantenimientoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MantenimientoPageRoutingModule);



/***/ }),

/***/ "./src/app/mantenimiento/mantenimiento.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/mantenimiento/mantenimiento.module.ts ***!
  \*******************************************************/
/*! exports provided: MantenimientoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MantenimientoPageModule", function() { return MantenimientoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mantenimiento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mantenimiento-routing.module */ "./src/app/mantenimiento/mantenimiento-routing.module.ts");
/* harmony import */ var _mantenimiento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mantenimiento.page */ "./src/app/mantenimiento/mantenimiento.page.ts");







let MantenimientoPageModule = class MantenimientoPageModule {
};
MantenimientoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mantenimiento_routing_module__WEBPACK_IMPORTED_MODULE_5__["MantenimientoPageRoutingModule"]
        ],
        declarations: [_mantenimiento_page__WEBPACK_IMPORTED_MODULE_6__["MantenimientoPage"]]
    })
], MantenimientoPageModule);



/***/ }),

/***/ "./src/app/mantenimiento/mantenimiento.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/mantenimiento/mantenimiento.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbnRlbmltaWVudG8vbWFudGVuaW1pZW50by5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/mantenimiento/mantenimiento.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/mantenimiento/mantenimiento.page.ts ***!
  \*****************************************************/
/*! exports provided: MantenimientoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MantenimientoPage", function() { return MantenimientoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MantenimientoPage = class MantenimientoPage {
    constructor() { }
    ngOnInit() {
    }
};
MantenimientoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mantenimiento',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mantenimiento.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mantenimiento/mantenimiento.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mantenimiento.page.scss */ "./src/app/mantenimiento/mantenimiento.page.scss")).default]
    })
], MantenimientoPage);



/***/ })

}]);
//# sourceMappingURL=mantenimiento-mantenimiento-module-es2015.js.map