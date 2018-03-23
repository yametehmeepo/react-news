import React, { Component } from 'react';
//import { Row, Col } from 'antd';
import MobileList from './mobilenewslist.js';
import axios from 'axios';
//import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../../assets/css/details.min.css'


export default class MobileNewsDetails extends Component {
	constructor(){
		super();
		this.state = {
			html: '<p>加载中</p>',
			uniquekey: '',
		}
	}
	componentWillMount(){
		this.setState({
			uniquekey: this.props.match.params.uniquekey,
		})
	}
	componentDidMount(){
		this._isMounted = true;
		axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.state.uniquekey)
		.then( res => {
			if(this._isMounted){
				this.setState({
					html: res.data.pagecontent,
				});	
			}
			document.title = res.data.title + " - React News | React 驱动的新闻平台";
		})
		.catch( res => {

		})
	}
	componentWillReceiveProps(nextProps){
		console.log(nextProps.match.params.uniquekey);
		this.setState({
			uniquekey: nextProps.match.params.uniquekey
		})
	}
	componentDidUpdate(){
		axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.state.uniquekey)
		.then( res => {
			this.setState({
				html: res.data.pagecontent,
			});
		})
		.catch( res => {

		})
	}
	componentWillUnmount(){
		this._isMounted = false;
	}
	render(){
		return (
			<div className="detailsContent">
				<div className="mobiledetailsItem" dangerouslySetInnerHTML={{ __html: this.state.html }}></div>
				<MobileList type="yule" count={14} width="100%" imageWidth='135px' />
			</div>
		)
	}
}