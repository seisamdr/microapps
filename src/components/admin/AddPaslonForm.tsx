import React, { ChangeEvent, FormEvent, useState } from "react";
import monkeyking from "../../assets/images/monkeyking.png";
import { useNavigate } from "react-router-dom";

interface IForm {
  name: string;
  image: string;
  visimisi: string;
  koalisi: string;
}

const AddPaslonForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IForm>({
    name: "",
    image: "/images/monkey-table.png",
    visimisi: "",
    koalisi: "",
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
        koalisi: JSON.stringify(formData.koalisi),
      };

      const response = await fetch(
        "http://localhost:5000/api/v1/admin/paslon",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        }
      );
      if (response.ok) {
        navigate("/admin/paslon");
      } else {
        console.error("Failed to add paslon");
      }
    } catch (error) {
      console.error("Error adding paslon:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-bottomvote text-5xl font-black text-center mt-24">
        ADD PASLON
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
                className="lg:w-478 lg:h-200 w-[330px] h-[110px] border-logincolor border-2 rounded-2xl mt-3 px-6 font-medium"
              />
              <label
                htmlFor="koalisi"
                className="text-2xl font-bold text-logincolor mt-5"
              >
                Koalisi
              </label>
              <input
                type="text"
                name="koalisi"
                value={formData.koalisi}
                onChange={handleChange}
                className="lg:w-478 lg:h-200 w-[330px] h-[110px] border-logincolor border-2 rounded-2xl mt-3 px-6 font-medium"
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

export default AddPaslonForm;
