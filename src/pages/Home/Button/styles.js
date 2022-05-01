import styled from 'styled-components'

export const ContainerButton = styled.div`
    //background-color: blue;
    display: flex;
    justify-content: center;

    button{
        color: ${({ theme }) => theme.textColor};
        background-color: ${({ theme }) => theme.background};
        display: flex;
        align-items: center;
        padding: .8rem 2rem;
        border: solid 1px ${({ theme }) => theme.button};
        border-radius: 8px;
        font-size: .6rem;
        font-weight: 600;
        cursor: pointer;

        :hover{
            background-color: ${({ theme }) => theme.button};
        }

        img{
            margin-left: .7rem;
        }
    }
` 