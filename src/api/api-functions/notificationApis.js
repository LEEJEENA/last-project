import { instance } from "../instance";

export const notificationApis = {
    getNotificationAX: () => instance.get(`/getnotice`),

    deleteNotificationAX: (id) => instance.delete(`/notice/${id}`),

    putNotificationAX: (id) => instance.put(`/notice/${id}`)
}