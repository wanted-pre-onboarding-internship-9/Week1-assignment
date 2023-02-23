import { instance } from "./instance";

const commonURL = "/auth";

export const userApis = {
    //로그인 회원가입
    authAX: (type, authInfo) => instance.post(`${commonURL}/${type}`, authInfo),
}