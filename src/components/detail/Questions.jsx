import React from 'react';
import styled from 'styled-components';
import Comment from '../common/Comment';
import KakaoMap from '../common/KakaoMap';


const Questions = () => {
    return (
        <StQuestionsWrap>
            <StTitleBox>제목</StTitleBox>

            <StImgBox>
                <img className='main-img' src={`${process.env.PUBLIC_URL}/img/noImg.jpg`} />
                <div className='sub-img-wrap'>
                    <img className='sub-img' src={`${process.env.PUBLIC_URL}/img/noImg.jpg`} />
                    <img className='sub-img' src={`${process.env.PUBLIC_URL}/img/noImg.jpg`} />
                </div>
            </StImgBox>

            <StContentBox>소개글</StContentBox>
            <StEventLinkBox>
                <div>행사장 링크</div>
                <input type="text" />
            </StEventLinkBox>
            <StEventPlaceBox>
                <div>행사장소</div>
                <div className='address-box'>
                    <div className='tag'>#서울</div>
                    <div className='address'>서울특별시 성북구 동소문로15길 99</div>
                </div>
            </StEventPlaceBox>
            <KakaoMap address='서울특별시 성북구 동소문로15길 99(동소문동7가, 한신휴아파트)' width='100%' height='130px' />
            <StButtonBox>
                <button>수정</button>
            </StButtonBox>
            <Comment />

        </StQuestionsWrap>
    );
};

export default Questions;

const StTitleBox = styled.div`
    height : 34px;
    background-color : pink;
`

const StQuestionsWrap = styled.div`
    width : 95%;
    display:flex;
    flex-direction : column;
    margin : 0 auto;
    gap : 5px;
`

const StImgBox = styled.div`
    margin : 0 auto;
    .main-img {
        width : 330px;
        height : 300px;
    }
    .sub-img-wrap {
        display:flex;
        flex-direction : row;
        gap : 5px;
    }
    .sub-img {
        width: 56px;
        height: 56px;
    }
    
`

const StContentBox = styled.div`
    height : 70px;
    background-color : pink;
`

const StEventLinkBox = styled.div`
    height : 70px;
    background-color : pink;
`

const StEventPlaceBox = styled.div`
    height : 70px;
    background-color : pink;
    .address-box{
        display:flex;
        flex-direction :row;
        justify-content :space-between;
    }
    .tag {
        background-color : white;
        border : none;
        border-radius : 50px;
    }
    .address{

    }
`

const StButtonBox = styled.div`
    display:flex;
    flex-direction :row;
    justify-content :end;
`