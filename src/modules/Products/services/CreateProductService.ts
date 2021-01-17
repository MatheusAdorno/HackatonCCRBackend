import { injectable, inject } from 'tsyringe';

import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';

interface IRequest {
  name: string;
  description: string;
  minPrice: number;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({
    name,
    description,
    minPrice,
  }: IRequest): Promise<Product> {
    const product = await this.productsRepository.create({
      name,
      description,
      minPrice,
    });

    return product;
  }
}

export default CreateProductService;
