const AboutUs = () => {
  return (
    <div>
      <div className="z-10 relative w-[100vw] h-fit flex flex-col items-center pt-12 -center">
        <h1 className="text-[3rem]">
          About <span className="text-red-600">e-verify</span>
        </h1>

        <p className="text-xl text-center">
          We are leading provider of criminality checks with over 20,000
          registered clients/organisations, and what's <br /> more our team has
          been screening for over 26 years
        </p>

        <div className="flex gap-20 justify-center mt-12">
          <div className="w-5/12 max-w-[40rem] py-16 bg-red-50 border-l-4 border-red-500 p-6">
            <h1 className="text-red-600 text-6xl font-[600]">
              Disclosure and Barring Service
            </h1>
            <p className="mt-10 text-xl">
              Organisations can request standard and enhanced criminal record
              checks for eligible positions in England and Wales.
            </p>
            <button className="bg-blue-800 text-xl mt-16 p-3 px-4 rounded-full text-white">
              Register your organisation online now!
            </button>
          </div>
          <div className="w-5/12 max-w-[40rem] py-16 bg-red-50 border-l-4 border-blue-500 p-6">
            <h1 className="text-blue-600 text-6xl font-[600]">
              Professional Remarks
            </h1>
            <p className="mt-10 text-xl">
              Organisations can request standard and enhanced criminal record
              checks for eligible positions in England and Wales.
            </p>
            <button className="bg-red-500 text-xl mt-16 p-3 px-4 rounded-full text-white">
              Register your organisation online now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
