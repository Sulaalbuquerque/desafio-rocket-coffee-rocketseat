import { ContainerButton } from "./styles"
import iconArrow from '../../../../assets/arrow.svg'

export const Button = () => {

    return (
      <>
        <ContainerButton>
          <button>
            PEGAR MEU CAFÉ
            <img src={iconArrow}/>
          </button>
        </ContainerButton>
      </>
    )
}