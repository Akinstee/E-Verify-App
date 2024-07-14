import { useState } from "react";


const steps = [
    "Company name",
    "Address",
    "License",
    "Verified Worker",
    "Company review"
  ];
  
  const Layout = ({
    children,
    className,
  }: {
    children: any;
    className: string;
  }) => {
    return (
      <div className="flex flex-col lg:flex-row w-[100%] h-fit justify-between gap-12">
        <div className="border border-slate-700 rounded-xl w-[100%] lg:w-4/12 h-[25rem] min-h-[100%] overflow-hidden flex flex-col justify-evenly items-center">
          <h1 className="font-[600]">Identification Verification Photo</h1>
          <img
            src="https://guardian.ng/wp-content/uploads/2023/05/bigstock-1619644371.jpg"
            className="w-[70%] h-[20rem] rounded-full"
            alt="Identification Verification"
          />
        </div>
  
        <div
          className={`w-[100%] lg:w-8/12 h-fit  border border-slate-700 rounded-xl ${className}`}
        >
          {children}
        </div>
      </div>
    );
  };
  const WorkerSearch = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState(new Set());
  
    const handleNext = () => {
      setCompletedSteps((prev) => new Set(prev).add(currentStep));
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    };
    // const handlePrev = () => {
    //     setCurrentStep(prev => Math.max(prev - 1, 0));
    // };
  
    const renderForm = () => {
      switch (currentStep) {
        case 0:
          return (
            <div className="flex flex-col gap-4 justify-end items-end">
              <Layout className="p-[1rem] px-[1rem] lg:px-[2rem] grid grid-cols-1 lg:grid-cols-2 gap-[1rem] lg:gap-y-[2rem] lg:pb-[3rem] gap-x-[2rem] pt-[2rem]">
                <div className="flex flex-col relative w-[100%] ">
                  <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                    Company Name
                  </span>
                  <input
                    className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col relative w-[100%] ">
                  <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                    Company User
                  </span>
                  <input
                    className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col relative w-[100%] ">
                  <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                    Company Email
                  </span>
                  <input
                    className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col relative w-[100%] ">
                  <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                    User Phone No
                  </span>
                  <input
                    className="border  outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col relative w-[100%] ">
                  <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                    Company Contact
                  </span>
                  <input
                    className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col relative w-[100%] ">
                  <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                    User Email
                  </span>
                  <input
                    className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col relative w-[100%] ">
                  <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                    Company Size
                  </span>
                  <input
                    className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col relative w-[100%] ">
                  <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                    Gender
                  </span>
                  <input
                    className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                    placeholder=""
                  />
                </div>
              </Layout>
              <button
                type="button"
                className="border bg-red-400 px-6 py-2 rounded-md text-white"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          );
        case 1:
          return (
            <div className="flex flex-col gap-4 justify-end items-end">
              <Layout className="p-[1rem] lg:p-[2rem] py-[4rem] flex flex-col gap-[1rem]">
                <div className="flex flex-col lg:flex-row gap-[1rem]">
                  <div className="border-2 rounded-xl border-green-300 p-4">
                    <h1 className="text-[14px] text-green-600">Address 1</h1>
                    <p className="mt-6">
                      15, Iyala street Akindedun, off shoprite, Alausa, Ikeja
                      Lagos Statee Nigeria
                    </p>
                  </div>
                  <div className="border-2 rounded-xl border-red-300 p-4">
                    <h1 className="text-[14px] text-red-600">Address 1</h1>
                    <p className="mt-6">
                      15, Iyala street Akindedun, off shoprite, Alausa, Ikeja
                      Lagos Statee Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex mt-[2rem] gap-[1rem]">
                  <div className="w-[50%] flex items-center gap-6 font-[500]">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/8373/8373266.png"
                      className="w-7"
                    />
                    <p>35km to company location</p>
                  </div>
                  <div className="w-[50%] flex items-center gap-6 font-[500]">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/8373/8373266.png"
                      className="w-7"
                    />
                    <p>35km to company location</p>
                  </div>
                </div>
              </Layout>
              <button
                type="button"
                className="border bg-red-400 px-6 py-2 rounded-md text-white"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          );
        case 2:
          return (
            <div className="flex flex-col gap-4 justify-end items-end">
              <Layout className="p-[1rem] lg:p-[2rem] border-red-600 grid grid-cols-1 lg:grid-cols-2 gap-[2rem] gap-y-[1rem] lg:gap-y-[2rem]">
                <div className="flex flex-col relative w-[100%] ">
                  <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                    School
                  </span>
                  <input
                    className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                    placeholder=""
                  />
                </div>

                <div />

                <div className="flex flex-col relative w-[100%] ">
                  <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                    Locations
                  </span>
                  <input
                    className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                    placeholder=""
                  />
                </div>

                <div />

                <div className="flex flex-col relative w-[100%] ">
                  <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                    Year Started
                  </span>
                  <input
                    className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                    placeholder=""
                  />
                </div>

                <div />                                             
                {/* <div className="flex flex-col relative w-[100%] ">
                  <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                    State
                  </span>
                  <input
                    className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col relative w-[100%] ">
                  <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                    Degree
                  </span>
                  <input
                    className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col relative w-[100%] ">
                  <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                    Nation
                  </span>
                  <input
                    className="border  outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col relative w-[100%] ">
                  <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                    Course
                  </span>
                  <input
                    className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                    placeholder=""
                  />
                </div>
                <div></div>
                <div className="flex gap-3">
                  <div className="flex gap-3 items-center h-fit">
                    <span className=" bg-white left-6 text-[14px] px-2">
                      Start Year
                    </span>
                    <input
                      className="border bg-white w-28 border-slate-500 rounded-xl text-md px-2 h-10 py-2"
                      placeholder=""
                    />
                  </div>
  
                  <div className="flex gap-3 items-center h-fit">
                    <span className=" bg-white left-6 text-[14px] px-2">
                      Finish Year
                    </span>
                    <input
                      className="border bg-white w-28 border-slate-500 rounded-xl text-md px-2 h-10 py-2"
                      placeholder=""
                    />
                  </div>
                </div>
  
                <div className="flex h-fit items-center gap-6">
                  <input type="checkbox" />
                  <p>I am still schooling</p>
                </div> */}
              </Layout>
              <button
                type="button"
                className="border bg-red-400 px-6 py-2 rounded-md text-white"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          );
        case 3:
          return (
            <div className="flex flex-col gap-4 justify-end items-end">
              <Layout className="-[1rem] py-[2rem] overflow-x-scroll  h-fit border-red-600 gap-[2rem] gap-y-[1rem] lg:gap-y-[3rem]">
              <div className="w-fit overflow-x-scroll text-[13px]">
        <div className="flex flex-row gap-4 text-[12px]">
          <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Name</h1>
          <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Admin</h1>
          <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Time</h1>
          <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Date</h1>
          <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Status</h1>
        </div>

        

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Mary Jane</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">04:23:43</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">03-may-2024</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Accepted</h1>
            </div>
            <div className="flex flex-row gap-4">
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Mary Jane</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">04:23:43</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">03-may-2024</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Accepted</h1>
            </div>
            <div className="flex flex-row gap-4">
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Mary Jane</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">04:23:43</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">03-may-2024</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Accepted</h1>
            </div>
            <div className="flex flex-row gap-4">
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Mary Jane</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">04:23:43</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">03-may-2024</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Accepted</h1>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Mary Jane</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">04:23:43</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">03-may-2024</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Accepted</h1>
            </div>
            <div className="flex flex-row gap-4">
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Mary Jane</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">04:23:43</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">03-may-2024</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Accepted</h1>
            </div>
            <div className="flex flex-row gap-4">
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Mary Jane</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">04:23:43</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">03-may-2024</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Accepted</h1>
            </div>
            <div className="flex flex-row gap-4">
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Mary Jane</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">04:23:43</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">03-may-2024</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Accepted</h1>
            </div>
          </div>
        </div>

        
      </div>
              </Layout>
              <button
                type="button"
                className="border bg-red-400 px-6 py-2 rounded-md text-white"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          );
        case 4:
          return (
            <div className="flex flex-col gap-4 justify-end items-end">
              <Layout className="p-[1rem] lg:p-[2rem] h-fit flex flex-col gap-[2rem] gap-y-[1rem] lg:gap-y-[2rem]">
                <div>
                  <div className="flex items-center gap-6">
                  <img src="https://www.shutterstock.com/image-photo/photo-sweet-adorable-young-lady-600nw-2045259326.jpg"
                  className="w-10 h-10 rounded-full"/>

                  <h1 className="font-[600]">Tope Akindeji</h1>

                  <p className="text-gray-400 text-[13px]">1 week ago</p>
                  </div>

                  <div className="border relative border-gray-500 mt-3 rounded-md px-4 py-2">
                    <h1 className="text-gray-600 text-[14px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                    </h1>
                     <p className="absolute -bottom-3 bg-white shadow-sm shadow-gray-500 px-1 rounded-full right-8">
                    😂👍🏾😅❤️⚙️
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-6">
                  <img src="https://www.shutterstock.com/image-photo/photo-sweet-adorable-young-lady-600nw-2045259326.jpg"
                  className="w-10 h-10 rounded-full"/>

                  <h1 className="font-[600]">Tope Akindeji</h1>

                  <p className="text-gray-400 text-[13px]">1 week ago</p>
                  </div>

                  <div className="border relative border-gray-500 max-w-[30rem] mt-3 rounded-md px-4 py-2">
                    <h1 className="text-gray-600 text-[14px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                    </h1>
                     <p className="absolute -bottom-3 bg-white shadow-sm shadow-gray-500 px-1 rounded-full right-8">
                    😂👍🏾😅❤️⚙️
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-6">
                  <img src="https://www.shutterstock.com/image-photo/photo-sweet-adorable-young-lady-600nw-2045259326.jpg"
                  className="w-10 h-10 rounded-full"/>

                  <h1 className="font-[600]">Tope Akindeji</h1>

                  <p className="text-gray-400 text-[13px]">1 week ago</p>
                  </div>

                  <div className="border relative border-gray-500 mt-3 rounded-md px-4 py-2">
                    <h1 className="text-gray-600 text-[14px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                    </h1>
                     <p className="absolute -bottom-3 bg-white shadow-sm shadow-gray-500 px-1 rounded-full right-8">
                    😂👍🏾😅❤️⚙️
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-6">
                  <img src="https://www.shutterstock.com/image-photo/photo-sweet-adorable-young-lady-600nw-2045259326.jpg"
                  className="w-10 h-10 rounded-full"/>

                  <h1 className="font-[600]">Tope Akindeji</h1>

                  <p className="text-gray-400 text-[13px]">1 week ago</p>
                  </div>

                  <div className="border relative border-gray-500 mt-3 rounded-md px-4 py-2">
                    <h1 className="text-gray-600 text-[14px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                    </h1>

                    <p className="absolute -bottom-3 bg-white shadow-sm shadow-gray-500 px-1 rounded-full right-8">
                    😂👍🏾😅❤️⚙️
                    </p>
                  </div>
                </div>
              </Layout>
              <button
                type="button"
                className="border bg-red-400 px-6 py-2 rounded-md text-white"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          );
    default:
          return (
            <div>
              <h2>All steps completed!</h2>
              <button
                type="button"
                onClick={() => (setCurrentStep(0), setCompletedSteps(new Set()))}
              >
                Restart
              </button>
            </div>
          );
      }
    };
  
    return (
      <div className="max-w-[90rem] px-[1rem] inter py-4 lg:py-20 mx-auto inter">
        <div className="flex flex-col justify-center mt-10 items-center">
          <h1 className="text-4xl font-[500]">James Johnson</h1>
          <p className="text-xl text-gray-500">48648-9743by34-43r4n4</p>
        </div>
        <div className=" h-fit mt-20 flex flex-row gap-4 flex-wrap">
          {steps.map((step, index) => (
            <span
              key={index}
              className={`py-2 px-10 rounded-xl ${
                completedSteps.has(index) || currentStep == index
                  ? "bg-blue-700 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {step}
            </span>
          ))}
        </div>
        <div className="mt-20">{renderForm()}</div>
      </div>
    );
  };
  
  export default WorkerSearch;
  