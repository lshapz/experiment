let child, snake, youtube
var count = 0

function createWindow (){ 
	child = new windowmanager.Window({url: "child.html", width: 500, height: 500, frame: false, title: "Window " + count})
	console.log(child)
	count += 1
	// child.onReady(()=>{
	// 	child.focus()
	// })

}

function createYoutube(){
	// can we have an argument that's a youtube URL or search? 
	youtube = new windowmanager.Window({url: "embed.html", width: 580, height: 600, frame: false, left: 350, top: 300})
	console.log(youtube)
	var srcs = windowmanager.Window.getAll().map(item=>{return {src: item._window.src, window: item}})
	
	var snake = srcs.filter(item=>{return item.src}).filter(item=>{return item.src.includes('snake')})[0].window
	youtube.dock(snake)

/*	child.onReady(()=>{
		child.focus()
	})*/

}



function createSnake(){
	snake = new windowmanager.Window({url: "snake.html", width: 600, height: 600, frame: false, left: 931, top: 225})
	console.log(snake)
	var srcs = windowmanager.Window.getAll().map(item=>{return {src: item._window.src, window: item}})
	
	var tube = srcs.filter(item=>{return item.src}).filter(item=>{return item.src.includes('embed')})[0].window
	snake.dock(tube)
	// debugger
/*	child.onReady(()=>{
		child.focus()
	})*/

}