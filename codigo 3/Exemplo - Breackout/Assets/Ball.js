class Ball extends Entidade {
	constructor(nome,posX,posY,speedX,speedY,radius,color) {
		
		super(nome,posX, posY, radius * 2, radius * 2);

		this.speedX = speedX
		this.speedY = speedY;
		this.radius = radius;
		this.color = color;
	}
	
	resetPos(posX, posY) {
		this.posX = posX;
		this.posY = posY;
	}
	
	move(deltaTime) {
		this.posX += this.speedX*deltaTime;
		this.posY += this.speedY*deltaTime;
		
		if(this.posX < 0) { //left
			this.speedX *= -1;
		}
		if(this.posX > 800) { // canvas.width
			this.speedX *= -1;
		}
		if(this.posY < 0) { // top
			this.speedY *= -1;
		}
		if(this.posY > 600) { // canvas.height
			this.resetPos(400,300); //canvas width and height / 2
		}
		
		//this.paddleCollision();
	}
	
	paddleCollision(paddle) {
		//var paddleTopEdgeY = canvas.height-PADDLE_DIST_FROM_EDGE;
		var paddleTopEdgeY = 600-paddle.distFromEdge;
		var paddleBottomEdgeY = paddleTopEdgeY + paddle.thickness;
		var paddleLeftEdgeX = paddle.posX;
		var paddleRightEdgeX = paddleLeftEdgeX + paddle.width;
		if( this.posY > paddleTopEdgeY && // below the top of paddle
			this.posY < paddleBottomEdgeY && // above bottom of paddle
			this.posX > paddleLeftEdgeX && // right of the left side of paddle
			this.posX < paddleRightEdgeX) { // left of the left side of paddle
			
			this.speedY *= -1;

			var centerOfPaddleX = paddle.posX+paddle.width/2;
			var ballDistFromPaddleCenterX = this.posX - centerOfPaddleX;
			this.speedX = ballDistFromPaddleCenterX * this.originalSpeedX/(paddle.width/4);
		}
	}

	
	draw() {
		Utils.colorCircle(this.posX,this.posY,this.radius,this.color);
	}
	emColisao(other){
		if(other.name == 'Paddle' ||other.name ==  'Bricks'){
			this.speedY *= -1;
			if(other.name ==  'Bricks'){
				Hierarchy.entityList[2].increaseScoreValue();
			}
			
		}
	}
}



