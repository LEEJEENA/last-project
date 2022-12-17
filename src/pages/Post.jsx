import React from 'react';
import Layout from '../components/layout/Layout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Post = () => {

    // 모집 구분글
    const navigate = useNavigate();
    return (
        <Layout>
            <STdiv onClick={() => { navigate('/festivalpost') }}>행사글</STdiv><br />
            <STdiv onClick={() => { navigate('/gatherpost') }}>모집글</STdiv><br />
            <STdiv onClick={() => { navigate('/questionpost') }}>질문글</STdiv><br />


        </Layout>
    );
};

export default Post;

const STdiv = styled.button`
    font-size: 14px;
    background-color: #F4F4F4;
    width : 40%;
    border-radius: 10px;
    border : transparent;
    padding:5px;
    height : 32px;
    margin-top: 10px;
`