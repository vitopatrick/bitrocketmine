import React from "react";

interface AlertInterface {
  message: String;
}

const Alert = ({ message }: AlertInterface) => {
  return (
    <div
      className="flex p-4 mb-4 mx-4 text-sm  border border-indigo-800 capitalize rounded-lg bg-indigo-400/20 overflow-hidden "
      role="alert"
    >
      <span className="sr-only">Info</span>
      <div className="font-semibold">{message}</div>
    </div>
  );
};

export default Alert;
