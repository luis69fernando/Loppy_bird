var posX=70, posY=200, obstX=640, obstHeight=180;
function setup(){
	createCanvas(640, 480);
	
}
function draw(){
	background(0);
	obstX-=3// velocidade do obstaculo
	if (keyIsDown(32)&&posY>0)
	posY-=12;//pulo
	else if(posY<480)
	posY+=2.5;//gravidade
	ellipse(posX, posY, 25, 25);//passaro
	if(obstX<-50){
		obstX=640;//reiniciar obstaculo
		obstHeight=Math.round(Math.random()*360);
	}
	rect(obstX, 0, 48, obstHeight);//parte de cima do obstaculo
	rect(obstX, 480, 48, obstHeight-360);//parte de baixo do obstaculo
	
	
	
}
