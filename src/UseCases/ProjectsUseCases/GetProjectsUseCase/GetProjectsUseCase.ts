import { Error } from "../../../entities/Error";
import { IProjectsRepository } from "../../../repositories/IProjectsRepository";
import { IGetProjectsDTO } from "./GetProjectsDTO";

export class GetProjectsUseCase {

    constructor(
        private projectsRepository: IProjectsRepository
    ) { }

    async execute(dataFilter: IGetProjectsDTO) {
        let result = null
        if (dataFilter.id) {
            result = await this.projectsRepository.findById(dataFilter.id);
        } else {
            result = await this.projectsRepository.findAll();
        }

        if (!result) throw new Error ('No projects found', 404, 'NO_PROJECTS_FOUND');
        return result
    }
}