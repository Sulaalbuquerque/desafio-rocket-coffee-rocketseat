import styled from 'styled-components'

export const ContainerTitleHeader = styled.div`

    p{
        font-size: 2rem;
        font-weight: 500;
        text-align: center;
        margin: 6rem 2rem;
    }

    @media (max-width: 430px) {
        p{
            font-size: 1.5rem;
        }
    }

    @media (min-width: 770px) {
        display: none;
    }
` 