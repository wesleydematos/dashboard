import styled from "styled-components"

export const StyledTargetXReality = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 348px;
    width: 664px;
    padding: 20px;
    background-color: var(--white-bg);
    border-radius: 10px;

    > p{
        font-weight: bold;
        font-size: 20px;
    }

    .content{
        display: flex;
        flex-direction: column;

        > div{
            display: flex;
        }
    }
`