import React, { Component } from 'react';
import { List } from 'antd';
import PropTypes from 'prop-types';
import axios from 'axios';


export default class CommitList extends Component {
	constructor(){
		super();
		this.state = {
		  	defaultPageSize: 10,
			defaultCurrent: 1,
		}
	}
	componentWillMount(){
		
	}
	render(){
		const {defaultPageSize,defaultCurrent} = this.state;
		const totalcommitlist = this.context.totalcommitlist;
		var currentcommitlist = totalcommitlist.slice(defaultPageSize*(defaultCurrent - 1),defaultPageSize*defaultCurrent);
		//console.log(currentcommitlist);
		const pagination = {
		  defaultCurrent: defaultCurrent,
		  total: totalcommitlist.length,
		  onChange: ((pageNumber) => {
		  	if(pageNumber !== defaultCurrent){
			  	this.setState({
			  		defaultCurrent: pageNumber
			  	})	
			  }
		  }),
		};
		return (
			<div className="commitlist">
				<h3>大家说</h3>
				<List 
					rowKey={1}
					itemLayout="vertical"
					bordered={true}
					pagination={pagination}
					size="default"
					dataSource={currentcommitlist}
					renderItem={(item,index) => (
						<List.Item
							key={index}
							extra={[<span>发布于 {item.datetime}</span>]}
						>
							<List.Item.Meta 
								title={<span>{item.UserName}</span>} 
								description={item.Comments}
							/>
						</List.Item>
					)}
				>
					
				</List>
			</div>
		)
	}
}

CommitList.contextTypes = {
	uniquekey: PropTypes.string,
	totalcommitlist: PropTypes.array,
}






















