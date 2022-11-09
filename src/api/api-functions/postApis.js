import axios from "axios";
import { hInstance, nhInstance } from "../instance";

export const postApis = {
    insertPostAX: (post) => hInstance.post(`${process.env.REACT_APP_API_LOCAL_URL}/posts`, post),
    postListAX: (page) => nhInstance.get(`${process.env.REACT_APP_API_LOCAL_URL}/posts`)
}