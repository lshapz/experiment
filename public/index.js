let child, snake, youtube, counter, report
var count = 0

function createWindow (){ 
	child = new windowmanager.Window({url: "child.html", width: 500, height: 500, frame: false, title: "Window " + count})
	console.log(child)
	count += 1

}

function createReport(){
	report = new windowmanager.Window({url: "report.html", width: 900, height: 900, frame: false, title: event.target.value})

}

function createYoutube(){
	// can we have an argument that's a youtube URL or search? 
	youtube = new windowmanager.Window({url: "youtube.html", width: 580, height: 600, frame: false, left: 350, top: 300})
	console.log(youtube)

	var srcs = windowmanager.Window.getAll().map(item=>{return {src: item._window.src, window: item}})
	var snake = srcs.filter(item=>{return item.src}).filter(item=>{return item.src.includes('snake')})[0]
	if (snake) {
		var neighbor = snake.window.getPosition()
		youtube.moveTo(neighbor.left - 600, neighbor.top+100)
		youtube.dock(snake.window)
		snake.window.dock(youtube)
	}
	windowmanager.on('message', function(msg){alert(msg)})


}

function createCounter(){
	counter = new windowmanager.Window({url: "counter.html", width: 100, height: 150, frame: false, top: 500})
	console.log(counter)

	var srcs = windowmanager.Window.getAll().map(item=>{return {src: item._window.src, window: item}})
	var youtube = srcs.filter(item=>{return item.src}).filter(item=>{return item.src.includes('youtube')})[0]
	if (youtube) {
		var neighbor = youtube.window.getPosition()
		counter.moveTo(neighbor.left - 100, neighbor.top+100)
		counter.dock(youtube.window)
		youtube.window.dock(counter)
	}

	windowmanager.messagebus.send('message', '*', "to you rudy")

}




function createSnake(){
	snake = new windowmanager.Window({url: "snake.html", width: 600, height: 600, frame: false, left: 930, top: 225})
	console.log(snake)

	var srcs = windowmanager.Window.getAll().map(item=>{return {src: item._window.src, window: item}})
	var youtube = srcs.filter(item=>{return item.src}).filter(item=>{return item.src.includes('youtube')})[0]
	if (youtube){
		var neighbor = youtube.window.getPosition()
		snake.moveTo(neighbor.left + 600, neighbor.top - 100)
		snake.dock(youtube.window)
		youtube.window.dock(snake)
	}	
}