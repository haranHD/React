import { useState } from "react"

function Fav(){


    const [color , setColor] = useState('White');
    return <>
        <h1>My Fav color is {color}</h1>
        <button onClick={() => setColor('Black')}>CHANGE</button>
    </>
}

export default Fav;