function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-actores-actores-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/actores/actores.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/actores/actores.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesActoresActoresPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"tertiary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button default-href=\"home\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Actores, Act. y Tareas</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/componentes/actores/actores-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/componentes/actores/actores-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: ActoresPageRoutingModule */

  /***/
  function srcAppComponentesActoresActoresRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActoresPageRoutingModule", function () {
      return ActoresPageRoutingModule;
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


    var _actores_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./actores.page */
    "./src/app/componentes/actores/actores.page.ts");

    var routes = [{
      path: '',
      component: _actores_page__WEBPACK_IMPORTED_MODULE_3__["ActoresPage"]
    }];

    var ActoresPageRoutingModule = function ActoresPageRoutingModule() {
      _classCallCheck(this, ActoresPageRoutingModule);
    };

    ActoresPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ActoresPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/componentes/actores/actores.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/componentes/actores/actores.module.ts ***!
    \*******************************************************/

  /*! exports provided: ActoresPageModule */

  /***/
  function srcAppComponentesActoresActoresModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActoresPageModule", function () {
      return ActoresPageModule;
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


    var _actores_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./actores-routing.module */
    "./src/app/componentes/actores/actores-routing.module.ts");
    /* harmony import */


    var _actores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./actores.page */
    "./src/app/componentes/actores/actores.page.ts");

    var ActoresPageModule = function ActoresPageModule() {
      _classCallCheck(this, ActoresPageModule);
    };

    ActoresPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _actores_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActoresPageRoutingModule"]],
      declarations: [_actores_page__WEBPACK_IMPORTED_MODULE_6__["ActoresPage"]]
    })], ActoresPageModule);
    /***/
  },

  /***/
  "./src/app/componentes/actores/actores.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/componentes/actores/actores.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesActoresActoresPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FjdG9yZXMvYWN0b3Jlcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/componentes/actores/actores.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/componentes/actores/actores.page.ts ***!
    \*****************************************************/

  /*! exports provided: ActoresPage */

  /***/
  function srcAppComponentesActoresActoresPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActoresPage", function () {
      return ActoresPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ActoresPage = /*#__PURE__*/function () {
      function ActoresPage() {
        _classCallCheck(this, ActoresPage);
      }

      _createClass(ActoresPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ActoresPage;
    }();

    ActoresPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-actores',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./actores.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/actores/actores.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./actores.page.scss */
      "./src/app/componentes/actores/actores.page.scss"))["default"]]
    })], ActoresPage);
    /***/
  }
}]);
//# sourceMappingURL=componentes-actores-actores-module-es5.js.map