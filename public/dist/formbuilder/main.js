(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _edit_app_edit_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-app/edit-app.component */ "./src/app/edit-app/edit-app.component.ts");
/* harmony import */ var _view_form_view_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-form/view-form.component */ "./src/app/view-form/view-form.component.ts");
/* harmony import */ var _userhome_userhome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userhome/userhome.component */ "./src/app/userhome/userhome.component.ts");
/* harmony import */ var _submit_form_submit_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./submit-form/submit-form.component */ "./src/app/submit-form/submit-form.component.ts");
/* harmony import */ var _viewallsub_viewallsub_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./viewallsub/viewallsub.component */ "./src/app/viewallsub/viewallsub.component.ts");
/* harmony import */ var _guest_page_guest_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guest-page/guest-page.component */ "./src/app/guest-page/guest-page.component.ts");











var routes = [
    { path: '', redirectTo: "login", pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'user', component: _edit_app_edit_app_component__WEBPACK_IMPORTED_MODULE_5__["EditAppComponent"] },
    { path: 'home', component: _userhome_userhome_component__WEBPACK_IMPORTED_MODULE_7__["UserhomeComponent"] },
    { path: 'view/:id', component: _view_form_view_form_component__WEBPACK_IMPORTED_MODULE_6__["ViewFormComponent"] },
    { path: 'form/:id', component: _submit_form_submit_form_component__WEBPACK_IMPORTED_MODULE_8__["SubmitFormComponent"] },
    { path: 'viewall/:id', component: _viewallsub_viewallsub_component__WEBPACK_IMPORTED_MODULE_9__["ViewallsubComponent"] },
    { path: 'guest', component: _guest_page_guest_page_component__WEBPACK_IMPORTED_MODULE_10__["GuestPageComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
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

module.exports = "html, body { height: 100%; }\n.spacer{\n  flex: 1 1 auto;\n}\n.app-toolbar {\n  position: sticky;\n  position: -webkit-sticky; /* For macOS/iOS Safari */\n  top: 0; /* Sets the sticky toolbar to be on top */\n  z-index: 1000; /* Ensure that your app's content doesn't overlap the toolbar */\n}\n:host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\nh1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\np {\n    margin: 0;\n  }\n.spacer {\n    flex: 1;\n  }\n.toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n.toolbar img {\n    margin: 0 16px;\n  }\n.toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n.toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n.content {\n    display: flex;\n    margin:  auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    /* align-items: center; */\n  }\n.green{\n    background-color: #556091;\n    color: white;\n    padding: 0px;\n    width: 300px;\n    font-size: 13px;\n  }\n.mat-card {\n    max-width: 250px;\n    margin: 5px 10px auto;\n    align-self: auto;\n  }\n.mat-card-avatar{\n    background-image: url('formhead.jpg');\n    background-size: cover;\n  }\n.mat-card-actions{\n    display: flex;\n  }\n.mat-card-actions .flex-spacer{\n    width: 100%;\n  }\nsvg.material-icons {\n    height: 24px;\n    width: auto;\n  }\nsvg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n.card svg.material-icons path {\n    fill: #888;\n  }\nsvg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n/* Responsive Styles */\n@media screen and (max-width: 767px) {\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n    svg#rocket-smoke {\n      right: 120px;\n      -webkit-transform: rotate(-5deg);\n              transform: rotate(-5deg);\n    }\n  }\n@media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYSxhQUFhLEVBQUU7QUFDNUI7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCLENBQUMsMEJBQTBCO0VBQ3BELE9BQU8sQ0FBQywwQ0FBMEM7RUFDbEQsY0FBYyxDQUFDLGdFQUFnRTtDQUNoRjtBQUNEO0lBQ0ksMkpBQTJKO0lBQzNKLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQyxtQ0FBbUM7R0FDcEM7QUFDRDs7Ozs7O0lBTUUsY0FBYztHQUNmO0FBQ0Q7SUFDRSxVQUFVO0dBQ1g7QUFDRDtJQUNFLFFBQVE7R0FDVDtBQUNEO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsaUJBQWlCO0dBQ2xCO0FBQ0Q7SUFDRSxlQUFlO0dBQ2hCO0FBQ0Q7SUFDRSxhQUFhO0lBQ2IsZUFBZTtHQUNoQjtBQUNEO0lBQ0UsYUFBYTtHQUNkO0FBQ0Q7SUFDRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtHQUMzQjtBQUNEO0lBQ0UsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtHQUNqQjtBQUNEO0lBQ0UsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixpQkFBaUI7R0FDbEI7QUFDRDtJQUNFLHNDQUFrRDtJQUNsRCx1QkFBdUI7R0FDeEI7QUFDRDtJQUNFLGNBQWM7R0FDZjtBQUNEO0lBQ0UsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxhQUFhO0lBQ2IsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxrQkFBa0I7R0FDbkI7QUFDRDtJQUNFLFdBQVc7R0FDWjtBQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsYUFBYTtJQUNiLGNBQWM7R0FDZjtBQUNELHVCQUF1QjtBQUN2QjtJQUNFOztNQUVFLFlBQVk7S0FDYjtJQUNEO01BQ0UsYUFBYTtNQUNiLGNBQWM7S0FDZjtJQUNEO01BQ0Usa0JBQWtCO0tBQ25CO0lBQ0Q7TUFDRSxhQUFhO01BQ2IsaUNBQXlCO2NBQXpCLHlCQUF5QjtLQUMxQjtHQUNGO0FBQ0Q7SUFDRTtNQUNFLGNBQWM7TUFDZCxtQkFBbUI7S0FDcEI7R0FDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgfVxuLnNwYWNlcntcbiAgZmxleDogMSAxIGF1dG87XG59XG4uYXBwLXRvb2xiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIEZvciBtYWNPUy9pT1MgU2FmYXJpICovXG4gIHRvcDogMDsgLyogU2V0cyB0aGUgc3RpY2t5IHRvb2xiYXIgdG8gYmUgb24gdG9wICovXG4gIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSB0aGF0IHlvdXIgYXBwJ3MgY29udGVudCBkb2Vzbid0IG92ZXJsYXAgdGhlIHRvb2xiYXIgKi9cbn1cbjpob3N0IHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgfVxuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgICBtYXJnaW46IDhweCAwO1xuICB9XG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuc3BhY2VyIHtcbiAgICBmbGV4OiAxO1xuICB9XG4gIC50b29sYmFyIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luOiAtOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIC50b29sYmFyIGltZyB7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG4gIH1cbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICB9XG4gIC50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46ICBhdXRvO1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgfVxuICAuZ3JlZW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NjA5MTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgLm1hdC1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgIG1hcmdpbjogNXB4IDEwcHggYXV0bztcbiAgICBhbGlnbi1zZWxmOiBhdXRvO1xuICB9XG4gIC5tYXQtY2FyZC1hdmF0YXJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWcvZm9ybWhlYWQuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gIC5tYXQtY2FyZC1hY3Rpb25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLm1hdC1jYXJkLWFjdGlvbnMgLmZsZXgtc3BhY2Vye1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIHN2Zy5tYXRlcmlhbC1pY29ucyB7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIHN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxuICAuY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG4gICAgZmlsbDogIzg4ODtcbiAgfVxuICBzdmcjY2xvdWRzIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAtMTYwcHg7XG4gICAgbGVmdDogLTIzMHB4O1xuICAgIHotaW5kZXg6IC0xMDtcbiAgICB3aWR0aDogMTkyMHB4O1xuICB9XG4gIC8qIFJlc3BvbnNpdmUgU3R5bGVzICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSAsXG4gICAgLnRlcm1pbmFsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW46IDhweCAwO1xuICAgIH1cbiAgICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xuICAgIH1cbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICAgIHJpZ2h0OiAxMjBweDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<svg id=\"clouds\" alt=\"Gray Clouds Background\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2611.084\" height=\"485.677\"\n    viewBox=\"0 0 2611.084 485.677\">\n    <path id=\"Path_39\" data-name=\"Path 39\"\n        d=\"M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z\"\n        transform=\"translate(142.69 -634.312)\" fill=\"#eee\" />\n</svg>\n<!-- <footer style=\" position: fixed;\nleft: 0;\nbottom: 0;\nwidth: 100%;\ntext-align: center;\n\"> <a href=\"#\" >Forms Builder App</a></footer> -->"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'formbuilder';
    }
    AppComponent.prototype.ngOnInit = function () {
        //  this._router.navigate(['/login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _edit_app_edit_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-app/edit-app.component */ "./src/app/edit-app/edit-app.component.ts");
/* harmony import */ var ngx_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-drag-drop */ "./node_modules/ngx-drag-drop/ngx-drag-drop.es5.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/@toverux/ngx-sweetalert2.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _view_form_view_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view-form/view-form.component */ "./src/app/view-form/view-form.component.ts");
/* harmony import */ var _userhome_userhome_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./userhome/userhome.component */ "./src/app/userhome/userhome.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _submit_form_submit_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./submit-form/submit-form.component */ "./src/app/submit-form/submit-form.component.ts");
/* harmony import */ var _viewallsub_viewallsub_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./viewallsub/viewallsub.component */ "./src/app/viewallsub/viewallsub.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _guest_page_guest_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./guest-page/guest-page.component */ "./src/app/guest-page/guest-page.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _edit_app_edit_app_component__WEBPACK_IMPORTED_MODULE_6__["EditAppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _view_form_view_form_component__WEBPACK_IMPORTED_MODULE_13__["ViewFormComponent"],
                _userhome_userhome_component__WEBPACK_IMPORTED_MODULE_14__["UserhomeComponent"],
                _submit_form_submit_form_component__WEBPACK_IMPORTED_MODULE_25__["SubmitFormComponent"],
                _viewallsub_viewallsub_component__WEBPACK_IMPORTED_MODULE_26__["ViewallsubComponent"],
                _guest_page_guest_page_component__WEBPACK_IMPORTED_MODULE_29__["GuestPageComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_30__["NavComponent"],
            ],
            imports: [
                //RouterModule.forRoot(appRoutes),
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__["SweetAlert2Module"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_28__["AppRoutingModule"],
                ngx_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DndModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_27__["NgxPaginationModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit-app/edit-app.component.css":
/*!*************************************************!*\
  !*** ./src/app/edit-app/edit-app.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll{\n    height:450px;\n    width:300px;\n    border:1px solid #ccc;\n    font:16px/26px Georgia, Garamond, Serif;\n    overflow:auto;\n    margin-left: 40px;\n    background-color: rgb(205, 206, 212);\n    }\n    .spacer{\n        flex: 1 1 auto;\n      }\n    .btns{\n        margin-left: 30px;\n        margin-top: 7px;\n    }\n    .btns button{\n        margin: 5px;\n    }\n    .green{\n        background-color: #018786;\n        color: white;\n    }\n    .btnback{\n        position: absolute;\n        top: 23%;\n        left: 85%;\n    }\n    .btnback button{\n        height: 35px;\n        width: 150px;\n        font-size: 16px;\n        cursor: pointer;\n        /* border-radius: 10px; */\n        text-align: center;\n        padding: 0;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1hcHAvZWRpdC1hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHdDQUF3QztJQUN4QyxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHFDQUFxQztLQUNwQztJQUNEO1FBQ0ksZUFBZTtPQUNoQjtJQUdIO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtLQUNuQjtJQUNEO1FBQ0ksWUFBWTtLQUNmO0lBRUQ7UUFDSSwwQkFBMEI7UUFDMUIsYUFBYTtLQUNoQjtJQUVEO1FBQ0ksbUJBQW1CO1FBQ25CLFNBQVM7UUFDVCxVQUFVO0tBQ2I7SUFFRDtRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQiwwQkFBMEI7UUFDMUIsbUJBQW1CO1FBQ25CLFdBQVc7S0FDZCIsImZpbGUiOiJzcmMvYXBwL2VkaXQtYXBwL2VkaXQtYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xse1xuICAgIGhlaWdodDo0NTBweDtcbiAgICB3aWR0aDozMDBweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgZm9udDoxNnB4LzI2cHggR2VvcmdpYSwgR2FyYW1vbmQsIFNlcmlmO1xuICAgIG92ZXJmbG93OmF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNSwgMjA2LCAyMTIpO1xuICAgIH1cbiAgICAuc3BhY2Vye1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgIH1cbiAgICAgIFxuICAgIFxuICAgIC5idG5ze1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIH1cbiAgICAuYnRucyBidXR0b257XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgIH1cbiAgICBcbiAgICAuZ3JlZW57XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTg3ODY7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgXG4gICAgLmJ0bmJhY2t7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAyMyU7XG4gICAgICAgIGxlZnQ6IDg1JTtcbiAgICB9XG4gICAgXG4gICAgLmJ0bmJhY2sgYnV0dG9ue1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/edit-app/edit-app.component.html":
/*!**************************************************!*\
  !*** ./src/app/edit-app/edit-app.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav> </app-nav>\n\n  <mat-tab-group>\n    <mat-tab label=\"Creat Form\"> \n      <div *ngIf=\"model && !report\" class=\"padding20 white-bg\">\n      <p style=\"color: #D81B60; font-weight: 500;margin-left: 30px;margin-top: 20px;\">*Customize your form by drag and drop below fields to the form area.</p>\n    \n      <div class=\"row\" >\n        <div class=\" scroll\">\n            <div class=\"row\">\n                <div class=\"col-8\" >\n                <label >Background Color <span class=\"spacer\"></span></label>\n                <input class=\"colorpick\" type=\"color\" name=\"bgColor\" [(ngModel)]=\"model.theme.bgColor\">\n                <label>Text Color  <span class=\"spacer\"></span></label>\n                <input class=\"colorpick\" type=\"color\" name=\"textColor\" [(ngModel)]=\"model.theme.textColor\">\n              </div>\n            </div>\n          <!--a draggable element-->\n          <div class=\"fields\" *ngFor=\"let item of fieldModels\" >\n            <div class=\"field pointer shadow-bg\" [dndDraggable]=\"item\" [dndEffectAllowed]=\"'copy'\"\n              (dndEnd)=\"onDragEnd($event)\">\n              <i [ngClass]=\"item.icon\" class=\"fa pull-left\"></i>\n              <h5>{{item.label}}</h5>\n            </div>\n          </div>\n        </div>\n    \n        <!-- el view form drag -->\n        <div class=\"col-8\" >\n          <div class=\"form-group\" style=\"margin-bottom: 0px !important; padding: 30px 60px 5px 60px;\"\n            [style.backgroundColor]=\"model.theme.bgColor\" [style.color]=\"model.theme.textColor\">\n            <h2><input class=\"form-control\" type=\"text\" [(ngModel)]=\"model.name\" placeholder=\"Form Name\" /></h2>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"model.description\" placeholder=\"Description...\"  />\n          </div>\n    \n          <!--a dropzone-->\n          <!--to allow dropping content that is not [dndDraggable] set dndAllowExternal to true-->\n          <section dndDropzone (dndDragover)=\"onDragover($event)\" (dndDrop)=\"onDrop($event,model.attributes)\"\n            class=\"dndDropArea\" [ngClass]=\"{'empty':model.attributes.length == 0}\"\n            [style.backgroundColor]=\"model.theme.bgColor\" [style.color]=\"model.theme.textColor\">\n    \n            <div class=\"field\" *ngFor=\"let item of model.attributes;let i= index;\" (dndStart)=\"onDragStart($event)\"\n              (dndCanceled)=\"onDragCanceled($event)\" (dndMoved)=\"onDragged(item, model.attributes, 'move')\"\n              [dndEffectAllowed]=\"'all'\" [dndDraggable]=\"item\">\n              <div class=\"row form-group\">\n                <div class=\"col-1\"><i class=\"fa fa-ellipsis-v dndHandle\" dndHandle></i></div>\n                <div class=\"col-7\">\n                  <!-- <i [ngClass]=\"item.icon\" class=\"fa pull-left\"></i>\n                <h5>{{item.label}}\n                <span *ngIf=\"item.required\" class=\"red\">*</span></h5> -->\n                  <div *ngIf=\"item.type=='text'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <input type=\"text\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\">\n                  </div>\n                  <div *ngIf=\"item.type=='email'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <input type=\"email\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\">\n                  </div>\n                  <div *ngIf=\"item.type=='phone'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <input type=\"text\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\">\n                  </div>\n                  <div *ngIf=\"item.type=='date'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <input type=\"date\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\">\n                  </div>\n                  <!-- <div *ngIf=\"item.type=='datetime-local'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <input type=\"datetime-local\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\">\n                  </div> -->\n                  <div *ngIf=\"item.type=='textarea'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <textarea class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\">\n                          </textarea>\n                  </div>\n                  <!-- <div *ngIf=\"item.type=='file'\">\n                    <label>{{item.label}} (File can't be uploaded right now)</label> <label *ngIf=\"item.required\"\n                      class=\"text-danger\">*</label>\n                    <input type=\"file\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\">\n                    <small class=\"form-text text-danger\">(File can't be uploaded right now)</small>\n                  </div> -->\n                  <!-- <div *ngIf=\"item.type=='paragraph'\">\n                    <p class=\"form-text\">{{item.placeholder}}</p>\n                  </div> -->\n                  <div *ngIf=\"item.type=='autocomplete'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <select class=\"form-control\" id=\"{{item.name}}\">\n                      <option *ngFor=\"let v of item.values\" [value]=\"v.value\">{{v.label}}</option>\n                    </select>\n                    <!-- <small class=\"form-text text-muted\">{{item.description}}</small> -->\n                  </div>\n                  <div *ngIf=\"item.type=='checkbox'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\n                      <label class=\"cust-check-bx\">\n                        <input type=\"checkbox\" [value]=\"v.value\" name=\"{{item.name}}\" (click)=\"toggleValue(v)\"> {{v.label}}\n                        <span class=\"checkmark\"></span>\n                      </label>\n                    </div>\n                  </div>\n                  <div *ngIf=\"item.type=='radio'\">\n                    <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                    <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\n                      <label class=\"cust-check-bx\">\n                        <input type=\"radio\" [value]=\"v.value\" name=\"{{item.name}}\"> {{v.label}}\n                        <span class=\"checkmark\"></span>\n                      </label>\n                    </div>\n                  </div>\n                  <!-- <div *ngIf=\"item.type=='button'\" class=\"btn-cont\">\n                    <input type=\"{{item.subtype}}\" (click)=\"submit()\" value=\"{{item.label}}\" class=\"btn btn-primary\"\n                      id=\"{{item.name}}\">\n                  </div> -->\n                </div>\n                <div class=\"col-4\">\n                  <i *ngIf=\"item.toggle\" (click)=\"item.toggle=false\" class=\"fa fa-chevron-up pull-right\"></i>\n                  <i *ngIf=\"!item.toggle\" (click)=\"item.toggle=true\" class=\"fa fa-chevron-down pull-right\"></i>\n                  <i (click)=\"removeField(i)\" class=\"fa fa-trash pull-right\"></i>\n                </div>\n              </div>\n              <div *ngIf=\"item.toggle\" class=\"toggle-Wrapper\">\n                <div class=\"form-group\">\n                  <label>Required</label>\n                  <i *ngIf=\"item.required\" (click)=\"item.required=false\" class=\"fa fa-toggle-on red\"></i>\n                  <i *ngIf=\"!item.required\" (click)=\"item.required=true\" class=\"fa fa-toggle-off\"></i>\n                  <span class=\"pull-right ucfirst\">{{item.type}}</span>\n                </div>\n                <div class=\"form-group\">\n                  <label>Label</label>\n                  <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.label\" />\n                </div>\n                <!-- <div class=\"form-group\">\n                  <label>Name</label>\n                  <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.name\" />\n                </div> -->\n                <div class=\"form-group\">\n                  <label>Placeholder</label>\n                  <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.placeholder\" />\n                </div>\n                <!-- <div class=\"form-group\">\n                  <label>Regex</label>\n                  <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.regex\" />\n                </div> -->\n                <div *ngIf=\"item.regex\" class=\"form-group\">\n                  <label>Error text</label>\n                  <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.errorText\" />\n                </div>\n    \n                <!-- number\n                <div *ngIf=\"item.type=='number'\" class=\"row\">\n                  <div class=\"col-6\">\n                    <div class=\"form-group\">\n                      <label>Min</label>\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.min\" />\n                    </div>\n                  </div>\n                  <div class=\"col-6\">\n                    <div class=\"form-group\">\n                      <label>Max</label>\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.max\" />\n                    </div>\n                  </div>\n                </div> -->\n    \n                <!-- radio || checkbox || autocomplete -->\n                <div *ngIf=\"item.type=='radio'|| item.type=='checkbox' || item.type=='autocomplete'\">\n                  <div class=\"row\">\n                    <div class=\"col-5\">\n                      <div class=\"form-group\">\n                        <label>Label</label>\n                      </div>\n                    </div>\n                    <div class=\"col-5\">\n                      <div class=\"form-group\">\n                        <label>Value</label>\n                      </div>\n                    </div>\n                    <div class=\"col-2\">\n                      <div class=\"form-group\">\n                        <label>Action</label>\n                      </div>\n                    </div>\n                  </div>\n                  <div *ngFor=\"let i of item.values; let valueIndex=index;\" class=\"row\">\n                    <div class=\"col-5\">\n                      <div class=\"form-group\">\n                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"i.label\" />\n                      </div>\n                    </div>\n                    <div class=\"col-5\">\n                      <div class=\"form-group\">\n                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"i.value\" />\n                      </div>\n                    </div>\n                    <div class=\"col-2\">\n                      <div class=\"form-group\">\n                        <label (click)=\"item.values.splice(valueIndex,1)\">remove</label>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-5\">\n                      <div class=\"form-group\">\n                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"value.label\" />\n                      </div>\n                    </div>\n                    <div class=\"col-5\">\n                      <div class=\"form-group\">\n                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"value.value\" />\n                      </div>\n                    </div>\n                    <div class=\"col-2\">\n                      <div class=\"form-group\">\n                        <label (click)=\"addValue(item.values)\">Add</label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--optional placeholder element for dropzone-->\n            <!--will be removed from DOM on init-->\n            <div class=\"dndPlaceholder\" dndPlaceholderRef>\n            </div>\n          </section>\n        </div>\n        <!-- el view form drag -->\n      </div>\n      <div class=\"row btns\">\n        <!-- <button mat-raised-button (click)=\"initReport()\" color=\"primary\" class=\"btn pull-left\">Preview</button> -->\n        <button mat-raised-button (click)=\"updateForm()\"class=\"btn  green pull-left\">Save</button>\n        <button  mat-raised-button color=\"warn\" class=\"btn pull-left\" [routerLink]=\"['/home']\">Cancel </button>\n    </div>\n    </div>\n  </mat-tab>\n    <mat-tab label=\"Preview\">\n  <!-- view Form -->\n<div *ngIf=\"model\" class=\"container marginT60  marginB30\" style=\"max-width:500px;\">\n\n  <div class=\"row\" style=\"padding:30px;\" [style.backgroundColor]=\"model.theme.bgColor\"\n    [style.color]=\"model.theme.textColor\">\n    <div class=\"col-12\">\n      <h4>{{model.name}}</h4>\n    </div>\n    <div class=\"col-12\">\n      <p style=\"color: #D81B60; font-weight: 500;margin-left: 30px;margin-top: 20px;\n    \n      \">{{model.description}}</p>\n    </div>\n    <form class=\"ftheme\">\n      <div *ngIf=\"!success\" class=\"col-12\">\n        <div *ngFor=\"let item of model.attributes\" class=\"form-group\">\n          <div *ngIf=\"item.type=='text'\">\n            <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n            <input type=\"text\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n              [(ngModel)]=\"item.value\" [required]=\"item.required\" [ngModelOptions]=\"{standalone: true}\"\n              autocomplete=\"off\">\n          </div>\n          <div *ngIf=\"item.type=='email'\">\n            <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n            <input type=\"email\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n              [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n          </div>\n          <div *ngIf=\"item.type=='phone'\">\n            <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n            <input type=\"email\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n              [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n          </div>\n          <!-- <div *ngIf=\"item.type=='number'\">\n            <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n            <input type=\"number\" class=\"form-control\" id=\"{{item.name}}\" min=\"{{item.min}}\" max=\"{{item.max}}\"\n              placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\"\n              autocomplete=\"off\">\n          </div> -->\n          <div *ngIf=\"item.type=='date'\">\n            <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n            <input type=\"date\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n              [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n          </div>\n          <!-- <div *ngIf=\"item.type=='datetime-local'\">\n            <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n            <input type=\"datetime-local\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n              [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n          </div> -->\n          <div *ngIf=\"item.type=='textarea'\">\n            <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n            <textarea class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n              [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n          </textarea>\n          </div>\n          <!-- <div *ngIf=\"item.type=='file'\">\n            <label>{{item.label}} (File can't be uploaded right now)</label> <label *ngIf=\"item.required\"\n              class=\"text-danger\">*</label>\n            <input type=\"file\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n              [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n            <small class=\"form-text text-danger\">(File can't be uploaded right now)</small>\n          </div> -->\n          <div *ngIf=\"item.type=='paragraph'\">\n            <p class=\"form-text\">{{item.placeholder}}</p>\n          </div>\n          <div *ngIf=\"item.type=='autocomplete'\">\n            <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n            <select class=\"form-control\" id=\"{{item.name}}\" [(ngModel)]=\"item.value\"\n              [ngModelOptions]=\"{standalone: true}\">\n              <option *ngFor=\"let v of item.values\" [value]=\"v.value\">{{v.label}}</option>\n            </select>\n          </div>\n          <div *ngIf=\"item.type=='checkbox'\">\n            <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n            <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\n              <label class=\"cust-check-bx\">\n                <input type=\"checkbox\" [value]=\"v.value\" name=\"{{item.name}}\" (click)=\"toggleValue(v)\"> {{v.label}}\n                <span class=\"checkmark\"></span>\n              </label>\n            </div>\n          </div>\n          <div *ngIf=\"item.type=='radio'\">\n            <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n            <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\n              <label class=\"cust-check-bx\">\n                <input type=\"radio\" [value]=\"v.value\" name=\"{{item.name}}\" [(ngModel)]=\"item.value\"\n                  [ngModelOptions]=\"{standalone: true}\"> {{v.label}}\n                <span class=\"checkmark\"></span>\n              </label>\n            </div>\n          </div>\n          <!-- <div *ngIf=\"item.type=='button'\" class=\"btn-cont\">\n            <input type=\"{{item.subtype}}\" (click)=\"submit()\" value=\"{{item.label}}\" class=\"btn btn-primary\"\n              id=\"{{item.name}}\">\n          </div> -->\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<!-- view Form -->\n<div *ngIf=\"report\" class=\"padding20 white-bg\">\n    <div class=\"row\">\n      <!-- if records found -->\n      <div *ngIf=\"reports?.length > 0\" class=\"col-12\">\n        <div *ngFor=\"let records of reports\" class=\"report-block\">\n          <div *ngFor=\"let record of records.attributes\">\n            <div *ngIf=\"record.type !='button' && record.type !='paragraph'\" class=\"row\">\n              <div class=\"col-4\">{{record.label}}</div>\n              <div class=\"col-8\">{{record.value}}</div>\n            </div>\n          </div>\n        </div>\n      </div>  \n    </div>\n  \n  </div>\n </mat-tab>\n  </mat-tab-group>\n\n  "

/***/ }),

/***/ "./src/app/edit-app/edit-app.component.ts":
/*!************************************************!*\
  !*** ./src/app/edit-app/edit-app.component.ts ***!
  \************************************************/
/*! exports provided: EditAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAppComponent", function() { return EditAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var EditAppComponent = /** @class */ (function () {
    function EditAppComponent(_user, _router) {
        var _this = this;
        this._user = _user;
        this._router = _router;
        this.value = {
            label: "",
            value: ""
        };
        this.success = false;
        this.userId = 0;
        this.userName = "";
        this.fieldModels = [
            {
                "type": "text",
                "icon": "fa-font",
                "label": "Text",
                "description": "Enter your name",
                "placeholder": "Enter your name",
                "className": "form-control",
                "subtype": "text",
                "handle": true
            },
            {
                "type": "email",
                "icon": "fa-envelope",
                "required": true,
                "label": "Email",
                "description": "Enter your email",
                "placeholder": "Enter your email",
                "className": "form-control",
                "subtype": "text",
                "errorText": "Please enter a valid email",
                "handle": true
            },
            {
                "type": "phone",
                "icon": "fa-phone",
                "label": "Phone",
                "description": "Enter your phone",
                "placeholder": "Enter your phone",
                "className": "form-control",
                "subtype": "text",
                "errorText": "Please enter a valid phone number",
                "handle": true
            },
            // {
            //   "type": "number",
            //   "label": "Number",
            //   "icon": "fa-html5",
            //   "description": "Age",
            //   "placeholder": "Enter your age",
            //   "className": "form-control",
            //   "value": "20",
            //   "min": 12,
            //   "max": 90
            // },
            {
                "type": "date",
                "icon": "fa-calendar",
                "label": "Date",
                "placeholder": "Date",
                "className": "form-control"
            },
            // {
            //   "type": "datetime-local",
            //   "icon":"fa-calendar",
            //   "label": "DateTime",
            //   "placeholder": "Date Time",
            //   "className": "form-control"
            // },
            {
                "type": "textarea",
                "icon": "fa-text-width",
                "label": "Textarea"
            },
            {
                "type": "checkbox",
                "required": true,
                "label": "Checkbox",
                "icon": "fa-list",
                "description": "Checkbox",
                "inline": true,
                "values": [
                    {
                        "label": "Option 1",
                        "value": "option-1"
                    },
                    {
                        "label": "Option 2",
                        "value": "option-2"
                    }
                ]
            },
            {
                "type": "radio",
                "icon": "fa-list-ul",
                "label": "Radio",
                "description": "Radio boxes",
                "values": [
                    {
                        "label": "Option 1",
                        "value": "option-1"
                    },
                    {
                        "label": "Option 2",
                        "value": "option-2"
                    }
                ]
            },
            {
                "type": "autocomplete",
                "icon": "fa-bars",
                "label": "Select",
                "description": "Select",
                "placeholder": "Select",
                "className": "form-control",
                "values": [
                    {
                        "label": "Option 1",
                        "value": "option-1"
                    },
                    {
                        "label": "Option 2",
                        "value": "option-2"
                    },
                    {
                        "label": "Option 3",
                        "value": "option-3"
                    }
                ]
            },
        ];
        this.modelFields = [];
        this.model = {
            name: '',
            description: '',
            theme: {
                bgColor: "ffffff",
                textColor: "555555",
                bannerImage: ""
            },
            attributes: this.modelFields
        };
        this.report = false;
        this.reports = [];
        this._user.getUser()
            .subscribe(function (data) { _this.userId = data; console.log(data); }, function (error) { return _this._router.navigate(['/login']); });
        this._user.getName()
            .subscribe(function (data) { _this.userName = data; console.log("tttttttttttt", data); }, function (error) { return _this._router.navigate(['/login']); });
    }
    EditAppComponent.prototype.ngOnInit = function () {
        // this.route.params.subscribe( params =>{
        //   console.log(params);
        //   this.us.getDataApi('/admin/getFormById',{id:params.id}).subscribe(r=>{
        //     console.log(r);
        //     this.model = r['data'];
        //   });
        // });
        // this.model = this.cs.data; 
        // console.log(this.model.data);
    };
    EditAppComponent.prototype.onDragStart = function (event) {
        console.log("drag started", JSON.stringify(event, null, 2));
    };
    EditAppComponent.prototype.onDragEnd = function (event) {
        console.log("drag ended", JSON.stringify(event, null, 2));
    };
    EditAppComponent.prototype.onDraggableCopied = function (event) {
        console.log("draggable copied", JSON.stringify(event, null, 2));
    };
    EditAppComponent.prototype.onDraggableLinked = function (event) {
        console.log("draggable linked", JSON.stringify(event, null, 2));
    };
    EditAppComponent.prototype.onDragged = function (item, list, effect) {
        if (effect === "move") {
            var index = list.indexOf(item);
            list.splice(index, 1);
        }
    };
    EditAppComponent.prototype.onDragCanceled = function (event) {
        console.log("drag cancelled", JSON.stringify(event, null, 2));
    };
    EditAppComponent.prototype.onDragover = function (event) {
        console.log("dragover", JSON.stringify(event, null, 2));
    };
    EditAppComponent.prototype.onDrop = function (event, list) {
        if (list && (event.dropEffect === "copy" || event.dropEffect === "move")) {
            if (event.dropEffect === "copy")
                event.data.name = event.data.type + '-' + new Date().getTime();
            var index = event.index;
            if (typeof index === "undefined") {
                index = list.length;
            }
            list.splice(index, 0, event.data);
        }
    };
    EditAppComponent.prototype.addValue = function (values) {
        values.push(this.value);
        this.value = { label: "", value: "" };
    };
    EditAppComponent.prototype.removeField = function (i) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Are you sure?',
            text: "Do you want to remove this field?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00B96F',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove!'
        }).then(function (result) {
            if (result.value) {
                _this.model.attributes.splice(i, 1);
            }
        });
    };
    EditAppComponent.prototype.updateForm = function () {
        var _this = this;
        var input = new FormData;
        input.append('id', this.model._id);
        input.append('name', this.model.name);
        input.append('description', this.model.description);
        input.append('bannerImage', this.model.theme.bannerImage);
        input.append('bgColor', this.model.theme.bgColor);
        input.append('textColor', this.model.theme.textColor);
        input.append('attributes', JSON.stringify(this.model.attributes));
        var observable = this._user.addForm(this.model, this.userId);
        observable.subscribe(function (data) {
            console.log("Got the information from post data", data);
            _this._router.navigate(['/home']);
        });
        console.log("hhhhhhhhhhhhh", JSON.stringify(this.model.attributes));
        console.log("iiiinnnppppuut", this.model);
        // this.us.putDataApi('/admin/updateForm',input).subscribe(r=>{
        //   console.log(r);
        //   swal('Success','App updated successfully','success');
        // });
    };
    EditAppComponent.prototype.initReport = function () {
        this.report = true;
        var input = {
            id: this.model._id
        };
        // this.us.getDataApi('/admin/allFilledForms',input).subscribe(r=>{
        //   this.reports = r.data;
        //   console.log('reports',this.reports);
        //   this.reports.map(records=>{
        //     return records.attributes.map(record=>{
        //       if(record.type=='checkbox'){
        //         record.value = record.values.filter(r=>r.selected).map(i=>i.value).join(',');
        //       }
        //     })
        //   });
        // });
    };
    EditAppComponent.prototype.toggleValue = function (item) {
        item.selected = !item.selected;
    };
    EditAppComponent.prototype.submit = function () {
        var valid = true;
        var validationArray = JSON.parse(JSON.stringify(this.model.attributes));
        validationArray.reverse().forEach(function (field) {
            console.log(field.label + '=>' + field.required + "=>" + field.value);
            if (field.required && !field.value && field.type != 'checkbox') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error', 'Please enter ' + field.label, 'error');
                valid = false;
                return false;
            }
            if (field.required && field.regex) {
                var regex = new RegExp(field.regex);
                if (regex.test(field.value) == false) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error', field.errorText, 'error');
                    valid = false;
                    return false;
                }
            }
            if (field.required && field.type == 'checkbox') {
                if (field.values.filter(function (r) { return r.selected; }).length == 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error', 'Please enterrr ' + field.label, 'error');
                    valid = false;
                    return false;
                }
            }
        });
        if (!valid) {
            return false;
        }
        console.log('Save', this.model);
        var input = new FormData;
        input.append('formId', this.model._id);
        input.append('attributes', JSON.stringify(this.model.attributes));
        // this.us.postDataApi('/user/formFill',input).subscribe(r=>{
        //   console.log(r);
        //   swal('Success','You have contact sucessfully','success');
        //   this.success = true;
        // },error=>{
        //   swal('Error',error.message,'error');
        // });
    };
    EditAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-app',
            template: __webpack_require__(/*! ./edit-app.component.html */ "./src/app/edit-app/edit-app.component.html"),
            styles: [__webpack_require__(/*! ./edit-app.component.css */ "./src/app/edit-app/edit-app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EditAppComponent);
    return EditAppComponent;
}());



/***/ }),

/***/ "./src/app/guest-page/guest-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/guest-page/guest-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row2{\n    border-radius:15px;\n    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);\n    margin: 30px 10px auto;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    width: 500px;\n    height: 200px;\n    padding: 60px 20px;\n    padding-bottom: 10px;\n    box-sizing: border-box;\n    background :#eff0f2;\n    text-align: center;\n    }\n\n    p{\n   position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  color: #D81B60;\n   font-weight: 400;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3Vlc3QtcGFnZS9ndWVzdC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFHbkIsNENBQTRDO0lBQzVDLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7SUFDVix3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtLQUNsQjs7SUFFRDtHQUNELGdCQUFnQjtFQUNqQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtHQUNkLGlCQUFpQjtLQUNmIiwiZmlsZSI6InNyYy9hcHAvZ3Vlc3QtcGFnZS9ndWVzdC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93MntcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiYSgwLDAsMCwwLjIpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiYSgwLDAsMCwwLjIpO1xuICAgIG1hcmdpbjogMzBweCAxMHB4IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDYwcHggMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQgOiNlZmYwZjI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIHB7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNEODFCNjA7XG4gICBmb250LXdlaWdodDogNDAwO1xuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/guest-page/guest-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/guest-page/guest-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row2\">\n   <h5>Thank you for your Submission</h5><i class=\"material-icons\">\n    done_outline\n    </i>\n<hr>\n  <p  >Join Us in <a href=\"#\" >Forms Builder</a> To create your custom forms </p> \n</div>\n"

/***/ }),

/***/ "./src/app/guest-page/guest-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/guest-page/guest-page.component.ts ***!
  \****************************************************/
/*! exports provided: GuestPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestPageComponent", function() { return GuestPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GuestPageComponent = /** @class */ (function () {
    function GuestPageComponent() {
    }
    GuestPageComponent.prototype.ngOnInit = function () {
    };
    GuestPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guest-page',
            template: __webpack_require__(/*! ./guest-page.component.html */ "./src/app/guest-page/guest-page.component.html"),
            styles: [__webpack_require__(/*! ./guest-page.component.css */ "./src/app/guest-page/guest-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GuestPageComponent);
    return GuestPageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row2{\n  border-radius:15px;\n  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);\n  margin: 30px 10px auto;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n  width: 350px;\n  height: 420px;\n  padding: 60px 20px;\n  padding-bottom: 10px;\n  box-sizing: border-box;\n  background :#eff0f2;\n  }\n  \n  h2{\n    margin: 0;\n    padding: 0 0 20px;\n    text-align: center;\n  }\n  \n  .reg{\n    margin: 10px;\n    padding: 5px;\n    font-style: italic;\n    text-align: center;\n    margin-top: 50px;\n  }\n  \n  .icon{\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    /* overflow:hidden; */\n    position: absolute;\n    top: -50px;\n    left: calc(50% - 50px);\n  }\n  \n  .row2 .input::-webkit-outer-spin-button,\n  .row2 .input::-webkit-inner-spin-button {\n    display: none;\n  }\n  \n  .row2 .input{\n    -moz-appearance: textfield;\n    width: 100%;\n    margin-bottom: 20px;\n  \n  }\n  \n  .row2 .loginbtn{\n    height: 35px;\n    width: 130px;\n    font-size: 16px;\n    cursor: pointer;\n    /* border-radius: 10px; */\n    text-align: center;\n  }\n  \n  .action{\n  padding-top: 30px;\n  position: absolute;\n  top: 65%;\n  left: 55%;\n  \n  }\n  \n  mat-form-field {\n    width: 100%;\n  }\n  \n  .row2 p{\n    position: fixed;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      text-align: center;\n  }\n  \n  form{\n    margin-top: 10px;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUduQiw0Q0FBNEM7RUFDNUMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixvQkFBb0I7R0FDbkI7O0VBRUQ7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7R0FDbEI7O0VBQ0Q7SUFDRSxhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx1QkFBdUI7R0FDeEI7O0VBQ0Q7O0lBRUUsY0FBYztHQUNmOztFQUVEO0lBQ0UsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQkFBb0I7O0dBRXJCOztFQUNEO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixtQkFBbUI7R0FDcEI7O0VBRUQ7RUFDQSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVOztHQUVUOztFQUNEO0lBQ0UsWUFBWTtHQUNiOztFQUVEO0lBQ0UsZ0JBQWdCO01BQ2QsUUFBUTtNQUNSLFVBQVU7TUFDVixZQUFZO01BQ1osbUJBQW1CO0dBQ3RCOztFQUVEO0lBQ0UsaUJBQWlCO0dBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cye1xuICBib3JkZXItcmFkaXVzOjE1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiYSgwLDAsMCwwLjIpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiYSgwLDAsMCwwLjIpO1xuICBtYXJnaW46IDMwcHggMTBweCBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiA0MjBweDtcbiAgcGFkZGluZzogNjBweCAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZCA6I2VmZjBmMjtcbiAgfVxuICBcbiAgaDJ7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgMCAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLnJlZ3tcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuICAuaWNvbntcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLyogb3ZlcmZsb3c6aGlkZGVuOyAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC01MHB4O1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNTBweCk7XG4gIH1cbiAgLnJvdzIgLmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuICAucm93MiAuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5yb3cyIC5pbnB1dHtcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBcbiAgfVxuICAucm93MiAubG9naW5idG57XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAuYWN0aW9ue1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY1JTtcbiAgbGVmdDogNTUlO1xuICBcbiAgfVxuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5yb3cyIHB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICBmb3Jte1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"row2\">\n  <img src=\"../../assets/img/user3.png\" class=\"icon\" alt=\"\">\n  <h2>Log In</h2>\n  <hr>\n    <form [formGroup]=\"loginForm\">\n        <mat-form-field>\n          <input  matInput placeholder=\"Enter your email\" formControlName=\"email\" type=\"email\"  id=\"exampleInputEmail1\"\n            aria-describedby=\"emailHelp\" required>\n          <small id=\"emailHelp\" class=\"form-text text-muted\"></small>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\"\n            formControlName=\"password\" type=\"password\"  id=\"passwordInput\"\n            aria-describedby=\"passHelp\" required>\n            <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n            [attr.aria-pressed]=\"hide\">\n            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </button>\n          <small id=\"passHelp\" class=\"form-text text-muted\"></small>\n        </mat-form-field>\n        <br>\n        <div class=\"action\">\n        <button class=\"loginbtn\" mat-raised-button color=\"accent\" (click)=\"login()\">Log in</button> \n        </div>\n        <p class=\"reg\">New user? <a routerLink=\"/register\" >Create an Account</a></p> \n    </form>\n</mat-card>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _user) {
        this._router = _router;
        this._user = _user;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.hide = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.moveToRegister = function () {
        this._router.navigate(['/register']);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log('Invalid');
            return;
        }
        // console.log(JSON.stringify(this.loginForm.value));
        this._user.login(JSON.stringify(this.loginForm.value))
            .subscribe(function (data) { console.log(data); _this._router.navigate(['/home']); }, function (error) { return console.error(error); });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n  padding: 0;\n  margin: 0;\n  height: 100%; }\n.spacer{\n  flex: 1 1 auto;\n}\n.app-toolbar {\n  position: sticky;\n  position: -webkit-sticky; /* For macOS/iOS Safari */\n  top: 0; /* Sets the sticky toolbar to be on top */\n  z-index: 1000; /* Ensure that your app's content doesn't overlap the toolbar */\n}\n:host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n.toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n.toolbar img {\n    margin: 0 16px;\n  }\n.toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n.toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n.content {\n    display: flex;\n    margin:  auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    /* align-items: center; */\n  }\nsvg.material-icons {\n    height: 24px;\n    width: auto;\n  }\nsvg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n.card svg.material-icons path {\n    fill: #888;\n  }\nsvg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n/* Responsive Styles */\n@media screen and (max-width: 767px) {\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n    svg#rocket-smoke {\n      right: 120px;\n      -webkit-transform: rotate(-5deg);\n              transform: rotate(-5deg);\n    }\n  }\n@media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhLEVBQUU7QUFDakI7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCLENBQUMsMEJBQTBCO0VBQ3BELE9BQU8sQ0FBQywwQ0FBMEM7RUFDbEQsY0FBYyxDQUFDLGdFQUFnRTtDQUNoRjtBQUNEO0lBQ0ksMkpBQTJKO0lBQzNKLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQyxtQ0FBbUM7R0FDcEM7QUFDRDtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2IsY0FBYztJQUNkLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGlCQUFpQjtHQUNsQjtBQUNEO0lBQ0UsZUFBZTtHQUNoQjtBQUNEO0lBQ0UsYUFBYTtJQUNiLGVBQWU7R0FDaEI7QUFDRDtJQUNFLGFBQWE7R0FDZDtBQUNEO0lBQ0UsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QiwwQkFBMEI7R0FDM0I7QUFFRDtJQUNFLGFBQWE7SUFDYixZQUFZO0dBQ2I7QUFDRDtJQUNFLGtCQUFrQjtHQUNuQjtBQUNEO0lBQ0UsV0FBVztHQUNaO0FBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2IsY0FBYztHQUNmO0FBQ0QsdUJBQXVCO0FBQ3ZCO0lBQ0U7O01BRUUsWUFBWTtLQUNiO0lBQ0Q7TUFDRSxhQUFhO01BQ2IsY0FBYztLQUNmO0lBQ0Q7TUFDRSxrQkFBa0I7S0FDbkI7SUFDRDtNQUNFLGFBQWE7TUFDYixpQ0FBeUI7Y0FBekIseUJBQXlCO0tBQzFCO0dBQ0Y7QUFDRDtJQUNFO01BQ0UsY0FBYztNQUNkLG1CQUFtQjtLQUNwQjtHQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxMDAlOyB9XG4uc3BhY2Vye1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi5hcHAtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogRm9yIG1hY09TL2lPUyBTYWZhcmkgKi9cbiAgdG9wOiAwOyAvKiBTZXRzIHRoZSBzdGlja3kgdG9vbGJhciB0byBiZSBvbiB0b3AgKi9cbiAgei1pbmRleDogMTAwMDsgLyogRW5zdXJlIHRoYXQgeW91ciBhcHAncyBjb250ZW50IGRvZXNuJ3Qgb3ZlcmxhcCB0aGUgdG9vbGJhciAqL1xufVxuOmhvc3Qge1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB9XG4gIC50b29sYmFyIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luOiAtOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIC50b29sYmFyIGltZyB7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG4gIH1cbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICB9XG4gIC50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46ICBhdXRvO1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgfVxuXG4gIHN2Zy5tYXRlcmlhbC1pY29ucyB7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIHN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxuICAuY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG4gICAgZmlsbDogIzg4ODtcbiAgfVxuICBzdmcjY2xvdWRzIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAtMTYwcHg7XG4gICAgbGVmdDogLTIzMHB4O1xuICAgIHotaW5kZXg6IC0xMDtcbiAgICB3aWR0aDogMTkyMHB4O1xuICB9XG4gIC8qIFJlc3BvbnNpdmUgU3R5bGVzICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSAsXG4gICAgLnRlcm1pbmFsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW46IDhweCAwO1xuICAgIH1cbiAgICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xuICAgIH1cbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICAgIHJpZ2h0OiAxMjBweDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"app-toolbar\" color=\"primary\">\n  <span>Forms Builder</span>\n\n  <span class=\"spacer\"></span>\n  <button mat-button [matMenuTriggerFor]=\"belowMenu\">{{userName}}<mat-icon class=\"example-icon\" aria-hidden=\"false\"\n          aria-label=\"Example user person_pin icon\">person_pin</mat-icon></button>\n  <mat-menu #belowMenu=\"matMenu\" yPosition=\"below\">\n      <!-- <button mat-menu-item routerLink=\"/sttings\">Account<mat-icon class=\"example-icon\" aria-hidden=\"false\"\n              aria-label=\"Example user settings_applications icon\">settings_applications</mat-icon></button> -->\n      <button mat-menu-item routerLink=\"/login\">Logout<mat-icon class=\"example-icon\" aria-hidden=\"false\"\n              aria-label=\"Example user exit_to_app icon\">exit_to_app</mat-icon></button>\n  </mat-menu>\n</mat-toolbar>\n<mat-toolbar>\n<a href=\"\"[routerLink]=\"['/home']\"><h6>\n<mat-icon class=\"example-icon\" aria-hidden=\"false\"aria-label=\"Example user home icon\">home</mat-icon> Dashboard</h6></a>\n</mat-toolbar>\n          "

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavComponent = /** @class */ (function () {
    function NavComponent(_user, _router) {
        var _this = this;
        this._user = _user;
        this._router = _router;
        this.userName = "";
        this._user.getName()
            .subscribe(function (data) { _this.userName = data; console.log("tttttttttttt", data); }, function (error) { return _this._router.navigate(['/login']); });
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\n    border-radius:15px;\n    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);\n    margin: 30px 10px auto;\n    position: absolute;\n    top: 45%;\n    left: 70%;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    width: 350px;\n    height: 480px;\n    padding: 60px 20px;\n    padding-bottom: 10px;\n    box-sizing: border-box;\n    background :#eff0f2e5;\n    }\n  \n   .img{\n    position: fixed;\n    height: 100%;\n    left: 0;\n    bottom: 0;\n    z-index: -1;\n    opacity: 0.8;\n    }\n  \n   .right{\n        width: 300px;\n        height: 250px;\n        float:left;\n    \n    }\n  \n   mat-form-field {\n      width: 100%;\n    }\n  \n   .regbtn{\n      height: 35px;\n      width: 130px;\n      font-size: 16px;\n      cursor: pointer;\n      /* border-radius: 10px; */\n      text-align: center;\n      \n    }\n  \n   .action{\n      padding-top: 30px;\n      position: absolute;\n      top: 70%;\n      left: 57%;\n    }\n  \n   .log{\n      position: fixed;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      text-align: center;\n      font-style: italic;\n    }\n  \n   @media screen and (max-width: 770px) {\n        .wrapper{\n          border-radius:15px;\n          box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);\n          margin: 30px 10px auto;\n          position: absolute;\n          top: 45%;\n          left: 50%;\n          -webkit-transform: translate(-50%,-50%);\n                  transform: translate(-50%,-50%);\n          width: 350px;\n          height: 480px;\n          padding: 60px 20px;\n          padding-bottom: 10px;\n          box-sizing: border-box;\n          background :#eff0f2e5;\n          }\n        \n        svg#rocket-smoke {\n          display: none;\n          visibility: hidden;\n        }\n        .img{\n            display: none;\n            visibility: hidden;\n        }\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUduQiw0Q0FBNEM7SUFDNUMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixzQkFBc0I7S0FDckI7O0dBRUY7SUFDQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFFBQVE7SUFDUixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7S0FDWjs7R0FFRDtRQUNJLGFBQWE7UUFDYixjQUFjO1FBQ2QsV0FBVzs7S0FFZDs7R0FDRDtNQUNFLFlBQVk7S0FDYjs7R0FFRDtNQUNFLGFBQWE7TUFDYixhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQiwwQkFBMEI7TUFDMUIsbUJBQW1COztLQUVwQjs7R0FFRDtNQUNFLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsU0FBUztNQUNULFVBQVU7S0FDWDs7R0FFRDtNQUNFLGdCQUFnQjtNQUNoQixRQUFRO01BQ1IsVUFBVTtNQUNWLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsbUJBQW1CO0tBQ3BCOztHQUNDO1FBQ0U7VUFDRSxtQkFBbUI7VUFHbkIsNENBQTRDO1VBQzVDLHVCQUF1QjtVQUN2QixtQkFBbUI7VUFDbkIsU0FBUztVQUNULFVBQVU7VUFDVix3Q0FBZ0M7a0JBQWhDLGdDQUFnQztVQUNoQyxhQUFhO1VBQ2IsY0FBYztVQUNkLG1CQUFtQjtVQUNuQixxQkFBcUI7VUFDckIsdUJBQXVCO1VBQ3ZCLHNCQUFzQjtXQUNyQjs7UUFFSDtVQUNFLGNBQWM7VUFDZCxtQkFBbUI7U0FDcEI7UUFDRDtZQUNJLGNBQWM7WUFDZCxtQkFBbUI7U0FDdEI7T0FDRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiYSgwLDAsMCwwLjIpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiYSgwLDAsMCwwLjIpO1xuICAgIG1hcmdpbjogMzBweCAxMHB4IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDUlO1xuICAgIGxlZnQ6IDcwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDQ4MHB4O1xuICAgIHBhZGRpbmc6IDYwcHggMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQgOiNlZmYwZjJlNTtcbiAgICB9XG4gIFxuICAgLmltZ3tcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG4gICAgXG4gICAgLnJpZ2h0e1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgXG4gICAgfVxuICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAucmVnYnRue1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIFxuICAgIH1cblxuICAgIC5hY3Rpb257XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNzAlO1xuICAgICAgbGVmdDogNTclO1xuICAgIH1cblxuICAgIC5sb2d7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpIHtcbiAgICAgICAgLndyYXBwZXJ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czoxNXB4O1xuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICBtYXJnaW46IDMwcHggMTBweCBhdXRvO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDQ1JTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0ODBweDtcbiAgICAgICAgICBwYWRkaW5nOiA2MHB4IDIwcHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBiYWNrZ3JvdW5kIDojZWZmMGYyZTU7XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgLmltZ3tcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAiXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"img\" src=\"../../assets/img/img-03.png\" alt=\"\">\n<mat-card class=\"wrapper\">\n  <div class=\"right\">\n      <h3>Join Us</h3>\n      <hr>\n    <form [formGroup]=\"registerForm\">\n        <mat-form-field>\n            <input  matInput placeholder=\"E-mail\" formControlName=\"email\" type=\"email\" id=\"exampleInputEmail1\"\n              aria-describedby=\"emailHelp\" required>\n            <small id=\"emailHelp\" class=\"form-text text-muted\"></small>\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n        <input matInput id=\"exampleInputUsername\" aria-describedby=\"userHelp\" formControlName=\"username\" placeholder=\"Username\" required>\n        <small id=\"userHelp\" class=\"form-text text-muted\"></small>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n          <input  matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\"\n            formControlName=\"password\" type=\"password\" id=\"passwordInput\"\n            aria-describedby=\"passHelp\" required>\n            <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n            [attr.aria-pressed]=\"hide\">\n            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </button>\n          <small id=\"passHelp\" class=\"form-text text-muted\"></small>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n            <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\"\n              formControlName=\"cpass\" type=\"password\"  id=\"CpasswordInput\"\n              aria-describedby=\"CpassHelp\" required>\n              <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n              [attr.aria-pressed]=\"hide\">\n              <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            </button>\n            <small id=\"passHelp\" class=\"form-text text-muted\"></small>\n          </mat-form-field>\n\n        <div class=\"action\">\n          <button class=\"regbtn\" mat-raised-button color=\"accent\" (click)=\"register()\">Register</button> \n          </div>\n    </form>\n    <div class=\"log\">\n        <p >Have an account? <a routerLink=\"/login\" >Login</a></p> \n    </div>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_router, _userService, route) {
        this._router = _router;
        this._userService = _userService;
        this.route = route;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            cpass: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.hide = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.moveToLogin = function () {
        this._router.navigate(['/login']);
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value)) {
            console.log('Invalid Form');
            return;
        }
        this._userService.register(JSON.stringify(this.registerForm.value))
            .subscribe(function (data) { console.log(data); _this._router.navigate(['/login']); }, function (error) { return console.error(error); });
        // console.log(JSON.stringify(this.registerForm.value));
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/submit-form/submit-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/submit-form/submit-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row2{\n    margin-top:40px; \n    padding:20px; \n    background-color:#eff0f2;\n    border-radius:15px;\n    max-width: 50%;\n    max-height: auto;\n    position: absolute;\n    top: 10%;\n    left: 30%;\n    margin-bottom: 15px;\n  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VibWl0LWZvcm0vc3VibWl0LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLG9CQUFvQjtFQUd0Qiw0Q0FBNEM7Q0FDN0MiLCJmaWxlIjoic3JjL2FwcC9zdWJtaXQtZm9ybS9zdWJtaXQtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdzJ7XG4gICAgbWFyZ2luLXRvcDo0MHB4OyBcbiAgICBwYWRkaW5nOjIwcHg7IFxuICAgIGJhY2tncm91bmQtY29sb3I6I2VmZjBmMjtcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgbWF4LWhlaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMCU7XG4gICAgbGVmdDogMzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiYSgwLDAsMCwwLjIpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiYSgwLDAsMCwwLjIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/submit-form/submit-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/submit-form/submit-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row2\" >\n\n  <div class=\"col-sm-12\">\n\n    <div class=\"container marginT60  marginB30\" style=\"max-width:500px;\">\n\n      <div class=\"row\" style=\"padding:30px;\" [style.backgroundColor]=\"model.theme.bgColor\"\n        [style.color]=\"model.theme.textColor\">\n        <div class=\"col-12\">\n          <h2>{{model.name}}</h2>\n        </div>\n        <div class=\"col-12\">\n          <p>{{model.description}}</p>\n        </div>\n        <div *ngIf=\"success\" class=\"col-12\">\n          <div class=\"form-group\">\n            <label>Your form has been submitted.</label>\n          </div>\n        </div>\n        <form (submit)=\"onSubmit()\" class=\"ftheme\">\n          <div *ngIf=\"!success\" class=\"col-12\">\n            <div *ngFor=\"let item of model.attributes\" class=\"form-group\">\n              <div *ngIf=\"item.type=='text'\">\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                <input type=\"text\" class=\"form-control\" name=\"{{item.name}}\" id=\"{{item.name}}\"\n                  placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"newSubmission[item.name]\" [required]=\"item.required\"\n                  [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n              </div>\n              <div *ngIf=\"item.type=='email'\">\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                <input type=\"email\" class=\"form-control\" name=\"{{item.name}}\" id=\"{{item.name}}\"\n                  placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"newSubmission[item.name]\"\n                  [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n              </div>\n              <div *ngIf=\"item.type=='phone'\">\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                <input type=\"email\" class=\"form-control\" name=\"{{item.name}}\" id=\"{{item.name}}\"\n                  placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"newSubmission[item.name]\"\n                  [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n              </div>\n              <div *ngIf=\"item.type=='number'\">\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                <input type=\"number\" class=\"form-control\" name=\"{{item.name}}\" id=\"{{item.name}}\" min=\"{{item.min}}\"\n                  max=\"{{item.max}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"newSubmission[item.name]\"\n                  [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n              </div>\n              <div *ngIf=\"item.type=='date'\">\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                <input type=\"date\" class=\"form-control\" name=\"{{item.name}}\" id=\"{{item.name}}\"\n                  placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"newSubmission[item.name]\"\n                  [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n              </div>\n              <div *ngIf=\"item.type=='datetime-local'\">\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                <input type=\"datetime-local\" class=\"form-control\" name=\"{{item.name}}\" id=\"{{item.name}}\"\n                  placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"newSubmission[item.name]\"\n                  [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n              </div>\n              <div *ngIf=\"item.type=='textarea'\">\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                <textarea class=\"form-control\" name=\"{{item.name}}\" id=\"{{item.name}}\"\n                  placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"newSubmission[item.name]\"\n                  [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n                  </textarea>\n              </div>\n              <div *ngIf=\"item.type=='file'\">\n                <label>{{item.label}} (File can't be uploaded right now)</label> <label *ngIf=\"item.required\"\n                  class=\"text-danger\">*</label>\n                <input type=\"file\" class=\"form-control\" name=\"{{item.name}}\" id=\"{{item.name}}\"\n                  placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"newSubmission[item.name]\"\n                  [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n                <small class=\"form-text text-danger\">(File can't be uploaded right now)</small>\n              </div>\n              <div *ngIf=\"item.type=='paragraph'\">\n                <p class=\"form-text\">{{item.placeholder}}</p>\n              </div>\n              <div *ngIf=\"item.type=='autocomplete'\">\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                <select class=\"form-control\" name=\"{{item.name}}\" id=\"{{item.name}}\"\n                  [(ngModel)]=\"newSubmission[item.name]\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let v of item.values\" [value]=\"v.value\">{{v.label}}</option>\n                </select>\n                <!-- <small class=\"form-text text-muted\">{{item.description}}</small> -->\n              </div>\n              <div *ngIf=\"item.type=='checkbox'\">\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\n                  <label class=\"cust-check-bx\">\n                    <input type=\"checkbox\" [value]=\"v.value\" name=\"{{item.name}}\" (click)=\"toggleValue(v)\"> {{v.label}}\n                    <span class=\"checkmark\"></span>\n                  </label>\n                </div>\n              </div>\n              <div *ngIf=\"item.type=='radio'\">\n                <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n                <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\n                  <label class=\"cust-check-bx\">\n                    <input type=\"radio\" [value]=\"v.value\" name=\"{{item.name}}\" [(ngModel)]=\"newSubmission[item.name]\"\n                      [ngModelOptions]=\"{standalone: true}\"> {{v.label}}\n                    <span class=\"checkmark\"></span>\n                  </label>\n                </div>\n              </div>\n              <div *ngIf=\"item.type=='button'\" class=\"btn-cont\">\n                <input type=\"{{item.subtype}}\" (click)=\"submit()\" value=\"{{item.label}}\" class=\"btn btn-primary\"\n                  name=\"{{item.name}}\" id=\"{{item.name}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"left\">\n            <button mat-raised-button color=\"accent\"><i class=\"material-icons\">send</i>Submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/submit-form/submit-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/submit-form/submit-form.component.ts ***!
  \******************************************************/
/*! exports provided: SubmitFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitFormComponent", function() { return SubmitFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SubmitFormComponent = /** @class */ (function () {
    function SubmitFormComponent(_user, _router, route) {
        this._user = _user;
        this._router = _router;
        this.route = route;
        this.model = {};
        this.userId = 0;
        this.formId = "";
        this.newSubmission = {};
    }
    SubmitFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var formId = this.route.snapshot.params["id"];
        console.log(formId);
        var observable = this._user.getForm(formId);
        observable.subscribe(function (data) {
            _this.model = data[0];
            _this.formId = data[0]._id;
            for (var _i = 0, _a = data[0].attributes; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.newSubmission[item.name] = "";
            }
        });
    };
    SubmitFormComponent.prototype.toggleValue = function (item) {
        item.selected = !item.selected;
    };
    SubmitFormComponent.prototype.onSubmit = function () {
        var observable = this._user.submitForm(this.newSubmission, this.formId);
        observable.subscribe(function (data) {
            console.log("Got the information from post data", data);
            // this.newSubmission = { title: "" }
        });
        console.log(this.newSubmission);
        this._router.navigate(['guest']);
    };
    SubmitFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-submit-form',
            template: __webpack_require__(/*! ./submit-form.component.html */ "./src/app/submit-form/submit-form.component.html"),
            styles: [__webpack_require__(/*! ./submit-form.component.css */ "./src/app/submit-form/submit-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SubmitFormComponent);
    return SubmitFormComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.register = function (body) {
        return this._http.post('http://127.0.0.1:3000/register', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    UserService.prototype.getUser = function () {
        return this._http.get('http://127.0.0.1:3000/getUser', {
            observe: 'body',
            withCredentials: true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    UserService.prototype.getName = function () {
        return this._http.get('http://127.0.0.1:3000/getName', {
            observe: 'body',
            withCredentials: true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    UserService.prototype.login = function (body) {
        return this._http.post('http://127.0.0.1:3000/login', body, {
            observe: 'body',
            withCredentials: true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    // user(){
    //   return this._http.get('http://127.0.0.1:3000/user',{
    //     observe:'body',
    //     withCredentials: true,
    //     headers:new HttpHeaders().append('Content-Type','application/json')
    //   })
    // }
    UserService.prototype.logout = function () {
        return this._http.get('http://127.0.0.1:3000/logout', {
            observe: 'body',
            withCredentials: true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    };
    UserService.prototype.getForm = function (formId) {
        return this._http.get('http://127.0.0.1:3000/viewForm/' + formId);
    };
    UserService.prototype.deleteForm = function (formId) {
        return this._http.get('http://127.0.0.1:3000/deleteForm/' + formId);
    };
    UserService.prototype.getForms = function (userId) {
        return this._http.get('http://127.0.0.1:3000/getForms/' + userId);
    };
    UserService.prototype.addForm = function (newForm, userId) {
        console.log('this is userid:' + userId);
        return this._http.post('/new/form/' + userId, newForm);
    };
    UserService.prototype.submitForm = function (newSubmission, formId) {
        return this._http.post('/submitForm/' + formId, newSubmission);
    };
    UserService.prototype.addElement = function (newElement, formId) {
        return this._http.post('/new/element/' + formId, newElement);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/userhome/userhome.component.css":
/*!*************************************************!*\
  !*** ./src/app/userhome/userhome.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body { height: 100%; }\n\n.spacer{\n  flex: 1 1 auto;\n}\n\n.formbtn{\n  height: 35px;\n  width: 150px;\n  font-size: 16px;\n  cursor: pointer;\n  /* border-radius: 10px; */\n  text-align: center;\n  padding: 0;\n}\n\n.app-toolbar {\n  position: sticky;\n  position: -webkit-sticky; /* For macOS/iOS Safari */\n  top: 0; /* Sets the sticky toolbar to be on top */\n  z-index: 1000; /* Ensure that your app's content doesn't overlap the toolbar */\n}\n\n:host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\nh1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\np {\n    margin: 0;\n  }\n\n.toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n.toolbar img {\n    margin: 0 16px;\n  }\n\n.toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n.toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n.content {\n    display: flex;\n    margin:  auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    /* align-items: center; */\n  }\n\n.left{\n  /* padding-top: 10px; */\n  position: absolute;\n  top: 23%;\n  left: 85%;\n   \n  }\n\n.view{\n    background-color: #018786;\n    color: white;\n  }\n\n.mat-card {\n    max-width: 250px;\n    margin: 5px 10px auto;\n    align-self: auto;\n  }\n\n.mat-card-avatar{\n    background-image: url('formhead.jpg');\n    background-size: cover;\n  }\n\n.mat-card-actions{\n    display: flex;\n  }\n\n.mat-card-actions button{\n    margin: 3px;\n  }\n\n.mat-card-actions .flex-spacer{\n    width: 100%;\n  }\n\nsvg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\nsvg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n.card svg.material-icons path {\n    fill: #888;\n  }\n\n.card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: left;\n    margin-top: 16px;\n  }\n\n.card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n.card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n.card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n.card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n.card-container .card:not(.highlight-card):hover {\n    -webkit-transform: translateY(-3px);\n            transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n.card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n.card.highlight-card {\n    background-color: #7792ad;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n.card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\na,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\na:hover {\n    color: #125699;\n  }\n\n.circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n.circle-link:hover {\n    -webkit-transform: translateY(-0.25rem);\n            transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\nfooter {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\nfooter a {\n    display: flex;\n    align-items: center;\n  }\n\nsvg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n/* Responsive Styles */\n\n@media screen and (max-width: 767px) {\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n    svg#rocket-smoke {\n      right: 120px;\n      -webkit-transform: rotate(-5deg);\n              transform: rotate(-5deg);\n    }\n  }\n\n@media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmhvbWUvdXNlcmhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLGFBQWEsRUFBRTs7QUFFNUI7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsV0FBVztDQUNaOztBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QixDQUFDLDBCQUEwQjtFQUNwRCxPQUFPLENBQUMsMENBQTBDO0VBQ2xELGNBQWMsQ0FBQyxnRUFBZ0U7Q0FDaEY7O0FBQ0Q7SUFDSSwySkFBMko7SUFDM0osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLG1DQUFtQztHQUNwQzs7QUFDRDs7Ozs7O0lBTUUsY0FBYztHQUNmOztBQUNEO0lBQ0UsVUFBVTtHQUNYOztBQUNEO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsaUJBQWlCO0dBQ2xCOztBQUNEO0lBQ0UsZUFBZTtHQUNoQjs7QUFDRDtJQUNFLGFBQWE7SUFDYixlQUFlO0dBQ2hCOztBQUNEO0lBQ0UsYUFBYTtHQUNkOztBQUNEO0lBQ0UsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QiwwQkFBMEI7R0FDM0I7O0FBQ0g7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVOztHQUVUOztBQUNEO0lBQ0UsMEJBQTBCO0lBQzFCLGFBQWE7R0FDZDs7QUFDRDtJQUNFLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsaUJBQWlCO0dBQ2xCOztBQUNEO0lBQ0Usc0NBQXFEO0lBQ3JELHVCQUF1QjtHQUN4Qjs7QUFDRDtJQUNFLGNBQWM7R0FDZjs7QUFDRDtJQUNFLFlBQVk7R0FDYjs7QUFDRDtJQUNFLFlBQVk7R0FDYjs7QUFDRDtJQUNFLGFBQWE7SUFDYixZQUFZO0dBQ2I7O0FBQ0Q7SUFDRSxrQkFBa0I7R0FDbkI7O0FBQ0Q7SUFDRSxXQUFXO0dBQ1o7O0FBQ0Q7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQkFBaUI7R0FDbEI7O0FBQ0Q7SUFDRSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsY0FBYztJQUNkLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGlDQUFpQztJQUNqQyxrQkFBa0I7R0FDbkI7O0FBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7O0FBQ0Q7SUFDRSxhQUFhO0lBQ2IsYUFBYTtHQUNkOztBQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCOztBQUNEO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1Qix5Q0FBeUM7R0FDMUM7O0FBQ0Q7SUFDRSx5QkFBeUI7R0FDMUI7O0FBQ0Q7SUFDRSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7R0FDcEI7O0FBQ0Q7SUFDRSxrQkFBa0I7R0FDbkI7O0FBQ0Q7OztJQUdFLGVBQWU7SUFDZixzQkFBc0I7R0FDdkI7O0FBQ0Q7SUFDRSxlQUFlO0dBQ2hCOztBQUNEO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHlFQUF5RTtJQUN6RSx3QkFBd0I7R0FDekI7O0FBQ0Q7SUFDRSx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLDRDQUE0QztHQUM3Qzs7QUFDRDtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGtCQUFrQjtHQUNuQjs7QUFDRDtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7R0FDckI7O0FBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2IsY0FBYztHQUNmOztBQUNELHVCQUF1Qjs7QUFDdkI7SUFDRTs7TUFFRSxZQUFZO0tBQ2I7SUFDRDtNQUNFLGFBQWE7TUFDYixjQUFjO0tBQ2Y7SUFDRDtNQUNFLGtCQUFrQjtLQUNuQjtJQUNEO01BQ0UsYUFBYTtNQUNiLGlDQUF5QjtjQUF6Qix5QkFBeUI7S0FDMUI7R0FDRjs7QUFDRDtJQUNFO01BQ0UsY0FBYztNQUNkLG1CQUFtQjtLQUNwQjtHQUNGIiwiZmlsZSI6InNyYy9hcHAvdXNlcmhvbWUvdXNlcmhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkgeyBoZWlnaHQ6IDEwMCU7IH1cblxuLnNwYWNlcntcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5mb3JtYnRue1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cbi5hcHAtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogRm9yIG1hY09TL2lPUyBTYWZhcmkgKi9cbiAgdG9wOiAwOyAvKiBTZXRzIHRoZSBzdGlja3kgdG9vbGJhciB0byBiZSBvbiB0b3AgKi9cbiAgei1pbmRleDogMTAwMDsgLyogRW5zdXJlIHRoYXQgeW91ciBhcHAncyBjb250ZW50IGRvZXNuJ3Qgb3ZlcmxhcCB0aGUgdG9vbGJhciAqL1xufVxuOmhvc3Qge1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB9XG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC50b29sYmFyIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luOiAtOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIC50b29sYmFyIGltZyB7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG4gIH1cbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICB9XG4gIC50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46ICBhdXRvO1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgfVxuLmxlZnR7XG4gIC8qIHBhZGRpbmctdG9wOiAxMHB4OyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjMlO1xuICBsZWZ0OiA4NSU7XG4gICBcbiAgfVxuICAudmlld3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4Nzg2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAubWF0LWNhcmQge1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgbWFyZ2luOiA1cHggMTBweCBhdXRvO1xuICAgIGFsaWduLXNlbGY6IGF1dG87XG4gIH1cbiAgLm1hdC1jYXJkLWF2YXRhcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9mb3JtaGVhZC5qcGcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgLm1hdC1jYXJkLWFjdGlvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAubWF0LWNhcmQtYWN0aW9ucyBidXR0b257XG4gICAgbWFyZ2luOiAzcHg7XG4gIH1cbiAgLm1hdC1jYXJkLWFjdGlvbnMgLmZsZXgtc3BhY2Vye1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIHN2Zy5tYXRlcmlhbC1pY29ucyB7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIHN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxuICAuY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG4gICAgZmlsbDogIzg4ODtcbiAgfVxuICAuY2FyZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG4gIC5jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiAwIDhweCAxNnB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIH1cbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICAuY2FyZC5jYXJkLXNtYWxsIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2OHB4O1xuICB9XG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYShibGFjaywgMC4zNSk7XG4gIH1cbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XG4gIH1cbiAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NzkyYWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1pbi13aWR0aDogMzAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICB9XG4gIGEsXG4gIGE6dmlzaXRlZCxcbiAgYTpob3ZlciB7XG4gICAgY29sb3I6ICMxOTc2ZDI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTI1Njk5O1xuICB9XG4gIC5jaXJjbGUtbGluayB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcbiAgfVxuICAuY2lyY2xlLWxpbms6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuICBmb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgZm9vdGVyIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBzdmcjY2xvdWRzIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAtMTYwcHg7XG4gICAgbGVmdDogLTIzMHB4O1xuICAgIHotaW5kZXg6IC0xMDtcbiAgICB3aWR0aDogMTkyMHB4O1xuICB9XG4gIC8qIFJlc3BvbnNpdmUgU3R5bGVzICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSAsXG4gICAgLnRlcm1pbmFsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW46IDhweCAwO1xuICAgIH1cbiAgICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xuICAgIH1cbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICAgIHJpZ2h0OiAxMjBweDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/userhome/userhome.component.html":
/*!**************************************************!*\
  !*** ./src/app/userhome/userhome.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav> </app-nav>\n\n<div class=\"left\">\n  <a mat-raised-button class=\"formbtn\" color=\"accent\" style=\"color: white;\" [routerLink]=\"['/user']\"> <mat-icon class=\"example-icon\" aria-hidden=\"false\"\n    aria-label=\"Example user note_add icon\">note_add</mat-icon>Create Form</a>\n</div>\n<div class=\"card-container\">\n    <div *ngFor=\"let form of forms\" >\n\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>{{form.name}}</mat-card-title>\n    </mat-card-header>\n    <img mat-card-image src=\"../../assets/img/formhead.jpg\" alt=\"form\">\n    <mat-card-content>\n      <p>\n        {{form.description}}\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n        <button mat-mini-fab class=\"view\" [routerLink]=\"['/viewall',form._id]\" aria-label=\"Example icon-button with a insert_chart icon\">\n          <mat-icon>insert_chart  </mat-icon></button>\n        <button mat-mini-fab color=\"primary\"  [routerLink]=\"['/view',form._id]\" aria-label=\"Example icon-button with a visibility icon\">\n          <mat-icon>visibility</mat-icon></button>\n        <button mat-mini-fab color=\"warn\"  (click)=\"delete(form._id)\" aria-label=\"Example icon-button with a delete icon\">\n          <mat-icon>delete</mat-icon></button>\n      <!-- <button mat-raised-button class=\"view\" [routerLink]=\"['/viewall',form._id]\"  >Responses</button> -->\n      <!-- <button mat-raised-button color=\"primary\"  [routerLink]=\"['/view',form._id]\">View</button> <span class=\"spacer\"></span>\n      <button mat-raised-button color=\"warn\"  (click)=\"delete(form._id)\">Delete</button> -->\n    </mat-card-actions>\n   </mat-card>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/userhome/userhome.component.ts":
/*!************************************************!*\
  !*** ./src/app/userhome/userhome.component.ts ***!
  \************************************************/
/*! exports provided: UserhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserhomeComponent", function() { return UserhomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserhomeComponent = /** @class */ (function () {
    function UserhomeComponent(_user, _router) {
        this._user = _user;
        this._router = _router;
        // userId: any = 0;
        this.forms = {};
    }
    UserhomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrooooooottttteeeeerrrr", this._router.url);
        var userId = 0;
        this._user.getUser()
            .subscribe(function (data) {
            userId = data;
            console.log(data);
            var observable = _this._user.getForms(userId);
            observable.subscribe(function (data) {
                _this.forms = data;
            });
        }, function (error) { return _this._router.navigate(['/login']); });
    };
    UserhomeComponent.prototype.publish = function (id) {
        window.open("http://localhost:3000/form/5db409eda68282468c08e795");
    };
    UserhomeComponent.prototype.delete = function (formId) {
        var observable = this._user.deleteForm(formId);
        observable.subscribe(function (data) {
            console.log("Got the information from post data", data);
        });
        this._router.navigate(['/home']);
    };
    UserhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userhome',
            template: __webpack_require__(/*! ./userhome.component.html */ "./src/app/userhome/userhome.component.html"),
            styles: [__webpack_require__(/*! ./userhome.component.css */ "./src/app/userhome/userhome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserhomeComponent);
    return UserhomeComponent;
}());



/***/ }),

/***/ "./src/app/view-form/view-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/view-form/view-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left{\n    margin: 30px;\n}\n.spacer{\n    flex: 1 1 auto;\n  }\n.left{\n    position: absolute;\n    top: 23%;\n    left: 85%;\n    display: inline-block;\n}\n.left a{\n    height: 35px;\n    width: 150px;\n    font-size: 16px;\n    cursor: pointer;\n    /* border-radius: 10px; */\n    text-align: center;\n    padding: 0;\n    margin-bottom: 10px;\n\n    \n}\n.left .tap{\n    font-size: 15px;\n    padding: 0;\n    background-color: #018786;\n    color: white;\n\n}\n.row2{\n    /* border-radius:15px;\n    -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);\n    -moz-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);\n    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);*/\n    /* margin: 30px 10px auto;  */\n    position: absolute;\n    top: 30%;\n    left: 30%;\n    max-width:800px;\n    text-align: left;\n    /* padding: 60px 20px;\n    padding-bottom: 10px;\n    box-sizing: border-box;\n    background :#eff0f2; */\n \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1mb3JtL3ZpZXctZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksZUFBZTtHQUNoQjtBQUNEO0lBQ0UsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsb0JBQW9COzs7Q0FHdkI7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGFBQWE7O0NBRWhCO0FBRUQ7SUFDSTs7O2tEQUc4QztJQUM5Qyw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQjs7OzJCQUd1Qjs7Q0FFMUIiLCJmaWxlIjoic3JjL2FwcC92aWV3LWZvcm0vdmlldy1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdHtcbiAgICBtYXJnaW46IDMwcHg7XG59XG4uc3BhY2Vye1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG4gIC5sZWZ0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIzJTtcbiAgICBsZWZ0OiA4NSU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubGVmdCBhe1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICBcbn1cblxuLmxlZnQgLnRhcHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4Nzg2O1xuICAgIGNvbG9yOiB3aGl0ZTtcblxufVxuXG4ucm93MntcbiAgICAvKiBib3JkZXItcmFkaXVzOjE1cHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiYSgwLDAsMCwwLjIpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggcmdiYSgwLDAsMCwwLjIpOyovXG4gICAgLyogbWFyZ2luOiAzMHB4IDEwcHggYXV0bzsgICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzAlO1xuICAgIGxlZnQ6IDMwJTtcbiAgICBtYXgtd2lkdGg6ODAwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAvKiBwYWRkaW5nOiA2MHB4IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kIDojZWZmMGYyOyAqL1xuIFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/view-form/view-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/view-form/view-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav> </app-nav>\n\n<div class=\"container\" >\n<div class=\"row2\" [style.backgroundColor]=\"model.theme.bgColor\"\n  [style.color]=\"model.theme.textColor\">\n  <div class=\"col-16\">\n    <h2>{{model.name}}</h2>\n  </div>\n  <div class=\"col-16\">\n    <p>{{model.description}}</p>\n  </div>\n  <form class=\"ftheme\">\n    <div *ngIf=\"!success\" class=\"col-16\">\n      <div *ngFor=\"let item of model.attributes\" class=\"form-group\">\n        <div *ngIf=\"item.type=='text'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <input type=\"text\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n            [(ngModel)]=\"item.value\" [required]=\"item.required\" [ngModelOptions]=\"{standalone: true}\"\n            autocomplete=\"off\">\n        </div>\n        <div *ngIf=\"item.type=='email'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <input type=\"email\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n            [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n        </div>\n        <div *ngIf=\"item.type=='phone'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <input type=\"email\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n            [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n        </div>\n        <div *ngIf=\"item.type=='number'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <input type=\"number\" class=\"form-control\" id=\"{{item.name}}\" min=\"{{item.min}}\" max=\"{{item.max}}\"\n            placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\"\n            autocomplete=\"off\">\n        </div>\n        <div *ngIf=\"item.type=='date'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <input type=\"date\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n            [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n        </div>\n        <div *ngIf=\"item.type=='datetime-local'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <input type=\"datetime-local\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n            [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n        </div>\n        <div *ngIf=\"item.type=='textarea'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <textarea class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n            [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n        </textarea>\n        </div>\n        <div *ngIf=\"item.type=='file'\">\n          <label>{{item.label}} (File can't be uploaded right now)</label> <label *ngIf=\"item.required\"\n            class=\"text-danger\">*</label>\n          <input type=\"file\" class=\"form-control\" id=\"{{item.name}}\" placeholder=\"{{item.placeholder}}\"\n            [(ngModel)]=\"item.value\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\">\n          <small class=\"form-text text-danger\">(File can't be uploaded right now)</small>\n        </div>\n        <div *ngIf=\"item.type=='paragraph'\">\n          <p class=\"form-text\">{{item.placeholder}}</p>\n        </div>\n        <div *ngIf=\"item.type=='autocomplete'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <select class=\"form-control\" id=\"{{item.name}}\" [(ngModel)]=\"item.value\"\n            [ngModelOptions]=\"{standalone: true}\">\n            <option *ngFor=\"let v of item.values\" [value]=\"v.value\">{{v.label}}</option>\n          </select>\n          <!-- <small class=\"form-text text-muted\">{{item.description}}</small> -->\n        </div>\n        <div *ngIf=\"item.type=='checkbox'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\n            <label class=\"cust-check-bx\">\n              <input type=\"checkbox\" [value]=\"v.value\" name=\"{{item.name}}\" (click)=\"toggleValue(v)\"> {{v.label}}\n              <span class=\"checkmark\"></span>\n            </label>\n          </div>\n        </div>\n        <div *ngIf=\"item.type=='radio'\">\n          <label>{{item.label}}</label> <label *ngIf=\"item.required\" class=\"text-danger\">*</label>\n          <div *ngFor=\"let v of item.values\" class=\"inline-form-group\">\n            <label class=\"cust-check-bx\">\n              <input type=\"radio\" [value]=\"v.value\" name=\"{{item.name}}\" [(ngModel)]=\"item.value\"\n                [ngModelOptions]=\"{standalone: true}\"> {{v.label}}\n              <span class=\"checkmark\"></span>\n            </label>\n          </div>\n        </div>\n        <div *ngIf=\"item.type=='button'\" class=\"btn-cont\">\n          <input type=\"{{item.subtype}}\" (click)=\"submit()\" value=\"{{item.label}}\" class=\"btn btn-primary\"\n            id=\"{{item.name}}\">\n        </div>\n      </div>\n\n      <!-- <p (click)=\"show=1\" class=\"marginT60 pointer\">Show developer data</p> -->\n    </div>\n  </form>\n</div>\n</div>\n<div class=\"left\">\n  <a mat-raised-button class=\"tap\" target=\"_blank\" [routerLink]=\"['/form',model._id]\"><mat-icon class=\"example-icon\" aria-hidden=\"false\"\n    aria-label=\"Example user open_in_new icon\">open_in_new</mat-icon>Open in New Tap</a> \n    <input type=\"text\" value=\"http://localhost:3000/form/{{model._id}}\" #userinput style=\"display: none\">\n    <a mat-raised-button color=\"primary\" (click)=\"copyInputMessage(userinput)\" ><mat-icon class=\"example-icon\" aria-hidden=\"false\"\n      aria-label=\"Example user link icon\">link</mat-icon>Copy Link</a> \n</div>"

/***/ }),

/***/ "./src/app/view-form/view-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-form/view-form.component.ts ***!
  \**************************************************/
/*! exports provided: ViewFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewFormComponent", function() { return ViewFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);






var ViewFormComponent = /** @class */ (function () {
    function ViewFormComponent(_user, _router, route) {
        this._user = _user;
        this._router = _router;
        this.route = route;
        this.model = {};
        this.userId = 0;
    }
    ViewFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var formId = this.route.snapshot.params["id"];
        console.log(formId);
        var observable = this._user.getForm(formId);
        observable.subscribe(function (data) {
            _this.model = data[0];
            console.log("Got the information from post data", _this.model);
        });
    };
    ViewFormComponent.prototype.copyInputMessage = function (inputElement) {
        console.log("cccllllliiiiccckkkkeeeeddd");
        inputElement.select();
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Copied to Clipboard!', '', 'success');
    };
    ViewFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-form',
            template: __webpack_require__(/*! ./view-form.component.html */ "./src/app/view-form/view-form.component.html"),
            styles: [__webpack_require__(/*! ./view-form.component.css */ "./src/app/view-form/view-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ViewFormComponent);
    return ViewFormComponent;
}());



/***/ }),

/***/ "./src/app/viewallsub/viewallsub.component.css":
/*!*****************************************************!*\
  !*** ./src/app/viewallsub/viewallsub.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row2{\n  display: inline-block;\n   width: 100%;\n   padding:20px;\n   background-color:#eff0f2;\n   border-radius:15px;\n  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);\n  font-size: 12px;\n}\n\n:host {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  }\n\nmat-tab-group{\n    justify-self: center;\n  }\n\n.spacer{\n  flex: 1 1 auto;\n}\n\n.text-center {\n    text-align: center;\n  }\n\n.list {\n    max-width: 900px;\n    margin: auto;\n  }\n\nli {\n    margin-bottom: 5px;\n  }\n\n.element{\n    display: inline;\n  }\n\n.textareashow{\n  overflow-y:scroll;\n  width: 100%;\n  height: 150px;\n  background-color: white ;\n  border: 1px solid lightgray;\n  \n}\n\n.column-chart,\n.bar-chart,\n.scatter-plot {\n  position: relative;\n  min-width: 100px;\n  min-height: 100px;\n  padding: 0;\n  margin: 0;\n}\n\n.column-chart .chart-column,\n.bar-chart .chart-row,\n.column-chart [data-cp-size],\n.bar-chart [data-cp-size],\n.plot-container > * > * {\n  list-style: none;\n  border: 1px solid #ffffff;\n}\n\n.column-chart .plot-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  position: absolute;\n  text-align: center;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 0;\n  margin: 0;\n  min-height: 100px;\n}\n\n.column-chart.stacked > * > * {\n  height: 100%;\n  -webkit-transform: scaleY(-1);\n  transform: scaleY(-1);\n}\n\n.column-chart.stacked .group-by-number [data-cp-size] {\n  -webkit-transform: scaleY(-1);\n  transform: scaleY(-1);\n}\n\n.column-chart .chart-column,\n.column-chart [data-cp-size],\n.column-chart.stacked > * > * {\n  flex-grow: 1;\n  align-self: flex-end;\n}\n\n.column-chart .chart-column,\n.bar-chart .chart-row,\n.column-chart [data-cp-size],\n.bar-chart [data-cp-size] {\n  background: #3498db;\n  color: #ffffff;\n  box-sizing: border-box;\n}\n\n.bar-chart {\n  clear: both;\n}\n\n.bar-chart .plot-container {\n  flex-direction: row;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\n\n.bar-chart .chart-row,\n.bar-chart [data-cp-size] {\n  min-height: 8px;\n}\n\n.bar-chart.stacked > * > * {\n  display: flex;\n}\n\n.bar-chart.stacked .group-by-number [data-cp-size] {\n  display: inline-block;\n}\n\n.scatter-plot .plot-container {\n  position: absolute;\n  top: 12px;\n  left: 0;\n  right: 12px;\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n}\n\n.scatter-plot .chart-dot,\n.scatter-plot .chart-dot,\n.scatter-plot [data-cp-x],\n.scatter-plot [data-cp-y] {\n  position: absolute;\n  height: 0;\n  width: 0;\n  list-style: none;\n  overflow: hidden;\n  border: 6px solid #3498db;\n  border-radius: 100%;\n}\n\n.column-chart,\n.bar-chart,\n.scatter-plot {\n  position: relative;\n  min-width: 100px;\n  min-height: 100px;\n  padding: 0;\n  margin: 0;\n}\n\n.column-chart .chart-column,\n.bar-chart .chart-row,\n.column-chart [data-cp-size],\n.bar-chart [data-cp-size],\n.plot-container > * > * {\n  list-style: none;\n  border: 1px solid #ffffff;\n}\n\n.column-chart .plot-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  position: absolute;\n  text-align: center;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 0;\n  margin: 0;\n  min-height: 100px;\n}\n\n.column-chart.stacked > * > * {\n  height: 100%;\n  -webkit-transform: scaleY(-1);\n  transform: scaleY(-1);\n}\n\n.column-chart.stacked .group-by-number [data-cp-size] {\n  -webkit-transform: scaleY(-1);\n  transform: scaleY(-1);\n}\n\n.column-chart .chart-column,\n.column-chart [data-cp-size],\n.column-chart.stacked > * > * {\n  flex-grow: 1;\n  align-self: flex-end;\n}\n\n.column-chart .chart-column,\n.bar-chart .chart-row,\n.column-chart [data-cp-size],\n.bar-chart [data-cp-size] {\n  background: #3498db;\n  color: #ffffff;\n  box-sizing: border-box;\n}\n\n.bar-chart {\n  clear: both;\n}\n\n.bar-chart .plot-container {\n  flex-direction: row;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n}\n\n.bar-chart .chart-row,\n.bar-chart [data-cp-size] {\n  min-height: 8px;\n}\n\n.bar-chart.stacked > * > * {\n  display: flex;\n}\n\n.bar-chart.stacked .group-by-number [data-cp-size] {\n  display: inline-block;\n}\n\n.scatter-plot .plot-container {\n  position: absolute;\n  top: 12px;\n  left: 0;\n  right: 12px;\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n}\n\n.scatter-plot .chart-dot,\n.scatter-plot .chart-dot,\n.scatter-plot [data-cp-x],\n.scatter-plot [data-cp-y] {\n  position: absolute;\n  height: 0;\n  width: 0;\n  list-style: none;\n  overflow: hidden;\n  border: 6px solid #3498db;\n  border-radius: 100%;\n}\n\n.column-chart .plot-container [data-cp-size=\"0\"] {\n  height: 0%;\n}\n\n.column-chart .plot-container [data-cp-size=\"1\"] {\n  height: 1%;\n}\n\n.column-chart .plot-container [data-cp-size=\"2\"] {\n  height: 2%;\n}\n\n.column-chart .plot-container [data-cp-size=\"3\"] {\n  height: 3%;\n}\n\n.column-chart .plot-container [data-cp-size=\"4\"] {\n  height: 4%;\n}\n\n.column-chart .plot-container [data-cp-size=\"5\"] {\n  height: 5%;\n}\n\n.column-chart .plot-container [data-cp-size=\"6\"] {\n  height: 6%;\n}\n\n.column-chart .plot-container [data-cp-size=\"7\"] {\n  height: 7%;\n}\n\n.column-chart .plot-container [data-cp-size=\"8\"] {\n  height: 8%;\n}\n\n.column-chart .plot-container [data-cp-size=\"9\"] {\n  height: 9%;\n}\n\n.column-chart .plot-container [data-cp-size=\"10\"] {\n  height: 10%;\n}\n\n.column-chart .plot-container [data-cp-size=\"11\"] {\n  height: 11%;\n}\n\n.column-chart .plot-container [data-cp-size=\"12\"] {\n  height: 12%;\n}\n\n.column-chart .plot-container [data-cp-size=\"13\"] {\n  height: 13%;\n}\n\n.column-chart .plot-container [data-cp-size=\"14\"] {\n  height: 14%;\n}\n\n.column-chart .plot-container [data-cp-size=\"15\"] {\n  height: 15%;\n}\n\n.column-chart .plot-container [data-cp-size=\"16\"] {\n  height: 16%;\n}\n\n.column-chart .plot-container [data-cp-size=\"17\"] {\n  height: 17%;\n}\n\n.column-chart .plot-container [data-cp-size=\"18\"] {\n  height: 18%;\n}\n\n.column-chart .plot-container [data-cp-size=\"19\"] {\n  height: 19%;\n}\n\n.column-chart .plot-container [data-cp-size=\"20\"] {\n  height: 20%;\n}\n\n.column-chart .plot-container [data-cp-size=\"21\"] {\n  height: 21%;\n}\n\n.column-chart .plot-container [data-cp-size=\"22\"] {\n  height: 22%;\n}\n\n.column-chart .plot-container [data-cp-size=\"23\"] {\n  height: 23%;\n}\n\n.column-chart .plot-container [data-cp-size=\"24\"] {\n  height: 24%;\n}\n\n.column-chart .plot-container [data-cp-size=\"25\"] {\n  height: 25%;\n}\n\n.column-chart .plot-container [data-cp-size=\"26\"] {\n  height: 26%;\n}\n\n.column-chart .plot-container [data-cp-size=\"27\"] {\n  height: 27%;\n}\n\n.column-chart .plot-container [data-cp-size=\"28\"] {\n  height: 28%;\n}\n\n.column-chart .plot-container [data-cp-size=\"29\"] {\n  height: 29%;\n}\n\n.column-chart .plot-container [data-cp-size=\"30\"] {\n  height: 30%;\n}\n\n.column-chart .plot-container [data-cp-size=\"31\"] {\n  height: 31%;\n}\n\n.column-chart .plot-container [data-cp-size=\"32\"] {\n  height: 32%;\n}\n\n.column-chart .plot-container [data-cp-size=\"33\"] {\n  height: 33%;\n}\n\n.column-chart .plot-container [data-cp-size=\"34\"] {\n  height: 34%;\n}\n\n.column-chart .plot-container [data-cp-size=\"35\"] {\n  height: 35%;\n}\n\n.column-chart .plot-container [data-cp-size=\"36\"] {\n  height: 36%;\n}\n\n.column-chart .plot-container [data-cp-size=\"37\"] {\n  height: 37%;\n}\n\n.column-chart .plot-container [data-cp-size=\"38\"] {\n  height: 38%;\n}\n\n.column-chart .plot-container [data-cp-size=\"39\"] {\n  height: 39%;\n}\n\n.column-chart .plot-container [data-cp-size=\"40\"] {\n  height: 40%;\n}\n\n.column-chart .plot-container [data-cp-size=\"41\"] {\n  height: 41%;\n}\n\n.column-chart .plot-container [data-cp-size=\"42\"] {\n  height: 42%;\n}\n\n.column-chart .plot-container [data-cp-size=\"43\"] {\n  height: 43%;\n}\n\n.column-chart .plot-container [data-cp-size=\"44\"] {\n  height: 44%;\n}\n\n.column-chart .plot-container [data-cp-size=\"45\"] {\n  height: 45%;\n}\n\n.column-chart .plot-container [data-cp-size=\"46\"] {\n  height: 46%;\n}\n\n.column-chart .plot-container [data-cp-size=\"47\"] {\n  height: 47%;\n}\n\n.column-chart .plot-container [data-cp-size=\"48\"] {\n  height: 48%;\n}\n\n.column-chart .plot-container [data-cp-size=\"49\"] {\n  height: 49%;\n}\n\n.column-chart .plot-container [data-cp-size=\"50\"] {\n  height: 50%;\n}\n\n.column-chart .plot-container [data-cp-size=\"51\"] {\n  height: 51%;\n}\n\n.column-chart .plot-container [data-cp-size=\"52\"] {\n  height: 52%;\n}\n\n.column-chart .plot-container [data-cp-size=\"53\"] {\n  height: 53%;\n}\n\n.column-chart .plot-container [data-cp-size=\"54\"] {\n  height: 54%;\n}\n\n.column-chart .plot-container [data-cp-size=\"55\"] {\n  height: 55%;\n}\n\n.column-chart .plot-container [data-cp-size=\"56\"] {\n  height: 56%;\n}\n\n.column-chart .plot-container [data-cp-size=\"57\"] {\n  height: 57%;\n}\n\n.column-chart .plot-container [data-cp-size=\"58\"] {\n  height: 58%;\n}\n\n.column-chart .plot-container [data-cp-size=\"59\"] {\n  height: 59%;\n}\n\n.column-chart .plot-container [data-cp-size=\"60\"] {\n  height: 60%;\n}\n\n.column-chart .plot-container [data-cp-size=\"61\"] {\n  height: 61%;\n}\n\n.column-chart .plot-container [data-cp-size=\"62\"] {\n  height: 62%;\n}\n\n.column-chart .plot-container [data-cp-size=\"63\"] {\n  height: 63%;\n}\n\n.column-chart .plot-container [data-cp-size=\"64\"] {\n  height: 64%;\n}\n\n.column-chart .plot-container [data-cp-size=\"65\"] {\n  height: 65%;\n}\n\n.column-chart .plot-container [data-cp-size=\"66\"] {\n  height: 66%;\n}\n\n.column-chart .plot-container [data-cp-size=\"67\"] {\n  height: 67%;\n}\n\n.column-chart .plot-container [data-cp-size=\"68\"] {\n  height: 68%;\n}\n\n.column-chart .plot-container [data-cp-size=\"69\"] {\n  height: 69%;\n}\n\n.column-chart .plot-container [data-cp-size=\"70\"] {\n  height: 70%;\n}\n\n.column-chart .plot-container [data-cp-size=\"71\"] {\n  height: 71%;\n}\n\n.column-chart .plot-container [data-cp-size=\"72\"] {\n  height: 72%;\n}\n\n.column-chart .plot-container [data-cp-size=\"73\"] {\n  height: 73%;\n}\n\n.column-chart .plot-container [data-cp-size=\"74\"] {\n  height: 74%;\n}\n\n.column-chart .plot-container [data-cp-size=\"75\"] {\n  height: 75%;\n}\n\n.column-chart .plot-container [data-cp-size=\"76\"] {\n  height: 76%;\n}\n\n.column-chart .plot-container [data-cp-size=\"77\"] {\n  height: 77%;\n}\n\n.column-chart .plot-container [data-cp-size=\"78\"] {\n  height: 78%;\n}\n\n.column-chart .plot-container [data-cp-size=\"79\"] {\n  height: 79%;\n}\n\n.column-chart .plot-container [data-cp-size=\"80\"] {\n  height: 80%;\n}\n\n.column-chart .plot-container [data-cp-size=\"81\"] {\n  height: 81%;\n}\n\n.column-chart .plot-container [data-cp-size=\"82\"] {\n  height: 82%;\n}\n\n.column-chart .plot-container [data-cp-size=\"83\"] {\n  height: 83%;\n}\n\n.column-chart .plot-container [data-cp-size=\"84\"] {\n  height: 84%;\n}\n\n.column-chart .plot-container [data-cp-size=\"85\"] {\n  height: 85%;\n}\n\n.column-chart .plot-container [data-cp-size=\"86\"] {\n  height: 86%;\n}\n\n.column-chart .plot-container [data-cp-size=\"87\"] {\n  height: 87%;\n}\n\n.column-chart .plot-container [data-cp-size=\"88\"] {\n  height: 88%;\n}\n\n.column-chart .plot-container [data-cp-size=\"89\"] {\n  height: 89%;\n}\n\n.column-chart .plot-container [data-cp-size=\"90\"] {\n  height: 90%;\n}\n\n.column-chart .plot-container [data-cp-size=\"91\"] {\n  height: 91%;\n}\n\n.column-chart .plot-container [data-cp-size=\"92\"] {\n  height: 92%;\n}\n\n.column-chart .plot-container [data-cp-size=\"93\"] {\n  height: 93%;\n}\n\n.column-chart .plot-container [data-cp-size=\"94\"] {\n  height: 94%;\n}\n\n.column-chart .plot-container [data-cp-size=\"95\"] {\n  height: 95%;\n}\n\n.column-chart .plot-container [data-cp-size=\"96\"] {\n  height: 96%;\n}\n\n.column-chart .plot-container [data-cp-size=\"97\"] {\n  height: 97%;\n}\n\n.column-chart .plot-container [data-cp-size=\"98\"] {\n  height: 98%;\n}\n\n.column-chart .plot-container [data-cp-size=\"99\"] {\n  height: 99%;\n}\n\n.column-chart .plot-container [data-cp-size=\"100\"] {\n  height: 100%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"0\"] {\n  width: 0%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"1\"] {\n  width: 1%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"2\"] {\n  width: 2%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"3\"] {\n  width: 3%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"4\"] {\n  width: 4%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"5\"] {\n  width: 5%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"6\"] {\n  width: 6%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"7\"] {\n  width: 7%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"8\"] {\n  width: 8%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"9\"] {\n  width: 9%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"10\"] {\n  width: 10%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"11\"] {\n  width: 11%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"12\"] {\n  width: 12%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"13\"] {\n  width: 13%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"14\"] {\n  width: 14%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"15\"] {\n  width: 15%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"16\"] {\n  width: 16%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"17\"] {\n  width: 17%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"18\"] {\n  width: 18%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"19\"] {\n  width: 19%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"20\"] {\n  width: 20%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"21\"] {\n  width: 21%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"22\"] {\n  width: 22%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"23\"] {\n  width: 23%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"24\"] {\n  width: 24%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"25\"] {\n  width: 25%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"26\"] {\n  width: 26%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"27\"] {\n  width: 27%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"28\"] {\n  width: 28%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"29\"] {\n  width: 29%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"30\"] {\n  width: 30%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"31\"] {\n  width: 31%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"32\"] {\n  width: 32%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"33\"] {\n  width: 33%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"34\"] {\n  width: 34%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"35\"] {\n  width: 35%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"36\"] {\n  width: 36%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"37\"] {\n  width: 37%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"38\"] {\n  width: 38%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"39\"] {\n  width: 39%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"40\"] {\n  width: 40%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"41\"] {\n  width: 41%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"42\"] {\n  width: 42%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"43\"] {\n  width: 43%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"44\"] {\n  width: 44%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"45\"] {\n  width: 45%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"46\"] {\n  width: 46%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"47\"] {\n  width: 47%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"48\"] {\n  width: 48%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"49\"] {\n  width: 49%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"50\"] {\n  width: 50%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"51\"] {\n  width: 51%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"52\"] {\n  width: 52%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"53\"] {\n  width: 53%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"54\"] {\n  width: 54%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"55\"] {\n  width: 55%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"56\"] {\n  width: 56%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"57\"] {\n  width: 57%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"58\"] {\n  width: 58%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"59\"] {\n  width: 59%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"60\"] {\n  width: 60%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"61\"] {\n  width: 61%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"62\"] {\n  width: 62%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"63\"] {\n  width: 63%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"64\"] {\n  width: 64%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"65\"] {\n  width: 65%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"66\"] {\n  width: 66%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"67\"] {\n  width: 67%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"68\"] {\n  width: 68%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"69\"] {\n  width: 69%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"70\"] {\n  width: 70%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"71\"] {\n  width: 71%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"72\"] {\n  width: 72%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"73\"] {\n  width: 73%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"74\"] {\n  width: 74%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"75\"] {\n  width: 75%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"76\"] {\n  width: 76%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"77\"] {\n  width: 77%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"78\"] {\n  width: 78%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"79\"] {\n  width: 79%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"80\"] {\n  width: 80%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"81\"] {\n  width: 81%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"82\"] {\n  width: 82%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"83\"] {\n  width: 83%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"84\"] {\n  width: 84%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"85\"] {\n  width: 85%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"86\"] {\n  width: 86%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"87\"] {\n  width: 87%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"88\"] {\n  width: 88%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"89\"] {\n  width: 89%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"90\"] {\n  width: 90%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"91\"] {\n  width: 91%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"92\"] {\n  width: 92%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"93\"] {\n  width: 93%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"94\"] {\n  width: 94%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"95\"] {\n  width: 95%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"96\"] {\n  width: 96%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"97\"] {\n  width: 97%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"98\"] {\n  width: 98%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"99\"] {\n  width: 99%;\n}\n\n.bar-chart .plot-container [data-cp-size=\"100\"] {\n  width: 100%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"0\"] {\n  left: 0%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"1\"] {\n  left: 1%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"2\"] {\n  left: 2%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"3\"] {\n  left: 3%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"4\"] {\n  left: 4%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"5\"] {\n  left: 5%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"6\"] {\n  left: 6%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"7\"] {\n  left: 7%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"8\"] {\n  left: 8%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"9\"] {\n  left: 9%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"10\"] {\n  left: 10%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"11\"] {\n  left: 11%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"12\"] {\n  left: 12%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"13\"] {\n  left: 13%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"14\"] {\n  left: 14%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"15\"] {\n  left: 15%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"16\"] {\n  left: 16%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"17\"] {\n  left: 17%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"18\"] {\n  left: 18%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"19\"] {\n  left: 19%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"20\"] {\n  left: 20%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"21\"] {\n  left: 21%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"22\"] {\n  left: 22%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"23\"] {\n  left: 23%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"24\"] {\n  left: 24%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"25\"] {\n  left: 25%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"26\"] {\n  left: 26%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"27\"] {\n  left: 27%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"28\"] {\n  left: 28%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"29\"] {\n  left: 29%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"30\"] {\n  left: 30%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"31\"] {\n  left: 31%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"32\"] {\n  left: 32%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"33\"] {\n  left: 33%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"34\"] {\n  left: 34%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"35\"] {\n  left: 35%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"36\"] {\n  left: 36%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"37\"] {\n  left: 37%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"38\"] {\n  left: 38%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"39\"] {\n  left: 39%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"40\"] {\n  left: 40%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"41\"] {\n  left: 41%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"42\"] {\n  left: 42%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"43\"] {\n  left: 43%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"44\"] {\n  left: 44%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"45\"] {\n  left: 45%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"46\"] {\n  left: 46%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"47\"] {\n  left: 47%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"48\"] {\n  left: 48%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"49\"] {\n  left: 49%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"50\"] {\n  left: 50%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"51\"] {\n  left: 51%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"52\"] {\n  left: 52%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"53\"] {\n  left: 53%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"54\"] {\n  left: 54%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"55\"] {\n  left: 55%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"56\"] {\n  left: 56%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"57\"] {\n  left: 57%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"58\"] {\n  left: 58%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"59\"] {\n  left: 59%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"60\"] {\n  left: 60%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"61\"] {\n  left: 61%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"62\"] {\n  left: 62%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"63\"] {\n  left: 63%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"64\"] {\n  left: 64%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"65\"] {\n  left: 65%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"66\"] {\n  left: 66%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"67\"] {\n  left: 67%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"68\"] {\n  left: 68%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"69\"] {\n  left: 69%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"70\"] {\n  left: 70%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"71\"] {\n  left: 71%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"72\"] {\n  left: 72%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"73\"] {\n  left: 73%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"74\"] {\n  left: 74%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"75\"] {\n  left: 75%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"76\"] {\n  left: 76%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"77\"] {\n  left: 77%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"78\"] {\n  left: 78%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"79\"] {\n  left: 79%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"80\"] {\n  left: 80%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"81\"] {\n  left: 81%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"82\"] {\n  left: 82%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"83\"] {\n  left: 83%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"84\"] {\n  left: 84%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"85\"] {\n  left: 85%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"86\"] {\n  left: 86%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"87\"] {\n  left: 87%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"88\"] {\n  left: 88%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"89\"] {\n  left: 89%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"90\"] {\n  left: 90%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"91\"] {\n  left: 91%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"92\"] {\n  left: 92%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"93\"] {\n  left: 93%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"94\"] {\n  left: 94%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"95\"] {\n  left: 95%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"96\"] {\n  left: 96%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"97\"] {\n  left: 97%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"98\"] {\n  left: 98%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"99\"] {\n  left: 99%;\n}\n\n.scatter-plot .plot-container [data-cp-x=\"100\"] {\n  left: 100%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"0\"] {\n  bottom: 0%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"1\"] {\n  bottom: 1%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"2\"] {\n  bottom: 2%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"3\"] {\n  bottom: 3%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"4\"] {\n  bottom: 4%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"5\"] {\n  bottom: 5%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"6\"] {\n  bottom: 6%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"7\"] {\n  bottom: 7%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"8\"] {\n  bottom: 8%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"9\"] {\n  bottom: 9%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"10\"] {\n  bottom: 10%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"11\"] {\n  bottom: 11%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"12\"] {\n  bottom: 12%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"13\"] {\n  bottom: 13%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"14\"] {\n  bottom: 14%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"15\"] {\n  bottom: 15%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"16\"] {\n  bottom: 16%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"17\"] {\n  bottom: 17%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"18\"] {\n  bottom: 18%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"19\"] {\n  bottom: 19%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"20\"] {\n  bottom: 20%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"21\"] {\n  bottom: 21%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"22\"] {\n  bottom: 22%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"23\"] {\n  bottom: 23%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"24\"] {\n  bottom: 24%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"25\"] {\n  bottom: 25%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"26\"] {\n  bottom: 26%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"27\"] {\n  bottom: 27%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"28\"] {\n  bottom: 28%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"29\"] {\n  bottom: 29%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"30\"] {\n  bottom: 30%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"31\"] {\n  bottom: 31%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"32\"] {\n  bottom: 32%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"33\"] {\n  bottom: 33%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"34\"] {\n  bottom: 34%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"35\"] {\n  bottom: 35%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"36\"] {\n  bottom: 36%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"37\"] {\n  bottom: 37%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"38\"] {\n  bottom: 38%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"39\"] {\n  bottom: 39%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"40\"] {\n  bottom: 40%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"41\"] {\n  bottom: 41%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"42\"] {\n  bottom: 42%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"43\"] {\n  bottom: 43%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"44\"] {\n  bottom: 44%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"45\"] {\n  bottom: 45%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"46\"] {\n  bottom: 46%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"47\"] {\n  bottom: 47%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"48\"] {\n  bottom: 48%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"49\"] {\n  bottom: 49%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"50\"] {\n  bottom: 50%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"51\"] {\n  bottom: 51%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"52\"] {\n  bottom: 52%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"53\"] {\n  bottom: 53%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"54\"] {\n  bottom: 54%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"55\"] {\n  bottom: 55%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"56\"] {\n  bottom: 56%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"57\"] {\n  bottom: 57%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"58\"] {\n  bottom: 58%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"59\"] {\n  bottom: 59%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"60\"] {\n  bottom: 60%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"61\"] {\n  bottom: 61%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"62\"] {\n  bottom: 62%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"63\"] {\n  bottom: 63%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"64\"] {\n  bottom: 64%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"65\"] {\n  bottom: 65%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"66\"] {\n  bottom: 66%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"67\"] {\n  bottom: 67%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"68\"] {\n  bottom: 68%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"69\"] {\n  bottom: 69%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"70\"] {\n  bottom: 70%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"71\"] {\n  bottom: 71%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"72\"] {\n  bottom: 72%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"73\"] {\n  bottom: 73%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"74\"] {\n  bottom: 74%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"75\"] {\n  bottom: 75%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"76\"] {\n  bottom: 76%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"77\"] {\n  bottom: 77%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"78\"] {\n  bottom: 78%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"79\"] {\n  bottom: 79%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"80\"] {\n  bottom: 80%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"81\"] {\n  bottom: 81%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"82\"] {\n  bottom: 82%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"83\"] {\n  bottom: 83%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"84\"] {\n  bottom: 84%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"85\"] {\n  bottom: 85%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"86\"] {\n  bottom: 86%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"87\"] {\n  bottom: 87%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"88\"] {\n  bottom: 88%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"89\"] {\n  bottom: 89%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"90\"] {\n  bottom: 90%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"91\"] {\n  bottom: 91%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"92\"] {\n  bottom: 92%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"93\"] {\n  bottom: 93%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"94\"] {\n  bottom: 94%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"95\"] {\n  bottom: 95%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"96\"] {\n  bottom: 96%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"97\"] {\n  bottom: 97%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"98\"] {\n  bottom: 98%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"99\"] {\n  bottom: 99%;\n}\n\n.scatter-plot .plot-container [data-cp-y=\"100\"] {\n  bottom: 100%;\n}\n\n.group-by-gender .male {\n  background: #3498db;\n  color: #ffffff;\n}\n\n.group-by-gender .female {\n  background: #ff6699;\n  color: #ffffff;\n}\n\n.group-by-number [data-group=\"0\"] {\n  background: #3498db;\n  color: #ffffff;\n}\n\n.group-by-number [data-group=\"1\"] {\n  background: #ff6699;\n  color: #ffffff;\n}\n\n.group-by-number [data-group=\"2\"] {\n  background: #93b881;\n  color: #ffffff;\n}\n\n.group-by-number [data-group=\"3\"] {\n  background: #e09e87;\n  color: #ffffff;\n}\n\n.group-by-number [data-group=\"4\"] {\n  background: #a22041;\n  color: #ffffff;\n}\n\n.group-by-number [data-group=\"5\"] {\n  background: #95879c;\n  color: #ffffff;\n}\n\n.contain {\n  width: 70%;\n  border-radius: 20px;\n  background-color: #ddd;\n}\n\n.skills {\n  text-align: right;\n  padding-right: 10px;;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: white;\n  border-radius: 20px;\n}\n\n.css {width: 80%; background-color: #2196F3;}\n\n.js {width: 65%; background-color: #f44336;}\n\n.php {width: 60%; background-color: #808080;}\n\n* {box-sizing: border-box}\n\nul >li {\n  font-size: 150%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld2FsbHN1Yi92aWV3YWxsc3ViLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7R0FDckIsWUFBWTtHQUNaLGFBQWE7R0FDYix5QkFBeUI7R0FDekIsbUJBQW1CO0VBR3BCLDRDQUE0QztFQUM1QyxnQkFBZ0I7Q0FDakI7O0FBRUQ7SUFDSSw0REFBNEQ7R0FDN0Q7O0FBRUQ7SUFDRSxxQkFBcUI7R0FDdEI7O0FBQ0g7RUFDRSxlQUFlO0NBQ2hCOztBQUVDO0lBQ0UsbUJBQW1CO0dBQ3BCOztBQUVEO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7R0FDZDs7QUFFRDtJQUNFLG1CQUFtQjtHQUNwQjs7QUFDRDtJQUNFLGdCQUFnQjtHQUNqQjs7QUFDSDtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLHlCQUF5QjtFQUN6Qiw0QkFBNEI7O0NBRTdCOztBQUVDOzs7RUFHQSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtDQUNYOztBQUNEOzs7OztFQUtFLGlCQUFpQjtFQUNqQiwwQkFBMEI7Q0FDM0I7O0FBQ0Q7RUFFRSxjQUFjO0VBRWQsb0JBQW9CO0VBRXBCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtDQUNuQjs7QUFDRDtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFJOUIsc0JBQXNCO0NBQ3ZCOztBQUNEO0VBQ0UsOEJBQThCO0VBSTlCLHNCQUFzQjtDQUN2Qjs7QUFDRDs7O0VBSUUsYUFBYTtFQUViLHFCQUFxQjtDQUN0Qjs7QUFDRDs7OztFQUlFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsdUJBQXVCO0NBQ3hCOztBQUNEO0VBQ0UsWUFBWTtDQUNiOztBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtDQUNiOztBQUNEOztFQUVFLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLGNBQWM7Q0FDZjs7QUFDRDtFQUNFLHNCQUFzQjtDQUN2Qjs7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsUUFBUTtFQUNSLFlBQVk7RUFDWixVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7Q0FDWjs7QUFDRDs7OztFQUlFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsU0FBUztFQUNULGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLG9CQUFvQjtDQUNyQjs7QUFHRDs7O0VBR0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7Q0FDWDs7QUFDRDs7Ozs7RUFLRSxpQkFBaUI7RUFDakIsMEJBQTBCO0NBQzNCOztBQUNEO0VBRUUsY0FBYztFQUVkLG9CQUFvQjtFQUVwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7Q0FDbkI7O0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBSTlCLHNCQUFzQjtDQUN2Qjs7QUFDRDtFQUNFLDhCQUE4QjtFQUk5QixzQkFBc0I7Q0FDdkI7O0FBQ0Q7OztFQUlFLGFBQWE7RUFFYixxQkFBcUI7Q0FDdEI7O0FBQ0Q7Ozs7RUFJRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLHVCQUF1QjtDQUN4Qjs7QUFDRDtFQUNFLFlBQVk7Q0FDYjs7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7Q0FDYjs7QUFDRDs7RUFFRSxnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7O0FBQ0Q7RUFDRSxzQkFBc0I7Q0FDdkI7O0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFFBQVE7RUFDUixZQUFZO0VBQ1osVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXO0NBQ1o7O0FBQ0Q7Ozs7RUFJRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxTQUFTO0NBQ1Y7O0FBQ0Q7RUFDRSxTQUFTO0NBQ1Y7O0FBQ0Q7RUFDRSxTQUFTO0NBQ1Y7O0FBQ0Q7RUFDRSxTQUFTO0NBQ1Y7O0FBQ0Q7RUFDRSxTQUFTO0NBQ1Y7O0FBQ0Q7RUFDRSxTQUFTO0NBQ1Y7O0FBQ0Q7RUFDRSxTQUFTO0NBQ1Y7O0FBQ0Q7RUFDRSxTQUFTO0NBQ1Y7O0FBQ0Q7RUFDRSxTQUFTO0NBQ1Y7O0FBQ0Q7RUFDRSxTQUFTO0NBQ1Y7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0NBQ2hCOztBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7Q0FDaEI7O0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0NBQ2hCOztBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7Q0FDaEI7O0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0NBQ2hCOztBQUtEO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQix1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLG9CQUFvQjtDQUNyQjs7QUFHRCxNQUFNLFdBQVcsQ0FBQywwQkFBMEIsQ0FBQzs7QUFDN0MsS0FBSyxXQUFXLENBQUMsMEJBQTBCLENBQUM7O0FBQzVDLE1BQU0sV0FBVyxDQUFDLDBCQUEwQixDQUFDOztBQUM3QyxHQUFHLHNCQUFzQixDQUFDOztBQUUxQjtFQUNFLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdhbGxzdWIvdmlld2FsbHN1Yi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdzJ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgIHdpZHRoOiAxMDAlO1xuICAgcGFkZGluZzoyMHB4O1xuICAgYmFja2dyb3VuZC1jb2xvcjojZWZmMGYyO1xuICAgYm9yZGVyLXJhZGl1czoxNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCByZ2JhKDAsMCwwLDAuMik7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG46aG9zdCB7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIG1hdC10YWItZ3JvdXB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIH1cbi5zcGFjZXJ7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4gIC50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAubGlzdCB7XG4gICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgXG4gIGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgLmVsZW1lbnR7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG4udGV4dGFyZWFzaG93e1xuICBvdmVyZmxvdy15OnNjcm9sbDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlIDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBcbn1cblxuICAuY29sdW1uLWNoYXJ0LFxuLmJhci1jaGFydCxcbi5zY2F0dGVyLXBsb3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uY29sdW1uLWNoYXJ0IC5jaGFydC1jb2x1bW4sXG4uYmFyLWNoYXJ0IC5jaGFydC1yb3csXG4uY29sdW1uLWNoYXJ0IFtkYXRhLWNwLXNpemVdLFxuLmJhci1jaGFydCBbZGF0YS1jcC1zaXplXSxcbi5wbG90LWNvbnRhaW5lciA+ICogPiAqIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC13ZWJraXQtZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuLmNvbHVtbi1jaGFydC5zdGFja2VkID4gKiA+ICoge1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGVZKC0xKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG59XG4uY29sdW1uLWNoYXJ0LnN0YWNrZWQgLmdyb3VwLWJ5LW51bWJlciBbZGF0YS1jcC1zaXplXSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGVZKC0xKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG59XG4uY29sdW1uLWNoYXJ0IC5jaGFydC1jb2x1bW4sXG4uY29sdW1uLWNoYXJ0IFtkYXRhLWNwLXNpemVdLFxuLmNvbHVtbi1jaGFydC5zdGFja2VkID4gKiA+ICoge1xuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcbiAgZmxleC1ncm93OiAxO1xuICAtd2Via2l0LWFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbi5jb2x1bW4tY2hhcnQgLmNoYXJ0LWNvbHVtbixcbi5iYXItY2hhcnQgLmNoYXJ0LXJvdyxcbi5jb2x1bW4tY2hhcnQgW2RhdGEtY3Atc2l6ZV0sXG4uYmFyLWNoYXJ0IFtkYXRhLWNwLXNpemVdIHtcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uYmFyLWNoYXJ0IHtcbiAgY2xlYXI6IGJvdGg7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYmFyLWNoYXJ0IC5jaGFydC1yb3csXG4uYmFyLWNoYXJ0IFtkYXRhLWNwLXNpemVdIHtcbiAgbWluLWhlaWdodDogOHB4O1xufVxuLmJhci1jaGFydC5zdGFja2VkID4gKiA+ICoge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJhci1jaGFydC5zdGFja2VkIC5ncm91cC1ieS1udW1iZXIgW2RhdGEtY3Atc2l6ZV0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMTJweDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uc2NhdHRlci1wbG90IC5jaGFydC1kb3QsXG4uc2NhdHRlci1wbG90IC5jaGFydC1kb3QsXG4uc2NhdHRlci1wbG90IFtkYXRhLWNwLXhdLFxuLnNjYXR0ZXItcGxvdCBbZGF0YS1jcC15XSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiA2cHggc29saWQgIzM0OThkYjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuXG4uY29sdW1uLWNoYXJ0LFxuLmJhci1jaGFydCxcbi5zY2F0dGVyLXBsb3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uY29sdW1uLWNoYXJ0IC5jaGFydC1jb2x1bW4sXG4uYmFyLWNoYXJ0IC5jaGFydC1yb3csXG4uY29sdW1uLWNoYXJ0IFtkYXRhLWNwLXNpemVdLFxuLmJhci1jaGFydCBbZGF0YS1jcC1zaXplXSxcbi5wbG90LWNvbnRhaW5lciA+ICogPiAqIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC13ZWJraXQtZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuLmNvbHVtbi1jaGFydC5zdGFja2VkID4gKiA+ICoge1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGVZKC0xKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG59XG4uY29sdW1uLWNoYXJ0LnN0YWNrZWQgLmdyb3VwLWJ5LW51bWJlciBbZGF0YS1jcC1zaXplXSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGVZKC0xKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG59XG4uY29sdW1uLWNoYXJ0IC5jaGFydC1jb2x1bW4sXG4uY29sdW1uLWNoYXJ0IFtkYXRhLWNwLXNpemVdLFxuLmNvbHVtbi1jaGFydC5zdGFja2VkID4gKiA+ICoge1xuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcbiAgZmxleC1ncm93OiAxO1xuICAtd2Via2l0LWFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbi5jb2x1bW4tY2hhcnQgLmNoYXJ0LWNvbHVtbixcbi5iYXItY2hhcnQgLmNoYXJ0LXJvdyxcbi5jb2x1bW4tY2hhcnQgW2RhdGEtY3Atc2l6ZV0sXG4uYmFyLWNoYXJ0IFtkYXRhLWNwLXNpemVdIHtcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uYmFyLWNoYXJ0IHtcbiAgY2xlYXI6IGJvdGg7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYmFyLWNoYXJ0IC5jaGFydC1yb3csXG4uYmFyLWNoYXJ0IFtkYXRhLWNwLXNpemVdIHtcbiAgbWluLWhlaWdodDogOHB4O1xufVxuLmJhci1jaGFydC5zdGFja2VkID4gKiA+ICoge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJhci1jaGFydC5zdGFja2VkIC5ncm91cC1ieS1udW1iZXIgW2RhdGEtY3Atc2l6ZV0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMTJweDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uc2NhdHRlci1wbG90IC5jaGFydC1kb3QsXG4uc2NhdHRlci1wbG90IC5jaGFydC1kb3QsXG4uc2NhdHRlci1wbG90IFtkYXRhLWNwLXhdLFxuLnNjYXR0ZXItcGxvdCBbZGF0YS1jcC15XSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiA2cHggc29saWQgIzM0OThkYjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIwXCJdIHtcbiAgaGVpZ2h0OiAwJTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIxXCJdIHtcbiAgaGVpZ2h0OiAxJTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIyXCJdIHtcbiAgaGVpZ2h0OiAyJTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIzXCJdIHtcbiAgaGVpZ2h0OiAzJTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI0XCJdIHtcbiAgaGVpZ2h0OiA0JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI1XCJdIHtcbiAgaGVpZ2h0OiA1JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI2XCJdIHtcbiAgaGVpZ2h0OiA2JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI3XCJdIHtcbiAgaGVpZ2h0OiA3JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI4XCJdIHtcbiAgaGVpZ2h0OiA4JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI5XCJdIHtcbiAgaGVpZ2h0OiA5JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIxMFwiXSB7XG4gIGhlaWdodDogMTAlO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjExXCJdIHtcbiAgaGVpZ2h0OiAxMSU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMTJcIl0ge1xuICBoZWlnaHQ6IDEyJTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIxM1wiXSB7XG4gIGhlaWdodDogMTMlO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjE0XCJdIHtcbiAgaGVpZ2h0OiAxNCU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMTVcIl0ge1xuICBoZWlnaHQ6IDE1JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIxNlwiXSB7XG4gIGhlaWdodDogMTYlO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjE3XCJdIHtcbiAgaGVpZ2h0OiAxNyU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMThcIl0ge1xuICBoZWlnaHQ6IDE4JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIxOVwiXSB7XG4gIGhlaWdodDogMTklO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjIwXCJdIHtcbiAgaGVpZ2h0OiAyMCU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMjFcIl0ge1xuICBoZWlnaHQ6IDIxJTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIyMlwiXSB7XG4gIGhlaWdodDogMjIlO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjIzXCJdIHtcbiAgaGVpZ2h0OiAyMyU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMjRcIl0ge1xuICBoZWlnaHQ6IDI0JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIyNVwiXSB7XG4gIGhlaWdodDogMjUlO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjI2XCJdIHtcbiAgaGVpZ2h0OiAyNiU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMjdcIl0ge1xuICBoZWlnaHQ6IDI3JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIyOFwiXSB7XG4gIGhlaWdodDogMjglO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjI5XCJdIHtcbiAgaGVpZ2h0OiAyOSU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMzBcIl0ge1xuICBoZWlnaHQ6IDMwJTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIzMVwiXSB7XG4gIGhlaWdodDogMzElO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjMyXCJdIHtcbiAgaGVpZ2h0OiAzMiU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMzNcIl0ge1xuICBoZWlnaHQ6IDMzJTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIzNFwiXSB7XG4gIGhlaWdodDogMzQlO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjM1XCJdIHtcbiAgaGVpZ2h0OiAzNSU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMzZcIl0ge1xuICBoZWlnaHQ6IDM2JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIzN1wiXSB7XG4gIGhlaWdodDogMzclO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjM4XCJdIHtcbiAgaGVpZ2h0OiAzOCU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMzlcIl0ge1xuICBoZWlnaHQ6IDM5JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI0MFwiXSB7XG4gIGhlaWdodDogNDAlO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjQxXCJdIHtcbiAgaGVpZ2h0OiA0MSU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNDJcIl0ge1xuICBoZWlnaHQ6IDQyJTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI0M1wiXSB7XG4gIGhlaWdodDogNDMlO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjQ0XCJdIHtcbiAgaGVpZ2h0OiA0NCU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNDVcIl0ge1xuICBoZWlnaHQ6IDQ1JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI0NlwiXSB7XG4gIGhlaWdodDogNDYlO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjQ3XCJdIHtcbiAgaGVpZ2h0OiA0NyU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNDhcIl0ge1xuICBoZWlnaHQ6IDQ4JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI0OVwiXSB7XG4gIGhlaWdodDogNDklO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjUwXCJdIHtcbiAgaGVpZ2h0OiA1MCU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNTFcIl0ge1xuICBoZWlnaHQ6IDUxJTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI1MlwiXSB7XG4gIGhlaWdodDogNTIlO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjUzXCJdIHtcbiAgaGVpZ2h0OiA1MyU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNTRcIl0ge1xuICBoZWlnaHQ6IDU0JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI1NVwiXSB7XG4gIGhlaWdodDogNTUlO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjU2XCJdIHtcbiAgaGVpZ2h0OiA1NiU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNTdcIl0ge1xuICBoZWlnaHQ6IDU3JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI1OFwiXSB7XG4gIGhlaWdodDogNTglO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjU5XCJdIHtcbiAgaGVpZ2h0OiA1OSU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNjBcIl0ge1xuICBoZWlnaHQ6IDYwJTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI2MVwiXSB7XG4gIGhlaWdodDogNjElO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjYyXCJdIHtcbiAgaGVpZ2h0OiA2MiU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNjNcIl0ge1xuICBoZWlnaHQ6IDYzJTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI2NFwiXSB7XG4gIGhlaWdodDogNjQlO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjY1XCJdIHtcbiAgaGVpZ2h0OiA2NSU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNjZcIl0ge1xuICBoZWlnaHQ6IDY2JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI2N1wiXSB7XG4gIGhlaWdodDogNjclO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjY4XCJdIHtcbiAgaGVpZ2h0OiA2OCU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNjlcIl0ge1xuICBoZWlnaHQ6IDY5JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI3MFwiXSB7XG4gIGhlaWdodDogNzAlO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjcxXCJdIHtcbiAgaGVpZ2h0OiA3MSU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNzJcIl0ge1xuICBoZWlnaHQ6IDcyJTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI3M1wiXSB7XG4gIGhlaWdodDogNzMlO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjc0XCJdIHtcbiAgaGVpZ2h0OiA3NCU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNzVcIl0ge1xuICBoZWlnaHQ6IDc1JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI3NlwiXSB7XG4gIGhlaWdodDogNzYlO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjc3XCJdIHtcbiAgaGVpZ2h0OiA3NyU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNzhcIl0ge1xuICBoZWlnaHQ6IDc4JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI3OVwiXSB7XG4gIGhlaWdodDogNzklO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjgwXCJdIHtcbiAgaGVpZ2h0OiA4MCU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiODFcIl0ge1xuICBoZWlnaHQ6IDgxJTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI4MlwiXSB7XG4gIGhlaWdodDogODIlO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjgzXCJdIHtcbiAgaGVpZ2h0OiA4MyU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiODRcIl0ge1xuICBoZWlnaHQ6IDg0JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI4NVwiXSB7XG4gIGhlaWdodDogODUlO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjg2XCJdIHtcbiAgaGVpZ2h0OiA4NiU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiODdcIl0ge1xuICBoZWlnaHQ6IDg3JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI4OFwiXSB7XG4gIGhlaWdodDogODglO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjg5XCJdIHtcbiAgaGVpZ2h0OiA4OSU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiOTBcIl0ge1xuICBoZWlnaHQ6IDkwJTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI5MVwiXSB7XG4gIGhlaWdodDogOTElO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjkyXCJdIHtcbiAgaGVpZ2h0OiA5MiU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiOTNcIl0ge1xuICBoZWlnaHQ6IDkzJTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI5NFwiXSB7XG4gIGhlaWdodDogOTQlO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjk1XCJdIHtcbiAgaGVpZ2h0OiA5NSU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiOTZcIl0ge1xuICBoZWlnaHQ6IDk2JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI5N1wiXSB7XG4gIGhlaWdodDogOTclO1xufVxuLmNvbHVtbi1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjk4XCJdIHtcbiAgaGVpZ2h0OiA5OCU7XG59XG4uY29sdW1uLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiOTlcIl0ge1xuICBoZWlnaHQ6IDk5JTtcbn1cbi5jb2x1bW4tY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIxMDBcIl0ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMFwiXSB7XG4gIHdpZHRoOiAwJTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIxXCJdIHtcbiAgd2lkdGg6IDElO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjJcIl0ge1xuICB3aWR0aDogMiU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiM1wiXSB7XG4gIHdpZHRoOiAzJTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI0XCJdIHtcbiAgd2lkdGg6IDQlO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjVcIl0ge1xuICB3aWR0aDogNSU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNlwiXSB7XG4gIHdpZHRoOiA2JTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI3XCJdIHtcbiAgd2lkdGg6IDclO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjhcIl0ge1xuICB3aWR0aDogOCU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiOVwiXSB7XG4gIHdpZHRoOiA5JTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIxMFwiXSB7XG4gIHdpZHRoOiAxMCU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMTFcIl0ge1xuICB3aWR0aDogMTElO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjEyXCJdIHtcbiAgd2lkdGg6IDEyJTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIxM1wiXSB7XG4gIHdpZHRoOiAxMyU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMTRcIl0ge1xuICB3aWR0aDogMTQlO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjE1XCJdIHtcbiAgd2lkdGg6IDE1JTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIxNlwiXSB7XG4gIHdpZHRoOiAxNiU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMTdcIl0ge1xuICB3aWR0aDogMTclO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjE4XCJdIHtcbiAgd2lkdGg6IDE4JTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIxOVwiXSB7XG4gIHdpZHRoOiAxOSU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMjBcIl0ge1xuICB3aWR0aDogMjAlO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjIxXCJdIHtcbiAgd2lkdGg6IDIxJTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIyMlwiXSB7XG4gIHdpZHRoOiAyMiU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMjNcIl0ge1xuICB3aWR0aDogMjMlO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjI0XCJdIHtcbiAgd2lkdGg6IDI0JTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIyNVwiXSB7XG4gIHdpZHRoOiAyNSU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMjZcIl0ge1xuICB3aWR0aDogMjYlO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjI3XCJdIHtcbiAgd2lkdGg6IDI3JTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIyOFwiXSB7XG4gIHdpZHRoOiAyOCU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMjlcIl0ge1xuICB3aWR0aDogMjklO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjMwXCJdIHtcbiAgd2lkdGg6IDMwJTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIzMVwiXSB7XG4gIHdpZHRoOiAzMSU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMzJcIl0ge1xuICB3aWR0aDogMzIlO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjMzXCJdIHtcbiAgd2lkdGg6IDMzJTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIzNFwiXSB7XG4gIHdpZHRoOiAzNCU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMzVcIl0ge1xuICB3aWR0aDogMzUlO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjM2XCJdIHtcbiAgd2lkdGg6IDM2JTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIzN1wiXSB7XG4gIHdpZHRoOiAzNyU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiMzhcIl0ge1xuICB3aWR0aDogMzglO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjM5XCJdIHtcbiAgd2lkdGg6IDM5JTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI0MFwiXSB7XG4gIHdpZHRoOiA0MCU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNDFcIl0ge1xuICB3aWR0aDogNDElO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjQyXCJdIHtcbiAgd2lkdGg6IDQyJTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI0M1wiXSB7XG4gIHdpZHRoOiA0MyU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNDRcIl0ge1xuICB3aWR0aDogNDQlO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjQ1XCJdIHtcbiAgd2lkdGg6IDQ1JTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI0NlwiXSB7XG4gIHdpZHRoOiA0NiU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNDdcIl0ge1xuICB3aWR0aDogNDclO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjQ4XCJdIHtcbiAgd2lkdGg6IDQ4JTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI0OVwiXSB7XG4gIHdpZHRoOiA0OSU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNTBcIl0ge1xuICB3aWR0aDogNTAlO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjUxXCJdIHtcbiAgd2lkdGg6IDUxJTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI1MlwiXSB7XG4gIHdpZHRoOiA1MiU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNTNcIl0ge1xuICB3aWR0aDogNTMlO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjU0XCJdIHtcbiAgd2lkdGg6IDU0JTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI1NVwiXSB7XG4gIHdpZHRoOiA1NSU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNTZcIl0ge1xuICB3aWR0aDogNTYlO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjU3XCJdIHtcbiAgd2lkdGg6IDU3JTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI1OFwiXSB7XG4gIHdpZHRoOiA1OCU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNTlcIl0ge1xuICB3aWR0aDogNTklO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjYwXCJdIHtcbiAgd2lkdGg6IDYwJTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI2MVwiXSB7XG4gIHdpZHRoOiA2MSU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNjJcIl0ge1xuICB3aWR0aDogNjIlO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjYzXCJdIHtcbiAgd2lkdGg6IDYzJTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI2NFwiXSB7XG4gIHdpZHRoOiA2NCU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNjVcIl0ge1xuICB3aWR0aDogNjUlO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjY2XCJdIHtcbiAgd2lkdGg6IDY2JTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI2N1wiXSB7XG4gIHdpZHRoOiA2NyU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNjhcIl0ge1xuICB3aWR0aDogNjglO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjY5XCJdIHtcbiAgd2lkdGg6IDY5JTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI3MFwiXSB7XG4gIHdpZHRoOiA3MCU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNzFcIl0ge1xuICB3aWR0aDogNzElO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjcyXCJdIHtcbiAgd2lkdGg6IDcyJTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI3M1wiXSB7XG4gIHdpZHRoOiA3MyU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNzRcIl0ge1xuICB3aWR0aDogNzQlO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjc1XCJdIHtcbiAgd2lkdGg6IDc1JTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI3NlwiXSB7XG4gIHdpZHRoOiA3NiU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiNzdcIl0ge1xuICB3aWR0aDogNzclO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjc4XCJdIHtcbiAgd2lkdGg6IDc4JTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI3OVwiXSB7XG4gIHdpZHRoOiA3OSU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiODBcIl0ge1xuICB3aWR0aDogODAlO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjgxXCJdIHtcbiAgd2lkdGg6IDgxJTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI4MlwiXSB7XG4gIHdpZHRoOiA4MiU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiODNcIl0ge1xuICB3aWR0aDogODMlO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjg0XCJdIHtcbiAgd2lkdGg6IDg0JTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI4NVwiXSB7XG4gIHdpZHRoOiA4NSU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiODZcIl0ge1xuICB3aWR0aDogODYlO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjg3XCJdIHtcbiAgd2lkdGg6IDg3JTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI4OFwiXSB7XG4gIHdpZHRoOiA4OCU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiODlcIl0ge1xuICB3aWR0aDogODklO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjkwXCJdIHtcbiAgd2lkdGg6IDkwJTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI5MVwiXSB7XG4gIHdpZHRoOiA5MSU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiOTJcIl0ge1xuICB3aWR0aDogOTIlO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjkzXCJdIHtcbiAgd2lkdGg6IDkzJTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI5NFwiXSB7XG4gIHdpZHRoOiA5NCU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiOTVcIl0ge1xuICB3aWR0aDogOTUlO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjk2XCJdIHtcbiAgd2lkdGg6IDk2JTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCI5N1wiXSB7XG4gIHdpZHRoOiA5NyU7XG59XG4uYmFyLWNoYXJ0IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC1zaXplPVwiOThcIl0ge1xuICB3aWR0aDogOTglO1xufVxuLmJhci1jaGFydCAucGxvdC1jb250YWluZXIgW2RhdGEtY3Atc2l6ZT1cIjk5XCJdIHtcbiAgd2lkdGg6IDk5JTtcbn1cbi5iYXItY2hhcnQgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXNpemU9XCIxMDBcIl0ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXg9XCIwXCJdIHtcbiAgbGVmdDogMCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMVwiXSB7XG4gIGxlZnQ6IDElO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjJcIl0ge1xuICBsZWZ0OiAyJTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXg9XCIzXCJdIHtcbiAgbGVmdDogMyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNFwiXSB7XG4gIGxlZnQ6IDQlO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjVcIl0ge1xuICBsZWZ0OiA1JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXg9XCI2XCJdIHtcbiAgbGVmdDogNiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiN1wiXSB7XG4gIGxlZnQ6IDclO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteD1cIjhcIl0ge1xuICBsZWZ0OiA4JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXg9XCI5XCJdIHtcbiAgbGVmdDogOSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMTBcIl0ge1xuICBsZWZ0OiAxMCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMTFcIl0ge1xuICBsZWZ0OiAxMSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMTJcIl0ge1xuICBsZWZ0OiAxMiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMTNcIl0ge1xuICBsZWZ0OiAxMyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMTRcIl0ge1xuICBsZWZ0OiAxNCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMTVcIl0ge1xuICBsZWZ0OiAxNSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMTZcIl0ge1xuICBsZWZ0OiAxNiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMTdcIl0ge1xuICBsZWZ0OiAxNyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMThcIl0ge1xuICBsZWZ0OiAxOCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMTlcIl0ge1xuICBsZWZ0OiAxOSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMjBcIl0ge1xuICBsZWZ0OiAyMCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMjFcIl0ge1xuICBsZWZ0OiAyMSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMjJcIl0ge1xuICBsZWZ0OiAyMiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMjNcIl0ge1xuICBsZWZ0OiAyMyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMjRcIl0ge1xuICBsZWZ0OiAyNCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMjVcIl0ge1xuICBsZWZ0OiAyNSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMjZcIl0ge1xuICBsZWZ0OiAyNiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMjdcIl0ge1xuICBsZWZ0OiAyNyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMjhcIl0ge1xuICBsZWZ0OiAyOCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMjlcIl0ge1xuICBsZWZ0OiAyOSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMzBcIl0ge1xuICBsZWZ0OiAzMCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMzFcIl0ge1xuICBsZWZ0OiAzMSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMzJcIl0ge1xuICBsZWZ0OiAzMiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMzNcIl0ge1xuICBsZWZ0OiAzMyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMzRcIl0ge1xuICBsZWZ0OiAzNCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMzVcIl0ge1xuICBsZWZ0OiAzNSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMzZcIl0ge1xuICBsZWZ0OiAzNiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMzdcIl0ge1xuICBsZWZ0OiAzNyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMzhcIl0ge1xuICBsZWZ0OiAzOCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMzlcIl0ge1xuICBsZWZ0OiAzOSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNDBcIl0ge1xuICBsZWZ0OiA0MCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNDFcIl0ge1xuICBsZWZ0OiA0MSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNDJcIl0ge1xuICBsZWZ0OiA0MiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNDNcIl0ge1xuICBsZWZ0OiA0MyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNDRcIl0ge1xuICBsZWZ0OiA0NCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNDVcIl0ge1xuICBsZWZ0OiA0NSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNDZcIl0ge1xuICBsZWZ0OiA0NiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNDdcIl0ge1xuICBsZWZ0OiA0NyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNDhcIl0ge1xuICBsZWZ0OiA0OCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNDlcIl0ge1xuICBsZWZ0OiA0OSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNTBcIl0ge1xuICBsZWZ0OiA1MCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNTFcIl0ge1xuICBsZWZ0OiA1MSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNTJcIl0ge1xuICBsZWZ0OiA1MiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNTNcIl0ge1xuICBsZWZ0OiA1MyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNTRcIl0ge1xuICBsZWZ0OiA1NCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNTVcIl0ge1xuICBsZWZ0OiA1NSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNTZcIl0ge1xuICBsZWZ0OiA1NiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNTdcIl0ge1xuICBsZWZ0OiA1NyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNThcIl0ge1xuICBsZWZ0OiA1OCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNTlcIl0ge1xuICBsZWZ0OiA1OSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNjBcIl0ge1xuICBsZWZ0OiA2MCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNjFcIl0ge1xuICBsZWZ0OiA2MSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNjJcIl0ge1xuICBsZWZ0OiA2MiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNjNcIl0ge1xuICBsZWZ0OiA2MyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNjRcIl0ge1xuICBsZWZ0OiA2NCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNjVcIl0ge1xuICBsZWZ0OiA2NSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNjZcIl0ge1xuICBsZWZ0OiA2NiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNjdcIl0ge1xuICBsZWZ0OiA2NyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNjhcIl0ge1xuICBsZWZ0OiA2OCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNjlcIl0ge1xuICBsZWZ0OiA2OSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNzBcIl0ge1xuICBsZWZ0OiA3MCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNzFcIl0ge1xuICBsZWZ0OiA3MSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNzJcIl0ge1xuICBsZWZ0OiA3MiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNzNcIl0ge1xuICBsZWZ0OiA3MyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNzRcIl0ge1xuICBsZWZ0OiA3NCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNzVcIl0ge1xuICBsZWZ0OiA3NSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNzZcIl0ge1xuICBsZWZ0OiA3NiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNzdcIl0ge1xuICBsZWZ0OiA3NyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNzhcIl0ge1xuICBsZWZ0OiA3OCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiNzlcIl0ge1xuICBsZWZ0OiA3OSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiODBcIl0ge1xuICBsZWZ0OiA4MCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiODFcIl0ge1xuICBsZWZ0OiA4MSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiODJcIl0ge1xuICBsZWZ0OiA4MiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiODNcIl0ge1xuICBsZWZ0OiA4MyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiODRcIl0ge1xuICBsZWZ0OiA4NCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiODVcIl0ge1xuICBsZWZ0OiA4NSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiODZcIl0ge1xuICBsZWZ0OiA4NiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiODdcIl0ge1xuICBsZWZ0OiA4NyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiODhcIl0ge1xuICBsZWZ0OiA4OCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiODlcIl0ge1xuICBsZWZ0OiA4OSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiOTBcIl0ge1xuICBsZWZ0OiA5MCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiOTFcIl0ge1xuICBsZWZ0OiA5MSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiOTJcIl0ge1xuICBsZWZ0OiA5MiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiOTNcIl0ge1xuICBsZWZ0OiA5MyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiOTRcIl0ge1xuICBsZWZ0OiA5NCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiOTVcIl0ge1xuICBsZWZ0OiA5NSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiOTZcIl0ge1xuICBsZWZ0OiA5NiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiOTdcIl0ge1xuICBsZWZ0OiA5NyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiOThcIl0ge1xuICBsZWZ0OiA5OCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiOTlcIl0ge1xuICBsZWZ0OiA5OSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC14PVwiMTAwXCJdIHtcbiAgbGVmdDogMTAwJTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIwXCJdIHtcbiAgYm90dG9tOiAwJTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIxXCJdIHtcbiAgYm90dG9tOiAxJTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIyXCJdIHtcbiAgYm90dG9tOiAyJTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIzXCJdIHtcbiAgYm90dG9tOiAzJTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI0XCJdIHtcbiAgYm90dG9tOiA0JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI1XCJdIHtcbiAgYm90dG9tOiA1JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI2XCJdIHtcbiAgYm90dG9tOiA2JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI3XCJdIHtcbiAgYm90dG9tOiA3JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI4XCJdIHtcbiAgYm90dG9tOiA4JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI5XCJdIHtcbiAgYm90dG9tOiA5JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIxMFwiXSB7XG4gIGJvdHRvbTogMTAlO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjExXCJdIHtcbiAgYm90dG9tOiAxMSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMTJcIl0ge1xuICBib3R0b206IDEyJTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIxM1wiXSB7XG4gIGJvdHRvbTogMTMlO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjE0XCJdIHtcbiAgYm90dG9tOiAxNCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMTVcIl0ge1xuICBib3R0b206IDE1JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIxNlwiXSB7XG4gIGJvdHRvbTogMTYlO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjE3XCJdIHtcbiAgYm90dG9tOiAxNyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMThcIl0ge1xuICBib3R0b206IDE4JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIxOVwiXSB7XG4gIGJvdHRvbTogMTklO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjIwXCJdIHtcbiAgYm90dG9tOiAyMCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMjFcIl0ge1xuICBib3R0b206IDIxJTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIyMlwiXSB7XG4gIGJvdHRvbTogMjIlO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjIzXCJdIHtcbiAgYm90dG9tOiAyMyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMjRcIl0ge1xuICBib3R0b206IDI0JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIyNVwiXSB7XG4gIGJvdHRvbTogMjUlO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjI2XCJdIHtcbiAgYm90dG9tOiAyNiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMjdcIl0ge1xuICBib3R0b206IDI3JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIyOFwiXSB7XG4gIGJvdHRvbTogMjglO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjI5XCJdIHtcbiAgYm90dG9tOiAyOSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMzBcIl0ge1xuICBib3R0b206IDMwJTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIzMVwiXSB7XG4gIGJvdHRvbTogMzElO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjMyXCJdIHtcbiAgYm90dG9tOiAzMiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMzNcIl0ge1xuICBib3R0b206IDMzJTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIzNFwiXSB7XG4gIGJvdHRvbTogMzQlO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjM1XCJdIHtcbiAgYm90dG9tOiAzNSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMzZcIl0ge1xuICBib3R0b206IDM2JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIzN1wiXSB7XG4gIGJvdHRvbTogMzclO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjM4XCJdIHtcbiAgYm90dG9tOiAzOCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiMzlcIl0ge1xuICBib3R0b206IDM5JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI0MFwiXSB7XG4gIGJvdHRvbTogNDAlO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjQxXCJdIHtcbiAgYm90dG9tOiA0MSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNDJcIl0ge1xuICBib3R0b206IDQyJTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI0M1wiXSB7XG4gIGJvdHRvbTogNDMlO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjQ0XCJdIHtcbiAgYm90dG9tOiA0NCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNDVcIl0ge1xuICBib3R0b206IDQ1JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI0NlwiXSB7XG4gIGJvdHRvbTogNDYlO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjQ3XCJdIHtcbiAgYm90dG9tOiA0NyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNDhcIl0ge1xuICBib3R0b206IDQ4JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI0OVwiXSB7XG4gIGJvdHRvbTogNDklO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjUwXCJdIHtcbiAgYm90dG9tOiA1MCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNTFcIl0ge1xuICBib3R0b206IDUxJTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI1MlwiXSB7XG4gIGJvdHRvbTogNTIlO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjUzXCJdIHtcbiAgYm90dG9tOiA1MyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNTRcIl0ge1xuICBib3R0b206IDU0JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI1NVwiXSB7XG4gIGJvdHRvbTogNTUlO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjU2XCJdIHtcbiAgYm90dG9tOiA1NiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNTdcIl0ge1xuICBib3R0b206IDU3JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI1OFwiXSB7XG4gIGJvdHRvbTogNTglO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjU5XCJdIHtcbiAgYm90dG9tOiA1OSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNjBcIl0ge1xuICBib3R0b206IDYwJTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI2MVwiXSB7XG4gIGJvdHRvbTogNjElO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjYyXCJdIHtcbiAgYm90dG9tOiA2MiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNjNcIl0ge1xuICBib3R0b206IDYzJTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI2NFwiXSB7XG4gIGJvdHRvbTogNjQlO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjY1XCJdIHtcbiAgYm90dG9tOiA2NSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNjZcIl0ge1xuICBib3R0b206IDY2JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI2N1wiXSB7XG4gIGJvdHRvbTogNjclO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjY4XCJdIHtcbiAgYm90dG9tOiA2OCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNjlcIl0ge1xuICBib3R0b206IDY5JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI3MFwiXSB7XG4gIGJvdHRvbTogNzAlO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjcxXCJdIHtcbiAgYm90dG9tOiA3MSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNzJcIl0ge1xuICBib3R0b206IDcyJTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI3M1wiXSB7XG4gIGJvdHRvbTogNzMlO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjc0XCJdIHtcbiAgYm90dG9tOiA3NCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNzVcIl0ge1xuICBib3R0b206IDc1JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI3NlwiXSB7XG4gIGJvdHRvbTogNzYlO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjc3XCJdIHtcbiAgYm90dG9tOiA3NyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiNzhcIl0ge1xuICBib3R0b206IDc4JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI3OVwiXSB7XG4gIGJvdHRvbTogNzklO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjgwXCJdIHtcbiAgYm90dG9tOiA4MCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiODFcIl0ge1xuICBib3R0b206IDgxJTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI4MlwiXSB7XG4gIGJvdHRvbTogODIlO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjgzXCJdIHtcbiAgYm90dG9tOiA4MyU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiODRcIl0ge1xuICBib3R0b206IDg0JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI4NVwiXSB7XG4gIGJvdHRvbTogODUlO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjg2XCJdIHtcbiAgYm90dG9tOiA4NiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiODdcIl0ge1xuICBib3R0b206IDg3JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI4OFwiXSB7XG4gIGJvdHRvbTogODglO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjg5XCJdIHtcbiAgYm90dG9tOiA4OSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiOTBcIl0ge1xuICBib3R0b206IDkwJTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI5MVwiXSB7XG4gIGJvdHRvbTogOTElO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjkyXCJdIHtcbiAgYm90dG9tOiA5MiU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiOTNcIl0ge1xuICBib3R0b206IDkzJTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI5NFwiXSB7XG4gIGJvdHRvbTogOTQlO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjk1XCJdIHtcbiAgYm90dG9tOiA5NSU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiOTZcIl0ge1xuICBib3R0b206IDk2JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCI5N1wiXSB7XG4gIGJvdHRvbTogOTclO1xufVxuLnNjYXR0ZXItcGxvdCAucGxvdC1jb250YWluZXIgW2RhdGEtY3AteT1cIjk4XCJdIHtcbiAgYm90dG9tOiA5OCU7XG59XG4uc2NhdHRlci1wbG90IC5wbG90LWNvbnRhaW5lciBbZGF0YS1jcC15PVwiOTlcIl0ge1xuICBib3R0b206IDk5JTtcbn1cbi5zY2F0dGVyLXBsb3QgLnBsb3QtY29udGFpbmVyIFtkYXRhLWNwLXk9XCIxMDBcIl0ge1xuICBib3R0b206IDEwMCU7XG59XG5cbi5ncm91cC1ieS1nZW5kZXIgLm1hbGUge1xuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5ncm91cC1ieS1nZW5kZXIgLmZlbWFsZSB7XG4gIGJhY2tncm91bmQ6ICNmZjY2OTk7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmdyb3VwLWJ5LW51bWJlciBbZGF0YS1ncm91cD1cIjBcIl0ge1xuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5ncm91cC1ieS1udW1iZXIgW2RhdGEtZ3JvdXA9XCIxXCJdIHtcbiAgYmFja2dyb3VuZDogI2ZmNjY5OTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uZ3JvdXAtYnktbnVtYmVyIFtkYXRhLWdyb3VwPVwiMlwiXSB7XG4gIGJhY2tncm91bmQ6ICM5M2I4ODE7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmdyb3VwLWJ5LW51bWJlciBbZGF0YS1ncm91cD1cIjNcIl0ge1xuICBiYWNrZ3JvdW5kOiAjZTA5ZTg3O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5ncm91cC1ieS1udW1iZXIgW2RhdGEtZ3JvdXA9XCI0XCJdIHtcbiAgYmFja2dyb3VuZDogI2EyMjA0MTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uZ3JvdXAtYnktbnVtYmVyIFtkYXRhLWdyb3VwPVwiNVwiXSB7XG4gIGJhY2tncm91bmQ6ICM5NTg3OWM7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5cblxuXG4uY29udGFpbiB7XG4gIHdpZHRoOiA3MCU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi5za2lsbHMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTBweDs7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5cbi5jc3Mge3dpZHRoOiA4MCU7IGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7fVxuLmpzIHt3aWR0aDogNjUlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O31cbi5waHAge3dpZHRoOiA2MCU7IGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7fVxuKiB7Ym94LXNpemluZzogYm9yZGVyLWJveH1cblxudWwgPmxpIHtcbiAgZm9udC1zaXplOiAxNTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/viewallsub/viewallsub.component.html":
/*!******************************************************!*\
  !*** ./src/app/viewallsub/viewallsub.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav> </app-nav>\n\n<mat-tab-group>\n  <mat-tab label=\"Responses\">\n    <ng-template matTabContent>\n      <div class=\"text-center\">\n        <h4> You have {{count}} Responses</h4>\n      </div>\n      <div class=\"list\">\n        <ul>\n          <div *ngFor=\"let item of ans | paginate: { itemsPerPage: 1, currentPage: p } \">\n            <div class=\"row2\">\n\n              <ul class=\"element\">\n                <!-- <li *ngFor=\"let x of a; let j = index\">\n                  {{j}}<b>{{x}}</b>\n                </li> -->\n                <div *ngFor=\"let a of item; let i = index\">\n                  <p style=\"color: #D81B60; font-size: 15px; font-weight: bold; margin-left: 30px;margin-top: 20px;\">\n                    {{a[0]}}<p>\n                      <ul>\n                        <li>\n                          {{a[1]}}\n                        </li>\n                      </ul>\n                </div>\n\n              </ul>\n            </div>\n          </div>\n        </ul>\n        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n      </div>\n\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Summary\">\n    <ng-template matTabContent>\n      <div class=\"list\">\n        <ul>\n          <div class=\"row2\">\n            <ul class=\"element\">\n              <li *ngFor=\"let dic of result; let j = index\">\n\n                <div *ngIf=\"dic['type']=='radio' || dic['type']=='autocomplete' ;else other_content\">\n\n\n                  <!-- <div *ngFor=\"let a of dic | keyvalue\">\n                  <b>{{a.value}}</b>\n                  </div> -->\n                  <p style=\"color: #D81B60; font-size: 15px; font-weight: bold; margin-left: 30px;margin-top: 20px;\">\n                    {{dic['qss']}}</p>\n\n                  <div class=\"bar-chart\">\n                    <ul>\n                      <div *ngFor=\"let num of dic['values'] | keyvalue\">\n                        <!-- {{num.key}}<li [attr.data-cp-size]=\"num.value\">{{num.value}}</li> -->\n\n                        <p\n                          style=\"color: #D81B60; font-size: 15px; font-weight: bold; margin-left: 30px;margin-top: 20px;\">\n                          {{num.key}}</p>\n                        <div class=\"contain\">\n                          <div class=\"skills\" [ngStyle]=\"setMyStyles(num.value,dic )\">{{ percernt(num.value,dic)}}%\n                          </div>\n                        </div>\n\n                      </div>\n                    </ul>\n                  </div>\n                </div>\n                <ng-template #other_content>\n                  <p style=\" color:#D81B60;font-size: 15px; font-weight: bold; margin-left: 30px;margin-top: 20px;\"> {{dic['qss']}}\n                  </p>\n                  <div class=\"textareashow\">\n                    <div *ngFor=\"let text of dic['text'] | keyvalue\">\n                      <p style=\" color:black;font-size: 15px; font-weight: bold; margin-left: 30px;margin-top: 20px;\">\n                        {{text.value}}</p>\n                    </div>\n                  </div>\n                </ng-template>\n              </li>\n            </ul>\n          </div>\n        </ul>\n      </div>\n\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/viewallsub/viewallsub.component.ts":
/*!****************************************************!*\
  !*** ./src/app/viewallsub/viewallsub.component.ts ***!
  \****************************************************/
/*! exports provided: ViewallsubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewallsubComponent", function() { return ViewallsubComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ViewallsubComponent = /** @class */ (function () {
    function ViewallsubComponent(_user, _router, route) {
        this._user = _user;
        this._router = _router;
        this.route = route;
        this.collection = [];
        this.model = {};
        this.subs = [];
        this.qs = [];
        this.ans = [];
        this.labels = [];
        this.result = [];
        this.count = 0;
        this.numpppp = "200";
        this.tabLoadTimes = [];
        this.length = 100;
        this.pageSize = 1;
        this.pageSizeOptions = [1];
        for (var i = 1; i <= 100; i++) {
            this.collection.push("item " + i);
        }
    }
    ViewallsubComponent.prototype.getTimeLoaded = function (index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    };
    ViewallsubComponent.prototype.setMyStyles = function (num, obj2) {
        console.log("ddddddiiiiiiiiiiiccccc", obj2, obj2.values);
        var sum = this.sum(obj2.values);
        var percernt = this.percernt(num, obj2);
        var color = "#f44336";
        console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbb", num / sum);
        if (percernt >= 25) {
            color = "#3f51b5";
        }
        if (percernt >= 50) {
            color = "#018786";
        }
        console.log("ssssssssuuuuuummmmmm", sum);
        var styles = {
            'background-color': color,
            'width': percernt + "%"
        };
        return styles;
    };
    ViewallsubComponent.prototype.percernt = function (num, obj2) {
        var sum = this.sum(obj2.values);
        return Math.round((num / sum) * 100);
    };
    ViewallsubComponent.prototype.sum = function (obj) {
        var sum = 0;
        for (var el in obj) {
            if (obj.hasOwnProperty(el)) {
                sum += parseFloat(obj[el]);
            }
        }
        return sum;
    };
    ViewallsubComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("rrrrrrrrrrrrrrrrrrrrrrrrrr", this._router.url);
        var formId = this.route.snapshot.params["id"];
        console.log(formId);
        var observable = this._user.getForm(formId);
        observable.subscribe(function (data) {
            _this.model = data[0];
            _this.subs = data[0].submissions;
            _this.qs = data[0].attributes;
            _this.count = data[0].submissions.length;
            console.log("ssssssssssssssssss", _this.subs);
            for (var i = 0; i < _this.subs.length; i++) {
                var arr = Object.values(_this.subs[i]);
                console.log("aaaarrrrrrrr", arr);
                var smallarr = [];
                for (var j = 0; j < _this.qs.length; j++) {
                    console.log("llllllllllllllllllll", arr[j]);
                    smallarr.push([_this.qs[j].label, arr[j]]);
                    //this.subs[i].key = this.qs[i];
                }
                _this.ans.push(smallarr);
                console.log("mmmmmmmmmmmmm", smallarr);
            }
            console.log("annnnnnssswwww", _this.ans);
            console.log("qssssssssssqqqqqqqqqqqqqqqqq", _this.qs);
            console.log("Got the information from post data", _this.subs);
            console.log("Got the information from post data", _this.qs);
            for (var j = 0; j < _this.qs.length; j++) {
                _this.labels.push(_this.qs[j].label);
            }
            _this.result = [
            // {"type":"text",
            // "qss":"whaats your name?",
            // "text":["Sara", "Ghadeer", "rawan",]},
            // {"type":"radio",
            //   "qss":"Gender?",
            //   "values":{ "male 1":((10/this.count)*100),
            //       "female 2":((5/this.count)*100)
            // }
            // }
            ];
            for (var j = 0; j < _this.qs.length; j++) {
                var dic = {};
                dic["type"] = _this.qs[j].type;
                dic["qss"] = _this.qs[j].label;
                if (_this.qs[j].type == "radio" || _this.qs[j].type == "autocomplete") {
                    var values = {};
                    for (var i = 0; i < _this.qs[j].values.length; i++) {
                        values[_this.qs[j].values[i].label] = 0;
                    }
                    for (var i = 0; i < _this.subs.length; i++) {
                        for (var a = 0; a < _this.qs[j].values.length; a++) {
                            if (_this.subs[i][_this.qs[j].name] == _this.qs[j].values[a].value)
                                values[_this.qs[j].values[a].label] = values[_this.qs[j].values[a].label] + 1;
                        }
                    }
                    dic["values"] = values;
                }
                else {
                    var text = [];
                    for (var i = 0; i < _this.subs.length; i++) {
                        text.push(_this.subs[i][_this.qs[j].name]);
                    }
                    dic["text"] = text;
                }
                _this.result.push(dic);
            }
            console.log("rrrrrrreeeeeessssssssss", _this.result);
        });
    };
    ViewallsubComponent.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
    };
    ViewallsubComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewallsub',
            template: __webpack_require__(/*! ./viewallsub.component.html */ "./src/app/viewallsub/viewallsub.component.html"),
            styles: [__webpack_require__(/*! ./viewallsub.component.css */ "./src/app/viewallsub/viewallsub.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ViewallsubComponent);
    return ViewallsubComponent;
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

module.exports = __webpack_require__(/*! /Users/SDev/Desktop/project/MEAN_Stack_Project-master/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map