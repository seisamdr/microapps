import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "../../index.css";
import Profil from "../../assets/images/monkey.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getPaslon } from "../../services/paslon";
import IVotes from "../../interface/votes";

const sliderSettings = {
  spaceBetween: 50,
  slidesPerView: 1,
};

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div>
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-white text-xl font-[700] h-16 w-16 rounded-full flex items-center justify-center absolute left-0 top-[40%] z-50"
      >
        <FaAngleLeft size="50px" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="bg-white text-xl font-[700] h-16 w-16 rounded-full flex items-center justify-center absolute right-0 top-[40%] z-50"
      >
        <FaAngleRight size="50px" />
      </button>
    </div>
  );
};

const Carousel = () => {
  const [paslons, setPaslons] = useState<IVotes[]>([]);

  useEffect(() => {
    const fetchPaslons = async () => {
      try {
        const data = await getPaslon();
        const sortedData = data.sort((a, b) => a.id - b.id);
        setPaslons(sortedData);
        setPaslons(data);
      } catch (error) {
        console.error("Error fetching paslons for carousel:", error);
      }
    };

    fetchPaslons();
  }, []);

  return (
    <Swiper {...sliderSettings}>
      <SliderButton />
      {paslons.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center items-center h-[600px]">
            <div className="bg-white w-[900px] h-[494px] flex justify-center items-center gap-[30px] p-[50px] rounded-[10px] shadow-xl shadow-neutral-400">
              <div>
                <img
                  className="w-[246px] h-[328px]"
                  src={Profil}
                  alt="Profil"
                />
              </div>

              <div>
                <p className="text-[24px] font-[700]">
                  Nomor Urut: {index + 1}
                </p>
                <p className="text-[40px] font-[700]  text-reddark-2">
                  {item.name}
                </p>
                <p className="text-[24px] font-[400]">Visi & Misi:</p>
                <ul className="text-[24px] font-[400] list-disc ps-[40px]">
                  {Array.isArray(item.visimisi) ? (
                    item.visimisi.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))
                  ) : (
                    <li>{item.visimisi}</li>
                  )}
                </ul>
                <p className="text-[24px] font-[400]">Koalisi:</p>
                <ul className="text-[24px] font-[400] list-disc ps-[40px]">
                  {Array.isArray(item.koalisi) ? (
                    item.koalisi.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))
                  ) : (
                    <li>{item.koalisi}</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
