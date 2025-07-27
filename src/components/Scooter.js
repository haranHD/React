import { useState } from "react";

function Scooter(){

    const [color , setColor] = useState('Blue');
    const [brand , setBrand] = useState('Honda');
    const [model , setModel] = useState('Activa 5g');

    return <>
        <h1>My Scooter</h1>
        <p>Color : {color}</p>
        <p>Brand : {brand}</p>
        <p>Model : {model}</p>
    </>
}
export default Scooter;