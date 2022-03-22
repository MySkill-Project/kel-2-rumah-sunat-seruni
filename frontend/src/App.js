import { useEffect, useState } from "react";
import ArticleServices from "./services/ArticleServices";
import Header from "./components/Header";
import Intro from "./components/Intro";

import { colors } from "./utils/utility";

const articleService = new ArticleServices();

const navData = [
  { id: 0, text: "Tentang Kami" },
  { id: 1, text: "Konsultasi" },
  { id: 2, text: "Kontak" },
];

const introData = {
  title: "Mau Sunat?",
  description:
    "Rumah sunat seruni melayani sunat di klinik maupun di rumah anda.",
  image: "",
};

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

  return (
    <div>
      <div style={styles.top}>
        <Header navData={navData} onNavClick={(id) => console.log(id)} />
        <Intro
          introData={introData}
          onRegisterClick={() => console.log("register clicked")}
        />
      </div>
    </div>
  );
};

const styles = {
  top: {
    backgroundColor: colors.white,
    padding: "30px 100px",
  },
};

export default App;
