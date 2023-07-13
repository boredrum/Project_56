"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var pop_up_component_1 = require("./pop-up/pop-up.component");
var AppComponent = /** @class */ (function () {
    function AppComponent(usersService) {
        this.usersService = usersService;
        this.users = this.usersService.users();
    }
    AppComponent.prototype.showPopUp = function () {
        var _this = this;
        this.componentRef = this.viewRef.createComponent(pop_up_component_1.PopUpComponent);
        this.componentRef.instance.close.subscribe(function () { _this.viewRef.clear(); });
    };
    __decorate([
        core_1.ViewChild('popUp', { read: core_1.ViewContainerRef })
    ], AppComponent.prototype, "viewRef");
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
