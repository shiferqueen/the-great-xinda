<template>
	<Row>
		<Col :xs="{ span: 0}" :sm="{ span: 24}">
		<div class="tail">
			<div class="aboutus clear">
				<div class="ab-left fl">
					<p class="title">关于我们</p>
					<p class="containt">联系我们：contact@xinkeher.com</p>
					<p class="containt">公司地址：北京市朝阳区大望路soho现代城</p>
					<p class="containt">官方客服电话：010-83421842</p>
				</div>
				<div class="ab-right fr">
					<img src="../images/index/u265.png" class="fl">
					<div class="fl wenzi">
						<p>扫描二维码</p>
						<span>关注我们</span>
					</div>
				</div>
			</div>
		</div>
		</Col>
		<!--这是手机端尾部-->
		<Col span="6" :xs="{ span: 24}" :sm="{ span: 0}">
		<div class="index_choice">
			<div class="fl in_choice">
				<a href="#/home" @click="home(1)" :class="{blue:home_index.num==1}">
					<Icon type="home" class="home"></Icon>
					<p class="choice">首页</p>
				</a>
			</div>
			<div class="fl in_choice">
				<a href="#/shoplist" @click="home(2)" :class="{blue:home_index.num==2}">
					<Icon type="ios-home" class="home"></Icon>
					<p class="choice">店铺</p>
				</a>
			</div>
			<div class="fl in_choice">
				<a href="#/shopping" @click="home(3)" :class="{blue:home_index.num==3}">
					<Icon type="android-cart" class="home"></Icon>
					<p class="choice">购物车</p>
				</a>
			</div>
			<div class="fl in_choice">
				<a @click="home(4)" :class="{blue:home_index.num==4}">
					<Icon type="android-person" class="home"></Icon>
					<p class="choice">我的</p>
				</a>
			</div>
		</div>
		</Col>
	</Row>
</template>

<script>
import {
	mapGetters,
	mapActions
} from 'vuex'
export default {
	name: 'myfoot',
	data() {
		return {
			home_index: {
				num:1
			},
		}
	},
	methods: {
		home(index) {
			this.$set(this.home_index,'num',index)
			if(index == 4){
				if(this.getuser){
					this.$router.push({path:'/member/logged'})
				}else{
					this.$router.push({path:'/member/logout'})
				}
			}
		},
	},
	computed: {
		...mapGetters(['getuser'])

	},
}
</script>

<style lang="less" scoped>
@media screen and (max-width:768px) {
	.index_choice {
		font-size: 40px;
	}
}
@media screen and (max-width:400px) {
	.index_choice {
		min-width: 320px;
		font-size: 35px;
	}
}

.fl {
	float: left;
}

.fr {
	float: right;
}



.tail {
	width: 100%;
	height: 200px;
	background-color: #f8f8f8;
	.aboutus {
		width: 1200px;
		height: 100%;
		margin: 0 auto;
		color: #000;
		.ab-left {
			width: 700px;
			height: 100%;
			.title {
				color: #000;
				padding: 35px 0;
				font-size: 16px;
			}
			.containt {
				color: #BCBCBC;
				font-size: 14px;
				line-height: 22px;
			}
		}
		.ab-right {
			width: 330px;
			height: 80%;
			padding-top: 50px;
			.wenzi {
				width: 150px;
				height: 100%;
				color: #BCBCBC;
				font-size: 15px;
				line-height: 28px;
				p {
					padding-top: 50px;
				}
			}
		}
	}
}

.index_choice {
	// height: 10%;
	width: 100%;
	border-top: 1px solid #ececec;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 999;
	background: rgba(255, 255, 255,1);

	.in_choice {
		width: 25%;
		text-align: center;
		.blue {
			color: #2693d4;
		}
		a {
			font-size: .8em;
			padding:.2em 0;
			width: 100%;
			// height: 100%;
			display: block;
			color: #b3b3b3;
			p {
				margin-top: .1em;
				font-size: .5em;
			} 
			 line-height: .5em;
			//  .home{
			//    font-size: 80%;
			//     line-height: 105%;
			//  }
			// .choice{
			//   font-size: 33%;
			//   line-height: 50%;
			// }
		}
	}
}
</style>
