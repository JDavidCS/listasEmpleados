import React, { useState,createContext } from 'react';

//Variables Glovales, se comparten entre elementos no emparentados

const MyProvider = (props) =>{
    const [visible, setVisible] = useState(false);
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [status, setStatus] = useState('Trabajando');
    const [time, setTime] = useState('');
    const [idToEdit, setIdToEdit] = useState();


    return(
        <>
            <AppContext.Provider 
            value=
                {{
                    visible, edit, name, lastName, idToEdit, status, time,
                    setVisible, setEdit, setName, setLastName, setIdToEdit, setStatus, setTime
                }}>
                {props.children}
            </AppContext.Provider>
        </>
    );
}

export default MyProvider;
export const AppContext = createContext();