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
    @media (max-width: 770px) {}
    @media (max-width: 990px) {}
    @media (max-width: 1200px) {}
    @media (max-width: 1400px) {}
    @media (max-width: 1600px) {}
` 

export const ContainerMainApp = styled.div`
    @media (max-width: 770px) {}
    
    @media (min-width: 1200px) {
        margin: 0 6rem;
    }
    
` 

