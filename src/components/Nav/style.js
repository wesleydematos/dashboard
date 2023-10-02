import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--gray-bg);
    min-height: 100vh;
    width: 345px;

    > :nth-child(1){
        margin: 15px 0;
    }

    > :nth-child(3){
        margin-top: calc(100vh - 680px);
    }
`

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    width: 252px;
    
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

const StyledItems = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;

    li{
        width: 252px;
        height: 64px;
    }

    li > a {
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 28px;
        height: 100%;

        img{
            height: 32px;
            width: 32px;
        }

        p{
            font-weight: 400;
            font-size: 18px;
            width: 100px;
            color: var(--text-gray);
        }
    }

    li:nth-child(1){
        background-color: var(--primary-color);
        border-radius: 10px;

        a > p{
            color: var(--white-bg);
            font-weight: 600;
        }
    }
`

const StyledSingOut = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 28px;
    width: 252px;
    height: 64px;

    img{
        height: 32px;
        width: 32px;
    }

    p{
        width: 100px;
        color: var(--red-0);
        font-weight: 400;
        font-size: 18px;
    }
`

export { StyledNav, StyledLogo, StyledItems, StyledSingOut }