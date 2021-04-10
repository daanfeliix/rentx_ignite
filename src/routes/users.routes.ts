import { Router } from "express";

// Import Controllers
import CreateUserController from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRouter = Router();

// Controllers
const createUserController = new CreateUserController();

usersRouter.post("/", createUserController.handle);

export default usersRouter;
