import Vue from 'vue'

Vue.component('report1', {
	name: 'report1',
	template: require('./reporttemplate.html'),
	data: function(){
		return {
			name: "report1", text: 'this is the first report', image: 'http://1.bp.blogspot.com/-nzm908Pfunw/VqXgeRNp4LI/AAAAAAAACJI/wgeVntLSIT8/s1600/status-report.png',
		}
	},
	methods: {

	}
})


Vue.component('report2', {
	name: 'report2',
	template: require('./reporttemplate.html'),
	data: function(){
		return {
			name: "report2", text: 'this is the second report', image: 'http://www.rescueghanamission.org/wp-content/uploads/2017/04/bao-cao.jpg'
		}
	},
	methods: {

	}
})
Vue.component('report3', {
	name: 'report3',
	template: require('./reporttemplate.html'),
	data: function(){
		return {
			name: "report3", text: 'this is the third report', image: 'http://www.q4blog.com/wp-content/uploads/2015/10/1099-r.png'
		}
	},
	methods: {

	}
})


new Vue({
	el: "#reportData", 
	data: {
		currentView: "report1"
		// reports: {
		// 	{name: "report1", text: 'this is the first report', image: 'http://1.bp.blogspot.com/-nzm908Pfunw/VqXgeRNp4LI/AAAAAAAACJI/wgeVntLSIT8/s1600/status-report.png'},
		// 	{name: "report2", text: 'this is the second report', image: 'http://www.rescueghanamission.org/wp-content/uploads/2017/04/bao-cao.jpg'},
		// 	{name: "report3", text: 'this is the third report', image: 'http://www.q4blog.com/wp-content/uploads/2015/10/1099-r.png'},

		// }
	}
})