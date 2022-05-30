import { ContainerHeader } from "./styles"
import { Nav } from "../Nav/Nav"
import { MenuMobile } from "../../MenuMobile/MenuMobile"
import { useState, useEffect } from "react"

export const Header = () => {
  
    const [menuIsVisible, setMenuIsVisible] = useState(false)

    useEffect(() => {
      document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);

    return (
      <>
        <ContainerHeader  menuIsVisible={menuIsVisible} >
          
          <img 
            className="logo-mobile" 
            src="assets\logo-mobile.svg" 
            alt="Logo da rocketseat"
          />
          
          <img 
            className="logo-desktop" 
            src="assets\logo-desktop.svg" 
            alt="Logo da rocketseat"
          />
          
          <Nav/>       

          <button 
            onClick={() => setMenuIsVisible(true)}
            className="hamburguer-open"
          >
            <img src="assets/menu-buguer-open.svg"/>
          </button>

          <button
            onClick={() => setMenuIsVisible(false)}
            className="hamburguer-close" 
          >
            <img 
              src="assets/menu-buguer-close.svg"
            />  
          </button> 

          <button className="buttonCoffee">
            Pegar meu café
          </button>

        </ContainerHeader>

        <MenuMobile
          menuIsVisible={menuIsVisible}
        />
      </>
    )
}