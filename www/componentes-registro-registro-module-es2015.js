(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-registro-registro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/registro.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/registro.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title> Registro de Usuario</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/login'>Volver</ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content fullscreen>\n    <br>\n    <img src=\"assets/images/mp-image.png\" (click)=\"show()\" id=\"img\">\n    <ion-button *ngIf=\"base64Image\" (click)=\"quitarImagen()\">\n        <ion-icon name=\"close-circle-outline\"></ion-icon>\n    </ion-button>\n    <br>\n    <ion-item class=\"alias\">\n        <ion-label>Alias</ion-label>\n        <ion-input placeholder=\"Ejemplo SCM\" [(ngModel)]=\"alias\"></ion-input>\n    </ion-item>\n    <br><br>\n    <ion-item>\n        <ion-label>Empresa</ion-label>\n        <select name=\"cars\" id=\"cars\" [(ngModel)]=\"empresa\">\n          <optgroup >\n            <option ></option>\n            <option value=\"Telmex\">Telmex</option>\n            <option value=\"Telcel\">Telcel</option>\n            \n          </optgroup>\n        </select>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Nombre</ion-label>\n        <ion-input [(ngModel)]=\"nombre\"></ion-input>\n\n    </ion-item>\n    <ion-item>\n        <ion-label>Apellidos</ion-label>\n        <ion-input [(ngModel)]=\"apellidos\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Categoria</ion-label>\n        <select [(ngModel)]=\"categoria\">\n          <optgroup >\n            <option ></option>\n            <option value=\"Tecnico\">Tecnico</option>\n            <option value=\"Programador\">Programador</option>\n            \n          </optgroup>\n        </select>\n    </ion-item>\n    <ion-item>\n        <ion-label>Expediente</ion-label>\n        <ion-input [(ngModel)]=\"expediente\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Telefono</ion-label>\n        <ion-input [(ngModel)]=\"telefono\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>CM</ion-label>\n        <select [(ngModel)]=\"cm\">\n          <optgroup >\n            <option ></option>\n            <option value=\"Aguascalientes\">Aguascalientes</option>\n            <option value=\"Guadalajara\">Guadalajara</option>\n            \n          </optgroup>\n        </select>\n    </ion-item>\n    <ion-item>\n        <ion-label>Correo</ion-label>\n        <ion-input [(ngModel)]=\"correoelectronico\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Contraseña</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Confirmar Contraseña</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"confirmacion\"></ion-input>\n    </ion-item>\n    <br>\n    <ion-button class=\"guardar\" outline (click)='guardar()'>Guardar</ion-button>\n    <hr>\n    <br>\n    <ion-footer class=\"ion-no-border\">\n        <ion-toolbar style=\"text-align: center;\">\n            <ion-title style=\"font-size: 12px;\"></ion-title>\n        </ion-toolbar>\n    </ion-footer>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/componentes/registro/registro-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/componentes/registro/registro-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function() { return RegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro.page */ "./src/app/componentes/registro/registro.page.ts");




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ "./src/app/componentes/registro/registro.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/componentes/registro/registro.module.ts ***!
  \*********************************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-routing.module */ "./src/app/componentes/registro/registro-routing.module.ts");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "./src/app/componentes/registro/registro.page.ts");







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"]
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
    })
], RegistroPageModule);



/***/ }),

/***/ "./src/app/componentes/registro/registro.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/componentes/registro/registro.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ico {\n  display: block;\n  margin-top: 50px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\nion-item {\n  padding-left: 10px;\n  padding-right: 20px;\n  padding-top: 10px;\n}\n\n.guardar {\n  float: right;\n  padding-right: 20px;\n}\n\nselect {\n  font-size: 16px;\n  border: none;\n}\n\nimg {\n  border-radius: 40%;\n  height: 90px;\n  float: right;\n  margin-right: 40px;\n  border-color: black;\n}\n\n.alias {\n  width: 220px;\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcmVnaXN0cm8vQzpcXFVzZXJzXFxFbW1hbnVlbE9ydGl6XFxEb2N1bWVudHNcXEVzdGFkaWFzVFNVXFxDQU1TL3NyY1xcYXBwXFxjb21wb25lbnRlc1xccmVnaXN0cm9cXHJlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvcmVnaXN0cm8vcmVnaXN0cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvcmVnaXN0cm8vcmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljbyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmd1YXJkYXIge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogbm9uZVxyXG59XHJcblxyXG5pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDAlO1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmFsaWFzIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufSIsIi5pY28ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDUwJTtcbn1cblxuaW9uLWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uZ3VhcmRhciB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuc2VsZWN0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDQwJTtcbiAgaGVpZ2h0OiA5MHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuLmFsaWFzIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/registro/registro.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/componentes/registro/registro.page.ts ***!
  \*******************************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _servicios_registro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/registro.service */ "./src/app/componentes/servicios/registro.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let RegistroPage = class RegistroPage {
    constructor(camera, registroService) {
        this.camera = camera;
        this.registroService = registroService;
        this.base64Image = '';
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = document.createElement('ion-alert');
            alert.cssClass = 'my-custom-class';
            alert.header = 'Subir Foto';
            alert.message = 'Completar con';
            alert.buttons = [
                {
                    text: 'Camara',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        this.hacerFoto();
                    }
                }, {
                    text: 'Galeria',
                    handler: () => {
                        this.fotoGaleria();
                    }
                }
            ];
            document.body.appendChild(alert);
            return alert.present();
        });
    }
    show() {
        this.presentAlertConfirm();
    }
    fotoGaleria() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const optionsGallery = {
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(optionsGallery).then((imageData) => {
                this.base64Image = 'data:image/jpeg;base64,' + imageData;
                document.getElementById('img').src = this.base64Image;
            }, (err) => {
                // Handle error
                console.log(err);
            });
        });
    }
    hacerFoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true
            };
            const result = yield this.camera.getPicture(options).then((imageData) => {
                this.base64Image = 'data:image/jpeg;base64,' + imageData;
                document.getElementById('img').src = this.base64Image;
            }, (err) => {
                console.log(err);
            });
        });
    }
    quitarImagen() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.base64Image = '';
            document.getElementById('img').src = 'assets/images/mp-image.png';
        });
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.registroService.GuardarRegistro(this.base64Image);
            console.log(this.alias);
            console.log(this.nombre);
            console.log(this.empresa);
            console.log(this.apellidos);
            console.log(this.expediente);
            console.log(this.telefono);
            console.log(this.cm);
            console.log(this.categoria);
            console.log(this.correoelectronico);
            console.log(this.password);
            console.log(this.confirmacion);
            if (this.password === this.confirmacion) {
                console.log('lisot');
                if (this.base64Image === '') {
                    console.log('registro');
                    this.registroService.GuardarRegistro(this.nombre, this.alias, this.expediente, this.telefono, this.correoelectronico, this.password);
                }
                else {
                    console.log('lo');
                    // tslint:disable-next-line: max-line-length
                    this.registroService.GuardarRegistroImagen(this.nombre, this.alias, this.expediente, this.telefono, this.correoelectronico, this.password, this.base64Image);
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Contraseña invalida',
                    text: 'Por favor confirma tu contraseña',
                    showConfirmButton: true
                });
            }
        });
    }
};
RegistroPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _servicios_registro_service__WEBPACK_IMPORTED_MODULE_3__["RegistroService"] }
];
RegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/registro.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registro.page.scss */ "./src/app/componentes/registro/registro.page.scss")).default]
    })
], RegistroPage);



/***/ }),

/***/ "./src/app/componentes/servicios/registro.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/componentes/servicios/registro.service.ts ***!
  \***********************************************************/
/*! exports provided: RegistroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroService", function() { return RegistroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





let RegistroService = class RegistroService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urlApi;
    }
    GuardarRegistro(name, alias, expediente, telefono, email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.httpClient.post(this.url + 'user', {
                name,
                alias,
                expediente,
                telefono,
                email,
                password
                //sampleFile: base64Image 
            }).subscribe(data => {
                console.log(data);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Exito' + data,
                    showConfirmButton: true
                });
                //this.router.navigate(['tabs', 'tab1' ]);
            }, (err) => {
                console.log(err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Error',
                    text: err.error,
                    showConfirmButton: true
                });
            });
        });
    }
    GuardarRegistroImagen(name, alias, expediente, telefono, email, password, base64Image) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.httpClient.post(this.url + 'user', {
                name,
                alias,
                expediente,
                telefono,
                email,
                password,
                base64Image
                //sampleFile: base64Image 
            }).subscribe(data => {
                console.log(data);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Exito' + data,
                    showConfirmButton: true
                });
                //this.router.navigate(['tabs', 'tab1' ]);
            }, (err) => {
                console.log(err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Error',
                    text: err.error,
                    showConfirmButton: true
                });
            });
        });
    }
};
RegistroService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RegistroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegistroService);



/***/ })

}]);
//# sourceMappingURL=componentes-registro-registro-module-es2015.js.map