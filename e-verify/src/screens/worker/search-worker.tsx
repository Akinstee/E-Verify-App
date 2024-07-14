import { Link } from "react-router-dom";
const SearchWorker = () => {
  return (
    <div>
      <img
        src="/svg/loginBg.svg"
        className="absolute w-[100vw] h-fit top-0 left-0 object-cover z-0"
      />
      <div className="max-w-[90rem] relative px-[1rem] inter py-4 lg:py-20 mx-auto inter">
        <h1 className="text-[3rem] font-[600] leading-[4rem] lg:leading-[5.5rem]">
          Perform a Search
        </h1>

        <div className="flex gap-4 mt-4">
          <input
            placeholder="enter applicant name or reg no."
            className="w-[35rem] rounded-md text-lg bg-red-50 py-2 h-16 px-6"
          />
          <img src="/vector.svg" className="h-16" />
        </div>

        <p className="mt-16 font-[500]">Related searches</p>
        <div className="w-[100%] overflow-x-scroll mt-4 lg:overflow-hidden text-[13px]">
          <div className="flex flex-col gap-7 mt-4 text-[17px] w-fit">
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9,, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20].map((i) => <div className="flex text-lg flex-row gap-4 " key={i}>
              <input className="" type="checkbox" />
              <Link to="/worker-verify" className="w-[12.5rem] lg:w-[17.5rem] text-start ">
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
            </div>)
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWorker;
