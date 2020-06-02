(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-usuarios-usuarios-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/usuarios/usuarios.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/usuarios/usuarios.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button default-href=\"home\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Usuarios</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/componentes/usuarios/usuarios-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/componentes/usuarios/usuarios-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: UsuariosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPageRoutingModule", function() { return UsuariosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _usuarios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuarios.page */ "./src/app/componentes/usuarios/usuarios.page.ts");




const routes = [
    {
        path: '',
        component: _usuarios_page__WEBPACK_IMPORTED_MODULE_3__["UsuariosPage"]
    }
];
let UsuariosPageRoutingModule = class UsuariosPageRoutingModule {
};
UsuariosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsuariosPageRoutingModule);



/***/ }),

/***/ "./src/app/componentes/usuarios/usuarios.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/componentes/usuarios/usuarios.module.ts ***!
  \*********************************************************/
/*! exports provided: UsuariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPageModule", function() { return UsuariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuarios-routing.module */ "./src/app/componentes/usuarios/usuarios-routing.module.ts");
/* harmony import */ var _usuarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuarios.page */ "./src/app/componentes/usuarios/usuarios.page.ts");







let UsuariosPageModule = class UsuariosPageModule {
};
UsuariosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsuariosPageRoutingModule"]
        ],
        declarations: [_usuarios_page__WEBPACK_IMPORTED_MODULE_6__["UsuariosPage"]]
    })
], UsuariosPageModule);



/***/ }),

/***/ "./src/app/componentes/usuarios/usuarios.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/componentes/usuarios/usuarios.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3VzdWFyaW9zL3VzdWFyaW9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/componentes/usuarios/usuarios.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/componentes/usuarios/usuarios.page.ts ***!
  \*******************************************************/
/*! exports provided: UsuariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPage", function() { return UsuariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UsuariosPage = class UsuariosPage {
    constructor() { }
    ngOnInit() {
    }
};
UsuariosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usuarios',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./usuarios.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/usuarios/usuarios.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./usuarios.page.scss */ "./src/app/componentes/usuarios/usuarios.page.scss")).default]
    })
], UsuariosPage);



/***/ })

}]);
//# sourceMappingURL=componentes-usuarios-usuarios-module-es2015.js.map