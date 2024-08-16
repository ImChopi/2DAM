import styled from "styled-components";

const Button = styled.button`
  ${(props) => {
    const { $width = "100%", $padding = "3%", $marginbottom, $height } = props;
    const {
      $background,
      $fontsize,
      $fontweight = "bold",
      $textdecoration,
      $textalign,
    } = props;
    const { $border, $borderradius, $color } = props;

    return `
        height: ${$height};
        width: ${$width};
        padding: ${$padding};
        font-weight: ${$fontweight};
        ${$marginbottom ? `margin-bottom: ${$marginbottom};` : ``}
        ${$background ? `background: ${$background};` : ``}
        ${$fontsize ? `font-size: ${$fontsize};` : ``}
        ${$textdecoration ? `text-decoration: ${$textdecoration};` : ``}
        ${$textalign ? `text-align: ${$textalign};` : ``}
        ${$border ? `border: ${$border};` : ``}
        ${$borderradius ? `border-radius: ${$borderradius};` : ``}
        ${$color ? `color: ${$color};` : ``}
    `;
  }}
`;

export default Button;
