
const AfterInterview = () => {
  return (
    <div className="max-w-[90rem] px-[1rem] inter py-4 lg:py-20 mx-auto inter flex flex-col items-center justify-center">
        <div className='flex flex-col gap-4 items-center justify-center'>
        <img src='https://hips.hearstapps.com/hmg-prod/images/gettyimages-1127409044.jpg?crop=1xw:1.0xh;center,top&resize=640:*' className='w-64 h-64 rounded-full'/>
        <h1 className='mt-3 text-xl font-[500]'>James Johnson</h1>
        </div>

        <p className='mt-16 text-center text-md'>To accept james john application. You have to set a date and time for official resumption. This would be <br /> displayed in your letter sent to James john.</p>

        <div className='flex mt-8 items-center max-w-[35rem] mx-auto flex-col lg:flex-row gap-4'>
        <div className='lg:w-6/12 flex items-center gap-3'>
                <p>Date</p>
                <input className=' border flex-1 py-2 rounded-md px-4' placeholder='YYYY'/>
            </div>


            <div className='lg:w-6/12 flex items-center gap-3'>
                <p>Time</p>
                <input className=' border flex-1 py-2 rounded-md px-4' placeholder='00:00'/>
            </div>
        </div>

        <textarea placeholder='Add note' className='mt-24 max-w-[70rem] ml- bg-gray-100 border h-[15rem] p-6 rounded-md w-[100%]'/>
        <button className='mt-12 bg-red-400 text-white px-12 py-2 rounded-md'>Send Employment Letter</button>
    </div>
  )
}

export default AfterInterview