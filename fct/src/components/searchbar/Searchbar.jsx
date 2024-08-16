import React, { useState } from "react";
import "./Searchbar.css";
import { IonIcon, IonItem, IonList, IonSearchbar } from "@ionic/react";
import ModalSearchbar from "./modalSearchbar/ModalSearchbar";
import GreenButton from "../../assets/GreenButton";
import { search, searchOutline } from "ionicons/icons";

const Searchbar = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <GreenButton
        className="button"
        type="button"
        $background="#fce295"
        $fontsize="22px"
        $textdecoration="none"
        $borderradius="25px"
        $color="rgb(0,0,0)"
        onClick={handleOpenModal}
      >
        <IonIcon className="button-icon" icon={searchOutline}></IonIcon>
        <span className="button-span">¿Qué necesitas?</span>
      </GreenButton>
      <ModalSearchbar isOpen={isOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Searchbar;
