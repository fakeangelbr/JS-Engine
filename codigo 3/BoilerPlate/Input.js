class MouseInput {
	static mouseX;
	static mouseY;
	
	static keyPress;
	
	//keyboard input
	static getKeyDown(keyCode){
		return Input.keyPress==keyCode;
	}
	
	static onKeyDown(event){
		Input.keyPress = event.code;
	}
	
	static onKeyUp(){
		Input.KeyPress = '';
	}
	
	//mouse input
	static updateMousePos(evt) {
		var rect = World.canvas.getBoundingClientRect();
		var root = document.documentElement;

		MouseInput.x = evt.clientX - rect.left - root.scrollLeft;
		MouseInput.y = evt.clientY - rect.top - root.scrollTop;

	}
}