import styled from "styled-components";

const Text = styled.p`
  ${(props) => {
    const { $color = "rgb(110,110,110)" } = props;
    const { $fontsize = "1.2em" } = props;

    return `
        color: ${$color};
        font-size: ${$fontsize};
    `;
  }}
`;

export default Text;
