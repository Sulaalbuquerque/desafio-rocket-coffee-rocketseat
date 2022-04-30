import { ThemeProvider } from "styled-components"
//import { dark } from './styles/themes/dark'
import { GlobalStyle } from "./styles/globalStyles"
import { ContainerApp } from "./styles/stylesApp"

function App() {

  return (
    <>
        <GlobalStyle/>
        <ContainerApp>
          hello
        </ContainerApp>
    </>
  )
}

export default App
