import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}
  async handle(request: Request, response: Response) : Promise<Response> {
    const { name, price, quantity } = request.body;

    const createProduct = await this.createProductUseCase.execute({ name, price, quantity });
    return response.json(createProduct);
  }
}
