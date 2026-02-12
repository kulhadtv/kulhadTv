import React from "react";

const CardSlider = ({ title, data }) => {
  return (
    <div className="mb-8">
      <h2 className="text-white text-xl font-semibold mb-4 px-4">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] h-[190px] rounded-xl overflow-hidden cursor-pointer flex-shrink-0"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
