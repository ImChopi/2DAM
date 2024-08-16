import { IonButton, IonIcon } from "@ionic/react";
import "./PasswordWithEmailRegistered.css";
import { eyeOffOutline, eyeOutline, lockClosedOutline } from "ionicons/icons";
import InputWelcome from "../../../../assets/InputWelcome";
import TitleWelcome from "../../../../assets/TitleWelcome";
import TextWelcome from "../../../../assets/TextWelcome";
import GreenButton from "../../../../assets/GreenButton";
import React, { useState } from "react";

const PasswordWithEmailRegistered = ({
  value,
  onChange,
  email,
  handleButtonClick,
  isButtonDisabled,
}) => {
  const [showPass, setShowPass] = useState(false);

  const togglePass = () => {
    setShowPass((pass) => !pass);
  };

  const handlePasswordChange = (newValue) => {
    onChange(newValue);
  };

  return (
    <>
      <div className="modal-layout__img">
        <img src="https://firebasestorage.googleapis.com/v0/b/primero-80487.appspot.com/o/escritura.png?alt=media&token=e6f35f75-863b-467d-a665-4aa4d19a0a5d"></img>
      </div>
      <div className="modal-layout__header">
        <TitleWelcome>
          ¡Hola de nuevo!
          <br />
          Introduce tu contraseña
        </TitleWelcome>
        <TextWelcome>
          Inicia sesión en tu cuenta con tu contraseña.
          <br />
          <b>{email}</b>
        </TextWelcome>
      </div>
      <div className="modal-layout__header__input">
        <form className="modal-layout__header__input__form" method="POST">
          <div>
            <InputWelcome
              required={true}
              type={showPass ? "text" : "password"}
              labelPlacement="floating"
              label="Password"
              placeholder="Password"
              value={value}
              onInput={(e) => handlePasswordChange(e.target.value)}
              className="modal-layout__header__input__form__input"
              $background="transparent"
              $fontsize="16px"
              $textdecoration="none"
              $border="1px solid rgb(172, 172, 172)"
              $borderradius="12px"
              $textalign="left"
            >
              <IonIcon
                slot="start"
                icon={lockClosedOutline}
                aria-hidden="true"
              ></IonIcon>
              <IonButton
                fill="clear"
                slot="end"
                aria-label="Show/hide"
                onClick={togglePass}
              >
                <IonIcon
                  slot="icon-only"
                  icon={showPass ? eyeOffOutline : eyeOutline}
                  aria-hidden="true"
                ></IonIcon>
              </IonButton>
            </InputWelcome>
          </div>
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
              <span>Iniciar Sesión</span>
            </span>
          </GreenButton>
        </form>
      </div>
    </>
  );
};

export default PasswordWithEmailRegistered;
