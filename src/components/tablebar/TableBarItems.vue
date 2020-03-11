<template>
	<div class="table-item" @click="itemClick">
			<div v-if="isActive"><slot name="table-img"></slot></div>
			<div v-else><slot name="table-active"></slot></div>
		<div :style="userColor"><slot name="table-text"></slot></div>
	</div>
</template>

<script>
	export default{
		props:{
			path:String,
			useColor:String
		},
	data(){
		return{
			
		}
	},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) == -1
				
			},
			userColor(){
				return this.isActive ? {}:{color:this.useColor}
			}
		},
		name:'TableItem',
		methods:{
			itemClick(){
				console.log(this)
				console.log(this.$router);
				console.log(this.path);
			 this.$router.push(this.path)
				
			}
		}
	}
</script>

<style>
	.table-item{
		flex: 1;
		text-align: center;
	}
	.table-item img{
		width: 24px;
		height: 24px;
		vertical-align: middle;
		margin-bottom: 4px;
		margin-top: 2px;
	}
</style>
