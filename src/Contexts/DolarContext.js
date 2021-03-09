import React, {useState, useEffect} from 'react';

import Api from '../utils/Api'


export const DolarContext = React.createContext({});


const DolarProvider = props => {
    const [state, setState] = useState({})

    const getApiCall = async() => {
        const newData = await Api();
        setState(newData);
    }

    useEffect(() => {
        getApiCall()        
    }, [])
    
    return (
        <DolarContext.Provider value={{
            code: state.code,
            value:state.high,
            name: state.name
        }}>
            {props.children}
        </DolarContext.Provider>
    )

}

export default DolarProvider;