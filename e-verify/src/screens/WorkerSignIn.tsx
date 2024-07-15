import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterationCard from "../components/RegisterationCard";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { RiGoogleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const WorkerSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await fetch('http://localhost:8000/api/worker/signin', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('User data:', data);

      // Redirect to the worker detail page after successful sign-in
      navigate('/worker-detail', { state: { worker: data } });
    } catch (error) {
      console.error('Error during sign-in:', error);
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] px-[1rem] lg:px-0 lg:pl-[7.5%] flex flex-row items-center inter justify-center max-w-[100vw] overflow-x-hidden">
      <RegisterationCard>
        <div className="w-[100%] lg:w-6/12 lg:px-12 z-10 flex flex-col justify-center items-start h-[100vh]">
          <form onSubmit={handleSubmit} className="mt-16 w-[100%] flex flex-col gap-5">
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
                Password
              </span>
              <input
                type="password"
                className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="max-w-[30rem] text-center border bg-red-400 text-white py-2 mt-6 rounded-xl"
            >
              Sign In
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

export default WorkerSignIn;
