import React, { useEffect, useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import IArticle from "../../interface/article";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import DeleteConfirmationModal from "./ModalDelete";

const ArticleTable: React.FC = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(
    null
  );

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/articles")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch articles");
        }
        return res.json();
      })
      .then((data: IArticle[]) => {
        const sortedData = data.sort((a, b) => a.id - b.id);
        setArticles(sortedData);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleAddArticle = () => {
    navigate("/admin/article/add");
  };

  const handleEdit = (articleId: number) => {
    navigate(`/admin/article/edit/${articleId}`);
  };

  const openDeleteModal = (articleId: number) => {
    setSelectedArticleId(articleId);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedArticleId(null);
    setDeleteModalOpen(false);
  };

  const handleDelete = async () => {
    if (selectedArticleId !== null) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/admin/article/${selectedArticleId}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error("Failed to delete article");
        }
        setArticles((prevArticle) =>
          prevArticle.filter((article) => article.id !== selectedArticleId)
        );
      } catch (error) {
        console.error("Error deleting article:", error);
      }
      closeDeleteModal();
    }
  };

  return (
    <div className="container overflow-x-auto">
      <div className="">
        <h1 className="text-bottomvote lg:text-5xl text-4xl font-black text-center mt-24">
          LIST ARTICLE
        </h1>

        <DeleteConfirmationModal
          isOpen={deleteModalOpen}
          onClose={closeDeleteModal}
          onConfirm={handleDelete}
        />

        <div className="flex justify-center items-center  overflow-x-auto ">
          <table
            className="table-auto border-collapse mt-6 lg:text-base text-xs"
            style={{ tableLayout: "fixed" }}
          >
            <thead>
              <tr>
                <th className="lg:px-6 lg:py-3.5" colSpan={4}>
                  <button
                    onClick={handleAddArticle}
                    className="bg-[#5E5400] text-white px-4 py-3 mb-3 rounded-md items-start justify-start justify-items-start"
                  >
                    Add Article
                  </button>
                </th>
              </tr>
              <tr>
                <th className="border lg:px-6 lg:py-3.5 border-gray-600 bg-table">
                  No
                </th>
                <th className="border lg:px-6 lg:py-3.5  border-gray-600 bg-table">
                  Title
                </th>
                <th className="border lg:px-6 lg:py-3.5 border-gray-600 bg-table">
                  Content
                </th>
                <th className="border lg:px-6 lg:py-3.5 border-gray-600 bg-table">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="top">
              {articles.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="border lg:px-6 lg:py-4 text-center italic text-slate-700 border-gray-600"
                  >
                    Belum ada data
                  </td>
                </tr>
              ) : (
                articles.map((article: any, index: number) => (
                  <tr key={index}>
                    <td className="border lg:px-6 lg:py-3 border-gray-600">
                      {index + 1}
                    </td>
                    <td className="border lg:px-6 lg:py-3 border-gray-600">
                      {article.title}
                    </td>
                    <td className="border lg:px-6 lg:py-3 w-657 border-gray-600">
                      {article.content}
                    </td>
                    <td className="border lg:px-6 lg:py-3 border-gray-600 text-center">
                      <div className="flex flex-col justify-center items-center">
                        <button
                          onClick={() => handleEdit(article.id)}
                          className="bg-blue-500 text-white px-4 py-2 rounded-md my-6"
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button
                          onClick={() => openDeleteModal(article.id)}
                          className="bg-rose-500 text-white px-4 py-2 rounded-md"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ArticleTable;
