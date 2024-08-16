import { IonIcon, IonPage } from "@ionic/react";
import "./Home.css";
import { useState } from "react";
import {
  giftOutline,
  personOutline,
  arrowBackOutline,
  fastFoodOutline,
  bandageOutline,
  bagHandleOutline,
  cafeOutline,
  iceCreamOutline,
  paperPlaneOutline,
  chevronDownOutline,
} from "ionicons/icons";
import GreenButton from "../../assets/GreenButton";
import Searchbar from "../../components/searchbar/Searchbar";
import ModalMe from "../../components/modalMe/ModalMe";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <IonPage className="default-wrapper">
      <div className="landing-wrapper">
        <div className="layout-wrapper">
          <div className="header">
            <div className="header-toolbar">
              <div className="header-toolbar__me">
                <button
                  className="header-toolbar-me__button"
                  onClick={handleOpenModal}
                >
                  <IonIcon
                    className="header-toolbar-me-button_icon"
                    icon={personOutline}
                  ></IonIcon>
                </button>
                <ModalMe isOpen={isOpen} onClose={handleCloseModal}></ModalMe>
              </div>
              <div className="header-toolbar__searchbar">
                <Searchbar></Searchbar>
              </div>
              <div className="header-toolbar__gift">
                <button className="header-toolbar-gift__button">
                  <IonIcon
                    className="header-toolbar-gift-button__icon"
                    icon={giftOutline}
                  ></IonIcon>
                </button>
              </div>
            </div>
            <div className="body__ubication">
              <span>Calle Por Ejemplo, 3</span>
              <IonIcon icon={chevronDownOutline}></IonIcon>
            </div>
            <div className="body__buttons">
              <button className="header-toolbar-me__button--custom">
                <IonIcon
                  className="header-toolbar-me-button_icon--custom"
                  icon={fastFoodOutline}
                ></IonIcon>
                <span className="header-toolbar-me-button_spam--custom">
                  Comida
                </span>
              </button>
              <button className="header-toolbar-me__button--custom">
                <IonIcon
                  className="header-toolbar-me-button_icon--custom"
                  icon={giftOutline}
                ></IonIcon>
                <span className="header-toolbar-me-button_spam--custom">
                  Tiendas y Regalos
                </span>
              </button>
              <button className="header-toolbar-me__button--custom">
                <IonIcon
                  className="header-toolbar-me-button_icon--custom"
                  icon={bandageOutline}
                ></IonIcon>
                <span className="header-toolbar-me-button_spam--custom">
                  Parafarmacia y Belleza
                </span>
              </button>
              <button className="header-toolbar-me__button--custom">
                <IonIcon
                  className="header-toolbar-me-button_icon--custom"
                  icon={bagHandleOutline}
                ></IonIcon>
                <span className="header-toolbar-me-button_spam--custom">
                  Supermercados
                </span>
              </button>
              <button className="header-toolbar-me__button--custom">
                <IonIcon
                  className="header-toolbar-me-button_icon--custom"
                  icon={cafeOutline}
                ></IonIcon>
                <span className="header-toolbar-me-button_spam--custom">
                  Empanadas Malvón
                </span>
              </button>
              <button className="header-toolbar-me__button--custom">
                <IonIcon
                  className="header-toolbar-me-button_icon--custom"
                  icon={iceCreamOutline}
                ></IonIcon>
                <span className="header-toolbar-me-button_spam--custom">
                  Snacks
                </span>
              </button>
              <button className="header-toolbar-me__button--custom">
                <IonIcon
                  className="header-toolbar-me-button_icon--custom"
                  icon={paperPlaneOutline}
                ></IonIcon>
                <span className="header-toolbar-me-button_spam--custom">
                  Envíos
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </IonPage>
  );
};

export default Home;
