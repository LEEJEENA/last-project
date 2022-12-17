import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, options) => {
    return cookies.set(name, value, { ...options });
};

export const getCookie = (name) => {
    return cookies.get(name);
};

export const delCookie = (name) => {
    return cookies.remove(name, { path: "/" });
};

export const setWeekCookie = (name, value) => {
    cookies.set(name, value, {
      path: "/",
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
  };

