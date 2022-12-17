import React from "react";
import styled from "styled-components";
import Button from "../elements/Button";

const AlertModal = (props) => {
  const { closeModal } = props;
  const { title, btn1 } = props.alertModalData;
  return (
    <>
      <ModalWrap onClick={props.goAction}>
        <ModalBody
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
            <AttendTitle>{title}</AttendTitle>
              <Button btnType="modal" onClick={props.goAction}>{btn1}</Button>
          </ModalBody>
      </ModalWrap>
    </>
  );
};
export default AlertModal;

const ModalWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding: 0 15px;
  box-sizing: border-box;
`;

const ModalBody = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 12px;
`;

const AttendTitle = styled.p`
  font: 22px/30px "Noto Sans KR", "sans-serif";
  text-align: center;
  padding: 50px 0;
`;