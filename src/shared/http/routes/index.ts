import productsRouter from '@modules/products/routes/products.routes';
import passswordRouter from '@modules/users/routes/password.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import userRouter from '@modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passswordRouter);

export default routes;
