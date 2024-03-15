import { FC } from "react";
import Monkey from "../../assets/images/monkeycard.png";
import { IVoters } from "../../interface/voters";

interface AdminProps {
  Voters: IVoters[];
}

const Admin: FC<AdminProps> = ({ Voters }) => {
  return (
    <>
      <section className="flex flex-col px-[2vw] py-28">
        <div className="">
          <h1 className="text-5xl font-black text-[#5E5400] text-center">
            DASHBOARD
          </h1>

          <div className="grid grid-cols-3 mt-8">
            <div className="flex flex-col items-center">
              <span className="w-73 h-73 bg-admincard-1 rounded-full text-4xl font-bold flex items-center justify-center text-admincard-1-1 border-8 border-admincard-1-1">
                1
              </span>
              <div className="bg-[#FFCD56] mt-8 px-4 py-6 rounded-2xl">
                <div>
                  <img
                    src={Monkey}
                    alt=""
                    className="w-[330.3px] h-[262px] object-cover rounded-lg"
                  />
                  <div className="text-[#5E5400] my-4 flex-col flex">
                    <h1 className="font-black text-4xl custom">SURYA SURYA</h1>
                    <span className="text-xl font-bold custom2">
                      Akumulasi : 45%
                    </span>
                    <span className="text-xl font-bold custom2">
                      Jumlah Vote : 117 Voters
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="w-73 h-73 bg-admincard-2 rounded-full text-4xl font-bold flex items-center justify-center text-admincard-2-1 border-8 border-admincard-2-1">
                2
              </span>
              <div className="bg-[#56FFF5] mt-8 px-4 py-6 rounded-2xl">
                <div>
                  <img
                    src={Monkey}
                    alt=""
                    className="w-[330.3px] h-[262px] object-cover rounded-lg"
                  />
                  <div className="text-[#00585E] my-4 flex-col flex">
                    <h1 className="font-black text-4xl custom">SURYA SURYA</h1>
                    <span className="text-xl font-bold custom2">
                      Akumulasi : 75%
                    </span>
                    <span className="text-xl font-bold custom2">
                      Jumlah Vote : 300 Voters
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="w-73 h-73 bg-admincard-3 rounded-full text-4xl font-bold flex items-center justify-center text-admincard-3-1 border-8 border-admincard-3-1">
                3
              </span>
              <div className="bg-[#FF5656] mt-8 px-4 py-6 rounded-2xl">
                <div>
                  <img
                    src={Monkey}
                    alt=""
                    className="w-[330.3px] h-[262px] object-cover rounded-lg"
                  />
                  <div className="text-[#5E0000] my-4 flex-col flex">
                    <h1 className="font-black text-4xl custom">SURYA SURYA</h1>
                    <span className="text-xl font-bold custom2">
                      Akumulasi : 45%
                    </span>
                    <span className="text-xl font-bold custom2">
                      Jumlah Vote : 117 Voters
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#D9D9D9]">
        <div className="flex flex-col items-center justify-center px-[2vw] py-32">
          <h1 className="text-5xl font-black text-[#5E5400]">LIST VOTER</h1>
          <div className="mt-10 text-black">
            <table className="min-w-full border text-left text-sm font-light dark:border-neutral-500">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th
                    scope="col"
                    className="border-r pr-12 px-4 py-3 dark:border-neutral-500"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="border-r px-4 py-3 dark:border-neutral-500"
                  >
                    Nama
                  </th>
                  <th
                    scope="col"
                    className="border-r px-4 pr-28 py-4 dark:border-neutral-500"
                  >
                    Alamat
                  </th>
                  <th
                    scope="col"
                    className="border-r px-4 pr-28 py-4 dark:border-neutral-500"
                  >
                    Jenis Kelamin
                  </th>
                  <th
                    scope="col"
                    className="border-r px-4 pr-28 py-4 dark:border-neutral-500"
                  >
                    Paslon
                  </th>
                </tr>
              </thead>
              {Voters.map((member) => {
                return (
                  <tbody key={member.no} className=" text-left bg-white">
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap border-r px-4 py-3 font-medium dark:border-neutral-500">
                        {member.no}
                      </td>
                      <td className="whitespace-nowrap border-r px-4 py-3 font-medium dark:border-neutral-500">
                        {member.name}
                      </td>
                      <td className="whitespace-nowrap border-r px-4 py-3 font-medium dark:border-neutral-500">
                        {member.address}
                      </td>
                      <td className="whitespace-nowrap border-r px-4 py-3 font-medium dark:border-neutral-500">
                        {member.gender}
                      </td>
                      <td className="whitespace-nowrap border-r px-4 py-3 font-medium dark:border-neutral-500 text-[#061E99]">
                        {member.paslon}
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>

            <p className="mt-10 font-bold text-2xl">
              TOTAL SUARA TERKUMPUL : 1000 Voters
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
