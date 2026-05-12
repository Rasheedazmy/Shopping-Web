import React, { createContext, useState } from 'react';
export let CounterContext = createContext(0);


export default function CounterContextProvider(props)
{
    const [counter, setcounter] = useState(0);
    const [userName, setuserName] = useState('');

    return <CounterContext.Provider value={{counter, userName}}>
        {props.children}
        </CounterContext.Provider>
    
}

