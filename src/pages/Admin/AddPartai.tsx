import React from "react";
import NavbarAdmin from "../../components/admin/NavbarAdmin";
import AddPartaiForm from "../../components/admin/AddPartaiForm";

const AddPartai: React.FC = () => {
  return (
    <div>
      <NavbarAdmin />
      <AddPartaiForm />
    </div>
  );
};

export default AddPartai;
