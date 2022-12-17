import React from "react";
import styled from "styled-components";
import Button from "../elements/Button";

const OkModal = (props) => {
  const { title, modalOnOff } = props;

  return (
    <>
      <ModalWrap onClick={modalOnOff}>
        <ModalBody
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <AttendWrap>
            <AttendTitle>{title}</AttendTitle>
              <Button btnType="modal" onClick={modalOnOff}>
                확인
              </Button>
          </AttendWrap>
        </ModalBody>
      </ModalWrap>
    </>
  );
};
export default OkModal;

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

const AttendWrap = styled.div`
  display: "block";
`;

const AttendTitle = styled.p`
  font-size: 22px;
  text-align: center;
  padding: 50px 10px;
`;

