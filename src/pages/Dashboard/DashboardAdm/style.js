import styled from "styled-components"

export const StyledDashboard = styled.main`
    display: flex;
    flex-direction: row;
    background-color: var(--gray-bg);

    h1{
        font-weight: 600;
        font-size: 36px;
    }

    > div{
        display: flex;
        flex-direction: column;
    }
`