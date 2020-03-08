import styled from 'styled-components';
import gif from '../../assets/img/error.gif';
import '../../assets/css/fonts.css';


const fifthColor = '#151524';

export const Container = styled.div`
height: 100vh;
display: grid;
grid-template-columns: 1fr 1fr;
background-color: ${fifthColor};
`;


export const ErrorText = styled.p`
font-family: 'Courier Prime', monospace;
background-color: ${fifthColor};
color:#A9242C;
margin: auto;
font-weight: 700;
font-size: 25px;
`;

export const Gif = styled.div`
background-color: ${fifthColor};
color:#A9242C;
@media (min-width: 768px) {
    background-position: 50%;
    background-image: url(${gif});
    background-repeat: no-repeat;
    background-size: cover;
}
`;