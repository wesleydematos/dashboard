import styled from "styled-components"

export const StyledDashboard = styled.main`
    display: flex;
    flex-direction: row;
    background-color: var(--gray-bg);

    h1{
        font-weight: 600;
        font-size: 36px;
    }

    .divisor{
        display: flex;
        flex-direction: column;
    }

    .wrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 20px 0;
        width: calc(100vw - 345px);
        gap: 20px;
    }
`