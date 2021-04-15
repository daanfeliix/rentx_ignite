import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
// Import Controllers
import CreateUserController from "@modules/accounts/useCases/createUser/CreateUserController";
import UpdateUserAvatarController from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import ensureAuthenticated from "@shared/infra/http/middlewares/ensureAuthenticate";

const usersRouter = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

// Controllers
const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
usersRouter.post("/", createUserController.handle);

usersRouter.patch(
    "/avatar",
    ensureAuthenticated,
    uploadAvatar.single("avatar"),
    updateUserAvatarController.handle
);

export default usersRouter;
