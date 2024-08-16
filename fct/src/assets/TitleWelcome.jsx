import styled from "styled-components";

const TitleTwo = styled.h2`
  ${(props) => {
    const { $margintop = "5px", $marginbottom = "-15px" } = props;
    const { $fontweight = "bold", $fontsize = "1.8em" } = props;

    return `
        margin-top: ${$margintop};
        margin-bottom: ${$marginbottom};
        font-size: ${$fontsize};
        font-weight: ${$fontweight};
    `;
  }}
`;

export default TitleTwo;