import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

import URL, { BASE_URL } from "../utils/baseURL";
import { Article } from "../model/article";

export class NewsController {
    getAllNews = async (req: Request, res: Response) => {
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

    getNewsCountry = async (req: Request, res: Response) => {
        try {
            const { country } = req.params;
            let result;
            
            await axios.get(`${BASE_URL}country=${country}&apiKey=${process.env.API_KEY}`).then((res) => {
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
        }
    }

    getNewsCategory = async (req: Request, res: Response) => {
        try {
            const { category } = req.params;
            let result;
            
            await axios.get(`${BASE_URL}category=${category}&apiKey=${process.env.API_KEY}`).then((res) => {
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
        }
    }
    getNewsCategoryAndCountry = async (req: Request, res: Response) => {
        try {
            const { country, category } = req.params;
            let result;
            
            await axios.get(`${BASE_URL}country=${country}&category=${category}&apiKey=${process.env.API_KEY}`).then((res) => {
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
        }
    }

    getNewsKeywords = async (req: Request, res: Response) => {
        try {
            const { q } = req.params;
            let result;
            
            await axios.get(`${BASE_URL}q=${q}&apiKey=${process.env.API_KEY}`).then((res) => {
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
        }
    }
};
