import axios from 'axios';

const baseURL = 'http://apis.juhe.cn/mobile/get';

const instance = axios.create({
  baseURL,
  timeout: 5000,
});
instance.interceptors.request.use((config) => {
  const request_config = {
    ...config,
    params: {
      ...config.params,
      key: 'ed850f53820ad81d3b30c716946631dd',
    },
  };
  return request_config;
}, // 根据请求config做调整
error => Promise.reject(error));

instance.interceptors.response.use(response => response, // 处理后端返回数据格式
  error => Promise.reject(error));


const request_get = (url, config) => instance.get(url, { params: config });
const request_post = (url, config) => instance.post(url, config);


export { request_get, request_post };
