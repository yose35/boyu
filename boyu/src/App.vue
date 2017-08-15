<template>
	<div id="app">
		<transition name="fade"
		            mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'app',

}

</script>

<style lang="scss">
@import './styles/common';
body,html{height:100%;}
body {
	margin: 0px;
	padding: 0px;
	/*background: url(assets/bg1.jpg) center !important;
		background-size: cover;*/
	// background: #1F2D3D;
	font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
	font-size: 14px;
	-webkit-font-smoothing: antialiased;
}

#app {
	height:100%;
}

.el-submenu [class^=fa] {
	vertical-align: baseline;
	margin-right: 10px;
}

.el-menu-item [class^=fa] {
	vertical-align: baseline;
	margin-right: 10px;
}
.toolbar {
	background: #f2f2f2;
	padding: 10px;
	//border:1px solid #dfe6ec;
	margin: 10px 0px;
	.el-form-item {
		margin-bottom: 10px;
	}
}

 .bounce-enter-active {
        animation: bounce-in .5s;
        -webkit-animation:bounce-in .5s;
    }
    
    .bounce-leave-active {
        animation: bounce-out .2s;
        -webkit-animation: bounce-out .2s;
    }
    
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
/*        50% {
            transform: scale(0.5);
        }*/
        100% {
            transform: scale(1);
        }
    }
    
    @keyframes bounce-out {
        0% {
            transform: scale(1);
        }
/*        50% {
            transform: scale(0.5);
        }*/
        100% {
            transform: scale(0);
        }
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: all .1s ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }
    @media screen and(max-width:479px){
        .el-message-box{
            width:auto !important;
        } 
    }
</style>