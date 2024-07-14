
const JobApplication = () => {
  return (
    <div className="lg:pl-[10%] px-[1rem] max-w-[60rem] my-[4rem]">
      <div className="flex flex-row gap-12">
        <div className="w-24 h-24 border"></div>
        <div>
          <h1 className="text-xl font-[600]">James John</h1>
          <p className="text-[13px] text-gray-500">Jamesjohn@gmail.com</p>
          <p className="text-[15px] text-gray-600">0903485392</p>
          <p>Lagos</p>
        </div>
      </div>
        <textarea className="bg-gray-200 border p-6 rounded-md h-[12.5rem] w-[100%] mt-20" placeholder="Cover letter"/>


        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"> */}

        <h1 className="mt-12 text-gray-600">Resume / CV</h1>
          <div className="border mt-2 border-gray-400 max-w-[30rem] overflow-hidden  flex items-center rounded-md gap-3 bg-gray-200">
            <h1 className="bg-blue-200 px-4 shadow-md py-2 w-20 h-9"></h1>
            <p className="text-gray-500">upload from device</p>
          </div>
          
          <h1 className="mt-12 text-gray-600">Additional Documents</h1>
          <div className="border mt-2 border-gray-400 max-w-[30rem] overflow-hidden  flex items-center rounded-md gap-3 bg-gray-200">
            <h1 className="bg-blue-200 px-4 shadow-md py-2 w-20 h-9"></h1>
            <p className="text-gray-500">upload from device</p>
          </div>
      {/* </div> */}

      <div className="mt-20">
        <p className="text-[15px] text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="text-[15px] mt-4 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="mt-8">
        <div>
            <h1 className="text-[15px] mt-4 text-gray-600">Question 1</h1>
            <input placeholder="answer the question stated above" className="bg-gray-200 mt-2 py-2 px-4 rounded-md w-[100%] max-w-[45rem]"/>
        </div>

        <div>
            <h1 className="text-[15px] mt-4 text-gray-600">Question 2</h1>
            <input placeholder="answer the question stated above" className="bg-gray-200 mt-2 py-2 px-4 rounded-md w-[100%] max-w-[45rem]"/>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;
