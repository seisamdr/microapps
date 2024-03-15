import React from "react";
import NavbarAdmin from "../../components/admin/NavbarAdmin";
import ArticleTable from "../../components/admin/Article";

const ListArticle: React.FC = () => {
  return (
    <div>
      <NavbarAdmin />
      <ArticleTable />
    </div>
  );
};

export default ListArticle;
