"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
let myUuid = (0, uuid_1.v4)();
console.log(myUuid);
class Item {
    constructor(name, price, description) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.price = price;
        this.description = description;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        this.name = value;
    }
    getPrice() {
        return this.price;
    }
    setPrice(value) {
        this.price = value;
    }
    getDescription() {
        return this.description;
    }
    setDescription(value) {
        this.description = value;
    }
}
exports.default = Item;
//# sourceMappingURL=items.js.map