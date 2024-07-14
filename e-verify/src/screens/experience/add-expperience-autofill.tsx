
const AddExperienceAutoFill = () => {
  return (
    <div className="container px-[1rem] mx-auto my-[4rem]">
    <h1 className="text-xl font-bold">Work Experience &gt; (Auto fill Company name)</h1>

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
     <textarea className="flex mt-2 h-[3rem] bg-gray-200 border-gray-500 outline-none flex-col p-[1rem] border rounded-xl relative w-[100%]" />
        
     </div>


     <div className="col-span-2 ">
        <h1 className="text-gray-500">Leave a feedback</h1>
     <textarea className="flex mt-2 h-[12rem] bg-gray-200 border-gray-500 outline-none flex-col p-[1rem] border rounded-xl relative w-[100%]" />
        
     </div>

     <div className="col-span-2 flex justify-end">
    <button className="bg-red-500 px-8 py-2 rounded-md text-white">Submit for review</button>
     </div>
    
      </div>
    </div>
  </div>
  )
}

export default AddExperienceAutoFill