import React from 'react';

class Navbar extends React.Component {

    // Método react para guardar los valores del input en una variable
    busquedaRef = React.createRef();

    // Al presionar submit toma los valores del input y los envía al App.js
    obtenerDatos = (e) => {

        e.preventDefault();

        // Toma el valor del input
        const numero = this.busquedaRef.current.value;

        // Lo enviámos al componente principal App.js
        if (numero === '') {return null}
        this.props.datosBusqueda(numero); 
    }

    // Formulario de busqueda
    render(){
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><h2 class="text-light">API REST CON PYTHON Y REACT</h2></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarColor01">
                        <ul class="navbar-nav me-auto"></ul>
                        <form class="d-flex" onSubmit = {this.obtenerDatos}>
                            <input ref = {this.busquedaRef} type="number" min="1" max="200" class="form-control me-sm-2" placeholder="ID"/>
                            <button class="btn btn-success my-2 my-sm-0" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;