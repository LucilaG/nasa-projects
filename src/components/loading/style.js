import styled from 'styled-components';

export const Container = styled.div`
text-align: center;
animation: rotation 2s infinite linear;
@keyframes rotation {
  from {
     transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
&.fixed {
  position: fixed;
    top: 50%;
    right: 50%;
}
`;