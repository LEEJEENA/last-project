import React from "react";
import styled from "styled-components";
import { GOOGLE_AUTH_URL, KAKAO_AUTH_URL, NAVER_AUTH_URL, GITHUB_AUTH_URL } from "../../api/login";
import { flexColumn } from "../styles/Flex";
import { GoogleBtn, KakaoBtn, NaverBtn } from "../../assets";
import { Link } from "react-router-dom";

import home_logo from "../../assets/images/common/home_logo.png"



const Login = () => {

  const onClickHandler = (flag) => {
    if (flag === "k") {
      window.location.href = KAKAO_AUTH_URL;
    } else if (flag === "n") {
      window.location.href = NAVER_AUTH_URL;
    } else if (flag === "g") {
      window.location.href = GOOGLE_AUTH_URL;
    }
  };
  return (
    <>
      <LoginWrap>
        <Container>
          <Link to='/' > <Logo style={{ cursor: "pointer" }}> <img src={home_logo} alt="logo" /> </Logo></Link>
          <KakaoBtn style={{ width: "100%", cursor: "pointer" }} onClick={() => onClickHandler("k")} />
          <NaverBtn style={{ width: "100%", cursor: "pointer" }} onClick={() => onClickHandler("n")} />
          <GoogleBtn style={{ width: "100%", cursor: "pointer" }} onClick={() => onClickHandler("g")} />
          {/* <button onClick={() => window.location.href = GITHUB_AUTH_URL}>github login</button> */}
        </Container>
      </LoginWrap>
    </>
  );
};
export default Login;

const LoginWrap = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  ${flexColumn}
  align-items: center;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  /* height: 130px; */
  margin:100px auto;
  img {
    width: 100%;
  }
`;
const Container = styled.div`
  width: 100%;
  ${flexColumn}
  align-items: center;
  gap: 15px;
  box-sizing: border-box;
  padding: 0 20px;
  text-align: center;
`;


