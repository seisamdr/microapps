import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormErrors } from "../../interface/auth";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState<FormErrors>({});
  const [formRegister, setFormRegister] = useState({
    fullname: "",
    address: "",
    gender: "",
    username: "",
    password: "",
    role: "User",
  });

  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormRegister({
      ...formRegister,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { fullname, address, gender, username, password } = formRegister;
    const errors: FormErrors = {};

    if (!fullname) {
      errors.fullname = "Fullname is required";
    }
    if (!address) {
      errors.address = "Address is required";
    }
    if (!gender) {
      errors.gender = "Gender is required";
    }
    if (!username) {
      errors.username = "Username is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }

    setErrorMessages(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch("http://localhost:5000/api/v1/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formRegister),
        });

        if (!response.ok) {
          throw new Error(`Failed to register: ${response.statusText}`);
        }

        const data = await response.json();

        console.log("Registration successful:", data);

        navigate("/login");
      } catch (error) {
        console.error("Registration error:", error);
      }
    }
  };

  return (
    <div className="container">
      <div className=" flex justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col">
          {" "}
          <h1 className="text-4xl text-bottomvote font-black text-center mt-16">
            REGISTER
          </h1>
          <label
            htmlFor="fullname"
            className="text-xl font-bold text-logincolor mt-16"
          >
            Fullname
          </label>
          <input
            onChange={handleOnChange}
            name="fullname"
            type="text"
            className="w-96 h-14 border-logincolor border-2 rounded-2xl mt-3 px-6 font-medium"
          />
          {errorMessages.fullname && (
            <span className="text-red italic left-0 bottom-[-20px]">
              * {errorMessages.fullname}
            </span>
          )}
          <label
            htmlFor="address"
            className="text-xl font-bold text-logincolor mt-6"
          >
            Alamat
          </label>
          <input
            onChange={handleOnChange}
            name="address"
            type="text"
            className="w-96 h-14 border-logincolor border-2 rounded-2xl mt-3 px-6 font-medium"
          />
          {errorMessages.address && (
            <span className="text-red italic left-0 bottom-[-20px]">
              * {errorMessages.address}
            </span>
          )}
          <label
            htmlFor="gender"
            className="text-xl font-bold text-logincolor mt-6"
          >
            Jenis Kelamin
          </label>
          <select
            onChange={handleOnChange}
            name="gender"
            className="w-96 h-14 border-logincolor border-2 rounded-2xl mt-3 px-6 font-medium"
          >
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errorMessages.gender && (
            <span className="text-red italic left-0 bottom-[-20px]">
              * {errorMessages.gender}
            </span>
          )}
          <label
            htmlFor="username"
            className="text-xl font-bold text-logincolor mt-6"
          >
            Username
          </label>
          <input
            onChange={handleOnChange}
            name="username"
            type="text"
            className="w-96 h-14 border-logincolor border-2 rounded-2xl mt-3 px-6 font-medium"
          />
          {errorMessages.username && (
            <span className="text-red italic left-0 bottom-[-20px]">
              * {errorMessages.username}
            </span>
          )}
          <label
            htmlFor="password"
            className="text-xl font-bold text-logincolor mt-6"
          >
            Password
          </label>
          <input
            onChange={handleOnChange}
            name="password"
            type="password"
            className="w-96 h-14 border-logincolor border-2 rounded-2xl mt-3 px-6 font-medium"
          />
          {errorMessages.password && (
            <span className="text-red italic left-0 bottom-[-20px]">
              * {errorMessages.password}
            </span>
          )}
          <button
            type="submit"
            className="w-96 h-14 bg-bottomvote font-bold text-2xl text-white rounded-2xl mt-12"
          >
            SUBMIT
          </button>
          <div className="flex mt-6 mx-auto pb-20">
            <p className="text-lg text-logincolor italic">
              Sudah memiliki akun ?
            </p>
            <p
              className="text-lg text-blue-500 underline italic ml-3 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
