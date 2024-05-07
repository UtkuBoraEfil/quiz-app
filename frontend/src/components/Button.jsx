import React from "react";

function Button(props){
    return(
        <button className="flex w-full bg-white mb-8 py-5 px-3 border-0 rounded-xl gap-6 shadow-sm">
            <img className=" w-4 h-4" src={"../assets/images/"+props.png+".png"} alt="" />
            <div className=" headingS">{props.content}</div>
        </button>

    )
}
export default Button;