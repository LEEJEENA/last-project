import React from 'react';
import styled from 'styled-components';

import loadingImg from '../../assets/images/common/spiner_hands.gif'
import notFoundImg from '../../assets/images/common/spiner_eyes.gif'
import failRequestImg from '../../assets/images/common/404.png'

import Button from '../elements/Button';

const PageState = (props) => {

    return (
        <StBackground
            display={props.display}
            height={props.height}
            position={props.position}
            flexDirection={props.flexDirection}
            zIndex={props.zIndex}
        >
            {
                props.state === 'loading' &&
                <StImg
                    alt='loading'
                    imgUrl={loadingImg}
                    imgWidth={props.imgWidth}
                />
            }
            {
                props.state === 'notFound' &&
                <StImg
                    alt='notFound'
                    imgUrl={notFoundImg}
                    imgWidth={props.imgWidth}
                />
            }
            {
                props.state === 'failRequest' &&
                <StImg
                    alt='loading'
                    imgUrl={loadingImg}
                    imgWidth={props.imgWidth}
                />
            }

            <StText>{props.text}</StText>
            {
                props.state === 'failRequest' &&
                <MyDoneBtnWrap>
                    <Button btnType="submit" onClick={() => window.location.reload()}>재시도</Button>
                    <Button btnType="submit" onClick={() => window.location.replace("/")}>홈으로 가기</Button>
                </MyDoneBtnWrap>
            }
        </StBackground>
    );
};

export default PageState;

const StBackground = styled.div`
position: ${(props) => props.position}; //absolute
width: 100%;
height: ${(props) => props.height};
top: 0;
left: 0;
background: #ffffffb7;
z-index: ${(props) => props.zIndex};
display: ${(props) => props.display};
flex-direction: ${(props) => props.flexDirection};
align-items: center;
justify-content: center;
backdrop-filter: blur(5px);
`;

const StImg = styled.img`
width : ${(props) => props.imgWidth};
content : url(${(props) => props.imgUrl});
`

const StText = styled.div`
font-weight : bold;
margin-top : 10px;
text-align: center;
`;

const MyDoneBtnWrap = styled.div`
  display: flex;
  gap : 10px;
  height: 56px;
  margin : 50px 0 100px 0;
`;