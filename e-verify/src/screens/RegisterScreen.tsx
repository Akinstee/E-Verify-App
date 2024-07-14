import RegisterationCard from "../components/RegisterationCard"
import { Link } from "react-router-dom"
const RegisterScreen = () => {
    return (
        <div className="w-[100vw] h-[100vh] px-[1rem] lg:px-0 inter container mx-auto flex flex-row items-center inter justify-center max-w-[100vw] overflow-x-hidden">
            <RegisterationCard>
                <div className="lg:w-6/12 lg:px-12 z-10 flex flex-col justify-center items-start h-[100vh]">
                    <h1 className="text-5xl text-slate-600 lg:min-w-[40rem] xl:text-7xl leading-[4rem] lg:leading-[5rem] font-[500]">Are you registering <br className="hidden lg:flex"/> as a <span className="text-red-500 font-[600]">Worker</span> or as a <br className="hidden lg:flex"/> <span className="text-yellow-400 font-[600]">Company</span></h1>
                    <Link to="/WorkerSignUp" className="border-2 text-xl text-[#2917FC] font-[500] mt-20 w-48 border-[#2917FC] px-8 py-3 rounded-xl">Worker</Link>
                    <Link to="/register/company" className="border-2 text-xl text-[#2917FC] font-[500] w-48 mt-5 border-[#2917FC] px-8 py-3 rounded-xl">Company</Link>
                </div>
            </RegisterationCard>
        </div>
    )
}

export default RegisterScreen