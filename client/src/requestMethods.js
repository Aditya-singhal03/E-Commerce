import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = localStorage.getItem("persist:root")?JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.accessToken:undefined;
///const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGI1NzAwOGI0NDU5YzAzYTI5MzJjMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NjQ0NzkxNSwiZXhwIjoxNjk2NzA3MTE1fQ.-hUgGViprtPxKOxYnYpLw5sSXzs_qGy-Gz1WtMHoN_Y";
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest =  axios.create({
    baseURL: BASE_URL,
    header : {token: `Bearer ${TOKEN}`}
});