### ReactNews
react + create-react-app + antd 制作新闻网站  

react-responsive插件 制作pc和手机端适配  

踩坑:  
1.Modal(模态对话框) => 标签分页(Tabs->TabPane) => 多个form表单 
  多个form表单通过每个表单写一个组件,每个组件都用Form.create()包裹的办法解决表单分开提交分开验证

2.轮播图API参照  https://github.com/akiran/react-slick

3.react-router v4 获取路由参数 `this.props.match.params.xxx`  (v4前没有 .match)