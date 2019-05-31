class Entidade{
	constructor(nome, posX, posY, width, height){
		this.nome = nome;
		
		//posições
		this.posX=posX;
		this.posY=posY;
		
		//tamanho
		this.width=width;
		this.height=height;
		
		this.colisao=false;
	}
	
	//inicializar a entidade
	init(){
		
	}
	
	//progresso da entidade
	update(){
		
	}
	
	//tratando a colisao
	emColisao(other){
		
	}
	
	//renderizar no loop
	render(){
		
	}
}
