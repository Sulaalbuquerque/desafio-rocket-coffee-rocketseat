import styled from 'styled-components'

export const ContainerNav = styled.div`
    
    ul{
        display: flex;

        padding: 0 .1rem;

        li{
            margin: 0 .8rem;
            list-style-type: none;

            a{
                font-weight: 600;
                cursor: pointer;
                text-decoration: none;
                color: ${({ theme }) => theme.textColor};
            
                :hover{
                    color: ${({ theme }) => theme.button};
                }
            }
        }
    }

    @media (max-width: 770px) {
        display: none;
    }
` 