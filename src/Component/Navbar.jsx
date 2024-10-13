import { FaAngleDown, FaRegUserCircle } from "react-icons/fa";
import { IoIosCalculator } from "react-icons/io";
import { LuMonitor } from "react-icons/lu";
import { RiTeamFill } from "react-icons/ri";
import { TfiAnnouncement } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className="grid grid-cols-[60%_20%_20%]">
      <div>
        <div className="text-xl font-bold">Overview</div>
        <div className="text-gray-400">Cedu Towers</div>
      </div>
      
      <ul className="flex items-center justify-around border-r-[1px] border-gray-300 ">
        <li className="bg-white rounded-full p-2 cursor-pointer hover:bg-blue-500 hover:scale-125 transition-transform duration-100">
          <IoIosCalculator />
        </li>
        <li className="bg-white rounded-full p-2 cursor-pointer hover:bg-blue-500 hover:scale-125 transition-transform duration-100">
          <RiTeamFill />
        </li>
        <li className="bg-white rounded-full p-2 cursor-pointer hover:bg-blue-500 hover:scale-125 transition-transform duration-100">
          <TfiAnnouncement />
        </li>
        <li className="bg-white rounded-full p-2 cursor-pointer hover:bg-blue-500 hover:scale-125 transition-transform duration-100">
          <LuMonitor />
        </li>
        <li className="bg-white rounded-full p-2 cursor-pointer hover:bg-blue-500 hover:scale-125 transition-transform duration-100">
          <LuMonitor />
        </li>
      </ul>


      <div className="flex justify-around items-center px-2">
        <FaRegUserCircle />
        <div>Building Management</div>
        <FaAngleDown />
      </div>


    </div>
  );
};

export default Navbar;
