import React, { useEffect, useState } from 'react';
import Employee from './Employee';
import ListOptions from './ListOptions';

function ListSection({reload, setReload}){
    // Filtro aplicado y Datos de los empleados
    const [filter, setFilter] = useState('Todos');
    const [employees, setEmployees] = useState([]);

    // UseEffect que recargará con el cambio del useState reload
    useEffect(() => {

        // peticion a la API
        fetch('http://localhost:3030/api/employees')
        .then((res)=> res.json())
        .then(data => {
            const EmployeeObject = data.Employees.map(el => <Employee data={el} key={el.id}/>);

            setEmployees(EmployeeObject);
        })
        .catch((error)=> console.log(error));
    }, [reload]);

    // Filtrar información
    function FilterInfo(e){
        if(!e.nativeEvent.target.id || e.nativeEvent.target.id === 'Reload'){
            // recargar
            setReload(!reload);
        }
        else{
            setFilter(e.nativeEvent.target.id)
        }
    }
    return(
        <section className='listSection'>

            <ListOptions FilterInfo={FilterInfo}/>
            <div className='listRows'>
                
                {/* Renderizar la información según los filtros */}
                {employees.map(el => {
                    if (filter === 'Todos') return el
                    else if(filter === 'Trabajando' && el.props.data.status === 'Trabajando')  return el
                    else if(filter === 'Descanso' && el.props.data.status === 'Descanso') return el
                    else if(filter === 'Ausente' && el.props.data.status === 'Ausente') return el
                    return '';
                })}

            </div>
        </section>
    );
}

export default ListSection;