<template>
	<div>
		<div>
			<input v-model="inputVal" />
			<div class="button" v-on:click="addTitle">button</div>
		</div>
		<div>
			<input v-on:keydown="showMsg" />
			<div></div>
		</div>
		<div>{{inputVal}}</div>
		<div v-html="htmlmsg"></div>
		<div v-text="textmsg"></div>
		<div v-for="item in msgArr">
			<div>{{item.text}}</div>
		</div>
		<div v-for="(item,index) in msgArr" v-on:click="parentShow">
			<menuItem v-bind:itemData="item" v-bind:key="index" v-bind:itemClick="itemClick" @testEmit="testEmit"/>
		</div>
	</div>
	
</template>

<script>
	import menuItem from "./menuItem"
	export default {
		name: 'test',
		components:{menuItem},
		watch:{
			showVal(val,oldval){
				console.log(val,oldval);
			}
		},
		data() {
			return {
				textmsg: 'Welcome to Your Vue.js App',
				htmlmsg: '<div>Welcome to Your Vue.js App</div>',
				msgArr:[{
					text:"a",
					num:1
				},{
					text:"b",
					num:2
				}],
			    inputVal:"",
				showVal:""
			}
		},
		methods:{
			addTitle:function(){
			  var demoItem = {
			  	text:"",
			  	num:1
			  }
			  demoItem.text = this.inputVal;
			  this.msgArr.push(demoItem);
			  this.inputVal = "";
			},
			parentShow(){
				console.log("parent");
			},
			itemClick(){
				console.log("child");
			},
			showMsg(evt){
				console.log(evt.target.value);
			},
			testEmit(data){
				
			}
		}
	}
</script>

<style>
.button{
	cursor: pointer;
}
</style>