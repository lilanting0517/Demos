<template>
	<!--<div v-on:click.stop="itemClick">{{itemData.text}}</div>-->
	<div v-on:click.stop="testEmitFromChild">{{itemData.text}}</div>
</template>

<script>
	export default {
		name: 'menuItem',
		props: ["itemData","itemClick","testEmit"],
		methods:{
			testEmitFromChild(){
				console.log("testEmitFromChild");
				this.$emit("testEmit",this.itemData);
			}
		}

	}
</script>

<style>

</style>