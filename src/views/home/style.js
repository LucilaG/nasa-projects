import styled from 'styled-components';
import img from '../../assets/img/nasa.jpg';
import '../../assets/css/fonts.css';

const secondaryColor = '#2B282B';
const thirdColor = '#DFDFE1';
const fourthColor = '#59A399';
const fifthColor = '#151524';


export const Body = styled.div`
position: relative;
color: ${thirdColor}
`;

export const Content = styled.div`
position: relative;
font-family: 'Courier Prime', monospace;
background-color: ${fifthColor};
background-image: url(${img});
background-position: 50% 1%;
background-repeat: no-repeat;
@media (min-width: 768px) {
    background-position: 50% 20%;
}
`;

export const Header = styled.div`
height: 20em;
display: flex;
flex-direction: column;
padding: 4rem;
}
`;

export const Title = styled.h3`
font-size: ${props => props.subtitle ? '2rem' : '4rem'};
font-weight: 100;
margin-top: 0;
color:${thirdColor}
`;

export const Footer = styled.div`
width: 100%;
text-align: center;
padding-bottom: 1em;
background-color:  ${fifthColor};
color: #A9242C;
padding: 5px;
@media (max-width: 768px) {
margin-bottom: 7em;
}
`;

