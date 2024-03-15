import React from "react";
import Logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState<boolean>(false);

  const loggedIn = (): void => {
    setIsLogin(!isLogin);
  };

  const navigate = useNavigate();

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-black text-white z-10">
      <div className="flex justify-between items-center px-32 py-3.5">
        <div className="flex items-center">
          <div className="h-9 mr-4">
            <img
              className="h-full cursor-pointer"
              onClick={() => navigate("/home")}
              src={Logo}
              alt="Logo dumbways.id"
            />
          </div>
          <p
            className="font-bold cursor-pointer"
            onClick={() => navigate("/home")}
          >
            PEMILU PRESIDEN DUMBWAYS.ID
          </p>
        </div>

        <div className="flex items-center">
          <ul className="flex items-center justify-center mr-10">
            <li className="cursor-pointer" onClick={() => navigate("/vote")}>
              Voting
            </li>
          </ul>

          <p className="bg-white text-black h-9 w-9 rounded-full flex items-center justify-center">
            D
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
