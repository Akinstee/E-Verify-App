import { IoEyeSharp } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
const NotificationCard = () => {
  const notifications = [
    {
      icon: <IoEyeSharp />,
      message: '1 Person viewed your profile and details',
      seen: true
    },
    {
      icon: <FaRegFileAlt />,
      message: 'Your review to James Johnson work experience has been approved and is available for viewing',
      seen: true
    },
    {
      icon: <FaRegFileAlt />,
      message: 'Your review to James Johnson work experience has been approved and is available for viewing. Please we will get back to you within 3-7 working days. Thank you',
      seen: false
    },
    {
      icon: <FaUserGroup />,
      message: 'You have added 1 new worker to your company. Check company profile to see the changes',
      seen: true
    },
    {
      icon: <IoEyeSharp />,
      message: 'James John has requested or a Resignation',
      seen: false
    },
    {
      icon: <IoEyeSharp />,
      message: '1 Person viewed your profile and details',
      seen: true
    },
    {
      icon: <FaRegFileAlt />,
      message: 'Your review to James Johnson work experience has been approved and is available for viewing',
      seen: true
    },
    {
      icon: <FaRegFileAlt />,
      message: 'Your review to James Johnson work experience has been approved and is available for viewing. Please we will get back to you within 3-7 working days. Thank you',
      seen: false
    },
    {
      icon: <FaUserGroup />,
      message: 'You have added 1 new worker to your company. Check company profile to see the changes',
      seen: true
    },
    {
      icon: <IoEyeSharp />,
      message: 'James John has requested or a Resignation',
      seen: false
    },
  ]
  return (
    <div className="absolute inter z-10 bg-white shadow-md top-10 right-0 w-[25rem] border">
      <h1 className="relative pl-6 py-4 text-xl w-fit">
        Notification{" "}
        <div className="w-3 absolute top-4 rounded-full -right-4 h-3 bg-red-400"></div>
      </h1>

      <div className=" flex flex-col">
        {
          notifications.map((noti, i) => <div key={i} className={`${noti.seen ? '' : 'bg-gray-100'} flex py-2 px-6 gap-2`}>
            {noti.icon}

            <p className="text-[13px] font-[500] flex-1">{noti.message}</p>
          </div>)
        }
      </div>
    </div>
  );
};

export default NotificationCard;
