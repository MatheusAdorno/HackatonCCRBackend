import { Request, Response } from 'express';
import { container } from 'tsyringe';

import PutProductPhotoService from '../../../services/PutProductPhotoService';

export default class ProductPhotoController {
  public async update(request: Request, response: Response): Promise<Response> {
    const putProductPhoto = container.resolve(PutProductPhotoService);

    const product = await putProductPhoto.execute({
      product_id: request.params.product_id,
      photoFilename: request.file.filename,
    });

    return response.json(product);
  }
}
