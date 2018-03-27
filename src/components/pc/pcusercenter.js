import React, { Component } from 'react';
import { List, Tabs, Card } from 'antd';
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
	render(){
		var {collectlist, commentlist, currentcollectpage, collectpagesize} = this.state;
		var reactcollectlist = collectlist.slice(collectpagesize*(currentcollectpage - 1), collectpagesize*currentcollectpage);
		var reactcommentlist = commentlist.length
		?
		commentlist.map((item,index) => (
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
		}
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
					<TabPane tab='头像设置' key='3'>头像设置</TabPane>
				</Tabs>	
			</div>
		)
	}
}


PCUserCenter.contextTypes = {
	isLogined: PropTypes.bool,
	userId: PropTypes.number,
}





