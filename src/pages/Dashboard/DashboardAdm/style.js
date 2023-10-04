import styled from "styled-components"

export const StyledDashboard = styled.main`
    display: flex;
    flex-direction: row;
    background-color: var(--gray-bg);
    overflow-x: hidden;

    h1{
        font-weight: 600;
        font-size: 36px;
    }

    .divisor{
        display: flex;
        flex-direction: column;
        margin-left: 345px;
    }

    .wrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 120px;
        padding: 20px 0;
        width: calc(100vw - 345px);
        gap: 20px;
    }
`