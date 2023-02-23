import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
});

instance.interceptors.response.use(
    (response) => {
        if (response.data.access_token && response.status === 200)
            localStorage.setItem("accessToken", response.data.access_token);
        return response;
    }, function (error) {
        switch (error.response.data.statusCode) {
            case 400:
                alert(error.response.data.message);
                break;
            case 401:
                alert("로그인 실패");
                break;
            case 404:
                alert(error.response.data.message);
                break;
            default:
                break;
        }

        switch (error.response.status) {
            case 500:
                alert(error.response.statusText);
                break;
            default:
                break;
        }


        return Promise.reject(error);
    });
