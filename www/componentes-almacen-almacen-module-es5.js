function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-almacen-almacen-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/almacen/almacen.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/almacen/almacen.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesAlmacenAlmacenPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button default-href=\"home\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Almacen</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/componentes/almacen/almacen-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/componentes/almacen/almacen-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: AlmacenPageRoutingModule */

  /***/
  function srcAppComponentesAlmacenAlmacenRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlmacenPageRoutingModule", function () {
      return AlmacenPageRoutingModule;
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


    var _almacen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./almacen.page */
    "./src/app/componentes/almacen/almacen.page.ts");

    var routes = [{
      path: '',
      component: _almacen_page__WEBPACK_IMPORTED_MODULE_3__["AlmacenPage"]
    }];

    var AlmacenPageRoutingModule = function AlmacenPageRoutingModule() {
      _classCallCheck(this, AlmacenPageRoutingModule);
    };

    AlmacenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AlmacenPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/componentes/almacen/almacen.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/componentes/almacen/almacen.module.ts ***!
    \*******************************************************/

  /*! exports provided: AlmacenPageModule */

  /***/
  function srcAppComponentesAlmacenAlmacenModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlmacenPageModule", function () {
      return AlmacenPageModule;
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


    var _almacen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./almacen-routing.module */
    "./src/app/componentes/almacen/almacen-routing.module.ts");
    /* harmony import */


    var _almacen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./almacen.page */
    "./src/app/componentes/almacen/almacen.page.ts");

    var AlmacenPageModule = function AlmacenPageModule() {
      _classCallCheck(this, AlmacenPageModule);
    };

    AlmacenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _almacen_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlmacenPageRoutingModule"]],
      declarations: [_almacen_page__WEBPACK_IMPORTED_MODULE_6__["AlmacenPage"]]
    })], AlmacenPageModule);
    /***/
  },

  /***/
  "./src/app/componentes/almacen/almacen.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/componentes/almacen/almacen.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesAlmacenAlmacenPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FsbWFjZW4vYWxtYWNlbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/componentes/almacen/almacen.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/componentes/almacen/almacen.page.ts ***!
    \*****************************************************/

  /*! exports provided: AlmacenPage */

  /***/
  function srcAppComponentesAlmacenAlmacenPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlmacenPage", function () {
      return AlmacenPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlmacenPage = /*#__PURE__*/function () {
      function AlmacenPage() {
        _classCallCheck(this, AlmacenPage);
      }

      _createClass(AlmacenPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlmacenPage;
    }();

    AlmacenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-almacen',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./almacen.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/almacen/almacen.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./almacen.page.scss */
      "./src/app/componentes/almacen/almacen.page.scss"))["default"]]
    })], AlmacenPage);
    /***/
  }
}]);
//# sourceMappingURL=componentes-almacen-almacen-module-es5.js.map