import { container } from 'tsyringe';

import './providers';

import IProductsRepository from '../../modules/Products/repositories/IProductsRepository';
import ProductsRepository from '../../modules/Products/infra/typeorm/repositories/ProductsRepository';

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);
