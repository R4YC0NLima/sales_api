import { Product } from "../entities/Product";

interface ICreateProductDTO {
    name: string;
    price: number,
    quantity: number
}
interface IProductRepository {
    findByName(name: string): Promise<Product | undefined>;
    create({ name, price, quantity }: ICreateProductDTO): Promise<Product>;
    // list() : Promise<Product[]>;
}
export { IProductRepository, ICreateProductDTO }
