const BASE_URL = "https://newsapi.org/v2/top-headlines?country=br";

const URL = `${BASE_URL}&apiKey=${process.env.API_KEY}`;

export default URL;
