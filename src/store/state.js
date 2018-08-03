let defaultCity = '上海'
try{
  if(localStorage.city){
    defaultCity = localStorage.city
  }
}catch (e) {}

export default  {
    //某些浏览器启动隐身功能或者关闭本地存储,
    // 推荐使用try,catch
    city: defaultCity
}