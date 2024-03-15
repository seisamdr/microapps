import React from "react";
import { useNavigate } from "react-router-dom";
import IArticle from "../../interface/article";

const Section: React.FC<IArticle> = (article) => {
  const navigate = useNavigate();
  const { id, image, createdAt, title, author } = article;

  const formattedDate = (createdAtString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const date = new Date(createdAtString);
    const formattedDate = new Intl.DateTimeFormat("id-ID", options).format(
      date
    );
    return formattedDate;
  };

  const formattedDateString = formattedDate(createdAt);

  return (
    <section className="flex">
      <div>
        {article.id === 1 && (
          <div
            className=" lg:w-753 lg:h-421 bg-center bg-image cursor-pointer h-[421px] overflow-hidden"
            onClick={() => navigate(`/detail/${id}`)}
          >
            <button className="bg-red w-250 h-47 rounded-xl text-white font-bold text-xl mt-72 ml-4">
              {formattedDateString}
            </button>
            <h1 className="font-bold text-3xl text-white ml-4">{title}</h1>
            <p className="text-white text-2xl ml-4">{author.fullname}</p>
          </div>
        )}

        {article.id > 1 && (
          <div className=" w-367 h-421 bg-white">
            <img src={image} className="" alt="" />
            <button
              className="bg-red w-250 h-47 rounded-xl text-white font-bold text-xl mt-4 ml-4"
              onClick={() => navigate(`/detail/${id}`)}
            >
              {formattedDateString}
            </button>
            <h1 className="font-bold text-3xl mt-3 ml-4">{title}</h1>
            <p className="text-2xl ml-4">{author.fullname}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Section;
