import { MongoProjectsRepositoriy } from "../../../repositories/implemantatios/MongoDB/MongoProjectsRepository";
import { CreateNewProjectsUseCase } from "./RegisterNewUseCase";
import { CreateNewProjectsController } from "./RegisterNewUserController";


const _projectsRepository = new MongoProjectsRepositoriy();
const _createNewProjectsUseCase = new CreateNewProjectsUseCase(_projectsRepository);
const _createNewProjectsController = new CreateNewProjectsController(_createNewProjectsUseCase);

export { _createNewProjectsController, _createNewProjectsUseCase }