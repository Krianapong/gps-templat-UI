
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-2">
      <div className="container flex flex-col lg:flex-row items-center justify-end">
        <div>
          <img
            className="max-h-12 w-auto object-contain "
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width={79}
            height={24}
          />
          <p className="text-xs">&copy; ME Group Enterprise Co,. Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
