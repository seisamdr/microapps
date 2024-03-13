import React from "react";
import NavbarAdmin from "../../components/admin/NavbarAdmin";
import AddPaslonForm from "../../components/admin/AddPaslonForm";

const AddPaslon: React.FC = () => {
  return (
    <div>
      <NavbarAdmin />
      <AddPaslonForm />
    </div>
  );
};

export default AddPaslon;
