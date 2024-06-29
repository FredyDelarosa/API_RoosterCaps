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
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
const productService_1 = require("../services/productService");
const getProducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productService_1.ProductService.getProducts();
        res.json(products);
    }
    catch (err) {
        res.status(500).send('Error al obtener los datos');
    }
});
exports.getProducts = getProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productService_1.ProductService.getProductById(parseInt(req.params.id, 10));
        if (product) {
            res.status(201).json(product);
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getProductById = getProductById;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newItem = req.body;
        yield productService_1.ProductService.createProduct(newItem);
        res.status(201).send('Producto creado');
    }
    catch (err) {
        res.status(500).send('Error al crear el producto');
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedItem = req.body;
        yield productService_1.ProductService.updateProduct(parseInt(req.params.id, 10), updatedItem);
        res.send('Producto actualizado');
    }
    catch (err) {
        res.status(500).send('Error al actualizar el producto');
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield productService_1.ProductService.deleteProduct(parseInt(req.params.id, 10));
        res.send('Producto eliminado');
    }
    catch (err) {
        res.status(500).send('Error al eliminar el producto');
    }
});
exports.deleteProduct = deleteProduct;
