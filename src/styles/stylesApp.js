import styled from 'styled-components'

export const ContainerApp = styled.div`
    background-color: ${({ theme }) => theme.background};
    background-size: 100vh;
    background-image: url('assets/blur-mobile.png');
    color: ${({ theme }) => theme.textColor};
` 