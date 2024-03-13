import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import IVotes from "../../interface/votes";
import DeleteConfirmationModal from "./ModalDelete";

const ListTablePaslon: React.FC = () => {
  const navigate = useNavigate();
  const [paslons, setPaslons] = useState<IVotes[]>([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [selectedPaslonId, setSelectedPaslonId] = useState<number | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/admin/paslons")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch paslons");
        }
        return res.json();
      })
      .then((data: IVotes[]) => {
        const sortedData = data.sort((a, b) => a.id - b.id);
        setPaslons(sortedData);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleAddPaslon = () => {
    navigate("/admin/paslon/add");
  };

  const handleEdit = (paslonId: number) => {
    navigate(`/admin/paslon/edit/${paslonId}`);
  };

  const openDeleteModal = (paslonId: number) => {
    setSelectedPaslonId(paslonId);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedPaslonId(null);
    setDeleteModalOpen(false);
  };

  const handleDelete = async () => {
    if (selectedPaslonId !== null) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/admin/paslon/${selectedPaslonId}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error("Failed to delete paslon");
        }
        setPaslons((prevPaslons) =>
          prevPaslons.filter((paslon) => paslon.id !== selectedPaslonId)
        );
      } catch (error) {
        console.error("Error deleting paslon:", error);
      }
      closeDeleteModal();
    }
  };

  return (
    <div className="container overflow-x-auto">
      <div className="">
        <h1 className="text-bottomvote lg:text-5xl text-4xl font-black text-center mt-24">
          LIST PASLON
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
                <th className="lg:px-6 lg:py-3.5" colSpan={6}>
                  <button
                    onClick={handleAddPaslon}
                    className="bg-[#5E5400] text-white px-4 py-3 mb-3 rounded-md items-start justify-start justify-items-start"
                  >
                    Add Paslon
                  </button>
                </th>
              </tr>
              <tr>
                <th className="border lg:px-6 lg:py-3.5 border-gray-600 bg-table">
                  No
                </th>
                <th className="border lg:px-6 lg:py-3.5 border-gray-600 bg-table">
                  Image
                </th>
                <th className="border lg:px-6 lg:py-3.5  border-gray-600 bg-table">
                  Nama
                </th>
                <th className="border lg:px-6 lg:py-3.5 border-gray-600 bg-table">
                  Visi & Misi
                </th>
                <th className="border lg:px-6 lg:py-3.5 border-gray-600 bg-table">
                  Koalisi
                </th>
                <th className="border lg:px-6 lg:py-3.5 border-gray-600 bg-table">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {paslons.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="border lg:px-6 lg:py-4 text-center italic text-slate-700 border-gray-600"
                  >
                    Belum ada data
                  </td>
                </tr>
              ) : (
                paslons.map((paslon: any, index: number) => (
                  <tr key={index}>
                    <td className="border lg:px-6 lg:py-3 border-gray-600">
                      {index + 1}
                    </td>
                    <td className="border px-6 py-3 border-gray-600">
                      <img src={paslon.image} className="w-78 h-94" alt="" />
                    </td>
                    <td className="border lg:px-6 lg:py-3 border-gray-600">
                      {paslon.name}
                    </td>
                    <td className="border lg:px-6 lg:py-3 border-gray-600">
                      <ul className="list-disc">
                        {Array.isArray(paslon.visimisi) ? (
                          paslon.visimisi.map((item: string, i: number) => (
                            <li key={i}>{item}</li>
                          ))
                        ) : (
                          <li>{paslon.visimisi}</li>
                        )}
                      </ul>
                    </td>
                    <td className="border lg:px-6 lg:py-3 border-gray-600">
                      <ul className="list-disc">
                        {Array.isArray(paslon.koalisi) ? (
                          paslon.koalisi.map((item: string, i: number) => (
                            <li key={i}>{item}</li>
                          ))
                        ) : (
                          <li>{paslon.koalisi}</li>
                        )}
                      </ul>
                    </td>
                    <td className="border lg:px-6 lg:py-3 border-gray-600 text-center">
                      <div className="flex flex-col justify-center items-center">
                        <button
                          onClick={() => handleEdit(paslon.id)}
                          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2"
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button
                          onClick={() => openDeleteModal(paslon.id)}
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

export default ListTablePaslon;
