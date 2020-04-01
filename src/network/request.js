import axios from 'axios'

//导出一个方法，提升扩展性
export function Request(config) {
  const instance = axios.create({
    //创建一个axios一个实例对象
    baseURL: 'http://152.136.185.210:8000/api/h3',
    timeout: 50000
  });

  //设置请求拦截器
  instance.interceptors.request.use(res => {
    //请求成功之后的拦截 像请求发出去以后提示用户请求中可以在这设置!
    return res; //拦截操作做完以后一定要记得返回数据，不然一直卡在这没有数据请求出去!

  }, err => {
    console.log(err);
  });

  instance.interceptors.response.use(res => {
    //响应成功之后的拦截
    return res.data; //因为响应成功以后拿到的数据有很多是axios框架
    //里自带的并非服务器返回的数据所以只要返回res。data就行了。
  }, err => {
    console.log(err);
  })

  //返回一个promise对象
  return instance(config)
}

//detail页面的接口地址改动
export function RequestDetail(config) {
  const instance = axios.create({
    //创建一个axios一个实例对象
    baseURL: 'http://123.207.32.32:8000',
    timeout: 50000
  });

  //设置请求拦截器
  instance.interceptors.request.use(res => {
    //请求成功之后的拦截 像请求发出去以后提示用户请求中可以在这设置!
    return res; //拦截操作做完以后一定要记得返回数据，不然一直卡在这没有数据请求出去!

  }, err => {
    console.log(err);
  });

  instance.interceptors.response.use(res => {
    //响应成功之后的拦截
    return res.data; //因为响应成功以后拿到的数据有很多是axios框架
    //里自带的并非服务器返回的数据所以只要返回res。data就行了。
  }, err => {
    console.log(err);
  })

  //返回一个promise对象
  return instance(config)
}


