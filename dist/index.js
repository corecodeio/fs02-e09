"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
let p1 = new Person_1.default('Siri', 'Lorem', 30, 900000, 'Math');
let p3 = new Person_1.default('James', 'Ipsum', 18, 0, '');
p3.addClass('Biology');
p3.addClass('Spanish');
p3.showClasses();
console.log(p3.getFullName());
console.log(p3.name);
