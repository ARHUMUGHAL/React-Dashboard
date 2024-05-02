import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import BackgroundImage from "../../Assets/Login Wallpaper.jpg";
import { IoIosEye } from "react-icons/io";

const Register = () => {
  const [Input, setInput] = useState({
    UserName: "",
    Password: "",
  });

  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Username", JSON.stringify(Input));
    navigate("/login");
  };

  const HideShowPassword = () => {
    var passwordField = document.querySelector("input.password");
    var type =
      passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
  };

  return (
    <div className=" relative w-screen h-screen bg-zinc-900 flex items-center justify-center flex-col ">
      <img
        src={BackgroundImage}
        className=" absolute w-[100%] h-[100%] object-cover opacity-[35%]"
        alt=""
      />
      <div className="absolute w-[25%] rounded-[20px] h-[60%] overflow-hidden">
        <h1 className="text-[32px] font-bold mt-10 flex justify-center text-white w-[100%] h-[60px]">
          Register Now
        </h1>
        <form
          onSubmit={HandleSubmit}
          className="w-[100%] h-[50%] flex items-center justify-center flex-col"
        >
          <div className="w-[80%] h-[45px] bg-[#ffffff8b] rounded-[50px] flex justify-center items-center">
            <div className="w-[100%] mx-3 h-[40px] rounded-[50px] text-white flex items-center justify-center">
              <FaUserAlt />
              <input
                name="UserName"
                value={Input.UserName}
                onChange={(e) =>
                  setInput({ ...Input, [e.target.name]: e.target.value })
                }
                type="text"
                placeholder="Username"
                className="w-[75%] h-[100%] px-5 rounded-[50px] outline-none text-white bg-transparent placeholder-white font-semibold"
              />
            </div>
          </div>

          <div className="w-[80%] h-[45px] bg-[#ffffff8b] rounded-[50px] flex justify-center items-center mt-5">
            <div className="w-[100%] mx-3 h-[40px] rounded-[50px] text-white flex items-center justify-center">
              <FaLockOpen />
              <input
                name="Password"
                value={Input.Password}
                onChange={(e) =>
                  setInput({ ...Input, [e.target.name]: e.target.value })
                }
                type="password"
                placeholder="Password"
                className="password w-[75%] h-[100%] px-5 rounded-[50px] outline-none text-white bg-transparent placeholder-white font-semibold"
              />
              <IoIosEye onClick={HideShowPassword} className="cursor-pointer" />
            </div>
          </div>
          <button
            type="submit"
            className="w-[50%] h-[20%] bg-[#FECBAF] rounded-[50px] flex items-center justify-center mt-5"
          >
            Register Now
          </button>
        </form>
        <div className="flex w-[100%] h-[20px] font-bold text-white justify-center">
          <span>Have an Accout :</span>
          <Link to="/login" className="mx-2">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
