//控制器模块
angular.module('Controllers',[])
.controller("navCtrl",["$scope",function($scope){
	$scope.navs =
	[
		{"path":"#/today","icon":"icon-home","text":"今日一刻"},
		{"path":"#/older","icon":"icon-file-empty","text":"往期内容"},
		{"path":"#/author","icon":"icon-pencil","text":"热门作者"},
		{"path":"./views/category.html","icon":"icon-menu","text":"栏目浏览"},
		{"path":"./views/favourite.html","icon":"icon-heart","text":"我的喜欢"},
		{"path":"./views/settings.html","icon":"icon-cog","text":"设置"},
	];
	// 侧边栏点击状态
	// $scope.changState = function(index){
	// 	$scope.status = index;
	// }
}])

//版本二  ：今日一刻的控制器 
.controller('TodayCtrl',['$scope','$filter','$http','$rootScope',function($scope,$filter,$http,$rootScope){
	var today = $filter('date')(new Date,'yyyy-MM-dd');
	// 获取今日时间
	// $scope.today = today;

	$http({
		url:'./API/today.php',
		params:{today:today}
	}).then(function successCallback(response){

		//设置图标的显示状态
		$rootScope.loaded = false;

		//设置标题
		$rootScope.title = "今日一刻";

		//设置当前导航索引
		$rootScope.index = 0;

		// 请求成功执行代码
		  	$scope.date = response.data.date;
		  	$scope.posts =response.data.posts;
		  	console.log(response.data.posts[1]);
		  	
		// 隐藏加载图标
			$rootScope.loaded = true;
		},function errorCallback(response){
		// 请求失败执行代码
			alert("请等待。。。");
		});

}])

	// 往期内容控制器
.controller('olderCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
		//设置图标的显示状态
		$rootScope.loaded = false;

		//设置标题
		$rootScope.title = "往期内容";

		//设置当前导航索引
		$rootScope.index = 1;

	$http({
		url:'./API/older.php',
	}).then(function successCallback(response){
		// 请求成功执行代码
		  	$scope.date = response.data.result;
		  	$scope.posts =response.data.posts;
		  	console.log(response.data);
		// 隐藏加载图标
			$rootScope.loaded = true;
		},function errorCallback(response){
		// 请求失败执行代码
			alert("请等待。。。");
		});
}])