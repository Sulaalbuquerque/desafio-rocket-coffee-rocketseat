import { ContainerHeader } from "./styles"
import { Nav } from "../Nav/Nav"
import { MenuMobile } from "../../MenuMobile/MenuMobile"
import { useState, useRef } from "react"

export const Header = () => {
  /*
    const [menuIsVisible, setMenuIsVisible] = useState(false)

    //const hamburguerOpen = useRef(null)
    //const hamburguerClose = useRef(null)
    //const menuMobile = useRef(null)

    if(menuIsVisible){
      console.log('foi')
      //console.log(hamburguerOpen.current)
      //menuMobile.current.style.display = 'none'
      //hamburguerOpen.current.style.display = 'block'
      //hamburguerClose.current.style.display = 'none'
    } 
*/
    return (
      <>
        <ContainerHeader>
          
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
            //ref={hamburguerOpen}
            //onClick={() => setMenuIsVisible(true)}
            className="hamburguer-open">
            <img src="assets/menu-buguer-open.svg"/>
          </button>

          <img 
            //ref={hamburguerClose}
            //onClick={() => setMenuIsVisible(false)}
            className="hamburguer-close" 
            src="assets\menu-buguer-close.svg"
          />   

          <button className="buttonCoffee">
            Pegar meu café
          </button>

        </ContainerHeader>

        <MenuMobile
          //ref={menuMobile}
          //menuIsVisible={menuIsVisible}
          //setMenuIsVisible={setMenuIsVisible}
        />
      </>
    )
}