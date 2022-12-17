import { instance } from "../instance";

export const memberApis = {
    /**카카오 로그인 */
    kakaoLoginAX: (code) => instance.get(`/member/signup/kakao?code=${code}`),
    /**네이버 로그인 */
    naverLoginAX: (loginInfo) => instance.get(`/member/signup/naver?code=${loginInfo.code}&state=${loginInfo.state}`),
    /**구글 로그인 */
    googleLoginAX: (code) => instance.get(`/member/signup/google?code=${code}`),
    /**깃허브 로그인 */
    githubLoginAX: (code) => instance.get(`/member/signup/github?code=${code}`),
}
