(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./customer/customer.module": [
		"./src/app/customer/customer.module.ts",
		"customer-customer-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/*

The Error Interceptor intercepts http responses from the api to check if there were any errors.
If there is a 401 Unauthorized response the user is automatically logged out of the application,
all other errors are re-thrown up to the calling service so an alert error message can be displayed to the user.

*/





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if ([401, 403, 405].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });





/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(this.authenticationService.getCurrentUser());
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    "x-access-token": "" + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var AuthService = /** @class */ (function () {
    function AuthService(httpService) {
        this.httpService = httpService;
    }
    AuthService.prototype.customer_login = function (data) {
        var results = this.httpService.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'auth/patient/login', data, {
            observe: 'response',
            responseType: 'json'
        });
        return results;
    };
    AuthService.prototype.practice_login = function (username, password) {
        var user_data = "";
        localStorage.setItem('user_data', user_data);
        return [username, password];
    };
    AuthService.prototype.customer_signup = function (data) {
        var results = this.httpService.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'patient', data, {
            observe: 'response',
            responseType: 'json'
        });
        return results;
    };
    AuthService.prototype.practice_signup = function (data) {
        var user_data = "";
        localStorage.setItem('user_data', user_data);
        return data;
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('user_data');
    };
    AuthService.prototype.customer_account_verify = function (data) {
        var token = JSON.parse(this.getSession('unverify_user'));
        data.token = token;
        var results = this.httpService.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'patient/account_verify', data, {
            observe: 'response',
            responseType: 'json'
        });
        return results;
    };
    AuthService.prototype.getCurrentUser = function () {
        return localStorage.getItem('user_data');
    };
    AuthService.prototype.setUser = function (user_data) {
        localStorage.setItem('user_data', JSON.stringify(user_data));
    };
    AuthService.prototype.setSession = function (key, data) {
        sessionStorage.setItem(key, JSON.stringify(data));
    };
    AuthService.prototype.getSession = function (key) {
        return sessionStorage.getItem(key);
    };
    AuthService.prototype.removeSession = function (key) {
        sessionStorage.removeItem(key);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AuthService, InsuranceProviderService, SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/_services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony import */ var _insurance_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insurance_provider.service */ "./src/app/_services/insurance_provider.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InsuranceProviderService", function() { return _insurance_provider_service__WEBPACK_IMPORTED_MODULE_1__["InsuranceProviderService"]; });

/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.service */ "./src/app/_services/search.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return _search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]; });






/***/ }),

/***/ "./src/app/_services/insurance_provider.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/_services/insurance_provider.service.ts ***!
  \*********************************************************/
/*! exports provided: InsuranceProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceProviderService", function() { return InsuranceProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var InsuranceProviderService = /** @class */ (function () {
    function InsuranceProviderService(httpService) {
        this.httpService = httpService;
    }
    InsuranceProviderService.prototype.search = function (term) {
        var listOfBooks = this.httpService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'insurance_provider?query=' + term)
            .pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), // WAIT FOR 500 MILISECONDS ATER EACH KEY STROKE.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return (data.length != 0 ? data : [{ "name": "No Record Found" }]);
        }));
        return listOfBooks;
    };
    InsuranceProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InsuranceProviderService);
    return InsuranceProviderService;
}());



/***/ }),

/***/ "./src/app/_services/search.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/search.service.ts ***!
  \*********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");






var SearchService = /** @class */ (function () {
    function SearchService(httpService) {
        this.httpService = httpService;
    }
    SearchService.prototype.search = function (req) {
        var results = this.httpService.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'search', req)
            .pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), // WAIT FOR 500 MILISECONDS ATER EACH KEY STROKE.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return (data.length != 0 ? data : [{ "name": "No Record Found" }]);
        }));
        return results;
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-page/search-page.component */ "./src/app/search-page/search-page.component.ts");
/* harmony import */ var _signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-page/signup-page.component */ "./src/app/signup-page/signup-page.component.ts");
/* harmony import */ var _professional_professional_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./professional/professional.component */ "./src/app/professional/professional.component.ts");








var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'search',
        component: _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_5__["SearchPageComponent"]
    },
    {
        path: 'signup',
        component: _signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_6__["SignupPageComponent"]
    },
    {
        path: 'professional',
        component: _professional_professional_component__WEBPACK_IMPORTED_MODULE_7__["ProfessionalComponent"]
    },
    {
        path: 'patient',
        loadChildren: './customer/customer.module#CustomerModule'
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            // imports: [RouterModule.forRoot(routes,{useHash:true})],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading-bar [color]=\"'#fff'\"></ngx-loading-bar>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Medical App';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-loading-bar/router */ "./node_modules/@ngx-loading-bar/router/fesm5/ngx-loading-bar-router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _home_search_home_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home-search/home-search.component */ "./src/app/home-search/home-search.component.ts");
/* harmony import */ var _inc_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./inc/header/header.component */ "./src/app/inc/header/header.component.ts");
/* harmony import */ var _inc_specialitiessection_specialitiessection_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./inc/specialitiessection/specialitiessection.component */ "./src/app/inc/specialitiessection/specialitiessection.component.ts");
/* harmony import */ var _inc_howitworkssection_howitworkssection_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./inc/howitworkssection/howitworkssection.component */ "./src/app/inc/howitworkssection/howitworkssection.component.ts");
/* harmony import */ var _inc_provides_section_provides_section_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./inc/provides-section/provides-section.component */ "./src/app/inc/provides-section/provides-section.component.ts");
/* harmony import */ var _inc_healthtips_section_healthtips_section_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./inc/healthtips-section/healthtips-section.component */ "./src/app/inc/healthtips-section/healthtips-section.component.ts");
/* harmony import */ var _practice_home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./practice/home/home.component */ "./src/app/practice/home/home.component.ts");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./core/material.module */ "./src/app/core/material.module.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _inc_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./inc/footer/footer.component */ "./src/app/inc/footer/footer.component.ts");
/* harmony import */ var _inc_partners_partners_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./inc/partners/partners.component */ "./src/app/inc/partners/partners.component.ts");
/* harmony import */ var _inc_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./inc/testimonial/testimonial.component */ "./src/app/inc/testimonial/testimonial.component.ts");
/* harmony import */ var _inc_newssection_newssection_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./inc/newssection/newssection.component */ "./src/app/inc/newssection/newssection.component.ts");
/* harmony import */ var _inc_popupmodal_login_popupmodal_login_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./inc/popupmodal-login/popupmodal-login.component */ "./src/app/inc/popupmodal-login/popupmodal-login.component.ts");
/* harmony import */ var _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./search-page/search-page.component */ "./src/app/search-page/search-page.component.ts");
/* harmony import */ var _inc_innheader_innheader_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./inc/innheader/innheader.component */ "./src/app/inc/innheader/innheader.component.ts");
/* harmony import */ var _inc_filter_section_filter_section_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./inc/filter-section/filter-section.component */ "./src/app/inc/filter-section/filter-section.component.ts");
/* harmony import */ var _inc_search_result_item_search_result_item_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./inc/search-result-item/search-result-item.component */ "./src/app/inc/search-result-item/search-result-item.component.ts");
/* harmony import */ var _signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./signup-page/signup-page.component */ "./src/app/signup-page/signup-page.component.ts");
/* harmony import */ var _inc_innheadercommon_innheadercommon_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./inc/innheadercommon/innheadercommon.component */ "./src/app/inc/innheadercommon/innheadercommon.component.ts");
/* harmony import */ var _inc_signformsection_signformsection_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./inc/signformsection/signformsection.component */ "./src/app/inc/signformsection/signformsection.component.ts");
/* harmony import */ var _professional_professional_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./professional/professional.component */ "./src/app/professional/professional.component.ts");
/* harmony import */ var _inc_professionalformsection_professionalformsection_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./inc/professionalformsection/professionalformsection.component */ "./src/app/inc/professionalformsection/professionalformsection.component.ts");






// https://github.com/aitboudad/ngx-loading-bar















// core modules

// Import your library

// Import helpers















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
                _home_search_home_search_component__WEBPACK_IMPORTED_MODULE_14__["HomeSearchComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
                _inc_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                _inc_specialitiessection_specialitiessection_component__WEBPACK_IMPORTED_MODULE_16__["SpecialitiessectionComponent"],
                _inc_howitworkssection_howitworkssection_component__WEBPACK_IMPORTED_MODULE_17__["HowitworkssectionComponent"],
                _inc_provides_section_provides_section_component__WEBPACK_IMPORTED_MODULE_18__["ProvidesSectionComponent"],
                _inc_healthtips_section_healthtips_section_component__WEBPACK_IMPORTED_MODULE_19__["HealthtipsSectionComponent"],
                _inc_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__["FooterComponent"],
                _inc_partners_partners_component__WEBPACK_IMPORTED_MODULE_25__["PartnersComponent"],
                _inc_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_26__["TestimonialComponent"],
                _inc_newssection_newssection_component__WEBPACK_IMPORTED_MODULE_27__["NewssectionComponent"],
                _inc_popupmodal_login_popupmodal_login_component__WEBPACK_IMPORTED_MODULE_28__["PopupmodalLoginComponent"],
                _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_29__["SearchPageComponent"],
                _inc_innheader_innheader_component__WEBPACK_IMPORTED_MODULE_30__["InnheaderComponent"],
                _inc_filter_section_filter_section_component__WEBPACK_IMPORTED_MODULE_31__["FilterSectionComponent"],
                _inc_search_result_item_search_result_item_component__WEBPACK_IMPORTED_MODULE_32__["SearchResultItemComponent"],
                _signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_33__["SignupPageComponent"],
                _inc_innheadercommon_innheadercommon_component__WEBPACK_IMPORTED_MODULE_34__["InnheadercommonComponent"],
                _inc_signformsection_signformsection_component__WEBPACK_IMPORTED_MODULE_35__["SignformsectionComponent"],
                _professional_professional_component__WEBPACK_IMPORTED_MODULE_36__["ProfessionalComponent"],
                _inc_professionalformsection_professionalformsection_component__WEBPACK_IMPORTED_MODULE_37__["ProfessionalformsectionComponent"],
                _practice_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _core_material_module__WEBPACK_IMPORTED_MODULE_21__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_6__["LoadingBarRouterModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_22__["OwlModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__["AngularFontAwesomeModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_23__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_23__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/material.module.ts":
/*!*****************************************!*\
  !*** ./src/app/core/material.module.ts ***!
  \*****************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/home-search/home-search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/home-search/home-search.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nheader{\r\n transition: all 600ms ease-in-out;\r\n  box-shadow: 2px 2px 5px #ccc;\r\n  padding: 10px 40px;\r\n  position: fixed;\r\n  z-index: 10000;\r\n  width: 100%;\r\n}\r\n\r\n.homesearch{\r\n  background-color:#0073a2; \r\n  height:375px;    \r\n  }\r\n\r\n.homesearch-content .doctorsFind {\r\n    color: var(--white);\r\n    font-size: 56px;\r\n    font-weight: 500;\r\n    letter-spacing: -4px;\r\n    line-height: normal;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.homesearch-content .doctorsFind span {\r\n  font-weight: 700;\r\n  font-size: 56px;\r\n}\r\n\r\n.homesearch-content p{\r\n  font-weight: 300;\r\n  font-size: 14px;\r\n  color: var(--white);\r\n}\r\n\r\nspan.d-inf{\r\n      display: block;\r\n      font-size: 34px;\r\n      font-weight: 800;\r\n      text-transform: uppercase;\r\n  }\r\n\r\n.form-group input + label {\r\n      position: absolute;\r\n      padding-left: 10px;\r\n  }\r\n\r\n.home-page-search{\r\n  margin: auto;\r\n      \r\n  }\r\n\r\n.login .form-group input.form-control{\r\n  margin-top: 0px;    \r\n  /*margin-right: 25px;  */\r\n  width: 100%;\r\n  border: 0;    \r\n  }\r\n\r\n.home-page-search-form fieldset {\r\n    width: calc(100% - 73px);\r\n    position: relative;\r\n}\r\n\r\n.home-page-search-form fieldset:after{\r\n  content: '';\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 8.5px 0 8.5px 8px;\r\n  border-color: transparent transparent transparent #fff;\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n}\r\n\r\n.login .form-group{\r\n  padding: 0;\r\n  width: 24.78%;\r\n  float: left;\r\n  position: relative;\r\n  }\r\n\r\n.homesearch-content h2{\r\n  font-weight: 600;    \r\n  }\r\n\r\n.homesearch  button.submit{\r\n    border-radius: 5px;\r\n    background-color: var(--orange);\r\n    float: right;\r\n    width: 5%;\r\n    right: 0;\r\n    height: 50px;\r\n  }\r\n\r\n.home-page-search-form .form-control {\r\n    background: #f6f6f6;\r\n    border: 0px;\r\n    border-radius: 0px;\r\n    padding: 0;\r\n    font-size: 14px;\r\n    color: var(--black);\r\n    font-weight: 400;\r\n    height: calc(1.0rem + 34px);\r\n    box-shadow: none;\r\n    outline: none;\r\n    padding-left: 50px;\r\n    margin: 0;\r\n}\r\n\r\n.home-page-search-form .search-field:first-child .form-control {\r\n  border-radius: 5px 0px 0px 5px;\r\n}\r\n\r\n.search-field:last-child .form-control{\r\n  border-radius:  0px 5px 5px 0px;\r\n}\r\n\r\n.home-page-search-form .form-group::before {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 9px;\r\n  width: 1px;\r\n  height: 30px;\r\n  background: #dddddd;\r\n  content: \"\";\r\n  z-index: 1;\r\n}\r\n\r\n.login .form-group input::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  color: var(--black);\r\n}\r\n\r\n.login .form-group input::-moz-placeholder { /* Firefox 19+ */\r\n  color: var(--black);\r\n}\r\n\r\n.login .form-group input:-ms-input-placeholder { /* IE 10+ */\r\n  color: var(--black);\r\n}\r\n\r\n.login .form-group input:-moz-placeholder { /* Firefox 18- */\r\n  color: var(--black);\r\n}\r\n\r\n.home-page-search-form .provider {\r\n  position: absolute;\r\n  background-position: -18px -62px;\r\n  width: 30px;\r\n  height: 30px;\r\n  float: left;\r\n  margin: 0px 10px;\r\n}\r\n\r\n.home-page-search-form .procedureIcon {\r\n  position: absolute;\r\n  background-position: -64px -60px;\r\n  width: 30px;\r\n  height: 30px;\r\n  float: left;\r\n  margin: 6px 10px;\r\n}\r\n\r\n.home-page-search-form .zip-code {\r\n  position: absolute;\r\n  background-position: -72px -62px;\r\n  width: 30px;\r\n  height: 30px;\r\n  float: left;\r\n  margin: 0px 10px;\r\n}\r\n\r\n.home-page-search-form .Insurrance-Carrier {\r\n  position: absolute;\r\n  background-position: -132px -62px;\r\n  width: 32px;\r\n  height: 30px;\r\n  float: left;\r\n  margin: 0px 10px;\r\n}\r\n\r\n.home-page-search-form .Insurrance-Plan {\r\n  position: absolute;\r\n  background-position: -199px -61px;\r\n  width: 30px;\r\n  height: 30px;\r\n  float: left;\r\n  margin: 0px 10px;\r\n}\r\n\r\n.home-page-search-form .submit{\r\n  background-position: -237px -53px;\r\n  width: 73px;\r\n  height: 50px;\r\n  margin: 0px 0px;\r\n}\r\n\r\n.search-drop-down {\r\n  position: absolute;\r\n  width: 50%;\r\n  max-height: 300px;\r\n  overflow-y: auto;\r\n  z-index: 10;\r\n  background-color: #F6F6F6;\r\n  font-family: sans-serif;\r\n  opacity: 0.98;\r\n}\r\n\r\n.search-results {\r\n  padding: 10px;\r\n}\r\n\r\n.search-results:hover {\r\n  background: #707070;\r\n}\r\n\r\n.color-purple {\r\n  color: #A550BC;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1zZWFyY2gvaG9tZS1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Q0FDQyxpQ0FBaUM7RUFDaEMsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1o7O0FBR0E7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVFO01BQ0ksY0FBYztNQUNkLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIseUJBQXlCO0VBQzdCOztBQUVBO01BQ0ksa0JBQWtCO01BQ2xCLGtCQUFrQjtFQUN0Qjs7QUFFQTtFQUNBLFlBQVk7O0VBRVo7O0FBRUE7RUFDQSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxTQUFTO0VBQ1Q7O0FBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixzREFBc0Q7RUFDdEQsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixtQ0FBMkI7VUFBM0IsMkJBQTJCO0FBQzdCOztBQUVDO0VBQ0MsVUFBVTtFQUNWLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCOztBQUVBO0VBQ0EsZ0JBQWdCO0VBQ2hCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7SUFDUixZQUFZO0VBQ2Q7O0FBR0E7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFHQTtFQUtFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUtFLCtCQUErQjtBQUNqQzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBQ0Esc0RBQXNELHdCQUF3QjtFQUM1RSxtQkFBbUI7QUFDckI7O0FBQ0EsNkNBQTZDLGdCQUFnQjtFQUMzRCxtQkFBbUI7QUFDckI7O0FBQ0EsaURBQWlELFdBQVc7RUFDMUQsbUJBQW1CO0FBQ3JCOztBQUNBLDRDQUE0QyxnQkFBZ0I7RUFDMUQsbUJBQW1CO0FBQ3JCOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtc2VhcmNoL2hvbWUtc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaGVhZGVye1xyXG4gdHJhbnNpdGlvbjogYWxsIDYwMG1zIGVhc2UtaW4tb3V0O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4ICNjY2M7XHJcbiAgcGFkZGluZzogMTBweCA0MHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDAwMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhvbWVzZWFyY2h7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2EyOyBcclxuICBoZWlnaHQ6Mzc1cHg7ICAgIFxyXG4gIH1cclxuICBcclxuXHJcbiAgLmhvbWVzZWFyY2gtY29udGVudCAuZG9jdG9yc0ZpbmQge1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGZvbnQtc2l6ZTogNTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbiAgXHJcbi5ob21lc2VhcmNoLWNvbnRlbnQgLmRvY3RvcnNGaW5kIHNwYW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiA1NnB4O1xyXG59XHJcbi5ob21lc2VhcmNoLWNvbnRlbnQgcHtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcbiAgXHJcbiAgc3Bhbi5kLWluZntcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXAgaW5wdXQgKyBsYWJlbCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuaG9tZS1wYWdlLXNlYXJjaHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgICAgIFxyXG4gIH1cclxuICBcclxuICAubG9naW4gLmZvcm0tZ3JvdXAgaW5wdXQuZm9ybS1jb250cm9se1xyXG4gIG1hcmdpbi10b3A6IDBweDsgICAgXHJcbiAgLyptYXJnaW4tcmlnaHQ6IDI1cHg7ICAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMDsgICAgXHJcbiAgfVxyXG4gIC5ob21lLXBhZ2Utc2VhcmNoLWZvcm0gZmllbGRzZXQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDczcHgpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5ob21lLXBhZ2Utc2VhcmNoLWZvcm0gZmllbGRzZXQ6YWZ0ZXJ7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiA4LjVweCAwIDguNXB4IDhweDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuIC5sb2dpbiAuZm9ybS1ncm91cHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAyNC43OCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAuaG9tZXNlYXJjaC1jb250ZW50IGgye1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7ICAgIFxyXG4gIH1cclxuICBcclxuICAuaG9tZXNlYXJjaCAgYnV0dG9uLnN1Ym1pdHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcblxyXG5cclxuICAuaG9tZS1wYWdlLXNlYXJjaC1mb3JtIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEuMHJlbSArIDM0cHgpO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4uaG9tZS1wYWdlLXNlYXJjaC1mb3JtIC5zZWFyY2gtZmllbGQ6Zmlyc3QtY2hpbGQgLmZvcm0tY29udHJvbCB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcclxuICAtby1ib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWZpZWxkOmxhc3QtY2hpbGQgLmZvcm0tY29udHJvbHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6ICAwcHggNXB4IDVweCAwcHg7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6ICAwcHggNXB4IDVweCAwcHg7XHJcbiAgLW8tYm9yZGVyLXJhZGl1czogIDBweCA1cHggNXB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAgMHB4IDVweCA1cHggMHB4O1xyXG59XHJcbi5ob21lLXBhZ2Utc2VhcmNoLWZvcm0gLmZvcm0tZ3JvdXA6OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogOXB4O1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNkZGRkZGQ7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5sb2dpbiAuZm9ybS1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cclxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG59XHJcbi5sb2dpbiAuZm9ybS1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTkrICovXHJcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxufVxyXG4ubG9naW4gLmZvcm0tZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSUUgMTArICovXHJcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxufVxyXG4ubG9naW4gLmZvcm0tZ3JvdXAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXHJcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxufVxyXG5cclxuXHJcbi5ob21lLXBhZ2Utc2VhcmNoLWZvcm0gLnByb3ZpZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE4cHggLTYycHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5ob21lLXBhZ2Utc2VhcmNoLWZvcm0gLnByb2NlZHVyZUljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtNjBweDtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luOiA2cHggMTBweDtcclxufVxyXG5cclxuXHJcbi5ob21lLXBhZ2Utc2VhcmNoLWZvcm0gLnppcC1jb2RlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTcycHggLTYycHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5ob21lLXBhZ2Utc2VhcmNoLWZvcm0gLkluc3VycmFuY2UtQ2FycmllciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMzJweCAtNjJweDtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luOiAwcHggMTBweDtcclxufVxyXG5cclxuLmhvbWUtcGFnZS1zZWFyY2gtZm9ybSAuSW5zdXJyYW5jZS1QbGFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5OXB4IC02MXB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDBweCAxMHB4O1xyXG59XHJcblxyXG5cclxuLmhvbWUtcGFnZS1zZWFyY2gtZm9ybSAuc3VibWl0e1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMzdweCAtNTNweDtcclxuICB3aWR0aDogNzNweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luOiAwcHggMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWRyb3AtZG93biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICB6LWluZGV4OiAxMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIG9wYWNpdHk6IDAuOTg7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHRzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNzA3MDcwO1xyXG59XHJcblxyXG4uY29sb3ItcHVycGxlIHtcclxuICBjb2xvcjogI0E1NTBCQztcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home-search/home-search.component.html":
/*!********************************************************!*\
  !*** ./src/app/home-search/home-search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"homesearch commenPadding\" style=\"background-image:url(assets/home-search-bg.jpg)\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 col-sm-12\">\r\n                <div class=\"homesearch-content\">\r\n                  <h1 class=\"doctorsFind text-center\">Find Nearby Medical Professionals</h1>\r\n                    <p class=\"text-center\">Your complete solution for better health</p>\r\n\r\n                   <!-- <div class=\"width-half\">\r\n                        <label for=\"search\">\r\n                            <i class='fa fa-search icon-pos color-purple'></i>\r\n                        </label>\r\n                        <form [formGroup]='stateForm' autocomplete=\"new-password\" novalidate>\r\n                            <input id='search' placeholder=\"Search for a state\" formControlName='search' (click)=' openDropDown() ' class=' input-underline search-bar ' type='text'>\r\n                        </form>\r\n                        <div clickOutside (clickOutside)=\"closeDropDown()\">\r\n                            <div *ngIf='showDropDown' class='search-drop-down'>\r\n                                <div (click)='selectValue(s)' class='search-results' *ngFor=\"let s of states\">\r\n                                    <a [innerHTML]=\"s\">\r\n                                           {{s}}\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>  -->\r\n\r\n\r\n                   <form class=\"form-inline login home-page-search-form\" action=\"page.php\" method=\"POST\" enctype=\"multipart/form-data\" role=\"form\">\r\n                    <fieldset>    \r\n                    <div class=\"form-group search-field\">\r\n                           <label class=\"sprites provider\">  </label> \r\n                            <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"professional Name, Procedure, Condition\">\r\n                        </div>\r\n                        \r\n                        <div class=\"form-group search-field\">\r\n                            <label class=\"sprites zip-code\"></label>\r\n                            <input type=\"email\" class=\"form-control\" id=\"\" placeholder=\"Zip Code\">\r\n                        </div>\r\n                        <div class=\"form-group search-field\">\r\n                            <label class=\"sprites Insurrance-Carrier\"></label>\r\n                            <input type=\"email\" class=\"form-control\" id=\"\" placeholder=\"Insurrance Carrier\">\r\n                        </div>\r\n                        <div class=\"form-group search-field\">\r\n                              <label class=\"sprites Insurrance-Plan\"> </label>\r\n                            <input type=\"email\" class=\"form-control\" id=\"\" placeholder=\"Insurrance Plan\">\r\n                        </div>\r\n                    </fieldset>\r\n                        <button type=\"submit\" class=\"btn  sprites submit\" routerLink=\"/search\"></button>\r\n                    </form>\r\n               </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/home-search/home-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/home-search/home-search.component.ts ***!
  \******************************************************/
/*! exports provided: HomeSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSearchComponent", function() { return HomeSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");




/**
 * @title Display value autocomplete
 */
var HomeSearchComponent = /** @class */ (function () {
    function HomeSearchComponent(fb) {
        this.fb = fb;
        this.showDropDown = false;
        this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
            'Connecticut', 'Delaware', 'District of Columbia', 'Florida',
            'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
            'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
            'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
            'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
            'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington',
            'West Virginia', 'Wisconsin', 'Wyoming'];
        this.initForm();
    }
    HomeSearchComponent.prototype.initForm = function () {
        return this.stateForm = this.fb.group({
            search: [null]
        });
    };
    HomeSearchComponent.prototype.ngOnInit = function () {
    };
    HomeSearchComponent.prototype.selectValue = function (value) {
        this.stateForm.patchValue({ "search": value });
        this.showDropDown = false;
    };
    HomeSearchComponent.prototype.closeDropDown = function () {
        this.showDropDown = !this.showDropDown;
    };
    HomeSearchComponent.prototype.openDropDown = function () {
        this.showDropDown = false;
    };
    HomeSearchComponent.prototype.getSearchValue = function () {
        return this.stateForm.value.search;
    };
    HomeSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'homesearch',
            template: __webpack_require__(/*! ./home-search.component.html */ "./src/app/home-search/home-search.component.html"),
            providers: [_services__WEBPACK_IMPORTED_MODULE_3__["InsuranceProviderService"]],
            styles: [__webpack_require__(/*! ./home-search.component.css */ "./src/app/home-search/home-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], HomeSearchComponent);
    return HomeSearchComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<homesearch></homesearch>\r\n<app-specialitiessection></app-specialitiessection>\r\n<app-howitworkssection></app-howitworkssection>\r\n<app-newssection></app-newssection>\r\n<app-provides-section></app-provides-section>\r\n<!-- <app-healthtips-section></app-healthtips-section> -->\r\n<!-- <app-testimonial></app-testimonial> -->\r\n<!-- <app-partners></app-partners> -->\r\n<app-footer></app-footer>\r\n<app-popupmodal-login></app-popupmodal-login>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/inc/filter-section/filter-section.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/inc/filter-section/filter-section.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.search-fields{\r\n   padding: 20px 0px;\r\n   box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.4);    \r\n}\r\n\r\n\r\n\r\n   .log-in a{\r\n        text-transform: uppercase;\r\n        text-decoration: none;\r\n    }\r\n\r\n\r\n\r\n   .word-break{\r\n    display: block;\r\n    margin-left: 0;\r\n        margin-bottom: 0;\r\n    }\r\n\r\n\r\n\r\n   .logo-break{\r\n    margin-top: -10px;\r\n        \r\n    }\r\n\r\n\r\n\r\n   .main-search{\r\n    justify-content: flex-start;\r\n    }\r\n\r\n\r\n\r\n   .main-search .form-control{\r\n       border-radius: 0;\r\n        border: 0;\r\n        padding-left: 36px;\r\n        width: calc(24% - 3px);\r\n        float: left;\r\n        margin-left: 2px;  \r\n        \r\n    }\r\n\r\n\r\n\r\n   .form-control:focus{\r\n    box-shadow: none;\r\n       \r\n    }\r\n\r\n\r\n\r\n   .search-fields .form-control:focus {\r\n    border-color:#0087be;\r\n        \r\n    }\r\n\r\n\r\n\r\n   .search-fields .form-group{\r\n        margin: 0px 10px;\r\n    position: relative;    \r\n    }\r\n\r\n\r\n\r\n   .search-fields .form-group:last-child{\r\n        margin-left: 375px;  \r\n    }\r\n\r\n\r\n\r\n   .search-fields .form-control{\r\n    border-radius: 0; \r\n    border: 0;    \r\n    border-bottom:1px solid var(--inputBoder);  \r\n    padding: 0px 5px; \r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    color: var(--inputfontControl); \r\n    }\r\n\r\n\r\n\r\n   .search-field-form .sortName {\r\n        color: var(--inputfontControl);\r\n        font-size: 12px;\r\n        font-weight: 400;\r\n        position: absolute;\r\n        left: -34%;\r\n    }\r\n\r\n\r\n\r\n   .main-search .form-group {\r\n    position: relative;\t\r\n    }\r\n\r\n\r\n\r\n   .search-btn{\r\n        background-color: #ffd200;\r\n        border-radius: 0;\r\n        \r\n    }\r\n\r\n\r\n\r\n   .search-icon {\r\n    color: #00234b;\r\n    position: absolute;\r\n    top: 8px;\r\n    margin-left: 15px;  \r\n    }\r\n\r\n\r\n\r\n   .search-btn i{\r\n    font-size: 20px;    \r\n    }\r\n\r\n\r\n\r\n   .search-field-form{\r\n    display: flex;\r\n    -ms-align-items: center;\r\n    align-items: center;\r\n    justify-content: center;    \r\n    }\r\n\r\n\r\n\r\n   .search-field-form .field-icon {\r\n        position: absolute;\r\n        background-position: -337px -112px;\r\n        width: 15px;\r\n        height: 10px;\r\n        right: 0;\r\n      }\r\n\r\n\r\n\r\n   .search-field-form .form-group input::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n        color: var(--black);\r\n      }\r\n\r\n\r\n\r\n   .search-field-form .form-group input::-moz-placeholder { /* Firefox 19+ */\r\n        color: var(--black);\r\n      }\r\n\r\n\r\n\r\n   .search-field-form .form-group input:-ms-input-placeholder { /* IE 10+ */\r\n        color: var(--black);\r\n      }\r\n\r\n\r\n\r\n   .search-field-form .form-group input:-moz-placeholder { /* Firefox 18- */\r\n        color: var(--black);\r\n      }\r\n\r\n\r\n\r\n   .search-fields .block-content {\r\n        width: 100%;\r\n        margin: 15px 0px 0px 10px;\r\n    }\r\n\r\n\r\n\r\n   .search-fields .block-content h3 {\r\n        float: left;\r\n        padding: 8px 12px;\r\n        font-size: 12px;\r\n        color: var(--white);\r\n        background: var(--skyblue);\r\n        margin: 0;\r\n    }\r\n\r\n\r\n\r\n   .filterList {\r\n        float: left;\r\n    }\r\n\r\n\r\n\r\n   .filterList ul {\r\n        float: left;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n\r\n\r\n   .filterList ul li {\r\n        float: left;\r\n        padding: 0px 20px;\r\n        position:var(--po-rel);\r\n        font-size: 12px;\r\n        color: var(--inputfontControl);\r\n        font-weight: 400;\r\n        line-height: 30px;\r\n    }\r\n\r\n\r\n\r\n   .filterList ul li::before {\r\n        position: var(--po-ab);\r\n        right: -6px;\r\n        top: 9px;\r\n        width: 1px;\r\n        height: 14px;\r\n        background:#eaeaea;\r\n        content: \"\";\r\n        z-index: 1;\r\n    }\r\n\r\n\r\n\r\n   .filterList ul li .closeFilter{\r\n        position: var(--po-ab);\r\n        background-position: -372px -113px;\r\n        width: 15px;\r\n        height: 10px;\r\n        right: 0px;\r\n        top: 50%;\r\n        -webkit-transform: translateY(-40%);\r\n                transform: translateY(-40%);\r\n    }\r\n\r\n\r\n\r\n   .availableForm .check-box {\r\n        height: 15px;\r\n        width: 15px;\r\n    }\r\n\r\n\r\n\r\n   .availablecheckboxForm .availableForm .form-check {\r\n        display: flex;\r\n        align-items: left;\r\n        justify-content: left;\r\n        margin: 10px 10px;\r\n    }\r\n\r\n\r\n\r\n   .search-field-form .list {\r\n        height: 200px;\r\n        top: 35px;\r\n        width: 298px;\r\n        box-shadow: -1px 8px 10px rgba(0, 0, 0, 0.2);\r\n    }\r\n\r\n\r\n\r\n   .availablecheckboxForm .availableForm span{\r\n        font-size: 14px;\r\n        color: var(--dark-blue);\r\n        margin-left: 10px;\r\n        text-decoration: none;\r\n    }\r\n\r\n\r\n\r\n   .availablecheckboxForm .availableForm .form-check .check-box::before {\r\n        top: 9px;\r\n        left: 5.25px;\r\n        width: 1.5px;\r\n    }\r\n\r\n\r\n\r\n   .availablecheckboxForm .availableForm .form-check .check-box::after {\r\n        top: 3.25px;\r\n        left: -0.75px;\r\n        width: 1.5px;\r\n    }\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jL2ZpbHRlci1zZWN0aW9uL2ZpbHRlci1zZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0dBQ0csaUJBQWlCO0dBQ2pCLDhDQUE4QztBQUNqRDs7OztHQUlHO1FBQ0sseUJBQXlCO1FBQ3pCLHFCQUFxQjtJQUN6Qjs7OztHQUVBO0lBQ0EsY0FBYztJQUNkLGNBQWM7UUFDVixnQkFBZ0I7SUFDcEI7Ozs7R0FFQTtJQUNBLGlCQUFpQjs7SUFFakI7Ozs7R0FFQTtJQUNBLDJCQUEyQjtJQUMzQjs7OztHQUVBO09BQ0csZ0JBQWdCO1FBQ2YsU0FBUztRQUNULGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsV0FBVztRQUNYLGdCQUFnQjs7SUFFcEI7Ozs7R0FFQTtJQUNBLGdCQUFnQjs7SUFFaEI7Ozs7R0FFQTtJQUNBLG9CQUFvQjs7SUFFcEI7Ozs7R0FFQTtRQUNJLGdCQUFnQjtJQUNwQixrQkFBa0I7SUFDbEI7Ozs7R0FFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7OztHQUVBO0lBQ0EsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCx5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCOzs7O0dBRUE7UUFDSSw4QkFBOEI7UUFDOUIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsVUFBVTtJQUNkOzs7O0dBRUE7SUFDQSxrQkFBa0I7SUFDbEI7Ozs7R0FHQTtRQUNJLHlCQUF5QjtRQUN6QixnQkFBZ0I7O0lBRXBCOzs7O0dBRUE7SUFDQSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixpQkFBaUI7SUFDakI7Ozs7R0FHQTtJQUNBLGVBQWU7SUFDZjs7OztHQUdBO0lBQ0EsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCOzs7O0dBRUE7UUFDSSxrQkFBa0I7UUFDbEIsa0NBQWtDO1FBQ2xDLFdBQVc7UUFDWCxZQUFZO1FBQ1osUUFBUTtNQUNWOzs7O0dBSUEsa0VBQWtFLHdCQUF3QjtRQUN4RixtQkFBbUI7TUFDckI7Ozs7R0FDQSx5REFBeUQsZ0JBQWdCO1FBQ3ZFLG1CQUFtQjtNQUNyQjs7OztHQUNBLDZEQUE2RCxXQUFXO1FBQ3RFLG1CQUFtQjtNQUNyQjs7OztHQUNBLHdEQUF3RCxnQkFBZ0I7UUFDdEUsbUJBQW1CO01BQ3JCOzs7O0dBRUE7UUFDRSxXQUFXO1FBQ1gseUJBQXlCO0lBQzdCOzs7O0dBR0E7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsMEJBQTBCO1FBQzFCLFNBQVM7SUFDYjs7OztHQUNBO1FBQ0ksV0FBVztJQUNmOzs7O0dBQ0E7UUFDSSxXQUFXO1FBQ1gsU0FBUztRQUNULFVBQVU7SUFDZDs7OztHQUNBO1FBQ0ksV0FBVztRQUNYLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLDhCQUE4QjtRQUM5QixnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCOzs7O0dBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsV0FBVztRQUNYLFFBQVE7UUFDUixVQUFVO1FBQ1YsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsVUFBVTtJQUNkOzs7O0dBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsa0NBQWtDO1FBQ2xDLFdBQVc7UUFDWCxZQUFZO1FBQ1osVUFBVTtRQUNWLFFBQVE7UUFDUixtQ0FBMkI7Z0JBQTNCLDJCQUEyQjtJQUMvQjs7OztHQUdBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjs7OztHQUNBO1FBQ0ksYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsaUJBQWlCO0lBQ3JCOzs7O0dBQ0E7UUFDSSxhQUFhO1FBQ2IsU0FBUztRQUNULFlBQVk7UUFDWiw0Q0FBNEM7SUFDaEQ7Ozs7R0FDQTtRQUNJLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtJQUN6Qjs7OztHQUNBO1FBQ0ksUUFBUTtRQUNSLFlBQVk7UUFDWixZQUFZO0lBQ2hCOzs7O0dBRUE7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLFlBQVk7SUFDaEIiLCJmaWxlIjoic3JjL2FwcC9pbmMvZmlsdGVyLXNlY3Rpb24vZmlsdGVyLXNlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2VhcmNoLWZpZWxkc3tcclxuICAgcGFkZGluZzogMjBweCAwcHg7XHJcbiAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7ICAgIFxyXG59XHJcblxyXG5cclxuXHJcbiAgIC5sb2ctaW4gYXtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLndvcmQtYnJlYWt7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dvLWJyZWFre1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYWluLXNlYXJjaHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1haW4tc2VhcmNoIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDM2cHg7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMjQlIC0gM3B4KTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMnB4OyAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWFyY2gtZmllbGRzIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiMwMDg3YmU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWFyY2gtZmllbGRzIC5mb3JtLWdyb3Vwe1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VhcmNoLWZpZWxkcyAuZm9ybS1ncm91cDpsYXN0LWNoaWxke1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNzVweDsgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VhcmNoLWZpZWxkcyAuZm9ybS1jb250cm9se1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDsgXHJcbiAgICBib3JkZXI6IDA7ICAgIFxyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0taW5wdXRCb2Rlcik7ICBcclxuICAgIHBhZGRpbmc6IDBweCA1cHg7IFxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1pbnB1dGZvbnRDb250cm9sKTsgXHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1maWVsZC1mb3JtIC5zb3J0TmFtZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlucHV0Zm9udENvbnRyb2wpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtMzQlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWFpbi1zZWFyY2ggLmZvcm0tZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1x0XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLnNlYXJjaC1idG57XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDIwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VhcmNoLWljb24ge1xyXG4gICAgY29sb3I6ICMwMDIzNGI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4OyAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLnNlYXJjaC1idG4gaXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDsgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLnNlYXJjaC1maWVsZC1mb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgICBcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWZpZWxkLWZvcm0gLmZpZWxkLWljb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzM3cHggLTExMnB4O1xyXG4gICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgXHJcblxyXG5cclxuICAgICAgLnNlYXJjaC1maWVsZC1mb3JtIC5mb3JtLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICAgIH1cclxuICAgICAgLnNlYXJjaC1maWVsZC1mb3JtIC5mb3JtLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOSsgKi9cclxuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgICB9XHJcbiAgICAgIC5zZWFyY2gtZmllbGQtZm9ybSAuZm9ybS1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJRSAxMCsgKi9cclxuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgICB9XHJcbiAgICAgIC5zZWFyY2gtZmllbGQtZm9ybSAuZm9ybS1ncm91cCBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cclxuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VhcmNoLWZpZWxkcyAuYmxvY2stY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDBweCAwcHggMTBweDtcclxuICAgIH1cclxuICAgICAgXHJcblxyXG4gICAgLnNlYXJjaC1maWVsZHMgLmJsb2NrLWNvbnRlbnQgaDMge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNreWJsdWUpO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC5maWx0ZXJMaXN0IHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIC5maWx0ZXJMaXN0IHVsIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5maWx0ZXJMaXN0IHVsIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgICAgICBwb3NpdGlvbjp2YXIoLS1wby1yZWwpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW5wdXRmb250Q29udHJvbCk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIH1cclxuICAgIC5maWx0ZXJMaXN0IHVsIGxpOjpiZWZvcmUge1xyXG4gICAgICAgIHBvc2l0aW9uOiB2YXIoLS1wby1hYik7XHJcbiAgICAgICAgcmlnaHQ6IC02cHg7XHJcbiAgICAgICAgdG9wOiA5cHg7XHJcbiAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDojZWFlYWVhO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgIC5maWx0ZXJMaXN0IHVsIGxpIC5jbG9zZUZpbHRlcntcclxuICAgICAgICBwb3NpdGlvbjogdmFyKC0tcG8tYWIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0zNzJweCAtMTEzcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MCUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuYXZhaWxhYmxlRm9ybSAuY2hlY2stYm94IHtcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuYXZhaWxhYmxlY2hlY2tib3hGb3JtIC5hdmFpbGFibGVGb3JtIC5mb3JtLWNoZWNrIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMTBweDtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtZmllbGQtZm9ybSAubGlzdCB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICB0b3A6IDM1cHg7XHJcbiAgICAgICAgd2lkdGg6IDI5OHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC0xcHggOHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgfVxyXG4gICAgLmF2YWlsYWJsZWNoZWNrYm94Rm9ybSAuYXZhaWxhYmxlRm9ybSBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYXZhaWxhYmxlY2hlY2tib3hGb3JtIC5hdmFpbGFibGVGb3JtIC5mb3JtLWNoZWNrIC5jaGVjay1ib3g6OmJlZm9yZSB7XHJcbiAgICAgICAgdG9wOiA5cHg7XHJcbiAgICAgICAgbGVmdDogNS4yNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxLjVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYXZhaWxhYmxlY2hlY2tib3hGb3JtIC5hdmFpbGFibGVGb3JtIC5mb3JtLWNoZWNrIC5jaGVjay1ib3g6OmFmdGVyIHtcclxuICAgICAgICB0b3A6IDMuMjVweDtcclxuICAgICAgICBsZWZ0OiAtMC43NXB4O1xyXG4gICAgICAgIHdpZHRoOiAxLjVweDtcclxuICAgIH1cclxuXHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/inc/filter-section/filter-section.component.html":
/*!******************************************************************!*\
  !*** ./src/app/inc/filter-section/filter-section.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"search-fields\">\r\n      <div class=\"container-fluid\">\r\n         <div class=\"row\">\r\n              <form action=\"\" class=\"form-inline search-field-form\">\r\n                  <div class=\"form-group\">\r\n                      <label class=\"sprites field-icon\"></label>\r\n                      <input type=\"text\" class=\"form-control ListGet\" placeholder=\"Availability\" value=\"\">\r\n                      <div class=\"list\" style=\"display: none;\">\r\n                        <div class=\"availablecheckboxForm\">\r\n                            <form class=\"availableForm ng-untouched ng-pristine ng-valid\" novalidate=\"\">\r\n                                <div class=\"form-check\">\r\n                                    <input class=\"form-check-input\" id=\"exampleCheck3\" type=\"checkbox\">\r\n                                    <label class=\"form-check-label check-box\" for=\"exampleCheck3\"></label>\r\n                                    <span >Available any day (41)</span>\r\n                                </div>\r\n                                <div class=\"form-check\">\r\n                                        <input class=\"form-check-input\" id=\"exampleCheck4\" type=\"checkbox\">\r\n                                        <label class=\"form-check-label check-box\" for=\"exampleCheck4\"></label>\r\n                                        <span >Available today (5)</span>\r\n                                    </div>\r\n                                    <div class=\"form-check\">\r\n                                            <input class=\"form-check-input\" id=\"exampleCheck5\" type=\"checkbox\">\r\n                                            <label class=\"form-check-label check-box\" for=\"exampleCheck5\"></label>\r\n                                            <span >Available in next 3 days (17)</span>\r\n                                        </div>\r\n                                        <div class=\"form-check\">\r\n                                                <input class=\"form-check-input\" id=\"exampleCheck6\" type=\"checkbox\">\r\n                                                <label class=\"form-check-label check-box\" for=\"exampleCheck6\"></label>\r\n                                                <span >Available coming weekend (8)</span>\r\n                                            </div>\r\n                                </form>\r\n                        </div>\r\n           \r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                      <label class=\"sprites field-icon\"></label>\r\n                      <input type=\"text\" class=\"effect-1 form-control\" placeholder=\"Gender\" value=\"\">\r\n                      <span _ngcontent-lqg-c5=\"\" class=\"focus-border\"></span>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                      <label class=\"sprites field-icon\"></label>\r\n                      <input type=\"text\" class=\"effect-1 form-control\" placeholder=\"Language\" value=\"\">\r\n                      <span _ngcontent-lqg-c5=\"\" class=\"focus-border\"></span>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                      <label class=\"sprites field-icon\"></label>\r\n                      <input type=\"text\" class=\"effect-1 form-control\" placeholder=\"Hospital Affiliations\" value=\"\">\r\n                      <span _ngcontent-lqg-c5=\"\" class=\"focus-border\"></span>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"form-group\">\r\n                      <label class=\"sprites field-icon\"></label>\r\n                      <input type=\"text\" class=\"effect-1 form-control\" placeholder=\"Office Hours\" value=\"\">\r\n                      <span _ngcontent-lqg-c5=\"\" class=\"focus-border\"></span>\r\n                  </div>\r\n\r\n\r\n\r\n                  \r\n                  <div class=\"form-group\">\r\n                      <label for=\"\" class=\"sortName\">Sort By:</label> \r\n                      <label class=\"sprites field-icon\"></label>\r\n                      \r\n                      <input type=\"text\" class=\"effect-1 form-control\" placeholder=\"Relavance\" value=\"\">\r\n                      <span _ngcontent-lqg-c5=\"\" class=\"focus-border\"></span>\r\n                  </div>\r\n              </form>\r\n\r\n              <div class=\"block-content\">\r\n                  <h3>FILTER BY</h3>\r\n                  <div class=\"filterList\">\r\n                    <ul>\r\n                      <li>Available in next 3 days (17) <span class=\"sprites closeFilter\"></span></li>\r\n                      <li>Female (16) <span class=\"sprites closeFilter\"></span></li>\r\n                      <li>English (41)<span class=\"sprites closeFilter\"></span></li>\r\n                      <li>South Shore Hospital (3) <span class=\"sprites closeFilter\"></span></li>\r\n                    </ul>\r\n                  </div>\r\n              </div>\r\n\r\n\r\n          </div>\r\n\r\n\r\n\r\n      </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/inc/filter-section/filter-section.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/inc/filter-section/filter-section.component.ts ***!
  \****************************************************************/
/*! exports provided: FilterSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterSectionComponent", function() { return FilterSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterSectionComponent = /** @class */ (function () {
    function FilterSectionComponent() {
    }
    FilterSectionComponent.prototype.ngOnInit = function () {
    };
    FilterSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter-section',
            template: __webpack_require__(/*! ./filter-section.component.html */ "./src/app/inc/filter-section/filter-section.component.html"),
            styles: [__webpack_require__(/*! ./filter-section.component.css */ "./src/app/inc/filter-section/filter-section.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilterSectionComponent);
    return FilterSectionComponent;
}());



/***/ }),

/***/ "./src/app/inc/footer/footer.component.css":
/*!*************************************************!*\
  !*** ./src/app/inc/footer/footer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    background:var(--nero-grey);\r\n    color: #fff;\r\n    padding: 30px 0 0px;\r\n    padding-bottom: 0;\r\n    position: absolute;\r\n    width: 100%;\r\n    z-index: 100;\r\n}\r\n.footer-top {\r\n    padding-bottom: 30px;\r\n}\r\n.footer-content-heading {\r\n    color: #feee5a;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    text-transform: capitalize;\r\n    margin-bottom: 0;\r\n}\r\n.footer-list {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.footer-list li {\r\n    font-size: 14px;\r\n    margin-top: 5px;\r\n}\r\n.footer-list li a {\r\n    text-decoration: none;\r\n    color: #fff;\r\n}\r\n.footer-list li::first-letter {\r\n    text-transform: uppercase;\r\n}\r\n/* footer bottom */\r\n.footer-bottom {\r\n    padding: 8px 0;\r\n    background: var(--light-grey);\r\n}\r\n.social-media {\r\n    display: inline-block;\r\n    margin: 0;\r\n    margin-right: 100px;\r\n    margin-top: 12px;\r\n}\r\n.footer-bottom-left {\r\n    float: left;\r\n}\r\n.footer-bottom-right {\r\n    float: right;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.copyright {\r\n    margin: 0;\r\n}\r\n.social-media li {\r\n    margin: 0px 10px;\r\n}\r\n.social-media li a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n.footer .footer-bottom .social-media .footer-facebook {\r\n    background-position: -18px -106px;\r\n}\r\n.footer .footer-bottom .social-media .footer-facebook:hover {\r\n    background-position: -18px -136px;\r\n}\r\n.footer .footer-bottom .social-media .footer-twitter {\r\n    background-position: -52px -106px;\r\n}\r\n.footer .footer-bottom .social-media .footer-twitter:hover {\r\n    background-position: -52px -136px;\r\n}\r\n.footer .footer-bottom .social-media .footer-linkedin {\r\n    background-position: -94px -106px;\r\n}\r\n.footer .footer-bottom .social-media .footer-linkedin:hover {\r\n    background-position: -94px -136px;\r\n}\r\n.footer .footer-bottom .social-media .footer-instagram {\r\n    background-position: -138px -106px;\r\n}\r\n.footer .footer-bottom .social-media .footer-instagram:hover {\r\n    background-position: -138px -136px;\r\n}\r\n.footer .footer-bottom .social-media li{\r\n    float: left;\r\n    transition: all 350ms ease;\r\n}\r\n.footer .footer-bottom .social-media li a{\r\n    display: block;\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n.footer-logo {\r\n    margin-left: 15px;\r\n    display: inline-block;\r\n    margin-bottom: 0;\r\n}\r\n.copyright {\r\n    color: #aeaeae;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBLGtCQUFrQjtBQUNsQjtJQUNJLGNBQWM7SUFDZCw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBR0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBSUE7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCO0FBR0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2luYy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6dmFyKC0tbmVyby1ncmV5KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMzBweCAwIDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuLmZvb3Rlci10b3Age1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuLmZvb3Rlci1jb250ZW50LWhlYWRpbmcge1xyXG4gICAgY29sb3I6ICNmZWVlNWE7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5mb290ZXItbGlzdCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5mb290ZXItbGlzdCBsaSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmZvb3Rlci1saXN0IGxpIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmZvb3Rlci1saXN0IGxpOjpmaXJzdC1sZXR0ZXIge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4vKiBmb290ZXIgYm90dG9tICovXHJcbi5mb290ZXItYm90dG9tIHtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZ3JleSk7XHJcbn1cclxuLnNvY2lhbC1tZWRpYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG4uZm9vdGVyLWJvdHRvbS1sZWZ0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5mb290ZXItYm90dG9tLXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jb3B5cmlnaHQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuLnNvY2lhbC1tZWRpYSBsaSB7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4O1xyXG59XHJcblxyXG4uc29jaWFsLW1lZGlhIGxpIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5mb290ZXIgLmZvb3Rlci1ib3R0b20gLnNvY2lhbC1tZWRpYSAuZm9vdGVyLWZhY2Vib29rIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xOHB4IC0xMDZweDtcclxufVxyXG4uZm9vdGVyIC5mb290ZXItYm90dG9tIC5zb2NpYWwtbWVkaWEgLmZvb3Rlci1mYWNlYm9vazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMThweCAtMTM2cHg7XHJcbn1cclxuXHJcbi5mb290ZXIgLmZvb3Rlci1ib3R0b20gLnNvY2lhbC1tZWRpYSAuZm9vdGVyLXR3aXR0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTUycHggLTEwNnB4O1xyXG59XHJcbi5mb290ZXIgLmZvb3Rlci1ib3R0b20gLnNvY2lhbC1tZWRpYSAuZm9vdGVyLXR3aXR0ZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTUycHggLTEzNnB4O1xyXG59XHJcbi5mb290ZXIgLmZvb3Rlci1ib3R0b20gLnNvY2lhbC1tZWRpYSAuZm9vdGVyLWxpbmtlZGluIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05NHB4IC0xMDZweDtcclxufVxyXG4uZm9vdGVyIC5mb290ZXItYm90dG9tIC5zb2NpYWwtbWVkaWEgLmZvb3Rlci1saW5rZWRpbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTRweCAtMTM2cHg7XHJcbn1cclxuLmZvb3RlciAuZm9vdGVyLWJvdHRvbSAuc29jaWFsLW1lZGlhIC5mb290ZXItaW5zdGFncmFtIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMzhweCAtMTA2cHg7XHJcbn1cclxuLmZvb3RlciAuZm9vdGVyLWJvdHRvbSAuc29jaWFsLW1lZGlhIC5mb290ZXItaW5zdGFncmFtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMzhweCAtMTM2cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmZvb3RlciAuZm9vdGVyLWJvdHRvbSAuc29jaWFsLW1lZGlhIGxpe1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzUwbXMgZWFzZTtcclxufVxyXG4uZm9vdGVyIC5mb290ZXItYm90dG9tIC5zb2NpYWwtbWVkaWEgbGkgYXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5mb290ZXItbG9nbyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcblxyXG4uY29weXJpZ2h0IHtcclxuICAgIGNvbG9yOiAjYWVhZWFlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/inc/footer/footer.component.html":
/*!**************************************************!*\
  !*** ./src/app/inc/footer/footer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <footer class=\"footer\">\r\n      <div class=\"footer-top\">\r\n          <div class=\"container\">\r\n           <div class=\"row\">\r\n               <div class=\"col-md col-sm-12\">\r\n\r\n\r\n                   <div class=\"footer-content\">\r\n                       <p class=\"footer-content-heading\"> Medical health </p>\r\n                       <ul class=\"footer-list\">\r\n                           <li> <a href=\"javascript:void\"> home </a> </li>\r\n                           <li> <a href=\"javascript:void\"> about </a> </li>\r\n                           <li> <a href=\"javascript:void\"> blog </a> </li>\r\n                           <li> <a href=\"javascript:void\"> careers</a> </li>\r\n                           <li> <a href=\"javascript:void\"> press </a> </li>\r\n                           <li> <a href=\"javascript:void\"> conact us </a> </li>\r\n                       </ul>\r\n                   </div>\r\n\r\n\r\n               </div>\r\n\r\n\r\n               <div class=\"col-md col-sm-12\">\r\n                   \r\n                     <div class=\"footer-content\">\r\n                       <p class=\"footer-content-heading\"> for patients </p>\r\n                       <ul class=\"footer-list\">\r\n                           <li> <a href=\"javascript:void\"> search for doctor </a> </li>\r\n                           <li> <a href=\"javascript:void\">secrchb for clinics </a> </li>\r\n                           <li> <a href=\"javascript:void\"> searc for hospitals</a> </li>\r\n                           <li> <a href=\"javascript:void\"> read health articles</a> </li>\r\n                           <li> <a href=\"javascript:void\"> read about medicines  </a> </li>\r\n                           <li> <a href=\"javascript:void\"> health app </a> </li>\r\n                         \r\n                       </ul>\r\n                   </div>\r\n               </div>\r\n               \r\n               <div class=\"col-md col-sm-12\">\r\n                       <div class=\"footer-content\">\r\n                       <p class=\"footer-content-heading\"> for doctors </p>\r\n                       <ul class=\"footer-list\">\r\n                           <li> <a href=\"javascript:void\"> medical profile </a> </li>\r\n                           <li> <a href=\"javascript:void\"> for clinics</a> </li>\r\n                           <li> <a href=\"javascript:void\"> ray by medical </a> </li>\r\n                           <li> <a href=\"javascript:void\"> medical reach </a> </li>\r\n                           <li> <a href=\"javascript:void\"> ray tab </a> </li>\r\n                           <li> <a href=\"javascript:void\"> medical pro </a> </li>\r\n                       </ul>\r\n                   </div>\r\n                   \r\n               </div>\r\n               <div class=\"col-md col-sm-12\">\r\n                   \r\n                       <div class=\"footer-content\">\r\n                       <p class=\"footer-content-heading\"> for hospitals </p>\r\n                       <ul class=\"footer-list\">\r\n                           <li> <a href=\"javascript:void\"> insta by medical  </a> </li>\r\n                           <li> <a href=\"javascript:void\">qikwell by medical  </a> </li>\r\n                           <li> <a href=\"javascript:void\"> querent by medical </a> </li>\r\n                         \r\n                       </ul>\r\n                   </div>\r\n               </div>\r\n               <div class=\"col-md col-sm-12\">\r\n                       <div class=\"footer-content\">\r\n                       <p class=\"footer-content-heading\"> more</p>\r\n                       <ul class=\"footer-list\">\r\n                           <li> <a href=\"javascript:void\"> developers </a> </li>\r\n                           <li> <a href=\"javascript:void\">  privacy policy </a> </li>\r\n                           <li> <a href=\"javascript:void\"> terms &amp; condition   </a> </li>\r\n                           <li> <a href=\"javascript:void\"> healthcare directory </a> </li>\r\n                           <li> <a href=\"javascript:void\"> corporate wellness </a> </li>\r\n                           <li> <a href=\"javascript:void\">  </a> </li>\r\n                       </ul>\r\n                   </div>\r\n                   \r\n               </div>\r\n           </div>\r\n       </div>\r\n         \r\n      </div>       \r\n     \r\n     \r\n     <div class=\"footer-bottom\">\r\n       <div class=\"container\">\r\n           <div class=\"row\">\r\n               <div class=\"col-md-6  d-flex  align-items-center\">\r\n               <div class=\"footer-bottom-left\">\r\n                 <p class=\"copyright\"> &copy; 2019. Medical health. All right reserved.    </p>    \r\n                     \r\n               </div>\r\n               \r\n               </div>\r\n               \r\n               \r\n               <div class=\"col-md-6\">\r\n               \r\n               <div class=\"footer-bottom-right\">\r\n                <ul class=\"list-inline social-media\">\r\n<li class=\"footer-facebook sprites\"><a href=\"#\"></a></li>    \r\n<li class=\"footer-twitter sprites\"><a href=\"#\"></a></li>\r\n<li class=\"footer-linkedin sprites\"><a href=\"#\"></a></li>\r\n<li class=\"footer-instagram sprites\"><a href=\"#\"></a></li>    \r\n\r\n\r\n\r\n\r\n</ul>    \r\n              \r\n   \r\n<ul class=\"list-inline footer-logo\">\r\n<li>\r\n<img src=\"assets/footer-logo.png\"  class=\"img-fluid\" alt=\"\">\r\n</li>    \r\n   \r\n</ul>                          \r\n\r\n \r\n               </div>\r\n                  \r\n               </div>\r\n           </div>\r\n       </div>    \r\n     </div>\r\n     \r\n   </footer>\r\n"

/***/ }),

/***/ "./src/app/inc/footer/footer.component.ts":
/*!************************************************!*\
  !*** ./src/app/inc/footer/footer.component.ts ***!
  \************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/inc/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/inc/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/inc/header/header.component.css":
/*!*************************************************!*\
  !*** ./src/app/inc/header/header.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\r\n    height: var(--header-height);\r\n}\r\n \r\n\r\nul.list-inline li{\r\n    display: inline;\r\n }\r\n \r\n\r\n.top-nav .navbar{\r\n justify-content: flex-end;\r\n margin: 0px;\r\n padding: 0px;\r\n }\r\n \r\n\r\n.top-nav ul{\r\n   padding: 0px;\r\n   margin: 0px;\r\n }\r\n \r\n\r\n.top-nav li{\r\n     margin: 10px 10px;\r\n     float: left;\r\n }\r\n \r\n\r\n.custom-navbar .cont a {\r\n    text-decoration: none;\r\n}\r\n \r\n\r\n.top-nav li a{\r\n font-size: 12px;\r\n font-weight:400; \r\n color: #000;\r\n text-decoration: none;\r\n position: relative;\r\n transition: all 600ms ease;\r\n }\r\n \r\n\r\n.top-nav li a:hover{\r\n     color: #1573a3;\r\n }\r\n \r\n\r\n.top-nav li .healthTips{\r\n    background-position: -18px -21px;\r\n    width: 30px;\r\n    height: 30px;\r\n    float: left;\r\n }\r\n \r\n\r\n.top-nav li .review{\r\n    background-position: -55px -24px;\r\n    width: 30px;\r\n    height: 30px;\r\n    float: left;\r\n  }\r\n \r\n\r\n.top-nav li .specialist{\r\n    background-position: -91px -23px;\r\n    width: 30px;\r\n    height: 30px;\r\n    float: left;\r\n }\r\n \r\n\r\n.Topborder-line{\r\n    border-bottom: 1px solid#e6e6e6;\r\n }\r\n \r\n\r\n.icon-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n \r\n\r\n.heading{\r\n    display: block;\r\n    font-weight: bold;\r\n    margin: 0;\r\n    padding: 0;\r\n    line-height: 15px;\r\n    \r\n}\r\n \r\n\r\n.nav-right .icon-container {\r\n      float: left;\r\n    margin-left: 50px;\r\n}\r\n \r\n\r\n.custom-navbar {\r\n    padding: 10px 0px;\r\n  }\r\n \r\n\r\n.content{\r\ndisplay: block;\r\nfont-weight: normal; \r\nmargin: 0;\r\npadding: 0;\r\nline-height: 15px;\r\nfont-size: 12px;    \r\n    \r\n}\r\n \r\n\r\n.custom-navbar .doctor{\r\n    background-position: -153px -21px;\r\n    width: 30px;\r\n    height: 30px;\r\n    float: left;\r\n    margin-right: 10px;\r\n }\r\n \r\n\r\n.custom-navbar .diagnostic{\r\n    background-position: -217px -21px;\r\n    width: 30px;\r\n    height: 30px;\r\n    float: left;\r\n    margin-right: 10px;\r\n }\r\n \r\n\r\n.custom-navbar .pharmacy{\r\n    background-position: -271px -21px;\r\n    width: 35px;\r\n    height: 30px;\r\n    float: left;\r\n    margin-right: 10px;\r\n }\r\n \r\n\r\n.custom-navbar .heading {\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    color: #000;\r\n    text-decoration: none;\r\n}\r\n \r\n\r\n.custom-navbar .content {\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    color: #000;\r\n    text-decoration: none;\r\n}\r\n \r\n\r\n.topmenu {\r\n    padding: 0;\r\n}\r\n \r\n\r\n.topmenu ul {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n \r\n\r\n.topmenu ul li {\r\n    list-style-type: none;\r\n}\r\n \r\n\r\n.topmenu ul li a{\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    color: var(--white);\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    background-color: var(--skyblue);\r\n    border-radius: 5px;\r\n    padding: 10px 15px;\r\n    position: relative;\r\n    display: block;\r\n}\r\n \r\n\r\n.topmenu ul li a:hover{\r\n    background-color: var(--Blue);\r\n}\r\n \r\n\r\n.topmenu ul li a span.login{\r\n    background-position: -309px -67px;\r\n    width: 18px;\r\n    height: 10px;\r\n    float: right;\r\n    margin: 3px 0px 0px 5px;\r\n}\r\n \r\n\r\n.custom-navbar .heading:hover {\r\n    background: #f00;\r\n}\r\n \r\n\r\n.topmenu ul li ul {\r\n    background: var(--white);\r\n    border: 0;\r\n    box-shadow: -4px 3px 13px 0px rgba(0,0,0,0.2);\r\n    padding: 10px 0px;\r\n}\r\n \r\n\r\n.topmenu ul li ul.dropdown-menu li {\r\n    margin: 5px 5px;\r\n    padding: 5px 0px;\r\n    border-bottom: 1px solid var(--inputBoder);\r\n    display: block;\r\n    text-align: center;\r\n}\r\n \r\n\r\n.topmenu ul li ul.dropdown-menu li span {\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    color: var(--black);\r\n    min-width: 4.8rem;\r\n    float: left;\r\n}\r\n \r\n\r\n.topmenu ul li ul.dropdown-menu li a {\r\n    background-color: transparent !important;\r\n    padding: 0px 9px;\r\n    margin: 0px auto;\r\n    font-size: 12px;\r\n    color: var(--black);\r\n    text-transform: capitalize;\r\n    font-weight: 600;\r\n    display: table;\r\n    text-align: center;\r\n}\r\n \r\n\r\n.topmenu ul li ul.dropdown-menu li a:hover{\r\n    color: var(--skyblue);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtBQUNoQzs7O0FBR0E7SUFDSSxlQUFlO0NBQ2xCOzs7QUFFQTtDQUNBLHlCQUF5QjtDQUN6QixXQUFXO0NBQ1gsWUFBWTtDQUNaOzs7QUFFQTtHQUNFLFlBQVk7R0FDWixXQUFXO0NBQ2I7OztBQUVBO0tBQ0ksaUJBQWlCO0tBQ2pCLFdBQVc7Q0FDZjs7O0FBRUE7SUFDRyxxQkFBcUI7QUFDekI7OztBQUVDO0NBQ0EsZUFBZTtDQUNmLGVBQWU7Q0FDZixXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQiwwQkFBMEI7Q0FDMUI7OztBQUNBO0tBQ0ksY0FBYztDQUNsQjs7O0FBQ0E7SUFDRyxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0NBQ2Q7OztBQUNBO0lBQ0csZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztFQUNiOzs7QUFDRDtJQUNHLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7Q0FDZDs7O0FBQ0E7SUFDRywrQkFBK0I7Q0FDbEM7OztBQUlEO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGlCQUFpQjs7QUFFckI7OztBQUVBO01BQ00sV0FBVztJQUNiLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxpQkFBaUI7RUFDbkI7OztBQUVGO0FBQ0EsY0FBYztBQUNkLG1CQUFtQjtBQUNuQixTQUFTO0FBQ1QsVUFBVTtBQUNWLGlCQUFpQjtBQUNqQixlQUFlOztBQUVmOzs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7Q0FDckI7OztBQUdBO0lBQ0csaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtDQUNyQjs7O0FBRUE7SUFDRyxpQ0FBaUM7SUFDakMsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0NBQ3JCOzs7QUFFQTtJQUNHLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7OztBQUNBO0lBQ0ksVUFBVTtBQUNkOzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7OztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0ksNkJBQTZCO0FBQ2pDOzs7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7OztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1QsNkNBQTZDO0lBQzdDLGlCQUFpQjtBQUNyQjs7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvaW5jL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlcntcclxuICAgIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XHJcbn1cclxuIFxyXG5cclxudWwubGlzdC1pbmxpbmUgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiB9XHJcbiBcclxuIC50b3AtbmF2IC5uYXZiYXJ7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gbWFyZ2luOiAwcHg7XHJcbiBwYWRkaW5nOiAwcHg7XHJcbiB9XHJcblxyXG4gLnRvcC1uYXYgdWx7XHJcbiAgIHBhZGRpbmc6IDBweDtcclxuICAgbWFyZ2luOiAwcHg7XHJcbiB9XHJcbiBcclxuIC50b3AtbmF2IGxpe1xyXG4gICAgIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gICAgIGZsb2F0OiBsZWZ0O1xyXG4gfVxyXG5cclxuIC5jdXN0b20tbmF2YmFyIC5jb250IGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4gLnRvcC1uYXYgbGkgYXtcclxuIGZvbnQtc2l6ZTogMTJweDtcclxuIGZvbnQtd2VpZ2h0OjQwMDsgXHJcbiBjb2xvcjogIzAwMDtcclxuIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuIHRyYW5zaXRpb246IGFsbCA2MDBtcyBlYXNlO1xyXG4gfVxyXG4gLnRvcC1uYXYgbGkgYTpob3ZlcntcclxuICAgICBjb2xvcjogIzE1NzNhMztcclxuIH1cclxuIC50b3AtbmF2IGxpIC5oZWFsdGhUaXBze1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE4cHggLTIxcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gfVxyXG4gLnRvcC1uYXYgbGkgLnJldmlld3tcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC01NXB4IC0yNHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAudG9wLW5hdiBsaSAuc3BlY2lhbGlzdHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05MXB4IC0yM3B4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuIH1cclxuIC5Ub3Bib3JkZXItbGluZXtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCNlNmU2ZTY7XHJcbiB9XHJcblxyXG5cclxuIFxyXG4uaWNvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRpbmd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5uYXYtcmlnaHQgLmljb24tY29udGFpbmVyIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmN1c3RvbS1uYXZiYXIge1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgfVxyXG5cclxuLmNvbnRlbnR7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5mb250LXdlaWdodDogbm9ybWFsOyBcclxubWFyZ2luOiAwO1xyXG5wYWRkaW5nOiAwO1xyXG5saW5lLWhlaWdodDogMTVweDtcclxuZm9udC1zaXplOiAxMnB4OyAgICBcclxuICAgIFxyXG59XHJcblxyXG4uY3VzdG9tLW5hdmJhciAuZG9jdG9ye1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE1M3B4IC0yMXB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuIH1cclxuXHJcblxyXG4gLmN1c3RvbS1uYXZiYXIgLmRpYWdub3N0aWN7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjE3cHggLTIxcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gfVxyXG5cclxuIC5jdXN0b20tbmF2YmFyIC5waGFybWFjeXtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yNzFweCAtMjFweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiB9XHJcblxyXG4gLmN1c3RvbS1uYXZiYXIgLmhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY3VzdG9tLW5hdmJhciAuY29udGVudCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnRvcG1lbnUge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnRvcG1lbnUgdWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnRvcG1lbnUgdWwgbGkge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4udG9wbWVudSB1bCBsaSBhe1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5Ymx1ZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbi50b3BtZW51IHVsIGxpIGE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CbHVlKTtcclxufVxyXG4udG9wbWVudSB1bCBsaSBhIHNwYW4ubG9naW57XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzA5cHggLTY3cHg7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbjogM3B4IDBweCAwcHggNXB4O1xyXG59XHJcbi5jdXN0b20tbmF2YmFyIC5oZWFkaW5nOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMDA7XHJcbn1cclxuLnRvcG1lbnUgdWwgbGkgdWwge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNoYWRvdzogLTRweCAzcHggMTNweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuLnRvcG1lbnUgdWwgbGkgdWwuZHJvcGRvd24tbWVudSBsaSB7XHJcbiAgICBtYXJnaW46IDVweCA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlucHV0Qm9kZXIpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b3BtZW51IHVsIGxpIHVsLmRyb3Bkb3duLW1lbnUgbGkgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgIG1pbi13aWR0aDogNC44cmVtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi50b3BtZW51IHVsIGxpIHVsLmRyb3Bkb3duLW1lbnUgbGkgYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMHB4IDlweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b3BtZW51IHVsIGxpIHVsLmRyb3Bkb3duLW1lbnUgbGkgYTpob3ZlcntcclxuICAgIGNvbG9yOiB2YXIoLS1za3libHVlKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/inc/header/header.component.html":
/*!**************************************************!*\
  !*** ./src/app/inc/header/header.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"commenPadding\">\r\n\r\n  <div class=\"container-fluid\">\r\n      <div class=\"bottom-nav\">\r\n      <nav class=\"navbar custom-navbar navbar-light bg-faded\">\r\n      <a class=\"navbar-brand\" href=\"#\"> <img src=\"assets/medicallogo.jpg\" alt=\"\" >  </a>\r\n  \r\n       \r\n      <!-- <div class=\"nav-right\">\r\n        <div class=\"icon-container\">\r\n  <span class=\"sprites doctor\"></span>    \r\n  \r\n  <div class=\"cont\">\r\n      <a href=\"#\">\r\n     <span class=\"heading\"> Doctor </span>  \r\n      <span class=\"content\"> Book an appointment </span> \r\n    </a>                              \r\n  </div>\r\n                  \r\n  </div>\r\n             \r\n   <div class=\"icon-container\">\r\n  <span class=\"sprites diagnostic\"></span>    \r\n  \r\n  <div class=\"cont\">\r\n        <a href=\"#\">\r\n     <span class=\"heading\"> Diagnostic </span>  \r\n      <span class=\"content\"> Book test and checkups </span>  \r\n      </a>                             \r\n  </div>\r\n                  \r\n  </div>      \r\n         \r\n  <div class=\"icon-container\">\r\n  <span class=\"sprites pharmacy\"></span>    \r\n  \r\n  <div class=\"cont\">\r\n        <a href=\"#\">\r\n     <span class=\"heading\"> Pharmacy </span>  \r\n      <span class=\"content\"> Medicines and health products </span> \r\n      </a>                              \r\n  </div>\r\n                  \r\n  </div>     \r\n        \r\n          \r\n      </div> -->\r\n        \r\n        \r\n      <div class=\"collapse\" id=\"exCollapsingNavbar\">\r\n  <div class=\"bg-inverse p-a-1\">\r\n    \r\n  </div>\r\n</div>\r\n<nav class=\"navbar topmenu navbar-light bg-faded d-flex justify-content-center\">\r\n<ul class=\"list-inline\">\r\n    <li><a href=\"#\" data-toggle=\"dropdown\" > Log in / Sign up <span class=\"sprites login\"></span> </a>\r\n    \r\n    <ul class=\"dropdown-menu\">\r\n<li><a href=\"#\"> Patients Login</a></li>\r\n<li> <a href=\"#\"  data-toggle=\"modal\" data-target=\"#loginModal\"> Professional Login</a></li>\r\n   </ul>\r\n    \r\n    \r\n    </li>\r\n</ul>\r\n  \r\n</nav>\r\n\r\n   \r\n  \r\n</nav>\r\n\r\n         \r\n      </div>\r\n \r\n  </div>\r\n\r\n</header>"

/***/ }),

/***/ "./src/app/inc/header/header.component.ts":
/*!************************************************!*\
  !*** ./src/app/inc/header/header.component.ts ***!
  \************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/inc/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/inc/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/inc/healthtips-section/healthtips-section.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/inc/healthtips-section/healthtips-section.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.owl-carousel [class*=owl-]:hover {\r\n    background-color: transparent !important;\r\n    color: #000 !important;\r\n    text-decoration: none;\r\n}\r\n\r\n/* health tips */\r\n\r\n.health-tips{\r\nbackground-color: #fff;    \r\n}\r\n\r\n.health-tips-slider .owl-stage {\r\n-webkit-transform: unset !important;\r\n        transform: unset !important;\r\n    \r\n}\r\n\r\n.health-tips-card{\r\n    border: 0;\r\n    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.28);\r\n    margin: 15px;\r\n    \r\n}\r\n\r\n.health-tips-title {\r\n        color: #1c8ac1;\r\n    font-weight: 500;\r\n    margin:0px 0;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 2;\r\n    overflow: hidden;\r\n    font-size: 18px;\r\n    \r\n}\r\n\r\n.health-tips-slider .health-tips-block{\r\npadding: 20px;\r\ntext-align: center; \r\n    \r\n}\r\n\r\n.health-tips-info {\r\n        color: #898989;\r\n    font-size: 14px;\r\n    margin: 15px 0 5px 0 !important;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 3;\r\n    \r\n}\r\n\r\n.health-tips-more{\r\nvisibility: hidden;\r\n    transition: all linear 0.1s;\r\n}\r\n\r\n.health-tips-card:hover .health-tips-more{\r\nvisibility: visible;\r\n\r\n    \r\n    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jL2hlYWx0aHRpcHMtc2VjdGlvbi9oZWFsdGh0aXBzLXNlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx3Q0FBd0M7SUFDeEMsc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0EsbUNBQTJCO1FBQTNCLDJCQUEyQjs7QUFFM0I7O0FBR0E7SUFDSSxTQUFTO0lBQ1QsNkNBQTZDO0lBQzdDLFlBQVk7O0FBRWhCOztBQUVBO1FBQ1EsY0FBYztJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFFckIsZ0JBQWdCO0lBQ2hCLGVBQWU7O0FBRW5COztBQUVBO0FBQ0EsYUFBYTtBQUNiLGtCQUFrQjs7QUFFbEI7O0FBRUE7UUFDUSxjQUFjO0lBQ2xCLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixxQkFBcUI7O0FBR3pCOztBQUVBO0FBQ0Esa0JBQWtCO0lBQ2QsMkJBQTJCO0FBQy9COztBQUVBO0FBQ0EsbUJBQW1COzs7O0FBSW5CIiwiZmlsZSI6InNyYy9hcHAvaW5jL2hlYWx0aHRpcHMtc2VjdGlvbi9oZWFsdGh0aXBzLXNlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ub3dsLWNhcm91c2VsIFtjbGFzcyo9b3dsLV06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8qIGhlYWx0aCB0aXBzICovXHJcblxyXG4uaGVhbHRoLXRpcHN7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7ICAgIFxyXG59XHJcblxyXG4uaGVhbHRoLXRpcHMtc2xpZGVyIC5vd2wtc3RhZ2Uge1xyXG50cmFuc2Zvcm06IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5oZWFsdGgtdGlwcy1jYXJke1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuMjgpO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5oZWFsdGgtdGlwcy10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICMxYzhhYzE7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luOjBweCAwO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIFxyXG59XHJcblxyXG4uaGVhbHRoLXRpcHMtc2xpZGVyIC5oZWFsdGgtdGlwcy1ibG9ja3tcclxucGFkZGluZzogMjBweDtcclxudGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIFxyXG59XHJcblxyXG4uaGVhbHRoLXRpcHMtaW5mbyB7XHJcbiAgICAgICAgY29sb3I6ICM4OTg5ODk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDE1cHggMCA1cHggMCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIFxyXG59XHJcblxyXG4uaGVhbHRoLXRpcHMtbW9yZXtcclxudmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjFzO1xyXG59XHJcblxyXG4uaGVhbHRoLXRpcHMtY2FyZDpob3ZlciAuaGVhbHRoLXRpcHMtbW9yZXtcclxudmlzaWJpbGl0eTogdmlzaWJsZTtcclxuXHJcbiAgICBcclxuICAgIFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/inc/healthtips-section/healthtips-section.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/inc/healthtips-section/healthtips-section.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n    <section class=\"health-tips\">\r\n      <div class=\"container\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                  <h2 class=\"main-heading underline\">\r\n                      health <span> tips </span>\r\n                  </h2>\r\n\r\n\r\n\r\n\r\n                  <div class=\"owl-carousel owl-theme health-tips-slider\">\r\n\r\n                      <div class=\"item\">\r\n                          <div class=\"card health-tips-card\">\r\n                              <img class=\"card-img-top img-fluid\" src=\"assets/pregency.jpg\" alt=\"Card image cap\" />\r\n                              <div class=\"card-block health-tips-block\">\r\n                                  <h4 class=\"card-title health-tips-title\"> 9 months pregency Care Do's and dies </h4>\r\n                                  <p class=\"card-text health-tips-info\">Some quick example text to build on the card title and make up thebulk of the cards content </p>\r\n\r\n                                  <a href=\"javascript:void\" class=\"health-tips-more\"> <i class=\"fa fa-arrow-right float-right\"> </i> </a>\r\n\r\n                              </div>\r\n                          </div>\r\n\r\n                      </div>\r\n\r\n                      <div class=\"item\">\r\n                          <div class=\"card health-tips-card\">\r\n                              <img class=\"card-img-top img-fluid\" src=\"assets/relax.jpg\" alt=\"Card image cap\" />\r\n                              <div class=\"card-block health-tips-block\">\r\n                                  <h4 class=\"card-title health-tips-title\"> 9 months pregency Care Do's and dies </h4>\r\n                                  <p class=\"card-text health-tips-info\">Some quick example text to build on the card title and make up thebulk of the cards content </p>\r\n                                  <a href=\"javascript:void\" class=\"health-tips-more\"> <i class=\"fa fa-arrow-right float-right\"> </i> </a>\r\n\r\n                              </div>\r\n                          </div>\r\n\r\n                      </div>\r\n\r\n\r\n                      <div class=\"item\">\r\n                          <div class=\"card health-tips-card\">\r\n                              <img class=\"card-img-top img-fluid\" src=\"assets/home-remedies.jpg\" alt=\"Card image cap\" />\r\n                              <div class=\"card-block health-tips-block\">\r\n                                  <h4 class=\"card-title health-tips-title\"> 9 months pregency Care Do's and dies </h4>\r\n                                  <p class=\"card-text health-tips-info\">Some quick example text to build on the card title and make up thebulk of the cards content.Some quick example text to build on the card title and make up thebulk of the cards content </p>\r\n                                  <a href=\"javascript:void\" class=\"health-tips-more\"> <i class=\"fa fa-arrow-right float-right\"> </i> </a>\r\n\r\n                              </div>\r\n                          </div>\r\n\r\n                      </div>\r\n\r\n\r\n                      <div class=\"item\">\r\n                          <div class=\"card health-tips-card\">\r\n                              <img class=\"card-img-top img-fluid\" src=\"assets/healthy-food.jpg\" alt=\"Card image cap\" />\r\n                              <div class=\"card-block health-tips-block\">\r\n                                  <h4 class=\"card-title health-tips-title\"> 9 months pregency Care Do's and dies </h4>\r\n                                  <p class=\"card-text health-tips-info\">Some quick example text to build on the card title and make up thebulk of the cards content </p>\r\n                                  <a href=\"javascript:void\" class=\"health-tips-more\"> <i class=\"fa fa-arrow-right float-right\"> </i> </a>\r\n\r\n                              </div>\r\n                          </div>\r\n\r\n                      </div>\r\n                  </div>\r\n\r\n\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n  </section>"

/***/ }),

/***/ "./src/app/inc/healthtips-section/healthtips-section.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/inc/healthtips-section/healthtips-section.component.ts ***!
  \************************************************************************/
/*! exports provided: HealthtipsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthtipsSectionComponent", function() { return HealthtipsSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HealthtipsSectionComponent = /** @class */ (function () {
    function HealthtipsSectionComponent() {
    }
    HealthtipsSectionComponent.prototype.ngOnInit = function () {
        owlinit();
    };
    HealthtipsSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-healthtips-section',
            template: __webpack_require__(/*! ./healthtips-section.component.html */ "./src/app/inc/healthtips-section/healthtips-section.component.html"),
            styles: [__webpack_require__(/*! ./healthtips-section.component.css */ "./src/app/inc/healthtips-section/healthtips-section.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HealthtipsSectionComponent);
    return HealthtipsSectionComponent;
}());



/***/ }),

/***/ "./src/app/inc/howitworkssection/howitworkssection.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/inc/howitworkssection/howitworkssection.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.how-it-works{background-color: var(--white);}\r\n    .how-it-works .card {\r\n        padding: 20px 25px;\r\n        margin: 35px;\r\n        border: 0;\r\n        box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.27);\r\n    }\r\n    .heading {\r\n        font-size: 25px;\r\n        font-weight: 400;\r\n        color: var(--Blue);\r\n        margin: 0;\r\n        position: relative;\r\n        overflow: hidden;\r\n    }\r\n    .heading:before {\r\n        bottom: 0px;\r\n        content: \"\";\r\n        display: block;\r\n        height: 2px;\r\n        margin: 0;\r\n        position: absolute;\r\n        background:var(--Blue);\r\n        width:10%;\r\n    }\r\n    .doctorIcon {\r\n        background: var(--white);\r\n        border-radius: 100%;\r\n        width: 128px;\r\n        height: 128px;\r\n        position: relative;\r\n        -ms-box-shadow: 5px 0px 14px rgba(0, 0, 0, 0.2);\r\n        -o-box-shadow: 5px 0px 14px rgba(0, 0, 0, 0.2);\r\n        box-shadow: 5px 0px 14px rgba(0, 0, 0, 0.2);\r\n    }\r\n    .doctorIcon img {\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        -webkit-transform: translate(-50%, -50%);\r\n                transform: translate(-50%, -50%);\r\n    }\r\n    .workBox {\r\n        margin-top: 45px;\r\n    }\r\n    .workBox h3 {\r\n        font-size: 18px;\r\n        font-weight: 500;\r\n        color: var(--Blue);\r\n        margin: 0;\r\n        position: relative;\r\n    }\r\n    .workBox h3::before {\r\n        counter-increment: section;\r\n        content: \"0\" counter(section) \"\";\r\n        display: block;\r\n        position: relative;\r\n        color: var(--bright-grey);\r\n        font-size: 28px;\r\n        font-weight: 600;\r\n        margin-bottom: 0px;\r\n    }\r\n    .workBox p {\r\n        font-size: 14px;\r\n        color: var(--bright-grey);\r\n        font-weight: 400;\r\n       display: -webkit-box;\r\n        max-height: 45px;\r\n        -webkit-line-clamp: 3;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        position: relative;\r\n\r\n\r\n} \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jL2hvd2l0d29ya3NzZWN0aW9uL2hvd2l0d29ya3NzZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGNBQWMsOEJBQThCLENBQUM7SUFDekM7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFNBQVM7UUFDVCwrQ0FBK0M7SUFDbkQ7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCO0lBRUE7UUFDSSxXQUFXO1FBQ1gsV0FBVztRQUNYLGNBQWM7UUFDZCxXQUFXO1FBQ1gsU0FBUztRQUNULGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsU0FBUztJQUNiO0lBSUE7UUFDSSx3QkFBd0I7UUFDeEIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixhQUFhO1FBQ2Isa0JBQWtCO1FBR2xCLCtDQUErQztRQUMvQyw4Q0FBOEM7UUFDOUMsMkNBQTJDO0lBQy9DO0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFNBQVM7UUFDVCx3Q0FBZ0M7Z0JBQWhDLGdDQUFnQztJQUNwQztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBRUE7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1Qsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSwwQkFBMEI7UUFDMUIsZ0NBQWdDO1FBQ2hDLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCO0lBRUQ7UUFDSyxlQUFlO1FBQ2YseUJBQXlCO1FBQ3pCLGdCQUFnQjtPQUNqQixvQkFBb0I7UUFDbkIsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUVyQixnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjs7O0FBRzFCIiwiZmlsZSI6InNyYy9hcHAvaW5jL2hvd2l0d29ya3NzZWN0aW9uL2hvd2l0d29ya3NzZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmhvdy1pdC13b3Jrc3tiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7fVxyXG4gICAgLmhvdy1pdC13b3JrcyAuY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAyNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMzVweDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5oZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tQmx1ZSk7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfSBcclxuXHJcbiAgICAuaGVhZGluZzpiZWZvcmUge1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOnZhcigtLUJsdWUpO1xyXG4gICAgICAgIHdpZHRoOjEwJTtcclxuICAgIH1cclxuXHJcbiAgXHJcblxyXG4gICAgLmRvY3Rvckljb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMjhweDtcclxuICAgICAgICBoZWlnaHQ6IDEyOHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCAwcHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiA1cHggMHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIC1tcy1ib3gtc2hhZG93OiA1cHggMHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIC1vLWJveC1zaGFkb3c6IDVweCAwcHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDBweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIH1cclxuXHJcbiAgICAuZG9jdG9ySWNvbiBpbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgLndvcmtCb3gge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQ1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLndvcmtCb3ggaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1CbHVlKTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLndvcmtCb3ggaDM6OmJlZm9yZSB7XHJcbiAgICAgICAgY291bnRlci1pbmNyZW1lbnQ6IHNlY3Rpb247XHJcbiAgICAgICAgY29udGVudDogXCIwXCIgY291bnRlcihzZWN0aW9uKSBcIlwiO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tYnJpZ2h0LWdyZXkpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAud29ya0JveCBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWJyaWdodC1ncmV5KTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNDVweDtcclxuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblxyXG59IFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/inc/howitworkssection/howitworkssection.component.html":
/*!************************************************************************!*\
  !*** ./src/app/inc/howitworkssection/howitworkssection.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"how-it-works sliderPosition\" style=\"background-image:url(assets/how-it-works-bg.png)\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-me-12 col-sm-12\">\r\n             <h2 class=\"main-heading underline\">How it  Works</h2>\r\n             <p class=\"sub-heading\"> Lorem ipsum dolor sit amet, consectetur adipiscing</p>\r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-sm-12\">\r\n            <div class=\"heading\">Patient</div>\r\n            \r\n                <div class=\"workBox\">\r\n                        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <div class=\"doctorIcon\">\r\n                    <img class=\"img-fluid\" src=\"assets/doctor-find-icon.png\" alt=\"Card image cap\" />\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-9\"> \r\n                <h3>Doctor Find</h3>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et \r\n                    </p>\r\n            \r\n             \r\n            </div></div>\r\n                </div>\r\n                <div class=\"workBox\">\r\n               <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                    <div class=\"doctorIcon\">\r\n                        <img class=\"img-fluid\" src=\"assets/doctor-schedule-icon.png\" alt=\"Card image cap\" />\r\n                    </div>\r\n    \r\n                </div>\r\n                <div class=\"col-md-9\"> \r\n                        <h3>Doctor Schedule</h3>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et\r\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et\r\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et\r\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et\r\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et \r\n                            </p>\r\n                    </div>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"workBox\">\r\n                            <div class=\"row\">\r\n                         <div class=\"col-md-3\">\r\n                                 <div class=\"doctorIcon\">\r\n                                     <img class=\"img-fluid\" src=\"assets/doctor-visit-icon.png\" alt=\"Card image cap\" />\r\n                                 </div>\r\n                 \r\n                             </div>\r\n                             <div class=\"col-md-9\"> \r\n                                     <h3>Doctor Visit</h3>\r\n                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et....</p>\r\n                                 </div>\r\n                                 </div>\r\n                                 </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-12\">\r\n                <div class=\"heading\">Practices</div>\r\n                \r\n                    <div class=\"workBox\">\r\n                            <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"doctorIcon\">\r\n                        <img class=\"img-fluid\" src=\"assets/doctor-list-icon.png\" alt=\"Card image cap\" />\r\n                    </div>\r\n    \r\n                </div>\r\n                <div class=\"col-md-9\"> \r\n                    <h3>Doctor List</h3>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et....</p>\r\n                </div></div>\r\n                    </div>\r\n                    <div class=\"workBox\">\r\n                   <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                        <div class=\"doctorIcon\">\r\n                            <img class=\"img-fluid\" src=\"assets/doctor-manage-icon.png\" alt=\"Card image cap\" />\r\n                        </div>\r\n        \r\n                    </div>\r\n                    <div class=\"col-md-9\"> \r\n                            <h3>Doctor Manage</h3>\r\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et....</p>\r\n                        </div>\r\n                        </div>\r\n                        </div>\r\n                        <div class=\"workBox\">\r\n                                <div class=\"row\">\r\n                             <div class=\"col-md-3\">\r\n                                     <div class=\"doctorIcon\">\r\n                                         <img class=\"img-fluid\" src=\"assets/Improv-icon.png\" alt=\"Card image cap\" />\r\n                                     </div>\r\n                     \r\n                                 </div>\r\n                                 <div class=\"col-md-9\"> \r\n                                         <h3>Improv</h3>\r\n                                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et....</p>\r\n                                     </div>\r\n                                     </div>\r\n                                     </div>\r\n            </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/inc/howitworkssection/howitworkssection.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/inc/howitworkssection/howitworkssection.component.ts ***!
  \**********************************************************************/
/*! exports provided: HowitworkssectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowitworkssectionComponent", function() { return HowitworkssectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HowitworkssectionComponent = /** @class */ (function () {
    function HowitworkssectionComponent() {
    }
    HowitworkssectionComponent.prototype.ngOnInit = function () {
    };
    HowitworkssectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-howitworkssection',
            template: __webpack_require__(/*! ./howitworkssection.component.html */ "./src/app/inc/howitworkssection/howitworkssection.component.html"),
            styles: [__webpack_require__(/*! ./howitworkssection.component.css */ "./src/app/inc/howitworkssection/howitworkssection.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HowitworkssectionComponent);
    return HowitworkssectionComponent;
}());



/***/ }),

/***/ "./src/app/inc/innheader/innheader.component.css":
/*!*******************************************************!*\
  !*** ./src/app/inc/innheader/innheader.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".innheader{\r\n    background: #0a438f;\r\n    background: linear-gradient(to right, rgba(10,68,143,1) 0%, rgba(18,102,180,1) 100%);\r\n    padding: 20px 0px;\r\n}\r\n\r\n\r\n     .form-group input + label {\r\n         position: absolute;\r\n         padding-left: 10px;\r\n     }\r\n\r\n\r\n     .home-page-search{\r\n     margin: auto;\r\n     \r\n         \r\n     }\r\n\r\n\r\n     .login .form-group input.form-control{\r\n     margin-top: 0px;    \r\n     /*margin-right: 25px;  */\r\n     width: 100%;\r\n     border: 0;    \r\n     }\r\n\r\n\r\n     .inn-search-form fieldset {\r\n       width: calc(100% - 74px);\r\n       position: relative;\r\n   }\r\n\r\n\r\n     .inn-search-form fieldset:after{\r\n     content: '';\r\n     width: 0;\r\n     height: 0;\r\n     border-style: solid;\r\n     border-width: 8.5px 0 8.5px 8px;\r\n     border-color: transparent transparent transparent #fff;\r\n     position: absolute;\r\n     top: 50%;\r\n     -webkit-transform: translateY(-50%);\r\n             transform: translateY(-50%);\r\n   }\r\n\r\n\r\n     .login .form-group{\r\n     padding: 0;\r\n     width: 24.78%;\r\n     float: left;\r\n     position: relative;\r\n     }\r\n\r\n\r\n     .homesearch-content h2{\r\n     font-weight: 600;    \r\n     }\r\n\r\n\r\n     .inn-search-form  button.submit{\r\n       border-radius: 5px;\r\n       background-color: var(--orange);\r\n       float: right;\r\n       width: 5%;\r\n       right: 0;\r\n       height: 50px;\r\n     }\r\n\r\n\r\n     .inn-search-form .form-control {\r\n       background: var(--white);\r\n       border: 0px;\r\n       border-radius: 0px;\r\n       padding: 0;\r\n       font-size: 14px;\r\n       color: var(--black);\r\n       font-weight: 400;\r\n       height: calc(1.0rem + 34px);\r\n       box-shadow: none;\r\n       outline: none;\r\n       padding-left: 50px;\r\n       margin: 0;\r\n   }\r\n\r\n\r\n     .inn-search-form .search-field:first-child .form-control {\r\n     border-radius: 5px 0px 0px 5px;\r\n   }\r\n\r\n\r\n     .search-field:last-child .form-control{\r\n     border-radius:  0px 5px 5px 0px;\r\n   }\r\n\r\n\r\n     .inn-search-form .form-group::before {\r\n     position: absolute;\r\n     right: 0;\r\n     top: 9px;\r\n     width: 1px;\r\n     height: 30px;\r\n     background: #dddddd;\r\n     content: \"\";\r\n     z-index: 1;\r\n   }\r\n\r\n\r\n     .login .form-group input::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n     color: var(--black);\r\n   }\r\n\r\n\r\n     .login .form-group input::-moz-placeholder { /* Firefox 19+ */\r\n     color: var(--black);\r\n   }\r\n\r\n\r\n     .login .form-group input:-ms-input-placeholder { /* IE 10+ */\r\n     color: var(--black);\r\n   }\r\n\r\n\r\n     .login .form-group input:-moz-placeholder { /* Firefox 18- */\r\n     color: var(--black);\r\n   }\r\n\r\n\r\n     .inn-search-form .provider {\r\n     position: absolute;\r\n     background-position: -18px -62px;\r\n     width: 30px;\r\n     height: 30px;\r\n     float: left;\r\n     margin: 0px 10px;\r\n   }\r\n\r\n\r\n     .home-page-search-form .procedureIcon {\r\n     position: absolute;\r\n     background-position: -64px -60px;\r\n     width: 30px;\r\n     height: 30px;\r\n     float: left;\r\n     margin: 6px 10px;\r\n   }\r\n\r\n\r\n     .inn-search-form .zip-code {\r\n     position: absolute;\r\n     background-position: -72px -62px;\r\n     width: 30px;\r\n     height: 30px;\r\n     float: left;\r\n     margin: 0px 10px;\r\n   }\r\n\r\n\r\n     .inn-search-form .Insurrance-Carrier {\r\n     position: absolute;\r\n     background-position: -132px -62px;\r\n     width: 32px;\r\n     height: 30px;\r\n     float: left;\r\n     margin: 0px 10px;\r\n   }\r\n\r\n\r\n     .inn-search-form .Insurrance-Plan {\r\n     position: absolute;\r\n     background-position: -199px -61px;\r\n     width: 30px;\r\n     height: 30px;\r\n     float: left;\r\n     margin: 0px 10px;\r\n   }\r\n\r\n\r\n     .inn-search-form .submit{\r\n     background-position: -237px -53px;\r\n     width: 73px;\r\n     height: 50px;\r\n     margin: 0px 0px;\r\n   }\r\n\r\n\r\n     .search-drop-down {\r\n     position: absolute;\r\n     width: 50%;\r\n     max-height: 300px;\r\n     overflow-y: auto;\r\n     z-index: 10;\r\n     background-color: #F6F6F6;\r\n     font-family: sans-serif;\r\n     opacity: 0.98;\r\n   }\r\n\r\n\r\n     .loginButton {\r\n    float: right;\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n     .bottom-nav .navbar-brand {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n\r\n     .loginButton a {\r\n  color: var(--white);\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n}\r\n\r\n\r\n \r\n   \r\n   \r\n   \r\n   \r\n   \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jL2lubmhlYWRlci9pbm5oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixvRkFBb0Y7SUFDcEYsaUJBQWlCO0FBQ3JCOzs7S0FHSztTQUNJLGtCQUFrQjtTQUNsQixrQkFBa0I7S0FDdEI7OztLQUVBO0tBQ0EsWUFBWTs7O0tBR1o7OztLQUVBO0tBQ0EsZUFBZTtLQUNmLHdCQUF3QjtLQUN4QixXQUFXO0tBQ1gsU0FBUztLQUNUOzs7S0FDQTtPQUNFLHdCQUF3QjtPQUN4QixrQkFBa0I7R0FDdEI7OztLQUNBO0tBQ0UsV0FBVztLQUNYLFFBQVE7S0FDUixTQUFTO0tBQ1QsbUJBQW1CO0tBQ25CLCtCQUErQjtLQUMvQixzREFBc0Q7S0FDdEQsa0JBQWtCO0tBQ2xCLFFBQVE7S0FDUixtQ0FBMkI7YUFBM0IsMkJBQTJCO0dBQzdCOzs7S0FFQztLQUNDLFVBQVU7S0FDVixhQUFhO0tBQ2IsV0FBVztLQUNYLGtCQUFrQjtLQUNsQjs7O0tBRUE7S0FDQSxnQkFBZ0I7S0FDaEI7OztLQUVBO09BQ0Usa0JBQWtCO09BQ2xCLCtCQUErQjtPQUMvQixZQUFZO09BQ1osU0FBUztPQUNULFFBQVE7T0FDUixZQUFZO0tBQ2Q7OztLQUdBO09BQ0Usd0JBQXdCO09BQ3hCLFdBQVc7T0FDWCxrQkFBa0I7T0FDbEIsVUFBVTtPQUNWLGVBQWU7T0FDZixtQkFBbUI7T0FDbkIsZ0JBQWdCO09BQ2hCLDJCQUEyQjtPQUMzQixnQkFBZ0I7T0FDaEIsYUFBYTtPQUNiLGtCQUFrQjtPQUNsQixTQUFTO0dBQ2I7OztLQUdBO0tBS0UsOEJBQThCO0dBQ2hDOzs7S0FFQTtLQUtFLCtCQUErQjtHQUNqQzs7O0tBQ0E7S0FDRSxrQkFBa0I7S0FDbEIsUUFBUTtLQUNSLFFBQVE7S0FDUixVQUFVO0tBQ1YsWUFBWTtLQUNaLG1CQUFtQjtLQUNuQixXQUFXO0tBQ1gsVUFBVTtHQUNaOzs7S0FDQSxzREFBc0Qsd0JBQXdCO0tBQzVFLG1CQUFtQjtHQUNyQjs7O0tBQ0EsNkNBQTZDLGdCQUFnQjtLQUMzRCxtQkFBbUI7R0FDckI7OztLQUNBLGlEQUFpRCxXQUFXO0tBQzFELG1CQUFtQjtHQUNyQjs7O0tBQ0EsNENBQTRDLGdCQUFnQjtLQUMxRCxtQkFBbUI7R0FDckI7OztLQUdBO0tBQ0Usa0JBQWtCO0tBQ2xCLGdDQUFnQztLQUNoQyxXQUFXO0tBQ1gsWUFBWTtLQUNaLFdBQVc7S0FDWCxnQkFBZ0I7R0FDbEI7OztLQUVBO0tBQ0Usa0JBQWtCO0tBQ2xCLGdDQUFnQztLQUNoQyxXQUFXO0tBQ1gsWUFBWTtLQUNaLFdBQVc7S0FDWCxnQkFBZ0I7R0FDbEI7OztLQUdBO0tBQ0Usa0JBQWtCO0tBQ2xCLGdDQUFnQztLQUNoQyxXQUFXO0tBQ1gsWUFBWTtLQUNaLFdBQVc7S0FDWCxnQkFBZ0I7R0FDbEI7OztLQUNBO0tBQ0Usa0JBQWtCO0tBQ2xCLGlDQUFpQztLQUNqQyxXQUFXO0tBQ1gsWUFBWTtLQUNaLFdBQVc7S0FDWCxnQkFBZ0I7R0FDbEI7OztLQUVBO0tBQ0Usa0JBQWtCO0tBQ2xCLGlDQUFpQztLQUNqQyxXQUFXO0tBQ1gsWUFBWTtLQUNaLFdBQVc7S0FDWCxnQkFBZ0I7R0FDbEI7OztLQUdBO0tBQ0UsaUNBQWlDO0tBQ2pDLFdBQVc7S0FDWCxZQUFZO0tBQ1osZUFBZTtHQUNqQjs7O0tBRUE7S0FDRSxrQkFBa0I7S0FDbEIsVUFBVTtLQUNWLGlCQUFpQjtLQUNqQixnQkFBZ0I7S0FDaEIsV0FBVztLQUNYLHlCQUF5QjtLQUN6Qix1QkFBdUI7S0FDdkIsYUFBYTtHQUNmOzs7S0FDQTtJQUNDLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7OztLQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7S0FDQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2luYy9pbm5oZWFkZXIvaW5uaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDogIzBhNDM4ZjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgxMCw2OCwxNDMsMSkgMCUsIHJnYmEoMTgsMTAyLDE4MCwxKSAxMDAlKTtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG59XHJcblxyXG5cclxuICAgICAuZm9ybS1ncm91cCBpbnB1dCArIGxhYmVsIHtcclxuICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIC5ob21lLXBhZ2Utc2VhcmNoe1xyXG4gICAgIG1hcmdpbjogYXV0bztcclxuICAgICBcclxuICAgICAgICAgXHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIC5sb2dpbiAuZm9ybS1ncm91cCBpbnB1dC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgbWFyZ2luLXRvcDogMHB4OyAgICBcclxuICAgICAvKm1hcmdpbi1yaWdodDogMjVweDsgICovXHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgYm9yZGVyOiAwOyAgICBcclxuICAgICB9XHJcbiAgICAgLmlubi1zZWFyY2gtZm9ybSBmaWVsZHNldCB7XHJcbiAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNzRweCk7XHJcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIH1cclxuICAgLmlubi1zZWFyY2gtZm9ybSBmaWVsZHNldDphZnRlcntcclxuICAgICBjb250ZW50OiAnJztcclxuICAgICB3aWR0aDogMDtcclxuICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICBib3JkZXItd2lkdGg6IDguNXB4IDAgOC41cHggOHB4O1xyXG4gICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZjtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgdG9wOiA1MCU7XHJcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICB9XHJcbiAgIFxyXG4gICAgLmxvZ2luIC5mb3JtLWdyb3Vwe1xyXG4gICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgd2lkdGg6IDI0Ljc4JTtcclxuICAgICBmbG9hdDogbGVmdDtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIC5ob21lc2VhcmNoLWNvbnRlbnQgaDJ7XHJcbiAgICAgZm9udC13ZWlnaHQ6IDYwMDsgICAgXHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIC5pbm4tc2VhcmNoLWZvcm0gIGJ1dHRvbi5zdWJtaXR7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xyXG4gICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgd2lkdGg6IDUlO1xyXG4gICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgfVxyXG4gICBcclxuICAgXHJcbiAgICAgLmlubi1zZWFyY2gtZm9ybSAuZm9ybS1jb250cm9sIHtcclxuICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgcGFkZGluZzogMDtcclxuICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgaGVpZ2h0OiBjYWxjKDEuMHJlbSArIDM0cHgpO1xyXG4gICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICBtYXJnaW46IDA7XHJcbiAgIH1cclxuICAgXHJcbiAgIFxyXG4gICAuaW5uLXNlYXJjaC1mb3JtIC5zZWFyY2gtZmllbGQ6Zmlyc3QtY2hpbGQgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XHJcbiAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XHJcbiAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcclxuICAgICAtby1ib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAuc2VhcmNoLWZpZWxkOmxhc3QtY2hpbGQgLmZvcm0tY29udHJvbHtcclxuICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcclxuICAgICAtbW96LWJvcmRlci1yYWRpdXM6ICAwcHggNXB4IDVweCAwcHg7XHJcbiAgICAgLW1zLWJvcmRlci1yYWRpdXM6ICAwcHggNXB4IDVweCAwcHg7XHJcbiAgICAgLW8tYm9yZGVyLXJhZGl1czogIDBweCA1cHggNXB4IDBweDtcclxuICAgICBib3JkZXItcmFkaXVzOiAgMHB4IDVweCA1cHggMHB4O1xyXG4gICB9XHJcbiAgIC5pbm4tc2VhcmNoLWZvcm0gLmZvcm0tZ3JvdXA6OmJlZm9yZSB7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHJpZ2h0OiAwO1xyXG4gICAgIHRvcDogOXB4O1xyXG4gICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgIGJhY2tncm91bmQ6ICNkZGRkZGQ7XHJcbiAgICAgY29udGVudDogXCJcIjtcclxuICAgICB6LWluZGV4OiAxO1xyXG4gICB9XHJcbiAgIC5sb2dpbiAuZm9ybS1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cclxuICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICB9XHJcbiAgIC5sb2dpbiAuZm9ybS1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTkrICovXHJcbiAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgfVxyXG4gICAubG9naW4gLmZvcm0tZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSUUgMTArICovXHJcbiAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgfVxyXG4gICAubG9naW4gLmZvcm0tZ3JvdXAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXHJcbiAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgfVxyXG4gICBcclxuICAgXHJcbiAgIC5pbm4tc2VhcmNoLWZvcm0gLnByb3ZpZGVyIHtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE4cHggLTYycHg7XHJcbiAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5ob21lLXBhZ2Utc2VhcmNoLWZvcm0gLnByb2NlZHVyZUljb24ge1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtNjBweDtcclxuICAgICB3aWR0aDogMzBweDtcclxuICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgbWFyZ2luOiA2cHggMTBweDtcclxuICAgfVxyXG4gICBcclxuICAgXHJcbiAgIC5pbm4tc2VhcmNoLWZvcm0gLnppcC1jb2RlIHtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTcycHggLTYycHg7XHJcbiAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgIH1cclxuICAgLmlubi1zZWFyY2gtZm9ybSAuSW5zdXJyYW5jZS1DYXJyaWVyIHtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEzMnB4IC02MnB4O1xyXG4gICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgIGhlaWdodDogMzBweDtcclxuICAgICBmbG9hdDogbGVmdDtcclxuICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAuaW5uLXNlYXJjaC1mb3JtIC5JbnN1cnJhbmNlLVBsYW4ge1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTk5cHggLTYxcHg7XHJcbiAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIFxyXG4gICAuaW5uLXNlYXJjaC1mb3JtIC5zdWJtaXR7XHJcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIzN3B4IC01M3B4O1xyXG4gICAgIHdpZHRoOiA3M3B4O1xyXG4gICAgIGhlaWdodDogNTBweDtcclxuICAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5zZWFyY2gtZHJvcC1kb3duIHtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgd2lkdGg6IDUwJTtcclxuICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgIHotaW5kZXg6IDEwO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcbiAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgb3BhY2l0eTogMC45ODtcclxuICAgfVxyXG4gICAubG9naW5CdXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uYm90dG9tLW5hdiAubmF2YmFyLWJyYW5kIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5sb2dpbkJ1dHRvbiBhIHtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcblxyXG4gXHJcbiAgIFxyXG4gICBcclxuICAgXHJcbiAgIFxyXG4gICAiXX0= */"

/***/ }),

/***/ "./src/app/inc/innheader/innheader.component.html":
/*!********************************************************!*\
  !*** ./src/app/inc/innheader/innheader.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"commenPadding innheader\">\r\n<div class=\"container-fluid\">\r\n      <div class=\"bottom-nav\">\r\n          <a class=\"navbar-brand\" href=\"#\"> <img src=\"assets/innlogo.png\" alt=\"\" >  </a>\r\n    \r\n<div class=\"loginButton\">\r\n  <a href=\"#\" data-toggle=\"modal\" data-target=\"#loginModal\" > Log in / Sign up <span class=\"sprites login\"></span> </a>\r\n</div>\r\n</div>\r\n<div class=\"innsearchBox\">\r\n  <form class=\"form-inline login inn-search-form\" action=\"page.php\" method=\"POST\" enctype=\"multipart/form-data\" role=\"form\">\r\n    <fieldset>    \r\n    <div class=\"form-group search-field\">\r\n           <label class=\"sprites provider\">  </label> \r\n            <input type=\"text\" class=\"form-control ListGet\" id=\"\" placeholder=\"professional Name, Procedure, Condition\">\r\n            <div class=\"list\" style=\"display: none;\">\r\n                <ul class=\"list-unstyled\">\r\n                    <li><span> All Specialties (a-z)</span></li>\r\n                    <li>Sports Medicine Specialist</li>\r\n                    <li>Dermatologist</li>\r\n                    <li>Dentist</li>\r\n                    <li>Gender Dysphoria</li>\r\n                    <li>Sports Medicine Specialist</li>\r\n                    <li>Primary Care Doctor (PCP)</li>\r\n                    <li>OB-GYN (Obstetrician-Gynecologist)</li>\r\n                    <li>Spasmodic  Dysphonia</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"form-group search-field\">\r\n            <label class=\"sprites zip-code\"></label>\r\n            <input type=\"email\" class=\"form-control\" id=\"\" placeholder=\"Zip Code\">\r\n        </div>\r\n        <div class=\"form-group search-field\">\r\n            <label class=\"sprites Insurrance-Carrier\"></label>\r\n            <input type=\"email\" class=\"form-control\" id=\"\" placeholder=\"Insurrance Carrier\">\r\n        </div>\r\n        <div class=\"form-group search-field\">\r\n              <label class=\"sprites Insurrance-Plan\"> </label>\r\n            <input type=\"email\" class=\"form-control\" id=\"\" placeholder=\"Insurrance Plan\">\r\n        </div>\r\n    </fieldset>\r\n        <button type=\"submit\" class=\"btn  sprites submit\"></button>\r\n    </form>\r\n</div>\r\n\r\n</div>\r\n</header>"

/***/ }),

/***/ "./src/app/inc/innheader/innheader.component.ts":
/*!******************************************************!*\
  !*** ./src/app/inc/innheader/innheader.component.ts ***!
  \******************************************************/
/*! exports provided: InnheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnheaderComponent", function() { return InnheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InnheaderComponent = /** @class */ (function () {
    function InnheaderComponent() {
    }
    InnheaderComponent.prototype.ngOnInit = function () {
    };
    InnheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-innheader',
            template: __webpack_require__(/*! ./innheader.component.html */ "./src/app/inc/innheader/innheader.component.html"),
            styles: [__webpack_require__(/*! ./innheader.component.css */ "./src/app/inc/innheader/innheader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InnheaderComponent);
    return InnheaderComponent;
}());



/***/ }),

/***/ "./src/app/inc/innheadercommon/innheadercommon.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/inc/innheadercommon/innheadercommon.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".innheader{\r\n    background: #0a438f;\r\n    background: linear-gradient(to right, rgba(10,68,143,1) 0%, rgba(18,102,180,1) 100%);\r\n    padding: 20px 0px;\r\n}\r\n\r\n\r\n     .form-group input + label {\r\n         position: absolute;\r\n         padding-left: 10px;\r\n     }\r\n\r\n\r\n     .home-page-search{\r\n     margin: auto;\r\n     \r\n         \r\n     }\r\n\r\n\r\n     .login .form-group input.form-control{\r\n     margin-top: 0px;    \r\n     /*margin-right: 25px;  */\r\n     width: 100%;\r\n     border: 0;    \r\n     }\r\n\r\n\r\n     .inn-search-form fieldset {\r\n       width: calc(100% - 74px);\r\n       position: relative;\r\n   }\r\n\r\n\r\n     .inn-search-form fieldset:after{\r\n     content: '';\r\n     width: 0;\r\n     height: 0;\r\n     border-style: solid;\r\n     border-width: 8.5px 0 8.5px 8px;\r\n     border-color: transparent transparent transparent #fff;\r\n     position: absolute;\r\n     top: 50%;\r\n     -webkit-transform: translateY(-50%);\r\n             transform: translateY(-50%);\r\n   }\r\n\r\n\r\n     .login .form-group{\r\n     padding: 0;\r\n     width: 24.78%;\r\n     float: left;\r\n     position: relative;\r\n     }\r\n\r\n\r\n     .homesearch-content h2{\r\n     font-weight: 600;    \r\n     }\r\n\r\n\r\n     .inn-search-form  button.submit{\r\n       border-radius: 5px;\r\n       background-color: var(--orange);\r\n       float: right;\r\n       width: 5%;\r\n       right: 0;\r\n       height: 50px;\r\n     }\r\n\r\n\r\n     .inn-search-form .form-control {\r\n       background: var(--white);\r\n       border: 0px;\r\n       border-radius: 0px;\r\n       padding: 0;\r\n       font-size: 14px;\r\n       color: var(--black);\r\n       font-weight: 400;\r\n       height: calc(1.0rem + 34px);\r\n       box-shadow: none;\r\n       outline: none;\r\n       padding-left: 50px;\r\n       margin: 0;\r\n   }\r\n\r\n\r\n     .inn-search-form .search-field:first-child .form-control {\r\n     border-radius: 5px 0px 0px 5px;\r\n   }\r\n\r\n\r\n     .search-field:last-child .form-control{\r\n     border-radius:  0px 5px 5px 0px;\r\n   }\r\n\r\n\r\n     .inn-search-form .form-group::before {\r\n     position: absolute;\r\n     right: 0;\r\n     top: 9px;\r\n     width: 1px;\r\n     height: 30px;\r\n     background: #dddddd;\r\n     content: \"\";\r\n     z-index: 1;\r\n   }\r\n\r\n\r\n     .login .form-group input::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n     color: var(--black);\r\n   }\r\n\r\n\r\n     .login .form-group input::-moz-placeholder { /* Firefox 19+ */\r\n     color: var(--black);\r\n   }\r\n\r\n\r\n     .login .form-group input:-ms-input-placeholder { /* IE 10+ */\r\n     color: var(--black);\r\n   }\r\n\r\n\r\n     .login .form-group input:-moz-placeholder { /* Firefox 18- */\r\n     color: var(--black);\r\n   }\r\n\r\n\r\n     .inn-search-form .provider {\r\n     position: absolute;\r\n     background-position: -18px -62px;\r\n     width: 30px;\r\n     height: 30px;\r\n     float: left;\r\n     margin: 0px 10px;\r\n   }\r\n\r\n\r\n     .home-page-search-form .procedureIcon {\r\n     position: absolute;\r\n     background-position: -64px -60px;\r\n     width: 30px;\r\n     height: 30px;\r\n     float: left;\r\n     margin: 6px 10px;\r\n   }\r\n\r\n\r\n     .inn-search-form .zip-code {\r\n     position: absolute;\r\n     background-position: -72px -62px;\r\n     width: 30px;\r\n     height: 30px;\r\n     float: left;\r\n     margin: 0px 10px;\r\n   }\r\n\r\n\r\n     .inn-search-form .Insurrance-Carrier {\r\n     position: absolute;\r\n     background-position: -132px -62px;\r\n     width: 32px;\r\n     height: 30px;\r\n     float: left;\r\n     margin: 0px 10px;\r\n   }\r\n\r\n\r\n     .inn-search-form .Insurrance-Plan {\r\n     position: absolute;\r\n     background-position: -199px -61px;\r\n     width: 30px;\r\n     height: 30px;\r\n     float: left;\r\n     margin: 0px 10px;\r\n   }\r\n\r\n\r\n     .inn-search-form .submit{\r\n     background-position: -237px -53px;\r\n     width: 73px;\r\n     height: 50px;\r\n     margin: 0px 0px;\r\n   }\r\n\r\n\r\n     .search-drop-down {\r\n     position: absolute;\r\n     width: 50%;\r\n     max-height: 300px;\r\n     overflow-y: auto;\r\n     z-index: 10;\r\n     background-color: #F6F6F6;\r\n     font-family: sans-serif;\r\n     opacity: 0.98;\r\n   }\r\n\r\n\r\n     .loginButton {\r\n    float: right;\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n     .bottom-nav .navbar-brand {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n\r\n     .loginButton a {\r\n  color: var(--white);\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jL2lubmhlYWRlcmNvbW1vbi9pbm5oZWFkZXJjb21tb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixvRkFBb0Y7SUFDcEYsaUJBQWlCO0FBQ3JCOzs7S0FHSztTQUNJLGtCQUFrQjtTQUNsQixrQkFBa0I7S0FDdEI7OztLQUVBO0tBQ0EsWUFBWTs7O0tBR1o7OztLQUVBO0tBQ0EsZUFBZTtLQUNmLHdCQUF3QjtLQUN4QixXQUFXO0tBQ1gsU0FBUztLQUNUOzs7S0FDQTtPQUNFLHdCQUF3QjtPQUN4QixrQkFBa0I7R0FDdEI7OztLQUNBO0tBQ0UsV0FBVztLQUNYLFFBQVE7S0FDUixTQUFTO0tBQ1QsbUJBQW1CO0tBQ25CLCtCQUErQjtLQUMvQixzREFBc0Q7S0FDdEQsa0JBQWtCO0tBQ2xCLFFBQVE7S0FDUixtQ0FBMkI7YUFBM0IsMkJBQTJCO0dBQzdCOzs7S0FFQztLQUNDLFVBQVU7S0FDVixhQUFhO0tBQ2IsV0FBVztLQUNYLGtCQUFrQjtLQUNsQjs7O0tBRUE7S0FDQSxnQkFBZ0I7S0FDaEI7OztLQUVBO09BQ0Usa0JBQWtCO09BQ2xCLCtCQUErQjtPQUMvQixZQUFZO09BQ1osU0FBUztPQUNULFFBQVE7T0FDUixZQUFZO0tBQ2Q7OztLQUdBO09BQ0Usd0JBQXdCO09BQ3hCLFdBQVc7T0FDWCxrQkFBa0I7T0FDbEIsVUFBVTtPQUNWLGVBQWU7T0FDZixtQkFBbUI7T0FDbkIsZ0JBQWdCO09BQ2hCLDJCQUEyQjtPQUMzQixnQkFBZ0I7T0FDaEIsYUFBYTtPQUNiLGtCQUFrQjtPQUNsQixTQUFTO0dBQ2I7OztLQUdBO0tBS0UsOEJBQThCO0dBQ2hDOzs7S0FFQTtLQUtFLCtCQUErQjtHQUNqQzs7O0tBQ0E7S0FDRSxrQkFBa0I7S0FDbEIsUUFBUTtLQUNSLFFBQVE7S0FDUixVQUFVO0tBQ1YsWUFBWTtLQUNaLG1CQUFtQjtLQUNuQixXQUFXO0tBQ1gsVUFBVTtHQUNaOzs7S0FDQSxzREFBc0Qsd0JBQXdCO0tBQzVFLG1CQUFtQjtHQUNyQjs7O0tBQ0EsNkNBQTZDLGdCQUFnQjtLQUMzRCxtQkFBbUI7R0FDckI7OztLQUNBLGlEQUFpRCxXQUFXO0tBQzFELG1CQUFtQjtHQUNyQjs7O0tBQ0EsNENBQTRDLGdCQUFnQjtLQUMxRCxtQkFBbUI7R0FDckI7OztLQUdBO0tBQ0Usa0JBQWtCO0tBQ2xCLGdDQUFnQztLQUNoQyxXQUFXO0tBQ1gsWUFBWTtLQUNaLFdBQVc7S0FDWCxnQkFBZ0I7R0FDbEI7OztLQUVBO0tBQ0Usa0JBQWtCO0tBQ2xCLGdDQUFnQztLQUNoQyxXQUFXO0tBQ1gsWUFBWTtLQUNaLFdBQVc7S0FDWCxnQkFBZ0I7R0FDbEI7OztLQUdBO0tBQ0Usa0JBQWtCO0tBQ2xCLGdDQUFnQztLQUNoQyxXQUFXO0tBQ1gsWUFBWTtLQUNaLFdBQVc7S0FDWCxnQkFBZ0I7R0FDbEI7OztLQUNBO0tBQ0Usa0JBQWtCO0tBQ2xCLGlDQUFpQztLQUNqQyxXQUFXO0tBQ1gsWUFBWTtLQUNaLFdBQVc7S0FDWCxnQkFBZ0I7R0FDbEI7OztLQUVBO0tBQ0Usa0JBQWtCO0tBQ2xCLGlDQUFpQztLQUNqQyxXQUFXO0tBQ1gsWUFBWTtLQUNaLFdBQVc7S0FDWCxnQkFBZ0I7R0FDbEI7OztLQUdBO0tBQ0UsaUNBQWlDO0tBQ2pDLFdBQVc7S0FDWCxZQUFZO0tBQ1osZUFBZTtHQUNqQjs7O0tBRUE7S0FDRSxrQkFBa0I7S0FDbEIsVUFBVTtLQUNWLGlCQUFpQjtLQUNqQixnQkFBZ0I7S0FDaEIsV0FBVztLQUNYLHlCQUF5QjtLQUN6Qix1QkFBdUI7S0FDdkIsYUFBYTtHQUNmOzs7S0FDQTtJQUNDLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7OztLQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7S0FDQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2luYy9pbm5oZWFkZXJjb21tb24vaW5uaGVhZGVyY29tbW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDogIzBhNDM4ZjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgxMCw2OCwxNDMsMSkgMCUsIHJnYmEoMTgsMTAyLDE4MCwxKSAxMDAlKTtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG59XHJcblxyXG5cclxuICAgICAuZm9ybS1ncm91cCBpbnB1dCArIGxhYmVsIHtcclxuICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIC5ob21lLXBhZ2Utc2VhcmNoe1xyXG4gICAgIG1hcmdpbjogYXV0bztcclxuICAgICBcclxuICAgICAgICAgXHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIC5sb2dpbiAuZm9ybS1ncm91cCBpbnB1dC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgbWFyZ2luLXRvcDogMHB4OyAgICBcclxuICAgICAvKm1hcmdpbi1yaWdodDogMjVweDsgICovXHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgYm9yZGVyOiAwOyAgICBcclxuICAgICB9XHJcbiAgICAgLmlubi1zZWFyY2gtZm9ybSBmaWVsZHNldCB7XHJcbiAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNzRweCk7XHJcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIH1cclxuICAgLmlubi1zZWFyY2gtZm9ybSBmaWVsZHNldDphZnRlcntcclxuICAgICBjb250ZW50OiAnJztcclxuICAgICB3aWR0aDogMDtcclxuICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICBib3JkZXItd2lkdGg6IDguNXB4IDAgOC41cHggOHB4O1xyXG4gICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZjtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgdG9wOiA1MCU7XHJcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICB9XHJcbiAgIFxyXG4gICAgLmxvZ2luIC5mb3JtLWdyb3Vwe1xyXG4gICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgd2lkdGg6IDI0Ljc4JTtcclxuICAgICBmbG9hdDogbGVmdDtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIC5ob21lc2VhcmNoLWNvbnRlbnQgaDJ7XHJcbiAgICAgZm9udC13ZWlnaHQ6IDYwMDsgICAgXHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIC5pbm4tc2VhcmNoLWZvcm0gIGJ1dHRvbi5zdWJtaXR7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xyXG4gICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgd2lkdGg6IDUlO1xyXG4gICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgfVxyXG4gICBcclxuICAgXHJcbiAgICAgLmlubi1zZWFyY2gtZm9ybSAuZm9ybS1jb250cm9sIHtcclxuICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgcGFkZGluZzogMDtcclxuICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgaGVpZ2h0OiBjYWxjKDEuMHJlbSArIDM0cHgpO1xyXG4gICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICBtYXJnaW46IDA7XHJcbiAgIH1cclxuICAgXHJcbiAgIFxyXG4gICAuaW5uLXNlYXJjaC1mb3JtIC5zZWFyY2gtZmllbGQ6Zmlyc3QtY2hpbGQgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XHJcbiAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XHJcbiAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcclxuICAgICAtby1ib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAuc2VhcmNoLWZpZWxkOmxhc3QtY2hpbGQgLmZvcm0tY29udHJvbHtcclxuICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcclxuICAgICAtbW96LWJvcmRlci1yYWRpdXM6ICAwcHggNXB4IDVweCAwcHg7XHJcbiAgICAgLW1zLWJvcmRlci1yYWRpdXM6ICAwcHggNXB4IDVweCAwcHg7XHJcbiAgICAgLW8tYm9yZGVyLXJhZGl1czogIDBweCA1cHggNXB4IDBweDtcclxuICAgICBib3JkZXItcmFkaXVzOiAgMHB4IDVweCA1cHggMHB4O1xyXG4gICB9XHJcbiAgIC5pbm4tc2VhcmNoLWZvcm0gLmZvcm0tZ3JvdXA6OmJlZm9yZSB7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHJpZ2h0OiAwO1xyXG4gICAgIHRvcDogOXB4O1xyXG4gICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgIGJhY2tncm91bmQ6ICNkZGRkZGQ7XHJcbiAgICAgY29udGVudDogXCJcIjtcclxuICAgICB6LWluZGV4OiAxO1xyXG4gICB9XHJcbiAgIC5sb2dpbiAuZm9ybS1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cclxuICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICB9XHJcbiAgIC5sb2dpbiAuZm9ybS1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTkrICovXHJcbiAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgfVxyXG4gICAubG9naW4gLmZvcm0tZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSUUgMTArICovXHJcbiAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgfVxyXG4gICAubG9naW4gLmZvcm0tZ3JvdXAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXHJcbiAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgfVxyXG4gICBcclxuICAgXHJcbiAgIC5pbm4tc2VhcmNoLWZvcm0gLnByb3ZpZGVyIHtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE4cHggLTYycHg7XHJcbiAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5ob21lLXBhZ2Utc2VhcmNoLWZvcm0gLnByb2NlZHVyZUljb24ge1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtNjBweDtcclxuICAgICB3aWR0aDogMzBweDtcclxuICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgbWFyZ2luOiA2cHggMTBweDtcclxuICAgfVxyXG4gICBcclxuICAgXHJcbiAgIC5pbm4tc2VhcmNoLWZvcm0gLnppcC1jb2RlIHtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTcycHggLTYycHg7XHJcbiAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgIH1cclxuICAgLmlubi1zZWFyY2gtZm9ybSAuSW5zdXJyYW5jZS1DYXJyaWVyIHtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEzMnB4IC02MnB4O1xyXG4gICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgIGhlaWdodDogMzBweDtcclxuICAgICBmbG9hdDogbGVmdDtcclxuICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAuaW5uLXNlYXJjaC1mb3JtIC5JbnN1cnJhbmNlLVBsYW4ge1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTk5cHggLTYxcHg7XHJcbiAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIFxyXG4gICAuaW5uLXNlYXJjaC1mb3JtIC5zdWJtaXR7XHJcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIzN3B4IC01M3B4O1xyXG4gICAgIHdpZHRoOiA3M3B4O1xyXG4gICAgIGhlaWdodDogNTBweDtcclxuICAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5zZWFyY2gtZHJvcC1kb3duIHtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgd2lkdGg6IDUwJTtcclxuICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgIHotaW5kZXg6IDEwO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcbiAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgb3BhY2l0eTogMC45ODtcclxuICAgfVxyXG4gICAubG9naW5CdXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uYm90dG9tLW5hdiAubmF2YmFyLWJyYW5kIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmxvZ2luQnV0dG9uIGEge1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/inc/innheadercommon/innheadercommon.component.html":
/*!********************************************************************!*\
  !*** ./src/app/inc/innheadercommon/innheadercommon.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"commenPadding innheader\">\r\n  <div class=\"container-fluid\">\r\n        <div class=\"bottom-nav\">\r\n            <a class=\"navbar-brand\" href=\"#\"> <img src=\"assets/innlogo.png\" alt=\"\" >  </a>\r\n      \r\n  <!-- <div class=\"loginButton\">\r\n    <a href=\"#\" data-toggle=\"modal\" data-target=\"#loginModal\" > Log in / Sign up <span class=\"sprites login\"></span> </a>\r\n  </div> -->\r\n  </div>\r\n  </div>\r\n  </header>"

/***/ }),

/***/ "./src/app/inc/innheadercommon/innheadercommon.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/inc/innheadercommon/innheadercommon.component.ts ***!
  \******************************************************************/
/*! exports provided: InnheadercommonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnheadercommonComponent", function() { return InnheadercommonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InnheadercommonComponent = /** @class */ (function () {
    function InnheadercommonComponent() {
    }
    InnheadercommonComponent.prototype.ngOnInit = function () {
    };
    InnheadercommonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-innheadercommon',
            template: __webpack_require__(/*! ./innheadercommon.component.html */ "./src/app/inc/innheadercommon/innheadercommon.component.html"),
            styles: [__webpack_require__(/*! ./innheadercommon.component.css */ "./src/app/inc/innheadercommon/innheadercommon.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InnheadercommonComponent);
    return InnheadercommonComponent;
}());



/***/ }),

/***/ "./src/app/inc/newssection/newssection.component.css":
/*!***********************************************************!*\
  !*** ./src/app/inc/newssection/newssection.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-section-slider {\r\n    margin-top: 20px;\r\n}\r\n.newsCart {\r\n    border: 0;\r\n    background: var(--white);\r\n    border-radius: 5px;\r\n}\r\n.newsCart .card-Img img {\r\n    border-radius: 0px 0px 5px 5px;\r\n}\r\n.newsCart .newsCart-info {\r\n    padding: 20px;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    color: var(--Blue);\r\n    font-weight: 500;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jL25ld3NzZWN0aW9uL25ld3NzZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9pbmMvbmV3c3NlY3Rpb24vbmV3c3NlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdzLXNlY3Rpb24tc2xpZGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLm5ld3NDYXJ0IHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4ubmV3c0NhcnQgLmNhcmQtSW1nIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XHJcbn1cclxuXHJcbi5uZXdzQ2FydCAubmV3c0NhcnQtaW5mbyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLUJsdWUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/inc/newssection/newssection.component.html":
/*!************************************************************!*\
  !*** ./src/app/inc/newssection/newssection.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"NewsSection lightBg\"> \r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n                <h2 class=\"main-heading\">News</h2>\r\n                <p class=\"sub-heading\"> Lorem ipsum dolor sit amet, consectetur adipiscing</p>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n\r\n                        <div class=\"owl-carousel owl-theme news-section-slider\">\r\n                        <div class=\"item\">\r\n                                <div class=\"newsCart\">\r\n                                <div class=\"card-Img\"><img class=\"img-fluid\" src=\"assets/news-img1.jpg\" alt=\"\"/></div>\r\n                                <div class=\"card-block newsCart-block\">\r\n                                <p class=\"card-text newsCart-info\">Lorem ipsum dolor sit amet,</p>\r\n                                </div>\r\n                               </div>\r\n                       </div>\r\n                       <div class=\"item\">\r\n                        <div class=\"newsCart\">\r\n                        <div class=\"card-Img\"><img class=\"img-fluid\" src=\"assets/news-img1.jpg\" alt=\"\"/></div>\r\n                        <div class=\"card-block newsCart-block\">\r\n                        <p class=\"card-text newsCart-info\">Lorem ipsum dolor sit amet,</p>\r\n                        </div>\r\n                       </div>\r\n               </div>\r\n               <div class=\"item\">\r\n                <div class=\"newsCart\">\r\n                <div class=\"card-Img\"><img class=\"img-fluid\" src=\"assets/news-img1.jpg\" alt=\"\"/></div>\r\n                <div class=\"card-block newsCart-block\">\r\n                <p class=\"card-text newsCart-info\">Lorem ipsum dolor sit amet,</p>\r\n                </div>\r\n               </div>\r\n       </div>\r\n       <div class=\"item\">\r\n        <div class=\"newsCart\">\r\n        <div class=\"card-Img\"><img class=\"img-fluid\" src=\"assets/news-img1.jpg\" alt=\"\"/></div>\r\n        <div class=\"card-block newsCart-block\">\r\n        <p class=\"card-text newsCart-info\">Lorem ipsum dolor sit amet,</p>\r\n        </div>\r\n       </div>\r\n</div>\r\n<div class=\"item\">\r\n        <div class=\"newsCart\">\r\n        <div class=\"card-Img\"><img class=\"img-fluid\" src=\"assets/news-img1.jpg\" alt=\"\"/></div>\r\n        <div class=\"card-block newsCart-block\">\r\n        <p class=\"card-text newsCart-info\">Lorem ipsum dolor sit amet,</p>\r\n        </div>\r\n       </div>\r\n</div>\r\n\r\n\r\n                        </div>\r\n\r\n            \r\n        </div>\r\n        </div>\r\n</div>    \r\n\r\n</section>"

/***/ }),

/***/ "./src/app/inc/newssection/newssection.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/inc/newssection/newssection.component.ts ***!
  \**********************************************************/
/*! exports provided: NewssectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewssectionComponent", function() { return NewssectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewssectionComponent = /** @class */ (function () {
    function NewssectionComponent() {
    }
    NewssectionComponent.prototype.ngOnInit = function () {
        owlinit();
    };
    NewssectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newssection',
            template: __webpack_require__(/*! ./newssection.component.html */ "./src/app/inc/newssection/newssection.component.html"),
            styles: [__webpack_require__(/*! ./newssection.component.css */ "./src/app/inc/newssection/newssection.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewssectionComponent);
    return NewssectionComponent;
}());



/***/ }),

/***/ "./src/app/inc/partners/partners.component.css":
/*!*****************************************************!*\
  !*** ./src/app/inc/partners/partners.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".partners {\r\n    background-color: #f3f5f7;\r\n\r\n}\r\n.partner-content {\r\n    margin: 30px 0;\r\n}\r\n.partners .heading {\r\n    color: #00234b;\r\n    font-size: 68px;\r\n    margin-bottom: 25px;\r\n    line-height: 56px;\r\n\r\n\r\n}\r\n.join-partners {\r\n    outline: 3px solid #ffd202;\r\n    padding: 5px 45px;\r\n    font-weight: 600;\r\n    margin: 90px 0;\r\n\r\n}\r\n.partner-content .info {\r\n    color: #00234b;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n\r\n}\r\n.partners-list {\r\n    margin: 20px 20px;\r\n    display: inline-block;\r\n}\r\n.partners-info {}\r\n.partners-list li {\r\n    margin: 20px 20px;\r\n    display: inline-block;\r\n\r\n\r\n}\r\n.partner-image{\r\n/* width: 100px;\r\n    height: auto; */\r\n}\r\n/* scrollbar  */\r\n.partner-scroller::-webkit-scrollbar-track {\r\n\r\n    background-color: #ffd200;\r\n}\r\n.partner-scroller::-webkit-scrollbar {\r\n    width: 10px;\r\n    background-color: #ffd200;\r\n}\r\n.partner-scroller::-webkit-scrollbar-thumb {\r\n    background-color: #000000;\r\n    border: 2px solid #555555;\r\n}\r\n.scrollbar {\r\n    margin-left: 0px;\r\n    float: left;\r\n    height: 300px;\r\n    width: 100%;\r\n    background: inherit;\r\n    overflow-y: scroll;\r\n    margin-bottom: 25px\r\n}\r\n.force-overflow {\r\n    min-height: 450px;\r\n}\r\n/* get the medical app section  */\r\n.get-the-app {\r\n    background-color: #e8f6f4;\r\n\r\n\r\n}\r\n.app-info-list {\r\n    margin-top: 50px;\r\n    margin-left: 0;\r\n    padding-left: 15px;\r\n}\r\n.app-info-list li {\r\n    list-style-type: disc;\r\n    margin-left: 0;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jL3BhcnRuZXJzL3BhcnRuZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7O0FBRTdCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7OztBQUdyQjtBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYzs7QUFFbEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCOztBQUVwQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUVBLGdCQUFnQjtBQUVoQjtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7OztBQUd6QjtBQUdBO0FBQ0E7bUJBQ21CO0FBQ25CO0FBRUEsZUFBZTtBQUVmOztJQUVJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEI7QUFDSjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBSUEsaUNBQWlDO0FBRWpDO0lBQ0kseUJBQXlCOzs7QUFHN0I7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2luYy9wYXJ0bmVycy9wYXJ0bmVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnRuZXJzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y1Zjc7XHJcblxyXG59XHJcbi5wYXJ0bmVyLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbn1cclxuXHJcbi5wYXJ0bmVycyAuaGVhZGluZyB7XHJcbiAgICBjb2xvcjogIzAwMjM0YjtcclxuICAgIGZvbnQtc2l6ZTogNjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTZweDtcclxuXHJcblxyXG59XHJcblxyXG4uam9pbi1wYXJ0bmVycyB7XHJcbiAgICBvdXRsaW5lOiAzcHggc29saWQgI2ZmZDIwMjtcclxuICAgIHBhZGRpbmc6IDVweCA0NXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbjogOTBweCAwO1xyXG5cclxufVxyXG5cclxuLnBhcnRuZXItY29udGVudCAuaW5mbyB7XHJcbiAgICBjb2xvcjogIzAwMjM0YjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG59XHJcblxyXG4ucGFydG5lcnMtbGlzdCB7XHJcbiAgICBtYXJnaW46IDIwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnBhcnRuZXJzLWluZm8ge31cclxuXHJcbi5wYXJ0bmVycy1saXN0IGxpIHtcclxuICAgIG1hcmdpbjogMjBweCAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4ucGFydG5lci1pbWFnZXtcclxuLyogd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvOyAqL1xyXG59XHJcblxyXG4vKiBzY3JvbGxiYXIgICovXHJcblxyXG4ucGFydG5lci1zY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQyMDA7XHJcbn1cclxuXHJcbi5wYXJ0bmVyLXNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQyMDA7XHJcbn1cclxuXHJcbi5wYXJ0bmVyLXNjcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzU1NTU1NTtcclxufVxyXG5cclxuXHJcbi5zY3JvbGxiYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHhcclxufVxyXG5cclxuLmZvcmNlLW92ZXJmbG93IHtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIGdldCB0aGUgbWVkaWNhbCBhcHAgc2VjdGlvbiAgKi9cclxuXHJcbi5nZXQtdGhlLWFwcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmNmY0O1xyXG5cclxuXHJcbn1cclxuXHJcbi5hcHAtaW5mby1saXN0IHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLmFwcC1pbmZvLWxpc3QgbGkge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/inc/partners/partners.component.html":
/*!******************************************************!*\
  !*** ./src/app/inc/partners/partners.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"partners\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-md-6 col-sm-12\">\r\n\r\n              <div class=\"partner-content\">\r\n                  <h2 class=\"heading\">\r\n                      Our <br> partners\r\n                  </h2>\r\n\r\n                  <p class=\"info\">\r\n                      See why we're the perfect partner for health systems.\r\n                  </p>\r\n              </div>\r\n\r\n\r\n              <button class=\"join-partners btn-yellow\">\r\n                  Join us & our partners\r\n              </button>\r\n\r\n\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"col-md-6 col-sm-12\">\r\n\r\n              <div class=\"partners-info\">\r\n\r\n\r\n\r\n                  <div class=\"scrollbar partner-scroller\">\r\n\r\n                      <div class=\"force-overflow\">\r\n                          <ul class=\"list-inline partners-list\">\r\n                          <li><img src=\"assets/our-partners-logo1.jpg\" class=\"img-fluid partner-image\" alt=\"\"></li>\r\n                          <li><img src=\"assets/our-partners-logo2.jpg\" class=\"img-fluid partner-image\" alt=\"\"></li>\r\n                          <li><img src=\"assets/our-partners-logo3.jpg\" class=\"img-fluid partner-image\" alt=\"\"></li>\r\n                          <li><img src=\"assets/our-partners-logo4.jpg\" class=\"img-fluid partner-image\" alt=\"\"></li>\r\n                          <li><img src=\"assets/our-partners-logo5.jpg\" class=\"img-fluid partner-image\" alt=\"\"></li>\r\n                          <li><img src=\"assets/our-partners-logo6.jpg\" class=\"img-fluid partner-image\" alt=\"\"></li>\r\n                          <li><img src=\"assets/our-partners-logo7.jpg\" class=\"img-fluid partner-image\" alt=\"\"></li>\r\n                          <li><img src=\"assets/our-partners-logo8.jpg\" class=\"img-fluid partner-image\" alt=\"\"></li>\r\n                         </ul>\r\n\r\n\r\n\r\n                       \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                          \r\n\r\n\r\n\r\n                        \r\n                      </div>\r\n                  </div>\r\n\r\n\r\n              </div>\r\n\r\n          </div>\r\n\r\n      </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/inc/partners/partners.component.ts":
/*!****************************************************!*\
  !*** ./src/app/inc/partners/partners.component.ts ***!
  \****************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PartnersComponent = /** @class */ (function () {
    function PartnersComponent() {
    }
    PartnersComponent.prototype.ngOnInit = function () {
    };
    PartnersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-partners',
            template: __webpack_require__(/*! ./partners.component.html */ "./src/app/inc/partners/partners.component.html"),
            styles: [__webpack_require__(/*! ./partners.component.css */ "./src/app/inc/partners/partners.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PartnersComponent);
    return PartnersComponent;
}());



/***/ }),

/***/ "./src/app/inc/popupmodal-login/popupmodal-login.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/inc/popupmodal-login/popupmodal-login.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginCustomeModal .modal-content {\r\n    border: 0;\r\n    border-radius: 0;\r\n}\r\n\r\n.login-page-search-form .input-group {\r\n    width: 100%;\r\n    padding: 0px 0px;\r\n    margin-bottom: 30px;\r\n    position: relative;\r\n}\r\n\r\n.loginCustomeModal .modal-content .modal-title {\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    color: var(--black);\r\n    margin: 0px auto;\r\n    display: table;\r\n    position: relative;\r\n}\r\n\r\n.loginCustomeModal .modal-content .modal-title:before {\r\n    bottom: -8px;\r\n    content: \"\";\r\n    display: block;\r\n    height: 4px;\r\n    left: 50%;\r\n    margin: 0;\r\n    position: absolute;\r\n    width: 40%;\r\n    -webkit-transform: translate(-50%);\r\n            transform: translate(-50%);\r\n    background: var(--black);\r\n}\r\n\r\n.loginCustomeModal .modal-content .close {\r\n    position: absolute;\r\n    width: 25px;\r\n    height: 25px;\r\n    right: 0;\r\n    margin: 0px 10px;\r\n    background-position: -281px -105px;\r\n    top: 10px;\r\n}\r\n\r\n.loginCustomeModal .modal-content .modal-header{\r\n    border: 0;\r\n}\r\n\r\n.loginCustomeModal .modal-content .modal-body{\r\n    padding: 0px 16px 16px 16px;\r\n}\r\n\r\n.login-page-search-form .input-group .form-control {\r\n    border: 0px;\r\n    border-bottom:1px solid var(--inputBoder);  \r\n    border-radius: 0px;\r\n    line-height: 24px;\r\n    padding: 0;\r\n    background: transparent;\r\n    font-size: 14px;\r\n    letter-spacing: 0.58px;\r\n    color: var(--inputfontControl); \r\n    font-weight: 300;\r\n    height: calc(2.25rem + 10px);\r\n    box-shadow: none;\r\n    outline: none;\r\n}\r\n\r\n.login-page-search-form .form-check{\r\n      float: left;\r\n  }\r\n\r\n.login-page-search-form .form-check span {\r\n       font-size: 14px;\r\n      color:#132549;\r\n      font-weight: 500;\r\n      text-decoration: none;\r\n      margin: 0px 10px;\r\n  }\r\n\r\n.rememberText {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.forgetpassword a {\r\n    float: right;\r\n    font-size: 14px;\r\n    color:#132549;\r\n    font-weight: 500;\r\n    text-decoration: none;\r\n    margin: 0px 10px;\r\n}\r\n\r\n.login-page-search-form .loginButton {\r\n    background: var(--skyblue);\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    color: var(--white);\r\n    width: 100%;\r\n    border: 0;\r\n    border-radius: 0;\r\n    padding: 10px 0px;\r\n    text-transform: uppercase;\r\n    transition: all 600ms ease;\r\n}\r\n\r\n.login-page-search-form .loginButton:hover{\r\n    background: var(--Blue);\r\n}\r\n\r\n.signText {\r\n    font-size: 14px;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    font-weight: 400;\r\n    color: var(--black);\r\n}\r\n\r\n.signText a{\r\n    font-weight: 500;\r\n    color: var(--Blue);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jL3BvcHVwbW9kYWwtbG9naW4vcG9wdXBtb2RhbC1sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLFNBQVM7QUFDYjs7QUFDQTtJQUNJLFNBQVM7QUFDYjs7QUFHQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFJQTtJQUNJLFdBQVc7SUFDWCx5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBR0U7TUFDSSxXQUFXO0VBQ2Y7O0FBRUE7T0FDSyxlQUFlO01BQ2hCLGFBQWE7TUFDYixnQkFBZ0I7TUFDaEIscUJBQXFCO01BQ3JCLGdCQUFnQjtFQUNwQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsU0FBUztJQUNULGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFHQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaW5jL3BvcHVwbW9kYWwtbG9naW4vcG9wdXBtb2RhbC1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luQ3VzdG9tZU1vZGFsIC5tb2RhbC1jb250ZW50IHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5sb2dpbi1wYWdlLXNlYXJjaC1mb3JtIC5pbnB1dC1ncm91cCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBweCAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubG9naW5DdXN0b21lTW9kYWwgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuLmxvZ2luQ3VzdG9tZU1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC10aXRsZTpiZWZvcmUge1xyXG4gICAgYm90dG9tOiAtOHB4O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuXHJcbi5sb2dpbkN1c3RvbWVNb2RhbCAubW9kYWwtY29udGVudCAuY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjgxcHggLTEwNXB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcbi5sb2dpbkN1c3RvbWVNb2RhbCAubW9kYWwtY29udGVudCAubW9kYWwtaGVhZGVye1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG5cclxuLmxvZ2luQ3VzdG9tZU1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5e1xyXG4gICAgcGFkZGluZzogMHB4IDE2cHggMTZweCAxNnB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5sb2dpbi1wYWdlLXNlYXJjaC1mb3JtIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0taW5wdXRCb2Rlcik7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNThweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pbnB1dGZvbnRDb250cm9sKTsgXHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDIuMjVyZW0gKyAxMHB4KTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5cclxuICAubG9naW4tcGFnZS1zZWFyY2gtZm9ybSAuZm9ybS1jaGVja3tcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1wYWdlLXNlYXJjaC1mb3JtIC5mb3JtLWNoZWNrIHNwYW4ge1xyXG4gICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjojMTMyNTQ5O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgfVxyXG5cclxuICAucmVtZW1iZXJUZXh0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5mb3JnZXRwYXNzd29yZCBhIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiMxMzI1NDk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luOiAwcHggMTBweDtcclxufVxyXG5cclxuLmxvZ2luLXBhZ2Utc2VhcmNoLWZvcm0gLmxvZ2luQnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNreWJsdWUpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgNjAwbXMgZWFzZTtcclxufVxyXG4ubG9naW4tcGFnZS1zZWFyY2gtZm9ybSAubG9naW5CdXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1CbHVlKTtcclxufVxyXG5cclxuXHJcbi5zaWduVGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuLnNpZ25UZXh0IGF7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHZhcigtLUJsdWUpO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/inc/popupmodal-login/popupmodal-login.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/inc/popupmodal-login/popupmodal-login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- The Modal -->\r\n<div class=\"modal loginCustomeModal\" id=\"loginModal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <button type=\"button\" class=\"close sprites\" data-dismiss=\"modal\"></button>\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Professional Login</h4>\r\n\r\n      </div>\r\n\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body\">\r\n\r\n        <form class=\"form-inline login-page-search-form\" action=\"page.php\" method=\"POST\" enctype=\"multipart/form-data\" role=\"form\">\r\n   \r\n            <div class=\"input-group\">\r\n              <input type=\"text\" value=\"\" placeholder=\"Email Address\" id=\"data-name\" class=\"effect-1 form-control\"> \r\n              <span class=\"focus-border\"></span>\r\n            </div>\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" value=\"\" placeholder=\"Password\" id=\"data-name\" class=\"effect-1 form-control\"> \r\n                <span class=\"focus-border\"></span>\r\n              </div>\r\n              <div class=\"input-group\">\r\n              <div class=\"rememberText\"> \r\n                  <div class=\"form-check\">\r\n                      <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\r\n                      <label class=\"form-check-label check-box\" for=\"exampleCheck1\"></label>\r\n                      <span>Remember Me</span>\r\n                    </div> \r\n                    <div class=\"forgetpassword\"> <a href=\"#\">Forget Password?</a> </div> \r\n              </div>\r\n             \r\n                </div>\r\n              <button type=\"Login\" class=\"btn loginButton\"> Login</button>\r\n          </form>\r\n          <div class=\"fxpge1-1 cYmrIn\">\r\n            <div class=\"fxpge1\"></div>\r\n            <div class=\"fxpge1-2 cJwISY\"><span>or</span></div>\r\n            <div class=\"fxpge1\"></div>\r\n          </div>\r\n          <div class=\"login-facebook\"> <a href=\"#\" > <span > <i class=\"sprites facebook-Icon\"></i>  Login with Facebook</span> </a></div>\r\n          <div class=\"login-googlePlus\"> <a href=\"#\" > <span > <i class=\"sprites googlePlus-Icon\"></i> Login with Google </span> </a></div>\r\n          <div class=\"signText\"> Don't have an account? <a href=\"javascript:void(0);\" routerLink=\"/signup\" data-dismiss=\"modal\">  Sign up</a> </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/inc/popupmodal-login/popupmodal-login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/inc/popupmodal-login/popupmodal-login.component.ts ***!
  \********************************************************************/
/*! exports provided: PopupmodalLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupmodalLoginComponent", function() { return PopupmodalLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PopupmodalLoginComponent = /** @class */ (function () {
    function PopupmodalLoginComponent() {
    }
    PopupmodalLoginComponent.prototype.ngOnInit = function () {
    };
    PopupmodalLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popupmodal-login',
            template: __webpack_require__(/*! ./popupmodal-login.component.html */ "./src/app/inc/popupmodal-login/popupmodal-login.component.html"),
            styles: [__webpack_require__(/*! ./popupmodal-login.component.css */ "./src/app/inc/popupmodal-login/popupmodal-login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PopupmodalLoginComponent);
    return PopupmodalLoginComponent;
}());



/***/ }),

/***/ "./src/app/inc/professionalformsection/professionalformsection.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/inc/professionalformsection/professionalformsection.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".galleryContainer {\r\n    margin: 0px auto;\r\n    display: table;\r\n    text-align: center;\r\n}\r\n\r\n.galleryContainer .image img {\r\n    border-radius: 50%;\r\n}\r\n\r\n.galleryContainer .doctorName {\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    color: var(--dark-blue);\r\n    margin: 5px 0px;\r\n}\r\n\r\n.galleryContainer .doctorRunning {\r\n    font-size: 14px;\r\n    color: var(--dark-blue);\r\n    font-weight: 400;\r\n    margin: 0px 0px;\r\n}\r\n\r\n.galleryContainer .doctorAdd {\r\n    font-size: 13px;\r\n    color: var(--bright-grey);\r\n    font-weight: 300;\r\n}\r\n\r\n.galleryContainer .DoctorRating i {\r\n    font-size: 23px;\r\n    margin: 0px 6px;\r\n    color: #e1e1e4;\r\n}\r\n\r\n.galleryContainer .DoctorRating i.active{\r\n    color: var(--orange);\r\n}\r\n\r\n.Pro-custom-Tabs {\r\n    width: 100%;\r\n}\r\n\r\n.Pro-custom-Tabs .nav-tabs {\r\n    background:var(--dark-blue);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jL3Byb2Zlc3Npb25hbGZvcm1zZWN0aW9uL3Byb2Zlc3Npb25hbGZvcm1zZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9pbmMvcHJvZmVzc2lvbmFsZm9ybXNlY3Rpb24vcHJvZmVzc2lvbmFsZm9ybXNlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYWxsZXJ5Q29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdhbGxlcnlDb250YWluZXIgLmltYWdlIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5nYWxsZXJ5Q29udGFpbmVyIC5kb2N0b3JOYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG5cclxuLmdhbGxlcnlDb250YWluZXIgLmRvY3RvclJ1bm5pbmcge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4O1xyXG59XHJcblxyXG4uZ2FsbGVyeUNvbnRhaW5lciAuZG9jdG9yQWRkIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiB2YXIoLS1icmlnaHQtZ3JleSk7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uZ2FsbGVyeUNvbnRhaW5lciAuRG9jdG9yUmF0aW5nIGkge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgbWFyZ2luOiAwcHggNnB4O1xyXG4gICAgY29sb3I6ICNlMWUxZTQ7XHJcbn1cclxuXHJcbi5nYWxsZXJ5Q29udGFpbmVyIC5Eb2N0b3JSYXRpbmcgaS5hY3RpdmV7XHJcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcclxufSBcclxuXHJcbi5Qcm8tY3VzdG9tLVRhYnMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5Qcm8tY3VzdG9tLVRhYnMgLm5hdi10YWJzIHtcclxuICAgIGJhY2tncm91bmQ6dmFyKC0tZGFyay1ibHVlKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/inc/professionalformsection/professionalformsection.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/inc/professionalformsection/professionalformsection.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n<div class=\"galleryContainer\">\r\n    <div class=\"image\"><img  alt=\"\" class=\"img-fluid\" src=\"assets/img-1.png\"></div>\r\n    <div class=\"doctorName\"> Dr. Hamilton, Alexander M.D</div>\r\n    <p class=\"doctorRunning\"> Obstetrics & Gynaecology</p>\r\n    <p class=\"doctorAdd\">   2 ProHEALTH Plaza, Suite 201, 2 Ohio Drive</p>\r\n    <div class=\"DoctorRating\">\r\n      <i class=\"fa fa-star active\"></i>\r\n      <i class=\"fa fa-star active\"></i>\r\n      <i class=\"fa fa-star active\"></i>\r\n      <i class=\"fa fa-star\"></i>\r\n      <i class=\"fa fa-star\"></i>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"Pro-custom-Tabs\">\r\n    <ul class=\"nav nav-tabs\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\">Appointment Booking</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu1\">Provider Overview</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu2\">Patient Reviews</a>\r\n        </li>\r\n      </ul>\r\n      <!-- Tab panes -->\r\n<div class=\"tab-content\">\r\n    <div class=\"tab-pane active container\" id=\"home\">1</div>\r\n    <div class=\"tab-pane container\" id=\"menu1\">2</div>\r\n    <div class=\"tab-pane container\" id=\"menu2\">3</div>\r\n  </div>\r\n\r\n\r\n</div>\r\n  </div>\r\n</div>\r\n\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/inc/professionalformsection/professionalformsection.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/inc/professionalformsection/professionalformsection.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProfessionalformsectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalformsectionComponent", function() { return ProfessionalformsectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfessionalformsectionComponent = /** @class */ (function () {
    function ProfessionalformsectionComponent() {
    }
    ProfessionalformsectionComponent.prototype.ngOnInit = function () {
    };
    ProfessionalformsectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-professionalformsection',
            template: __webpack_require__(/*! ./professionalformsection.component.html */ "./src/app/inc/professionalformsection/professionalformsection.component.html"),
            styles: [__webpack_require__(/*! ./professionalformsection.component.css */ "./src/app/inc/professionalformsection/professionalformsection.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfessionalformsectionComponent);
    return ProfessionalformsectionComponent;
}());



/***/ }),

/***/ "./src/app/inc/provides-section/provides-section.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/inc/provides-section/provides-section.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".owl-carousel.procedure .item img\r\n{    \r\n   display: block;\r\n    width: 80%;\r\n    margin-left: 10%;\r\n\r\n}\r\n\r\n.owl-carousel.procedure .item\r\n{\r\npadding: 20px 0;\r\n    \r\n}\r\n\r\n.owl-carousel.procedure {\r\n    \r\n    margin-bottom: 20px;\r\n    border-radius: 5px;\r\n      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.28);\r\n}\r\n\r\n.owl-carousel.procedure button i{\r\nfont-size: 24px;    \r\n}\r\n\r\n.owl-carousel.procedure [class*=owl-]:hover {\r\n    background-color: transparent !important;\r\n    color: #000 !important;\r\n    text-decoration: none;\r\n    \r\n}\r\n\r\n.owl-carousel.procedure .item-heading{\r\ntext-transform: capitalize;\r\n    color: #083c57;\r\n    \r\n    \r\n}\r\n\r\n.owl-carousel.procedure .info-border{\r\nborder-bottom: 1px solid rgba(0,0,0,0.5);\r\nwidth: 100%;    \r\n}\r\n\r\n.owl-carousel.procedure .procedure-info{\r\nfont-weight:500; \r\nmargin-bottom: 10px;\r\n    \r\n}\r\n\r\n.procedure-info-decription{\r\nfont-size: 15px;    \r\n}\r\n\r\n.procedure-info-decription::first-letter{\r\nfont-size: 24px;\r\ncolor: #000;\r\n    \r\n}\r\n\r\n.procedure-list{\r\nmargin-top: 10px;\r\npadding-left: 0;    \r\n\r\n}\r\n\r\n.procedure-list li{\r\nlist-style-type: none;\r\nfont-weight: 500;\r\nmargin-top: 10px;\r\nfont-size: 14px;    \r\n}\r\n\r\n.owl-carousel.procedure .read-more{\r\n    float: right;\r\n    margin-right: 15px;\r\n    background-color: #1c8ac1;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    border: 0;\r\n    padding: 10px 22px;\r\n    border-radius: 2px;\r\n    font-size: 12px;\r\n}\r\n\r\n.owl-carousel.procedure  .owl-nav\r\n{\r\n margin-top: -10px !important;  \r\nmargin-bottom: -30px;    \r\n}\r\n\r\n.owl-carousel.procedure  .owl-nav .owl-next i\r\n{\r\nmargin-left: 100px;\r\n}\r\n\r\n/*\r\n.owl-carousel.procedure  .owl-nav .owl-prev i{\r\nmargin-right: 70px;\r\n    \r\n}*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jL3Byb3ZpZGVzLXNlY3Rpb24vcHJvdmlkZXMtc2VjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHLGNBQWM7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCOztBQUVwQjs7QUFFQTs7QUFFQSxlQUFlOztBQUVmOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixrQkFBa0I7TUFDaEIsK0NBQStDO0FBQ3JEOztBQUlBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLHNCQUFzQjtJQUN0QixxQkFBcUI7O0FBRXpCOztBQUVBO0FBQ0EsMEJBQTBCO0lBQ3RCLGNBQWM7OztBQUdsQjs7QUFHQTtBQUNBLHdDQUF3QztBQUN4QyxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxlQUFlO0FBQ2YsbUJBQW1COztBQUVuQjs7QUFFQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBLGVBQWU7QUFDZixXQUFXOztBQUVYOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGVBQWU7O0FBRWY7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7O0NBRUMsNEJBQTRCO0FBQzdCLG9CQUFvQjtBQUNwQjs7QUFFQTs7QUFFQSxrQkFBa0I7QUFDbEI7O0FBRUE7Ozs7RUFJRSIsImZpbGUiOiJzcmMvYXBwL2luYy9wcm92aWRlcy1zZWN0aW9uL3Byb3ZpZGVzLXNlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vd2wtY2Fyb3VzZWwucHJvY2VkdXJlIC5pdGVtIGltZ1xyXG57ICAgIFxyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG5cclxufVxyXG5cclxuLm93bC1jYXJvdXNlbC5wcm9jZWR1cmUgLml0ZW1cclxue1xyXG5wYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBcclxufVxyXG5cclxuLm93bC1jYXJvdXNlbC5wcm9jZWR1cmUge1xyXG4gICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcclxufVxyXG5cclxuXHJcblxyXG4ub3dsLWNhcm91c2VsLnByb2NlZHVyZSBidXR0b24gaXtcclxuZm9udC1zaXplOiAyNHB4OyAgICBcclxufVxyXG5cclxuLm93bC1jYXJvdXNlbC5wcm9jZWR1cmUgW2NsYXNzKj1vd2wtXTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIFxyXG59XHJcblxyXG4ub3dsLWNhcm91c2VsLnByb2NlZHVyZSAuaXRlbS1oZWFkaW5ne1xyXG50ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiAjMDgzYzU3O1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5vd2wtY2Fyb3VzZWwucHJvY2VkdXJlIC5pbmZvLWJvcmRlcntcclxuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC41KTtcclxud2lkdGg6IDEwMCU7ICAgIFxyXG59XHJcblxyXG4ub3dsLWNhcm91c2VsLnByb2NlZHVyZSAucHJvY2VkdXJlLWluZm97XHJcbmZvbnQtd2VpZ2h0OjUwMDsgXHJcbm1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLnByb2NlZHVyZS1pbmZvLWRlY3JpcHRpb257XHJcbmZvbnQtc2l6ZTogMTVweDsgICAgXHJcbn1cclxuXHJcbi5wcm9jZWR1cmUtaW5mby1kZWNyaXB0aW9uOjpmaXJzdC1sZXR0ZXJ7XHJcbmZvbnQtc2l6ZTogMjRweDtcclxuY29sb3I6ICMwMDA7XHJcbiAgICBcclxufVxyXG5cclxuLnByb2NlZHVyZS1saXN0e1xyXG5tYXJnaW4tdG9wOiAxMHB4O1xyXG5wYWRkaW5nLWxlZnQ6IDA7ICAgIFxyXG5cclxufVxyXG5cclxuLnByb2NlZHVyZS1saXN0IGxpe1xyXG5saXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbmZvbnQtd2VpZ2h0OiA1MDA7XHJcbm1hcmdpbi10b3A6IDEwcHg7XHJcbmZvbnQtc2l6ZTogMTRweDsgICAgXHJcbn1cclxuXHJcbi5vd2wtY2Fyb3VzZWwucHJvY2VkdXJlIC5yZWFkLW1vcmV7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM4YWMxO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAyMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ub3dsLWNhcm91c2VsLnByb2NlZHVyZSAgLm93bC1uYXZcclxue1xyXG4gbWFyZ2luLXRvcDogLTEwcHggIWltcG9ydGFudDsgIFxyXG5tYXJnaW4tYm90dG9tOiAtMzBweDsgICAgXHJcbn1cclxuXHJcbi5vd2wtY2Fyb3VzZWwucHJvY2VkdXJlICAub3dsLW5hdiAub3dsLW5leHQgaVxyXG57XHJcbm1hcmdpbi1sZWZ0OiAxMDBweDtcclxufVxyXG5cclxuLypcclxuLm93bC1jYXJvdXNlbC5wcm9jZWR1cmUgIC5vd2wtbmF2IC5vd2wtcHJldiBpe1xyXG5tYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgICBcclxufSovIl19 */"

/***/ }),

/***/ "./src/app/inc/provides-section/provides-section.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/inc/provides-section/provides-section.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inc/provides-section/provides-section.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/inc/provides-section/provides-section.component.ts ***!
  \********************************************************************/
/*! exports provided: ProvidesSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidesSectionComponent", function() { return ProvidesSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProvidesSectionComponent = /** @class */ (function () {
    function ProvidesSectionComponent() {
    }
    ProvidesSectionComponent.prototype.ngOnInit = function () {
        owlinit();
    };
    ProvidesSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-provides-section',
            template: __webpack_require__(/*! ./provides-section.component.html */ "./src/app/inc/provides-section/provides-section.component.html"),
            styles: [__webpack_require__(/*! ./provides-section.component.css */ "./src/app/inc/provides-section/provides-section.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProvidesSectionComponent);
    return ProvidesSectionComponent;
}());



/***/ }),

/***/ "./src/app/inc/search-result-item/search-result-item.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/inc/search-result-item/search-result-item.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custome-container-fluid {\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\n\r\n.working-days{\r\n    position: relative;\r\n    float: left;\r\n    /* padding: 20px 0px 10px 0px; */\r\n    }\r\n\r\n\r\n.working-days .box .item {\r\n        float: left;\r\n        margin: 0px 20px;\r\n    }\r\n\r\n\r\n.working-days .nav-left,.working-days .nav-right{\r\n        width: 30px;\r\n        height: 30px;\r\n        line-height: 30px;\r\n        font-size: 25px;\r\n        text-align: center;\r\n        border-radius: 25px;\r\n        position: absolute;\r\n        top: 50%;\r\n        -webkit-transform: translate(-50%,-50%);\r\n        transform: translate(-50%,-50%);\r\n    }\r\n\r\n\r\n.working-days .nav-left{\r\n    background-color: #f2f2f2; \r\n    color: #000;\r\n    left: -4%;\r\n        \r\n    }\r\n\r\n\r\n.working-days .nav-right{\r\n    background-color: var(--dark-blue); \r\n    color: #fff;\r\n    right: -10%;\r\n         \r\n    }\r\n\r\n\r\n.working-days .item span:first-child{\r\n    font-weight: 600;\r\n    color: #224063;\r\n    text-transform: capitalize;\r\n    font-size: 14px; \r\n    margin-bottom: 0;    \r\n    }\r\n\r\n\r\n.working-days .item span:last-child{\r\n    display: block;    \r\n     font-weight: 600;\r\n    color: #00234b;\r\n    text-transform: capitalize;\r\n    font-size: 14px;\r\n    margin-top: 0;    \r\n    }\r\n\r\n\r\n.doctors-container{padding-left: 11px;}\r\n\r\n\r\n.doctors{\r\nbox-shadow: -4px 3px 13px 0px rgba(0,0,0,0.2);\r\nwidth: 100%; \r\npadding: 25px 30px;\r\nmargin-bottom: 25px;    \r\n}\r\n\r\n\r\n.doctors:last-child{\r\n    margin-bottom: 0px;  \r\n}\r\n\r\n\r\n.doctor-card .box-left {\r\n\twidth: 25%;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.doctor-card .box-right\r\n{\r\n       padding-left: 25px;\r\n    width: 75%;  \r\n}\r\n\r\n\r\n.doctor-card .box-left img{\r\nborder-radius: 50%;\r\n text-align: center;   \r\n}\r\n\r\n\r\n.doctor-card .box-left .rating{\r\nmargin-top: 20px;    \r\n  \r\n}\r\n\r\n\r\n.doctor-card .box-left i{\r\n    color: #e1e1e4;\r\n    font-size: 16px;\r\n    margin: 0px 3px;\r\n}\r\n\r\n\r\n.doctor-card .box-left i.active {\r\ncolor: orange    \r\n}\r\n\r\n\r\n.doctor-card .box-left,.doctor-card .box-right{\r\n    float: left;\r\n}\r\n\r\n\r\n.doctor-card .box-left, .doctor-card .box-right::after {\r\n    display: table;\r\n    clear: both;\r\n    content: '';\r\n    float: left;\r\n    \r\n}\r\n\r\n\r\n.doctor-card .doctor-heading{\r\nfont-size: 18px;\r\ncolor: var(--dark-blue);\r\nfont-weight: 600;\r\n}\r\n\r\n\r\n.doctor-card .doctor-heading span{\r\nfont-weight: 400;\r\nfont-size: 14px;    \r\n}\r\n\r\n\r\n.doctor-card .location{\r\n    font-weight: 400;\r\n    font-size: 12px;    \r\n}\r\n\r\n\r\n.doctors .timing{\r\n    width: 100%;\r\n}\r\n\r\n\r\n.doctors .timing-box .timeBut{\r\n    max-width: 79px;\r\n    width: 100%;\r\n    margin: 5px 8px;\r\n}\r\n\r\n\r\n.doctors .timing-box .showtime{\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    color: var(--black);\r\n    border: 1px solid var(--inputBoder);\r\n    padding: 5px;\r\n    transition: all 600ms ease;\r\n}\r\n\r\n\r\n.doctors .timing-box .showtime:hover{\r\n    background-color: var(--skyblue);\r\n    color: var(--white);\r\n    border: 1px solid var(--skyblue);\r\n}\r\n\r\n\r\n.doctor-card .location i {\r\n    font-size: 24px;\r\n    color: var(--dark-blue);\r\n}\r\n\r\n\r\n.SelectDay {\r\n    margin: 20px;\r\n}\r\n\r\n\r\n.SelectDay .form-check span {\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    color: var(--inputfontControl);\r\n}\r\n\r\n\r\n.SelectDay .form-check .check-box {\r\n    height: 15px;\r\n    width: 15px;\r\n    margin-top: 6px;\r\n    margin-right: 7px;\r\n}\r\n\r\n\r\n.SelectDay .form-check .check-box::after {\r\n    top: 3.25px;\r\n    left: 0.25px;\r\n    width: 1.5px;\r\n}\r\n\r\n\r\n.SelectDay .form-check .check-box::before {\r\n    top: 10px;\r\n    left: 7.25px;\r\n    width: 1.5px;\r\n}\r\n\r\n\r\n.timeMain {\r\n    border-bottom: 1px solid var(--inputBoder);\r\n    margin-top: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\n.EarliestButton a {\r\n    background: var(--skyblue);\r\n    margin: 0px auto;\r\n    color: var(--white);\r\n    text-decoration: none;\r\n    display: table;\r\n    padding: 10px 20px;\r\n}\r\n\r\n\r\n/* pagination */\r\n\r\n\r\n.page-pagination {\r\n    margin: 14px;\r\n}\r\n\r\n\r\n.page-pagination .pagination{\r\n    justify-content: center;    \r\n}\r\n\r\n\r\n.page-pagination .pagination li{\r\n    border-radius: 50%;\r\n    margin-left: 10px;    \r\n}\r\n\r\n\r\n.page-pagination .pagination li a{\r\n    border-radius: 50%;\r\n    width: 30px;\r\n    height: 30px;\r\n    line-height: 15px;\r\n    color: var(--black);\r\n    border: 0;    \r\n    padding-left: 10.5px;    \r\n }\r\n\r\n\r\n.page-pagination .pagination li a.active{\r\n    background-color: var(--dark-blue);\r\n    color: var(--white);\r\n }\r\n\r\n\r\n.page-pagination .pagination .page-link:hover {\r\n    background-color: var(--dark-blue);\r\n    color: var(--white);\r\n }\r\n\r\n\r\n.page-pagination .pagination .page-link.previous,\r\n    .page-pagination .pagination .page-link.next\r\n    {\r\n    border-radius: 50%;\r\n    }\r\n\r\n\r\n.sticky .fixed {\r\n\r\n    }\r\n\r\n\r\n.sticky.fixed {\r\n    position: fixed;\r\n    top: 0;\r\n    background: #fff;\r\n    width: 65%;\r\n    z-index: 100;\r\n    margin-top: 0;\r\n    }\r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jL3NlYXJjaC1yZXN1bHQtaXRlbS9zZWFyY2gtcmVzdWx0LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEM7OztBQUVBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtJQUNwQjs7O0FBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLHVDQUF1QztRQUN2QywrQkFBK0I7SUFDbkM7OztBQUVBO0lBQ0EseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxTQUFTOztJQUVUOzs7QUFHQTtJQUNBLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsV0FBVzs7SUFFWDs7O0FBRUE7SUFDQSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCOzs7QUFFQTtJQUNBLGNBQWM7S0FDYixnQkFBZ0I7SUFDakIsY0FBYztJQUNkLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsYUFBYTtJQUNiOzs7QUFHSixtQkFBbUIsa0JBQWtCLENBQUM7OztBQUV0QztBQUNBLDZDQUE2QztBQUM3QyxXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0NBQ0MsVUFBVTtJQUNQLGtCQUFrQjtBQUN0Qjs7O0FBRUE7O09BRU8sa0JBQWtCO0lBQ3JCLFVBQVU7QUFDZDs7O0FBRUE7QUFDQSxrQkFBa0I7Q0FDakIsa0JBQWtCO0FBQ25COzs7QUFFQTtBQUNBLGdCQUFnQjs7QUFFaEI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0FBQ25COzs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0lBQ0ksV0FBVztBQUNmOzs7QUFHQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7O0FBRWY7OztBQUVBO0FBQ0EsZUFBZTtBQUNmLHVCQUF1QjtBQUN2QixnQkFBZ0I7QUFDaEI7OztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZjs7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxZQUFZO0lBSVosMEJBQTBCO0FBQzlCOzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDOzs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCOzs7QUFDQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7O0FBR0EsZUFBZTs7O0FBQ2Y7SUFDSSxZQUFZO0FBQ2hCOzs7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOzs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULG9CQUFvQjtDQUN2Qjs7O0FBRUQ7SUFDSSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0NBQ3RCOzs7QUFFRDtJQUNJLGtDQUFrQztJQUNsQyxtQkFBbUI7Q0FDdEI7OztBQUNEOzs7SUFHSSxrQkFBa0I7SUFDbEI7OztBQUVBOztJQUVBOzs7QUFFSjtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiIiwiZmlsZSI6InNyYy9hcHAvaW5jL3NlYXJjaC1yZXN1bHQtaXRlbS9zZWFyY2gtcmVzdWx0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21lLWNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuXHJcbi53b3JraW5nLWRheXN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIC8qIHBhZGRpbmc6IDIwcHggMHB4IDEwcHggMHB4OyAqL1xyXG4gICAgfVxyXG5cclxuICAgIC53b3JraW5nLWRheXMgLmJveCAuaXRlbSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLndvcmtpbmctZGF5cyAubmF2LWxlZnQsLndvcmtpbmctZGF5cyAubmF2LXJpZ2h0e1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAud29ya2luZy1kYXlzIC5uYXYtbGVmdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7IFxyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBsZWZ0OiAtNCU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLndvcmtpbmctZGF5cyAubmF2LXJpZ2h0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTsgXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHJpZ2h0OiAtMTAlO1xyXG4gICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLndvcmtpbmctZGF5cyAuaXRlbSBzcGFuOmZpcnN0LWNoaWxke1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMjI0MDYzO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMDsgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC53b3JraW5nLWRheXMgLml0ZW0gc3BhbjpsYXN0LWNoaWxke1xyXG4gICAgZGlzcGxheTogYmxvY2s7ICAgIFxyXG4gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzAwMjM0YjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbi5kb2N0b3JzLWNvbnRhaW5lcntwYWRkaW5nLWxlZnQ6IDExcHg7fVxyXG5cclxuLmRvY3RvcnN7XHJcbmJveC1zaGFkb3c6IC00cHggM3B4IDEzcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxud2lkdGg6IDEwMCU7IFxyXG5wYWRkaW5nOiAyNXB4IDMwcHg7XHJcbm1hcmdpbi1ib3R0b206IDI1cHg7ICAgIFxyXG59XHJcblxyXG4uZG9jdG9yczpsYXN0LWNoaWxke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4OyAgXHJcbn1cclxuXHJcbi5kb2N0b3ItY2FyZCAuYm94LWxlZnQge1xyXG5cdHdpZHRoOiAyNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kb2N0b3ItY2FyZCAuYm94LXJpZ2h0XHJcbntcclxuICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIHdpZHRoOiA3NSU7ICBcclxufVxyXG5cclxuLmRvY3Rvci1jYXJkIC5ib3gtbGVmdCBpbWd7XHJcbmJvcmRlci1yYWRpdXM6IDUwJTtcclxuIHRleHQtYWxpZ246IGNlbnRlcjsgICBcclxufVxyXG5cclxuLmRvY3Rvci1jYXJkIC5ib3gtbGVmdCAucmF0aW5ne1xyXG5tYXJnaW4tdG9wOiAyMHB4OyAgICBcclxuICBcclxufVxyXG5cclxuLmRvY3Rvci1jYXJkIC5ib3gtbGVmdCBpe1xyXG4gICAgY29sb3I6ICNlMWUxZTQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDBweCAzcHg7XHJcbn1cclxuXHJcbi5kb2N0b3ItY2FyZCAuYm94LWxlZnQgaS5hY3RpdmUge1xyXG5jb2xvcjogb3JhbmdlICAgIFxyXG59XHJcblxyXG5cclxuLmRvY3Rvci1jYXJkIC5ib3gtbGVmdCwuZG9jdG9yLWNhcmQgLmJveC1yaWdodHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5cclxuLmRvY3Rvci1jYXJkIC5ib3gtbGVmdCwgLmRvY3Rvci1jYXJkIC5ib3gtcmlnaHQ6OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgXHJcbn1cclxuXHJcbi5kb2N0b3ItY2FyZCAuZG9jdG9yLWhlYWRpbmd7XHJcbmZvbnQtc2l6ZTogMThweDtcclxuY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XHJcbmZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5kb2N0b3ItY2FyZCAuZG9jdG9yLWhlYWRpbmcgc3BhbntcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxuZm9udC1zaXplOiAxNHB4OyAgICBcclxufVxyXG4uZG9jdG9yLWNhcmQgLmxvY2F0aW9ue1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDsgICAgXHJcbn1cclxuXHJcbi5kb2N0b3JzIC50aW1pbmd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRvY3RvcnMgLnRpbWluZy1ib3ggLnRpbWVCdXR7XHJcbiAgICBtYXgtd2lkdGg6IDc5cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogNXB4IDhweDtcclxufVxyXG5cclxuLmRvY3RvcnMgLnRpbWluZy1ib3ggLnNob3d0aW1le1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnB1dEJvZGVyKTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDYwMG1zIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCA2MDBtcyBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDYwMG1zIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgNjAwbXMgZWFzZTtcclxufVxyXG5cclxuLmRvY3RvcnMgLnRpbWluZy1ib3ggLnNob3d0aW1lOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5Ymx1ZSk7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2t5Ymx1ZSk7XHJcbn1cclxuXHJcbi5kb2N0b3ItY2FyZCAubG9jYXRpb24gaSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcclxufVxyXG5cclxuLlNlbGVjdERheSB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5TZWxlY3REYXkgLmZvcm0tY2hlY2sgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHZhcigtLWlucHV0Zm9udENvbnRyb2wpO1xyXG59XHJcblxyXG4uU2VsZWN0RGF5IC5mb3JtLWNoZWNrIC5jaGVjay1ib3gge1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxufVxyXG5cclxuXHJcbi5TZWxlY3REYXkgLmZvcm0tY2hlY2sgLmNoZWNrLWJveDo6YWZ0ZXIge1xyXG4gICAgdG9wOiAzLjI1cHg7XHJcbiAgICBsZWZ0OiAwLjI1cHg7XHJcbiAgICB3aWR0aDogMS41cHg7XHJcbn1cclxuLlNlbGVjdERheSAuZm9ybS1jaGVjayAuY2hlY2stYm94OjpiZWZvcmUge1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogNy4yNXB4O1xyXG4gICAgd2lkdGg6IDEuNXB4O1xyXG59XHJcblxyXG4udGltZU1haW4ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlucHV0Qm9kZXIpO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5FYXJsaWVzdEJ1dHRvbiBhIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNreWJsdWUpO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG5cclxuXHJcbi8qIHBhZ2luYXRpb24gKi9cclxuLnBhZ2UtcGFnaW5hdGlvbiB7XHJcbiAgICBtYXJnaW46IDE0cHg7XHJcbn1cclxuLnBhZ2UtcGFnaW5hdGlvbiAucGFnaW5hdGlvbntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgICBcclxufVxyXG4ucGFnZS1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uIGxpe1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7ICAgIFxyXG59XHJcbi5wYWdlLXBhZ2luYXRpb24gLnBhZ2luYXRpb24gbGkgYXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgYm9yZGVyOiAwOyAgICBcclxuICAgIHBhZGRpbmctbGVmdDogMTAuNXB4OyAgICBcclxuIH1cclxuICAgIFxyXG4ucGFnZS1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uIGxpIGEuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiB9XHJcbiAgICBcclxuLnBhZ2UtcGFnaW5hdGlvbiAucGFnaW5hdGlvbiAucGFnZS1saW5rOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gfVxyXG4ucGFnZS1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uIC5wYWdlLWxpbmsucHJldmlvdXMsXHJcbiAgICAucGFnZS1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uIC5wYWdlLWxpbmsubmV4dFxyXG4gICAge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGlja3kgLmZpeGVkIHtcclxuXHJcbiAgICB9XHJcblxyXG4uc3RpY2t5LmZpeGVkIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/inc/search-result-item/search-result-item.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/inc/search-result-item/search-result-item.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"pt-0 pb-0\">\r\n    <div class=\"custome-container-fluid\">\r\n   <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n            <div class=\"timeMain sticky\">\r\n          <div class=\"row\">\r\n           \r\n              <div class=\"col-md-6\">\r\n                    <div class=\"SelectDay  d-flex flex-row-reverse\">\r\n                            <form class=\"selectDayForm\">\r\n                                  <div class=\"form-check\">\r\n                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck2\">\r\n                                        <label class=\"form-check-label check-box\" for=\"exampleCheck2\"></label>\r\n                                      <span>Select all days</span></div>\r\n                            </form>\r\n                        </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                  <div class=\"working-days\">\r\n                      <div class=\"box\">\r\n                          <div class=\"item\">\r\n                              <p class=\"text-center\">\r\n                                  <span> monday</span>\r\n                                  <span>  May 27 </span>\r\n                              </p>\r\n                          </div>\r\n                          <div class=\"item\">\r\n                              <p class=\"text-center\">\r\n                                  <span>monday</span>\r\n                                  <span>May 27</span>\r\n                              </p>\r\n                          </div>\r\n                          <div class=\"item\">\r\n                              <p class=\"text-center\">\r\n                                  <span> monday</span>\r\n                                  <span> May 27</span>\r\n                              </p>\r\n                          </div>\r\n                          <div class=\"item\">\r\n                              <p class=\"text-center\">\r\n                                  <span> monday</span>\r\n                                  <span> May 27</span>\r\n                              </p>\r\n                          </div>\r\n                          <div class=\"item\">\r\n                              <p class=\"text-center\">\r\n                                  <span> monday</span>\r\n                                  <span>May 27</span>\r\n                              </p>\r\n                          </div>\r\n              \r\n                      </div>\r\n              \r\n                      <div class=\"nav-indicators\">\r\n                          <div class=\"nav-left\">\r\n                              <i class=\"fa fa-angle-left\"> </i>\r\n                          </div>\r\n              \r\n                          <div class=\"nav-right\">\r\n                              <i class=\"fa fa-angle-right\"> </i>\r\n                          </div>\r\n              \r\n                      </div>\r\n              \r\n                  </div>\r\n              </div>\r\n            </div>\r\n              \r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                        <div class=\"doctors\">\r\n                                <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                <div class=\"doctor-card d-flex align-items-center\">\r\n                                <div class=\"box-left\">\r\n                                <div class=\"image\"> <img src=\"assets/img-1.png\" class=\"img-fluid\" alt=\"\"></div>\r\n                                <div class=\"rating\">\r\n                                <i class=\"fa fa-star active\"></i>\r\n                                 <i class=\"fa fa-star active\"></i>\r\n                                 <i class=\"fa fa-star active\"></i>  \r\n                                <i class=\"fa fa-star\"></i>\r\n                                <i class=\"fa fa-star\"></i>\r\n                                 </div>\r\n                                </div>\r\n                                <div class=\"box-right\">\r\n                                <p class=\"doctor-heading\"> Doctor Hemilton, Alexander M.D.\r\n                                <span class=\"word-break\"> Obstetrics & Gynaecology   </span>  \r\n                                </p> \r\n                                <p class=\"location\">\r\n                                <i class=\"fa fa-map-marker location-marker\">  </i>  2 ProHEALTH Plaza, Suite 201, 2 Ohio Drive   \r\n                                </p>        \r\n                                </div>    \r\n                                </div>\r\n                                </div>\r\n                                <div class=\"col-md-6 pr-0 d-flex align-items-center justify-content-center\">\r\n                                <div class=\"timing\">\r\n                                <div class=\"timing-box\">\r\n                                <div class=\"btn-col\">\r\n                                 <button class=\"btn timeBut showtime\">1:00 PM </button>  \r\n                                 <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                               </div>\r\n                                <div class=\"btn-col\">\r\n                                    <button class=\"btn timeBut showtime\">1:00 PM </button>  \r\n                                    <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                   <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                   <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                   <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                </div>\r\n                                <div class=\"btn-col\">\r\n                                    <button class=\"btn timeBut showtime\">1:00 PM </button>  \r\n                                    <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                   <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                   <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                   <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                </div>\r\n                                <div class=\"btn-col\">\r\n                                    <button class=\"btn timeBut showtime\">1:00 PM </button>  \r\n                                    <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                   <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                   <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                   <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                </div>\r\n              \r\n                                </div>    \r\n                                </div>    \r\n                                </div>                \r\n                                </div>    \r\n                                </div>\r\n\r\n\r\n\r\n                                <div class=\"doctors\">\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                        <div class=\"doctor-card d-flex align-items-center\">\r\n                                        <div class=\"box-left\">\r\n                                        <div class=\"image\"> <img src=\"assets/img-1.png\" class=\"img-fluid\" alt=\"\"></div>\r\n                                        <div class=\"rating\">\r\n                                        <i class=\"fa fa-star active\"></i>\r\n                                         <i class=\"fa fa-star active\"></i>\r\n                                         <i class=\"fa fa-star active\"></i>  \r\n                                        <i class=\"fa fa-star\"></i>\r\n                                        <i class=\"fa fa-star\"></i>\r\n                                         </div>\r\n                                        </div>\r\n                                        <div class=\"box-right\">\r\n                                        <p class=\"doctor-heading\"> Doctor Hemilton, Alexander M.D.\r\n                                        <span class=\"word-break\"> Obstetrics & Gynaecology   </span>  \r\n                                        </p> \r\n                                        <p class=\"location\">\r\n                                        <i class=\"fa fa-map-marker location-marker\">  </i>  2 ProHEALTH Plaza, Suite 201, 2 Ohio Drive   \r\n                                        </p>        \r\n                                        </div>    \r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 pr-0 d-flex align-items-center justify-content-center\">\r\n                                        <div class=\"timing\">\r\n                                        <div class=\"timing-box\">\r\n                                        <div class=\"btn-col\">\r\n                                         <button class=\"btn timeBut \">-</button>  \r\n                                         <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                        <button class=\"btn timeBut\">-</button>\r\n                                        <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                        <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                       </div>\r\n                                        <div class=\"btn-col\">\r\n                                            <button class=\"btn timeBut\">- </button>  \r\n                                            <button class=\"btn timeBut \">- </button>                    \r\n                                           <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                           <button class=\"btn timeBut \">-</button>\r\n                                           <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                        </div>\r\n                                        <div class=\"btn-col\">\r\n                                            <button class=\"btn timeBut \">-</button>  \r\n                                            <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                           <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                           <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                           <button class=\"btn timeBut \">-</button>\r\n                                        </div>\r\n                                        <div class=\"btn-col\">\r\n                                            <button class=\"btn timeBut\">- </button>  \r\n                                            <button class=\"btn timeBut \">- </button>                    \r\n                                           <button class=\"btn timeBut \">-</button>\r\n                                           <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                           <button class=\"btn timeBut \">-</button>\r\n                                        </div>\r\n                      \r\n                                        </div>    \r\n                                        </div>    \r\n                                        </div>                \r\n                                        </div>    \r\n                                        </div>\r\n\r\n\r\n                                        <div class=\"doctors\">\r\n                                                <div class=\"row\">\r\n                                                <div class=\"col-md-6\">\r\n                                                <div class=\"doctor-card d-flex align-items-center\">\r\n                                                <div class=\"box-left\">\r\n                                                <div class=\"image\"> <img src=\"assets/img-1.png\" class=\"img-fluid\" alt=\"\"></div>\r\n                                                <div class=\"rating\">\r\n                                                <i class=\"fa fa-star active\"></i>\r\n                                                 <i class=\"fa fa-star active\"></i>\r\n                                                 <i class=\"fa fa-star active\"></i>  \r\n                                                <i class=\"fa fa-star\"></i>\r\n                                                <i class=\"fa fa-star\"></i>\r\n                                                 </div>\r\n                                                </div>\r\n                                                <div class=\"box-right\">\r\n                                                <p class=\"doctor-heading\"> Doctor Hemilton, Alexander M.D.\r\n                                                <span class=\"word-break\"> Obstetrics & Gynaecology   </span>  \r\n                                                </p> \r\n                                                <p class=\"location\">\r\n                                                <i class=\"fa fa-map-marker location-marker\">  </i>  2 ProHEALTH Plaza, Suite 201, 2 Ohio Drive   \r\n                                                </p>        \r\n                                                </div>    \r\n                                                </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6 pr-0 d-flex align-items-center justify-content-center\">\r\n                                                <div class=\"timing\">\r\n                                                <div class=\"timing-box\">\r\n                                                <div class=\"btn-col\">\r\n                                                 <button class=\"btn timeBut \">-</button>  \r\n                                                 <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                                <button class=\"btn timeBut\">-</button>\r\n                                                <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                               </div>\r\n                                                <div class=\"btn-col\">\r\n                                                    <button class=\"btn timeBut\">- </button>  \r\n                                                    <button class=\"btn timeBut \">- </button>                    \r\n                                                   <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                                   <button class=\"btn timeBut \">-</button>\r\n                                                   <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                                </div>\r\n                                                <div class=\"btn-col\">\r\n                                                    <button class=\"btn timeBut \">-</button>  \r\n                                                    <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                                   <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                                   <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                   <button class=\"btn timeBut \">-</button>\r\n                                                </div>\r\n                                                <div class=\"btn-col\">\r\n                                                    <button class=\"btn timeBut\">- </button>  \r\n                                                    <button class=\"btn timeBut \">- </button>                    \r\n                                                   <button class=\"btn timeBut \">-</button>\r\n                                                   <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                   <button class=\"btn timeBut \">-</button>\r\n                                                </div>\r\n                              \r\n                                                </div>    \r\n                                                </div>    \r\n                                                </div>                \r\n                                                </div>    \r\n                                                </div>\r\n\r\n\r\n                                                <div class=\"doctors\">\r\n                                                        <div class=\"row\">\r\n                                                        <div class=\"col-md-6\">\r\n                                                        <div class=\"doctor-card d-flex align-items-center\">\r\n                                                        <div class=\"box-left\">\r\n                                                        <div class=\"image\"> <img src=\"assets/img-1.png\" class=\"img-fluid\" alt=\"\"></div>\r\n                                                        <div class=\"rating\">\r\n                                                        <i class=\"fa fa-star active\"></i>\r\n                                                         <i class=\"fa fa-star active\"></i>\r\n                                                         <i class=\"fa fa-star active\"></i>  \r\n                                                        <i class=\"fa fa-star\"></i>\r\n                                                        <i class=\"fa fa-star\"></i>\r\n                                                         </div>\r\n                                                        </div>\r\n                                                        <div class=\"box-right\">\r\n                                                        <p class=\"doctor-heading\"> Doctor Hemilton, Alexander M.D.\r\n                                                        <span class=\"word-break\"> Obstetrics & Gynaecology   </span>  \r\n                                                        </p> \r\n                                                        <p class=\"location\">\r\n                                                        <i class=\"fa fa-map-marker location-marker\">  </i>  2 ProHEALTH Plaza, Suite 201, 2 Ohio Drive   \r\n                                                        </p>        \r\n                                                        </div>    \r\n                                                        </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 pr-0 d-flex align-items-center justify-content-center\">\r\n                                                        <div class=\"timing\">\r\n                                                        <div class=\"timing-box\">\r\n                                                        <div class=\"btn-col\">\r\n                                                         <button class=\"btn timeBut \">-</button>  \r\n                                                         <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                                        <button class=\"btn timeBut\">-</button>\r\n                                                        <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                        <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                                       </div>\r\n                                                        <div class=\"btn-col\">\r\n                                                            <button class=\"btn timeBut\">- </button>  \r\n                                                            <button class=\"btn timeBut \">- </button>                    \r\n                                                           <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                                           <button class=\"btn timeBut \">-</button>\r\n                                                           <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                                        </div>\r\n                                                        <div class=\"btn-col\">\r\n                                                            <button class=\"btn timeBut \">-</button>  \r\n                                                            <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                                           <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                                           <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                           <button class=\"btn timeBut \">-</button>\r\n                                                        </div>\r\n                                                        <div class=\"btn-col\">\r\n                                                            <button class=\"btn timeBut\">- </button>  \r\n                                                            <button class=\"btn timeBut \">- </button>                    \r\n                                                           <button class=\"btn timeBut \">-</button>\r\n                                                           <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                           <button class=\"btn timeBut \">-</button>\r\n                                                        </div>\r\n                                      \r\n                                                        </div>    \r\n                                                        </div>    \r\n                                                        </div>                \r\n                                                        </div>    \r\n                                                        </div>\r\n\r\n\r\n                                                        <div class=\"doctors\">\r\n                                                                <div class=\"row\">\r\n                                                                <div class=\"col-md-6\">\r\n                                                                <div class=\"doctor-card d-flex align-items-center\">\r\n                                                                <div class=\"box-left\">\r\n                                                                <div class=\"image\"> <img src=\"assets/img-1.png\" class=\"img-fluid\" alt=\"\"></div>\r\n                                                                <div class=\"rating\">\r\n                                                                <i class=\"fa fa-star active\"></i>\r\n                                                                 <i class=\"fa fa-star active\"></i>\r\n                                                                 <i class=\"fa fa-star active\"></i>  \r\n                                                                <i class=\"fa fa-star\"></i>\r\n                                                                <i class=\"fa fa-star\"></i>\r\n                                                                 </div>\r\n                                                                </div>\r\n                                                                <div class=\"box-right\">\r\n                                                                <p class=\"doctor-heading\"> Doctor Hemilton, Alexander M.D.\r\n                                                                <span class=\"word-break\"> Obstetrics & Gynaecology   </span>  \r\n                                                                </p> \r\n                                                                <p class=\"location\">\r\n                                                                <i class=\"fa fa-map-marker location-marker\">  </i>  2 ProHEALTH Plaza, Suite 201, 2 Ohio Drive   \r\n                                                                </p>        \r\n                                                                </div>    \r\n                                                                </div>\r\n                                                                </div>\r\n                                                                <div class=\"col-md-6 pr-0 d-flex align-items-center justify-content-center\">\r\n                                                                <div class=\"timing\">\r\n                                                                <div class=\"timing-box\">\r\n                                                                <div class=\"btn-col\">\r\n                                                                 <button class=\"btn timeBut \">-</button>  \r\n                                                                 <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                                                <button class=\"btn timeBut\">-</button>\r\n                                                                <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                                <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                                               </div>\r\n                                                                <div class=\"btn-col\">\r\n                                                                    <button class=\"btn timeBut\">- </button>  \r\n                                                                    <button class=\"btn timeBut \">- </button>                    \r\n                                                                   <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                                                   <button class=\"btn timeBut \">-</button>\r\n                                                                   <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                                                </div>\r\n                                                                <div class=\"btn-col\">\r\n                                                                    <button class=\"btn timeBut \">-</button>  \r\n                                                                    <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                                                   <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                                                   <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                                   <button class=\"btn timeBut \">-</button>\r\n                                                                </div>\r\n                                                                <div class=\"btn-col\">\r\n                                                                    <button class=\"btn timeBut\">- </button>  \r\n                                                                    <button class=\"btn timeBut \">- </button>                    \r\n                                                                   <button class=\"btn timeBut \">-</button>\r\n                                                                   <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                                   <button class=\"btn timeBut \">-</button>\r\n                                                                </div>\r\n                                              \r\n                                                                </div>    \r\n                                                                </div>    \r\n                                                                </div>                \r\n                                                                </div>    \r\n                                                                </div>\r\n\r\n\r\n                                                                <div class=\"doctors\">\r\n                                                                        <div class=\"row\">\r\n                                                                        <div class=\"col-md-6\">\r\n                                                                        <div class=\"doctor-card d-flex align-items-center\">\r\n                                                                        <div class=\"box-left\">\r\n                                                                        <div class=\"image\"> <img src=\"assets/img-1.png\" class=\"img-fluid\" alt=\"\"></div>\r\n                                                                        <div class=\"rating\">\r\n                                                                        <i class=\"fa fa-star active\"></i>\r\n                                                                         <i class=\"fa fa-star active\"></i>\r\n                                                                         <i class=\"fa fa-star active\"></i>  \r\n                                                                        <i class=\"fa fa-star\"></i>\r\n                                                                        <i class=\"fa fa-star\"></i>\r\n                                                                         </div>\r\n                                                                        </div>\r\n                                                                        <div class=\"box-right\">\r\n                                                                        <p class=\"doctor-heading\"> Doctor Hemilton, Alexander M.D.\r\n                                                                        <span class=\"word-break\"> Obstetrics & Gynaecology   </span>  \r\n                                                                        </p> \r\n                                                                        <p class=\"location\">\r\n                                                                        <i class=\"fa fa-map-marker location-marker\">  </i>  2 ProHEALTH Plaza, Suite 201, 2 Ohio Drive   \r\n                                                                        </p>        \r\n                                                                        </div>    \r\n                                                                        </div>\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-6 pr-0 d-flex align-items-center justify-content-center\">\r\n                                                                        <div class=\"timing\">\r\n                                                                        <div class=\"timing-box\">\r\n                                                                        <div class=\"btn-col\">\r\n                                                                         <button class=\"btn timeBut \">-</button>  \r\n                                                                         <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                                                        <button class=\"btn timeBut\">-</button>\r\n                                                                        <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                                        <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                                                       </div>\r\n                                                                        <div class=\"btn-col\">\r\n                                                                            <button class=\"btn timeBut\">- </button>  \r\n                                                                            <button class=\"btn timeBut \">- </button>                    \r\n                                                                           <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                                                           <button class=\"btn timeBut \">-</button>\r\n                                                                           <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                                                        </div>\r\n                                                                        <div class=\"btn-col\">\r\n                                                                            <button class=\"btn timeBut \">-</button>  \r\n                                                                            <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                                                           <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                                                           <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                                           <button class=\"btn timeBut \">-</button>\r\n                                                                        </div>\r\n                                                                        <div class=\"btn-col\">\r\n                                                                            <button class=\"btn timeBut\">- </button>  \r\n                                                                            <button class=\"btn timeBut \">- </button>                    \r\n                                                                           <button class=\"btn timeBut \">-</button>\r\n                                                                           <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                                           <button class=\"btn timeBut \">-</button>\r\n                                                                        </div>\r\n                                                      \r\n                                                                        </div>    \r\n                                                                        </div>    \r\n                                                                        </div>                \r\n                                                                        </div>    \r\n                                                                        </div>\r\n\r\n\r\n                                                                        <div class=\"doctors\">\r\n                                                                                <div class=\"row\">\r\n                                                                                <div class=\"col-md-6\">\r\n                                                                                <div class=\"doctor-card d-flex align-items-center\">\r\n                                                                                <div class=\"box-left\">\r\n                                                                                <div class=\"image\"> <img src=\"assets/img-1.png\" class=\"img-fluid\" alt=\"\"></div>\r\n                                                                                <div class=\"rating\">\r\n                                                                                <i class=\"fa fa-star active\"></i>\r\n                                                                                 <i class=\"fa fa-star active\"></i>\r\n                                                                                 <i class=\"fa fa-star active\"></i>  \r\n                                                                                <i class=\"fa fa-star\"></i>\r\n                                                                                <i class=\"fa fa-star\"></i>\r\n                                                                                 </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"box-right\">\r\n                                                                                <p class=\"doctor-heading\"> Doctor Hemilton, Alexander M.D.\r\n                                                                                <span class=\"word-break\"> Obstetrics & Gynaecology   </span>  \r\n                                                                                </p> \r\n                                                                                <p class=\"location\">\r\n                                                                                <i class=\"fa fa-map-marker location-marker\">  </i>  2 ProHEALTH Plaza, Suite 201, 2 Ohio Drive   \r\n                                                                                </p>        \r\n                                                                                </div>    \r\n                                                                                </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-md-6 pr-0 d-flex align-items-center justify-content-center\">\r\n                                                                                <div class=\"timing\">\r\n                                                                                <div class=\"timing-box\">\r\n                                                                                <div class=\"btn-col\">\r\n                                                                                 <button class=\"btn timeBut \">-</button>  \r\n                                                                                 <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                                                                <button class=\"btn timeBut\">-</button>\r\n                                                                                <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                                                <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                                                               </div>\r\n                                                                                <div class=\"btn-col\">\r\n                                                                                    <button class=\"btn timeBut\">- </button>  \r\n                                                                                    <button class=\"btn timeBut \">- </button>                    \r\n                                                                                   <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                                                                   <button class=\"btn timeBut \">-</button>\r\n                                                                                   <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                                                                </div>\r\n                                                                                <div class=\"btn-col\">\r\n                                                                                    <button class=\"btn timeBut \">-</button>  \r\n                                                                                    <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                                                                   <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                                                                   <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                                                   <button class=\"btn timeBut \">-</button>\r\n                                                                                </div>\r\n                                                                                <div class=\"btn-col\">\r\n                                                                                    <button class=\"btn timeBut\">- </button>  \r\n                                                                                    <button class=\"btn timeBut \">- </button>                    \r\n                                                                                   <button class=\"btn timeBut \">-</button>\r\n                                                                                   <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                                                   <button class=\"btn timeBut \">-</button>\r\n                                                                                </div>\r\n                                                              \r\n                                                                                </div>    \r\n                                                                                </div>    \r\n                                                                                </div>                \r\n                                                                                </div>    \r\n                                                                                </div>\r\n\r\n\r\n                                                                                <div class=\"doctors\">\r\n                                                                                        <div class=\"row\">\r\n                                                                                        <div class=\"col-md-6\">\r\n                                                                                        <div class=\"doctor-card d-flex align-items-center\">\r\n                                                                                        <div class=\"box-left\">\r\n                                                                                        <div class=\"image\"> <img src=\"assets/img-1.png\" class=\"img-fluid\" alt=\"\"></div>\r\n                                                                                        <div class=\"rating\">\r\n                                                                                        <i class=\"fa fa-star active\"></i>\r\n                                                                                         <i class=\"fa fa-star active\"></i>\r\n                                                                                         <i class=\"fa fa-star active\"></i>  \r\n                                                                                        <i class=\"fa fa-star\"></i>\r\n                                                                                        <i class=\"fa fa-star\"></i>\r\n                                                                                         </div>\r\n                                                                                        </div>\r\n                                                                                        <div class=\"box-right\">\r\n                                                                                        <p class=\"doctor-heading\"> Doctor Hemilton, Alexander M.D.\r\n                                                                                        <span class=\"word-break\"> Obstetrics & Gynaecology   </span>  \r\n                                                                                        </p> \r\n                                                                                        <p class=\"location\">\r\n                                                                                        <i class=\"fa fa-map-marker location-marker\">  </i>  2 ProHEALTH Plaza, Suite 201, 2 Ohio Drive   \r\n                                                                                        </p>        \r\n                                                                                        </div>    \r\n                                                                                        </div>\r\n                                                                                        </div>\r\n                                                                                        <div class=\"col-md-6 pr-0 d-flex align-items-center justify-content-center\">\r\n                                                                                        <div class=\"timing\">\r\n                                                                                        <div class=\"timing-box\">\r\n                                                                                        <div class=\"btn-col\">\r\n                                                                                         <button class=\"btn timeBut \">-</button>  \r\n                                                                                         <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                                                                        <button class=\"btn timeBut\">-</button>\r\n                                                                                        <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                                                        <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                                                                       </div>\r\n                                                                                        <div class=\"btn-col\">\r\n                                                                                            <button class=\"btn timeBut\">- </button>  \r\n                                                                                            <button class=\"btn timeBut \">- </button>                    \r\n                                                                                           <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                                                                           <button class=\"btn timeBut \">-</button>\r\n                                                                                           <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                                                                        </div>\r\n                                                                                        <div class=\"btn-col\">\r\n                                                                                            <button class=\"btn timeBut \">-</button>  \r\n                                                                                            <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                                                                           <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                                                                           <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                                                           <button class=\"btn timeBut \">-</button>\r\n                                                                                        </div>\r\n                                                                                        <div class=\"btn-col\">\r\n                                                                                            <button class=\"btn timeBut\">- </button>  \r\n                                                                                            <button class=\"btn timeBut \">- </button>                    \r\n                                                                                           <button class=\"btn timeBut \">-</button>\r\n                                                                                           <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                                                           <button class=\"btn timeBut \">-</button>\r\n                                                                                        </div>\r\n                                                                      \r\n                                                                                        </div>    \r\n                                                                                        </div>    \r\n                                                                                        </div>                \r\n                                                                                        </div>    \r\n                                                                                        </div>\r\n\r\n\r\n                                                                                        <div class=\"doctors\">\r\n                                                                                                <div class=\"row\">\r\n                                                                                                <div class=\"col-md-6\">\r\n                                                                                                <div class=\"doctor-card d-flex align-items-center\">\r\n                                                                                                <div class=\"box-left\">\r\n                                                                                                <div class=\"image\"> <img src=\"assets/img-1.png\" class=\"img-fluid\" alt=\"\"></div>\r\n                                                                                                <div class=\"rating\">\r\n                                                                                                <i class=\"fa fa-star active\"></i>\r\n                                                                                                 <i class=\"fa fa-star active\"></i>\r\n                                                                                                 <i class=\"fa fa-star active\"></i>  \r\n                                                                                                <i class=\"fa fa-star\"></i>\r\n                                                                                                <i class=\"fa fa-star\"></i>\r\n                                                                                                 </div>\r\n                                                                                                </div>\r\n                                                                                                <div class=\"box-right\">\r\n                                                                                                <p class=\"doctor-heading\"> Doctor Hemilton, Alexander M.D.\r\n                                                                                                <span class=\"word-break\"> Obstetrics & Gynaecology   </span>  \r\n                                                                                                </p> \r\n                                                                                                <p class=\"location\">\r\n                                                                                                <i class=\"fa fa-map-marker location-marker\">  </i>  2 ProHEALTH Plaza, Suite 201, 2 Ohio Drive   \r\n                                                                                                </p>        \r\n                                                                                                </div>    \r\n                                                                                                </div>\r\n                                                                                                </div>\r\n                                                                                                <div class=\"col-md-6 pr-0 d-flex align-items-center justify-content-center\">\r\n                                                                                                <div class=\"timing\">\r\n                                                                                                <div class=\"timing-box\">\r\n                                                                                                <div class=\"btn-col\">\r\n                                                                                                 <button class=\"btn timeBut \">-</button>  \r\n                                                                                                 <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                                                                                <button class=\"btn timeBut\">-</button>\r\n                                                                                                <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                                                                <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                                                                               </div>\r\n                                                                                                <div class=\"btn-col\">\r\n                                                                                                    <button class=\"btn timeBut\">- </button>  \r\n                                                                                                    <button class=\"btn timeBut \">- </button>                    \r\n                                                                                                   <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                                                                                   <button class=\"btn timeBut \">-</button>\r\n                                                                                                   <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                                                                                </div>\r\n                                                                                                <div class=\"btn-col\">\r\n                                                                                                    <button class=\"btn timeBut \">-</button>  \r\n                                                                                                    <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                                                                                   <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                                                                                   <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                                                                   <button class=\"btn timeBut \">-</button>\r\n                                                                                                </div>\r\n                                                                                                <div class=\"btn-col\">\r\n                                                                                                    <button class=\"btn timeBut\">- </button>  \r\n                                                                                                    <button class=\"btn timeBut \">- </button>                    \r\n                                                                                                   <button class=\"btn timeBut \">-</button>\r\n                                                                                                   <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                                                                   <button class=\"btn timeBut \">-</button>\r\n                                                                                                </div>\r\n                                                                              \r\n                                                                                                </div>    \r\n                                                                                                </div>    \r\n                                                                                                </div>                \r\n                                                                                                </div>    \r\n                                                                                                </div>\r\n\r\n\r\n                                                                                                <div class=\"doctors\">\r\n                                                                                                        <div class=\"row\">\r\n                                                                                                        <div class=\"col-md-6\">\r\n                                                                                                        <div class=\"doctor-card d-flex align-items-center\">\r\n                                                                                                        <div class=\"box-left\">\r\n                                                                                                        <div class=\"image\"> <img src=\"assets/img-1.png\" class=\"img-fluid\" alt=\"\"></div>\r\n                                                                                                        <div class=\"rating\">\r\n                                                                                                        <i class=\"fa fa-star active\"></i>\r\n                                                                                                         <i class=\"fa fa-star active\"></i>\r\n                                                                                                         <i class=\"fa fa-star active\"></i>  \r\n                                                                                                        <i class=\"fa fa-star\"></i>\r\n                                                                                                        <i class=\"fa fa-star\"></i>\r\n                                                                                                         </div>\r\n                                                                                                        </div>\r\n                                                                                                        <div class=\"box-right\">\r\n                                                                                                        <p class=\"doctor-heading\"> Doctor Hemilton, Alexander M.D.\r\n                                                                                                        <span class=\"word-break\"> Obstetrics & Gynaecology   </span>  \r\n                                                                                                        </p> \r\n                                                                                                        <p class=\"location\">\r\n                                                                                                        <i class=\"fa fa-map-marker location-marker\">  </i>  2 ProHEALTH Plaza, Suite 201, 2 Ohio Drive   \r\n                                                                                                        </p>        \r\n                                                                                                        </div>    \r\n                                                                                                        </div>\r\n                                                                                                        </div>\r\n                                                                                                        <div class=\"col-md-6 pr-0 d-flex align-items-center justify-content-center\">\r\n                                                                                                        <div class=\"timing\">\r\n                                                                                                        <div class=\"timing-box\">\r\n                                                                                                        <div class=\"btn-col\">\r\n                                                                                                         <button class=\"btn timeBut \">-</button>  \r\n                                                                                                         <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                                                                                        <button class=\"btn timeBut\">-</button>\r\n                                                                                                        <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                                                                        <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                                                                                       </div>\r\n                                                                                                        <div class=\"btn-col\">\r\n                                                                                                            <button class=\"btn timeBut\">- </button>  \r\n                                                                                                            <button class=\"btn timeBut \">- </button>                    \r\n                                                                                                           <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                                                                                           <button class=\"btn timeBut \">-</button>\r\n                                                                                                           <button class=\"btn timeBut showtime\">8:00 PM</button>\r\n                                                                                                        </div>\r\n                                                                                                        <div class=\"btn-col\">\r\n                                                                                                            <button class=\"btn timeBut \">-</button>  \r\n                                                                                                            <button class=\"btn timeBut showtime\">3:00 PM </button>                    \r\n                                                                                                           <button class=\"btn timeBut showtime\">4:00 PM</button>\r\n                                                                                                           <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                                                                           <button class=\"btn timeBut \">-</button>\r\n                                                                                                        </div>\r\n                                                                                                        <div class=\"btn-col\">\r\n                                                                                                            <button class=\"btn timeBut\">- </button>  \r\n                                                                                                            <button class=\"btn timeBut \">- </button>                    \r\n                                                                                                           <button class=\"btn timeBut \">-</button>\r\n                                                                                                           <button class=\"btn timeBut showtime\">6:00 PM</button>\r\n                                                                                                           <button class=\"btn timeBut \">-</button>\r\n                                                                                                        </div>\r\n                                                                                      \r\n                                                                                                        </div>    \r\n                                                                                                        </div>    \r\n                                                                                                        </div>                \r\n                                                                                                        </div>    \r\n                                                                                                        </div>\r\n\r\n                                        <div class=\"doctors\">\r\n                                                <div class=\"row\">\r\n                                                <div class=\"col-md-6\">\r\n                                                <div class=\"doctor-card d-flex align-items-center\">\r\n                                                <div class=\"box-left\">\r\n                                                <div class=\"image\"> <img src=\"assets/img-1.png\" class=\"img-fluid\" alt=\"\"></div>\r\n                                                <div class=\"rating\">\r\n                                                <i class=\"fa fa-star active\"></i>\r\n                                                 <i class=\"fa fa-star active\"></i>\r\n                                                 <i class=\"fa fa-star active\"></i>  \r\n                                                <i class=\"fa fa-star\"></i>\r\n                                                <i class=\"fa fa-star\"></i>\r\n                                                 </div>\r\n                                                </div>\r\n                                                <div class=\"box-right\">\r\n                                                <p class=\"doctor-heading\"> Doctor Hemilton, Alexander M.D.\r\n                                                <span class=\"word-break\"> Obstetrics & Gynaecology   </span>  \r\n                                                </p> \r\n                                                <p class=\"location\">\r\n                                                <i class=\"fa fa-map-marker location-marker\">  </i>  2 ProHEALTH Plaza, Suite 201, 2 Ohio Drive   \r\n                                                </p>        \r\n                                                </div>    \r\n                                                </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6 pr-0 d-flex align-items-center justify-content-center\">\r\n                                                <div class=\"timing\">\r\n                                            <div class=\"EarliestButton\"> <a href=\"#\"> Earliest availability on MMM, DD </a> </div>\r\n                                                </div>    \r\n                                                </div>                \r\n                                                </div>    \r\n                                                </div>\r\n\r\n                                \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                            <div class=\"page-pagination\">\r\n                            <ul class=\"pagination\">\r\n                                 <li class=\"page-item\">\r\n                            <a class=\"page-link previous\" href=\"javascript:void\" aria-label=\"Previous\"> <i class=\"fa fa-angle-left\"> </i>  </a> </li>\r\n                                  <li class=\"page-item\"><a class=\"page-link active\" href=\"javascript:void\">1</a></li>\r\n                                  <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void\">2</a></li>\r\n                                  <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void\">3</a></li>\r\n                                  <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void\">4</a></li>\r\n                                  <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void\">5</a></li>\r\n                                  <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void\">6</a></li>\r\n                                 <li class=\"page-item\"><a class=\"page-link next\" href=\"javascript:void\" aria-label=\"Next\">  <i class=\"fa fa-angle-right\"></i> </a> </li></ul>\r\n                                \r\n                            </div>\r\n                            \r\n                                    \r\n                            </div>\r\n            </div>\r\n\r\n            \r\n            </div>\r\n            <div class=\"col-md-4 pr-0\">\r\n                <div class=\"map-image sticky\">\r\n                   <img src=\"assets/search-page-map.jpg\" class=\"img-fluid\" alt=\"\">   \r\n                </div>\r\n             </div>\r\n   </div>\r\n    </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/inc/search-result-item/search-result-item.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/inc/search-result-item/search-result-item.component.ts ***!
  \************************************************************************/
/*! exports provided: SearchResultItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultItemComponent", function() { return SearchResultItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchResultItemComponent = /** @class */ (function () {
    function SearchResultItemComponent() {
    }
    SearchResultItemComponent.prototype.ngOnInit = function () {
        owlinit();
    };
    SearchResultItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-result-item',
            template: __webpack_require__(/*! ./search-result-item.component.html */ "./src/app/inc/search-result-item/search-result-item.component.html"),
            styles: [__webpack_require__(/*! ./search-result-item.component.css */ "./src/app/inc/search-result-item/search-result-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchResultItemComponent);
    return SearchResultItemComponent;
}());



/***/ }),

/***/ "./src/app/inc/signformsection/signformsection.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/inc/signformsection/signformsection.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signForm {\r\n    box-shadow: -4px 3px 13px 0px rgba(0,0,0,0.2);\r\n    background: var(--white);\r\n    width: 80%;\r\n    padding: 25px 30px;\r\n    float: left;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n\r\n.signUp-form {\r\n    margin-top: 25px;\r\n}\r\n\r\n\r\n.signForm h1 {\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    color: var(--black);\r\n    margin: 0px auto;\r\n    display: table;\r\n    position: relative;\r\n}\r\n\r\n\r\n.signForm h1:before{\r\n    bottom: -8px;\r\n    content: \"\";\r\n    display: block;\r\n    height: 2px;\r\n    left: 50%;\r\n    margin: 0;\r\n    position: absolute;\r\n    width: 40%;\r\n    -webkit-transform: translate(-50%);\r\n    transform: translate(-50%);\r\n    background: var(--black);\r\n}\r\n\r\n\r\n.signUp-form .input-group {\r\n    width: 100%;\r\n    margin-bottom: 30px;\r\n    position: relative;\r\n}\r\n\r\n\r\n.signUp-form .input-group .form-control {\r\n    border: 0px;\r\n    border-bottom:1px solid var(--inputBoder);  \r\n    border-radius: 0px;\r\n    line-height: 24px;\r\n    padding: 0;\r\n    background: transparent;\r\n    font-size: 14px;\r\n    letter-spacing: 0.58px;\r\n    color: var(--inputfontControl); \r\n    font-weight: 300;\r\n    height: calc(2.25rem + 10px);\r\n    box-shadow: none;\r\n    outline: none;\r\n}\r\n\r\n\r\n.signUp-form .input-group .characters{\r\n    float: left;\r\n    width: 100%;\r\n    position: absolute;\r\n    bottom: -27px;\r\n    font-size: 11px;\r\n    color: var(--black);\r\n}\r\n\r\n\r\n.signForm .signButton{\r\n    background: var(--skyblue);\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    color: var(--white);\r\n    width: 100%;\r\n    border: 0;\r\n    border-radius: 0;\r\n    padding: 10px 0px;\r\n    text-transform: uppercase;\r\n    transition: all 600ms ease;\r\n}\r\n\r\n\r\n.signForm .signButton:hover{\r\n    background: var(--Blue);\r\n}\r\n\r\n\r\n.signForm .privacyPolicy {\r\n    font-size: 14px;\r\n    color: var(--black);\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n.signForm .privacyPolicy span{\r\n    font-weight: 500;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jL3NpZ25mb3Jtc2VjdGlvbi9zaWduZm9ybXNlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZDQUE2QztJQUM3Qyx3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0lBQ1gsU0FBUztJQUNULFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsd0JBQXdCO0FBQzVCOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOzs7QUFDQTtJQUNJLFdBQVc7SUFDWCx5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsMEJBQTBCO0FBQzlCOzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7O0FBSUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvaW5jL3NpZ25mb3Jtc2VjdGlvbi9zaWduZm9ybXNlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduRm9ybSB7XHJcbiAgICBib3gtc2hhZG93OiAtNHB4IDNweCAxM3B4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcGFkZGluZzogMjVweCAzMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG5cclxuLnNpZ25VcC1mb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5zaWduRm9ybSBoMSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNpZ25Gb3JtIGgxOmJlZm9yZXtcclxuICAgIGJvdHRvbTogLThweDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrKTtcclxufVxyXG5cclxuLnNpZ25VcC1mb3JtIC5pbnB1dC1ncm91cCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnNpZ25VcC1mb3JtIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0taW5wdXRCb2Rlcik7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNThweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pbnB1dGZvbnRDb250cm9sKTsgXHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDIuMjVyZW0gKyAxMHB4KTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uc2lnblVwLWZvcm0gLmlucHV0LWdyb3VwIC5jaGFyYWN0ZXJze1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTI3cHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG59XHJcblxyXG4uc2lnbkZvcm0gLnNpZ25CdXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1za3libHVlKTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDYwMG1zIGVhc2U7XHJcbn1cclxuXHJcbi5zaWduRm9ybSAuc2lnbkJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLUJsdWUpO1xyXG59XHJcblxyXG5cclxuXHJcbi5zaWduRm9ybSAucHJpdmFjeVBvbGljeSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuXHJcbi5zaWduRm9ybSAucHJpdmFjeVBvbGljeSBzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/inc/signformsection/signformsection.component.html":
/*!********************************************************************!*\
  !*** ./src/app/inc/signformsection/signformsection.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 d-flex align-items-center justify-content-center\"> \r\n      <div class=\"signformLeft\">\r\n        <img src=\"assets/sign-page-left.jpg\" alt=\"\" >\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"signForm\">\r\n        <h1>  Professional Sign Up</h1>\r\n        <form class=\"signUp-form\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n          <div class=\"input-group \">\r\n            <input class=\"effect-1 form-control\" id=\"data-name\" placeholder=\"First Name*\" type=\"text\" value=\"\">\r\n            <span class=\"focus-border\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"input-group\">\r\n              <input class=\"effect-1 form-control\" id=\"data-name\" placeholder=\"Last Name*\" type=\"text\" value=\"\">\r\n              <span class=\"focus-border\"></span>\r\n            </div>\r\n          </div>\r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n          <div class=\"input-group\">\r\n              <input class=\"effect-1 form-control\" id=\"data-name\" placeholder=\"Email Address*\" type=\"text\" value=\"\">\r\n              <span class=\"focus-border\"></span>\r\n            </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n              <div class=\"input-group\">\r\n                  <input class=\"effect-1 form-control\" id=\"data-name\" placeholder=\"Mobile No.*\" type=\"text\" value=\"\">\r\n                  <span class=\"focus-border\"></span>\r\n                </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                  <div class=\"input-group\">\r\n                      <input class=\"effect-1 form-control\" id=\"data-name\" placeholder=\"Password*\" type=\"text\" value=\"\">\r\n                      <span class=\"focus-border\"></span>\r\n                      <div class=\"characters\"> Use at least 10 characters, avoid dictionary words & common passwords.</div>\r\n                    </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  \r\n              <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                  <div class=\"input-group\">\r\n                      <input class=\"effect-1 form-control\" id=\"data-name\" placeholder=\"Confirm Password *\" type=\"text\" value=\"\">\r\n                      <span class=\"focus-border\"></span>\r\n                    </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"privacyPolicy\"> By continuing, you agree to the <span> Terms of Use, Privacy Policy.</span> </div>\r\n                  <button class=\"btn signButton\" type=\"Login\"> sign Up</button>\r\n        </form>\r\n\r\n        <div class=\"fxpge1-1 cYmrIn\">\r\n          <div class=\"fxpge1\"></div>\r\n          <div class=\"fxpge1-2 cJwISY\">\r\n            <span>or</span>\r\n          </div>\r\n          <div class=\"fxpge1\"></div></div>\r\n\r\n          <div class=\"login-facebook\"><a href=\"#\"><span><i class=\"sprites facebook-Icon\"></i> Login with Facebook</span></a></div>\r\n          <div class=\"login-googlePlus\"><a href=\"#\"><span><i class=\"sprites googlePlus-Icon\"></i> Login with Google </span></a></div>\r\n\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/inc/signformsection/signformsection.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/inc/signformsection/signformsection.component.ts ***!
  \******************************************************************/
/*! exports provided: SignformsectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignformsectionComponent", function() { return SignformsectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignformsectionComponent = /** @class */ (function () {
    function SignformsectionComponent() {
    }
    SignformsectionComponent.prototype.ngOnInit = function () {
    };
    SignformsectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signformsection',
            template: __webpack_require__(/*! ./signformsection.component.html */ "./src/app/inc/signformsection/signformsection.component.html"),
            styles: [__webpack_require__(/*! ./signformsection.component.css */ "./src/app/inc/signformsection/signformsection.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignformsectionComponent);
    return SignformsectionComponent;
}());



/***/ }),

/***/ "./src/app/inc/specialitiessection/specialitiessection.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/inc/specialitiessection/specialitiessection.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    .top-specialist p {\r\n        text-align: center;\r\n        font-size: 14px;\r\n        font-weight: 400;\r\n        color: var(--bright-grey);\r\n        line-height: 23px;\r\n    }\r\n\r\n    .top-specialist-slider .card {\r\n        align-items: center;\r\n        border: 0;\r\n        background: #ffffff;\r\n        border-radius: 5px;\r\n        -ms-box-shadow: 5px 0px 14px rgba(0, 0, 0, 0.2);\r\n        -o-box-shadow: 5px 0px 14px rgba(0, 0, 0, 0.2);\r\n        box-shadow: 5px 0px 14px rgba(0, 0, 0, 0.2);\r\n        margin-top: 75px;\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    .card.top-specialist-card .card-Img {\r\n        margin-top: -55px;\r\n        background: var(--white);\r\n        border-radius: 100px 100px 0px 0px;\r\n        padding: 20px;\r\n    }\r\n\r\n    .top-specialist-slider .card img {\r\n     }\r\n\r\n    .top-specialist-slider .card h4{\r\n        font-size: 18px;\r\n        color: var(--dark-blue);\r\n        font-weight: 600;\r\n        text-align: center;\r\n    }\r\n\r\n      \r\n \r\n   \r\n      \r\n    \r\n    \r\n   \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jL3NwZWNpYWxpdGllc3NlY3Rpb24vc3BlY2lhbGl0aWVzc2VjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUN6QixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsU0FBUztRQUNULG1CQUFtQjtRQUtuQixrQkFBa0I7UUFHbEIsK0NBQStDO1FBQy9DLDhDQUE4QztRQUM5QywyQ0FBMkM7UUFDM0MsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2Qjs7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsa0NBQWtDO1FBQ2xDLGFBQWE7SUFDakI7O0lBRUE7S0FDQzs7SUFDRDtRQUNJLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0QiIsImZpbGUiOiJzcmMvYXBwL2luYy9zcGVjaWFsaXRpZXNzZWN0aW9uL3NwZWNpYWxpdGllc3NlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLnRvcC1zcGVjaWFsaXN0IHAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tYnJpZ2h0LWdyZXkpO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC50b3Atc3BlY2lhbGlzdC1zbGlkZXIgLmNhcmQge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDBweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDVweCAwcHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgLW1zLWJveC1zaGFkb3c6IDVweCAwcHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgLW8tYm94LXNoYWRvdzogNXB4IDBweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICBib3gtc2hhZG93OiA1cHggMHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIC5jYXJkLnRvcC1zcGVjaWFsaXN0LWNhcmQgLmNhcmQtSW1nIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHggMTAwcHggMHB4IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50b3Atc3BlY2lhbGlzdC1zbGlkZXIgLmNhcmQgaW1nIHtcclxuICAgICB9XHJcbiAgICAudG9wLXNwZWNpYWxpc3Qtc2xpZGVyIC5jYXJkIGg0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAgIFxyXG4gXHJcbiAgIFxyXG4gICAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICJdfQ== */"

/***/ }),

/***/ "./src/app/inc/specialitiessection/specialitiessection.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/inc/specialitiessection/specialitiessection.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <section class=\"top-specialist lightBg\">\r\n      <div class=\"container\">\r\n          <div class=\"row\">\r\n\r\n\r\n              <div class=\"col-md-12\">\r\n\r\n                  <h2 class=\"main-heading underline\">\r\n                      Top <span> Specialities </span>\r\n                  </h2>\r\n                  <p>  Lorem ipsum dolor sit amet, consectetur adipiscing</p>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n\r\n                <div class=\"owl-carousel owl-theme top-specialist-slider\">\r\n\r\n                <div class=\"item\">\r\n                    <div class=\"card top-specialist-card\">\r\n                        <div class=\"card-Img\">\r\n                        <img class=\"card-img-top img-fluid\" src=\"assets/gynecologist-icon.png\" alt=\"Card image cap\" />\r\n                        </div>\r\n                        <div class=\"card-block top-specialist-block\">\r\n                            <h4 class=\"card-title top-specialist-title\"> Gynecologist/Obstetrician </h4>\r\n                            <p class=\"card-text top-specialist-info\">Lorem ipsum dolor sit amet, onsectetur adipiscing Lorem ipsum dolor.Lorem ipsum dolor.</p>\r\n                            <!-- <a href=\"javascript:void\" class=\"top-specialist-more\"> <i class=\"fa fa-arrow-right float-right\"> </i> </a> -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"item\">\r\n                        <div class=\"card top-specialist-card\">\r\n                            <div class=\"card-Img\">\r\n                            <img class=\"card-img-top img-fluid\" src=\"assets/dentist-icon.png\" alt=\"Card image cap\" />\r\n                            </div>\r\n                            <div class=\"card-block top-specialist-block\">\r\n                                <h4 class=\"card-title top-specialist-title\">Dentist</h4>\r\n                                <p class=\"card-text top-specialist-info\">Lorem ipsum dolor sit amet, onsectetur adipiscing Lorem ipsum dolor.Lorem ipsum dolor.</p>\r\n                                <!-- <a href=\"javascript:void\" class=\"top-specialist-more\"> <i class=\"fa fa-arrow-right float-right\"> </i> </a> -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"item\">\r\n                            <div class=\"card top-specialist-card\">\r\n                                <div class=\"card-Img\">\r\n                                <img class=\"card-img-top img-fluid\" src=\"assets/Dermatologist-icon.png\" alt=\"Card image cap\" />\r\n                                </div>\r\n                                <div class=\"card-block top-specialist-block\">\r\n                                    <h4 class=\"card-title top-specialist-title\">Dermatologist</h4>\r\n                                    <p class=\"card-text top-specialist-info\">Lorem ipsum dolor sit amet, onsectetur adipiscing Lorem ipsum dolor.Lorem ipsum dolor.</p>\r\n                                    <!-- <a href=\"javascript:void\" class=\"top-specialist-more\"> <i class=\"fa fa-arrow-right float-right\"> </i> </a> -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"item\">\r\n                                <div class=\"card top-specialist-card\">\r\n                                    <div class=\"card-Img\">\r\n                                    <img class=\"card-img-top img-fluid\" src=\"assets/Psychiatrist-icon.png\" alt=\"Card image cap\" />\r\n                                    </div>\r\n                                    <div class=\"card-block top-specialist-block\">\r\n                                        <h4 class=\"card-title top-specialist-title\">Psychiatrist</h4>\r\n                                        <p class=\"card-text top-specialist-info\">Lorem ipsum dolor sit amet, onsectetur adipiscing Lorem ipsum dolor.Lorem ipsum dolor.</p>\r\n                                        <!-- <a href=\"javascript:void\" class=\"top-specialist-more\"> <i class=\"fa fa-arrow-right float-right\"> </i> </a> -->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"item\">\r\n                                    <div class=\"card top-specialist-card\">\r\n                                        <div class=\"card-Img\">\r\n                                        <img class=\"card-img-top img-fluid\" src=\"assets/Psychiatrist-icon.png\" alt=\"Card image cap\" />\r\n                                        </div>\r\n                                        <div class=\"card-block top-specialist-block\">\r\n                                            <h4 class=\"card-title top-specialist-title\">Psychiatrist</h4>\r\n                                            <p class=\"card-text top-specialist-info\">Lorem ipsum dolor sit amet, onsectetur adipiscing Lorem ipsum dolor.Lorem ipsum dolor.</p>\r\n                                            <!-- <a href=\"javascript:void\" class=\"top-specialist-more\"> <i class=\"fa fa-arrow-right float-right\"> </i> </a>/ -->\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n            </div>\r\n             </div>\r\n          </div>\r\n      </div>\r\n  </section>\r\n\r\n"

/***/ }),

/***/ "./src/app/inc/specialitiessection/specialitiessection.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/inc/specialitiessection/specialitiessection.component.ts ***!
  \**************************************************************************/
/*! exports provided: SpecialitiessectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialitiessectionComponent", function() { return SpecialitiessectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpecialitiessectionComponent = /** @class */ (function () {
    function SpecialitiessectionComponent() {
    }
    SpecialitiessectionComponent.prototype.ngOnInit = function () {
    };
    SpecialitiessectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-specialitiessection',
            template: __webpack_require__(/*! ./specialitiessection.component.html */ "./src/app/inc/specialitiessection/specialitiessection.component.html"),
            styles: [__webpack_require__(/*! ./specialitiessection.component.css */ "./src/app/inc/specialitiessection/specialitiessection.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpecialitiessectionComponent);
    return SpecialitiessectionComponent;
}());



/***/ }),

/***/ "./src/app/inc/testimonial/testimonial.component.css":
/*!***********************************************************!*\
  !*** ./src/app/inc/testimonial/testimonial.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".testimonial {\r\n    background-color: #e8f6f4;\r\n}\r\n.outer {\r\n    margin: 0 auto;\r\n    max-width: 800px;\r\n}\r\n#big .item {\r\n    background: transparent;\r\n    padding: 120px 0px;\r\n    margin: 2px;\r\n    color: #000;\r\n    padding: 20px;\r\n    border-radius: 3px;\r\n    text-align: center;\r\n}\r\n#thumbs .item {\r\n    padding: 0px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100px;\r\n    height: auto;\r\n    margin: 20px;\r\n\r\n\r\n}\r\n#thumbs .current .item {\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    z-index: 200;\r\n    position: relative;\r\n\r\n\r\n}\r\n#thumbs .current .item .thumb {\r\n    -webkit-transform: scale(1.3);\r\n            transform: scale(1.3);\r\n\r\n\r\n}\r\n#thumbs .item .intro {\r\n    margin: 0;\r\n    padding: 0;\r\n    display: none;\r\n    margin-top: 20px;\r\n\r\n}\r\n.owl-item.active.current .item .intro {\r\n    display: block !important;\r\n}\r\n.owl-item.active.current {\r\n    margin: 0 auto;\r\n\r\n}\r\n#thumbs .item .intro .name {\r\n    margin: 0;\r\n    padding: 0;\r\n    line-height: 28px;\r\n    text-transform: capitalize;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n}\r\n#thumbs .item .intro .degnization {\r\n    text-transform: capitalize;\r\n    line-height: 14px;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n\r\n}\r\n#thumbs .thumb {\r\n\r\n    height: auto;\r\n    z-index: 500;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n}\r\n#thumbs .thumb img {\r\n    width: 300px;\r\n    height: auto;\r\n}\r\n#thumbs .owl-stage {\r\n    margin: auto;\r\n}\r\n.owl-theme .owl-nav [class*='owl-'] {\r\n    transition: all .3s ease;\r\n}\r\n.owl-theme .owl-nav [class*='owl-'].disabled:hover {\r\n    background-color: #D6D6D6;\r\n}\r\n#big.owl-theme {\r\n    position: relative;\r\n}\r\n#big.owl-theme .owl-next,\r\n#big.owl-theme .owl-prev {\r\n    background: #fff;\r\n    width: 22px;\r\n    line-height: 40px;\r\n    height: 40px;\r\n    margin-top: -20px;\r\n    position: absolute;\r\n    text-align: center;\r\n    top: 50%;\r\n}\r\n#big.owl-theme .owl-prev {\r\n    left: 10px;\r\n}\r\n#big.owl-theme .owl-next {\r\n    right: 10px;\r\n}\r\n#thumbs.owl-theme .owl-next,\r\n#thumbs.owl-theme .owl-prev {\r\n    background: #333;\r\n}\r\n#big .item .review {\r\n    text-align: center;\r\n    padding: 0 50px;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 3;\r\n    overflow: hidden;\r\n}\r\n#big .item .review::before {\r\n    /* content: url('assets/quote-left.png'); */\r\n    background-size: cover;\r\n    position: absolute;\r\n    top: -8px;\r\n    left: 0;\r\n    -webkit-transform: translate(0, 0);\r\n            transform: translate(0, 0);\r\n\r\n}\r\n#big .item .review::after {\r\n    /* content: url('assets/quote-right.png'); */\r\n    background-size: cover;\r\n    position: absolute;\r\n    bottom: -8px;\r\n    right: 0;\r\n    -webkit-transform: translate(0, 0);\r\n            transform: translate(0, 0);\r\n\r\n\r\n}\r\n.owl-item > div {\r\n  cursor: pointer;\r\n  margin: 6% 8%;\r\n  transition: margin 0.4s ease;\r\n}\r\n.owl-item.center > div {\r\n  cursor: auto;\r\n  margin: 0;\r\n}\r\n.testimonial .owl-item:not(.center) > div:hover {\r\n  opacity: .75;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jL3Rlc3RpbW9uaWFsL3Rlc3RpbW9uaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZOzs7QUFHaEI7QUFHQTtJQUNJLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGtCQUFrQjs7O0FBR3RCO0FBRUE7SUFDSSw2QkFBcUI7WUFBckIscUJBQXFCOzs7QUFHekI7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGdCQUFnQjs7QUFFcEI7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksY0FBYzs7QUFFbEI7QUFHQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlOztBQUVuQjtBQUVBOztJQUVJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUVJLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtBQUNaO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjtBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIscUJBQXFCO0lBRXJCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxrQ0FBMEI7WUFBMUIsMEJBQTBCOztBQUU5QjtBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFFBQVE7SUFDUixrQ0FBMEI7WUFBMUIsMEJBQTBCOzs7QUFHOUI7QUFLQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osU0FBUztBQUNYO0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9pbmMvdGVzdGltb25pYWwvdGVzdGltb25pYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXN0aW1vbmlhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmNmY0O1xyXG59XHJcbi5vdXRlciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbn1cclxuXHJcbiNiaWcgLml0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAxMjBweCAwcHg7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3RodW1icyAuaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbiN0aHVtYnMgLmN1cnJlbnQgLml0ZW0ge1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMjAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHJcbn1cclxuXHJcbiN0aHVtYnMgLmN1cnJlbnQgLml0ZW0gLnRodW1iIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuXHJcblxyXG59XHJcblxyXG4jdGh1bWJzIC5pdGVtIC5pbnRybyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG59XHJcblxyXG4ub3dsLWl0ZW0uYWN0aXZlLmN1cnJlbnQgLml0ZW0gLmludHJvIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vd2wtaXRlbS5hY3RpdmUuY3VycmVudCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbn1cclxuXHJcblxyXG4jdGh1bWJzIC5pdGVtIC5pbnRybyAubmFtZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jdGh1bWJzIC5pdGVtIC5pbnRybyAuZGVnbml6YXRpb24ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG59XHJcblxyXG4jdGh1bWJzIC50aHVtYiB7XHJcblxyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgei1pbmRleDogNTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI3RodW1icyAudGh1bWIgaW1nIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuI3RodW1icyAub3dsLXN0YWdlIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLm93bC10aGVtZSAub3dsLW5hdiBbY2xhc3MqPSdvd2wtJ10ge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5vd2wtdGhlbWUgLm93bC1uYXYgW2NsYXNzKj0nb3dsLSddLmRpc2FibGVkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNENkQ2RDY7XHJcbn1cclxuXHJcbiNiaWcub3dsLXRoZW1lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI2JpZy5vd2wtdGhlbWUgLm93bC1uZXh0LFxyXG4jYmlnLm93bC10aGVtZSAub3dsLXByZXYge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRvcDogNTAlO1xyXG59XHJcblxyXG4jYmlnLm93bC10aGVtZSAub3dsLXByZXYge1xyXG4gICAgbGVmdDogMTBweDtcclxufVxyXG5cclxuI2JpZy5vd2wtdGhlbWUgLm93bC1uZXh0IHtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4jdGh1bWJzLm93bC10aGVtZSAub3dsLW5leHQsXHJcbiN0aHVtYnMub3dsLXRoZW1lIC5vd2wtcHJldiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG59XHJcblxyXG5cclxuI2JpZyAuaXRlbSAucmV2aWV3IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgNTBweDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNiaWcgLml0ZW0gLnJldmlldzo6YmVmb3JlIHtcclxuICAgIC8qIGNvbnRlbnQ6IHVybCgnYXNzZXRzL3F1b3RlLWxlZnQucG5nJyk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtOHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG5cclxufVxyXG5cclxuI2JpZyAuaXRlbSAucmV2aWV3OjphZnRlciB7XHJcbiAgICAvKiBjb250ZW50OiB1cmwoJ2Fzc2V0cy9xdW90ZS1yaWdodC5wbmcnKTsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC04cHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5vd2wtaXRlbSA+IGRpdiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogNiUgOCU7XHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuNHMgZWFzZTtcclxufVxyXG4ub3dsLWl0ZW0uY2VudGVyID4gZGl2IHtcclxuICBjdXJzb3I6IGF1dG87XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udGVzdGltb25pYWwgLm93bC1pdGVtOm5vdCguY2VudGVyKSA+IGRpdjpob3ZlciB7XHJcbiAgb3BhY2l0eTogLjc1O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/inc/testimonial/testimonial.component.html":
/*!************************************************************!*\
  !*** ./src/app/inc/testimonial/testimonial.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <section class=\"testimonial\">\r\n      <div class=\"container\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                  <h2 class=\"main-heading underline\">\r\n                      customer <span> stories </span>\r\n                  </h2>\r\n                  <div class=\"outer\">\r\n                      <div id=\"big\" class=\"owl-carousel owl-theme\">\r\n\r\n                          <div class=\"item\">\r\n                              <p class=\"review\"> (1) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae molestias vel, deleniti est repudiandae dolorum. Eos at natus, id cumque omnis, culpa modi sapiente esse quas dolores aspernatur exercitationem praesentium deleniti nihil labore fugiat. Libero cupiditate ipsa facilis praesentium autem! </p>\r\n                          </div>\r\n\r\n\r\n                          <div class=\"item\">\r\n                              <p class=\"review\"> (2) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae molestias vel, deleniti est repudiandae dolorum. Eos at natus, id cumque omnis, culpa modi sapiente esse quas dolores aspernatur exercitationem praesentium deleniti nihil labore fugiat. Libero cupiditate ipsa facilis praesentium autem! </p>\r\n                          </div>\r\n\r\n\r\n                          <div class=\"item\">\r\n                              <p class=\"review\"> (3) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae molestias vel, deleniti est repudiandae dolorum. Eos at natus, id cumque omnis, culpa modi sapiente esse quas dolores aspernatur exercitationem praesentium deleniti nihil labore fugiat. Libero cupiditate ipsa facilis praesentium autem! </p>\r\n                          </div>\r\n\r\n\r\n\r\n                      </div>\r\n                      <div id=\"thumbs\" class=\"owl-carousel owl-theme\">\r\n                          <div class=\"item\">\r\n                              <div class=\"thumb\">\r\n                                  <img src=\"assets/person1.jpg\" alt=\"\" class=\"img-fluid thumb-image\">\r\n\r\n                              </div>\r\n                              <div class=\"intro\">\r\n                                  <h3 class=\"name\"> name </h3>\r\n                                  <p class=\"degnization\"> degnization </p>\r\n                              </div>\r\n                          </div>\r\n\r\n                          <div class=\"item\">\r\n                              <div class=\"thumb\">\r\n                                  <img src=\"assets/person2.jpg\" alt=\"\" class=\"img-fluid thumb-image\">\r\n\r\n                              </div>\r\n                              <div class=\"intro\">\r\n                                  <h3 class=\"name\"> name </h3>\r\n                                  <p class=\"degnization\"> degnization </p>\r\n                              </div>\r\n\r\n\r\n                          </div>\r\n\r\n                          <div class=\"item\">\r\n                              <div class=\"thumb\">\r\n                                  <img src=\"assets/person3.jpg\" alt=\"\" class=\"img-fluid thumb-image\">\r\n\r\n                              </div>\r\n                              <div class=\"intro\">\r\n                                  <h3 class=\"name\"> name </h3>\r\n                                  <p class=\"degnization\"> degnization </p>\r\n                              </div>\r\n                          </div>\r\n\r\n                    \r\n\r\n                    \r\n\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </section>\r\n\r\n"

/***/ }),

/***/ "./src/app/inc/testimonial/testimonial.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/inc/testimonial/testimonial.component.ts ***!
  \**********************************************************/
/*! exports provided: TestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialComponent", function() { return TestimonialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestimonialComponent = /** @class */ (function () {
    function TestimonialComponent() {
    }
    TestimonialComponent.prototype.ngOnInit = function () {
        owlinit();
    };
    TestimonialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testimonial',
            template: __webpack_require__(/*! ./testimonial.component.html */ "./src/app/inc/testimonial/testimonial.component.html"),
            styles: [__webpack_require__(/*! ./testimonial.component.css */ "./src/app/inc/testimonial/testimonial.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestimonialComponent);
    return TestimonialComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works! \n</p>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox. \r\n     Every toolbar row uses a flexbox row layout. */\r\n  flex: 1 1 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTttREFDaUQ7RUFDakQsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcclxuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxyXG4gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n\t<!-- <span class=\"fill-remaining-space\">\n\t    <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n\t      <mat-icon>menu</mat-icon>\n\t    </button>\n\t    <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\n\t      <button mat-menu-item>\n\t        <mat-icon>home</mat-icon>\n\t        <span>Home</span>\n\t      </button>\n\t      <button mat-menu-item>\n\t        <mat-icon>people_outline</mat-icon>\n\t        <span>Connecting</span>\n\t      </button>\n\t      <button mat-menu-item>\n\t        <mat-icon>videocam</mat-icon>\n\t        <span>Let's talk</span>\n\t      </button>\n\t      <button mat-menu-item>\n\t        <mat-icon>exit_to_app</mat-icon>\n\t        <span>Logout</span>\n\t      </button>\n\t    </mat-menu>\n\t</span> -->\n\t<span class=\"fill-remaining-space\">Medical App</span>\n\t<!-- <button mat-button [matMenuTriggerFor]=\"aboveMenu\">Sign-in/Signup</button> -->\n\t<button mat-button routerLink=\"/patient/login\">Login / Signup</button>\n\t\t<!-- <mat-menu #aboveMenu=\"matMenu\" yPosition=\"above\">\n\t\t  <button mat-menu-item>Item 1</button>\n\t\t  <button mat-menu-item>Item 2</button>\n\t\t</mat-menu> -->\n\n\t<button mat-button>Practice Login / Signup</button>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'main-nav',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/practice/home/home.component.css":
/*!**************************************************!*\
  !*** ./src/app/practice/home/home.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByYWN0aWNlL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/practice/home/home.component.html":
/*!***************************************************!*\
  !*** ./src/app/practice/home/home.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/practice/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/practice/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/practice/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/practice/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/professional/professional.component.css":
/*!*********************************************************!*\
  !*** ./src/app/professional/professional.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc3Npb25hbC9wcm9mZXNzaW9uYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/professional/professional.component.html":
/*!**********************************************************!*\
  !*** ./src/app/professional/professional.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-innheadercommon> </app-innheadercommon>\r\n<app-professionalformsection></app-professionalformsection>\r\n<app-footer></app-footer>\r\n<app-popupmodal-login></app-popupmodal-login>"

/***/ }),

/***/ "./src/app/professional/professional.component.ts":
/*!********************************************************!*\
  !*** ./src/app/professional/professional.component.ts ***!
  \********************************************************/
/*! exports provided: ProfessionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalComponent", function() { return ProfessionalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfessionalComponent = /** @class */ (function () {
    function ProfessionalComponent() {
    }
    ProfessionalComponent.prototype.ngOnInit = function () {
    };
    ProfessionalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-professional',
            template: __webpack_require__(/*! ./professional.component.html */ "./src/app/professional/professional.component.html"),
            styles: [__webpack_require__(/*! ./professional.component.css */ "./src/app/professional/professional.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfessionalComponent);
    return ProfessionalComponent;
}());



/***/ }),

/***/ "./src/app/search-page/search-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/search-page/search-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1wYWdlL3NlYXJjaC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/search-page/search-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/search-page/search-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-innheader> </app-innheader>\r\n<app-filter-section></app-filter-section>\r\n<app-search-result-item></app-search-result-item>\r\n<app-footer></app-footer>\r\n<app-popupmodal-login></app-popupmodal-login>"

/***/ }),

/***/ "./src/app/search-page/search-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-page/search-page.component.ts ***!
  \******************************************************/
/*! exports provided: SearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageComponent", function() { return SearchPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPageComponent = /** @class */ (function () {
    function SearchPageComponent() {
    }
    SearchPageComponent.prototype.ngOnInit = function () {
    };
    SearchPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-page',
            template: __webpack_require__(/*! ./search-page.component.html */ "./src/app/search-page/search-page.component.html"),
            styles: [__webpack_require__(/*! ./search-page.component.css */ "./src/app/search-page/search-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchPageComponent);
    return SearchPageComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-nav></main-nav>\n<homesearch></homesearch>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");




var SearchComponent = /** @class */ (function () {
    function SearchComponent(router, route, search_service) {
        this.router = router;
        this.route = route;
        this.search_service = search_service;
        // icarrier: any;
        // insuranceplan: any;
        // provider: any;
        // condition: any;
        // zipcode: any;
        this.results = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            //console.log(params['icarrier']);
            _this.search_service.search(params).subscribe(function (data) {
                _this.results = data;
            });
        });
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/signup-page/signup-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/signup-page/signup-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC1wYWdlL3NpZ251cC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/signup-page/signup-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/signup-page/signup-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-innheadercommon> </app-innheadercommon>\r\n<app-signformsection></app-signformsection>\r\n<app-footer></app-footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/signup-page/signup-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/signup-page/signup-page.component.ts ***!
  \******************************************************/
/*! exports provided: SignupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function() { return SignupPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupPageComponent = /** @class */ (function () {
    function SignupPageComponent() {
    }
    SignupPageComponent.prototype.ngOnInit = function () {
    };
    SignupPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup-page',
            template: __webpack_require__(/*! ./signup-page.component.html */ "./src/app/signup-page/signup-page.component.html"),
            styles: [__webpack_require__(/*! ./signup-page.component.css */ "./src/app/signup-page/signup-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignupPageComponent);
    return SignupPageComponent;
}());



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
var environment = {
    production: false,
    apiUrl: 'http://localhost:3000/',
    siteUrl: 'http://localhost:4200/',
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\medical_app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map