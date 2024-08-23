import React from "react";
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import '../index.css'


const TimeAndDetalis = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
  units,
}) => {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Sensación Térmica",
      value: `${feels_like.toFixed()}°`,
    },

    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humedad",
      value: `${humidity.toFixed()}%`,
    },

    {
      id: 3,
      Icon: FiWind,
      title: "Viento",
      value: `${speed.toFixed()} ${units === "metric" ? "km/h" : "ml/h"}`,
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Amanecer",
      value: sunrise,
    },

    {
      id: 2,
      Icon: GiSunset,
      title: "Atardecer",
      value: sunset,
    },

    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "Alta",
      value: `${temp_max.toFixed()} °`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Baja",
      value: `${temp_min.toFixed()} °`,
    },
  ];

  return (
    <div className="glassCard ">
      <div className="flex items-center md:shrink-0 justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-around md:py-3 ">
        <img src={icon} alt="" />
        <p className="text-5xl">{`${temp.toFixed()}`}</p>
        <div className="flex flex-col space-y-3 items-start">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div
              className="flex font-light text-sm items-center justify-center"
              key={id}
            >
              <Icon size={20} className="mr-1" />
              {`${title}:`}
              <span className="font-medium ml-1"> {value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex items-center justify-center md:space-x-10 text-sm py-3 ">
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex  items-center">
            <Icon size={30} />
            <p className="font-light md:ml-1">
              {`${title}:`}
              <span className="font-medium ml-1"> {value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeAndDetalis;
