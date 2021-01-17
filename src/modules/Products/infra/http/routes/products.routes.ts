import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ProductsController from '../controllers/ProductsController';
import ProductPhotoController from '../controllers/ProductPhotoController';

const productsRouter = Router();
const productsController = new ProductsController();
const productPhotoController = new ProductPhotoController();
const upload = multer(uploadConfig);

productsRouter.post('/', productsController.create);

productsRouter.patch(
  '/photo/:product_id',
  upload.single('photo'),
  productPhotoController.update,
);

export default productsRouter;
