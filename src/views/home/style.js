import styled from 'styled-components';
import img from '../../assets/img/nasa.jpg';
import '../../assets/css/fonts.css';

const fontPrimaryColor= '#353034'; 


export const Header = styled.div`
height: 25em;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Title = styled.h3`
font-size: ${props => props.subtitle ? '2rem' : '4rem' };
font-weight: 100;
margin-top: 0;
`;

export const List = styled.ul`
display: grid;
grid-template-columns: 1fr;
align-items: start;
padding: 0px;
list-style-type: none;
@media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin: 2em;
    z-index: 3200;
}
`;

export const ItemList = styled.li`
border: 1px solid  ${props => props.primaryColor || "geelen"};
margin: 1em 5em;
background-color: white;
box-shadow: 0 0 11px  ${props => props.primaryColor || "geelen"};
&:hover { 
    background-color:  ${props => props.primaryColor || "geelen"};
}; 
`;

export const Body = styled.div`
position: relative;
color: ${fontPrimaryColor}
`;


export const Content = styled.div`
position: relative;
font-family: 'Courier Prime', monospace;
background-color: #F7F4ED;
background-image: url(${img});
background-position: 50% 20%;
background-repeat: no-repeat;
`;