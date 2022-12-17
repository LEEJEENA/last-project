import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const WritingToggle = ({ modalOn, setModalOn }) => {
    const navigate = useNavigate();

    const writePost = (url) => {
        if (localStorage.getItem('token') === null || localStorage.getItem('token') === 'null' ||
            localStorage.getItem('token') === undefined || localStorage.getItem('token') === '') {
            alert('로그인 해주세요.');
            window.location.replace('/login');
        } else {
            navigate(url)
        }
    }

    return (
        <WritingToggleWrap>
            <Cate onClick={() => writePost("/festivalpost")} style={{ marginTop: "17px" }}>행사글</Cate>
            <Cate onClick={() => writePost("/gatherpost")}>모집글</Cate>
            <Cate onClick={() => writePost("/questionpost")}>질문글</Cate>
        </WritingToggleWrap>
    )
};

export default WritingToggle;

const WritingToggleWrap = styled.div`
z-index : 999;
/* background-color: gray;
opacity : 0.8; */
background: #00208F;
opacity: 80%;
color : #fff;
border-radius : 10px;
/* padding : 10px; */
width: 80px;
height: 112px;
position: fixed;
bottom: 45px;
right:27%;
/* left: 54%;
transform: translateX(-50%); */
text-align : center;
@media screen and (min-width: 425px) and (max-width : 100vw) {
    width: 80px;
    left: calc(50% + 50px);
    transform: translateX(-50%);
  }`
/* img {
    width: 20px;
    height: 20px;
    position:absolute;
    right: 10px;
}` */

const Cate = styled.div`
    cursor : pointer;
    height: 33.3333%;
    flex: 1;
    align-items: center;
    text-align: center;
    line-height: 33.3333%;
`

