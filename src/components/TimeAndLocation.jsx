import React from "react";

const TimeAndLocation = ( { weather: {formattedLocalTime, name, country },}) => {
  return (
    <div className="mx-2">
      <div className="flex items-center justify-center  md:my-6">
        <p className="text-xl font-extralight">
        
          {formattedLocalTime}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className=" text-3xl font-medium">
         
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
