import React, { Component } from 'react';
import { Card } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ImageBlock extends Component {
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
							<Link to={`/details/${item.uniquekey}`} target="_blank">
								<img src={item.thumbnail_pic_s} alt={item.title} title={item.title} className='imageclass' style={{width: this.props.imageWidth}}/>
								<h3 className="imagelisth3" style={{width: this.props.imageWidth}}>{item.title}</h3>
								<p className="imagelistp" style={{width: this.props.imageWidth}}>{item.author_name}</p>
							</Link>
						</li>
					))
					:
					'没有加载到任何新闻'
					;
		}else{
			list = '加载中'
		}
		//console.log(list);
		return (
			<div>
				<Card title={this.props.cardTitle} width={this.props.width} hoverable>
					<ul className="imageUl">
						{list}
					</ul>
				</Card>
			</div>
		)
	}
}