import React, { Component } from 'react';
//import { List, Avatar } from 'antd';
import axios from 'axios';
//import { Link } from 'react-router-dom';


//const ListItem = List.Item;
//const ListItemMeta = List.Item.Meta;

export default class MobileList extends Component {
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
				<li key={index}>
					<a href={item.url} className="listWrap clearfix">
						<div className="listImg"><img src={item.thumbnail_pic_s} alt={item.title}/></div>
						<div className="listContent">
							<div><span>{item.title}</span></div>
							<p><span>{item.realtype}</span>{item.date}</p>
						</div>
					</a>
				</li>
			))
			:
			'没有加载到任何新闻';
		}else{
			list = '加载中'
		}
		//console.log(list);
		return (
			<div className="mobilelist">
				<ul>
					{list}
				</ul>
			</div>
		)
	}
}