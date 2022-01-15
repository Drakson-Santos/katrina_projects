import { Project } from "../entities/Project";

export interface IProjectsRepository {
    create(user: Project): Promise<Project>;
    // findByEmail(email: string, getPassword?: boolean): Promise<User | undefined>;
    // findAll(): Promise<User[]>;
    // findById(id: string): Promise<User>;
    // update(user: User): Promise<User | void>;
    // delete(id: string): Promise<void>;
}