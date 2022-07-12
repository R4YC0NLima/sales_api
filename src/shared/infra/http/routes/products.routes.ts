import { Router } from "express";
import { createProductController } from "@modules/products/useCases/CreateProduct";
const productsRoutes = Router();

productsRoutes.post("/", (request, response)=>
    createProductController.handle(request, response)
);
// productsRoutes.get("/", (request, response) => {
//     listChallengerController().handle(request, response)
// })

export { productsRoutes }
