import styled from 'styled-components'

export const ContainerApp = styled.div`
    background-color: ${({ theme }) => theme.background};
    background-size: cover;
    background-image: url('assets/blur-mobile.png');
    background-repeat: no-repeat;
    color: ${({ theme }) => theme.textColor};

    @media (min-width: 770px) {
        background-image: 
            url('assets/blur-1.png'), 
            url('assets/blur-2.png');
    }
` 

export const ContainerMainApp = styled.div`
    
    @media (min-width: 1200px) {
        margin: 0 6rem;
    }
    
` 

