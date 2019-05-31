class Utils {
	
	static colorRect(topLeftX,topLeftY, boxWidth,boxHeight, fillColor) {
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.fillRect(topLeftX,topLeftY, boxWidth,boxHeight);
	}

	static colorCircle(centerX,centerY, radius, fillColor) {
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.beginPath();
		World.canvasContext.arc(centerX,centerY,radius, 0,Math.PI*2, true);
		World.canvasContext.fill();
	}

	static colorText(showWords, textX,textY, fillColor) {
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.fillText(showWords, textX, textY);
	}

	static clearScreen() {
		Utils.colorRect(0,0, World.canvas.width,World.canvas.height, 'black');
	}
	
	static renderImage(){
		var image = document.createElement("img");
		image.setAttribute('src', imageSource);
		World.canvasContext.drawImage(image, posX-width/2, posY-height/2);
	} 
}
