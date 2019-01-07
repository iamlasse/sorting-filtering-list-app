import styled from 'styled-components';
import theme from "styled-theming";
const hero = theme('mode', {
  light: {
    background: 'linear-gradient(to bottom, #00B4DB, #0083B0)',
  },
  dark: {
    background: 'linear-gradient(to right, #12c2e9, #4AC29A, #BDFFF3)',
  }
});
const Hero = styled.div`
  ${hero}
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 4em;
    font-family: 'Libre Franklin', sans-serif;
    letter-spacing: 4px;
    font-weight: 900;
    margin: 0;
    
  }
  h4 {
    font-size: 1em;
    text-transform: uppercase;
    margin: 0;
  }
`;

export default Hero