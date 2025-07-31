import { useEffect, useState } from "react";

function Timer(){
    const [count , setCount] = useState (0);
    useEffect(() => {
        console.log("rendered!");
        check()  // We should use the useEffect like this only not to console it.
    },[count]) // this [count] only help to identify the side effect that happened the page 

    function render(){
        setCount((prev) => {return prev+1})
    }

    function check() { 
        if(count > 10 ) setCount(1); // This for to set the count again 1 after render count reach 10
    }
    
    return <>
        <h1>I'm {count} rendered!</h1>
        <button onClick={render}>render</button>
    </>
}

export default Timer;