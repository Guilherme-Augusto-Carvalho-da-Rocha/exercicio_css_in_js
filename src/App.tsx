import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { Container, GlobalStyle } from './styels'
import { LightTheme } from './themes/light'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
