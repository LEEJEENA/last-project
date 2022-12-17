import React from 'react';
import styled from 'styled-components';
import home_logo_fill from "../../assets/images/common/home_logo_fill.png"
import logo_git from "../../assets/images/common/logo_git.png"

const Footer = () => {
    return (
        <StFooterWrap>
            <div style={{ width: "180px" }} >
                <img src={home_logo_fill} alt="logo" style={{ width: "180px", padding: "15px" }} />
            </div>
            <ul style={{ display: "flex", gap: "12px" }} >
                <li style={{ width: "35px", height: "35px" }} onClick={() => { window.open('https://github.com/minhyeonhong/last-project') }}> <img src={logo_git} style={{ width: "33px", height: "33px" }} alt="logo" /> <p style={{ fontSize: "13px", textAlign: "center", maragin: "0 auto" }} >FE</p> </li>
                <li style={{ width: "35px", height: "35px " }} onClick={() => { window.open('https://github.com/godchoice-project/godchoice_BE') }}> <img src={logo_git} style={{ width: "33px", height: "33px " }} alt="logo" /> <p style={{ fontSize: "13px", textAlign: "center", maragin: "0 auto" }}>BE</p></li>

            </ul>
            <StCopyright>Copyright ⓒ E1I6 All Rights Reserved.</StCopyright>
        </StFooterWrap>
    );
};

export default Footer;

const StFooterWrap = styled.div`
width : 100%;
height : 180px;
position: relative;
margin-top: 100px ;
    
`

const StCopyright = styled.span`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 400; 
  font-size : 14px;
  width : 100%;
  text-align : center;
`;