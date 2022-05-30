import styled from 'styled-components'
import { css } from 'styled-components'

export const ContainerHeader = styled.div`
    padding: 1.5rem;
    border-bottom: solid 1px ${({ theme }) => theme.border};
    display: flex;
    justify-content: space-between;

    .logo-desktop{
        display: none;
    }

    .hamburguer-open{
        border: none;
        background: none;
        cursor: pointer;
    }

    .hamburguer-close{
        display: none;
        border: none;
        background: none;
        cursor: pointer;
    }

    .buttonCoffee{
        display: none;
        color: ${({ theme }) => theme.textColor};
        background-color: ${({ theme }) => theme.background};
        padding: .4rem 2rem;
        border: solid 1px ${({ theme }) => theme.button};
        border-radius: 8px;
        font-size: .8rem;
        font-weight: 600;
        cursor: pointer;

        :hover{
            background-color: ${({ theme }) => theme.button};
        }
    }

    @media (min-width: 770px) {
        border-bottom: none;

        .buttonCoffee{
            display: block;
        }

        .logo-desktop{
            display: block;
        }

        .logo-mobile{
            display: none;
        }

        .hamburguer-open{
            display: none;
        };
    }
    
    @media (min-width: 1000px) {
        padding: 1.5rem 6rem;
    }

    ${({ menuIsVisible }) => menuIsVisible && css`
    
        .hamburguer-open{
            display: none;
        }

        .hamburguer-close{
            display: block;
        }
    `}
`

