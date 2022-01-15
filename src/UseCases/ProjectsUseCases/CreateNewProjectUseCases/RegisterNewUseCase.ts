
import { IProjectsRepository } from "../../../repositories/IProjectsRepository";
import { IDataRegisterProject } from "./RegisterNewUserDTO";

export class CreateNewProjectsUseCase {

    constructor(
        private projectsRepository: IProjectsRepository
    ) { }

    async execute(data_projects: IDataRegisterProject) {
        await this.projectsRepository.create(data_projects);
    }
}