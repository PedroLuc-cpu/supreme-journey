import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import React, { useCallback, useState } from "react"

// interface IUserList {
//     nome: string

// }

export const Formulario = () =>{

    const [list , setList] = useState<string[]>(["teste1","teste2","test3"])
    const [mouseX , setMouseX] = useState<number | null>(null);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((event) =>{

        if(event.key === "Enter"){
            if(event.currentTarget.value.trim().length === 0) return;

            const value = event.currentTarget.value

            setList((state) =>{
                return [...state, value]
            })

            console.log(list.map((item) => item))
        }
    }, [])

    const handleInputOnclick: React.MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
        
        if(e.currentTarget.value.trim().length === 0) return;
            
        const value = e.currentTarget.value
            
        setList((state) =>{
            return [...state, value.trim()]
        })

        console.log(list.map((item) => item))


    }, [])

    const  handleMouseMovingX: React.MouseEventHandler<HTMLDivElement> = useCallback((e) => {
        setMouseX(e.clientX - e.clientY)
    }, [])


    return (
        <Box
        style={{height:"100vh"}}
        onMouseMove={handleMouseMovingX }
        
        >
        
            <Typography>{mouseX}</Typography>
            <Box display={"flex"} gap={1} alignContent={"center"} marginBottom={2}>
            <Box
            ></Box>
            {/* <TextField
            fullWidth
            size="small"
            label="Nome"
            type="text"
            component={"input"}
            /> */}
            <input type="text" onKeyDown={handleInputKeyDown}/>

            <Button
            onClick={handleInputOnclick}
            variant="contained"
            type="button"
            >
            Cadastrar
            </Button>
            </Box>

            <Table bgcolor="#bbdefb" padding="checkbox">
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Senha</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    list.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item}</TableCell>
                        </TableRow>
                    ))
                }
                </TableBody>
            </Table>
        </Box>
    )
}