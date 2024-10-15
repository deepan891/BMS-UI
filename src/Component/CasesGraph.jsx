import React, { useEffect, useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import axios from "axios";

const CasesGraph = () => {
  const [count, setCount] = useState({});
  const [isDataEmpty, setIsDataEmpty] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await axios.get("http://localhost:8000/dashboard");
      setCount(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const staticData = [
    {
      id: "Residents",
      label: "Residents",
      value: count.residenceCount || 0,
    },
    {
      id: "Assets",
      label: "Assets",
      value: count.assetsCount || 0,
    },
    {
      id: "Contractors",
      label: "Contractors",
      value: count.contractorCount || 0,
    },
    {
      id: "ActiveCases",
      label: "ActiveCases",
      value: count.caseCount || 0,
    },
    {
      id: "Workordersend",
      label: "Workordersend",
      value: count.workOrdersCount || 0,
    },
  ];

  useEffect(() => {
    setIsDataEmpty(staticData.every(item => item.value === 0));
  }, [count]);

  const EmptyChart = () => (
    <div className="flex items-center justify-center h-full w-full">
      <p className="text-gray-500">No data available</p>
    </div>
  );

  return (
    <div className="relative h-40 w-full">
      {isDataEmpty ? (
        <EmptyChart />
      ) : (
        <ResponsivePie
          data={staticData}
          margin={{ top: 20, right: 15, bottom: 20, left: 40 }}
          innerRadius={0.5}
          cornerRadius={1}
          colors={{ scheme: "nivo" }}
          borderWidth={0}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        />
      )}
    </div>
  );
};

export default CasesGraph;
