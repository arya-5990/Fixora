import React from 'react';

const ServiceCard = ({ title, imageUrl }) => {
  return (
    <div className="border-[1px] border-black bg-white group hover:bg-black transition-colors duration-0 cursor-pointer flex flex-col h-full">
      <div className="aspect-[4/3] w-full border-b-[1px] border-black bg-grey relative overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover grayscale opacity-80" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs tracking-widest text-black/50">
            [IMAGE PLACEHOLDER]
          </div>
        )}
      </div>
      <div className="p-4 mt-auto">
        <h3 className="font-bold tracking-tighter text-black group-hover:text-white transition-colors duration-0">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ServiceCard;
