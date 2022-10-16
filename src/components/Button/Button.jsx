import React from 'react'
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Button({btnText}) {

  return (
    <div className="mt-5">
            <Link to="/payment">
            <button type="submit" className="py-6 bg-[#df0707] w-[530px] text-white text-center rounded text-[25px] font-bold hover:bg-[#4fde12]">{btnText}</button>
            </Link>
        </div>
  )
}

export default Button
