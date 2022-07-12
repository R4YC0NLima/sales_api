import { Product } from "@modules/products/entities/Product";
import { ProductRepository } from "@modules/products/repositories/implements/ProductsRepository";
import { ICreateProductDTO, IProductRepository } from "@modules/products/repositories/IProductRepository";
import AppError from "@shared/errors/AppError";

export default class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute ({ name, price, quantity }: ICreateProductDTO): Promise<Product> {
      const productAlreadyExists = await this.productRepository.findByName(name);
      if(productAlreadyExists){
          throw new AppError("Este Produto já possui cadastro!");
      }
      const product = this.productRepository.create({ name, price, quantity });

      return product;
  }
}
