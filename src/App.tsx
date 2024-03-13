import React, { ChangeEvent } from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/auth/Login";
import { ILogin } from "./interface/auth";
import Home from "./pages/User/Home";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import Register from "./components/auth/Register";
import Details from "./pages/User/Details";
import Vote from "./pages/User/Vote";
import Partai from "./pages/Admin/ListPartai";
import AddPartai from "./pages/Admin/AddPartai";
import Paslon from "./pages/Admin/ListPaslon";
import AddPaslon from "./pages/Admin/AddPaslon";
import EditPaslon from "./pages/Admin/EditPaslon";

const App: React.FC = () => {
  const navigate = useNavigate();
  const [isLoginAdmin, setIsLoginAdmin] = React.useState<boolean>(false);
  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  const [form, setForm] = React.useState<ILogin>({
    username: "",
    password: "",
  });

  const handleSetForm = (event: ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.username === "admin" && form.password === "123") {
      setIsLoginAdmin(true);
    } else if (
      form.username !== "" &&
      form.password !== "" &&
      form.username !== "admin" &&
      form.password !== "123"
    ) {
      setIsLogin(true);
    }
  };

  React.useEffect(() => {
    if (isLoginAdmin) {
      navigate("/admin");
    }
  }, [isLoginAdmin, navigate]);

  React.useEffect(() => {
    if (isLogin) {
      navigate("/home");
    }
  }, [isLogin, navigate]);

  const PrivateRouteAdmin = () => {
    if (isLoginAdmin) {
      return <Outlet />;
    } else {
      return <Navigate to="/login" />;
    }
  };

  // const PrivateRoute = () => {
  //   if (isLogin) {
  //     return <Outlet />;
  //   } else {
  //     return <Navigate to="/login" />;
  //   }
  // };

  const PrivateRoute = () => {
    if (isLogin || isLoginAdmin) {
      return <Outlet />;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<Login handle={handleSetForm} login={login} />}
        />
        <Route path="/register" element={<Register />} />

        {/* <Route path="/" element={<PrivateRouteAdmin />}> */}
        <Route path="/" element={<Outlet />}>
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/admin/partai" element={<Partai />} />
          <Route path="/admin/partai/add" element={<AddPartai />} />
          <Route path="/admin/partai/edit/:id" element={<AddPartai />} />
          <Route path="/admin/paslon" element={<Paslon />} />
          <Route path="/admin/paslon/add" element={<AddPaslon />} />
          <Route path="/admin/paslon/edit/:id" element={<EditPaslon />} />
        </Route>

        {/* <Route path="/" element={<PrivateRoute />}> */}
        <Route path="/" element={<Outlet />}>
          {" "}
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:articleId" element={<Details />} />
          <Route path="/vote" element={<Vote />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
