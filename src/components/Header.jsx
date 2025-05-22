import React, { useState } from "react";

const Header = () => {


//veriable eke state eka wens krnn 
let [count,setCount] =useState(0);

function countplus(){
  setCount(count++)
  console.log(count)
}

  return (
    <>
      <span>
        <h1>React with Vite</h1>
        <h2>{count}</h2><br />
        <button onClick={countplus}>click</button>
      </span>
    </>
  );
};

export default Header;
