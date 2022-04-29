import styled from "styled-components";

const Container = styled.div`
width: 90%;
max-width: 900px ;
display: flex;
justify-content: center;
flex-wrap: wrap;
margin: auto;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 260px;
        background-color: red;
        border-radius: 10px;
        border: 4px solid black;
        margin: 15px;

    }

    img{
        max-width: 245px;
    }

`

export default Container