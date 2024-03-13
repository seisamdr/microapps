import { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
// import { FormErrors } from "../../interface/auth";

interface handleAuth {
  handle: (e: ChangeEvent<HTMLInputElement>) => void;
  login: (e: FormEvent<HTMLFormElement>) => void;
}

export default function Login(props: handleAuth) {
  const navigate = useNavigate();
  // const [errorMessages, setErrorMessages] = useState<FormErrors>({});
  // const [formLogin, setFormLogin] = useState({
  //   username: "",
  //   password: "",
  // });

  // const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setFormLogin({ ...formLogin, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const { username, password } = formLogin;
  //   const errors: FormErrors = {};

  //   if (!username) {
  //     errors.username = "Username is required";
  //   }
  //   if (!password) {
  //     errors.password = "Password is required";
  //   }

  //   setErrorMessages(errors);

  //   if (Object.keys(errors).length === 0) {
  //     try {
  //       const config = {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formLogin),
  //       };

  //       const response = await fetch(
  //         "http://localhost:5000/api/v1/login",
  //         config
  //       );

  //       if (!response.ok) {
  //         throw new Error(`Login failed: ${response.statusText}`);
  //       }

  //       const data = await response.json();

  //       console.log("Login successful:", data);

  //       if (data.isAdmin) {
  //         navigate("/admin");
  //       } else {
  //         navigate("/home");
  //       }
  //     } catch (error) {
  //       console.error("Login error:", error);
  //     }
  //   }
  // };

  // return (
  //   <div className="container flex justify-center items-center">
  //     <form action={""} className="flex flex-col mx-auto">
  //       <h1 className="text-4xl text-bottomvote font-black text-center mt-16">
  //         LOGIN
  //       </h1>

  //       <label
  //         htmlFor="username"
  //         className="items-start text-xl font-bold text-logincolor mt-16"
  //       >
  //         Username
  //       </label>

  //       <input
  //         type="text"
  //         // onChange={handleOnChange}
  //         name="username"
  //         id="username"
  //         className="w-96 h-14 border-logincolor border-2 rounded-2xl mt-3 px-6"
  //       />
  //       {/* {errorMessages.username && (
  //         <span className="text-red italic left-0 bottom-[-20px]">
  //           * {errorMessages.username}
  //         </span>
  //       )} */}

  //       <label
  //         htmlFor="password"
  //         className="text-xl font-bold text-logincolor mt-6"
  //       >
  //         Password
  //       </label>
  //       <input
  //         type="password"
  //         // onChange={handleOnChange}
  //         name="password"
  //         id="password"
  //         className="w-96 h-14 border-logincolor border-2 rounded-2xl mt-3 px-6 "
  //       />
  //       {/* {errorMessages.password && (
  //         <span className="text-red italic left-0 bottom-[-20px]">
  //           * {errorMessages.password}
  //         </span>
  //       )} */}

  //       <button
  //         type="submit"
  //         className="w-96 h-14 bg-bottomvote font-bold text-2xl text-white rounded-2xl mt-12"
  //       >
  //         SUBMIT
  //       </button>

  //       <div className="flex mt-6 mx-auto">
  //         <p className="text-lg text-logincolor italic">
  //           Belum memiliki akun ?
  //         </p>
  //         <p
  //           className="text-lg text-blue-500 underline italic ml-3 cursor-pointer"
  //           onClick={() => navigate("/register")}
  //         >
  //           Register
  //         </p>
  //       </div>
  //     </form>
  //   </div>
  // );

  return (
    <div className="container flex justify-center items-center">
      <form
        action=""
        className="flex flex-col mx-auto"
        onSubmit={(e) => props.login(e)}
      >
        <h1 className="text-4xl text-bottomvote font-black text-center mt-16">
          LOGIN
        </h1>

        <label
          htmlFor="username"
          className="items-start text-xl font-bold text-logincolor mt-16"
        >
          Username
        </label>
        <input
          type="text"
          onChange={props.handle}
          name="username"
          id="username"
          className="w-96 h-14 border-logincolor border-2 rounded-2xl mt-3 px-6"
        />

        <label
          htmlFor="password"
          className="text-xl font-bold text-logincolor mt-6"
        >
          Password
        </label>
        <input
          type="password"
          onChange={props.handle}
          name="password"
          id="password"
          className="w-96 h-14 border-logincolor border-2 rounded-2xl mt-3 px-6 "
        />

        <button
          type="submit"
          className="w-96 h-14 bg-bottomvote font-bold text-2xl text-white rounded-2xl mt-12"
        >
          SUBMIT
        </button>

        <div className="flex mt-6 mx-auto">
          <p className="text-lg text-logincolor italic">
            Belum memiliki akun ?
          </p>
          <p
            className="text-lg text-blue-500 underline italic ml-3 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </p>
        </div>
      </form>
    </div>
  );
}
