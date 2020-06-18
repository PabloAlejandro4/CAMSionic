(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-mantenimiento-mantenimiento-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mantenimiento/mantenimiento.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mantenimiento/mantenimiento.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button default-href=\"home\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Mantenimiento</ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card style=\"text-align: center;\">\n        <ion-card-header>\n            <ion-card-title>\n                FORANEAS\n            </ion-card-title>\n        </ion-card-header>\n    </ion-card>\n    <ion-list>\n        <ion-radio-group value=\"prioridad\">\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <ion-item>\n\n                            <ion-radio slot=\"start\" value=\"prioridad\"></ion-radio>\n                            <ion-label>Prioridad</ion-label>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col>\n                        <ion-item>\n                            <ion-label>Ruta</ion-label>\n                            <ion-radio slot=\"start\" value=\"ruta\"></ion-radio>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-radio-group>\n    </ion-list>\n    <ion-card>\n        <ion-card-header>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <ion-card-title>CLV</ion-card-title>\n                    </ion-col>\n                    <ion-col>\n                        <ion-card-subtitle>CALVILLO</ion-card-subtitle>\n\n                        <div style=\"background-color: green; float: right; height: max-content; width: 15px;\"> f</div>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <ion-card-subtitle>Foranea</ion-card-subtitle>\n                    </ion-col>\n                    <ion-col>\n                        <ion-card-subtitle>Juan Rosales R.</ion-card-subtitle>\n                    </ion-col>\n\n                </ion-row>\n            </ion-grid>\n        </ion-card-header>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/componentes/mantenimiento/mantenimiento-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/componentes/mantenimiento/mantenimiento-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: MantenimientoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MantenimientoPageRoutingModule", function() { return MantenimientoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mantenimiento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mantenimiento.page */ "./src/app/componentes/mantenimiento/mantenimiento.page.ts");




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

/***/ "./src/app/componentes/mantenimiento/mantenimiento.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/componentes/mantenimiento/mantenimiento.module.ts ***!
  \*******************************************************************/
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
/* harmony import */ var _mantenimiento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mantenimiento-routing.module */ "./src/app/componentes/mantenimiento/mantenimiento-routing.module.ts");
/* harmony import */ var _mantenimiento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mantenimiento.page */ "./src/app/componentes/mantenimiento/mantenimiento.page.ts");







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

/***/ "./src/app/componentes/mantenimiento/mantenimiento.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/componentes/mantenimiento/mantenimiento.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-subtitle {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWFudGVuaW1pZW50by9DOlxcVXNlcnNcXEVtbWFudWVsT3J0aXpcXERvY3VtZW50c1xcRXN0YWRpYXNUU1VcXENBTVMvc3JjXFxhcHBcXGNvbXBvbmVudGVzXFxtYW50ZW5pbWllbnRvXFxtYW50ZW5pbWllbnRvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvbWFudGVuaW1pZW50by9tYW50ZW5pbWllbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9tYW50ZW5pbWllbnRvL21hbnRlbmltaWVudG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iLCJpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/mantenimiento/mantenimiento.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/componentes/mantenimiento/mantenimiento.page.ts ***!
  \*****************************************************************/
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
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mantenimiento.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mantenimiento/mantenimiento.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mantenimiento.page.scss */ "./src/app/componentes/mantenimiento/mantenimiento.page.scss")).default]
    })
], MantenimientoPage);



/***/ })

}]);
//# sourceMappingURL=componentes-mantenimiento-mantenimiento-module-es2015.js.map