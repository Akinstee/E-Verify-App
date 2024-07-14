// import React from "react";

const Layout = ({
  children,
  className,
}: {
  children: any;
  className: string;
}) => {
  return (
    <div className="flex w-[100%] flex-col lg:flex-row gap-8 justify-between">
      <div className="border border-gray-400 rounded-xl lg:w-3/12 h-[25rem] overflow-hidden flex flex-col justify-evenly items-center">
        <h1 className="font-[600]">Identification Verification Photo</h1>
        <img
          src="https://guardian.ng/wp-content/uploads/2023/05/bigstock-1619644371.jpg"
          className="w-[70%] h-[20rem] rounded-full"
          alt="Identification Verification"
        />
      </div>

      <div
        className={`lg:w-8/12 h-fit border border-slate-700 rounded-xl ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

const WorkerInfo = () => {
  return (
    <div className="max-w-[90rem] px-[1rem] inter mt-20 inter py-0 pb-16 mx-auto">
      <Layout className="p-[1rem] lg:p-[2rem] grid grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div className="flex flex-col relative w-[100%] ">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            Firstname
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>

        <div className="flex flex-col relative w-[100%] ">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            FirLastname
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>

        <div className="flex flex-col relative w-[100%] ">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            Email
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>

        <div className="flex flex-col relative w-[100%] ">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            Phone no
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>
        <div className="flex flex-col relative w-[100%] ">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            Age
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>
        <div className="flex flex-col relative w-[100%] ">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            Race
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>

        <div className="flex flex-col relative w-[100%] ">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            Gender
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>

        <div className="flex flex-col relative w-[100%] ">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            Disability
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>
      </Layout>

      <div className="flex  flex-col lg:flex-row gap-[1rem] mt-20">
        <div className="border-2 rounded-xl border-green-300 p-4">
          <h1 className="text-[14px] text-green-600">Address 1</h1>
          <p className="mt-4 lg:mt-6">
            15, Iyala street Akindedun, off shoprite, Alausa, Ikeja Lagos Statee
            Nigeria
          </p>
        </div>
        <div className="border-2 rounded-xl border-red-300 p-4">
          <h1 className="text-[14px] text-red-600">Address 1</h1>
          <p className="mt-4 lg:mt-6">
            15, Iyala street Akindedun, off shoprite, Alausa, Ikeja Lagos Statee
            Nigeria
          </p>
        </div>
      </div>

      <div className="max-w-[60rem] border border-black rounded-md mt-20 h-[15rem] overflow-hidden relative">
        <div className="absolute bottom-0 w-[100%] px-6 py-1 h-[2rem] bg-gray-400">
          <p className="text-white text-[14px]">Locate Me</p>
        </div>
        <img
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
          className="w-full h-[100%]"
        />
      </div>

      <div className="mt-20">
        <h1>Uploaded docs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          <div className="border border-gray-400  overflow-hidden  flex items-center rounded-md gap-3 bg-gray-200">
            <h1 className="bg-blue-200 px-4 shadow-md py-2">my cv</h1>
            <p className="text-gray-500">uploaded from device</p>
          </div>
          <div className="border border-gray-400  overflow-hidden  flex items-center rounded-md gap-3 bg-gray-200">
            <h1 className="bg-blue-200 px-4 shadow-md py-2">doc 1</h1>
            <p className="text-gray-500">uploaded from device</p>
          </div>
          <div className="border border-gray-400  overflow-hidden  flex items-center rounded-md gap-3 bg-gray-200">
            <h1 className="bg-blue-200 px-4 shadow-md py-2">doc 2</h1>
            <p className="text-gray-500">uploaded from device</p>
          </div>
          <div className="border border-gray-400  overflow-hidden  flex items-center rounded-md gap-3 bg-gray-200">
            <h1 className="bg-blue-200 px-4 shadow-md py-2">my cv</h1>
            <p className="text-gray-500">uploaded from device</p>
          </div>
          <div className="border border-gray-400  overflow-hidden  flex items-center rounded-md gap-3 bg-gray-200">
            <h1 className="bg-blue-200 px-4 shadow-md py-2">doc 1</h1>
            <p className="text-gray-500">uploaded from device</p>
          </div>
          <div className="border border-gray-400  overflow-hidden  flex items-center rounded-md gap-3 bg-gray-200">
            <h1 className="bg-blue-200 px-4 shadow-md py-2">doc2</h1>
            <p className="text-gray-500">uploaded from device</p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center flex-col gap-4">
          <button className="px-10 py-2 font-bold rounded-md bg-red-500 text-white">
            Upload Doc
          </button>
          <p className="text-gray-400 text-[13px]">
            Document can be in jpeg, doc, docx, pdf, png
          </p>
        </div>
      </div>

      <div className="mt-20 lg:mt-10">
        <h1 className="text-xl">Education</h1>
        <div className="mt-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center items-start ">
          <div className="flex flex-col relative w-[100%] ">
            <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
              School
            </span>
            <input
              className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
              placeholder=""
            />
          </div>

          <div className="flex flex-col relative w-[100%] ">
            <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
              State
            </span>
            <input
              className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
              placeholder=""
            />
          </div>
          <div className="flex flex-col relative w-[100%] ">
            <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
              Degree
            </span>
            <input
              className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
              placeholder=""
            />
          </div>
          <div className="flex flex-col relative w-[100%] ">
            <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
              Course
            </span>
            <input
              className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
              placeholder=""
            />
          </div>
          <div className="flex flex-col relative w-[100%] ">
            <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
              Gender
            </span>
            <input
              className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
              placeholder=""
            />
          </div>

          <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row max-w-[27.5rem]">
            <div className="flex flex-col relative lg:w-[50%]">
              <span className=" bg-white left-6 text-[14px] px-2">
                Start Year
              </span>
              <input
                className="border bg-white mt-3 border-slate-500 rounded-xl text-md px-6  py-2"
                placeholder=""
              />
            </div>

            <div className="flex flex-col relative lg:w-[50%]">
              <span className=" bg-white left-6 text-[14px] px-2">
                Finish Year
              </span>
              <input
                className="border bg-white mt-3 border-slate-500 rounded-xl text-md px-6  py-2"
                placeholder=""
              />
            </div>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <input type="checkbox" className="" placeholder="" />
            <p>I am still schooling here</p>
          </div>

          <div className="flex mt-2 items-center justify-between w-[100%]">
            <button className="border border-red-400 py-2 px-6 text-[15px] text-red-500 rounded-xl">
              Add new Education
            </button>
            {/* <button className=' bg-red-400 text-white py-2 px-20 text-[15px] rounded-xl'>Next</button> */}
          </div>
        </div>
      </div>

      <div className="mt-20 lg:mt-10 p-0 lg:p-[2rem] flex flex-col lg:grid lg:grid-cols-2 gap-[2rem]">
        <h1 className="col-span-2 ">Work Experience</h1>
        <div className="flex flex-col relative w-[100%] ">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            Company
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>
        <div className="flex flex-col relative w-[100%] ">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            Position
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-3">
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
        <div className="flex flex-col relative w-[100%] ">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            Country
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>

        <div className="flex h-fit items-center gap-6">
          <input type="checkbox" />
          <p>I am still workng her</p>
        </div>

        <div className="flex flex-col relative w-[100%] ">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            Salary
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>

        <div className="flex flex-col col-span-2 relative w-[100%] border border-gray-600 rounded-md p-3">
          <p className="text-gray-500 text-[13px]">Job description</p>
          <h1 className="mt-3">
            15, Iyala street Akindedun, off shoprite, Alausa, Ikeja Lagos Statee
            Nigeria. street Akindedun, off shoprite, Alausa, Ikeja Lagos Statee
            Nigeria
          </h1>
        </div>

        <div className="mt-5 col-span-2 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <h1>View companies remark</h1>
            <button className="px-6 py-2 rounded-xl bg-gray-200 text-gray-500">
              Report
            </button>
          </div>
          <button className="px-6 py-2 rounded-xl bg-gray-200 text-gray-500">
            Edit
          </button>
        </div>
      </div>


      











      <div className="p-0 lg:p-[2rem] mt-20 lg:mt-10 flex flex-col lg:grid lg:grid-cols-2 gap-[2rem]">
        <h1 className="col-span-2">Address</h1>
        <div className="flex flex-col relative w-[100%] ">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            Address
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>
        <div className="flex flex-col relative w-[100%] ">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            LGA
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>
        <div className="flex flex-col relative w-[100%] ">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            State
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>
        <div className="flex flex-col relative w-[100%] ">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            Gender
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>

        <div className="flex items-center gap-16 col-span-2 relative w-[100%]">
          <button className="border border-red-400 px-8 py-2 text-red-500 rounded-md">
            Add new address
          </button>

          <button className="bg-red-400 px-16 py-2 text-white rounded-md">
            Next
          </button>
        </div>

      </div>



      <div className="p-0 mt-20 lg:mt-10 lg:p-[2rem] flex flex-col lg:grid lg:grid-cols-2 gap-[2rem]">
        <h1 className="col-span-2">Account details</h1>
        <div className="flex flex-col relative w-[100%] ">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            Account number
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>
        <div className="flex flex-col relative w-[100%] ">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            Bank
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>
        <div className="flex flex-col relative w-[100%] ">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            Account name
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>

        <div className="flex items-center gap-16 col-span-2 relative w-[100%]">
          <button className="border border-red-400 px-8 py-2 text-red-500 rounded-md">
            Add new Account no.
          </button>

          {/* <button className="bg-red-400 px-16 py-2 text-white rounded-md">
            Next
          </button> */}
        </div>

      </div>








      <div className="mt-20 lg:mt-10">
        <div className="my-3 flex items-center justify-between">
          <h1>Certificate</h1>

          <button className="px-6 py-2 rounded-xl bg-gray-200 text-gray-500">
            add
          </button>
        </div>
        <div className="lg:px-[1rem] grid grid-cols-1 lg:grid-cols-2 gap-[3rem] ">
          <div className="flex flex-col relative">
            <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
              Cerficate
            </span>
            <input
              className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
              placeholder=""
            />
          </div>

          <div className="hidden lg:flex"></div>
          <div className="flex flex-col relative">
            <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
              Issuer
            </span>
            <input
              className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
              placeholder=""
            />
          </div>
          <div className="hidden lg:flex"></div>
          <div className="flex flex-col relative">
            <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
              Year Issued
            </span>
            <input
              className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
              placeholder=""
            />
          </div>
        </div>
      </div>


      

      <div className="mt-20">
        <div className="my-3 flex items-center justify-between">
          <h1>Gurantors</h1>
        </div>
        <div className="lg:px-[1rem] grid grid-cols-1 lg:grid-cols-2 gap-[3rem] ">
          <div className="flex flex-col relative w-[100%] ">
            <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
              Gurantor 1
            </span>
            <input
              className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
              placeholder=""
            />
          </div>

          <div className="flex flex-col relative w-[100%] ">
            <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
              Gurantor 2
            </span>
            <input
              className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
              placeholder=""
            />
          </div>

          <div className="flex flex-col relative w-[100%] ">
            <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
              Phone no
            </span>
            <input
              className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
              placeholder=""
            />
          </div>

          <div className="flex flex-col relative w-[100%] ">
            <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
              Phone no
            </span>
            <input
              className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6  py-1.5"
              placeholder=""
            />
          </div>
        </div>
      </div>

      <div className="mt-20 w-[100%] overflow-x-scroll lg:overflow-x-hidden">
        <h1>History log</h1>

        <div className="flex flex-row w-fit gap-4 text-[14px] font-[500]">
          <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Name</h1>
          <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Admin</h1>
          <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Time</h1>
          <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Date</h1>
          <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Status</h1>
        </div>

        <div className="flex flex-col  gap-4 mt-4">
          <button className="border ml-16 px-8 text-[14px] rounded-md w-fit py-2 bg-gray-300">
            May
          </button>
          <div className="flex flex-col w-fit mt-4 gap-7">
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

            <div className="flex flex-row gap-4">
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center ">Jamse Johnson</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Mary Jane</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">04:23:43</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">03-may-2024</h1>
              <h1 className="w-[12.5rem] lg:w-[17.5rem] text-center">Accepted</h1>
            </div>
          </div>

          <button className="border mt-8 ml-16 px-8 text-[14px] rounded-md w-fit py-2 bg-gray-300">
            June
          </button>
          <div className="flex flex-col w-fit mt-4 gap-7">
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
    </div>
  );
};

export default WorkerInfo;
