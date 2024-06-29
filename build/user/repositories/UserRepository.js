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
exports.UserRepository = void 0;
const database_1 = __importDefault(require("../../shared/config/database"));
class UserRepository {
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                database_1.default.query('SELECT user_id, role_id_fk, user_name FROM user', (error, results) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        const users = results;
                        resolve(users);
                    }
                });
            });
        });
    }
    static findById(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                database_1.default.query('SELECT * FROM user WHERE user_id = ?', [user_id], (error, results) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        const users = results;
                        if (users.length > 0) {
                            resolve(users[0]);
                        }
                        else {
                            resolve(null);
                        }
                    }
                });
            });
        });
    }
    static findByUserName(user_name) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                database_1.default.query('SELECT * FROM user WHERE user_name = ?', [user_name], (error, results) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        const users = results;
                        if (users.length > 0) {
                            resolve(users[0]);
                        }
                        else {
                            resolve(null);
                        }
                    }
                });
            });
        });
    }
    static createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'INSERT INTO user (user_name, role_id_fk, password) VALUES (?, ?, ?)';
            return new Promise((resolve, reject) => {
                database_1.default.execute(query, [user.user_name, user.role_id_fk, user.password], (error, result) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        const createdUserId = result.insertId;
                        const createdUser = Object.assign(Object.assign({}, user), { user_id: createdUserId });
                        resolve(createdUser);
                    }
                });
            });
        });
    }
    static updateUser(user_id, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'UPDATE user SET user_name = ?, role_id_fk = ?, password = ? WHERE user_id = ?';
            return new Promise((resolve, reject) => {
                database_1.default.execute(query, [userData.user_name, userData.role_id_fk, userData.password, user_id], (error, result) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (result.affectedRows > 0) {
                            const updatedUser = Object.assign(Object.assign({}, userData), { user_id: user_id });
                            resolve(updatedUser);
                        }
                        else {
                            resolve(null);
                        }
                    }
                });
            });
        });
    }
    static deleteUser(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'DELETE FROM user WHERE user_id = ?';
            return new Promise((resolve, reject) => {
                database_1.default.execute(query, [user_id], (error, result) => {
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
exports.UserRepository = UserRepository;
