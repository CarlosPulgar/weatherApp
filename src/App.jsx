import React, { useEffect, useState } from "react";
import { WiDayFog } from "react-icons/wi";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TimeAndDetalis from "./components/TimeAndDetalis";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function capitalizeFirstLetter(string){
  return string.charAt(0).toUpperCase()+string.slice(1);
}

const App = () => {
  const [query, setQuery] = useState({ q: "coquimbo" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const message = query.q ? query.q : 'current location';
    toast.info(`estos son los datos del clima para ${capitalizeFirstLetter(message)}`)
    await getFormattedWeatherData({ ...query, units }).then((data) =>{
      setWeather(data);
    });
    
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if(!weather) return 'from-cyan-600 to-blue-700';
    const threshold = units === 'metric' ? 20 : 60;
    if(weather.temp <= threshold) return 'from-cyan-600 to-blue-700';
    return 'from-yellow-600 to-orange-700'
  }

  return (
    <div className={`max-w-screen md:max-w-screen md:mt-4 md:py-5 md:px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}  `} >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLocation weather={weather}/>
          <TimeAndDetalis weather={weather} units={units} />
          <Forecast title='Pronóstico cada 3 horas' data={weather.hourly} />
          <Forecast title='Pronóstico cada día' data={weather.daily} />
        </>
      )}

      <ToastContainer autoClose={1000} hideProgressBar={true} theme='colored'/>
    </div>
  );
};

export default App;