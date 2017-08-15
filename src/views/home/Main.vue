<template>
	<div class="home">
		<div class="title"><strong>最近消息 News</strong></div>
		<div class="pics"><img src="../../assets/images/home_img.jpg" alt="pic"></div>
		<ul>
			<li>时   间：2017年5月16日~18日</li>
			<li>地   点：澳门威尼斯人，金光会展中心</li>
			<li>嘉   宾：吉泽明步，于芷晴</li>
		</ul>
	</div>
</template>

<script>
	export default {
	}

</script>

<style scoped lang="scss">
	@import '~scss_vars';
	@import '../../styles/media_home';
	.home{
		img{
			margin:22px 0px;
		}
		ul{
			li{
				text-indent:20px;
				font-size:14px;
				line-height:24px;
			}
		}
	}
</style>