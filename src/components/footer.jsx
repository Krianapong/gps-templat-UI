import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#263242] text-gray-300 py-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-end lg:text-right">
        <div>
          <img
            className="max-h-12 w-auto object-contain mb-2"
            src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-1/309236580_467119878788909_3610437146745676163_n.png?stp=dst-png_p480x480&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ns7wtTuOXVwAX-0yvGJ&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfC4M8PryMz9IjbK062uGBWaxmeRSSL9bpNEd8HhS51NKg&oe=65F3BAD6"
            alt="Reform"
            width={79}
            height={24}
          />
          <p className="text-sm">
            Copyright &copy; 2024 ME Group Enterprise Co,. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
