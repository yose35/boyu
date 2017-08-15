<template>
	<div class="commodity">
		<div class="title"><strong>{{$route.name}} Products</strong></div>
		<div class="comm_list">
		<div class="table-responsive">
        <table class="table table-bordered table table-striped ">

  <tbody>
       <tr style="background-color:#fff;">
        <td width="12%"></td>
        <td width="15%"><img :src="products"/><br>套餐一</td>
        <td width="15%"><img :src="products"/><br>套餐二</td>
        <td width="15%"><img :src="products"/><br>套餐三</td>
        <td width="15%"><img :src="products"/><br>套餐四</td>
        <td width="15%"><img :src="products"/><br>套餐五</td>
      </tr>
 <tr>
     
        <td style="letter-spacing:10px;">价格</td>
        <td class="t1">¥8,000</td>
        <td class="t1">¥15,000</td>
        <td class="t1">¥25,000</td>
        <td class="t1">¥30,000</td>
        <td class="t1">¥55,000</td>
      </tr>
      <tr style="letter-spacing:10px;">
        <td>时间</td>
        <td>每月</td>
        <td>每月</td>
        <td>每月</td>
        <td>每月</td>
        <td>每月</td>
      </tr>
      <tr>
        <td>DDoS防火墙</td>
        <td class="t2">100G</td>
        <td class="t2">150G</td>
        <td class="t2">150G</td>
        <td class="t2">200G</td>
        <td class="t2" style="letter-spacing:10px;">无限</td>
      </tr>
        <tr>
        <td>CC云清洗</td>
        <td class="t2">100M</td>
        <td class="t2">150M</td>
        <td class="t2">150M</td>
        <td class="t2">200M</td>
        <td class="t2" style="letter-spacing:10px;">无限</td>
      </tr>
      <tr>
        <td>域名数量</td>
        <td class="t2">10个</td>
        <td class="t2">50个</td>
        <td class="t2">100个</td>
        <td class="t2">150个</td>
        <td class="t2" style="letter-spacing:10px;">无限</td>
      </tr>
            <tr>
        <td>泛解析</td>
        <td><i class="fa fa-times" aria-hidden="true"></i></td>
        <td><i class="fa fa-times" aria-hidden="true"></i></td>
        <td class="t2" style="letter-spacing:10px;">支持</td>
        <td class="t2" style="letter-spacing:10px;">支持</td>
        <td class="t2" style="letter-spacing:10px;">支持</td>
      </tr>
      <tr>
        <td>访问端口</td>
        <td>80端口</td>
        <td>支持非80</td>
        <td>支持非80</td>
        <td>支持非80</td>
        <td>支持非80</td>
      </tr>
            <tr>
        <td>SSL支持</td>
        <td><i class="fa fa-times" aria-hidden="true"></i></td>
        <td class="t2" style="letter-spacing:10px;">支持</td>
        <td class="t2" style="letter-spacing:10px;">支持</td>
        <td class="t2" style="letter-spacing:10px;">支持</td>
        <td class="t2" style="letter-spacing:10px;">支持</td>
      </tr>
      <tr>
        <td>大陆地区加速</td>
        <td style="letter-spacing:10px;">支持</td>
        <td style="letter-spacing:10px;">支持</td>
        <td style="letter-spacing:10px;">支持</td>
        <td style="letter-spacing:10px;">支持</td>
        <td style="letter-spacing:10px;">支持</td>
      </tr>
            <tr>
        <td>隐藏源ip</td>
        <td style="letter-spacing:10px;">支持</td>
        <td style="letter-spacing:10px;">支持</td>
        <td style="letter-spacing:10px;">支持</td>
        <td style="letter-spacing:10px;">支持</td>
        <td style="letter-spacing:10px;">支持</td>
      </tr>
      <tr>
        <td>共享翻墙服务</td>
        <td><i class="fa fa-times" aria-hidden="true"></i></td>
        <td><i class="fa fa-times" aria-hidden="true"></i></td>
        <td><i class="fa fa-times" aria-hidden="true"></i></td>
        <td><i class="fa fa-times" aria-hidden="true">订制后开通</i></td>
        <td style="letter-spacing:10px;">支持</td>
      </tr>
            <tr style="background-color:#fff;">
        <td rowspan="2"></td>
        <td><el-select placeholder="购买月份数量"></el-select></td>
        <td><el-select placeholder="购买月份数量"></el-select></td>
                <td><el-select placeholder="购买月份数量"></el-select></td>
                <td><el-select placeholder="购买月份数量"></el-select></td>
                <td><el-select placeholder="购买月份数量"></el-select></td>
      </tr>
      <tr>
        <td><el-button @click.native="order_btn" type="primary"><i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>购买套餐</el-button></td>
        <td><el-button @click.native="order_btn" type="primary"><i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>购买套餐</el-button></td>
        <td><el-button @click.native="order_btn" type="primary"><i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>购买套餐</el-button></td>
        <td><el-button @click.native="order_btn" type="primary"><i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>购买套餐</el-button></td>
        <td><el-button @click.native="order_btn" type="primary"><i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>购买套餐</el-button></td>
      </tr>

                    </tbody>
</table>
                
 

                                </div>

                

				
							<loading v-if="loadingShow"></loading>
			</div>
		</div>

</template> 

<script>
import store from '../../vuex/'
import {mapGetters,mapActions} from 'vuex'
	export default {
		computed:{
			...mapGetters([
       			'loadingShow',
    		]),
		},
		data(){
			return{
				da:[{
					id:'',
					price:'',
					prifix:'',
					name:'',
					expansions:[{

					}],
				}],
				language:{
					chinese:['站点数量','域名数量','DDos防火墙','cc云清洗','泛解析','访问端口','SSL支持','智能缓存','页面压缩','SEO专线','黑名单','定制'],
					english:['Site number','Domain name number','DDoS firewall','CC cloud cleaning','Pan analytic','Access port','SSL support','Intelligent caching','Page compression','SEO line','Blacklist','Customized']
				},
				value2:'1',
				 options: [
				 
		        ],
		        num:0,
				groups: [],
				products:require('../../assets/images/cp.png'),
				id:localStorage.getItem('currentUser_id'),
				otoken:localStorage.getItem('currentUser_token')
			}
		},
		methods:{
			getProducts(){
				store.dispatch('showLoding')
				var token= {headers:{Authorization:`Bearer ${this.otoken}`}};
				this.$http.get('/goods?',token).then(res=>{
					store.dispatch('hideLoading')
					let da=res.data.data;
					this.da=da;
					for(var i=0; i<da.length; i++){
						this.groups[i] = i;	
						// this.options.value=parseInt(da[i].price)*1;
						// this.options.value=parseInt(da[i].price)*2;
						// this.options.value=parseInt(da[i].price)*3;
						// this.options.value=parseInt(da[i].price)*4;
						// console.log(this.options.value)
					}
				}).catch(error=>{

				})
			},
			order_btn(){
				alert($(this).index())
			}

		},
		mounted(){
			this.getProducts();
			//this.data['abc']='expansions';
		}
	}
</script>

<style scoped lang="scss">
	@import '~scss_vars';
	@import '../../styles/commodity.scss';
</style>