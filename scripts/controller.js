//控制器模块
angular.module('Controllers',[])
.controller("demo",["$scope",function($scope){
	console.log("demoCtrl")
}])
.controller("navCtrl",["$scope",function($scope){
	$scope.navs =
	[
		{"path":"#/today","icon":"icon-home","text":"今日一刻"},
		{"path":"./views/older.html","icon":"icon-file-empty","text":"往期内容"},
		{"path":"./views/author.html","icon":"icon-pencil","text":"热门作者"},
		{"path":"./views/category.html","icon":"icon-menu","text":"栏目浏览"},
		{"path":"./views/favourite.html","icon":"icon-heart","text":"我的喜欢"},
		{"path":"./views/settings.html","icon":"icon-cog","text":"设置"},
	];
	// console.log("demoCtrl");
	// 侧边栏点击状态
	$scope.changState = function(index){
		$scope.status = index;
	}
}])

//版本二  ：今日一刻的控制器 
.controller('TodayCtrl',['$scope','$filter','$http',function($scope,$filter,$http){
	var today = $filter('date')(new Date,'yyyy-MM-dd');
	// 获取今日时间
	// $scope.today = today;

	$http({
		url:'./API/today.php',
		params:{today:today}
	}).then(function successCallback(response){
		// 请求成功执行代码
		  	$scope.date = response.data.date;
		  	$scope.posts =response.data.posts;
		  	console.log($scope.text);
		},function errorCallback(response){
		// 请求失败执行代码
			alert("请等待。。。");
		});

}])

