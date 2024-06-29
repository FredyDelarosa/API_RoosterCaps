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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const database_1 = __importDefault(require("../../shared/config/database"));
class ProductRepository {
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                database_1.default.query('SELECT * FROM productos', (error, results) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        const products = results;
                        resolve(products);
                    }
                });
            });
        });
    }
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                database_1.default.query('SELECT * FROM productos WHERE id = ?', [id], (error, results) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        const products = results;
                        if (products.length > 0) {
                            resolve(products[0]);
                        }
                        else {
                            resolve(null);
                        }
                    }
                });
            });
        });
    }
    static createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'INSERT INTO productos (name, price) VALUES (?,?)';
            return new Promise((resolve, reject) => {
                database_1.default.execute(query, [product.name, product.price], (error, result) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        const createdProductId = result.insertId;
                        const createdProduct = Object.assign(Object.assign({}, product), { id: createdProductId });
                        resolve(createdProduct);
                    }
                });
            });
        });
    }
    static updateProduct(id, productData) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'UPDATE productos SET name = ?, price = ? WHERE id = ?';
            return new Promise((resolve, reject) => {
                database_1.default.execute(query, [productData.name, productData.price, id], (error, result) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (result.affectedRows > 0) {
                            const updatedProduct = Object.assign(Object.assign({}, productData), { id: id });
                            resolve(updatedProduct);
                        }
                        else {
                            resolve(null);
                        }
                    }
                });
            });
        });
    }
    static deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'DELETE FROM productos WHERE id = ?';
            return new Promise((resolve, reject) => {
                database_1.default.execute(query, [id], (error, result) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (result.affectedRows > 0) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    }
                });
            });
        });
    }
}
exports.ProductRepository = ProductRepository;
