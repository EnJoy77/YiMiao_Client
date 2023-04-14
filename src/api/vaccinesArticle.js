import Request from '../utils/request'
let request = new Request().http

// 按需引入的 请求头
 const selectVaccinesArticle= function() {    
    return request({
	url: "/vaccinesarticle/select",		
    method: "GET",
    })
}
export{selectVaccinesArticle}