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

    .graph{
        width: "598px";
        height: "157px";
    }

    .content{
        display: flex;
        flex-direction: column;

        > div{
            display: flex;
            align-items: center;
            height: 50px;
        }
    }

    .reality{
        > :nth-child(1){
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--green-2);
            width: 40px;
            height: 40px;
            border-radius: 10px;
            margin-right: 50px;
        }

        > :nth-child(2){
            margin-right: 220px;
            margin-bottom: 10px;

            p{
                font-weight: 600;
                font-size: 14px;
            }

            span{
                font-weight: 400;
                font-size: 12px;
                color: var(--text-gray);
            }
        }

        > p{
            color: var(--green-0);
        }
    }

    .target{
        img{
            width: 40px;
            height: 40px;
            margin-right: 50px;
        }

        div{
            margin-right: 220px;

            p{
                font-weight: 600;
                font-size: 14px;
            }

            span{
                font-weight: 400;
                font-size: 12px;
                color: var(--text-gray);
            }
        }

        > p{
            color: var(--yellow-0);
        }
    }
`