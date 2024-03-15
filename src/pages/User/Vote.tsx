import React, { useEffect, useState } from "react";
import SectionVote from "../../components/vote/SectionVote";
import Navbar from "../../components/home/Navbar";
import Footer from "../../components/home/Footer";
import VotingPages from "../../components/vote/VotingPage";
import Votes from "../../interface/votes";
import { getPaslon } from "../../services/paslon";

const Vote: React.FC = () => {
  const [paslons, setPaslons] = useState<Votes[]>();

  useEffect(() => {
    const fetchPaslons = async () => {
      try {
        const fetchedPaslons = await getPaslon();
        setPaslons(fetchedPaslons);
      } catch (error) {
        console.error("Error fetching paslons:", error);
      }
    };

    fetchPaslons();
  }, []);

  return (
    <div>
      <Navbar />
      <SectionVote />

      {paslons && paslons.length > 0 && (
        <div>
          <VotingPages
            id={paslons[0].id}
            image={paslons[0].image}
            name={paslons[0].name}
            visimisi={paslons[0].visimisi}
            koalisi={paslons[0].koalisi}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Vote;
