import { MongoProjectsRepositoriy } from "../../../repositories/implemantatios/MongoDB/MongoProjectsRepository";
import { CreateNewProjectsUseCase } from "./CreateNewProjectUseCase";
import { CreateNewProjectsController } from "./CreateNewProjectController";


const _projectsRepository = new MongoProjectsRepositoriy();
const _createNewProjectsUseCase = new CreateNewProjectsUseCase(_projectsRepository);
const _createNewProjectsController = new CreateNewProjectsController(_createNewProjectsUseCase);

export { _createNewProjectsController, _createNewProjectsUseCase }