import { Router } from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser, loginUser } from '../controllers/userController';

const userRoutes: Router = Router();

userRoutes.post('/login', loginUser);

userRoutes.get('/', getUsers);
userRoutes.get('/:user_id',  getUserById);
userRoutes.post('/', createUser);
userRoutes.put('/:user_id', updateUser);
userRoutes.delete('/:user_id', deleteUser);

export default userRoutes;
