//控制器模块
angular.module('Controllers',[])
.controller("navCtrl",["$scope",function($scope){
	$scope.navs =
	[
		{"path":"#/today","icon":"icon-home","text":"今日一刻"},
		{"path":"#/older","icon":"icon-file-empty","text":"往期内容"},
		{"path":"#/author","icon":"icon-pencil","text":"热门作者"},
		{"path":"#/category","icon":"icon-menu","text":"栏目浏览"},
		{"path":"#/favourite","icon":"icon-heart","text":"我的喜欢"},
		{"path":"#/settings","icon":"icon-cog","text":"设置"},
	];
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
		  	$scope.date = response.data.date;
		  	$scope.posts =response.data.posts;
		  	// console.log(response.data);
		// 隐藏加载图标
			$rootScope.loaded = true;
		},function errorCallback(response){
		// 请求失败执行代码
			alert("请等待。。。");
		});
}])


	// 热门作者控制器
.controller('authorCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
		//设置图标的显示状态
		$rootScope.loaded = false;

		//设置标题
		$rootScope.title = "热门作者";

		//设置当前导航索引
		$rootScope.index = 2;

	$http({
		url:'./API/author.php',
	}).then(function successCallback(response){
		// 请求成功执行代码
		  	$scope.recommend = response.data.recommend;
		  	$scope.author =response.data.author;
		  	console.log(response.data.author);

		  	// console.log(response.data.author);
		// 隐藏加载图标
			$rootScope.loaded = true;
		},function errorCallback(response){
		// 请求失败执行代码
			alert("请等待。。。");
		});
}])



	// 栏目浏览控制器
.controller('categoryCtrl',['$scope','$rootScope',function($scope,$rootScope){
		//设置图标的显示状态
		$rootScope.loaded = true;

		//设置标题
		$rootScope.title = "栏目浏览";

		//设置当前导航索引
		$rootScope.index = 3;
}])

	// 我的喜欢控制器
.controller('favouriteCtrl',['$rootScope',function($rootScope){
		//设置图标的显示状态
		$rootScope.loaded = true;

		//设置标题
		$rootScope.title = "我的喜欢";

		//设置当前导航索引
		$rootScope.index = 4;
}])


	// 设置控制器
.controller('settingsCtrl',['$rootScope',function($rootScope){
		//设置图标的显示状态
		$rootScope.loaded = true;

		//设置标题
		$rootScope.title = "设置";

		//设置当前导航索引
		$rootScope.index = 5;
}])