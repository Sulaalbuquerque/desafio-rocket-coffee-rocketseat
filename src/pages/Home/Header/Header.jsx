import { ContainerHeader } from "./styles"
import { Nav } from "../Nav/Nav"
import { MenuMobile } from "../../MenuMobile/MenuMobile"
import { useState, useEffect } from "react"

import imgLogoMobile from '../../../../assets/logo-mobile.svg'
import imgLogoDesktop from '../../../../assets/logo-desktop.svg'
import iconMenuHamburguerOpen from '../../../../assets/menu-buguer-open.svg'
import iconMenuHamburguerClose from '../../../../assets/menu-buguer-close.svg'

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
            src={imgLogoMobile}
            alt="Logo da rocketseat"
          />
          
          <img 
            className="logo-desktop" 
            src={imgLogoDesktop}
            alt="Logo da rocketseat"
          />
          
          <Nav/>       

          <button 
            onClick={() => setMenuIsVisible(true)}
            className="hamburguer-open"
          >
            <img src={iconMenuHamburguerOpen}/>
          </button>

          <button
            onClick={() => setMenuIsVisible(false)}
            className="hamburguer-close" 
          >
            <img 
              src={iconMenuHamburguerClose}
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