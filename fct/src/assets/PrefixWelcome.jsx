import styled from "styled-components";

const Select = styled.select`
  ${(props) => {
    const { $width, $padding = "20px", $marginbottom } = props;
    const {
      $background,
      $fontsize,
      $fontweight = "bold",
      $textdecoration,
      $textalign,
    } = props;
    const { $border, $borderradius, $color } = props;

    return `
        padding: ${$padding};
        font-weight: ${$fontweight};
        ${$width ? `width: ${$width};` : ``}
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

export default Select;
