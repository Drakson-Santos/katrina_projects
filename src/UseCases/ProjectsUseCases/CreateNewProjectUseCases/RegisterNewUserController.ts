import { Request, Response } from "express";
import { CreateNewProjectsUseCase } from "./RegisterNewUseCase";

export class CreateNewProjectsController {

    constructor(
        private createNewProjectsUseCase: CreateNewProjectsUseCase
    ) { }

    async execute(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;
        try {
            const user = await this.createNewProjectsUseCase.execute({
                name
            });
            return response.status(201).send(user)
        } catch (error) {
            return response.status(error.status || 500).json({
                message: error.message || 'Unexpected error.',
                type: error.type || 'UNEXPECTED_ERROR'
            })
        }
    }
}