import React, { useEffect, useState } from "react";
import { CiCloudMoon } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import CasesGraph from "./CasesGraph";

const API_KEY = "585655bdab539489240aed378f6a6cff";
const city = "Coimbatore"
const Weather = () => {
  const [temperature, setTemperature] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather()
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
        { headers: { accept: 'application/json' } }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setTemperature(Math.round(data.main.temp - 273.15));
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };


    return (
    <div className="space-y-3">
      <div className="h-[48%] flex justify-between gap-2 rounded-md">
        <div className="w-[48%] flex flex-col justify-center items-center rounded-md bg-[#777DF5]">
          <CiCloudMoon className="text-white" size={70} />
          <div className="font-semibold text-lg text-white">{temperature} C</div>
          <div className="font-semibold text-lg text-white">Mostly clear</div>
        </div>
        <div className="w-[48%] flex flex-col justify-center items-center rounded-md bg-[#FD7E7E]">
          <MdOutlinePhoneInTalk className="text-white" size={65} />
          <div className="font-semibold text-lg text-white">Important</div>
          <div className="font-semibold text-lg text-white">Number</div>
        </div>
      </div>
      <div className="h-[48%] rounded-md p-2 bg-white">
      <CasesGraph />
      </div>
    </div>
  );
};

export default Weather;
