import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';

import Event from '../components/detail/Event';
import Questions from '../components/detail/Questions';
import Recruitment from '../components/detail/Recruitment';

const Detail = () => {
    return (
        <Layout>
            <Questions />
        </Layout>
    );
};

export default Detail;