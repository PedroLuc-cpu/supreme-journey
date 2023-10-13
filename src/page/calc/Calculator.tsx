import { Box, TextField, Button, Typography} from "@mui/material"
import * as React from "react"
// import { v4 as uuidv4 } from 'uuid';
import Autocomplete from '@mui/material/Autocomplete';
import { ButtonError } from "../../shared/components";
import { UsuarioLogadoContext } from "../../shared/contexts";


    
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
    export type TypeUploadFile = string;


export function Calculator(){
    const [Nome, setNome] = React.useState('')
    const [Email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const {email, nome, senha} = React.useContext(UsuarioLogadoContext);


       const setCliente = (client : Client ) =>{
        setNome(client.nome)
        setEmail(client.email)
        setPassword(client.password)
       }
       
       const handleSave = () =>{
            setCliente({email: Email, nome: Nome, password})
            console.log(Email)
            console.log(Nome)
            console.log(password)
       }

    // function calcular(suma: number, suma2: number):number {
    // return suma * suma2 / 2
    // }    
    // let calcularLength = React.useMemo(() => calcular(nome.length, email.length), [nome, email])

    return(
            <Box display={"flex"} flexDirection={"column"} width={500} gap={2}>
            <Typography align="center">{nome}</Typography>
            <Typography align="center">{email}</Typography>
            <Typography align="center">{senha}</Typography>

            <TextField 
            type="file"
            accessKey="image/*" 
            size="small"
            name="upload"
            id="upload"
            />
            
            
            
            <TextField 
            label="Email" 
            type="email" 
            size="small" 
            value={Email}
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
            }/>

        <ButtonError onclick={() => console.log("clique clique")} type="button">
          Cadastra-se
        </ButtonError>
        </Box>

    )
}