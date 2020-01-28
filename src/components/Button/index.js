import React from "react";

const Button = props => {
  const type = {
    primary: "bg-blue-600 hover:bg-blue-800 text-white",
    secondary:"bg-gray-600 hover:bg-gray-800 text-white",
    danger: "bg-red-600 hover:bg-red-800 text-white",
    success: "bg-green-600 hover:bg-green-800 text-white",
    warning: "bg-yellow-600 hover:bg-yellow-800 text-white",
    info: "bg-teal-600 hover:bg-teal-800 text-white",
    light: "bg-white-600 hover:bg-gray-100 text-black border border-black",
    dark: "bg-black hover:bg-gray-900 text-white",
  }
  return (
    <button
      className={`px-4 py-2 outline-none rounded ${type[props.type]}`}
      onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Button;
