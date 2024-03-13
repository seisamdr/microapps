import React from "react";
import Logo from "../../assets/images/logo.png";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-black text-white">
        <div className="flex ms-32 py-10">
          <div className="h-28 mr-20">
            <img className="h-full" src={Logo} alt="Logo dumbways.id" />
          </div>
          <div className="flex flex-col justify-center w-80">
            <h1 className=" font-bold text-2xl">DUMBWAYS.ID</h1>
            <p>
              Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan,
              Banten 15413
            </p>
          </div>
        </div>
        <div className="py-3.5 flex items-center justify-center border-t-2">
          <p>Komisi Pemilihan Umum Dumbways.ID | Seiryo @2024</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
