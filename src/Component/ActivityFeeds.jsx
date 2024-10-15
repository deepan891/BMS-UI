import { useState } from "react";

function ActivityFeeds() {
  const [data, setdata] = useState([
    {
      date: "04/10/2018",
      user: "System Supporter",
      record: [
        {
          time: "15:10 am",
          action: "Duplicate a case to building Cebu Towers",
        },
      ],
    },
    {
      date: "03/10/2018",
      user: "Sam Khaled",
      record: [
        {
          time: "18:35 am",
          action: "Duplicate a case to building Cebu Towers",
        },
        { time: "16:20 am", action: "Duplicate a case to building Epic" },
        { time: "16:10 am", action: "Duplicate a case to building High" },
      ],
    },
    {
      date: "04/10/2018",
      user: "System Supporter",
      record: [
        {
          time: "15:10 am",
          action: "Duplicate a case to building Cebu Towers",
        },
      ],
    },
    {
      date: "04/10/2018",
      user: "System Supporter",
      record: [
        {
          time: "15:10 am",
          action: "Duplicate a case to building Cebu Towers",
        },
      ],
    },
    {
      date: "04/10/2018",
      user: "System Supporter",
      record: [
        {
          time: "15:10 am",
          action: "Duplicate a case to building Cebu Towers",
        },
      ],
    },
  ]);

  return (
    <div className="max-h-[500px] p-6 bg-white rounded-md shadow-md space-y-4 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4 underline">Activity Feed</h2>
      <div className="space-y-4">
        {data.map(({ date, user, record }) => (
          <div key={`${date}-${user}`} className="">
            <div className="font-bold text-gray-700 text-md mb-2">
              {date} - {user}
            </div>
            <div className="space-y-2 text-sm font-medium text-gray-400 pl-2">
              {record.map(({ time, action }, index) => (
                <div key={`${date}-${user}-${index}`} className="flex gap-3">
                  <div className="">{time}</div>
                  <div>{action}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeeds;
