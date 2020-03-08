import styled from 'styled-components';
import '../../assets/css/fonts.css';

const secondaryColor = '#2B282B';
const thirdColor = '#DFDFE1';
const fourthColor = '#59A399';



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
    &.selected { 
        background-color: #A9242C;
    };
}
`;

