import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface handleAuth {
  handle: (e: ChangeEvent<HTMLInputElement>) => void;
  login: (e: FormEvent<HTMLFormElement>) => void;
}

export default function Login(props: handleAuth) {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.login(e);

    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    try {
      const response = await fetch("http://localhost:5000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message);
        return;
      }

      const data = await response.json();
      if (data.user.role === "User") {
        sessionStorage.setItem("isLogin", "true");
        navigate("/home");
      } else if (data.user.role === "Admin") {
        sessionStorage.setItem("isLoginAdmin", "true");
        navigate("/admin");
      }
    } catch (error) {
      setError("Failed to login");
    }
  };

  return (
    <div className="container flex justify-center items-center">
      <form
        action=""
        className="flex flex-col mx-auto"
        onSubmit={(e) => handleLogin(e)}
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

        {error && <div className="text-red-500 mt-2">{error}</div>}

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
