import { CgProfile } from 'react-icons/cg';
import { CiCircleList } from 'react-icons/ci';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaBoxArchive, FaChevronDown } from "react-icons/fa6";
import { FiTool } from 'react-icons/fi';
import { GrDatabase, GrUserWorker } from 'react-icons/gr';
import { IoKeySharp } from 'react-icons/io5';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiBuildingsLight } from 'react-icons/pi';


const Sidebar = () => {
    return (
        <div className="w-[18%] bg-gray-100">
            {/* Top section% */}
            <div className="m-2 rounded-lg shadow-lg bg-white">
                <img
                    src="https://cdn.britannica.com/43/134743-050-D0625A44/train-first-Dubai-emirate-rapid-transit-line-kind-Sept-10-2009.jpg"
                    alt="Building"
                    className="rounded-tl-lg rounded-tr-lg  h-[100px] w-full"
                />
                <div className="mt-4">
                    <div className='flex  justify-between items-center px-3 pb-1 border-b-2'>
                        <p className='text-xl font-semibold'>Cedu Tower</p>
                        <FaChevronDown size={15} />
                    </div>
                    <div className='px-3 py-2'>
                        <div className='text-gray-600 text-sm'>200 George Street <br />
                            Sydney NSW 2000
                        </div>
                    </div>
                    <div></div>
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
    );
};

export default Sidebar;
