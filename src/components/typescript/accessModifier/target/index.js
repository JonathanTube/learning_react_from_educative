"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FirstClass_1 = require("./FirstClass");
(function () {
    var firstClass = new FirstClass_1.default("Jonathan", 40, true);
    console.log(firstClass.name);
    // console.log(firstClass.marriaged) // It can not be accessed outside the class
    // console.log(firstClass.age) // It raises an error since the age property access modifier is private
    // console.log(firstClass.getAge()) // raise an error.
    var SecondClass = /** @class */ (function (_super) {
        __extends(SecondClass, _super);
        function SecondClass() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isMarriaged = function () {
                return _this.marriaged; // It can only be accessed by its derived class !!!!!
            };
            return _this;
        }
        return SecondClass;
    }(FirstClass_1.default));
    var secondClass = new SecondClass("Tom", 20, false);
    console.log(secondClass.name);
    console.log(secondClass.isMarriaged());
})();
