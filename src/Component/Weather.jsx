import { useEffect, useState } from "react";
import { CiCloudMoon } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import CasesGraph from "./CasesGraph";

const API_KEY = "585655bdab539489240aed378f6a6cff";
const city = "Coimbatore";

const Weather = () => {
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
        { headers: { accept: "application/json" } }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setTemperature(Math.round(data.main.temp - 273.15));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="space-y-3 h-[510px]">
      <div className="h-[48%] flex justify-between gap-2 rounded-md">
        <div className="w-[48%] flex flex-col justify-center items-center rounded-md bg-blue-500">
          <CiCloudMoon className="text-white" size={70} />
          <div className="font-semibold text-lg text-white">
            {temperature} C
          </div>
          <div className="font-semibold text-lg text-white">Mostly clear</div>
        </div>
        <div className="w-[48%] flex flex-col justify-center items-center rounded-md bg-[#FD7E7E]">
          <MdOutlinePhoneInTalk className="text-white" size={65} />
          <div className="font-semibold text-lg text-white">Important</div>
          <div className="font-semibold text-lg text-white">Number</div>
        </div>
      </div>
      <div className="h-[48%] rounded-md p-2 bg-white grid grid-cols-[25%_75%]">
        <div>
          <div className="text-xl font-semibold pt-5 pl-3">Case Graph</div>
        </div>
        <div className="flex justify-center items-center">
          <CasesGraph />
        </div>
      </div>
    </div>
  );
};

export default Weather;
