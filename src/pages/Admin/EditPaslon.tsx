import React from "react";
import NavbarAdmin from "../../components/admin/NavbarAdmin";
import EditPaslonForm from "../../components/admin/EditPaslonForm";

const EditPaslon: React.FC = () => {
  return (
    <div>
      <NavbarAdmin />
      <EditPaslonForm />
    </div>
  );
};

export default EditPaslon;
