import React, { useState } from "react";
import { BottomNav } from "./LinksEl";
import { Sublink, SublinkContact, WrapperLi } from "./HeaderBottom";
import { Search } from "./HeaderTop";
import { useDispatch, useSelector } from "react-redux";
import { overlayActions } from "../../store/ovarlay";
import UserImage from "../Account/UserImage";

const MobileHeader = () => {
  const [openContact, setOpenContact] = useState(false);
  const [idNum, setIdNum] = useState("");
  const curUserName = useSelector((state) => state.user.user?.data.data.name);

  const dispatch = useDispatch();

  const { menuIsVisible, searchMenuIsVisible } = useSelector(
    (state) => state.overlay
  );
  return (
    <>
      {menuIsVisible || searchMenuIsVisible ? (
        <div className="scroller  ani absolute top-0  z-10 h-screen w-[60%] overflow-y-auto bg-white shadow-xl">
          {searchMenuIsVisible && (
            <div className="p-2">
              <span
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() => {
                  dispatch(overlayActions.searchMenuHiddenHandler());
                  dispatch(overlayActions.backdropHidden());
                }}
              >
                <ion-icon name="close-outline" size="large"></ion-icon>
              </span>
              <Search classes="flex mt-20 border-2 " />
            </div>
          )}
          {menuIsVisible && (
            <>
              <div className="customIcon relative flex  items-center gap-6 bg-secondary p-4 text-white">
                <span>
                  <UserImage imgHeight="h-7 sm:h-9" />
                </span>
                <span> Hi, {curUserName}</span>
                <span
                  className="absolute right-2 top-4 w-6 cursor-pointer"
                  onClick={() => {
                    dispatch(overlayActions.mobileMenuHiddenHandler());
                    dispatch(overlayActions.backdropHidden());
                  }}
                >
                  <ion-icon name="close-outline" size="large"></ion-icon>
                </span>
              </div>

              <nav>
                <ul className="flex flex-col gap-2  p-4">
                  {BottomNav.map((parentLink, i) => (
                    <WrapperLi
                      key={i}
                      id={i}
                      parentLink={parentLink}
                      onGet={[setOpenContact, openContact]}
                      onTest={setIdNum}
                      classCustom={`justify-between hover:bg-red-50 px-4 rounded-lg py-2`}
                      classLink={"font-semibold text-xl"}
                    >
                      <Sublink
                        parentLink={parentLink}
                        classSub={`grid grid-cols-1 ${
                          openContact && idNum === i ? "" : "hidden"
                        }`}
                      />
                      <SublinkContact
                        parentLink={parentLink}
                        classN={`${openContact && idNum === i ? "" : "hidden"}`}
                      />
                    </WrapperLi>
                  ))}
                </ul>
              </nav>
            </>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MobileHeader;
