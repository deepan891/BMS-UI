import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiCircleList } from "react-icons/ci";
import {
  FaCalendarAlt,
  FaChevronDown,
  FaBars,
  FaChevronUp,
} from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { FiTool } from "react-icons/fi";
import { GrDatabase, GrUserWorker } from "react-icons/gr";
import { IoKeySharp } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiBuildingsLight } from "react-icons/pi";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:static">
      {/* Burger Icon for mobile */}
      <div className="md:hidden fixed top-6 left-4 z-10">
        <FaBars size={24} onClick={toggleSidebar} className="cursor-pointer" />
      </div>

      {/* Sidebar */}
      <div
        className={`absolute md:fixed inset-y-0 left-0 z-10 bg-gray-100 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative transition-transform duration-300 ease-in-out w-64`}
      >
        {/* Top section */}
        <div className="m-2 rounded-lg shadow-lg bg-white">
          <img
            src="https://cdn.britannica.com/43/134743-050-D0625A44/train-first-Dubai-emirate-rapid-transit-line-kind-Sept-10-2009.jpg"
            alt="Building"
            className="rounded-tl-lg rounded-tr-lg h-[150px] w-full"
          />
          <div className="mt-4">
            <div
              className="flex justify-between items-center px-3 pb-1 border-b-2 cursor-pointer"
              onClick={toggleOpen}
            >
              <p className="text-xl font-semibold">Cedu Tower</p>
              {isOpen ? <FaChevronUp size={15} /> : <FaChevronDown size={15} />}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-3 py-2">
                <div className="text-gray-600 text-sm">
                  200 George Street <br />
                  Sydney NSW 2000
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu items */}
        <div className="mt-5">
          <ul className="space-y-3">
            <li className="flex items-center space-x-2 bg-gray-200 px-4 py-2 cursor-pointer border-l-4 border-violet-600">
              <MdOutlineSpaceDashboard />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 cursor-pointer">
              <FiTool />
              <span>Cases</span>
            </li>
            <li className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 cursor-pointer">
              <FiTool />
              <span>Work Orders Sent</span>
            </li>
            <li className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 cursor-pointer">
              <FaCalendarAlt />
              <span>Calendar</span>
            </li>
            <li className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 cursor-pointer">
              <CiCircleList />
              <span>Maintenance Schedule</span>
            </li>
            <li className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 cursor-pointer">
              <PiBuildingsLight />
              <span>Building</span>
            </li>
            <li className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 cursor-pointer">
              <CgProfile />
              <span>Residents</span>
            </li>
            <li className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 cursor-pointer">
              <IoKeySharp />
              <span>Keys</span>
            </li>
            <li className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 cursor-pointer">
              <FaBoxArchive />
              <span>Parcels</span>
            </li>
            <li className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 cursor-pointer">
              <GrUserWorker />
              <span>Contractors</span>
            </li>
            <li className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 cursor-pointer">
              <GrDatabase />
              <span>Cloudsense</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-0 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;

// import { CgProfile } from 'react-icons/cg';
// import { CiCircleList } from 'react-icons/ci';
// import { FaCalendarAlt } from 'react-icons/fa';
// import { FaBoxArchive, FaChevronDown } from "react-icons/fa6";
// import { FiTool } from 'react-icons/fi';
// import { GrDatabase, GrUserWorker } from 'react-icons/gr';
// import { IoKeySharp } from 'react-icons/io5';
// import { MdOutlineSpaceDashboard } from "react-icons/md";
// import { PiBuildingsLight } from 'react-icons/pi';

// const Sidebar = () => {
//     return (
//         <div className="w-[18%] bg-gray-100">
//             {/* Top section% */}
//             <div className="m-2 rounded-lg shadow-lg bg-white">
//                 <img
//                     src="https://cdn.britannica.com/43/134743-050-D0625A44/train-first-Dubai-emirate-rapid-transit-line-kind-Sept-10-2009.jpg"
//                     alt="Building"
//                     className="rounded-tl-lg rounded-tr-lg  h-[100px] w-full"
//                 />
//                 <div className="mt-4">
//                     <div className='flex  justify-between items-center px-3 pb-1 border-b-2'>
//                         <p className='text-xl font-semibold'>Cedu Tower</p>
//                         <FaChevronDown size={15} />
//                     </div>
//                     <div className='px-3 py-2'>
//                         <div className='text-gray-600 text-sm'>200 George Street <br />
//                             Sydney NSW 2000
//                         </div>
//                     </div>
//                     <div></div>
//                 </div>
//             </div>

//             {/* Menu items */}
//             <div className="mt-5">
//                 <ul className="space-y-3">
//                     <li className="flex items-center space-x-2 bg-gray-200 px-4 py-2 cursor-pointer border-l-4 border-violet-600">
//                         <MdOutlineSpaceDashboard />
//                         <span>Dashboard</span>
//                     </li>
//                     <li className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 cursor-pointer">
//                         <FiTool />
//                         <span>Cases</span>
//                     </li>
//                     <li className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 cursor-pointer">
//                         <FiTool />
//                         <span>Work Orders Sent</span>
//                     </li>
//                     <li className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 cursor-pointer">
//                         <FaCalendarAlt />
//                         <span>Calendar</span>
//                     </li>
//                     <li className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 cursor-pointer">
//                         <CiCircleList />
//                         <span>Maintenance Schedule</span>
//                     </li>
//                     <li className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 cursor-pointer">
//                         <PiBuildingsLight />
//                         <span>Building</span>
//                     </li>
//                     <li className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 cursor-pointer">
//                         <CgProfile />
//                         <span>Residents</span>
//                     </li>
//                     <li className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 cursor-pointer">
//                         <IoKeySharp />
//                         <span>Keys</span>
//                     </li>
//                     <li className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 cursor-pointer">
//                         <FaBoxArchive />

//                         <span>Parcels</span>
//                     </li>
//                     <li className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 cursor-pointer">
//                         <GrUserWorker />

//                         <span>Contractors</span>
//                     </li>
//                     <li className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 cursor-pointer">
//                     <GrDatabase />
//                     <span>Cloudsense</span>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;
