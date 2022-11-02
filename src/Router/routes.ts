import { Router } from "express";

import { NewsController } from "../controllers/NewsController";

export const router = Router();

const newsController = new NewsController();

router.get('/', newsController.getAllNews);

router.get('/country/:country', newsController.getNewsCountry);

router.get('/category/:category', newsController.getNewsCategory);

router.get('/country/:country/category/:category', newsController.getNewsCategoryAndCountry);

router.get('/keywords', newsController.getNewsKeywords);
