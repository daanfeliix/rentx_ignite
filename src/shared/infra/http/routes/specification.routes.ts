import { Router } from "express";

// Import Controllers
import CreateSpecificationController from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import ListSpecificationController from "@modules/cars/useCases/listSpecifications/ListSpecificationController";
import ensureAuthenticated from "@shared/infra/http/middlewares/ensureAuthenticate";

const specificationRoutes = Router();

// Controllers
const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationRoutes.post(
    "/",
    ensureAuthenticated,
    createSpecificationController.handle
);

specificationRoutes.get("/", listSpecificationController.handle);

export default specificationRoutes;
