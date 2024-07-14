const RegisterationCard = ({ children }: any) => {
  return (
    <div className="w-[100vw] h-[100vh] lg:pl-[7.5%] flex flex-row items-center inter justify-center max-w-[100vw] overflow-x-hidden">
      {children}

      <div className="lg:w-6/12 relative hidden md:flex z-10 flex-col items-center justify-center h-[100vh]">
        <img
          src="/svg/vector3.svg"
          className="object-contain absolute top-[1.5%] w-[12.5rem] h-[12.5rem] right-[25%]"
        />
        <img
          src="/svg/vector1.svg"
          className="object-contain w-[50rem] h-[45rem] ml-auto"
        />
        <img
          src="/svg/vector2.svg"
          className="object-contain w-[15rem] h-[20rem] absolute -right-10 bottom-[5%]"
        />
        <img
          src="/svg/vector3.svg"
          className="object-contain absolute bottom-[10%] w-[12.5rem] h-[12.5rem] right-[75%]  rotate-180"
        />
      </div>

      <img
        src="/svg/loginBg.svg"
        className="absolute w-[100vw] h-[100vh] top-0 left-0 object-cover z-0"
      />
    </div>
  );
};

export default RegisterationCard;
