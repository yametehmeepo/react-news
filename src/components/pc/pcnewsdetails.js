import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ImageBlock from './imageblock.js';
import DetailsCommit from './detailscommit.js';
import CommitList from './commitlist.js';
import PropTypes from 'prop-types';
import axios from 'axios';
//import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import Pswp from '../common/pswp.js';
import '../../assets/css/details.min.css';
//import '../../assets/css/photoswipe.css';
//import '../../assets/css/default-skin.css';
//import '../../assets/js/photoswipe.min.js';
//import '../../assets/js/photoswipe-ui-default.min.js';


export default class PCDetails extends Component {
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
		axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey)
		.then( res => {
			this.setState({
				html: res.data.pagecontent,
			});
			document.title = res.data.title + " - React News | React 驱动的新闻平台";
		})
		.catch( res => {

		});
		this.getCommit();
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
				<Row>
					<Col span={6}>
						<ImageBlock type="yule" count={14} width="100%" imageWidth='135px' />
					</Col>
					<Col span={18}>
						<div className="detailsItem" dangerouslySetInnerHTML={{ __html: this.state.html }}></div>
						<CommitList />
						<DetailsCommit getCommit={this.getCommit}/>
					</Col>
				</Row>
			</div>
		)
	}
}


PCDetails.childContextTypes = {
	uniquekey: PropTypes.string,
	totalcommitlist: PropTypes.array,
}







