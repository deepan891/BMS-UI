import axios from "axios";
import { useEffect, useState } from "react";
import { TfiDownload } from "react-icons/tfi";
import icon from "../assets/icon.png";

const Report = () => {
  // let icon = "📄";
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/documents?name=management`
      );
      setReportData(response.data?.data?.documentData);
    } catch (error) {
      console.log(error);
      setReportData();
    }
  };
  return (
    <div className="max-h-[500px] p-6 bg-white rounded-md shadow-md space-y-4 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4 underline">
        Management Reports Generated
      </h2>
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
              <div className="space-y-1">
                <p className="text-md font-semibold">{`Report ${report?.name}`}</p>
                <p className="text-xs group-hover:text-white text-gray-500">{`Created ${report?.create}`}</p>
              </div>
            </div>
            <div className="hover:cursor-pointer">
              <a
                href={`${import.meta.env.VITE_BACKEND_URL}/download/${report?.location
                  ?.split("/")
                  .pop()}`}
                download
              >
                <TfiDownload className="hover:text-red-500 text-xl" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Report;
