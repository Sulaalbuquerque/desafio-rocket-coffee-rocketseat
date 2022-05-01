import styled from 'styled-components'

export const ContainerHeader = styled.div`
    //background-color: orange;
    padding: 1.5rem;
    border-bottom: solid 1px ${({ theme }) => theme.border};

    display: flex;
    justify-content: space-between;

    button{
        border: none;
        background-color: ${({ theme }) => theme.background};
        cursor: pointer;
    }
` 