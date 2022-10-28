import ads from "../../../assets/style.jpg";
import TopRated from "./TopRated";

const ProductLeftCol = () => {
  return (
    <div className="hidden md:block">
      <TopRated />
      <div>
        <img src={ads} alt="women" />
      </div>
    </div>
  );
};

export default ProductLeftCol;
