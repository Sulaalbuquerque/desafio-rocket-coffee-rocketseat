import { ContainerMenuMobile } from "./styles"

export const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {

    return (
      <>
        <ContainerMenuMobile /*isVisible={menuIsVisible} */ >
            <ul>
              <li>
                <a href={'#'}>Home</a>
              </li>
              <li>
                <a href={'#'}>Menu</a>
              </li>
              <li>
                <a href={'#'}>Recompensas</a>
              </li>
              <li>
                <a href={'#'}>Gift Cards</a>
              </li>
              <li>
                <a href={'#'}>Lojas</a>
              </li>
            </ul>
        </ContainerMenuMobile>
      </>
    )
}