import React, { useState } from "react";
import SectionVote from "../../components/vote/SectionVote";
import Navbar from "../../components/home/Navbar";
import Footer from "../../components/home/Footer";
import VotingPages from "../../components/vote/VotingPage";
import Votes from "../../interface/votes";
import VotesInfo from "../../mocks/Paslon.json";

const Vote: React.FC = () => {
  const [voters] = useState<Votes[]>(VotesInfo);
  return (
    <div>
      <Navbar />
      <SectionVote />

      {voters &&
        voters.map((data: Votes, no: number) => {
          return (
            <div key={no}>
              <VotingPages
                no={data.no}
                image={data.image}
                name={data.name}
                visimisi={data.visimisi}
                partai={data.partai}
              />
            </div>
          );
        })}

      <Footer />
    </div>
  );
};

export default Vote;
