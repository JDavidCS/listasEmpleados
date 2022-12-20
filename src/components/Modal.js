import React, { useContext } from 'react';
import { AppContext } from './APIContext/Provider';
import './Styles/Modal.css'


function Modal({reload, setReload}){
    // Datos globales (Api Context) para mortrar las peticiones al servidor
    const 
    { 
        visible, edit, name, lastName, setName, setLastName, status, 
        setStatus, time, setTime, setEdit, idToEdit
    }
     = useContext(AppContext);

    // metodo para enviar información (POST y PUT)
    const send = (e) =>{
        e.preventDefault();

        const data = {
            name,
            lastName,
            status,
            Rdate: time
        }
        if(!name || !lastName || !status){
            window.alert('No se llenaron los campos requeridos');
        }
        // Editar un registro
        else if(edit === true){
            
            fetch(`http://localhost:3030/api/employees/${idToEdit}`, 
                {
                    method: 'PUT', 
                    headers:{
                        "Content-Type":"Application/json"
                    },
                    body: JSON.stringify(data)
                })
            .then(res => res.json())
            .then(json => {
                setReload(!reload);
            })
            .catch(err => console.log(err));
        }
        // Añadir un registro
        else{
            
            fetch(`http://localhost:3030/api/employees/`, 
                {
                    method: 'POST', 
                    headers:{
                        "Content-Type":"Application/json"
                    },
                    body: JSON.stringify(data)
                })
            .then(res => res.json())
            .then(json => {
                setReload(!reload);
            })
            .catch(err => console.log(err));
        }
        clear();   
    }
    const clear = (e = '') =>{
        //Cuando la funcion se use por fuera de un evento no dará error.
        e && e.preventDefault();

        setName('');
        setLastName('');
        setStatus('');
        setTime('');
        setEdit(false);
    }

    //Borrar empleado
    const del = (e) =>{
        e.preventDefault();

        const option = window.confirm('¿Está seguro que desea eliminar este registro?');
        if(option){
            fetch(`http://localhost:3030/api/employees/${idToEdit}`, 
            {
                method: 'DELETE', 
                headers:{
                    "Content-Type":"Application/json"
                }
            })
            .then(res => res.json())
            .then(json => {
                setReload(!reload);
            })
            .catch(err => console.log(err));
        }
        clear();
    }

    return(
        <div className={`newItemForm ${visible || 'invisible'}`} id='newItemForm'>
            <div className='form-Container'>
                {/* TITULO */}
                <div className='form-Title'>
                    <h2>{edit ? 'Editar Información' : 'Añadir Información'}</h2>
                </div>
                {/* FORMULARIO */}
                <form className='form-Input'>
                    <div className='inputs'>
                        <input type='text' required placeholder='Nombre' value={name} onChange={(e)=> setName(e.target.value)}/>
                        <input type='text' required placeholder='Apellido' value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                        <select required value={status} onChange={(e)=> setStatus(e.target.value)}>
                            <option>Trabajando</option>
                            <option>Descanso</option>
                            <option>Ausente</option>
                        </select>
                        <input type='time' value={time} onChange={(e)=> setTime(e.target.value)}/>
                    </div>
                        {/* RENDERIZADO CONDICIONAL DE LOS BOTONES */}
                    <div className='buttons'>
                        {edit && 
                            <button className='form-Button Eliminar' title='Eliminar el elemento seleccionado' onClick={del}>
                                Eliminar
                            </button>
                        }
                        <button className='form-Button Limpiar' title='Limpiar elementos' onClick={clear}>
                            {edit ? 'Cancelar' : 'Limpiar'}
                        </button>
                        <button className={`form-Button ${edit ? 'Editar' : 'Añadir'}`}  onClick={send}>
                            {edit ? 'Editar' : 'Añadir'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal