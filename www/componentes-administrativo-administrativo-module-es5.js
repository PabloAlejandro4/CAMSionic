function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-administrativo-administrativo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/administrativo/administrativo.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/administrativo/administrativo.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesAdministrativoAdministrativoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button default-href=\"home\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Administrativo</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/componentes/administrativo/administrativo-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/componentes/administrativo/administrativo-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: AdministrativoPageRoutingModule */

  /***/
  function srcAppComponentesAdministrativoAdministrativoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdministrativoPageRoutingModule", function () {
      return AdministrativoPageRoutingModule;
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


    var _administrativo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./administrativo.page */
    "./src/app/componentes/administrativo/administrativo.page.ts");

    var routes = [{
      path: '',
      component: _administrativo_page__WEBPACK_IMPORTED_MODULE_3__["AdministrativoPage"]
    }];

    var AdministrativoPageRoutingModule = function AdministrativoPageRoutingModule() {
      _classCallCheck(this, AdministrativoPageRoutingModule);
    };

    AdministrativoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdministrativoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/componentes/administrativo/administrativo.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/componentes/administrativo/administrativo.module.ts ***!
    \*********************************************************************/

  /*! exports provided: AdministrativoPageModule */

  /***/
  function srcAppComponentesAdministrativoAdministrativoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdministrativoPageModule", function () {
      return AdministrativoPageModule;
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


    var _administrativo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./administrativo-routing.module */
    "./src/app/componentes/administrativo/administrativo-routing.module.ts");
    /* harmony import */


    var _administrativo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./administrativo.page */
    "./src/app/componentes/administrativo/administrativo.page.ts");

    var AdministrativoPageModule = function AdministrativoPageModule() {
      _classCallCheck(this, AdministrativoPageModule);
    };

    AdministrativoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _administrativo_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdministrativoPageRoutingModule"]],
      declarations: [_administrativo_page__WEBPACK_IMPORTED_MODULE_6__["AdministrativoPage"]]
    })], AdministrativoPageModule);
    /***/
  },

  /***/
  "./src/app/componentes/administrativo/administrativo.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/componentes/administrativo/administrativo.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesAdministrativoAdministrativoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FkbWluaXN0cmF0aXZvL2FkbWluaXN0cmF0aXZvLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/componentes/administrativo/administrativo.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/componentes/administrativo/administrativo.page.ts ***!
    \*******************************************************************/

  /*! exports provided: AdministrativoPage */

  /***/
  function srcAppComponentesAdministrativoAdministrativoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdministrativoPage", function () {
      return AdministrativoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdministrativoPage = /*#__PURE__*/function () {
      function AdministrativoPage() {
        _classCallCheck(this, AdministrativoPage);
      }

      _createClass(AdministrativoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdministrativoPage;
    }();

    AdministrativoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-administrativo',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./administrativo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/administrativo/administrativo.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./administrativo.page.scss */
      "./src/app/componentes/administrativo/administrativo.page.scss"))["default"]]
    })], AdministrativoPage);
    /***/
  }
}]);
//# sourceMappingURL=componentes-administrativo-administrativo-module-es5.js.map