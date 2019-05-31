class Score extends Entidade {
    constructor(name, posX, posY, size, color) {
        super(name, posX, posY, size, size);

        this.size = size;
        this.color = color;
        this.value = 0;
    }


  	// Called on loop to render 
    render() {
        Utils.colorText(this.value, this.posX, this.posY, this.size, 'center', this.color);
    }


    increaseScoreValue() {
        this.value= this.value + 10;
    }


    resetScore() {
        this.value = 0;
    }
}