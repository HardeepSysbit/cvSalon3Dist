function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _optimus_minds_optimus_minds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./optimus-minds/optimus-minds */
    "./src/app/optimus-minds/optimus-minds.ts");
    /* harmony import */


    var _cv_salon_cv_salon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cv-salon/cv-salon */
    "./src/app/cv-salon/cv-salon.ts");
    /* harmony import */


    var _lms_lms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lms/lms.component */
    "./src/app/lms/lms.component.ts");
    /* import { OptimusMindsComponent } from './optimus-mindsOld/optimus-minds.component';
    import { OptimusMindsAdminComponent } from './optimus-minds-admin/optimus-minds-admin.component';
     */

    /* import { CvSalonComposerComponent } from './cv-salon/cv-salon-composer/cv-salon-composer.component';
    import { CvSalonViewerComponent } from './cv-salon/cv-salon-viewer/cv-salon-viewer.component';
    import { OptimusMindsSiteComponent } from './optimus-minds/optimus-minds-site/optimus-minds-site.component';
    import { OptimusMindsComposerComponent } from './optimus-minds/optimus-minds-composer/optimus-minds-composer.component';
    import { OptimusMindsViewerComponent } from './optimus-minds/optimus-minds-viewer/optimus-minds-viewer.component';
    
     */


    var routes = [{
      path: '',
      component: _cv_salon_cv_salon__WEBPACK_IMPORTED_MODULE_3__["CvSalon"],
      pathMatch: 'full'
    }, {
      path: 'optimusminds',
      component: _cv_salon_cv_salon__WEBPACK_IMPORTED_MODULE_3__["CvSalon"],
      pathMatch: 'full'
    }, {
      path: 'optimusminds/:email',
      component: _cv_salon_cv_salon__WEBPACK_IMPORTED_MODULE_3__["CvSalon"],
      pathMatch: 'full'
    }, {
      path: 'admin/optimusminds',
      component: _optimus_minds_optimus_minds__WEBPACK_IMPORTED_MODULE_2__["OptimusMinds"],
      pathMatch: 'full'
    }, {
      path: 'lms',
      component: _lms_lms_component__WEBPACK_IMPORTED_MODULE_4__["LmsComponent"],
      pathMatch: 'full'
    }, {
      path: 'lms/:email',
      component: _lms_lms_component__WEBPACK_IMPORTED_MODULE_4__["LmsComponent"],
      pathMatch: 'full'
    }
    /*  { path: 'cvsalon', component: CvSalonSiteComponent },
     { path: 'cvsalon/:email', component: CvSalonSiteComponent },
     { path: 'optimusminds', component:  OptimusMindsComponent , pathMatch:  'full' },
     { path: 'optimusminds/admin', component:  OptimusMindsAdminComponent , pathMatch:  'full' },
     { path: 'optimusminds/:email', component:  OptimusMindsComponent , pathMatch:  'full' },
     { path: 'optimusminds/admin/:email', component:  OptimusMindsAdminComponent , pathMatch:  'full' },
     { path: ':_id', component:  MainComponent, pathMatch:  'full' } ,
      { path:'about', component: AboutComponent } */
    ];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lib_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/global */
    "./src/app/lib/global.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _lib_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lib/dialog */
    "./src/app/lib/dialog/index.ts");
    /* harmony import */


    var _lib_restSvc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./lib/restSvc */
    "./src/app/lib/restSvc.ts");
    /* harmony import */


    var _lib_ctrlSvc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./lib/ctrlSvc */
    "./src/app/lib/ctrlSvc.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _lib_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./lib/dialog/dialog.component */
    "./src/app/lib/dialog/dialog.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function AppComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var err_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", err_r6, " ");
      }
    }

    function AppComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "LogIn via Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Please provide an email address to receive an authorisation pin for access. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_14_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_14_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.onAuthEmail();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ok");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disableAuthEmail());
      }
    }

    function AppComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enter PIN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "PIN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_15_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.pin = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_15_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.onAuthPin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ok");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please provide the PIN code that was sent to the ", ctx_r2.email, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.pin);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.disableAuthPin());
      }
    }

    function AppComponent_div_22_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Documents to be uploaded : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_22_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var doc_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", doc_r15.docTable, " : ", doc_r15.docName, " ");
      }
    }

    function AppComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_22_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.declareChk = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " I declare that the infomation provided by me to be true.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_22_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.shareChk = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I allow for my information to be shared with prospective client\\s");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_22_div_9_Template, 2, 0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ol");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_22_div_11_Template, 3, 2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.declareChk);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.shareChk);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.docs.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.docs);
      }
    }

    function AppComponent_div_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Documents to be uploaded : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var doc_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", doc_r19.docTable, " : ", doc_r19.docName, " ");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(dlgSvc, restSvc, ctrlSvc) {
        _classCallCheck(this, AppComponent);

        this.dlgSvc = dlgSvc;
        this.restSvc = restSvc;
        this.ctrlSvc = ctrlSvc;
        this.title = 'cvSalon ver 1.0';
        this.tableName = "applicants";
        this.pin = "";
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].email = "";
        }
      }, {
        key: "cancelSubmit",
        value: function cancelSubmit() {
          this.dlgSvc.close('dlgSubmit');
        }
      }, {
        key: "okSubmit",
        value: function okSubmit() {
          this.onSave();
          this.dlgSvc.close('dlgSubmit');
        }
      }, {
        key: "onErrClose",
        value: function onErrClose() {
          this.dlgSvc.close('dlgErr');
        } //  get  pin() {
        //     return Global.pin ;
        //   }
        //   set  pin(value) {
        //      Global.pin = value ;
        //   }

      }, {
        key: "onAuthPin",
        value: function onAuthPin() {
          if (this.pin != _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].pin) {
            alert('Wrong Pin Supplied');
            return;
          }

          this.dlgSvc.close('dlgAuth');

          if (_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].adminLevelReq === 0) {
            if (_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"]._id != "") {
              this.restSvc.getById(_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"]._id).then(function (data) {
                var aryKeys = Object.keys(data);
                var value = "";

                for (var i = 0; i < aryKeys.length; i++) {
                  value = data[aryKeys[i]];
                  _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData[aryKeys[i]] = value;
                  _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData[aryKeys[i]] = value;
                }
              });
              this.restSvc.getPhoto(_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"]._id);
            }
          } else {}
        }
      }, {
        key: "disableSubmit",
        value: function disableSubmit() {
          if (_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].clientName == "optimusMinds") {
            return this.declareChk && this.shareChk ? false : true;
          } else {
            return false;
          }
        }
      }, {
        key: "disableAuthEmail",
        value: function disableAuthEmail() {
          var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

          if (this.email == "") {
            return true;
          } else if (this.email.length <= 5 || !EMAIL_REGEXP.test(this.email)) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "disableAuthPin",
        value: function disableAuthPin() {
          return this.pin == _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].pin ? false : true;
        }
      }, {
        key: "onAuthEmail",
        value: function onAuthEmail() {
          var _this = this;

          this.restSvc.emailToken(_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].email).then(function (msg) {
            var adminLevel = msg['adminLevel'];

            if (adminLevel < _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].adminLevelReq) {
              alert("User with email: ".concat(_this.email, " does not have the required Administrator Access Level"));
              return;
            } //    alert(JSON.stringify(msg)) ;
            //   Global.email = email ;


            _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].token = msg['token'];
            _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].pin = msg['pin'];
            _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"]._id = msg['_id'];
            _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].dlgAuthMode = 2; // Temporary 
            // this.pin = Global.pin;
            //Global.dlgAuthMode = 2 ;
            // this.openModal('dlgAuth');
          }, function (err) {
            alert(JSON.stringify(err));
          });
        }
      }, {
        key: "onQry",
        value: function onQry() {
          this.restSvc.onBtnAction('qry'); // Global.makeProgramList() ;
          // alert(JSON.stringify(Global.locData["programs"] )) ;

          /*
            this.restSvc.qryTrainer(Global.locData["programs"]).then(
              (rcvd) =>  {
          
               
          
                  let obj = {} ;
                
                  obj["list"] = rcvd ;
                  
                  Global.trainers = obj["list"]  ;
          
                  
          
              } ,
              (err) =>  {
               
              }
              ) */
        }
        /*
        onSave113() {
        
         let toSaveApplicant = {} ;
        
        
         let aryKeys = Object.keys(Global.locData);
         let key = "" ;
        
          
        
         for(let i = 0; i < aryKeys.length;i++) {
            key = aryKeys[i] ;
            
             if (Global.locData[key] != Global.dbData[key] )   {
                toSaveApplicant[key] = Global.locData[key] ;
             }
        }
        
        
        
        if (Global._id === "")
          {
        
            this.restSvc.createApplicant(toSaveApplicant).then(
              (rcvd) =>  {
        
                  
                 
                   Global._id = rcvd['_id'] ;
        
                   
                  for(let i = 0; i < Global.docs.length;i++) {
                         // this.upLoadDocs(Global._id, Global.docs[i]['docType'], Global.docs[i]['table'], Global.docs[i]['file']) ;
                         this.upLoadDocs(Global._id, Global.docs[i]['docType'], Global.docs[i]['docTable'], Global.docs[i]['docId'], Global.docs[i]['file']) ;
             
                     }
        
              } ,
              (err) =>  {
               
              }
              )
        
          }
          else
          {
        
            this.restSvc.updateApplicant(toSaveApplicant, Global._id ).then(
              (msg) =>  {
            
                
            
               for(let i = 0; i < Global.docs.length;i++) {
                this.upLoadDocs(Global._id, Global.docs[i]['docType'], Global.docs[i]['docTable'], Global.docs[i]['docId'], Global.docs[i]['file']) ;
                }
              
              } ,
              (err) =>  {
            
                alert(JSON.stringify(err)) ;
            
              }
              )
          }
        
          
         
        }
         */

      }, {
        key: "onSave",
        value: function onSave() {
          var _this2 = this;

          var objData = {};
          var aryKeys = Object.keys(_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData);
          var key = "";

          if (this.tableName == "trainer") {
            _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].makeProgramList();
          }

          for (var i = 0; i < aryKeys.length; i++) {
            key = aryKeys[i];

            if (_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData[key] != _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData[key]) {
              objData[key] = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData[key];
            }
          }

          if (_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"]._id === "") {
            this.restSvc.create(objData).then(function (rcvd) {
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"]._id = rcvd['_id'];

              for (var _i = 0; _i < _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].docs.length; _i++) {
                _this2.upLoadDocs(_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"]._id, _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].docs[_i]['docType'], _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].docs[_i]['docTable'], _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].docs[_i]['docId'], _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].docs[_i]['file']);
              }
            }, function (err) {});
          } else {
            this.restSvc.update(objData, _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"]._id).then(function (msg) {
              for (var _i2 = 0; _i2 < _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].docs.length; _i2++) {
                _this2.upLoadDocs(_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"]._id, _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].docs[_i2]['docType'], _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].docs[_i2]['docTable'], _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].docs[_i2]['docId'], _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].docs[_i2]['file']);
              }
            }, function (err) {
              alert(JSON.stringify(err));
            });
          }
        }
      }, {
        key: "upLoadDocs",
        value: function upLoadDocs(_id, docType, docTable, docId, file) {
          var formData = new FormData();
          formData.append('_id', _id);
          formData.append('docTable', docTable);
          formData.append('docId', docId);
          formData.append('file', file);
          file.inProgress = true;
          this.restSvc.upLoadDoc(formData, docType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            switch (event.type) {
              case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress:
                file.progress = Math.round(event.loaded * 100 / event.total);
                break;

              case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                return event;
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            file.inProgress = false;
            alert(error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])("".concat(file.data.name, " upload failed."));
          })).subscribe(function (event) {
            if (typeof event === 'object') {}
          });
        }
      }, {
        key: "onPdf",
        value: function onPdf() {
          this.restSvc.onBtnAction('pdf');
          /*
          var data = document.getElementById('wysiwyg');
          html2canvas(data).then(canvas => {
          // Few necessary setting options
          var imgWidth = 208;
          var pageHeight = 295;
          var imgHeight = canvas.height * imgWidth / canvas.width;
          var heightLeft = imgHeight;
           
          const contentDataURL = canvas.toDataURL('image/png')
          let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
          var position = 0;
          pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
          pdf.save('new-file.pdf'); // Generated PDF
          }); */
        }
        /* upLoadPhoto(_id)
        {
        
        
            
        
              const formData = new FormData();
              formData.append('file', Global.photoFile);
              formData.append('trainerFolder',_id);
        
        
           
               Global.photoFile.inProgress = true;
        
        
        
              this.restSvc.upLoadPhoto(formData).pipe(
                map(event => {
                  switch (event.type) {
                    case HttpEventType.UploadProgress:
                    Global.photoFile.progress = Math.round(event.loaded * 100 / event.total);
                    
                  
                    break;
                    case HttpEventType.Response:
                      return event;
                  }
                }),
                catchError((error: HttpErrorResponse) => {
                  Global.photoFile.inProgress = false;
               
                  alert(error.message) ;
                  return of(`${  Global.photoFile.data.name} upload failed.`);
          
                })).subscribe((event: any) => {
                  if (typeof (event) === 'object') {
                 
        
        
                  }
                });
        
        
        
        
        
        }
         */

      }, {
        key: "clientName",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].clientName;
        }
      }, {
        key: "docs",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].docs;
        }
      }, {
        key: "errList",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].errList;
        }
      }, {
        key: "declareChk",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["declareChk"];
        },
        set: function set(value) {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["declareChk"] = value;
        }
      }, {
        key: "shareChk",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["shareChk"];
        },
        set: function set(value) {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["shareChk"] = value;
        }
      }, {
        key: "dlgAuthMode",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].dlgAuthMode;
        }
      }, {
        key: "email",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].email;
        },
        set: function set(value) {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].email = value;
        }
      }, {
        key: "logo",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].logo;
        }
      }, {
        key: "domainName",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].domainName;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lib_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lib_restSvc__WEBPACK_IMPORTED_MODULE_6__["RestSvc"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lib_ctrlSvc__WEBPACK_IMPORTED_MODULE_7__["CtrlSvc"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 49,
      vars: 10,
      consts: [[1, "container"], ["id", "dlgErr"], ["fxFlex", "", "fxLayout", "column"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "end center", 1, "btn"], [3, "click"], ["id", "dlgAuth"], [4, "ngIf"], ["id", "dlgSubmit"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxLayout", "row", 2, "text-align", "center"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "btn"], [3, "disabled", "click"], ["id", "dlgSubmitOld"], ["fxLayout", "row"], [1, "chkBoxes"], ["id", "declare", "name", "declare", "type", "checkbox", 1, "leftA", 3, "ngModel", "ngModelChange"], ["for", "declare", 1, "rightA"], ["id", "share", "name", "share", "type", "checkbox", 1, "leftA", 3, "ngModel", "ngModelChange"], ["fxLayout", "column"], ["for", "email"], ["id", "email", "name", "email", "type", "email", 2, "width", "330px", 3, "ngModel", "ngModelChange"], ["for", "pin"], ["id", "pin", "name", "pin", "type", "pin", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["fxLayout", "row", "style", "text-align: center;", 4, "ngIf"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "dialog", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Errors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_9_Template, 3, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener() {
            return ctx.onErrClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "dialog", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_div_14_Template, 14, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_15_Template, 14, 3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "dialog", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Submit Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Data provided will be saved on the server and available for you. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppComponent_div_22_Template, 12, 4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_24_listener() {
            return ctx.cancelSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_26_listener() {
            return ctx.okSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "dialog", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_34_listener($event) {
            return ctx.declareChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " I declare that the infomation provided by me to be true.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_37_listener($event) {
            return ctx.shareChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "I allow for my information to be shared with prospective client\\s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AppComponent_div_41_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AppComponent_div_43_Template, 3, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_45_listener() {
            return ctx.cancelSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_47_listener() {
            return ctx.okSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.errList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dlgAuthMode === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dlgAuthMode === 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clientName == "optimusMinds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disableSubmit());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.declareChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.shareChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.docs.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.docs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disableSubmit());
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"], _lib_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"]],
      styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  z-index: 5;\n  background-color: white;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-areas: \"header\" \"navbar\" \"main\" \"blank\" \"footer\";\n}\n\napp-header[_ngcontent-%COMP%] {\n  grid-area: header;\n}\n\napp-navbar[_ngcontent-%COMP%] {\n  grid-area: navbar;\n}\n\nrouter-outlet[_ngcontent-%COMP%] {\n  grid-area: main;\n}\n\napp-footer[_ngcontent-%COMP%] {\n  grid-area: footer;\n}\n\n.checkboxes[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 10px;\n  white-space: nowrap;\n  background-color: white;\n  font-size: 14px;\n}\n\n.checkboxes[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.checkboxes[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.chkBoxes[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30px 2fr;\n  grid-auto-flow: dense;\n  margin-left: 5px;\n}\n\n.leftA[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  color: black;\n  background-color: white;\n}\n\n.rightA[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  grid-column: 2/3;\n  color: black;\n  font-size: 100%;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXERhdGFcXGRldjIwMjBcXGN2U2Fsb24zXFxjdlNhbG9uL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsOERBQ0E7QUNBSjs7QURhQTtFQUNJLGlCQUFBO0FDVko7O0FEYUE7RUFDSSxpQkFBQTtBQ1ZKOztBRGVBO0VBQ0ksZUFBQTtBQ1pKOztBRGVBO0VBQ0ksaUJBQUE7QUNaSjs7QURnQkE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNiSjs7QURnQkU7RUFDRSxzQkFBQTtBQ2JKOztBRGVFO0VBQ0Usc0JBQUE7QUNaSjs7QURlRTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBRUEsZ0JBQUE7QUNiSjs7QURnQkU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ2JKOztBRGdCRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNiSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgXCJoZWFkZXJcIlxyXG4gICAgIFwibmF2YmFyXCJcclxuICAgICBcIm1haW5cIiAgXHJcbiAgICAgXCJibGFua1wiICBcclxuICAgIFwiZm9vdGVyXCJcclxuICAgIDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5hcHAtaGVhZGVyIHtcclxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xyXG59XHJcblxyXG5hcHAtbmF2YmFyIHtcclxuICAgIGdyaWQtYXJlYTogbmF2YmFyO1xyXG4gIFxyXG4gICBcclxufVxyXG5cclxucm91dGVyLW91dGxldCAge1xyXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xyXG59XHJcblxyXG5hcHAtZm9vdGVyIHtcclxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xyXG59ICBcclxuXHJcbiBcclxuLmNoZWNrYm94ZXMgbGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgfVxyXG4gIC5jaGVja2JveGVzIGlucHV0IHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIC5jaGVja2JveGVzIGxhYmVsIHNwYW4ge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcblxyXG4gIC5jaGtCb3hlcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDJmcjtcclxuICAgIGdyaWQtYXV0by1mbG93OiBkZW5zZTtcclxuICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4gIC5sZWZ0QSB7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgfVxyXG5cclxuICAgLnJpZ2h0QSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgXHJcbiAgIH1cclxuICAiLCIuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImhlYWRlclwiIFwibmF2YmFyXCIgXCJtYWluXCIgXCJibGFua1wiIFwiZm9vdGVyXCI7XG59XG5cbmFwcC1oZWFkZXIge1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbn1cblxuYXBwLW5hdmJhciB7XG4gIGdyaWQtYXJlYTogbmF2YmFyO1xufVxuXG5yb3V0ZXItb3V0bGV0IHtcbiAgZ3JpZC1hcmVhOiBtYWluO1xufVxuXG5hcHAtZm9vdGVyIHtcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XG59XG5cbi5jaGVja2JveGVzIGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2hlY2tib3hlcyBpbnB1dCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jaGVja2JveGVzIGxhYmVsIHNwYW4ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY2hrQm94ZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMmZyO1xuICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5sZWZ0QSB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5yaWdodEEge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGdyaWQtY29sdW1uOiAyLzM7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _lib_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }, {
          type: _lib_restSvc__WEBPACK_IMPORTED_MODULE_6__["RestSvc"]
        }, {
          type: _lib_ctrlSvc__WEBPACK_IMPORTED_MODULE_7__["CtrlSvc"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _app_lib_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../app/lib/dialog */
    "./src/app/lib/dialog/index.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-quill */
    "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");
    /* harmony import */


    var _lib_headerInjector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./lib/headerInjector */
    "./src/app/lib/headerInjector.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _cv_salon_cv_salon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./cv-salon/cv-salon */
    "./src/app/cv-salon/cv-salon.ts");
    /* harmony import */


    var _cv_salon_cv_salon_composer_cv_salon_composer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./cv-salon/cv-salon-composer/cv-salon-composer.component */
    "./src/app/cv-salon/cv-salon-composer/cv-salon-composer.component.ts");
    /* harmony import */


    var _cv_salon_cv_salon_viewer_cv_salon_viewer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./cv-salon/cv-salon-viewer/cv-salon-viewer.component */
    "./src/app/cv-salon/cv-salon-viewer/cv-salon-viewer.component.ts");
    /* harmony import */


    var _optimus_minds_optimus_minds_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./optimus-minds/optimus-minds-admin.component */
    "./src/app/optimus-minds/optimus-minds-admin.component.ts");
    /* harmony import */


    var _optimus_minds_optimus_minds__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./optimus-minds/optimus-minds */
    "./src/app/optimus-minds/optimus-minds.ts");
    /* harmony import */


    var _lib_programfilter_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./lib/programfilter.pipe */
    "./src/app/lib/programfilter.pipe.ts");
    /* harmony import */


    var _lms_lms_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./lms/lms.component */
    "./src/app/lms/lms.component.ts");
    /* harmony import */


    var _lms_menu_lms_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./lms-menu/lms-menu.component */
    "./src/app/lms-menu/lms-menu.component.ts");
    /* harmony import */


    var _lms_window_lms_window_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./lms-window/lms-window.component */
    "./src/app/lms-window/lms-window.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/youtube-player */
    "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");
    /* import { ModalModule} from '../app/lib/_modal' */


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
        useClass: _lib_headerInjector__WEBPACK_IMPORTED_MODULE_8__["HeaderInjector"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
      /*  ModalModule, */
      _app_lib_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_7__["QuillModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_24__["YouTubePlayerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"], _cv_salon_cv_salon__WEBPACK_IMPORTED_MODULE_14__["CvSalon"], _cv_salon_cv_salon_composer_cv_salon_composer_component__WEBPACK_IMPORTED_MODULE_15__["CvSalonComposerComponent"], _cv_salon_cv_salon_viewer_cv_salon_viewer_component__WEBPACK_IMPORTED_MODULE_16__["CvSalonViewerComponent"], _optimus_minds_optimus_minds_admin_component__WEBPACK_IMPORTED_MODULE_17__["OptimusMindsAdminComponent"], _optimus_minds_optimus_minds__WEBPACK_IMPORTED_MODULE_18__["OptimusMinds"], _lib_programfilter_pipe__WEBPACK_IMPORTED_MODULE_19__["ProgramfilterPipe"], _lms_lms_component__WEBPACK_IMPORTED_MODULE_20__["LmsComponent"], _lms_menu_lms_menu_component__WEBPACK_IMPORTED_MODULE_21__["LmsMenuComponent"], _lms_window_lms_window_component__WEBPACK_IMPORTED_MODULE_22__["LmsWindowComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        /*  ModalModule, */
        _app_lib_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_7__["QuillModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_24__["YouTubePlayerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"], _cv_salon_cv_salon__WEBPACK_IMPORTED_MODULE_14__["CvSalon"], _cv_salon_cv_salon_composer_cv_salon_composer_component__WEBPACK_IMPORTED_MODULE_15__["CvSalonComposerComponent"], _cv_salon_cv_salon_viewer_cv_salon_viewer_component__WEBPACK_IMPORTED_MODULE_16__["CvSalonViewerComponent"], _optimus_minds_optimus_minds_admin_component__WEBPACK_IMPORTED_MODULE_17__["OptimusMindsAdminComponent"], _optimus_minds_optimus_minds__WEBPACK_IMPORTED_MODULE_18__["OptimusMinds"], _lib_programfilter_pipe__WEBPACK_IMPORTED_MODULE_19__["ProgramfilterPipe"], _lms_lms_component__WEBPACK_IMPORTED_MODULE_20__["LmsComponent"], _lms_menu_lms_menu_component__WEBPACK_IMPORTED_MODULE_21__["LmsMenuComponent"], _lms_window_lms_window_component__WEBPACK_IMPORTED_MODULE_22__["LmsWindowComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
          /*  ModalModule, */
          _app_lib_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_7__["QuillModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_24__["YouTubePlayerModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
            useClass: _lib_headerInjector__WEBPACK_IMPORTED_MODULE_8__["HeaderInjector"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cv-salon/cv-salon-composer/cv-salon-composer.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/cv-salon/cv-salon-composer/cv-salon-composer.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CvSalonComposerComponent */

  /***/
  function srcAppCvSalonCvSalonComposerCvSalonComposerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvSalonComposerComponent", function () {
      return CvSalonComposerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lib_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../lib/global */
    "./src/app/lib/global.ts");
    /* harmony import */


    var _lib_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../lib/dialog */
    "./src/app/lib/dialog/index.ts");
    /* harmony import */


    var _lib_restSvc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../lib/restSvc */
    "./src/app/lib/restSvc.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _lib_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../lib/dialog/dialog.component */
    "./src/app/lib/dialog/dialog.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_quill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-quill */
    "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");

    function CvSalonComposerComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_div_2_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r45.onMoe();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " MOE License ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_div_2_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.onMoe();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "play_arrow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_div_3_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r49.onProfile();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Personnal information ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_div_3_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r51.onAboutMe();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " About Me ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_div_3_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          return _r48.click();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Photo ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 60, 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CvSalonComposerComponent_div_3_Template_input_change_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r53.onAttach($event, "photo");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_div_3_Template_div_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r54.onEdu();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Educational information ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_div_3_Template_div_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r55.onExp();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Work Experiences ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_div_3_Template_div_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r56.onCert();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Certifications ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_div_3_Template_div_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r57.onSkill();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Skills ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_div_3_Template_div_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r58.onAcheive();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Acheivements ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_div_3_Template_div_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r59.onProfile();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "play_arrow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_div_3_Template_div_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r60.onAboutMe();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "play_arrow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_div_3_Template_div_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          return _r48.click();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "play_arrow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_div_3_Template_div_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r62.onEdu();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "i", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "play_arrow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_div_3_Template_div_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r63.onExp();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "play_arrow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_div_3_Template_div_click_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r64.onCert();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "i", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "play_arrow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_div_3_Template_div_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r65.onSkill();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "i", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "play_arrow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_div_3_Template_div_click_40_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r66.onAcheive();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "i", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "play_arrow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_label_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select Certification");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_select_44_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var edu_r68 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", edu_r68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", edu_r68, " ");
      }
    }

    function CvSalonComposerComponent_select_44_Template(rf, ctx) {
      if (rf & 1) {
        var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CvSalonComposerComponent_select_44_Template_select_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r69.onSelEdu("cvSalon", $event.target.value);
        })("ngModelChange", function CvSalonComposerComponent_select_44_Template_select_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r71.edu = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvSalonComposerComponent_select_44_option_1_Template, 2, 2, "option", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.edu);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.cboEdus);
      }
    }

    function CvSalonComposerComponent_label_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Certification");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_input_46_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_input_46_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r72.eduTitle = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.eduTitle);
      }
    }

    function CvSalonComposerComponent_button_52_Template(rf, ctx) {
      if (rf & 1) {
        var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_button_52_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r74.onNewEdu("cvSalon");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_button_53_Template(rf, ctx) {
      if (rf & 1) {
        var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_button_53_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r76.onDelEdu("cvSalon");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_label_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select Experience");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_select_61_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var exp_r79 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", exp_r79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exp_r79, " ");
      }
    }

    function CvSalonComposerComponent_select_61_Template(rf, ctx) {
      if (rf & 1) {
        var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CvSalonComposerComponent_select_61_Template_select_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r80.onSelExp("cvSalon", $event.target.value);
        })("ngModelChange", function CvSalonComposerComponent_select_61_Template_select_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r82.exp = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvSalonComposerComponent_select_61_option_1_Template, 2, 2, "option", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.exp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.cboExps);
      }
    }

    function CvSalonComposerComponent_label_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Experience");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_input_63_Template(rf, ctx) {
      if (rf & 1) {
        var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 123);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_input_63_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84);

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r83.expTitle = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.expTitle);
      }
    }

    function CvSalonComposerComponent_button_69_Template(rf, ctx) {
      if (rf & 1) {
        var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_button_69_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r85.onNewExp("cvSalon");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_button_70_Template(rf, ctx) {
      if (rf & 1) {
        var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_button_70_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r87.onDelExp("cvSalon");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_label_77_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select Skill");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_select_78_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r90 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", skill_r90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skill_r90, " ");
      }
    }

    function CvSalonComposerComponent_select_78_Template(rf, ctx) {
      if (rf & 1) {
        var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CvSalonComposerComponent_select_78_Template_select_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r91.onSelSkill("cvSalon", $event.target.value);
        })("ngModelChange", function CvSalonComposerComponent_select_78_Template_select_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r93.skill = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvSalonComposerComponent_select_78_option_1_Template, 2, 2, "option", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r15.skill);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.cboSkills);
      }
    }

    function CvSalonComposerComponent_label_79_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Skill");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_input_80_Template(rf, ctx) {
      if (rf & 1) {
        var _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_input_80_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95);

          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r94.skillTitle = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.skillTitle);
      }
    }

    function CvSalonComposerComponent_option_84_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skillRate_r96 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", skillRate_r96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skillRate_r96, " ");
      }
    }

    function CvSalonComposerComponent_button_87_Template(rf, ctx) {
      if (rf & 1) {
        var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_button_87_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98);

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r97.onNewSkill("cvSalon");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_button_88_Template(rf, ctx) {
      if (rf & 1) {
        var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_button_88_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100);

          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r99.onDelSkill("cvSalon");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_label_95_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 128);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select Acheivement");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_select_96_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var acheive_r102 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", acheive_r102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", acheive_r102, " ");
      }
    }

    function CvSalonComposerComponent_select_96_Template(rf, ctx) {
      if (rf & 1) {
        var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 129);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CvSalonComposerComponent_select_96_Template_select_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r103.onSelAcheive("cvSalon", $event.target.value);
        })("ngModelChange", function CvSalonComposerComponent_select_96_Template_select_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r105.acheive = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvSalonComposerComponent_select_96_option_1_Template, 2, 2, "option", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r22.acheive);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.cboAcheives);
      }
    }

    function CvSalonComposerComponent_label_97_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 130);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acheivement");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_input_98_Template(rf, ctx) {
      if (rf & 1) {
        var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_input_98_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107);

          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r106.acheiveTitle = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.acheiveTitle);
      }
    }

    function CvSalonComposerComponent_div_103_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "attachment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r25.attachAcheive, " ");
      }
    }

    function CvSalonComposerComponent_div_104_Template(rf, ctx) {
      if (rf & 1) {
        var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_div_104_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r110);

          var _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          return _r108.click();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Attach Document");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 60, 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CvSalonComposerComponent_div_104_Template_input_change_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r110);

          var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r111.onAttach($event, "acheive");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_button_107_Template(rf, ctx) {
      if (rf & 1) {
        var _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_button_107_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113);

          var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r112.onNewAcheive("cvSalon");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_button_108_Template(rf, ctx) {
      if (rf & 1) {
        var _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_button_108_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);

          var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r114.onDelAcheive("cvSalon");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_label_115_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select Certification");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_select_116_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cert_r117 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cert_r117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cert_r117, " ");
      }
    }

    function CvSalonComposerComponent_select_116_Template(rf, ctx) {
      if (rf & 1) {
        var _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 133);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CvSalonComposerComponent_select_116_Template_select_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119);

          var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r118.onSelCert("cvSalon", $event.target.value);
        })("ngModelChange", function CvSalonComposerComponent_select_116_Template_select_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119);

          var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r120.cert = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvSalonComposerComponent_select_116_option_1_Template, 2, 2, "option", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r30.cert);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r30.cboCerts);
      }
    }

    function CvSalonComposerComponent_label_117_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Certification");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_input_118_Template(rf, ctx) {
      if (rf & 1) {
        var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_input_118_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122);

          var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r121.certTitle = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r32.certTitle);
      }
    }

    function CvSalonComposerComponent_button_126_Template(rf, ctx) {
      if (rf & 1) {
        var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_button_126_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124);

          var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r123.onNewCert("cvSalon");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_button_127_Template(rf, ctx) {
      if (rf & 1) {
        var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_button_127_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126);

          var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r125.onDelCert("cvSalon");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_label_134_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select Certification");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_select_135_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cert_r128 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cert_r128);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cert_r128, " ");
      }
    }

    function CvSalonComposerComponent_select_135_Template(rf, ctx) {
      if (rf & 1) {
        var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 133);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CvSalonComposerComponent_select_135_Template_select_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r130);

          var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r129.onSelCert("optimusMinds", $event.target.value);
        })("ngModelChange", function CvSalonComposerComponent_select_135_Template_select_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r130);

          var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r131.cert = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvSalonComposerComponent_select_135_option_1_Template, 2, 2, "option", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r36.cert);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r36.cboCerts);
      }
    }

    function CvSalonComposerComponent_label_136_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Certification");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_input_137_Template(rf, ctx) {
      if (rf & 1) {
        var _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_input_137_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133);

          var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r132.certTitle = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.certTitle);
      }
    }

    function CvSalonComposerComponent_option_141_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var program_r134 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", program_r134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", program_r134, " ");
      }
    }

    function CvSalonComposerComponent_div_143_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "attachment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r40.attachCert, " ");
      }
    }

    function CvSalonComposerComponent_button_152_Template(rf, ctx) {
      if (rf & 1) {
        var _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_button_152_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136);

          var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r135.onNewCert("optimusMinds");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonComposerComponent_button_153_Template(rf, ctx) {
      if (rf & 1) {
        var _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_button_153_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r138);

          var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r137.onDelCert("optimusMinds");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return {
        toolbar: false
      };
    };
    /* import { Router } from '@angular/router';
    import { threadId } from 'worker_threads'; */


    var CvSalonComposerComponent = /*#__PURE__*/function () {
      function CvSalonComposerComponent(dlgSvc, restSvc, _Activatedroute) {
        _classCallCheck(this, CvSalonComposerComponent);

        this.dlgSvc = dlgSvc;
        this.restSvc = restSvc;
        this._Activatedroute = _Activatedroute;
        this.name = "";
        this.aboutMe = "";
        this.mobileNbr = "";
        this.dob = "";
        this.address = ""; // Education

        this.edus = [];
        this.cboEdus = [];
        this.edu = "";
        this.eduNote = "";
        this.eduTitle = "";
        this.eduSelected = "Add Education";
        this.showEduTitle = true; // Skills

        this.skills = [];
        this.cboSkills = [];
        this.cboSkillRates = ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"];
        this.skillRate = "";
        this.skill = "";
        this.skillNote = "";
        this.skillTitle = "";
        this.skillSelected = "Add Skill";
        this.showSkillTitle = true; // Certs

        this.certs = [];
        this.cboCerts = [];
        this.cert = "";
        this.certNote = "";
        this.certTitle = "";
        this.certSelected = "Add Skill";
        this.showCertTitle = true; // Acheivment

        this.acheives = [];
        this.cboAcheives = [];
        this.acheive = "";
        this.acheiveNote = "";
        this.acheiveTitle = "";
        this.acheiveSelected = "Add Acheivement";
        this.attachAcheive = "";
        this.showAcheiveTitle = true; // Expereinces

        this.exps = [];
        this.cboExps = [];
        this.exp = "";
        this.expNote = "";
        this.expTitle = "";
        this.expSelected = "Add Education"; // for Optimus Minds

        this.moeExpiry = "";
        this.moeFile = "";
        this.program = "";
        this.aiChk = false;
        this.atRiskChk = false;
        this.careerChk = false;
        this.dramaChk = false;
        this.danceChk = false;
        this.itChk = false;
        this.skillsChk = false;
        this.tongueChk = false;
        this.musicChk = false;
        this.outdoorChk = false;
        this.sportsChk = false;
        this.visualChk = false; // certFile = "" ;

        this.attachCert = "";
        this.newCert = false;
        this.newEdu = false;
        this.newSkill = false;
        this.newExp = false;
        this.newAcheive = false; // End of Getters & Setters

        this.showExpTitle = true;
      }

      _createClass(CvSalonComposerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          switch (this._Activatedroute.snapshot.url.toString().toLowerCase()) {
            case "optimusminds":
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].init('optimusMinds');

              break;

            case "lms":
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].init('lms');

              break;

            default:
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].init('cvSalon');

              break;
          }

          var email = this._Activatedroute.snapshot.paramMap.get("email");

          if (email === null) {
            _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].dlgAuthMode = 1;
            this.openModal('dlgAuth');
          } else {
            this.restSvc.emailToken(email).then(function (msg) {
              var adminLevel = msg['adminLevel'];
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].email = email;
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].token = msg['token'];
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].pin = msg['pin'];
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"]._id = msg['_id'];
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].adminLevel = adminLevel;
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].dlgAuthMode = 2;

              _this3.openModal('dlgAuth');
            }, function (err) {
              alert('Error: ' + JSON.stringify(err));
            });
          }
        }
      }, {
        key: "openModal",
        value: function openModal(id) {
          this.dlgSvc.open(id);
        } // // Profile
        // onMe() {
        // }
        // onVideo() {
        // }
        // // Profile
        // onMyClassMates() {
        // }
        // onAssign1A() {
        // }
        // onAssign1B() {
        // }
        // onFinal() {
        // }
        // onClassChat() {
        // }
        // onFeedBack() {
        // }
        // Moe

      }, {
        key: "onMoe",
        value: function onMoe() {
          this.moeExpiry = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData['moeExpiry'];
          this.moeFile = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData['moeFile'];
          this.aiChk = false;
          this.atRiskChk = false;
          this.careerChk = false;
          this.danceChk = false;
          this.dramaChk = false;
          this.musicChk = false;
          this.tongueChk = false;
          this.skillsChk = false;
          this.outdoorChk = false;
          this.outdoorChk = false;
          this.visualChk = false;
          this.sportsChk = false;

          for (var idx = 0; idx < _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["programs"].length; idx++) {
            switch (_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["programs"][idx]) {
              case "AI":
                this.aiChk = true;
                break;

              case "At Risk":
                this.atRiskChk = true;
                break;

              case "Career Perparation":
                this.careerChk = true;
                break;

              case "Dance":
                this.danceChk = true;
                break;

              case "Drama":
                this.dramaChk = true;
                break;

              case "IT\\Multimedia":
                this.itChk = true;
                break;

              case "Music":
                this.musicChk = true;
                break;

              case "Mother Tongue":
                this.tongueChk = true;
                break;

              case "Life Skills\Soft Skills":
                this.skillsChk = true;
                break;

              case "Outdoor Education":
                this.outdoorChk = true;
                break;

              case "Outdoor Education":
                this.outdoorChk = true;
                break;

              case "Visual Arts":
                this.visualChk = true;
                break;

              case "Sports":
                this.sportsChk = true;
                break;
            }
          }

          this.dlgSvc.open('dlgMoe');
        }
        /*
        onAddMoeFile(evt) {
        
          alert('moe') ;
          let doc = {}
         
          doc['docType'] = 'MOE License' ;
          doc['docId'] = '0000' ;
          doc['docTable'] = 'moe' ;
        
          doc['file'] = evt.target.files[0] ;
          
          Global.docs.push(doc) ;
        
        
        }
         */

      }, {
        key: "onSaveMoe",
        value: function onSaveMoe() {
          if (this.moeExpiry == "") {
            alert("Uanble to save, need MOE Expiry Date");
            return;
          }

          if (this.moeFile == "") {
            alert("Uanble to save, need MOE License file");
            return;
          }

          var mPrograms = [];
          if (this.aiChk) mPrograms.push('AI');
          if (this.atRiskChk) mPrograms.push('At Risk');
          if (this.careerChk) mPrograms.push('Career Perparation');
          if (this.danceChk) mPrograms.push('Dance');
          if (this.dramaChk) mPrograms.push('Drama');
          if (this.itChk) mPrograms.push('IT\\Multimedia');
          if (this.musicChk) mPrograms.push('Music');
          if (this.tongueChk) mPrograms.push('Mother Tongue');
          if (this.skillsChk) mPrograms.push('Life Skills\Soft Skills');
          if (this.outdoorChk) mPrograms.push('Outdoor Education');
          if (this.visualChk) mPrograms.push('Visual Arts');
          if (this.sportsChk) mPrograms.push('Sports');

          if (mPrograms.length == 0) {
            alert("Uanble to save, please select at least 1 training program");
            return;
          }

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData['moeExpiry'] = this.moeExpiry;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData['moeFile'] = this.moeFile;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["programs"] = mPrograms;
          this.dlgSvc.close('dlgMoe');
        }
      }, {
        key: "onCancelMoe",
        value: function onCancelMoe() {
          this.dlgSvc.close('dlgMoe');
        } // Profile

      }, {
        key: "onProfile",
        value: function onProfile() {
          this.name = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData['name']; // Global.email =  Global.locData["email"] ;

          this.dob = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["dob"];
          this.mobileNbr = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["mobileNbr"];
          this.address = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["address"];
          this.dlgSvc.open('dlgProfile');
        }
      }, {
        key: "onCancelProfile",
        value: function onCancelProfile() {
          this.dlgSvc.close('dlgProfile');
        }
      }, {
        key: "onSaveProfile",
        value: function onSaveProfile() {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["name"] = this.name;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["email"] = this.email;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["dob"] = this.dob;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["mobileNbr"] = this.mobileNbr;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["address"] = this.address.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '<br />');
          this.dlgSvc.close('dlgProfile');
        } // About Me

      }, {
        key: "onAboutMe",
        value: function onAboutMe() {
          this.aboutMe = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData['aboutMe'];
          this.dlgSvc.open('dlgAboutMe');
        }
      }, {
        key: "onCancelAboutMe",
        value: function onCancelAboutMe() {
          this.dlgSvc.close('dlgAboutMe');
        }
      }, {
        key: "onSaveAboutMe",
        value: function onSaveAboutMe() {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["aboutMe"] = this.aboutMe.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '<br />');
          this.dlgSvc.close('dlgAboutMe');
        }
      }, {
        key: "onSelProgram",
        value: function onSelProgram(program) {
          this.program = program;
        } // ------------------------------------------------------------------

      }, {
        key: "onAcheive",
        value: function onAcheive() {
          //acheive
          this.acheives = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["acheives"];
          this.cboAcheives = [];

          for (var idx = 0; idx < this.acheives.length; idx++) {
            this.cboAcheives.push(this.acheives[idx]['title']);
          }

          if (this.cboAcheives.length == 0) {
            this.newAcheive = true;
            this.acheive = "";
            this.acheiveSelected = "";
            this.acheiveTitle = "";
            this.acheiveNote = "";
          } else {
            this.newAcheive = false;
            this.acheive = this.cboAcheives[0];
            this.acheiveSelected = this.acheive;
            this.acheiveNote = this.acheives[0]['note'];
          }

          if (_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].clientName == 'optimusMinds') {
            if (this.newAcheive) {
              this.attachAcheive = "";
            } else {
              this.attachAcheive = this.acheives[0]['file'];
            }
          }

          this.dlgSvc.open('dlgAcheive');
        }
      }, {
        key: "onNewAcheive",
        value: function onNewAcheive(clientName) {
          this.acheiveTitle = "";
          this.acheiveNote = "";
          this.newAcheive = true;

          if (_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].clientName == 'optimusMinds') {
            this.attachAcheive = "";
          }
        }
      }, {
        key: "onSelAcheive",
        value: function onSelAcheive(clientName, acheive) {
          this.acheiveSelected = acheive;
          var fidx = this.acheives.findIndex(function (x) {
            return x.title === acheive;
          });
          this.acheiveTitle = this.acheives[fidx]['title'];
          this.acheiveNote = this.acheives[fidx]['note'];

          if (_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].clientName == 'optimusMinds') {
            this.attachAcheive = this.acheives[fidx]['file'];
          }
        }
      }, {
        key: "onExitAcheive",
        value: function onExitAcheive(clientName) {
          this.dlgSvc.close('dlgAcheive');
          this.newAcheive = false;
        }
      }, {
        key: "onSaveAcheive",
        value: function onSaveAcheive(clientName) {
          var _this4 = this;

          var strNote = this.acheiveNote.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '<br />');

          if (this.newAcheive) {
            if (_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].clientName == 'optimusMinds') {
              this.acheives.push({
                title: this.acheiveTitle,
                note: strNote,
                file: this.attachAcheive
              });
            } else {
              this.acheives.push({
                title: this.acheiveTitle,
                note: strNote
              });
            }
          } else {
            var fidx = this.acheives.findIndex(function (x) {
              return x.title === _this4.acheiveSelected;
            });
            this.acheives[fidx]['note'] = strNote;

            if (_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].clientName == 'optimusMinds') {
              this.acheives[fidx]['file'] = this.attachAcheive;
            }
          }

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["acheives"] = this.acheives;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData["acheives"] = [];
          this.dlgSvc.close('dlgAcheive');
        }
      }, {
        key: "onDelAcheive",
        value: function onDelAcheive(clientName) {
          var _this5 = this;

          var fidx = this.acheives.findIndex(function (x) {
            return x.title === _this5.acheiveSelected;
          });
          this.acheives.splice(fidx, 1);
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["acheives"] = this.acheives;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData["acheives"] = [];
          this.newAcheive = false;
          this.dlgSvc.close('dlgAcheive');
        } // ------------------- ACHIEVE ------------------------------------- 
        // ------------------- SKILL START ----------------------------------

      }, {
        key: "onSkill",
        value: function onSkill() {
          this.skills = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["skills"];
          this.cboSkills = [];

          for (var idx = 0; idx < this.skills.length; idx++) {
            this.cboSkills.push(this.skills[idx]['title']);
          }

          if (this.cboSkills.length == 0) {
            this.newSkill = true;
            this.skill = "";
            this.skillSelected = "";
            this.skillRate = "1 Star";
          } else {
            this.newSkill = false;
            this.skill = this.cboSkills[0];
            this.skillSelected = this.skill;
            this.skillRate = this.skills[0]['rate'];
          }

          this.dlgSvc.open('dlgSkill');
        }
      }, {
        key: "onNewSkill",
        value: function onNewSkill(clientName) {
          this.skillTitle = "";
          this.skillRate = "1 Star";
          this.newSkill = true;
        }
      }, {
        key: "onSelSkill",
        value: function onSelSkill(clientName, skill) {
          this.skillSelected = skill;
          var fidx = this.skills.findIndex(function (x) {
            return x.title === skill;
          });
          this.skillTitle = this.skills[fidx]['title'];
          this.skillRate = this.skills[fidx]['rate'];
        }
      }, {
        key: "onExitSkill",
        value: function onExitSkill(clientName) {
          this.dlgSvc.close('dlgSkill');
          this.newSkill = false;
        }
      }, {
        key: "onSaveSkill",
        value: function onSaveSkill(clientName) {
          var _this6 = this;

          if (this.newSkill) {
            this.skills.push({
              title: this.skillTitle,
              rate: this.skillRate
            });
          } else {
            var fidx = this.skills.findIndex(function (x) {
              return x.title === _this6.skillSelected;
            });
            this.skills[fidx]['rate'] = this.skillRate;
          }

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["skills"] = this.skills;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData["skills"] = [];
          this.dlgSvc.close('dlgSkill');
        }
      }, {
        key: "onDelSkill",
        value: function onDelSkill(clientName) {
          var _this7 = this;

          var fidx = this.skills.findIndex(function (x) {
            return x.title === _this7.skillSelected;
          });
          this.skills.splice(fidx, 1);
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["skills"] = this.skills;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData["skills"] = [];
          this.newSkill = false;
          this.dlgSvc.close('dlgSkill');
        } // ------------------- SKILL END 
        // ------------------- EXP START ----------------------------------

      }, {
        key: "onExp",
        value: function onExp() {
          this.exps = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["exps"];
          this.cboExps = [];

          for (var idx = 0; idx < this.exps.length; idx++) {
            this.cboExps.push(this.exps[idx]['title']);
          }

          if (this.cboExps.length == 0) {
            this.newExp = true;
            this.exp = "";
            this.expSelected = "";
            this.expNote = "";
            this.expTitle = "";
          } else {
            this.newExp = false;
            this.exp = this.cboExps[0];
            this.expSelected = this.exp;
            this.expNote = this.exps[0]['note'];
          }

          this.dlgSvc.open('dlgExp');
        }
      }, {
        key: "onNewExp",
        value: function onNewExp(clientName) {
          this.expTitle = "";
          this.expNote = "";
          this.newExp = true;
        }
      }, {
        key: "onSelExp",
        value: function onSelExp(clientName, exp) {
          this.expSelected = exp;
          var fidx = this.exps.findIndex(function (x) {
            return x.title === exp;
          });
          this.expTitle = this.exps[fidx]['title'];
          this.expNote = this.exps[fidx]['note'];
        }
      }, {
        key: "onExitExp",
        value: function onExitExp(clientName) {
          this.dlgSvc.close('dlgExp');
          this.newExp = false;
        }
      }, {
        key: "onSaveExp",
        value: function onSaveExp(clientName) {
          var _this8 = this;

          var strNote = this.expNote.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '<br />');

          if (this.newExp) {
            this.exps.push({
              title: this.expTitle,
              note: strNote
            });
          } else {
            var fidx = this.exps.findIndex(function (x) {
              return x.title === _this8.expSelected;
            });
            this.exps[fidx]['note'] = strNote;
          }

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["exps"] = this.exps;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData["exps"] = [];
          this.dlgSvc.close('dlgExp');
        }
      }, {
        key: "onDelExp",
        value: function onDelExp(clientName) {
          var _this9 = this;

          var fidx = this.exps.findIndex(function (x) {
            return x.title === _this9.expSelected;
          });
          this.exps.splice(fidx, 1);
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["exps"] = this.exps;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData["exps"] = [];
          this.newExp = false;
          this.dlgSvc.close('dlgExp');
        } // ------------------- EXP END ------------------------------------
        // ------------------- EDU START ----------------------------------

      }, {
        key: "onEdu",
        value: function onEdu() {
          this.edus = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["edus"];
          this.cboEdus = [];

          for (var idx = 0; idx < this.edus.length; idx++) {
            this.cboEdus.push(this.edus[idx]['title']);
          }

          if (this.cboEdus.length == 0) {
            this.newEdu = true;
            this.edu = "";
            this.eduSelected = "";
            this.eduNote = "";
            this.eduTitle = "";
          } else {
            this.newEdu = false;
            this.edu = this.cboEdus[0];
            this.eduSelected = this.edu;
            this.eduNote = this.edus[0]['note'];
          }

          this.dlgSvc.open('dlgEdu');
        }
      }, {
        key: "onNewEdu",
        value: function onNewEdu(clientName) {
          this.eduTitle = "";
          this.eduNote = "";
          this.newEdu = true;
        }
      }, {
        key: "onSelEdu",
        value: function onSelEdu(clientName, edu) {
          this.eduSelected = edu;
          var fidx = this.edus.findIndex(function (x) {
            return x.title === edu;
          });
          this.eduTitle = this.edus[fidx]['title'];
          this.eduNote = this.edus[fidx]['note'];
        }
      }, {
        key: "onExitEdu",
        value: function onExitEdu(clientName) {
          this.dlgSvc.close('dlgEdu');
          this.newEdu = false;
        }
      }, {
        key: "onSaveEdu",
        value: function onSaveEdu(clientName) {
          var _this10 = this;

          var strNote = this.eduNote.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '<br />');

          if (this.newEdu) {
            this.edus.push({
              title: this.eduTitle,
              note: strNote
            });
          } else {
            var fidx = this.edus.findIndex(function (x) {
              return x.title === _this10.eduSelected;
            });
            this.edus[fidx]['note'] = strNote;
          }

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["edus"] = this.edus;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData["edus"] = [];
          this.dlgSvc.close('dlgEdu');
        }
      }, {
        key: "onDelEdu",
        value: function onDelEdu(clientName) {
          var _this11 = this;

          var fidx = this.edus.findIndex(function (x) {
            return x.title === _this11.eduSelected;
          });
          this.edus.splice(fidx, 1);
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["edus"] = this.edus;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData["edus"] = [];
          this.newEdu = false;
          this.dlgSvc.close('dlgEdu');
        } // -------------------- EDU END ------------------------------------
        // -------------------- CERT START --------------------------------

      }, {
        key: "onCert",
        value: function onCert() {
          this.certs = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["certs"];
          this.cboCerts = [];

          for (var idx = 0; idx < this.certs.length; idx++) {
            this.cboCerts.push(this.certs[idx]['title']);
          }

          if (this.cboCerts.length == 0) {
            this.newCert = true;
            this.cert = "";
            this.certSelected = "";
            this.program = "";
            this.certTitle = "";
          } else {
            this.newCert = false;
            this.cert = this.cboCerts[0];
            this.certSelected = this.cert;
            this.program = this.certs[0]['program'];
          }

          if (_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].clientName == 'optimusMinds') {
            if (this.newCert) {
              this.attachCert = "";
            } else {
              this.attachCert = this.certs[0]['file'];
            }

            this.dlgSvc.open('dlgCertOptimusMinds');
          } else {
            if (this.newCert) {
              this.certNote = "";
            } else {
              // this.newCert = false;
              this.certNote = this.certs[0]['note'];
            }

            this.dlgSvc.open('dlgCert');
          }
        }
      }, {
        key: "onNewCert",
        value: function onNewCert(clientName) {
          this.certTitle = "";
          this.attachCert = "";
          this.certNote = "";
          this.program = this.certs[0]['program'];
          this.newCert = true;
        }
      }, {
        key: "onSelCert",
        value: function onSelCert(clientName, cert) {
          this.certSelected = cert;
          var fidx = this.certs.findIndex(function (x) {
            return x.title === cert;
          });
          this.certTitle = this.certs[fidx]['title'];

          switch (clientName) {
            case "cvSalon":
              this.certNote = this.certs[fidx]['note'];
              break;

            case "optimusMinds":
              this.attachCert = this.certs[fidx]['file'];
              break;
          }
        }
        /*
         onSelCertOptimusMinds(cert) {
        
               this.certSelected = cert;
        
              let fidx = this.certs.findIndex(x => x.title === cert);
              this.certTitle = this.certs[fidx]['title'];
              this.attachCert =  this.certs[fidx]['file'];
              this.program = this.certs[fidx]['program'];
              this.showCertTitle = false;
        
            } */

      }, {
        key: "onExitCert",
        value: function onExitCert(clientName) {
          this.newCert = false;

          switch (clientName) {
            case "cvSalon":
              this.dlgSvc.close('dlgCert');
              break;

            case "optimusMinds":
              this.dlgSvc.close('dlgCertOptimusMinds');
              break;
          }
        }
      }, {
        key: "onSaveCert",
        value: function onSaveCert(clientName) {
          switch (clientName) {
            case "cvSalon":
              this.saveCertCvSalon();
              break;

            case "optimusMinds":
              this.saveCertOptimusMinds();
              break;
          }
        }
      }, {
        key: "onDelCert",
        value: function onDelCert(clientName) {
          var _this12 = this;

          var fidx = this.certs.findIndex(function (x) {
            return x.title === _this12.certSelected;
          });
          this.certs.splice(fidx, 1);
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["certs"] = this.certs;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData["certs"] = [];
          this.newCert = false;

          switch (clientName) {
            case "cvSalon":
              this.dlgSvc.close('dlgCert');
              break;

            case "optimusMinds":
              this.dlgSvc.close('dlgCertOptimusMinds');
              break;
          }
        }
      }, {
        key: "saveCertCvSalon",
        value: function saveCertCvSalon() {
          var _this13 = this;

          var strNote = this.certNote.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '<br />');

          if (this.newCert) {
            this.certs.push({
              title: this.certTitle,
              note: strNote
            });
          } else {
            var fidx = this.certs.findIndex(function (x) {
              return x.title === _this13.certSelected;
            });
            this.certs[fidx]['note'] = strNote;
          }

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["certs"] = this.certs;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData["certs"] = [];
          this.dlgSvc.close('dlgCert');
        }
      }, {
        key: "saveCertOptimusMinds",
        value: function saveCertOptimusMinds() {
          var _this14 = this;

          // let strNote = this.certNote.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '<br />');
          if (this.newCert) {
            this.certs.push({
              title: this.certTitle,
              program: this.program,
              file: this.attachCert
            });
          } else {
            var fidx = this.certs.findIndex(function (x) {
              return x.title === _this14.certSelected;
            });
            this.certs[fidx]['program'] = this.program;
            this.certs[fidx]['file'] = this.attachCert;
          }

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["certs"] = this.certs;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData["certs"] = [];
          this.newCert = false;
          this.dlgSvc.close('dlgCertOptimusMinds');
        } //---------------------   CERT END ------------------------------------------------

      }, {
        key: "onSelSkillRate",
        value: function onSelSkillRate(rate) {
          this.skillRate = rate;
        }
        /* onAcheive() {
              this.acheives = Global.locData["acheives"];
          this.cboAcheives = [];
              for (let idx = 0; idx < this.acheives.length; idx++) {
            this.cboAcheives.push(this.acheives[idx]['title']);
          }
              this.cboAcheives.push('Add Acheivement');
          this.acheive = this.cboAcheives[0];
          this.acheiveSelected = this.acheive;
              if (this.acheive == 'Add Acheivement') {
            this.showAcheiveTitle = true;
              }
          else {
            this.showAcheiveTitle = false;
            this.acheiveNote = this.acheives[0]['note'];
          }
          
          this.dlgSvc.open('dlgAcheive');
          
        }
            onSelAcheive(acheive) {
              this.acheiveSelected = acheive;
              if (acheive == 'Add Acheivement') {
            this.acheiveNote = '';
            this.acheiveTitle = '';
            this.showAcheiveTitle = true;
          }
          else {
                let fidx = this.acheives.findIndex(x => x.title === acheive);
            this.acheiveNote = this.acheives[fidx]['note'];
            this.acheiveTitle = this.acheive[fidx]['title'];
            this.showAcheiveTitle = false;
              }
          
        }
            onCancelAcheive() {
          this.dlgSvc.close('dlgAcheive');
        }
            onSaveAcheive() {
              let strNote = this.acheiveNote.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '<br />');
              if (this.acheiveSelected == 'Add Acheivement') {
                this.acheives.push({ title: this.acheiveTitle, note: strNote });
          }
          else {
            let fidx = this.acheives.findIndex(x => x.title === this.acheiveSelected);
                this.acheives[fidx]['note'] = strNote;
              }
          
          
          Global.locData["acheives"] = this.acheives;
          Global.svrData["acheives"] = [];
          
          this.dlgSvc.close('dlgAcheive');
          
        }
            onDelAcheive() {
              let fidx = this.acheives.findIndex(x => x.title === this.acheiveSelected);
          this.acheives.splice(fidx, 1);
              this.dlgSvc.close('dlgAcheive');
          Global.locData["acheives"] = this.acheives;
          Global.svrData["acheives"] = [];
            }
        */

        /*
          onSkill() {
        
        
            this.skills = Global.locData["skills"];
            this.cboSkills = [];
        
        
        
            for (let idx = 0; idx < this.skills.length; idx++) {
              this.cboSkills.push(this.skills[idx]['title']);
            }
        
        
        
            this.cboSkills.push('Add Skill');
            this.skill = this.cboSkills[0];
        
            this.skillSelected = this.skill;
        
        
            if (this.skill == 'Add Skill') {
              this.showSkillTitle = true;
              this.skillRate = "1 Star";
            }
            else {
              this.showSkillTitle = false;
              this.skillRate = this.skills[0]['rate'];
            }
        
        
        
        
            this.dlgSvc.open('dlgSkill');
        
        
          }
        
          onSelSkill(skill) {
        
            this.skillSelected = skill;
        
            if (skill == 'Add Skill') {
              this.skillNote = '';
              this.skillTitle = '';
              this.showSkillTitle = true;
            }
            else {
        
              let fidx = this.skills.findIndex(x => x.title === skill);
              this.skillNote = this.skills[fidx]['note'];
              this.skillTitle = this.skills[fidx]['title'];
              this.showSkillTitle = false;
        
            }
        
        
          }
        
        
          onSelSkillRate(rate) {
        
        
          }
        
          onCancelSkill() {
            this.dlgSvc.close('dlgSkill');
          }
        
          onSaveSkill() {
        
        
            if (this.skillSelected == 'Add Skill') {
        
        
        
              this.skills.push({ title: this.skillTitle, rate: this.skillRate });
            }
            else {
        
        
              let fidx = this.skills.findIndex(x => x.title === this.skillSelected);
        
              this.skills[fidx]['rate'] = this.skillRate;
        
            }
        
        
        
        
            Global.locData["skills"] = this.skills;
            Global.svrData["skills"] = [];
        
        
            this.dlgSvc.close('dlgSkill');
        
        
          }
        
          onDelSkill() {
        
            let fidx = this.skills.findIndex(x => x.title === this.skillSelected);
            this.skills.splice(fidx, 1);
        
            this.dlgSvc.close('dlgSkill');
            Global.locData["skills"] = this.skills;
            Global.svrData["skills"] = [];
        
          }
        
        
         */
        // Education 

        /*
          onSelEdu(edu) {
        
            this.eduSelected = edu;
        
            if (edu == 'Add Education') {
        
              this.eduNote = '';
              this.eduTitle = '';
              this.showEduTitle = true;
            }
            else {
        
        
              let fidx = this.edus.findIndex(x => x.title === edu);
              this.eduNote = this.edus[fidx]['note'];
              this.eduTitle = this.edus[fidx]['title'];
              this.showEduTitle = false;
        
            }
        
        
          }
        
        
          onCancelEdu() {
            this.dlgSvc.close('dlgEdu');
          }
        
          onSaveEdu() {
        
            let strNote = this.eduNote.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '<br />');
        
            if (this.eduSelected == 'Add Education') {
        
              this.edus.push({ title: this.eduTitle, note: strNote });
            }
            else {
              let fidx = this.edus.findIndex(x => x.title === this.eduSelected);
        
              this.edus[fidx]['note'] = strNote;
        
            }
        
        
        
        
            Global.locData["edus"] = this.edus;
            Global.svrData["edus"] = [];
        
        
            this.dlgSvc.close('dlgEdu');
        
        
          }
        
          onDelEdu() {
        
            let fidx = this.edus.findIndex(x => x.title === this.eduSelected);
            this.edus.splice(fidx, 1);
        
            this.dlgSvc.close('dlgEdu');
            Global.locData["edus"] = this.edus;
            Global.svrData["edus"] = [];
        
          }
         */
        // Experience

        /*  onExp() {
        
           this.exps = Global.locData["exps"];
           this.cboExps = [];
        
           for (let idx = 0; idx < this.exps.length; idx++) {
             this.cboExps.push(this.exps[idx]['title']);
           }
        
           this.cboExps.push('Add Experience');
           this.exp = this.cboExps[0];
           this.expSelected = this.exp;
        
           if (this.exp == 'Add Experience') {
             this.showExpTitle = true;
        
           }
           else {
             this.showExpTitle = false;
             this.expNote = this.exps[0]['note'];
           }
        
        
           this.dlgSvc.open('dlgExp');
        
         }
        
        
         onSelExp(exp) {
        
           this.expSelected = exp;
        
           if (exp == 'Add Experience') {
             ;
             this.expNote = '';
             this.expTitle = '';
             this.showExpTitle = true;
           }
           else {
        
        
             let fidx = this.exps.findIndex(x => x.title === exp);
             this.expNote = this.exps[fidx]['note'];
             this.expTitle = this.exps[fidx]['title'];
             this.showExpTitle = false;
        
           }
        
        
         }
        
         onCancelExp() {
           this.dlgSvc.close('dlgExp');
         }
        
         onSaveExp() {
        
           let strNote = this.expNote.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '<br />');
        
           if (this.expSelected == 'Add Experience') {
             this.exps.push({ title: this.expTitle, note: strNote });
           }
           else {
             let fidx = this.exps.findIndex(x => x.title === this.expSelected);
        
             this.exps[fidx]['note'] = strNote;
        
           }
        
           this.dlgSvc.close('dlgExp');
           Global.locData["exps"] = this.exps;
           Global.svrData["exps"] = []
        
         }
        
         onDelExp() {
        
           let fidx = this.exps.findIndex(x => x.title === this.expSelected);
           this.exps.splice(fidx, 1);
           Global.locData["exps"] = this.exps;
           this.dlgSvc.close('dlgExp');
        
         } */
        // Photo

      }, {
        key: "onAttach",
        value: function onAttach(evt, docType) {
          var imagePath;
          var imgURL;
          var doc = {};
          doc['docType'] = docType;
          doc['docId'] = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].docs.length + 1;
          doc['docTable'] = docType;
          doc['file'] = evt.target.files[0];
          doc['docName'] = evt.target.files[0].name;

          switch (docType) {
            case "photo":
              var mimeType = evt.target.files[0].type;

              if (mimeType.match(/image\/*/) == null) {
                alert("Only images are supported.");
                return;
              }

              this.restSvc.makeImgFromBlob(evt.target.files[0]);
              break;

            case "moe":
              this.moeFile = evt.target.files[0].name;
              break;

            case "cert":
              this.attachCert = evt.target.files[0].name;
              break;

            case "acheive":
              this.attachAcheive = evt.target.files[0].name;
              break;

            default:
              break;
          }

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].docs.push(doc);
          /*  doc['docType'] = 'Photo' ;
           doc['id'] = '0000' ;
           doc['table'] = 'photo' ; */

          /*  doc['docType'] = 'Photo' ;
           doc['docId'] = '0000' ;
           doc['docTable'] = 'photo' ;
                  doc['file'] = evt.target.files[0] ;
           
           Global.docs.push(doc) ;
           //Global.photoFile  = evt.target.files[0];
           
           this.restSvc.makeImgFromBlob(evt.target.files[0]) ; */

        }
      }, {
        key: "clientName",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].clientName;
        }
      }, {
        key: "programs",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["programs"];
        }
      }, {
        key: "email",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].email;
        },
        set: function set(value) {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].email = value;
        }
      }]);

      return CvSalonComposerComponent;
    }();

    CvSalonComposerComponent.ɵfac = function CvSalonComposerComponent_Factory(t) {
      return new (t || CvSalonComposerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lib_dialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lib_restSvc__WEBPACK_IMPORTED_MODULE_3__["RestSvc"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    CvSalonComposerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CvSalonComposerComponent,
      selectors: [["app-cv-salon-composer"]],
      decls: 218,
      vars: 81,
      consts: [[1, "mainContent"], [1, "bg", 2, "height", "80vh"], [4, "ngIf"], ["id", "dlgProfile"], ["fxFlex", "", "fxLayout", "column"], ["for", "name"], ["id", "name", "name", "name", "type", "text", 3, "ngModel", "ngModelChange"], ["fxLayout", "row wrap"], ["fxLayout", "column"], ["for", "dob"], ["type", "date", "id", "dob", "name", "dob", 3, "ngModel", "ngModelChange"], ["for", "mobileNbr"], ["id", "mobileNbr", "name", "mobileNbr", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "email"], ["disabled", "", "id", "email", "name", "email", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "note"], [1, "richText", 3, "ngModel", "modules", "ngModelChange"], ["fxLayout", "row", "fxLayoutAlign", "center center"], [1, "flushRight"], [1, "button-3d", 3, "click"], ["id", "dlgAboutMe"], ["id", "dlgEdu"], ["class", "labelData", "for", "edu", 4, "ngIf"], ["class", "inputData", "id", "edu", "name", "edu", 3, "ngModel", "change", "ngModelChange", 4, "ngIf"], ["for", "eduTitle", 4, "ngIf"], ["id", "eduTitle", "name", "eduTitle", "type", "text", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["for", "eduNote"], ["class", "button-3d", 3, "click", 4, "ngIf"], ["id", "dlgExp"], ["class", "labelData", "for", "exp", 4, "ngIf"], ["class", "inputData", "id", "exp", "name", "exp", 3, "ngModel", "change", "ngModelChange", 4, "ngIf"], ["for", "expTitle", 4, "ngIf"], ["id", "expTitle", "name", "expTitle", "type", "text", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["for", "expNote"], ["id", "dlgSkill"], ["class", "labelData", "for", "skill", 4, "ngIf"], ["class", "inputData", "id", "skill", "name", "skill", 3, "ngModel", "change", "ngModelChange", 4, "ngIf"], ["for", "skillTitle", 4, "ngIf"], ["id", "skillTitle", "name", "skillTitle", "type", "text", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["for", "skillRate"], ["id", "skillRate", "name", "skillRate", 1, "inputData", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "dlgAcheive"], ["class", "labelData", "for", "acheive", 4, "ngIf"], ["class", "inputData", "id", "acheive", "name", "acheive", 3, "ngModel", "change", "ngModelChange", 4, "ngIf"], ["for", "acheiveTitle", 4, "ngIf"], ["id", "acheiveTitle", "name", "acheiveTitle", "type", "text", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["for", "acheiveNote"], ["style", "border: thin solid black;", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["id", "dlgCert"], ["class", "labelData", "for", "cert", 4, "ngIf"], ["class", "inputData", "id", "cert", "name", "cert", 3, "ngModel", "change", "ngModelChange", 4, "ngIf"], ["for", "certTitle", 4, "ngIf"], ["id", "certTitle", "name", "certTitle", "type", "text", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["for", "certNote"], ["id", "dlgCertOptimusMinds"], ["for", "cert", 1, "labelData"], ["id", "program", "name", "program", 1, "inputData", 3, "ngModel", "change", "ngModelChange"], ["type", "button", 3, "click"], ["type", "file", 2, "display", "none", 3, "change"], ["certFile", ""], ["id", "dlgMoe"], ["for", "moeExpiry"], ["id", "moeExpiry", "name", "moeExpiry", "type", "date", 3, "ngModel", "ngModelChange"], [1, "header"], [1, "chkBoxes"], ["id", "ai", "name", "ai", "type", "checkbox", 1, "leftA", 3, "ngModel", "ngModelChange"], ["for", "ai", 1, "rightA"], ["id", "atRisk", "name", "atRisk", "type", "checkbox", 1, "leftA", 3, "ngModel", "ngModelChange"], ["for", "atRisk", 1, "rightA"], ["id", "career", "name", "career", "type", "checkbox", 1, "leftA", 3, "ngModel", "ngModelChange"], ["for", "career", 1, "rightA"], ["id", "dance", "name", "dance", "type", "checkbox", 1, "leftA", 3, "ngModel", "ngModelChange"], ["for", "dance", 1, "rightA"], ["id", "drama", "name", "drama", "type", "checkbox", 1, "leftA", 3, "ngModel", "ngModelChange"], ["for", "drama", 1, "rightA"], ["id", "it", "name", "it", "type", "checkbox", 1, "leftA", 3, "ngModel", "ngModelChange"], ["for", "it", 1, "rightA"], ["id", "skills", "name", "skills", "type", "checkbox", 1, "leftA", 3, "ngModel", "ngModelChange"], ["for", "skills", 1, "rightA"], ["id", "tongue", "name", "tongue", "type", "checkbox", 1, "leftB", 3, "ngModel", "ngModelChange"], ["for", "tongue", 1, "rightB"], ["id", "music", "name", "music", "type", "checkbox", 1, "leftB", 3, "ngModel", "ngModelChange"], ["for", "music", 1, "rightB"], ["id", "outdoor", "name", "outdoor", "type", "checkbox", 1, "leftB", 3, "ngModel", "ngModelChange"], ["for", "outdoor", 1, "rightB"], ["id", "sports", "name", "sports", "type", "checkbox", 1, "leftB", 3, "ngModel", "ngModelChange"], ["for", "sports", 1, "rightB"], ["id", "visual", "name", "visual", "type", "checkbox", 1, "leftB", 3, "ngModel", "ngModelChange"], ["for", "visual", 1, "rightB"], ["fxLayoutAlign", "center center", 2, "border", "thin solid black"], [1, "material-icons", 2, "vertical-align", "-6px"], ["moeDoc", ""], ["fxLayout", "row", "fxLayoutAlign", "center end"], [1, "boxMoe", 3, "click"], [1, "iconMoe", 3, "click"], [1, "material-icons"], [1, "box0", 3, "click"], [1, "box1", 3, "click"], [1, "box2", 3, "click"], ["photo", ""], [1, "box3", 3, "click"], [1, "box4", 3, "click"], [1, "box5", 3, "click"], [1, "box6", 3, "click"], [1, "box7", 3, "click"], [1, "icon0", 3, "click"], [1, "icon1", 3, "click"], [1, "icon2", 3, "click"], [1, "icon3", 3, "click"], [1, "icon4", 3, "click"], [1, "icon5", 3, "click"], [1, "icon6", 3, "click"], [1, "icon7", 3, "click"], ["for", "edu", 1, "labelData"], ["id", "edu", "name", "edu", 1, "inputData", 3, "ngModel", "change", "ngModelChange"], [3, "value"], ["for", "eduTitle"], ["id", "eduTitle", "name", "eduTitle", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "exp", 1, "labelData"], ["id", "exp", "name", "exp", 1, "inputData", 3, "ngModel", "change", "ngModelChange"], ["for", "expTitle"], ["id", "expTitle", "name", "expTitle", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "skill", 1, "labelData"], ["id", "skill", "name", "skill", 1, "inputData", 3, "ngModel", "change", "ngModelChange"], ["for", "skillTitle"], ["id", "skillTitle", "name", "skillTitle", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "acheive", 1, "labelData"], ["id", "acheive", "name", "acheive", 1, "inputData", 3, "ngModel", "change", "ngModelChange"], ["for", "acheiveTitle"], ["id", "acheiveTitle", "name", "acheiveTitle", "type", "text", 3, "ngModel", "ngModelChange"], ["acheiveFile", ""], ["id", "cert", "name", "cert", 1, "inputData", 3, "ngModel", "change", "ngModelChange"], ["for", "certTitle"], ["id", "certTitle", "name", "certTitle", "type", "text", 3, "ngModel", "ngModelChange"]],
      template: function CvSalonComposerComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvSalonComposerComponent_div_2_Template, 6, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvSalonComposerComponent_div_3_Template, 43, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "dialog", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Your Name *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date of Birth *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.dob = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mobile# *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.mobileNbr = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "quill-editor", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_quill_editor_ngModelChange_23_listener($event) {
            return ctx.address = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_Template_button_click_26_listener() {
            return ctx.onCancelProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_Template_button_click_28_listener() {
            return ctx.onSaveProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "dialog", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "About Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "quill-editor", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_quill_editor_ngModelChange_34_listener($event) {
            return ctx.aboutMe = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_Template_button_click_37_listener() {
            return ctx.onCancelAboutMe();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_Template_button_click_39_listener() {
            return ctx.onSaveAboutMe();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "dialog", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, CvSalonComposerComponent_label_43_Template, 2, 0, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, CvSalonComposerComponent_select_44_Template, 2, 2, "select", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, CvSalonComposerComponent_label_45_Template, 2, 0, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CvSalonComposerComponent_input_46_Template, 1, 1, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "quill-editor", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_quill_editor_ngModelChange_49_listener($event) {
            return ctx.eduNote = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, CvSalonComposerComponent_button_52_Template, 2, 0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, CvSalonComposerComponent_button_53_Template, 2, 0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_Template_button_click_54_listener() {
            return ctx.onExitEdu("cvSalon");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_Template_button_click_56_listener() {
            return ctx.onSaveEdu("cvSalon");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "dialog", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, CvSalonComposerComponent_label_60_Template, 2, 0, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, CvSalonComposerComponent_select_61_Template, 2, 2, "select", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, CvSalonComposerComponent_label_62_Template, 2, 0, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, CvSalonComposerComponent_input_63_Template, 1, 1, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "quill-editor", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_quill_editor_ngModelChange_66_listener($event) {
            return ctx.expNote = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, CvSalonComposerComponent_button_69_Template, 2, 0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, CvSalonComposerComponent_button_70_Template, 2, 0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_Template_button_click_71_listener() {
            return ctx.onExitExp("cvSalon");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_Template_button_click_73_listener() {
            return ctx.onSaveExp("cvSalon");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "dialog", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, CvSalonComposerComponent_label_77_Template, 2, 0, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, CvSalonComposerComponent_select_78_Template, 2, 2, "select", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, CvSalonComposerComponent_label_79_Template, 2, 0, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, CvSalonComposerComponent_input_80_Template, 1, 1, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Skill Rating");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "select", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CvSalonComposerComponent_Template_select_change_83_listener($event) {
            return ctx.onSelSkillRate($event.target.value);
          })("ngModelChange", function CvSalonComposerComponent_Template_select_ngModelChange_83_listener($event) {
            return ctx.skillRate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, CvSalonComposerComponent_option_84_Template, 2, 2, "option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, CvSalonComposerComponent_button_87_Template, 2, 0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, CvSalonComposerComponent_button_88_Template, 2, 0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_Template_button_click_89_listener() {
            return ctx.onExitSkill("cvSalon");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_Template_button_click_91_listener() {
            return ctx.onSaveSkill("cvSalon");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "dialog", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, CvSalonComposerComponent_label_95_Template, 2, 0, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, CvSalonComposerComponent_select_96_Template, 2, 2, "select", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, CvSalonComposerComponent_label_97_Template, 2, 0, "label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, CvSalonComposerComponent_input_98_Template, 1, 1, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "quill-editor", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_quill_editor_ngModelChange_101_listener($event) {
            return ctx.acheiveNote = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, CvSalonComposerComponent_div_103_Template, 5, 1, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, CvSalonComposerComponent_div_104_Template, 6, 0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, CvSalonComposerComponent_button_107_Template, 2, 0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, CvSalonComposerComponent_button_108_Template, 2, 0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_Template_button_click_109_listener() {
            return ctx.onExitAcheive("cvSalon");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_Template_button_click_111_listener() {
            return ctx.onSaveAcheive("cvSalon");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "dialog", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, CvSalonComposerComponent_label_115_Template, 2, 0, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, CvSalonComposerComponent_select_116_Template, 2, 2, "select", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, CvSalonComposerComponent_label_117_Template, 2, 0, "label", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, CvSalonComposerComponent_input_118_Template, 1, 1, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "label", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "quill-editor", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_quill_editor_ngModelChange_121_listener($event) {
            return ctx.certNote = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, CvSalonComposerComponent_button_126_Template, 2, 0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, CvSalonComposerComponent_button_127_Template, 2, 0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_Template_button_click_128_listener() {
            return ctx.onExitCert("cvSalon");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_Template_button_click_130_listener() {
            return ctx.onSaveCert("cvSalon");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "dialog", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, CvSalonComposerComponent_label_134_Template, 2, 0, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](135, CvSalonComposerComponent_select_135_Template, 2, 2, "select", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, CvSalonComposerComponent_label_136_Template, 2, 0, "label", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](137, CvSalonComposerComponent_input_137_Template, 1, 1, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "label", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Select Program");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "select", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CvSalonComposerComponent_Template_select_change_140_listener($event) {
            return ctx.onSelProgram($event.target.value);
          })("ngModelChange", function CvSalonComposerComponent_Template_select_ngModelChange_140_listener($event) {
            return ctx.program = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](141, CvSalonComposerComponent_option_141_Template, 2, 2, "option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](143, CvSalonComposerComponent_div_143_Template, 5, 1, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_Template_button_click_145_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139);

            var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](149);

            return _r41.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Attach Certificate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "input", 60, 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CvSalonComposerComponent_Template_input_change_148_listener($event) {
            return ctx.onAttach($event, "cert");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](152, CvSalonComposerComponent_button_152_Template, 2, 0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](153, CvSalonComposerComponent_button_153_Template, 2, 0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_Template_button_click_154_listener() {
            return ctx.onExitCert("optimusMinds");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_Template_button_click_156_listener() {
            return ctx.onSaveCert("optimusMinds");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "dialog", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "label", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "MOE License Expiry Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_input_ngModelChange_162_listener($event) {
            return ctx.moeExpiry = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Qualified to train programs in : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_input_ngModelChange_166_listener($event) {
            return ctx.aiChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "label", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Artificial Intelligence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_input_ngModelChange_169_listener($event) {
            return ctx.atRiskChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "label", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "At Risk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_input_ngModelChange_172_listener($event) {
            return ctx.careerChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Career Perparation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_input_ngModelChange_175_listener($event) {
            return ctx.danceChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "label", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Dance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "input", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_input_ngModelChange_178_listener($event) {
            return ctx.dramaChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "label", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Drama");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_input_ngModelChange_181_listener($event) {
            return ctx.itChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "label", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "IT\\Multimedia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "input", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_input_ngModelChange_184_listener($event) {
            return ctx.skillsChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "label", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Life Skills\\Soft Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "input", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_input_ngModelChange_187_listener($event) {
            return ctx.tongueChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "label", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Mother Tongue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "input", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_input_ngModelChange_190_listener($event) {
            return ctx.musicChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "label", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Music");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "input", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_input_ngModelChange_193_listener($event) {
            return ctx.outdoorChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "label", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Outdoor Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "input", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_input_ngModelChange_196_listener($event) {
            return ctx.sportsChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "label", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Sports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "input", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSalonComposerComponent_Template_input_ngModelChange_199_listener($event) {
            return ctx.visualChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "label", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Visual Arts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "i", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "attachment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_Template_button_click_208_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139);

            var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](212);

            return _r44.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Add MOE License*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "input", 60, 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CvSalonComposerComponent_Template_input_change_211_listener($event) {
            return ctx.onAttach($event, "moe");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_Template_button_click_214_listener() {
            return ctx.onCancelMoe();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSalonComposerComponent_Template_button_click_216_listener() {
            return ctx.onSaveMoe();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clientName == "optimusMinds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clientName != "lms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dob);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mobileNbr);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.address)("modules", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](75, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.aboutMe)("modules", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](76, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newEdu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newEdu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newEdu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newEdu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.eduNote)("modules", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](77, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newEdu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newEdu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newExp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newExp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newExp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newExp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.expNote)("modules", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](78, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newExp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newExp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newSkill);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newSkill);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newSkill);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newSkill);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.skillRate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cboSkillRates);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newSkill);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newSkill);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newAcheive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newAcheive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newAcheive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newAcheive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.acheiveNote)("modules", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](79, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.attachAcheive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clientName == "optimusMinds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newAcheive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newAcheive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newCert);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newCert);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newCert);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newCert);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.certNote)("modules", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](80, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newCert);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newCert);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newCert);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newCert);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newCert);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newCert);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.program);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.programs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.attachCert);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newCert);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newCert);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.moeExpiry);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.aiChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.atRiskChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.careerChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.danceChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dramaChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.itChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.skillsChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tongueChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.musicChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.outdoorChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sportsChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.visualChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.moeFile, " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _lib_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], ngx_quill__WEBPACK_IMPORTED_MODULE_9__["QuillEditorComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"]],
      styles: [".bg[_ngcontent-%COMP%] {\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-color: #999;\n  background-image: url('bg.jpg');\n}\n\n.mainContent[_ngcontent-%COMP%] {\n  margin-top: 1px;\n  \n  color: white;\n  font-size: 12px;\n  padding: 1px;\n  height: 100%;\n}\n\n.boxTitleTop[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 77%;\n  left: 1%;\n  height: 80px;\n  top: 14%;\n  display: block;\n  position: absolute;\n  color: black;\n}\n\n.boxTitleTop-gt-xs[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 77%;\n  left: 5%;\n  height: 80px;\n  top: 14%;\n  display: block;\n  position: absolute;\n  color: black;\n}\n\n.box[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 450px;\n  left: 1%;\n  height: 10%;\n  top: 35%;\n  display: block;\n  position: absolute;\n  font-size: 20px;\n  color: black;\n  padding: 0.8em;\n  border-radius: 25px;\n}\n\n.boxMoe[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 220px;\n  left: 15px;\n  height: 7%;\n  top: 20%;\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: orange;\n  padding: 0.8em;\n  border-radius: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.iconMoe[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 22%;\n  position: absolute;\n  background: transparent;\n  color: orange;\n}\n\n.box0[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 220px;\n  left: 15px;\n  height: 7%;\n  top: 28%;\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: orange;\n  padding: 0.8em;\n  border-radius: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.icon0[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 30%;\n  position: absolute;\n  background: transparent;\n  color: orange;\n}\n\n.box1[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 220px;\n  left: 15px;\n  height: 7%;\n  top: 36%;\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: orange;\n  padding: 0.8em;\n  border-radius: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.icon1[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 38%;\n  position: absolute;\n  background: transparent;\n  color: orange;\n}\n\n.box2[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 220px;\n  left: 15px;\n  height: 7%;\n  top: 44%;\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: orange;\n  padding: 0.8em;\n  border-radius: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.icon2[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 46%;\n  position: absolute;\n  background: transparent;\n  color: orange;\n}\n\n.box3[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 220px;\n  left: 15px;\n  height: 7%;\n  top: 52%;\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: orange;\n  padding: 0.8em;\n  border-radius: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.icon3[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 54%;\n  position: absolute;\n  background: transparent;\n  color: orange;\n}\n\n.box4[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 220px;\n  left: 15px;\n  height: 7%;\n  top: 60%;\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: orange;\n  padding: 0.8em;\n  border-radius: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.icon4[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 62%;\n  position: absolute;\n  background: transparent;\n  color: orange;\n}\n\n.box5[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 220px;\n  left: 15px;\n  height: 7%;\n  top: 68%;\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: orange;\n  padding: 0.8em;\n  border-radius: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.icon5[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 70%;\n  position: absolute;\n  background: transparent;\n  color: orange;\n}\n\n.box6[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 220px;\n  left: 15px;\n  height: 7%;\n  top: 76%;\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: orange;\n  padding: 0.8em;\n  border-radius: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.icon6[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 78%;\n  position: absolute;\n  background: transparent;\n  color: orange;\n}\n\n.box7[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 220px;\n  left: 15px;\n  height: 7%;\n  top: 84%;\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: orange;\n  padding: 0.8em;\n  border-radius: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.icon7[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 86%;\n  position: absolute;\n  background: transparent;\n  color: orange;\n}\n\nlabel[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n\n.chkBoxes[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30px 2fr 30px 2fr;\n  grid-auto-flow: dense;\n  height: 250px;\n  margin-left: 5px;\n}\n\n.leftA[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  color: black;\n  background-color: white;\n}\n\n.rightA[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  grid-column: 2/3;\n  color: black;\n  font-size: 100%;\n  background-color: white;\n}\n\n.leftB[_ngcontent-%COMP%] {\n  grid-column: 3/4;\n  color: black;\n  background-color: white;\n}\n\n.rightB[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  color: black;\n  font-size: 100%;\n  grid-column: 4/5;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Ytc2Fsb24vY3Ytc2Fsb24tY29tcG9zZXIvQzpcXERhdGFcXGRldjIwMjBcXGN2U2Fsb24zXFxjdlNhbG9uL3NyY1xcYXBwXFxjdi1zYWxvblxcY3Ytc2Fsb24tY29tcG9zZXJcXGN2LXNhbG9uLWNvbXBvc2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdi1zYWxvbi9jdi1zYWxvbi1jb21wb3Nlci9jdi1zYWxvbi1jb21wb3Nlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtBQ0FKOztBRE1BO0VBQ0ksZUFBQTtFQUFpQiw4Q0FBQTtFQUNqQixZQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDSEo7O0FETUU7RUFHRSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDSEo7O0FETUc7RUFHQyxzQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDSEo7O0FEUUc7RUFHQyxzQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0xKOztBRFFHO0VBR0Msc0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTEo7O0FEUUc7RUFDQyxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDTEo7O0FEU0c7RUFHQyxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURTRztFQUNDLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNOSjs7QURXRztFQUdDLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFdHO0VBQ0MsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ1JKOztBRFdHO0VBR0Msc0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDUko7O0FEWUc7RUFDQyxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDVEo7O0FEY0c7RUFHQyxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNYSjs7QURlRztFQUNDLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNaSjs7QURlRztFQUdDLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1pKOztBRGVHO0VBQ0MsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ1pKOztBRGdCRztFQUdDLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2JKOztBRGdCRztFQUNDLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNiSjs7QURpQkc7RUFHQyxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNkSjs7QURtQkc7RUFDQyxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDaEJKOztBRHFCRztFQUdDLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2xCSjs7QUR1Qkc7RUFDQyxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDcEJKOztBRHdCRztFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQ3JCTDs7QUR5Qkc7RUFDQyxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ3RCSjs7QUR5QkU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ3RCSjs7QUR5Qkc7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDdEJKOztBRDBCRztFQUNDLGdCQUFBO0VBQ0QsWUFBQTtFQUNBLHVCQUFBO0FDdkJIOztBRDZCRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUMzQkoiLCJmaWxlIjoic3JjL2FwcC9jdi1zYWxvbi9jdi1zYWxvbi1jb21wb3Nlci9jdi1zYWxvbi1jb21wb3Nlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7IFxyXG5cdFx0XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6ICBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAgY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OyBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmcuanBnJyk7XHJcbiAgIFxyXG4gICAgICBcclxuXHJcbn1cclxuXHJcbi5tYWluQ29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7IC8qIEFkZCBhIHRvcCBtYXJnaW4gdG8gYXZvaWQgY29udGVudCBvdmVybGF5ICovXHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgXHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICAgIHBhZGRpbmc6MXB4IDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5ib3hUaXRsZVRvcCAge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiA3NyU7IFxyXG4gICAgbGVmdDogMSU7XHJcbiAgICBoZWlnaHQ6ODBweDtcclxuICAgIHRvcDogMTQlOyBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICB9XHJcbiAgXHJcbiAgIC5ib3hUaXRsZVRvcC1ndC14cyB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDc3JTsgXHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGhlaWdodDo4MHB4O1xyXG4gICAgdG9wOiAxNCU7IFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBcclxuICBcclxuICAgfVxyXG5cclxuICAgLmJveCAge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiA0NTBweDsgXHJcbiAgICBsZWZ0OiAxJTtcclxuICAgIGhlaWdodDoxMCU7XHJcbiAgICB0b3A6IDM1JTsgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgcGFkZGluZzogMC44ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICB9XHJcblxyXG4gICAuYm94TW9lICB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDIyMHB4OyBcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBoZWlnaHQ6NyU7XHJcbiAgICB0b3A6IDIwJTsgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICBwYWRkaW5nOiAwLjhlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgfVxyXG5cclxuICAgLmljb25Nb2Uge1xyXG4gICAgbGVmdDogMjEwcHg7XHJcbiAgICB0b3A6IDIyJTsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgIH1cclxuXHJcblxyXG4gICAuYm94MCAge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAyMjBweDsgXHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgaGVpZ2h0OjclO1xyXG4gICAgdG9wOiAyOCU7IFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgcGFkZGluZzogMC44ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIH1cclxuXHJcbiAgIC5pY29uMCB7XHJcbiAgICBsZWZ0OiAyMTBweDtcclxuICAgIHRvcDogMzAlOyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgfVxyXG5cclxuXHJcblxyXG4gICAuYm94MSAge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAyMjBweDsgXHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgaGVpZ2h0OjclO1xyXG4gICAgdG9wOiAzNiU7IFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgcGFkZGluZzogMC44ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIH1cclxuXHJcbiAgIC5pY29uMSB7XHJcbiAgICBsZWZ0OiAyMTBweDtcclxuICAgIHRvcDogMzglOyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgfVxyXG5cclxuICAgLmJveDIgIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMjIwcHg7IFxyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGhlaWdodDo3JTtcclxuICAgIHRvcDogNDQlOyBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgIHBhZGRpbmc6IDAuOGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICB9XHJcblxyXG5cclxuICAgLmljb24yIHtcclxuICAgIGxlZnQ6IDIxMHB4O1xyXG4gICAgdG9wOiA0NiU7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICB9XHJcbiAgXHJcblxyXG5cclxuICAgLmJveDMgIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMjIwcHg7IFxyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGhlaWdodDo3JTtcclxuICAgIHRvcDogNTIlOyBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgIHBhZGRpbmc6IDAuOGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICB9XHJcblxyXG5cclxuICAgLmljb24zIHtcclxuICAgIGxlZnQ6IDIxMHB4O1xyXG4gICAgdG9wOiA1NCU7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICB9XHJcbiAgXHJcbiAgIC5ib3g0ICB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDIyMHB4OyBcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBoZWlnaHQ6NyU7XHJcbiAgICB0b3A6IDYwJTsgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICBwYWRkaW5nOiAwLjhlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgfVxyXG5cclxuICAgLmljb240IHtcclxuICAgIGxlZnQ6IDIxMHB4O1xyXG4gICAgdG9wOiA2MiU7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICB9XHJcbiAgXHJcblxyXG4gICAuYm94NSAge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAyMjBweDsgXHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgaGVpZ2h0OjclO1xyXG4gICAgdG9wOiA2OCU7IFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgcGFkZGluZzogMC44ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIH1cclxuXHJcbiAgIC5pY29uNSB7XHJcbiAgICBsZWZ0OiAyMTBweDtcclxuICAgIHRvcDogNzAlOyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgfVxyXG5cclxuXHJcbiAgIC5ib3g2ICB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDIyMHB4OyBcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBoZWlnaHQ6NyU7XHJcbiAgICB0b3A6IDc2JTsgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICBwYWRkaW5nOiAwLjhlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgfVxyXG5cclxuXHJcbiAgIFxyXG4gICAuaWNvbjYge1xyXG4gICAgbGVmdDogMjEwcHg7XHJcbiAgICB0b3A6IDc4JTsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgIH1cclxuICBcclxuXHJcblxyXG4gICAuYm94NyAge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAyMjBweDsgXHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgaGVpZ2h0OjclO1xyXG4gICAgdG9wOiA4NCU7IFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgcGFkZGluZzogMC44ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIH1cclxuXHJcbiBcclxuXHJcbiAgIC5pY29uNyB7XHJcbiAgICBsZWZ0OiAyMTBweDtcclxuICAgIHRvcDogODYlOyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgfVxyXG5cclxuICBcclxuICAgbGFiZWwge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgfVxyXG5cclxuICAgLy8gRm9yIE9wdGltdXMgTWluZHNcclxuICAgLmNoa0JveGVzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMmZyIDMwcHggMmZyO1xyXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAubGVmdEEge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgIH1cclxuXHJcbiAgIC5yaWdodEEge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgIFxyXG4gICB9XHJcbiAgXHJcbiAgIC5sZWZ0QiB7XHJcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XHJcbiAgIGNvbG9yOiBibGFjaztcclxuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiBcclxuICBcclxuICB9XHJcblxyXG4gIFxyXG4gIC5yaWdodEIge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICBncmlkLWNvbHVtbjogNCAvIDU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgfSIsIi5iZyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWdzL2JnLmpwZ1wiKTtcbn1cblxuLm1haW5Db250ZW50IHtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICAvKiBBZGQgYSB0b3AgbWFyZ2luIHRvIGF2b2lkIGNvbnRlbnQgb3ZlcmxheSAqL1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMXB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ib3hUaXRsZVRvcCB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogNzclO1xuICBsZWZ0OiAxJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICB0b3A6IDE0JTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYm94VGl0bGVUb3AtZ3QteHMge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDc3JTtcbiAgbGVmdDogNSU7XG4gIGhlaWdodDogODBweDtcbiAgdG9wOiAxNCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmJveCB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogNDUwcHg7XG4gIGxlZnQ6IDElO1xuICBoZWlnaHQ6IDEwJTtcbiAgdG9wOiAzNSU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAwLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmJveE1vZSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMjIwcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGhlaWdodDogNyU7XG4gIHRvcDogMjAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIHBhZGRpbmc6IDAuOGVtO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaWNvbk1vZSB7XG4gIGxlZnQ6IDIxMHB4O1xuICB0b3A6IDIyJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmJveDAge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDIyMHB4O1xuICBsZWZ0OiAxNXB4O1xuICBoZWlnaHQ6IDclO1xuICB0b3A6IDI4JTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBjb2xvcjogb3JhbmdlO1xuICBwYWRkaW5nOiAwLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmljb24wIHtcbiAgbGVmdDogMjEwcHg7XG4gIHRvcDogMzAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYm94MSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMjIwcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGhlaWdodDogNyU7XG4gIHRvcDogMzYlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIHBhZGRpbmc6IDAuOGVtO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaWNvbjEge1xuICBsZWZ0OiAyMTBweDtcbiAgdG9wOiAzOCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5ib3gyIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAyMjBweDtcbiAgbGVmdDogMTVweDtcbiAgaGVpZ2h0OiA3JTtcbiAgdG9wOiA0NCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgY29sb3I6IG9yYW5nZTtcbiAgcGFkZGluZzogMC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pY29uMiB7XG4gIGxlZnQ6IDIxMHB4O1xuICB0b3A6IDQ2JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmJveDMge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDIyMHB4O1xuICBsZWZ0OiAxNXB4O1xuICBoZWlnaHQ6IDclO1xuICB0b3A6IDUyJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBjb2xvcjogb3JhbmdlO1xuICBwYWRkaW5nOiAwLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmljb24zIHtcbiAgbGVmdDogMjEwcHg7XG4gIHRvcDogNTQlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYm94NCB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMjIwcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGhlaWdodDogNyU7XG4gIHRvcDogNjAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIHBhZGRpbmc6IDAuOGVtO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaWNvbjQge1xuICBsZWZ0OiAyMTBweDtcbiAgdG9wOiA2MiU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5ib3g1IHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAyMjBweDtcbiAgbGVmdDogMTVweDtcbiAgaGVpZ2h0OiA3JTtcbiAgdG9wOiA2OCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgY29sb3I6IG9yYW5nZTtcbiAgcGFkZGluZzogMC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pY29uNSB7XG4gIGxlZnQ6IDIxMHB4O1xuICB0b3A6IDcwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmJveDYge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDIyMHB4O1xuICBsZWZ0OiAxNXB4O1xuICBoZWlnaHQ6IDclO1xuICB0b3A6IDc2JTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBjb2xvcjogb3JhbmdlO1xuICBwYWRkaW5nOiAwLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmljb242IHtcbiAgbGVmdDogMjEwcHg7XG4gIHRvcDogNzglO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYm94NyB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMjIwcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGhlaWdodDogNyU7XG4gIHRvcDogODQlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIHBhZGRpbmc6IDAuOGVtO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaWNvbjcge1xuICBsZWZ0OiAyMTBweDtcbiAgdG9wOiA4NiU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbmxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNoa0JveGVzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDJmciAzMHB4IDJmcjtcbiAgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubGVmdEEge1xuICBncmlkLWNvbHVtbjogMS8yO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucmlnaHRBIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBncmlkLWNvbHVtbjogMi8zO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5sZWZ0QiB7XG4gIGdyaWQtY29sdW1uOiAzLzQ7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5yaWdodEIge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMDAlO1xuICBncmlkLWNvbHVtbjogNC81O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvSalonComposerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cv-salon-composer',
          templateUrl: './cv-salon-composer.component.html',
          styleUrls: ['./cv-salon-composer.component.scss']
        }]
      }], function () {
        return [{
          type: _lib_dialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"]
        }, {
          type: _lib_restSvc__WEBPACK_IMPORTED_MODULE_3__["RestSvc"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cv-salon/cv-salon-viewer/cv-salon-viewer.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/cv-salon/cv-salon-viewer/cv-salon-viewer.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CvSalonViewerComponent */

  /***/
  function srcAppCvSalonCvSalonViewerCvSalonViewerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvSalonViewerComponent", function () {
      return CvSalonViewerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lib_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../lib/global */
    "./src/app/lib/global.ts");
    /* harmony import */


    var _lib_restSvc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../lib/restSvc */
    "./src/app/lib/restSvc.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CvSalonViewerComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ABOUT ME ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonViewerComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonViewerComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SKILLS: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonViewerComponent_div_11_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonViewerComponent_div_11_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonViewerComponent_div_11_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonViewerComponent_div_11_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonViewerComponent_div_11_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonViewerComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvSalonViewerComponent_div_11_div_3_Template, 12, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvSalonViewerComponent_div_11_div_4_Template, 12, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvSalonViewerComponent_div_11_div_5_Template, 12, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CvSalonViewerComponent_div_11_div_6_Template, 12, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CvSalonViewerComponent_div_11_div_7_Template, 11, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skill_r20.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r20.rate == "1 Star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r20.rate == "2 Stars");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r20.rate == "3 Stars");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r20.rate == "4 Stars");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r20.rate == "5 Stars");
      }
    }

    function CvSalonViewerComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonViewerComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Qualified to train programs in ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonViewerComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var program_r26 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", program_r26, " ");
      }
    }

    function CvSalonViewerComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonViewerComponent_i_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonViewerComponent_i_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonViewerComponent_i_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonViewerComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " EDUCATION: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonViewerComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var edu_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", edu_r27.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", edu_r27.note, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function CvSalonViewerComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " EXPERIENCE: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonViewerComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var exp_r28 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", exp_r28.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", exp_r28.note, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function CvSalonViewerComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " CERTIFICATIONS: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonViewerComponent_div_34_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cert_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cert_r30.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", cert_r30.note, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function CvSalonViewerComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvSalonViewerComponent_div_34_div_2_Template, 5, 2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.certs);
      }
    }

    function CvSalonViewerComponent_div_35_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var program_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", program_r32, " ");
      }
    }

    function CvSalonViewerComponent_div_35_div_2_div_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cert_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cert_r36.title, " ");
      }
    }

    function CvSalonViewerComponent_div_35_div_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvSalonViewerComponent_div_35_div_2_div_3_div_1_Template, 3, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cert_r36 = ctx.$implicit;

        var program_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cert_r36.program == program_r32);
      }
    }

    function CvSalonViewerComponent_div_35_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvSalonViewerComponent_div_35_div_2_div_1_Template, 2, 1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvSalonViewerComponent_div_35_div_2_div_3_Template, 2, 1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var program_r32 = ctx.$implicit;

        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.programHasCert(program_r32));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r31.certs);
      }
    }

    function CvSalonViewerComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvSalonViewerComponent_div_35_div_2_Template, 5, 2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.programs);
      }
    }

    function CvSalonViewerComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ACHIEVEMENTS : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSalonViewerComponent_div_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var acheive_r40 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", acheive_r40.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", acheive_r40.note, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var CvSalonViewerComponent = /*#__PURE__*/function () {
      function CvSalonViewerComponent(restSvc) {
        _classCallCheck(this, CvSalonViewerComponent);

        this.restSvc = restSvc;
        this.resp = "";
        this.isImageLoading = false; //photo: any ; 

        this.client = 'cvSalon';
        this.files = [];
      }

      _createClass(CvSalonViewerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.photo = Global.photo ;
        }
      }, {
        key: "programHasCert",
        value: function programHasCert(paraProgram) {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["certs"].findIndex(function (item) {
            return item.program == paraProgram;
          }) >= 0 ? true : false;
        }
      }, {
        key: "clientName",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].clientName;
        }
      }, {
        key: "programs",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["programs"];
        }
      }, {
        key: "name",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["name"];
        }
      }, {
        key: "aboutMe",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["aboutMe"];
        }
      }, {
        key: "dob",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["dob"];
        }
      }, {
        key: "mobileNbr",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["mobileNbr"];
        }
      }, {
        key: "address",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["address"];
        }
      }, {
        key: "email",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["email"];
        }
      }, {
        key: "edus",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["edus"];
        }
      }, {
        key: "exps",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["exps"];
        }
      }, {
        key: "certs",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["certs"];
        }
      }, {
        key: "skills",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["skills"];
        }
      }, {
        key: "acheives",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["acheives"];
        }
      }, {
        key: "photo",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].photo;
        }
      }]);

      return CvSalonViewerComponent;
    }();

    CvSalonViewerComponent.ɵfac = function CvSalonViewerComponent_Factory(t) {
      return new (t || CvSalonViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lib_restSvc__WEBPACK_IMPORTED_MODULE_2__["RestSvc"]));
    };

    CvSalonViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CvSalonViewerComponent,
      selectors: [["app-cv-salon-viewer"]],
      decls: 39,
      vars: 26,
      consts: [["id", "cvSalon", 1, "mainContent"], ["fxFlex", "2 1 30%", 1, "cssLeftWysiwyg", 2, "background-color", "black", "color", "black"], ["alt", "My Photo", 3, "src"], [1, "cssName"], ["class", "cssTitle", 4, "ngIf"], [1, "cssText"], [3, "innerHTML"], [4, "ngIf"], ["class", "cssText", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["class", "material-icons", 4, "ngIf"], ["fxLayout", "columns", "fxLayoutAlign", "center center"], ["fxFlex", "2 1 70%", "fxLayout", "column", 2, "background-color", "white", "color", "black"], ["class", "cssTitleRight", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "cssTitle"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["class", "cssText", 4, "ngIf"], [1, "material-icons", "smallIcon"], [2, "color", "gray"], [1, "material-icons"], [1, "cssTitleRight"], ["class", "cssLabel", 4, "ngIf"], [1, "cssLabel"]],
      template: function CvSalonViewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CvSalonViewerComponent_div_6_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CvSalonViewerComponent_div_9_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CvSalonViewerComponent_div_10_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CvSalonViewerComponent_div_11_Template, 8, 6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CvSalonViewerComponent_div_12_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CvSalonViewerComponent_div_13_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CvSalonViewerComponent_div_14_Template, 3, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CvSalonViewerComponent_div_15_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CvSalonViewerComponent_i_17_Template, 2, 0, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CvSalonViewerComponent_i_20_Template, 2, 0, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CvSalonViewerComponent_i_23_Template, 2, 0, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CvSalonViewerComponent_div_27_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CvSalonViewerComponent_div_29_Template, 5, 2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CvSalonViewerComponent_div_30_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CvSalonViewerComponent_div_32_Template, 5, 2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CvSalonViewerComponent_div_33_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CvSalonViewerComponent_div_34_Template, 3, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CvSalonViewerComponent_div_35_Template, 3, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CvSalonViewerComponent_div_36_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CvSalonViewerComponent_div_38_Template, 5, 2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.aboutMe);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.aboutMe, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.aboutMe);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.skills.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.skills.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.programs.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.programs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.programs.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobileNbr);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mobileNbr, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.address, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edus.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.edus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exps.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.exps);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.certs.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clientName == "cvSalon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clientName == "optimusMinds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.acheives.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.acheives);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"]],
      styles: [".mainContent[_ngcontent-%COMP%] {\n  margin-top: 1px;\n  \n  font-size: 12px;\n  padding: 1px;\n  height: 100vh;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 90%;\n  color: white;\n  background-color: #f06d06;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  border: 2px solid gray;\n  margin-bottom: 5px;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  border-color: #f06d06;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin-top: 5px;\n  margin-left: 15%;\n  height: 25%;\n  width: 70%;\n  \n}\n\n.cssLeftWysiwyg[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n\n.cssName[_ngcontent-%COMP%] {\n  font-family: \"Big Shoulders Text\";\n  font-size: 20px;\n  font-weight: bolder;\n  color: white;\n  margin: 5px;\n  text-align: center;\n}\n\n.cssTrainerName[_ngcontent-%COMP%] {\n  font-family: \"Big Shoulders Text\";\n  font-size: 20px;\n  font-weight: bolder;\n  color: white;\n  margin: 5px;\n  text-align: center;\n}\n\n.cssTitle[_ngcontent-%COMP%] {\n  font-family: \"Big Shoulders Text\";\n  font-size: 14px;\n  font-weight: bold;\n  color: white;\n  margin: 5px;\n  text-align: center;\n}\n\n.cssTitleRight[_ngcontent-%COMP%] {\n  font-family: \"Big Shoulders Text\";\n  font-size: 17px;\n  font-weight: bold;\n  color: black;\n  margin-top: 10px;\n  margin-left: 10px;\n}\n\n.cssLabel[_ngcontent-%COMP%] {\n  font-family: \"Big Shoulders Text\";\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-bottom: 1px;\n}\n\n.cssLabelRight[_ngcontent-%COMP%] {\n  font-family: \"Big Shoulders Text\";\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-top: 5px;\n}\n\n.cssText[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: white;\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\nli[_ngcontent-%COMP%] {\n  font-family: \"Big Shoulders Text\";\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n  margin-top: 5px;\n}\n\n.material-icons.smallIcon[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Ytc2Fsb24vY3Ytc2Fsb24tdmlld2VyL0M6XFxEYXRhXFxkZXYyMDIwXFxjdlNhbG9uM1xcY3ZTYWxvbi9zcmNcXGFwcFxcY3Ytc2Fsb25cXGN2LXNhbG9uLXZpZXdlclxcY3Ytc2Fsb24tdmlld2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdi1zYWxvbi9jdi1zYWxvbi12aWV3ZXIvY3Ytc2Fsb24tdmlld2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUFpQiw4Q0FBQTtFQUVqQixlQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7QUNBSjs7QURHRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURHRTtFQUVFLHNCQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURLRTtFQUNFLHFCQUFBO0FDRko7O0FES0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURNRTtFQUNDLHVCQUFBO0VBQ0EsWUFBQTtBQ0hIOztBRE1FO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDSEo7O0FETUU7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURNRTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0hKOztBRE1FO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0hKOztBRFFFO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTEo7O0FEUUU7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0xKOztBRFNFO0VBRUUsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNQSjs7QURVRTtFQUVFLGdCQUFBO0VBQ0EsaUJBQUE7QUNSSjs7QURXRTtFQUVFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNUSjs7QURZRTtFQUNFLGVBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL2N2LXNhbG9uL2N2LXNhbG9uLXZpZXdlci9jdi1zYWxvbi12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMXB4OyAvKiBBZGQgYSB0b3AgbWFyZ2luIHRvIGF2b2lkIGNvbnRlbnQgb3ZlcmxheSAqL1xyXG4gICBcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgcGFkZGluZzoxcHggO1xyXG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMHZoO1xyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiA5MCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA2ZDA2O1xyXG4gIH1cclxuICBcclxuICBpbnB1dCwgdGV4dGFyZWEge1xyXG4gICBcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHggO1xyXG4gIH1cclxuICBcclxuICBcclxuICBpbnB1dDpmb2N1cywgIHRleHRhcmVhOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2YwNmQwNjtcclxuICB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxuICAgIHdpZHRoOiAgNzAlO1xyXG4gICAgLyogd2lkdGg6IDE1MHB4OyAqL1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5jc3NMZWZ0V3lzaXd5ZyB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICBjb2xvcjp3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmNzc05hbWUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCaWcgU2hvdWxkZXJzIFRleHQnO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBtYXJnaW46NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY3NzVHJhaW5lck5hbWUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCaWcgU2hvdWxkZXJzIFRleHQnO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBtYXJnaW46NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY3NzVGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCaWcgU2hvdWxkZXJzIFRleHQnO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgbWFyZ2luOjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNzc1RpdGxlUmlnaHQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCaWcgU2hvdWxkZXJzIFRleHQnO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICBcclxuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNzc0xhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQmlnIFNob3VsZGVycyBUZXh0JztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFweDtcclxuICB9XHJcbiAgXHJcbiAgLmNzc0xhYmVsUmlnaHQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCaWcgU2hvdWxkZXJzIFRleHQnO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAuY3NzVGV4dCB7XHJcbiAgIFxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGhyIHtcclxuICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGxpIHtcclxuICBcclxuICAgIGZvbnQtZmFtaWx5OiAnQmlnIFNob3VsZGVycyBUZXh0JztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdGVyaWFsLWljb25zLnNtYWxsSWNvbiB7IFxyXG4gICAgZm9udC1zaXplOiAxMnB4OyBcclxuICAgXHJcbiAgICB9IiwiLm1haW5Db250ZW50IHtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICAvKiBBZGQgYSB0b3AgbWFyZ2luIHRvIGF2b2lkIGNvbnRlbnQgb3ZlcmxheSAqL1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDFweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxubGFiZWwge1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA2ZDA2O1xufVxuXG5pbnB1dCwgdGV4dGFyZWEge1xuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbmlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogI2YwNmQwNjtcbn1cblxuaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIGhlaWdodDogMjUlO1xuICB3aWR0aDogNzAlO1xuICAvKiB3aWR0aDogMTUwcHg7ICovXG59XG5cbi5jc3NMZWZ0V3lzaXd5ZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jc3NOYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiQmlnIFNob3VsZGVycyBUZXh0XCI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY3NzVHJhaW5lck5hbWUge1xuICBmb250LWZhbWlseTogXCJCaWcgU2hvdWxkZXJzIFRleHRcIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jc3NUaXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJpZyBTaG91bGRlcnMgVGV4dFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jc3NUaXRsZVJpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiQmlnIFNob3VsZGVycyBUZXh0XCI7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jc3NMYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIkJpZyBTaG91bGRlcnMgVGV4dFwiO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5jc3NMYWJlbFJpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IFwiQmlnIFNob3VsZGVycyBUZXh0XCI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmNzc1RleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuaHIge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxubGkge1xuICBmb250LWZhbWlseTogXCJCaWcgU2hvdWxkZXJzIFRleHRcIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucy5zbWFsbEljb24ge1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvSalonViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cv-salon-viewer',
          templateUrl: './cv-salon-viewer.component.html',
          //templateUrl: './temp.html',
          styleUrls: ['./cv-salon-viewer.component.scss'] //  styleUrls: ['./temp.scss'],

        }]
      }], function () {
        return [{
          type: _lib_restSvc__WEBPACK_IMPORTED_MODULE_2__["RestSvc"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cv-salon/cv-salon.ts":
  /*!**************************************!*\
    !*** ./src/app/cv-salon/cv-salon.ts ***!
    \**************************************/

  /*! exports provided: CvSalon */

  /***/
  function srcAppCvSalonCvSalonTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvSalon", function () {
      return CvSalon;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _cv_salon_composer_cv_salon_composer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cv-salon-composer/cv-salon-composer.component */
    "./src/app/cv-salon/cv-salon-composer/cv-salon-composer.component.ts");
    /* harmony import */


    var _cv_salon_viewer_cv_salon_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cv-salon-viewer/cv-salon-viewer.component */
    "./src/app/cv-salon/cv-salon-viewer/cv-salon-viewer.component.ts");

    var CvSalon = /*#__PURE__*/function () {
      function CvSalon() {
        _classCallCheck(this, CvSalon);
      }

      _createClass(CvSalon, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CvSalon;
    }();

    CvSalon.ɵfac = function CvSalon_Factory(t) {
      return new (t || CvSalon)();
    };

    CvSalon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CvSalon,
      selectors: [["app-cv-salon-site"]],
      decls: 6,
      vars: 0,
      consts: [[1, "flex-container"], ["fxLayout", "row wrap"], ["fxFlex", "100%", "fxFlex.gt-sm", "50%"]],
      template: function CvSalon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-cv-salon-composer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-cv-salon-viewer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _cv_salon_composer_cv_salon_composer_component__WEBPACK_IMPORTED_MODULE_2__["CvSalonComposerComponent"], _cv_salon_viewer_cv_salon_viewer_component__WEBPACK_IMPORTED_MODULE_3__["CvSalonViewerComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvSalon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cv-salon-site',
          template: "<div class=\"flex-container\">\n  <div fxLayout=\"row wrap\">\n    <div  fxFlex=\"100%\" fxFlex.gt-sm=\"50%\" >\n           <app-cv-salon-composer></app-cv-salon-composer> \n    </div>\n    <div  fxFlex=\"100%\" fxFlex.gt-sm=\"50%\">\n          <app-cv-salon-viewer></app-cv-salon-viewer> \n    </div> \n    </div> \n   \n  </div>"
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lib_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../lib/global */
    "./src/app/lib/global.ts");
    /* harmony import */


    var _lib_ctrlSvc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../lib/ctrlSvc */
    "./src/app/lib/ctrlSvc.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(ctrlSvc) {
        _classCallCheck(this, HeaderComponent);

        this.ctrlSvc = ctrlSvc;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.ctrlSvc.onSubmit();
        }
      }, {
        key: "onQry",
        value: function onQry() {
          this.ctrlSvc.onQry();
        }
      }, {
        key: "onPdf",
        value: function onPdf() {
          this.ctrlSvc.onPdf();
        }
      }, {
        key: "domainName",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].domainName;
        }
      }, {
        key: "logo",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].logo;
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lib_ctrlSvc__WEBPACK_IMPORTED_MODULE_2__["CtrlSvc"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 6,
      vars: 2,
      consts: [[1, "container"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["fxFlex", "1"], ["alt", "logo", 3, "src"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.domainName, " ");
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"]],
      styles: [".container[_ngcontent-%COMP%] {\n  background: black;\n  color: white;\n  font-size: 21px;\n  font-weight: 500;\n  line-height: 25px;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxEYXRhXFxkZXYyMDIwXFxjdlNhbG9uM1xcY3ZTYWxvbi9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFHQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RKOztBREtBO0VBR0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgIFxyXG59XHJcblxyXG5pbWcge1xyXG4gICAgXHJcbiAgICBcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgLyogd2lkdGg6IDE1MHB4OyAqL1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICIsIi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICAvKiB3aWR0aDogMTUwcHg7ICovXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _lib_ctrlSvc__WEBPACK_IMPORTED_MODULE_2__["CtrlSvc"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lib/ctrlSvc.ts":
  /*!********************************!*\
    !*** ./src/app/lib/ctrlSvc.ts ***!
    \********************************/

  /*! exports provided: CtrlSvc */

  /***/
  function srcAppLibCtrlSvcTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlSvc", function () {
      return CtrlSvc;
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


    var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./global */
    "./src/app/lib/global.ts");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jspdf */
    "./node_modules/jspdf/dist/jspdf.min.js");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var html2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! html2canvas */
    "./node_modules/html2canvas/dist/html2canvas.js");
    /* harmony import */


    var html2canvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var jszip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! jszip */
    "./node_modules/jszip/dist/jszip.min.js");
    /* harmony import */


    var jszip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _restSvc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./restSvc */
    "./src/app/lib/restSvc.ts");
    /* harmony import */


    var _dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./dialog */
    "./src/app/lib/dialog/index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CtrlSvc = /*#__PURE__*/function () {
      function CtrlSvc(restSvc, dlgSvc, httpClient) {
        _classCallCheck(this, CtrlSvc);

        this.restSvc = restSvc;
        this.dlgSvc = dlgSvc;
        this.httpClient = httpClient;
        this.errList = [];
        this.docs = [];
      }

      _createClass(CtrlSvc, [{
        key: "onSubmit",
        value: function onSubmit() {
          this.errList = [];
          var aryKeys = Object.keys(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].locData);

          for (var idx = 0; idx < aryKeys.length; idx++) {
            switch (aryKeys[idx]) {
              /* case 'moeExpiry':
                if (Global.locData[aryKeys[idx]] === '') {
                  this.errList.push('MOE Expiry date cannot be empty');
                }
                break; */
              case 'name':
                if (_global__WEBPACK_IMPORTED_MODULE_2__["Global"].locData[aryKeys[idx]] === '') {
                  this.errList.push('Name cannot be empty');
                }

                break;

              case 'email':
                if (_global__WEBPACK_IMPORTED_MODULE_2__["Global"].locData[aryKeys[idx]] === '') {
                  this.errList.push('Email cannot be empty');
                }

                break;

              case 'dob':
                if (_global__WEBPACK_IMPORTED_MODULE_2__["Global"].locData[aryKeys[idx]] === '') {
                  this.errList.push('Date of birth cannot be empty');
                }

                break;

              /* case 'idNbr':
                if (Global.locData[aryKeys[idx]] === '') {
                  this.errList.push('Identity number cannot be empty');
                }
                break */

              case 'mobileNbr':
                if (_global__WEBPACK_IMPORTED_MODULE_2__["Global"].locData[aryKeys[idx]] === '') {
                  this.errList.push('Mobile number cannot be empty');
                }

                break;
            }
          }

          if (this.errList.length > 0) {
            _global__WEBPACK_IMPORTED_MODULE_2__["Global"].errList = this.errList;
            this.dlgSvc.open('dlgErr');
            {
              return;
            }
          }

          this.docs = [];

          for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_2__["Global"].docs.length; i++) {
            var doc = {
              docTable: _global__WEBPACK_IMPORTED_MODULE_2__["Global"].docs[i]['docTable'],
              docName: _global__WEBPACK_IMPORTED_MODULE_2__["Global"].docs[i]['file'].name
            };
            this.docs.push(doc);
          }

          this.dlgSvc.open('dlgSubmit');
        }
      }, {
        key: "onQry",
        value: function onQry() {
          _global__WEBPACK_IMPORTED_MODULE_2__["Global"].makeProgramList();

          this.restSvc.qryTrainer(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].locData["programs"]).then(function (rcvd) {
            var obj = {};
            _global__WEBPACK_IMPORTED_MODULE_2__["Global"].trainersExist = false;
            obj["list"] = rcvd;
            _global__WEBPACK_IMPORTED_MODULE_2__["Global"].trainers = obj["list"];
            _global__WEBPACK_IMPORTED_MODULE_2__["Global"].trainersExist = true;
          }, function (err) {
            _global__WEBPACK_IMPORTED_MODULE_2__["Global"].trainersExist = false;
          });
        }
      }, {
        key: "onPdf",
        value: function onPdf() {
          var name = _global__WEBPACK_IMPORTED_MODULE_2__["Global"].name;
          var data = document.getElementById('cvSalon');
          html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(data).then(function (canvas) {
            // Few necessary setting options
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_3__('p', 'mm', 'a4'); // A4 size page of PDF

            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save(name); // Generated PDF
            // pdf.save("myfile.pdf", {returnPromise:true}).then(alert('PDF render all done!'));
            // var blob = pdf.output('blob'
          });
        }
      }, {
        key: "onPdfBlob",
        value: function onPdfBlob(zip) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var name, data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    name = _global__WEBPACK_IMPORTED_MODULE_2__["Global"].name;
                    data = document.getElementById('cvSalon');
                    html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(data).then(function (canvas) {
                      // Few necessary setting options
                      var imgWidth = 208;
                      var pageHeight = 295;
                      var imgHeight = canvas.height * imgWidth / canvas.width;
                      var heightLeft = imgHeight;
                      var contentDataURL = canvas.toDataURL('image/png');
                      var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_3__('p', 'mm', 'a4'); // A4 size page of PDF

                      var position = 0;
                      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight); // var blobData = pdf.output('blob') ;
                      //pdf.output("myfile.pdf", {returnPromise:true}).then(alert('PDF render all done!'));
                      // pdfBlob = new Blob([pdf.output('blob')], {type: 'application/pdf'}) ;

                      zip.file('cv.pdf', new Blob([pdf.output('blob')], {
                        type: 'application/pdf'
                      }));
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "onZipPack",
        value: function onZipPack() {
          // alert(Global._id) ;
          // alert(Global.locData["name"]) ;
          this.createZip(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].locData["name"]);
        }
      }, {
        key: "getFile",
        value: function getFile(doc) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var httpOptions, apiEp, res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    httpOptions = {
                      responseType: 'blob'
                    };
                    apiEp = "".concat(this.restSvc.SERVER_URL).concat(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].tableName, "/downLoadFile/").concat(_global__WEBPACK_IMPORTED_MODULE_2__["Global"]._id, "/folder/").concat(doc["folder"], "/file/").concat(doc["file"]);
                    _context2.next = 4;
                    return this.httpClient.get(apiEp, httpOptions).toPromise()["catch"](function (err) {
                      var error = err.error;
                      return error;
                    });

                  case 4:
                    res = _context2.sent;
                    return _context2.abrupt("return", res);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "createZip",
        value: function createZip(zipName) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var zip, name, pdfBlob, counter, doc, fileData, b;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    zip = new jszip__WEBPACK_IMPORTED_MODULE_6__();
                    name = zipName + '.zip'; // const pdfBlob: any
                    //

                    pdfBlob = this.onPdfBlob(zip); // tslint:disable-next-line:prefer-for-of  

                    counter = 0;

                  case 4:
                    if (!(counter < _global__WEBPACK_IMPORTED_MODULE_2__["Global"].docs.length)) {
                      _context3.next = 14;
                      break;
                    }

                    doc = _global__WEBPACK_IMPORTED_MODULE_2__["Global"].docs[counter];
                    _context3.next = 8;
                    return this.getFile(doc);

                  case 8:
                    fileData = _context3.sent;
                    b = new Blob([fileData], {
                      type: '' + fileData.type + ''
                    });
                    zip.file(doc['file'], b);

                  case 11:
                    counter++;
                    _context3.next = 4;
                    break;

                  case 14:
                    zip.generateAsync({
                      type: 'blob'
                    }).then(function (content) {
                      if (content) {
                        file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"](content, name);
                      }
                    });

                  case 15:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return CtrlSvc;
    }();

    CtrlSvc.ɵfac = function CtrlSvc_Factory(t) {
      return new (t || CtrlSvc)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_restSvc__WEBPACK_IMPORTED_MODULE_7__["RestSvc"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]));
    };

    CtrlSvc.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CtrlSvc,
      factory: CtrlSvc.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CtrlSvc, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _restSvc__WEBPACK_IMPORTED_MODULE_7__["RestSvc"]
        }, {
          type: _dialog__WEBPACK_IMPORTED_MODULE_8__["DialogService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lib/dialog/dialog.component.ts":
  /*!************************************************!*\
    !*** ./src/app/lib/dialog/dialog.component.ts ***!
    \************************************************/

  /*! exports provided: DialogComponent */

  /***/
  function srcAppLibDialogDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
      return DialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dialog.service */
    "./src/app/lib/dialog/dialog.service.ts");

    var _c0 = ["*"];

    var DialogComponent = /*#__PURE__*/function () {
      function DialogComponent(dialogService, el) {
        _classCallCheck(this, DialogComponent);

        this.dialogService = dialogService;
        this.el = el;
        this.element = el.nativeElement;
      }

      _createClass(DialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          // ensure id attribute exists
          if (!this.id) {
            console.error('dialog must have an id');
            return;
          } // move element to bottom of page (just before </body>) so it can be displayed above everything else


          document.body.appendChild(this.element); // close modal on background click

          this.element.addEventListener('click', function (el) {
            if (el.target.className === 'dilaog') {
              _this15.close();
            }
          }); // add self (this modal instance) to the modal service so it's accessible from controllers

          this.dialogService.add(this);
        } // remove self from modal service when component is destroyed

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.dialogService.remove(this.id);
          this.element.remove();
        } // open modal

      }, {
        key: "open",
        value: function open() {
          this.element.style.display = 'block';
          document.body.classList.add('dialog');
        } // close modal

      }, {
        key: "close",
        value: function close() {
          this.element.style.display = 'none';
          document.body.classList.remove('dialog');
        }
      }]);

      return DialogComponent;
    }();

    DialogComponent.ɵfac = function DialogComponent_Factory(t) {
      return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogComponent,
      selectors: [["dialog"]],
      inputs: {
        id: "id"
      },
      ngContentSelectors: _c0,
      decls: 4,
      vars: 0,
      consts: [[1, "dialog"], [1, "dialog-body"], [1, "dialog-background"]],
      template: function DialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        }
      },
      styles: ["/* MODAL STYLES\n-------------------------------*/\ndialog {\n  /* modals are hidden by default */\n  display: none;\n  /* .dialog .dlgBigWidht {\n      width: 55%;\n  } */\n}\ndialog label {\n  background-color: orange;\n  color: black;\n}\ndialog button {\n  margin-top: 15px;\n  margin-right: 5px;\n}\ndialog .dialog {\n  position: fixed;\n  top: 20%;\n  border: 5px solid orange;\n  width: 360px;\n  border-radius: 5px;\n  left: 50%;\n  margin-left: -180px;\n  /* z-index must be higher than .dialog-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\ndialog .dialog .dialog-body {\n  padding: 5px;\n  background: white;\n  color: black;\n  /* margin exposes part of the modal background */\n  margin: 1px;\n}\ndialog .dialog-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .dialog and above everything else  */\n  z-index: 900;\n}\ndialog .lblY {\n  font-size: 12px;\n}\ndialog .lblX {\n  font-size: 12px;\n}\nbody.dialog-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGliL2RpYWxvZy9DOlxcRGF0YVxcZGV2MjAyMFxcY3ZTYWxvbjNcXGN2U2Fsb24vc3JjXFxhcHBcXGxpYlxcZGlhbG9nXFxkaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpYi9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO2dDQUFBO0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGFBQUE7RUFpREE7O0tBQUE7QUM3Q0o7QURESTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtBQ0dSO0FEQUk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDRVI7QURLSTtFQUNBLGVBQUE7RUFFQSxRQUFBO0VBRUEsd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFHQSxTQUFBO0VBQ0EsbUJBQUE7RUFFRSxtREFBQTtFQUNBLGFBQUE7RUFFQSxzQ0FBQTtFQUNBLGNBQUE7QUNUTjtBRGFNO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUVBLGdEQUFBO0VBQ0EsV0FBQTtBQ1pSO0FEcUJJO0VBQ0ksK0NBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUVBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBRUEsNkRBQUE7RUFDQSxZQUFBO0FDckJSO0FEd0JJO0VBQ0ksZUFBQTtBQ3RCUjtBRHlCSTtFQUNJLGVBQUE7QUN2QlI7QUQ2QkE7RUFDSSw2RUFBQTtFQUNBLGdCQUFBO0FDMUJKIiwiZmlsZSI6InNyYy9hcHAvbGliL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNT0RBTCBTVFlMRVNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmRpYWxvZyB7XHJcbiAgICAvKiBtb2RhbHMgYXJlIGhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICBcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIFxyXG4gICAgIH1cclxuICAgIFxyXG4gICAgIFxyXG4gICAgICBcclxuXHJcbiAgICAuZGlhbG9nIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgLy9AZXh0ZW5kIGxlZnQ6IDM3JTtcclxuICAgIHRvcDogMjAlOyAgXHJcbiAgICAvL3RyYW5zZm9ybTogdHJhbnNsYXRlKDIwJSwgMjAlKTtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIG9yYW5nZTtcclxuICAgIHdpZHRoOiAzNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTgwcHg7IFxyXG5cclxuICAgICAgLyogei1pbmRleCBtdXN0IGJlIGhpZ2hlciB0aGFuIC5kaWFsb2ctYmFja2dyb3VuZCAqL1xyXG4gICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgIFxyXG4gICAgICAvKiBlbmFibGVzIHNjcm9sbGluZyBmb3IgdGFsbCBtb2RhbHMgKi9cclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiBcclxuICAgICBcclxuXHJcbiAgICAgIC5kaWFsb2ctYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuXHJcbiAgICAgICAgLyogbWFyZ2luIGV4cG9zZXMgcGFydCBvZiB0aGUgbW9kYWwgYmFja2dyb3VuZCAqL1xyXG4gICAgICAgIG1hcmdpbjogMXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiAuZGlhbG9nIC5kbGdCaWdXaWRodCB7XHJcbiAgICAgICAgd2lkdGg6IDU1JTtcclxuICAgIH0gKi9cclxuXHJcbiAgICAuZGlhbG9nLWJhY2tncm91bmQge1xyXG4gICAgICAgIC8qIG1vZGFsIGJhY2tncm91bmQgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgICAgIC8qIHNlbWktdHJhbnNwYXJlbnQgYmxhY2sgICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICBvcGFjaXR5OiAwLjc1O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIHotaW5kZXggbXVzdCBiZSBiZWxvdyAuZGlhbG9nIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXHJcbiAgICAgICAgei1pbmRleDogOTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sYmxZIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxibFgge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG5cclxuYm9keS5kaWFsb2ctb3BlbiB7XHJcbiAgICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG4iLCIvKiBNT0RBTCBTVFlMRVNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZGlhbG9nIHtcbiAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBkaXNwbGF5OiBub25lO1xuICAvKiAuZGlhbG9nIC5kbGdCaWdXaWRodCB7XG4gICAgICB3aWR0aDogNTUlO1xuICB9ICovXG59XG5kaWFsb2cgbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIGNvbG9yOiBibGFjaztcbn1cbmRpYWxvZyBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbmRpYWxvZyAuZGlhbG9nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDIwJTtcbiAgYm9yZGVyOiA1cHggc29saWQgb3JhbmdlO1xuICB3aWR0aDogMzYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE4MHB4O1xuICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLmRpYWxvZy1iYWNrZ3JvdW5kICovXG4gIHotaW5kZXg6IDEwMDA7XG4gIC8qIGVuYWJsZXMgc2Nyb2xsaW5nIGZvciB0YWxsIG1vZGFscyAqL1xuICBvdmVyZmxvdzogYXV0bztcbn1cbmRpYWxvZyAuZGlhbG9nIC5kaWFsb2ctYm9keSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgLyogbWFyZ2luIGV4cG9zZXMgcGFydCBvZiB0aGUgbW9kYWwgYmFja2dyb3VuZCAqL1xuICBtYXJnaW46IDFweDtcbn1cbmRpYWxvZyAuZGlhbG9nLWJhY2tncm91bmQge1xuICAvKiBtb2RhbCBiYWNrZ3JvdW5kIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIC8qIHNlbWktdHJhbnNwYXJlbnQgYmxhY2sgICovXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIC8qIHotaW5kZXggbXVzdCBiZSBiZWxvdyAuZGlhbG9nIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXG4gIHotaW5kZXg6IDkwMDtcbn1cbmRpYWxvZyAubGJsWSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmRpYWxvZyAubGJsWCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuYm9keS5kaWFsb2ctb3BlbiB7XG4gIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'dialog',
          templateUrl: 'dialog.component.html',
          styleUrls: ['dialog.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/lib/dialog/dialog.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/lib/dialog/dialog.module.ts ***!
    \*********************************************/

  /*! exports provided: DialogModule */

  /***/
  function srcAppLibDialogDialogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogModule", function () {
      return DialogModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dialog.component */
    "./src/app/lib/dialog/dialog.component.ts");

    var DialogModule = function DialogModule() {
      _classCallCheck(this, DialogModule);
    };

    DialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DialogModule
    });
    DialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DialogModule_Factory(t) {
        return new (t || DialogModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DialogModule, {
        declarations: [_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]],
          exports: [_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/lib/dialog/dialog.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/lib/dialog/dialog.service.ts ***!
    \**********************************************/

  /*! exports provided: DialogService */

  /***/
  function srcAppLibDialogDialogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogService", function () {
      return DialogService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DialogService = /*#__PURE__*/function () {
      function DialogService() {
        _classCallCheck(this, DialogService);

        this.dialogs = [];
      }

      _createClass(DialogService, [{
        key: "add",
        value: function add(dialog) {
          // add modal to array of active modals
          this.dialogs.push(dialog);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          // remove modal from array of active modals
          this.dialogs = this.dialogs.filter(function (x) {
            return x.id !== id;
          });
        }
      }, {
        key: "open",
        value: function open(id) {
          // open modal specified by id
          var dialog = this.dialogs.find(function (x) {
            return x.id === id;
          });
          dialog.open();
        }
      }, {
        key: "close",
        value: function close(id) {
          // close modal specified by id
          var dialog = this.dialogs.find(function (x) {
            return x.id === id;
          });
          dialog.close();
        }
      }]);

      return DialogService;
    }();

    DialogService.ɵfac = function DialogService_Factory(t) {
      return new (t || DialogService)();
    };

    DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DialogService,
      factory: DialogService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/lib/dialog/index.ts":
  /*!*************************************!*\
    !*** ./src/app/lib/dialog/index.ts ***!
    \*************************************/

  /*! exports provided: DialogModule, DialogService */

  /***/
  function srcAppLibDialogIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _dialog_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./dialog.module */
    "./src/app/lib/dialog/dialog.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DialogModule", function () {
      return _dialog_module__WEBPACK_IMPORTED_MODULE_0__["DialogModule"];
    });
    /* harmony import */


    var _dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dialog.service */
    "./src/app/lib/dialog/dialog.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DialogService", function () {
      return _dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"];
    });
    /***/

  },

  /***/
  "./src/app/lib/global.ts":
  /*!*******************************!*\
    !*** ./src/app/lib/global.ts ***!
    \*******************************/

  /*! exports provided: Global */

  /***/
  function srcAppLibGlobalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Global", function () {
      return Global;
    }); //import { Trainer} from '../lib/trainer' ;


    var Global = /*#__PURE__*/function () {
      function Global() {
        _classCallCheck(this, Global);
      }

      _createClass(Global, null, [{
        key: "init",
        value: function init(clientName) {
          this.clientName = clientName;
          this.photo = "../../assets/imgs/myPhoto.png";
          this.locData = {};
          this.svrData = {};
          this.errList = []; // this.locData["_id"] = "" ;

          this.locData["name"] = "";
          this.locData["email"] = "";
          this.locData["dob"] = "";
          this.locData["mobileNbr"] = "";
          this.locData["stage"] = -1;
          this.locData["address"] = "";
          this.locData["aboutMe"] = "";
          this.locData["edus"] = [];
          this.locData["exps"] = [];
          this.locData["certs"] = [];
          this.locData["skills"] = [];
          this.locData["acheives"] = [];
          this.locData["programs"] = [];

          if (this.clientName == 'optimusMinds') {
            this.clientName = clientName;
            this.logo = "../../assets/imgs/optimusMindsLogo.png";
            this.domainName = 'Optimus Minds Pte Ltd';
            this.tableName = "trainers";
            this.locData["moeExpiry"] = "";
            this.locData["moeFile"] = "";
            this.locData["idNbr"] = "";
            this.locData["declareChk"] = false;
            this.locData["shareChk"] = false;
            this.locData["programs"] = [];
          } else if (this.clientName == 'lms') {
            this.clientName = "lms";
            this.logo = "../../assets/imgs/optimusMindsLogo.png";
            this.showTopBar = false;
            this.domainName = "Sysbit - LMS";
            this.tableName = "lms";
            this.locData["userStories"] = [{
              "nbr": 1,
              "role": "Learner",
              "function": "",
              "benefit": "",
              "points": []
            }, {
              "nbr": 2,
              "role": "Learner",
              "function": "",
              "benefit": "",
              "points": []
            }, {
              "nbr": 3,
              "role": "Learner",
              "function": "",
              "benefit": "",
              "points": []
            }];
          } else {
            this.logo = "../../assets/imgs/cvSalonLogo.png";
            this.domainName = 'CV Salon ver 1.0';
            this.tableName = "applicants";
          } // this.locData["_id"] = "" ;


          this.svrData["name"] = "";
          this.svrData["email"] = "";
          this.svrData["dob"] = "";
          this.svrData["mobileNbr"] = "";
          this.svrData["address"] = "";
          this.svrData["aboutMe"] = "";
          this.svrData["edus"] = [];
          this.svrData["exps"] = [];
          this.svrData["skills"] = [];
          this.svrData["acheives"] = [];
          this.svrData["stage"] = -1;

          if (this.clientName == 'optimusMinds') {
            this.svrData["moeExpiry"] = "";
            this.svrData["idNbr"] = "";
            this.svrData["declareChk"] = false;
            this.svrData["shareChk"] = false;
            this.svrData["programs"] = [];
          }

          if (this.clientName == 'lms') {
            this.svrData["userStories"] = [];
          }
        }
      }, {
        key: "pad",
        value: function pad(num, size) {
          var s = num + "";

          while (s.length < size) {
            s = "0" + s;
          }

          return s;
        }
      }, {
        key: "getMaxId",
        value: function getMaxId(array) {
          return Math.max.apply(Math, array.map(function (o) {
            return o.id;
          }));
        }
      }, {
        key: "getMaxDocId",
        value: function getMaxDocId(array) {
          if (array.length === 0) return '00001';
          var nbr = Math.max.apply(Math, array.map(function (o) {
            return o.docId;
          }));
          return this.pad(nbr + 1, 5);
        }
      }, {
        key: "makeProgramList",
        value: function makeProgramList() {
          this.locData["programs"] = [];
          if (this.aiChk) this.locData["programs"].push('AI');
          if (this.atRiskChk) this.locData["programs"].push('At Risk');
          if (this.careerChk) this.locData["programs"].push('Career Perparation');
          if (this.danceChk) this.locData["programs"].push('Dance');
          if (this.dramaChk) this.locData["programs"].push('Drama');
          if (this.itChk) this.locData["programs"].push('IT\\Multimedia');
          if (this.musicChk) this.locData["programs"].push('Music');
          if (this.tongueChk) this.locData["programs"].push('Mother Tongue');
          if (this.skillsChk) this.locData["programs"].push('Life Skills\Soft Skills');
          if (this.outdoorChk) this.locData["programs"].push('Outdoor Education');
          if (this.visualChk) this.locData["programs"].push('Visual Arts');
          if (this.sportsChk) this.locData["programs"].push('Sports');
          if (this.othersChk) this.locData["programs"].push('Others');
        }
      }, {
        key: "calcAchievements",
        value: function calcAchievements() {
          this.achievementsAny = this.locData["achievements"].length === 0 ? false : true;
        }
      }]);

      return Global;
    }();

    Global.showTopBar = true;
    Global.clientName = "";
    Global.errList = [];
    Global.token = "";
    Global.pin = "";
    Global._id = "";
    Global.locData = {};
    Global.svrData = {};
    Global.dlgAuthMode = 0;
    Global.email = "";
    Global.adminLevel = 0;
    Global.adminLevelReq = 0;
    Global.domainName = '';
    Global.tableName = '';
    Global.mnu = -1;
    Global.lmsCards = {};
    Global.lmsUserStories = {};
    Global.lmsMenuName = ''; // public static lmsUserStories = [
    //   {"nbr": 1, "role": "_______" ,"function": "_____________", "benefit":"__________________"} ,
    //   {"nbr": 2, "role": "_______" ,"function": "_____________", "benefit":"__________________"} ,
    //   {"nbr": 3, "role": "_______" ,"function": "_____________", "benefit":"__________________"} 
    // ]

    Global.trainersExist = false; // Optimus Minds

    Global.trainers = {};
    Global.docs = [];
    Global.achievementsAny = false;
    Global.trainExpAiExpCnt = 0;
    Global.trainExpAtRiskCnt = 0;
    Global.trainExpCarrerCnt = 0;
    Global.trainExpDanceExpCnt = 0;
    Global.trainExpDramaExpCnt = 0;
    Global.trainExpItExpCnt = 0;
    Global.trainExpMusicExpCnt = 0;
    Global.trainExpTongueExpCnt = 0;
    Global.trainExpsSkillsExpCnt = 0;
    Global.trainExpsOutdoorExpCnt = 0;
    Global.trainExpsVisualExpCnt = 0;
    Global.trainExpsSportsExpCnt = 0;
    Global.trainExpsOthersExpCnt = 0;
    Global.aiChk = false;
    Global.atRiskChk = false;
    Global.careerChk = false;
    Global.dramaChk = false;
    Global.danceChk = false;
    Global.itChk = false;
    Global.skillsChk = false;
    Global.tongueChk = false;
    Global.musicChk = false;
    Global.outdoorChk = false;
    Global.sportsChk = false;
    Global.visualChk = false;
    Global.othersChk = false;
    Global.aiExpAny = false;
    Global.atRiskExpAny = false;
    Global.careerExpAny = false;
    Global.dramaExpAny = false;
    Global.danceExpAny = false;
    Global.itExpAny = false;
    Global.skillsExpAny = false;
    Global.tongueExpAny = false;
    Global.musicExpAny = false;
    Global.outdoorExpAny = false;
    Global.sportsExpAny = false;
    Global.visualExpAny = false;
    Global.othersExpAny = false;
    Global.program = "+";
    Global.cert = "+";
    Global.from = "+";
    Global.year = "+";
    Global.file = "+";
    Global.trainCertPickId = 0;
    Global.trainCertId = 0;
    Global.dataMode = false;

    Global.trainer = function () {
      return {
        trainerName: '',
        trainerCode: '',
        idNbr: "",
        email: "",
        dob: "",
        mobileNbr: "",
        aboutMe: "",
        declareChk: false,
        shareChk: false,
        edus: [],
        exps: [],
        programs: [],
        trainCerts: [],
        achievements: []
      };
    };

    Global.trainExpAny = function (program) {
      return Global.locData["trainExps"].filter(function (element) {
        return element.program == program;
      }).length > 0 ? true : false;
    };

    Global.trainExpsExpAny = function () {
      Global.aiExpAny = Global.trainExpAny('AI');
      Global.atRiskExpAny = Global.trainExpAny('At Risk');
      Global.careerExpAny = Global.trainExpAny('Career Perparation');
      Global.danceExpAny = Global.trainExpAny('Dance');
      Global.dramaExpAny = Global.trainExpAny('Drama');
      Global.itExpAny = Global.trainExpAny('IT\\Multimedia');
      Global.musicExpAny = Global.trainExpAny('Music');
      Global.tongueExpAny = Global.trainExpAny('Mother Tongue');
      Global.skillsExpAny = Global.trainExpAny('Life Skills\Soft Skills');
      Global.outdoorExpAny = Global.trainExpAny('Outdoor Education');
      Global.visualExpAny = Global.trainExpAny('Visual Arts');
      Global.sportsExpAny = Global.trainExpAny('Sports');
      Global.othersExpAny = Global.trainExpAny('Others');
    };
    /***/

  },

  /***/
  "./src/app/lib/headerInjector.ts":
  /*!***************************************!*\
    !*** ./src/app/lib/headerInjector.ts ***!
    \***************************************/

  /*! exports provided: HeaderInjector */

  /***/
  function srcAppLibHeaderInjectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderInjector", function () {
      return HeaderInjector;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lib_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../lib/global */
    "./src/app/lib/global.ts");

    var HeaderInjector = /*#__PURE__*/function () {
      function HeaderInjector() {
        _classCallCheck(this, HeaderInjector);
      }

      _createClass(HeaderInjector, [{
        key: "intercept",
        value: function intercept(request, next) {
          /*   request = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${Global.authKey}`
                }
              }) */
          ;
          request = request.clone({
            headers: request.headers.set('Authorization', 'Bearer ' + "".concat(_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].token))
          }); //   request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
          //    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
          //    alert(JSON.stringify(request.headers)) ;

          /*  request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + `${Global.authKey}`) });
             request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
           
           request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
          */

          /* request = request.clone({
              setHeaders: {
                  Authorization: 'Global.authKey',
                  Name: 'hardeep'
              }
           */
          //   });

          return next.handle(request);
        }
      }]);

      return HeaderInjector;
    }();

    HeaderInjector.ɵfac = function HeaderInjector_Factory(t) {
      return new (t || HeaderInjector)();
    };

    HeaderInjector.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HeaderInjector,
      factory: HeaderInjector.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderInjector, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lib/programfilter.pipe.ts":
  /*!*******************************************!*\
    !*** ./src/app/lib/programfilter.pipe.ts ***!
    \*******************************************/

  /*! exports provided: ProgramfilterPipe */

  /***/
  function srcAppLibProgramfilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramfilterPipe", function () {
      return ProgramfilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProgramfilterPipe = /*#__PURE__*/function () {
      function ProgramfilterPipe() {
        _classCallCheck(this, ProgramfilterPipe);
      }

      _createClass(ProgramfilterPipe, [{
        key: "transform",
        // transform(value: unknown, ...args: unknown[]): unknown {
        //   return null;
        // }
        value: function transform(docs, filter) {
          if (!docs || !filter) {
            return docs;
          } // filter items array, items which match and return true will be
          // kept, false will be filtered out
          // return docs.filter(doc => doc.program.indexOf(filter) !== -1);


          return docs.filter(function (doc) {
            return filter.indexOf(doc.program) > -1 || doc.program == 'moe';
          }); // programs.indexOf(doc.program) > -1
        }
      }]);

      return ProgramfilterPipe;
    }();

    ProgramfilterPipe.ɵfac = function ProgramfilterPipe_Factory(t) {
      return new (t || ProgramfilterPipe)();
    };

    ProgramfilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "programfilter",
      type: ProgramfilterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgramfilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'programfilter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/lib/restSvc.ts":
  /*!********************************!*\
    !*** ./src/app/lib/restSvc.ts ***!
    \********************************/

  /*! exports provided: RestSvc */

  /***/
  function srcAppLibRestSvcTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestSvc", function () {
      return RestSvc;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./global */
    "./src/app/lib/global.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__); //import { Observable } from 'rxjs';


    var RestSvc = /*#__PURE__*/function () {
      function RestSvc(httpClient) {
        _classCallCheck(this, RestSvc);

        this.httpClient = httpClient; //SERVER_URL: string = "http://localhost:3000/"

        this.SERVER_URL = "https://cvSalon.com:3000/";
        this.btnAction = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.watchBtnAction = this.btnAction.asObservable(); // Emiiter to triggger functions in wysiswyg.ts

        /*   invokeChgPhoto = new EventEmitter();
          subsVar: Subscription; */

        this.action = "";
      }

      _createClass(RestSvc, [{
        key: "onBtnAction",
        value: function onBtnAction(action) {
          this.btnAction.next(action);
        } // Trigger emiiter 

        /*   onChgPhoto() {
            this.invokeChgPhoto.emit();
          }
         */
        // Called by main.ts on load of page to refresh photo

      }, {
        key: "getFile",
        value: function getFile(_id, folder, file) {
          var _this16 = this;

          var apiEp = "".concat(this.SERVER_URL).concat(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].tableName, "/downLoadFile/").concat(_id, "/folder/").concat(folder, "/file/").concat(file);
          alert(apiEp);
          var promise = new Promise(function (resolve, reject) {
            //const apiURL = apiEp + "/" + _id;
            _this16.httpClient.get(apiEp, {
              responseType: 'blob'
            }).toPromise().then(function (res) {
              // Success
              var blob = new Blob(res.data);
              file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"](blob, file);
              resolve();
            }, function (err) {
              reject(err);
            });
          });
          return promise;
        } // public getDoc(httpOptions, _id: string, folder: string, file: string) {
        //   let apiEp = `${this.SERVER_URL}${Global.tableName}/downLoadFile/${_id}/folder/${folder}/file/${file}` ;
        //   const res = await this.httpClient.get(apiEp , httpOptions).toPromise().catch((err: HttpErrorResponse) => {  
        //     const error = err.error;  
        //     return error;  
        //   });  
        //   return res;  
        // alert(apiEp) ;
        // const promise = new Promise((resolve, reject) => {
        //   //const apiURL = apiEp + "/" + _id;
        //   this.httpClient.get(apiEp,{responseType: 'arraybuffer'}).toPromise()
        //     .then((res: any) => {
        //       // Success
        //       let blob = new Blob(res.data);
        //       FileSaver.saveAs(blob, file);
        //       resolve();
        //     },
        //       err => {
        //         reject(err);
        //       }
        //     );
        // });
        // return promise;
        // }

      }, {
        key: "getPhoto",
        value: function getPhoto(_id) {
          var _this17 = this;

          var apiEp = this.SERVER_URL + _global__WEBPACK_IMPORTED_MODULE_2__["Global"].tableName + "/downLoadPhoto/" + _id;
          var promise = new Promise(function (resolve, reject) {
            //const apiURL = apiEp + "/" + _id;
            _this17.httpClient.get(apiEp, {
              responseType: 'blob'
            }).toPromise().then(function (res) {
              // Success
              _this17.makeImgFromBlob(res);

              resolve();
            }, function (err) {
              reject(err);
            });
          });
          return promise;
        } // Convert Blob to Image

      }, {
        key: "makeImgFromBlob",
        value: function makeImgFromBlob(image) {
          var reader = new FileReader();
          reader.addEventListener("load", function (data) {
            _global__WEBPACK_IMPORTED_MODULE_2__["Global"].photo = reader.result; // Trigger function in wysiwyg
            //this.onChgPhoto();
          }, false);

          if (image) {
            reader.readAsDataURL(image);
          }
        } // Upload Photo

        /*   public upLoadPhoto(formData) {
            let uri =  this.SERVER_URL + 'upLoadPhoto'
        
          
            return this.httpClient.post<any>(uri, formData, {
                reportProgress: true,
                observe: 'events'
              });
          }
         */

      }, {
        key: "upLoadDoc",
        value: function upLoadDoc(formData, docType) {
          var uri = this.SERVER_URL + _global__WEBPACK_IMPORTED_MODULE_2__["Global"].tableName;

          if (docType === 'photo') {
            uri += '/upLoadPhoto';
          } else {
            uri += '/upLoadDoc';
          }

          return this.httpClient.post(uri, formData, {
            reportProgress: true,
            observe: 'events'
          });
        }
      }, {
        key: "zipPack",
        value: function zipPack(formData, fileName) {
          var _this18 = this;

          var apiEp = "".concat(this.SERVER_URL).concat(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].tableName, "/zipper");
          var promise = new Promise(function (resolve, reject) {
            //const apiURL = apiEp + "/" + _id;
            _this18.httpClient.post(apiEp, formData).toPromise().then(function (res) {
              // Success
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
          return promise; // let uri =  this.SERVER_URL + Global.tableName;
          // uri += '/zipper' ;
          // return this.httpClient.post<any>(uri, formData, {
          //   reportProgress: true,
          //   observe: 'events'
          // });
        }
      }, {
        key: "create",
        value: function create(objData) {
          var _this19 = this;

          var apiEp = this.SERVER_URL + _global__WEBPACK_IMPORTED_MODULE_2__["Global"].tableName;
          var promise = new Promise(function (resolve, reject) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');

            _this19.httpClient.post(apiEp, objData, {
              headers: headers
            }).toPromise().then(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
          return promise;
        }
      }, {
        key: "qryTrainer",
        value: function qryTrainer(filter) {
          var _this20 = this;

          //     var saveTrainerApi = "http://localhost:3000/trainers/update/" +  _id;
          var qryTrainerApi = this.SERVER_URL + "trainers/query";
          var promise = new Promise(function (resolve, reject) {
            var apiURL = qryTrainerApi;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');

            _this20.httpClient.post(apiURL, filter, {
              headers: headers
            }).toPromise().then(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
          return promise;
        }
      }, {
        key: "addPoint",
        value: function addPoint(objData, _id) {
          var _this21 = this;

          var apiEp = this.SERVER_URL + _global__WEBPACK_IMPORTED_MODULE_2__["Global"].tableName + "/addPoint/" + _id;
          var promise = new Promise(function (resolve, reject) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');

            _this21.httpClient.put(apiEp, objData, {
              headers: headers
            }).toPromise().then(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
          return promise;
        }
      }, {
        key: "update",
        value: function update(objData, _id) {
          var _this22 = this;

          //     var saveTrainerApi = "http://localhost:3000/trainers/update/" +  _id;
          var apiEp = this.SERVER_URL + _global__WEBPACK_IMPORTED_MODULE_2__["Global"].tableName + "/" + _id;
          var promise = new Promise(function (resolve, reject) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');

            _this22.httpClient.put(apiEp, objData, {
              headers: headers
            }).toPromise().then(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
          return promise;
        }
      }, {
        key: "getByEmail",
        value: function getByEmail(email) {
          var _this23 = this;

          var apiEp = this.SERVER_URL + _global__WEBPACK_IMPORTED_MODULE_2__["Global"].tableName + "/getRec/" + email;
          var promise = new Promise(function (resolve, reject) {
            // const apiURL = getTrainerApi + "/" + _id;
            _this23.httpClient.get(apiEp).toPromise().then(function (res) {
              resolve(res);
            }, function (err) {
              alert('err');
              reject(err);
            });
          });
          return promise;
        }
      }, {
        key: "getById",
        value: function getById(_id) {
          var _this24 = this;

          var apiEp = this.SERVER_URL + _global__WEBPACK_IMPORTED_MODULE_2__["Global"].tableName + "/" + _id;
          var promise = new Promise(function (resolve, reject) {
            _this24.httpClient.get(apiEp).toPromise().then(function (res) {
              resolve(res);
            }, function (err) {
              alert('err');
              reject(err);
            });
          });
          return promise;
        }
        /*  public sendToken(_id: string) {
        
           const getTrainerApi = "http://localhost:3000/trainers"
        
           const promise = new Promise((resolve, reject) => {
             const apiURL = getTrainerApi + "/" + _id;
        
        
             this.httpClient.get(apiURL).toPromise()
               .then((res: any) => {
                 // Success
        
        
        
                 resolve(res);
        
               },
                 err => {
        
        
                   reject(err);
                 }
               );
           });
        
           return promise;
         }
        */

      }, {
        key: "emailToken",
        value: function emailToken(email) {
          var _this25 = this;

          var apiEp = this.SERVER_URL + _global__WEBPACK_IMPORTED_MODULE_2__["Global"].tableName + '/getToken/' + email;
          var promise = new Promise(function (resolve, reject) {
            _this25.httpClient.get(apiEp).toPromise().then(function (res) {
              // Success
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
          return promise;
        }
      }, {
        key: "listUserStories",
        value: function listUserStories() {
          var _this26 = this;

          var listApi = this.SERVER_URL + _global__WEBPACK_IMPORTED_MODULE_2__["Global"].tableName + "/userStories";
          var promise = new Promise(function (resolve, reject) {
            var apiURL = listApi;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');

            _this26.httpClient.get(apiURL).toPromise().then(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
          return promise;
        }
      }, {
        key: "list",
        value: function list() {
          var _this27 = this;

          var listApi = this.SERVER_URL + _global__WEBPACK_IMPORTED_MODULE_2__["Global"].tableName;
          var promise = new Promise(function (resolve, reject) {
            var apiURL = listApi;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');

            _this27.httpClient.get(apiURL).toPromise().then(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
          return promise;
        }
      }]);

      return RestSvc;
    }();

    RestSvc.ɵfac = function RestSvc_Factory(t) {
      return new (t || RestSvc)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    RestSvc.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RestSvc,
      factory: RestSvc.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestSvc, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lms-menu/lms-menu.component.ts":
  /*!************************************************!*\
    !*** ./src/app/lms-menu/lms-menu.component.ts ***!
    \************************************************/

  /*! exports provided: LmsMenuComponent */

  /***/
  function srcAppLmsMenuLmsMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LmsMenuComponent", function () {
      return LmsMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lib_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../lib/global */
    "./src/app/lib/global.ts");
    /* harmony import */


    var _lib_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../lib/dialog */
    "./src/app/lib/dialog/index.ts");
    /* harmony import */


    var _lib_restSvc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../lib/restSvc */
    "./src/app/lib/restSvc.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _lib_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../lib/dialog/dialog.component */
    "./src/app/lib/dialog/dialog.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0(a0) {
      return {
        color: a0
      };
    };

    function LmsMenuComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsMenuComponent_div_16_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onWelcome();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "play_arrow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.mnu == 0 - 1 ? "white" : "orange"));
      }
    }

    function LmsMenuComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsMenuComponent_div_17_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.onAboutMe();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "play_arrow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r1.mnu == 0 ? "white" : "orange"));
      }
    }

    function LmsMenuComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsMenuComponent_div_18_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.onMyClassMates();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "play_arrow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r2.mnu == 1 ? "white" : "orange"));
      }
    }

    function LmsMenuComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsMenuComponent_div_19_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.onVideo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "play_arrow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r3.mnu == 2 ? "white" : "orange"));
      }
    }

    function LmsMenuComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsMenuComponent_div_20_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.onAssign1A();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "play_arrow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r4.mnu == 3 ? "white" : "orange"));
      }
    }

    function LmsMenuComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsMenuComponent_div_21_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.onAssign1B();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "play_arrow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r5.mnu == 4 ? "white" : "orange"));
      }
    }

    function LmsMenuComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsMenuComponent_div_22_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.onFinal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "play_arrow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r6.mnu == 5 ? "white" : "orange"));
      }
    }

    var LmsMenuComponent = /*#__PURE__*/function () {
      function LmsMenuComponent(dlgSvc, restSvc, _Activatedroute) {
        _classCallCheck(this, LmsMenuComponent);

        this.dlgSvc = dlgSvc;
        this.restSvc = restSvc;
        this._Activatedroute = _Activatedroute;
        this.name = "";
        this.aboutMe = "";
        this.mobileNbr = "";
        this.dob = "";
        this.address = ""; // Education

        this.edus = [];
        this.cboEdus = [];
        this.edu = "";
        this.eduNote = "";
        this.eduTitle = "";
        this.eduSelected = "Add Education";
        this.showEduTitle = true; // Skills

        this.skills = [];
        this.cboSkills = [];
        this.cboSkillRates = ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"];
        this.skillRate = "";
        this.skill = "";
        this.skillNote = "";
        this.skillTitle = "";
        this.skillSelected = "Add Skill";
        this.showSkillTitle = true; // Certs

        this.certs = [];
        this.cboCerts = [];
        this.cert = "";
        this.certNote = "";
        this.certTitle = "";
        this.certSelected = "Add Skill";
        this.showCertTitle = true; // Acheivment

        this.acheives = [];
        this.cboAcheives = [];
        this.acheive = "";
        this.acheiveNote = "";
        this.acheiveTitle = "";
        this.acheiveSelected = "Add Acheivement";
        this.attachAcheive = "";
        this.showAcheiveTitle = true; // Expereinces

        this.exps = [];
        this.cboExps = [];
        this.exp = "";
        this.expNote = "";
        this.expTitle = "";
        this.expSelected = "Add Education"; // for Optimus Minds

        this.moeExpiry = "";
        this.moeFile = "";
        this.program = "";
        this.aiChk = false;
        this.atRiskChk = false;
        this.careerChk = false;
        this.dramaChk = false;
        this.danceChk = false;
        this.itChk = false;
        this.skillsChk = false;
        this.tongueChk = false;
        this.musicChk = false;
        this.outdoorChk = false;
        this.sportsChk = false;
        this.visualChk = false; // certFile = "" ;

        this.attachCert = "";
        this.newCert = false;
        this.newEdu = false;
        this.newSkill = false;
        this.newExp = false;
        this.newAcheive = false; // End of Getters & Setters

        this.showExpTitle = true;
      }

      _createClass(LmsMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          switch (this._Activatedroute.snapshot.url.toString().toLowerCase()) {
            case "optimusminds":
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].init('optimusMinds');

              break;

            case "lms":
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].init('lms');

              break;

            default:
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].init('cvSalon');

              break;
          }

          var email = this._Activatedroute.snapshot.paramMap.get("email");

          if (email === null) {
            _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].dlgAuthMode = 1;
            this.openModal('dlgAuth');
          } else {
            this.restSvc.emailToken(email).then(function (msg) {
              var adminLevel = msg['adminLevel'];
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].email = email;
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].token = msg['token'];
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].pin = msg['pin'];
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"]._id = msg['_id'];
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].adminLevel = adminLevel;
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].dlgAuthMode = 2;

              _this28.openModal('dlgAuth');
            }, function (err) {
              alert('Error: ' + JSON.stringify(err));
            });
          }
        }
      }, {
        key: "openModal",
        value: function openModal(id) {
          this.dlgSvc.open(id);
        } // -

      }, {
        key: "onWelcome",
        value: function onWelcome() {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].mnu = -1;
        }
      }, {
        key: "onAboutMe",
        value: function onAboutMe() {
          if (this.stage <= -1) {
            alert("Please view Welcome Page and select Next Step");
            return;
          }

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].mnu = 0;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].lmsMenuName = "aboutMe";
        } // Profile

      }, {
        key: "onMyClassMates",
        value: function onMyClassMates() {
          if (this.stage < 1) {
            alert("Please enter your informaton on About Yourself Page and select Next Step");
            return;
          }

          this.restSvc.list().then(function (msg) {
            _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].lmsCards = msg; // alert(JSON.stringify( Global.lmsCards))
          }, function (err) {
            alert('Error: ' + JSON.stringify(err));
          });
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].mnu = 1;
        }
      }, {
        key: "onVideo",
        value: function onVideo() {
          if (this.stage < 2) {
            alert("Please view Class Participants and select Next Step");
            return;
          }

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].mnu = 2;
        }
      }, {
        key: "onAssign1A",
        value: function onAssign1A() {
          if (this.stage < 3) {
            alert("Please watch Video and select Next Step");
            return;
          }

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].mnu = 3;
        }
      }, {
        key: "onAssign1B",
        value: function onAssign1B() {
          if (this.stage < 4) {
            alert("Please complete Assignment 1A and select Next Step");
            return;
          }

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].mnu = 4;
          this.restSvc.listUserStories().then(function (msg) {
            _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].lmsUserStories = msg;
          }, function (err) {
            alert('Error: ' + JSON.stringify(err));
          });
        }
      }, {
        key: "onFinal",
        value: function onFinal() {
          // if (this.stage <=  5 ) {
          //   alert("Please complete Assignment 1B and select Next Step") ;
          //   return ;
          // }
          if (this.stage < 5) {
            alert("Please complete Assignment 1B and select Next Step");
            return;
          }

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].mnu = 5;
        }
      }, {
        key: "onClassChat",
        value: function onClassChat() {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].mnu = 6;
        }
      }, {
        key: "onFeedBack",
        value: function onFeedBack() {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].mnu = 7;
        }
      }, {
        key: "mnu",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].mnu;
        }
      }, {
        key: "clientName",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].clientName;
        }
      }, {
        key: "programs",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["programs"];
        }
      }, {
        key: "stage",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["stage"];
        }
      }]);

      return LmsMenuComponent;
    }();

    LmsMenuComponent.ɵfac = function LmsMenuComponent_Factory(t) {
      return new (t || LmsMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lib_dialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lib_restSvc__WEBPACK_IMPORTED_MODULE_3__["RestSvc"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    LmsMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LmsMenuComponent,
      selectors: [["app-lms-menu"]],
      decls: 26,
      vars: 29,
      consts: [[1, "mainContent"], [1, "bg", 2, "height", "80vh"], [1, "boxWelcome", 3, "ngStyle", "click"], [1, "box0", 3, "ngStyle", "click"], [1, "box1", 3, "ngStyle", "click"], [1, "box2", 3, "ngStyle", "click"], [1, "box3", 3, "ngStyle", "click"], [1, "box4", 3, "ngStyle", "click"], [1, "box5", 3, "ngStyle", "click"], ["class", "iconWelcome", 3, "ngStyle", "click", 4, "ngIf"], ["class", "icon0", 3, "ngStyle", "click", 4, "ngIf"], ["class", "icon1", 3, "ngStyle", "click", 4, "ngIf"], ["class", "icon2", 3, "ngStyle", "click", 4, "ngIf"], ["class", "icon3", 3, "ngStyle", "click", 4, "ngIf"], ["class", "icon4", 3, "ngStyle", "click", 4, "ngIf"], ["class", "icon5", 3, "ngStyle", "click", 4, "ngIf"], ["id", "dlgProfile"], ["id", "name", "name", "name", "type", "text", 3, "ngModel", "ngModelChange"], [1, "iconWelcome", 3, "ngStyle", "click"], [1, "material-icons"], [1, "icon0", 3, "ngStyle", "click"], [1, "icon1", 3, "ngStyle", "click"], [1, "icon2", 3, "ngStyle", "click"], [1, "icon3", 3, "ngStyle", "click"], [1, "icon4", 3, "ngStyle", "click"], [1, "icon5", 3, "ngStyle", "click"]],
      template: function LmsMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsMenuComponent_Template_div_click_2_listener() {
            return ctx.onWelcome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Welcome ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsMenuComponent_Template_div_click_4_listener() {
            return ctx.onAboutMe();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " About Yourself ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsMenuComponent_Template_div_click_6_listener() {
            return ctx.onMyClassMates();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Class Participants ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsMenuComponent_Template_div_click_8_listener() {
            return ctx.onVideo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 1.Watch Video ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsMenuComponent_Template_div_click_10_listener() {
            return ctx.onAssign1A();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " 2.Assignment 1A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsMenuComponent_Template_div_click_12_listener() {
            return ctx.onAssign1B();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 3.Assignment 1B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsMenuComponent_Template_div_click_14_listener() {
            return ctx.onFinal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 4.Feedback ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LmsMenuComponent_div_16_Template, 3, 3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LmsMenuComponent_div_17_Template, 3, 3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LmsMenuComponent_div_18_Template, 3, 3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LmsMenuComponent_div_19_Template, 3, 3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LmsMenuComponent_div_20_Template, 3, 3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LmsMenuComponent_div_21_Template, 3, 3, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LmsMenuComponent_div_22_Template, 3, 3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "dialog", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LmsMenuComponent_Template_input_ngModelChange_25_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.mnu == 0 - 1 ? "white" : "orange"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.mnu == 0 ? "white" : "orange"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.mnu == 1 ? "white" : "orange"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.mnu == 2 ? "white" : "orange"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.mnu == 3 ? "white" : "orange"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.mnu == 4 ? "white" : "orange"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.mnu == 5 ? "white" : "orange"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stage >= 0 - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stage >= 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stage >= 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stage >= 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stage >= 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stage >= 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stage >= 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _lib_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]],
      styles: [".bg[_ngcontent-%COMP%] {\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-color: #999;\n  background-image: url('bg.jpg');\n}\n\n.mainContent[_ngcontent-%COMP%] {\n  margin-top: 1px;\n  \n  color: white;\n  font-size: 12px;\n  padding: 1px;\n  height: 100%;\n}\n\n.boxTitleTop[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 77%;\n  left: 1%;\n  height: 80px;\n  top: 14%;\n  display: block;\n  position: absolute;\n  color: black;\n}\n\n.boxTitleTop-gt-xs[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 77%;\n  left: 5%;\n  height: 80px;\n  top: 14%;\n  display: block;\n  position: absolute;\n  color: black;\n}\n\n.box[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 450px;\n  left: 1%;\n  height: 10%;\n  top: 35%;\n  display: block;\n  position: absolute;\n  font-size: 20px;\n  color: black;\n  padding: 0.8em;\n  border-radius: 25px;\n}\n\n.boxMoe[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 220px;\n  left: 15px;\n  height: 7%;\n  top: 20%;\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: orange;\n  padding: 0.8em;\n  border-radius: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.iconMoe[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 22%;\n  position: absolute;\n  background: transparent;\n  color: orange;\n}\n\n.boxWelcome[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 220px;\n  left: 15px;\n  height: 7%;\n  top: 20%;\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: orange;\n  padding: 0.8em;\n  border-radius: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.iconWelcome[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 22%;\n  position: absolute;\n  background: transparent;\n  color: orange;\n}\n\n.box0[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 220px;\n  left: 15px;\n  height: 7%;\n  top: 28%;\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: orange;\n  padding: 0.8em;\n  border-radius: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.icon0[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 30%;\n  position: absolute;\n  background: transparent;\n  color: orange;\n}\n\n.box1[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 220px;\n  left: 15px;\n  height: 7%;\n  top: 36%;\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: orange;\n  padding: 0.8em;\n  border-radius: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.icon1[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 38%;\n  position: absolute;\n  background: transparent;\n  color: orange;\n}\n\n.box2[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 220px;\n  left: 15px;\n  height: 7%;\n  top: 44%;\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: orange;\n  padding: 0.8em;\n  border-radius: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.icon2[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 46%;\n  position: absolute;\n  background: transparent;\n  color: orange;\n}\n\n.box3[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 220px;\n  left: 15px;\n  height: 7%;\n  top: 52%;\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: orange;\n  padding: 0.8em;\n  border-radius: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.icon3[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 54%;\n  position: absolute;\n  background: transparent;\n  color: orange;\n}\n\n.box4[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 220px;\n  left: 15px;\n  height: 7%;\n  top: 60%;\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: orange;\n  padding: 0.8em;\n  border-radius: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.icon4[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 62%;\n  position: absolute;\n  background: transparent;\n  color: orange;\n}\n\n.box5[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 220px;\n  left: 15px;\n  height: 7%;\n  top: 68%;\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: orange;\n  padding: 0.8em;\n  border-radius: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.icon5[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 70%;\n  position: absolute;\n  background: transparent;\n  color: orange;\n}\n\n.box6[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 220px;\n  left: 15px;\n  height: 7%;\n  top: 76%;\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: orange;\n  padding: 0.8em;\n  border-radius: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.icon6[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 78%;\n  position: absolute;\n  background: transparent;\n  color: orange;\n}\n\n.box7[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 220px;\n  left: 15px;\n  height: 7%;\n  top: 84%;\n  display: block;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: orange;\n  padding: 0.8em;\n  border-radius: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.icon7[_ngcontent-%COMP%] {\n  left: 210px;\n  top: 86%;\n  position: absolute;\n  background: transparent;\n  color: orange;\n}\n\nlabel[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n\n.chkBoxes[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30px 2fr 30px 2fr;\n  grid-auto-flow: dense;\n  height: 250px;\n  margin-left: 5px;\n}\n\n.leftA[_ngcontent-%COMP%] {\n  grid-column: 1/2;\n  color: black;\n  background-color: white;\n}\n\n.rightA[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  grid-column: 2/3;\n  color: black;\n  font-size: 100%;\n  background-color: white;\n}\n\n.leftB[_ngcontent-%COMP%] {\n  grid-column: 3/4;\n  color: black;\n  background-color: white;\n}\n\n.rightB[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  color: black;\n  font-size: 100%;\n  grid-column: 4/5;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG1zLW1lbnUvQzpcXERhdGFcXGRldjIwMjBcXGN2U2Fsb24zXFxjdlNhbG9uL3NyY1xcYXBwXFxsbXMtbWVudVxcbG1zLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xtcy1tZW51L2xtcy1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0FDQUo7O0FETUE7RUFDSSxlQUFBO0VBQWlCLDhDQUFBO0VBQ2pCLFlBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNISjs7QURNRTtFQUdFLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNISjs7QURNRztFQUdDLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNISjs7QURRRztFQUdDLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDTEo7O0FEUUc7RUFHQyxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNMSjs7QURRRztFQUNDLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNMSjs7QURRRztFQUdDLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFHO0VBQ0MsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ0xKOztBRFVHO0VBR0Msc0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDUEo7O0FEVUc7RUFDQyxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDUEo7O0FEWUc7RUFHQyxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNUSjs7QURZRztFQUNDLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNUSjs7QURZRztFQUdDLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1RKOztBRGFHO0VBQ0MsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ1ZKOztBRGVHO0VBR0Msc0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDWko7O0FEZ0JHO0VBQ0MsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ2JKOztBRGdCRztFQUdDLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2JKOztBRGdCRztFQUNDLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNiSjs7QURpQkc7RUFHQyxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNkSjs7QURpQkc7RUFDQyxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDZEo7O0FEa0JHO0VBR0Msc0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDZko7O0FEb0JHO0VBQ0MsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ2pCSjs7QURzQkc7RUFHQyxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNuQko7O0FEd0JHO0VBQ0MsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ3JCSjs7QUR5Qkc7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUN0Qkw7O0FEMEJHO0VBQ0MsYUFBQTtFQUNBLHdDQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUN2Qko7O0FEMEJFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUN2Qko7O0FEMEJHO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ3ZCSjs7QUQyQkc7RUFDQyxnQkFBQTtFQUNELFlBQUE7RUFDQSx1QkFBQTtBQ3hCSDs7QUQ4QkU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDNUJKIiwiZmlsZSI6InNyYy9hcHAvbG1zLW1lbnUvbG1zLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmcgeyBcclxuXHRcdFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiAgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogIGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTsgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2JnLmpwZycpO1xyXG4gICBcclxuICAgICAgXHJcblxyXG59XHJcblxyXG4ubWFpbkNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMXB4OyAvKiBBZGQgYSB0b3AgbWFyZ2luIHRvIGF2b2lkIGNvbnRlbnQgb3ZlcmxheSAqL1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgIFxyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbiAgICBwYWRkaW5nOjFweCA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuYm94VGl0bGVUb3AgIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogNzclOyBcclxuICAgIGxlZnQ6IDElO1xyXG4gICAgaGVpZ2h0OjgwcHg7XHJcbiAgICB0b3A6IDE0JTsgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgfVxyXG4gIFxyXG4gICAuYm94VGl0bGVUb3AtZ3QteHMge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiA3NyU7IFxyXG4gICAgbGVmdDogNSU7XHJcbiAgICBoZWlnaHQ6ODBweDtcclxuICAgIHRvcDogMTQlOyBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgXHJcbiAgXHJcbiAgIH1cclxuXHJcbiAgIC5ib3ggIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogNDUwcHg7IFxyXG4gICAgbGVmdDogMSU7XHJcbiAgICBoZWlnaHQ6MTAlO1xyXG4gICAgdG9wOiAzNSU7IFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIHBhZGRpbmc6IDAuOGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgfVxyXG5cclxuICAgLmJveE1vZSAge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAyMjBweDsgXHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgaGVpZ2h0OjclO1xyXG4gICAgdG9wOiAyMCU7IFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgcGFkZGluZzogMC44ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIH1cclxuXHJcbiAgIC5pY29uTW9lIHtcclxuICAgIGxlZnQ6IDIxMHB4O1xyXG4gICAgdG9wOiAyMiU7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICB9XHJcblxyXG4gICAuYm94V2VsY29tZSAge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAyMjBweDsgXHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgaGVpZ2h0OjclO1xyXG4gICAgdG9wOiAyMCU7IFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgcGFkZGluZzogMC44ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIH1cclxuXHJcbiAgIC5pY29uV2VsY29tZSB7XHJcbiAgICBsZWZ0OiAyMTBweDtcclxuICAgIHRvcDogMjIlOyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgfVxyXG5cclxuXHJcblxyXG4gICAuYm94MCAge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAyMjBweDsgXHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgaGVpZ2h0OjclO1xyXG4gICAgdG9wOiAyOCU7IFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgcGFkZGluZzogMC44ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIH1cclxuXHJcbiAgIC5pY29uMCB7XHJcbiAgICBsZWZ0OiAyMTBweDtcclxuICAgIHRvcDogMzAlOyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgfVxyXG5cclxuXHJcblxyXG4gICAuYm94MSAge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAyMjBweDsgXHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgaGVpZ2h0OjclO1xyXG4gICAgdG9wOiAzNiU7IFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgcGFkZGluZzogMC44ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIH1cclxuXHJcbiAgIC5pY29uMSB7XHJcbiAgICBsZWZ0OiAyMTBweDtcclxuICAgIHRvcDogMzglOyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgfVxyXG5cclxuICAgLmJveDIgIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMjIwcHg7IFxyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGhlaWdodDo3JTtcclxuICAgIHRvcDogNDQlOyBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgIHBhZGRpbmc6IDAuOGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICB9XHJcblxyXG5cclxuICAgLmljb24yIHtcclxuICAgIGxlZnQ6IDIxMHB4O1xyXG4gICAgdG9wOiA0NiU7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICB9XHJcbiAgXHJcblxyXG5cclxuICAgLmJveDMgIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMjIwcHg7IFxyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGhlaWdodDo3JTtcclxuICAgIHRvcDogNTIlOyBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgIHBhZGRpbmc6IDAuOGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICB9XHJcblxyXG5cclxuICAgLmljb24zIHtcclxuICAgIGxlZnQ6IDIxMHB4O1xyXG4gICAgdG9wOiA1NCU7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICB9XHJcbiAgXHJcbiAgIC5ib3g0ICB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDIyMHB4OyBcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBoZWlnaHQ6NyU7XHJcbiAgICB0b3A6IDYwJTsgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICBwYWRkaW5nOiAwLjhlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgfVxyXG5cclxuICAgLmljb240IHtcclxuICAgIGxlZnQ6IDIxMHB4O1xyXG4gICAgdG9wOiA2MiU7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICB9XHJcbiAgXHJcblxyXG4gICAuYm94NSAge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAyMjBweDsgXHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgaGVpZ2h0OjclO1xyXG4gICAgdG9wOiA2OCU7IFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgcGFkZGluZzogMC44ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIH1cclxuXHJcbiAgIC5pY29uNSB7XHJcbiAgICBsZWZ0OiAyMTBweDtcclxuICAgIHRvcDogNzAlOyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgfVxyXG5cclxuXHJcbiAgIC5ib3g2ICB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDIyMHB4OyBcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBoZWlnaHQ6NyU7XHJcbiAgICB0b3A6IDc2JTsgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICBwYWRkaW5nOiAwLjhlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgfVxyXG5cclxuXHJcbiAgIFxyXG4gICAuaWNvbjYge1xyXG4gICAgbGVmdDogMjEwcHg7XHJcbiAgICB0b3A6IDc4JTsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgIH1cclxuICBcclxuXHJcblxyXG4gICAuYm94NyAge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAyMjBweDsgXHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgaGVpZ2h0OjclO1xyXG4gICAgdG9wOiA4NCU7IFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgcGFkZGluZzogMC44ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIH1cclxuXHJcbiBcclxuXHJcbiAgIC5pY29uNyB7XHJcbiAgICBsZWZ0OiAyMTBweDtcclxuICAgIHRvcDogODYlOyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgfVxyXG5cclxuICBcclxuICAgbGFiZWwge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgfVxyXG5cclxuICAgLy8gRm9yIE9wdGltdXMgTWluZHNcclxuICAgLmNoa0JveGVzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMmZyIDMwcHggMmZyO1xyXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAubGVmdEEge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgIH1cclxuXHJcbiAgIC5yaWdodEEge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgIFxyXG4gICB9XHJcbiAgXHJcbiAgIC5sZWZ0QiB7XHJcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XHJcbiAgIGNvbG9yOiBibGFjaztcclxuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiBcclxuICBcclxuICB9XHJcblxyXG4gIFxyXG4gIC5yaWdodEIge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICBncmlkLWNvbHVtbjogNCAvIDU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgfSIsIi5iZyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2JnLmpwZ1wiKTtcbn1cblxuLm1haW5Db250ZW50IHtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICAvKiBBZGQgYSB0b3AgbWFyZ2luIHRvIGF2b2lkIGNvbnRlbnQgb3ZlcmxheSAqL1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMXB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ib3hUaXRsZVRvcCB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogNzclO1xuICBsZWZ0OiAxJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICB0b3A6IDE0JTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYm94VGl0bGVUb3AtZ3QteHMge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDc3JTtcbiAgbGVmdDogNSU7XG4gIGhlaWdodDogODBweDtcbiAgdG9wOiAxNCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmJveCB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogNDUwcHg7XG4gIGxlZnQ6IDElO1xuICBoZWlnaHQ6IDEwJTtcbiAgdG9wOiAzNSU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAwLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmJveE1vZSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMjIwcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGhlaWdodDogNyU7XG4gIHRvcDogMjAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIHBhZGRpbmc6IDAuOGVtO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaWNvbk1vZSB7XG4gIGxlZnQ6IDIxMHB4O1xuICB0b3A6IDIyJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmJveFdlbGNvbWUge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDIyMHB4O1xuICBsZWZ0OiAxNXB4O1xuICBoZWlnaHQ6IDclO1xuICB0b3A6IDIwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBjb2xvcjogb3JhbmdlO1xuICBwYWRkaW5nOiAwLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmljb25XZWxjb21lIHtcbiAgbGVmdDogMjEwcHg7XG4gIHRvcDogMjIlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYm94MCB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMjIwcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGhlaWdodDogNyU7XG4gIHRvcDogMjglO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIHBhZGRpbmc6IDAuOGVtO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaWNvbjAge1xuICBsZWZ0OiAyMTBweDtcbiAgdG9wOiAzMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5ib3gxIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAyMjBweDtcbiAgbGVmdDogMTVweDtcbiAgaGVpZ2h0OiA3JTtcbiAgdG9wOiAzNiU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgY29sb3I6IG9yYW5nZTtcbiAgcGFkZGluZzogMC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pY29uMSB7XG4gIGxlZnQ6IDIxMHB4O1xuICB0b3A6IDM4JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmJveDIge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDIyMHB4O1xuICBsZWZ0OiAxNXB4O1xuICBoZWlnaHQ6IDclO1xuICB0b3A6IDQ0JTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBjb2xvcjogb3JhbmdlO1xuICBwYWRkaW5nOiAwLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmljb24yIHtcbiAgbGVmdDogMjEwcHg7XG4gIHRvcDogNDYlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYm94MyB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMjIwcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGhlaWdodDogNyU7XG4gIHRvcDogNTIlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIHBhZGRpbmc6IDAuOGVtO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaWNvbjMge1xuICBsZWZ0OiAyMTBweDtcbiAgdG9wOiA1NCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5ib3g0IHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAyMjBweDtcbiAgbGVmdDogMTVweDtcbiAgaGVpZ2h0OiA3JTtcbiAgdG9wOiA2MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgY29sb3I6IG9yYW5nZTtcbiAgcGFkZGluZzogMC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pY29uNCB7XG4gIGxlZnQ6IDIxMHB4O1xuICB0b3A6IDYyJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmJveDUge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDIyMHB4O1xuICBsZWZ0OiAxNXB4O1xuICBoZWlnaHQ6IDclO1xuICB0b3A6IDY4JTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBjb2xvcjogb3JhbmdlO1xuICBwYWRkaW5nOiAwLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmljb241IHtcbiAgbGVmdDogMjEwcHg7XG4gIHRvcDogNzAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYm94NiB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMjIwcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGhlaWdodDogNyU7XG4gIHRvcDogNzYlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIHBhZGRpbmc6IDAuOGVtO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaWNvbjYge1xuICBsZWZ0OiAyMTBweDtcbiAgdG9wOiA3OCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5ib3g3IHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAyMjBweDtcbiAgbGVmdDogMTVweDtcbiAgaGVpZ2h0OiA3JTtcbiAgdG9wOiA4NCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgY29sb3I6IG9yYW5nZTtcbiAgcGFkZGluZzogMC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pY29uNyB7XG4gIGxlZnQ6IDIxMHB4O1xuICB0b3A6IDg2JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxubGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2hrQm94ZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMmZyIDMwcHggMmZyO1xuICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XG4gIGhlaWdodDogMjUwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5sZWZ0QSB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5yaWdodEEge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGdyaWQtY29sdW1uOiAyLzM7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmxlZnRCIHtcbiAgZ3JpZC1jb2x1bW46IDMvNDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnJpZ2h0QiB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGdyaWQtY29sdW1uOiA0LzU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LmsMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lms-menu',
          templateUrl: './lms-menu.component.html',
          styleUrls: ['./lms-menu.component.scss']
        }]
      }], function () {
        return [{
          type: _lib_dialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"]
        }, {
          type: _lib_restSvc__WEBPACK_IMPORTED_MODULE_3__["RestSvc"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lms-window/lms-window.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/lms-window/lms-window.component.ts ***!
    \****************************************************/

  /*! exports provided: LmsWindowComponent */

  /***/
  function srcAppLmsWindowLmsWindowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LmsWindowComponent", function () {
      return LmsWindowComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lib_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../lib/global */
    "./src/app/lib/global.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _lib_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../lib/dialog */
    "./src/app/lib/dialog/index.ts");
    /* harmony import */


    var _lib_restSvc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../lib/restSvc */
    "./src/app/lib/restSvc.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _lib_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../lib/dialog/dialog.component */
    "./src/app/lib/dialog/dialog.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_quill__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-quill */
    "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/youtube-player */
    "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");

    function LmsWindowComponent_div_0_button_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsWindowComponent_div_0_button_34_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.onNextStep(0 - 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next Step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LmsWindowComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Your Facilitator: Hardeep Singh ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Email: Hardeep@Sysbit.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Mobile: +65-87133375");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Congratulaions on selecting Agile Practitioner Training. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " My name is Hardeep Singh and I am an Agile Veteran. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " After going through the training, you are on your way to becoming an Agilist. The training is delivered on an asynchronous mode with group participation. You are encouraged to update information about yourself to facilitate effective group participation and foster good team spirit. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Training Sequence ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " 1. Watch Video - Short video on user stories ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " 2. Assignemnt 1A -Create User Stories ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " 3. Assignemnt 1B - Pirortization (Group participation) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " 4. Feedback ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, LmsWindowComponent_div_0_button_34_Template, 2, 0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stage == 0 - 1);
      }
    }

    function LmsWindowComponent_div_1_button_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsWindowComponent_div_1_button_20_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

          return _r12.click();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Photo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LmsWindowComponent_div_1_button_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsWindowComponent_div_1_button_29_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.onNextStep(0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next Step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LmsWindowComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsWindowComponent_div_1_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.onInfo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "My Info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 36, 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LmsWindowComponent_div_1_Template_input_change_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.onFileChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LmsWindowComponent_div_1_button_20_Template, 2, 0, "button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Introduce Yourself ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " The training is delivered on an aynschronus mode with group particapation. You are encouraged to update information about yourself to facilitate group participation and foster good team spirit. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, LmsWindowComponent_div_1_button_29_Template, 2, 0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.myName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.myEmail);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.myMobileNbr);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.myAboutMe, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.myName != "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.stage == 0);
      }
    }

    function LmsWindowComponent_div_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lmsCard_r24 = ctx.$implicit;

        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lmsCard_r24.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lmsCard_r24.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Mobile:", lmsCard_r24.mobileNbr, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r22.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", lmsCard_r24.aboutMe, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function LmsWindowComponent_div_2_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsWindowComponent_div_2_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r25.onNextStep(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next Step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LmsWindowComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LmsWindowComponent_div_2_div_2_Template, 14, 5, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Your Class ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Get to know your classmates. Like you they are chartering the route to the Agilist world. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LmsWindowComponent_div_2_button_10_Template, 2, 0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.lmsCards);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.stage == 1);
      }
    }

    function LmsWindowComponent_div_3_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsWindowComponent_div_3_button_16_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r28.onNextStep(2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next Step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LmsWindowComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Watch the short video on the purpose of a User Story and the required attributes of a good user story. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Who (role) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " What (function) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Why (benefit) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LmsWindowComponent_div_3_button_16_Template, 2, 0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "youtube-player", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Video taken from youtube link https://www.youtube.com/watch?v=apOvF9NVguA uploaded by Mark Shead\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.stage == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 350)("width", 700)("startSeconds", 50)("endSeconds", 258);
      }
    }

    function LmsWindowComponent_div_4_button_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsWindowComponent_div_4_button_24_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r32.onNextStep(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next Step");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LmsWindowComponent_div_4_div_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " As a ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ", I want ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " so that ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsWindowComponent_div_4_div_26_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var userStory_r34 = ctx.$implicit;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r35.onEditStory(userStory_r34.nbr);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var userStory_r34 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", userStory_r34.role, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", userStory_r34["function"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", userStory_r34.benefit, " ");
      }
    }

    function LmsWindowComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " You been tasked to improve the next version of IAL Canvas");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " https://learningspacesg.instructure.com/login/canvas., ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Write 3 user stories that will benefit a Learner ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Remember the 3 attributes of a good user story. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Who (role) \"As a\" ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " What (function) \"I want\" ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Why (benefit) \"So That\" ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LmsWindowComponent_div_4_button_24_Template, 2, 0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LmsWindowComponent_div_4_div_26_Template, 20, 3, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.stage == 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.userStories);
      }
    }

    function LmsWindowComponent_div_5_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsWindowComponent_div_5_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r39.onNextStep(4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "End Assignment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LmsWindowComponent_div_5_div_11_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pnt_r43 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", pnt_r43.reason, " = ", pnt_r43.points, " ");
      }
    }

    function LmsWindowComponent_div_5_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " As a ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ", I want ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " so that ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LmsWindowComponent_div_5_div_11_div_18_Template, 2, 2, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsWindowComponent_div_5_div_11_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var userStory_r41 = ctx.$implicit;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r44.onAddPoints(userStory_r41._id, userStory_r41.nbr, userStory_r41.role, userStory_r41["function"], userStory_r41.benefit);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add Priority Points");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var userStory_r41 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total Points: ", userStory_r41.totPoints, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", userStory_r41.role, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", userStory_r41["function"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", userStory_r41.benefit, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", userStory_r41.points);
      }
    }

    function LmsWindowComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Prioritization of User stories submitted by the class. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Working together a class you need to prioritize the user stories giving higher points to the user stories that deliver greatest value to the user. You need to provide the justification for the prioritization value. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LmsWindowComponent_div_5_button_9_Template, 2, 0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LmsWindowComponent_div_5_div_11_Template, 22, 5, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.stage == 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.lmsUserStories);
      }
    }

    function LmsWindowComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Feedback from Facilitator your Training & Assignments ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LmsWindowComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Six\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LmsWindowComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Seven\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return {
        toolbar: false
      };
    };

    var LmsWindowComponent = /*#__PURE__*/function () {
      function LmsWindowComponent(dlgSvc, restSvc) {
        _classCallCheck(this, LmsWindowComponent);

        this.dlgSvc = dlgSvc;
        this.restSvc = restSvc;
        this.aboutMe = "";
        this.name = "";
        this.mobileNbr = "";
        this.email = "";
        this["function"] = "";
        this.benefit = "";
        this.role = "";
        this.idx = 0;
        this.reason = "";
        this.points = 0;
        this.storyOwnerId = "";
        this.storyNbr = 0;
      }

      _createClass(LmsWindowComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onInfo",
        value: function onInfo() {
          this.name = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["name"];
          this.mobileNbr = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["mobileNbr"];

          if (_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["email"] != "") {
            this.email = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["email"];
          } else {
            this.email = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].email;
          }

          this.aboutMe = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["aboutMe"];
          this.dlgSvc.open('dlgInfo');
        }
      }, {
        key: "onAddPoints",
        value: function onAddPoints(_id, _nbr, _role, _function, _benefit) {
          this.storyOwnerId = _id;
          this.storyNbr = _nbr;
          this.reason = "";
          this.points = 0;
          this.role = _role;
          this["function"] = _function;
          this.benefit = _benefit;
          this.dlgSvc.open('dlgPoints');
        }
      }, {
        key: "onCancelPoints",
        value: function onCancelPoints() {
          this.dlgSvc.close('dlgPoints');
        }
      }, {
        key: "onSavePoints",
        value: function onSavePoints() {
          var _this29 = this;

          var objData = {};
          objData["nbr"] = this.storyNbr;
          objData["reason"] = this.reason;
          objData["points"] = this.points;
          alert(JSON.stringify(objData));
          this.restSvc.addPoint(objData, this.storyOwnerId).then(function (msg) {
            _this29.dlgSvc.close('dlgPoints');

            _this29.restSvc.listUserStories().then(function (msg) {
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].lmsUserStories = msg;
            }, function (err) {
              alert('Error: ' + JSON.stringify(err));
            });
          }, function (err) {
            alert(JSON.stringify(err));
          });
        } // onPhoto() {
        // }

      }, {
        key: "upLoadPhoto",
        value: function upLoadPhoto(_id, docType, docTable, docId, file) {
          var formData = new FormData();
          formData.append('_id', _id);
          formData.append('docTable', docTable);
          formData.append('docId', docId);
          formData.append('file', file);
          file.inProgress = true;
          this.restSvc.upLoadDoc(formData, docType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            switch (event.type) {
              case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress:
                file.progress = Math.round(event.loaded * 100 / event.total);
                break;

              case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                return event;
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            file.inProgress = false;
            alert(error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])("".concat(file.data.name, " upload failed."));
          })).subscribe(function (event) {
            if (typeof event === 'object') {}
          });
        }
      }, {
        key: "onFileChanged",
        value: function onFileChanged(event) {
          this.selectedFile = event.target.files[0];
          this.upLoadPhoto(_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"]._id, 'photo', _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].tableName, 1, this.selectedFile);
          this.restSvc.makeImgFromBlob(this.selectedFile);
        }
      }, {
        key: "onCancelInfo",
        value: function onCancelInfo() {
          this.dlgSvc.close('dlgInfo');
        }
      }, {
        key: "onNextStep",
        value: function onNextStep(currentStep) {
          // alert(currentStep) ;
          switch (currentStep) {
            case -1:
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["stage"] = 0;
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].mnu = 0;
              break;

            case 0:
              if (_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["name"] == "" || _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["email"] == "'") {
                alert("You must at a minimum provide your Name and Email Address");
                return;
              }

              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["stage"] = 1;
              this.onSaveInfo();
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].mnu = 1;
              this.restSvc.list().then(function (msg) {
                _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].lmsCards = msg;
              }, function (err) {
                alert('Error: ' + JSON.stringify(err));
              });
              break;

            case 1:
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["stage"] = 2;
              this.onSaveStage();
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].mnu = 2;
              break;

            case 2:
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["stage"] = 3;
              this.onSaveStage();
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].mnu = 3;
              break;

            case 3:
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["stage"] = 4;
              this.onSaveStage();
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].mnu = 4;
              this.restSvc.listUserStories().then(function (msg) {
                _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].lmsUserStories = msg;
              }, function (err) {
                alert('Error: ' + JSON.stringify(err));
              });
              break;

            case 4:
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["stage"] = 5;
              this.onSaveInfo();
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].mnu = 5;
          }
        }
      }, {
        key: "onSaveStage",
        value: function onSaveStage() {
          var objData = {};
          var aryKeys = Object.keys(_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData);
          var key = "";

          for (var i = 0; i < aryKeys.length; i++) {
            key = aryKeys[i];

            if (_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData[key] != _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData[key]) {
              objData[key] = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData[key];
            }
          }

          this.restSvc.update(objData, _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"]._id).then(function (msg) {}, function (err) {
            alert(JSON.stringify(err));
          });
        }
      }, {
        key: "onSaveInfo",
        value: function onSaveInfo() {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["name"] = this.name;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["email"] = this.email;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["mobileNbr"] = this.mobileNbr;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["aboutMe"] = this.aboutMe; //Global.locData["stage"] = Global.locData["stage"];

          this.dlgSvc.close('dlgInfo');
          var objData = {};
          var aryKeys = Object.keys(_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData);
          var key = "";

          for (var i = 0; i < aryKeys.length; i++) {
            key = aryKeys[i];

            if (_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData[key] != _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData[key]) {
              objData[key] = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData[key];
            }
          }

          if (_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"]._id === "") {
            this.restSvc.create(objData).then(function (rcvd) {
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"]._id = rcvd['_id'];
            }, function (err) {
              alert(err);
            });
          } else {
            this.restSvc.update(objData, _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"]._id).then(function (msg) {}, function (err) {
              alert(JSON.stringify(err));
            });
          }
        }
      }, {
        key: "onEditStory",
        value: function onEditStory(nbr) {
          this.idx = nbr - 1;
          this.role = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["userStories"][this.idx].role;
          this["function"] = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["userStories"][this.idx]["function"];
          this.benefit = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["userStories"][this.idx].benefit;
          this.dlgSvc.open('dlgStory');
        }
      }, {
        key: "onSaveStory",
        value: function onSaveStory() {
          var _this30 = this;

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["userStories"][this.idx].role = this.role;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["userStories"][this.idx]["function"] = this["function"];
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["userStories"][this.idx].benefit = this.benefit;
          var objData = {};
          objData["userStories"] = _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["userStories"];
          this.restSvc.update(objData, _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"]._id).then(function (msg) {
            _this30.dlgSvc.close('dlgStory');
          }, function (err) {
            alert(JSON.stringify(err));
          });
        }
      }, {
        key: "onCancelStory",
        value: function onCancelStory() {
          this.dlgSvc.close('dlgStory');
        }
      }, {
        key: "mnu",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].mnu;
        }
      }, {
        key: "lmsCards",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].lmsCards;
        }
      }, {
        key: "lmsUserStories",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].lmsUserStories;
        }
      }, {
        key: "userStories",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["userStories"];
        }
      }, {
        key: "lmsMenuName",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].lmsMenuName;
        }
      }, {
        key: "myName",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["name"];
        }
      }, {
        key: "myEmail",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["email"];
        }
      }, {
        key: "myMobileNbr",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["mobileNbr"];
        }
      }, {
        key: "myAboutMe",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["aboutMe"];
        }
      }, {
        key: "photo",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].photo;
        }
      }, {
        key: "stage",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["stage"];
        }
      }]);

      return LmsWindowComponent;
    }();

    LmsWindowComponent.ɵfac = function LmsWindowComponent_Factory(t) {
      return new (t || LmsWindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lib_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lib_restSvc__WEBPACK_IMPORTED_MODULE_6__["RestSvc"]));
    };

    LmsWindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LmsWindowComponent,
      selectors: [["app-lms-window"]],
      decls: 65,
      vars: 23,
      consts: [[4, "ngIf"], ["id", "dlgInfo"], ["fxLayout", "column"], ["for", "name"], ["id", "name", "name", "name", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "mobileNbr"], ["id", "mobileNbr", "name", "mobileNbr", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "email"], ["id", "email", "name", "email", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "note"], [1, "richText", 3, "ngModel", "modules", "ngModelChange"], ["fxLayout", "row", "fxLayoutAlign", "center center"], [1, "flushRight"], [1, "button-3d", 3, "click"], ["id", "dlgStory"], ["id", "role", "name", "role", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "function"], ["id", "function", "name", "reason", "rows", "4", "cols", "50", 3, "ngModel", "ngModelChange"], ["for", "benefit"], ["id", "benefit", "name", "benefit", "rows", "4", "cols", "50", 3, "ngModel", "ngModelChange"], ["id", "dlgPoints"], ["for", "reason"], ["id", "reason", "name", "reason", "rows", "4", "cols", "50", 3, "ngModel", "ngModelChange"], ["for", "points"], ["type", "number", "id", "points", "name", "points", "min", "1", "max", "5", 3, "ngModel", "ngModelChange"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-around center"], [1, "matCardInstruction"], ["mat-card-avatar", "", 1, "example-header-image"], ["alt", "My Photo", 3, "src"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], [1, "matCard0"], [1, "cssText"], [3, "innerHTML"], ["mat-raised-button", "", "color", "primary", 2, "margin-right", "5px", 3, "click"], ["type", "file", 2, "display", "none", 3, "change"], ["fileInput", ""], ["mat-raised-button", "", "color", "primary", "style", "margin-right:5px;", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "matCard1"], [2, "font-size", "18px"], ["videoId", "apOvF9NVguA", "suggestedQuality", "highres", 3, "height", "width", "startSeconds", "endSeconds"], [1, "matCard2"]],
      template: function LmsWindowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LmsWindowComponent_div_0_Template, 35, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LmsWindowComponent_div_1_Template, 30, 7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LmsWindowComponent_div_2_Template, 11, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LmsWindowComponent_div_3_Template, 21, 5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LmsWindowComponent_div_4_Template, 27, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LmsWindowComponent_div_5_Template, 12, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LmsWindowComponent_div_6_Template, 8, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LmsWindowComponent_div_7_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LmsWindowComponent_div_8_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "dialog", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Your Name *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LmsWindowComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mobile# *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LmsWindowComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.mobileNbr = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LmsWindowComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Describe yourself");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "quill-editor", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LmsWindowComponent_Template_quill_editor_ngModelChange_22_listener($event) {
            return ctx.aboutMe = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsWindowComponent_Template_button_click_25_listener() {
            return ctx.onCancelInfo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsWindowComponent_Template_button_click_27_listener() {
            return ctx.onSaveInfo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "dialog", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "As a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LmsWindowComponent_Template_input_ngModelChange_33_listener($event) {
            return ctx.role = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "I want");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "textarea", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LmsWindowComponent_Template_textarea_ngModelChange_36_listener($event) {
            return ctx["function"] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "So that");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "textarea", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LmsWindowComponent_Template_textarea_ngModelChange_40_listener($event) {
            return ctx.benefit = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsWindowComponent_Template_button_click_44_listener() {
            return ctx.onCancelStory();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsWindowComponent_Template_button_click_46_listener() {
            return ctx.onSaveStory();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "dialog", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Justification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "textarea", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LmsWindowComponent_Template_textarea_ngModelChange_54_listener($event) {
            return ctx.reason = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "       \n         ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Points (between 1 and 5):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LmsWindowComponent_Template_input_ngModelChange_58_listener($event) {
            return ctx.points = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsWindowComponent_Template_button_click_61_listener() {
            return ctx.onCancelPoints();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LmsWindowComponent_Template_button_click_63_listener() {
            return ctx.onSavePoints();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mnu == 0 - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mnu == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mnu == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mnu == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mnu == 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mnu == 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mnu == 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mnu == 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mnu == 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mobileNbr);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.aboutMe)("modules", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.role);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx["function"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.benefit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" As a ", ctx.role, ", I want ", ctx["function"], " so that ", ctx.benefit, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reason);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.points);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _lib_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], ngx_quill__WEBPACK_IMPORTED_MODULE_11__["QuillEditorComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_14__["YouTubePlayer"]],
      styles: ["mat-card[_ngcontent-%COMP%] {\n  color: green;\n  border: 1px solid black;\n  align-items: center;\n  text-align: center;\n}\n\n.matCard0[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.matCardInstruction[_ngcontent-%COMP%] {\n  width: 90%;\n  background-color: lightgray;\n  margin: 3px;\n}\n\n.matCard1[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.matCard2[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 3px;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 200px;\n  width: 200px;\n  justify-items: center;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG1zLXdpbmRvdy9DOlxcRGF0YVxcZGV2MjAyMFxcY3ZTYWxvbjNcXGN2U2Fsb24vc3JjXFxhcHBcXGxtcy13aW5kb3dcXGxtcy13aW5kb3cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xtcy13aW5kb3cvbG1zLXdpbmRvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURHRTtFQUNFLFlBQUE7QUNBSjs7QURJRTtFQUNFLFVBQUE7RUFDQywyQkFBQTtFQUNBLFdBQUE7QUNETDs7QURNQztFQUNHLFlBQUE7QUNISjs7QURPRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDSko7O0FEVUU7RUFDRSxrQkFBQTtFQUdBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvbG1zLXdpbmRvdy9sbXMtd2luZG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIH1cclxuXHJcbiAgLm1hdENhcmQwIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLm1hdENhcmRJbnN0cnVjdGlvbiB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgICBtYXJnaW46IDNweDtcclxuICAgIFxyXG4gIH1cclxuXHJcblxyXG4gLm1hdENhcmQxIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLm1hdENhcmQyIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgLy8gaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcblxyXG4gXHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIC8qIHdpZHRoOiAxNTBweDsgKi9cclxuICAgIFxyXG4gIH1cclxuXHJcbi8vICAgLmNhcmQtY29udGFpbmVyIHtcclxuLy8gICAgIC8qICBub3QgbmVlZGVkIHN0eWxlcyB0byByZWZsZWN0IGl0ICovIFxyXG4vLyAgICAgYmFja2dyb3VuZDogYmx1ZTtcclxuLy8gICAgIHBhZGRpbmc6IDEwcHg7XHJcbi8vICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICB3aWR0aDogNTAwcHg7XHJcbiAgXHJcbi8vICAgICAvKiBuZWVkZWQgc3R5bGVzIGJlbG93ICovXHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyAgIH0iLCJtYXQtY2FyZCB7XG4gIGNvbG9yOiBncmVlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdENhcmQwIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4ubWF0Q2FyZEluc3RydWN0aW9uIHtcbiAgd2lkdGg6IDkwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBtYXJnaW46IDNweDtcbn1cblxuLm1hdENhcmQxIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4ubWF0Q2FyZDIge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogM3B4O1xufVxuXG5pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAvKiB3aWR0aDogMTUwcHg7ICovXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LmsWindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lms-window',
          templateUrl: './lms-window.component.html',
          styleUrls: ['./lms-window.component.scss']
        }]
      }], function () {
        return [{
          type: _lib_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }, {
          type: _lib_restSvc__WEBPACK_IMPORTED_MODULE_6__["RestSvc"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lms/lms.component.ts":
  /*!**************************************!*\
    !*** ./src/app/lms/lms.component.ts ***!
    \**************************************/

  /*! exports provided: LmsComponent */

  /***/
  function srcAppLmsLmsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LmsComponent", function () {
      return LmsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _lms_menu_lms_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../lms-menu/lms-menu.component */
    "./src/app/lms-menu/lms-menu.component.ts");
    /* harmony import */


    var _lms_window_lms_window_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../lms-window/lms-window.component */
    "./src/app/lms-window/lms-window.component.ts");

    var LmsComponent = /*#__PURE__*/function () {
      function LmsComponent() {
        _classCallCheck(this, LmsComponent);
      }

      _createClass(LmsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LmsComponent;
    }();

    LmsComponent.ɵfac = function LmsComponent_Factory(t) {
      return new (t || LmsComponent)();
    };

    LmsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LmsComponent,
      selectors: [["app-lms"]],
      decls: 6,
      vars: 0,
      consts: [[1, "flex-container"], ["fxLayout", "row wrap"], ["fxFlex", "100%", "fxFlex.gt-sm", "18%"], ["fxFlex", "100%", "fxFlex.gt-sm", "82%"]],
      template: function LmsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-lms-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-lms-window");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _lms_menu_lms_menu_component__WEBPACK_IMPORTED_MODULE_2__["LmsMenuComponent"], _lms_window_lms_window_component__WEBPACK_IMPORTED_MODULE_3__["LmsWindowComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LmsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lms',
          templateUrl: './lms.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav/nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lib_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../lib/global */
    "./src/app/lib/global.ts");
    /* harmony import */


    var _lib_ctrlSvc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../lib/ctrlSvc */
    "./src/app/lib/ctrlSvc.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    function NavComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_0_div_1_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r3.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_0_div_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.onPdf();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PDF");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavComponent_div_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_0_div_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.onQry();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Query");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_0_div_2_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.onPdf();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PDF");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_0_div_2_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.onZipPack();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Zip");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavComponent_div_0_div_1_Template, 5, 0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavComponent_div_0_div_2_Template, 7, 0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.adminLevel == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.adminLevel != 0);
      }
    }

    var NavComponent = /*#__PURE__*/function () {
      function NavComponent(ctrlSvc) {
        _classCallCheck(this, NavComponent);

        this.ctrlSvc = ctrlSvc;
      } // docs: [{docType: string, docName: string}] ;


      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.ctrlSvc.onSubmit();
        }
      }, {
        key: "onQry",
        value: function onQry() {
          this.ctrlSvc.onQry();
        }
      }, {
        key: "onPdf",
        value: function onPdf() {
          this.ctrlSvc.onPdf();
        }
      }, {
        key: "onZipPack",
        value: function onZipPack() {
          this.ctrlSvc.onZipPack();
        }
      }, {
        key: "domainName",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].domainName;
        }
      }, {
        key: "logo",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].logo;
        }
      }, {
        key: "clientName",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].clientName;
        }
      }, {
        key: "adminLevel",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].adminLevel;
        }
      }, {
        key: "showTopBar",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].showTopBar;
        }
      }]);

      return NavComponent;
    }();

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lib_ctrlSvc__WEBPACK_IMPORTED_MODULE_2__["CtrlSvc"]));
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["class", "container", "fxLayout", "row", "fxLayoutAlign", "end start", 4, "ngIf"], ["class", "container", "fxLayout", "row", "fxLayoutAlign", "start start", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "end start", 1, "container"], [1, "button-3d", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start start", 1, "container"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavComponent_div_0_Template, 4, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTopBar);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"]],
      styles: [".container[_ngcontent-%COMP%] {\n  background-color: gray;\n  height: 35px;\n}\n\n.flushRight[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n\n\n.lbl[_ngcontent-%COMP%] {\n  background-color: #E1B329;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxEYXRhXFxkZXYyMDIwXFxjdlNhbG9uM1xcY3ZTYWxvbi9zcmNcXGFwcFxcbmF2XFxuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTs7OztHQUFBOztBQU1BO0VBQ0UseUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpncmF5O1xyXG4gIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLmZsdXNoUmlnaHQge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4vKiAuYnRuIHtcclxuICBtYXJnaW46IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbn0gKi9cclxuXHJcbi5sYmwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMUIzMjk7XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uZmx1c2hSaWdodCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4vKiAuYnRuIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG59ICovXG4ubGJsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UxQjMyOTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav',
          templateUrl: './nav.component.html',
          styleUrls: ['./nav.component.scss']
        }]
      }], function () {
        return [{
          type: _lib_ctrlSvc__WEBPACK_IMPORTED_MODULE_2__["CtrlSvc"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/optimus-minds/optimus-minds-admin.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/optimus-minds/optimus-minds-admin.component.ts ***!
    \****************************************************************/

  /*! exports provided: OptimusMindsAdminComponent */

  /***/
  function srcAppOptimusMindsOptimusMindsAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptimusMindsAdminComponent", function () {
      return OptimusMindsAdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lib_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../lib/global */
    "./src/app/lib/global.ts");
    /* harmony import */


    var _lib_restSvc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../lib/restSvc */
    "./src/app/lib/restSvc.ts");
    /* harmony import */


    var _lib_ctrlSvc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../lib/ctrlSvc */
    "./src/app/lib/ctrlSvc.ts");
    /* harmony import */


    var _lib_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../lib/dialog */
    "./src/app/lib/dialog/index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _lib_programfilter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../lib/programfilter.pipe */
    "./src/app/lib/programfilter.pipe.ts");

    var _c0 = function _c0(a0) {
      return {
        "highlight": a0
      };
    };

    function OptimusMindsAdminComponent_div_40_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptimusMindsAdminComponent_div_40_tr_12_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var trainer_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.onTrainerPick(trainer_r4._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var trainer_r4 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, trainer_r4._id === ctx_r3.trainerPickId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trainer_r4.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trainer_r4.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trainer_r4.mobileNbr);
      }
    }

    function OptimusMindsAdminComponent_div_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tbody", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Mobile Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OptimusMindsAdminComponent_div_40_tr_12_Template, 7, 6, "tr", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.trainers);
      }
    }

    function OptimusMindsAdminComponent_div_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Documents submitted");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OptimusMindsAdminComponent_div_42_tr_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptimusMindsAdminComponent_div_42_tr_10_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var doc_r8 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.onDocPick(doc_r8.folder, doc_r8.file);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var doc_r8 = ctx.$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, doc_r8.file === ctx_r7.docFile));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doc_r8.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doc_r8.file);
      }
    }

    function OptimusMindsAdminComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tbody", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "File");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OptimusMindsAdminComponent_div_42_tr_10_Template, 5, 5, "tr", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "programfilter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 1, ctx_r2.docs, ctx_r2.programs));
      }
    }

    var OptimusMindsAdminComponent = /*#__PURE__*/function () {
      //docs = [] ;
      //-----------

      /*  expScreenMode = false;
      
       program = "" ;
       trainName = "";
       institute = ""
       year =   "";
       
       trainExpPickId = "";
       trainExpPickIndex = 0 ;
       lastTrainExpId = "";
       mode = "" ; */
      //-----------------
      function OptimusMindsAdminComponent(restSvc, ctrlSvc, dlgSvc, httpClient) {
        _classCallCheck(this, OptimusMindsAdminComponent);

        this.restSvc = restSvc;
        this.ctrlSvc = ctrlSvc;
        this.dlgSvc = dlgSvc;
        this.httpClient = httpClient;
        this.trainerPickId = "";
        this.trainExpPickIndex = 0;
        this.docFile = "";
      }

      _createClass(OptimusMindsAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this31 = this;

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].init('optimusMinds');

          var email = "hardeepsysbit@gmail.com";
          this.restSvc.emailToken(email).then(function (msg) {
            var adminLevel = msg['adminLevel'];
            _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].email = email;
            _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].token = msg['token'];
            _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].pin = msg['pin'];
            _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"]._id = msg['_id'];
            _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].adminLevel = 1;
            _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].adminLevelReq = 1;
            _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].dlgAuthMode = 2;

            _this31.openModal('dlgAuth');
          });
        }
      }, {
        key: "onDocPick",
        value: function onDocPick(docFolder, docFile) {
          this.docFile = docFile;
          docFolder = "cert";
          docFile = "Global.zip";
          this.restSvc.getFile(_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"]._id, docFolder, docFile).then(function (data) {});
        }
      }, {
        key: "onTrainerPick",
        value: function onTrainerPick(trainerId) {
          this.trainerPickId = trainerId;
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].docs = [];
          this.restSvc.getById(trainerId).then(function (data) {
            var aryKeys = Object.keys(data);
            var value = "";

            for (var i = 0; i < aryKeys.length; i++) {
              value = data[aryKeys[i]];
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData[aryKeys[i]] = value;
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData[aryKeys[i]] = value;
            }

            if (_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData['moeFile'] != "") {
              _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].docs.push({
                "folder": "moe",
                "program": "moe",
                "title": "MOE : Expiry - " + _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData['moeExpiry'],
                "file": _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData['moeFile']
              });
            }

            for (var j = 0; j < _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData['certs'].length; j++) {
              if (_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData['certs'][j].file != '') {
                //     this.docs.push({"title": Global.svrData['certs'][j].title,"program": Global.svrData['certs'][j].program,"file": Global.svrData['certs'][j].file})    ;
                _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].docs.push({
                  "folder": "cert",
                  "program": _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData['certs'][j].program,
                  "title": _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData['certs'][j].program + " : " + _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData['certs'][j].title,
                  "file": _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData['certs'][j].file
                });
              }
            }

            for (var _j = 0; _j < _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData['acheives'].length; _j++) {
              if (_lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData['acheives'][_j].file != '') {
                _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].docs.push({
                  "folder": "acheive",
                  "program": _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData['certs'][_j].program,
                  "title": "Acheivement : " + _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData['acheives'][_j].title,
                  "file": _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].svrData['acheives'][_j].file
                });
              }
            }
          });
          this.restSvc.getPhoto(trainerId);
        }
      }, {
        key: "onQry",
        value: function onQry() {
          this.ctrlSvc.onQry();
        }
      }, {
        key: "openModal",
        value: function openModal(id) {
          this.dlgSvc.open(id);
        }
      }, {
        key: "programs",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].locData["programs"];
        }
      }, {
        key: "docs",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].docs;
        }
      }, {
        key: "trainersExist",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].trainersExist;
        }
      }, {
        key: "trainers",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].trainers;
        },
        set: function set(value) {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].trainers = value;
        } // for Optimus Minds

      }, {
        key: "aiChk",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].aiChk;
        },
        set: function set(value) {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].aiChk = value;

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].makeProgramList();
        }
      }, {
        key: "atRiskChk",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].atRiskChk;
        },
        set: function set(value) {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].atRiskChk = value;

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].makeProgramList();
        }
      }, {
        key: "careerChk",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].careerChk;
        },
        set: function set(value) {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].careerChk = value;

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].makeProgramList();
        }
      }, {
        key: "dramaChk",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].dramaChk;
        },
        set: function set(value) {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].dramaChk = value;

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].makeProgramList();
        }
      }, {
        key: "danceChk",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].danceChk;

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].makeProgramList();
        },
        set: function set(value) {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].danceChk = value;

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].makeProgramList();
        }
      }, {
        key: "itChk",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].itChk;
        },
        set: function set(value) {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].itChk = value;

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].makeProgramList();
        }
      }, {
        key: "skillsChk",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].skillsChk;
        },
        set: function set(value) {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].skillsChk = value;

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].makeProgramList();
        }
      }, {
        key: "tongueChk",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].tongueChk;
        },
        set: function set(value) {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].tongueChk = value;

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].makeProgramList();
        }
      }, {
        key: "musicChk",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].musicChk;
        },
        set: function set(value) {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].musicChk = value;

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].makeProgramList();
        }
      }, {
        key: "outdoorChk",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].outdoorChk;
        },
        set: function set(value) {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].outdoorChk = value;

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].makeProgramList();
        }
      }, {
        key: "sportsChk",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].sportsChk;
        },
        set: function set(value) {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].sportsChk = value;

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].makeProgramList();
        }
      }, {
        key: "visualChk",
        get: function get() {
          return _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].visualChk;
        },
        set: function set(value) {
          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].visualChk = value;

          _lib_global__WEBPACK_IMPORTED_MODULE_1__["Global"].makeProgramList();
        }
      }]);

      return OptimusMindsAdminComponent;
    }();

    OptimusMindsAdminComponent.ɵfac = function OptimusMindsAdminComponent_Factory(t) {
      return new (t || OptimusMindsAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lib_restSvc__WEBPACK_IMPORTED_MODULE_2__["RestSvc"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lib_ctrlSvc__WEBPACK_IMPORTED_MODULE_3__["CtrlSvc"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lib_dialog__WEBPACK_IMPORTED_MODULE_4__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
    };

    OptimusMindsAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OptimusMindsAdminComponent,
      selectors: [["app-optimus-minds-admin"]],
      decls: 43,
      vars: 15,
      consts: [["fxLayout", "row"], ["fxFlex", "5", "fxHide", "", "fxShow.gt-xs", ""], ["fxFlex", "", "fxLayout", "column"], [1, "containerChk"], ["id", "ai", "name", "ai", "type", "checkbox", 1, "leftA", 3, "ngModel", "ngModelChange"], ["for", "ai", 1, "rightA"], ["id", "atRisk", "name", "atRisk", "type", "checkbox", 1, "leftA", 3, "ngModel", "ngModelChange"], ["for", "atRisk", 1, "rightA"], ["id", "career", "name", "career", "type", "checkbox", 1, "leftA", 3, "ngModel", "ngModelChange"], ["for", "career", 1, "rightA"], ["id", "dance", "name", "dance", "type", "checkbox", 1, "leftA", 3, "ngModel", "ngModelChange"], ["for", "dance", 1, "rightA"], ["id", "drama", "name", "drama", "type", "checkbox", 1, "leftA", 3, "ngModel", "ngModelChange"], ["for", "drama", 1, "rightA"], ["id", "it", "name", "it", "type", "checkbox", 1, "leftA", 3, "ngModel", "ngModelChange"], ["for", "it", 1, "rightA"], ["id", "skills", "name", "skills", "type", "checkbox", 1, "leftA", 3, "ngModel", "ngModelChange"], ["for", "skills", 1, "rightA"], ["id", "tongue", "name", "tongue", "type", "checkbox", 1, "leftB", 3, "ngModel", "ngModelChange"], ["for", "tongue", 1, "rightB"], ["id", "music", "name", "music", "type", "checkbox", 1, "leftB", 3, "ngModel", "ngModelChange"], ["for", "music", 1, "rightB"], ["id", "outdoor", "name", "outdoor", "type", "checkbox", 1, "leftB", 3, "ngModel", "ngModelChange"], ["for", "outdoor", 1, "rightB"], ["id", "sports", "name", "sports", "type", "checkbox", 1, "leftB", 3, "ngModel", "ngModelChange"], ["for", "sports", 1, "rightB"], ["id", "visual", "name", "visual", "type", "checkbox", 1, "leftB", 3, "ngModel", "ngModelChange"], ["for", "visual", 1, "rightB"], ["fxLayout", "row", 4, "ngIf"], ["fxFlex", "1 1 auto"], [2, "font-size", "12px"], [1, "col1"], [1, "col2"], [1, "col4"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"], [1, "col1x"], [1, "col4x"]],
      template: function OptimusMindsAdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OptimusMindsAdminComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.aiChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Artificial Intelligence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OptimusMindsAdminComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.atRiskChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "At Risk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OptimusMindsAdminComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.careerChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Career Perparation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OptimusMindsAdminComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.danceChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Dance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OptimusMindsAdminComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.dramaChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Drama");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OptimusMindsAdminComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.itChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "IT\\Multimedia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OptimusMindsAdminComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.skillsChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Life Skills\\Soft Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OptimusMindsAdminComponent_Template_input_ngModelChange_25_listener($event) {
            return ctx.tongueChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Mother Tongue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OptimusMindsAdminComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.musicChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Music");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OptimusMindsAdminComponent_Template_input_ngModelChange_31_listener($event) {
            return ctx.outdoorChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Outdoor Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OptimusMindsAdminComponent_Template_input_ngModelChange_34_listener($event) {
            return ctx.sportsChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OptimusMindsAdminComponent_Template_input_ngModelChange_37_listener($event) {
            return ctx.visualChk = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Visual Arts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, OptimusMindsAdminComponent_div_40_Template, 13, 1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, OptimusMindsAdminComponent_div_41_Template, 4, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, OptimusMindsAdminComponent_div_42_Template, 12, 4, "div", 28);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.aiChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.atRiskChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.careerChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.danceChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dramaChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.itChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.skillsChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tongueChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.musicChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.outdoorChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sportsChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.visualChk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trainersExist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trainersExist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trainersExist);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultShowHideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"]],
      pipes: [_lib_programfilter_pipe__WEBPACK_IMPORTED_MODULE_10__["ProgramfilterPipe"]],
      styles: ["@supports (display: grid) {\n  .containerChk[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 30px 2fr 30px 2fr;\n    grid-auto-flow: dense;\n    height: 250px;\n    margin-left: 5px;\n  }\n\n  .containerData[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 150px 0.1em 2fr;\n    grid-auto-flow: dense;\n    height: 250px;\n  }\n\n  .zindex[_ngcontent-%COMP%] {\n    background-color: white;\n    z-index: 9999;\n  }\n\n  .containerBtn[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 95% 1fr 1fr 1fr;\n    grid-auto-flow: dense;\n    justify-content: end;\n  }\n\n  \n  .header[_ngcontent-%COMP%] {\n    margin-left: 5px;\n  }\n\n  .leftA[_ngcontent-%COMP%] {\n    grid-column: 1/2;\n    color: black;\n    background-color: white;\n  }\n\n  .rightA[_ngcontent-%COMP%] {\n    margin-top: 0px;\n    grid-column: 2/3;\n    color: black;\n    background-color: white;\n    font-size: 120%;\n  }\n\n  .leftB[_ngcontent-%COMP%] {\n    grid-column: 3/4;\n    color: black;\n    background-color: white;\n  }\n\n  .rightB[_ngcontent-%COMP%] {\n    margin-top: 0px;\n    color: black;\n    background-color: white;\n    font-size: 120%;\n    grid-column: 4/5;\n  }\n\n  .labelData[_ngcontent-%COMP%] {\n    grid-column: 1/2;\n  }\n\n  .inputData[_ngcontent-%COMP%] {\n    grid-column: 3/4;\n  }\n}\nthead[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%] {\n  background-color: #3f87a6;\n  color: #fff;\n}\ntbody[_ngcontent-%COMP%] {\n  background-color: #e4f0f5;\n}\ncaption[_ngcontent-%COMP%] {\n  padding: 10px;\n  caption-side: bottom;\n}\n\n.addExpBtn[_ngcontent-%COMP%], .saveExpBtn[_ngcontent-%COMP%] {\n  grid-column: 4/5;\n}\n.delExpBtn[_ngcontent-%COMP%], .cancelExpBtn[_ngcontent-%COMP%] {\n  grid-column: 3/4;\n}\n.editExptn[_ngcontent-%COMP%] {\n  grid-column: 2/3;\n}\ntable[_ngcontent-%COMP%] {\n  background-color: white;\n  display: block;\n  \n}\ntbody[_ngcontent-%COMP%] {\n  display: block;\n  \n}\n.child[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 5px;\n  background-color: #eee;\n  border: 3px solid;\n  display: block;\n}\n.container[_ngcontent-%COMP%] {\n  padding: 2px;\n  background-color: yellow;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-content: center;\n  align-items: stretch;\n}\n\n.col1[_ngcontent-%COMP%] {\n  width: 45%;\n}\n.col2[_ngcontent-%COMP%] {\n  width: 45%;\n}\n.col3[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.col4[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.col1x[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.col4x[_ngcontent-%COMP%] {\n  width: 50%;\n}\ntable[_ngcontent-%COMP%]   tr.highlight[_ngcontent-%COMP%] {\n  background-color: #4CAF50 !important;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3B0aW11cy1taW5kcy9DOlxcRGF0YVxcZGV2MjAyMFxcY3ZTYWxvbjNcXGN2U2Fsb24vc3JjXFxhcHBcXG9wdGltdXMtbWluZHNcXG9wdGltdXMtbWluZHMtYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29wdGltdXMtbWluZHMvb3B0aW11cy1taW5kcy1hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUdDO0lBQ0UsYUFBQTtJQUNBLHdDQUFBO0lBQ0EscUJBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7RUNGRjs7RURJQTtJQUNFLGFBQUE7SUFDQSxzQ0FBQTtJQUNBLHFCQUFBO0lBQ0EsYUFBQTtFQ0RGOztFRElGO0lBQ0UsdUJBQUE7SUFDQSxhQUFBO0VDREE7O0VER0E7SUFDRSxhQUFBO0lBQ0Esc0NBQUE7SUFDQSxxQkFBQTtJQUNBLG9CQUFBO0VDQUY7O0VER0Y7Ozs7Ozs7Ozs7Ozs7U0FBQTtFQWVJO0lBQ0ksZ0JBQUE7RUNETjs7RURJRTtJQUNFLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0VDREo7O0VESUc7SUFDQyxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7SUFDQSxlQUFBO0VDREo7O0VESUc7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtFQ0RIOztFREtFO0lBQ0MsZUFBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ0ZIOztFREtBO0lBQ0UsZ0JBQUE7RUNGRjs7RURLQTtJQUNFLGdCQUFBO0VDRkY7QUFDRjtBRE9BOztFQUVJLHlCQUFBO0VBQ0EsV0FBQTtBQ0xKO0FEUUE7RUFDSSx5QkFBQTtBQ0xKO0FEUUE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7QUNMRjtBRFFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUE7QUF3QkE7RUFDRSxnQkFBQTtBQ05GO0FEVUE7RUFDRSxnQkFBQTtBQ1BGO0FEVUE7RUFDRyxnQkFBQTtBQ1BIO0FEV0E7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFBZ0IsNENBQUE7QUNQbEI7QURVQTtFQUNFLGNBQUE7RUFBZ0IsNENBQUE7QUNObEI7QURRQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNMRjtBRE9BO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0VBR0EsYUFBQTtFQUdBLG1CQUFBO0VBR0EsZUFBQTtFQUdBLDhCQUFBO0VBR0EscUJBQUE7RUFHQSxvQkFBQTtBQ0pGO0FETUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUFBO0FBbUJBO0VBRUUsVUFBQTtBQ0pGO0FETUE7RUFFRSxVQUFBO0FDSkY7QURNQTtFQUVFLFVBQUE7QUNKRjtBRE1BO0VBRUUsVUFBQTtBQ0pGO0FEUUM7RUFDRSxVQUFBO0FDTEg7QURRQztFQUNFLFVBQUE7QUNMSDtBRFNBO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0FDTkY7QURVQzs7Ozs7O0dBQUEiLCJmaWxlIjoic3JjL2FwcC9vcHRpbXVzLW1pbmRzL29wdGltdXMtbWluZHMtYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuIEBzdXBwb3J0cyAoZGlzcGxheTogZ3JpZCkge1xyXG4gXHJcblxyXG4gIC5jb250YWluZXJDaGsge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAyZnIgMzBweCAyZnI7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcbiAgLmNvbnRhaW5lckRhdGEge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUwcHggMC4xZW0gMmZyO1xyXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICB9XHJcbiAgXHJcbi56aW5kZXgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuICAuY29udGFpbmVyQnRuIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDk1JSAxZnIgMWZyIDFmcjtcclxuICAgIGdyaWQtYXV0by1mbG93OiBkZW5zZTtcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIH1cclxuXHJcbi8qICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgIC8vIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfSBcclxuXHJcbiAgICBsYWJlbCwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWwsIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsIHtcclxuICAgICAvLyBncmlkLWNvbHVtbjogMiAvIDM7ICBcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDAuMjVlbSAxZW0gMCAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcblxyXG4gICAgfSAqL1xyXG5cclxuICAgIC5oZWFkZXIgIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmxlZnRBIHtcclxuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAgfVxyXG4gIFxyXG4gICAgIC5yaWdodEEge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDEyMCU7XHJcbiAgICAgfVxyXG4gICAgXHJcbiAgICAgLmxlZnRCIHtcclxuICAgICBncmlkLWNvbHVtbjogMyAvIDQ7XHJcbiAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBcclxuICAgIH1cclxuICBcclxuICAgIC5yaWdodEIge1xyXG4gICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgICBmb250LXNpemU6IDEyMCU7XHJcbiAgICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xyXG4gICAgfVxyXG4gXHJcbiAgLmxhYmVsRGF0YSB7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbiAgfVxyXG5cclxuICAuaW5wdXREYXRhIHtcclxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxudGhlYWQsXHJcbnRmb290IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjg3YTY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxudGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZjBmNTtcclxufVxyXG5cclxuY2FwdGlvbiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjYXB0aW9uLXNpZGU6IGJvdHRvbTtcclxufVxyXG5cclxuLyogIHRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMDAsIDIwMCwgMjAwKTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogLjhyZW07XHJcbiBcclxufVxyXG5cclxudGQsXHJcbnRoIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkwLCAxOTAsIDE5MCk7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRhYmxlIHRyLmhpZ2hsaWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59ICovXHJcblxyXG4uYWRkRXhwQnRuLCAuc2F2ZUV4cEJ0biB7XHJcbiAgZ3JpZC1jb2x1bW46IDQgLyA1O1xyXG4gXHJcbn1cclxuXHJcbi5kZWxFeHBCdG4sIC5jYW5jZWxFeHBCdG4ge1xyXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcclxufVxyXG5cclxuLmVkaXRFeHB0biB7XHJcbiAgIGdyaWQtY29sdW1uOiAyIC8gMztcclxufVxyXG5cclxuXHJcbnRhYmxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBibG9jazsgLypSZXF1aXJlZCBmb3Igd3JhcCB0byB3b3JrIGNvcnJlY3RseSBpbiBJRSovXHJcblxyXG59XHJcbnRib2R5IHtcclxuICBkaXNwbGF5OiBibG9jazsgLypSZXF1aXJlZCBmb3Igd3JhcCB0byB3b3JrIGNvcnJlY3RseSBpbiBJRSovXHJcbn1cclxuLmNoaWxkIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXI6IDNweCBzb2xpZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xyXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBzdHJldGNoO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcbi8qIC5jaGlsZC5vbmUge1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICAtd2Via2l0LW9yZGVyOiAxO1xyXG4gIC1tcy1mbGV4LW9yZGVyOiAxO1xyXG4gIG9yZGVyOiAxO1xyXG59XHJcbi5jaGlsZC50d28ge1xyXG4gIGNvbG9yOiBwdXJwbGU7XHJcbiAgLXdlYmtpdC1vcmRlcjogMjtcclxuICAtbXMtZmxleC1vcmRlcjogMjtcclxuICBvcmRlcjogMjtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG4uY2hpbGQudGhyZWUge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgLXdlYmtpdC1vcmRlcjogMztcclxuICAtbXMtZmxleC1vcmRlcjogMztcclxuICBvcmRlcjogMztcclxufSAqL1xyXG4uY29sMSB7XHJcblxyXG4gIHdpZHRoOiA0NSU7XHJcbn1cclxuLmNvbDIge1xyXG5cclxuICB3aWR0aDogNDUlO1xyXG59XHJcbi5jb2wzIHtcclxuXHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG4uY29sNCB7XHJcblxyXG4gIHdpZHRoOiAzMCU7XHJcbiAgXHJcbn1cclxuXHJcbiAuY29sMXgge1xyXG4gICB3aWR0aDogNzAlO1xyXG4gfVxyXG5cclxuIC5jb2w0eCB7XHJcbiAgIHdpZHRoOiA1MCU7XHJcbiB9XHJcblxyXG5cclxudGFibGUgdHIuaGlnaGxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcblxyXG4gLyogaW5wdXQ6Zm9jdXMgKyBsYWJlbCwgdGV4dGFyZWE6Zm9jdXMgKyBsYWJlbCwgc2VsZWN0OmZvY3VzICsgbGFiZWwge1xyXG4gIGNvbG9yOiAjOTMzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59ICovIiwiQHN1cHBvcnRzIChkaXNwbGF5OiBncmlkKSB7XG4gIC5jb250YWluZXJDaGsge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDJmciAzMHB4IDJmcjtcbiAgICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG5cbiAgLmNvbnRhaW5lckRhdGEge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNTBweCAwLjFlbSAyZnI7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gIH1cblxuICAuemluZGV4IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiA5OTk5O1xuICB9XG5cbiAgLmNvbnRhaW5lckJ0biB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDk1JSAxZnIgMWZyIDFmcjtcbiAgICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIH1cblxuICAvKiAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSwgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgICAgICAvLyBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH0gXG5cbiAgICAgIGxhYmVsLCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbCwgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwge1xuICAgICAgIC8vIGdyaWQtY29sdW1uOiAyIC8gMzsgIFxuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgcGFkZGluZzogMC4yNWVtIDFlbSAwIDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcblxuICAgICAgfSAqL1xuICAuaGVhZGVyIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG5cbiAgLmxlZnRBIHtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5yaWdodEEge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEyMCU7XG4gIH1cblxuICAubGVmdEIge1xuICAgIGdyaWQtY29sdW1uOiAzLzQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLnJpZ2h0QiB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEyMCU7XG4gICAgZ3JpZC1jb2x1bW46IDQvNTtcbiAgfVxuXG4gIC5sYWJlbERhdGEge1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gIH1cblxuICAuaW5wdXREYXRhIHtcbiAgICBncmlkLWNvbHVtbjogMy80O1xuICB9XG59XG50aGVhZCxcbnRmb290IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmODdhNjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbnRib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZjBmNTtcbn1cblxuY2FwdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNhcHRpb24tc2lkZTogYm90dG9tO1xufVxuXG4vKiAgdGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjAwLCAyMDAsIDIwMCk7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IC44cmVtO1xuXG59XG5cbnRkLFxudGgge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkwLCAxOTAsIDE5MCk7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG50ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGFibGUgdHIuaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZjtcbn0gKi9cbi5hZGRFeHBCdG4sIC5zYXZlRXhwQnRuIHtcbiAgZ3JpZC1jb2x1bW46IDQvNTtcbn1cblxuLmRlbEV4cEJ0biwgLmNhbmNlbEV4cEJ0biB7XG4gIGdyaWQtY29sdW1uOiAzLzQ7XG59XG5cbi5lZGl0RXhwdG4ge1xuICBncmlkLWNvbHVtbjogMi8zO1xufVxuXG50YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLypSZXF1aXJlZCBmb3Igd3JhcCB0byB3b3JrIGNvcnJlY3RseSBpbiBJRSovXG59XG5cbnRib2R5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8qUmVxdWlyZWQgZm9yIHdyYXAgdG8gd29yayBjb3JyZWN0bHkgaW4gSUUqL1xufVxuXG4uY2hpbGQge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IDNweCBzb2xpZDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIC1tcy1mbGV4LWFsaWduOiBzdHJldGNoO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuLyogLmNoaWxkLm9uZSB7XG4gIGNvbG9yOiBncmVlbjtcbiAgLXdlYmtpdC1vcmRlcjogMTtcbiAgLW1zLWZsZXgtb3JkZXI6IDE7XG4gIG9yZGVyOiAxO1xufVxuLmNoaWxkLnR3byB7XG4gIGNvbG9yOiBwdXJwbGU7XG4gIC13ZWJraXQtb3JkZXI6IDI7XG4gIC1tcy1mbGV4LW9yZGVyOiAyO1xuICBvcmRlcjogMjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uY2hpbGQudGhyZWUge1xuICBjb2xvcjogcmVkO1xuICAtd2Via2l0LW9yZGVyOiAzO1xuICAtbXMtZmxleC1vcmRlcjogMztcbiAgb3JkZXI6IDM7XG59ICovXG4uY29sMSB7XG4gIHdpZHRoOiA0NSU7XG59XG5cbi5jb2wyIHtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuLmNvbDMge1xuICB3aWR0aDogMzAlO1xufVxuXG4uY29sNCB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5jb2wxeCB7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5jb2w0eCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbnRhYmxlIHRyLmhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi8qIGlucHV0OmZvY3VzICsgbGFiZWwsIHRleHRhcmVhOmZvY3VzICsgbGFiZWwsIHNlbGVjdDpmb2N1cyArIGxhYmVsIHtcbiAgY29sb3I6ICM5MzM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSAqLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptimusMindsAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-optimus-minds-admin',
          templateUrl: './optimus-minds-admin.component.html',
          styleUrls: ['./optimus-minds-admin.component.scss']
        }]
      }], function () {
        return [{
          type: _lib_restSvc__WEBPACK_IMPORTED_MODULE_2__["RestSvc"]
        }, {
          type: _lib_ctrlSvc__WEBPACK_IMPORTED_MODULE_3__["CtrlSvc"]
        }, {
          type: _lib_dialog__WEBPACK_IMPORTED_MODULE_4__["DialogService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/optimus-minds/optimus-minds.ts":
  /*!************************************************!*\
    !*** ./src/app/optimus-minds/optimus-minds.ts ***!
    \************************************************/

  /*! exports provided: OptimusMinds */

  /***/
  function srcAppOptimusMindsOptimusMindsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptimusMinds", function () {
      return OptimusMinds;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _optimus_minds_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./optimus-minds-admin.component */
    "./src/app/optimus-minds/optimus-minds-admin.component.ts");
    /* harmony import */


    var _cv_salon_cv_salon_viewer_cv_salon_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../cv-salon/cv-salon-viewer/cv-salon-viewer.component */
    "./src/app/cv-salon/cv-salon-viewer/cv-salon-viewer.component.ts");

    var OptimusMinds = /*#__PURE__*/function () {
      function OptimusMinds() {
        _classCallCheck(this, OptimusMinds);
      }

      _createClass(OptimusMinds, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OptimusMinds;
    }();

    OptimusMinds.ɵfac = function OptimusMinds_Factory(t) {
      return new (t || OptimusMinds)();
    };

    OptimusMinds.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OptimusMinds,
      selectors: [["app-optimus-minds"]],
      decls: 6,
      vars: 0,
      consts: [[1, "flex-container"], ["fxLayout", "row wrap"], ["fxFlex", "100%", "fxFlex.gt-sm", "50%"]],
      template: function OptimusMinds_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-optimus-minds-admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-cv-salon-viewer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _optimus_minds_admin_component__WEBPACK_IMPORTED_MODULE_2__["OptimusMindsAdminComponent"], _cv_salon_cv_salon_viewer_cv_salon_viewer_component__WEBPACK_IMPORTED_MODULE_3__["CvSalonViewerComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptimusMinds, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-optimus-minds',
          template: "<div class=\"flex-container\">\n  <div fxLayout=\"row wrap\">\n    <div  fxFlex=\"100%\" fxFlex.gt-sm=\"50%\" >\n           <app-optimus-minds-admin></app-optimus-minds-admin> \n    </div>\n    <div  fxFlex=\"100%\" fxFlex.gt-sm=\"50%\">\n          <app-cv-salon-viewer></app-cv-salon-viewer> \n    </div> \n    </div> \n   \n  </div>"
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Data\dev2020\cvSalon3\cvSalon\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map