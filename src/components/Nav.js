import React from 'react';
import InsertButton from './InsertButton';
import SearchBar from './SearchBar';

function Nav(){
    return(
        <div className='navContent'>
            {/* Barra de Busqueda, aún no implementada */}
            <SearchBar/>
            {/* Botón para desplegar el formulario */}
            <InsertButton/>
        </div>
    );
}

export default Nav;