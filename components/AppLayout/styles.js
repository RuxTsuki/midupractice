import css from "styled-jsx/css";
import { addOpacityColor } from "../../styles/utils";
import { fonts, colors, breakpoints } from "../../styles/theme";

const backgroundColor = addOpacityColor(colors.primary, 0.3);

// common export styles
export default css`
  div {
    display: grid;
    place-items: center;
    height: 100vh;
  }
  main {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    height: 100%;
    width: 100%;
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  }
`;

// export styles global
export const globalStyles = css.global`
  html,
  body {
    background-image: radial-gradient(${backgroundColor} 1px, transparent 1px),
      radial-gradient(${backgroundColor} 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    margin: 0;
    padding: 0;
    font-family: ${fonts.base};
  }
`;
