
const AddEducation = () => {
  return (
    <div className="container px-[1rem] mx-auto my-[4rem]">
    <h1 className="text-xl font-bold">Education</h1>

    <div className="mt-[2rem] max-w-[50rem] border rounded-xl border-green-600 py-[2.5rem] p-[1rem] lg:p-[2rem]">
      {/* <p className="text-[14px] text-gray-500">
        Gurantor 1
      </p> */}

      <div className="grid grid-cols-1 gap-[2rem]">
        <div className="flex flex-col relative w-[100%]">
          <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
            School
          </span>
          <input
            className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>

        <div className="flex flex-col relative w-[100%]">
          <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
            State
          </span>
          <input
            className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>


        <div className="flex flex-col relative w-[100%]">
          <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
            Degree
          </span>
          <input
            className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>

        <div className="flex flex-col relative w-[100%]">
          <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
            Nation
          </span>
          <input
            className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>



        <div className="flex flex-col relative w-[100%]">
          <span className="absolute bg-white text-gray-500 text-[12px] left-4 px-2">
            Course
          </span>
          <input
            className="border bg-white mt-3 border-gray-300 rounded-md text-md px-6  py-1.5"
            placeholder=""
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-3">
                <div className="flex gap-3 items-center h-fit">
                  <span className=" bg-white left-6 text-gray-500 text-[12px] px-2">
                    Start Year
                  </span>
                  <input
                    className="border bg-white flex-1 lg:w-28 border-gray-300 rounded-xl text-md px-2 h-10 py-1.5"
                    placeholder=""
                  />
                </div>

                <div className="flex gap-3 items-center h-fit">
                  <span className=" bg-white left-6 text-gray-500 text-[12px] px-2">
                    Finish Year
                  </span>
                  <input
                    className="border bg-white flex-1 lg:w-28 border-gray-300 rounded-xl text-md px-2 h-10 py-1.5"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="flex h-fit items-center gap-6">
                <input type="checkbox" />
                <p className="text-gray-500 text-[12px]">I am still schooling</p>
              </div>


  
    
      </div>
    </div>
  </div>
  )
}

export default AddEducation