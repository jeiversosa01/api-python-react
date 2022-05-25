import React from "react";

const Nombre = (props) => {

    const {firstName, lastName} = props.actor;

    return (
        <h2 className="text-center">
            <p className="text-info">{firstName}  {lastName}</p>
        </h2>
    );
}

export default Nombre;