<template>
	<table-bar>
			 <table-item path='/home' useColor="red">
			 					<img src="../assets/images/index.svg" alt="主页" slot="table-img">
			 					<img  src="../assets/images/index_active.svg" alt="主页" slot='table-active'>
			 					<span slot="table-text">首页</span>
			 	</table-item>
			 	<table-item path="/apply" useColor="red">
			 					<img src="../assets/images/apply.svg" alt="应用" slot="table-img">
			 							<img src="../assets/images/apply_active.svg" alt="应用" slot="table-active">
			 					<span slot="table-text">应用</span>
			 	</table-item>
			 	<table-item path="/shop" useColor="red">
			 					<img src="../assets/images/shop.svg" alt="购物" slot="table-img">
			 							<img src="../assets/images/shop_active.svg" alt="购物" slot="table-active">
			 					<span slot="table-text">购物</span>
			 	</table-item>
			 	<table-item path="/my" useColor="red">
			 					<img src="../assets/images/my.svg" alt="我的" slot="table-img">
			 							<img src="../assets/images/my_active.svg" alt="我的" slot="table-active">
			 					<span slot="table-text">我的</span>
			 	</table-item>
	</table-bar>
</template>

<script>
	import TableBar from './tablebar/TableBar.vue'
	import TableItem from './tablebar/TableBarItems.vue'
	
	export default{
		name:'MainTable',
		components:{
			TableBar,
			TableItem
		}
	}
</script>

<style>
</style>
