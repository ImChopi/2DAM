import { IonButtons, IonButton, IonIcon, IonPage } from "@ionic/react";
import { useState } from "react";
import { mailOutline, chevronDownOutline } from "ionicons/icons";
import GreenButton from "../../assets/GreenButton";
import InputWelcome from "../../assets/InputWelcome";
import "./RegisterLogin.css";
import ModalRegister from "../../components/modalRegister/ModalRegister";
import TitleWelcome from "../../assets/TitleWelcome";
import TextWelcome from "../../assets/TextWelcome";

const RegisterLogin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <IonPage>
      <div className="default-wrapper">
        <div className="landing-wrapper">
          <div className="header-wrapper">
            <div className="header-layout">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/primero-80487.appspot.com/o/Duelist.png?alt=media&token=bcf55eda-beac-47f1-9565-762a33a1300e"
                alt="img-test"
              />
            </div>
          </div>
          <div className="register-wrapper">
            <div className="register-layout">
              <div className="register-layout__header__top">
                <TitleWelcome>¡Hola!</TitleWelcome>
                <TextWelcome>Empecemos por tu número de teléfono</TextWelcome>
              </div>
              <div className="register-layout__header__top__layout">
                <form
                  className="register-layout__header__top__layout__form"
                  method="POST"
                >
                  <div className="register-layout__header__top__layout__form__phone">
                    <div className="register-layout__header__top__layout__form__phone__prefix">
                      <div className="register-layout__header__top__layout__form__phone__prefix__text">
                        <div>Prefijo</div>
                        <div className="register-layout__header__top__layout__form__phone__prefix__text__number">
                          <img
                            className="register-layout__header__top__layout__form__phone__prefix__text__number__img"
                            src="https://firebasestorage.googleapis.com/v0/b/primero-80487.appspot.com/o/espana.png?alt=media&token=89626b94-caba-4195-8d8e-8ee02742887b"
                            alt="ES"
                          />
                          <div>+34</div>
                        </div>
                      </div>
                      <div className="register-layout__header__top__layout__form__phone__prefix__icon">
                        <IonButtons>
                          <IonButton className="custom-button">
                            <IonIcon icon={chevronDownOutline}></IonIcon>
                          </IonButton>
                        </IonButtons>
                      </div>
                    </div>
                    <div className="register-layout__header__top__layout__form__phone__input">
                      <InputWelcome
                        className="input"
                        label="Número de Teléfono"
                        labelPlacement="floating"
                        $background="transparent"
                        $fontsize="16px"
                        $textdecoration="none"
                        $border="1px solid rgb(172, 172, 172)"
                        $borderradius="12px"
                        $textalign="left"
                      ></InputWelcome>
                    </div>
                  </div>
                  <div className="register-layout__header__top__button">
                    <GreenButton
                      type="submit"
                      className="register-layout__header__top__custom"
                      $marginbottom="17px"
                      $background="rgb(0, 160, 130)"
                      $fontsize="16px"
                      $textdecoration="none"
                      $border="1px solid rgb(172, 172, 172)"
                      $borderradius="25px"
                      $color="rgb(0, 132, )"
                      $textalign="center"
                    >
                      <span className="register-layout__header__bottom__span">
                        <span>Continuar</span>
                      </span>
                    </GreenButton>
                  </div>
                </form>
              </div>
              <div className="register-layout__header__middle">
                <div></div>
                <span>o con</span>
                <div></div>
              </div>
              <div className="register-layout__header__bottom">
                <GreenButton
                  className="register-layout__header__bottom__custom"
                  $background="transparent"
                  $fontsize="16px"
                  $textdecoration="none"
                  $border="1px solid rgb(172, 172, 172)"
                  $borderradius="25px"
                  $color="rgb(0, 0, 0)"
                  $textalign="center"
                  onClick={handleOpenModal}
                >
                  <span className="register-layout__header__bottom__span">
                    <IonIcon
                      className="register-layout__header__bottom__icon"
                      icon={mailOutline}
                    ></IonIcon>
                    <span>E-mail</span>
                  </span>
                </GreenButton>
                <ModalRegister isOpen={isOpen} onClose={handleCloseModal} />
              </div>
              <footer className="register-layout__header__footer">
                <span>
                  Al continuar, acepta automáticamente nuestras Condiciones,
                  Política de privacidad y Política de cookies
                </span>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </IonPage>
  );
};

export default RegisterLogin;
