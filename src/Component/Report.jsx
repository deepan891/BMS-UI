import axios from "axios";
import { useEffect, useState } from "react";
import { TfiDownload } from "react-icons/tfi";

const Report = () => {
  let icon = "📄";
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await axios.get(
        `http://localhost:8000/dashboard/documents?name=report`
      );
      setReportData(response.data?.data?.documentData);
    } catch (error) {
      console.log(error);
      setReportData();
    }
  };
  return (
    <div className="max-h-[400px] p-6 bg-white rounded-md shadow-md space-y-4 overflow-y-scroll">
      <h2 className="text-xl font-semibold mb-4">
        Management Reports Generated
      </h2>
      <ul className="space-y-2">
        {reportData.map((report) => (
          <li
            key={report.id}
            className="flex items-center justify-between p-2 hover:bg-blue-400 hover:text-white rounded-md"
          >
            <div className="flex items-center">
              <span className="text-2xl mr-3">{icon}</span>
              <div className="space-y-1">
                <p className="text-sm font-semibold">{`Report ${report.name}`}</p>
                <p className="text-xs text-gray-500">{`Created ${report.create}`}</p>
              </div>
            </div>
            <div className="hover:cursor-pointer">
              <a
                href={`http://localhost:8000/download/${report?.location
                  ?.split("/")
                  .pop()}`}
                download
              >
                <TfiDownload className="hover:text-blue-500 text-xl" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Report;
