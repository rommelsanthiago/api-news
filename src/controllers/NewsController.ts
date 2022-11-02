import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

import URL from "../utils/baseURL";
import { Article } from "../model/article";

export class NewsController {
    getAllNews= async (req: Request, res: Response) => {
        try {
            let result;
            
            await axios.get(URL).then((res) => {
                result = ({
                    status: res.data.status,
                    totalResults: res.data.totalResults,
                    articles: res.data.articles.map(
                        (article: Article) => {
                          return {
                            author: article.author,
                            title: article.title,
                            description: article.description,
                          };
                        }
                    )
                });
            });

            res.status(200).send(result);
        } catch (error: any) {
            res.send({ message: error.message }).status(error.status);
        };
    };
};
