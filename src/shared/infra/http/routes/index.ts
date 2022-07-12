import { Router } from "express";
import { createProductController } from "@modules/products/useCases/CreateProduct";
const routes = Router();

routes.post("/", (request, response)=>
    createProductController.handle(request, response)
);
// routes.get("/", (request, response) => {
//     listChallengerController().handle(request, response)
// })

export { routes }


// import { Router } from "express";
// import {productsRoutes} from './products.routes'

// const routes = Router();

// routes.use("/products", productsRoutes );

// export  {routes}
