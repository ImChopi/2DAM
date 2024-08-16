import React from "react";
import {
  IonIcon,
} from "@ionic/react";
import "./Name.css";
import InputWelcome from "../../../assets/InputWelcome";
import TitleWelcome from "../../../assets/TitleWelcome";
import TextWelcome from "../../../assets/TextWelcome";
import GreenButton from "../../../assets/GreenButton";
import { mailOutline } from "ionicons/icons";
const Name = ({ value, onChange, handleButtonClick, isButtonDisabled}) => {
  return (
    <>
      <div className="modal-layout__img">
        <img src="https://firebasestorage.googleapis.com/v0/b/primero-80487.appspot.com/o/escritura.png?alt=media&token=e6f35f75-863b-467d-a665-4aa4d19a0a5d"></img>
      </div>
      <div className="modal-layout__header">
        <TitleWelcome>Dinos tu nombre</TitleWelcome>
        <TextWelcome>
          ¡Ya casi lo tienes! Solo dinos cómo quieres que te llamemos en tu
          perfil.
        </TextWelcome>
      </div>
      <div className="modal-layout__header__input">
        <form className="modal-layout__header__input__form" method="POST">
          <InputWelcome
            required={true}
            type="email"
            value={value}
            onIonChange={(e) => onChange(e.detail.value)}
            className="modal-layout__header__input__form__input"
            label="Nombre"
            labelPlacement="floating"
            $background="transparent"
            $fontsize="16px"
            $textdecoration="none"
            $border="1px solid rgb(172, 172, 172)"
            $borderradius="12px"
            $textalign="left"
          >
            <IonIcon
              slot="start"
              icon={mailOutline}
              aria-hidden="true"
            ></IonIcon>
          </InputWelcome>
          <GreenButton
              type="submit"
              disabled={isButtonDisabled}
              className="modal-layout__header__input__form__input"
              $marginbottom="17px"
              $background="isButtonDisabled ? 'rgb(172, 172, 172)' : 'rgb(0, 160, 130)'"
              $fontsize="16px"
              $textdecoration="none"
              $border="1px solid rgb(172, 172, 172)"
              $borderradius="25px"
              $color="rgb(0, 132, )"
              $textalign="center"
              onClick={handleButtonClick}
            >
              <span className="register-layout__header__bottom__span">
                <span>Registrarse</span>
              </span>
            </GreenButton>
        </form>
      </div>
    </>
  );
};

export default Name;
