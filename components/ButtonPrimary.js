import React from "react";

const ButtonPrimary = ({ children }) => {
  return (
    <button className="px-6 py-3 text-white bg-orange-500 rounded-lg font-medium hover:bg-orange-600 transition-all">
      {children}
    </button>
  );
};

export default ButtonPrimary;
