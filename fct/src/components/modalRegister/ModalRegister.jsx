import { arrowBackOutline } from "ionicons/icons";
import GreenButton from "../../assets/GreenButton";
import "./ModalRegister.css";
import { IonIcon, IonModal } from "@ionic/react";
import { useState, useEffect } from "react";
import Email from "./email/Email";
import Password from "./password/Password";
import Name from "./name/Name";
import PasswordWithEmailRegistered from "./password/passwordWithEmailRegistered/PasswordWithEmailRegistered";

export default function ModalRegister({ isOpen, onClose }) {
  const [button, setButton] = useState(0);
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const buttons = ["a", "b", "c"];

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setButton(0);
        setEmail("");
        setName("");
        setPassword("");
      }, 500);
    }
  }, [isOpen]);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setIsButtonDisabled(!isValidEmail(value));
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleButtonClick = () => {
    if (button < buttons.length - 1) {
      setButton((button) => button + 1);
    } else {
      onClose();
    }
  };

  const handleButtonClose = () => {
    onClose();
  };

  const handleReverseOrder = () => {
    if (button === 0) {
      onClose();
    } else {
      setButton((button) => button - 1);
    }
  };

  const components = [
    <Email
      value={email}
      onChange={handleEmailChange}
      onEmailChange={handleEmailChange}
      handleButtonClick={handleButtonClick}
      isButtonDisabled={isButtonDisabled}
    />,
    email == "prueba@gmail.com" ? (
      <PasswordWithEmailRegistered
        value={password}
        onChange={handlePasswordChange}
        handleButtonClick={handleButtonClose}
        isButtonDisabled={isButtonDisabled}
        email={email}
      />
    ) : (
      <Password
        key="password"
        value={password}
        onChange={handlePasswordChange}
        handleButtonClick={handleButtonClick}
        isButtonDisabled={isButtonDisabled}
        email={email}
      />
    ),
    email != "prueba@gmail.com" ? (
      <Name
        key="name"
        value={name}
        onChange={handleNameChange}
        handleButtonClick={handleButtonClick}
        isButtonDisabled={isButtonDisabled}
      />
    ) : (
      ""
    ),
  ];

  return (
    <IonModal className="modal-landing" isOpen={isOpen} onDidDismiss={onClose}>
      <div className="modal-layout-register">
        <nav className="modal-layout__toolbar">
          <GreenButton
            type="submit"
            $padding="0px"
            $marginbottom="25px"
            $background="transparent"
            $fontsize="22px"
            $textdecoration="none"
            $borderradius="25px"
            $color="rgb(0,0,0)"
            $textalign="left"
            onClick={handleReverseOrder}
          >
            <IonIcon
              className="modal-layout__toolbar__icon"
              icon={arrowBackOutline}
            ></IonIcon>
          </GreenButton>
        </nav>
        {components[button]}
      </div>
    </IonModal>
  );
}
