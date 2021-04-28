import axios from 'axios'

// 封装的网络请求,config是前台传进来的参数
export function request(config) {
    const instance = axios.create({
        baseURL: '',
        timeout: 5000,
        headers: {}
    })

    // 请求拦截器
    instance.interceptors.request.use(config =>{
        /* 
        1.可以对一些不满足服务器要求的信息进行修改
        2.请求数据时在界面显示加载的图标
        3.对一些特殊的请求(比如需要携带token)，未携带token时进行拦截
        */
        return config
    },err =>{
        console.log(err)
    })
    // 响应拦截器
    instance.interceptors.response.use(res =>{
        // 可以将加载的图标隐藏
        return res.data
    },err =>{
        console.log(err)
    })
    // axios返回的本身就是一个Promise
    return instance(config)
}

// 第二种方法
// export function request(config) {
// 	return new Promise((resolve, reject) =>{
// 		const instance = axios.create({
// 			baseUrl: '',
// 			timeout: 5000
// 		})
// 		instance(config).then(res =>{
// 			resolve(res)
// 		}).catch(err =>{
// 			reject(err)
// 		})		
// 	})
// }