(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-actividad-actividad-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/actividad/actividad.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/actividad/actividad.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button default-href=\"home\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Actividad</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-searchbar placeholder=\"Buscar actividad\" (ionInput)=\"getItems($event)\"></ion-searchbar>\n    <ion-button class=\"NuevaActividad\" color=\"success\" (click)=\"crearActividad()\" outline>Nueva actividad</ion-button>\n\n\n    <br><br> <br><br><br>\n\n    <ion-list>\n        <ion-card *ngFor=\"let actividad of servicioActividad.actividades\">\n            <ion-card-header>\n                <ion-card-title (click)=\"editarActividad(actividad.nombre)\">{{actividad.nombre}}</ion-card-title>\n            </ion-card-header>\n        </ion-card>\n    </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/componentes/actividad/actividad-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/componentes/actividad/actividad-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ActividadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadPageRoutingModule", function() { return ActividadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _actividad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actividad.page */ "./src/app/componentes/actividad/actividad.page.ts");




const routes = [
    {
        path: '',
        component: _actividad_page__WEBPACK_IMPORTED_MODULE_3__["ActividadPage"]
    }
];
let ActividadPageRoutingModule = class ActividadPageRoutingModule {
};
ActividadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActividadPageRoutingModule);



/***/ }),

/***/ "./src/app/componentes/actividad/actividad.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/componentes/actividad/actividad.module.ts ***!
  \***********************************************************/
/*! exports provided: ActividadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadPageModule", function() { return ActividadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _actividad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actividad-routing.module */ "./src/app/componentes/actividad/actividad-routing.module.ts");
/* harmony import */ var _actividad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actividad.page */ "./src/app/componentes/actividad/actividad.page.ts");







let ActividadPageModule = class ActividadPageModule {
};
ActividadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _actividad_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActividadPageRoutingModule"]
        ],
        declarations: [_actividad_page__WEBPACK_IMPORTED_MODULE_6__["ActividadPage"]]
    })
], ActividadPageModule);



/***/ }),

/***/ "./src/app/componentes/actividad/actividad.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/componentes/actividad/actividad.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  text-align: center;\n  margin-top: 10px;\n}\n\nion-button {\n  margin-top: 30px;\n  margin-right: 10px;\n  float: right;\n}\n\nbutton {\n  background-color: white;\n}\n\nion-searchbar {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWN0aXZpZGFkL0M6XFxVc2Vyc1xcRW1tYW51ZWxPcnRpelxcRG9jdW1lbnRzXFxFc3RhZGlhc1RTVVxcQ0FNUy9zcmNcXGFwcFxcY29tcG9uZW50ZXNcXGFjdGl2aWRhZFxcYWN0aXZpZGFkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvYWN0aXZpZGFkL2FjdGl2aWRhZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9hY3RpdmlkYWQvYWN0aXZpZGFkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tc2VhcmNoYmFyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iLCJpb24tY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/actividad/actividad.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/componentes/actividad/actividad.page.ts ***!
  \*********************************************************/
/*! exports provided: ActividadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadPage", function() { return ActividadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _crearactividad_crearactividad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crearactividad/crearactividad.page */ "./src/app/componentes/crearactividad/crearactividad.page.ts");
/* harmony import */ var _servicios_actividad_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios/actividad.service */ "./src/app/componentes/servicios/actividad.service.ts");
/* harmony import */ var _editaractividad_editaractividad_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editaractividad/editaractividad.page */ "./src/app/componentes/editaractividad/editaractividad.page.ts");






let ActividadPage = class ActividadPage {
    constructor(modalCtrl, alertCtrl, servicioActividad) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.servicioActividad = servicioActividad;
        this.mostrarContenido = false;
        this.items = [0];
        this.tareas = [{
                nombre: '',
                criticidad: ''
            }
        ];
        this.actividades = [];
        this.initializeItems();
    }
    ADD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.items.push(0);
            this.tareas.push({
                nombre: '',
                criticidad: ''
            });
        });
    }
    guardar() {
        console.log(this.tareas);
    }
    salvar(posicion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.tareas[posicion].nombre);
            console.log(this.tareas[posicion].criticidad);
        });
    }
    quit(posicion) {
        this.items.splice(posicion);
        this.tareas.splice(posicion);
    }
    alert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Atencion',
                message: 'Todos los movimientos que ha realizado seran descartados. ¿Confirma que desea proceder?',
                buttons: [
                    {
                        text: 'Descartar cambios',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            this.modalCtrl.dismiss();
                        }
                    },
                    {
                        text: 'Seguir editando',
                        handler: (blah) => {
                            console.log('Seguir editando');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    crearActividad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _crearactividad_crearactividad_page__WEBPACK_IMPORTED_MODULE_3__["CrearactividadPage"],
                componentProps: {
                    Actividad: 'Grupo electrogeno'
                }
            });
            return modal.present();
        });
    }
    editarActividad(nombre) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _editaractividad_editaractividad_page__WEBPACK_IMPORTED_MODULE_5__["EditaractividadPage"],
                componentProps: {
                    Actividad: nombre
                }
            });
            return modal.present();
        });
    }
    Mostrar() {
        this.mostrarContenido = !this.mostrarContenido;
    }
    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.actividades = this.actividades.filter((actividad) => {
                return (actividad.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }
    initializeItems() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /* this.actividades = ['Amsterdam',
             'Bogota',
             'Buenos Aires',
             'Cairo',
             'Dhaka',
             'Edinburgh',
             'Geneva',
             'Genoa',
             'Glasglow',
             'Hanoi',
             'Hong Kong',
             'Islamabad',
             'Istanbul',
             'Jakarta',
             'Kiel'];
             console.log(this.actividades);*/
            this.actividades = [];
            for (let act of this.servicioActividad.actividades) {
                this.actividades.push(act.nombre);
            }
            console.log(this.actividades);
        });
    }
    ngOnInit() {
    }
};
ActividadPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _servicios_actividad_service__WEBPACK_IMPORTED_MODULE_4__["ActividadService"] }
];
ActividadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-actividad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./actividad.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/actividad/actividad.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./actividad.page.scss */ "./src/app/componentes/actividad/actividad.page.scss")).default]
    })
], ActividadPage);



/***/ })

}]);
//# sourceMappingURL=componentes-actividad-actividad-module-es2015.js.map