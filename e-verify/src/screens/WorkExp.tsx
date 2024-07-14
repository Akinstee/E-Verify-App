import RegisterationCard from "../components/RegisterationCard";
const WorkExp = () => {
  return (
    <div className="w-[100vw] h-[100vh] lg:pl-[7.5%] flex flex-row items-center nunito justify-center max-w-[100vw] overflow-x-hidden ">
      <RegisterationCard>
        {
          <div className="w-[100%] lg:w-6/12 px-[1rem] lg:px-12 z-10 flex flex-col gap-6 justify-center items-start h-[100vh]">
            <h1 className="text-2xl">Work Experience</h1>
            
            <div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                Company
              </span>
              <input
                className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                placeholder=""
              />
            </div>
            
            <div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                Country
              </span>
              <input
                className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                placeholder=""
              />
            </div>


            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 max-w-[27.5rem]">
              <div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                Start Year
              </span>
              <input
                className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                placeholder=""
              />
            </div>

            <div className="flex flex-col relative w-[100%]">
              <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
                Finish Year
              </span>
              <input
                className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                placeholder=""
              />
            </div>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <input type="checkbox" className="" placeholder="" />
              <p>He is still working here</p>
            </div>

            <div className="max-w-[24.5rem] border-2 border-gray-500 rounded-md p-4">
              <p className="text-[11px] mb-6">Address</p>
              <h1 className="text-gray-600">
                15, Iyala street Akindedun, off shoprite, Alausa, Ikeja Lagos
                State Nigeria.
              </h1>
            </div>

            <div className="flex mt-16 max-w-[30rem] items-center justify-between w-[100%]">
              <button className="border border-red-400 py-2 px-6 text-[15px] text-red-500 rounded-md">
                Add new Experience
              </button>
              <button className=" bg-red-400 text-white py-2 px-20 text-[15px] rounded-md">
                Next
              </button>
            </div>
          </div>
        }
      </RegisterationCard>
    </div>
  );
};

export default WorkExp;
