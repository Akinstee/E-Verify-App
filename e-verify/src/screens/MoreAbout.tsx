
const MoreAbout = () => {
  return (
    <div>
      <div className="h-[45rem] w-[100vw] relative flex items-center justify-center">
        <div className="relative z-10 text-center max-w-[80rem] ">
          <h1 className="text-5xl font-[600] text-white">Online Professional check</h1>
          <p className="mt-8 text-white text-[17px]">
            We offer a complete online criminal record check for companies. A
            DBS (Disclosure and Barring Service) check can only be requested by
            an employer, and there are only certain roles which require a DBS
            check. Click here for examples of Professions and activity which are
            regulated.
          </p>
        </div>

        <img src="/more-bg.svg" className="w-[100vw] absolute top-0 left-0 object-cover h-[45rem]" />

        <div className="w-[70%] left-[15%] h-[5rem] bg-white absolute bottom-0 z-10"></div>
      </div>

      <div className=" max-w-[80rem] border mx-auto">
      <h1 className="text-3xl font-[700] mt-8 text-center">
        There are three types of checks:
      </h1>

      <div className="w-[100%] mt-8 relative h-[50rem] border">
        <div className="absolute top-0 left-[10%] h-64 w-64 border rounded-full"></div>
      </div>
      </div>
    </div>
  );
};

export default MoreAbout;
