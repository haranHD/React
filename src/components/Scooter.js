import { useState } from "react";

function Scooter(){

    // const [color , setColor] = useState('Blue');
    // const [brand , setBrand] = useState('Honda');
    // const [model , setModel] = useState('Activa 5g');

    const [scooter , setScooter] = useState(
        {
            color : "Black",
            brand : "TVs",
            model : "6G"
        }
    );

    function updateBrand(){
        return setScooter(prev => {
            return {...prev , brand : "Honda"}
        });   
    }

    return <>
        <h1>My Scooter</h1>
        <p>Color : {scooter.color}</p>
        <p>Brand : {scooter.brand}</p>
        <p>Model : {scooter.model}</p>
        <button onClick={updateBrand}>Change Brand</button>
    </>
}
export default Scooter;