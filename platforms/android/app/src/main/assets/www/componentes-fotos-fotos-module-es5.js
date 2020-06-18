function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-fotos-fotos-module"], {
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
  "./src/app/componentes/fotos/fotos-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/componentes/fotos/fotos-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: FotosPageRoutingModule */

  /***/
  function srcAppComponentesFotosFotosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FotosPageRoutingModule", function () {
      return FotosPageRoutingModule;
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


    var _fotos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fotos.page */
    "./src/app/componentes/fotos/fotos.page.ts");

    var routes = [{
      path: '',
      component: _fotos_page__WEBPACK_IMPORTED_MODULE_3__["FotosPage"]
    }];

    var FotosPageRoutingModule = function FotosPageRoutingModule() {
      _classCallCheck(this, FotosPageRoutingModule);
    };

    FotosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FotosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/componentes/fotos/fotos.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/componentes/fotos/fotos.module.ts ***!
    \***************************************************/

  /*! exports provided: FotosPageModule */

  /***/
  function srcAppComponentesFotosFotosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FotosPageModule", function () {
      return FotosPageModule;
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


    var _fotos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fotos-routing.module */
    "./src/app/componentes/fotos/fotos-routing.module.ts");
    /* harmony import */


    var _fotos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fotos.page */
    "./src/app/componentes/fotos/fotos.page.ts");

    var FotosPageModule = function FotosPageModule() {
      _classCallCheck(this, FotosPageModule);
    };

    FotosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _fotos_routing_module__WEBPACK_IMPORTED_MODULE_5__["FotosPageRoutingModule"]],
      declarations: [_fotos_page__WEBPACK_IMPORTED_MODULE_6__["FotosPage"]]
    })], FotosPageModule);
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
  }
}]);
//# sourceMappingURL=componentes-fotos-fotos-module-es5.js.map