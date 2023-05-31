import React from "react";
const Input = (props) => {
    return( 
         <> 
        <input 
    value={props.val}
    onChange={props.onchange}
    placeholder='🗺️ Enter Location'
    type='text'/>
    <button className="btn" onClick={props.btn}>
    🔍
      </button>
      </>
    );
}
export default Input;