
const RequestGurantorOtp = () => {
  return (
    <div className="container mx-auto my-[4rem] px-[1rem]">
      <h1 className="text-xl">Request Gurantor</h1>

      <div className="mt-[2rem] max-w-[60rem] min-h-[30rem] border rounded-xl border-green-600 py-[1rem] p-[2rem]">
        <h1 className='mt-12 text-center text-gray-500'>Enter 4 digits code revealed from the gurantor</h1>

        <div className='mt-[2rem] flex gap-4 items-center justify-center'>
            {[1, 2, 3, 4].map((i) => <div key={i}>
                <input className='border w-12 h-12 rounded-md'/>
            </div>)}
        </div>

        <h1 className='text-center text-gray-400 text-[13px] mt-6'>The code is only valid for a total of 15 mins</h1>

        <div className='flex justify-end mt-32'>
            <button className='bg-red-400 text-white px-8 py-2 rounded-md'>
                Save
            </button>
        </div>
      </div>
    </div>
  )
}

export default RequestGurantorOtp;