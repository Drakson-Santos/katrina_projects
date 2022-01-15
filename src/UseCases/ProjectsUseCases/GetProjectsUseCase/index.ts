import { MongoProjectsRepositoriy } from "../../../repositories/implemantatios/MongoDB/MongoProjectsRepository";
import { GetProjectsUseCase } from "./GetProjectsUseCase";
import { GetProjectsController } from "./GetProjectsController";


const _projectsRepository = new MongoProjectsRepositoriy();
const _getProjectsUseCase = new GetProjectsUseCase(_projectsRepository);
const _getProjectsController = new GetProjectsController(_getProjectsUseCase);

export { _getProjectsController, _getProjectsUseCase }