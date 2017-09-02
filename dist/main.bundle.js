webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { IndexComponent } from './index/index.component';

var routes = [
    // { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_2__settings_settings_component__["a" /* SettingsComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<md-toolbar color=\"primary\">\n  <button md-button routerLink=\"/settings\">\n    <md-icon md-font-library=\"material-icons\">settings</md-icon>\n    <span>SettingsEditor</span>\n  </button>\n</md-toolbar>\n<router-outlet></router-outlet>\n<!-- <h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://blog.angular.io//\">Angular blog</a></h2>\n  </li>\n  \n</ul> -->\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_pipes_keyval__ = __webpack_require__("../../../../../src/app/lib/pipes/keyval.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings_editor_list_editor_list_component__ = __webpack_require__("../../../../../src/app/settings/editor-list/editor-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__settings_find_editor_pipe__ = __webpack_require__("../../../../../src/app/settings/find-editor.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__settings_editor_list_editor_list_component__["a" /* EditorListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__lib_pipes_keyval__["a" /* KeyValPipe */],
            __WEBPACK_IMPORTED_MODULE_10__settings_find_editor_pipe__["a" /* FindEditorPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdInputModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/lib/pipes/keyval.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyValPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeyValPipe = (function () {
    function KeyValPipe() {
    }
    KeyValPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
        // return Object.keys(value);
    };
    return KeyValPipe;
}());
KeyValPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'keyval' })
], KeyValPipe);

//# sourceMappingURL=keyval.js.map

/***/ }),

/***/ "../../../../../src/app/settings/editor-list/editor-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/editor-list/editor-list.component.html":
/***/ (function(module, exports) {

module.exports = "<md-select [placeholder]=\"editor.id\" [(ngModel)]=\"setting[key]\">\n\t<md-option *ngFor=\"let item of editor.items | keyval\" [value]=\"item.key\">\n\t\t{{ item.value }}\n\t</md-option>\n</md-select>"

/***/ }),

/***/ "../../../../../src/app/settings/editor-list/editor-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor__ = __webpack_require__("../../../../../src/app/settings/editor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditorListComponent = (function () {
    function EditorListComponent() {
    }
    EditorListComponent.prototype.ngOnInit = function () {
    };
    return EditorListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__editor__["a" /* Editor */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__editor__["a" /* Editor */]) === "function" && _a || Object)
], EditorListComponent.prototype, "editor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], EditorListComponent.prototype, "setting", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], EditorListComponent.prototype, "key", void 0);
EditorListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'editor-list',
        template: __webpack_require__("../../../../../src/app/settings/editor-list/editor-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/settings/editor-list/editor-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EditorListComponent);

var _a;
//# sourceMappingURL=editor-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/editor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Editor; });
var Editor = (function () {
    function Editor() {
    }
    return Editor;
}());

//# sourceMappingURL=editor.js.map

/***/ }),

/***/ "../../../../../src/app/settings/find-editor.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindEditorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FindEditorPipe = (function () {
    function FindEditorPipe() {
    }
    FindEditorPipe.prototype.transform = function (value, editors) {
        return editors.find(function (editor) { return (value == editor.id); });
    };
    return FindEditorPipe;
}());
FindEditorPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'findEditor'
    })
], FindEditorPipe);

//# sourceMappingURL=find-editor.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/settings/mock-meta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return META; });
var META = {
    editors: [
        {
            id: "LogLevelList",
            dataType: "int",
            kind: "list",
            items: {
                "1": "Info",
                "2": "Debug",
                "3": "Warning",
                "4": "Error"
            },
            defVal: "1"
        },
        {
            id: "CountryList",
            dataType: "string",
            kind: "list",
            items: {
                "ua": "Ukraine",
                "uk": "United Kingdom",
                "us": "United States",
                "de": "Germany"
            }
        }
    ],
    groups: [
        {
            id: "subscriber",
            caption: "Subscriber profile",
            items: [
                {
                    id: "name",
                    caption: "Company name",
                    info: "The name of subscriber’s company",
                    dataType: "string"
                },
                {
                    id: "country",
                    caption: "Country",
                    dataType: "string",
                    editor: "CountryList",
                    defVal: "ua"
                },
                {
                    id: "receiveNotifications",
                    caption: "Receive notifications",
                    Info: "If turned on - this subscriber will receive notifications on the main account’s email address",
                    dataType: "bool",
                    defVal: "true"
                },
            ]
        },
        {
            id: "email",
            caption: "Email settings",
            items: [
                {
                    id: "smtpHost",
                    caption: "SMTP Host Address",
                    dataType: "string"
                },
                {
                    id: "smtpPort",
                    caption: "SMPT port",
                    dataType: "int"
                },
                {
                    id: "smtpUsername",
                    caption: "SMTP Username",
                    dataType: "string"
                },
                {
                    id: "smtpPassword",
                    caption: "SMTP Password",
                    dataType: "string",
                    editor: "password" //built-in editor
                }
            ]
        }
    ]
};
//# sourceMappingURL=mock-meta.js.map

/***/ }),

/***/ "../../../../../src/app/settings/mock-settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SETTINGS; });
var SETTINGS = {
    "subscriber": {
        "name": "Imena.UA",
        "country": "ua",
        "receiveNotifications": true
    },
    "email": {
        "smtpHost": "smtp.imena.ua",
        "smtpPort": 25,
        "smtpUsername": "vasya.pupkin",
        "smtpPassword": "password"
    }
};
//# sourceMappingURL=mock-settings.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sub1 {\n\tmargin-left: 10px; \n}\n\n.sub2 {\n\tmargin-left: 20px; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"float: right;\"><p style=\"font-weight: bold;\">Settings:</p>\n\t<pre>{{ settings | json }}</pre>\n<!-- \t<div *ngFor=\"let setting of settings | keyval\">\n\t\t<div class=\"sub1\">{{setting.key}}</div>\n\t\t<div *ngFor=\"let setVal of setting.value | keyval\">\n\t\t\t<div class=\"sub2\">{{ setVal.key }} - {{ setVal.value }}</div>\n\t\t</div>\n\t</div> -->\n</div>\n<div *ngIf=\"meta\">\n<!-- \t<div *ngFor=\"let editor of editors\">\n\t\t<div>{{editor.id}}</div>\n\t\t<div class=\"sub1\">{{editor.dataType}}</div>\n\t\t<div class=\"sub1\">{{editor.kind}}</div>\n\t\t<div *ngFor=\"let editorItem of editor.items | keyval\">\n\t\t\t<div class=\"sub1\">{{ editorItem.key }} - {{ editorItem.value }}</div>\n\t\t</div>\n\t</div> -->\n\n\t<div *ngFor=\"let group of groups\">\n\t\t<h3>{{group.caption}}</h3>\n\t\t<div *ngFor=\"let groupItem of group.items\">\n\t\t\t<div *ngIf=\"groupItem.editor\">\n\t\t\t\t<div *ngIf=\"groupItem.editor | findEditor:editors as editor\">\n\t\t\t\t\t<div *ngIf=\"editor.kind == 'list'\">\n\t\t\t\t\t\t<editor-list\n\t\t\t\t\t\t\t[editor]=\"editor\"\n\t\t\t\t\t\t\t[setting]=\"settings[group.id]\"\n\t\t\t\t\t\t\t[key]=\"groupItem.id\"\n\t\t\t\t\t\t></editor-list>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"groupItem.editor == 'password'\">\n\t\t\t\t\t<md-form-field>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tmdInput\n\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\t[placeholder]=\"groupItem.caption\"\n\t\t\t\t\t\t\t[(ngModel)]=\"settings[group.id][groupItem.id]\" />\n\t\t\t\t\t</md-form-field>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"!groupItem.editor\">\n\t\t\t\t<div *ngIf=\"groupItem.dataType == 'string'\">\n\t\t\t\t\t<md-form-field>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tmdInput\n\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t[placeholder]=\"groupItem.caption\"\n\t\t\t\t\t\t\t[(ngModel)]=\"settings[group.id][groupItem.id]\" />\n\t\t\t\t\t</md-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"groupItem.dataType == 'int'\">\n\t\t\t\t\t<md-form-field>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\tmdInput\n\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t[placeholder]=\"groupItem.caption\"\n\t\t\t\t\t\t\t[(ngModel)]=\"settings[group.id][groupItem.id]\" />\n\t\t\t\t\t</md-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"groupItem.dataType == 'bool'\" style=\"padding-top: 15px;\">\n\t\t\t\t\t<md-checkbox align=\"end\" [(ngModel)]=\"settings[group.id][groupItem.id]\">{{ groupItem.caption }}</md-checkbox>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- <div *ngFor=\"let group of meta.groups\">\n\t<div>{{group.id}}</div>\n\t<div class=\"sub1\">{{group.caption}}</div>\n\t<div *ngFor=\"let groupItem of group.items\">\n\t\t<div class=\"sub1\">{{groupItem.id}}</div>\n\t\t<div class=\"sub2\">{{groupItem.caption}}</div>\n\t\t<div class=\"sub2\">{{groupItem.dataType}}</div>\n\t\t<div class=\"sub2\">{{groupItem.defVal}}</div>\n\t</div>\n</div> -->\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_service__ = __webpack_require__("../../../../../src/app/settings/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = (function () {
    function SettingsComponent(settingsService) {
        this.settingsService = settingsService;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.getMeta();
        this.getSettings();
    };
    SettingsComponent.prototype.getMeta = function () {
        var _this = this;
        this.settingsService.getMeta().then(function (meta) {
            _this.meta = meta;
            _this.groups = meta.groups;
            _this.editors = meta.editors;
        });
    };
    SettingsComponent.prototype.getSettings = function () {
        var _this = this;
        this.settingsService.getSettings().then(function (settings) { return _this.settings = settings; });
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__settings_service__["a" /* SettingsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__settings_service__["a" /* SettingsService */]) === "function" && _a || Object])
], SettingsComponent);

var _a;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_meta__ = __webpack_require__("../../../../../src/app/settings/mock-meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_settings__ = __webpack_require__("../../../../../src/app/settings/mock-settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsService = (function () {
    function SettingsService() {
    }
    SettingsService.prototype.getMeta = function () {
        return new Promise(function (resolve, reject) {
            resolve(__WEBPACK_IMPORTED_MODULE_1__mock_meta__["a" /* META */]);
        });
    };
    SettingsService.prototype.getSettings = function () {
        return new Promise(function (resolve, reject) {
            // resolve(this.settings as Settings);
            resolve(__WEBPACK_IMPORTED_MODULE_2__mock_settings__["a" /* SETTINGS */]);
        });
    };
    return SettingsService;
}());
SettingsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SettingsService);

//# sourceMappingURL=settings.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map