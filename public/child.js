// import ko from 'knockout'
// TODO : make sizeBox have a knockout binding with the current height and width of the child window 

// var sizeBox = document.getElementById('sizeBox');
var self // = windowmanager.Window.getCurrent
var count = 0
function closeWindow() {
    self.close();
}  

function minimizeWindow() {
	console.log(self)
    self.minimize();
}  

function maximizeWindow() {
    if (self.isMaximized())
        self.restore();
    else
        self.maximize();
}  
// function moveLeft(e){
// 	// e.preventDefault()
// 	console.log(e)
// 	var little = windowmanager.Window.getCurrent()
// 	if (e.keyCode === 76){
// 		console.log(little.getPosition())
// 		little.moveTo(400, 300, ()=>{console.log(little.getPosition())})
// 	} 
// }
windowmanager.onReady(function(){
    self = windowmanager.Window.getCurrent();
    // self.show()
	// document.addEventListener('keydown', moveLeft)
    //Setup message listener
    // windowmanager.messagebus.on('internal-message', logMessage);
});



