import React from 'react';
import Layout from '../components/layout/Layout';

import Event from '../components/detail/Event';
import Gather from '../components/detail/Gather';
import Ask from '../components/detail/Ask';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Detail = () => {
    const { url, postId } = useParams();

    useEffect(() => {
        if (localStorage.getItem('token') === null || localStorage.getItem('token').trim() === 'null' ||
            localStorage.getItem('token') === undefined || localStorage.getItem('token').trim() === '') {
            alert('로그인 해주세요.');
            window.location.replace('/login');
        }
    }, [])

    return (
        <Layout>
            {url === 'eventposts' && <Event postId={postId} url={url} />}
            {url === 'gatherposts' && <Gather postId={postId} url={url} />}
            {url === 'askposts' && <Ask postId={postId} url={url} />}
        </Layout>
    );
};

export default Detail;