import React from "react";

const Button = props => {
  return (
    <button
      className="px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded hover:bg-blue-700"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  )
}

export default Button;
