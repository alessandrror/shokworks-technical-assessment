import styles from "./page.module.css";
import Card from "../../components/card/card";
import { Montserrat } from "next/font/google";
import { getNewsArticles } from "../../lib/articles";
import Carousel from "../../components/carousel/carousel";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default async function LandingPage() {
  const articles = await getNewsArticles();

  return (
    <section className={styles.section}>
      <h1 className={`${montserrat.className} ${styles.title}`}>
        <span>What is the</span>
        <br />
        <span>Speciality Of Us?</span>
      </h1>
      <Carousel>
        {articles
          .filter(article => article.title && article.description && article.urlToImage)
          .map((article, index) => {
            const { title, description, urlToImage } = article;

            const titleWords = title.split(" ");
            const middleIndex = Math.ceil(titleWords.length / 2);
            const mainTitle = titleWords.slice(0, middleIndex).join(" ");
            const subtitle = titleWords.slice(middleIndex).join(" ");

            return (
              <Card
                key={`${article.source.id}-${index}`}
                image={urlToImage!}
                title={mainTitle}
                subtitle={subtitle}
                description={description!}
              />
            );
          })}
      </Carousel>
    </section>
  );
}
