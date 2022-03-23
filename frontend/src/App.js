import { useEffect, useState } from "react";
import ArticleServices from "./services/ArticleServices";
import Header from "./components/Header";
import Intro from "./components/Intro";

import { colors } from "./utils/utility";
import ContentBody from "./components/ContentBody";
import Footer from "./components/Footer";
import {
  bodyData1 as bodyText1,
  bodyData2 as bodyText2,
  bodyData3 as bodyText3,
  footerData as footerText,
  introData as introText,
  navData as navText,
} from "./res/text";

const articleService = new ArticleServices();
const navData = navText;
const introData = introText;
const bodyData1 = bodyText1;
const bodyData2 = bodyText2;
const bodyData3 = bodyText3;
const footerData = footerText;

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
      <Footer style={styles.footer} data={footerData} />
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
  footer: {
    backgroundColor: colors.white,
    fontSize: "12px",
    padding: "30px 100px",
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
