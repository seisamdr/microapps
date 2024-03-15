import React from "react";
import NavbarAdmin from "../../components/admin/NavbarAdmin";
import AddArticleForm from "../../components/admin/AddArticleForm";

const AddArticle: React.FC = () => {
  return (
    <div>
      <NavbarAdmin />
      <AddArticleForm />
    </div>
  );
};

export default AddArticle;
