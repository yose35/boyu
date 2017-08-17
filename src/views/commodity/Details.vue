<template>
	<div class="commodity">
		<div class="title"><strong>{{$route.name}} Details</strong></div>
		<div class="comm_list">
		<div class="table-responsive">
        <table class="table table-bordered table table-striped ">

  <tbody>
       <tr style="background-color:#fff;">
        <td width="30%">付款二维码<br><br>
           付款时，请在附言栏中输入此绿色随机码：<br>
            <span class="t2">6f2b82</span></td>
        <td width="20%"><img :src="qr_code"/></td>

      </tr>
 <tr>
     
        <td>总金额</td>
        <td class="t2">¥24,000</td>

      </tr>
      <tr>
        <td>订单编号</td>
        <td class="t1">87654321</td>

      </tr>
      <tr>
        <td>下单时间</td>
        <td>2017-06-20 16:47</td>

      </tr>
        <tr>
        <td>商品名称</td>
        <td>套餐一</td>

      </tr>
      <tr>
        <td>购买月份数量</td>
        <td>3个月</td>

      </tr>
            <tr>
        <td>DDoS防火墙</td>
        <td>50G</td>

      </tr>
      <tr>
        <td>CC云清洗</td>
        <td>50M</td>

      </tr>
            <tr>
        <td>域名数量</td>
        <td>10个</td>

      </tr>
      <tr>
        <td>泛解析</td>
          <td><i class="fa fa-times" aria-hidden="true"></i></td>

      </tr>
            <tr>
        <td>访问端口</td>
        <td>80端口</td>

      </tr>
      <tr>
        <td>SSL支持</td>
        <td><i class="fa fa-times" aria-hidden="true"></i></td>
      </tr>
      <tr>
        <td>隐藏源ip</td>
        <td style="letter-spacing:10px;">支持</td>

      </tr>
      
      <tr>
        <td>大陆地区加速</td>
        <td style="letter-spacing:10px;">支持</td>

      </tr>
      <tr>
        <td>共享翻墙服务</td>
        <td><i class="fa fa-times" aria-hidden="true"></i></td>

      </tr>
      <tr class="t3" >
        <td colspan="2">提醒事项：无</td>

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
		data(){
			return{
		        num:0,
				groups: [],
				qr_code:require('../../assets/images/qr_code.png'),
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
	@import '../../styles/details.scss';
</style>