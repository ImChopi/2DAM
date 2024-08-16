import { IonButtons, IonButton, IonIcon, IonModal } from "@ionic/react";
import "./ModalMe.css";
import GreenButton from "../../assets/GreenButton";
import TitleWelcome from "../../assets/TitleWelcome";
import {
  arrowBackOutline,
  bagHandleOutline,
  chevronForwardOutline,
  notificationsOutline,
  personOutline,
  trashOutline,
  logOutOutline,
  starOutline,
  pricetagOutline,
  helpOutline
} from "ionicons/icons";

const ModalMe = ({ isOpen, onClose }) => {
  return (
    <IonModal className="modal-landing" isOpen={isOpen} onDidDismiss={onClose}>
      <div className="modal-layout-me">
        <div className="modal-layout-header">
          <GreenButton
            className="modal-layout-header__button__back"
            type="button"
            $padding="0px"
            $background="transparent"
            $fontsize="22px"
            $textdecoration="none"
            $borderradius="25px"
            $color="rgb(0,0,0)"
            onClick={onClose}
          >
            <IonIcon
              className="modal-layout-header__button__back__icon"
              icon={arrowBackOutline}
            ></IonIcon>
          </GreenButton>
          <GreenButton
            type="submit"
            className="modal-layout-header__button__help"
            $marginbottom="0px"
            $background="rgb(0, 160, 130)"
            $fontsize="15px"
            $textdecoration="none"
            $border="1px solid rgb(172, 172, 172)"
            $borderradius="25px"
            $color="rgb(0, 132, )"
            $textalign="center"
          >
            <span className="modal-layout-header__button__help__span">
              <span>Ayuda</span>
            </span>
          </GreenButton>
        </div>
        <div className="modal-layout__title">
          <TitleWelcome>¡Hola, Chopito!</TitleWelcome>
        </div>
        <div className="modal-layout-body">
          <TitleWelcome className="modal-layout-body__title">
            Cuenta
          </TitleWelcome>
          <div className="modal-layout-body__buttons">
            <GreenButton
              className="modal-layout-body-buttons__button"
              $background="transparent"
              $fontsize="17px"
              $height="60px"
            >
              <div className="left-content">
                <IonIcon icon={bagHandleOutline}></IonIcon>
                <span className="modal-layout-body-buttons__button__span">
                  Mis pedidos
                </span>
              </div>
              <div className="right-content">
                <IonIcon
                  className="modal-layout-body-buttons__button__icon"
                  icon={chevronForwardOutline}
                ></IonIcon>
              </div>
            </GreenButton>
            <GreenButton
              className="modal-layout-body-buttons__button"
              $background="transparent"
              $fontsize="17px"
              $height="60px"
            >
              <div className="left-content">
                <IonIcon icon={personOutline}></IonIcon>
                <span className="modal-layout-body-buttons__button__span">
                  Mi información
                </span>
              </div>
              <div className="right-content">
                <IonIcon
                  className="modal-layout-body-buttons__button__icon"
                  icon={chevronForwardOutline}
                ></IonIcon>
              </div>
            </GreenButton>
            <div className="register-layout__header__middle">
              <div></div>
              <div></div>
            </div>
            <GreenButton
              className="modal-layout-body-buttons__button"
              $background="transparent"
              $fontsize="17px"
              $height="60px"
            >
              <div className="left-content">
                <IonIcon icon={starOutline}></IonIcon>
                <span className="modal-layout-body-buttons__button__span">
                  Premium
                </span>
              </div>
              <div className="right-content">
                <IonIcon
                  className="modal-layout-body-buttons__button__icon"
                  icon={chevronForwardOutline}
                ></IonIcon>
              </div>
            </GreenButton>
            <GreenButton
              className="modal-layout-body-buttons__button"
              $background="transparent"
              $fontsize="17px"
              $height="60px"
            >
              <div className="left-content">
                <IonIcon icon={pricetagOutline}></IonIcon>
                <span className="modal-layout-body-buttons__button__span">
                  Códigos promocionales
                </span>
              </div>
              <div className="right-content">
                <IonIcon
                  className="modal-layout-body-buttons__button__icon"
                  icon={chevronForwardOutline}
                ></IonIcon>
              </div>
            </GreenButton>
            <GreenButton
              className="modal-layout-body-buttons__button"
              $background="transparent"
              $fontsize="17px"
              $height="60px"
            >
              <div className="left-content">
                <IonIcon icon={helpOutline}></IonIcon>
                <span className="modal-layout-body-buttons__button__span">
                  Preguntas
                </span>
              </div>
              <div className="right-content">
                <IonIcon
                  className="modal-layout-body-buttons__button__icon"
                  icon={chevronForwardOutline}
                ></IonIcon>
              </div>
            </GreenButton>
            <GreenButton
              className="modal-layout-body-buttons__button"
              $background="transparent"
              $fontsize="17px"
              $height="60px"
            >
              <div className="left-content">
                <IonIcon icon={notificationsOutline}></IonIcon>
                <span className="modal-layout-body-buttons__button__span">
                  Notificaciones
                </span>
              </div>
              <div className="right-content">
                <IonIcon
                  className="modal-layout-body-buttons__button__icon"
                  icon={chevronForwardOutline}
                ></IonIcon>
              </div>
            </GreenButton>
            <GreenButton
              className="modal-layout-body-buttons__button"
              $background="transparent"
              $fontsize="17px"
              $height="60px"
            >
              <div className="left-content">
                <IonIcon icon={trashOutline}></IonIcon>
                <span className="modal-layout-body-buttons__button__span">
                  Eliminar mi cuenta y mis datos
                </span>
              </div>
              <div className="right-content">
                <IonIcon
                  className="modal-layout-body-buttons__button__icon"
                  icon={chevronForwardOutline}
                ></IonIcon>
              </div>
            </GreenButton>
            <GreenButton
              className="modal-layout-body-buttons__button"
              $background="transparent"
              $fontsize="17px"
              $height="60px"
            >
              <div className="left-content">
                <IonIcon icon={logOutOutline}></IonIcon>
                <span className="modal-layout-body-buttons__button__span">
                  Cerrar sesión
                </span>
              </div>
              <div className="right-content">
                <IonIcon
                  className="modal-layout-body-buttons__button__icon"
                  icon={chevronForwardOutline}
                ></IonIcon>
              </div>
            </GreenButton>
          </div>
        </div>
      </div>
    </IonModal>
  );
};

export default ModalMe;
