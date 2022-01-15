
export class Project {
    
    public _id?: string = undefined;
    public name: string;
    
    constructor(props: Omit<Project, 'id'>, id?: string) {
        Object.assign(this, props)
    }
}