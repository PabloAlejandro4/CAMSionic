function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-title><img src=\"assets/images/logo-ca2.png\" style=\"width:60px\"></ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <img class=\"icon\" src=\"assets/images/logo-ca2.png\" alt=\"\">\r\n    <br>\r\n    <br>\r\n\r\n    <ion-item>\r\n        <ion-label>\r\n            <ion-icon name=\"person-outline\"></ion-icon>\r\n        </ion-label>\r\n        <ion-input placeholder=\"Correo\" value=\"{{usuario}}\" [(ngModel)]=\"usuario\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n        <ion-label>\r\n            <ion-icon name=\"key-outline\"></ion-icon>\r\n        </ion-label>\r\n        <ion-input placeholder=\"Contraseña\" id=\"contraseña\" type=\"password\" value=\"{{password}}\" [(ngModel)]=\"password\"></ion-input>\r\n    </ion-item>\r\n\r\n    <br>\r\n    <a class=\"a\" routerLink='/recuperar'>Recuperar mi contraseña</a>\r\n    <br>\r\n    <ion-button routerLink='/home'>Iniciar sesion</ion-button>\r\n    <br>\r\n    <a class=\"a\" routerLink='/registro'>Registate</a>\r\n\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/componentes/login/login-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/componentes/login/login-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppComponentesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/componentes/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/componentes/login/login.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/componentes/login/login.module.ts ***!
    \***************************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppComponentesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/componentes/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/componentes/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/componentes/login/login.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/componentes/login/login.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".icon {\n  display: block;\n  margin-top: 50px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\nion-button {\n  width: 280px;\n  margin: auto;\n  margin-top: 10px;\n  margin-left: 40px;\n}\n\nion-item {\n  width: 280px;\n  margin: auto;\n  margin-top: 20px;\n  background-color: unset;\n}\n\nion-input {\n  text-align: left;\n  color: #8d8a8a;\n  font-size: 18px;\n}\n\n.a {\n  float: right;\n  padding-top: 10px;\n  padding-right: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vQzpcXFVzZXJzXFxFbW1hbnVlbE9ydGl6XFxEb2N1bWVudHNcXEVzdGFkaWFzVFNVXFxDQU1TL3NyY1xcYXBwXFxjb21wb25lbnRlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiByZ2IoMTQxLCAxMzgsIDEzOCk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5hIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcclxufSIsIi5pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMjgwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgd2lkdGg6IDI4MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xufVxuXG5pb24taW5wdXQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzhkOGE4YTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYSB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/componentes/login/login.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/componentes/login/login.page.ts ***!
    \*************************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppComponentesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage() {
        _classCallCheck(this, LoginPage);
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginPage;
    }();

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/componentes/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=componentes-login-login-module-es5.js.map