"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersService = void 0;
var core_1 = require("@angular/core");
var UsersService = /** @class */ (function () {
    function UsersService() {
        this.usersArray = [
            { name: "Mike", status: "I'm learning angular", url: "https://i.pravatar.cc/150?img=12", id: 1 },
            { name: "Nikola", status: "Playing piano", url: "https://i.pravatar.cc/150?img=7", id: 2 },
            { name: "Bob", status: "Translations from Chinese", url: "https://i.pravatar.cc/150?img=11", id: 3 },
            { name: "Anna ", status: "Pretty girl", url: "https://i.pravatar.cc/150?img=1", id: 4 },
        ];
    }
    UsersService.prototype.setNewName = function (newName, userId) {
        var user = this.usersArray.find(function (user) { return user.id === userId; });
        if (user) {
            user.name = newName.value;
            newName.value = '';
        }
    };
    UsersService.prototype.setNewStatus = function (newStatus, userId) {
        var user = this.usersArray.find(function (user) { return user.id === userId; });
        if (user) {
            user.status = newStatus.value;
            newStatus.value = '';
        }
    };
    UsersService.prototype.countUsers = function (users) {
        var count = 0;
        for (var key in this.usersArray) {
            if (key) {
                count += 1;
            }
        }
        return count;
    };
    UsersService.prototype.users = function () {
        return this.usersArray;
    };
    UsersService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
