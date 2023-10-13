import { Box, Typography } from "@mui/material"
import { useUsuarioLogado } from "../../shared/hooks"

 export function Dashboard(){
    const {nome, email , senha} = useUsuarioLogado()
    
    return(
        <Box display={"flex"} gap={1}>
            <Typography padding={1} bgcolor={"#ccc"}>{email}</Typography>
            <Typography padding={1} bgcolor={"#ccc"}>{nome}</Typography>
            <Typography padding={1} bgcolor={"#ccc"}>{senha}</Typography>
        </Box>
    )
 }