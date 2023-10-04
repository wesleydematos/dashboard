import styled from "styled-components"

export const StyledCustomerSatisfaction = styled.div`
    display: flex;
    flex-direction: column;
    height: 348px;
    width: 420px;
    padding: 20px;
    background-color: var(--white-bg);
    border-radius: 10px;
    gap: 10px;

    > p{
        font-weight: bold;
        font-size: 20px;
    }

    .graph{
        align-self: center;
        height: 200px;
        width: 400px;
    }

    .h2{
        width: 380px;
        height: 1px;
        background-color: #edf2f6;
    }

    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;

        > :nth-child(1), > :nth-child(3){
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 15px;

            img{
                align-self: flex-start;
                margin-top: 5px;
                width: 20px;
                height: 10px;
            }

            div {
                p{
                    font-size: 14px;
                    font-weight: 400;
                    color: var(--text-gray);
                }

                span{
                    font-size: 14px;
                    font-weight: 500;
                }
            }
        }

        > :nth-child(2){
            align-self: flex-start;
            height: 30px;
            width: 1px;
            background-color: #edf2f6;
        }
    }

`