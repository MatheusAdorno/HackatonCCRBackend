import { Router } from 'express';

import productsRouter from '../../../../modules/Products/infra/http/routes/products.routes';

const routes = Router();

routes.use('/products', productsRouter);

export default routes;
