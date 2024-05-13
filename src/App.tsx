import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './styles'
import { ThemeProvider } from 'styled-components'
import temaCores from './containers/Tema/cores'

function App() {
  return (
    <ThemeProvider theme={temaCores}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
