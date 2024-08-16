import { IonInput } from "@ionic/react";
import styled from "styled-components";

const Input = styled(IonInput)`
  ${(props) => {
    const { $width = "100%", $padding = "22px", $marginbottom } = props;
    const {
      $background,
      $fontsize,
      $fontweight = "bold",
      $textdecoration,
      $textalign,
    } = props;
    const { $border, $borderradius, $color } = props;

    return `
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

export default Input;
