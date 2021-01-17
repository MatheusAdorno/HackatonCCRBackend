import { getRepository, Repository } from 'typeorm';

import ICreateProductDTO from '../../../dtos/ICreateProductDTO';
import IProductsRepository from '../../../repositories/IProductsRepository';

import Product from '../entities/Product';

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create({
    name,
    description,
    minPrice,
  }: ICreateProductDTO): Promise<Product> {
    const products = this.ormRepository.create({
      name,
      description,
      minPrice,
    });

    await this.ormRepository.save(products);

    return products;
  }

  public async findById(id: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne(id);

    return product;
  }

  public async save(product: Product): Promise<Product> {
    return this.ormRepository.save(product);
  }
}

export default ProductsRepository;
