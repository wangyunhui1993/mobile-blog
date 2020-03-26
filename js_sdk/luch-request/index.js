import Request from './request'
import store from '@/store'
import {
		mapState
	} from 'vuex';


const http = new Request()


// const baseHttps = 'https://neo123.cn';
// const baseHttps = 'https://localhost';
const baseHttps = 'http://localhost:3000';

http.setConfig((config) => { /* 设置全局配置 */
config.baseUrl = baseHttps 
  config.header = {
    ...config.header,
  }
  return config
})

/**
 * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
 * @param { Object } response - 请求响应体（只读）
 * @return { Boolean } 如果为true,则 resolve, 否则 reject
 */
http.validateStatus = (response) => {
  return response.statusCode === 200
}

http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	
  /*
  if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
    cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
  }
  */
  return config
})

http.interceptor.response((response) => { /* 请求之后拦截器 */
	console.info(`请求接口成功后返回的数据`,response)
  return response
}, (response) => { // 请求错误做点什么
console.error(`请求接口失败后返回的数据`,JSON.stringify(response))
	uni.showToast({
		title:"数据请求异常",
		icon:"none"
	})
  return response
})

export {
  http,
}
