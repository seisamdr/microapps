import React, { ChangeEvent, FormEvent, useState } from "react";
import headline from "../../assets/images/headline.png";
import { useNavigate } from "react-router-dom";
import { User } from "../../../../backend/src/entity/User";

interface IForm {
  createdAt: string;
  title: string;
  content: string;
  author: User;
}

const AddArticleForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IForm>({
    createdAt: "",
    title: "",
    content: "",
    author: {} as User,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/admin/paslon",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
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
        ADD ARTICLE
      </h1>
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <div className="lg:flex lg:justify-center lg:gap-12  ">
          <div className="flex justify-center">
            <div className="flex flex-col">
              <label
                htmlFor="title"
                className="text-2xl font-bold text-logincolor mt-10"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="lg:w-478 lg:h-70 w-[330px] h-[40px]  border-logincolor border-2 rounded-2xl mt-3 px-6 font-medium"
              />
              <label
                htmlFor="content"
                className="text-2xl font-bold text-logincolor mt-5"
              >
                Content
              </label>
              <input
                type="text"
                name="content"
                value={formData.content}
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

export default AddArticleForm;
