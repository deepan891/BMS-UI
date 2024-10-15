import { useState } from "react";
import { BiPrinter } from "react-icons/bi";
import { FaAngleDown, FaRegUserCircle } from "react-icons/fa";
import { IoIosCalculator } from "react-icons/io";
import { LuMonitor } from "react-icons/lu";
import { RiTeamFill } from "react-icons/ri";
import { TfiAnnouncement } from "react-icons/tfi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const IconItem = ({ Icon }) => (
    <li className="bg-white rounded-full p-2 cursor-pointer hover:bg-[#777DF5] hover:scale-125 transition-transform duration-100">
      <Icon size={24} />
    </li>
  );

  return (
    <div className="mb-5 max-sm:fixed top-0 right-0 left-0 max-sm:bg-gray-50">
      <div className="flex justify-between items-center max-sm:mt-4">
        <div className="max-sm:hidden max-md:hidden">
          <div className="text-2xl font-bold">Overview</div>
          <div className="text-gray-400">Cedu Towers</div>
        </div>
        <div className="max-md:ml-[35%] md:hidden">
          {/* <div className="text-xl font-bold">Overview</div> */}
          <div className="text-xl text-gray-600">Cedu Towers</div>
        </div>

        {/* Desktop view */}
        <div className="hidden lg:flex justify-center gap-10 items-center w-[40%]">
          <ul className="flex items-center justify-around gap-3 p-3">
            <IconItem Icon={IoIosCalculator} />
            <IconItem Icon={RiTeamFill} />
            <IconItem Icon={TfiAnnouncement} />
            <IconItem Icon={BiPrinter} />
            <IconItem Icon={LuMonitor} />
          </ul>
          <div className="border-[2px] border-gray-300"></div>
          <div className="flex justify-between items-center gap-3">
            <FaRegUserCircle size={24} />
            <div>BMS</div>
            <FaAngleDown size={24} />
          </div>
        </div>

        {/* Mobile view */}
        <div className="lg:hidden relative">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
          >
            <FaRegUserCircle size={24} />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                <FaRegUserCircle size={22} className="inline-block mr-2" />
                BMS
              </div>
              <ul className="py-1">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <IoIosCalculator className="inline-block mr-2" /> Calculator
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <RiTeamFill className="inline-block mr-2" /> Team
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <TfiAnnouncement className="inline-block mr-2" />{" "}
                  Announcements
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <BiPrinter className="inline-block mr-2" /> Printer
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <LuMonitor className="inline-block mr-2" /> Monitor
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
