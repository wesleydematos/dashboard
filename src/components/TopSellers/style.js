import styled from "styled-components"

export const StyledTopSellers = styled.div`
    display: flex;
    flex-direction: column;
    height: 355px;
    width: 1117px;
    padding: 20px;
    background-color: var(--white-bg);
    border-radius: 10px;

    > p{
        font-weight: bold;
        font-size: 20px;
    }

    ul{
        display: flex;
        flex-direction: column;
        margin-top: 15px;

        li{
            display: flex;
            border-bottom: 1px solid #edf2f6;
            padding-bottom: 13px;
        }

        > :nth-child(1){
            span{
                font-size: 16px;
                font-weight: 400;
                color: var(--text-gray);
            }

            > :nth-child(1){
                width: 70px;
            }
            
            > :nth-child(2), >:nth-child(3){
                width: 370px;
            }

            >:nth-child(3){
                margin-right: 35px;
            }
        }

        > :nth-child(2), > :nth-child(3), > :nth-child(4), > :nth-child(5), > :nth-child(6){
            font-size: 14px;
            font-weight: 400;
            padding: 13px 0;

            span{
                width: 70px;
            }

            > :nth-child(2){
                width: 370px;
            }

            > :nth-child(3){
                height: 24px;
                display: flex;
                align-items: center;

                div{
                    width: 312px;
                    height: 4px;
                    margin-right: 95px;
                    border-radius: 10px;
                }
            }

            > :last-child{
                font-size: 14px;
                font-weight: 400;
                width: 85px;
                height: 24px;
                border: 1px solid;
                border-radius: 10px;
                text-align: center;
            }
        }

        > :nth-child(2) > :nth-child(3)> div{
            display: flex;
            align-items: center;
            background-color: #CDE7FF;

            > :nth-child(1){
                height: 4px;
                width: 34%;
                background-color: #0095FF;
            }
        }

        > :nth-child(2) > :nth-child(4) {
            border-color: #0095FF;
            color: #0095FF;
            background-color: #F0F9FF;
        }
        
        > :nth-child(3) > :nth-child(3)> div{
            display: flex;
            align-items: center;
            background-color: #F0FDF4;

            > :nth-child(1){
                height: 4px;
                width: 25%;
                background-color: var(--green-1);
            }
        }

        > :nth-child(3) > :nth-child(4) {
            border-color: var(--green-1);
            color: var(--green-1);
            background-color: #F0FDF4;
        }

        > :nth-child(4) > :nth-child(3)> div{
            display: flex;
            align-items: center;
            background-color: #FBF1FF;

            > :nth-child(1){
                height: 4px;
                width: 20%;
                background-color: var(--purple-1);
            }
        }

        > :nth-child(4) > :nth-child(4) {
            border-color: var(--purple-1);
            color: var(--purple-1);
            background-color: #FBF1FF;
        }

        > :nth-child(5) > :nth-child(3)> div{
            display: flex;
            align-items: center;
            background-color: var(--orange-2);

            > :nth-child(1){
                height: 4px;
                width: 13%;
                background-color: var(--orange-1);
            }
        }

        > :nth-child(5) > :nth-child(4) {
            border-color: var(--orange-1);
            color: var(--orange-1);
            background-color: var(--orange-2);
        }

        > :nth-child(6) > :nth-child(3)> div{
            display: flex;
            align-items: center;
            background-color: var(--pink-2);

            > :nth-child(1){
                height: 4px;
                width: 8%;
                background-color: var(--pink-1);
            }
        }

        > :nth-child(6) > :nth-child(4) {
            border-color: var(--pink-1);
            color: var(--pink-1);
            background-color: var(--pink-2);
        }

        > :last-child{
            border: none;
        }
    }
`