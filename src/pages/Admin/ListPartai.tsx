import React from "react";
import NavbarAdmin from "../../components/admin/NavbarAdmin";
import Partai from "../../components/admin/Partai";

const ListPartai: React.FC = () => {
  return (
    <div>
      <NavbarAdmin />
      <Partai />
    </div>
  );
};

export default ListPartai;
