<template>
	<div class="personaldate">
		<div class="title"><strong>更改个人资料   Edit Profile</strong></div>
			<el-row>
				<el-col :xs="24" :sm="10" :md="10" :lg="10">
					<el-form :model="profile" :rules="rules" ref="profile">
					  <el-form-item label="E-mail" prop="email">
					     <el-input v-model='profile.email' :disabled="true"></el-input>
					  </el-form-item>
					  <el-form-item label="名称" prop='name'>
					     <el-input v-model='profile.name' :disabled="rdit_pro===true?pros=false:pros=true"></el-input>
					  </el-form-item>

					  <el-form-item label="常用语言" v-if="rdit_pro===false">
					    <el-input :disabled="true" v-model='profile.language' ></el-input>    	
					  </el-form-item>

					  <el-form-item label="常用语言" v-if="rdit_pro===true">
					  	<el-select v-model="profile.value" placeholder="请选择" size="100%" >
						    <el-option v-for="(item,index) in selects" :key="item.value" :label="item.value" :value="item.locale"></el-option>
						  </el-select>
					  </el-form-item>
					  <div class="rdit_btn" v-if="rdit_pro===false">
					  		<el-button type="primary" @click="rdit_pro=true">编辑</el-button>
					  </div>
					  <div class="rdit_btn" v-if="rdit_pro===true">
					  		<el-button type="primary" @click.native='save_Pro' :loading="logining">保存</el-button>
					  </div>
					</el-form>
				</el-col>
			</el-row>
		<div class="line"></div>
		<div class="title changepaw"><strong>更改密码 Change Passwords</strong></div>
		<el-row>
			<el-col :xs="24" :sm="10" :md="10" :lg="10">
				<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left">
				  <el-form-item prop='old_psw' label="旧密码">
				    <el-input v-model='ruleForm2.old_psw' type="password"></el-input>
				  </el-form-item>
				  <el-form-item prop='new_paw' label="新密码">
				    <el-input v-model='ruleForm2.new_paw' type="password"></el-input>
				  </el-form-item>
				  <el-form-item prop='password_confirmation' label="确认新密码">
				    <el-input v-model='ruleForm2.password_confirmation' type="password"></el-input>
				  </el-form-item>
				  <el-button type="primary" @click.native="revise_psw" :loading="logining">确认</el-button>
				</el-form>
			</el-col>
		</el-row>
		<div class="line"></div>
			<ul class="pro_date">
				<li>注册日期:{{created_at}}</li>
				<li>最后更新日期:{{updated_at}}</li>
			</ul>
		<div class="line"></div>
	</div>
</template>

<script>
	import axios from 'axios'
	import qs from 'qs'
	import store from '../../vuex/'
	import {id,otoken,token} from '../../api/http'
	export default {
			data(){
			var validatePass1 = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请输入密码'));
		        } else {
		          if(!(/^[a-zA-Z0-9_-]{6,16}$/.test(value))){
		                callback(new Error('密码至少6位,由大小写字母和数字,-,_组成'));
		              }else{
		                if(this.register===true){
		                  if (this.ruleForm2.password_confirmation !== ''){
		                     this.$refs.ruleForm2.validateField('password_confirmation');
		                  }
		                }
		          callback();
		          }
		        }
		    };
		    var validatePass2 = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请再次输入密码'));
		        } else if (value !== this.ruleForm2.new_paw) {
		          callback(new Error('两次输入密码不一致!'));
		        } else {
		          callback();
		        }
		    };
			return{
				rdit_pro:false,
				pros:true,
				logining: false,
				profile:{
					email:'',
					name:'',
					language:'',
					value:''
				},
				ruleForm2:{
					old_psw:'',
					new_paw:'',
					password_confirmation:''
				},
				created_at:'',
				updated_at:'',
				selects:[{value:'英文(English)',locale:'en'},{value:'中文(Chinese)',locale:'zh-CN'}],
				id:localStorage.getItem('currentUser_id'),
				otoken:localStorage.getItem('currentUser_token'),
				rules:{
					email:[
						{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
            			{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
					],
					name: [
			            { required: true, message: '请输入名称', trigger: 'blur'},
			            { min:3,max:10,message:'长度3到10个字'}
			        ]
				},
		        rules2: {
		          old_psw:[
		            { required: true, message: '请输入您的旧密码', trigger: 'blur' }
		          ],
		          new_paw: [
		            {required: true, validator: validatePass1, trigger: 'blur'}
		          ],
		          password_confirmation: [
		            {required: true, validator: validatePass2, trigger: 'blur'}
		          ],
		        },
			}
		},
		watch:{
			$route(to,from){
				if(to.path=='/personaldate'){
					this.personal()
				}
			}
		},
		created(){
			this.personal();
		},
		methods:{
			/*取信息*/
			personal(){
				 var token= {headers:{Authorization:`Bearer ${this.otoken}`}};
				this.$http.get('users/'+this.id,token).then(res=>{
						var da=res.data.data;
						this.profile.name=da.name;
						this.profile.email=da.email;
						this.profile.language=da.locale;
						if(da.locale=='en'){
							this.profile.language='英文 (English) *'
						}else{
							this.profile.language='中文 (Chinese) *'
						}
						this.created_at=da.created_at;
						this.updated_at=da.updated_at;
					}).catch(error=>{
						this.$message({
		                    message:'信息获取失败',
		                    type: 'error'
	                	});
				})
			},
			/*更新资料*/
			save_Pro(){
				 this.$refs.profile.validate((valid) => {
						if(valid){
						 var token= {headers:{Authorization:`Bearer ${this.otoken}`}};
						 var oJSON={email:this.profile.email,name:this.profile.name,locale:this.profile.value};
						 var params=qs.stringify(oJSON);
						this.logining = true;
						if(oJSON.locale!==''){
						this.$http.patch('users/'+this.id,params,token).then(res=>{
							this.logining=false;
							this.$message({
			                    message:'更新成功',
			                    type: 'success'
		                	});
		                	this.rdit_pro=false;
		                	this.personal();
						}).catch(error=>{
							this.$message({
			                    message:'更新信息失败',
			                    type: 'error'
		                	});
						})
					}else{
						this.$message({
							message:'请选择语言!',
							type:'warning'
						})
						this.logining=false;
						return false;
					}
					}else{
						return false;
					}
				})
			},
			/*修改密码*/
			revise_psw(){
				this.$refs.ruleForm2.validate((valid) => {
					if(valid){
						var token= {headers:{Authorization:`Bearer ${this.otoken}`}};
						var inP={old_password:this.ruleForm2.old_psw,password:this.ruleForm2.new_paw,password_confirmation:this.ruleForm2.password_confirmation}
						this.logining = true;
						this.$http.post('users/'+this.id+'/edit_password',inP,token).then(res=>{
							this.logining = false;
							if(res.status==200||res.status_code==400){
								this.$message({
				                    message:'旧密码错误',
				                    type: 'error'
		                		});
							}
							if(res.status==204){
								this.$message({
				                    message:'密码修改成功',
				                    type: 'success'
		                		});
		                		 localStorage.removeItem('currentUser_id');
								 localStorage.removeItem('currentUser_name');
								 localStorage.removeItem('currentUser_token');
								 this.$router.push('/login');
							}
						}).catch(error=>{
							this.$message({
			                    message:'修改密码失败',
			                    type: 'error'
		                	});
						})
					}else {
		              return false;
		            }
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '~scss_vars';
	@import '../../styles/mixin';
	@import '../../styles/media_home';
	.el-form{
		margin-top:15px;
		.el-form-item{
			margin-bottom:10px;
		}
	}
	.el-button{
		width:85%;
		margin:20px auto;
		display:block;
		font-size:16px;
		@include box-shadow(0px -2px 0px #00414f inset);
		@include line-height(26px);
		transition:all .3s ease;
		&:hover{
			@include box-shadow(0px -2px 0px #0086a1 inset);
		}
	}
	.line{
		width:100%;
		height:1px;
		background:#ddd;
		clear:both;
	}
	.line:nth-last-child(1){
		margin-bottom:20px;
	}
	.changepaw{
		margin-top:17px;
	}
	.pro_date{
		li{
			float:left;
			line-height:60px;
			font-size:14px;
			margin-left:30px;
			list-style-type: disc;
		}
	}
</style>