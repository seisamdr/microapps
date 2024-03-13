import React from "react";
import "../../../src/index.css";
import { useState } from "react";
import Vote from "../../mocks/Vote.json";
import Chart from "./Chart";
import ModalVoting from "./ModalVoting";
import { modalPaslon } from "../../mocks/paslon";

const SectionVote: React.FC = () => {
  const [vote, setVote] = useState<any>(false);

  const toVote = (): void => {
    setVote(!vote);
  };
  return (
    <div className="container bg-white">
      <h1 className="lg:text-5xl text-3xl font-bold text-yellowdark selection text-center pt-32">
        INFO PEMILU TERUPDATE
      </h1>
      <div className="flex flex-row gap-3 mt-5">
        <div className="flex flex-col justify-center items-center h-full mt-16">
          <p className="text-center text-5xl font-bold my-6">Hasil :</p>
          <Chart />
        </div>

        <div className=" container flex ">
          <div className=" flex items-center justify-center mx-auto mt-16">
            <div className="flex justify-center items-center mx-auto">
              <section>
                {Vote.map &&
                  Vote.map((votes, index) => {
                    return (
                      <div className="" key={index}>
                        {index === 0 && (
                          <div className="bg-reddark lg:w-657 h-146 w-[350px] flex items-center rounded-2xl shadow-lg shadow-rose-400 mb-4">
                            <div className="ml-6 bg-reddark-2 w-20 h-28 text-center font-bold border-4 border-white rounded-xl text-white items-center justify-center flex flex-col ">
                              <p className="text-base">No. Paslon</p>
                              <p className="text-3xl">{votes.no}</p>
                            </div>
                            <div className=" lg:ml-8 ml-4  text-reddark-2 font-black custom">
                              <p className="lg:text-41 text-2xl leading-tight tracking-tight">
                                {votes.name}
                              </p>
                              <p className="lg:text-4xl text-2xl ">
                                {votes.count}
                              </p>
                            </div>
                          </div>
                        )}

                        {index === 1 && (
                          <div className="bg-orangedark lg:w-657 h-146 w-[350px] flex items-center rounded-2xl shadow-lg shadow-gray-400 mb-4">
                            <div className="ml-6 bg-orangedark-2 w-20 h-28 text-center font-bold border-4 border-white rounded-xl text-white items-center justify-center flex flex-col ">
                              <p className="text-base">No. Paslon</p>
                              <p className="text-3xl">{votes.no}</p>
                            </div>
                            <div className=" lg:ml-8 ml-4 text-orangedark-2 font-black custom ">
                              <p className="lg:text-41 text-2xl leading-tight tracking-tight">
                                {votes.name}
                              </p>
                              <p className="lg:text-4xl text-2xl ">
                                {votes.count}
                              </p>
                            </div>
                          </div>
                        )}

                        {index === 2 && (
                          <div className="bg-bluedark lg:w-657 h-146 w-[350px] flex items-center rounded-2xl shadow-lg shadow-cyan-300 ">
                            <div className="ml-6 bg-greendark w-20 h-28 text-center font-bold border-4 border-white rounded-xl text-white items-center justify-center flex flex-col ">
                              <p className="text-base">No. Paslon</p>
                              <p className="text-3xl">{votes.no}</p>
                            </div>
                            <div className=" lg:ml-8 ml-4 text-greendark font-black custom">
                              <p className="lg:text-41 text-2xl leading-tight tracking-tight">
                                {votes.name}
                              </p>
                              <p className="lg:text-4xl text-2xl ">
                                {votes.count}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <ModalVoting voting={modalPaslon} />
      </div>
    </div>
  );
};

export default SectionVote;
