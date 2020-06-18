function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~componentes-correctivos-correctivos-module~componentes-nuevocorrectivo-nuevocorrectivo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/fotos/fotos.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/fotos/fotos.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesFotosFotosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>Fotografias</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"cerrar()\">Cerrar</ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-content>\n        <ion-slides pager=\"true\">\n            <ion-slide *ngFor=\"let foto of imagenes index as i\">\n\n                <ion-img style=\"height: 250px;\" src=\"{{foto}}\"></ion-img>\n\n            </ion-slide>\n\n\n        </ion-slides>\n    </ion-content>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/nuevocorrectivo/nuevocorrectivo.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/nuevocorrectivo/nuevocorrectivo.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesNuevocorrectivoNuevocorrectivoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>Nuevo Correctivo</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <br><br>\n    <div>\n        <label style=\"margin-left: 20px;\"> Fecha: 05/06/2020\n    </label>\n        <br><br>\n        <label style=\"margin-left: 100px;  font-size: 30px;\"> CLV-200515\n\n    </label>\n        <br><br>\n        <ion-label style=\"margin-left: 20px;\"> Central: Parras\n\n        </ion-label>\n    </div>\n\n    <ion-item class=\"select\">\n        <ion-label>Area</ion-label>\n        <ion-select [(ngModel)]=\"area\">\n            <ion-select-option value=\"f\">Female</ion-select-option>\n            <ion-select-option value=\"m\">Male</ion-select-option>\n        </ion-select>\n    </ion-item>\n    <ion-item class=\"select\">\n        <ion-label>Actividad</ion-label>\n        <ion-select [(ngModel)]=\"actividad\">\n            <ion-select-option value=\"f\">Female</ion-select-option>\n            <ion-select-option value=\"m\">Male</ion-select-option>\n        </ion-select>\n    </ion-item>\n    <ion-item class=\"select\">\n        <ion-label>Tarea</ion-label>\n        <ion-select [(ngModel)]=\"tarea\">\n            <ion-select-option value=\"f\">Female</ion-select-option>\n            <ion-select-option value=\"m\">Male</ion-select-option>\n        </ion-select>\n    </ion-item>\n    <ion-item class=\"select\">\n        <ion-label>Criticidad</ion-label>\n        <ion-select [(ngModel)]=\"criticidad\">\n            <ion-select-option value=\"f\">Female</ion-select-option>\n            <ion-select-option value=\"m\">Male</ion-select-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <ion-item>Siniestro\n                    <ion-checkbox slot=\"end\" [(ngModel)]=\"siniestro\"></ion-checkbox>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item>\n                    <ion-label position=\"stacked\">Folios Externos</ion-label>\n                    <ion-input></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <img id=\"img\" *ngIf=\"imagenes[0]\" src=\"assets/images/galeria.png\" (click)=\"verFotos()\">\n\n    <img style=\"height: 40px;\" (click)=\"hacerFoto()\" src=\"assets/images/addImage.png\">\n\n    <ion-item style=\"font-size: 20px;  margin-right: 20px;\">\n        Bitacora\n    </ion-item>\n    <ion-card>\n        <ion-card-content>\n            <ion-grid>\n                <ion-row>\n                    <ion-col style=\"font-weight: bold;\">Saul Carrillo </ion-col>\n                    <ion-col></ion-col>\n                    <ion-col style=\"font-weight: bold;\"> 05/06/2020</ion-col>\n\n                </ion-row>\n                <ion-label style=\"margin-left: 5px;\">Comentarios</ion-label>\n\n            </ion-grid>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-item class=\"select\">\n        <ion-input placeholder=\"Escribe un comentario\"></ion-input>\n        <ion-icon name=\"send\"></ion-icon>\n    </ion-item>\n\n\n\n    <ion-button (click)=\"guardar()\">Guardar</ion-button>\n    <ion-button color=\"danger\">Cancelar</ion-button>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/componentes/fotos/fotos.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/componentes/fotos/fotos.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesFotosFotosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slides {\n  height: 100%;\n}\n\nion-card {\n  margin-top: 40px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\nion-button {\n  margin-top: 20px;\n  margin-right: 20px;\n  -webkit-margin-after: 20px;\n          margin-block-end: 20px;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvZm90b3MvQzpcXFVzZXJzXFxFbW1hbnVlbE9ydGl6XFxEb2N1bWVudHNcXEVzdGFkaWFzVFNVXFxDQU1TL3NyY1xcYXBwXFxjb21wb25lbnRlc1xcZm90b3NcXGZvdG9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvZm90b3MvZm90b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2ZvdG9zL2ZvdG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDIwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iLCJpb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/componentes/fotos/fotos.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/componentes/fotos/fotos.page.ts ***!
    \*************************************************/

  /*! exports provided: FotosPage */

  /***/
  function srcAppComponentesFotosFotosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FotosPage", function () {
      return FotosPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var FotosPage = /*#__PURE__*/function () {
      function FotosPage(modalCtrl, loadingController) {
        _classCallCheck(this, FotosPage);

        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        this.slideOpts = {
          initialSlide: 0,
          speed: 400
        }; //this.fotos = [0,0,0]

        this.imagenes = [];
      }

      _createClass(FotosPage, [{
        key: "cerrar",
        value: function cerrar() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var loading, _yield$loading$onDidD, role, data;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      cssClass: 'my-custom-class',
                      message: 'Por favor Espere...',
                      duration: 1000
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    _context.next = 7;
                    return loading.onDidDismiss();

                  case 7:
                    _yield$loading$onDidD = _context.sent;
                    role = _yield$loading$onDidD.role;
                    data = _yield$loading$onDidD.data;
                    console.log('Loading dismissed!');
                    this.imagenes = this.fotos;

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.presentLoading();
        }
      }]);

      return FotosPage;
    }();

    FotosPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FotosPage.prototype, "fotos", void 0);
    FotosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fotos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./fotos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/fotos/fotos.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./fotos.page.scss */
      "./src/app/componentes/fotos/fotos.page.scss"))["default"]]
    })], FotosPage);
    /***/
  },

  /***/
  "./src/app/componentes/nuevocorrectivo/nuevocorrectivo.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/componentes/nuevocorrectivo/nuevocorrectivo.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesNuevocorrectivoNuevocorrectivoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  height: 70px;\n  margin-left: 20px;\n  border-radius: 4px;\n}\n\n.select {\n  margin-left: 20px;\n  margin-right: 20px;\n  -webkit-margin-after: 10px;\n          margin-block-end: 10px;\n}\n\nion-button {\n  float: right;\n  margin-right: 10px;\n  margin-top: 20px;\n  -webkit-margin-after: 20px;\n          margin-block-end: 20px;\n  font-size: 12px;\n}\n\nion-icon {\n  color: #3880ff;\n}\n\nbutton {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbnVldm9jb3JyZWN0aXZvL0M6XFxVc2Vyc1xcRW1tYW51ZWxPcnRpelxcRG9jdW1lbnRzXFxFc3RhZGlhc1RTVVxcQ0FNUy9zcmNcXGFwcFxcY29tcG9uZW50ZXNcXG51ZXZvY29ycmVjdGl2b1xcbnVldm9jb3JyZWN0aXZvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvbnVldm9jb3JyZWN0aXZvL251ZXZvY29ycmVjdGl2by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO1VBQUEsc0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7VUFBQSxzQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURHQTtFQUNJLHVCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9udWV2b2NvcnJlY3Rpdm8vbnVldm9jb3JyZWN0aXZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnNlbGVjdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjMzg4MGZmO1xyXG4gICAgO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn0iLCJpbWcge1xuICBoZWlnaHQ6IDcwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5zZWxlY3Qge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYmxvY2stZW5kOiAxMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogIzM4ODBmZjtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/componentes/nuevocorrectivo/nuevocorrectivo.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/componentes/nuevocorrectivo/nuevocorrectivo.page.ts ***!
    \*********************************************************************/

  /*! exports provided: NuevocorrectivoPage */

  /***/
  function srcAppComponentesNuevocorrectivoNuevocorrectivoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NuevocorrectivoPage", function () {
      return NuevocorrectivoPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _fotos_fotos_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../fotos/fotos.page */
    "./src/app/componentes/fotos/fotos.page.ts");

    var NuevocorrectivoPage = /*#__PURE__*/function () {
      function NuevocorrectivoPage(camera, modalCtrl) {
        _classCallCheck(this, NuevocorrectivoPage);

        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.imagenes = [];
      }

      _createClass(NuevocorrectivoPage, [{
        key: "hacerFoto",
        value: function hacerFoto() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var options, result;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    options = {
                      destinationType: this.camera.DestinationType.DATA_URL,
                      encodingType: this.camera.EncodingType.JPEG,
                      mediaType: this.camera.MediaType.PICTURE,
                      correctOrientation: true
                    };
                    _context2.next = 3;
                    return this.camera.getPicture(options).then(function (imageData) {
                      _this.base64Image = 'data:image/jpeg;base64,' + imageData; //(<HTMLInputElement>document.getElementById('img')).src = this.base64Image;

                      _this.imagenes.push(_this.base64Image);
                    }, function (err) {
                      console.log(err);
                    });

                  case 3:
                    result = _context2.sent;

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "guardar",
        value: function guardar() {
          console.log(this.area);
          console.log(this.actividad);
          console.log(this.tarea);
          console.log(this.criticidad);
          console.log(this.siniestro);
        }
      }, {
        key: "verFotos",
        value: function verFotos() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalCtrl.create({
                      component: _fotos_fotos_page__WEBPACK_IMPORTED_MODULE_4__["FotosPage"],
                      componentProps: {
                        fotos: this.imagenes
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    return _context3.abrupt("return", modal.present());

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NuevocorrectivoPage;
    }();

    NuevocorrectivoPage.ctorParameters = function () {
      return [{
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    NuevocorrectivoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nuevocorrectivo',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./nuevocorrectivo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/nuevocorrectivo/nuevocorrectivo.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./nuevocorrectivo.page.scss */
      "./src/app/componentes/nuevocorrectivo/nuevocorrectivo.page.scss"))["default"]]
    })], NuevocorrectivoPage);
    /***/
  }
}]);
//# sourceMappingURL=default~componentes-correctivos-correctivos-module~componentes-nuevocorrectivo-nuevocorrectivo-module-es5.js.map