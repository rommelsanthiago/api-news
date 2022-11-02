export const BASE_URL = "https://newsapi.org/v2/top-headlines?";

const URL = `${BASE_URL}country=br&apiKey=${process.env.API_KEY}`;

export default URL;
