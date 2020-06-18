function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-permisos-permisos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/permisos/permisos.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/permisos/permisos.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesPermisosPermisosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button default-href=\"home\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Permisos</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-card-header>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <ion-card-title>Clave</ion-card-title>\n                    </ion-col>\n                    <ion-col>\n                        <ion-card-title>Descripcion</ion-card-title>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <ion-card-subtitle>Admin</ion-card-subtitle>\n                    </ion-col>\n                    <ion-col>\n                        <ion-card-subtitle>Dar y quitar permisos a otros usuarios</ion-card-subtitle>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <ion-card-subtitle>User</ion-card-subtitle>\n                    </ion-col>\n                    <ion-col>\n                        <ion-card-subtitle>Permisos normales de usuario</ion-card-subtitle>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-card-content>\n    </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/componentes/permisos/permisos-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/componentes/permisos/permisos-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: PermisosPageRoutingModule */

  /***/
  function srcAppComponentesPermisosPermisosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermisosPageRoutingModule", function () {
      return PermisosPageRoutingModule;
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


    var _permisos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./permisos.page */
    "./src/app/componentes/permisos/permisos.page.ts");

    var routes = [{
      path: '',
      component: _permisos_page__WEBPACK_IMPORTED_MODULE_3__["PermisosPage"]
    }];

    var PermisosPageRoutingModule = function PermisosPageRoutingModule() {
      _classCallCheck(this, PermisosPageRoutingModule);
    };

    PermisosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PermisosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/componentes/permisos/permisos.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/componentes/permisos/permisos.module.ts ***!
    \*********************************************************/

  /*! exports provided: PermisosPageModule */

  /***/
  function srcAppComponentesPermisosPermisosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermisosPageModule", function () {
      return PermisosPageModule;
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


    var _permisos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./permisos-routing.module */
    "./src/app/componentes/permisos/permisos-routing.module.ts");
    /* harmony import */


    var _permisos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./permisos.page */
    "./src/app/componentes/permisos/permisos.page.ts");

    var PermisosPageModule = function PermisosPageModule() {
      _classCallCheck(this, PermisosPageModule);
    };

    PermisosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _permisos_routing_module__WEBPACK_IMPORTED_MODULE_5__["PermisosPageRoutingModule"]],
      declarations: [_permisos_page__WEBPACK_IMPORTED_MODULE_6__["PermisosPage"]]
    })], PermisosPageModule);
    /***/
  },

  /***/
  "./src/app/componentes/permisos/permisos.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/componentes/permisos/permisos.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesPermisosPermisosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3Blcm1pc29zL3Blcm1pc29zLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/componentes/permisos/permisos.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/componentes/permisos/permisos.page.ts ***!
    \*******************************************************/

  /*! exports provided: PermisosPage */

  /***/
  function srcAppComponentesPermisosPermisosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermisosPage", function () {
      return PermisosPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PermisosPage = /*#__PURE__*/function () {
      function PermisosPage() {
        _classCallCheck(this, PermisosPage);
      }

      _createClass(PermisosPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PermisosPage;
    }();

    PermisosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-permisos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./permisos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/permisos/permisos.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./permisos.page.scss */
      "./src/app/componentes/permisos/permisos.page.scss"))["default"]]
    })], PermisosPage);
    /***/
  }
}]);
//# sourceMappingURL=componentes-permisos-permisos-module-es5.js.map