import styled from "styled-components";

const StyledNav = styled.nav`
    background-color: var(--gray-bg);
`

const StyledLogo = styled.nav`
    display: flex;
    align-items: center;
    gap: 20px;
    
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 56px;
        height: 56px;
        background-color: var(--primary-color);
        border-radius: 10px;
    
    
        img{
            width: 25px;
            height: 25px;
        }
    }

    h2{
        font-weight: 600;
        font-size: 30px;
    }
`

const StyledItems = styled.ul``

export { StyledNav, StyledLogo, StyledItems }