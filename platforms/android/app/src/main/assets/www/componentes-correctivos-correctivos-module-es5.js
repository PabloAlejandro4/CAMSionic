function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-correctivos-correctivos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/correctivos/correctivos.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/correctivos/correctivos.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesCorrectivosCorrectivosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button default-href=\"home\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Correctivos</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button (click)=\"agregar()\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n\r\n\r\n    <ion-item>\r\n        <ion-label>Hallazgos</ion-label>\r\n        <ion-select [(ngModel)]=\"opcion\">\r\n            <ion-select-option value=\"f\">Female</ion-select-option>\r\n            <ion-select-option value=\"m\">Male</ion-select-option>\r\n        </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-searchbar></ion-searchbar>\r\n    <br><br>\r\n\r\n    <ion-card (click)=\"r()\">\r\n        <ion-card-header>\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <ion-card-subtitle>CTBR\r\n                            <ion-label color=\"danger\">32</ion-label>\r\n                        </ion-card-subtitle>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n    <div *ngIf=\"mostrardiv\">\r\n        <p style=\"color: gray; float: left;\">CTBR\r\n        </p>\r\n        <p style=\"color: red; float: right;\">32\r\n        </p>\r\n        <ion-card class=\"interna\">\r\n            <ion-card-header>\r\n                <ion-card-subtitle style=\"color: rgb(13, 255, 5);\">LOCAL\r\n                    <ion-icon name=\"flame-outline\" style=\"color: rgb(255, 5, 5); float: right;\"></ion-icon>\r\n                </ion-card-subtitle>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n                <p style=\"float: left;\">RRA-200519-0101</p>\r\n                <p style=\"float: right;\">Parras</p>\r\n                <br>\r\n                <p style=\" margin-left: 245px;\">SCM</p>\r\n\r\n\r\n            </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card class=\"interna\">\r\n            <ion-card-header>\r\n                <ion-card-subtitle style=\"color: rgb(255, 126, 5);\">FORANEA\r\n                    <ion-icon name=\"flame-outline\" style=\"color: rgb(255, 5, 5); float: right;\"></ion-icon>\r\n\r\n                </ion-card-subtitle>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n                <p style=\"float: left;\">CVL-200519-0101</p>\r\n                <p style=\"float: right;\">Calvillo</p>\r\n                <br>\r\n                <p style=\" margin-left: 245px;\">SCM</p>\r\n\r\n\r\n\r\n            </ion-card-content>\r\n        </ion-card>\r\n        <button (click)=\"hide()\">\r\n            <ion-icon name=\"chevron-up-outline\"></ion-icon>\r\n        </button>\r\n\r\n        <br>\r\n    </div>\r\n\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-subtitle style=\"color: red;\">5</ion-card-subtitle>\r\n            <ion-card-subtitle>FyCSA</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-subtitle style=\"color: red;\">10</ion-card-subtitle>\r\n            <ion-card-subtitle>CM FZA</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n        </ion-card-content>\r\n    </ion-card>\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-subtitle style=\"color: red;\">2</ion-card-subtitle>\r\n            <ion-card-subtitle>CM CX</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n        </ion-card-content>\r\n    </ion-card>\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-subtitle style=\"color: red;\">15</ion-card-subtitle>\r\n            <ion-card-subtitle>SP. PAT</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/componentes/correctivos/correctivos-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/componentes/correctivos/correctivos-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: CorrectivosPageRoutingModule */

  /***/
  function srcAppComponentesCorrectivosCorrectivosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CorrectivosPageRoutingModule", function () {
      return CorrectivosPageRoutingModule;
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


    var _correctivos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./correctivos.page */
    "./src/app/componentes/correctivos/correctivos.page.ts");

    var routes = [{
      path: '',
      component: _correctivos_page__WEBPACK_IMPORTED_MODULE_3__["CorrectivosPage"]
    }];

    var CorrectivosPageRoutingModule = function CorrectivosPageRoutingModule() {
      _classCallCheck(this, CorrectivosPageRoutingModule);
    };

    CorrectivosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CorrectivosPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/componentes/correctivos/correctivos.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/componentes/correctivos/correctivos.module.ts ***!
    \***************************************************************/

  /*! exports provided: CorrectivosPageModule */

  /***/
  function srcAppComponentesCorrectivosCorrectivosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CorrectivosPageModule", function () {
      return CorrectivosPageModule;
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


    var _correctivos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./correctivos-routing.module */
    "./src/app/componentes/correctivos/correctivos-routing.module.ts");
    /* harmony import */


    var _correctivos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./correctivos.page */
    "./src/app/componentes/correctivos/correctivos.page.ts");

    var CorrectivosPageModule = function CorrectivosPageModule() {
      _classCallCheck(this, CorrectivosPageModule);
    };

    CorrectivosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _correctivos_routing_module__WEBPACK_IMPORTED_MODULE_5__["CorrectivosPageRoutingModule"]],
      declarations: [_correctivos_page__WEBPACK_IMPORTED_MODULE_6__["CorrectivosPage"]]
    })], CorrectivosPageModule);
    /***/
  },

  /***/
  "./src/app/componentes/correctivos/correctivos.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/componentes/correctivos/correctivos.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesCorrectivosCorrectivosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n  margin-top: 20px;\n  -webkit-margin-after: 20px;\n          margin-block-end: 20px;\n  float: left;\n  background-color: white;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\nion-img {\n  width: 100px;\n  height: 150px;\n  float: left;\n}\n\nselect {\n  font-size: 16px;\n  border: none;\n}\n\nion-item {\n  margin: auto;\n  margin-top: 60px;\n  width: 280px;\n}\n\nion-searchbar {\n  margin: auto;\n  width: 280px;\n}\n\nion-card {\n  width: 310px;\n  height: 70px;\n  margin: auto;\n  margin-top: 10px;\n  text-align: center;\n}\n\ndiv {\n  width: 310px;\n  margin: auto;\n  margin-top: 10px;\n  border-color: black;\n  border-radius: 3px;\n}\n\n.vertical {\n  transform: rotate(-90deg);\n}\n\n.interna {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\nion-card-subtitle {\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.interna {\n  font-weight: bold;\n  font-size: 16px;\n  text-align: left;\n}\n\np {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY29ycmVjdGl2b3MvQzpcXFVzZXJzXFxFbW1hbnVlbE9ydGl6XFxEb2N1bWVudHNcXEVzdGFkaWFzVFNVXFxDQU1TL3NyY1xcYXBwXFxjb21wb25lbnRlc1xcY29ycmVjdGl2b3NcXGNvcnJlY3Rpdm9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvY29ycmVjdGl2b3MvY29ycmVjdGl2b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSwwQkFBQTtVQUFBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUVJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9jb3JyZWN0aXZvcy9jb3JyZWN0aXZvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuaW9uLWltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmVcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIHdpZHRoOiAyODBweDtcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHdpZHRoOiAzMTBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICB3aWR0aDogMzEwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLnZlcnRpY2FsIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbn1cclxuXHJcbi5pbnRlcm5hIHtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaW50ZXJuYSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iLCJidXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYmxvY2stZW5kOiAyMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuaW9uLWltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbnNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgd2lkdGg6IDI4MHB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMjgwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDMxMHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5kaXYge1xuICB3aWR0aDogMzEwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4udmVydGljYWwge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG5cbi5pbnRlcm5hIHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaW50ZXJuYSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnAge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/componentes/correctivos/correctivos.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/componentes/correctivos/correctivos.page.ts ***!
    \*************************************************************/

  /*! exports provided: CorrectivosPage */

  /***/
  function srcAppComponentesCorrectivosCorrectivosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CorrectivosPage", function () {
      return CorrectivosPage;
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


    var _nuevocorrectivo_nuevocorrectivo_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../nuevocorrectivo/nuevocorrectivo.page */
    "./src/app/componentes/nuevocorrectivo/nuevocorrectivo.page.ts");

    var CorrectivosPage = /*#__PURE__*/function () {
      function CorrectivosPage(camera, modalCtrl) {
        _classCallCheck(this, CorrectivosPage);

        this.camera = camera;
        this.modalCtrl = modalCtrl; //initializeApp(environment.firebase);

        this.mostrardiv = false;
      }

      _createClass(CorrectivosPage, [{
        key: "agregar",
        value: function agregar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _nuevocorrectivo_nuevocorrectivo_page__WEBPACK_IMPORTED_MODULE_4__["NuevocorrectivoPage"],
                      componentProps: {
                        Actividad: 'Grupo electrogeno'
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    return _context.abrupt("return", modal.present());

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "r",
        value: function r() {
          console.log('hola');
          this.mostrardiv = !this.mostrardiv;
        }
      }, {
        key: "hide",
        value: function hide() {
          this.mostrardiv = false;
        }
        /*
          async hacerFoto() {
          
            const options: CameraOptions = {
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              correctOrientation: true
            }
            const result = await this.camera.getPicture(options).then((imageData) => {
              this.foto = 'data:image/jpeg;base64,' + imageData;
              this.informacionImagen = imageData;
            }, (err) => {
              console.log(err);
            });
          }
          guardarImg(){
            console.log(foto);
            this.imagenesService.guardarFoto(foto);
            this.imagenesService.obtenerFotos();
            const pictures = storage().ref('pictures/CAMS/');
            pictures.putString(this.foto, 'data_url');
            let urlI = pictures.getDownloadURL();
        
        }
        
        guardarFoto(){
          return this.httpClient.post('http://192.168.1.71:3000/uploadImg', {
          sampleFile: this.foto
        }).subscribe(
              data => {
                console.log(data);
        
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Exito' + data,
                  showConfirmButton: true,
                });
                //this.router.navigate(['tabs', 'tab1' ]);
        
              },
              (err) => {
                console.log(err);
        
                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Error',
                  text: err.error,
                  showConfirmButton: true
                });
        
              }
        
        
            );
        }
        
        obtenerImg(){
          console.log('tomando...');
          const storageRef = storage().refFromURL('gs://pruebascams-a4e95.appspot.com/pictures/CAMS');
          storageRef.getDownloadURL().then(function(url) {
            // `url` is the download URL for 'images/stars.jpg'
          (<HTMLInputElement>document.getElementById('img')).src = url;
        
          console.log(url);
          }).catch(function(error) {
            // Handle any errors
            console.log(error);
          });
          
        }*/

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CorrectivosPage;
    }();

    CorrectivosPage.ctorParameters = function () {
      return [{
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    CorrectivosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-correctivos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./correctivos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/correctivos/correctivos.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./correctivos.page.scss */
      "./src/app/componentes/correctivos/correctivos.page.scss"))["default"]]
    })], CorrectivosPage);
    /***/
  }
}]);
//# sourceMappingURL=componentes-correctivos-correctivos-module-es5.js.map