import { instance } from "./instance";

const commonURL = "/auth";

export const userApis = {
    //로그인
    signinAX: (signinInfo) => instance.post(`${commonURL}/signin`, signinInfo),
    //회원가입
    signupAX: (signupInfo) => instance.post(`${commonURL}/signup`, signupInfo),
    //로그인 회원가입
    authAX: (type, authInfo) => instance.post(`${commonURL}/${type}`, authInfo),
}