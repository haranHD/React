import { useState } from "react"

function List(){

    const [list , setList] = useState(['Test1','Test2']);

    return <>
        <h1>New List</h1>
        <ul>
                {
                list.map((val , index) => <li key ={index}> {val}</li>)
                }
        </ul>
    </>
}
export default List;