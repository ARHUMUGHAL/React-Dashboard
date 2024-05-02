import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import ProfilePic from "../Assets/Prfimg1.png";

const Header = () => {
  const location = useLocation();

  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("theme");
    return savedMode ? savedMode : "light";
  });

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode); 
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", mode);
  }, [mode]);

  let headerContent;
  switch (location.pathname) {
    case "/":
      headerContent = "Main Dashboard";
      break;
    case "/nftmarketplace":
      headerContent = "NFT Marketplace";
      break;
    case "/datatables":
      headerContent = "Data Tables";
      break;
    case "/profile":
      headerContent = "Profile";
      break;
    case "/signin":
      headerContent = "Sign In";
      break;
    case "/rtladmin":
      headerContent = "RTL Admin";
      break;
    default:
      headerContent = "Main Dashboard";
      break;
  }
  const navigate = useNavigate();

  const SignOut = () => {
    localStorage.removeItem("LoggedIn");
    navigate("/login");
  };

  var count = false;
  const showSignOutBox = () => {
    const signOutBox = document.querySelector(".signOutBox");
    if (count === false) {
      signOutBox.classList.remove("hidden");
      count = true;
    } else {
      signOutBox.classList.add("hidden");
      count = false;
    }
  };

  return (
    <div
      className={`header fixed top-0 right-0 w-[86%] h-[15%] shadow-xl flex items-center z-50 justify-between px-8`}
    >
      <div className="w-[30%] h-[100%] flex flex-col justify-center">
        <div>
          <Link to="/" className="link">
            Pages /
          </Link>
          <Link to="/" className="link">
            {" "}
            {headerContent}
          </Link>
        </div>
        <div>
          <h1 className="text-[32px] font-bold cursor-pointer">
            {headerContent}
          </h1>
        </div>
      </div>
      <div
        className={`input-field h-[50%] w-[32%] flex items-center rounded-[50px] px-5`}
      >
        <FaSearch className="mx-2 header-icons" />
        <input
          type="text"
          className={`outline-none px-3 bg-transparent text-white h-[30px]`}
          placeholder="Search..."
        />
        <CiBellOn className={`mx-1 text-[20px] cursor-pointer header-icons`} />
        <IoIosInformationCircleOutline
          className={`mx-1 header-icons text-[20px] cursor-pointer`}
        />
        <div className="flex mx-1" onClick={toggleTheme}>
          {mode === "light" ? (
            <FaMoon className="header-icons" />
          ) : (
            <FaSun className="header-icons" />
          )}
        </div>
        <div
          onClick={showSignOutBox}
          className="w-[38px] h-[38px] mx-2 bg-purple-900 rounded-[50px] cursor-pointer overflow-hidden"
        >
          <img
            src={ProfilePic}
            className="w-[100%] h-[100%] object-cover"
            alt=""
          />
        </div>
        <div className="signOutBox pt-7 hidden rounded-[10px] absolute right-2 top-[80%] w-[180px] h-[80px] bg-gray-900 text-white">
          <div className="flex items-center justify-center">
            <PiSignOutBold className="text-[22px] text-white mx-1" />
            <button onClick={SignOut}>Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;





