"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userRoutes = (0, express_1.Router)();
userRoutes.post('/login', userController_1.loginUser);
userRoutes.get('/', userController_1.getUsers);
userRoutes.get('/:user_id', userController_1.getUserById);
userRoutes.post('/', userController_1.createUser);
userRoutes.put('/:user_id', userController_1.updateUser);
userRoutes.delete('/:user_id', userController_1.deleteUser);
exports.default = userRoutes;
