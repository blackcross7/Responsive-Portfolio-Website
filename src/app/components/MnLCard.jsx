import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const MnLCard = ({ imgUrl, title, description, dropdownItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="h-52 md:h-72 rounded-t-xl relative group">
        <Image
          src={imgUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <button
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </button>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 text-center sm:text-center">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        {isDropdownOpen && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {dropdownItems.map((item, index) => (
              <Link href={item.url} key={index} legacyBehavior>
                <a className="relative w-full h-full overflow-hidden group">
                  <Image
                    src={item.cover}
                    alt={item.title}
                    layout="responsive"
                    width={100}
                    height={100}
                    className="rounded-lg transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-bold">
                    {item.title}
                  </span>
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MnLCard;
