import { useState } from "react";
import { Link } from "react-router-dom";
import { RejectDialog } from "../components/reject-modal";
const JobApplicant = () => {
  const [tab, setTab] = useState("first");
  return (
    <div className="lg:pl-[10%] px-[1rem] max-w-[60rem] my-[4rem]">
      {tab == "first" ? (
        <div>
             <div className="flex flex-row gap-12">
        <div className="w-24 h-24 border"></div>
        <div>
          <h1 className="text-3xl font-[600]">James John</h1>
          <p className="text-[16px] text-gray-500">Jamesjohn@gmail.com</p>
          <p className="text-[18px] text-gray-600">0903485392</p>
          <p>Lagos</p>
        </div>
      </div>
      {/* <textarea className="bg-gray-200 border p-6 rounded-md h-[12.5rem] w-[100%] mt-20" placeholder="Cover letter"/> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"> */}
      <div className="text-[14px] bg-gray-100 mt-8 p-4">
        <p className="text-[15px] mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="text-[15px] mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="mt-6">
        <p className="text-[15px] text-gray-500">Question 1</p>
        <input placeholder="Immediately" className="h-8 py-4 text-[15px] px-6 rounded-md border w-[100%] mt-2 bg-gray-100"/>
      </div>

      <div className="mt-6">
        <p className="text-[15px] text-gray-500">Question 2</p>
        <input placeholder="Immediately" className="h-8 py-4 text-[15px] px-6 rounded-md border w-[100%] mt-2 bg-gray-100"/>
      </div>

      <div className="mt-6">
        <p className="text-[15px] text-gray-500">Question 3</p>
        <input placeholder="Immediately" className="h-8 py-4 text-[15px] px-6 rounded-md border w-[100%] mt-2 bg-gray-100"/>
      </div>
      <h1 className="mt-12 text-gray-600">Resume / CV</h1>
      <div className="border mt-2 border-gray-400 overflow-hidden  flex items-center rounded-md gap-3 bg-gray-200">
        <h1 className="bg-blue-200 px-4 shadow-md py-2 w-20 h-9"></h1>
        <p className="text-gray-500">upload from device</p>
      </div>

      <h1 className="mt-12 text-gray-600">Additional Documents</h1>
      <div className="border mt-2 border-gray-400  overflow-hidden  flex items-center rounded-md gap-3 bg-gray-200">
        <h1 className="bg-blue-200 px-4 shadow-md py-2 w-20 h-9"></h1>
        <p className="text-gray-500">upload from device</p>
      </div>
      
      

      <div className="flex items-center justify-between mt-20">
        <RejectDialog />
        {/* <button className="w-5/12 border py-2 rounded-md bg-gray-100">Reject</button> */}
        <button onClick={() => setTab('second')} className="w-5/12 border py-2 rounded-md bg-red-400 text-white">Next Page</button>
      </div>
        </div>
      ) : tab == "second" ? (
        <div>
        <div className="flex flex-row gap-12">
   <div className="w-24 h-24 border"></div>
   <div>
     <h1 className="text-3xl font-[600]">James John</h1>
     <p className="text-[16px] text-gray-500">Jamesjohn@gmail.com</p>
     <p className="text-[18px] text-gray-600">0903485392</p>
     <p>Lagos</p>
   </div>
 </div>
 {/* <textarea className="bg-gray-200 border p-6 rounded-md h-[12.5rem] w-[100%] mt-20" placeholder="Cover letter"/> */}

 {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"> */}
 <div className="text-[14px] bg-gray-100 mt-8 p-4">
    <h1 className="mb-2">Do you have any disabilities? If yes, specify</h1>
   <p className="text-[15px] mt-4 text-gray-600">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
     minim veniam, quis nostrud exercitation ullamco laboris nisi ut
     aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
     culpa qui officia deserunt mollit anim id est laborum.
   </p>
   <p className="text-[15px] mt-4 text-gray-600">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
     minim veniam, quis nostrud exercitation ullamco laboris nisi ut
     aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
     culpa qui officia deserunt mollit anim id est laborum.
   </p>
 </div>

 <div className="mt-6">
   <p className="text-[15px] text-gray-500">Question 2</p>
   <input placeholder="Immediately" className="h-8 py-4 text-[15px] px-6 rounded-md border w-[100%] mt-2 bg-gray-100"/>
 </div>

 <div className="mt-6">
   <p className="text-[15px] text-gray-500">Question 3</p>
   <input placeholder="Immediately" className="h-8 py-4 text-[15px] px-6 rounded-md border w-[100%] mt-2 bg-gray-100"/>
 </div>

 <div className="flex items-center justify-between mt-20">
        <button className="w-5/12 border py-2 rounded-md bg-gray-100">Reject</button>
        <button onClick={() => setTab('third')} className="w-5/12 border py-2 rounded-md bg-red-400 text-white">Review Profile</button>
      </div>
 
 
   </div>
      ) : (
        <div>
             <div className="flex flex-row gap-12">
        <div className="w-24 h-24 border"></div>
        <div>
          <h1 className="text-3xl font-[600]">James John</h1>
          <p className="text-[16px] text-gray-500">Jamesjohn@gmail.com</p>
          <p className="text-[18px] text-gray-600">0903485392</p>
          <p>Lagos</p>
        </div>
      </div>
      {/* <textarea className="bg-gray-200 border p-6 rounded-md h-[12.5rem] w-[100%] mt-20" placeholder="Cover letter"/> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"> */}
      <textarea placeholder="Cover letter" className="p-3 bg-gray-100 h-[20rem] w-[100%] mt-16"/>

      <div className="mt-6">
        <p className="text-[15px] text-gray-500">Question 1</p>
        <input placeholder="Immediately" className="h-8 py-4 text-[15px] px-6 rounded-md border w-[100%] mt-2 bg-gray-100"/>
      </div>

      <div className="mt-6">
        <p className="text-[15px] text-gray-500">Question 2</p>
        <input placeholder="Immediately" className="h-8 py-4 text-[15px] px-6 rounded-md border w-[100%] mt-2 bg-gray-100"/>
      </div>

      <div className="mt-6">
        <p className="text-[15px] text-gray-500">Question 3</p>
        <input placeholder="Immediately" className="h-8 py-4 text-[15px] px-6 rounded-md border w-[100%] mt-2 bg-gray-100"/>
      </div>
      <h1 className="mt-12 text-gray-600">Resume / CV</h1>
      <div className="border mt-2 border-gray-400 overflow-hidden  flex items-center rounded-md gap-3 bg-gray-200">
        <h1 className="bg-blue-200 px-4 shadow-md py-2 w-20 h-9"></h1>
        <p className="text-gray-500">upload from device</p>
      </div>

      <h1 className="mt-12 text-gray-600">Additional Documents</h1>
      <div className="border mt-2 border-gray-400  overflow-hidden  flex items-center rounded-md gap-3 bg-gray-200">
        <h1 className="bg-blue-200 px-4 shadow-md py-2 w-20 h-9"></h1>
        <p className="text-gray-500">upload from device</p>
      </div>
      
      

      <div className="flex items-center justify-between mt-20">
        <button className="w-5/12 border py-2 rounded-md bg-gray-100">Reject</button>
        <Link to="/worker-verification" className="w-5/12 border py-2 rounded-md bg-red-400 text-white">Schedule an Interview</Link>
      </div>
        </div>
      )}
    </div>
  );
};

export default JobApplicant;
