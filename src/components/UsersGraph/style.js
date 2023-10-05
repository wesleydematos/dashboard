import styled from "styled-components";

export const StyledUsersGraph = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 185px;
    width: 350px;
    padding: 10px;
    background-color: var(--white-bg);
    border-radius: 10px;

    .texts{
        p{
            font-weight: bold;
            font-size: 12px;
        }

        span{
            font-weight: 400;
            font-size: 10px;
        }
    }

    .content{
        display: flex;
        justify-content: space-between;

        ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 5px;

            li {
                display: flex;
                align-items: center;
                gap: 5px;
                
                div{
                    width: 10px;
                    height: 7px;
                    border-radius: 5px;
                }

                p{
                    color: var(--text-gray);
                    font-size: 12px;
                }
            }

            > :nth-child(1) > div{
                background-color: var(--blue-1);
            }

            > :nth-child(2) > div{
                background-color: var(--blue-2);
            }

            > :nth-child(3) > div{
                background-color: var(--gray-0);
            }
        } 
    }

    .graph{
        height: 130px;
        width: 130px;
    }

    @media (min-width: 768px) {
        height: 348px;
        width: 420px;
        padding: 20px;

        .texts{
            p{
                font-size: 20px;
            }

            span{
                font-size: 16px;
            }
        }

        .content{
            margin-bottom: 15px;

            ul{
                gap: 10px;

                li{
                    gap: 10px;

                    div{
                        width: 19px;
                        height: 13px;
                    }

                    p{
                        font-size: 14px;
                    }
                }
            }
        }
        
        .graph{
            height: 185px;
            width: 185px;
        }
    }
`