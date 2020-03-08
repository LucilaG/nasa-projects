import styled from 'styled-components';

const primaryColor = '#353034';
const secondaryColor = '#2B282B';
const fourthColor = '#59A399';

export const Article = styled.article`
padding: 10px;
`;

export const Button = styled.button`
position:absolute;
bottom: 0px;
width: -webkit-fill-available;
background: white;
border: none;
border-top: 1px solid ${secondaryColor};
padding:15px;
border-radius: 0 0 10px 10px;
justify-content: center;
color: ${secondaryColor};
`;

export const CloseButton = styled.button`
    color: ${primaryColor};
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
    position: fixed;  
    width: 100%;  
    height: 100%;  
    top: 0;  
    left: 0;  
    right: 0;  
    bottom: 0;  
    margin: auto;  
    background-color: rgba(0,0,0, 0.5);  
    z-index: 3000;
    > article {
        position: absolute;  
        margin: 10rem;  
        border-radius: 0px;  
        background: white;  
        height: 350px;
        overflow: auto;
    }
    ${Button}, .transparent, .favorite{
        display:none;
    };
    ${CloseButton} {
        display: block
    }
}
`;


export const Span = styled.span`
font-weight: ${props => props.primary ? '600' : '400'};
color: ${props => props.primary ? primaryColor : secondaryColor};
text-transform: capitalize; 
`;

export const Transparent = styled.div`
position:absolute;
bottom: 30px;
width: -webkit-fill-available;
background: linear-gradient(transparent, white);
height: 100px;
`;

export const CardTitle = styled.h3`
margin: 0.5em 1em 1em 0em;
color: ${primaryColor};
`;

export const Row = styled.p`
border-bottom: 1px solid #DFDFE1;
`;



export const FavoriteButton = styled.button`
    color: ${secondaryColor};
    top: 3em;
    position: absolute;
    right: 1em;
    background-color: transparent;
    border: none;
    font-weight: 750;
    z-index: 1000;
    &.favorite svg{
        fill: ${fourthColor};
    }
`;