import styled from 'styled-components';
import img from '../../assets/img/nasa.jpg';
import '../../assets/css/fonts.css';

const secondaryColor = '#2B282B';
const thirdColor = '#DFDFE1';
const fourthColor = '#59A399';
const fifthColor = '#151524';

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

export const List = styled.ul`
display: grid;
grid-template-columns: 1fr;
align-items: start;
padding: 0px;
list-style-type: none;
@media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    z-index: 3200;
}
`;

export const ItemList = styled.li`
position: relative;
margin: 2rem 1rem;
border: 1px solid  ${props => props.primaryColor || " "};
border-radius: 10px;
background-color: white;
&:hover { 
    box-shadow: 0 0 30px ${thirdColor}; 
}; 
@media (min-width: 768px) {
    margin: 1rem 10rem;
    &:nth-child(odd){
        margin-left: 4rem;
    }
    &:nth-child(even){
        margin-right: 4rem;
    }
}
`;

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


export const DeleteButton = styled.button`
    color: ${secondaryColor};
    top: 1em;
    position: absolute;
    right: 1em;
    background-color: transparent;
    border: none;
    font-weight: 750;
    z-index:1000
`;

export const Pagination = styled.div`
width: 100%;
text-align: center;
padding-bottom: 1em;
`;

export const PaginationButton = styled.button`
    color: white;
    background-color: ${fourthColor};
    border: none;
    border-radius: 30%;
    font-weight: 750;
    font-size: 16px;
    padding: 16px;
    margin: 1em;
}
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
