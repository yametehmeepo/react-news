import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import Storage from '../../assets/js/storage.js';
import axios from 'axios';

const FormItem = Form.Item;
const {TextArea} = Input;

class DetailsCommit extends Component {
	constructor(){
		super();
	}
	commitsubmit = (e) => {
		e.preventDefault();
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
				<Form onSubmit={this.commitsubmit}>
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
  	nickname: PropTypes.string
}
export default DetailsCommit = Form.create()(DetailsCommit);


