
const AddGurantor = () => {
  return (
    <div className="container mx-auto my-[4rem] px-[1rem]">
    <h1 className="text-xl">Add Gurantor</h1>

    <div className="mt-[2rem] max-w-[60rem] border rounded-xl border-green-600 py-[2.5rem] p-[1rem] lg:p-[2rem]">
      <p className="text-[14px] text-gray-500">
        Gurantor 1
      </p>

      <div className="flex flex-col lg:grid grid-cols-2 gap-[2rem] mt-[1.5rem]">
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
            Occupation
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

    
      </div>
    </div>
  </div>
  )
}

export default AddGurantor