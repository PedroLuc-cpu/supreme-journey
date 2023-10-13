import { AppRoute } from './routes';
import { BrowserRouter as Router} from "react-router-dom";
import { UsuarioLogadoProvider } from './shared/contexts';

function App() {
  return (
    <UsuarioLogadoProvider>
      <Router>
        <AppRoute/>
      </Router>
    </UsuarioLogadoProvider>
  )
}

export default App
