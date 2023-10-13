import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function Copyright (props: any) {
  return (
   <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <Link color="inherit" href="https://mui.com/">
         Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
   </Typography>
  )
}



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function SignIn () {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string | number>('');
  let [isRemember, isSetRemember] = React.useState<boolean>(false);




  const [count, setCount] = React.useState(0);
  const valueInitial = React.useRef({counting : 0})
  const RefInputAcess = React.useRef<HTMLInputElement>(null)
  



  React.useEffect(()=>{
    valueInitial.current.counting = count + 1
    console.log(RefInputAcess.current?.value)
  }, [])

    const handleEnter = () => {
    // if(ref_input.current !== null){
    //   ref_input.current.focus();
    // }
    return {
      email: console.log(email),
      password: console.log(password),
    }
    
  }

  // function calcularLength (email: string, password: string): number {
  //   return email.length * password.length / 2
  // }

  // const cacheCalulator = React.useMemo(() => calcularLength(email, password), [email, password])

  // React.useEffect(() => {
  //   console.log(email)
  //   console.log(password)
  //   console.log(isRemember)
  // }, [email, password, isRemember])

  return (
  <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Valor do contador atual : {count}
      </Typography>
      <Typography component="h1" variant="h5">
        Valor do contador antes : {valueInitial.current.counting}
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
      <TextField
        onChange={(e) => { setEmail(e.target.value) } }
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        value={email}
      />
      <TextField
        onChange={(e) => { setPassword(e.target.value) } }
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        value={password}
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox color="primary" />}
        value={isRemember}
        onClick={() => {isSetRemember(isRemember = true)}}
        label="Remember me"
      />
      <Button
        type="button"
        onClick={handleEnter}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>
              
      <Box display={"flex"} gap={2}>
        <Button
        type="button"
        variant="contained"
        onClick={() => setCount((state) => state + 1)}
      >
        contar
      </Button>

      <Button
        type="button"
        variant="contained"
        onClick={() => console.log(valueInitial.current.counting)}
      >
        Logar UseRef
      </Button>

      </Box>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
                    Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
    <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
    </ThemeProvider>
  )
}
