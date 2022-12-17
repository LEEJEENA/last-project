import { getCookie } from "../cookie/cookie";


const isLogin = () => {
  return !!getCookie("mycookie");  
};

export default isLogin;
