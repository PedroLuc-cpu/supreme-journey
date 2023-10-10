import { Box, TextField, Button, Typography } from "@mui/material"
import * as React from "react"
// import { v4 as uuidv4 } from 'uuid';
import Autocomplete from '@mui/material/Autocomplete';


interface Parser<T> {
    /**
     * Realiza o parse de um objeto retornado pelo back-end.
     * @param obj objeto
     */
    parse: (obj: any) => T;
  }


interface Client {
    nome : string
    email : string
    password : string
}

const Client : Parser<Client> = {
    parse(obj) {
        const {
         Nome,
         Email,
         Password
        } = obj

        return{
          nome : Nome,
         email : Email,
         password : Password
        }
    }, 
    
    }


export function Calculator(){
    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')



       const setCliente = (client : Client ) =>{
        setNome(client.nome)
        setEmail(client.email)
        setPassword(client.password)
       }
       
       const handleSave = () =>{
            setCliente({email, nome, password})
            console.log(email)
            console.log(nome)
            console.log(password)
       }

    // function calcular(suma: number, suma2: number):number {
    // return suma * suma2 / 2
    // }    
    // let calcularLength = React.useMemo(() => calcular(nome.length, email.length), [nome, email])

    return(
            <Box display={"flex"} flexDirection={"column"} width={500} gap={2}>
            <Typography align="center">{}</Typography>
            <TextField 
            type="text" 
            label="Nome" 
            size="small" 
            value={nome}
            onChange={e => setNome(e.target.value)}
            />
            <TextField 
            label="Email" 
            type="email" 
            size="small" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <TextField 
            label="Password" 
            type="password" 
            size="small"
            value={password}
            onChange={e =>  setPassword(e.target.value)}
            />
            <Button
            onClick={() => handleSave()}
            variant="contained">Cadastrar</Button>
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={[localStorage.getItem("14fe8e19-50c3-419a-8ae8-8f505b15542e")]}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Email" 
            />
            }
            />
        </Box>

    )
}