(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _components_product_list_product12_product12_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/product-list/product12/product12.component */ "./src/app/components/product-list/product12/product12.component.ts");
/* harmony import */ var _components_product_list_product11_product11_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product-list/product11/product11.component */ "./src/app/components/product-list/product11/product11.component.ts");
/* harmony import */ var _components_product_list_product10_product10_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product-list/product10/product10.component */ "./src/app/components/product-list/product10/product10.component.ts");
/* harmony import */ var _components_product_list_product9_product9_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product-list/product9/product9.component */ "./src/app/components/product-list/product9/product9.component.ts");
/* harmony import */ var _components_product_list_product8_product8_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product-list/product8/product8.component */ "./src/app/components/product-list/product8/product8.component.ts");
/* harmony import */ var _components_product_list_product7_product7_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product-list/product7/product7.component */ "./src/app/components/product-list/product7/product7.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_product_list_product6_product6_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/product-list/product6/product6.component */ "./src/app/components/product-list/product6/product6.component.ts");
/* harmony import */ var _components_product_list_product5_product5_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/product-list/product5/product5.component */ "./src/app/components/product-list/product5/product5.component.ts");
/* harmony import */ var _components_product_list_product4_product4_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/product-list/product4/product4.component */ "./src/app/components/product-list/product4/product4.component.ts");
/* harmony import */ var _components_product_list_product3_product3_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/product-list/product3/product3.component */ "./src/app/components/product-list/product3/product3.component.ts");
/* harmony import */ var _components_product_list_product2_product2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/product-list/product2/product2.component */ "./src/app/components/product-list/product2/product2.component.ts");
/* harmony import */ var _components_product_list_product1_product1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/product-list/product1/product1.component */ "./src/app/components/product-list/product1/product1.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





















const routes = [
    { path: 'cart', component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_16__["CartComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"] },
    { path: 'products', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"] },
    { path: 'product1', component: _components_product_list_product1_product1_component__WEBPACK_IMPORTED_MODULE_13__["Product1Component"] },
    { path: 'product2', component: _components_product_list_product2_product2_component__WEBPACK_IMPORTED_MODULE_12__["Product2Component"] },
    { path: 'product3', component: _components_product_list_product3_product3_component__WEBPACK_IMPORTED_MODULE_11__["Product3Component"] },
    { path: 'product4', component: _components_product_list_product4_product4_component__WEBPACK_IMPORTED_MODULE_10__["Product4Component"] },
    { path: 'product5', component: _components_product_list_product5_product5_component__WEBPACK_IMPORTED_MODULE_9__["Product5Component"] },
    { path: 'product6', component: _components_product_list_product6_product6_component__WEBPACK_IMPORTED_MODULE_8__["Product6Component"] },
    { path: 'product7', component: _components_product_list_product7_product7_component__WEBPACK_IMPORTED_MODULE_5__["Product7Component"] },
    { path: 'product8', component: _components_product_list_product8_product8_component__WEBPACK_IMPORTED_MODULE_4__["Product8Component"] },
    { path: 'product9', component: _components_product_list_product9_product9_component__WEBPACK_IMPORTED_MODULE_3__["Product9Component"] },
    { path: 'product10', component: _components_product_list_product10_product10_component__WEBPACK_IMPORTED_MODULE_2__["Product10Component"] },
    { path: 'product11', component: _components_product_list_product11_product11_component__WEBPACK_IMPORTED_MODULE_1__["Product11Component"] },
    { path: 'product12', component: _components_product_list_product12_product12_component__WEBPACK_IMPORTED_MODULE_0__["Product12Component"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'register', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_17__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]]
            }]
    }], null, null); })();
const routingComponents = [_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_16__["CartComponent"], _components_products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"], _components_product_list_product1_product1_component__WEBPACK_IMPORTED_MODULE_13__["Product1Component"], _components_product_list_product2_product2_component__WEBPACK_IMPORTED_MODULE_12__["Product2Component"], _components_product_list_product3_product3_component__WEBPACK_IMPORTED_MODULE_11__["Product3Component"], _components_product_list_product4_product4_component__WEBPACK_IMPORTED_MODULE_10__["Product4Component"], _components_product_list_product5_product5_component__WEBPACK_IMPORTED_MODULE_9__["Product5Component"], _components_product_list_product6_product6_component__WEBPACK_IMPORTED_MODULE_8__["Product6Component"], _components_product_list_product7_product7_component__WEBPACK_IMPORTED_MODULE_5__["Product7Component"], _components_product_list_product8_product8_component__WEBPACK_IMPORTED_MODULE_4__["Product8Component"], _components_product_list_product9_product9_component__WEBPACK_IMPORTED_MODULE_3__["Product9Component"], _components_product_list_product9_product9_component__WEBPACK_IMPORTED_MODULE_3__["Product9Component"], _components_product_list_product11_product11_component__WEBPACK_IMPORTED_MODULE_1__["Product11Component"], _components_product_list_product12_product12_component__WEBPACK_IMPORTED_MODULE_0__["Product12Component"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]];


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'Estore';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_app_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/app-http.service */ "./src/app/services/app-http.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_product_list_product1_product1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/product-list/product1/product1.component */ "./src/app/components/product-list/product1/product1.component.ts");
/* harmony import */ var _components_product_list_product2_product2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/product-list/product2/product2.component */ "./src/app/components/product-list/product2/product2.component.ts");
/* harmony import */ var _components_product_list_product3_product3_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/product-list/product3/product3.component */ "./src/app/components/product-list/product3/product3.component.ts");
/* harmony import */ var _components_product_list_product4_product4_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/product-list/product4/product4.component */ "./src/app/components/product-list/product4/product4.component.ts");
/* harmony import */ var _components_product_list_product5_product5_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/product-list/product5/product5.component */ "./src/app/components/product-list/product5/product5.component.ts");
/* harmony import */ var _components_product_list_product6_product6_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/product-list/product6/product6.component */ "./src/app/components/product-list/product6/product6.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_product_list_product7_product7_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/product-list/product7/product7.component */ "./src/app/components/product-list/product7/product7.component.ts");
/* harmony import */ var _components_product_list_product8_product8_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/product-list/product8/product8.component */ "./src/app/components/product-list/product8/product8.component.ts");
/* harmony import */ var _components_product_list_product9_product9_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/product-list/product9/product9.component */ "./src/app/components/product-list/product9/product9.component.ts");
/* harmony import */ var _components_product_list_product10_product10_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/product-list/product10/product10.component */ "./src/app/components/product-list/product10/product10.component.ts");
/* harmony import */ var _components_product_list_product11_product11_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/product-list/product11/product11.component */ "./src/app/components/product-list/product11/product11.component.ts");
/* harmony import */ var _components_product_list_product12_product12_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/product-list/product12/product12.component */ "./src/app/components/product-list/product12/product12.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_27__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_27__["HashLocationStrategy"] }, _services_app_http_service__WEBPACK_IMPORTED_MODULE_1__["AppHttpService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', redirectTo: '/home', pathMatch: 'full' },
            ]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"],
        _components_products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _components_product_list_product1_product1_component__WEBPACK_IMPORTED_MODULE_12__["Product1Component"],
        _components_product_list_product2_product2_component__WEBPACK_IMPORTED_MODULE_13__["Product2Component"],
        _components_product_list_product3_product3_component__WEBPACK_IMPORTED_MODULE_14__["Product3Component"],
        _components_product_list_product4_product4_component__WEBPACK_IMPORTED_MODULE_15__["Product4Component"],
        _components_product_list_product5_product5_component__WEBPACK_IMPORTED_MODULE_16__["Product5Component"],
        _components_product_list_product6_product6_component__WEBPACK_IMPORTED_MODULE_17__["Product6Component"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
        _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"],
        _components_product_list_product7_product7_component__WEBPACK_IMPORTED_MODULE_20__["Product7Component"],
        _components_product_list_product8_product8_component__WEBPACK_IMPORTED_MODULE_21__["Product8Component"],
        _components_product_list_product9_product9_component__WEBPACK_IMPORTED_MODULE_22__["Product9Component"],
        _components_product_list_product10_product10_component__WEBPACK_IMPORTED_MODULE_23__["Product10Component"],
        _components_product_list_product11_product11_component__WEBPACK_IMPORTED_MODULE_24__["Product11Component"],
        _components_product_list_product12_product12_component__WEBPACK_IMPORTED_MODULE_25__["Product12Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"],
                    _components_products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                    _components_product_list_product1_product1_component__WEBPACK_IMPORTED_MODULE_12__["Product1Component"],
                    _components_product_list_product2_product2_component__WEBPACK_IMPORTED_MODULE_13__["Product2Component"],
                    _components_product_list_product3_product3_component__WEBPACK_IMPORTED_MODULE_14__["Product3Component"],
                    _components_product_list_product4_product4_component__WEBPACK_IMPORTED_MODULE_15__["Product4Component"],
                    _components_product_list_product5_product5_component__WEBPACK_IMPORTED_MODULE_16__["Product5Component"],
                    _components_product_list_product6_product6_component__WEBPACK_IMPORTED_MODULE_17__["Product6Component"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                    _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"],
                    _components_product_list_product7_product7_component__WEBPACK_IMPORTED_MODULE_20__["Product7Component"],
                    _components_product_list_product8_product8_component__WEBPACK_IMPORTED_MODULE_21__["Product8Component"],
                    _components_product_list_product9_product9_component__WEBPACK_IMPORTED_MODULE_22__["Product9Component"],
                    _components_product_list_product10_product10_component__WEBPACK_IMPORTED_MODULE_23__["Product10Component"],
                    _components_product_list_product11_product11_component__WEBPACK_IMPORTED_MODULE_24__["Product11Component"],
                    _components_product_list_product12_product12_component__WEBPACK_IMPORTED_MODULE_25__["Product12Component"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                        { path: '', redirectTo: '/home', pathMatch: 'full' },
                    ]),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
                ],
                providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_27__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_27__["HashLocationStrategy"] }, _services_app_http_service__WEBPACK_IMPORTED_MODULE_1__["AppHttpService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class CartComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onCart() {
        this.router.navigate(['/cart']);
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 2, vars: 0, template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cart Works!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 83, vars: 0, consts: [[1, "footer-area", "footer-padding"], [1, "container"], [1, "row", "d-flex", "justify-content-between"], [1, "col-xl-3", "col-lg-3", "col-md-5", "col-sm-6"], [1, "single-footer-caption", "mb-50"], [1, "single-footer-caption", "mb-30"], [1, "footer-logo"], ["href", "index.html"], ["src", "assets/img/logo/logo2_footer.png", "alt", ""], [1, "footer-tittle"], [1, "footer-pera"], [1, "col-xl-2", "col-lg-3", "col-md-3", "col-sm-5"], ["href", "#"], [1, "col-xl-3", "col-lg-3", "col-md-4", "col-sm-7"], [1, "col-xl-3", "col-lg-3", "col-md-5", "col-sm-7"], [1, "row"], [1, "col-xl-7", "col-lg-7", "col-md-7"], [1, "footer-copy-right"], [1, "col-xl-5", "col-lg-5", "col-md-5"], [1, "footer-copy-right", "f-right"], [1, "footer-social"], ["href", "https://www.twitter.com"], [1, "fab", "fa-twitter"], ["href", "https://www.facebook.com"], [1, "fab", "fa-facebook"], ["href", "https://www.instagram.com"], [1, "fab", "fa-instagram"], ["href", "https://www.google.com"], [1, "fas", "fa-globe"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Quick Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Offers & Discounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Get Coupon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "New Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Women Cloth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Fashion Accessories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Men Accessories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Rubber made Toys");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Report a Payment Issue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Copyright \u00A9 2020 \u00A0 All rights reserved by Estore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onCart() {
        this.router.navigate(['/cart']);
    }
    onHome() {
        this.router.navigate(['/home']);
    }
    onLogin() {
        this.router.navigate(['/login']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 0, consts: [[1, "header"], [1, "pointer", 3, "click"], ["type", "text", "name", "search", "placeholder", "Search.."], [1, "header-right"], [1, "pointer"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_1_listener() { return ctx.onHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_9_listener() { return ctx.onCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Shopping Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    background-color: #f1f1f1;\r\n    padding: 20px 10px;\r\n  }\r\n\r\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    float: left;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 12px;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    line-height: 25px;\r\n    border-radius: 4px;\r\n  }\r\n\r\n.header[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n  }\r\n\r\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n\r\n.header[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background-color: dodgerblue;\r\n    color: white;\r\n  }\r\n\r\n.header-right[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n\r\n@media screen and (max-width: 500px) {\r\n    .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      float: none;\r\n      display: block;\r\n      text-align: left;\r\n    }\r\n    .header-right[_ngcontent-%COMP%] {\r\n      float: none;\r\n    }\r\n  }\r\n.pointer[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\nbody[_ngcontent-%COMP%]{\r\n  background: #f2f2f2;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\ninput[type=text][_ngcontent-%COMP%] {\r\n  width: 130px;\r\n  height: 50px;\r\n  transition: width 0.4s ease-in-out;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:focus {\r\n  width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkRBQTZEO0FBQzdEO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7QUFFQSwyQkFBMkI7QUFDM0I7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0FBRUEsb0pBQW9KO0FBQ3BKO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtBQUVBLDhDQUE4QztBQUM5QztJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7QUFFQSxpQ0FBaUM7QUFDakM7SUFDRSw0QkFBNEI7SUFDNUIsWUFBWTtFQUNkO0FBRUEsd0NBQXdDO0FBQ3hDO0lBQ0UsWUFBWTtFQUNkO0FBRUEsdUhBQXVIO0FBQ3ZIO0lBQ0U7TUFDRSxXQUFXO01BQ1gsY0FBYztNQUNkLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsV0FBVztJQUNiO0VBQ0Y7QUFDQTtJQUNFLGVBQWU7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBRVosa0NBQWtDO0FBQ3BDO0FBRUEsOERBQThEO0FBQzlEO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZSB0aGUgaGVhZGVyIHdpdGggYSBncmV5IGJhY2tncm91bmQgYW5kIHNvbWUgcGFkZGluZyAqL1xyXG4uaGVhZGVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgaGVhZGVyIGxpbmtzICovXHJcbiAgLmhlYWRlciBhIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgbG9nbyBsaW5rIChub3RpY2UgdGhhdCB3ZSBzZXQgdGhlIHNhbWUgdmFsdWUgb2YgbGluZS1oZWlnaHQgYW5kIGZvbnQtc2l6ZSB0byBwcmV2ZW50IHRoZSBoZWFkZXIgdG8gaW5jcmVhc2Ugd2hlbiB0aGUgZm9udCBnZXRzIGJpZ2dlciAqL1xyXG4gIC5oZWFkZXIgYS5sb2dvIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAvKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igb24gbW91c2Utb3ZlciAqL1xyXG4gIC5oZWFkZXIgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgYWN0aXZlL2N1cnJlbnQgbGluayovXHJcbiAgLmhlYWRlciBhLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAvKiBGbG9hdCB0aGUgbGluayBzZWN0aW9uIHRvIHRoZSByaWdodCAqL1xyXG4gIC5oZWFkZXItcmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgbWVkaWEgcXVlcmllcyBmb3IgcmVzcG9uc2l2ZW5lc3MgLSB3aGVuIHRoZSBzY3JlZW4gaXMgNTAwcHggd2lkZSBvciBsZXNzLCBzdGFjayB0aGUgbGlua3Mgb24gdG9wIG9mIGVhY2ggb3RoZXIgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgLmhlYWRlciBhIHtcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1yaWdodCB7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAucG9pbnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuYm9keXtcclxuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4vKiBXaGVuIHRoZSBpbnB1dCBmaWVsZCBnZXRzIGZvY3VzLCBjaGFuZ2UgaXRzIHdpZHRoIHRvIDEwMCUgKi9cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XHJcbiAgd2lkdGg6IDUwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
    onHome() {
        this.router.navigate(['/home']);
    }
    onShop() {
        this.router.navigate(['/products']);
    }
    onp1() {
        this.router.navigate(['/product1']);
    }
    onp2() {
        this.router.navigate(['/product2']);
    }
    onp3() {
        this.router.navigate(['/product3']);
    }
    onp4() {
        this.router.navigate(['/product4']);
    }
    onp5() {
        this.router.navigate(['/product5']);
    }
    onp6() {
        this.router.navigate(['/product6']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 227, vars: 0, consts: [["lang", "zxx", 1, "no-js"], [1, "slider-area"], [1, "slider-active"], ["data-background", "assets/img/hero/h1_hero.jpg", 1, "single-slider", "slider-height"], [1, "container"], [1, "row", "d-flex", "align-items-center", "justify-content-between"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "d-none", "d-md-block"], ["data-animation", "bounceIn", "data-delay", ".4s", 1, "hero__img"], ["src", "assets/img/hero/hero_man.png", "alt", ""], [1, "col-xl-5", "col-lg-5", "col-md-5", "col-sm-8"], [1, "hero__caption"], ["data-animation", "fadeInRight", "data-delay", ".4s"], ["data-animation", "fadeInRight", "data-delay", ".6s"], ["data-animation", "fadeInRight", "data-delay", ".8s"], ["data-animation", "fadeInRight", "data-delay", "1s", 1, "hero__btn"], [1, "btn", "hero-btn", 3, "click"], [1, "category-area", "section-padding30"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12"], [1, "section-tittle", "text-center", "mb-85"], [1, "col-xl-4", "col-lg-6"], [1, "single-category", "mb-30"], [1, "category-img"], ["src", "assets/img/categori/cat1.jpg", "alt", ""], [1, "category-caption"], [1, "best"], ["href", "#"], [1, "collection"], [1, "category-img", "text-center"], ["src", "assets/img/categori/cat2.jpg", "alt", ""], ["src", "assets/img/categori/cat3.jpg", "alt", ""], [1, "latest-product-area", "padding-bottom"], [1, "row", "product-btn", "d-flex", "justify-content-end", "align-items-end"], [1, "col-xl-4", "col-lg-5", "col-md-5"], [1, "section-tittle", "mb-30"], [1, "col-xl-8", "col-lg-7", "col-md-7"], [1, "properties__button", "f-right"], ["id", "nav-tab", "role", "tablist", 1, "nav", "nav-tabs"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "nav-home", "role", "tabpanel", "aria-labelledby", "nav-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "col-xl-4", "col-lg-4", "col-md-6"], [1, "single-product", "mb-60"], [1, "product-img"], ["src", "assets/img/categori/product1.png", "alt", ""], [1, "new-product"], [1, "product-caption"], [1, "product-ratting"], [1, "far", "fa-star"], [1, "far", "fa-star", "low-star"], [1, "pointer", 3, "click"], [1, "price"], [1, "discount"], ["src", "assets/img/categori/product2.png", "alt", ""], ["src", "assets/img/categori/product3.png", "alt", ""], [1, "best-product-area", "lf-padding"], [1, "product-wrapper", "bg-height", 2, "background-image", "url('assets/img/categori/card.png')"], [1, "container", "position-relative"], [1, "row", "justify-content-between", "align-items-end"], [1, "product-man", "position-absolute", "d-none", "d-lg-block"], ["src", "assets/img/categori/card-man.png", "alt", ""], [1, "col-xl-2", "col-lg-2", "col-md-2", "d-none", "d-lg-block"], [1, "vertical-text"], [1, "col-xl-8", "col-lg-8"], [1, "best-product-caption"], [1, "black-btn", 3, "click"], [1, "shape", "bounce-animate", "d-none", "d-md-block"], ["src", "assets/img/categori/card-shape.png", "alt", ""], [1, "best-collection-area", "section-padding2"], [1, "row", "d-flex", "justify-content-between", "align-items-end"], [1, "best-left-cap"], [1, "btn", "shop1-btn", 3, "click"], [1, "best-left-img", "mb-30", "d-none", "d-sm-block"], ["src", "assets/img/collection/collection1.png", "alt", ""], [1, "col-xl-2", "col-lg-2", "d-none", "d-lg-block"], [1, "best-mid-img", "mb-30"], ["src", "assets/img/collection/collection2.png", "alt", ""], [1, "col-xl-4", "col-lg-6", "col-md-6"], [1, "best-right-cap"], [1, "best-single", "mb-30"], [1, "single-cap"], [1, "single-img"], ["src", "assets/img/collection/collection3.png", "alt", ""], [1, "single-cap", "active"], ["src", "assets/img/collection/collection4.png", "alt", ""], ["src", "assets/img/collection/collection5.png", "alt", ""], [1, "gallery-wrapper", "lf-padding"], [1, "gallery-area"], [1, "gallery-items"], ["src", "assets/img/gallery/gallery1.jpg", "alt", ""], ["src", "assets/img/gallery/gallery2.jpg", "alt", ""], ["src", "assets/img/gallery/gallery3.jpg", "alt", ""], ["src", "assets/img/gallery/gallery4.jpg", "alt", ""], ["src", "assets/img/gallery/gallery5.jpg", "alt", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "60% Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Winter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Best Cloth Collection By 2020!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_22_listener() { return ctx.onShop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Shop Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Shop by Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Womens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Best New Deals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "New Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Discount!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Winter Cloth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "New Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Mens Cloth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Best New Deals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "New Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "section", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Latest Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_96_listener() { return ctx.onp1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Men's Shorts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\u20B9120");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\u20B9180");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_116_listener() { return ctx.onp2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Green Hoddie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\u20B9499");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\u20B9599");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_139_listener() { return ctx.onp3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Full sleave Dress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "\u20B9299");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\u20B9499");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Mens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Find The Best Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " from Our Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Designers who are interesten creating state ofthe.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_165_listener() { return ctx.onShop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Shop Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Best Collection of This Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Designers who are interesten crea.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_178_listener() { return ctx.onShop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Shop Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Men's Winter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " Jacket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Men's Winter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Jacket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Men's Winter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Jacket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "img", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".pointer[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class LoginComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onLogin() {
        this.router.navigate(['/login']);
    }
    onSignup() {
        this.router.navigate(['/register']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 31, vars: 0, consts: [[1, "login_part", "section_padding"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-6"], [1, "login_part_text", "text-center"], [1, "login_part_text_iner"], [1, "btn_3", 3, "click"], [1, "login_part_form"], [1, "login_part_form_iner"], ["method", "post", "action", "/login", 1, "row", "contact_form"], [1, "col-md-12", "form-group", "p_star"], ["type", "text", "id", "uname", "name", "uname", "value", "", "placeholder", "Username", 1, "form-control"], ["type", "password", "id", "password", "name", "password", "value", "", "placeholder", "Password", 1, "form-control"], [1, "col-md-12", "form-group"], [1, "creat_account", "d-flex", "align-items-center"], ["type", "checkbox", "id", "f-option", "name", "selector"], ["for", "f-option"], ["type", "submit", "value", "submit", 1, "btn_3"], ["href", "#", 1, "lost_pass"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "New to our Shop?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_8_listener() { return ctx.onSignup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Create an Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Welcome Back ! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Please Log in now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " log in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".pointer[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/product-list/product1/product1.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/product-list/product1/product1.component.ts ***!
  \************************************************************************/
/*! exports provided: Product1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product1Component", function() { return Product1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class Product1Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onp1() {
        this.router.navigate(['/product1']);
    }
    onCart() {
        this.router.navigate(['/cart']);
    }
}
Product1Component.ɵfac = function Product1Component_Factory(t) { return new (t || Product1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
Product1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Product1Component, selectors: [["app-product1"]], decls: 52, vars: 0, consts: [["lang", "en"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "container"], [1, "card"], [1, "container-fliud"], [1, "wrapper", "row"], [1, "preview", "col-md-6"], [1, "preview-pic", "tab-content"], ["id", "pic-1", 1, "tab-pane", "active"], ["src", "assets/img/categori/product1.png"], [1, "details", "col-md-6"], [1, "product-title"], [1, "rating"], [1, "stars"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"], [1, "review-no"], [1, "product-description"], [1, "price"], [1, "vote"], [1, "sizes"], ["data-toggle", "tooltip", "title", "small", 1, "size"], ["data-toggle", "tooltip", "title", "medium", 1, "size"], ["data-toggle", "tooltip", "title", "large", 1, "size"], ["data-toggle", "tooltip", "title", "xtra large", 1, "size"], [1, "action"], ["type", "button", 1, "btn", "hero-btn"], ["type", "button", 1, "btn", "hero-btn", 3, "click"]], template: function Product1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Men's Shorts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Men's Shorts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "41 reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "current price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u20B9120");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "91%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " of buyers enjoyed this product! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "(87 votes)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "sizes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Product1Component_Template_button_click_50_listener() { return ctx.onCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: 'open sans';\r\n    overflow-x: hidden; }\r\nimg[_ngcontent-%COMP%] {\r\n    max-width: 100%; }\r\n.preview[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n@media screen and (max-width: 996px) {\r\n      .preview[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px; } }\r\n.preview-pic[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%] {\r\n    border: none;\r\n    margin-top: 15px; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      width: 18%;\r\n      margin-right: 2.5%; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n        display: block; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n        margin: 0; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\r\n        margin-right: 0; }\r\n.tab-content[_ngcontent-%COMP%] {\r\n    overflow: hidden; }\r\n.tab-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      animation-name: opacity;\r\n      animation-duration: .3s; }\r\n.card[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    background: #eee;\r\n    padding: 3em;\r\n    line-height: 1.5em; }\r\n@media screen and (min-width: 997px) {\r\n    .wrapper[_ngcontent-%COMP%] {\r\n      display: flex; } }\r\n.details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n.colors[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.product-title[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%], .colors[_ngcontent-%COMP%] {\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold; }\r\n.checked[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #ff9f1a; }\r\n.product-title[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%], .product-description[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .vote[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px; }\r\n.product-title[_ngcontent-%COMP%] {\r\n    margin-top: 0; }\r\n.size[_ngcontent-%COMP%] {\r\n    margin-right: 10px; }\r\n.size[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 40px; }\r\n.color[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n    height: 2em;\r\n    width: 2em;\r\n    border-radius: 2px; }\r\n.color[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 20px; }\r\n.add-to-cart[_ngcontent-%COMP%], .like[_ngcontent-%COMP%] {\r\n    background: #ff9f1a;\r\n    padding: 1.2em 1.5em;\r\n    border: none;\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    transition: background .3s ease; }\r\n.add-to-cart[_ngcontent-%COMP%]:hover, .like[_ngcontent-%COMP%]:hover {\r\n      background: #b36800;\r\n      color: #fff; }\r\n.not-available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    line-height: 2em; }\r\n.not-available[_ngcontent-%COMP%]:before {\r\n      font-family: fontawesome;\r\n      content: \"\\f00d\";\r\n      color: #fff; }\r\n.orange[_ngcontent-%COMP%] {\r\n    background: #ff9f1a; }\r\n.green[_ngcontent-%COMP%] {\r\n    background: #85ad00; }\r\n.blue[_ngcontent-%COMP%] {\r\n    background: #0076ad; }\r\n.tooltip-inner[_ngcontent-%COMP%] {\r\n    padding: 1.3em; }\r\n@keyframes opacity {\r\n    0% {\r\n      opacity: 0;\r\n      transform: scale(3); }\r\n    100% {\r\n      opacity: 1;\r\n      transform: scale(1); } }\n/*# sourceMappingURL=style.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdDEvcHJvZHVjdDEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esc0NBQXNDO0FBQ3RDO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQixFQUFFO0FBRXRCO0lBQ0UsZUFBZSxFQUFFO0FBRW5CO0lBSUUsYUFBYTtJQUtMLHNCQUFzQixFQUFFO0FBQ2hDO01BQ0U7UUFDRSxtQkFBbUIsRUFBRSxFQUFFO0FBRTdCO0lBSVUsWUFBWSxFQUFFO0FBRXhCO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0UsVUFBVTtNQUNWLGtCQUFrQixFQUFFO0FBQ3BCO1FBQ0UsZUFBZTtRQUNmLGNBQWMsRUFBRTtBQUNsQjtRQUNFLFVBQVU7UUFDVixTQUFTLEVBQUU7QUFDYjtRQUNFLGVBQWUsRUFBRTtBQUV2QjtJQUNFLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0UsV0FBVztNQUVILHVCQUF1QjtNQUV2Qix1QkFBdUIsRUFBRTtBQUVyQztJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQixFQUFFO0FBRXRCO0lBQ0U7TUFJRSxhQUFhLEVBQUUsRUFBRTtBQUVyQjtJQUlFLGFBQWE7SUFLTCxzQkFBc0IsRUFBRTtBQUVsQztJQUlVLFlBQVksRUFBRTtBQUV4QjtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUIsRUFBRTtBQUVyQjtJQUNFLGNBQWMsRUFBRTtBQUVsQjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsYUFBYSxFQUFFO0FBRWpCO0lBQ0Usa0JBQWtCLEVBQUU7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTtBQUV2QjtJQUNFLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUU7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUVILCtCQUErQixFQUFFO0FBQ3pDO01BQ0UsbUJBQW1CO01BQ25CLFdBQVcsRUFBRTtBQUVqQjtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBRTtBQUNsQjtNQUNFLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsV0FBVyxFQUFFO0FBRWpCO0lBQ0UsbUJBQW1CLEVBQUU7QUFFdkI7SUFDRSxtQkFBbUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsY0FBYyxFQUFFO0FBWWxCO0lBQ0U7TUFDRSxVQUFVO01BRUYsbUJBQW1CLEVBQUU7SUFDL0I7TUFDRSxVQUFVO01BRUYsbUJBQW1CLEVBQUUsRUFBRTtBQUVuQyxvQ0FBb0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0MS9wcm9kdWN0MS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKioqKioqKioqKioqKioqKmdsb2JhbHMqKioqKioqKioqKioqL1xyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cclxuICBcclxuICAucHJldmlldyB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk2cHgpIHtcclxuICAgICAgLnByZXZpZXcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH0gfVxyXG4gIFxyXG4gIC5wcmV2aWV3LXBpYyB7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTsgfVxyXG4gIFxyXG4gIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4OyB9XHJcbiAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkge1xyXG4gICAgICB3aWR0aDogMTglO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIuNSU7IH1cclxuICAgICAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSBhIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDsgfVxyXG4gICAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGk6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cclxuICBcclxuICAudGFiLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4gICAgLnRhYi1jb250ZW50IGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzOyB9XHJcbiAgXHJcbiAgLmNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBwYWRkaW5nOiAzZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07IH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTdweCkge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgZGlzcGxheTogZmxleDsgfSB9XHJcbiAgXHJcbiAgLmRldGFpbHMge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuICBcclxuICAuY29sb3JzIHtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxOyB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtdGl0bGUsIC5wcmljZSwgLnNpemVzLCAuY29sb3JzIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBVUFBFUkNBU0U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxyXG4gIFxyXG4gIC5jaGVja2VkLCAucHJpY2Ugc3BhbiB7XHJcbiAgICBjb2xvcjogI2ZmOWYxYTsgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LXRpdGxlLCAucmF0aW5nLCAucHJvZHVjdC1kZXNjcmlwdGlvbiwgLnByaWNlLCAudm90ZSwgLnNpemVzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cclxuICBcclxuICAucHJvZHVjdC10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwOyB9XHJcbiAgXHJcbiAgLnNpemUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XHJcbiAgICAuc2l6ZTpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7IH1cclxuICBcclxuICAuY29sb3Ige1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgfVxyXG4gICAgLmNvbG9yOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDsgfVxyXG4gIFxyXG4gIC5hZGQtdG8tY2FydCwgLmxpa2Uge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOWYxYTtcclxuICAgIHBhZGRpbmc6IDEuMmVtIDEuNWVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IFVQUEVSQ0FTRTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7IH1cclxuICAgIC5hZGQtdG8tY2FydDpob3ZlciwgLmxpa2U6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYjM2ODAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjsgfVxyXG4gIFxyXG4gIC5ub3QtYXZhaWxhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07IH1cclxuICAgIC5ub3QtYXZhaWxhYmxlOmJlZm9yZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcclxuICAgICAgY29udGVudDogXCJcXGYwMGRcIjtcclxuICAgICAgY29sb3I6ICNmZmY7IH1cclxuICBcclxuICAub3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjlmMWE7IH1cclxuICBcclxuICAuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzg1YWQwMDsgfVxyXG4gIFxyXG4gIC5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDc2YWQ7IH1cclxuICBcclxuICAudG9vbHRpcC1pbm5lciB7XHJcbiAgICBwYWRkaW5nOiAxLjNlbTsgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcbiAgXHJcbiAgLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Product1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product1',
                templateUrl: './product1.component.html',
                styleUrls: ['./product1.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/product-list/product10/product10.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/product-list/product10/product10.component.ts ***!
  \**************************************************************************/
/*! exports provided: Product10Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product10Component", function() { return Product10Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class Product10Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onp10() {
        this.router.navigate(['/product10']);
    }
    onCart() {
        this.router.navigate(['/cart']);
    }
}
Product10Component.ɵfac = function Product10Component_Factory(t) { return new (t || Product10Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
Product10Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Product10Component, selectors: [["app-product10"]], decls: 52, vars: 0, consts: [["lang", "en"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "container"], [1, "card"], [1, "container-fliud"], [1, "wrapper", "row"], [1, "preview", "col-md-6"], [1, "preview-pic", "tab-content"], ["id", "pic-1", 1, "tab-pane", "active"], ["src", "assets/img/categori/category_8.png"], [1, "details", "col-md-6"], [1, "product-title"], [1, "rating"], [1, "stars"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"], [1, "review-no"], [1, "product-description"], [1, "price"], [1, "vote"], [1, "sizes"], ["data-toggle", "tooltip", "title", "small", 1, "size"], ["data-toggle", "tooltip", "title", "medium", 1, "size"], ["data-toggle", "tooltip", "title", "large", 1, "size"], ["data-toggle", "tooltip", "title", "xtra large", 1, "size"], [1, "action"], ["type", "button", 1, "btn", "hero-btn"], ["type", "button", 1, "btn", "hero-btn", 3, "click"]], template: function Product10Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Men's Denim Coat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Men's Denim Coat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "41 reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "current price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u20B91099");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "91%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " of buyers enjoyed this product! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "(87 votes)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "sizes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Product10Component_Template_button_click_50_listener() { return ctx.onCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: 'open sans';\r\n    overflow-x: hidden; }\r\nimg[_ngcontent-%COMP%] {\r\n    max-width: 100%; }\r\n.preview[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n@media screen and (max-width: 996px) {\r\n      .preview[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px; } }\r\n.preview-pic[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%] {\r\n    border: none;\r\n    margin-top: 15px; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      width: 18%;\r\n      margin-right: 2.5%; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n        display: block; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n        margin: 0; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\r\n        margin-right: 0; }\r\n.tab-content[_ngcontent-%COMP%] {\r\n    overflow: hidden; }\r\n.tab-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      animation-name: opacity;\r\n      animation-duration: .3s; }\r\n.card[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    background: #eee;\r\n    padding: 3em;\r\n    line-height: 1.5em; }\r\n@media screen and (min-width: 997px) {\r\n    .wrapper[_ngcontent-%COMP%] {\r\n      display: flex; } }\r\n.details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n.colors[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.product-title[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%], .colors[_ngcontent-%COMP%] {\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold; }\r\n.checked[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #ff9f1a; }\r\n.product-title[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%], .product-description[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .vote[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px; }\r\n.product-title[_ngcontent-%COMP%] {\r\n    margin-top: 0; }\r\n.size[_ngcontent-%COMP%] {\r\n    margin-right: 10px; }\r\n.size[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 40px; }\r\n.color[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n    height: 2em;\r\n    width: 2em;\r\n    border-radius: 2px; }\r\n.color[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 20px; }\r\n.add-to-cart[_ngcontent-%COMP%], .like[_ngcontent-%COMP%] {\r\n    background: #ff9f1a;\r\n    padding: 1.2em 1.5em;\r\n    border: none;\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    transition: background .3s ease; }\r\n.add-to-cart[_ngcontent-%COMP%]:hover, .like[_ngcontent-%COMP%]:hover {\r\n      background: #b36800;\r\n      color: #fff; }\r\n.not-available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    line-height: 2em; }\r\n.not-available[_ngcontent-%COMP%]:before {\r\n      font-family: fontawesome;\r\n      content: \"\\f00d\";\r\n      color: #fff; }\r\n.orange[_ngcontent-%COMP%] {\r\n    background: #ff9f1a; }\r\n.green[_ngcontent-%COMP%] {\r\n    background: #85ad00; }\r\n.blue[_ngcontent-%COMP%] {\r\n    background: #0076ad; }\r\n.tooltip-inner[_ngcontent-%COMP%] {\r\n    padding: 1.3em; }\r\n@keyframes opacity {\r\n    0% {\r\n      opacity: 0;\r\n      transform: scale(3); }\r\n    100% {\r\n      opacity: 1;\r\n      transform: scale(1); } }\n/*# sourceMappingURL=style.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdDEwL3Byb2R1Y3QxMC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxzQ0FBc0M7QUFDdEM7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCLEVBQUU7QUFFdEI7SUFDRSxlQUFlLEVBQUU7QUFFbkI7SUFJRSxhQUFhO0lBS0wsc0JBQXNCLEVBQUU7QUFDaEM7TUFDRTtRQUNFLG1CQUFtQixFQUFFLEVBQUU7QUFFN0I7SUFJVSxZQUFZLEVBQUU7QUFFeEI7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCLEVBQUU7QUFDbEI7TUFDRSxVQUFVO01BQ1Ysa0JBQWtCLEVBQUU7QUFDcEI7UUFDRSxlQUFlO1FBQ2YsY0FBYyxFQUFFO0FBQ2xCO1FBQ0UsVUFBVTtRQUNWLFNBQVMsRUFBRTtBQUNiO1FBQ0UsZUFBZSxFQUFFO0FBRXZCO0lBQ0UsZ0JBQWdCLEVBQUU7QUFDbEI7TUFDRSxXQUFXO01BRUgsdUJBQXVCO01BRXZCLHVCQUF1QixFQUFFO0FBRXJDO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCLEVBQUU7QUFFdEI7SUFDRTtNQUlFLGFBQWEsRUFBRSxFQUFFO0FBRXJCO0lBSUUsYUFBYTtJQUtMLHNCQUFzQixFQUFFO0FBRWxDO0lBSVUsWUFBWSxFQUFFO0FBRXhCO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQixFQUFFO0FBRXJCO0lBQ0UsY0FBYyxFQUFFO0FBRWxCO0lBQ0UsbUJBQW1CLEVBQUU7QUFFdkI7SUFDRSxhQUFhLEVBQUU7QUFFakI7SUFDRSxrQkFBa0IsRUFBRTtBQUNwQjtNQUNFLGlCQUFpQixFQUFFO0FBRXZCO0lBQ0UscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0IsRUFBRTtBQUNwQjtNQUNFLGlCQUFpQixFQUFFO0FBRXZCO0lBQ0UsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixXQUFXO0lBRUgsK0JBQStCLEVBQUU7QUFDekM7TUFDRSxtQkFBbUI7TUFDbkIsV0FBVyxFQUFFO0FBRWpCO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0Usd0JBQXdCO01BQ3hCLGdCQUFnQjtNQUNoQixXQUFXLEVBQUU7QUFFakI7SUFDRSxtQkFBbUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsbUJBQW1CLEVBQUU7QUFFdkI7SUFDRSxjQUFjLEVBQUU7QUFZbEI7SUFDRTtNQUNFLFVBQVU7TUFFRixtQkFBbUIsRUFBRTtJQUMvQjtNQUNFLFVBQVU7TUFFRixtQkFBbUIsRUFBRSxFQUFFO0FBRW5DLG9DQUFvQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QxMC9wcm9kdWN0MTAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKioqKioqKioqKioqKioqKipnbG9iYWxzKioqKioqKioqKioqKi9cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ29wZW4gc2Fucyc7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IH1cclxuICBcclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyB9XHJcbiAgXHJcbiAgLnByZXZpZXcge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5NnB4KSB7XHJcbiAgICAgIC5wcmV2aWV3IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9IH1cclxuICBcclxuICAucHJldmlldy1waWMge1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgIC13ZWJraXQtZmxleC1ncm93OiAxO1xyXG4gICAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7IH1cclxuICBcclxuICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDsgfVxyXG4gICAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIHtcclxuICAgICAgd2lkdGg6IDE4JTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyLjUlOyB9XHJcbiAgICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxyXG4gICAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkgYSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7IH1cclxuICAgICAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XHJcbiAgXHJcbiAgLnRhYi1jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cclxuICAgIC50YWItY29udGVudCBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogb3BhY2l0eTtcclxuICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogb3BhY2l0eTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IC4zcztcclxuICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IC4zczsgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgcGFkZGluZzogM2VtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtOyB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTk3cHgpIHtcclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7IH0gfVxyXG4gIFxyXG4gIC5kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XHJcbiAgXHJcbiAgLmNvbG9ycyB7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTsgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LXRpdGxlLCAucHJpY2UsIC5zaXplcywgLmNvbG9ycyB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogVVBQRVJDQVNFO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cclxuICBcclxuICAuY2hlY2tlZCwgLnByaWNlIHNwYW4ge1xyXG4gICAgY29sb3I6ICNmZjlmMWE7IH1cclxuICBcclxuICAucHJvZHVjdC10aXRsZSwgLnJhdGluZywgLnByb2R1Y3QtZGVzY3JpcHRpb24sIC5wcmljZSwgLnZvdGUsIC5zaXplcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDsgfVxyXG4gIFxyXG4gIC5zaXplIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxyXG4gICAgLnNpemU6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4OyB9XHJcbiAgXHJcbiAgLmNvbG9yIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7IH1cclxuICAgIC5jb2xvcjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7IH1cclxuICBcclxuICAuYWRkLXRvLWNhcnQsIC5saWtlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjlmMWE7XHJcbiAgICBwYWRkaW5nOiAxLjJlbSAxLjVlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBVUFBFUkNBU0U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcyBlYXNlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcyBlYXNlOyB9XHJcbiAgICAuYWRkLXRvLWNhcnQ6aG92ZXIsIC5saWtlOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2IzNjgwMDtcclxuICAgICAgY29sb3I6ICNmZmY7IH1cclxuICBcclxuICAubm90LWF2YWlsYWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMmVtOyB9XHJcbiAgICAubm90LWF2YWlsYWJsZTpiZWZvcmUge1xyXG4gICAgICBmb250LWZhbWlseTogZm9udGF3ZXNvbWU7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXFxmMDBkXCI7XHJcbiAgICAgIGNvbG9yOiAjZmZmOyB9XHJcbiAgXHJcbiAgLm9yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY5ZjFhOyB9XHJcbiAgXHJcbiAgLmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQ6ICM4NWFkMDA7IH1cclxuICBcclxuICAuYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3NmFkOyB9XHJcbiAgXHJcbiAgLnRvb2x0aXAtaW5uZXIge1xyXG4gICAgcGFkZGluZzogMS4zZW07IH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgb3BhY2l0eSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgzKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDMpOyB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgb3BhY2l0eSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgzKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDMpOyB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxyXG4gIFxyXG4gIC8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Product10Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product10',
                templateUrl: './product10.component.html',
                styleUrls: ['./product10.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/product-list/product11/product11.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/product-list/product11/product11.component.ts ***!
  \**************************************************************************/
/*! exports provided: Product11Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product11Component", function() { return Product11Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class Product11Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onp11() {
        this.router.navigate(['/product11']);
    }
    onCart() {
        this.router.navigate(['/cart']);
    }
}
Product11Component.ɵfac = function Product11Component_Factory(t) { return new (t || Product11Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
Product11Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Product11Component, selectors: [["app-product11"]], decls: 52, vars: 0, consts: [["lang", "en"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "container"], [1, "card"], [1, "container-fliud"], [1, "wrapper", "row"], [1, "preview", "col-md-6"], [1, "preview-pic", "tab-content"], ["id", "pic-1", 1, "tab-pane", "active"], ["src", "assets/img/categori/category_9.png"], [1, "details", "col-md-6"], [1, "product-title"], [1, "rating"], [1, "stars"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"], [1, "review-no"], [1, "product-description"], [1, "price"], [1, "vote"], [1, "sizes"], ["data-toggle", "tooltip", "title", "small", 1, "size"], ["data-toggle", "tooltip", "title", "medium", 1, "size"], ["data-toggle", "tooltip", "title", "large", 1, "size"], ["data-toggle", "tooltip", "title", "xtra large", 1, "size"], [1, "action"], ["type", "button", 1, "btn", "hero-btn"], ["type", "button", 1, "btn", "hero-btn", 3, "click"]], template: function Product11Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nike Red Shoes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nike Red Shoes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "41 reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "current price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u20B93099");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "91%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " of buyers enjoyed this product! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "(87 votes)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "sizes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Product11Component_Template_button_click_50_listener() { return ctx.onCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: 'open sans';\r\n    overflow-x: hidden; }\r\nimg[_ngcontent-%COMP%] {\r\n    max-width: 100%; }\r\n.preview[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n@media screen and (max-width: 996px) {\r\n      .preview[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px; } }\r\n.preview-pic[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%] {\r\n    border: none;\r\n    margin-top: 15px; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      width: 18%;\r\n      margin-right: 2.5%; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n        display: block; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n        margin: 0; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\r\n        margin-right: 0; }\r\n.tab-content[_ngcontent-%COMP%] {\r\n    overflow: hidden; }\r\n.tab-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      animation-name: opacity;\r\n      animation-duration: .3s; }\r\n.card[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    background: #eee;\r\n    padding: 3em;\r\n    line-height: 1.5em; }\r\n@media screen and (min-width: 997px) {\r\n    .wrapper[_ngcontent-%COMP%] {\r\n      display: flex; } }\r\n.details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n.colors[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.product-title[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%], .colors[_ngcontent-%COMP%] {\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold; }\r\n.checked[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #ff9f1a; }\r\n.product-title[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%], .product-description[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .vote[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px; }\r\n.product-title[_ngcontent-%COMP%] {\r\n    margin-top: 0; }\r\n.size[_ngcontent-%COMP%] {\r\n    margin-right: 10px; }\r\n.size[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 40px; }\r\n.color[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n    height: 2em;\r\n    width: 2em;\r\n    border-radius: 2px; }\r\n.color[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 20px; }\r\n.add-to-cart[_ngcontent-%COMP%], .like[_ngcontent-%COMP%] {\r\n    background: #ff9f1a;\r\n    padding: 1.2em 1.5em;\r\n    border: none;\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    transition: background .3s ease; }\r\n.add-to-cart[_ngcontent-%COMP%]:hover, .like[_ngcontent-%COMP%]:hover {\r\n      background: #b36800;\r\n      color: #fff; }\r\n.not-available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    line-height: 2em; }\r\n.not-available[_ngcontent-%COMP%]:before {\r\n      font-family: fontawesome;\r\n      content: \"\\f00d\";\r\n      color: #fff; }\r\n.orange[_ngcontent-%COMP%] {\r\n    background: #ff9f1a; }\r\n.green[_ngcontent-%COMP%] {\r\n    background: #85ad00; }\r\n.blue[_ngcontent-%COMP%] {\r\n    background: #0076ad; }\r\n.tooltip-inner[_ngcontent-%COMP%] {\r\n    padding: 1.3em; }\r\n@keyframes opacity {\r\n    0% {\r\n      opacity: 0;\r\n      transform: scale(3); }\r\n    100% {\r\n      opacity: 1;\r\n      transform: scale(1); } }\n/*# sourceMappingURL=style.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdDExL3Byb2R1Y3QxMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxzQ0FBc0M7QUFDdEM7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCLEVBQUU7QUFFdEI7SUFDRSxlQUFlLEVBQUU7QUFFbkI7SUFJRSxhQUFhO0lBS0wsc0JBQXNCLEVBQUU7QUFDaEM7TUFDRTtRQUNFLG1CQUFtQixFQUFFLEVBQUU7QUFFN0I7SUFJVSxZQUFZLEVBQUU7QUFFeEI7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCLEVBQUU7QUFDbEI7TUFDRSxVQUFVO01BQ1Ysa0JBQWtCLEVBQUU7QUFDcEI7UUFDRSxlQUFlO1FBQ2YsY0FBYyxFQUFFO0FBQ2xCO1FBQ0UsVUFBVTtRQUNWLFNBQVMsRUFBRTtBQUNiO1FBQ0UsZUFBZSxFQUFFO0FBRXZCO0lBQ0UsZ0JBQWdCLEVBQUU7QUFDbEI7TUFDRSxXQUFXO01BRUgsdUJBQXVCO01BRXZCLHVCQUF1QixFQUFFO0FBRXJDO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCLEVBQUU7QUFFdEI7SUFDRTtNQUlFLGFBQWEsRUFBRSxFQUFFO0FBRXJCO0lBSUUsYUFBYTtJQUtMLHNCQUFzQixFQUFFO0FBRWxDO0lBSVUsWUFBWSxFQUFFO0FBRXhCO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQixFQUFFO0FBRXJCO0lBQ0UsY0FBYyxFQUFFO0FBRWxCO0lBQ0UsbUJBQW1CLEVBQUU7QUFFdkI7SUFDRSxhQUFhLEVBQUU7QUFFakI7SUFDRSxrQkFBa0IsRUFBRTtBQUNwQjtNQUNFLGlCQUFpQixFQUFFO0FBRXZCO0lBQ0UscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0IsRUFBRTtBQUNwQjtNQUNFLGlCQUFpQixFQUFFO0FBRXZCO0lBQ0UsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixXQUFXO0lBRUgsK0JBQStCLEVBQUU7QUFDekM7TUFDRSxtQkFBbUI7TUFDbkIsV0FBVyxFQUFFO0FBRWpCO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0Usd0JBQXdCO01BQ3hCLGdCQUFnQjtNQUNoQixXQUFXLEVBQUU7QUFFakI7SUFDRSxtQkFBbUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsbUJBQW1CLEVBQUU7QUFFdkI7SUFDRSxjQUFjLEVBQUU7QUFZbEI7SUFDRTtNQUNFLFVBQVU7TUFFRixtQkFBbUIsRUFBRTtJQUMvQjtNQUNFLFVBQVU7TUFFRixtQkFBbUIsRUFBRSxFQUFFO0FBRW5DLG9DQUFvQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QxMS9wcm9kdWN0MTEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKioqKioqKioqKioqKioqKipnbG9iYWxzKioqKioqKioqKioqKi9cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ29wZW4gc2Fucyc7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IH1cclxuICBcclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyB9XHJcbiAgXHJcbiAgLnByZXZpZXcge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5NnB4KSB7XHJcbiAgICAgIC5wcmV2aWV3IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9IH1cclxuICBcclxuICAucHJldmlldy1waWMge1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgIC13ZWJraXQtZmxleC1ncm93OiAxO1xyXG4gICAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7IH1cclxuICBcclxuICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDsgfVxyXG4gICAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIHtcclxuICAgICAgd2lkdGg6IDE4JTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyLjUlOyB9XHJcbiAgICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxyXG4gICAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkgYSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7IH1cclxuICAgICAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XHJcbiAgXHJcbiAgLnRhYi1jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cclxuICAgIC50YWItY29udGVudCBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogb3BhY2l0eTtcclxuICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogb3BhY2l0eTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IC4zcztcclxuICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IC4zczsgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgcGFkZGluZzogM2VtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtOyB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTk3cHgpIHtcclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7IH0gfVxyXG4gIFxyXG4gIC5kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XHJcbiAgXHJcbiAgLmNvbG9ycyB7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTsgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LXRpdGxlLCAucHJpY2UsIC5zaXplcywgLmNvbG9ycyB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogVVBQRVJDQVNFO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cclxuICBcclxuICAuY2hlY2tlZCwgLnByaWNlIHNwYW4ge1xyXG4gICAgY29sb3I6ICNmZjlmMWE7IH1cclxuICBcclxuICAucHJvZHVjdC10aXRsZSwgLnJhdGluZywgLnByb2R1Y3QtZGVzY3JpcHRpb24sIC5wcmljZSwgLnZvdGUsIC5zaXplcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDsgfVxyXG4gIFxyXG4gIC5zaXplIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxyXG4gICAgLnNpemU6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4OyB9XHJcbiAgXHJcbiAgLmNvbG9yIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7IH1cclxuICAgIC5jb2xvcjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7IH1cclxuICBcclxuICAuYWRkLXRvLWNhcnQsIC5saWtlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjlmMWE7XHJcbiAgICBwYWRkaW5nOiAxLjJlbSAxLjVlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBVUFBFUkNBU0U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcyBlYXNlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcyBlYXNlOyB9XHJcbiAgICAuYWRkLXRvLWNhcnQ6aG92ZXIsIC5saWtlOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2IzNjgwMDtcclxuICAgICAgY29sb3I6ICNmZmY7IH1cclxuICBcclxuICAubm90LWF2YWlsYWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMmVtOyB9XHJcbiAgICAubm90LWF2YWlsYWJsZTpiZWZvcmUge1xyXG4gICAgICBmb250LWZhbWlseTogZm9udGF3ZXNvbWU7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXFxmMDBkXCI7XHJcbiAgICAgIGNvbG9yOiAjZmZmOyB9XHJcbiAgXHJcbiAgLm9yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY5ZjFhOyB9XHJcbiAgXHJcbiAgLmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQ6ICM4NWFkMDA7IH1cclxuICBcclxuICAuYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3NmFkOyB9XHJcbiAgXHJcbiAgLnRvb2x0aXAtaW5uZXIge1xyXG4gICAgcGFkZGluZzogMS4zZW07IH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgb3BhY2l0eSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgzKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDMpOyB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgb3BhY2l0eSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgzKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDMpOyB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxyXG4gIFxyXG4gIC8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Product11Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product11',
                templateUrl: './product11.component.html',
                styleUrls: ['./product11.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/product-list/product12/product12.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/product-list/product12/product12.component.ts ***!
  \**************************************************************************/
/*! exports provided: Product12Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product12Component", function() { return Product12Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class Product12Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onp12() {
        this.router.navigate(['/product12']);
    }
    onCart() {
        this.router.navigate(['/cart']);
    }
}
Product12Component.ɵfac = function Product12Component_Factory(t) { return new (t || Product12Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
Product12Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Product12Component, selectors: [["app-product12"]], decls: 52, vars: 0, consts: [["lang", "en"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "container"], [1, "card"], [1, "container-fliud"], [1, "wrapper", "row"], [1, "preview", "col-md-6"], [1, "preview-pic", "tab-content"], ["id", "pic-1", 1, "tab-pane", "active"], ["src", "assets/img/categori/category_6.png"], [1, "details", "col-md-6"], [1, "product-title"], [1, "rating"], [1, "stars"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"], [1, "review-no"], [1, "product-description"], [1, "price"], [1, "vote"], [1, "sizes"], ["data-toggle", "tooltip", "title", "small", 1, "size"], ["data-toggle", "tooltip", "title", "medium", 1, "size"], ["data-toggle", "tooltip", "title", "large", 1, "size"], ["data-toggle", "tooltip", "title", "xtra large", 1, "size"], [1, "action"], ["type", "button", 1, "btn", "hero-btn"], ["type", "button", 1, "btn", "hero-btn", 3, "click"]], template: function Product12Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Military Gray T-shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Military Gray T-shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "41 reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "current price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u20B9599");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "91%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " of buyers enjoyed this product! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "(87 votes)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "sizes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Product12Component_Template_button_click_50_listener() { return ctx.onCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: 'open sans';\r\n    overflow-x: hidden; }\r\nimg[_ngcontent-%COMP%] {\r\n    max-width: 100%; }\r\n.preview[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n@media screen and (max-width: 996px) {\r\n      .preview[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px; } }\r\n.preview-pic[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%] {\r\n    border: none;\r\n    margin-top: 15px; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      width: 18%;\r\n      margin-right: 2.5%; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n        display: block; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n        margin: 0; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\r\n        margin-right: 0; }\r\n.tab-content[_ngcontent-%COMP%] {\r\n    overflow: hidden; }\r\n.tab-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      animation-name: opacity;\r\n      animation-duration: .3s; }\r\n.card[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    background: #eee;\r\n    padding: 3em;\r\n    line-height: 1.5em; }\r\n@media screen and (min-width: 997px) {\r\n    .wrapper[_ngcontent-%COMP%] {\r\n      display: flex; } }\r\n.details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n.colors[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.product-title[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%], .colors[_ngcontent-%COMP%] {\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold; }\r\n.checked[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #ff9f1a; }\r\n.product-title[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%], .product-description[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .vote[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px; }\r\n.product-title[_ngcontent-%COMP%] {\r\n    margin-top: 0; }\r\n.size[_ngcontent-%COMP%] {\r\n    margin-right: 10px; }\r\n.size[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 40px; }\r\n.color[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n    height: 2em;\r\n    width: 2em;\r\n    border-radius: 2px; }\r\n.color[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 20px; }\r\n.add-to-cart[_ngcontent-%COMP%], .like[_ngcontent-%COMP%] {\r\n    background: #ff9f1a;\r\n    padding: 1.2em 1.5em;\r\n    border: none;\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    transition: background .3s ease; }\r\n.add-to-cart[_ngcontent-%COMP%]:hover, .like[_ngcontent-%COMP%]:hover {\r\n      background: #b36800;\r\n      color: #fff; }\r\n.not-available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    line-height: 2em; }\r\n.not-available[_ngcontent-%COMP%]:before {\r\n      font-family: fontawesome;\r\n      content: \"\\f00d\";\r\n      color: #fff; }\r\n.orange[_ngcontent-%COMP%] {\r\n    background: #ff9f1a; }\r\n.green[_ngcontent-%COMP%] {\r\n    background: #85ad00; }\r\n.blue[_ngcontent-%COMP%] {\r\n    background: #0076ad; }\r\n.tooltip-inner[_ngcontent-%COMP%] {\r\n    padding: 1.3em; }\r\n@keyframes opacity {\r\n    0% {\r\n      opacity: 0;\r\n      transform: scale(3); }\r\n    100% {\r\n      opacity: 1;\r\n      transform: scale(1); } }\n/*# sourceMappingURL=style.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdDEyL3Byb2R1Y3QxMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxzQ0FBc0M7QUFDdEM7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCLEVBQUU7QUFFdEI7SUFDRSxlQUFlLEVBQUU7QUFFbkI7SUFJRSxhQUFhO0lBS0wsc0JBQXNCLEVBQUU7QUFDaEM7TUFDRTtRQUNFLG1CQUFtQixFQUFFLEVBQUU7QUFFN0I7SUFJVSxZQUFZLEVBQUU7QUFFeEI7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCLEVBQUU7QUFDbEI7TUFDRSxVQUFVO01BQ1Ysa0JBQWtCLEVBQUU7QUFDcEI7UUFDRSxlQUFlO1FBQ2YsY0FBYyxFQUFFO0FBQ2xCO1FBQ0UsVUFBVTtRQUNWLFNBQVMsRUFBRTtBQUNiO1FBQ0UsZUFBZSxFQUFFO0FBRXZCO0lBQ0UsZ0JBQWdCLEVBQUU7QUFDbEI7TUFDRSxXQUFXO01BRUgsdUJBQXVCO01BRXZCLHVCQUF1QixFQUFFO0FBRXJDO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCLEVBQUU7QUFFdEI7SUFDRTtNQUlFLGFBQWEsRUFBRSxFQUFFO0FBRXJCO0lBSUUsYUFBYTtJQUtMLHNCQUFzQixFQUFFO0FBRWxDO0lBSVUsWUFBWSxFQUFFO0FBRXhCO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQixFQUFFO0FBRXJCO0lBQ0UsY0FBYyxFQUFFO0FBRWxCO0lBQ0UsbUJBQW1CLEVBQUU7QUFFdkI7SUFDRSxhQUFhLEVBQUU7QUFFakI7SUFDRSxrQkFBa0IsRUFBRTtBQUNwQjtNQUNFLGlCQUFpQixFQUFFO0FBRXZCO0lBQ0UscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0IsRUFBRTtBQUNwQjtNQUNFLGlCQUFpQixFQUFFO0FBRXZCO0lBQ0UsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixXQUFXO0lBRUgsK0JBQStCLEVBQUU7QUFDekM7TUFDRSxtQkFBbUI7TUFDbkIsV0FBVyxFQUFFO0FBRWpCO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0Usd0JBQXdCO01BQ3hCLGdCQUFnQjtNQUNoQixXQUFXLEVBQUU7QUFFakI7SUFDRSxtQkFBbUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsbUJBQW1CLEVBQUU7QUFFdkI7SUFDRSxjQUFjLEVBQUU7QUFZbEI7SUFDRTtNQUNFLFVBQVU7TUFFRixtQkFBbUIsRUFBRTtJQUMvQjtNQUNFLFVBQVU7TUFFRixtQkFBbUIsRUFBRSxFQUFFO0FBRW5DLG9DQUFvQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QxMi9wcm9kdWN0MTIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKioqKioqKioqKioqKioqKipnbG9iYWxzKioqKioqKioqKioqKi9cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ29wZW4gc2Fucyc7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IH1cclxuICBcclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyB9XHJcbiAgXHJcbiAgLnByZXZpZXcge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5NnB4KSB7XHJcbiAgICAgIC5wcmV2aWV3IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9IH1cclxuICBcclxuICAucHJldmlldy1waWMge1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgIC13ZWJraXQtZmxleC1ncm93OiAxO1xyXG4gICAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7IH1cclxuICBcclxuICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDsgfVxyXG4gICAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIHtcclxuICAgICAgd2lkdGg6IDE4JTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyLjUlOyB9XHJcbiAgICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxyXG4gICAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkgYSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7IH1cclxuICAgICAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XHJcbiAgXHJcbiAgLnRhYi1jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cclxuICAgIC50YWItY29udGVudCBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogb3BhY2l0eTtcclxuICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogb3BhY2l0eTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IC4zcztcclxuICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IC4zczsgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgcGFkZGluZzogM2VtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtOyB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTk3cHgpIHtcclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7IH0gfVxyXG4gIFxyXG4gIC5kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XHJcbiAgXHJcbiAgLmNvbG9ycyB7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTsgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LXRpdGxlLCAucHJpY2UsIC5zaXplcywgLmNvbG9ycyB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogVVBQRVJDQVNFO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cclxuICBcclxuICAuY2hlY2tlZCwgLnByaWNlIHNwYW4ge1xyXG4gICAgY29sb3I6ICNmZjlmMWE7IH1cclxuICBcclxuICAucHJvZHVjdC10aXRsZSwgLnJhdGluZywgLnByb2R1Y3QtZGVzY3JpcHRpb24sIC5wcmljZSwgLnZvdGUsIC5zaXplcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDsgfVxyXG4gIFxyXG4gIC5zaXplIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxyXG4gICAgLnNpemU6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4OyB9XHJcbiAgXHJcbiAgLmNvbG9yIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7IH1cclxuICAgIC5jb2xvcjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7IH1cclxuICBcclxuICAuYWRkLXRvLWNhcnQsIC5saWtlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjlmMWE7XHJcbiAgICBwYWRkaW5nOiAxLjJlbSAxLjVlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBVUFBFUkNBU0U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcyBlYXNlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcyBlYXNlOyB9XHJcbiAgICAuYWRkLXRvLWNhcnQ6aG92ZXIsIC5saWtlOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2IzNjgwMDtcclxuICAgICAgY29sb3I6ICNmZmY7IH1cclxuICBcclxuICAubm90LWF2YWlsYWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMmVtOyB9XHJcbiAgICAubm90LWF2YWlsYWJsZTpiZWZvcmUge1xyXG4gICAgICBmb250LWZhbWlseTogZm9udGF3ZXNvbWU7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXFxmMDBkXCI7XHJcbiAgICAgIGNvbG9yOiAjZmZmOyB9XHJcbiAgXHJcbiAgLm9yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY5ZjFhOyB9XHJcbiAgXHJcbiAgLmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQ6ICM4NWFkMDA7IH1cclxuICBcclxuICAuYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3NmFkOyB9XHJcbiAgXHJcbiAgLnRvb2x0aXAtaW5uZXIge1xyXG4gICAgcGFkZGluZzogMS4zZW07IH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgb3BhY2l0eSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgzKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDMpOyB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgb3BhY2l0eSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgzKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDMpOyB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxyXG4gIFxyXG4gIC8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Product12Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product12',
                templateUrl: './product12.component.html',
                styleUrls: ['./product12.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/product-list/product2/product2.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/product-list/product2/product2.component.ts ***!
  \************************************************************************/
/*! exports provided: Product2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product2Component", function() { return Product2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class Product2Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onp2() {
        this.router.navigate(['/product2']);
    }
    onCart() {
        this.router.navigate(['/cart']);
    }
}
Product2Component.ɵfac = function Product2Component_Factory(t) { return new (t || Product2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
Product2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Product2Component, selectors: [["app-product2"]], decls: 52, vars: 0, consts: [["lang", "en"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "container"], [1, "card"], [1, "container-fliud"], [1, "wrapper", "row"], [1, "preview", "col-md-6"], [1, "preview-pic", "tab-content"], ["id", "pic-1", 1, "tab-pane", "active"], ["src", "assets/img/categori/product2.png"], [1, "details", "col-md-6"], [1, "product-title"], [1, "rating"], [1, "stars"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"], [1, "review-no"], [1, "product-description"], [1, "price"], [1, "vote"], [1, "sizes"], ["data-toggle", "tooltip", "title", "small", 1, "size"], ["data-toggle", "tooltip", "title", "medium", 1, "size"], ["data-toggle", "tooltip", "title", "large", 1, "size"], ["data-toggle", "tooltip", "title", "xtra large", 1, "size"], [1, "action"], ["type", "button", 1, "btn", "hero-btn"], ["type", "button", 1, "btn", "hero-btn", 3, "click"]], template: function Product2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Green Hoddie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Green Hoddie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "41 reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "current price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u20B9499");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "91%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " of buyers enjoyed this product! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "(87 votes)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "sizes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Product2Component_Template_button_click_50_listener() { return ctx.onCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: 'open sans';\r\n    overflow-x: hidden; }\r\nimg[_ngcontent-%COMP%] {\r\n    max-width: 100%; }\r\n.preview[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n@media screen and (max-width: 996px) {\r\n      .preview[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px; } }\r\n.preview-pic[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%] {\r\n    border: none;\r\n    margin-top: 15px; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      width: 18%;\r\n      margin-right: 2.5%; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n        display: block; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n        margin: 0; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\r\n        margin-right: 0; }\r\n.tab-content[_ngcontent-%COMP%] {\r\n    overflow: hidden; }\r\n.tab-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      animation-name: opacity;\r\n      animation-duration: .3s; }\r\n.card[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    background: #eee;\r\n    padding: 3em;\r\n    line-height: 1.5em; }\r\n@media screen and (min-width: 997px) {\r\n    .wrapper[_ngcontent-%COMP%] {\r\n      display: flex; } }\r\n.details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n.colors[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.product-title[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%], .colors[_ngcontent-%COMP%] {\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold; }\r\n.checked[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #ff9f1a; }\r\n.product-title[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%], .product-description[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .vote[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px; }\r\n.product-title[_ngcontent-%COMP%] {\r\n    margin-top: 0; }\r\n.size[_ngcontent-%COMP%] {\r\n    margin-right: 10px; }\r\n.size[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 40px; }\r\n.color[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n    height: 2em;\r\n    width: 2em;\r\n    border-radius: 2px; }\r\n.color[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 20px; }\r\n.add-to-cart[_ngcontent-%COMP%], .like[_ngcontent-%COMP%] {\r\n    background: #ff9f1a;\r\n    padding: 1.2em 1.5em;\r\n    border: none;\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    transition: background .3s ease; }\r\n.add-to-cart[_ngcontent-%COMP%]:hover, .like[_ngcontent-%COMP%]:hover {\r\n      background: #b36800;\r\n      color: #fff; }\r\n.not-available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    line-height: 2em; }\r\n.not-available[_ngcontent-%COMP%]:before {\r\n      font-family: fontawesome;\r\n      content: \"\\f00d\";\r\n      color: #fff; }\r\n.orange[_ngcontent-%COMP%] {\r\n    background: #ff9f1a; }\r\n.green[_ngcontent-%COMP%] {\r\n    background: #85ad00; }\r\n.blue[_ngcontent-%COMP%] {\r\n    background: #0076ad; }\r\n.tooltip-inner[_ngcontent-%COMP%] {\r\n    padding: 1.3em; }\r\n@keyframes opacity {\r\n    0% {\r\n      opacity: 0;\r\n      transform: scale(3); }\r\n    100% {\r\n      opacity: 1;\r\n      transform: scale(1); } }\n/*# sourceMappingURL=style.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdDIvcHJvZHVjdDIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esc0NBQXNDO0FBQ3RDO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQixFQUFFO0FBRXRCO0lBQ0UsZUFBZSxFQUFFO0FBRW5CO0lBSUUsYUFBYTtJQUtMLHNCQUFzQixFQUFFO0FBQ2hDO01BQ0U7UUFDRSxtQkFBbUIsRUFBRSxFQUFFO0FBRTdCO0lBSVUsWUFBWSxFQUFFO0FBRXhCO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0UsVUFBVTtNQUNWLGtCQUFrQixFQUFFO0FBQ3BCO1FBQ0UsZUFBZTtRQUNmLGNBQWMsRUFBRTtBQUNsQjtRQUNFLFVBQVU7UUFDVixTQUFTLEVBQUU7QUFDYjtRQUNFLGVBQWUsRUFBRTtBQUV2QjtJQUNFLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0UsV0FBVztNQUVILHVCQUF1QjtNQUV2Qix1QkFBdUIsRUFBRTtBQUVyQztJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQixFQUFFO0FBRXRCO0lBQ0U7TUFJRSxhQUFhLEVBQUUsRUFBRTtBQUVyQjtJQUlFLGFBQWE7SUFLTCxzQkFBc0IsRUFBRTtBQUVsQztJQUlVLFlBQVksRUFBRTtBQUV4QjtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUIsRUFBRTtBQUVyQjtJQUNFLGNBQWMsRUFBRTtBQUVsQjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsYUFBYSxFQUFFO0FBRWpCO0lBQ0Usa0JBQWtCLEVBQUU7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTtBQUV2QjtJQUNFLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUU7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUVILCtCQUErQixFQUFFO0FBQ3pDO01BQ0UsbUJBQW1CO01BQ25CLFdBQVcsRUFBRTtBQUVqQjtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBRTtBQUNsQjtNQUNFLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsV0FBVyxFQUFFO0FBRWpCO0lBQ0UsbUJBQW1CLEVBQUU7QUFFdkI7SUFDRSxtQkFBbUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsY0FBYyxFQUFFO0FBWWxCO0lBQ0U7TUFDRSxVQUFVO01BRUYsbUJBQW1CLEVBQUU7SUFDL0I7TUFDRSxVQUFVO01BRUYsbUJBQW1CLEVBQUUsRUFBRTtBQUVuQyxvQ0FBb0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0Mi9wcm9kdWN0Mi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKioqKioqKioqKioqKioqKmdsb2JhbHMqKioqKioqKioqKioqL1xyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cclxuICBcclxuICAucHJldmlldyB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk2cHgpIHtcclxuICAgICAgLnByZXZpZXcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH0gfVxyXG4gIFxyXG4gIC5wcmV2aWV3LXBpYyB7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTsgfVxyXG4gIFxyXG4gIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4OyB9XHJcbiAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkge1xyXG4gICAgICB3aWR0aDogMTglO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIuNSU7IH1cclxuICAgICAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSBhIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDsgfVxyXG4gICAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGk6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cclxuICBcclxuICAudGFiLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4gICAgLnRhYi1jb250ZW50IGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzOyB9XHJcbiAgXHJcbiAgLmNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBwYWRkaW5nOiAzZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07IH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTdweCkge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgZGlzcGxheTogZmxleDsgfSB9XHJcbiAgXHJcbiAgLmRldGFpbHMge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuICBcclxuICAuY29sb3JzIHtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxOyB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtdGl0bGUsIC5wcmljZSwgLnNpemVzLCAuY29sb3JzIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBVUFBFUkNBU0U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxyXG4gIFxyXG4gIC5jaGVja2VkLCAucHJpY2Ugc3BhbiB7XHJcbiAgICBjb2xvcjogI2ZmOWYxYTsgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LXRpdGxlLCAucmF0aW5nLCAucHJvZHVjdC1kZXNjcmlwdGlvbiwgLnByaWNlLCAudm90ZSwgLnNpemVzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cclxuICBcclxuICAucHJvZHVjdC10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwOyB9XHJcbiAgXHJcbiAgLnNpemUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XHJcbiAgICAuc2l6ZTpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7IH1cclxuICBcclxuICAuY29sb3Ige1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgfVxyXG4gICAgLmNvbG9yOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDsgfVxyXG4gIFxyXG4gIC5hZGQtdG8tY2FydCwgLmxpa2Uge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOWYxYTtcclxuICAgIHBhZGRpbmc6IDEuMmVtIDEuNWVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IFVQUEVSQ0FTRTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7IH1cclxuICAgIC5hZGQtdG8tY2FydDpob3ZlciwgLmxpa2U6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYjM2ODAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjsgfVxyXG4gIFxyXG4gIC5ub3QtYXZhaWxhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07IH1cclxuICAgIC5ub3QtYXZhaWxhYmxlOmJlZm9yZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcclxuICAgICAgY29udGVudDogXCJcXGYwMGRcIjtcclxuICAgICAgY29sb3I6ICNmZmY7IH1cclxuICBcclxuICAub3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjlmMWE7IH1cclxuICBcclxuICAuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzg1YWQwMDsgfVxyXG4gIFxyXG4gIC5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDc2YWQ7IH1cclxuICBcclxuICAudG9vbHRpcC1pbm5lciB7XHJcbiAgICBwYWRkaW5nOiAxLjNlbTsgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcbiAgXHJcbiAgLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Product2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product2',
                templateUrl: './product2.component.html',
                styleUrls: ['./product2.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/product-list/product3/product3.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/product-list/product3/product3.component.ts ***!
  \************************************************************************/
/*! exports provided: Product3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product3Component", function() { return Product3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class Product3Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onp3() {
        this.router.navigate(['/product3']);
    }
    onCart() {
        this.router.navigate(['/cart']);
    }
}
Product3Component.ɵfac = function Product3Component_Factory(t) { return new (t || Product3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
Product3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Product3Component, selectors: [["app-product3"]], decls: 52, vars: 0, consts: [["lang", "en"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "container"], [1, "card"], [1, "container-fliud"], [1, "wrapper", "row"], [1, "preview", "col-md-6"], [1, "preview-pic", "tab-content"], ["id", "pic-1", 1, "tab-pane", "active"], ["src", "assets/img/categori/product3.png"], [1, "details", "col-md-6"], [1, "product-title"], [1, "rating"], [1, "stars"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"], [1, "review-no"], [1, "product-description"], [1, "price"], [1, "vote"], [1, "sizes"], ["data-toggle", "tooltip", "title", "small", 1, "size"], ["data-toggle", "tooltip", "title", "medium", 1, "size"], ["data-toggle", "tooltip", "title", "large", 1, "size"], ["data-toggle", "tooltip", "title", "xtra large", 1, "size"], [1, "action"], ["type", "button", 1, "btn", "hero-btn"], ["type", "button", 1, "btn", "hero-btn", 3, "click"]], template: function Product3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Full sleave Dress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Full sleave Dress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "41 reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "current price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u20B9299");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "91%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " of buyers enjoyed this product! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "(87 votes)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "sizes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Product3Component_Template_button_click_50_listener() { return ctx.onCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: 'open sans';\r\n    overflow-x: hidden; }\r\nimg[_ngcontent-%COMP%] {\r\n    max-width: 100%; }\r\n.preview[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n@media screen and (max-width: 996px) {\r\n      .preview[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px; } }\r\n.preview-pic[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%] {\r\n    border: none;\r\n    margin-top: 15px; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      width: 18%;\r\n      margin-right: 2.5%; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n        display: block; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n        margin: 0; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\r\n        margin-right: 0; }\r\n.tab-content[_ngcontent-%COMP%] {\r\n    overflow: hidden; }\r\n.tab-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      animation-name: opacity;\r\n      animation-duration: .3s; }\r\n.card[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    background: #eee;\r\n    padding: 3em;\r\n    line-height: 1.5em; }\r\n@media screen and (min-width: 997px) {\r\n    .wrapper[_ngcontent-%COMP%] {\r\n      display: flex; } }\r\n.details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n.colors[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.product-title[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%], .colors[_ngcontent-%COMP%] {\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold; }\r\n.checked[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #ff9f1a; }\r\n.product-title[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%], .product-description[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .vote[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px; }\r\n.product-title[_ngcontent-%COMP%] {\r\n    margin-top: 0; }\r\n.size[_ngcontent-%COMP%] {\r\n    margin-right: 10px; }\r\n.size[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 40px; }\r\n.color[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n    height: 2em;\r\n    width: 2em;\r\n    border-radius: 2px; }\r\n.color[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 20px; }\r\n.add-to-cart[_ngcontent-%COMP%], .like[_ngcontent-%COMP%] {\r\n    background: #ff9f1a;\r\n    padding: 1.2em 1.5em;\r\n    border: none;\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    transition: background .3s ease; }\r\n.add-to-cart[_ngcontent-%COMP%]:hover, .like[_ngcontent-%COMP%]:hover {\r\n      background: #b36800;\r\n      color: #fff; }\r\n.not-available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    line-height: 2em; }\r\n.not-available[_ngcontent-%COMP%]:before {\r\n      font-family: fontawesome;\r\n      content: \"\\f00d\";\r\n      color: #fff; }\r\n.orange[_ngcontent-%COMP%] {\r\n    background: #ff9f1a; }\r\n.green[_ngcontent-%COMP%] {\r\n    background: #85ad00; }\r\n.blue[_ngcontent-%COMP%] {\r\n    background: #0076ad; }\r\n.tooltip-inner[_ngcontent-%COMP%] {\r\n    padding: 1.3em; }\r\n@keyframes opacity {\r\n    0% {\r\n      opacity: 0;\r\n      transform: scale(3); }\r\n    100% {\r\n      opacity: 1;\r\n      transform: scale(1); } }\n/*# sourceMappingURL=style.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdDMvcHJvZHVjdDMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esc0NBQXNDO0FBQ3RDO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQixFQUFFO0FBRXRCO0lBQ0UsZUFBZSxFQUFFO0FBRW5CO0lBSUUsYUFBYTtJQUtMLHNCQUFzQixFQUFFO0FBQ2hDO01BQ0U7UUFDRSxtQkFBbUIsRUFBRSxFQUFFO0FBRTdCO0lBSVUsWUFBWSxFQUFFO0FBRXhCO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0UsVUFBVTtNQUNWLGtCQUFrQixFQUFFO0FBQ3BCO1FBQ0UsZUFBZTtRQUNmLGNBQWMsRUFBRTtBQUNsQjtRQUNFLFVBQVU7UUFDVixTQUFTLEVBQUU7QUFDYjtRQUNFLGVBQWUsRUFBRTtBQUV2QjtJQUNFLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0UsV0FBVztNQUVILHVCQUF1QjtNQUV2Qix1QkFBdUIsRUFBRTtBQUVyQztJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQixFQUFFO0FBRXRCO0lBQ0U7TUFJRSxhQUFhLEVBQUUsRUFBRTtBQUVyQjtJQUlFLGFBQWE7SUFLTCxzQkFBc0IsRUFBRTtBQUVsQztJQUlVLFlBQVksRUFBRTtBQUV4QjtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUIsRUFBRTtBQUVyQjtJQUNFLGNBQWMsRUFBRTtBQUVsQjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsYUFBYSxFQUFFO0FBRWpCO0lBQ0Usa0JBQWtCLEVBQUU7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTtBQUV2QjtJQUNFLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUU7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUVILCtCQUErQixFQUFFO0FBQ3pDO01BQ0UsbUJBQW1CO01BQ25CLFdBQVcsRUFBRTtBQUVqQjtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBRTtBQUNsQjtNQUNFLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsV0FBVyxFQUFFO0FBRWpCO0lBQ0UsbUJBQW1CLEVBQUU7QUFFdkI7SUFDRSxtQkFBbUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsY0FBYyxFQUFFO0FBWWxCO0lBQ0U7TUFDRSxVQUFVO01BRUYsbUJBQW1CLEVBQUU7SUFDL0I7TUFDRSxVQUFVO01BRUYsbUJBQW1CLEVBQUUsRUFBRTtBQUVuQyxvQ0FBb0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0My9wcm9kdWN0My5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKioqKioqKioqKioqKioqKmdsb2JhbHMqKioqKioqKioqKioqL1xyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cclxuICBcclxuICAucHJldmlldyB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk2cHgpIHtcclxuICAgICAgLnByZXZpZXcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH0gfVxyXG4gIFxyXG4gIC5wcmV2aWV3LXBpYyB7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTsgfVxyXG4gIFxyXG4gIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4OyB9XHJcbiAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkge1xyXG4gICAgICB3aWR0aDogMTglO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIuNSU7IH1cclxuICAgICAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSBhIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDsgfVxyXG4gICAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGk6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cclxuICBcclxuICAudGFiLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4gICAgLnRhYi1jb250ZW50IGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzOyB9XHJcbiAgXHJcbiAgLmNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBwYWRkaW5nOiAzZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07IH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTdweCkge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgZGlzcGxheTogZmxleDsgfSB9XHJcbiAgXHJcbiAgLmRldGFpbHMge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuICBcclxuICAuY29sb3JzIHtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxOyB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtdGl0bGUsIC5wcmljZSwgLnNpemVzLCAuY29sb3JzIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBVUFBFUkNBU0U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxyXG4gIFxyXG4gIC5jaGVja2VkLCAucHJpY2Ugc3BhbiB7XHJcbiAgICBjb2xvcjogI2ZmOWYxYTsgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LXRpdGxlLCAucmF0aW5nLCAucHJvZHVjdC1kZXNjcmlwdGlvbiwgLnByaWNlLCAudm90ZSwgLnNpemVzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cclxuICBcclxuICAucHJvZHVjdC10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwOyB9XHJcbiAgXHJcbiAgLnNpemUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XHJcbiAgICAuc2l6ZTpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7IH1cclxuICBcclxuICAuY29sb3Ige1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgfVxyXG4gICAgLmNvbG9yOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDsgfVxyXG4gIFxyXG4gIC5hZGQtdG8tY2FydCwgLmxpa2Uge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOWYxYTtcclxuICAgIHBhZGRpbmc6IDEuMmVtIDEuNWVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IFVQUEVSQ0FTRTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7IH1cclxuICAgIC5hZGQtdG8tY2FydDpob3ZlciwgLmxpa2U6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYjM2ODAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjsgfVxyXG4gIFxyXG4gIC5ub3QtYXZhaWxhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07IH1cclxuICAgIC5ub3QtYXZhaWxhYmxlOmJlZm9yZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcclxuICAgICAgY29udGVudDogXCJcXGYwMGRcIjtcclxuICAgICAgY29sb3I6ICNmZmY7IH1cclxuICBcclxuICAub3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjlmMWE7IH1cclxuICBcclxuICAuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzg1YWQwMDsgfVxyXG4gIFxyXG4gIC5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDc2YWQ7IH1cclxuICBcclxuICAudG9vbHRpcC1pbm5lciB7XHJcbiAgICBwYWRkaW5nOiAxLjNlbTsgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcbiAgXHJcbiAgLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Product3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product3',
                templateUrl: './product3.component.html',
                styleUrls: ['./product3.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/product-list/product4/product4.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/product-list/product4/product4.component.ts ***!
  \************************************************************************/
/*! exports provided: Product4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product4Component", function() { return Product4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class Product4Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onp4() {
        this.router.navigate(['/product4']);
    }
    onCart() {
        this.router.navigate(['/cart']);
    }
}
Product4Component.ɵfac = function Product4Component_Factory(t) { return new (t || Product4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
Product4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Product4Component, selectors: [["app-product4"]], decls: 52, vars: 0, consts: [["lang", "en"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "container"], [1, "card"], [1, "container-fliud"], [1, "wrapper", "row"], [1, "preview", "col-md-6"], [1, "preview-pic", "tab-content"], ["id", "pic-1", 1, "tab-pane", "active"], ["src", "assets/img/categori/product4.png"], [1, "details", "col-md-6"], [1, "product-title"], [1, "rating"], [1, "stars"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"], [1, "review-no"], [1, "product-description"], [1, "price"], [1, "vote"], [1, "sizes"], ["data-toggle", "tooltip", "title", "small", 1, "size"], ["data-toggle", "tooltip", "title", "medium", 1, "size"], ["data-toggle", "tooltip", "title", "large", 1, "size"], ["data-toggle", "tooltip", "title", "xtra large", 1, "size"], [1, "action"], ["type", "button", 1, "btn", "hero-btn"], ["type", "button", 1, "btn", "hero-btn", 3, "click"]], template: function Product4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Full sleave Gray Dress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Full sleave Gray Dress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "41 reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "current price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u20B9499");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "91%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " of buyers enjoyed this product! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "(87 votes)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "sizes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Product4Component_Template_button_click_50_listener() { return ctx.onCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: 'open sans';\r\n    overflow-x: hidden; }\r\nimg[_ngcontent-%COMP%] {\r\n    max-width: 100%; }\r\n.preview[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n@media screen and (max-width: 996px) {\r\n      .preview[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px; } }\r\n.preview-pic[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%] {\r\n    border: none;\r\n    margin-top: 15px; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      width: 18%;\r\n      margin-right: 2.5%; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n        display: block; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n        margin: 0; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\r\n        margin-right: 0; }\r\n.tab-content[_ngcontent-%COMP%] {\r\n    overflow: hidden; }\r\n.tab-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      animation-name: opacity;\r\n      animation-duration: .3s; }\r\n.card[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    background: #eee;\r\n    padding: 3em;\r\n    line-height: 1.5em; }\r\n@media screen and (min-width: 997px) {\r\n    .wrapper[_ngcontent-%COMP%] {\r\n      display: flex; } }\r\n.details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n.colors[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.product-title[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%], .colors[_ngcontent-%COMP%] {\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold; }\r\n.checked[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #ff9f1a; }\r\n.product-title[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%], .product-description[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .vote[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px; }\r\n.product-title[_ngcontent-%COMP%] {\r\n    margin-top: 0; }\r\n.size[_ngcontent-%COMP%] {\r\n    margin-right: 10px; }\r\n.size[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 40px; }\r\n.color[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n    height: 2em;\r\n    width: 2em;\r\n    border-radius: 2px; }\r\n.color[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 20px; }\r\n.add-to-cart[_ngcontent-%COMP%], .like[_ngcontent-%COMP%] {\r\n    background: #ff9f1a;\r\n    padding: 1.2em 1.5em;\r\n    border: none;\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    transition: background .3s ease; }\r\n.add-to-cart[_ngcontent-%COMP%]:hover, .like[_ngcontent-%COMP%]:hover {\r\n      background: #b36800;\r\n      color: #fff; }\r\n.not-available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    line-height: 2em; }\r\n.not-available[_ngcontent-%COMP%]:before {\r\n      font-family: fontawesome;\r\n      content: \"\\f00d\";\r\n      color: #fff; }\r\n.orange[_ngcontent-%COMP%] {\r\n    background: #ff9f1a; }\r\n.green[_ngcontent-%COMP%] {\r\n    background: #85ad00; }\r\n.blue[_ngcontent-%COMP%] {\r\n    background: #0076ad; }\r\n.tooltip-inner[_ngcontent-%COMP%] {\r\n    padding: 1.3em; }\r\n@keyframes opacity {\r\n    0% {\r\n      opacity: 0;\r\n      transform: scale(3); }\r\n    100% {\r\n      opacity: 1;\r\n      transform: scale(1); } }\n/*# sourceMappingURL=style.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdDQvcHJvZHVjdDQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esc0NBQXNDO0FBQ3RDO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQixFQUFFO0FBRXRCO0lBQ0UsZUFBZSxFQUFFO0FBRW5CO0lBSUUsYUFBYTtJQUtMLHNCQUFzQixFQUFFO0FBQ2hDO01BQ0U7UUFDRSxtQkFBbUIsRUFBRSxFQUFFO0FBRTdCO0lBSVUsWUFBWSxFQUFFO0FBRXhCO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0UsVUFBVTtNQUNWLGtCQUFrQixFQUFFO0FBQ3BCO1FBQ0UsZUFBZTtRQUNmLGNBQWMsRUFBRTtBQUNsQjtRQUNFLFVBQVU7UUFDVixTQUFTLEVBQUU7QUFDYjtRQUNFLGVBQWUsRUFBRTtBQUV2QjtJQUNFLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0UsV0FBVztNQUVILHVCQUF1QjtNQUV2Qix1QkFBdUIsRUFBRTtBQUVyQztJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQixFQUFFO0FBRXRCO0lBQ0U7TUFJRSxhQUFhLEVBQUUsRUFBRTtBQUVyQjtJQUlFLGFBQWE7SUFLTCxzQkFBc0IsRUFBRTtBQUVsQztJQUlVLFlBQVksRUFBRTtBQUV4QjtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUIsRUFBRTtBQUVyQjtJQUNFLGNBQWMsRUFBRTtBQUVsQjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsYUFBYSxFQUFFO0FBRWpCO0lBQ0Usa0JBQWtCLEVBQUU7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTtBQUV2QjtJQUNFLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUU7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUVILCtCQUErQixFQUFFO0FBQ3pDO01BQ0UsbUJBQW1CO01BQ25CLFdBQVcsRUFBRTtBQUVqQjtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBRTtBQUNsQjtNQUNFLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsV0FBVyxFQUFFO0FBRWpCO0lBQ0UsbUJBQW1CLEVBQUU7QUFFdkI7SUFDRSxtQkFBbUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsY0FBYyxFQUFFO0FBWWxCO0lBQ0U7TUFDRSxVQUFVO01BRUYsbUJBQW1CLEVBQUU7SUFDL0I7TUFDRSxVQUFVO01BRUYsbUJBQW1CLEVBQUUsRUFBRTtBQUVuQyxvQ0FBb0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0NC9wcm9kdWN0NC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKioqKioqKioqKioqKioqKmdsb2JhbHMqKioqKioqKioqKioqL1xyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cclxuICBcclxuICAucHJldmlldyB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk2cHgpIHtcclxuICAgICAgLnByZXZpZXcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH0gfVxyXG4gIFxyXG4gIC5wcmV2aWV3LXBpYyB7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTsgfVxyXG4gIFxyXG4gIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4OyB9XHJcbiAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkge1xyXG4gICAgICB3aWR0aDogMTglO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIuNSU7IH1cclxuICAgICAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSBhIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDsgfVxyXG4gICAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGk6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cclxuICBcclxuICAudGFiLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4gICAgLnRhYi1jb250ZW50IGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzOyB9XHJcbiAgXHJcbiAgLmNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBwYWRkaW5nOiAzZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07IH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTdweCkge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgZGlzcGxheTogZmxleDsgfSB9XHJcbiAgXHJcbiAgLmRldGFpbHMge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuICBcclxuICAuY29sb3JzIHtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxOyB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtdGl0bGUsIC5wcmljZSwgLnNpemVzLCAuY29sb3JzIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBVUFBFUkNBU0U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxyXG4gIFxyXG4gIC5jaGVja2VkLCAucHJpY2Ugc3BhbiB7XHJcbiAgICBjb2xvcjogI2ZmOWYxYTsgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LXRpdGxlLCAucmF0aW5nLCAucHJvZHVjdC1kZXNjcmlwdGlvbiwgLnByaWNlLCAudm90ZSwgLnNpemVzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cclxuICBcclxuICAucHJvZHVjdC10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwOyB9XHJcbiAgXHJcbiAgLnNpemUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XHJcbiAgICAuc2l6ZTpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7IH1cclxuICBcclxuICAuY29sb3Ige1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgfVxyXG4gICAgLmNvbG9yOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDsgfVxyXG4gIFxyXG4gIC5hZGQtdG8tY2FydCwgLmxpa2Uge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOWYxYTtcclxuICAgIHBhZGRpbmc6IDEuMmVtIDEuNWVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IFVQUEVSQ0FTRTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7IH1cclxuICAgIC5hZGQtdG8tY2FydDpob3ZlciwgLmxpa2U6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYjM2ODAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjsgfVxyXG4gIFxyXG4gIC5ub3QtYXZhaWxhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07IH1cclxuICAgIC5ub3QtYXZhaWxhYmxlOmJlZm9yZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcclxuICAgICAgY29udGVudDogXCJcXGYwMGRcIjtcclxuICAgICAgY29sb3I6ICNmZmY7IH1cclxuICBcclxuICAub3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjlmMWE7IH1cclxuICBcclxuICAuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzg1YWQwMDsgfVxyXG4gIFxyXG4gIC5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDc2YWQ7IH1cclxuICBcclxuICAudG9vbHRpcC1pbm5lciB7XHJcbiAgICBwYWRkaW5nOiAxLjNlbTsgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcbiAgXHJcbiAgLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Product4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product4',
                templateUrl: './product4.component.html',
                styleUrls: ['./product4.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/product-list/product5/product5.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/product-list/product5/product5.component.ts ***!
  \************************************************************************/
/*! exports provided: Product5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product5Component", function() { return Product5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class Product5Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onp5() {
        this.router.navigate(['/product5']);
    }
    onCart() {
        this.router.navigate(['/cart']);
    }
}
Product5Component.ɵfac = function Product5Component_Factory(t) { return new (t || Product5Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
Product5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Product5Component, selectors: [["app-product5"]], decls: 52, vars: 0, consts: [["lang", "en"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "container"], [1, "card"], [1, "container-fliud"], [1, "wrapper", "row"], [1, "preview", "col-md-6"], [1, "preview-pic", "tab-content"], ["id", "pic-1", 1, "tab-pane", "active"], ["src", "assets/img/categori/product5.png"], [1, "details", "col-md-6"], [1, "product-title"], [1, "rating"], [1, "stars"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"], [1, "review-no"], [1, "product-description"], [1, "price"], [1, "vote"], [1, "sizes"], ["data-toggle", "tooltip", "title", "small", 1, "size"], ["data-toggle", "tooltip", "title", "medium", 1, "size"], ["data-toggle", "tooltip", "title", "large", 1, "size"], ["data-toggle", "tooltip", "title", "xtra large", 1, "size"], [1, "action"], ["type", "button", 1, "btn", "hero-btn"], ["type", "button", 1, "btn", "hero-btn", 3, "click"]], template: function Product5Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Black Pant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Black Pant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "41 reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "current price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u20B9399");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "91%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " of buyers enjoyed this product! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "(87 votes)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "sizes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Product5Component_Template_button_click_50_listener() { return ctx.onCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: 'open sans';\r\n    overflow-x: hidden; }\r\nimg[_ngcontent-%COMP%] {\r\n    max-width: 100%; }\r\n.preview[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n@media screen and (max-width: 996px) {\r\n      .preview[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px; } }\r\n.preview-pic[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%] {\r\n    border: none;\r\n    margin-top: 15px; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      width: 18%;\r\n      margin-right: 2.5%; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n        display: block; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n        margin: 0; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\r\n        margin-right: 0; }\r\n.tab-content[_ngcontent-%COMP%] {\r\n    overflow: hidden; }\r\n.tab-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      animation-name: opacity;\r\n      animation-duration: .3s; }\r\n.card[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    background: #eee;\r\n    padding: 3em;\r\n    line-height: 1.5em; }\r\n@media screen and (min-width: 997px) {\r\n    .wrapper[_ngcontent-%COMP%] {\r\n      display: flex; } }\r\n.details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n.colors[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.product-title[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%], .colors[_ngcontent-%COMP%] {\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold; }\r\n.checked[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #ff9f1a; }\r\n.product-title[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%], .product-description[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .vote[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px; }\r\n.product-title[_ngcontent-%COMP%] {\r\n    margin-top: 0; }\r\n.size[_ngcontent-%COMP%] {\r\n    margin-right: 10px; }\r\n.size[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 40px; }\r\n.color[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n    height: 2em;\r\n    width: 2em;\r\n    border-radius: 2px; }\r\n.color[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 20px; }\r\n.add-to-cart[_ngcontent-%COMP%], .like[_ngcontent-%COMP%] {\r\n    background: #ff9f1a;\r\n    padding: 1.2em 1.5em;\r\n    border: none;\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    transition: background .3s ease; }\r\n.add-to-cart[_ngcontent-%COMP%]:hover, .like[_ngcontent-%COMP%]:hover {\r\n      background: #b36800;\r\n      color: #fff; }\r\n.not-available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    line-height: 2em; }\r\n.not-available[_ngcontent-%COMP%]:before {\r\n      font-family: fontawesome;\r\n      content: \"\\f00d\";\r\n      color: #fff; }\r\n.orange[_ngcontent-%COMP%] {\r\n    background: #ff9f1a; }\r\n.green[_ngcontent-%COMP%] {\r\n    background: #85ad00; }\r\n.blue[_ngcontent-%COMP%] {\r\n    background: #0076ad; }\r\n.tooltip-inner[_ngcontent-%COMP%] {\r\n    padding: 1.3em; }\r\n@keyframes opacity {\r\n    0% {\r\n      opacity: 0;\r\n      transform: scale(3); }\r\n    100% {\r\n      opacity: 1;\r\n      transform: scale(1); } }\n/*# sourceMappingURL=style.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdDUvcHJvZHVjdDUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esc0NBQXNDO0FBQ3RDO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQixFQUFFO0FBRXRCO0lBQ0UsZUFBZSxFQUFFO0FBRW5CO0lBSUUsYUFBYTtJQUtMLHNCQUFzQixFQUFFO0FBQ2hDO01BQ0U7UUFDRSxtQkFBbUIsRUFBRSxFQUFFO0FBRTdCO0lBSVUsWUFBWSxFQUFFO0FBRXhCO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0UsVUFBVTtNQUNWLGtCQUFrQixFQUFFO0FBQ3BCO1FBQ0UsZUFBZTtRQUNmLGNBQWMsRUFBRTtBQUNsQjtRQUNFLFVBQVU7UUFDVixTQUFTLEVBQUU7QUFDYjtRQUNFLGVBQWUsRUFBRTtBQUV2QjtJQUNFLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0UsV0FBVztNQUVILHVCQUF1QjtNQUV2Qix1QkFBdUIsRUFBRTtBQUVyQztJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQixFQUFFO0FBRXRCO0lBQ0U7TUFJRSxhQUFhLEVBQUUsRUFBRTtBQUVyQjtJQUlFLGFBQWE7SUFLTCxzQkFBc0IsRUFBRTtBQUVsQztJQUlVLFlBQVksRUFBRTtBQUV4QjtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUIsRUFBRTtBQUVyQjtJQUNFLGNBQWMsRUFBRTtBQUVsQjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsYUFBYSxFQUFFO0FBRWpCO0lBQ0Usa0JBQWtCLEVBQUU7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTtBQUV2QjtJQUNFLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUU7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUVILCtCQUErQixFQUFFO0FBQ3pDO01BQ0UsbUJBQW1CO01BQ25CLFdBQVcsRUFBRTtBQUVqQjtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBRTtBQUNsQjtNQUNFLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsV0FBVyxFQUFFO0FBRWpCO0lBQ0UsbUJBQW1CLEVBQUU7QUFFdkI7SUFDRSxtQkFBbUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsY0FBYyxFQUFFO0FBWWxCO0lBQ0U7TUFDRSxVQUFVO01BRUYsbUJBQW1CLEVBQUU7SUFDL0I7TUFDRSxVQUFVO01BRUYsbUJBQW1CLEVBQUUsRUFBRTtBQUVuQyxvQ0FBb0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0NS9wcm9kdWN0NS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKioqKioqKioqKioqKioqKmdsb2JhbHMqKioqKioqKioqKioqL1xyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cclxuICBcclxuICAucHJldmlldyB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk2cHgpIHtcclxuICAgICAgLnByZXZpZXcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH0gfVxyXG4gIFxyXG4gIC5wcmV2aWV3LXBpYyB7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTsgfVxyXG4gIFxyXG4gIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4OyB9XHJcbiAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkge1xyXG4gICAgICB3aWR0aDogMTglO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIuNSU7IH1cclxuICAgICAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSBhIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDsgfVxyXG4gICAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGk6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cclxuICBcclxuICAudGFiLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4gICAgLnRhYi1jb250ZW50IGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzOyB9XHJcbiAgXHJcbiAgLmNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBwYWRkaW5nOiAzZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07IH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTdweCkge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgZGlzcGxheTogZmxleDsgfSB9XHJcbiAgXHJcbiAgLmRldGFpbHMge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuICBcclxuICAuY29sb3JzIHtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxOyB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtdGl0bGUsIC5wcmljZSwgLnNpemVzLCAuY29sb3JzIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBVUFBFUkNBU0U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxyXG4gIFxyXG4gIC5jaGVja2VkLCAucHJpY2Ugc3BhbiB7XHJcbiAgICBjb2xvcjogI2ZmOWYxYTsgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LXRpdGxlLCAucmF0aW5nLCAucHJvZHVjdC1kZXNjcmlwdGlvbiwgLnByaWNlLCAudm90ZSwgLnNpemVzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cclxuICBcclxuICAucHJvZHVjdC10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwOyB9XHJcbiAgXHJcbiAgLnNpemUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XHJcbiAgICAuc2l6ZTpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7IH1cclxuICBcclxuICAuY29sb3Ige1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgfVxyXG4gICAgLmNvbG9yOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDsgfVxyXG4gIFxyXG4gIC5hZGQtdG8tY2FydCwgLmxpa2Uge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOWYxYTtcclxuICAgIHBhZGRpbmc6IDEuMmVtIDEuNWVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IFVQUEVSQ0FTRTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7IH1cclxuICAgIC5hZGQtdG8tY2FydDpob3ZlciwgLmxpa2U6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYjM2ODAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjsgfVxyXG4gIFxyXG4gIC5ub3QtYXZhaWxhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07IH1cclxuICAgIC5ub3QtYXZhaWxhYmxlOmJlZm9yZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcclxuICAgICAgY29udGVudDogXCJcXGYwMGRcIjtcclxuICAgICAgY29sb3I6ICNmZmY7IH1cclxuICBcclxuICAub3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjlmMWE7IH1cclxuICBcclxuICAuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzg1YWQwMDsgfVxyXG4gIFxyXG4gIC5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDc2YWQ7IH1cclxuICBcclxuICAudG9vbHRpcC1pbm5lciB7XHJcbiAgICBwYWRkaW5nOiAxLjNlbTsgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcbiAgXHJcbiAgLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Product5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product5',
                templateUrl: './product5.component.html',
                styleUrls: ['./product5.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/product-list/product6/product6.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/product-list/product6/product6.component.ts ***!
  \************************************************************************/
/*! exports provided: Product6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product6Component", function() { return Product6Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class Product6Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onp6() {
        this.router.navigate(['/product6']);
    }
    onCart() {
        this.router.navigate(['/cart']);
    }
}
Product6Component.ɵfac = function Product6Component_Factory(t) { return new (t || Product6Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
Product6Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Product6Component, selectors: [["app-product6"]], decls: 52, vars: 0, consts: [["lang", "en"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "container"], [1, "card"], [1, "container-fliud"], [1, "wrapper", "row"], [1, "preview", "col-md-6"], [1, "preview-pic", "tab-content"], ["id", "pic-1", 1, "tab-pane", "active"], ["src", "assets/img/categori/product6.png"], [1, "details", "col-md-6"], [1, "product-title"], [1, "rating"], [1, "stars"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"], [1, "review-no"], [1, "product-description"], [1, "price"], [1, "vote"], [1, "sizes"], ["data-toggle", "tooltip", "title", "small", 1, "size"], ["data-toggle", "tooltip", "title", "medium", 1, "size"], ["data-toggle", "tooltip", "title", "large", 1, "size"], ["data-toggle", "tooltip", "title", "xtra large", 1, "size"], [1, "action"], ["type", "button", 1, "btn", "hero-btn"], ["type", "button", 1, "btn", "hero-btn", 3, "click"]], template: function Product6Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Denim Coat for Girls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Denim Coat for Girls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "41 reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "current price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u20B91099");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "91%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " of buyers enjoyed this product! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "(87 votes)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "sizes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Product6Component_Template_button_click_50_listener() { return ctx.onCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: 'open sans';\r\n    overflow-x: hidden; }\r\nimg[_ngcontent-%COMP%] {\r\n    max-width: 100%; }\r\n.preview[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n@media screen and (max-width: 996px) {\r\n      .preview[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px; } }\r\n.preview-pic[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%] {\r\n    border: none;\r\n    margin-top: 15px; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      width: 18%;\r\n      margin-right: 2.5%; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n        display: block; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n        margin: 0; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\r\n        margin-right: 0; }\r\n.tab-content[_ngcontent-%COMP%] {\r\n    overflow: hidden; }\r\n.tab-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      animation-name: opacity;\r\n      animation-duration: .3s; }\r\n.card[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    background: #eee;\r\n    padding: 3em;\r\n    line-height: 1.5em; }\r\n@media screen and (min-width: 997px) {\r\n    .wrapper[_ngcontent-%COMP%] {\r\n      display: flex; } }\r\n.details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n.colors[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.product-title[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%], .colors[_ngcontent-%COMP%] {\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold; }\r\n.checked[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #ff9f1a; }\r\n.product-title[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%], .product-description[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .vote[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px; }\r\n.product-title[_ngcontent-%COMP%] {\r\n    margin-top: 0; }\r\n.size[_ngcontent-%COMP%] {\r\n    margin-right: 10px; }\r\n.size[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 40px; }\r\n.color[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n    height: 2em;\r\n    width: 2em;\r\n    border-radius: 2px; }\r\n.color[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 20px; }\r\n.add-to-cart[_ngcontent-%COMP%], .like[_ngcontent-%COMP%] {\r\n    background: #ff9f1a;\r\n    padding: 1.2em 1.5em;\r\n    border: none;\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    transition: background .3s ease; }\r\n.add-to-cart[_ngcontent-%COMP%]:hover, .like[_ngcontent-%COMP%]:hover {\r\n      background: #b36800;\r\n      color: #fff; }\r\n.not-available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    line-height: 2em; }\r\n.not-available[_ngcontent-%COMP%]:before {\r\n      font-family: fontawesome;\r\n      content: \"\\f00d\";\r\n      color: #fff; }\r\n.orange[_ngcontent-%COMP%] {\r\n    background: #ff9f1a; }\r\n.green[_ngcontent-%COMP%] {\r\n    background: #85ad00; }\r\n.blue[_ngcontent-%COMP%] {\r\n    background: #0076ad; }\r\n.tooltip-inner[_ngcontent-%COMP%] {\r\n    padding: 1.3em; }\r\n@keyframes opacity {\r\n    0% {\r\n      opacity: 0;\r\n      transform: scale(3); }\r\n    100% {\r\n      opacity: 1;\r\n      transform: scale(1); } }\n/*# sourceMappingURL=style.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdDYvcHJvZHVjdDYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esc0NBQXNDO0FBQ3RDO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQixFQUFFO0FBRXRCO0lBQ0UsZUFBZSxFQUFFO0FBRW5CO0lBSUUsYUFBYTtJQUtMLHNCQUFzQixFQUFFO0FBQ2hDO01BQ0U7UUFDRSxtQkFBbUIsRUFBRSxFQUFFO0FBRTdCO0lBSVUsWUFBWSxFQUFFO0FBRXhCO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0UsVUFBVTtNQUNWLGtCQUFrQixFQUFFO0FBQ3BCO1FBQ0UsZUFBZTtRQUNmLGNBQWMsRUFBRTtBQUNsQjtRQUNFLFVBQVU7UUFDVixTQUFTLEVBQUU7QUFDYjtRQUNFLGVBQWUsRUFBRTtBQUV2QjtJQUNFLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0UsV0FBVztNQUVILHVCQUF1QjtNQUV2Qix1QkFBdUIsRUFBRTtBQUVyQztJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQixFQUFFO0FBRXRCO0lBQ0U7TUFJRSxhQUFhLEVBQUUsRUFBRTtBQUVyQjtJQUlFLGFBQWE7SUFLTCxzQkFBc0IsRUFBRTtBQUVsQztJQUlVLFlBQVksRUFBRTtBQUV4QjtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUIsRUFBRTtBQUVyQjtJQUNFLGNBQWMsRUFBRTtBQUVsQjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsYUFBYSxFQUFFO0FBRWpCO0lBQ0Usa0JBQWtCLEVBQUU7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTtBQUV2QjtJQUNFLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUU7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUVILCtCQUErQixFQUFFO0FBQ3pDO01BQ0UsbUJBQW1CO01BQ25CLFdBQVcsRUFBRTtBQUVqQjtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBRTtBQUNsQjtNQUNFLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsV0FBVyxFQUFFO0FBRWpCO0lBQ0UsbUJBQW1CLEVBQUU7QUFFdkI7SUFDRSxtQkFBbUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsY0FBYyxFQUFFO0FBWWxCO0lBQ0U7TUFDRSxVQUFVO01BRUYsbUJBQW1CLEVBQUU7SUFDL0I7TUFDRSxVQUFVO01BRUYsbUJBQW1CLEVBQUUsRUFBRTtBQUVuQyxvQ0FBb0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0Ni9wcm9kdWN0Ni5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKioqKioqKioqKioqKioqKmdsb2JhbHMqKioqKioqKioqKioqL1xyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cclxuICBcclxuICAucHJldmlldyB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk2cHgpIHtcclxuICAgICAgLnByZXZpZXcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH0gfVxyXG4gIFxyXG4gIC5wcmV2aWV3LXBpYyB7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTsgfVxyXG4gIFxyXG4gIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4OyB9XHJcbiAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkge1xyXG4gICAgICB3aWR0aDogMTglO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIuNSU7IH1cclxuICAgICAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSBhIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDsgfVxyXG4gICAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGk6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cclxuICBcclxuICAudGFiLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4gICAgLnRhYi1jb250ZW50IGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzOyB9XHJcbiAgXHJcbiAgLmNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBwYWRkaW5nOiAzZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07IH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTdweCkge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgZGlzcGxheTogZmxleDsgfSB9XHJcbiAgXHJcbiAgLmRldGFpbHMge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuICBcclxuICAuY29sb3JzIHtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxOyB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtdGl0bGUsIC5wcmljZSwgLnNpemVzLCAuY29sb3JzIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBVUFBFUkNBU0U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxyXG4gIFxyXG4gIC5jaGVja2VkLCAucHJpY2Ugc3BhbiB7XHJcbiAgICBjb2xvcjogI2ZmOWYxYTsgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LXRpdGxlLCAucmF0aW5nLCAucHJvZHVjdC1kZXNjcmlwdGlvbiwgLnByaWNlLCAudm90ZSwgLnNpemVzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cclxuICBcclxuICAucHJvZHVjdC10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwOyB9XHJcbiAgXHJcbiAgLnNpemUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XHJcbiAgICAuc2l6ZTpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7IH1cclxuICBcclxuICAuY29sb3Ige1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgfVxyXG4gICAgLmNvbG9yOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDsgfVxyXG4gIFxyXG4gIC5hZGQtdG8tY2FydCwgLmxpa2Uge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOWYxYTtcclxuICAgIHBhZGRpbmc6IDEuMmVtIDEuNWVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IFVQUEVSQ0FTRTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7IH1cclxuICAgIC5hZGQtdG8tY2FydDpob3ZlciwgLmxpa2U6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYjM2ODAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjsgfVxyXG4gIFxyXG4gIC5ub3QtYXZhaWxhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07IH1cclxuICAgIC5ub3QtYXZhaWxhYmxlOmJlZm9yZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcclxuICAgICAgY29udGVudDogXCJcXGYwMGRcIjtcclxuICAgICAgY29sb3I6ICNmZmY7IH1cclxuICBcclxuICAub3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjlmMWE7IH1cclxuICBcclxuICAuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzg1YWQwMDsgfVxyXG4gIFxyXG4gIC5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDc2YWQ7IH1cclxuICBcclxuICAudG9vbHRpcC1pbm5lciB7XHJcbiAgICBwYWRkaW5nOiAxLjNlbTsgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcbiAgXHJcbiAgLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Product6Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product6',
                templateUrl: './product6.component.html',
                styleUrls: ['./product6.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/product-list/product7/product7.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/product-list/product7/product7.component.ts ***!
  \************************************************************************/
/*! exports provided: Product7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product7Component", function() { return Product7Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class Product7Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onp7() {
        this.router.navigate(['/product7']);
    }
    onCart() {
        this.router.navigate(['/cart']);
    }
}
Product7Component.ɵfac = function Product7Component_Factory(t) { return new (t || Product7Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
Product7Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Product7Component, selectors: [["app-product7"]], decls: 52, vars: 0, consts: [["lang", "en"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "container"], [1, "card"], [1, "container-fliud"], [1, "wrapper", "row"], [1, "preview", "col-md-6"], [1, "preview-pic", "tab-content"], ["id", "pic-1", 1, "tab-pane", "active"], ["src", "assets/img/categori/category_1.png"], [1, "details", "col-md-6"], [1, "product-title"], [1, "rating"], [1, "stars"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"], [1, "review-no"], [1, "product-description"], [1, "price"], [1, "vote"], [1, "sizes"], ["data-toggle", "tooltip", "title", "small", 1, "size"], ["data-toggle", "tooltip", "title", "medium", 1, "size"], ["data-toggle", "tooltip", "title", "large", 1, "size"], ["data-toggle", "tooltip", "title", "xtra large", 1, "size"], [1, "action"], ["type", "button", 1, "btn", "hero-btn"], ["type", "button", 1, "btn", "hero-btn", 3, "click"]], template: function Product7Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "DFestive Dress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "DFestive Dress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "41 reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "current price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u20B93299");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "91%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " of buyers enjoyed this product! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "(87 votes)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "sizes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Product7Component_Template_button_click_50_listener() { return ctx.onCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: 'open sans';\r\n    overflow-x: hidden; }\r\nimg[_ngcontent-%COMP%] {\r\n    max-width: 100%; }\r\n.preview[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n@media screen and (max-width: 996px) {\r\n      .preview[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px; } }\r\n.preview-pic[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%] {\r\n    border: none;\r\n    margin-top: 15px; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      width: 18%;\r\n      margin-right: 2.5%; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n        display: block; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n        margin: 0; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\r\n        margin-right: 0; }\r\n.tab-content[_ngcontent-%COMP%] {\r\n    overflow: hidden; }\r\n.tab-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      animation-name: opacity;\r\n      animation-duration: .3s; }\r\n.card[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    background: #eee;\r\n    padding: 3em;\r\n    line-height: 1.5em; }\r\n@media screen and (min-width: 997px) {\r\n    .wrapper[_ngcontent-%COMP%] {\r\n      display: flex; } }\r\n.details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n.colors[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.product-title[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%], .colors[_ngcontent-%COMP%] {\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold; }\r\n.checked[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #ff9f1a; }\r\n.product-title[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%], .product-description[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .vote[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px; }\r\n.product-title[_ngcontent-%COMP%] {\r\n    margin-top: 0; }\r\n.size[_ngcontent-%COMP%] {\r\n    margin-right: 10px; }\r\n.size[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 40px; }\r\n.color[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n    height: 2em;\r\n    width: 2em;\r\n    border-radius: 2px; }\r\n.color[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 20px; }\r\n.add-to-cart[_ngcontent-%COMP%], .like[_ngcontent-%COMP%] {\r\n    background: #ff9f1a;\r\n    padding: 1.2em 1.5em;\r\n    border: none;\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    transition: background .3s ease; }\r\n.add-to-cart[_ngcontent-%COMP%]:hover, .like[_ngcontent-%COMP%]:hover {\r\n      background: #b36800;\r\n      color: #fff; }\r\n.not-available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    line-height: 2em; }\r\n.not-available[_ngcontent-%COMP%]:before {\r\n      font-family: fontawesome;\r\n      content: \"\\f00d\";\r\n      color: #fff; }\r\n.orange[_ngcontent-%COMP%] {\r\n    background: #ff9f1a; }\r\n.green[_ngcontent-%COMP%] {\r\n    background: #85ad00; }\r\n.blue[_ngcontent-%COMP%] {\r\n    background: #0076ad; }\r\n.tooltip-inner[_ngcontent-%COMP%] {\r\n    padding: 1.3em; }\r\n@keyframes opacity {\r\n    0% {\r\n      opacity: 0;\r\n      transform: scale(3); }\r\n    100% {\r\n      opacity: 1;\r\n      transform: scale(1); } }\n/*# sourceMappingURL=style.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdDcvcHJvZHVjdDcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esc0NBQXNDO0FBQ3RDO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQixFQUFFO0FBRXRCO0lBQ0UsZUFBZSxFQUFFO0FBRW5CO0lBSUUsYUFBYTtJQUtMLHNCQUFzQixFQUFFO0FBQ2hDO01BQ0U7UUFDRSxtQkFBbUIsRUFBRSxFQUFFO0FBRTdCO0lBSVUsWUFBWSxFQUFFO0FBRXhCO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0UsVUFBVTtNQUNWLGtCQUFrQixFQUFFO0FBQ3BCO1FBQ0UsZUFBZTtRQUNmLGNBQWMsRUFBRTtBQUNsQjtRQUNFLFVBQVU7UUFDVixTQUFTLEVBQUU7QUFDYjtRQUNFLGVBQWUsRUFBRTtBQUV2QjtJQUNFLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0UsV0FBVztNQUVILHVCQUF1QjtNQUV2Qix1QkFBdUIsRUFBRTtBQUVyQztJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQixFQUFFO0FBRXRCO0lBQ0U7TUFJRSxhQUFhLEVBQUUsRUFBRTtBQUVyQjtJQUlFLGFBQWE7SUFLTCxzQkFBc0IsRUFBRTtBQUVsQztJQUlVLFlBQVksRUFBRTtBQUV4QjtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUIsRUFBRTtBQUVyQjtJQUNFLGNBQWMsRUFBRTtBQUVsQjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsYUFBYSxFQUFFO0FBRWpCO0lBQ0Usa0JBQWtCLEVBQUU7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTtBQUV2QjtJQUNFLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUU7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUVILCtCQUErQixFQUFFO0FBQ3pDO01BQ0UsbUJBQW1CO01BQ25CLFdBQVcsRUFBRTtBQUVqQjtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBRTtBQUNsQjtNQUNFLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsV0FBVyxFQUFFO0FBRWpCO0lBQ0UsbUJBQW1CLEVBQUU7QUFFdkI7SUFDRSxtQkFBbUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsY0FBYyxFQUFFO0FBWWxCO0lBQ0U7TUFDRSxVQUFVO01BRUYsbUJBQW1CLEVBQUU7SUFDL0I7TUFDRSxVQUFVO01BRUYsbUJBQW1CLEVBQUUsRUFBRTtBQUVuQyxvQ0FBb0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0Ny9wcm9kdWN0Ny5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKioqKioqKioqKioqKioqKmdsb2JhbHMqKioqKioqKioqKioqL1xyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cclxuICBcclxuICAucHJldmlldyB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk2cHgpIHtcclxuICAgICAgLnByZXZpZXcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH0gfVxyXG4gIFxyXG4gIC5wcmV2aWV3LXBpYyB7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTsgfVxyXG4gIFxyXG4gIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4OyB9XHJcbiAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkge1xyXG4gICAgICB3aWR0aDogMTglO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIuNSU7IH1cclxuICAgICAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSBhIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDsgfVxyXG4gICAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGk6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cclxuICBcclxuICAudGFiLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4gICAgLnRhYi1jb250ZW50IGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzOyB9XHJcbiAgXHJcbiAgLmNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBwYWRkaW5nOiAzZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07IH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTdweCkge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgZGlzcGxheTogZmxleDsgfSB9XHJcbiAgXHJcbiAgLmRldGFpbHMge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuICBcclxuICAuY29sb3JzIHtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxOyB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtdGl0bGUsIC5wcmljZSwgLnNpemVzLCAuY29sb3JzIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBVUFBFUkNBU0U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxyXG4gIFxyXG4gIC5jaGVja2VkLCAucHJpY2Ugc3BhbiB7XHJcbiAgICBjb2xvcjogI2ZmOWYxYTsgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LXRpdGxlLCAucmF0aW5nLCAucHJvZHVjdC1kZXNjcmlwdGlvbiwgLnByaWNlLCAudm90ZSwgLnNpemVzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cclxuICBcclxuICAucHJvZHVjdC10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwOyB9XHJcbiAgXHJcbiAgLnNpemUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XHJcbiAgICAuc2l6ZTpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7IH1cclxuICBcclxuICAuY29sb3Ige1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgfVxyXG4gICAgLmNvbG9yOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDsgfVxyXG4gIFxyXG4gIC5hZGQtdG8tY2FydCwgLmxpa2Uge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOWYxYTtcclxuICAgIHBhZGRpbmc6IDEuMmVtIDEuNWVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IFVQUEVSQ0FTRTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7IH1cclxuICAgIC5hZGQtdG8tY2FydDpob3ZlciwgLmxpa2U6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYjM2ODAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjsgfVxyXG4gIFxyXG4gIC5ub3QtYXZhaWxhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07IH1cclxuICAgIC5ub3QtYXZhaWxhYmxlOmJlZm9yZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcclxuICAgICAgY29udGVudDogXCJcXGYwMGRcIjtcclxuICAgICAgY29sb3I6ICNmZmY7IH1cclxuICBcclxuICAub3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjlmMWE7IH1cclxuICBcclxuICAuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzg1YWQwMDsgfVxyXG4gIFxyXG4gIC5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDc2YWQ7IH1cclxuICBcclxuICAudG9vbHRpcC1pbm5lciB7XHJcbiAgICBwYWRkaW5nOiAxLjNlbTsgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcbiAgXHJcbiAgLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Product7Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product7',
                templateUrl: './product7.component.html',
                styleUrls: ['./product7.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/product-list/product8/product8.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/product-list/product8/product8.component.ts ***!
  \************************************************************************/
/*! exports provided: Product8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product8Component", function() { return Product8Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class Product8Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onp8() {
        this.router.navigate(['/product8']);
    }
    onCart() {
        this.router.navigate(['/cart']);
    }
}
Product8Component.ɵfac = function Product8Component_Factory(t) { return new (t || Product8Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
Product8Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Product8Component, selectors: [["app-product8"]], decls: 52, vars: 0, consts: [["lang", "en"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "container"], [1, "card"], [1, "container-fliud"], [1, "wrapper", "row"], [1, "preview", "col-md-6"], [1, "preview-pic", "tab-content"], ["id", "pic-1", 1, "tab-pane", "active"], ["src", "assets/img/categori/category_2.png"], [1, "details", "col-md-6"], [1, "product-title"], [1, "rating"], [1, "stars"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"], [1, "review-no"], [1, "product-description"], [1, "price"], [1, "vote"], [1, "sizes"], ["data-toggle", "tooltip", "title", "small", 1, "size"], ["data-toggle", "tooltip", "title", "medium", 1, "size"], ["data-toggle", "tooltip", "title", "large", 1, "size"], ["data-toggle", "tooltip", "title", "xtra large", 1, "size"], [1, "action"], ["type", "button", 1, "btn", "hero-btn"], ["type", "button", 1, "btn", "hero-btn", 3, "click"]], template: function Product8Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sports T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sports T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "41 reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "current price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u20B9758");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "91%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " of buyers enjoyed this product! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "(87 votes)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "sizes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Product8Component_Template_button_click_50_listener() { return ctx.onCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: 'open sans';\r\n    overflow-x: hidden; }\r\nimg[_ngcontent-%COMP%] {\r\n    max-width: 100%; }\r\n.preview[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n@media screen and (max-width: 996px) {\r\n      .preview[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px; } }\r\n.preview-pic[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%] {\r\n    border: none;\r\n    margin-top: 15px; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      width: 18%;\r\n      margin-right: 2.5%; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n        display: block; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n        margin: 0; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\r\n        margin-right: 0; }\r\n.tab-content[_ngcontent-%COMP%] {\r\n    overflow: hidden; }\r\n.tab-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      animation-name: opacity;\r\n      animation-duration: .3s; }\r\n.card[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    background: #eee;\r\n    padding: 3em;\r\n    line-height: 1.5em; }\r\n@media screen and (min-width: 997px) {\r\n    .wrapper[_ngcontent-%COMP%] {\r\n      display: flex; } }\r\n.details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n.colors[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.product-title[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%], .colors[_ngcontent-%COMP%] {\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold; }\r\n.checked[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #ff9f1a; }\r\n.product-title[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%], .product-description[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .vote[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px; }\r\n.product-title[_ngcontent-%COMP%] {\r\n    margin-top: 0; }\r\n.size[_ngcontent-%COMP%] {\r\n    margin-right: 10px; }\r\n.size[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 40px; }\r\n.color[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n    height: 2em;\r\n    width: 2em;\r\n    border-radius: 2px; }\r\n.color[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 20px; }\r\n.add-to-cart[_ngcontent-%COMP%], .like[_ngcontent-%COMP%] {\r\n    background: #ff9f1a;\r\n    padding: 1.2em 1.5em;\r\n    border: none;\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    transition: background .3s ease; }\r\n.add-to-cart[_ngcontent-%COMP%]:hover, .like[_ngcontent-%COMP%]:hover {\r\n      background: #b36800;\r\n      color: #fff; }\r\n.not-available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    line-height: 2em; }\r\n.not-available[_ngcontent-%COMP%]:before {\r\n      font-family: fontawesome;\r\n      content: \"\\f00d\";\r\n      color: #fff; }\r\n.orange[_ngcontent-%COMP%] {\r\n    background: #ff9f1a; }\r\n.green[_ngcontent-%COMP%] {\r\n    background: #85ad00; }\r\n.blue[_ngcontent-%COMP%] {\r\n    background: #0076ad; }\r\n.tooltip-inner[_ngcontent-%COMP%] {\r\n    padding: 1.3em; }\r\n@keyframes opacity {\r\n    0% {\r\n      opacity: 0;\r\n      transform: scale(3); }\r\n    100% {\r\n      opacity: 1;\r\n      transform: scale(1); } }\n/*# sourceMappingURL=style.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdDgvcHJvZHVjdDguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esc0NBQXNDO0FBQ3RDO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQixFQUFFO0FBRXRCO0lBQ0UsZUFBZSxFQUFFO0FBRW5CO0lBSUUsYUFBYTtJQUtMLHNCQUFzQixFQUFFO0FBQ2hDO01BQ0U7UUFDRSxtQkFBbUIsRUFBRSxFQUFFO0FBRTdCO0lBSVUsWUFBWSxFQUFFO0FBRXhCO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0UsVUFBVTtNQUNWLGtCQUFrQixFQUFFO0FBQ3BCO1FBQ0UsZUFBZTtRQUNmLGNBQWMsRUFBRTtBQUNsQjtRQUNFLFVBQVU7UUFDVixTQUFTLEVBQUU7QUFDYjtRQUNFLGVBQWUsRUFBRTtBQUV2QjtJQUNFLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0UsV0FBVztNQUVILHVCQUF1QjtNQUV2Qix1QkFBdUIsRUFBRTtBQUVyQztJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQixFQUFFO0FBRXRCO0lBQ0U7TUFJRSxhQUFhLEVBQUUsRUFBRTtBQUVyQjtJQUlFLGFBQWE7SUFLTCxzQkFBc0IsRUFBRTtBQUVsQztJQUlVLFlBQVksRUFBRTtBQUV4QjtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUIsRUFBRTtBQUVyQjtJQUNFLGNBQWMsRUFBRTtBQUVsQjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsYUFBYSxFQUFFO0FBRWpCO0lBQ0Usa0JBQWtCLEVBQUU7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTtBQUV2QjtJQUNFLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUU7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUVILCtCQUErQixFQUFFO0FBQ3pDO01BQ0UsbUJBQW1CO01BQ25CLFdBQVcsRUFBRTtBQUVqQjtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBRTtBQUNsQjtNQUNFLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsV0FBVyxFQUFFO0FBRWpCO0lBQ0UsbUJBQW1CLEVBQUU7QUFFdkI7SUFDRSxtQkFBbUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsY0FBYyxFQUFFO0FBWWxCO0lBQ0U7TUFDRSxVQUFVO01BRUYsbUJBQW1CLEVBQUU7SUFDL0I7TUFDRSxVQUFVO01BRUYsbUJBQW1CLEVBQUUsRUFBRTtBQUVuQyxvQ0FBb0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0OC9wcm9kdWN0OC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKioqKioqKioqKioqKioqKmdsb2JhbHMqKioqKioqKioqKioqL1xyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cclxuICBcclxuICAucHJldmlldyB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk2cHgpIHtcclxuICAgICAgLnByZXZpZXcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH0gfVxyXG4gIFxyXG4gIC5wcmV2aWV3LXBpYyB7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTsgfVxyXG4gIFxyXG4gIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4OyB9XHJcbiAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkge1xyXG4gICAgICB3aWR0aDogMTglO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIuNSU7IH1cclxuICAgICAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSBhIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDsgfVxyXG4gICAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGk6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cclxuICBcclxuICAudGFiLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4gICAgLnRhYi1jb250ZW50IGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzOyB9XHJcbiAgXHJcbiAgLmNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBwYWRkaW5nOiAzZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07IH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTdweCkge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgZGlzcGxheTogZmxleDsgfSB9XHJcbiAgXHJcbiAgLmRldGFpbHMge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuICBcclxuICAuY29sb3JzIHtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxOyB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtdGl0bGUsIC5wcmljZSwgLnNpemVzLCAuY29sb3JzIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBVUFBFUkNBU0U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxyXG4gIFxyXG4gIC5jaGVja2VkLCAucHJpY2Ugc3BhbiB7XHJcbiAgICBjb2xvcjogI2ZmOWYxYTsgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LXRpdGxlLCAucmF0aW5nLCAucHJvZHVjdC1kZXNjcmlwdGlvbiwgLnByaWNlLCAudm90ZSwgLnNpemVzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cclxuICBcclxuICAucHJvZHVjdC10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwOyB9XHJcbiAgXHJcbiAgLnNpemUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XHJcbiAgICAuc2l6ZTpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7IH1cclxuICBcclxuICAuY29sb3Ige1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgfVxyXG4gICAgLmNvbG9yOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDsgfVxyXG4gIFxyXG4gIC5hZGQtdG8tY2FydCwgLmxpa2Uge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOWYxYTtcclxuICAgIHBhZGRpbmc6IDEuMmVtIDEuNWVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IFVQUEVSQ0FTRTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7IH1cclxuICAgIC5hZGQtdG8tY2FydDpob3ZlciwgLmxpa2U6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYjM2ODAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjsgfVxyXG4gIFxyXG4gIC5ub3QtYXZhaWxhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07IH1cclxuICAgIC5ub3QtYXZhaWxhYmxlOmJlZm9yZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcclxuICAgICAgY29udGVudDogXCJcXGYwMGRcIjtcclxuICAgICAgY29sb3I6ICNmZmY7IH1cclxuICBcclxuICAub3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjlmMWE7IH1cclxuICBcclxuICAuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzg1YWQwMDsgfVxyXG4gIFxyXG4gIC5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDc2YWQ7IH1cclxuICBcclxuICAudG9vbHRpcC1pbm5lciB7XHJcbiAgICBwYWRkaW5nOiAxLjNlbTsgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcbiAgXHJcbiAgLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Product8Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product8',
                templateUrl: './product8.component.html',
                styleUrls: ['./product8.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/product-list/product9/product9.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/product-list/product9/product9.component.ts ***!
  \************************************************************************/
/*! exports provided: Product9Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product9Component", function() { return Product9Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class Product9Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onp9() {
        this.router.navigate(['/product9']);
    }
    onCart() {
        this.router.navigate(['/cart']);
    }
}
Product9Component.ɵfac = function Product9Component_Factory(t) { return new (t || Product9Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
Product9Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Product9Component, selectors: [["app-product9"]], decls: 52, vars: 0, consts: [["lang", "en"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], [1, "container"], [1, "card"], [1, "container-fliud"], [1, "wrapper", "row"], [1, "preview", "col-md-6"], [1, "preview-pic", "tab-content"], ["id", "pic-1", 1, "tab-pane", "active"], ["src", "assets/img/categori/category_3.png"], [1, "details", "col-md-6"], [1, "product-title"], [1, "rating"], [1, "stars"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"], [1, "review-no"], [1, "product-description"], [1, "price"], [1, "vote"], [1, "sizes"], ["data-toggle", "tooltip", "title", "small", 1, "size"], ["data-toggle", "tooltip", "title", "medium", 1, "size"], ["data-toggle", "tooltip", "title", "large", 1, "size"], ["data-toggle", "tooltip", "title", "xtra large", 1, "size"], [1, "action"], ["type", "button", 1, "btn", "hero-btn"], ["type", "button", 1, "btn", "hero-btn", 3, "click"]], template: function Product9Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Red Checks Dress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Red Checks Dress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "41 reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "current price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u20B9999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "91%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " of buyers enjoyed this product! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "(87 votes)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "sizes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Product9Component_Template_button_click_50_listener() { return ctx.onCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: 'open sans';\r\n    overflow-x: hidden; }\r\nimg[_ngcontent-%COMP%] {\r\n    max-width: 100%; }\r\n.preview[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n@media screen and (max-width: 996px) {\r\n      .preview[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px; } }\r\n.preview-pic[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%] {\r\n    border: none;\r\n    margin-top: 15px; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      width: 18%;\r\n      margin-right: 2.5%; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n        display: block; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n        margin: 0; }\r\n.preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\r\n        margin-right: 0; }\r\n.tab-content[_ngcontent-%COMP%] {\r\n    overflow: hidden; }\r\n.tab-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      animation-name: opacity;\r\n      animation-duration: .3s; }\r\n.card[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    background: #eee;\r\n    padding: 3em;\r\n    line-height: 1.5em; }\r\n@media screen and (min-width: 997px) {\r\n    .wrapper[_ngcontent-%COMP%] {\r\n      display: flex; } }\r\n.details[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; }\r\n.colors[_ngcontent-%COMP%] {\r\n    flex-grow: 1; }\r\n.product-title[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%], .colors[_ngcontent-%COMP%] {\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold; }\r\n.checked[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #ff9f1a; }\r\n.product-title[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%], .product-description[_ngcontent-%COMP%], .price[_ngcontent-%COMP%], .vote[_ngcontent-%COMP%], .sizes[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px; }\r\n.product-title[_ngcontent-%COMP%] {\r\n    margin-top: 0; }\r\n.size[_ngcontent-%COMP%] {\r\n    margin-right: 10px; }\r\n.size[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 40px; }\r\n.color[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n    height: 2em;\r\n    width: 2em;\r\n    border-radius: 2px; }\r\n.color[_ngcontent-%COMP%]:first-of-type {\r\n      margin-left: 20px; }\r\n.add-to-cart[_ngcontent-%COMP%], .like[_ngcontent-%COMP%] {\r\n    background: #ff9f1a;\r\n    padding: 1.2em 1.5em;\r\n    border: none;\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    transition: background .3s ease; }\r\n.add-to-cart[_ngcontent-%COMP%]:hover, .like[_ngcontent-%COMP%]:hover {\r\n      background: #b36800;\r\n      color: #fff; }\r\n.not-available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    line-height: 2em; }\r\n.not-available[_ngcontent-%COMP%]:before {\r\n      font-family: fontawesome;\r\n      content: \"\\f00d\";\r\n      color: #fff; }\r\n.orange[_ngcontent-%COMP%] {\r\n    background: #ff9f1a; }\r\n.green[_ngcontent-%COMP%] {\r\n    background: #85ad00; }\r\n.blue[_ngcontent-%COMP%] {\r\n    background: #0076ad; }\r\n.tooltip-inner[_ngcontent-%COMP%] {\r\n    padding: 1.3em; }\r\n@keyframes opacity {\r\n    0% {\r\n      opacity: 0;\r\n      transform: scale(3); }\r\n    100% {\r\n      opacity: 1;\r\n      transform: scale(1); } }\n/*# sourceMappingURL=style.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdDkvcHJvZHVjdDkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esc0NBQXNDO0FBQ3RDO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQixFQUFFO0FBRXRCO0lBQ0UsZUFBZSxFQUFFO0FBRW5CO0lBSUUsYUFBYTtJQUtMLHNCQUFzQixFQUFFO0FBQ2hDO01BQ0U7UUFDRSxtQkFBbUIsRUFBRSxFQUFFO0FBRTdCO0lBSVUsWUFBWSxFQUFFO0FBRXhCO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0UsVUFBVTtNQUNWLGtCQUFrQixFQUFFO0FBQ3BCO1FBQ0UsZUFBZTtRQUNmLGNBQWMsRUFBRTtBQUNsQjtRQUNFLFVBQVU7UUFDVixTQUFTLEVBQUU7QUFDYjtRQUNFLGVBQWUsRUFBRTtBQUV2QjtJQUNFLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0UsV0FBVztNQUVILHVCQUF1QjtNQUV2Qix1QkFBdUIsRUFBRTtBQUVyQztJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQixFQUFFO0FBRXRCO0lBQ0U7TUFJRSxhQUFhLEVBQUUsRUFBRTtBQUVyQjtJQUlFLGFBQWE7SUFLTCxzQkFBc0IsRUFBRTtBQUVsQztJQUlVLFlBQVksRUFBRTtBQUV4QjtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUIsRUFBRTtBQUVyQjtJQUNFLGNBQWMsRUFBRTtBQUVsQjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsYUFBYSxFQUFFO0FBRWpCO0lBQ0Usa0JBQWtCLEVBQUU7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTtBQUV2QjtJQUNFLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUU7QUFDcEI7TUFDRSxpQkFBaUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUVILCtCQUErQixFQUFFO0FBQ3pDO01BQ0UsbUJBQW1CO01BQ25CLFdBQVcsRUFBRTtBQUVqQjtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBRTtBQUNsQjtNQUNFLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsV0FBVyxFQUFFO0FBRWpCO0lBQ0UsbUJBQW1CLEVBQUU7QUFFdkI7SUFDRSxtQkFBbUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsY0FBYyxFQUFFO0FBWWxCO0lBQ0U7TUFDRSxVQUFVO01BRUYsbUJBQW1CLEVBQUU7SUFDL0I7TUFDRSxVQUFVO01BRUYsbUJBQW1CLEVBQUUsRUFBRTtBQUVuQyxvQ0FBb0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0OS9wcm9kdWN0OS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKioqKioqKioqKioqKioqKmdsb2JhbHMqKioqKioqKioqKioqL1xyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cclxuICBcclxuICAucHJldmlldyB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk2cHgpIHtcclxuICAgICAgLnByZXZpZXcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH0gfVxyXG4gIFxyXG4gIC5wcmV2aWV3LXBpYyB7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTsgfVxyXG4gIFxyXG4gIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4OyB9XHJcbiAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkge1xyXG4gICAgICB3aWR0aDogMTglO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIuNSU7IH1cclxuICAgICAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSBhIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDsgfVxyXG4gICAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGk6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cclxuICBcclxuICAudGFiLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4gICAgLnRhYi1jb250ZW50IGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzOyB9XHJcbiAgXHJcbiAgLmNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBwYWRkaW5nOiAzZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07IH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTdweCkge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgZGlzcGxheTogZmxleDsgfSB9XHJcbiAgXHJcbiAgLmRldGFpbHMge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuICBcclxuICAuY29sb3JzIHtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxOyB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtdGl0bGUsIC5wcmljZSwgLnNpemVzLCAuY29sb3JzIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBVUFBFUkNBU0U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxyXG4gIFxyXG4gIC5jaGVja2VkLCAucHJpY2Ugc3BhbiB7XHJcbiAgICBjb2xvcjogI2ZmOWYxYTsgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LXRpdGxlLCAucmF0aW5nLCAucHJvZHVjdC1kZXNjcmlwdGlvbiwgLnByaWNlLCAudm90ZSwgLnNpemVzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cclxuICBcclxuICAucHJvZHVjdC10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwOyB9XHJcbiAgXHJcbiAgLnNpemUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XHJcbiAgICAuc2l6ZTpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7IH1cclxuICBcclxuICAuY29sb3Ige1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgfVxyXG4gICAgLmNvbG9yOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDsgfVxyXG4gIFxyXG4gIC5hZGQtdG8tY2FydCwgLmxpa2Uge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOWYxYTtcclxuICAgIHBhZGRpbmc6IDEuMmVtIDEuNWVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IFVQUEVSQ0FTRTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7IH1cclxuICAgIC5hZGQtdG8tY2FydDpob3ZlciwgLmxpa2U6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYjM2ODAwO1xyXG4gICAgICBjb2xvcjogI2ZmZjsgfVxyXG4gIFxyXG4gIC5ub3QtYXZhaWxhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07IH1cclxuICAgIC5ub3QtYXZhaWxhYmxlOmJlZm9yZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcclxuICAgICAgY29udGVudDogXCJcXGYwMGRcIjtcclxuICAgICAgY29sb3I6ICNmZmY7IH1cclxuICBcclxuICAub3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjlmMWE7IH1cclxuICBcclxuICAuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogIzg1YWQwMDsgfVxyXG4gIFxyXG4gIC5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDc2YWQ7IH1cclxuICBcclxuICAudG9vbHRpcC1pbm5lciB7XHJcbiAgICBwYWRkaW5nOiAxLjNlbTsgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcbiAgXHJcbiAgLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Product9Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product9',
                templateUrl: './product9.component.html',
                styleUrls: ['./product9.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ProductsComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onp1() {
        this.router.navigate(['/product1']);
    }
    onp2() {
        this.router.navigate(['/product2']);
    }
    onp3() {
        this.router.navigate(['/product3']);
    }
    onp4() {
        this.router.navigate(['/product4']);
    }
    onp5() {
        this.router.navigate(['/product5']);
    }
    onp6() {
        this.router.navigate(['/product6']);
    }
    onp7() {
        this.router.navigate(['/product7']);
    }
    onp8() {
        this.router.navigate(['/product8']);
    }
    onp9() {
        this.router.navigate(['/product9']);
    }
    onp10() {
        this.router.navigate(['/product10']);
    }
    onp11() {
        this.router.navigate(['/product11']);
    }
    onp12() {
        this.router.navigate(['/product12']);
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 269, vars: 0, consts: [[1, "latest-product-area", "padding-bottom"], [1, "container"], [1, "row", "product-btn", "d-flex", "justify-content-end", "align-items-end"], [1, "col-xl-4", "col-lg-5", "col-md-5"], [1, "section-tittle", "mb-30"], [1, "col-xl-8", "col-lg-7", "col-md-7"], [1, "properties__button", "f-right"], ["id", "nav-tab", "role", "tablist", 1, "nav", "nav-tabs"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "nav-home", "role", "tabpanel", "aria-labelledby", "nav-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "row"], [1, "col-xl-4", "col-lg-4", "col-md-6"], [1, "single-product", "mb-60"], [1, "product-img"], ["src", "assets/img/categori/product1.png", "alt", ""], [1, "new-product"], [1, "product-caption"], [1, "product-ratting"], [1, "far", "fa-star"], [1, "far", "fa-star", "low-star"], [1, "pointer", 3, "click"], [1, "price"], [1, "discount"], ["src", "assets/img/categori/product2.png", "alt", ""], ["src", "assets/img/categori/product3.png", "alt", ""], ["src", "assets/img/categori/product4.png", "alt", ""], ["src", "assets/img/categori/product5.png", "alt", ""], ["src", "assets/img/categori/product6.png", "alt", ""], ["src", "assets/img/categori/category_1.png", "alt", ""], ["src", "assets/img/categori/category_2.png", "alt", ""], ["src", "assets/img/categori/category_3.png", "alt", ""], ["src", "assets/img/categori/category_8.png", "alt", ""], ["src", "assets/img/categori/category_9.png", "alt", ""], ["src", "assets/img/categori/category_6.png", "alt", ""]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_a_click_29_listener() { return ctx.onp1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Men's Shorts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u20B9120");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u20B9180");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_a_click_49_listener() { return ctx.onp2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Green Hoddie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u20B9499");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u20B9599");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_a_click_72_listener() { return ctx.onp3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Full sleave Dress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u20B9299");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u20B9499");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_a_click_92_listener() { return ctx.onp4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Full sleave Gray Dress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u20B9499");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\u20B9799");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_a_click_112_listener() { return ctx.onp5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Black Pant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\u20B9399");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\u20B9499");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_a_click_135_listener() { return ctx.onp6(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Denim Coat for Girls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\u20B91099");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\u20B91299");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_a_click_155_listener() { return ctx.onp7(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Festive Dress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\u20B93299");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\u20B94299");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_a_click_175_listener() { return ctx.onp8(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Sports T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "\u20B9758");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "\u20B9854");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_a_click_195_listener() { return ctx.onp9(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Red Checks Dress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\u20B9999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "\u20B92999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_a_click_218_listener() { return ctx.onp10(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Men's Denim Coat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "\u20B91099");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "\u20B91299");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_a_click_241_listener() { return ctx.onp11(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Nike Red Shoes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "\u20B93099");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "\u20B94299");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_a_click_261_listener() { return ctx.onp12(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Military Gray T-Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "\u20B9599");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "\u20B9799");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".pointer[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class SignupComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onLogin() {
        this.router.navigate(['/login']);
    }
    onSignup() {
        this.router.navigate(['/register']);
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 25, vars: 0, consts: [[1, "login_part", "section_padding"], [1, "container"], [1, "row", "align-items-center"], [1, "login_part_form"], [1, "login_part_form_iner"], ["method", "POST", "action", "/register", 1, "row", "contact_form"], [1, "col-md-12", "form-group", "p_star"], ["type", "text", "id", "fullname", "name", "fullname", "value", "", "required", "", "placeholder", "Full Name", 1, "form-control"], ["type", "text", "id", "uname", "name", "uname", "value", "", "required", "", "placeholder", "Username", 1, "form-control"], ["type", "email", "id", "email", "name", "email", "value", "", "required", "", "placeholder", "Email", 1, "form-control"], ["type", "password", "id", "password", "name", "password", "value", "", "required", "", "placeholder", "Password", 1, "form-control"], ["type", "number", "id", "phone", "name", "phone", "value", "", "required", "", "placeholder", "Phone Number", 1, "form-control"], [1, "col-md-12", "form-group"], ["type", "submit", "value", "submit", 1, "btn_3"], ["type", "submit", "value", "submit", 1, "btn_3", 3, "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Please Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_23_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Log In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/app-http.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/app-http.service.ts ***!
  \**********************************************/
/*! exports provided: AppHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHttpService", function() { return AppHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");




class AppHttpService {
    constructor(http) {
        this.http = http;
    }
    getHeaders() {
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // TODO: add token
        return headers;
    }
    getRequestOptions() {
        const options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]();
        options.headers = this.getHeaders();
        return options;
    }
    get(url) {
        return this.http.get(url, this.getRequestOptions());
    }
    post(url, data) {
        return this.http.post(url, data, this.getRequestOptions());
    }
}
AppHttpService.ɵfac = function AppHttpService_Factory(t) { return new (t || AppHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"])); };
AppHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppHttpService, factory: AppHttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-http.service */ "./src/app/services/app-http.service.ts");




class AuthService {
    constructor(appHttp) {
        this.appHttp = appHttp;
    }
    registerUser(user) {
        return this.appHttp.post('users/register', user)
            .map(res => res.json());
    }
    authenticateUser(user) {
        return this.appHttp.post('users/login', user)
            .map(res => res.json());
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_http_service__WEBPACK_IMPORTED_MODULE_2__["AppHttpService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _app_http_service__WEBPACK_IMPORTED_MODULE_2__["AppHttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\KL University\SEM 3\SDP\ecommercewebapplication\Front End (Angular APP)\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map