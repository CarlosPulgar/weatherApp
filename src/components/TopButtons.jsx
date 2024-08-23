import React from "react";

const TopButtons = ({setQuery}) => {
  const cities = [
    {
      id: 1,
      name: "Arica",
    },
    {
      id: 2,
      name: "Coquimbo",
    },
    {
      id: 3,
      name: "Santiago",
    },

    {
      id: 4,
      name: "Concepcion",
    },

    {
      id: 5,
      name: "Valdivia",
    },
  ];
  return (
    <div className="flex flex-wrap items-center justify-evenly md:justify-around md:mb-5  ">
      {cities.map((city) => (
        <button 
        key={city.id} 
        className="  text-lg font-medium hover:bg-slate-300/20 hover:rounded-lg px-3 py-2"
        onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
