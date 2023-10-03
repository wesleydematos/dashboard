import styled from "styled-components"

export const StyledTodaySales = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 348px;
    width: 664px;
    padding: 20px;
    background-color: var(--white-bg);
    border-radius: 10px;

    .texts{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

        div{
            display: flex;
            flex-direction: column;

            p{
                font-weight: bold;
                font-size: 20px;
            }

            span{
                font-weight: 400;
                font-size: 16px;
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
            font-size: 14px;
            height: 39px;
            width: 99px;
            gap: 5px;

            img{
                height: 16px;
                width: 16px;
            }
        }
    }

    .cards{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;

        > div{
            margin-top: 15px;
            width: 180px;
            height: 184px;
            border-radius: 10px;
            padding: 0 15px;
        }

        > :nth-child(1){
            background-color: var(--pink-2);

            div{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 40px;
                width: 40px;
                margin: 10px 0;
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
                height: 40px;
                width: 40px;
                margin: 10px 0;
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
                height: 40px;
                width: 40px;
                margin: 10px 0;
                border-radius: 50%;
                background-color: var(--green-1);
            }
        }

        h2{
            font-weight: bold;
            font-size: 24px;
            margin-bottom: 10px;
        }

        p{
            font-weight: 500;
            font-size: 16px;
            color: var(--text-gray);
            margin-bottom: 10px;
        }

        span{
            font-size: 12px;
            color: var(--blue-1);
        }
    }
`