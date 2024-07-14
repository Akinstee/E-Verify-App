import { Link } from "react-router-dom";
const Jobs = () => {
  return (
    <div className="max-w-[90rem] px-[1rem] inter py-4 lg:py-20 mx-auto inter">
      <h1 className="ml-4 font-[600] text-2xl text-gray-600 mb-4">
        History log
      </h1>

      {/* <p className="mt-10 font-[500]">Related searches</p> */}
      <div className="w-[100%] mt-10 font-[500] overflow-x-scroll lg:overflow-hidden text-[13px]">
        <div className="flex flex-col gap-7 mt-4 w-[100%]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(( i) => (
            <div
              key={i}
              className="flex flex-row mt-2 gap-4 items-center w-[100%] justify-between text-[16px]"
            >
              <div className="flex items-center gap-8">
                <input className="w-5 h-5" type="checkbox" />
                <Link to="/job-applicants" className="w-[12.5rem] text-gray-600 lg:w-[17.5rem] text-start ">
                  Jamse Johnson
                </Link>
              </div>
              <div className="flex items-center text-gray-600 gap-10">
                <h1 className="w-[12.5rem] text-start">04:23:43</h1>
                <h1 className="w-[12.5rem] text-start">03-may-2023</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
