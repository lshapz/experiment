<template>

</template>
<script>
Vue.Component('counter', {
	name: 'counter',
	template: '{{number}}<button @click.prevent="addOne">Add One</button><button @click.prevent="minusOne">Minus One</button>',
	data: function(){
		return {
			number: 0
		}
	},
	methods: {
		addOne: function(){
			this.number += 1
		},
		minusOne: function(){
			this.number -= 1
		}
	}
})

var view = new Vue({
	el: "#counter"
})

</script>
