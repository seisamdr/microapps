import React from "react";
import NavbarAdmin from "../../components/admin/NavbarAdmin";
import ListTablePaslon from "../../components/admin/Paslon";

const ListPaslon: React.FC = () => {
  return (
    <div>
      <NavbarAdmin />
      <ListTablePaslon />
    </div>
  );
};

export default ListPaslon;
