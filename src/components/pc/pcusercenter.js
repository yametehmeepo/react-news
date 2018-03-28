import React, { Component } from 'react';
import { List, Tabs, Card, Upload, Icon, Modal } from 'antd';
import axios from 'axios';
import PropTypes from 'prop-types';

const TabPane = Tabs.TabPane;
const ListItem = List.Item;


export default class PCUserCenter extends Component {
	constructor(){
		super();
		this.state = {
			collectlist: '',
			currentcollectlist: [],
			currentcollectpage: 1,
			commentlist: '',
			collectpagesize: 15,
			previewVisible: false,
			previewImage: '',
			fileList: [{
				uid: -1,
				name: 'xxx.png',
				status: 'done',
				url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			}],
		}
	}
	componentWillMount(){
		if(!this.context.isLogined){
			window.location.href="http://localhost:3000/";
		}else{
			document.title = "用户中心";
		}
	}
	componentDidMount(){
		//获取用户收藏的文章
		axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid="+this.context.userId)
		.then( res => {
			//console.log("用户收藏的文章: ");
			//console.log(res);
			this.setState({
				collectlist: res.data,
			});
		})
		.catch( res => {

		});

		//获取用户发表过的评论
		axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid="+this.context.userId)
		.then( res => {
			//console.log("用户发表过的评论: ");
			//console.log(res);
			this.setState({
				commentlist: res.data,
			});
		})
		.catch( res => {

		});	

	}
	handlePreview(file){
		this.setState({
			previewImage: file.url || file.thumbUrl,
			previewVisible: true,
	    });
	}
	handleChange({fileList}){
		this.setState({fileList});
	}
	handleCancel(){
		this.setState({
			previewVisible: false,
		})
	}
	render(){
		var { collectlist, commentlist, currentcollectpage, collectpagesize, previewVisible, previewImage, fileList } = this.state;
		var collectlist2 = [];
		for(var i=collectlist.length-1;i>=0;i--){
			collectlist2.push(collectlist[i]);
		}
		var reactcollectlist = collectlist2.slice(collectpagesize*(currentcollectpage - 1), collectpagesize*currentcollectpage);
		var commentlist2 = [];
		for(var i=commentlist.length-1;i>=0;i--){
			commentlist2.push(commentlist[i]);
		}
		var reactcommentlist = commentlist2.length
		?
		commentlist2.map((item,index) => (
			<Card key={index} title={`于 ${item.datetime} 评论文章 ${item.uniquekey}`} extra={<a href={`/details/${item.uniquekey}`} target="_blank">查看</a>}>
				<p>{item.Comments}</p>
			</Card>
		))
		:
		'没有获取到收藏文章';
		const pagination = {
			current: currentcollectpage,
			pageSize: collectpagesize,
			total: collectlist.length,
			onChange: ((pageNumber) => {
		  	if(pageNumber !== currentcollectpage){
			  	this.setState({
			  		currentcollectpage: pageNumber
			  	})	
			  }
		  }),
		};
		const uploadButton = (
			<div>
				<Icon type="plus" />
				<div className="ant-upload-text">上传照片</div>
			</div>
		);

		return (
			<div className="usercenterblock">
				<Tabs
					tabPosition='left'
					defaultActiveKey='1'
				>
					<TabPane tab='我的收藏列表' key='1'>
						<List 
							bordered
							pagination={pagination}
							dataSource={reactcollectlist}
							renderItem={(item,index)=>(
								<ListItem key={`collect${index}`}>
									<a href={`/details/${item.uniquekey}`} target="_blank">{item.Title}</a>
								</ListItem>
							)}
						/>
					</TabPane>
					<TabPane tab='我的评论列表' key='2'>
						{reactcommentlist}
					</TabPane>
					<TabPane tab='头像设置' key='3'>
						<div className="clearfix">
							<Upload
								action="//jsonplaceholder.typicode.com/posts/"
								listType="picture-card"
								fileList={fileList}
								onPreview={this.handlePreview.bind(this)}
								onChange={this.handleChange.bind(this)}
							>
								{fileList.length>=5?null:uploadButton}
							</Upload>
							<Modal visible={previewVisible} onCancel={this.handleCancel.bind(this)} onOk={this.handleCancel.bind(this)}>
								<img src={previewImage} alt="预览图片" style={{width: '100%'}}/>
							</Modal>
						</div>
					</TabPane>
				</Tabs>	
			</div>
		)
	}
}


PCUserCenter.contextTypes = {
	isLogined: PropTypes.bool,
	userId: PropTypes.number,
}





