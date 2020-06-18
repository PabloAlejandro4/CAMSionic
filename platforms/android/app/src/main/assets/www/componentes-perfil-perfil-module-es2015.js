(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-perfil-perfil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/perfil/perfil.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/perfil/perfil.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button default-href=\"home\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Mi Perfil</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card>\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-img src=\"assets/images/no-image.png\"></ion-img>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-item>\r\n                        <ion-label position=\"stacked\">Alias:\r\n                        </ion-label>\r\n                        <ion-input required type=\"text\" [(ngModel)]=\"user.alias\" disabled=\"{{!editar}}\"></ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"stacked\">Expediente:\r\n                        </ion-label>\r\n                        <ion-input required type=\"text\" [(ngModel)]=\"user.expediente\" disabled=\"{{!editar}}\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">Nombre:\r\n            </ion-label>\r\n            <ion-input required type=\"text\" disabled=\"{{!editar}}\" [(ngModel)]=\"user.name\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">Telefono:\r\n            </ion-label>\r\n            <ion-input required type=\"text\" disabled=\"{{!editar}}\" [(ngModel)]=\"user.telefono\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Area</ion-label>\r\n            <ion-select [(ngModel)]=\"user.area\" disabled=\"{{!editar}}\">\r\n                <ion-select-option value=\"telmex\">Fuerza</ion-select-option>\r\n                <ion-select-option value=\"telcel\">Otra</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>CM</ion-label>\r\n            <ion-select [(ngModel)]=\"user.cm\" disabled=\"{{!editar}}\">\r\n                <ion-select-option value=\"telmex\">Aguascalientes</ion-select-option>\r\n                <ion-select-option value=\"telcel\">Guadalajara</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">Email:\r\n            </ion-label>\r\n            <ion-input required type=\"text\" disabled=\"{{!editar}}\" [(ngModel)]=\"user.email\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">Contraseña:\r\n            </ion-label>\r\n            <ion-input required type=\"password\" value=\"hola\" disabled=\"{{!editar}}\"></ion-input>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"editar\">\r\n            <ion-label position=\"stacked\">Confirmar Contraseña:\r\n            </ion-label>\r\n            <ion-input required type=\"text\"></ion-input>\r\n        </ion-item>\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-toggle [(ngModel)]=\"editar\" style=\"float: left;\"></ion-toggle>\r\n\r\n                    <ion-label style=\"float: left; margin-top: 12px;\">Editar</ion-label>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-button *ngIf=\"editar\" (click)=\"validarAlert()\">Guardar</ion-button>\r\n\r\n\r\n\r\n                </ion-col>\r\n\r\n            </ion-row>\r\n\r\n        </ion-grid>\r\n\r\n\r\n        <ion-grid>\r\n            <ion-col></ion-col>\r\n\r\n        </ion-grid>\r\n\r\n    </ion-card>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/componentes/perfil/perfil-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/componentes/perfil/perfil-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function() { return PerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page */ "./src/app/componentes/perfil/perfil.page.ts");




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ "./src/app/componentes/perfil/perfil.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/componentes/perfil/perfil.module.ts ***!
  \*****************************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-routing.module */ "./src/app/componentes/perfil/perfil-routing.module.ts");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "./src/app/componentes/perfil/perfil.page.ts");







let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"]
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })
], PerfilPageModule);



/***/ }),

/***/ "./src/app/componentes/perfil/perfil.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/componentes/perfil/perfil.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-img {\n  border-radius: 60%;\n  margin-left: 30px;\n  width: 100px;\n}\n\nion-item {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\nion-button {\n  float: right;\n  -webkit-margin-after: 10px;\n          margin-block-end: 10px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcGVyZmlsL0M6XFxVc2Vyc1xcRW1tYW51ZWxPcnRpelxcRG9jdW1lbnRzXFxFc3RhZGlhc1RTVVxcQ0FNUy9zcmNcXGFwcFxcY29tcG9uZW50ZXNcXHBlcmZpbFxccGVyZmlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvcGVyZmlsL3BlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLDBCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvcGVyZmlsL3BlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDYwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59IiwiaW9uLWltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDYwJTtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tYmxvY2stZW5kOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/perfil/perfil.page.ts":
/*!***************************************************!*\
  !*** ./src/app/componentes/perfil/perfil.page.ts ***!
  \***************************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




let PerfilPage = class PerfilPage {
    constructor() {
        this.user = {
            name: '',
            alias: '',
            expediente: '',
            telefono: '',
            email: '',
            area: '',
            cm: ''
        };
        this.editar = false;
        this.user = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].user;
    }
    editarUsuario() {
        if (this.editar) {
            console.log('validar');
            this.validarAlert();
        }
    }
    validarAlert() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Ingresa tu vieja contraseña para continuar',
            input: 'password',
            inputAttributes: {
                autocapitalize: 'off'
            },
            confirmButtonText: 'Aceptar',
            showLoaderOnConfirm: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'Escribe tu contraseña';
                }
            },
            preConfirm: (password) => {
                if (password === _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].password) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        icon: 'success',
                        title: `Correcto`,
                        timer: 1000,
                        showConfirmButton: false
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        icon: 'error',
                        title: `Contraseña incorrecta`,
                        timer: 1000,
                        showConfirmButton: false
                    });
                }
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.isLoading()
        });
    }
    ngOnInit() {
        console.log(this.user);
    }
};
PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./perfil.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/perfil/perfil.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./perfil.page.scss */ "./src/app/componentes/perfil/perfil.page.scss")).default]
    })
], PerfilPage);



/***/ })

}]);
//# sourceMappingURL=componentes-perfil-perfil-module-es2015.js.map