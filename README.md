版本一：
	效果：0.导航栏的打开和关闭 以及右侧主要内容的移动
		  1.填充右侧导航栏的数据
		  模型数据格式：
		  //[
				{"path":"#/today","icon":"icon-home","text":"今日一刻"},
			];

版本二：
	0.读取今日一刻的内容 和往期内容
		后台php处理跨域问题：抓取真实数据时将php.ini文件中的openssl放开，重启服务
	1.请求数据时, 显示正在加载的图片
		请求之前显示 请求成功隐藏 loading 图片
	2.添加侧边栏点击状态

版本三：
	0.解决往期内容日期不显示 
		0.php后台数据解析
			0.json_decode(file_get_content($http));
			1.echo json_encode(array("response"=>json_decode(file_get_content($http))));
	1.添加热门推荐模块
		
	2.添加热门作者模块

版本四：
	0.添加栏目浏览模块
	//固定模版不需要后台取数据

版本五：
	0.添加我的喜欢页面
	1.添加设置页面

bug:日期格式需要修改
	
