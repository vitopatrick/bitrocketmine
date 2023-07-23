import React from "react";

interface AlertInterface {
  message: String;
}

const Alert = ({ message }: AlertInterface) => {
  return (
    <div
      className="flex p-4 mb-4 mx-4 text-sm text-white border border-teal-800 capitalize rounded-lg bg-teal-400/20 overflow-hidden "
      role="alert"
    >
      <span className="sr-only">Info</span>
      <div className="font-semibold">{message}</div>
    </div>
  );
};

export default Alert;
