import { IoInformationCircle } from "react-icons/io5";
const RequestWorker = () => {
  return (
    <div className="container px-[1rem] lg:px-0 mx-auto my-[4rem]">
      <h1 className="text-xl">Request Gurantor</h1>

      <div className="mt-[2rem] max-w-[60rem] border rounded-xl border-green-600 py-[1rem] p-[1rem] lg:p-[2rem]">
        <p className="text-[14px] text-gray-500">
          John James has sent a request to become a mentor
        </p>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[2rem] mt-[1.5rem]">
          <div className="flex flex-col relative w-[100%]">
            <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
              Name
            </span>
            <input
              className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
              placeholder=""
            />
          </div>

          <div className="flex flex-col relative w-[100%]">
            <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
              Email
            </span>
            <input
              className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
              placeholder=""
            />
          </div>

          <div className="flex flex-col relative w-[100%]">
            <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
              Reg No
            </span>
            <input
              className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
              placeholder=""
            />
          </div>

          <div className="flex flex-col relative w-[100%]">
            <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
              Phone No
            </span>
            <input
              className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
              placeholder=""
            />
          </div>

          <div className="col-span-2 mt-[1rem]">
            <p className="text-slate-500">
              I <input className="border border-slate-200" /> that I am aware of
              my decision to stand in as a guarantor for this individual for the
              space of 2 years, and I am responsible for anything that comes as
              a result of this
            </p>
          </div>
          <div className="flex items-center gap-4  text-gray-500">
            <IoInformationCircle />
            <p>I have read the terms and conditions</p>
          </div>
          <div className="col-span-2 flex items-center justify-between">
            <button className="mt-8 border px-8 py-1.5 border-red-400 text-red-400 rounded-md">
              Check Profile
            </button>

            <button className="mt-8 border px-8 py-1.5 border-gray-400 bg-gray-200 text-gray-400 rounded-md">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestWorker;
