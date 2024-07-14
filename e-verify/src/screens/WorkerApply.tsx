import { useState } from "react";
import notification from "../../public/svg/notification.svg";
import Jobfeed from "./Jobfeed";
import Trackajob from "./Trackajob";
import Recentfeed from "./Recentfeed";

const WorkerApply = () => {
  const [activeTab, setActiveTab] = useState("jobFeed");

  let ActiveComponent = null;
  if (activeTab === "jobFeed") {
    ActiveComponent = <Jobfeed />;
  } else if (activeTab === "trackJob") {
    ActiveComponent = <Trackajob />;
  } else if (activeTab === "recentField") {
    ActiveComponent = <Recentfeed />;
  }

  return (
    <div
      className="w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/svg/loginBg.svg')" }}
    >
      <div className="justify-end flex p-4">
        <img src={notification} alt="notification" />
      </div>
      <div className="flex justify-center p-4">
        <h1 className="font-bold">
          Save yourself the time with 95% of landing your job
        </h1>
      </div>
      <div className="flex justify-center gap-5 mt-5">
        <div className="flex flex-col relative">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            What
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
            placeholder="Reception"
          />
        </div>
        <div className="flex flex-col relative">
          <span className="absolute bg-white text-gray-500 left-4 text-[14px] px-2">
            Where
          </span>
          <input
            className="border outline-none bg-white mt-3 border-slate-500 rounded-md text-md px-6 max-w-[30rem] py-1.5"
            placeholder="Nigeria"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-around border-b-2 border-gray-200 mt-5">
          <button
            className={`flex-1 py-2 text-center ${
              activeTab === "jobFeed" ? "border-b-2 border-gray-500" : ""
            }`}
            onClick={() => setActiveTab("jobFeed")}
          >
            Job Feed
          </button>
          <button
            className={`flex-1 py-2 text-center ${
              activeTab === "trackJob" ? "border-b-2 border-gray-500" : ""
            }`}
            onClick={() => setActiveTab("trackJob")}
          >
            Track Job
          </button>
          <button
            className={`flex-1 py-2 text-center ${
              activeTab === "recentField" ? "border-b-2 border-gray-500" : ""
            }`}
            onClick={() => setActiveTab("recentField")}
          >
            Recent Search
          </button>
        </div>
      </div>
      <div className="p-4">{ActiveComponent}</div>
    </div>
  );
};

export default WorkerApply;
