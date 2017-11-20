var posX=70, posY=200, obstX=640, obstX_2=1000, obstHeight=180,obstHeight_2=180, pontos=0, start=0;
function setup(){
	createCanvas(640, 480);
	
}

function draw(){
	background(0);
	if(keyIsDown(32)){
		start=1;
	}
	if(start==0){
		textSize(16);
		fill(255);
		text("aperte barra de espaço", 225, 240);
	}	
	
		textSize(14);
		fill(255);
		text(pontos+" pontos", 280, 90);
	
	if(start==1){
		if(obstX<posX&&obstX+48>posX&&obstHeight>=posY||obstX<=posX&&obstX+48>posX&&obstHeight+120<posY||obstX_2<posX&&obstX_2+48>posX&&obstHeight_2>=posY||obstX_2<=posX&&obstX_2+48>posX&&obstHeight_2+120<posY){
		start=0;
		obstX=640;
		obstX_2=1000;
		pontos=0;
		posy=200
	}
		obstX-=3// velocidade do obstaculo
		obstX_2-=3
		if (keyIsDown(32)&&posY>0){
		posY-=12;//pulo
	}
		else if(posY<480){
		posY+=2.5;//gravidade
	}
	
}
		ellipse(posX, posY, 25, 25);//passaro
		if(obstX<-50){
			obstX=640;//reiniciar obstaculo
			obstHeight=Math.round(Math.random()*360);
		}
		if(obstX_2<-50){
			obstX_2=640;//reiniciar obstaculo
			obstHeight_2=Math.round(Math.random()*360);
		}
		rect(obstX, 0, 48, obstHeight);//parte de cima do obstaculo
		rect(obstX, 480, 48, obstHeight-360);//parte de baixo do obstaculo
		rect(obstX_2, 0, 48, obstHeight_2);
		rect(obstX_2, 480, 48, obstHeight_2-360);
		if(posX>=obstX+120||posX>=obstX_2+120){
			pontos++;
		}
	}


