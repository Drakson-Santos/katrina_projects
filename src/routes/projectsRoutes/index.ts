import { Request, Response } from "express";
import { _createNewProjectsController } from "../../UseCases/ProjectsUseCases/CreateNewProjectUseCases";
import { _getProjectsController } from "../../UseCases/ProjectsUseCases/GetProjectsUseCase";
import { BASE_PATH, PATH_CREATE } from "./paths";

const express = require('express');
const router = express.Router();

router.post(PATH_CREATE, async (req: Request, res: Response) => {
    return _createNewProjectsController.execute(req, res);
});

router.get("", async (req: Request, res: Response) => {
    return _getProjectsController.execute(req, res);
});

module.exports = (app: any) => app.use(BASE_PATH, router);
