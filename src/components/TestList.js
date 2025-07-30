import { useState } from "react"

function List(){

    const [list , setList] = useState([]);
    const [count , setCount] = useState(1);

    function addItem(){
        const itemName = 'List ' + count;
        setList((prev) => { return [...prev, itemName] })
        setCount((prev) => {return prev + 1})
    }

    return <>
        <h1>New List</h1>
        <button onClick={addItem}> ADD LIST </button>
        <ul>
            {
                list.map((val , index) => <li key = {index}>{val}</li>)
            }
        </ul>
    </>
}
export default List;