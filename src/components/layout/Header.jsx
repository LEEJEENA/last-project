import React from 'react';
import styled from 'styled-components';
// import { BsFillPersonFill, BsBell } from 'react-icons/bs'
import { Back, Bell, MyPage } from '../../assets';
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/common/logo.png"



const Header = () => {

    const navigate = useNavigate();

    return (
        <StHeaderWrap>
            {/* <StBackBox><button className='arrow-left' onClick={() => { window.history.back() }} /></StBackBox> */}
            {/* <Back } style={{height: "48px"}} /> */}
            <StLogoBox> <Link to="/"> <img src={logo} /></Link></StLogoBox>
            <StRightBox>
                {/* <button><BsBell style={{ width: "20px", height: "20px" }} /></button>
                {
                    localStorage.getItem("token") === null ?
                        <button>로그인</button>
                        :
                        <button><BsFillPersonFill style={{ width: "20px", height: "20px" }} /></button>
                } */}
                <Bell style={{height: "48px", marginRight: "15px", padding:"2px"}} />
                <MyPage style={{height: "48px", marginRight: "5px", padding:"2px"}} onClick={() => {localStorage.getItem("token") === null ? navigate("/login") : navigate("/mypage")}}
                />

            </StRightBox>
        </StHeaderWrap>
    );
};

export default Header;

const StHeaderWrap = styled.div`
    position:sticky;
    top : 0;  
    z-index : 1;
    width : 100%;
    height : 48px;

    display : flex;
    flex-direction : row;
    justify-content : space-between;
    background-color : white;
    button {
        background-color : transparent;
        border : none;
        vertical-align : middle;
        height : 48px;
    }
`
// const StBackBox = styled.div`
//     .arrow-left {
//         width: 1rem;
//         height: 1rem;
//         border: 2px solid #333;
//         border-left: 0;
//         border-top: 0;
        
//         margin-left : 10px;
//         transform: rotate(135deg);
//     }
// `


const StLogoBox = styled.p`
    position: fixed;
    top : 0;
    left: 50%;
    transform: translateX(-50%);
    img {
        widht: 100%;
        height: 48px;
        padding : 3px;
    }

`

const StRightBox = styled.div`
    position : absolute;
    right : 0;
    top : 0;
`
