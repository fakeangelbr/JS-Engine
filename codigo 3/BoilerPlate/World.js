class World {
	
	static canvas; 
	static canvasContext;
	
	constructor() {
		//variables for the mainLoop
		this.delta = 0;
		this.lastFrameTimeMs = 0;
		this.timeStep = 1000/60;
	}
	
	init() {
		World.canvas = document.getElementById('gameCanvas');
		World.canvasContext = World.canvas.getContext('2d');
		
		requestAnimationFrame(this.mainLoop.bind(this));

		World.canvas.addEventListener('mousemove', MouseInput.updateMousePos);
		
		//game entities
		Hierachia.createHierarchia();
		
		
		this.bricks.brickReset();
	}

	mainLoop(timeStamp) {
		if(timeStamp < this.lastFrameTimeMs + this.timeStep) {
			requestAnimationFrame(this.mainLoop.bind(this));
			return;
		}
		this.delta += timeStamp - this.lastFrameTimeMs;
		this.lastFrameTimeMs = timeStamp;
		while(this.delta >= this.timeStep) {
			this.moveEverything(this.timeStep); 
			this.delta -= this.timeStep;
		}
		this.drawEverything();
		requestAnimationFrame(this.mainLoop.bind(this));
	}
	
	moveEverything(deltaTime) {	
		// Atualizar e checar colisões de todos os objetos
        for(var i = 0; i < Hierarchia.entityList.length; i++) {
            Hierarchia.entityList[i].update();
            
            
            if(Hierarchia.entityList.length > 1) {
                for(var j = i + 1; j < Hierarchia.entityList.length; j++)
                    Collision.checkColision(Hierarchia.entityList[i], Hierarchia.entityList[j]);
			}
		}
	}

	drawEverything() {
		Utils.clearScreen();
		// Renderizar todos os objetos
        for(var i = 0; i < Hierarchia.entityList.length; i++)
            Hierarchia.entityList[i].render();
	}

	
}








