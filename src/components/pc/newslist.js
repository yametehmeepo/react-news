import React, { Component } from 'react';
import { Card } from 'antd';
import axios from 'axios';
//import { Link } from 'react-router-dom';



export default class NewsList extends Component {
	constructor(){
		super();
		this.state = {
			newslist: [],
			downloadfinished: false
		}
	}
	componentWillMount(){
		axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.props.count)
		.then(res=>{
			this.setState({
				newslist: res.data,
				downloadfinished: true
			})
		})
		.catch(res=>{

		})
	}
	render(){
		const {newslist,downloadfinished} = this.state;
		var list;
		if(downloadfinished){
			list = newslist
					?
					newslist.map((item,index) => (
						<li key={index}><a href={item.url} target="_blank">{item.title}</a></li>
					))
					:
					'没有加载到任何新闻'
					;
		}else{
			list = '加载中'
		}
		//console.log(list);
		return (
			<Card hoverable>
				<ul className="topnewslist">
					{list}
				</ul>
			</Card>
		)
	}
}