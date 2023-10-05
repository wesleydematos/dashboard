import styled from "styled-components"

export const StyledTargetXReality = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
        width: 312px;
        height: 75px;

        @media (min-width: 768px) {
            width: 624px;
            height: 150px;
        }
    }

    .content{
        display: flex;
        flex-direction: column;
        margin-left: 10px;

        > div{
            display: flex;
            align-items: center;
            height: 25px;
        }
    }

    .reality{
        margin-bottom: 5px;

        > :nth-child(1){
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--green-2);
            width: 20px;
            height: 20px;
            border-radius: 5px;
            margin-right: 25px;

            >img{
                width: 18px;
                height: 18px;
            }
        }

        > :nth-child(2){
            margin-right: 110px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            p{
                font-weight: 600;
                font-size: 10px;
            }

            span{
                height: 10px;
                font-weight: 400;
                font-size: 8px;
                color: var(--text-gray);
            }
        }

        > p{
            font-size: 10px;
            color: var(--green-0);
        }
    }

    .target{
        img{
            width: 20px;
            height: 20px;
            margin-right: 25px;
        }
        
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-right: 110px;

            p{
                font-weight: 600;
                font-size: 10px;
            }

            span{
                font-weight: 400;
                font-size: 8px;
                color: var(--text-gray);
            }
        }

        > p{
            font-size: 10px;
            color: var(--yellow-0);
        }
    }

    @media (min-width: 768px) {
        height: 348px;
        width: 664px;
        padding: 20px;

        > p{
            font-weight: bold;
            font-size: 20px;
        }

        .content{
            margin-left: 0;

            > div{
                height: 50px;
            }
        }

        .reality{
            p{
                font-size: 14px;
            }
            
            > :nth-child(1){
                width: 40px;
                height: 40px;
                margin-right: 50px;
                border-radius: 10px;

                >img{
                    width: unset;
                    height: unset;
                }
            }

            > :nth-child(2){
                margin-right: 220px;
                margin-bottom: 10px;

                p{
                    font-size: 14px;
                }

                span{
                    font-size: 12px;
                }
            }
        }

        .target{
            p{
                font-size: 14px;
            }

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
        }
    }
`