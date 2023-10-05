import styled from "styled-components"

export const StyledTodaySales = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 185px;
    width: 350px;
    padding: 10px;
    background-color: var(--white-bg);
    border-radius: 10px;

    .texts{
        display: flex;
        justify-content: space-between;
        margin-top: 5px;

        div{
            display: flex;
            flex-direction: column;

            p{
                font-weight: bold;
                font-size: 12px;
            }

            span{
                font-weight: 400;
                font-size: 10px;
                color: var(--text-gray);
            }
        }

        button{
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid var(--text-gray);
            background-color: var(--white-bg);
            border-radius: 10px;
            font-weight: 500;
            font-size: 7px;
            height: 20px;
            width: 49px;
            gap: 2.5px;

            img{
                height: 8px;
                width: 8px;
            }
        }
    }

    .cards{
        display: flex;
        justify-content: space-between;
        gap: 3px;

        > div{
            width: 90px;
            height: 95px;
            border-radius: 10px;
            padding: 0 5px;

            >div {
                img{
                    width: 15px;
                    height: 15px;
                }
            }
        }

        > :nth-child(1){
            background-color: var(--pink-2);

            div{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 20px;
                width: 20px;
                margin: 5px 0;
                border-radius: 50%;
                background-color: var(--pink-1);
            }
        }

        > :nth-child(2){
            background-color: var(--orange-2);

            div{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 20px;
                width: 20px;
                margin: 5px 0;
                border-radius: 50%;
                background-color: var(--orange-1);
            }
        }

        > :nth-child(3){
            background-color: var(--green-2);

            div{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 20px;
                width: 20px;
                margin: 5px 0;
                border-radius: 50%;
                background-color: var(--green-1);
            }
        }

        h2{
            font-weight: bold;
            font-size: 10px;
            margin-bottom: 5px;
        }

        p{
            font-weight: 500;
            font-size: 10px;
            color: var(--text-gray);
        }

        span{
            font-size: 7px;
            color: var(--blue-1);
        }
    }

    @media (min-width: 768px) {
        height: 348px;
        width: 664px;
        padding: 20px;

        .texts{
            margin-top: 10px;

            div{
                p{
                    font-size: 20px;
                }

                span{
                    font-size: 16px;
                }

            }
            
            button{
                height: 39px;
                width: 99px;
                gap: 5px;
                font-size: 14px;

                img{
                    height: 16px;
                    width: 16px;
                }
            }
        }

        .cards{
            margin-bottom: 15px;
            gap: 0;

            > div{
                margin-top: 15px;
                width: 180px;
                height: 184px;
                border-radius: 10px;
                padding: 0 15px;

                .img{
                    height: 40px;
                    width: 40px;
                    margin: 10px 0;
                    
                    img{
                        width: auto;
                        height: auto;
                    }
                }
            }


            h2{
                font-size: 24px;
                margin-bottom: 10px;
            }

            p{
                font-size: 16px;
                margin-bottom: 10px;
            }

            span{
                font-size: 12px;
            }
        }
    }
`