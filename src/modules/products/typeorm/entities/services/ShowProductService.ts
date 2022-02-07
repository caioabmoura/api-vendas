import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../Product';
import { ProductRepository } from '../repositories/ProductsRepositories';

interface IRequest {
  id: string;
}

class ShowProductService {
  public async execute({ id }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('product not found');
    }

    return product;
  }
}

export default ShowProductService;
