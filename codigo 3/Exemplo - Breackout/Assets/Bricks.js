class Bricks extends Entidade {
	constructor(nome, width, height, gap, column, row, grid){
		super(nome, width, height);
		
		this.width = width;
		this.height = height;
		this.gap = gap;
		this.column = column;
		this.row = row;
		this.grid = new Array(column*row);
	}	
	brickReset() {
	for(var i=0; i<this.column * this.row; i++) {
		this.grid[i] = true;
	} // end of for each brick
} // end of brickReset func

	rowColToArrayIndex(col, rows) {
	return col + this.column * rows;
}


init() {

	for(var eachRow=0;eachRow<this.row;eachRow++) {
		for(var eachCol=0;eachCol<this.column;eachCol++) {

			var arrayIndex = this.rowColToArrayIndex(eachCol, eachRow); 

			if(this.grid[arrayIndex]) {
				Utils.colorRect(this.width*eachCol,this.height*eachRow,
					this.width-this.gap,this.height-this.gap, 'blue');
					
			} // end of is this brick here
		} // end of for each brick
	} // end of for each row

} // end of function

}