import { Project } from "../entities/Project";

export interface IProjectsRepository {
    create(user: Project): Promise<Project>;
    findAll(): Promise<Project[]>;
    findById(id: string): Promise<Project>;
    // update(user: User): Promise<User | void>;
    // delete(id: string): Promise<void>;
}