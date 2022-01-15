import { Request, Response } from "express";
import { GetProjectsUseCase } from "./GetProjectsUseCase";

export class GetProjectsController {

    constructor(
        private getProjectsUseCase: GetProjectsUseCase
    ) { }

    async execute(request: Request, response: Response): Promise<Response> {
        const { id } = request.query;
        try {
            const users = await this.getProjectsUseCase.execute({
                id: id ? String(id) : undefined
            });
            return response.status(200).send(users)
        } catch (error) {
            return response.status(error.status || 500).json({
                message: error.message || 'Unexpected error.',
                type: error.type || 'UNEXPECTED_ERROR'
            })
        }
    }
}