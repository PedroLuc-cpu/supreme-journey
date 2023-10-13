import { ReactNode } from "react"

interface IButtonErrorProps {
    children : ReactNode
    onclick: () => void
    type: "button" | "submit" | "reset" 
}

export const ButtonError = ({children, onclick, type}:IButtonErrorProps) => {
    return (
        <button type={type} onClick={onclick}>
            {children}
        </button>
    )
}