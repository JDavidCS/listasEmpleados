import React, { useContext } from 'react';
import { AppContext } from './APIContext/Provider';

// registros de la tabla
function Employee({data}){

    const 
    {
        setEdit, setName, setLastName, setIdToEdit, setVisible, setStatus, setTime
    } 
    = useContext(AppContext);
    
    // Cambia el estado las variables para: Desplegar formulario y mostrar los datos el registro a editar
    const editEmployee = () =>{
        setEdit(true);
        setVisible(true);
        setName(data.name);
        setLastName(data.lastName);
        setIdToEdit(data.id);
        setStatus(data.status);
        setTime(data.Rdate)
    }

    return(
        <div className='row'>
            <p className='EmplName'>{data.lastName + " " +data.name}</p>
            <p className='Status' status={data.status}>{data.status}</p>
            <p className='date'>{data.Rdate}</p>
            <div className='row-edit' onClick={editEmployee}>
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg>
            </div>
        </div>
    );
}

export default Employee;