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
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const handleEnter = (): void => {
    if ((email.length > 0) && password.length >= 20) {
      console.log('Entering')
    } else {
      console.log('sua senha tem menos que 20 caracteres')
    }
  }

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
             Sign in
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
        autoFocus
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
        control={<Checkbox value="remember" color="primary" />}
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
