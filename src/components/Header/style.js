import styled from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0 20px;
    background-color: var(--white-bg);
    height: 120px;
    width: calc(100vw - 345px);

    > div{
        display: flex;
        flex-direction: row;
        gap: 15px;
    }

    .bell{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 48px;
        width: 48px;
        background-color: var(--orange-2);
        border-radius: 10px;

        >:nth-child(1){
            margin-left: 10px;
            height: 6px;
            width: 5px;
        }

        >:nth-child(2){
            height: 20px;
            width: 20px;
        }
    }

    .user{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 48px;
        
        p{
            font-size: 16px;
            font-weight: bold;
        }

        span{
            font-weight: 400;
            font-size: 14px;
            color: var(--text-gray);
        }
    }

    .arrow{
        height: 48px;

        img{
            height: 16px;
            width: 12px;
        }
    }
`