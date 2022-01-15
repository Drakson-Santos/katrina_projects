import mongoose from "../config/databases/mongoDataBase";

const ProjectsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const ProjectsDB = mongoose.model('Project', ProjectsSchema);

export default ProjectsDB;
