(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/crearactividad/crearactividad.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/crearactividad/crearactividad.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n\n        <ion-title>Crear Actividad</ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>Nueva Actividad</ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n            <ion-item>\n                <ion-label>Actividad:</ion-label>\n                <ion-input type=\"text\" placeholder=\"Nombre de la Actividad\" [(ngModel)]=\"nombre\"></ion-input>\n\n            </ion-item>\n\n\n            <ion-button color=\"danger\" (click)=\"cancel()\" outline>Cancelar</ion-button>\n            <ion-button color=\"primary\" outline (click)=\"add()\">Guardar</ion-button>\n        </ion-card-content>\n    </ion-card>\n\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/editaractividad/editaractividad.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/editaractividad/editaractividad.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n    <ion-toolbar color=\"primary\">\n\n        <ion-title>Editar Actividad</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-card-header>\n\n            <ion-card-title>{{Actividad}}</ion-card-title>\n\n        </ion-card-header>\n        <ion-card-content>\n            <ion-grid id=\"capa\">\n                <ion-row>\n                    <ion-col>Actividad</ion-col>\n                    <ion-col>Criticidad</ion-col>\n                    <ion-col></ion-col>\n\n                </ion-row>\n                <ion-row *ngFor=\"let item of items index as i\">\n                    <ion-col>\n                        <ion-input placeholder=\"Nombre\" [(ngModel)]=\"tareas[i].nombre\"></ion-input>\n                    </ion-col>\n                    <ion-col>\n                        <ion-select [(ngModel)]=\"tareas[i].criticidad\">\n                            <ion-select-option value=\"alta\">Alta</ion-select-option>\n                            <ion-select-option value=\"media\">Media</ion-select-option>\n                            <ion-select-option value=\"baja\">Baja</ion-select-option>\n\n                        </ion-select>\n\n                    </ion-col>\n                    <ion-col>\n                        <button style=\"background-color: #3880ff; border-radius: 4px;\" (click)=\"salvar(i)\">\n                  <ion-icon style=\"height: 30px\" name=\"checkmark-circle-outline\"></ion-icon>\n                </button>\n                        <button style=\"background-color: #eb445a; border-radius: 4px; margin-left: 10px;\" (click)=\"quit(i)\">\n                  <ion-icon style=\"height: 30px\" name=\"trash\"></ion-icon>\n                  \n              </button>\n\n                    </ion-col>\n                </ion-row>\n\n            </ion-grid>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <button style=\"background-color: white; float: right;\" (click)=\"ADD()\">\n                      <ion-icon  name=\"add-circle-outline\"></ion-icon></button>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <ion-button color=\"danger\" (click)=\"alert()\">Cancelar</ion-button>\n                    </ion-col>\n                    <ion-col>\n                        <ion-button>Borrar</ion-button>\n\n                    </ion-col>\n                    <ion-col>\n                        <ion-button color=\"success\" (click)=\"guardar()\">Guardar</ion-button>\n\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-card-content>\n\n\n    </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/componentes/crearactividad/crearactividad.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/componentes/crearactividad/crearactividad.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  margin-top: 30px;\n  -webkit-margin-after: 20px;\n          margin-block-end: 20px;\n}\n\nion-button {\n  margin-left: 10px;\n}\n\nion-card {\n  text-align: center;\n  margin-top: 50px;\n  margin-left: 20px;\n  margin-right: 20px;\n  -webkit-margin-after: 20px;\n          margin-block-end: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY3JlYXJhY3RpdmlkYWQvQzpcXFVzZXJzXFxFbW1hbnVlbE9ydGl6XFxEb2N1bWVudHNcXEVzdGFkaWFzVFNVXFxDQU1TL3NyY1xcYXBwXFxjb21wb25lbnRlc1xcY3JlYXJhY3RpdmlkYWRcXGNyZWFyYWN0aXZpZGFkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvY3JlYXJhY3RpdmlkYWQvY3JlYXJhY3RpdmlkYWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSwwQkFBQTtVQUFBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtVQUFBLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9jcmVhcmFjdGl2aWRhZC9jcmVhcmFjdGl2aWRhZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMjBweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMjBweDtcclxufSIsImlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMjBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/componentes/crearactividad/crearactividad.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/componentes/crearactividad/crearactividad.page.ts ***!
  \*******************************************************************/
/*! exports provided: CrearactividadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearactividadPage", function() { return CrearactividadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _servicios_actividad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/actividad.service */ "./src/app/componentes/servicios/actividad.service.ts");





let CrearactividadPage = class CrearactividadPage {
    constructor(modalCtrl, alertCtrl, servicioActividad) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.servicioActividad = servicioActividad;
        this.criticidad = ['Alta', 'Media', 'Baja'];
    }
    cancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.modalCtrl.dismiss();
        });
    }
    add() {
        this.servicioActividad.agregarActividad(this.nombre);
        this.nombre = '';
    }
    ngOnInit() {
    }
};
CrearactividadPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _servicios_actividad_service__WEBPACK_IMPORTED_MODULE_3__["ActividadService"] }
];
CrearactividadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crearactividad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crearactividad.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/crearactividad/crearactividad.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./crearactividad.page.scss */ "./src/app/componentes/crearactividad/crearactividad.page.scss")).default]
    })
], CrearactividadPage);



/***/ }),

/***/ "./src/app/componentes/editaractividad/editaractividad.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/componentes/editaractividad/editaractividad.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  text-align: center;\n  margin-top: 20px;\n}\n\nion-button {\n  margin-top: 20px;\n  float: right;\n  font-size: 10px;\n}\n\nbutton {\n  background-color: white;\n}\n\nion-searchbar {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvZWRpdGFyYWN0aXZpZGFkL0M6XFxVc2Vyc1xcRW1tYW51ZWxPcnRpelxcRG9jdW1lbnRzXFxFc3RhZGlhc1RTVVxcQ0FNUy9zcmNcXGFwcFxcY29tcG9uZW50ZXNcXGVkaXRhcmFjdGl2aWRhZFxcZWRpdGFyYWN0aXZpZGFkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvZWRpdGFyYWN0aXZpZGFkL2VkaXRhcmFjdGl2aWRhZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2VkaXRhcmFjdGl2aWRhZC9lZGl0YXJhY3RpdmlkYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1zZWFyY2hiYXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufSIsImlvbi1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/componentes/editaractividad/editaractividad.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/componentes/editaractividad/editaractividad.page.ts ***!
  \*********************************************************************/
/*! exports provided: EditaractividadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditaractividadPage", function() { return EditaractividadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let EditaractividadPage = class EditaractividadPage {
    constructor(modalCtrl, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        console.log(this.Actividad);
        this.items = [0];
        this.tareas = [{
                nombre: '',
                criticidad: 'media'
            }
        ];
    }
    ADD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.items.push(0);
            this.tareas.push({
                nombre: '',
                criticidad: 'media'
            });
        });
    }
    guardar() {
        console.log(this.tareas);
    }
    salvar(posicion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.tareas[posicion].nombre);
            console.log(this.tareas[posicion].criticidad);
        });
    }
    quit(posicion) {
        this.items.splice(posicion);
        this.tareas.splice(posicion);
    }
    alert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Atencion',
                message: 'Todos los movimientos que ha realizado seran descartados. ¿Confirma que desea proceder?',
                buttons: [
                    {
                        text: 'Descartar cambios',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            this.modalCtrl.dismiss();
                        }
                    },
                    {
                        text: 'Seguir editando',
                        handler: (blah) => {
                            console.log('Seguir editando');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ngOnInit() {
    }
};
EditaractividadPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EditaractividadPage.prototype, "Actividad", void 0);
EditaractividadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editaractividad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editaractividad.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/editaractividad/editaractividad.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editaractividad.page.scss */ "./src/app/componentes/editaractividad/editaractividad.page.scss")).default]
    })
], EditaractividadPage);



/***/ }),

/***/ "./src/app/componentes/servicios/actividad.service.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/servicios/actividad.service.ts ***!
  \************************************************************/
/*! exports provided: ActividadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadService", function() { return ActividadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");



let ActividadService = class ActividadService {
    constructor(storage) {
        this.storage = storage;
        this.actividades = [];
    }
    agregarActividad(nombre) {
        this.actividades.push({
            nombre
        });
        console.log(this.actividades);
    }
    guardar() {
        this.storage.set('actividades', this.actividades);
    }
};
ActividadService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
ActividadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ActividadService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map