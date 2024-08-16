import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { IonPage, IonSpinner } from "@ionic/react";

const Welcome = () => {
  return (
    <IonPage>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <IonSpinner name="dots" />
      </div>
    </IonPage>
  );
};

export default Welcome;
