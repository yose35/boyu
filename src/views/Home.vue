<template>
	<div id="contents">
		<el-row class="container">
				<!-- <el-col :span="24" class="main">
					<el-col :span="24" class="header">	
				</el-col> -->
					<!-- <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
						
						<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
							 unique-opened router v-show="!collapsed">
							<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
								<el-submenu :index="index+''" v-if="!item.leaf">
									<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
									<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
								</el-submenu>
								<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
							</template>
						</el-menu>
						
						<ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
							<li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="el-submenu item">
								<template v-if="!item.leaf">
									<div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
									<ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"> 
										<li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">{{child.name}}</li>
									</ul>
								</template>
								<template v-else>
									<li class="el-submenu">
										<div class="el-submenu__title el-menu-item" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>
									</li>
								</template>
							</li>
						</ul>
					</aside> --> 
					<el-col :span="6" class="left_cont" :class="{'menu_active':classA}">
						<div class="logo logo-width">
							<div class="title_bt"><h3>BOYU CDN会员中心</h3><span @click="classA=false"></span></div>
							<img :src="logo"/>
						</div>
						<aside class="menu">
							<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router :default-active="$route.path">
						      <el-menu-item index="/main"><i class="fa fa-home"></i>首页提醒</el-menu-item>
						      <el-menu-item index="/personaldate"><i class="fa fa-address-card-o"></i>个人资料</el-menu-item>
						      <el-menu-item index="/commodity"><i class="fa fa-shopping-basket"></i>商品列表</el-menu-item>
						      <el-menu-item index="/order"><i class="fa fa-list"></i>订单中心</el-menu-item>
						      <el-menu-item index="/doname"><i class="fa fa-sitemap"></i>域名管理</el-menu-item>
						      <el-menu-item index @click.native='logout' class="logout"><i class="fa fa-sign-out" aria-hidden="true"></i>登出</el-menu-item>
						    </el-menu>
					    </aside>
					</el-col>
					<el-col :span="18" class="right_cont">
						<div class="userinfo">
							<div class="nav_header">
								<div class="dispa">
									<a href="javascript:;" @click="menu"><i class="fa fa-cog"></i></a>
									<div class="my-titles">
										<strong v-html="$route.name"></strong>
									</div>
								</div>
							</div>
							<div class="user_logout">
								<el-dropdown trigger="hover">
									<span class="el-dropdown-link userinfo-inner"><i class="fa fa-user-circle" style="color:#e13240;margin-right:5px;font-size:26px;
									/*vertical-align: middle;*/"></i>{{sysUserName}}</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item>我的消息</el-dropdown-item>
										<el-dropdown-item>设置</el-dropdown-item>
									</el-dropdown-menu>
								</el-dropdown>
							<a href="javascript:;" title="登出" @click="logout"><i class="fa fa-sign-out"></i>登出</a>
							</div>
						</div>
						<section class="content-container">
							<div class="grid-content bg-purple-light">
								<el-col :span="24" class="content-wrapper">
									<!--name="fade" mode="out-in"-->
									<transition mode="out-in">
										<keep-alive>
											<router-view></router-view>
										</keep-alive>
									</transition>
									<!-- <loading v-if="loadingShow"></loading> -->
								</el-col>
							</div>
							<div class="copy">
								© Boyucdn Limited, Inc. All rights reserved.  CREATED BY BOYU
							</div>
						</section>
					</el-col>
				</el-col>
			</el-row>
		</div>
</template>

<script>
import store from '../vuex/'
import {mapGetters,mapActions} from 'vuex'
	export default {
		data() {
			return {
				logo:require('../assets/images/logo.png'),
				collapsed:false,
				sysUserName: '',
				classA:false
			}
		},
		// computed:mapGetters([
  //      		'loadingShow',
  //   	]),
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function (a, b) {
			},
			//退出登录
			logout() {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					 localStorage.removeItem('currentUser_id');
					 localStorage.removeItem('currentUser_name');
					 localStorage.removeItem('currentUser_token');
					_this.$router.push('/login');
				}).catch(() => {

				});
			},
			//折叠导航栏
			// collapse:function(){
			// 	this.collapsed=!this.collapsed;
			// },
			// showMenu(i,status){
			// 	this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			// },
			handleOpen(key, keyPath) {
		      console.log(key, keyPath);
		    },
		    handleClose(key, keyPath) {
		      console.log(key, keyPath);
		    },
			menu(){
			   this.classA=!this.classA;
			}
		},
		mounted() {
			var user = localStorage.getItem('currentUser_name');
			if (user) {
				this.sysUserName = user || '';
			}
		},
		created(){

	      //加载
	      this.$http.interceptors.request.use(function(config){ //发送请求
	        // store.dispatch('showLoding')
	        // if(store.getters.getToken){
	        // 	config.headers.Authorization = `Bearer ${store.getters.getToken}`;
	        // }
	        return config;
	      },function(error){
	        return Promise.reject(error);
	      })
	      this.$http.interceptors.response.use(function(response){ //接受数据
	        // store.dispatch('hideLoading')
	        return response;
	      },function(error){
	        return Promise.reject(error)
	      })
		},
		watch:{
			$route(to,from){
				if(to.path){
					this.classA=false;
				}
			}
		}
	}

</script>

<style scoped lang="scss">
	@import '~scss_vars';
	@import '../styles/vip_index';
	@import '../styles/media_home';
	.el-dropdown-menu {
		margin-top:5px;
		li{
			padding:0px 10px;
		}
	}
	.fa-sitemap{
		font-size:24px;
	}
</style>