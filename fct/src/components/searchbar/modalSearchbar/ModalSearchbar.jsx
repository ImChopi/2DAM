import { IonIcon, IonModal, IonSearchbar } from "@ionic/react";
import "./ModalSearchbar.css";
import GreenButton from "../../../assets/GreenButton";
import TitleWelcome from "../../../assets/TitleWelcome";
import { arrowBackOutline, searchOutline } from "ionicons/icons";
import Searchbar from "../../../assets/SearchBar";

const ModalSearchbar = ({ isOpen, onClose }) => {
  return (
    <IonModal className="modal-landing" isOpen={isOpen} onDidDismiss={onClose}>
      <div className="modal-layout">
        <GreenButton
          className="modal-layout__button"
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
            className="modal-layout__toolbar__icon"
            icon={arrowBackOutline}
          ></IonIcon>
        </GreenButton>
        <Searchbar
          className="modal-layout__searchbar"
          placeholder=""
          $fontsize="16px"
          $textdecoration="none"
          $borderradius="50px"
          $textalign="left"
        />
        <div className="popular-layout">
          <h6>
            <b>Popular</b>
          </h6>
          <div className="popular-layout__buttons">
            <GreenButton
              className="button"
              type="button"
              $background="rgb(229, 230, 231)"
              $fontsize="22px"
              $textdecoration="none"
              $borderradius="25px"
              $color="rgb(0,0,0)"
            >
              <span className="button-span">mcdonalds</span>
            </GreenButton>
            <GreenButton
              className="button"
              type="button"
              $background="rgb(229, 230, 231)"
              $fontsize="22px"
              $textdecoration="none"
              $borderradius="25px"
              $color="rgb(0,0,0)"
            >
              <span className="button-span">burguer king</span>
            </GreenButton>
            <GreenButton
              className="button"
              type="button"
              $background="rgb(229, 230, 231)"
              $fontsize="22px"
              $textdecoration="none"
              $borderradius="25px"
              $color="rgb(0,0,0)"
            >
              <span className="button-span">comida</span>
            </GreenButton>
            <GreenButton
              className="button"
              type="button"
              $background="rgb(229, 230, 231)"
              $fontsize="22px"
              $textdecoration="none"
              $borderradius="25px"
              $color="rgb(0,0,0)"
            >
              <span className="button-span">la gran familia</span>
            </GreenButton>
            <GreenButton
              className="button"
              type="button"
              $background="rgb(229, 230, 231)"
              $fontsize="22px"
              $textdecoration="none"
              $borderradius="25px"
              $color="rgb(0,0,0)"
            >
              <span className="button-span">locas</span>
            </GreenButton>
          </div>
        </div>
      </div>
    </IonModal>
  );
};

export default ModalSearchbar;
