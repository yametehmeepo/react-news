### ReactNews
react + create-react-app + antd 制作新闻网站  

react-responsive插件 制作pc和手机端适配  

踩坑:  
1.Modal(模态对话框) => 标签分页(Tabs->TabPane) => 多个form表单 
  多个form表单通过每个表单写一个组件,每个组件都用Form.create()包裹的办法解决表单分开提交分开验证

2.轮播图API参照  https://github.com/akiran/react-slick

3.react-router v4 获取路由参数 `this.props.match.params.xxx`  (v4前没有 .match)

4.采用的pubsub-js 来订阅发布事件, 注意 subscribe接受参数形式(msg,参数) msg 固定必须有  

5.`localStorage`和`sessionStorage` 开始用的`sessionStorage`  
但是每个标签独立的`sessionStorage` 不好保存用户登录状态  
最后选择 `localStorage` 在每次点登录和退出时更新 `localStorage`    
