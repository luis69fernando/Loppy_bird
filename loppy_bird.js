var posX=70, posY=200, obstX=640, obstX_2=1000, obstHeight=180,obstHeight_2=180, pontos=0, tela=0, recorde=0;
var jogador = [], tempo=0, frame=1, anima, imagem;
function setup(){
	createCanvas(640, 480);
	frameRate(30);
	
}
function preload(){
	for(i=1; i<=8; i++){
		jogador[i]=loadImage("figuras/jogador/frame-"+i+".png");
		imagem_1=loadImage("figuras/background/level_1.png");
		imagem_2=loadImage("figuras/background/level_2.png");
		imagem_3=loadImage("figuras/background/level_3.png");
	}
	
}



function passaro(){
	anima= jogador[frame];
	image(anima, posX, posY);
	if(tempo>15){
		frame++;
	}
	if(frame>8){
		frame=1
		tempo=0;
	}
	tempo++
}

			
			


function draw(){
    	background(0)
    	if(tela==0){
			
		textSize(50);
		fill(255);
		text("Loppy Bird", 190, 100);
		textSize(25);
		fill(255);
		text("selecione o level", 220, 180);
		rect(100, 300, 50, 50);
		rect(300, 300, 50, 50);
		rect(500, 300, 50, 50);
		textSize(50);
		fill(0);
		text("1", 111, 345);
		textSize(50);
		fill(0);
		text("2", 311, 345);
		textSize(50);
		fill(0);
		text("3", 511, 345);
		}
		if(mouseIsPressed && (mouseX>=100 && mouseX<= 150) && (mouseY>=300 && mouseY<= 350)){//fase 1
			tela=1;
		}
		if(mouseIsPressed && (mouseX>=300 && mouseX<= 350) && (mouseY>=300 && mouseY<= 350)){//fase 2
			tela=2;
		}	
		if(mouseIsPressed && (mouseX>=500 && mouseX<= 550) && (mouseY>=300 && mouseY<= 350)){//fase 3
			tela=3;
		}
	if(tela==5){
		textSize(50);
		fill(255);
		text("Game Over", 180, 280);
		if(keyIsDown(32)){
			tela=0;
		}
	}
	if(tela==1){//fase 1
		image(imagem_1, 0, 0)
		textSize(14);
		fill(255);
		text(Math.round(pontos)+" pontos", 280, 90);
		if(pontos>=24.5){
			tela=4;
			obstX=640;
			obstX_2=1000;	
			posy=200
		}
		if(obstX<posX&&obstX+48>posX&&obstHeight>=posY||obstX<=posX&&obstX+48>posX&&obstHeight+120<posY||obstX_2<posX&&obstX_2+48>posX&&obstHeight_2>=posY||obstX_2<=posX&&obstX_2+48>posX&&obstHeight_2+120<posY){
        
		tela=5;
		obstX=640;
		obstX_2=1000;
		pontos=0;
		posy=200
	}
		obstX-=5// velocidade do obstaculo
		obstX_2-=5
		if (keyIsDown(32)&&posY>0){
		posY-=12;//pulo
	}
		else if(posY<480){
		posY+=4;//gravidade
	}
	
}
		
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
			pontos+=0.4;
		}
		if(tela==2){//fase 2
		image(imagem_2, 0, 0)
		textSize(14);
		fill(255);
		text(Math.round(pontos)+" pontos", 280, 90);
		if(pontos>=24.5){
			tela=4
			obstX=640;
			obstX_2=1000;	
			posy=200
		}
		if(obstX<posX&&obstX+48>posX&&obstHeight>=posY||obstX<=posX&&obstX+48>posX&&obstHeight+120<posY||obstX_2<posX&&obstX_2+48>posX&&obstHeight_2>=posY||obstX_2<=posX&&obstX_2+48>posX&&obstHeight_2+120<posY){
        
		tela=5;
		obstX=640;
		obstX_2=1000;
		pontos=0;
		posy=200
	}
		obstX-=7.5// velocidade do obstaculo
		obstX_2-=7.5
		if (keyIsDown(32)&&posY>0){
		posY-=12;//pulo
	}
		else if(posY<480){
		posY+=4;//gravidade
	}
	
}
		
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
			pontos+=0.3;
		}
		if(tela==3){//fase 3
		image(imagem_3, 0, 0)
		textSize(14);
		fill(255);
		text(Math.round(pontos)+" pontos", 280, 90);
		if(pontos>=24.5){
			tela=4;
			obstX=640;
			obstX_2=1000;	
			posy=200
		}
		if(obstX<posX&&obstX+48>posX&&obstHeight>=posY||obstX<=posX&&obstX+48>posX&&obstHeight+120<posY||obstX_2<posX&&obstX_2+48>posX&&obstHeight_2>=posY||obstX_2<=posX&&obstX_2+48>posX&&obstHeight_2+120<posY){
        
		tela=5;
		pontos=0;
		obstX=640;
		obstX_2=1000;	
		posy=200
	}
		obstX-=10// velocidade do obstaculo
		obstX_2-=10
		if (keyIsDown(32)&&posY>0){
		posY-=12;//pulo
	}
		else if(posY<480){
		posY+=4;//gravidade
	}
	
}
		
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
			pontos+=0.3;
		}
		if(tela==4){
			 background(255);
			textSize(50);
		fill(0);
		text("Parabéns!", 190, 100);
		textSize(25);
		fill(0);
		text("Jogue o proximo level!", 190, 200);
		if(keyIsDown(32)){
			tela=0;
			pontos=0;
			}
		}
		passaro()	
	}


