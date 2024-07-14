
const AddExperience = () => {
  return (
    <div className="container px-[1rem] mx-auto my-[4rem]">
    <h1 className="text-xl font-bold">Work Experience &gt; (Company name)</h1>

    <div className="mt-[2rem] max-w-[60rem] border rounded-xl border-green-600 py-[2.5rem] p-[1rem] lg:p-[2rem]">

      <div className="flex flex-col lg:grid grid-cols-2 gap-[2rem]">
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

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-3">
                <div className="flex gap-3 items-center h-fit">
                  <span className=" bg-white text-gray-500 left-6 text-[14px] px-2">
                    Start Year
                  </span>
                  <input
                    className="border bg-white flex-1 lg:w-24 border-gray-300 rounded-md text-md px-2 h-10 py-2"
                    placeholder=""
                  />
                </div>

                <div className="flex gap-3 items-center h-fit">
                  <span className=" bg-white text-gray-500 left-6 text-[14px] px-2">
                    Finish Year
                  </span>
                  <input
                    className="border bg-white flex-1 lg:w-24 border-gray-300 rounded-md text-md px-2 h-10 py-2"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="flex flex-col relative w-[100%]">
          <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
            Name
          </span>
          <input
            className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
            placeholder=""
          />
        </div>

        <div className="flex items-center text-gray-500 gap-4 relative w-[100%]">
          
          <input
           type="checkbox"
            placeholder=""
          />

          <p>He is schooling here</p>
        </div>

        <div className="flex flex-col relative w-[100%]">
          <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
            Name
          </span>
          <input
            className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6 max-w-[30rem] py-1.5"
            placeholder=""
          />
        </div>



        <div className="flex flex-col p-[1rem] col-span-2 border rounded-xl relative w-[100%]">
          <p className="text-[13px] text-gray-500">
            Job Description and salary
          </p>

          <h1 className="text-gray-600 mt-6">
            15, Iyala street Akindedun, off shoprite, Alausa, Ikeja Lagos State
            Nigeria. 15, Iyala street Akindedun, off shoprite, Alausa, Ikeja Lagos State
            Nigeria.
          </h1>
        </div>


     <div className="col-span-2 ">
        <h1 className="text-gray-500">Reason for leaving</h1>
     <textarea className="flex mt-2 h-[6rem] bg-gray-200 border-gray-500 outline-none flex-col p-[1rem] border rounded-xl relative w-[100%]" />
        
     </div>

     <div className="flex overflow-x-scroll lg:overflow-x-hidden flex-col col-span-2 relative w-[100%] rounded-md p-3">
                <p className="text-gray-700 font-[500] text-[16px]">Rate workers</p>

                <div className="w-fit flex flex-col gap-4">
                  <div className="flex gap-6 text-[13px] text-gray-500">
                    <div className="w-40 text-[16px] text-gray-700"></div>
                    <p className="w-24 text-center">Poor</p>
                    <p className="w-24 text-center">Fair</p>
                    <p className="w-24 text-center">Good</p>
                    <p className="w-24 text-center">Very Good</p>
                    <p className="w-24 text-center">Excellent</p>
                  </div>
                  <div className="flex gap-6">
                    <p className="w-40 text-[16px] text-gray-700">Time Keeping</p>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <p className="w-40 text-[16px] text-gray-700">Punctuality</p>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <p className="w-40 text-[16px] text-gray-700">Communicatiin Skills</p>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <p className="w-40 text-[16px] text-gray-700">Customer Service</p>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <p className="w-40 text-[16px] text-gray-700">Comitted</p>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <p className="w-40 text-[16px] text-gray-700">Attendance</p>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <p className="w-40 text-[16px] text-gray-700">Dress code</p>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
                      <input type="radio" />
                    </div>
                  </div>

                  <div className="flex gap-6 mt-8">
                    <p className="w-40 text-[16px] text-gray-700">Can you re-employ</p>
                    <div className="flex items-center justify-center w-24">
                      {/* <input type="radio"/> */}
                    </div>
                    <div className="flex items-center justify-center w-24">
                      {/* <input type="radio"/> */}
                    </div>
                    <div className="flex flex-col items-center justify-center w-24">
                      <p>Yes</p>
                      <input type="radio" />
                    </div>
                    <div className="flex flex-col items-center justify-center w-24">
                      <p>No</p>
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-center w-24">
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



     <div className="col-span-2 ">
        <h1 className="text-gray-500">Leave a feedback</h1>
     <textarea className="flex mt-2 h-[5rem] bg-gray-200 border-gray-500 outline-none flex-col p-[1rem] border rounded-xl relative w-[100%]" />
        
     </div>

     <div className="col-span-2 flex justify-end">
    <button className="bg-red-500 px-8 py-2 rounded-md text-white">Submit for review</button>
     </div>
    
      </div>
    </div>
  </div>
  )
}

export default AddExperience