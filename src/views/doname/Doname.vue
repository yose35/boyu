<template>
	<div class="donames">
		<div class="title"><strong>{{$route.name}} Domain Name</strong><span class="doname_number">1筆订单</span><span class="doname_symbol">|</span><span class="doname_number">0个站点</span><span class="doname_symbol">|</span><span class="doname_number">共0个域名</span></div>
		<div class="doname_form">
			<div class="doname_list">

							<div class="table-responsive">
                <table class="table table-bordered table-hover">
  <thead>

  </thead>
  <tbody>
    <tr>
        <th style="border-left:7px solid #ddd" scope="row"><span class="text-primary">套餐一</span><br>#01</th>
      <th>订单编号<br>87654321</th>
        <th>站点状态<br><span class="text-danger">尚未建立</span></th>
        <th style="top;background-color:#eee;"><span class="text-danger">*</span>您的订单<span class="text-danger">尚在审核中</span>,<br> 审核通过方可增加站点,</th>
        <!--导引数据(修改)-->
      <th  class="text-center" style="vertical-align:middle; top;background-color:#DDD;" width="30px"><a href="#" class="fa fa-plus fa-2x" style="color:#FFF;text-decoration: none" aria-hidden="true"></a></th>
    </tr>
                    </tbody>
</table>      
                                  </div>

                <p class="text-center"><span class="text-danger">*</span>如有问题请联系线上客服人员、QQ谘询或电话谘询。</p>

<!--
<div class="remodal-bg">
  <div id="qunit"></div>
  <a href="#" data-remodal-target="modal">Call</a>
</div>
<div class="remodal" data-remodal-id="modal">
  <a data-remodal-action="close" class="remodal-close"></a>
  <div>
  	<p id="moda1Desc"><i class="fa fa-shopping-cart" aria-hidden="true"></i></p>
  </div>
  <a data-remodal-action="confirm" class="remodal-confirm" href="#">OK</a>
</div>
				-->
							<loading v-if="loadingShow"></loading>
			</div>
		</div>
	</div>
	 
</template>

<script>
    import '../../src/assets/js/jquery.js';
    import '../../src/assets/js/remodal.js';
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
	@import '../../styles/doname';

    </style>
