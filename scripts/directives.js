// 创建指令模块  loading图片
angular.module("Directive",[])
.directive('loading',function(){

	return {
		restrict:'A',
		replace:true,
		template:'<img src="" alt="">',
	}
})