import styled from "styled-components";

export const Head = styled.div`
    font-family: 'Roboto', sans-serif;
    position: fixed;
    width: 100%;
    height: 60px;
    background-color: #000000;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;

    ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    ul li{
        cursor: pointer;
        margin: 0 9px;
    }
    li.selected,
    li:hover{
        color: #1481BA;
    }
`

export const Container = styled.div`
    max-width: 1170px;
    height: 100%;
`

