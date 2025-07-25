function Java(props){

    const {info} = props
    const {role , lvl} = info;
    const text = `Role ${role} and Level ${lvl}`;

    return (
        <h2>Java Developer {text}</h2>
    );
}

export default Java;