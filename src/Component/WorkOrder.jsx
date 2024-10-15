import axios from "axios";
import { useEffect, useState } from "react";
import icon from "../assets/icon.png";
const WorkOrder = () => {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await axios.get(
        `http://localhost:8000/dashboard/documents?name=work`
      );
      setReportData(response.data?.data?.documentData);
    } catch (error) {
      console.log(error);
      setReportData();
    }
  };

  return (
    <div className="max-h-[500px] p-6 bg-white rounded-md shadow-md space-y-4 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4 underline">Lasted Work Orders Send</h2>
      <ul className="space-y-2">
        {reportData?.map((report) => (
          <li
            key={report.id}
            className="flex items-center justify-between p-2 px-4 rounded-sm hover:bg-[#3B82F6] hover:text-white group"
          >
            <div className="flex justify-evenly items-center gap-5">
              <div>
                <img src={icon} width={20} className="inline-block" />
              </div>
              <div>
                <p className="text-[16px] font-semibold">{`Report ${report?.name}`}</p>
                <p className="text-xs group-hover:text-white text-gray-500">{`Created ${report?.create}`}</p>
              </div>
            </div>
            {/* <div className="hover:cursor-pointer">
              <p className="text-sm font-semibold group-hover:text-white text-blue-500">
                {report?.id}
              </p>
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkOrder;
