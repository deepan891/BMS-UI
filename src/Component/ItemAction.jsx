import axios from "axios";
import { useEffect, useState } from "react";
import {
  IoKeyOutline,
  IoShieldCheckmarkOutline,
  IoPeopleOutline,
} from "react-icons/io5";

function ItemAction() {
  const [count, setCount] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await axios.get("http://localhost:8000/dashboard/action");
      setCount(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-h-[500px] bg-blue-500 rounded-md p-6 text-white shadow-md space-y-4 overflow-y-scroll">
      <h2 className="text-lg font-bold mb-4">Items Requiring Action</h2>
      <div className="flex justify-between items-center bg-blue-400 p-4 rounded-lg mb-2">
        <div className="flex items-center">
          <IoKeyOutline className="text-2xl mr-2" />
          <span>Overdue cases</span>
        </div>
        <span className="text-2xl font-bold">{count.caseCount}</span>
      </div>
      <div className="flex justify-between items-center bg-blue-400 p-4 rounded-lg mb-2">
        <div className="flex items-center">
          <IoShieldCheckmarkOutline className="text-2xl mr-2" />
          <span>Contractor Insurance Expiring</span>
        </div>
        <span className="text-2xl font-bold">{count.contractorInsuranceCount}</span>
      </div>
      <div className="flex justify-between items-center bg-blue-400 p-4 rounded-lg mb-2">
        <div className="flex items-center">
          <IoPeopleOutline className="text-2xl mr-2" />
          <span>Resident Information Update Requests</span>
        </div>
        <span className="text-2xl font-bold">{count.notRegisteredResidence}</span>
      </div>
      {/* <div className="flex justify-between items-center bg-blue-400 p-4 rounded-lg">
        <div className="flex items-center">
          <IoListOutline className="text-2xl mr-2" />
          <span>Overdue Maintenance Schedules</span>
        </div>
        <span className="text-2xl font-bold">343</span>
      </div> */}
    </div>
  );
}

export default ItemAction;
