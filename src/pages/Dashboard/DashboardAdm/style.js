import styled from "styled-components"

export const StyledDashboard = styled.main`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    max-width: 100vw;
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
        padding: 20px 0;
        width: calc(100vw - 345px);
        gap: 20px;
    }

    @media (min-width: 375px) {
        overflow-x: hidden;
    }

    @media (min-width: 1485px) {
        flex-direction: row;

        .divisor{
            margin-left: 345px;
        }

        .wrapper{
            justify-content: center;
            margin-top: 120px;
        }
    }
`