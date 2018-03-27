import React, { Component } from 'react';
import { Form, Input, Button, message, notification } from 'antd';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';
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
		this.state = {
			isCollected: false,
		}
	}
	componentWillMount(){
		console.log("userid: "+this.context.userId);
		console.log("uniquekey: "+this.context.uniquekey);
		if(this.context.isLogined){
			axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid="+this.context.userId)
			.then( res => {
				var hasArticle = false;
				res.data.forEach((item,index) => {
					if(item.uniquekey === this.context.uniquekey){
						hasArticle = true;
						return false;
					}
				});
				if(hasArticle){
					this.setState({
						isCollected: true,
					})
				}
			})
			.catch( res => {

			});	
		}
		
	}
	componentDidMount(){
		PubSub.subscribe('UpdateCollect',()=>{
			this.componentWillMount();
		})
	}
	componentWillUnmount(){
		PubSub.unsubscribe('UpdateCollect');
	}
	commitsubmit(e){
		e.preventDefault();
		var commit = trim(this.props.form.getFieldValue('commit') || '');
		this.props.form.resetFields();
		if(commit !== ''){
			console.log('提交评论: '+commit);
			axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid="+this.context.userId+"&uniquekey="+this.context.uniquekey+"&commnet="+commit)
			.then( res => {
				this.props.getCommit();
			})
			.catch( res => {

			});	
		}else{
			message.error('请输入评论内容!');
		}
	}
	collectArticle(){
		axios.get('http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid='+this.context.userId+'&uniquekey='+this.context.uniquekey)
		.then( res => {
			//console.log(res);
			this.setState({
				isCollected: true,
			});
			notification.success({message: 'ReactNews收藏提醒',description:'文章收藏成功!'});

		})
		.catch( res => {

		});
	}
	render(){
		
		let {getFieldDecorator} = this.props.form;
		const labelLayout = {
			labelCol: { span: 24 },
			wrapperCol: { span: 24}
		}
		const isLogined = this.context.isLogined;
		var collectText = null;
		if(!isLogined){
			collectText = '登录收藏文章';
		}
		else{
			if(this.state.isCollected){
				collectText = "已收藏文章";
			}else{
				collectText = '收藏该文章';
			}
		}
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
							<Button type="primary" htmlType="button" onClick={this.collectArticle.bind(this)} disabled={!isLogined || this.state.isCollected}>{collectText}</Button>
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


