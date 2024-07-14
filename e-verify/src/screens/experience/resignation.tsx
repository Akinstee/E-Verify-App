
const Resignation = () => {
  return (
    <div className="container mx-auto my-[4rem] px-[1rem]">
      <h1 className="text-xl font-bold">
        Work Experience &gt; (Company name) &gt; Resignation
      </h1>

      <div className="mt-[2rem] max-w-[60rem] border rounded-xl border-green-600 py-[2.5rem] p-[1rem] lg:p-[2rem]">
        <div className="grid grid-cols-2 gap-[2rem]">
          <h1 className="col-span-2 text-center text-[14px] text-gray-500">
            Note: Everything you fill here is assuredly confidential, but how
            about reconsidering?
          </h1>

          <div className="flex flex-col col-span-2 relative w-[100%] rounded-md p-3">
            <div className="w-[100%] flex flex-col gap-4">
              <div className="flex gap-6 justify-between items-center text-[13px] text-gray-500">
                <h1 className="w-44 lg:w-64 text-[16px] text-gray-700"></h1>
                <div className="flex">
                  <p className="w-14 lg:w-24 text-center">Yes</p>
                  <p className="w-14 lg:w-24 text-center">No</p>
                </div>
              </div>

              <div className="flex gap-6 justify-between items-center text-[13px] text-gray-500">
                <h1 className="w-44 lg:w-64 text-[16px] text-gray-700">
                  Got a new Job?
                </h1>
                <div className="flex">
                  <div className="w-14 lg:w-24 text-center">
                    <input type="radio" />
                  </div>
                  <div className="w-14 lg:w-24 text-center">
                    <input type="radio" />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 lg:gap-6 mt-8 mb-2 justify-between items-center text-[13px] text-gray-500">
                <h1 className="w-44 lg:w-64 text-[16px] font-[500] text-gray-700">
                  Why are you Resigning
                </h1>
                <div className="flex">
                  <p className="w-14 lg:w-24 text-center">Yes</p>
                  <p className="w-14 lg:w-24 text-center">No</p>
                </div>
              </div>
              <div className="flex gap-6 justify-between items-center text-[13px] text-gray-500 pl-4 lg:pl-12">
                <p className="w-40 text-[16px] text-gray-700">
                  Insurance Policy
                </p>

                <div className="flex">
                  <div className="w-14 lg:w-24 text-center">
                    <input type="radio" />
                  </div>
                  <div className="w-14 lg:w-24 text-center">
                    <input type="radio" />
                  </div>
                </div>
              </div>

              <div className="flex gap-6 justify-between items-center text-[13px] text-gray-500 pl-4 lg:pl-12">
                <p className="w-40 text-[16px] text-gray-700">Salary Delay</p>

                <div className="flex">
                  <div className="w-14 lg:w-24 text-center">
                    <input type="radio" />
                  </div>
                  <div className="w-14 lg:w-24 text-center">
                    <input type="radio" />
                  </div>
                </div>
              </div>

              <div className="flex gap-6 justify-between items-center text-[13px] text-gray-500 pl-4 lg:pl-12">
                <p className="w-40 text-[16px] text-gray-700">Assault</p>

                <div className="flex">
                  <div className="w-14 lg:w-24 text-center">
                    <input type="radio" />
                  </div>
                  <div className="w-14 lg:w-24 text-center">
                    <input type="radio" />
                  </div>
                </div>
              </div>

              <div className="flex gap-6 justify-between items-center text-[13px] text-gray-500 pl-4 lg:pl-12">
                <p className="w-40 text-[16px] text-gray-700">Abused</p>
                

                <div className="flex">
                  <div className="w-14 lg:w-24 text-center">
                    <input type="radio" />
                  </div>
                  <div className="w-14 lg:w-24 text-center">
                    <input type="radio" />
                  </div>
                </div>


              </div>



              <div className="flex gap-6 justify-between items-center text-[13px] text-gray-500 pl-4 lg:pl-12">
                <p className="w-40 text-[16px] text-gray-700">Inappropriate tune</p>
                

                <div className="flex">
                  <div className="w-14 lg:w-24 text-center">
                    <input type="radio" />
                  </div>
                  <div className="w-14 lg:w-24 text-center">
                    <input type="radio" />
                  </div>
                </div>


              </div>




              <div className="flex gap-6 justify-between items-center text-[13px] text-gray-500 pl-4 lg:pl-12">
                <p className="w-40 text-[16px] text-gray-700">Cheated</p>
                

                <div className="flex">
                  <div className="w-14 lg:w-24 text-center">
                    <input type="radio" />
                  </div>
                  <div className="w-14 lg:w-24 text-center">
                    <input type="radio" />
                  </div>
                </div>


              </div>



              <div className="flex gap-6 justify-between items-center text-[13px] text-gray-500 pl-4 lg:pl-12">
                <p className="w-40 text-[16px] text-gray-700">Under Paid</p>
                

                <div className="flex">
                  <div className="w-14 lg:w-24 text-center">
                    <input type="radio" />
                  </div>
                  <div className="w-14 lg:w-24 text-center">
                    <input type="radio" />
                  </div>
                </div>


              </div>

             
             <h1 className="mt-8">How about a Salary Review or Promotion (optional)</h1>

             <div className="mt-6 flex gap-12">
                <button className="px-12 bg-gray-200 border border-gray-300 py-2 rounded-md">Yes</button>
                <button className="px-12 bg-gray-200 border border-gray-300 py-2 rounded-md">No</button>
             </div>
            </div>
          </div>

         

          <div className="col-span-2 flex justify-end">
            <button className="bg-red-500 px-8 py-2 rounded-md text-white">
            Drop your resignation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resignation;
