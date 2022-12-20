import React from 'react';

function ListOptions ({FilterInfo}){

    // Etiquetas para Filtrar y Recargar información
    return(
        <form >
            <div className='listOptions'>
                <input id='todos' type='radio' name='filter' defaultChecked/>
                <label className='filterTabs' htmlFor='todos'onClick={FilterInfo} id='Todos'>Todos</label>

                <input id='trabajando' type='radio' name='filter'/>
                <label className='filterTabs' clr='Verde' htmlFor='trabajando'onClick={FilterInfo} id='Trabajando'>Trabajando</label>

                <input id='descanso' type='radio' name='filter'/>
                <label className='filterTabs' clr='Amarillo' htmlFor='descanso' onClick={FilterInfo} id='Descanso'>Descanso</label>

                <input id='ausente' type='radio' name='filter'/>
                <label className='filterTabs' htmlFor='ausente' onClick={FilterInfo} id='Ausente'>Ausente</label>

                <div className='reload' onClick={FilterInfo} id='Reload'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" id='Reload'/></svg>
                </div>                
            </div>
        </form>
    );
}

export default ListOptions;