import { instance } from "../instance";

export const postApis = {
    /**전체글 검색 조회 */
    searchPostAX: (searchInfo, page = 0) => instance.get(
        `/allposts`, { params: { ...searchInfo, tag: searchInfo.tag.join(), page } }),
    /**상세글 조회 */
    getPostAX: (post) => instance.get(`/${post.url}/${post.postId}`),

    /**좋아요 */
    postScrapAx: (post) => instance.post(`/likes/${post.kind}/${post.postId}`),

    // 행사글 게시글 작성    
    addEventPostAx: (post) => instance.post(`/eventposts`, post),
    // 모집글 게시글 작성
    addGatherPostAx: (post) => instance.post(`/gatherposts`, post),
    // 질문글 게시글 작성
    addAskPostAx: (post) => instance.post(`/askposts`, post),


    /**행사글 상세글 수정 */
    putEventPostAx: (post) => instance.put(`/eventposts/${post.postId}`, post.content),
    /*모집글 상세글 수정*/
    putGatherPostAx: (post) => instance.put(`/gatherposts/${post.postId}`, post.content),
    /*질문글 상세글 수정*/
    putAskPostAx: (post) => instance.put(`/askposts/${post.postId}`, post.content),

    /* 행사글 상세글 삭제*/
    deleteEventPostAx: (id) => instance.delete(`/eventposts/${id}`),
    /*모집글 상세글 삭제*/
    deleteGatherPostAx: (id) => instance.delete(`/gatherposts/${Number(id)}`),
    /* 행사글 상세글 삭제*/
    deleteAskPostAx: (id) => instance.delete(`/askposts/${id}`),

    /**관리자글 조회 */
    getAdminPostAX: (post) => instance.get(`/getadminpost`),
    /**관리자글 작성 */
    addAdminPostAX: (post) => instance.post(`/adminpost`, post),
    /* 관리자글 삭제*/
    deleteAdminPostAX: (id) => instance.delete(`/adminpost/${id}`),


}