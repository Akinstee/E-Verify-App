import React, { useState } from 'react';
import { FaTwitter } from "react-icons/fa";
import { RiGoogleLine } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import RegisterationCard from "../components/RegisterationCard"; // Assuming this component exists

const WorkerSignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [career, setCareer] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [logo, setLogo] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setLogo(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('career', career);
    formData.append('password', password);
    formData.append('password_confirmation', passwordConfirmation);
    if (logo) {
      formData.append('logo', logo);
    }

    try {
      const response = await axios.post('http://localhost:8000/api/worker/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Redirect to the homepage after successful signup
      navigate('/Worker-detail');
    } catch (error) {
      console.error('Error during signup:', error);
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] px-[1rem] lg:px-0 lg:pl-[7.5%] flex flex-row items-center inter justify-center max-w-[100vw] overflow-x-hidden">
      <RegisterationCard>
        <div className="w-[100%] lg:w-6/12 lg:px-12 z-10 flex flex-col justify-center items-start h-[100vh]">
          <div className="flex items-center gap-12">
            <img
              src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
              className="w-12"
              alt="Worker Logo"
            />
            <h1 className="text-xl">Worker Logo</h1>
          </div>
          <form onSubmit={handleSubmit} className="mt-16 w-[100%] flex flex-col gap-5">
            <div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                Worker name
              </span>
              <input
                className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                Worker Email
              </span>
              <input
                className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                Career
              </span>
              <input
                className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                value={career}
                onChange={(e) => setCareer(e.target.value)}
              />
            </div>
            <div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                Password
              </span>
              <input
                type="password"
                className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                Re-type Password
              </span>
              <input
                type="password"
                className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>
            <div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                Worker Logo
              </span>
              <input
                type="file"
                className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                onChange={handleFileChange}
              />
            </div>
            <button
              type="submit"
              className="max-w-[30rem] text-center border bg-red-400 text-white py-2 mt-6 rounded-xl"
            >
              Sign up
            </button>
          </form>
          <div className="mt-16 max-w-[27.5rem] w-[100%] flex flex-col justify-center items-center">
            <p className="mb-2">or</p>
            <div className="flex gap-6 items-center">
              <TiSocialFacebook className="border bg-red-400 text-white text-4xl rounded-full p-1" />
              <FaTwitter className="border bg-red-400 text-white text-4xl rounded-full p-2" />
              <RiGoogleLine className="border bg-red-400 text-white text-4xl rounded-full p-1" />
            </div>
            <h1 className="mt-6">
              Already have an account?{" "}
              <Link to="/worker-detail" className="text-blue-400">Sign in</Link>
            </h1>
          </div>
        </div>
      </RegisterationCard>
    </div>
  );
};

export default WorkerSignUp;