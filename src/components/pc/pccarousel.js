import React, { Component } from 'react';
import { Carousel } from 'antd';

export default class PCcarousel extends Component {
	render(){
		const carouselSetting = {
			autoplay: true,
			arrows: true,
			dots: true,
			effect: 'scrollx',
			speed: 800,
			autoplaySpeed: 2000,
			pauseOnHover: true,
			draggable: false,
			swipe: false,
			swipeToSlide: false
		}
		return (
			<div className="carousel">
				<Carousel {...carouselSetting}>
					<div><img src={require('../../assets/img/carousel_1.jpg')} alt="carousel_1"/></div>
					<div><img src={require('../../assets/img/carousel_2.jpg')} alt="carousel_2"/></div>
					<div><img src={require('../../assets/img/carousel_3.jpg')} alt="carousel_3"/></div>
					<div><img src={require('../../assets/img/carousel_4.jpg')} alt="carousel_4"/></div>
				</Carousel>
			</div>
		)
	}
}

