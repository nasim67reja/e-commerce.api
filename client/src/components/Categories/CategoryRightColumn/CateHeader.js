import { useSearchParams, useLocation, useNavigate } from "react-router-dom";

const CateHeader = () => {
  let gridIsActive = true;

  let [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const createNavigate = (view, boolean) => {
    gridIsActive = boolean;

    if (searchParams.get("sort") && searchParams.get("view")) {
      navigate(
        `${location.pathname}?view=${view}&sort=${searchParams.get("sort")}`
      );
    } else if (searchParams.get("sort")) {
      navigate(
        `${location.pathname}?view=${view}&sort=${searchParams.get("sort")}`
      );
    } else {
      navigate(`${location.pathname}?view=${view}`);
    }
  };

  if (searchParams.get("view") === "list") gridIsActive = false;

  const sortingHandler = (e) => {
    const value = e.target.value;

    if (searchParams.get("sort") && searchParams.get("view")) {
      navigate(
        `${location.pathname}?sort=${value}&view=${searchParams.get("view")}`
      );
    } else if (searchParams.get("view")) {
      navigate(
        `${location.pathname}?sort=${value}&view=${searchParams.get("view")}`
      );
    } else {
      navigate(`${location.pathname}?sort=${value}`);
    }
  };

  return (
    <div className="mb-8 flex justify-between px-8">
      <div className="flex gap-2">
        <span
          className={`category flex cursor-pointer items-center justify-center rounded-sm  p-2 ${
            gridIsActive ? "bg-blue-600 text-white" : "border border-orange-400"
          }`}
          onClick={() => createNavigate("grid", true)}
        >
          <ion-icon name="grid-outline"></ion-icon>
        </span>
        <span
          className={`category flex cursor-pointer items-center  justify-center rounded-sm p-2 ${
            !gridIsActive
              ? "bg-blue-600 text-white"
              : "border border-orange-400"
          }`}
          onClick={() => createNavigate("list", false)}
        >
          <ion-icon name="list-outline" size="large"></ion-icon>
        </span>
      </div>

      <div className="flex w-64 items-center gap-3 ">
        <div>Sort by</div>
        <select
          name="sorting"
          className="flex-grow cursor-pointer rounded-sm border border-orange-500 py-2 px-4 text-sm transition-all duration-300 focus:outline-orange-500"
          onChange={sortingHandler}
        >
          <option value="Featuerd">Featured</option>
          <option value="Price,low to high">Price,low to high</option>
          <option value="Price,high to low">Price,high to low</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        {/* <div
          className="relative flex  flex-grow cursor-pointer justify-between gap-2 rounded-sm border border-orange-500 py-2 px-4 text-sm transition-all duration-300 hover:bg-blue-600 hover:text-white"
          onMouseEnter={() => setDownArrowIsActive(false)}
          onMouseLeave={() => setDownArrowIsActive(true)}
          onClick={() => setSortOvarlayIsActive((prevSt) => !prevSt)}
        >
          <span> Featured</span>
          <span className="translate-y-[2px]">
            {downArrowIsActive ? (
              <ion-icon name="caret-down"></ion-icon>
            ) : (
              <ion-icon name="caret-up"></ion-icon>
            )}
          </span>
          {sortOvarlayIsActive && (
            <ul className="absolute top-9 left-0 flex w-full flex-col gap-1 bg-white px-4 py-2 text-black">
              <li className="transition-all hover:text-blue-500">Featured</li>
              <li className="transition-all hover:text-blue-500">
                Price, low to high
              </li>
              <li className="transition-all hover:text-blue-500">
                Price, high to low
              </li>
              <li className="transition-all hover:text-blue-500">A-Z</li>
              <li className="transition-all hover:text-blue-500">Z-A</li>
              <li className="transition-all hover:text-blue-500">Top Rated</li>
            </ul>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default CateHeader;
