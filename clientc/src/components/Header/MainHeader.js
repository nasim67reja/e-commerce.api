import ReactDOM from "react-dom";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import MobileHeader from "./MobileHeader";
import Backdrop from "../Reuse/Backdrop";

const MainHeader = () => {
  return (
    <header className="bg-primary">
      <div className="mx-auto max-w-st px-4 md:px-5">
        <HeaderTop />
      </div>
      <div className="hidden h-10 bg-secondary  lg:block">
        <HeaderBottom />
      </div>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <MobileHeader />,
        document.getElementById("overlay-root")
      )}
    </header>
  );
};

export default MainHeader;
