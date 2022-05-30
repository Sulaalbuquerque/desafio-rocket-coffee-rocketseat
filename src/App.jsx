import { ThemeProvider } from "styled-components"
import { dark } from './styles/themes/theme'
import { GlobalStyle } from "./styles/globalStyles"

import { ContainerApp, ContainerMainApp } from "./styles/stylesApp"

import { Header } from "./pages/Home/Header/Header"
import { TitleHeader } from "./pages/Home/TitleHeader/TitleHeader"
import { Titles } from "./pages/Home/Titles/Titles"
import { Banner } from "./pages/Home/Banner/Banner"
import { Button } from "./pages/Home/Button/Button"
//import { MenuMobile } from "./pages/MenuMobile/MenuMobile"

function App() {

  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyle/>
        <ContainerApp>
          <Header/>
          <ContainerMainApp>
            <TitleHeader/>
            <Button/>
            <Titles/>
            <Banner/>
          </ContainerMainApp>
        </ContainerApp>
      </ThemeProvider>
    </>
  )
}

 export default App
