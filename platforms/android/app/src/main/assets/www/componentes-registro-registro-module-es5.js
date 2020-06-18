function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-registro-registro-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/registro.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/registro.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesRegistroRegistroPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title> Registro de Usuario</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/login'>Volver</ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content fullscreen>\n    <br>\n    <div>\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-img src=\"assets/images/mp-image.png\" (click)=\"presentActionSheet()\" id=\"img\"></ion-img>\n                    <button *ngIf=\"base64Image\" (click)=\"quitarImagen()\">\n                        <ion-icon name=\"close-circle-outline\"></ion-icon>\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <ion-item>\n                        <ion-label position=\"stacked\">Alias:</ion-label>\n                        <ion-input placeholder=\"Ejemplo SCM\" [(ngModel)]=\"alias\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"stacked\">Expediente:</ion-label>\n                        <ion-input [(ngModel)]=\"expediente\"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n    </div>\n    <ion-item>\n        <ion-label position=\"stacked\">Nombre:</ion-label>\n        <ion-input placeholder=\"Nombre completo\" [(ngModel)]=\"nombre\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"stacked\">Telefono:</ion-label>\n        <ion-input [(ngModel)]=\"telefono\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>CM</ion-label>\n        <ion-select value=\"\" [(ngModel)]=\"cm\">\n            <ion-select-option value=\"telmex\">Aguascalientes</ion-select-option>\n            <ion-select-option value=\"telcel\">Guadalajara</ion-select-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"stacked\">Correo Electronico:</ion-label>\n        <ion-input [(ngModel)]=\"correoelectronico\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"stacked\">Contraseña:</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"stacked\">Confirmar Contraseña:</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"confirmacion\"></ion-input>\n    </ion-item>\n    <br>\n    <ion-button id=\"save\" class=\"guardar\" outline (click)='validar()'>Enviar solicitud</ion-button>\n    <hr>\n    <br>\n    <ion-footer class=\"ion-no-border\">\n        <ion-toolbar style=\"text-align: center;\">\n            <ion-title style=\"font-size: 12px;\"></ion-title>\n        </ion-toolbar>\n    </ion-footer>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/componentes/registro/registro-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/componentes/registro/registro-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: RegistroPageRoutingModule */

  /***/
  function srcAppComponentesRegistroRegistroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function () {
      return RegistroPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registro.page */
    "./src/app/componentes/registro/registro.page.ts");

    var routes = [{
      path: '',
      component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
    }];

    var RegistroPageRoutingModule = function RegistroPageRoutingModule() {
      _classCallCheck(this, RegistroPageRoutingModule);
    };

    RegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistroPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/componentes/registro/registro.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/componentes/registro/registro.module.ts ***!
    \*********************************************************/

  /*! exports provided: RegistroPageModule */

  /***/
  function srcAppComponentesRegistroRegistroModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function () {
      return RegistroPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registro-routing.module */
    "./src/app/componentes/registro/registro-routing.module.ts");
    /* harmony import */


    var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registro.page */
    "./src/app/componentes/registro/registro.page.ts");

    var RegistroPageModule = function RegistroPageModule() {
      _classCallCheck(this, RegistroPageModule);
    };

    RegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"]],
      declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
    })], RegistroPageModule);
    /***/
  },

  /***/
  "./src/app/componentes/registro/registro.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/componentes/registro/registro.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesRegistroRegistroPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ico {\n  display: block;\n  margin-top: 50px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\nion-item {\n  margin-left: 10px;\n  padding-right: 20px;\n  padding-top: 10px;\n}\n\n.guardar {\n  float: right;\n  padding-right: 20px;\n}\n\nselect {\n  font-size: 16px;\n  border: none;\n}\n\nion-img {\n  border-radius: 4%;\n  height: 150px;\n  border-color: black;\n}\n\n.alias {\n  width: 220px;\n  padding-left: 20px;\n}\n\nbutton {\n  float: left;\n  margin-top: 10px;\n  margin-left: 20px;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcmVnaXN0cm8vQzpcXFVzZXJzXFxFbW1hbnVlbE9ydGl6XFxEb2N1bWVudHNcXEVzdGFkaWFzVFNVXFxDQU1TL3NyY1xcYXBwXFxjb21wb25lbnRlc1xccmVnaXN0cm9cXHJlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvcmVnaXN0cm8vcmVnaXN0cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvcmVnaXN0cm8vcmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljbyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZ3VhcmRhciB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lXHJcbn1cclxuXHJcbmlvbi1pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmFsaWFzIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn0iLCIuaWNvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uZ3VhcmRhciB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuc2VsZWN0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmlvbi1pbWcge1xuICBib3JkZXItcmFkaXVzOiA0JTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuLmFsaWFzIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/componentes/registro/registro.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/componentes/registro/registro.page.ts ***!
    \*******************************************************/

  /*! exports provided: RegistroPage */

  /***/
  function srcAppComponentesRegistroRegistroPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPage", function () {
      return RegistroPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _servicios_registro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../servicios/registro.service */
    "./src/app/componentes/servicios/registro.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var RegistroPage = /*#__PURE__*/function () {
      function RegistroPage(camera, registroService, actionSheetController) {
        _classCallCheck(this, RegistroPage);

        this.camera = camera;
        this.registroService = registroService;
        this.actionSheetController = actionSheetController;
        this.base64Image = '';
        this.empresa = '';
        this.categoria = '';
        this.cm = '';
        this.alias = '';
        this.nombre = '';
        this.apellidos = '';
        this.correoelectronico = '';
        this.password = '';
        this.confirmacion = '';
        this.telefono = '';
      }

      _createClass(RegistroPage, [{
        key: "presentActionSheet",
        value: function presentActionSheet() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.actionSheetController.create({
                      header: 'Completar con',
                      cssClass: 'my-custom-class',
                      buttons: [{
                        text: 'Camara',
                        icon: 'camera',
                        handler: function handler() {
                          console.log('Share clicked');

                          _this.hacerFoto();
                        }
                      }, {
                        text: 'Galeria',
                        icon: 'image',
                        handler: function handler() {
                          console.log('Favorite clicked');

                          _this.fotoGaleria();
                        }
                      }, {
                        text: 'Cancelar',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context.sent;
                    _context.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "fotoGaleria",
        value: function fotoGaleria() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var optionsGallery;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    optionsGallery = {
                      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                      destinationType: this.camera.DestinationType.DATA_URL,
                      encodingType: this.camera.EncodingType.JPEG,
                      mediaType: this.camera.MediaType.PICTURE
                    };
                    this.camera.getPicture(optionsGallery).then(function (imageData) {
                      _this2.base64Image = 'data:image/jpeg;base64,' + imageData;
                      document.getElementById('img').src = _this2.base64Image;
                    }, function (err) {
                      // Handle error
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "hacerFoto",
        value: function hacerFoto() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var options, result;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    options = {
                      destinationType: this.camera.DestinationType.DATA_URL,
                      encodingType: this.camera.EncodingType.JPEG,
                      mediaType: this.camera.MediaType.PICTURE,
                      correctOrientation: true
                    };
                    _context3.next = 3;
                    return this.camera.getPicture(options).then(function (imageData) {
                      _this3.base64Image = 'data:image/jpeg;base64,' + imageData;
                      document.getElementById('img').src = _this3.base64Image;
                    }, function (err) {
                      console.log(err);
                    });

                  case 3:
                    result = _context3.sent;

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "quitarImagen",
        value: function quitarImagen() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.base64Image = '';
                    document.getElementById('img').src = 'assets/images/mp-image.png';

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "validar",
        value: function validar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    /*if(  this.cm || this.alias || this.nombre  || this.correoelectronico
                      || this.password || this.confirmacion || this.telefono === ''){
                      console.log('completa los campos');
                      Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Invalido',
                        text: 'Por favor completa todos los campos',
                        showConfirmButton: true
                      });
                          }else{
                            console.log('listo');
                            this.guardar();
                          }*/
                    this.guardar();

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "guardar",
        value: function guardar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
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
                      } else {
                        console.log('lo'); // tslint:disable-next-line: max-line-length

                        this.registroService.GuardarRegistroImagen(this.nombre, this.alias, this.expediente, this.telefono, this.correoelectronico, this.password, this.base64Image);
                      }
                    } else {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Contraseña invalida',
                        text: 'Por favor confirma tu contraseña',
                        showConfirmButton: true
                      });
                    }

                  case 12:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return RegistroPage;
    }();

    RegistroPage.ctorParameters = function () {
      return [{
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
      }, {
        type: _servicios_registro_service__WEBPACK_IMPORTED_MODULE_3__["RegistroService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
      }];
    };

    RegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registro',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./registro.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/registro.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./registro.page.scss */
      "./src/app/componentes/registro/registro.page.scss"))["default"]]
    })], RegistroPage);
    /***/
  },

  /***/
  "./src/app/componentes/servicios/registro.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/componentes/servicios/registro.service.ts ***!
    \***********************************************************/

  /*! exports provided: RegistroService */

  /***/
  function srcAppComponentesServiciosRegistroServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroService", function () {
      return RegistroService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RegistroService = /*#__PURE__*/function () {
      function RegistroService(httpClient, router) {
        _classCallCheck(this, RegistroService);

        this.httpClient = httpClient;
        this.router = router;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urlApi;
      }

      _createClass(RegistroService, [{
        key: "GuardarRegistro",
        value: function GuardarRegistro(name, alias, expediente, telefono, email, password) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    return _context7.abrupt("return", this.httpClient.post(this.url + 'user', {
                      name: name,
                      alias: alias,
                      expediente: expediente,
                      telefono: telefono,
                      email: email,
                      password: password //sampleFile: base64Image 

                    }).subscribe(function (data) {
                      console.log(data);
                      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Bienvenido ' + name,
                        showConfirmButton: true
                      });

                      _this4.router.navigate(['home']);
                    }, function (err) {
                      console.log(err);
                      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Error',
                        text: err.error,
                        showConfirmButton: true
                      });
                    }));

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "GuardarRegistroImagen",
        value: function GuardarRegistroImagen(name, alias, expediente, telefono, email, password, base64Image) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    return _context8.abrupt("return", this.httpClient.post(this.url + 'userImg', {
                      name: name,
                      alias: alias,
                      expediente: expediente,
                      telefono: telefono,
                      email: email,
                      password: password,
                      base64Image: base64Image //sampleFile: base64Image 

                    }).subscribe(function (data) {
                      console.log(data);
                      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Bienvenido ' + name,
                        showConfirmButton: true
                      });

                      _this5.router.navigate(['home']);

                      _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].user = {
                        name: name,
                        alias: alias,
                        expediente: expediente,
                        telefono: telefono,
                        email: email,
                        area: '',
                        cm: ''
                      };
                    }, function (err) {
                      console.log(err);
                      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Error',
                        text: err.error,
                        showConfirmButton: true
                      });
                    }));

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return RegistroService;
    }();

    RegistroService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    RegistroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RegistroService);
    /***/
  }
}]);
//# sourceMappingURL=componentes-registro-registro-module-es5.js.map