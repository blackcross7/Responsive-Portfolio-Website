import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <Image
          src="/images/Logo.jpeg"
          alt="Logo"
          width={50}
          height={50}
          className="transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
