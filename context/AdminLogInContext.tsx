import React from "react"

interface IAdminAuthenticationContext {
    isAdmin : boolean,
    setIsAdmin : React.Dispatch<React.SetStateAction<boolean>>
}
const defaultValues: IAdminAuthenticationContext = {
    isAdmin : false,
    setIsAdmin : () => { }
}
const context = React.createContext(defaultValues)

export function useAdminLogIn() {
    return React.useContext(context)
}

export const AdminProvider: React.FC = (props) => {
    const [isAdmin, setIsAdmin] = React.useState<boolean>(defaultValues.isAdmin)

    return <context.Provider value={{ isAdmin, setIsAdmin }}>{props.children}</context.Provider>
}