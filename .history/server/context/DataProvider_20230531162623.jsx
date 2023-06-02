import {createContext} from 'react'

export const DataContext = createContext(null);

const DataProvider = () =>{

    const [account, setAccount] = useState({username:'', name:'' })

    //returns the datacontet provider returning the context fields to export
    return(

        <DataContext.Provider value={{

            account,
            setAccount
        
        }}>

        </DataContext.Provider>
    )
}