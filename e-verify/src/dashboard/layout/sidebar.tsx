import { BsFillGrid1X2Fill } from "react-icons/bs";
import { IoIosPerson } from "react-icons/io";
import { LuCalendarPlus } from "react-icons/lu";
import { PiCalendarBold } from "react-icons/pi";
import { BsArrowBarDown } from "react-icons/bs";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const links = [
    {
      icon: <BsFillGrid1X2Fill />,
      title: "Dashboard",
      link: '/dashboard'
    },
    {
      icon: <IoIosPerson />,
      title: "Review",
      link: '/dashboard-comment'
    },
    {
      icon: <LuCalendarPlus />,
      title: "History Log",
      link: '/dashboard-log'
    },
    {
      icon: <PiCalendarBold />,
      title: "Last most stat",
      link: '/dashboard-stat'
    },
  ];

  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className={`h-[100vh] inter bg-red-500 fixed left-0 top-0 ${showMenu ? 'w-56 px-4' : 'w-16 px-1'} inter flex flex-col justify-between py-12 text-white`}>
      <div className={`flex gap-3 items-center ${!showMenu && 'justify-center'}`} onClick={() => setShowMenu(!showMenu)}>
        <BsArrowBarDown className="rotate-90 text-2xl" />
        {showMenu && ' back'}
      </div>

      <div>
        {links.map((link, i) => (
          <div
            key={i}
            className={`flex gap-4 items-center py-2 ${showMenu ? 'py-4 lg:pl-6 px-4' : 'py-4 justify-center'} rounded-md ${
              pathname === link.link ? "bg-white/60" : ""
            }`}
          >
            {link.icon}
            <Link to={link.link} className={`${showMenu ? 'flex' : 'hidden'}`}>{link.title}</Link>
          </div>
        ))}
      </div>

      <div />
      <div className={`flex gap-3 items-center border-t-2 pt-8 ${!showMenu && 'justify-center'}`}>
        <BsArrowBarDown className={`text-2xl -rotate-90 items-center `} />
        {showMenu && ' Log out'}
      </div>

      <div />
    </div>
  );
};

export default Sidebar;
