import {createContext, useState} from 'react'

 export const DataContext = createContext(null);

const DataProvider = ({children}) =>{

    const [account, setAccount] = useState({username:'', name:'' })

    //returns the datacontet provider returning the context fields to export
    //props and childern
    
    return(

        <DataContext.Provider value={{
            account,
            setAccount
        }}>

            {children}

        </DataContext.Provider>
    )
}

export default DataProvider;
// export { DataContext};

// initializes the DataContext to an object correctly. The createContext function takes a default value as its argument. In this case, the default value is an empty object. This means that when a component subscribes to the DataContext, it will initially receive an empty object. The component can then use the useContext hook to update the value of the context.
//  the DataProvider component uses the useState hook to create a state variable called account. The account state variable is initialized to an object with the properties username and name. The DataProvider component then uses the DataContext.Provider component to pass the account state variable to its children. This allows any component that consumes the DataContext to access the account state variable.