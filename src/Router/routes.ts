import { Router } from "express";

import { NewsController } from "../controllers/NewsController";

export const router = Router();

const newsController = new NewsController();

router.get('/', newsController.getAllNews);

router.get('/:country', newsController.getNewsCountry);
