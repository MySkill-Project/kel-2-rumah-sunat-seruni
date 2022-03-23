import { useEffect, useState } from "react";
import ArticleServices from "./services/ArticleServices";
import Header from "./components/Header";
import Intro from "./components/Intro";

import { colors } from "./utils/utility";
import ContentBody from "./components/ContentBody";
import Footer from "./components/Footer";

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

const bodyData1 = {
  title: "Kenapa memilih kami?",
  description1:
    "Rumah sunat Seruni berdirisejak tahun 2002 dengan layanan utama khitan / Sunat modern, perawatan luka dan pengobatan umum. Sunat menggunakan metode alat changgih dan modern.",
  description2:
    "Kami melayani sunat untuk Bayi, Anak, Orang Dewasa dengan menggunakan metode sunat yang canggih tanpa rasa sakit atau minim nyeri dan juga cepat sembuh.",
  description3:
    "Dengan metode yang lebih canggih membuat sunat menjadi lebih menyenangkan. Selain minim nyeri dan cepat sembuh, kami juga menggunakan metode tanpa penjahitan sehingga hasil sangat rapi dan anak bisa langsung beraktifitas maupun terkena air.",
  description4: "# AyoSunat bersama Rumah Sunat Seruni",
  list: [
    {
      title: "Tenaga medis Professional",
    },
    {
      title: "Metode Canggih",
    },
    {
      title: "Penyembuhat Cepat",
    },
    {
      title: "Harga Terjangkau",
    },
  ],
};

const bodyData2 = {
  title: "Testimoni Pasien",
  list: [
    { title: "Testimoni 1" },
    { title: "Testimoni 2" },
    { title: "Testimoni 3" },
  ],
};

const bodyData3 = {
  title: "Artikel dan Berita",
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
    <>
      <div style={styles.top}>
        <Header navData={navData} onNavClick={(id) => console.log(id)} />
        <Intro
          introData={introData}
          onRegisterClick={() => console.log("register clicked")}
        />
      </div>
      <div style={styles.body}>
        <ContentBody title={bodyData1.title}>
          <div style={body1Style.container}>
            <div style={body1Style.contentText}>
              <p>{bodyData1.description1}</p>
              <br />
              <p>{bodyData1.description2}</p>
              <br />
              <p>{bodyData1.description3}</p>
              <br />
              <p>{bodyData1.description4}</p>
            </div>
            <div style={body1Style.contentFeatures}>
              {bodyData1.list.map((i) => (
                <div style={body1Style.itemContainer}>
                  <p style={body1Style.itemText}>{i.title}</p>
                </div>
              ))}
            </div>
          </div>
        </ContentBody>
        <ContentBody title={bodyData2.title}>
          <div style={body2Style.container}>
            {bodyData2.list.map((i) => (
              <div style={body2Style.itemContainer} />
            ))}
          </div>
        </ContentBody>
        <ContentBody title={bodyData3.title}></ContentBody>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  top: {
    backgroundColor: colors.white,
    padding: "30px 100px",
  },
  body: {
    backgroundColor: colors.cream,
    padding: "0 100px",
  },
};

const body1Style = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: "20px",
  },
  contentText: {
    textAlign: "start",
  },
  contentFeatures: {
    display: "grid",
    gridTemplateColumns: "200px 200px",
    gridTemplateRows: "200px 200px",
    gap: "20px",
  },
  itemContainer: {
    padding: "10px",
    width: "180px",
    height: "180px",
    lineHeight: "180px",
    backgroundColor: colors.green,
    borderRadius: "16px",
    textAlign: "center",
    verticalAlign: "middle",
  },
  itemText: {
    display: "inline-block",
    verticalAlign: "middle",
    lineHeight: "normal",
  },
};

const body2Style = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: "20px",
  },
  itemContainer: {
    padding: "10px",
    width: "50%",
    height: "180px",
    backgroundColor: colors.green,
    borderRadius: "16px",
  },
};

export default App;
