import { useState } from "react";
import RegisterationCard from "../components/RegisterationCard";
const WorkerDetails = () => {
  const [tab, setTab] = useState("address");
  return (
    <div className="w-[100vw] h-[100vh] inter lg:pl-[7.5%] flex flex-row items-center inter justify-center max-w-[100vw] overflow-x-hidden">
      <RegisterationCard>
        {tab == "address" ? (
          <div className="lg:w-6/12 w-[100%] px-[1rem] lg:px-12 z-10 flex flex-col gap-6 justify-center items-start h-[100vh]">
            <h1 className="text-2xl">Address</h1>
            {/* <div className='flex flex-col w-[100%]'>
                                <span className="text-[12px] lg:text-[15px]">Address</span>
                                <input className='border bg-slate-100 mt-2 lg:mt-3 border-slate-500 rounded-xl text-md px-6 lg:max-w-[30rem] py-2' placeholder='' />
                            </div> */}

            <div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                Address
              </span>
              <input
                className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-2"
                placeholder=""
              />
            </div>

            <div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                LGA
              </span>
              <input
                className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-2"
                placeholder=""
              />
            </div>
            <div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                State
              </span>
              <input
                className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-2"
                placeholder=""
              />
            </div>
            <div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                Country
              </span>
              <input
                className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-2"
                placeholder=""
              />
            </div>

            <div className="flex flex-col gap-4 lg:flex-row mt-16 max-w-[30rem] lg:items-center justify-between w-[100%]">
              <button className="border border-red-400 py-3 px-6 text-[15px] text-red-500 rounded-md">
                Add new address
              </button>
              <button
                className=" bg-red-400 text-white py-3 px-20 text-[15px] rounded-md"
                onClick={() => setTab("admin")}
              >
                Next
              </button>
            </div>
          </div>
        ) : tab == "admin" ? (
          <div className="lg:w-6/12 px-[1rem] w-[100%] lg:px-12 z-10 flex flex-col gap-6 justify-center items-start h-[100vh]">
            <h1 className="text-2xl">Company Admin User</h1>
            <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                  Company User
                </span>
                <input
                  className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-2"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                  User phone no
                </span>
                <input
                  className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-2"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                  User email
                </span>
                <input
                  className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-2"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                  Gender
                </span>
                <input
                  className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-2"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                  User Position
                </span>
                <input
                  className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-2"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                  User Address
                </span>
                <input
                  className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-2"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                  User Phone no
                </span>
                <input
                  className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-2"
                  placeholder=""
                />
              </div>

            <div className="flex flex-col gap-4 lg:flex-row mt-16 max-w-[30rem] lg:items-center justify-between w-[100%]">
              <button className="border border-red-400 py-3 px-6 text-[15px] text-red-500 rounded-md">
                Add new admin
              </button>
              <button
                className=" bg-red-400 text-white py-3 px-20 text-[15px] rounded-md"
                onClick={() => setTab("education")}
              >
                Next
              </button>
            </div>
          </div>
        ) : tab === "education" && (
          <div className="lg:w-6/12 px-[1rem] w-[100%] lg:px-12 z-10 flex flex-col gap-6 justify-center items-start h-[100vh]">
            <h1 className="text-2xl">Education</h1>
            <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                  School
                </span>
                <input
                  className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-2"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                  State
                </span>
                <input
                  className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-2"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                  Degree
                </span>
                <input
                  className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-2"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                  Course
                </span>
                <input
                  className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-2"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                  Gender
                </span>
                <input
                  className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-2"
                  placeholder=""
                />
              </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 max-w-[30rem]">
            <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                  Start Year
                </span>
                <input
                  className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-2"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col relative w-[100%]">
                <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                  End Year
                </span>
                <input
                  className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-2"
                  placeholder=""
                />
              </div>
            </div>

            <div className="flex items-center text-gray-500 ttext-[13px] gap-3 mt-3">
              <input type="checkbox" className="" placeholder="" />
              <p>I am still schooling here</p>
            </div>

            <div className="flex mt-16 max-w-[30rem] items-center justify-between w-[100%]">
              <button className="border border-red-400 py-2 px-6 text-[15px] text-red-500 rounded-md">
                Add new Education
              </button>
              <button className=" bg-red-400 text-white py-2 px-20 text-[15px] rounded-md">
                Next
              </button>
            </div>
          </div>
        )}
      </RegisterationCard>
    </div>
  );
};

export default WorkerDetails;
