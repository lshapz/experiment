let child, snake, youtube, minesweeper
var count = 0

function createWindow (){ 
	child = new windowmanager.Window({url: "child.html", width: 500, height: 500, frame: false, title: "Window " + count})
	console.log(child)
	count += 1
	// child.onReady(()=>{
	// 	child.focus()
	// })

}

function createMinesweeper(){
	minesweeper = new windowmanager.Window({url: "index.html", width: 800, height: 750, frame: false}) //, left: 350, top: 300
	console.log(minesweeper)
	minesweeper.moveBy(30, 50)
	// var srcs = windowmanager.Window.getAll().map(item=>{return {src: item._window.src, window: item}})
	
	// var snake = srcs.filter(item=>{return item.src}).filter(item=>{return item.src.includes('snake')})[0].window
	// if (snake) {
	// 	var neighbor = snake.getPosition()
	// 	youtube.moveTo(neighbor.left - 600, neighbor.top+100)
	// 	youtube.dock(snake)
	// 	snake.dock(youtube)
	
	// }

}


function createYoutube(){
	// can we have an argument that's a youtube URL or search? 
	youtube = new windowmanager.Window({url: "youtube.html", width: 580, height: 600, frame: false}) //, left: 350, top: 300
	console.log(youtube)
	var srcs = windowmanager.Window.getAll().map(item=>{return {src: item._window.src, window: item}})
	
	var snake = srcs.filter(item=>{return item.src}).filter(item=>{return item.src.includes('snake')})[0].window
	if (snake) {
		var neighbor = snake.getPosition()
		youtube.moveTo(neighbor.left - 600, neighbor.top+100)
		youtube.dock(snake)
		snake.dock(youtube)
	
	}

}



function createSnake(){
	snake = new windowmanager.Window({url: "snake.html", width: 600, height: 600, frame: false}) //left: 930, top: 225
	console.log(snake)
	var srcs = windowmanager.Window.getAll().map(item=>{return {src: item._window.src, window: item}})
	
	var youtube = srcs.filter(item=>{return item.src}).filter(item=>{return item.src.includes('youtube')})[0].window
	if (youtube){
		var neighbor = youtube.getPosition()
		snake.moveTo(neighbor.left + 600, neighbor.top - 100)
		snake.dock(youtube)
		youtube.dock(snake)
	}	

}