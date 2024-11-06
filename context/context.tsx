import React, { createContext, useState } from 'react'

export const DataContext = createContext()

export default function ContextProvider({children}) {
    const [donnees, setDonnees] = useState({
        user:{
            username: "yvan",
            password: "yvan1234@"
        },
        data:{

        }
    })
  return (
    <DataContext.Provider value={{donnees, setDonnees}}>
        {children}
    </DataContext.Provider>
  )
}