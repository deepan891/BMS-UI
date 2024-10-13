import axios from "axios";
import { useEffect, useState } from "react";

const WorkOrder = () => {
  let icon = "📄";
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
    <div className="max-h-[400px] p-6 bg-white rounded-md shadow-md space-y-4 overflow-y-scroll">
      <h2 className="text-xl font-semibold mb-4">Lasted Work Orders Send</h2>
      <ul>
        {reportData.map((report) => (
          <li
            key={report.id}
            className="flex items-center justify-between p-2 px-4 rounded-sm hover:bg-blue-400 hover:text-white group "
          >
            <div className="flex items-center">
              <span className="text-2xl mr-3">{icon}</span>
              <div>
                <p className="text-sm font-semibold">{`Report ${report.name}`}</p>
                <p className="text-xs text-gray-500">{`Created ${report.create}`}</p>
              </div>
            </div>
            <div className="hover:cursor-pointer">
              <p className="text-sm font-semibold group-hover:text-white text-blue-500">
                {report.id}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkOrder;
