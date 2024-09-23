import styled from "styled-components";

//Css Styles for Button
export const Button = styled.button`
        background-color: black;
        color: white;
        border-radius: 5px;
        gap: 10px;
        min-width: 220px;
        padding:10px 18px;
        border: 1px solid transparent;
        cursor: pointer;
        transition: 0.4s background  ease-in;

        &:hover{
            background-color: white;
            border: 1px solid black;
            color: black;
            transition: 0.3s background  ease-in;
        }
`;

export const OutlineButton = styled(Button)`
background-color: white;
color: black;
border:1px solid black;
&:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
}`