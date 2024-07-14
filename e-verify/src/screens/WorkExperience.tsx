import { useState } from "react";


const Layout = ({
  children,
  className,
}: {
  children: any;
  className: string;
}) => {
  return (
    <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row w-[100%] justify-between">
      <div className="border border-slate-700 rounded-xl w-[100%] lg:w-3/12 h-[30rem] overflow-hidden flex flex-col justify-evenly items-center">
        <h1 className="font-[600]">Identification Verification Photo</h1>
        <img
          src="https://guardian.ng/wp-content/uploads/2023/05/bigstock-1619644371.jpg"
          className="w-[70%] h-[20rem] rounded-full"
          alt="Identification Verification"
        />
      </div>

      <div
        className={`w-[100%] lg:w-8/12 h-fit border border-slate-700 rounded-xl ${className}`}
      >
        {children}
      </div>
    </div>
  );
};
const WorkExperience = () => {
  const [tab, setTab] = useState("form");
  return (
    <div className="max-w-[90rem] px-[1rem] inter py-0 pb-16 mx-auto">
      <div className="mt-20">
        <div className="flex flex-col gap-4 justify-end items-end">
          <h1>Work Experience &gt; (Company Name) </h1>
          {tab == "form" ? (
            <Layout className="p-[1rem] lg:p-[2rem] flex flex-col lg:grid grid-cols-2 gap-[2rem]">
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Company
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Position
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>
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
              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Country
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>

              <div className="flex h-fit items-center gap-6">
                <input type="checkbox" />
                <p>I am still schooling</p>
              </div>

              <div className="flex flex-col relative w-[100%] ">
                <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
                  Salary
                </span>
                <input
                  className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col col-span-2 relative w-[100%] border border-gray-600 rounded-md p-3">
                <p className="text-gray-500 text-[13px]">Job description</p>
                <h1 className="mt-3">
                  15, Iyala street Akindedun, off shoprite, Alausa, Ikeja Lagos
                  Statee Nigeria. street Akindedun, off shoprite, Alausa, Ikeja
                  Lagos Statee Nigeria
                </h1>
              </div>

              <div className="flex flex-col col-span-2 relative w-[100%] rounded-md p-3">
                <p className="text-gray-500 text-[13px]">Reason for leaving</p>
                <input
                  className="px-6 py-2 rounded-md text-[15px] mt-2 border outline-none border-gray-600"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col col-span-2 overflow-x-scroll lg:overflow-x-hidden relative w-[100%] rounded-md p-3">
                <p className="text-gray-500 text-[13px]">Rate workers</p>

                <div className="w-fit lg:w-[100%] flex flex-col gap-4">
                  <div className="flex gap-6">
                    <div className="w-40"></div>
                    <p className="w-28 text-center">Poor</p>
                    <p className="w-28 text-center">Fair</p>
                    <p className="w-28 text-center">Good</p>
                    <p className="w-28 text-center">Very Good</p>
                    <p className="w-28 text-center">Excellent</p>
                  </div>
                  <div className="flex gap-6">
                    <p className="w-40">Time Keeping</p>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <p className="w-40">Punctuality</p>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <p className="w-40">Communicatiin Skills</p>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <p className="w-40">Customer Service</p>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <p className="w-40">Comitted</p>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <p className="w-40">Attendance</p>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <p className="w-40">Dress code</p>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      <input type="radio" />
                    </div>
                  </div>

                  <div className="flex gap-6 mt-8">
                    <p className="w-40">Can you re-employ</p>
                    <div className="flex items-center justify-center w-28">
                      {/* <input type="radio"/> */}
                    </div>
                    <div className="flex items-center justify-center w-28">
                      {/* <input type="radio"/> */}
                    </div>
                    <div className="flex flex-col items-center justify-center w-28">
                      <p>Yes</p>
                      <input type="radio" />
                    </div>
                    <div className="flex flex-col items-center justify-center w-28">
                      <p>No</p>
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-28">
                      {/* <input type="radio"/> */}
                    </div>
                  </div>

                  <div className="flex flex-col col-span-2 relative w-[100%] rounded-md p-3">
                    <p className="text-gray-500 text-[13px]">If no, why?</p>
                    <input
                      className="px-6 py-2 rounded-md text-[15px] mt-2 border outline-none border-gray-600"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col col-span-2 relative w-[100%] rounded-md p-3">
                <p className="text-gray-500 text-[13px]">Leave a feedback</p>
                <textarea
                  className="px-6 py-2 h-[10rem] rounded-md text-[15px] mt-2 border outline-none border-gray-600"
                  placeholder=""
                />
              </div>
            </Layout>
          ) : (
            <Layout className="p-[2rem] flex flex-col gap-[2rem]">
              <h1 className="font-[600] text-xl">Requested for Resignation</h1>

              <div className="px-[2rem]">
                <p>James John Requested a resignation</p>

                <div className="bg-gray-200 p-[1rem] mt-[2rem] border border-gray-600 rounded-xl">
                  <p className="teext-md text-gray-500">Also note</p>
                  <p className="text-xl font-bold mt-2 text-center">
                    James John is available for a review of terms and condition
                    which might lead to futher extension of service
                  </p>
                </div>

                <h1 className="my-[2.5rem] text-center font-bold">Accept?</h1>

                <div className="flex justify-center items-center gap-20">
                  <button className="bg-gray-200 py-2 px-12 font-bold rounded-xl">
                    Yes
                  </button>
                  <button className="bg-gray-200 py-2 px-12 font-bold rounded-xl">
                    No
                  </button>
                </div>
                <h1 className="mt-16 text-center">That is understandable, now you will need to schedule a meeting with james to discuss his terms and conditions.</h1>
                <div className="grid grid-cols-2 gap-8 mt-20">
                  <div className="flex gap-3">
                    <div className="flex gap-3 items-center h-fit">
                      <span className=" bg-white left-6 text-[14px] px-2">
                        Date
                      </span>
                      <input
                        className="border bg-white w-28 border-slate-500 rounded-xl text-md px-2 h-10 py-2"
                        placeholder=""
                      />
                    </div>

                    <div className="flex gap-3 items-center h-fit">
                      <span className=" bg-white left-6 text-[14px] px-2">
                        Time
                      </span>
                      <input
                        className="border bg-white w-28 border-slate-500 rounded-xl text-md px-2 h-10 py-2"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 items-center h-fit">
                      <span className=" bg-white left-6 text-[14px] px-2">
                        Venue
                      </span>
                      <input
                        className="border bg-white flex-1 border-slate-500 rounded-xl text-md px-2 h-10 py-2"
                        placeholder=""
                      />
                    </div>
                </div>

                <div className="mt-12 flex justify-center items-center">
                  <button className="py-2 px-10 rounded-md bg-red-400 text-white">Schedule a meeting</button>
                </div>
              </div>
            </Layout>
          )}

          {tab == "form" && (
            <button
              type="button"
              className="border bg-red-400 px-6 py-2 rounded-md text-white"
              onClick={() => setTab('for')}
            >
              Submit for review
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
