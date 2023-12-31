import styled from "styled-components"

export const StyledCustomerSatisfaction = styled.div`
    display: flex;
    flex-direction: column;
    height: 185px;
    width: 350px;
    padding: 10px;
    background-color: var(--white-bg);
    border-radius: 10px;

    > p{
        font-weight: bold;
        font-size: 12px;
    }

    .graph{
        align-self: center;
        height: 110px;
        width: 340px;
    }

    .line{
        display: none;
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
                    font-size: 12px;
                    font-weight: 400;
                    color: var(--text-gray);
                }

                span{
                    font-size: 12px;
                    font-weight: 500;
                }
            }
        }

        > :nth-child(2){
            align-self: flex-start;
            height: 25px;
            width: 1px;
            background-color: #edf2f6;
        }
    }

    @media (min-width: 768px) {
        height: 348px;
        width: 420px;
        padding: 20px;
        gap: 10px;

        > p{
            font-size: 20px;
        }

        .graph{
            height: 200px;
            width: 400px;
        }

        .line{
            display: block;
            width: 380px;
            height: 1px;
            background-color: #edf2f6;
            margin-bottom: 15px;
        }

        .content{
            > :nth-child(1), > :nth-child(3) {
                div > p, div > span{
                    font-size: 14px;
                }
            }
        }
    }
`