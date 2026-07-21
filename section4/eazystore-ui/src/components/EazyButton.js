import styled from "styled-components";

const EazyButton = styled.button`
background-color: ${(props) =>(props.$primary ? "#5B21B6" : "#1f0505") };
color: white;
border: none;
padding: 10px 20px;
border-radius: 5px;
cursor: pointer;
display: block;
margin : 0 auto;

&:hover {
background-color: blue;
}

&:focus {
outline: 2px solid white;
}
`;

export default EazyButton;
