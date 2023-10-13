import { useContext } from "react"
import { UsuarioLogadoContext } from "../contexts"

/**
 * essa função vai retornar os dados do usuarios logado
 * 
 * @returns usuário do contexts
 */
export const useUsuarioLogado = () => {
    const context = useContext(UsuarioLogadoContext)
    return context
}