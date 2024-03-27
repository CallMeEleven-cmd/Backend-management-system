import http from "@/utils/request";

//请求首页数据
export const getData = () => {
    //返回一个promise对象
    return http.get('/home/getData')
}

//axios#get(url[, config])
export const getUser = (params) => {
    return http.get('user/getUser' ,params)
}

//注意post请求的参数和Get不同，第二个参数为data
//axios#post(url[, data[, config]])
export const addUser = (data) => {
    return http.post('/user/add',data) 
}

export const editUser = (data) => {
    return http.post('/user/edit',data)
}

export const delUser = (data) => {
    return http.post('/user/del',data)
}
export const getMenu = (data) => {
    return http.post('/permission/getMenu',data)
}

