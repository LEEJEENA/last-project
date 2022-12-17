import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Bell, MyPage } from '../../assets';
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/common/home_logo_fill.png"

import { RiLoginBoxLine } from 'react-icons/ri';
import { EventSourcePolyfill } from 'event-source-polyfill';

import { notificationApis } from '../../api/api-functions/notificationApis';
import Alram from '../home/Alram';
import AlramAlert from '../home/AlramAlert';
import { useQuery } from '@tanstack/react-query';
import { alramState } from '../../recoil/atoms';
import { useRecoilState } from 'recoil';
const Header = () => {

    const navigate = useNavigate();
    const [alram, setAlram] = useRecoilState(alramState);

    //로그인 여부
    const isLogin = localStorage.getItem('token') !== null;

    //알림 불러오기
    const getNotice = async () => {
        const res = await notificationApis.getNotificationAX();
        const resList = res.data.data;
        const unReadNum = resList?.filter((notice) => { return !notice.readStatus }).length;
        return { resList, unReadNum };
    }
    //알림 server state
    const result = useQuery(
        ['getNotice'],
        getNotice,
    )


    //sse연결 여부
    const isSSE = localStorage.getItem('sse') === "connect" ? true : false;

    //SSE 
    useEffect(() => {
        if (!isSSE && isLogin) {
            const eventSource = new EventSourcePolyfill(`${process.env.REACT_APP_API_URL}/subscribe`, {
                headers: {
                    "Access_Token": localStorage.getItem("token"),
                    'Content-Type': 'text/event-stream',
                },
                heartbeatTimeout: 3600000, //sse 연결 시간 (토큰 유지1시간)
                withCredentials: true,
            });
            //sse 연결
            eventSource.onopen = (event) => {
                if (event.status === 200) {
                    localStorage.setItem('sse', "connect");
                }
            };

            //sse 받는 처리
            eventSource.onmessage = (event) => {
                //받은 데이터 Json타입으로 형변환 가능여부fn
                const isJson = (str) => {
                    try {
                        const json = JSON.parse(str);
                        return json && typeof json === 'object';
                    } catch (e) {
                        return false;
                    }
                };
                if (isJson(event.data)) {
                    //알림 리스트 refetch
                    result.refetch();
                    //실시간 알림 데이터
                    const obj = JSON.parse(event.data);
                    //setNewNotice(obj);
                    setAlram(obj);
                }
            };

            //sse 에러
            eventSource.onerror = event => {
                eventSource.close();
                localStorage.setItem('sse', null);
            };
        }

    }, [isLogin]);

    const [notice, setNotice] = useState(false);
    const popUpNotice = () => {
        setNotice(!notice)
    }
    if (result.isLoading) {
        return null;
    }

    return (
        <>

            <StHeaderWrap>

                <StLogoBox> <Link to="/"> <img src={logo} style={{ width: '166px' }} alt="logo" /></Link></StLogoBox>
                <StRightBox>
                    {localStorage.getItem("token") === null ?
                        <RiLoginBoxLine style={{ width: '32px', height: "48px", marginRight: "15px", padding: "2px", color: '#00208F', cursor: "pointer" }}
                            onClick={() => { navigate("/login") }} />
                        :
                        <>
                            <StBell>
                                {/* {alramNum > 0 && <div className='bellNum'>{alramNum}</div>} */}
                                {result.data.unReadNum > 0 && <div className='bellNum'>{result.data.unReadNum}</div>}
                                <Bell style={{ height: "48px", marginRight: "15px", padding: "2px", cursor: "pointer" }} onClick={popUpNotice} />
                            </StBell>
                            <MyPage style={{ height: "48px", marginRight: "5px", padding: "2px", cursor: "pointer" }}
                                onClick={() => { navigate("/mypage") }} />
                        </>
                    }
                </StRightBox>
            </StHeaderWrap>
            {/* 알림 리스트 모달 */}
            {notice && <Alram />}
            <AlramAlert />
        </>
    );
};

export default Header;

const StHeaderWrap = styled.div`
    position:sticky;
    position: relative;
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

const StLogoBox = styled.p`
    position: absolute;
    top : 0;
    left: 0;
    img {
        width: 100%;
        height: 48px;
        padding : 6px;
    }
`

const StRightBox = styled.div`
    position : absolute;
    right : 0;
    top : 0;
    display: flex;
`

const StBell = styled.div`
    position : relative;
    .bellNum {
        position : absolute;
        top : 5px;
        left: 15px;
        color : white;
        font-size : 1px;
        padding:1px 6px;
        border-radius: 50%;
        background-color:#00208F;
    }
`
