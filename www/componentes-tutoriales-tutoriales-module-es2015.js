(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-tutoriales-tutoriales-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/tutoriales/tutoriales.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/tutoriales/tutoriales.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button default-href=\"home\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Tutorial</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/componentes/tutoriales/tutoriales-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/componentes/tutoriales/tutoriales-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: TutorialesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialesPageRoutingModule", function() { return TutorialesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tutoriales_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tutoriales.page */ "./src/app/componentes/tutoriales/tutoriales.page.ts");




const routes = [
    {
        path: '',
        component: _tutoriales_page__WEBPACK_IMPORTED_MODULE_3__["TutorialesPage"]
    }
];
let TutorialesPageRoutingModule = class TutorialesPageRoutingModule {
};
TutorialesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TutorialesPageRoutingModule);



/***/ }),

/***/ "./src/app/componentes/tutoriales/tutoriales.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/componentes/tutoriales/tutoriales.module.ts ***!
  \*************************************************************/
/*! exports provided: TutorialesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialesPageModule", function() { return TutorialesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tutoriales_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tutoriales-routing.module */ "./src/app/componentes/tutoriales/tutoriales-routing.module.ts");
/* harmony import */ var _tutoriales_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutoriales.page */ "./src/app/componentes/tutoriales/tutoriales.page.ts");







let TutorialesPageModule = class TutorialesPageModule {
};
TutorialesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tutoriales_routing_module__WEBPACK_IMPORTED_MODULE_5__["TutorialesPageRoutingModule"]
        ],
        declarations: [_tutoriales_page__WEBPACK_IMPORTED_MODULE_6__["TutorialesPage"]]
    })
], TutorialesPageModule);



/***/ }),

/***/ "./src/app/componentes/tutoriales/tutoriales.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/componentes/tutoriales/tutoriales.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3R1dG9yaWFsZXMvdHV0b3JpYWxlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/tutoriales/tutoriales.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/componentes/tutoriales/tutoriales.page.ts ***!
  \***********************************************************/
/*! exports provided: TutorialesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialesPage", function() { return TutorialesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TutorialesPage = class TutorialesPage {
    constructor() { }
    ngOnInit() {
    }
};
TutorialesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tutoriales',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tutoriales.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/tutoriales/tutoriales.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tutoriales.page.scss */ "./src/app/componentes/tutoriales/tutoriales.page.scss")).default]
    })
], TutorialesPage);



/***/ })

}]);
//# sourceMappingURL=componentes-tutoriales-tutoriales-module-es2015.js.map