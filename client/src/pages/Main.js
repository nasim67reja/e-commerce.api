import MainHeader from "../components/Header/MainHeader";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
