import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ImageBlock from './imageblock.js';
import DetailsCommit from './detailscommit.js';
import CommitList from './commitlist.js';
import PropTypes from 'prop-types';
import axios from 'axios';
//import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../../assets/css/details.min.css'


export default class PCDetails extends Component {
	constructor(){
		super();
		this.state = {
			html: '<p>加载中</p>',
		}
	}
	getChildContext(){
		return {
			uniquekey: this.props.match.params.uniquekey
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
						<DetailsCommit />
					</Col>
				</Row>
			</div>
		)
	}
}

PCDetails.childContextTypes = {
	uniquekey: PropTypes.string
}







