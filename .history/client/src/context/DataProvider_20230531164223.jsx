import {createContext, useState} from 'react'

export const DataContext = createContext(null);

const DataProvider = ({childern}) =>{

    const [account, setAccount] = useState({username:'', name:'' })

    //returns the datacontet provider returning the context fields to export
    //props and childern
    return(

        <DataContext.Provider value={{

            account,
            setAccount
        
        }}>

            {childern}

        </DataContext.Provider>
    )
}

export default DataProvider;