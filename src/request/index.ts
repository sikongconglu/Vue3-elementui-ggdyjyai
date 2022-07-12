import axios from "axios";

//创建axios实例
const service = axios.create({
    baseURL: "http://120.79.175.196:5001/",
    timeout: 5000,
    headers: {
        "Content-type": "application/json;charset=utf-8"
    }
})

//请求拦截
service.interceptors.request.use((config) => {
    config.headers = config.headers || {}
    if (localStorage.getItem("token")) {
        config.headers.token = localStorage.getItem("token") || ""
    }
    return config
})

//响应拦截
service.interceptors.response.use((res) => {
    //console.log(res)
    const code: number = res.data.status
    //console.log(code)
    if (code != 200) {
        return Promise.reject(res.data)
    }
    else
    { return res.data}
    
}, (err) => {
    console.log(err)
})

export default service
