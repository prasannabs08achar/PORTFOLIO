import React from 'react';

const TechStackCard = ({ icon, name }) => {
    return (
        <div className="bg-[#131c31] w-full max-w-xs h-44 sm:h-48 rounded-xl flex flex-col items-center justify-center p-4 sm:p-6 hover:scale-105 transition-transform shadow-md">
            <img
                src={icon}
                alt={name}
                className="w-20 sm:w-24 h-20 sm:h-24 object-contain mb-3 sm:mb-4"
            />
            <p className="text-white text-center font-semibold text-sm sm:text-base">{name}</p>
        </div>
    );
};

export default TechStackCard;
