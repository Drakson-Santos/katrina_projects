import mongoose from "../../../config/databases/mongoDataBase";
import { Project } from "../../../entities/Project";
import ProjectsDB from "../../../schemas/projects";
import { IProjectsRepository } from "../../IProjectsRepository";


export class MongoProjectsRepositoriy implements IProjectsRepository {
   
    public async idIsValid(id: string): Promise<Boolean> {
        if (mongoose.Types.ObjectId.isValid(id)){
            return true;
        }
        return false;
    }

    public async create(user: Project): Promise<Project> {
        return ProjectsDB.create(user);
    }

    public async findAll(): Promise<Project[]> {
        const projects = await ProjectsDB.find();
        return projects;
    }

    public async findById(id: string): Promise<Project> {
        if (this.idIsValid(id)) {
            const project = await ProjectsDB.findById(id);
            return project;
        }
    }
    
}