import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../../../store/store";

import Navbar from "./Navbar";

const Layout: FC = () => {
  const navigate = useNavigate();
  const isLoggedUser = useSelector((state: RootState) => state.user.loggedUser);

  useEffect(() => {
    if (!isLoggedUser) {
      navigate("/login");
    }
  }, [isLoggedUser]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
