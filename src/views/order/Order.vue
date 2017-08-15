<template>
	<div class="orders">
		<div class="title"><strong>{{$route.name}} Order Service Center</strong><span class="order_number">共几8个订单</span></div>
		<div class="order_form">
			<div class="order_list">

							<div class="table-responsive">
                <table class="table table-bordered table-hover">
  <thead>

  </thead>
  <tbody>
    <tr>
        <th style="border-left:7px solid #ddd" scope="row"><span class="text-primary">套餐一</span><br>#01</th>
      <th>订单编号<br>87654321</th>
      <th>产品项目<br>¥8,000</th>
      <th>剩馀有效天数 (月 / 日)<br>Mos.<span class="label label-danger">01</span> Days<span class="label label-danger">02</span></th>
        <th>订单状态<br><span class="text-primary">已支付</span></th>
        <!--导引数据(修改)-->
        <th><select class="form-control-inline"><option>延长有效天数</option><option>1</option><option>2</option></select><el-button style="margin-left:20px" type="primary" @click="rdit_pro=true">确认</el-button><el-button type="primary" @click="rdit_pro=true">取消</el-button></th>
      <th class="text-center" style="vertical-align:middle; top;background-color:#DDD;" width="30px"><a href="#" class="fa fa-trash-o fa-2x" style="color:#FFF;text-decoration: none" aria-hidden="true"></a></th>
    </tr>
                    </tbody>
</table>
                
   <table class="table table-bordered table-hover">
  <thead>

  </thead>
  <tbody>
    <tr>
      <th style="border-left:7px solid #ddd" scope="row"><span class="text-primary">套餐二</span><br>#02</th>
      <th>订单编号<br>87654322</th>
      <th>产品项目<br>¥15,000</th>
      <th>剩馀有效天数(月 / 日)<br>Mos.<span class="label label-default">01</span> Days<span class="label label-default">02</span></th>
        <th>订单状态<br><span class="text-primary">已升级</span></th>
        <!--导引数据(修改)-->
        <th class="text-center"><el-button style="margin-left:20px" type="primary" @click="rdit_pro=true"><i class="fa fa-edit fa-lg" aria-hidden="true"></i> 续　约</el-button></th>
        <th class="text-center" style="vertical-align:middle; top;background-color:#DDD;" width="30px"><a href="#" class="fa fa-trash-o fa-2x" style="color:#FFF;text-decoration: none" aria-hidden="true"></a></th>
    </tr>
                    </tbody>
</table>
                                                
   <table class="table table-bordered table-hover">
  <thead>

  </thead>
  <tbody>
    <tr>
      <th style="border-left:7px solid #ddd" scope="row"><span class="text-primary">套餐三</span><br>#03</th>
      <th>订单编号<br>87654323</th>
      <th>产品项目<br>¥15,400</th>
      <th>剩馀有效天数(月 / 日)<br>Mos.<span class="label label-default">01</span> Days<span class="label label-default">02</span></th>
        <th>订单状态<br><span class="text-primary">加购4个网站</span></th>

        <th class="text-center"><el-button style="margin-left:20px" type="primary" @click="rdit_pro=true"><i class="fa fa-edit fa-lg" aria-hidden="true"></i> 续　约</el-button></th>
        <th class="text-center" style="vertical-align:middle; top;background-color:#DDD;" width="30px"><a href="#" class="fa fa-trash-o fa-2x" style="color:#FFF;text-decoration: none" aria-hidden="true"></a></th>
    </tr>
                    </tbody>
</table>
                                                
   <table class="table table-bordered table-hover">
  <thead>

  </thead>
  <tbody>
    <tr>
      <th style="border-left:7px solid #ddd" scope="row"><span class="text-primary">套餐四</span><br>#04</th>
      <th>订单编号<br>87654324</th>
      <th>产品项目<br>¥32,000</th>
      <th>剩馀有效天数(月 / 日)<br>Mos.<span class="label label-default">01</span> Days<span class="label label-default">02</span></th>
        <th>订单状态<br><span class="text-primary">已订制</span></th>

        <th><el-button style="margin-left:20px" type="primary" @click="rdit_pro=true"><i class="fa fa-edit fa-lg" aria-hidden="true"></i> 续　约</el-button></th>
        <th class="text-center" style="vertical-align:middle; top;background-color:#DDD;" width="30px"><a href="#" class="fa fa-trash-o fa-2x" style="color:#FFF;text-decoration: none" aria-hidden="true"></a></th>
    </tr>
                    </tbody>
</table>
                                                
   <table class="table table-bordered table-hover">
  <thead>

  </thead>
  <tbody>
    <tr>
      <th style="border-left:7px solid #ddd" scope="row"><span class="text-primary">套餐一</span><br>#05</th>
      <th>订单编号<br>87654325</th>
      <th>产品项目<br>¥8,000</th>
      <th>剩馀有效天数(月 / 日)<br>Mos.<span class="label label-default">01</span> Days<span class="label label-default">02</span></th>
        <th>订单状态<br><span class="text-danger">审核中</span></th>
        <th><el-button style="margin-left:20px" type="primary" @click="rdit_pro=true"><i class="fa fa-edit fa-lg" aria-hidden="true"></i> 续　约</el-button></th>
        <th class="text-center" style="vertical-align:middle; top;background-color:#DDD;" width="30px"><a href="#" class="fa fa-trash-o fa-2x" style="color:#FFF;text-decoration: none" aria-hidden="true"></a></th>
    </tr>
                    </tbody>
</table>
                                                
   <table class="table table-bordered table-hover">
  <thead>

  </thead>
  <tbody>
    <tr>
      <th style="border-left:7px solid #ddd" scope="row"><span class="text-primary">套餐一</span><br>#06</th>
      <th>订单编号<br>87654326</th>
      <th>产品项目<br>¥8,000</th>
      <th>剩馀有效天数(月 / 日)<br>Mos.<span class="label label-default">01</span> Days<span class="label label-default">02</span></th>
        <th>订单状态<br><span class="text-danger">审核中</span></th>
        <th><el-button style="margin-left:20px" type="primary" @click="rdit_pro=true"><i class="fa fa-edit fa-lg" aria-hidden="true"></i> 续　约</el-button></th>
        <th class="text-center" style="vertical-align:middle; top;background-color:#DDD;" width="30px"><a href="#" class="fa fa-trash-o fa-2x" style="color:#FFF;text-decoration: none" aria-hidden="true"></a></th>
    </tr>
                    </tbody>
</table>
                                                
   <table class="table table-bordered table-hover">
  <thead>

  </thead>
  <tbody>
    <tr>
      <th style="border-left:7px solid #ddd" scope="row"><span class="text-primary">套餐一</span><br>#07</th>
      <th>订单编号<br>87654327</th>
      <th>产品项目<br>¥8,000</th>
      <th>剩馀有效天数(月 / 日)<br>Mos.<span class="label label-default">01</span> Days<span class="label label-default">02</span></th>
        <th>订单状态<br><span class="text-danger">审核中</span></th>
        <th><el-button style="margin-left:20px" type="primary" @click="rdit_pro=true"><i class="fa fa-edit fa-lg" aria-hidden="true"></i> 续　约</el-button></th>
        <th class="text-center" style="vertical-align:middle; top;background-color:#DDD;" width="30px"><a href="#" class="fa fa-trash-o fa-2x" style="color:#FFF;text-decoration: none" aria-hidden="true"></a></th>
    </tr>
                    </tbody>
</table>
                                                
   <table class="table table-bordered table-hover">
  <thead>

  </thead>
  <tbody>
    <tr>
      <th style="border-left:7px solid #ddd" scope="row"><span class="text-primary">套餐一</span><br>#08</th>
      <th>订单编号<br>87654328</th>
      <th>产品项目<br>¥8,000</th>
      <th>剩馀有效天数(月 / 日)<br>Mos.<span class="label label-default">01</span> Days<span class="label label-default">02</span></th>
        <th>订单状态<br><span class="text-primary">已升级</span></th>
        <th><el-button style="margin-left:20px" type="primary" @click="rdit_pro=true"><i class="fa fa-edit fa-lg" aria-hidden="true"></i> 续　约</el-button></th>
        <th class="text-center" style="vertical-align:middle; top;background-color:#DDD;" width="30px"><a href="#" class="fa fa-trash-o fa-2x" style="color:#FFF;text-decoration: none" aria-hidden="true"></a></th>
    </tr>
                    </tbody>
</table>

                                </div>

                

				
							<loading v-if="loadingShow"></loading>
			</div>
		</div>
	</div>
	 
</template>

<script>
    import '~scss_vars';
	import '../../styles/mixin';
	import '../../styles/media_home';
export default {
  props: {
    data: {
      type: Array,
      required: true,
      default: () => ([])
    },
    settings: {
      type: Object,
      default: () => ({})
    }
  },

  mounted () {
    this.settings.data = this.data
  },

  beforeDestroy () {
  }

}
</script>

<script>
import store from '../../vuex/'
import {mapGetters,mapActions} from 'vuex'
	export default {
		computed:{
			...mapGetters([
       			'loadingShow',
    		]),
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


<script>
	export default {
	}

</script>

<style scoped lang="scss">
	@import '~scss_vars';
	@import '../../styles/order';
    
</style>