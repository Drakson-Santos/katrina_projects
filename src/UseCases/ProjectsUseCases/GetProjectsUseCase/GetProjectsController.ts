import { Request, Response } from "express";
import { GetProjectsUseCase } from "./GetProjectsUseCase";

export class GetProjectsController {

    constructor(
        private getProjectsUseCase: GetProjectsUseCase
    ) { }

    async execute(request: Request, response: Response): Promise<Response> {
        const { id } = request.query;
        try {
            const projects = await this.getProjectsUseCase.execute({
                id: id ? String(id) : undefined
            });
            return response.status(200).send(projects)
        } catch (error) {
            return response.status(error.status || 500).json({
                message: error.message || 'Unexpected error.',
                type: error.type || 'UNEXPECTED_ERROR'
            })
        }
    }
}