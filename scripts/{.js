// 创建指令模块
angular.module("Directive",[])
.driective('loading',function(){
	return {
		restrict:'A',
		replace:true,
		template:'<img src="" alt="">'
	}
})
