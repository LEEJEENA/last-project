import React, { useState, useMemo } from "react";

import Layout from "../components/layout/Layout";
import List from "../components/home/List";
import Search from "../components/home/Search";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TopButton from "../components/elements/TopButton";
import ScrollToTop from "../components/elements/ScrollToTop";
import WritingToggle from "../components/elements/WritingToggle";

import PageState from "../components/common/PageState";

import { postApis } from "../api/api-functions/postApis";
import { useQuery } from "@tanstack/react-query";
import useInput from "../hooks/useInput";

// 가이드 모달
import { flexRow } from "../components/styles/Flex";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import guide01 from "../assets/images/banner/guide/guide_01.png";
import guide02 from "../assets/images/banner/guide/guide_02.png";
import guide03 from "../assets/images/banner/guide/guide_03.png";

SwiperCore.use([Pagination, Autoplay, Navigation]);
// ------------- 여기까지 ---------------

const Home = () => {

  //배너 가져오기
  const banner = useQuery(['banner'], async () => await postApis.getAdminPostAX(), { cacheTime: 3000, refetchOnWindowFocus: false, retry: 1 })

  //유저 지역정보 가져오기
  const userAddressTag = localStorage.getItem('userAddressTag');
  //client 검색 state
  const [searchState, setSearchState] = useState({
    main: "event",
    tag: userAddressTag !== null && userAddressTag !== 'null' ? [userAddressTag] : [],
    progress: '진행중',
    sort: '최신순',
    search: '',
  });
  //검색어 state
  const [search, setSearch, searchHandle] = useInput({ search: '' });
  //검색어로 검색후 검색어를 지웠을때 처리
  useMemo(() => {
    if (search.search === "") {
      setSearchState({ ...searchState, search: search.search });
    }
  }, [search.search])

  //모달
  const [modalOn, setModalOn] = useState(false);

  // 가이드 모달
  const [guideOn, setGuideOn] = useState(false);
  const guides = [guide01, guide02, guide03];
  // ------------- 여기까지 ---------------

  return (
    <Layout>
      <StHomeWrap>
        <>
          <ScrollToTop />
          {modalOn && (
            <WritingToggle modalOn={modalOn} setModalOn={setModalOn} />
          )}
          <TopButton modalOn={modalOn} setModalOn={setModalOn} />

          {guideOn && (
            <Bg
              onClick={() => {
                setGuideOn(!guideOn);
              }}
            >
              <button
                onClick={() => {
                  setGuideOn(!guideOn);
                }}
              >
                ✕
                {/* 닫기 */}
              </button>
              <StyleGuide onClick={(e) => e.stopPropagation()}>
                <StyledSwiper
                  className="swipe"
                  spaceBetween={0}
                  slidesPerView={1}
                  scrollbar={{ draggable: true }}
                  // navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 15000, disableOnInteraction: false }}
                  loop={true}
                  centeredSlides={true}
                  style={{ backgroundColor: "transparent" }}
                >
                  {/* {guides?.map((guide, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <ItemDetailImg src={guide} />
                      </SwiperSlide> */}
                  {/* return ( */}
                  <>
                    <SwiperSlide>
                      <div style={{ textAlign: "center" }}>
                        <h4 style={{ fontWeight: 600 }}>지역 맞춤 설정</h4>
                        <p style={{ fontSize: "12px" }}>
                          마이페이지에서 관심 지역을 설정하면 <br />
                          선택 지역 행사들을 <br />
                          우선적으로 보여드립니다.
                          <br />
                          태그로도 지역 선택이 가능합니다!<br /><br />

                        </p>
                      </div>
                      <ItemDetailImg src={guide01} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <div style={{ textAlign: "center" }}>
                        <h4 style={{ fontWeight: 600 }}>다양한 정보를 보고 함께!</h4>
                        <p style={{ fontSize: "12px" }}>
                          행사글, 모집글, 질문글로
                          <br /> 전시회, 영화 등을 알리거나
                          <br />
                          함께 갈 사람을 모집, 또는 <br />
                          궁금한 것을 질문할 수 있습니다.<br /><br />
                        </p>
                      </div>
                      <ItemDetailImg src={guide02} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <div style={{ textAlign: "center" }}>
                        <h4 style={{ fontWeight: 600 }}>실시간 알림 기능</h4>
                        <p style={{ fontSize: "12px" }}>
                          댓글이 달리면 실시간으로 <br />
                          알림을 받을 수 있어 <br />
                          용이하게 사용할 수 있습니다! <br /><br /><br />
                        </p>
                      </div>
                      <ItemDetailImg src={guide03} />
                    </SwiperSlide>
                  </>
                  {/* ); */}
                  {/* })} */}
                </StyledSwiper>
                {/* StyledSwiper */}
              </StyleGuide>
            </Bg>
          )}

          {/* ---------- 여기까지 ---------- */}
        </>
        {/* 슬라이드 */}
        <StCarouselWrap>
          <Carousel >
            {!banner.isLoading &&
              banner.data?.data.data.length === 0 ?
              <Carousel.Item>
                <PageState
                  display='flex'
                  state='notFound' imgWidth='25%' height='180px'
                  text='등록된 배너가 없습니다.' />
              </Carousel.Item>
              :
              banner.data?.data.data.map((post) => {
                return (
                  <Carousel.Item key={post.id} onClick={() => {
                    if (post.postLink === "https://이용방법") {
                      setGuideOn(!guideOn);
                    } else {
                      window.open(post.postLink, post.title)
                    }
                  }}>
                    <img style={{ height: "180px" }}
                      className="d-block w-100"
                      src={post.imgLink}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>{post.title}</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })}
          </Carousel>
        </StCarouselWrap>

        {/* 검색 */}
        <Search
          searchState={searchState}
          setSearchState={setSearchState}
          search={search}
          searchHandle={searchHandle}
        />

        {/* 리스트 */}
        <StTabBox>
          <Tabs
            defaultActiveKey="event"
            id="justify-tab-example"
            activeKey={searchState.main}
            onSelect={(key) =>
              setSearchState({ ...searchState, main: key, page: 0 })
            }
            className="tabs"
            justify
          >
            <Tab eventKey="event" title="행사글" />
            <Tab eventKey="gather" title="모집글" />
            <Tab eventKey="ask" title="질문글" />
          </Tabs>
          {/* 리스트 */}
          <List searchState={searchState} />
          <Deletes />
        </StTabBox>
      </StHomeWrap>
    </Layout>
  );
};

export default Home;

const Deletes = styled.div`
  width: 100%;
`;

const StHomeWrap = styled.div`
  display: ${(props) => props.display};
`;

const StCarouselWrap = styled.div`
  .carousel-indicators [data-bs-target] {
    width: 3px;
    border-radius: 50%;
  }
  /* .carousel a {
    display: none;
  } */
  .carousel-caption {
    right: 0%;
    text-align: inherit;
  }
`;
const StTabBox = styled.div`
  .tabs {
    margin: 0 10px;
  }
  .nav-link {
    color: #adaba9;
    font-weight: bold;
  }
  .nav-link.active {
    color: black;
    font-weight: bold;
  }
  .nav-link.active {
    color: black;
    font-weight: bold;
    border-bottom: 2px solid #3556e1;
  }
`;

export const StyledSwiper = styled(Swiper)`
  background: transparent;
  /* ${flexRow}
  justify-content: center; */
  /* width:100%; */
  width: 100%;
  color: #fff;

  /* @media screen and (max-width: 425px)  {
        width: 95%;
        border-radius: 20px;
    } */
`;


const StyleGuide = styled.div`
  /* ${flexRow}
  justify-content: center; */
  width: 300px;
  height: auto;
  position: absolute;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  /* @media screen and (min-width: 400px) and (max-width:100vw) {
        width: 400px;
        height: 100%;
        border-radius: 20px;
    } */
  .swipe {
    width: 100%;
  }
`;

const Bg = styled.div`
  ${flexRow}
  z-index: 99;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  right: 0;
  width: 425px;
  background-color: #3556e1;
  button {
    z-index: 100;
    /* display: flex; */
    position: fixed;
    right:10px;
    top:0;
    margin: 10px 10px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    background-color: transparent;
    color: #ffffffd3;
    /* justify-content: center; */
    border: none;
    :hover {
      cursor: pointer;
    }
  }
`;

export const ItemDetailImg = styled.img`
  width: 70%;
  height: auto;
  /* margin: 0 auto; */
  /* position: absolute;
  left: 50%; */
  display: flex;
  align-items: center;
  margin: 10px auto;
  /* transform: translateX(-50%); */

`;
