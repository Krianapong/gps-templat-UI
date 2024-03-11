    // Footer.js
    import React from "react";

    const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-end">
            <div className="text-right lg:order-2">
            <img
                className="max-h-12 w-auto object-contain mb-2 lg:order-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                width={79}
                height={24}
            />
            <p className="text-sm">&copy; ME Group Enterprise Co,. Ltd.</p>
            </div>
        </div>
        </footer>
    );
    };

    export default Footer;
