import styled from 'styled-components'
import { css } from 'styled-components'

export const ContainerMenuMobile = styled.div`
    height: 100vh;
    display: none;

   ul{
        display: flex;
        flex-direction: column;

        padding: 0;

        li{
            padding: 1.5rem;
            list-style-type: none;
            border-bottom: 1px solid ${({ theme }) => theme.borderMenuMobile};
            cursor: pointer;

            :hover{
                border-left: 5px solid ${({ theme }) => theme.button};

                a{
                    color: ${({ theme }) => theme.textColor};
                }
            }

            a{
                font-weight: 600;
                cursor: pointer;
                text-decoration: none;
                color: ${({ theme }) => theme.textColorMenuMobile};
            }
        }
    }

    ${({ menuIsVisible }) => menuIsVisible && css`
        display: block;
    `}
` 