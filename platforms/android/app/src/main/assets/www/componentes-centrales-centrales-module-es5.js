function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-centrales-centrales-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/centrales/centrales.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/centrales/centrales.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesCentralesCentralesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button default-href=\"home\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Centrales</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/componentes/centrales/centrales-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/componentes/centrales/centrales-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: CentralesPageRoutingModule */

  /***/
  function srcAppComponentesCentralesCentralesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CentralesPageRoutingModule", function () {
      return CentralesPageRoutingModule;
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


    var _centrales_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./centrales.page */
    "./src/app/componentes/centrales/centrales.page.ts");

    var routes = [{
      path: '',
      component: _centrales_page__WEBPACK_IMPORTED_MODULE_3__["CentralesPage"]
    }];

    var CentralesPageRoutingModule = function CentralesPageRoutingModule() {
      _classCallCheck(this, CentralesPageRoutingModule);
    };

    CentralesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CentralesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/componentes/centrales/centrales.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/componentes/centrales/centrales.module.ts ***!
    \***********************************************************/

  /*! exports provided: CentralesPageModule */

  /***/
  function srcAppComponentesCentralesCentralesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CentralesPageModule", function () {
      return CentralesPageModule;
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


    var _centrales_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./centrales-routing.module */
    "./src/app/componentes/centrales/centrales-routing.module.ts");
    /* harmony import */


    var _centrales_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./centrales.page */
    "./src/app/componentes/centrales/centrales.page.ts");

    var CentralesPageModule = function CentralesPageModule() {
      _classCallCheck(this, CentralesPageModule);
    };

    CentralesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _centrales_routing_module__WEBPACK_IMPORTED_MODULE_5__["CentralesPageRoutingModule"]],
      declarations: [_centrales_page__WEBPACK_IMPORTED_MODULE_6__["CentralesPage"]]
    })], CentralesPageModule);
    /***/
  },

  /***/
  "./src/app/componentes/centrales/centrales.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/componentes/centrales/centrales.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesCentralesCentralesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2NlbnRyYWxlcy9jZW50cmFsZXMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/componentes/centrales/centrales.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/componentes/centrales/centrales.page.ts ***!
    \*********************************************************/

  /*! exports provided: CentralesPage */

  /***/
  function srcAppComponentesCentralesCentralesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CentralesPage", function () {
      return CentralesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CentralesPage = /*#__PURE__*/function () {
      function CentralesPage() {
        _classCallCheck(this, CentralesPage);
      }

      _createClass(CentralesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CentralesPage;
    }();

    CentralesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-centrales',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./centrales.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/centrales/centrales.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./centrales.page.scss */
      "./src/app/componentes/centrales/centrales.page.scss"))["default"]]
    })], CentralesPage);
    /***/
  }
}]);
//# sourceMappingURL=componentes-centrales-centrales-module-es5.js.map