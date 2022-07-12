import { EntityRepository, getRepository, Repository } from 'typeorm'

import { Product } from '../../entities/Product'
import { ICreateProductDTO, IProductRepository } from '../IProductRepository'

@EntityRepository(Product)
export class ProductRepository implements IProductRepository {
  private repository : Repository<Product>;

  constructor(){
    this.repository = getRepository(Product);
  }

  private static INSTANCE: ProductRepository;

  public static getInstance(): ProductRepository {
    if (!ProductRepository.INSTANCE) {
      ProductRepository.INSTANCE = new ProductRepository();
    }

    return ProductRepository.INSTANCE;
  }

  async create({ name, price, quantity }: ICreateProductDTO): Promise<Product> {
    const product = this.repository.create({  name, price, quantity })
    await this.repository.save(product);
    return product;
  }

  async findByName(name: string): Promise<Product | undefined> {
    const product = await this.repository.findOne({ where: {name}});
    return product;
  }
}
