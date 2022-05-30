import styled from 'styled-components'

export const ContainerTitles = styled.div`
    margin: 6rem 2rem 2rem;

    span{
        display: flex;
        justify-content: center;
        font-size: 2.8rem;
    }

    .primary{
        font-weight: 700;
    }

    .secondary{
        text-shadow: -1px -1px 0 ${({ theme }) => theme.button}, 
            1px -1px 0 ${({ theme }) => theme.button}, 
            -1px 1px 0 ${({ theme }) => theme.button}, 
            1px 1px 0 ${({ theme }) => theme.button};
        font-weight: 700;
        color: ${({ theme }) => theme.background};
    }

    @media (max-width: 430px) {
        .primary,
        .secondary{
            font-size: 2rem;
        }
    }

    @media (min-width: 770px) {
        span{
            font-size: 4rem;
        }
    }
` 