import Java from "./Java";
function Name(){

    // const info = {
    //     role : 'admin',
    //     lvl : 5
    // }

    const infoObj = [
       {role : 'admin' , lvl :5}, 
       {role : 'user' , lvl :2},
       {role : 'admin' , lvl :10}
    ]

    // const info = {};
    return(
        <>
            <h1>HARI HARAN</h1>
            <h2>Students</h2>
            <ul >
                {infoObj.map((info) => <li> <Java info = {info}/></li>)}
            </ul>
        </>
    );
}

export default Name;