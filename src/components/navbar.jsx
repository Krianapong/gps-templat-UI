import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-primary p-20 py-3 bg-[#263242]">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-1/309236580_467119878788909_3610437146745676163_n.png?stp=dst-png_p480x480&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ns7wtTuOXVwAX-0yvGJ&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfC4M8PryMz9IjbK062uGBWaxmeRSSL9bpNEd8HhS51NKg&oe=65F3BAD6"
          className="h-10 w-auto mr-2"
          alt="GPS Device Manager"
        />
        <span className="font-semibold text-xl tracking-tight">
          GPS Device Manager
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <div>
          <button className="bg-white text-primary font-bold py-2 px-4 rounded inline-flex items-center rounded-[20px]">
            <svg
              className="w-4 h-4 mr-2"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              ></path>
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              ></path>
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              ></path>
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              ></path>
              <path fill="none" d="M0 0h48v48H0z"></path>
            </svg>

            <span className="text-sm/[16px]">Sign in with Google</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
