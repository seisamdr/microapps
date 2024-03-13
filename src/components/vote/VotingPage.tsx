import IVotes from "../../interface/votes";
import Carousel from "./Carousel";

const VotingPages = (vote: IVotes) => {
  return (
    <div className=" bg-grey ">
      <div>
        <h1 className="lg:text-5xl text-4xl font-bold text-yellowdark text-center pt-12 mt-12 mb-16">
          INFO PASLON
        </h1>
      </div>

      <div className="flex justify-center items-center mb-20 px-6">
        <Carousel />
      </div>

      <aside className="bg-white mt-16 px-28 py-28 flex">
        <p className=" font-bold lg:text-41 text-3xl text-center flex justify-center items-center text-red">
          PILIH BERDASARKAN GACHA TIDAK USAH SERIUS YANG PENTING TIDAK
          MELEGALKAN SLOT
        </p>
      </aside>
    </div>
  );
};

export default VotingPages;
