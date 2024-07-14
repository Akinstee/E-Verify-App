
import lappedImages from "../../public/svg/lappedImages.svg";

const CompanyPostJobafterInterview = () => {
  return (
    <>
      <div className="relative w-full h-screen mt-5">
        <div
          className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/svg/loginBg.svg')" }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <img src={lappedImages} alt="" className=""/>
          <h3 className="font-bold">
            James Johnson +James Johnson +James Johnson +James Johnson
          </h3>
          <p className="text-center mt-5">
            To accept the recipient's application, You have to set a date and
            time for official resumption. This would be <br /> displayed in your
            letter sent to the recipients
          </p>
          <div className="flex gap-3 mt-5">
            <div className="flex gap-3 items-center h-fit">
              <span className=" bg-white left-6 text-[14px] px-2">Date</span>
              <input
                className="border bg-white w-28 border-slate-500 rounded-xl text-md px-2 h-10 py-2"
                placeholder="yyyy"
              />
            </div>

            <div className="flex gap-3 items-center h-fit">
              <span className=" bg-white left-6 text-[14px] px-2">Time</span>
              <input
                className="border bg-white w-28 border-slate-500 rounded-xl text-md px-2 h-10 py-2"
                placeholder="00:00"
              />
            </div>
          </div>
          <div className="mt-5">
            <textarea
              name=""
              id=""
              placeholder="Also note"
              className="w-[55rem] h-[6rem] bg-[#f0f0f0]  p-5"
            ></textarea>
          </div>
          <div className="mt-5  bg-[#fecaca] p-4 rounded text-white">
            <button> Send Employment letter </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default CompanyPostJobafterInterview;
