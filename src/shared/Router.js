import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import MyPage from "../pages/MyPage";
import Post from "../pages/Post";
import Detail from "../pages/Detail";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* 홈 페이지 */}
                <Route path="/" element={<Home />} />
                {/* 마이 페이지 */}
                <Route path="/mypage" element={<MyPage />} />
                {/* 포스트 페이지 */}
                <Route path="/post" element={<Post />} />
                {/* 디테일 페이지 */}
                <Route path="/detail" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;



