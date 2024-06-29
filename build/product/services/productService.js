"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const productRepository_1 = require("../reporsitories/productRepository");
class ProductService {
    static getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return productRepository_1.ProductRepository.findAll();
        });
    }
    static getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return productRepository_1.ProductRepository.findById(id);
        });
    }
    static createProduct(newItem) {
        return __awaiter(this, void 0, void 0, function* () {
            return productRepository_1.ProductRepository.createProduct(newItem);
        });
    }
    static updateProduct(id, updatedItem) {
        return __awaiter(this, void 0, void 0, function* () {
            return productRepository_1.ProductRepository.updateProduct(id, updatedItem);
        });
    }
    static deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return productRepository_1.ProductRepository.deleteProduct(id);
        });
    }
}
exports.ProductService = ProductService;
