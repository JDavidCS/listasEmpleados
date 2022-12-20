import React, { useState } from 'react';
import MyProvider from './APIContext/Provider';
import ListSection from './ListSection';
import Modal from './Modal';
import Nav from './Nav';
import './Styles/Model.css'

const Model = () =>{
    // useState, para recargar los registros con botón o despúes de una peticion
    const [reload, setReload] = useState(false);

    return(
        // MyProvider encierra a las etiquetas que van a acceder a las variables de API Context
        <MyProvider>
            <div className='Main'>
                <Nav/>
                <Modal reload={reload} setReload={setReload}/>
                <ListSection reload={reload} setReload={setReload}/>
            </div>
        </MyProvider>
    );

}

export default Model;