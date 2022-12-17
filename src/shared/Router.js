import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageState from "../components/common/PageState";

const Kakao = lazy(() => import("../components/login/Kakao"))
const Naver = lazy(() => import("../components/login/Naver"))
const Google = lazy(() => import("../components/login/Google"))
const Github = lazy(() => import("../components/login/Github"))
const Home = lazy(() => import("../pages/Home"))
const LoginPage = lazy(() => import("../pages/LoginPage"))
const Post = lazy(() => import("../pages/Post"))
const Detail = lazy(() => import("../pages/Detail"))

const MyPage = lazy(() => import("../pages/myPage/MyPage"))
const MyPageEdit = lazy(() => import("../pages/myPage/MyPageEdit"))
const MyPagePost = lazy(() => import("../pages/myPage/MyPagePost"))
const MyPageCmt = lazy(() => import("../pages/myPage/MyPageCmt"))
const MyPageScrap = lazy(() => import("../pages/myPage/MyPageScrap"))
const FestivalPost = lazy(() => import("../components/post/FestivalPost"))
const GatherPost = lazy(() => import("../components/post/GatherPost"))
const QuestionPost = lazy(() => import("../components/post/QuestionPost"))
const EventSurvey = lazy(() => import("../components/home/EventSurvey"))


const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<PageState display='flex' flexDirection='column' state='failRequest' imgWidth='25%' height='100vh'
                text='잠시만 기다려주세요.' />}>
                <Routes>
                    {/* 홈 페이지 */}
                    <Route path="/" element={<Home />} />
                    {/* 포스트 페이지 */}
                    <Route path="/post" element={<Post />} />

                    {/* 로그인 페이지 */}
                    <Route path="/login" element={<LoginPage />} />
                    {/* 카카오 로그인 --- Redirect_URI 경로로 넣기*/}
                    <Route path="/member/signup/kakao" element={<Kakao />} />
                    {/* 네이버 로그인 --- Redirect_URI 경로로 넣기*/}
                    <Route path="/member/signup/naver" element={<Naver />} />
                    {/* 구글 로그인 --- Redirect_URI 경로로 넣기*/}
                    <Route path="/member/signup/google" element={<Google />} />
                    {/* 깃허브 로그인 --- Redirect_URI 경로로 넣기*/}
                    <Route path="/member/signup/github" element={<Github />} />

                    {/* 디테일 페이지 */}
                    <Route path="/:url/:postId" element={<Detail />} />
                    {/* 행사글 페이지*/}
                    <Route path="/festivalpost" element={<FestivalPost />} />
                    {/*모집글 페이지*/}
                    <Route path="/gatherpost" element={<GatherPost />} />
                    {/*질문글 페이지*/}
                    <Route path="/questionpost" element={<QuestionPost />} />

                    {/* 마이페이지 */}
                    <Route path="/mypage" element={<MyPage />} />
                    {/* 마이페이지 수정 */}
                    <Route path="/mypageedit" element={<MyPageEdit />} />
                    {/* 마이페이지 내가 쓴 글 */}
                    <Route path="/mypagepost" element={<MyPagePost />} />
                    {/* 마이페이지 댓글 단 글 */}
                    <Route path="/mypagecomment" element={<MyPageCmt />} />
                    {/* 마이페이지 스크랩 */}
                    <Route path="/mypagescrap" element={<MyPageScrap />} />
                    {/* 이벤트 페이지 */}
                    <Route path="/eventsurvey" element={<EventSurvey />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Router;



