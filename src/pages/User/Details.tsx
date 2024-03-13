import React, { useEffect, useState } from "react";
import IArticle from "../../interface/article";
import Navbar from "../../components/home/Navbar";
import DetailContent from "../../components/home/DetailContent";
import Footer from "../../components/home/Footer";
import { useParams } from "react-router-dom";

const Details: React.FC = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState<IArticle | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        if (!articleId) return; // Check if articleId is defined

        const response = await fetch(
          `http://localhost:5000/api/v1/article/${articleId}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch article: ${response.statusText}`);
        }

        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticle();
  }, [articleId]);

  return (
    <div className="bg-zinc-300">
      <Navbar />
      <div className="mx-20">{article && <DetailContent {...article} />}</div>
      <Footer />
    </div>
  );
};

export default Details;
