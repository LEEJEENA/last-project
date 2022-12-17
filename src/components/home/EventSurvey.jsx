import eventimage1 from '../../assets/images/common/eventimage1.jpg'
import eventimage2 from '../../assets/images/common/eventimage2.jpg'
import styled from 'styled-components'
import Layout from '../layout/Layout';

function EventSurvey() {

    return (
        <>
            <Layout>
                <Title>✨<STBrand>거기어때</STBrand>의 설문조사 이벤트✨</Title>
                <img src={eventimage1} style={{ width: "100%", margin: "0 auto" }} alt="event image 01" />
                <img src={eventimage2} style={{ width: "100%", margin: "0 auto" }} alt="event image 02" />

                <STBox>
                    <br />안녕하세요! <STBrand>거기어때</STBrand>입니다 :)<br /><br />

                    저희 <STBrand>거기어때</STBrand>는 각종 행사 공유와 행사에 함께 갈 사람을 모집하는 플랫폼입니다.<br /><br />
                    <ul>
                        <li>✔ <b>지역 설정하기 </b>: 마이페이지에서 지역을 설정하면 그 지역 행사들을 보여드립니다.</li><br />
                        <li>✔ <b>다양한 정보 공유 </b>: 행사글, 모집글, 질문글을 통해 전시회, 영화 등을 알리거나 함께갈 사람을 모집, 또는 궁금한 것들을 질문할 수 있습니다.</li><br />
                        <li>✔ <b>댓글을 통한 소통 </b>: 자신이 올린 게시물에 댓글이 달리면 실시간으로 알림을 받을 수 있습니다!</li><br />
                    </ul>

                    <b>✅ 이벤트 내용 ✅</b><br /><br />

                    <ul>
                        <li> <b>▶ 이벤트 기간</b> : 2022-12-07 ~ 2022-12-11(5일)</li><br />
                        <li><b>▶ 이벤트 대상</b> : 거기어때 홈페이지를 방문한 회원 및 비회원 모두</li><br />
                        <li> <b>▶ 상품목록</b>
                            <ul>
                                <li>1등 : 배달의 민족 3만원 상품 🛵 (1명)</li>
                                <li>2등 : BHC 뿌링클 2만원 쿠폰 🍗 (3명)</li>
                                <li>3등 : 스타벅스 커피 ☕ (10명)</li>
                            </ul></li>
                    </ul>


                    💎 <STBrand>거기어때</STBrand>는 모바일 환경에 최적화 되어 있습니다. 💎<br />
                    <ul><li>모바일 환경으로 접속 부탁드립니다.</li></ul>
                </STBox>
                <Button onClick={() => { window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdEElkxheSZxy_2boZBEUYsOfb5Xfcjs74FszNgOp3xw1Xf9w/viewform?usp=pp_url' }} >피드백 남기러 가기 <span style={{ color: "#ffe401" }}>click</span></Button >
            </Layout>
        </>
    )
}

export default EventSurvey;

const Title = styled.div`
    text-align: center;
    font-size: 20px;
    margin: 30px auto;
    background-color: white;
    border-radius: 20px;
    width:80%;
    padding-top:10px;
    height: 48px;
`

const Button = styled.div`
    background-color:#3556e1;
    color : white;
    width :60%;
    text-align: center;
    margin: 10px auto;
    padding:10px 0px;
    border-radius: 15px;
`
const STBox = styled.div`
    border-radius: 5px ;
    border: 2px solid #3556e1 ;
    width: 90%;
    margin: 20px auto;
    padding: 10px;
`

const STBrand = styled.b`
    color :#3556e1;
`
