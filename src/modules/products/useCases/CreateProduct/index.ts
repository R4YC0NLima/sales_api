import { ProductRepository } from "@modules/products/repositories/implements/ProductsRepository";
import { CreateProductController } from "./CreateProductController";
import CreateProductUseCase from "./CreateProductUseCase";

const productRepository = ProductRepository.getInstance();
const createProductUseCase = new CreateProductUseCase(productRepository);
const createProductController = new CreateProductController(createProductUseCase);

export {createProductController}
