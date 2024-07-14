import Button from "../components/Button";

import videoImage from "../../public/svg/videoImage.svg";
import hero3 from "../../public/svg/vector3.svg";
import guyImage from "../../public/svg/guyImage.svg";
import hero from "../../public/svg/vedioBg.svg";
import naira from "../../public/svg/naira.svg";
// import spread from "../../public/svg/money.svg";
import dollar from "../../public/svg/dollar.svg";
import cap from "../../public/svg/cap.svg";
// import man from "../../public/svg/callman.svg";
import yellow from "../../public/svg/shapeyellow.svg";
// import woman from "../../public/svg/ladycheeks.svg";
import police from "../../public/svg/police.svg";
import herolady from "../../public/svg/herolady.svg";
import bank from "../../public/svg/bank.svg";
import id from "../../public/svg/id.svg";
import medical from "../../public/svg/medical.svg";
import education from "../../public/svg/education.svg";
import and from "../../public/svg/and.svg";
import gaurantor from "../../public/svg/gaurantor.svg";
import blue1 from "../../public/svg/blue.svg";
import yellow1 from "../../public/svg/yellow.svg";
import red1 from "../../public/svg/red2.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const WorkerHomeScreen = () => {
  const [isLoggedin] = useState(false);
  const [userSearched] = useState(false);
  return (
    <div className="inter ">
      <img
        src="/svg/loginBg.svg"
        className="absolute w-[100vw] h-fit top-0 left-0 object-cover z-0"
      />
      <div
        className={`lg:h-[100vh] 
       relative z-10 flex flex-col pt-[5rem] lg:pt-0 w-[100vw] px-[7%]  justify-center ${
         isLoggedin && "lg:h-[60vh]"
       }`}
      >
        {isLoggedin ? (
          <div>
            <h1 className="text-[4rem] lg:text-[5rem] font-[600] leading-[4rem] lg:leading-[5.5rem]">
              Perform a Search
            </h1>
            <div className="mt-3 flex gap-10">
              <button className="px-16 py-4 text-xl rounded-full bg-blue-700 text-white">
                Background
              </button>
              <button className="px-16 py-4 text-xl rounded-full text-gray-400 border ">
                Professional
              </button>
            </div>

            <div className="flex gap-4 mt-16">
              <input
                placeholder="enter applicant name or reg no."
                className="w-[30rem] rounded-md text-lg bg-red-100 py-2 h-16 px-6"
              />
              <img src="/vector.svg" className="h-16" />
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-[4rem] lg:text-[5rem] font-[600] leading-[4rem] lg:leading-[5.5rem]">
              Disclosure and <br /> Barring Service
            </h1>
            <p className="text-xl mt-8">
              Request standard and enhanced personal record checks for <br />{" "}
              eligible positions for jobs in Nigeria.
            </p>
            <div className="mt-6 flex gap-4 lg:gap-8 flex-col lg:flex-row">
              <Link to="/work-experience">
                <button className="bg-blue-800 text-white px-8 py-3 rounded-full">
                  Background Check
                </button>
              </Link>
              <Link to="/dashboard">
                <button className="bg-red-500 text-white px-8 py-3 rounded-full">
                  Professional Check
                </button>
              </Link>
            </div>
          </div>
        )}

        <img
          src={naira}
          alt=""
          className="object-contain absolute top-[80vh] w-[12.5rem] h-[12.5rem] left-[25%]"
        />
        <img src={cap} alt="" className="absolute top-[15vh] right-[20%]" />
        <img src={dollar} alt="" className="absolute top-[40vh] right-[20%]" />
        {/* </div> */}
      </div>

      {/* <div className="z-10 relative w-[100vw] h-fit flex flex-col items-center pt-12 -center">
        <h1 className="text-[3rem]">
          About <span className="text-red-600">e-verify</span>
        </h1>

        <p className="text-xl text-center">
          We are leading provider of criminality checks with over 20,000
          registered clients/organisations, and what's <br /> more our team has
          been screening for over 26 years
        </p>

        <div className="flex gap-20 justify-center mt-12">
          <div className="w-5/12 max-w-[40rem] py-16 bg-red-50 border-l-4 border-red-500 p-6">
            <h1 className="text-red-600 text-6xl font-[600]">
              Disclosure and Barring Service
            </h1>
            <p className="mt-10 text-xl">
              Organisations can request standard and enhanced criminal record
              checks for eligible positions in England and Wales.
            </p>
            <button className="bg-blue-800 text-xl mt-16 p-3 px-4 rounded-full text-white">
              Register your organisation online now!
            </button>
          </div>
          <div className="w-5/12 max-w-[40rem] py-16 bg-red-50 border-l-4 border-blue-500 p-6">
            <h1 className="text-blue-600 text-6xl font-[600]">
              Professional Remarks
            </h1>
            <p className="mt-10 text-xl">
              Organisations can request standard and enhanced criminal record
              checks for eligible positions in England and Wales.
            </p>
            <button className="bg-red-500 text-xl mt-16 p-3 px-4 rounded-full text-white">
              Register your organisation online now!
            </button>
          </div>
        </div>
      </div> */}

      {userSearched ? (
        <div className="max-w-[90rem] mx-auto z-10 relative bottom-20">
          <p className="mt-16 text-xl font-[500]">Related searches</p>
          <div className="w-[100%] overflow-x-scroll mt-4 lg:overflow-hidden text-[13px]">
            <div className="flex flex-col gap-7 mt-4 text-[17px] w-fit">
              {[
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                ,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
              ].map((i) => (
                <div className="flex text-lg flex-row gap-4 " key={i}>
                  <input className="" type="checkbox" />
                  <Link
                    to="/companyinfo"
                    className="w-[12.5rem] lg:w-[17.5rem] text-start "
                  >
                    Jamse Johnson
                  </Link>
                  <h1 className="w-[12.5rem] lg:w-[17.5rem] text-start">
                    UI/UX Designer
                  </h1>
                  <h1 className="w-[12.5rem] lg:w-[17.5rem] text-start">
                    04:23:43
                  </h1>
                  <h1 className="w-[12.5rem] lg:w-[17.5rem] text-start">
                    09097327432
                  </h1>
                  <h1 className="w-[12.5rem] lg:w-[17.5rem] text-start">
                    verified
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="z-10 relative mt-20 lg:max-w-[80vw] px-[1rem] mx-auto h-fit flex flex-col items-center lg:mt-12 -center">
            <h1 className="text-[3rem] font-[600]">
              About <span className="text-red-600 italic">e-verify</span>
            </h1>

            <p className="text-md text-center mt-6">
              We are leading provider of criminality checks with over 20,000
              registered clients/organisations, and what's more our team has
              been screening for over 26 years
            </p>

            <div className="flex flex-col lg:flex-row gap-20 justify-center mt-12 w-[100%]">
              <div className="lg:w-6/12  py-16 bg-red-50 border-l-4 border-red-500 p-6">
                <h1 className="text-red-600 text-4xl lg:text-6xl font-[600] h-[8rem]">
                  Disclosure and Barring Service
                </h1>
                <p className="mt-0 lg:mt-10 text-lg lg:text-xl h-[7rem]">
                  Organisations can request standard and enhanced criminal
                  record checks for eligible positions in England and Wales.
                </p>
                <button className="bg-blue-800 text-md lg:text-xl mt-8 lg:mt-16 p-3 px-4 rounded-full text-white">
                  Register your organisation online now!
                </button>
              </div>
              <div className="lg:w-6/12  py-16 bg-red-50 border-l-4 border-blue-500 p-6">
                <h1 className="text-blue-600 text-4xl lg:text-6xl font-[600] h-[8rem]">
                  Professional Remarks
                </h1>
                <p className="mt-0 lg:mt-10 text-lg lg:text-xl h-[7rem]">
                  Organisations can request standard and enhanced criminal
                  record checks for eligible positions in England and Wales.
                </p>
                <button className="bg-red-500 text-md lg:text-xl mt-8 lg:mt-16 p-3 px-4 rounded-full text-white">
                  Register your organisation online now!
                </button>
              </div>
            </div>
          </div>

          <div className=" lg:h-[100vh] relative mt-20 lg:mt-0relative overflow-hidden px-[1rem] flex items-center justify-end lg:pr-[10vw]">
            <img
              src="/svg/section.svg"
              className="w-[100vw] hidden lg:flex top-0 left-0 absolute"
            />
            <div className="relative z-10 lg:w-5/12 flex flex-col justify-end items-end">
              <h1 className="text-4xl lg:text-6xl font-[600] leading-[3rem] lg:leading-[4rem] text-end">
                Looking for the <br /> Right{" "}
                <span className="text-red-500">Employee</span> or <br /> want to
                post a <span className="text-red-500">Job</span>
              </h1>

              <p className="text-end text-md lg:text-xl mt-12 lg:mt-4">
                {" "}
                Organisations can request standard <br /> and enhanced criminal
                record checks <br /> for eligible positions in England and
                Wales.
              </p>
              <button className="border w-fit mt-6 text-white px-8 py-3 bg-red-500 rounded-full">
                Search for verified personel
              </button>
            </div>
          </div>

          <div className="mb-5 mt-16 lg:mt-12 lg:h-[50rem] px-[1rem] flex items-center relative">
            <div className="lg:w-[50%] lg:ml-32">
              <h1 className="text-4xl lg:text-6xl leading-[3rem] lg:leading-[4rem] font-bold mb-3">
                Know everything about{" "}
                <span className="text-[#fb4f4f]">Applicants</span>{" "}
              </h1>
              <div className="flex mt-8 gap-3 mb-3 ">
                <div>
                  <img src={police} alt="" />
                </div>
                <div>
                  <p>Police security check</p>
                </div>
              </div>
              <div className="flex gap-3 mb-3 ">
                <div>
                  <img src={bank} alt="" />
                </div>
                <div>
                  <p>Bank details check</p>
                </div>
              </div>
              <div className="flex gap-3 mb-3 ">
                <div>
                  <img src={id} alt="" />
                </div>
                <div>
                  <p>ID check</p>
                </div>
              </div>
              <div className="flex gap-3 mb-3">
                <div>
                  <img src={education} alt="" />
                </div>
                <div>
                  <p>Education credentials</p>
                </div>
              </div>
              <div className="flex gap-3 mb-3">
                <div>
                  <img src={medical} alt="" />
                </div>
                <div>
                  <p>Medical</p>
                </div>
              </div>
              <div className="flex gap-3 mb-3">
                <div>
                  <img src={gaurantor} alt="" />
                </div>
                <div>
                  <p>garantors and referees</p>
                </div>
              </div>
              <div className="flex gap-3 mb-3">
                <div>
                  <img src={and} alt="" />
                </div>
                <div>
                  <p>and many more</p>
                </div>
              </div>
              <div className="border-b-4 border-[#FB4F4F] ml-[3rem] w-[35%]"></div>
            </div>
            <div className="w-[50%] absolute -right-40">
              <img src={herolady} alt="" className="w-[50rem]" />
            </div>

            <div className="absolute bottom-0 right-0 rotate-90">
              <img src={yellow} alt="" className="rotate-180 " />
            </div>
          </div>

          <div className="w-[100%] h-fit mt-20 lg:mt-0 overflow-hidden ">
            <img
              src={videoImage}
              alt=""
              className="w-[100%] h-auto max-h-[40rem] object-cover"
            />
            <div className="flex items-center justify-between gap-5 px-[1rem]  mt-16 lg:mt-8">
              <img src={hero3} alt="" className="rotate-270 hidden lg:flex" />
              <div
                className=" w-fit
      flex flex-col items-center relative justify-center"
              >
                <h1 className="text-3xl lg:text-5xl font-bold ">
                  Job Posting is possible
                </h1>
                <Button className=" p-2 px-4 w-fit rounded-2xl bg-[#FB4F4F] text-white whitespace-nowrap mt-5">
                  Search for verified personel
                </Button>
                <div className="z-10 absolute right-0 bottom-0">
                  <img
                    src={yellow1}
                    alt=""
                    className="object-contain absolute top-[-2rem] w-[12.5rem] h-[1rem] right-[5%]  "
                  />
                  <img
                    src={blue1}
                    alt=""
                    className="object-contain absolute top-[-6rem] w-[1.5rem] h-[12.5rem] right-[15%]  "
                  />
                  <img
                    src={red1}
                    alt=""
                    className="object-contain absolute top-[-9rem] w-[2rem] h-[12.5rem] right-[10%]  "
                  />
                </div>
              </div>
              <div className="hidden lg:flex" />
              {/* <div  className="hidden lg:flex"/> */}
            </div>
          </div>

          <div className="flex items-end justify-end overflow-hidden mt-12 lg:mt-12 lg:h-[45rem] relative w-[100%]">
            <div className="absolute w-[100%] left-0 bg-white text-[14px]  z-0">
              <img src={guyImage} alt="" className="w-[100%]" />
            </div>
            <div className="border bg-black/60  lg:bg-white/30 border-slate-500 text-md  py-6 px-12 z-10 leading-[1rem]">
              <h1 className="text-end text-white lg:text-black text-2xl mb-2 font-bold">
                Know more about employess <br className="hidden lg:flex" /> more
                than the papers
              </h1>
              <div className="text-end mt-5">
                <Button className=" px-8 py-3 rounded-xl bg-[#FB4F4F] text-white whitespace-nowrap">
                  Register Now
                </Button>{" "}
              </div>
            </div>
          </div>
          <div className="mt-[5rem] flex items-center justify-center relative w-[100%] py-[2rem] lg:h-[40rem] overflow-hidden">
            <div className="absolute bg-white left-0 top-0 w-[100%] text-[14px] z-0">
              <img src={hero} alt="" className="w-[100%] h-auto" />
            </div>
            <div className=" text-center justify-center border-slate-500 rounded-xl text-md z-10 text-white leading-[2rem]">
              <div className="text-center  ">
                <h1 className="text-4xl font-[600] mb-5">
                  Why Choose <i className="text-[#FB4F4F]"> E- verify </i>
                </h1>
                <p className="text-center leading-md text-md lg:text-xl">
                  Organisations can request standard and enhanced criminal
                  record checks <br className="hidden lg:flex" /> for eligible
                  positions in England and Wales.
                </p>
                <Button className=" px-20 py-3 rounded-xl bg-[#39399D] text-white whitespace-nowrap mt-5">
                  Perform Background Check
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkerHomeScreen;
