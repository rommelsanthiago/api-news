import { Router } from "express";

export const router = Router();

router.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})