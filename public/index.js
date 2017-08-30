let child, snake, youtube, counter
var count = 0

function createWindow (){ 
	child = new windowmanager.Window({url: "child.html", width: 500, height: 500, frame: false, title: "Window " + count})
	console.log(child)
	count += 1

}

function createYoutube(){
	// can we have an argument that's a youtube URL or search? 
	youtube = new windowmanager.Window({url: "youtube.html", width: 580, height: 600, frame: false, left: 350, top: 300})
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

function createCounter(){
	counter = new windowmanager.Window({url: "counter.html", width: 100, height: 150, frame: false, top: 500})
	console.log(counter)

	var srcs = windowmanager.Window.getAll().map(item=>{return {src: item._window.src, window: item}})
	var youtube = srcs.filter(item=>{return item.src}).filter(item=>{return item.src.includes('youtube')})[0].window
	if (youtube) {
		var neighbor = youtube.getPosition()
		counter.moveTo(neighbor.left - 100, neighbor.top+100)
		counter.dock(youtube)
		youtube.dock(counter)
	}
}




function createSnake(){
	snake = new windowmanager.Window({url: "snake.html", width: 600, height: 600, frame: false, left: 930, top: 225})
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