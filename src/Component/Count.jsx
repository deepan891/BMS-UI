import React, { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaChevronDown,
  FaSortDown,
  FaSortUp,
} from "react-icons/fa";
import { PiEqualsBold } from "react-icons/pi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import axios from "axios";

const Count = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [count, setcount] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await axios.get(`http://localhost:8000/dashboard`);
      setcount(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle the date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="grid grid-cols-[70%_30%] gap-2 py-5 my-2 ">
    
      <div className="flex gap-5">
        <div className="border-r-[1px] border-gray-300 pr-5">
          <div className="flex justify-between items-center gap-3">
            <div className="text-gray-500 font-medium text-sm">Residents</div>
            <PiEqualsBold size={10} className="text-orange-400" />
          </div>
          <div className="font-bold text-xl text-gray-700">{count.residenceCount}</div>
        </div>
        <div className="border-r-[1px] border-gray-300 pr-5">
          <div className="flex justify-between items-center gap-3">
            <div className="text-gray-500 font-medium text-sm">Assets</div>
            <FaSortUp size={10} className="text-green-500" />
          </div>
          <div className="font-bold text-xl text-gray-700">{count.assetsCount}</div>
        </div>
        <div className="border-r-[1px] border-gray-300 pr-5">
          <div className="flex justify-between items-center gap-3">
            <div className="text-gray-500 font-medium text-sm">Contractors</div>
            <FaSortUp size={10} className="text-green-500" />
          </div>
          <div className="font-bold text-xl text-gray-700">{count.contractorCount}</div>
        </div>
        <div className="border-r-[1px] border-gray-300 pr-5">
          <div className="flex justify-between items-center gap-3">
            <div className="text-gray-500 font-medium text-sm">
              Active Cases
            </div>
            <FaSortDown size={10} className="text-red-500" />
          </div>
          <div className="font-bold text-xl text-gray-700">{count.caseCount}</div>
        </div>
        <div className="border-r-[1px] pr-5">
          <div className="flex justify-between items-center gap-3">
            <div className="text-gray-500 font-medium text-sm">
              Work Orders Sent
            </div>
            <FaSortUp size={10} className="text-green-500" />
          </div>
          <div className="font-bold text-xl text-gray-700">{count.workOrdersCount}</div>
        </div>
      </div>
     
      <div className="flex justify-end items-center">
        <div className="flex items-center p-2 space-x-2 bg-white rounded-lg shadow-lg">
          <div className="text-blue-600">
            <FaCalendarAlt />
          </div>

          <div className="flex-grow">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="EEEE, MMM do yyyy"
              customInput={
                <p className="text-gray-900 font-semibold">
                  {format(selectedDate, "EEEE, MMM do yyyy")} 
                </p>
              }
            />
          </div>

          <div className="text-gray-500">
            <FaChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
