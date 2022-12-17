import { instance } from "../instance";

export const commentApis = {
    /**댓글 조회 */
    getCommentAX: (obj) => instance.get(`/comments/${obj.postId}/${obj.kind}`),
    /**댓글 등록 */
    insertCommentAX: (obj) => instance.post(`/comments/${obj.postId}/${obj.kind}`, obj.comment),
    /**댓글 삭제 */
    deleteCommentAX: (obj) => instance.delete(`/comments/${obj.postId}/${obj.commentId}/${obj.kind}`),

}