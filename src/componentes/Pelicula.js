import React from "react";

const Pelicula = (props) => {

    const {title, description} = props.pelicula;    
    
    return (
        <tr className="table-info text-center">
            <td>#</td>
            <td>{title}</td>
            <td>{description}</td>
        </tr>
    );
}

export default Pelicula;