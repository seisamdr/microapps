import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IPartai from "../../interface/partai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import DeleteConfirmationModal from "./ModalDelete";

const Partai: React.FC = () => {
  const navigate = useNavigate();
  const [partai, setPartai] = useState<IPartai[]>([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [selectedPartaiId, setSelectedPartaiId] = useState<number | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/admin/partais")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch partai");
        }
        return res.json();
      })
      .then((data: IPartai[]) => {
        const sortedData = data.sort((a, b) => a.id - b.id);
        setPartai(sortedData);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleAddPartai = () => {
    navigate("/admin/partai/add");
  };

  const handleEdit = (partaiId: number) => {
    navigate(`/admin/partai/edit/${partaiId}`);
  };

  const openDeleteModal = (partaiId: number) => {
    setSelectedPartaiId(partaiId);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedPartaiId(null);
    setDeleteModalOpen(false);
  };

  const handleDelete = async () => {
    if (selectedPartaiId !== null) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/admin/partai/${selectedPartaiId}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error("Failed to delete paslon");
        }
        setPartai((prevPartai) =>
          prevPartai.filter((partai) => partai.id !== selectedPartaiId)
        );
      } catch (error) {
        console.error("Error deleting partai:", error);
      }
      closeDeleteModal();
    }
  };

  return (
    <div className="container overflow-x-auto">
      <div className="">
        <h1 className="text-bottomvote lg:text-5xl text-4xl font-black text-center mt-24">
          LIST PARTAI
        </h1>

        <DeleteConfirmationModal
          isOpen={deleteModalOpen}
          onClose={closeDeleteModal}
          onConfirm={handleDelete}
        />

        <div className="flex justify-center items-center  overflow-x-auto ">
          <table className="table-auto border-collapse mt-6 lg:text-base text-xs">
            <thead>
              <tr>
                <th className="lg:px-4 lg:py-3.5" colSpan={7}>
                  <button
                    onClick={handleAddPartai}
                    className="bg-[#5E5400] text-white px-4 py-3 mb-3 rounded-md items-start justify-start justify-items-start"
                  >
                    Add Partai
                  </button>
                </th>
              </tr>
              <tr>
                <th className="border lg:px-4 lg:py-3.5 border-gray-600 bg-table">
                  No
                </th>
                <th className="border lg:px-4 lg:py-3.5 border-gray-600 bg-table">
                  Logo
                </th>
                <th className="border lg:px-4 lg:py-3.5  border-gray-600 bg-table">
                  Nama
                </th>
                <th className="border lg:px-4 lg:py-3.5  border-gray-600 bg-table">
                  Ketua Umum
                </th>
                <th className="border lg:px-4 lg:py-3.5 border-gray-600 bg-table">
                  Visi & Misi
                </th>
                <th className="border lg:px-4 lg:py-3.5 border-gray-600 bg-table">
                  Alamat
                </th>
                <th className="border lg:px-4 lg:py-3.5 border-gray-600 bg-table">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {partai.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="border lg:px-4 lg:py-4 text-center italic text-slate-700 border-gray-600"
                  >
                    Belum ada data
                  </td>
                </tr>
              ) : (
                partai.map((partai: any, index: number) => (
                  <tr key={index}>
                    <td className="border lg:px-4 lg:py-3 text-center border-gray-600">
                      {index + 1}
                    </td>
                    <td className="border lg:px-4 lg:py-3  border-gray-600">
                      <img src={partai.image} className="w-78 h-94" alt="" />
                    </td>
                    <td className="border lg:px-4 lg:py-3  border-gray-600">
                      {partai.name}
                    </td>
                    <td className="border lg:px-4 lg:py-3  border-gray-600">
                      {partai.leader}
                    </td>
                    <td className="border lg:px-5 lg:py-3 border-gray-600">
                      <ul className="list-disc">
                        {Array.isArray(partai.visimisi) ? (
                          partai.visimisi.map((item: string, i: number) => (
                            <li key={i}>{item}</li>
                          ))
                        ) : (
                          <li>{partai.visimisi}</li>
                        )}
                      </ul>
                    </td>
                    <td className="border lg:px-4 lg:py-3  border-gray-600">
                      {partai.address}
                    </td>
                    <td className="border lg:px-4 lg:py-3 border-gray-600 text-center">
                      <div className="flex flex-col justify-center items-center">
                        <button
                          onClick={() => handleEdit(partai.id)}
                          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button
                          onClick={() => openDeleteModal(partai.id)}
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

export default Partai;
