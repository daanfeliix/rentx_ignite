import { Request, Response } from "express";
import { container } from "tsyringe";

import UpdateUserAvatarService from "./UpdateUserAvatarService";

export default class UpdateUserAvatarController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: userId } = request.user;
        const avatarFile = request.file.filename;

        // Receber arquivo

        const updateUserAvatarService = container.resolve(
            UpdateUserAvatarService
        );

        updateUserAvatarService.execute({ userId, avatarFile });

        return response.status(204).send();
    }
}
