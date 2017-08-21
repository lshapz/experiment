let child, child2
var count = 0

function createWindow (){ 
	child = new windowmanager.Window({url: "child.html", width: 500, height: 500, frame: false, title: "Window " + count})
	console.log(child)
	count += 1
	// child.onReady(()=>{
	// 	child.focus()
	// })

}

function createAnother(){

	child2 = new windowmanager.Window({url: "embed.html", width: 700, height: 700})
	console.log(child2)
/*	child.onReady(()=>{
		child.focus()
	})*/

}