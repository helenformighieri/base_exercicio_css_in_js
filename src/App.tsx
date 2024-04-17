import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import EstiloGlobal from './styles'
import tema from './theme/tema'

function App() {
  return (
    <ThemeProvider theme={tema}>
      <EstiloGlobal />
      <Header>EBAC Jobs</Header>
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
