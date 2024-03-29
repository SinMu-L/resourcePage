import axios from 'axios';

const service = axios.create({
    baseURL: import.meta.env.VITE_MONGODB_SERVER_URL,
    headers: {
        'Content-Type': 'application/json',
        'api-key': import.meta.env.VITE_MONGODB_SERVER_API_KEY
    },
    withCredentials: true, // 跨域请求时是否需要使用凭证
    timeout: 30000, // 请求超时时间
});



export default service;