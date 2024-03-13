import React, { ChangeEvent, FormEvent, useState } from "react";
import monkeyking from "../../assets/images/monkeyking.png";
import { useNavigate } from "react-router-dom";

interface IForm {
  image: string;
  name: string;
  leader: string;
  visimisi: string;
  address: string;
}

const AddPartaiForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IForm>({
    image: "/images/monkey-table.png",
    name: "",
    leader: "",
    visimisi: "",
    address: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formattedData = {
        ...formData,
        visimisi: JSON.stringify(formData.visimisi),
      };

      const response = await fetch(
        "http://localhost:5000/api/v1/admin/partai",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        }
      );
      if (response.ok) {
        navigate("/admin/partai");
      } else {
        console.error("Failed to add partai");
      }
    } catch (error) {
      console.error("Error adding partai:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-bottomvote text-5xl font-black text-center mt-24">
        ADD PARTAI
      </h1>
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <div className="lg:flex lg:justify-center lg:gap-12  ">
          <div className="flex justify-center ">
            <img
              src={monkeyking}
              alt=""
              className="lg:w-368 w-[345px] h-523 radius-xl mt-14"
            />
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-2xl font-bold text-logincolor mt-10"
              >
                Nama
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="lg:w-478 lg:h-70 w-[330px] h-[40px]  border-logincolor border-2 rounded-2xl mt-3 px-6 font-medium"
              />
              <label
                htmlFor="leader"
                className="text-2xl font-bold text-logincolor mt-5"
              >
                Ketua Umum
              </label>
              <input
                type="text"
                name="leader"
                value={formData.leader}
                onChange={handleChange}
                className="lg:w-478 lg:h-70 w-[330px] h-[40px] border-logincolor border-2 rounded-2xl mt-3 px-6 font-medium"
              />
              <label
                htmlFor="visimisi"
                className="text-2xl font-bold text-logincolor mt-5"
              >
                Visi & Misi
              </label>
              <input
                type="text"
                name="visimisi"
                value={formData.visimisi}
                onChange={handleChange}
                className="lg:w-478 lg:h-139 w-[330px] h-[110px] border-logincolor border-2 rounded-2xl mt-3 px-6 font-medium"
              />
              <label
                htmlFor="address"
                className="text-2xl font-bold text-logincolor mt-5"
              >
                Alamat
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="lg:w-478 lg:h-139 w-[330px] h-[110px] border-logincolor border-2 rounded-2xl mt-3 px-6 font-medium"
              />
              <button
                className="lg:w-478 lg:h-68 w-[330px] h-[40px] bg-bottomvote font-bold lg:text-3xl text-2xl text-white rounded-2xl my-10"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPartaiForm;
