import * as React from "react"


interface UsuarioLogadoContextData{
    nome: string,
    email: string
    senha: string | number
}

export const UsuarioLogadoContext = React.createContext<UsuarioLogadoContextData>({} as UsuarioLogadoContextData)

interface IChildren {
    children: React.ReactNode
}


export const UsuarioLogadoProvider = ({children}:IChildren) => {
    return (
        <UsuarioLogadoContext.Provider value={{nome:"Pedro Lucas", email: "pedro@gmail.com", senha: "123456789"}} >
            {children}
        </UsuarioLogadoContext.Provider>
    )
}