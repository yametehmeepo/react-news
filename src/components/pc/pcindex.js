import React, { Component } from 'react';
import { Row, Col } from 'antd';
import PCHeader from './pcheader';
import PCBody from './pcbody';
import PCFooter from './pcfooter.js';
import '../../assets/css/pc.css'

export default class PCIndex extends Component {
	render(){
		return (
			<div>
				<PCHeader />
				<content>
					<Row>
						<Col span={1}></Col>
						<Col span={22}>
							<PCBody />
						</Col>
						<Col span={1}></Col>
					</Row>
				</content>
				<PCFooter />
			</div>
		)
	}
}