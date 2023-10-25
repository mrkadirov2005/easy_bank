import styled from "styled-components";
import headerButtonBackground from "../img/header--button__background.svg"


const Button=styled.button`
display: flex;
align-items: center;
justify-content: center;
padding: 8px 35.5px;
background-image:url(${headerButtonBackground});
background-repeat: no-repeat;
background-size:cover;
background-position: center;
border-radius: 20px;
border: none;
height: 44px;
color: white;
`
export default Button