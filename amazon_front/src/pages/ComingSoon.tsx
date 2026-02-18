import React from "react";
import Logo from "../assets/icons/rajbailogo.png";
const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
<div className="logo  text-center mb-5">
            
                <div className="text-dark"><img src={Logo} className="bg-transparent" width="200" alt="logo" /></div>
              
            </div>
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        🚀 Coming Soon
      </h1>

      <p className="text-lg text-gray-600 mb-20">
        Our website is under construction. We’ll launch very soon!
      </p>

      <div className="bg-white shadow-md rounded-xl px-6 pt-3">
        <p className="text-gray-700 font-medium px-4">
          Stay tuned for updates ✨
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
