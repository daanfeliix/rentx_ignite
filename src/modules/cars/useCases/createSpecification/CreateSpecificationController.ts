import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecificationService } from "./CreateSpecificationService";

class CreateSpecificationController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, description } = request.body;
            const createSpecificationService = container.resolve(
                CreateSpecificationService
            );
            await createSpecificationService.execute({ name, description });

            return response.status(201).send();
        } catch (Error) {
            return response.status(500).send(Error.message);
        }
    }
}

export default CreateSpecificationController;
