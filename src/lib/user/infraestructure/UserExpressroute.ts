import { Router } from 'express';
import { UserExpressController } from '../infraestructure/userExpressController';

const userExpressRoute = Router();
const controller = new UserExpressController();

userExpressRoute.get('/user/', controller.getAllUsers.bind(controller));
userExpressRoute.get('/user/:id', controller.getUser.bind(controller));
userExpressRoute.post('/user/', controller.createUser.bind(controller));
userExpressRoute.put('/user/:id', controller.updateUser.bind(controller));
userExpressRoute.delete('/user/:id', controller.deleteUser.bind(controller));
userExpressRoute.get('/user/:email', controller.getUserByEmail.bind(controller));

export default userExpressRoute;

