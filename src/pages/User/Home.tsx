import React, { useEffect, useState } from "react";
import IArticle from "../../interface/article";
import Notes from "../../components/home/Notes";
import Footer from "../../components/home/Footer";
import Navbar from "../../components/home/Navbar";
import Header from "../../components/home/Header";
import Section from "../../components/home/Section";
import { getArticles } from "../../services/article";

const Home: React.FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getArticles();
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);
  return (
    <div className="bg-zinc-300">
      <Navbar />
      <Header />
      <div className="flex-wrap flex justify-center items-center gap-4 mt-12 px-6">
        {articles &&
          articles.map((data: IArticle, id: number) => {
            return (
              <div key={id}>
                <Section
                  id={data.id}
                  image={data.image}
                  date={data.date}
                  title={data.title}
                  author={data.author}
                  detail={data.detail}
                />
              </div>
            );
          })}
      </div>
      <Notes />
      <Footer />
    </div>
  );
};

export default Home;
