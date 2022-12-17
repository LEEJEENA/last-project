import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useMutation, useQuery } from '@tanstack/react-query';
import { notificationApis } from '../../api/api-functions/notificationApis';
import { useNavigate } from 'react-router-dom';

function Alram() {

    const navigate = useNavigate();
    //알림 불러오기
    const getNotice = async () => {
        const res = await notificationApis.getNotificationAX();
        const resList = res.data.data;
        const unReadNum = resList?.filter((notice) => { return !notice.readStatus }).length;
        return { resList, unReadNum };
    }
    //알림 server state
    const result = useQuery(
        ["getNotice"],
        getNotice,
    );


    //알림 읽고 해당 게시물로 이동
    const putNotice = useMutation({
        mutationFn: (id) => {
            return notificationApis.putNotificationAX(id);
        },
        onSuccess: res => {
            if (res.data.status === 200) {
                navigate(res.data.msg);
            }
        },
    })
    const onClickPut = (id) => {
        putNotice.mutate(id);
    }

    //알림 삭제
    const deleteNotice = useMutation({
        mutationFn: (id) => {
            return notificationApis.deleteNotificationAX(id);
        },
        onSuccess: res => {
            if (res.data.status === 200) {
                //setNoticeList(res.data.data);
                result.refetch();
            }
        },
    })
    const onDeleteAlram = (id) => {
        deleteNotice.mutate(id);
    }

    if (result.isLoading) {
        return null;
    }
    return (
        <>
            {result.data.resList.length === 0 ?
                (<STDiv>
                    <STContent>알림 내용이 없습니다❗</STContent>
                </STDiv>) :
                (
                    <STDiv>
                        {result.data.resList?.filter((filterList) => filterList.readStatus === false)
                            .map((comment, index) => {
                                return (
                                    <div key={index}>
                                        <STBox onClick={() => onClickPut(comment.notificationId)}>
                                            <STDelete onClick={(e) => {
                                                e.stopPropagation()
                                                onDeleteAlram(comment.notificationId)
                                            }}>✖</STDelete>
                                            <p> <b>{comment.title}</b>님이
                                                <br />댓글을 입력하셨습니다.
                                            </p>
                                            <STComment>💬{comment.message.length > 6 ? (comment.message.slice(0, 6) + "...") : (comment.message)} </STComment>
                                            <STCreatAT>{comment.createdAt}</STCreatAT>

                                        </STBox>
                                    </div>
                                )
                            })}
                        {result.data.resList?.filter((filterList) => filterList.readStatus === true)
                            .map((comment, index) => {
                                return (
                                    <div key={index}>
                                        <STBox2 onClick={() => onClickPut(comment.notificationId)}>
                                            <STDelete onClick={(e) => {
                                                e.stopPropagation()
                                                onDeleteAlram(comment.notificationId)
                                            }}>✖</STDelete>
                                            <p> <b>{comment.title}</b>님이
                                                <br />댓글을 입력하셨습니다.
                                            </p>
                                            <STComment>{comment.message.length > 6 ? (comment.message.slice(0, 6) + "...") : (comment.message)} </STComment>
                                            <STCreatAT>{comment.createdAt}</STCreatAT>

                                        </STBox2>
                                    </div>
                                )
                            })}
                    </STDiv>
                )
            }

        </>
    )
}

export default Alram;

const STDiv = styled.div`
    position: absolute;
    background-color: white;
    width:180px;
    height: 250px;
    right:20px;
    margin-right: 30px;
    border-radius: 15px;
    z-index: 99999!important;
    width: 200px;
    height: 200px;
    top:48px;
    overflow-y: scroll;
&::-webkit-scrollbar {
    display: flex;
    width: 8px;  /* 스크롤바의 너비 */
}
&::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #3556e1; /* 스크롤바의 색상 */ 
    border-radius: 10px;
}
`

const STBox = styled.div`
    background-color: rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(106, 106, 106, 0.1);
    border-radius: 10px;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 20%);
    height: 110px;
    margin:10px 0px;
    z-index: 99999!important;
    p{
        padding-top: 10px;
        text-align: center;
    }
`

const STBox2 = styled.div`
    background-color: rgba(26, 22, 22, 0.2);
    border: 1px solid rgba(106, 106, 106, 0.1);
    border-radius: 10px;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 20%);
    height: 110px;
    margin:10px 0px;
    color:gray;
    z-index: 99999!important;
    p{
        padding-top: 10px;
        text-align: center;
    }
`

const STDelete = styled.div`
    float: right;
    padding-right: 10px;
    cursor: pointer;
`
const STCreatAT = styled.div`
    color:black;
    font-size: 13px;
    float:right;
    margin-right: 10px;
`
const STComment = styled.div`
    margin-top: 10px;
    border-radius: 10px;
    text-align: center;
    width :70%;
    margin:auto;
    border: 1px solid rgba(106, 106, 106, 0.3);
`
const STContent = styled.div`
    text-align: center;
    margin:60px 0px;
    margin-left: 15px;
    font-size:15px;
    background-color: rgba(220, 224, 241, 0.9);
    border-radius: 15px;
    height: 70px;
    padding-top: 25px;
    width: 88%;

`