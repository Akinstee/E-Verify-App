import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RegisterationCard from "../components/RegisterationCard";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { RiGoogleLine } from "react-icons/ri";

const WorkerSignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    career: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name: formData.name,
        email: formData.email,
        career: formData.career,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
      });

      alert("Registration successful");
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      alert("Registration failed");
      console.error(error);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh]    lg:pl-[7.5%] flex flex-row items-center nunito justify-center max-w-[100vw] overflow-x-hidden">
      <RegisterationCard>
        <form
          onSubmit={handleSubmit}
          className="w-[100%] lg:w-6/12 px-[1rem] lg:px-12 z-10 flex flex-col justify-center items-start h-[100vh]"
        >
          <div className="flex items-center gap-12">
            <img
              src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
              className="w-12"
              alt="Company Logo"
            />
            <h1 className="text-xl">Profile Picture</h1>
          </div>

          <div className="mt-16 w-[100%] flex flex-col gap-5">
          <div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                Name
              </span>
              <input
                className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                placeholder=""
                name="name"
              value={formData.name}
              onChange={handleChange}
              />
            </div>
            {/* <input
              className="border-b border-slate-500 text-md px-6 max-w-[27.5rem] py-2"
              placeholder="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            /> */}

<div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                Email
              </span>
              <input
                className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                placeholder=""
                name="email"
              value={formData.email}
              onChange={handleChange}
              />
            </div>
            {/* <input
              className="border-b border-slate-500 text-md px-6 max-w-[27.5rem] py-2"
              placeholder="Worker email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            /> */}

<div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                Career
              </span>
              <input
                className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                placeholder=""
                name="career"
              value={formData.career}
              onChange={handleChange}
              />
            </div>
            {/* <input
              className="border-b border-slate-500 text-md px-6 max-w-[27.5rem] py-2"
              placeholder="Career"
              name="career"
              value={formData.career}
              onChange={handleChange}
            /> */}

<div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                Password
              </span>
              <input
                className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                placeholder=""
                type="password"
                value={formData.password}
              onChange={handleChange}
              />
            </div>
            {/* <input
              className="border-b border-slate-500 text-md px-6 max-w-[27.5rem] py-2"
              placeholder="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            /> */}

<div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                Re-type Password
              </span>
              <input
                className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                placeholder=""
                type="password"
                value={formData.confirmPassword}
              onChange={handleChange}
              />
            </div>
            {/* <input
              className="border-b border-slate-500 text-md px-6 max-w-[27.5rem] py-2"
              placeholder="Re-type password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            /> */}
            <button
              type="submit"
              className="max-w-[27.5rem] border bg-red-400 text-white py-2 mt-6 rounded-md"
            >
              Sign up
            </button>
          </div>

          <div className="mt-16 max-w-[27.5rem] w-[100%] flex flex-col justify-center items-center">
            <p className="mb-2">or</p>

            <div className="flex gap-6 items-center">
              <TiSocialFacebook className="border bg-red-400 text-white text-4xl rounded-full p-1" />
              <FaTwitter className="border bg-red-400 text-white text-4xl rounded-full p-2" />
              <RiGoogleLine className="border bg-red-400 text-white text-4xl rounded-full p-1" />
            </div>

            <h1 className="mt-6">
              Already have an account?{" "}
              <a href="/register/worker/in" className="text-blue-400">
                Sign in
              </a>
            </h1>
          </div>
        </form>
      </RegisterationCard>
    </div>
  );
};

export default WorkerSignUp;
