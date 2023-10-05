import styled from "styled-components"

export const StyledTopSellers = styled.div`
    display: flex;
    flex-direction: column;
    height: 240px;
    width: 350px;
    padding: 20px;
    background-color: var(--white-bg);
    border-radius: 10px;

    > p{
        font-weight: bold;
        font-size: 12px;
    }

    ul{
        display: flex;
        flex-direction: column;
        margin-top: 5px;

        li{
            display: flex;
            border-bottom: 1px solid #edf2f6;
            padding-bottom: 5px;
        }

        > :nth-child(1){
            span{
                font-size: 12px;
                font-weight: 400;
                color: var(--text-gray);
            }

            > :nth-child(1){
                width: 20px;
            }

            > :nth-child(2), >:nth-child(3){
                width: 150px;
            }
        }

        > :nth-child(2), > :nth-child(3), > :nth-child(4), > :nth-child(5), > :nth-child(6){
            display: flex;
            align-items: center;
            font-size: 10px;
            font-weight: 400;
            padding: 6px 0;

            span{
                width: 20px;
            }

            > :nth-child(2){
                width: 120px;
            }

            > :nth-child(3){
                width: 125px;
                height: 14px;
                display: flex;
                align-items: center;

                div{
                    width: 100%;
                    height: 4px;
                    border-radius: 10px;
                }
            }

            > :last-child{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 10px;
                font-weight: 400;
                width: 35px;
                height: 19px;
                border: 1px solid;
                border-radius: 5px;
                margin-left: 10px;
            }

            >:nth-child(3)> div{
                display: flex;
                align-items: center;

                > :nth-child(1){
                    height: 4px;
                }
            }
        }
        
        > :nth-child(2) {
            > :nth-child(3)> div{
                background-color: #CDE7FF;

                > :nth-child(1){
                    width: 34%;
                    background-color: #0095FF;
                }
            }

            > :nth-child(4) {
                border-color: #0095FF;
                color: #0095FF;
                background-color: #F0F9FF;
            }
        }

        > :nth-child(3) {
            > :nth-child(3)> div{
                background-color: #F0FDF4;

                > :nth-child(1){
                    width: 25%;
                    background-color: var(--green-1);
                }
            }

            > :nth-child(4) {
                border-color: var(--green-1);
                color: var(--green-1);
                background-color: #F0FDF4;
            }
        }

        > :nth-child(4) {
            > :nth-child(3)> div{
                background-color: #FBF1FF;

                > :nth-child(1){
                    width: 20%;
                    background-color: var(--purple-1);
                }
            }

            > :nth-child(4) {
                border-color: var(--purple-1);
                color: var(--purple-1);
                background-color: #FBF1FF;
            }
        }
        
        > :nth-child(5) {
            > :nth-child(3)> div{
                background-color: var(--orange-2);

                > :nth-child(1){
                    width: 13%;
                    background-color: var(--orange-1);
                }
            }

            > :nth-child(4) {
                border-color: var(--orange-1);
                color: var(--orange-1);
                background-color: var(--orange-2);
            }
        }
        
        > :nth-child(6) {
            border: none;

            > :nth-child(3)> div{
                background-color: var(--pink-2);

                > :nth-child(1){
                    width: 8%;
                    background-color: var(--pink-1);
                }
            }

            > :nth-child(4) {
                border-color: var(--pink-1);
                color: var(--pink-1);
                background-color: var(--pink-2);
            }
        }
    }

    @media (min-width: 768px) {
        height: 315px;
        width: 660px;
        padding: 15px;

        >p{
            font-size: 20px;
        }

        ul{
            margin-top: 10px;
            
            li{
                padding-bottom: 10px;
            }

            > :nth-child(1){
                span{
                    font-size: 14px;
                }

                > :nth-child(1){
                    width: 45px;
                }
                
                > :nth-child(2), >:nth-child(3){
                    width: 220px;
                }
                
                >:nth-child(3){
                    margin-right: 25px;
                }
            }

            > :nth-child(2), > :nth-child(3), > :nth-child(4), > :nth-child(5), > :nth-child(6){
                font-size: 12px;
                padding: 10px 0;
                
                span{
                    width: 45px;
                }

                > :nth-child(2){
                    width: 210px;
                }

                > :nth-child(3){
                    height: 24px; 
                    width: 220px;
                    margin-right: 25px;
                }

                :last-child{
                    width: 85px;
                    height: 24px;
                    font-size: 12px;
                    border-radius: 10px;
                    margin-left: 0;
                }
            }
        }
    }

    @media (min-width: 1485px) {
        height: 355px;
        width: 1100px;
        padding: 20px;

        ul{
            margin-top: 15px;
            
            li{
                padding-bottom: 13px;
            }

            > :nth-child(1){
                span{
                    font-size: 16px;
                }

                > :nth-child(1){
                    width: 70px;
                }

                > :nth-child(2), >:nth-child(3){
                    width: 370px;
                }

                >:nth-child(3){
                    margin-right: 95px;
                }
            }

            > :nth-child(2), > :nth-child(3), > :nth-child(4), > :nth-child(5), > :nth-child(6){
                font-size: 14px;
                padding: 13px 0;
                
                span{
                    width: 70px;
                }

                > :nth-child(2){
                    width: 370px;
                }

                > :nth-child(3){
                    width: 370px;
                    margin-right: 95px;
                }

                :last-child{
                    font-size: 14px;
                    border-radius: 10px;
                }
            }
        }
    }
`