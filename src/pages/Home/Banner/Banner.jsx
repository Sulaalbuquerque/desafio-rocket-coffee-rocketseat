import { ContainerBanner } from "./styles"
import imgCoffee from '../../../../assets/rocket-coffee.png'

export const Banner = () => {

    return (
      <>
        <ContainerBanner>
          <img 
            src={imgCoffee}
          />
        </ContainerBanner>
      </>
    )
}