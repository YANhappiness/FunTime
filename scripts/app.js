// 1.新建模块
var time = angular.module('timeApp',['Controllers','ngRoute','Directive']);
	//2.定义导航栏的打开或关闭方法
	time.run(['$rootScope',function($rootScope){
		// 初始化导航栏的状态
		$rootScope.collapsed = false;

		//侧边栏当前索引
		$rootScope.index = 0;
		//定义toogle方法 点击事件
		$rootScope.toggle = function(index){
			//改变侧边导航栏的状态
			$rootScope.collapsed = !$rootScope.collapsed;
			//查找导航栏中的dd节点
			var navss = document.querySelectorAll('.navs dd');

			// 设置当前导航状态
			document.querySelector('.navs dd.active').classList.remove('active');

			navss[$rootScope.index].classList.add('active');

			// 遍历所有导航具体内容,将每一个内容往右移动  侧边栏
			if($rootScope.collapsed){
				// console.log("open");
				for(var i = 0;i<navss.length;i++){
					// 水平垂直位移为0
					navss[i].style.transform="translate(0)";
					// 开始停顿0.2s
					navss[i].style.transitionDelay="0.2s";
					// 过度效果持续0.15s
					navss[i].style.transitionDuration=(1+i)*0.15+'s';	
				}
			}else{
				// 离场顺序  6取不到
				for(var i = navss.length-1;i>=0;i--){
					// 水平垂直位移为-100%
					navss[i].style.transform = "translate(-70%)";

					navss[i].style.transitionDelay = '';
					navss[i].style.transitionDuration=(navss.length-i)*0.15+'s';
				}
			}
		} 

}])
// 配置内容 解决http 乱码
	time.config(function($locationProvider){
		$locationProvider.hashPrefix('');
	});

	//配置路由  
	time.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.when('/today',{      //今日一刻
			templateUrl:'./views/today.html',
			controller:'TodayCtrl',
		}).when('/older',{    //往期内容
			templateUrl:'./views/older.html',
			controller:'olderCtrl',
		}).when('/author',{    //热门作者
			templateUrl:'./views/author.html',
			controller:'authorCtrl',
		}).when('/category',{    //栏目浏览
			templateUrl:'./views/category.html',
			controller:'categoryCtrl',
		}).otherwise({redirectTo:'/today'});  //重定向
}])