import React from "react";
import { useNavigate } from "react-router-dom";
import IArticle from "../../interface/article";
import { FaArrowLeft } from "react-icons/fa6";

const DetailContent: React.FC<IArticle> = (detail) => {
  const navigate = useNavigate();

  // Function to split content into paragraphs
  const splitContentIntoParagraphs = (content: string) => {
    const paragraphs = content.split("\n\n"); // Assuming each paragraph is separated by two newlines
    return paragraphs.map((paragraph, index) => (
      <p key={index} className="mt-5">
        {paragraph}
      </p>
    ));
  };

  return (
    <div>
      <div className="bg-white mx-auto">
        <div className="flex flex-wrap items-center mx-20 py-20">
          <div
            className="text-center flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/home")}
          >
            <FaArrowLeft size="20px" />
            <span className="ml-4">Beranda</span>
          </div>
          <div className="flex-grow text-center mr-[93px]">
            <span className="">BERITA HARI INI</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-4xl font-bold text-yellowdark">{detail.title}</p>
          <p className="text-xl">{detail.author}</p>
          <p className="text-xl">{detail.date}</p>
          <img
            src={detail.image}
            alt=""
            className="w-1054 h-530 mx-auto mt-6 object-cover object-center px-6"
          />
        </div>

        <div className="mx-16 text-justify pb-12">
          {splitContentIntoParagraphs(detail.content)}
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
