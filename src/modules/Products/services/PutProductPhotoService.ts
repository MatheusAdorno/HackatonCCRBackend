import { injectable, inject } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import IProductsRepository from '../repositories/IProductsRepository';

import Product from '../infra/typeorm/entities/Product';

interface IRequest {
  product_id: string;
  photoFilename: string;
}

@injectable()
class PutProductPhotoService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    product_id,
    photoFilename,
  }: IRequest): Promise<Product> {
    const product = await this.productsRepository.findById(product_id);

    if (!product) {
      throw new Error('Product does not exist');
    }

    const filename = await this.storageProvider.saveFile(photoFilename);

    product.photo = filename;

    await this.productsRepository.save(product);

    return product;
  }
}

export default PutProductPhotoService;
