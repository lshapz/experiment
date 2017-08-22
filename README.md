Questions That Still Need Answering as of 8/22/17

*	does this work with an Electron or Openfin container?

* 	docking

 a) why do snake and youtube dock and undock sometimes when dragging them around?
 	ANSWERED because you need need to dock both to each other (snake.dock(youtube) && youtube.dock(snake))
	
 b) why doesn't child.html dock at all? 
 	ANSWERED-ish - it will dock to one at time or both based on proximity but if you select the one to which it is not docked it will undock itself - the docking groups are not kept in sync??

*	can I create a deployment build (github pages or whatever) that works with the windowmanager.js server fetch method? 

*	complexity / bundling

 a) can I replace Snake with a more complex app? (https://github.com/lshapz/minesweeper)

 b) can I replace both with more complex apps? (https://github.com/lshapz/react-redux-mini-youtube-project-web-0916)

 c) will using these webpack/react projects break the windowmanager script fetching? 

*	message bus

 a) can I use the message bus without setting up my own websockets situation?

 b) can I use the message bus to play with moveBy and moveTo re: other windows? 

 c) can I use the message bus to create a search box in one child and a dynamically chosen by search result embedded youtube video based on the submitted search? (it would be a child of a child I guess)

*	can I incorporate Knockout as a way to dynamically display the results of Geometry calls, to make it more clear (to myself and possible users) what the Geometry subclasses do and mean?  