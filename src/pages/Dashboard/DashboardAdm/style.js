import styled from "styled-components"

export const StyledDashboard = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    background-color: var(--gray-bg);

    > :nth-child(1){
        >:nth-child(2){
            display: none;
        }
    }

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
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        padding: 20px 0;
        gap: 20px;
    }

    @media (min-width: 375px) {
        overflow-x: hidden;
    }

    @media (min-width: 1485px) {
        flex-direction: row;

        > :nth-child(1){
            >:nth-child(1){
                display: none;
            }
            
            >:nth-child(2){
                display: flex;
            }
        }

        .divisor{
            margin-left: 345px;
        }

        .wrapper{
            flex-direction: row;
            width: calc(100vw - 345px);
            justify-content: center;
            margin-top: 120px;
        }
    }
`