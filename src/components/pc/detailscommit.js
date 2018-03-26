import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';
//import Storage from '../../assets/js/storage.js';
import axios from 'axios';

const FormItem = Form.Item;
const {TextArea} = Input;


function trim(str){
	return str.replace(/(^\s*)|(\s*$)/g,'');
}


class DetailsCommit extends Component {
	constructor(){
		super();
	}
	componentWillMount(){
		console.log("userid: "+this.context.userId);
		console.log("uniquekey: "+this.context.uniquekey);
	}
	commitsubmit(e){
		e.preventDefault();
		var commit = this.props.form.getFieldValue('commit');
		console.log('提交评论');
		console.log(commit);
		this.props.form.resetFields();
		if(commit){
			axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid="+this.context.userId+"&uniquekey="+this.context.uniquekey+"&commnet="+commit)
			.then( res => {
				this.props.getCommit();
			})
			.catch( res => {

			});	
			
		}
	}
	render(){
		
		let {getFieldDecorator} = this.props.form;
		const labelLayout = {
			labelCol: { span: 24 },
			wrapperCol: { span: 24}
		}
		const isLogined = this.context.isLogined;
		return (
			<div className="commitForm">
				<Form onSubmit={this.commitsubmit.bind(this)}>
					<FormItem label="请发表您的评论" {...labelLayout}>
						{
							getFieldDecorator('commit')( <TextArea placeholder={isLogined?"随便写":'请登录后再发表评论'} disabled={!isLogined}/>)
						}
					</FormItem>
					<FormItem>
						<div className="commitBtn">
							<Button type="primary" htmlType="submit" disabled={!isLogined}>{isLogined?'提交  评论':'登录发表评论'}</Button>
							<Button type="primary" htmlType="button">收藏该文章</Button>
						</div>
					</FormItem>
				</Form>
			</div>
		)
	}
}
DetailsCommit.contextTypes ={
	isLogined: PropTypes.bool,
  	nickname: PropTypes.string,
  	userId: PropTypes.number,
  	uniquekey: PropTypes.string,
}
export default DetailsCommit = Form.create()(DetailsCommit);


