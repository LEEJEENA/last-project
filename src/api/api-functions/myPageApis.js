import { instance } from "../instance";



export const myPageApis = {

    //마이페이지 조회
    getMyPageAX: () => instance.get(`/mypage/user`),

    //마이페이지 수정
    putMyPageAX: (payload) => instance.put(`/mypage`, payload),

    // 내글 불러오기
    getMyPostAX: () => instance.get(`/mypage/mypost`),

    //  댓글 단 글
    getMyCmtAX: () => instance.get(`/mypage/mycomment`),

    // 스크랩
    getMyScrapAX: () => instance.get(`/mypage/myscrap`),

    // 로그아웃
    kakaologoutAX: (domain) => instance.post(`/member/signup/${domain}`),

    logoutAX: () => instance.post(`/member/signup/logout`),


    // 회원탈퇴
}