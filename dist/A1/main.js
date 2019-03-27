(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./assignment/services/directives/sortable.directive.ts":
/*!**************************************************************!*\
  !*** ./assignment/services/directives/sortable.directive.ts ***!
  \**************************************************************/
/*! exports provided: SortableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableDirective", function() { return SortableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // this will emit an event for the parent component or the directive calling component
    }
    // Lifecycle hook that is called after a component's view has been fully initialized
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSortable]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

/***/ "./assignment/services/pipes/order-by-pipe.ts":
/*!****************************************************!*\
  !*** ./assignment/services/pipes/order-by-pipe.ts ***!
  \****************************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        if (array !== undefined) {
            array.sort(function (a, b) {
                if (a.position < b.position) {
                    return -1;
                }
                else if (a.position > b.position) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            return array;
        }
    };
    OrderByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background-color: steelblue;\n  position: center;\n  color: white;\n  padding-top: 0px;\n}\n\n.navbar {\n  background-color: steelblue;\n  border-color: white;\n  color: white;\n}\n\n.above-below-space{\n  padding-bottom: 60px;\n  padding-top: 60px;\n}\n\n.box{\n  display: none;\n  width: 100%;\n}\n\na {\n  text-decoration: none;\n}\n\na:hover + .box,.box:hover{\n  display: block;\n  position: relative;\n  z-index: 100;\n  text-decoration: none;\n}\n\n.text-white{\n  color: white;\n}\n\n.steelblue-icon{\n  color: steelblue;\n}\n\na.blue-color a:hover{\n  text-decoration: none;\n}\n\na:hover {\n  color: grey;\n  text-decoration: none;\n}\n\n.visited {\n  color:grey;\n  text-decoration:none;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBSUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFJQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hYm92ZS1iZWxvdy1zcGFjZXtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG5cblxuLmJveHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIgKyAuYm94LC5ib3g6aG92ZXJ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGV4dC13aGl0ZXtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3RlZWxibHVlLWljb257XG4gIGNvbG9yOiBzdGVlbGJsdWU7XG59XG5cbmEuYmx1ZS1jb2xvciBhOmhvdmVye1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogZ3JleTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cblxuLnZpc2l0ZWQge1xuICBjb2xvcjpncmV5O1xuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--<div style=\"text-align:center\">\n  <h1>\n    Welcome to Brian Lam's submission for A1 - angular!\n  </h1>\n  <img width=\"300\" alt=\"Brian Lam\" src=\"https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg\">\n</div>\n<h2>What's up kitty cat </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://www.linkedin.com/in/bslam\">Brian Lam's LinkedIn</a></h2>\n  </li>\n</ul>\n\n<a [routerLink]=\"['/login']\">Login</a>-->\n<router-outlet></router-outlet>\n"

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
        this.title = 'A1';
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
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-header/widget-header.component */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _directives_change_bg_color_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./directives/change-bg-color.directive */ "./src/app/directives/change-bg-color.directive.ts");
/* harmony import */ var _assignment_services_pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../assignment/services/pipes/order-by-pipe */ "./assignment/services/pipes/order-by-pipe.ts");
/* harmony import */ var _assignment_services_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../assignment/services/directives/sortable.directive */ "./assignment/services/directives/sortable.directive.ts");





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteNewComponent"],
                _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteEditComponent"],
                _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_12__["WebsiteListComponent"],
                _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_13__["PageNewComponent"],
                _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_14__["PageEditComponent"],
                _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_15__["PageListComponent"],
                _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__["WidgetChooserComponent"],
                _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__["WidgetEditComponent"],
                _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_18__["WidgetListComponent"],
                _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_19__["WidgetHeadingComponent"],
                _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_20__["WidgetImageComponent"],
                _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_21__["WidgetYoutubeComponent"],
                _directives_change_bg_color_directive__WEBPACK_IMPORTED_MODULE_26__["ChangeBgColorDirective"],
                _assignment_services_pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_27__["OrderByPipe"],
                _assignment_services_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_28__["SortableDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRouting"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_22__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_23__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_24__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_25__["WidgetService"]],
            exports: [
                _assignment_services_pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_27__["OrderByPipe"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/**import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/user/login/login.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {RegisterComponent} from './views/user/register/register.component';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'register', component: RegisterComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting { }**/













/*const appRoutes: Routes = [​
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},​
  {path: 'register', component: RegisterComponent}
];​*/
var appRouting = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'user/:uid', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'user/:uid/website', component: _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_4__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_5__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid', component: _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_7__["PageListComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_8__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_9__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_10__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_11__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_12__["WidgetEditComponent"] }
];
var AppRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRouting);


/***/ }),

/***/ "./src/app/directives/change-bg-color.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/change-bg-color.directive.ts ***!
  \*********************************************************/
/*! exports provided: ChangeBgColorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeBgColorDirective", function() { return ChangeBgColorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChangeBgColorDirective = /** @class */ (function () {
    function ChangeBgColorDirective() {
    }
    ChangeBgColorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appChangeBgColor]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChangeBgColorDirective);
    return ChangeBgColorDirective;
}());



/***/ }),

/***/ "./src/app/models/page.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/page.model.client.ts ***!
  \*********************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(_id, name, websiteId, description, developerId) {
        this._id = _id;
        this.name = name;
        this.websiteId = websiteId;
        this.title = description;
        this.developerId = developerId;
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/models/widget.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/widget.model.client.ts ***!
  \***********************************************/
/*! exports provided: WidgetHeading, WidgetImage, WidgetHtml, WidgetYoutube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeading", function() { return WidgetHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImage", function() { return WidgetImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHtml", function() { return WidgetHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutube", function() { return WidgetYoutube; });
var WidgetHeading = /** @class */ (function () {
    function WidgetHeading(name, _id, widgetType, pageId, size, text) {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.size = size;
        this.text = text;
    }
    return WidgetHeading;
}());

var WidgetImage = /** @class */ (function () {
    function WidgetImage(name, _id, widgetType, pageId, width, url) {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.width = width;
        this.url = url;
    }
    return WidgetImage;
}());

var WidgetHtml = /** @class */ (function () {
    function WidgetHtml(name, _id, widgetType, pageId, text) {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.text = text;
    }
    return WidgetHtml;
}());

var WidgetYoutube = /** @class */ (function () {
    function WidgetYoutube(name, _id, widgetType, pageId, width, url) {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.width = width;
        this.url = url;
    }
    return WidgetYoutube;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/page.service.client.ts ***!
  \*************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.base_url = 'http://localhost:3200/';
    }
    PageService.prototype.createPage = function (websiteId, page) {
        var url = this.base_url + 'api/website/' + websiteId + '/page';
        return this.http.post(url, page);
    };
    PageService.prototype.findAllPagesForWebsite = function (websiteId) {
        var url = this.base_url + 'api/website/' + websiteId + '/page';
        return this.http.get(url);
    };
    PageService.prototype.findPageById = function (pageId) {
        var url = this.base_url + 'api/page/' + pageId;
        return this.http.get(url);
    };
    PageService.prototype.updatePage = function (pageId, page) {
        var url = this.base_url + 'api/page/' + pageId;
        return this.http.put(url, page);
    };
    PageService.prototype.deletePage = function (pageId) {
        var url = this.base_url + 'api/page/' + pageId;
        return this.http.delete(url);
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



// import { Observable } from 'rxjs/Observable ';

var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    UserService.prototype.createUser = function (user) {
        var url = this.base_url + 'api/user/' + user._id;
        return this.http.post(url, user);
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.base_url + 'api/user?username=' + username + '&password=' + password;
        console.log(url);
        return this.http.get(url);
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.base_url + 'api/user/' + userId;
        return this.http.get(url);
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.base_url + 'api/user/' + userId;
        return this.http.put(url, user);
    };
    UserService.prototype.deleteUserById = function (userId) {
        var url = this.base_url + 'api/user/' + userId;
        return this.http.delete(url);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());

/**
@Injectable()
export class UserService {
  users: User[] = [
    new User('123', 'alice', 'alice', 'Alice', 'Wonder'),
    new User('234', 'bob', 'bob', 'Bob', 'Marley'),
    new User('345', 'charly', 'charly', 'Charly', 'Garcia'),
    new User('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi')
  ];


  createUser(user: User) {
    const new_user: User = new User(Math.random, user.username, user.password, '', '');
    this.users.push(new_user);
    return new_user;
  }

  findUserById(userId: String) {
    return this.users.find(function (user) {
      return user._id === userId;
    });
  }
  findUserByCredential(username: String, password: String) {
    return this.users.find(function (user) {
      return user.username === username && user.password === password;
    });

  }
  findUserByUsername(username: String) {
    return this.users.find(function (user) {
      return user.username === username;
    });
  }
  updateUser(userId, user) {
    for (const i in this.users) {
      if (this.users[i]._id === userId) {
        this.users[i].firstName = user.firstName;
        this.users[i].lastName = user.lastName;
      }
    }
  }

  deleteUser(userId: String) {
    for (const i in this.users) {
      if (this.users[i]._id === userId) {
        const j = +i;
        this.users.splice(j, 1);
      }
    }
  }
}**/


/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



// import { Observable } from 'rxjs/Observable ';

var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var url = this.base_url + 'api/user/' + userId + '/website';
        return this.http.post(url, website);
    };
    WebsiteService.prototype.findAllWebsitesForUser = function (userId) {
        // const url = this.base_url + 'api/user/' + userId + '/website';
        // return this.http.get(url);
        return this.http.get(this.base_url + 'api/user/' + userId + '/website');
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        var url = this.base_url + 'api/website/' + websiteId;
        return this.http.get(url);
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var url = this.base_url + 'api/website/' + websiteId;
        return this.http.put(url, website);
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = this.base_url + 'api/website/' + websiteId;
        return this.http.delete(url);
        // return this.http.delete( this.base_url + 'api/website/' + websiteId);
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



// import { Observable } from 'rxjs/Observable ';

var WidgetService = /** @class */ (function () {
    function WidgetService(http) {
        this.http = http;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    WidgetService.prototype.createWidget = function (pageId, widget, type) {
        var url = this.base_url + 'api/page/' + pageId + '/widget?type=' + type;
        return this.http.post(url, widget);
    };
    WidgetService.prototype.findAllWidgetsForPage = function (pageId) {
        var url = this.base_url + 'api/page/' + pageId + '/widget';
        return this.http.get(url);
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.base_url + 'api/widget/' + widgetId;
        return this.http.get(url);
    };
    WidgetService.prototype.updateWidget = function (widgetId, newWidget) {
        var url = this.base_url + 'api/widget/' + widgetId;
        return this.http.put(url, newWidget);
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.base_url + 'api/widget/' + widgetId;
        return this.http.delete(url);
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        var url = this.base_url + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        return this.http.put(url, '');
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nheader {\n  background-color: steelblue;\n  position: center;\n  color: white;\n  padding-top: 0px;\n}\n.navbar {\n  background-color: steelblue;\n  border-color: white;\n  color: white;\n}\n.above-below-space{\n  padding-bottom: 60px;\n  padding-top: 60px;\n}\n.box{\n  display: none;\n  width: 100%;\n}\na {\n  text-decoration: none;\n}\na:hover + .box,.box:hover{\n  display: block;\n  position: relative;\n  z-index: 100;\n  text-decoration: none;\n}\n.text-white{\n  color: white;\n}\n.steelblue-icon{\n  color: steelblue;\n}\na.blue-color a:hover{\n  text-decoration: none;\n}\na:hover {\n  color: grey;\n  text-decoration: none;\n}\n.visited {\n  color:grey;\n  text-decoration:none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLWVkaXQvcGFnZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFO0FBQzlFO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjtBQUlBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFJQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlL3BhZ2UtZWRpdC9wYWdlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hYm92ZS1iZWxvdy1zcGFjZXtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG5cblxuLmJveHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIgKyAuYm94LC5ib3g6aG92ZXJ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGV4dC13aGl0ZXtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3RlZWxibHVlLWljb257XG4gIGNvbG9yOiBzdGVlbGJsdWU7XG59XG5cbmEuYmx1ZS1jb2xvciBhOmhvdmVye1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogZ3JleTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cblxuLnZpc2l0ZWQge1xuICBjb2xvcjpncmV5O1xuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-light bg-light navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text float-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\" class=\"text-black cl-icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand text-black font-weight-bold pl-2\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\">\n        Edit Page\n      </a>\n    </div>\n    <div class=\"navbar-text float-right\">\n      <a (click)=\"onUpdate()\" class=\"cl-icon-padding text-black\">\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input\n        type=\"text\"\n        name=\"websiteName\"\n        class=\"form-control\"\n        id=\"page-name\"\n        placeholder=\"Page Name\"\n        [(ngModel)]=\"page.name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input\n        type=\"text\"\n        name=\"websiteName\"\n        class=\"form-control\"\n        id=\"page-title\"\n        placeholder=\"Page Title\"\n        [(ngModel)]=\"page.title\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger  btn-block\" (click)=\"onDelete()\">Delete</a>\n</div>\n\n\n\n\n<nav class=\"navbar navbar-inverse navbar-light bg-light fixed-bottom float-right col-12\">\n  <div class=\"float-left col-12\"></div>\n  <div class=\"row navbar-text float-right col-12\">\n    <a routerLink=\"/user/{{uid}}\" class=\"float-right steelblue-icon\">\n      <span class=\"fas fa-user fontawsome_icon float-right steelblue-icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(activateRoute, pageService, router) {
        this.activateRoute = activateRoute;
        this.pageService = pageService;
        this.router = router;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
        this.pageService.findPageById(this.pid).subscribe(function (data) {
            _this.page = data;
        });
    };
    PageEditComponent.prototype.onUpdate = function () {
        var _this = this;
        this.pageService.updatePage(this.pid, this.page).subscribe(function (data) {
            _this.page = data;
        });
        this.router.navigate(['../'], { relativeTo: this.activateRoute });
    };
    PageEditComponent.prototype.onDelete = function () {
        this.pageService.deletePage(this.pid).subscribe(function (data) {
        });
        this.router.navigate(['../'], { relativeTo: this.activateRoute });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], PageEditComponent.prototype, "pageForm", void 0);
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/views/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nheader {\n  background-color: steelblue;\n  position: center;\n  color: white;\n  padding-top: 0px;\n}\n.navbar {\n  background-color: steelblue;\n  border-color: white;\n  color: white;\n}\n.above-below-space{\n  padding-bottom: 60px;\n  padding-top: 60px;\n}\n.box{\n  display: none;\n  width: 100%;\n}\na {\n  text-decoration: none;\n}\na:hover + .box,.box:hover{\n  display: block;\n  position: relative;\n  z-index: 100;\n  text-decoration: none;\n}\n.text-white{\n  color: white;\n}\n.steelblue-icon{\n  color: steelblue;\n}\na.blue-color a:hover{\n  text-decoration: none;\n}\na:hover {\n  color: grey;\n  text-decoration: none;\n}\n.visited {\n  color:grey;\n  text-decoration:none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLWxpc3QvcGFnZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFO0FBQzlFO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjtBQUlBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFJQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlL3BhZ2UtbGlzdC9wYWdlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hYm92ZS1iZWxvdy1zcGFjZXtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG5cblxuLmJveHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIgKyAuYm94LC5ib3g6aG92ZXJ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGV4dC13aGl0ZXtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3RlZWxibHVlLWljb257XG4gIGNvbG9yOiBzdGVlbGJsdWU7XG59XG5cbmEuYmx1ZS1jb2xvciBhOmhvdmVye1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogZ3JleTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cblxuLnZpc2l0ZWQge1xuICBjb2xvcjpncmV5O1xuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-light bg-light navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text float-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}\" class=\"text-black cl-icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand text-black font-weight-bold pl-2\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\">\n        Pages\n      </a>\n    </div>\n    <div class=\"navbar-text float-right\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/new\" class=\"cl-icon-padding text-black\">\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n\n<!--<div class=\" container-fluid cl-container-padding\">\n  <div>\n    <ul>\n      <li *ngFor=\"let page of pages\">\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\">\n          page: {{page.title}}\n        </a>\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}\">\n          <i class=\"fas fa-cog fontawsome_icon float-right\"></i>\n        </a>\n      </li>\n\n    </ul>\n  </div>\n</div>-->\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul *ngFor=\"let page of pages\" class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}\">\n        <i class=\"fas fa-cog fontawsome_icon float-right\"></i>\n      </a>\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}/widget\">\n        {{page.name}}\n      </a>\n    </li>\n  </ul>\n</div>\n\n\n\n<nav class=\"navbar navbar-inverse navbar-light bg-light fixed-bottom float-right col-12\">\n  <div class=\"float-left col-12\"></div>\n  <div class=\"row navbar-text float-right col-12\">\n    <a routerLink=\"/user/{{uid}}\" class=\"float-right steelblue-icon\">\n      <span class=\"fas fa-user fontawsome_icon float-right steelblue-icon\"></span>\n    </a>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");




var PageListComponent = /** @class */ (function () {
    function PageListComponent(activateRoute, pageService) {
        this.activateRoute = activateRoute;
        this.pageService = pageService;
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
        this.pageService.findAllPagesForWebsite(this.wid).subscribe(function (data) {
            _this.pages = data;
        });
        console.log(this.wid);
        console.log(this.pages);
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nheader {\n  background-color: steelblue;\n  position: center;\n  color: white;\n  padding-top: 0px;\n}\n.navbar {\n  background-color: steelblue;\n  border-color: white;\n  color: white;\n}\n.above-below-space{\n  padding-bottom: 60px;\n  padding-top: 60px;\n}\n.box{\n  display: none;\n  width: 100%;\n}\na {\n  text-decoration: none;\n}\na:hover + .box,.box:hover{\n  display: block;\n  position: relative;\n  z-index: 100;\n  text-decoration: none;\n}\n.text-white{\n  color: white;\n}\n.steelblue-icon{\n  color: steelblue;\n}\na.blue-color a:hover{\n  text-decoration: none;\n}\na:hover {\n  color: grey;\n  text-decoration: none;\n}\n.visited {\n  color:grey;\n  text-decoration:none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLW5ldy9wYWdlLW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7QUFJQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBSUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLW5ldy9wYWdlLW5ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xuICBwb3NpdGlvbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFib3ZlLWJlbG93LXNwYWNle1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG5cblxuXG4uYm94e1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciArIC5ib3gsLmJveDpob3ZlcntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50ZXh0LXdoaXRle1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdGVlbGJsdWUtaWNvbntcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcbn1cblxuYS5ibHVlLWNvbG9yIGE6aG92ZXJ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuXG4udmlzaXRlZCB7XG4gIGNvbG9yOmdyZXk7XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light\">\n  <div class = \"container-fluid row\">\n    <a routerLink=\"../\" class=\"navbar-text black-text pull-left icon-padding\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\"></span>\n    </a>\n    <a routerLink=\"./\" class=\"navbar-brand\">Edit Page</a>\n    <button (click)=\"createPage()\" [disabled]=\"!p.valid\" class=\"btn btn-light float-right cl-icon-padding\">\n      <span class=\"fas fa-check fontawsome_icon\"></span>\n    </button>\n  </div>\n</nav>\n\n<div class=\"container container-padding\">\n  <form (ngSubmit)=\"createPage()\" #p=\"ngForm\">\n    <label for=\"New-Page-Name\">Name</label>\n    <input id=\"New-Page-Name\" type=\"text\" class=\"form-control\" placeholder=\"Page Name\" name=\"pageName\" ngModel required #pageName=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!pageName.valid && pageName.touched\">\n      Please enter page name!\n    </span>\n    <label for=\"New-Page-Title\">Title</label>\n    <input id=\"New-Page-Title\" type=\"text\" class=\"form-control\" placeholder=\"Page Title\" name=\"pageDescription\" [(ngModel)]=\"pageDescription\"/>\n    <button class=\"btn btn-primary btn-block mt-3\" type=\"submit\" [disabled]=\"!p.valid\">Create</button>\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"../../../../\" class=\"navbar-link navbar-text cl-icon-padding\">\n      <span class=\"fas fa-user fontawsome_icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.ts ***!
  \***********************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(route, router, pageService) {
        this.route = route;
        this.router = router;
        this.pageService = pageService;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.developerId = params['uid'];
        });
    };
    PageNewComponent.prototype.createPage = function () {
        var _this = this;
        this.pageName = this.pageForm.value.pageName;
        this.pageDescription = this.pageForm.value.pageDescription;
        var page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('', this.pageName, this.websiteId, this.pageDescription, this.developerId);
        this.pageService.createPage(this.websiteId, page).subscribe(function (data) {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('p'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], PageNewComponent.prototype, "pageForm", void 0);
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/page/page-new/page-new.component.css")]
        })
        // export class PageNewComponent implements OnInit {
        //   @ViewChild('f') pageForm: NgForm;
        //
        //   uid: string;
        //   wid: string;
        //   pid: string;
        //   page: Page;
        //   pages: Page[] = [];
        //   newPageName: string;
        //   newPageTitle: string;
        //
        //
        //   constructor(private activateRoute: ActivatedRoute, private pageService: PageService,  private router: Router) { }
        //
        //   ngOnInit() {
        //     this.activateRoute.params.subscribe(
        //       (params: any) => {
        //         this.uid = params['uid'];
        //         this.wid = params['wid'];
        //       });
        //   }
        //
        //   onSubmit() {
        //     this.newPageName = this.pageForm.value.PageName;
        //     this.newPageTitle = this.pageForm.value.PageTitle;
        //     // @ts-ignore
        //     this.page = {_id: '', name: this.newPageName, websiteId: this.wid, description: this.newPageTitle, developerId: this.uid};
        //     this.pageService.createPage(this.uid, this.page).subscribe(
        //       (data: any) => {
        //         this.page = data;
        //         this.router.navigate(['../'], {relativeTo: this.activateRoute});
        //       }
        //     );
        //   }
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_page_service_client__WEBPACK_IMPORTED_MODULE_4__["PageService"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nheader {\n  background-color: steelblue;\n  position: center;\n  color: white;\n  padding-top: 0px;\n}\n.navbar {\n  background-color: steelblue;\n  border-color: white;\n  color: white;\n}\n.above-below-space{\n  padding-bottom: 60px;\n  padding-top: 60px;\n}\n.box{\n  display: none;\n  width: 100%;\n}\na {\n  text-decoration: none;\n}\na:hover + .box,.box:hover{\n  display: block;\n  position: relative;\n  z-index: 100;\n  text-decoration: none;\n}\n.text-white{\n  color: white;\n}\n.steelblue-icon{\n  color: steelblue;\n}\na.blue-color a:hover{\n  text-decoration: none;\n}\na:hover {\n  color: grey;\n  text-decoration: none;\n}\n.visited {\n  color:grey;\n  text-decoration:none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7QUFJQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBSUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xuICBwb3NpdGlvbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFib3ZlLWJlbG93LXNwYWNle1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG5cblxuXG4uYm94e1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciArIC5ib3gsLmJveDpob3ZlcntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50ZXh0LXdoaXRle1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdGVlbGJsdWUtaWNvbntcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcbn1cblxuYS5ibHVlLWNvbG9yIGE6aG92ZXJ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuXG4udmlzaXRlZCB7XG4gIGNvbG9yOmdyZXk7XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container above-below-space\">\n  <h1>Login</h1>\n  <input type=\"text\"\n         class=\"form-control\"\n         placeholder=\"username\"/>\n  <input type=\"password\"\n         class=\"form-control\"\n         placeholder=\"password\"/>\n  <a class=\"btn btn-primary btn-block\"\n     [routerLink]=\"['/user/:uid']\">Login</a>\n  <a class=\"btn btn-success btn-block\"\n     [routerLink]=\"['/register']\">Register</a>\n</div>-->\n\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n  <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"username\" placeholder=\"username\" class=\"form-control\" ngModel required #username=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <div class=\"form-group\">\n      <input type=\"password\" name=\"password\" placeholder=\"password\" class=\"form-control\" ngModel required #password=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-primary btn-block\" type=\"submit\">Login</button>\n    </div>\n\n    <div class=\"form-group\">\n      <a routerLink=\"/register\" class=\"btn btn-success btn-block\">Register</a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMsg = 'Invalid username or password !';
        this.errorFlag = false;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.findUserByCredentials(this.username, this.password).subscribe(function (user) {
            if (user) {
                _this.router.navigate(['/user', user._id]);
            }
            else {
                _this.errorFlag = true;
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nheader {\n  background-color: steelblue;\n  position: center;\n  color: white;\n  padding-top: 0px;\n}\n.navbar {\n  background-color: steelblue;\n  border-color: white;\n  color: white;\n}\n.above-below-space{\n  padding-bottom: 60px;\n  padding-top: 60px;\n}\n.box{\n  display: none;\n  width: 100%;\n}\na {\n  text-decoration: none;\n}\na:hover + .box,.box:hover{\n  display: block;\n  position: relative;\n  z-index: 100;\n  text-decoration: none;\n}\n.text-white{\n  color: white;\n}\n.steelblue-icon{\n  color: steelblue;\n}\na.blue-color a:hover{\n  text-decoration: none;\n}\na:hover {\n  color: grey;\n  text-decoration: none;\n}\n.visited {\n  color:grey;\n  text-decoration:none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7QUFDOUU7RUFDRSwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25CO0FBSUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2QjtBQUlBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XG4gIHBvc2l0aW9uOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWJvdmUtYmVsb3ctc3BhY2V7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cblxuXG5cbi5ib3h7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyICsgLmJveCwuYm94OmhvdmVye1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRleHQtd2hpdGV7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0ZWVsYmx1ZS1pY29ue1xuICBjb2xvcjogc3RlZWxibHVlO1xufVxuXG5hLmJsdWUtY29sb3IgYTpob3ZlcntcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6IGdyZXk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG5cbi52aXNpdGVkIHtcbiAgY29sb3I6Z3JleTtcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top cl-blue-navbar \">\n  <div class=\"container-fluid\">\n    <a class=\" navbar-brand cl-text-bold text-white float-left font-weight-bold\" routerLink=\"#\">\n      Profile\n    </a>\n    <a routerLink=\"/user/{{uid}}\" class=\"navbar-link float-left text-white font-weight-bold\">\n      <i class=\"fas fa-check fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container above-below-space\">\n  <header>\n\n  </header>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"alice@wonderland.com\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Alice\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Wonderland\">\n    </div>\n  </form>\n\n  <a class=\"btn btn-primary btn-block\"\n     routerLink=\"/user/{{uid}}/website\">Websites</a>\n  <a class=\"btn btn-danger  btn-block\"\n     routerLink=\"/login\">Logout</a>\n  <h1></h1>\n</div>\n\n<nav class=\"navbar fixed-bottom float-right col-12\">\n  <div class=\"container-fluid col-12\">\n    <div class=\"row navbar-text float-right col-12\">\n      <a routerLink=\"/user/{{uid}}\" class=\"float-right\">\n        <i class=\"fas fa-user fontawsome_icon float-right text-white col-12\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, userService, activateRoute) {
        this.router = router;
        this.userService = userService;
        this.activateRoute = activateRoute;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
        });
        this.userService.findUserById(this.uid).subscribe(function (data) {
            _this.user = data;
        });
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        console.log(this.user);
        this.userService.updateUser(this.uid, this.user).subscribe(function (user) {
            _this.user = user;
            _this.router.navigate(['/user', user._id]);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], ProfileComponent.prototype, "profileForm", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/user/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nheader {\n  background-color: steelblue;\n  position: center;\n  color: white;\n  padding-top: 0px;\n}\n.navbar {\n  background-color: steelblue;\n  border-color: white;\n  color: white;\n}\n.above-below-space{\n  padding-bottom: 60px;\n  padding-top: 60px;\n}\n.box{\n  display: none;\n  width: 100%;\n}\na {\n  text-decoration: none;\n}\na:hover + .box,.box:hover{\n  display: block;\n  position: relative;\n  z-index: 100;\n  text-decoration: none;\n}\n.text-white{\n  color: white;\n}\n.steelblue-icon{\n  color: steelblue;\n}\na.blue-color a:hover{\n  text-decoration: none;\n}\na:hover {\n  color: grey;\n  text-decoration: none;\n}\n.visited {\n  color:grey;\n  text-decoration:none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7QUFJQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBSUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xuICBwb3NpdGlvbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFib3ZlLWJlbG93LXNwYWNle1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG5cblxuXG4uYm94e1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciArIC5ib3gsLmJveDpob3ZlcntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50ZXh0LXdoaXRle1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdGVlbGJsdWUtaWNvbntcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcbn1cblxuYS5ibHVlLWNvbG9yIGE6aG92ZXJ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuXG4udmlzaXRlZCB7XG4gIGNvbG9yOmdyZXk7XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container above-below-space\">\n  <h1>Register</h1>\n\n  <form (ngSubmit) = \"onSubmit()\" #f=\"ngForm\">\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-dange\">\n    <span>Password does not match!</span>\n    </div>\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input placeholder=\"username\"\n             name=\"username\"\n             type=\"username\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input placeholder=\"password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\"/>\n    </div>\n  <div class=\"form-group\">\n    <label>Verify password</label>\n    <input placeholder=\" verify password\"\n         name=\"verify\"\n         type=\"password\"\n         class=\"form-control\"\n         ngModel\n         required\n         #password=\"ngModel\"/>\n  </div>\n\n  <button class=\"btn btn-primary btn-block\" type=\"submit\" routerLink=\"/user/{{uid}}\">Register</button>\n  <button class=\"btn btn-danger btn-block\" type=\"button\" routerLink=\"/login\">Cancel</button>\n\n\n\n</form></div>\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = { _id: '', username: '', password: '', firstName: '', lastName: '' };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.user.username = this.registerForm.value.username;
        this.user.password = this.registerForm.value.password;
        var verify = this.registerForm.value.verify;
        if (this.user.password === verify) {
            this.userService.createUser(this.user).subscribe(function (user) {
                _this.user = user;
            });
            this.userService.findUserByCredentials(this.user.username, this.user.password).subscribe(function (user) {
                _this.router.navigate(['/user', user._id]);
            });
        }
        else {
            this.errorFlag = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nheader {\n  background-color: steelblue;\n  position: center;\n  color: white;\n  padding-top: 0px;\n}\n.navbar {\n  background-color: steelblue;\n  border-color: white;\n  color: white;\n}\n.above-below-space{\n  padding-bottom: 60px;\n  padding-top: 60px;\n}\n.box{\n  display: none;\n  width: 100%;\n}\na {\n  text-decoration: none;\n}\na:hover + .box,.box:hover{\n  display: block;\n  position: relative;\n  z-index: 100;\n  text-decoration: none;\n}\n.text-white{\n  color: white;\n}\n.steelblue-icon{\n  color: steelblue;\n}\na.blue-color a:hover{\n  text-decoration: none;\n}\na:hover {\n  color: grey;\n  text-decoration: none;\n}\n.visited {\n  color:grey;\n  text-decoration:none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLWVkaXQvd2Vic2l0ZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFO0FBQzlFO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjtBQUlBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFJQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy93ZWJzaXRlL3dlYnNpdGUtZWRpdC93ZWJzaXRlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hYm92ZS1iZWxvdy1zcGFjZXtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG5cblxuLmJveHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIgKyAuYm94LC5ib3g6aG92ZXJ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGV4dC13aGl0ZXtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3RlZWxibHVlLWljb257XG4gIGNvbG9yOiBzdGVlbGJsdWU7XG59XG5cbmEuYmx1ZS1jb2xvciBhOmhvdmVye1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogZ3JleTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cblxuLnZpc2l0ZWQge1xuICBjb2xvcjpncmV5O1xuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\n  <div class=\"col-md-4 d-none d-md-block container-fluid\">\n    <a routerLink=\"/user/{{uid}}/\" class=\"navbar-link text-white\">\n      <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n    </a>\n    <a routerLink=\"/user/{{uid}}/website\" class=\"text-white navbar-brand font-weight-bold\">\n      Websites\n    </a>\n    <a routerLink=\"/user/{{uid}}/website/new\" class=\"navbar-link navbar-text float-right text-white cl-icon-padding\">\n      <i class=\"fas fa-plus fontawsome_icon text-white\"></i>\n    </a>\n  </div>\n  <div class=\"col-md-8 container-fluid\">\n    <a class=\"text-white navbar-brand font-weight-bold\" href=\"#\">\n      Edit Website\n    </a>\n    <a (click)=\"onUpdateWebsite()\" class=\"navbar-link navbar-text float-right text-white cl-icon-padding\">\n      <i class=\"fas fa-check fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"row container-fluid pt-2\">\n  <div class=\"col-md-4 d-none d-md-block border-right\">\n    <ul *ngFor=\"let website of websites\" class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">\n        <a routerLink=\"/user/{{uid}}/website/{{website._id}}\">\n          <i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n        <a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-md-8\">\n    <form #f=\"ngForm\">\n\n      <div class=\"form-group\">\n        <label for=\"website-name\">Website Name</label>\n        <input [(ngModel)]=\"website.name\"\n               [ngModelOptions]=\"{standalone: true}\"\n               type=\"text\" class=\"form-control\"\n               id=\"website-name\"\n               placeholder=\"{{website.name}}\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"website-description\">Website Description</label>\n        <textarea [(ngModel)]=\"website.description\"\n                  [ngModelOptions]=\"{standalone: true}\"\n                  id=\"website-description\"\n                  class=\"form-control\"\n                  rows=\"5\"\n                  placeholder=\"{{website.description}}\">\n        </textarea>\n      </div>\n\n\n\n\n\n\n      <a class=\"btn btn-danger btn-block text-white\"\n         (click)=\"onDelete()\">Delete</a>\n    </form>\n  </div>\n</div>\n\n\n\n<nav class=\"navbar fixed-bottom float-right col-12\">\n  <div class=\"container-fluid col-12\">\n    <div class=\"row navbar-text float-right col-12\">\n      <a routerLink=\"/user/{{uid}}\" class=\"float-right\">\n        <i class=\"fas fa-user fontawsome_icon float-right text-white col-12\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");





var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, route, router) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
        this.websiteService.findAllWebsitesForUser(this.uid).subscribe(function (data) {
            _this.websites = data;
        });
        this.websiteService.findWebsiteById(this.wid).subscribe(function (data) {
            _this.website = data;
        });
    };
    WebsiteEditComponent.prototype.onEditWebsite = function (websiteId) {
        var _this = this;
        this.websiteService.findWebsiteById(websiteId).subscribe(function (data) {
            _this.website = data;
        });
    };
    WebsiteEditComponent.prototype.onUpdateWebsite = function () {
        var _this = this;
        this.websiteService.updateWebsite(this.wid, this.website).subscribe(function (data) {
            _this.website = data;
        });
    };
    WebsiteEditComponent.prototype.onDelete = function () {
        this.websiteService.deleteWebsite(this.wid).subscribe(function (data) {
        });
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], WebsiteEditComponent.prototype, "websiteForm", void 0);
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/views/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_4__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nheader {\n  background-color: steelblue;\n  position: center;\n  color: white;\n  padding-top: 0px;\n}\n.navbar {\n  background-color: steelblue;\n  border-color: white;\n  color: white;\n}\n.above-below-space{\n  padding-bottom: 60px;\n  padding-top: 60px;\n}\n.box{\n  display: none;\n  width: 100%;\n}\na {\n  text-decoration: none;\n}\na:hover + .box,.box:hover{\n  display: block;\n  position: relative;\n  z-index: 100;\n  text-decoration: none;\n}\n.text-white{\n  color: white;\n}\n.steelblue-icon{\n  color: steelblue;\n}\na.blue-color a:hover{\n  text-decoration: none;\n}\na:hover {\n  color: grey;\n  text-decoration: none;\n}\n.visited {\n  color:grey;\n  text-decoration:none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLWxpc3Qvd2Vic2l0ZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFO0FBQzlFO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjtBQUlBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFJQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy93ZWJzaXRlL3dlYnNpdGUtbGlzdC93ZWJzaXRlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hYm92ZS1iZWxvdy1zcGFjZXtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG5cblxuLmJveHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIgKyAuYm94LC5ib3g6aG92ZXJ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGV4dC13aGl0ZXtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3RlZWxibHVlLWljb257XG4gIGNvbG9yOiBzdGVlbGJsdWU7XG59XG5cbmEuYmx1ZS1jb2xvciBhOmhvdmVye1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogZ3JleTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cblxuLnZpc2l0ZWQge1xuICBjb2xvcjpncmV5O1xuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top cl-blue-navbar \">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/user/{{uid}}\" class=\"navbar-link float-left text-white\">\n      <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n    </a>\n    <a class=\" font-weight-bold navbar-brand cl-text-bold text-white float-left pull-left col-11\" routerLink=\"#\">\n      Websites\n    </a>\n    <a routerLink=\"./new\" class=\"navbar-link float-left text-white\">\n      <i class=\"fas fa-plus fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n\n<!--<div class=\"container above-below-space\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page']\">Address Book App</a>\n      <a [routerLink]=\"['/user/:uid/website/:wid']\"><span class=\"fas fa-cog fontawsome_icon float-right\"></span></a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page']\">Blogger</a>\n      <a [routerLink]=\"['/user/:uid/website/:wid']\"><span class=\"fas fa-cog fontawsome_icon float-right\"></span></a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page']\">Blogging App</a>\n      <a [routerLink]=\"['/user/:uid/website/:wid']\"><span class=\"fas fa-cog fontawsome_icon float-right\"></span></a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a [routerLink]=\"['/user/:uid/website/:wid/page']\">Script Testing App</a>\n      <a [routerLink]=\"['/user/:uid/website/:wid']\"><span class=\"fas fa-cog fontawsome_icon float-right\"></span></a>\n    </li>\n  </ul>\n</div>-->\n\n<div class=\"container\" >\n  <ul class=\"list-group cl-list-group-borderless\" *ngFor=\"let website of websites\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"/user/{{uid}}/website/{{website._id}}\" ><span class=\"fas float-right fa-cogs\" ></span></a>\n      <a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\n\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom float-right col-12\">\n  <div class=\"container-fluid col-12\">\n    <div class=\"row navbar-text float-right col-12\">\n      <a routerLink=\"/user/{{uid}}\" class=\"float-right\">\n        <i class=\"fas fa-user fontawsome_icon float-right text-white col-12\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
        });
        this.websiteService.findAllWebsitesForUser(this.uid).subscribe(function (data) {
            console.log(data);
            _this.websites = data;
        });
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/views/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nheader {\n  background-color: steelblue;\n  position: center;\n  color: white;\n  padding-top: 0px;\n}\n.navbar {\n  background-color: steelblue;\n  border-color: white;\n  color: white;\n}\n.above-below-space{\n  padding-bottom: 60px;\n  padding-top: 60px;\n}\n.box{\n  display: none;\n  width: 100%;\n}\na {\n  text-decoration: none;\n}\na:hover + .box,.box:hover{\n  display: block;\n  position: relative;\n  z-index: 100;\n  text-decoration: none;\n}\n.text-white{\n  color: white;\n}\n.steelblue-icon{\n  color: steelblue;\n}\na.blue-color a:hover{\n  text-decoration: none;\n}\na:hover {\n  color: grey;\n  text-decoration: none;\n}\n.visited {\n  color:grey;\n  text-decoration:none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLW5ldy93ZWJzaXRlLW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7QUFJQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBSUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLW5ldy93ZWJzaXRlLW5ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xuICBwb3NpdGlvbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFib3ZlLWJlbG93LXNwYWNle1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG5cblxuXG4uYm94e1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciArIC5ib3gsLmJveDpob3ZlcntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50ZXh0LXdoaXRle1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdGVlbGJsdWUtaWNvbntcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcbn1cblxuYS5ibHVlLWNvbG9yIGE6aG92ZXJ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuXG4udmlzaXRlZCB7XG4gIGNvbG9yOmdyZXk7XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\n  <div class=\"col-md-4 d-none d-md-block container-fluid\">\n    <a routerLink=\"/user/{{uid}}/website\" class=\"navbar-link text-white\">\n      <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n    </a>\n    <a routerLink=\"/user/{{uid}}/website/\" class=\"text-white navbar-brand font-weight-bold\">\n      Websites\n    </a>\n    <a href=\"#\" class=\"navbar-link navbar-text float-right text-white cl-icon-padding\">\n      <i class=\"fas fa-plus fontawsome_icon text-white\"></i>\n    </a>\n  </div>\n  <div class=\"col-md-8 container-fluid\">\n    <a class=\"text-white navbar-brand font-weight-bold\" href=\"#\">\n      New Websites\n    </a>\n    <a class=\"navbar-link navbar-text float-right text-white cl-icon-padding\">\n      <i class=\"fas fa-check fontawsome_icon \" (click)=\"onSubmit()\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"row container-fluid pt-2\">\n  <div class=\"col-md-4 d-none d-md-block border-right\">\n    <ul class=\"list-group cl-list-group-borderless\">\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\">Blogging App</a>\n      </li>\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\">Address Book App</a>\n      </li>\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\">Script Testing App</a>\n      </li>\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n        <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\">Blogger</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-md-8\">\n    <form #f=\"ngForm\">\n\n      <div class=\"form-group\">\n        <label>Name</label>\n        <input placeholder=\"Website Name\"\n               name=\"WebsiteName\"\n               type=\"text\"\n               class=\"form-control\"\n               ngModel\n               required\n               #WebsiteName=\"ngModel\"/>\n      </div>\n      <div class=\"form-group\">\n        <label>Description</label>\n        <input placeholder=\"Website Description\"\n               name=\"Description\"\n               type=\"text\"\n               class=\"form-control\"\n               ngModel\n               required\n               #Description=\"ngModel\"/>\n      </div>\n\n    </form>\n  </div>\n</div>\n\n\n\n<nav class=\"navbar fixed-bottom float-right col-12\">\n  <div class=\"container-fluid col-12\">\n    <div class=\"row navbar-text float-right col-12\">\n      <a routerLink=\"/user/{{uid}}\" class=\"float-right\">\n        <i class=\"fas fa-user fontawsome_icon float-right text-white col-12\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.ts ***!
  \********************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");





var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, route, router) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
        });
        this.websiteService.findAllWebsitesForUser(this.uid).subscribe(function (data) {
            _this.websites = data;
        });
    };
    WebsiteNewComponent.prototype.onSubmit = function () {
        var _this = this;
        this.newWebsiteName = this.websitesForm.value.WebsiteName;
        this.newWebsiteDescription = this.websitesForm.value.Description;
        this.newWebsite = { _id: '', name: this.newWebsiteName, developerId: this.uid, description: this.newWebsiteDescription };
        // this.websiteService.createWebsite(this.uid, this.newWebsite);
        this.websiteService.createWebsite(this.uid, this.newWebsite).subscribe(function (newWebsite) {
            _this.newWebsite = newWebsite;
        });
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WebsiteNewComponent.prototype, "websitesForm", void 0);
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_4__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nheader {\n  background-color: steelblue;\n  position: center;\n  color: white;\n  padding-top: 0px;\n}\n.navbar {\n  background-color: steelblue;\n  border-color: white;\n  color: white;\n}\n.above-below-space{\n  padding-bottom: 60px;\n  padding-top: 60px;\n}\n.box{\n  display: none;\n  width: 100%;\n}\na {\n  text-decoration: none;\n}\na:hover + .box,.box:hover{\n  display: block;\n  position: relative;\n  z-index: 100;\n  text-decoration: none;\n}\n.text-white{\n  color: white;\n}\n.steelblue-icon{\n  color: steelblue;\n}\na.blue-color a:hover{\n  text-decoration: none;\n}\na:hover {\n  color: grey;\n  text-decoration: none;\n}\n.visited {\n  color:grey;\n  text-decoration:none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1jaG9vc2VyL3dpZGdldC1jaG9vc2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFO0FBQzlFO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjtBQUlBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFJQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy93aWRnZXQvd2lkZ2V0LWNob29zZXIvd2lkZ2V0LWNob29zZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hYm92ZS1iZWxvdy1zcGFjZXtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG5cblxuLmJveHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIgKyAuYm94LC5ib3g6aG92ZXJ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGV4dC13aGl0ZXtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3RlZWxibHVlLWljb257XG4gIGNvbG9yOiBzdGVlbGJsdWU7XG59XG5cbmEuYmx1ZS1jb2xvciBhOmhvdmVye1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogZ3JleTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cblxuLnZpc2l0ZWQge1xuICBjb2xvcjpncmV5O1xuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-light bg-light navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text float-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\" class=\"text-black cl-icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand text-black font-weight-bold pl-2\" href=\"#\">\n        Choose Widget\n      </a>\n    </div>\n    <div class=\"navbar-text float-right\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}\" class=\"cl-icon-padding text-black\">\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless cl-text-blue\" >\n      <a (click)=\"onSubmit('HEADING')\">Header</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless cl-text-blue\" >\n      <a (click)=\"onSubmit('IMAGE')\">Image</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless cl-text-blue\">\n      <a (click)=\"onSubmit('YOUTUBE')\">YouTube</a>\n    </li>\n  </ul>\n</div>\n\n\n\n\n\n\n\n\n\n<nav class=\"navbar navbar-inverse navbar-light bg-light fixed-bottom float-right col-12\">\n  <div class=\"float-left navbar-text\">\n  </div>\n  <div class=\"row navbar-text float-right\">\n    <a routerLink=\"/user/{{uid}}\" class=\"float-right steelblue-icon\">\n      <span class=\"fas fa-user fontawsome_icon float-right steelblue-icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.ts ***!
  \*************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(activateRoute, widgetService, router) {
        this.activateRoute = activateRoute;
        this.widgetService = widgetService;
        this.router = router;
        this.widgets = [];
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            console.log('widget edit params:" ');
            console.log(params);
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
        });
    };
    // onSubmit(type: string) {
    //   this.widget = {name: '', _id: '', widgetType: type, pageId: this.pid, };
    //   this.widgetService.createWidget(this.pid, this.widget).subscribe(
    //     (data: any) => {
    //       this.widget = data;
    //     }
    //   );
    //   this.router.navigate(['../' + this.widget._id], {relativeTo: this.activateRoute});
    // }
    WidgetChooserComponent.prototype.onSubmit = function (type) {
        var _this = this;
        console.log(type);
        // const page = new Page('', this.pageName, this.websiteId, this.pageDescription, this.developerId);
        // @ts-ignore
        // this.widget = new Widget('', '', type, this.pid);
        console.log('Making a new widget');
        this.widgetService.createWidget(this.pid, this.widget, type).subscribe(function (data) {
            console.log('inside the brakets');
            _this.widget = data;
            console.log(_this.widget);
            _this.wgid = data._id;
            // console.log(this.wgid);
            _this.router.navigate(['../' + _this.widget._id], { relativeTo: _this.activateRoute });
        });
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nheader {\n  background-color: steelblue;\n  position: center;\n  color: white;\n  padding-top: 0px;\n}\n.navbar {\n  background-color: steelblue;\n  border-color: white;\n  color: white;\n}\n.above-below-space{\n  padding-bottom: 60px;\n  padding-top: 60px;\n}\n.box{\n  display: none;\n  width: 100%;\n}\na {\n  text-decoration: none;\n}\na:hover + .box,.box:hover{\n  display: block;\n  position: relative;\n  z-index: 100;\n  text-decoration: none;\n}\n.text-white{\n  color: white;\n}\n.steelblue-icon{\n  color: steelblue;\n}\na.blue-color a:hover{\n  text-decoration: none;\n}\na:hover {\n  color: grey;\n  text-decoration: none;\n}\n.visited {\n  color:grey;\n  text-decoration:none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFO0FBQzlFO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjtBQUlBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFJQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy93aWRnZXQvd2lkZ2V0LWVkaXQvd2lkZ2V0LWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hYm92ZS1iZWxvdy1zcGFjZXtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG5cblxuLmJveHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIgKyAuYm94LC5ib3g6aG92ZXJ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGV4dC13aGl0ZXtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3RlZWxibHVlLWljb257XG4gIGNvbG9yOiBzdGVlbGJsdWU7XG59XG5cbmEuYmx1ZS1jb2xvciBhOmhvdmVye1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogZ3JleTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cblxuLnZpc2l0ZWQge1xuICBjb2xvcjpncmV5O1xuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngIf=\"widget !== undefined\" [ngSwitch]=\"widget.widgetType\">\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n  <!--<div *ngSwitchCase=\"HTML\">\n    <app-widget-html></app-widget-html>\n  </div>-->\n</div>\n\n<nav class=\"navbar navbar-inverse navbar-light bg-light fixed-bottom float-right col-12\">\n  <div class=\"float-left navbar-text\">\n  </div>\n  <div class=\"row navbar-text float-right\">\n    <a routerLink=\"/user/{{uid}}\" class=\"float-right steelblue-icon\">\n      <span class=\"fas fa-user fontawsome_icon float-right steelblue-icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(activateRoute, widgetService) {
        this.activateRoute = activateRoute;
        this.widgetService = widgetService;
        this.widgets = [];
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
        });
        console.log('before finding widgets in edit component');
        this.widgetService.findWidgetById(this.wgid).subscribe(function (data) {
            _this.widget = data;
            console.log(data);
        });
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/views/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/views/widget/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nheader {\n  background-color: steelblue;\n  position: center;\n  color: white;\n  padding-top: 0px;\n}\n.navbar {\n  background-color: steelblue;\n  border-color: white;\n  color: white;\n}\n.above-below-space{\n  padding-bottom: 60px;\n  padding-top: 60px;\n}\n.box{\n  display: none;\n  width: 100%;\n}\na {\n  text-decoration: none;\n}\na:hover + .box,.box:hover{\n  display: block;\n  position: relative;\n  z-index: 100;\n  text-decoration: none;\n}\n.text-white{\n  color: white;\n}\n.steelblue-icon{\n  color: steelblue;\n}\na.blue-color a:hover{\n  text-decoration: none;\n}\na:hover {\n  color: grey;\n  text-decoration: none;\n}\n.visited {\n  color:grey;\n  text-decoration:none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1oZWFkZXIvd2lkZ2V0LWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7QUFJQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBSUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1oZWFkZXIvd2lkZ2V0LWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xuICBwb3NpdGlvbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFib3ZlLWJlbG93LXNwYWNle1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG5cblxuXG4uYm94e1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciArIC5ib3gsLmJveDpob3ZlcntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50ZXh0LXdoaXRle1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdGVlbGJsdWUtaWNvbntcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcbn1cblxuYS5ibHVlLWNvbG9yIGE6aG92ZXJ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiBncmV5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuXG4udmlzaXRlZCB7XG4gIGNvbG9yOmdyZXk7XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-light bg-light navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text float-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\" class=\"text-black cl-icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand text-black font-weight-bold pl-2\" routerLink=\"./\">\n        Widget Edit\n      </a>\n    </div>\n    <div class=\"navbar-text float-right\">\n      <a (click)=\"onUpdateWidget()\" class=\"cl-icon-padding text-black\">\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetName\"\n        placeholder=\"Widget Name\"\n        [(ngModel)]=\"newWidgetName\">\n    </div>\n    <div class=\"form-group\">\n      <label>Text</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetText\"\n        placeholder=\"Widget Text\"\n        [(ngModel)]=\"newWidgetText\">\n    </div>\n    <div class=\"form-group\">\n      <label>Size</label>\n      <input\n        type=\"number\"\n        class=\"form-control\"\n        name=\"widgetSize\"\n        placeholder=\"Widget Size\"\n        [(ngModel)]=\"newWidgetSize\">\n    </div>\n    <button class=\"btn btn-danger btn-block\" (click)=\"onDelete()\">Delete</button>\n  </form>\n</div>\n\n<nav class=\"navbar navbar-inverse navbar-light bg-light fixed-bottom float-right col-12\">\n  <div class=\"float-left navbar-text\">\n  </div>\n  <div class=\"row navbar-text float-right\">\n    <a routerLink=\"/user/{{uid}}\" class=\"float-right steelblue-icon\">\n      <span class=\"fas fa-user fontawsome_icon float-right steelblue-icon\"></span>\n    </a>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WidgetHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeadingComponent", function() { return WidgetHeadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");





var WidgetHeadingComponent = /** @class */ (function () {
    function WidgetHeadingComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetHeadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
        });
        if (this.wgid !== 'undefined') {
            this.widgetService.findWidgetById(this.wgid).subscribe(function (data) {
                _this.widget = data;
            });
        }
    };
    WidgetHeadingComponent.prototype.onUpdateWidget = function () {
        var _this = this;
        this.newWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["WidgetHeading"](this.newWidgetName, this.wgid, 'HEADING', this.pid, this.newWidgetSize, this.newWidgetText);
        this.widgetService.updateWidget(this.wgid, this.newWidget).subscribe(function (data) {
            _this.widget = data;
        });
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    WidgetHeadingComponent.prototype.onDelete = function () {
        this.widgetService.deleteWidget(this.wgid).subscribe(function (data) {
        });
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    WidgetHeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetHeadingComponent);
    return WidgetHeadingComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nheader {\n  background-color: steelblue;\n  position: center;\n  color: white;\n  padding-top: 0px;\n}\n.navbar {\n  background-color: steelblue;\n  border-color: white;\n  color: white;\n}\n.above-below-space{\n  padding-bottom: 60px;\n  padding-top: 60px;\n}\n.box{\n  display: none;\n  width: 100%;\n}\na {\n  text-decoration: none;\n}\na:hover + .box,.box:hover{\n  display: block;\n  position: relative;\n  z-index: 100;\n  text-decoration: none;\n}\n.text-white{\n  color: white;\n}\n.steelblue-icon{\n  color: steelblue;\n}\na.blue-color a:hover{\n  text-decoration: none;\n}\na:hover {\n  color: grey;\n  text-decoration: none;\n}\n.visited {\n  color:grey;\n  text-decoration:none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1pbWFnZS93aWRnZXQtaW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7QUFDOUU7RUFDRSwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25CO0FBSUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2QjtBQUlBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaW1hZ2Uvd2lkZ2V0LWltYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XG4gIHBvc2l0aW9uOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWJvdmUtYmVsb3ctc3BhY2V7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cblxuXG5cbi5ib3h7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyICsgLmJveCwuYm94OmhvdmVye1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRleHQtd2hpdGV7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0ZWVsYmx1ZS1pY29ue1xuICBjb2xvcjogc3RlZWxibHVlO1xufVxuXG5hLmJsdWUtY29sb3IgYTpob3ZlcntcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6IGdyZXk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG5cbi52aXNpdGVkIHtcbiAgY29sb3I6Z3JleTtcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-light bg-light navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text float-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\" class=\"text-black cl-icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand text-black font-weight-bold pl-2\" routerLink=\"./\">\n        Widget Edit\n      </a>\n    </div>\n    <div class=\"navbar-text float-right\">\n      <a (click)=\"onUpdateWidget()\" class=\"cl-icon-padding text-black\">\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetName\"\n        placeholder=\"Widget Name\"\n        [(ngModel)]=\"newWidget.name\">\n    </div>\n    <div class=\"form-group\">\n      <label>Text</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetText\"\n        placeholder=\"Widget Text\"\n        [(ngModel)]=\"newWidget.widgetType\">\n    </div>\n    <div class=\"form-group\">\n      <label>URL</label>\n      <input\n        type=\"url\"\n        class=\"form-control\"\n        name=\"widgetURL\"\n        placeholder=\"Widget URL\"\n        [(ngModel)]=\"newWidget.url\">\n    </div>\n    <div class=\"form-group\">\n      <label>Width</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetWidth\"\n        placeholder=\"Widget Width\"\n        [(ngModel)]=\"newWidget.width\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"WidgetImageUpload\">Upload</label>\n      <form ngNoForm action=\"{{baseUrl}}api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n        <input  name=\"myFile\" id=\"WidgetImageUpload\" placeholder=\"No file chosen\" type=\"file\" class=\"form-control\"/>\n        <input  name=\"widgetId\" value=\"{{wgid}}\"   style=\"display: none\"/>\n        <input  name=\"websiteId\" value=\"{{wid}}\"   style=\"display: none\"/>\n        <input  name=\"pageId\" value=\"{{pid}}\"   style=\"display: none\"/>\n        <input  name=\"userId\" value=\"{{uid}}\"   style=\"display: none\"/>\n        <button type=\"submit\" class=\"btn btn-block btn-primary mt-2\">Upload Image</button>\n      </form>\n      <button class=\"btn btn-danger btn-block\" (click)=\"onDelete()\">Delete</button>\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar navbar-inverse navbar-light bg-light fixed-bottom float-right col-12\">\n  <div class=\"float-left navbar-text\">\n  </div>\n  <div class=\"row navbar-text float-right\">\n    <a routerLink=\"/user/{{uid}}\" class=\"float-right steelblue-icon\">\n      <span class=\"fas fa-user fontawsome_icon float-right steelblue-icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");






var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
        this.newWidgetWidth = '';
        this.newWidgetURL = '';
        this.newWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["WidgetImage"](this.newWidgetName, '', 'IMAGE', this.pid, this.newWidgetWidth, '');
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wgid = params['wgid'];
            _this.pid = params['pid'];
            _this.wid = params['wid'];
        });
        if (this.wgid !== 'undefined') {
            this.widgetService.findWidgetById(this.wgid).subscribe(function (data) {
                _this.widget = data;
            });
        }
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
    };
    WidgetImageComponent.prototype.onUpdateWidget = function () {
        var _this = this;
        this.URL = ((this.newWidgetURL === 'undefined') ? this.localPath : this.newWidgetURL);
        this.newWidget.url = this.URL;
        this.widgetService.updateWidget(this.wgid, this.newWidget).subscribe(function (data) {
            _this.widget = data;
        });
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    WidgetImageComponent.prototype.onDelete = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid).subscribe(function (data) {
            _this.router.navigate(['/user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nheader {\n  background-color: steelblue;\n  position: center;\n  color: white;\n  padding-top: 0px;\n}\n.navbar {\n  background-color: steelblue;\n  border-color: white;\n  color: white;\n}\n.above-below-space{\n  padding-bottom: 60px;\n  padding-top: 60px;\n}\n.box{\n  display: none;\n  width: 100%;\n}\na {\n  text-decoration: none;\n}\na:hover + .box,.box:hover{\n  display: block;\n  position: relative;\n  z-index: 100;\n  text-decoration: none;\n}\n.text-white{\n  color: white;\n}\n.steelblue-icon{\n  color: steelblue;\n}\na.blue-color a:hover{\n  text-decoration: none;\n}\na:hover {\n  color: grey;\n  text-decoration: none;\n}\n.visited {\n  color:grey;\n  text-decoration:none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC15b3V0dWJlL3dpZGdldC15b3V0dWJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFO0FBQzlFO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjtBQUlBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFJQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy93aWRnZXQvd2lkZ2V0LWVkaXQvd2lkZ2V0LXlvdXR1YmUvd2lkZ2V0LXlvdXR1YmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hYm92ZS1iZWxvdy1zcGFjZXtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG5cblxuLmJveHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIgKyAuYm94LC5ib3g6aG92ZXJ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGV4dC13aGl0ZXtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3RlZWxibHVlLWljb257XG4gIGNvbG9yOiBzdGVlbGJsdWU7XG59XG5cbmEuYmx1ZS1jb2xvciBhOmhvdmVye1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogZ3JleTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cblxuLnZpc2l0ZWQge1xuICBjb2xvcjpncmV5O1xuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-light bg-light navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text float-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\" class=\"text-black cl-icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand text-black font-weight-bold pl-2\" routerLink=\"./\">\n        Widget Edit\n      </a>\n    </div>\n    <div class=\"navbar-text float-right\">\n      <a (click)=\"onUpdateWidget()\" class=\"cl-icon-padding text-black\">\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetName\"\n        placeholder=\"Widget Name\"\n        [(ngModel)]=\"newWidget.name\">\n    </div>\n    <div class=\"form-group\">\n      <label>Text</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetText\"\n        placeholder=\"Widget Text\"\n        [(ngModel)]=\"newWidget.widgetType\">\n    </div>\n    <div class=\"form-group\">\n      <label>URL</label>\n      <input\n        type=\"url\"\n        class=\"form-control\"\n        name=\"widgetURL\"\n        placeholder=\"Widget URL\"\n        [(ngModel)]=\"newWidget.url\">\n    </div>\n    <div class=\"form-group\">\n      <label>Width</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetWidth\"\n        placeholder=\"Widget Width\"\n        [(ngModel)]=\"newWidget.width\">\n    </div>\n    <div class=\"form-group\">\n      <label>Upload</label>\n      <div class=\"file-upload\">\n        <div class=\"file-upload\">\n          <input type=\"file\"\n                 id=\"avatar\" name=\"avatar\"\n                 accept=\"image/png, image/jpeg\"\n                 (change)=\"handleUpload($event)\">\n        </div>\n      </div>\n      <button class=\"btn btn-primary btn-block\" >Upload Image</button>\n      <button class=\"btn btn-danger btn-block\" (click)=\"onDelete()\">Delete</button>\n    </div>\n  </form>\n</div>\n\n\n\n\n\n\n\n<nav class=\"navbar navbar-inverse navbar-light bg-light fixed-bottom float-right col-12\">\n  <div class=\"float-left navbar-text\">\n  </div>\n  <div class=\"row navbar-text float-right\">\n    <a [routerLink]=\"['/user/:userId']\" class=\"float-right steelblue-icon\">\n      <span class=\"fas fa-user fontawsome_icon float-right steelblue-icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");






// @ts-ignore
var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
        this.newWidgetWidth = '';
        this.newWidgetURL = '';
        this.newWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["WidgetYoutube"](this.newWidgetName, '', 'YOUTUBE', this.pid, this.newWidgetWidth, '');
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wgid = params['wgid'];
            _this.pid = params['pid'];
            _this.wid = params['wid'];
        });
        if (this.wgid !== 'undefined') {
            this.widgetService.findWidgetById(this.wgid).subscribe(function (data) {
                _this.widget = data;
            });
        }
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
    };
    WidgetYoutubeComponent.prototype.onUpdateWidget = function () {
        var _this = this;
        this.newWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["WidgetYoutube"](this.newWidgetName, '', 'YOUTUBE', this.pid, this.newWidgetWidth, this.newWidgetURL);
        this.widgetService.updateWidget(this.wgid, this.newWidget).subscribe(function (data) {
            _this.widget = data;
        });
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    WidgetYoutubeComponent.prototype.onDelete = function () {
        this.widgetService.deleteWidget(this.wgid).subscribe(function (data) {
        });
        this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nheader {\n  background-color: steelblue;\n  position: center;\n  color: white;\n  padding-top: 0px;\n}\n.navbar {\n  background-color: steelblue;\n  border-color: white;\n  color: white;\n}\n.above-below-space{\n  padding-bottom: 60px;\n  padding-top: 60px;\n}\n.box{\n  display: none;\n  width: 100%;\n}\na {\n  text-decoration: none;\n}\na:hover + .box,.box:hover{\n  display: block;\n  position: relative;\n  z-index: 100;\n  text-decoration: none;\n}\n.text-white{\n  color: white;\n}\n.steelblue-icon{\n  color: steelblue;\n}\na.blue-color a:hover{\n  text-decoration: none;\n}\na:hover {\n  color: grey;\n  text-decoration: none;\n}\n.visited {\n  color:grey;\n  text-decoration:none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFO0FBQzlFO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjtBQUlBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFJQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy93aWRnZXQvd2lkZ2V0LWxpc3Qvd2lkZ2V0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hYm92ZS1iZWxvdy1zcGFjZXtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG5cblxuLmJveHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIgKyAuYm94LC5ib3g6aG92ZXJ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGV4dC13aGl0ZXtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3RlZWxibHVlLWljb257XG4gIGNvbG9yOiBzdGVlbGJsdWU7XG59XG5cbmEuYmx1ZS1jb2xvciBhOmhvdmVye1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogZ3JleTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cblxuLnZpc2l0ZWQge1xuICBjb2xvcjpncmV5O1xuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-light bg-light navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text float-left\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}\" class=\"text-black cl-icon-padding\">\n        <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n      </a>\n      <a class=\"navbar-brand text-black font-weight-bold pl-2\" routerLink=\"./\">\n        Widgets\n      </a>\n    </div>\n    <div class=\"navbar-text float-right\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\" class=\"cl-icon-padding text-black\">\n        <i class=\"fas fa-plus fontawsome_icon\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding\">\n  <div class=\"widget-list\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n    <div *ngFor=\"let widget of widgets | orderBy\">\n      <div [ngSwitch]=\"widget.widgetType\">\n        <div class=\"float-right\">\n          <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\">\n            <i class=\"fas fa-cog fontawsome_icon\"></i>\n          </a>\n        </div>\n        <div *ngSwitchCase=\"'HEADING'\">\n          <div [ngSwitch]=\"widget.size\">\n            <div *ngSwitchCase=\"1\">\n              <h1>{{widget.text}}</h1>\n            </div>\n            <div *ngSwitchCase=\"2\">\n              <h2>{{widget.text}}</h2>\n            </div>\n            <div *ngSwitchCase=\"3\">\n              <h3>{{widget.text}}</h3>\n            </div>\n            <div *ngSwitchCase=\"4\">\n              <h4>{{widget.text}}</h4>\n            </div>\n            <div *ngSwitchCase=\"5\">\n              <h5>{{widget.text}}</h5>\n            </div>\n            <div *ngSwitchCase=\"6\">\n              <h6>{{widget.text}}</h6>\n            </div>\n          </div>\n        </div>\n        <img *ngSwitchCase=\"'IMAGE'\" src=\"{{widget.url}}\">\n        <div *ngSwitchCase=\"'YOUTUBE'\">\n          <iframe width=\"640\" height=\"360\" [src]='sanitizer.bypassSecurityTrustResourceUrl(widget.url)' frameborder=\"0\"\n                  allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                  allowfullscreen></iframe>\n        </div>\n        <p *ngSwitchDefault><br></p>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<nav class=\"navbar navbar-inverse navbar-light bg-light fixed-bottom float-right col-12\">\n  <div class=\"float-left navbar-text\">\n    <a routerLink=\"./\" class=\"cl-icon-padding\">\n      <span class=\"fas fa-play\"></span>\n    </a>\n    <a routerLink=\"./\" class=\"cl-icon-padding pl-2\">\n      <span class=\"fas fa-eye\"></span>\n    </a>\n\n  </div>\n  <div class=\"row navbar-text float-right\">\n    <a routerLink=\"/user/{{uid}}\" class=\"float-right steelblue-icon\">\n      <span class=\"fas fa-user fontawsome_icon float-right steelblue-icon\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(activateRoute, widgetService, sanitizer) {
        this.activateRoute = activateRoute;
        this.widgetService = widgetService;
        this.sanitizer = sanitizer;
        this.widgets = [];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('start of the function');
        this.activateRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
        console.log('middle of function');
        this.widgetService.findAllWidgetsForPage(this.pid).subscribe(function (data) {
            _this.widgets = data;
            console.log(data);
        });
    };
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        var _this = this;
        this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pid).subscribe(function (data) {
            console.log('reorder' + data);
            _this.widgets = data;
        });
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], WidgetListComponent);
    return WidgetListComponent;
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
    // baseUrl: 'https://bslam-cs5610-spr19.herokuapp.com/',
    baseUrl: 'http://localhost:3200/'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/brian/Desktop/cs5610-LAM-BRIAN/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map