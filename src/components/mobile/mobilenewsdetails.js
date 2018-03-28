import React, { Component } from 'react';
//import { Row, Col } from 'antd';
import MobileList from './mobilenewslist.js';
import DetailsCommit from '../pc/detailscommit.js';
import CommitList from '../pc/commitlist.js';
import PropTypes from 'prop-types';
import axios from 'axios';
//import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../../assets/css/details.min.css'


export default class MobileNewsDetails extends Component {
	constructor(){
		super();
		this.state = {
			html: '<p>加载中</p>',
			totalcommitlist: [],
		};
		this.getCommit = this.getCommit.bind(this);
	}
	getChildContext(){
		return {
			uniquekey: this.props.match.params.uniquekey,
			totalcommitlist: this.state.totalcommitlist,
		}
	}
	componentDidMount(){
		this.getCommit();
		this._isMounted = true;
		axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey)
		.then( res => {
			if(this._isMounted){
				this.setState({
					html: res.data.pagecontent,
				});	
			}
			document.title = res.data.title + " - React News | React 驱动的新闻平台";
		})
		.catch( res => {

		});
	}
	componentWillUnmount(){
		this._isMounted = false;
	}
	componentWillReceiveProps(nextProps){
		const uniquekey = nextProps.match.params.uniquekey;
		//console.log("componentWillReceiveProps: "+uniquekey);
		this.setState({
			html: '数据加载中...',
		});	
			window.scroll(0,0);
		axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + uniquekey)
		.then( res => {
			if(this._isMounted){
				this.setState({
					html: res.data.pagecontent,
				});	
			}
		})
		.catch( res => {

		});
	}
	getCommit(){
		axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey="+this.props.match.params.uniquekey)
		.then( res => {
			//console.log(res.data);
			this.setState({
				totalcommitlist: res.data.reverse(),
			})
		})
		.catch( res => {

		})
	}
	render(){
		return (
			<div className="detailsContent">
				<div className="mobiledetailsItem" dangerouslySetInnerHTML={{ __html: this.state.html }}></div>
				<CommitList />
				<DetailsCommit getCommit={this.getCommit}/>
				<MobileList type="yule" count={14} width="100%" imageWidth='135px' />
			</div>
		)
	}
}

MobileNewsDetails.childContextTypes = {
	uniquekey: PropTypes.string,
	totalcommitlist: PropTypes.array,
}










