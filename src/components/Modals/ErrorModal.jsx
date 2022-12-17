import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OkModal from "./OkModal";

const ErrorModal = ({ error, notGo }) => {
  const [okModal, setOkModal] = useState(true);
  const navigate = useNavigate();

  const okModalOnOff = () => {
    if (notGo) {
      setOkModal(false);
    } else {
      setOkModal(false);
      navigate("/");
    }
  };

  return <>{okModal && <OkModal title={error} modalOnOff={okModalOnOff}></OkModal>}</>;
};

export default ErrorModal;
