<template>
	<view class="content">
		<view class="head">
			<!-- previous-margin指的是当前图片的左边框距离屏幕最左边的距离 -->
			<swiper style="height: 450rpx;" previous-margin="100rpx" next-margin="100rpx" @change="handlechange"
				:current="mycurrent" :indicator-dots="true" :autoplay="true" :circular="true" :interval="2000"
				:duration="1000">
				<swiper-item v-for=" index in 5" :key="index">
					<view :class="['swiper-item', index == mycurrent ? 'active' : '']">
						<img src="https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
							style="width: 100%;height: 100%;" alt="" srcset="">
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="middle">
			<button id="btn1">button</button>
			<button>button</button>
			<button>button</button>
			<button id="btn4">button</button>
			<button id="btn5">button</button>
			<button>button</button>
			<button>button</button>
			<button id="btn8">button</button>
		</view>
		<view class="foot">
			<view class="title_foot">
				<h1>疫苗攻略</h1>
				<a href="">更多></a>
				<scroll-view>
					<div @click="selectVaccinesArticle">1</div>
					<div>1</div>
					<div>1</div>
					<div>1</div>
				</scroll-view>
			</view>
		</view>
		<view>
			<Docker></Docker>
		</view>
	</view>
</template>

<script lang="ts">
import Vue from 'vue';
import { get } from '../../utils/request.js';
export default Vue.extend({
	data() {
		return {
			mycurrent: 1,
		}
	},
	onLoad() {

	},
	methods: {
		handlechange(e: any) {
			this.mycurrent = e.detail.current
		},

		/*async selectVaccinesArticle() {
			try {
				console.log("获取疫苗攻略数据try");
				const res = await get("/vaccinesarticle/select");
				if (res.status === 200) {
					console.log(res.data.result[0]);
				} else {
					console.log(res.data.message);
				}
			} catch (error) {
				console.log("Warning, 接口连接出错.");
			}
		}*/
		
		selectVaccinesArticle() {
			uni.request({
				url: 'http://localhost:8000/vaccinesarticle/select',
				method: 'GET',
				data: {},
				success: res => { console.log(JSON.stringify(res)) },
				fail: (err) => {console.log(JSON.stringify(err)) },
				complete: () => { }
			});
		}
	}
});
</script>

<style lang="scss">
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.head {
		width: 750rpx;
		height: 450rpx;
		background-color: rgba(237, 193, 193, 0);

		.swiper-item {
			border-radius: 30rpx;
			overflow: hidden;
			height: 85%;
			transform: scale(0.75);
			transition: all 0.3s ease;
			text-align: center;
			transition: all 0.3s ease-in-out;

			&.active {
				transform: scale(1.0);
			}
		}
	}

	.middle {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		button {
			width: 125rpx;
			height: 125rpx;

			margin: 25rpx;
		}

		#btn1,
		#btn5 {
			margin-left: 50rpx;
		}

		#btn4,
		#btn8 {
			margin-right: 50rpx;
		}
	}

	.foot {
		width: 750rpx;
		background-color: rgb(178, 236, 187);
		display: flex;
		flex-direction: column;

		h1 {
			display: inline-block;
			font-size: 50rpx;
		}

		a {
			float: right;
			font-size: 30rpx;
			margin-top: 10rpx;
		}
	}
}
</style>
