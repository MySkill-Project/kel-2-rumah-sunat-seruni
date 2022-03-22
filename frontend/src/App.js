import { useEffect, useState } from "react";
import ArticleServices from "./services/ArticleServices";

const articleService = new ArticleServices();

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await articleService.getArticles();
      console.log(result);
      setArticles(result.data);
    };

    fetchData();
  }, []);

  return <div>{articles.map((a) => console.log(a))}</div>;
};

export default App;
