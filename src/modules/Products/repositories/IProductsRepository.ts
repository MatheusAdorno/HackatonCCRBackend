import Product from '../infra/typeorm/entities/Product';

import ICreateProductDTO from '../dtos/ICreateProductDTO';

export default interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  findById(id: string): Promise<Product | undefined>;
  save(user: Product): Promise<Product>;
}
