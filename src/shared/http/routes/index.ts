import customersRouter from '@modules/customers/routes/customers.routes';
import productsRouter from '@modules/products/routes/products.routes';
import passswordRouter from '@modules/users/routes/password.routes';
import profileRouter from '@modules/users/routes/profile.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import userRouter from '@modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passswordRouter);
routes.use('/profile', profileRouter);
routes.use('/customers', customersRouter);

export default routes;
