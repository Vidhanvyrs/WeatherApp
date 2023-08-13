import React from "react";
const Input = (props) => {
    return( 
         <> 
        <input 
    value={props.val}
    onChange={props.onchange}
    placeholder='🗺️ Enter Location'
    type='text'
    onKeyDown={props.btn2}/>
    <button className="btn" onClick={props.btn}>
    🔍
      </button>
      </>
    );
}
export default Input;