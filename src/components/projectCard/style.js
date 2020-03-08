import styled from 'styled-components';

const fontPrimaryColor= '#353034'; 
const fontSecondaryColor= '#CBA986'; 

export const Article = styled.article`
padding: 10px;
text-align: center;
`;

export const Button = styled.button`
position:absolute;
bottom: 0px;
width: -webkit-fill-available;
background: linear-gradient(transparent, white,white);
border:none;
padding:20px;
height: 30px;
justify-content: center;
align-items: center;
color: ${fontSecondaryColor};
`;

export const CloseButton = styled.button`
    color: ${fontPrimaryColor};
    position: absolute;
    top: 20px;
    right: 1em;
    background-color: transparent;
    border: none;
    font-weight: 750;
    display: none; 
`;


export const Container = styled.div`
position: relative;
height: 350px;
overflow: hidden;
&.active {
    position: absolute;
    margin-right: -50%;
    overflow: visible;
    z-index: 3000;
    background-color: white;
    height: max-content;
    width: 1000px;
    ${Button}, .transparent {
        display:none;
    };
    ${CloseButton} {
        display: block
    }
}
`;

export const Span = styled.span`
font-weight: ${props => props.primary ? '600' : '400' };
color: ${props => props.primary ? fontPrimaryColor : fontSecondaryColor};
text-transform: capitalize; 
`;

export const Transparent = styled.div`
position:absolute;
bottom: 0px;
width: -webkit-fill-available;
background: linear-gradient(transparent, white);
height: 100px;
`;


