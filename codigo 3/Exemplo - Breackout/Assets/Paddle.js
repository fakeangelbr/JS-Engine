class Paddle extends Entidade {
	constructor(nome, posX, posY, width, height, speedY, color, isPlayable) {
        super(nome, posX, posY, width, height);

        this.speedY = speedY;
        this.color = color;
        
    }
	
	init(){
		// Get the ball in entity list on hierarchy
		this.ballEntity = Hierarchia.entityList[0];
	}
	
	update(){
		this.posX = Input.mouseX;    
        } 
	
	

}