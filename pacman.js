const btn=document.getElementById("btn");
const game=document.getElementById("game");
const pj=document.getElementById("pacman");
const points=document.getElementById("points");
const modal=document.getElementById("modal")


function play(){
    let i=1;
    let x=0;
    let y=0;
    let yf2=0;
    let xf2=0;
    let yf3=0;
    let xf3=0;
    let yf4=0;
    let xf4=0;
    
    const fantasma1=document.createElement("div");
    const fantasma2=document.createElement("div");
    const fantasma3=document.createElement("div");
    const fantasma4=document.createElement("div");
    fantasma1.style.top=`${-390}px`;
    fantasma1.style.left=`${-390}px`;
    {
        const ojo1=document.createElement("div");
        const ojo2=document.createElement("div");
        const pupila1=document.createElement("div");
        const pupila2=document.createElement("div");
        pupila1.style.backgroundColor="black";
        pupila2.style.backgroundColor="black";
        pupila2.style.width="4px";
        pupila1.style.width="4px";
        pupila2.style.height="4px";
        pupila1.style.height="4px";
        pupila2.style.borderRadius="50px";
        pupila1.style.borderRadius="50px";
        ojo1.classList.add("ojo");
        ojo2.classList.add("ojo");
        ojo1.classList.add("derecho");
        ojo2.classList.add("izquierdo");
        ojo1.appendChild(pupila1);
        ojo2.appendChild(pupila2);
        fantasma1.appendChild(ojo1);
        fantasma1.appendChild(ojo2);

        const ojo3=document.createElement("div");
        const ojo4=document.createElement("div");
        const pupila3=document.createElement("div");
        const pupila4=document.createElement("div");
        pupila3.style.backgroundColor="black";
        pupila4.style.backgroundColor="black";
        pupila4.style.width="4px";
        pupila3.style.width="4px";
        pupila4.style.height="4px";
        pupila3.style.height="4px";
        pupila4.style.borderRadius="50px";
        pupila3.style.borderRadius="50px";
        ojo3.classList.add("ojo");
        ojo4.classList.add("ojo");
        ojo3.classList.add("derecho");
        ojo4.classList.add("izquierdo");
        ojo3.appendChild(pupila3);
        ojo4.appendChild(pupila4);
        fantasma2.appendChild(ojo3);
        fantasma2.appendChild(ojo4);

        const ojo5=document.createElement("div");
        const ojo6=document.createElement("div");
        const pupila5=document.createElement("div");
        const pupila6=document.createElement("div");
        pupila5.style.backgroundColor="black";
        pupila6.style.backgroundColor="black";
        pupila6.style.width="4px";
        pupila5.style.width="4px";
        pupila6.style.height="4px";
        pupila5.style.height="4px";
        pupila6.style.borderRadius="50px";
        pupila5.style.borderRadius="50px";
        ojo5.classList.add("ojo");
        ojo6.classList.add("ojo");
        ojo5.classList.add("derecho");
        ojo6.classList.add("izquierdo");
        ojo5.appendChild(pupila5);
        ojo6.appendChild(pupila6);
        fantasma3.appendChild(ojo5);
        fantasma3.appendChild(ojo6);

        const ojo7=document.createElement("div");
        const ojo8=document.createElement("div");
        const pupila7=document.createElement("div");
        const pupila8=document.createElement("div");
        pupila7.style.backgroundColor="black";
        pupila8.style.backgroundColor="black";
        pupila8.style.width="4px";
        pupila7.style.width="4px";
        pupila8.style.height="4px";
        pupila7.style.height="4px";
        pupila8.style.borderRadius="50px";
        pupila7.style.borderRadius="50px";
        ojo7.classList.add("ojo");
        ojo8.classList.add("ojo");
        ojo7.classList.add("derecho");
        ojo8.classList.add("izquierdo");
        ojo7.appendChild(pupila7);
        ojo8.appendChild(pupila8);
        fantasma4.appendChild(ojo7);
        fantasma4.appendChild(ojo8);
        fantasma1.classList.add("fantasma");
        fantasma1.style.backgroundColor="red";
        fantasma2.classList.add("fantasma");
        fantasma2.style.backgroundColor="rgb(0, 242, 255)";
        fantasma3.classList.add("fantasma");
        fantasma3.style.backgroundColor="rgb(255, 149, 221)";
        fantasma4.classList.add("fantasma");
        fantasma4.style.backgroundColor="rgb(0, 255, 68)";
    }//ESTILOS DE FANTASMAS//

    pj.classList.add("pj");
    posiciones=[];

    while(i<144){
        if(i==6||i==18||i==30){
            pixel.style.borderRight="4px solid rgba(0, 5, 137, 0.052)"
        }
        if(i==7||i==19||i==31){
            pixel.style.borderLeft="4px solid rgba(0, 5, 137, 0.052)"
        }
        if(i==138||i==126){
            pixel.style.borderRight="4px solid rgba(0, 5, 137, 0.052)"
        }
        if(i==139||i==127){
            pixel.style.borderLeft="4px solid rgba(0, 5, 137, 0.052)"
        }
        pixel=document.createElement("div");
        pixel.classList.add("pixel");
        game.appendChild(pixel);
        if(i==0){
            pixel.appendChild(pj)
        }
        if(i==63||i==68||i==120||i==108||i==119||i==131||i==43||i==44||i==45||i==40||i==38||i==39||i==80||i==75||i==129||i==127||i==128||i==101||i==102||i==104||i==116||i==124||i==122||i==123||i==99||i==111||i==85||i==84||i==95||i==94||i==71||i==70||i==61||i==60||i==16||i==19||i==21||i==22||i==13||i==14||i==144/2-6||i==144/2-7 ||i==144/2+5||i==144/2+6){
            if (i==144/2-6||i==144/2-7 ||i==144/2+5||i==144/2+6) {
                pixel.appendChild(fantasma1);
                pixel.classList.add(`d${i+1}`);
                if(i==144/2-6){
                    pixel.style.borderRight="3px solid rgba(0, 5, 137, 0.072)"
                    pixel.style.borderTop="3px solid rgba(0, 5, 137, 0.072)"
                }else if(i==144/2-7){
                    pixel.style.borderLeft="3px solid rgba(0, 5, 137, 0.072)"
                    pixel.style.borderTop="3px solid rgba(0, 5, 137, 0.072)"
                }else if(i==144/2+5){
                    pixel.style.borderLeft="3px solid rgba(0, 5, 137, 0.072)"
                    pixel.style.borderBottom="3px solid rgba(0, 5, 137, 0.072)"
                }else if(i==144/2+6){
                    pixel.style.borderRight="3px solid rgba(0, 5, 137, 0.072)"
                    pixel.style.borderBottom="3px solid rgba(0, 5, 137, 0.072)"
                }
            }
            else{
                pixel.classList.add("centro");
            }
        }else if(i==140||i==135||i==87||i==92) {
            comidaPlus=document.createElement("div");
            comidaPlus.classList.add("comidaPlus");
            comidaPlus.classList.add(`p${i+1}`);
            pixel.appendChild(comidaPlus);
            posiciones.push(i+1);
        }else{
            comida=document.createElement("div");
            comida.classList.add("comida");
            comida.classList.add(`p${i+1}`);
            pixel.appendChild(comida);
            posiciones.push(i+1);
        }
        i++;
    }//GENERA EL MAPA Y ASIGNA LAS VARIABLES A LOS PIXELES//
    




    function movR(){
        pj.style.transform="rotate(0deg)";
        if(x<715 && Number.isInteger(y)){
            if((x>=715)||(x==650 && y<=650&&y>=585)||(x==325 && y<=715&&y>=650)||(x==260 && y==520)||(x==390 && y==650)||(x==65 && y==650)||(x==455 && y<=585&&y>=520)||(x==130 && y<=585&&y>=520)||(x==585 && y==455)||(x==585 && y==325)||(x==455 && y<=390&&y>=325)||(x==260 && y<=390&&y>=325)||(x==130 && y<=390&&y>=325)||(x==325 && y<=130)||(y==195&&x==65)||(x==195 && y==65)||(x==0 && y==65)||(x==390 && y==195)||(x==390 &&y==65)||(x==520&&y==65)){
    
            }else{
                x+=2.03125;
            }
        }
        pj.style.left=`${x}px`
    }
    function movL(){
        pj.style.transform="rotate(-180deg)";
        if(x>=0 && Number.isInteger(y)){
            if((x<=0)||(x==390 && y<=715&&y>=650)||(x==585 && y<=585&&y>=520)||(x==455 && y==520)||(x==585 && y<=585&&y>=520)||(x==260 && y<=585&&y>=520)||(x==65 && y<=650&&y>=585)||(x==585 && y<=390&&y>=325)||(x==455 && y<=390&&y>=325)||(x==260 && y<=390&&y>=325)||(x==390 && y<=130&&y>=0)||(x==325&&y==650)||(x==130&&y==455)||(x==130&&y==325)||(x==650&&y==195)||(x==715&&y==65)||(x==520&&y==65)||(x==325&&y==195)||(x==325&&y==65)||(x==650&&y==650)||(x==195&&y==65)){
    
            }else{
                x-=2.03125;
            }
        }   
        
        pj.style.left=`${x}px`
        
    }
    function movU(){
        pj.style.transform="rotate(-90deg)";
        if(y<=715 && Number.isInteger(x)){
            if((y<=0)||(y==130&&x>=585&&x<=650)||(y==715&&x>=455&&x<=585)||(y==715&&x>=130&&x<=260)||(y==585&&x>=325&&x<=390)||(y==455&&x>=325&&x<=390)||(y==520&&x>=0&&x<=65)||(y==390&&x>=0&&x<=65)||(y==520&&x>=650&&x<=715)||(y==390&&x>=650&&x<=715)||(y==260&&x>=455&&x<=585)||(y==260&&x>=130&&x<=260)||(y==130&&x>=65&&x<=130)||(y==715&&x==0)||(y==715&&x==715)||(y==455&&x==520)||(y==455&&x==195)||(y==130&&x==455)||(y==130&&x==260)||(y==715&&x==0)){
    
            }else{
                y-=2.03125;
            }
        }
        pj.style.top=`${y}px`
    }
    function movD(){
        pj.style.transform="rotate(90deg)";
        if(y>=0 && Number.isInteger(x)){
            if((y>=715)||(y==520&&x==715)||(y==585&&x==585)||(y==585&&x==455)||(y==585&&x==260)||(y==585&&x==130)||(y==520&&x==715)||(y==520&&x==0)||(y==455&&x==195)||(y==455&&x==520)||(y==260&&x==520)||(y==260&&x==195)||(y==0&&x==455)||(y==0&&x==260)||(y==455&&x>=325&&x<=390)||(y==390&&x>=0&&x<=65)||(y==390&&x>=650&&x<=715)||(y==260&&x>=650&&x<=715)||(y==260&&x>=0&&x<=65)||(y==260&&x>=325&&x<=390)||(y==0&&x>=585&&x<=650)||(y==130&&x>=455&&x<=585)||(y==0&&x>=65&&x<=130)||(y==130&&x>=130&&x<=260)){
    
            }else{
                y+=2.03125;
            }
        }
        pj.style.top=`${y}px`
    }//FUNCIONES DE MOVIMIENTOS//
    






    movimiento="r";
    c=0;
    document.addEventListener('keydown', function(event) {
            switch(event.key) {
              case 'ArrowUp':
                if(c==0){
                    c=1;
                    intervalo=setInterval(()=>{
                        if(Number.isInteger(x)){
                            movimiento="u";
                            clearInterval(intervalo);
                            c=0;
                        }
                    },1)
                }
                break;
    
              case 'ArrowDown':
                if(c==0){
                    c=1;
                    intervalo=setInterval(()=>{
                        if(Number.isInteger(x)){
                            movimiento="d";
                            clearInterval(intervalo);
                            c=0;
                        }
                    },1)
                }
                break;
    
              case 'ArrowLeft':
                if(c==0){
                    c=1;
                    intervalo=setInterval(()=>{
                        if(Number.isInteger(y)){
                            movimiento="l";
                            clearInterval(intervalo);
                            c=0;
                        }
                    },1)
                }
                
                break;
    
              case 'ArrowRight':
                if(c==0){
                    c=1;
                    intervalo=setInterval(()=>{
                        if(Number.isInteger(y)){
                            movimiento="r";
                            clearInterval(intervalo);
                            c=0;
                        }
                    },1)
                }
                break;
    
              default:
                return;
            }
            event.preventDefault();
    });//MANEJADOR DE TECLADO//
    
    fantasma1Mov="u";
    fantasma2Mov="u";
    fantasma3Mov="u";
    fantasma4Mov="u";

    y1=390;
    x1=390;
    y2=390;
    x2=325;
    y3=325;
    x3=325;
    y4=325;
    x4=390;
    

    


    numeros=[0,65,130,195,260,325,390,455,520,585,650,715];
    puntos=0;
    elementoAEliminar=0;
    fantasma11=0;
    fantasma22=0;
    fantasma33=0;
    let juego= setInterval(()=>{ 

        {
            bl=((x1<=0)||(x1==390 && y1<=715&&y1>=650)||(x1==585 && y1<=585&&y1>=520)||(x1==455 && y1==520)||(x1==585 && y1<=585&&y1>=520)||(x1==260 && y1<=585&&y1>=520)||(x1==65 && y1<=650&&y1>=585)||(x1==585 && y1<=390&&y1>=325)||(x1==455 && y1<=390&&y1>=325)||(x1==260 && y1<=390&&y1>=325)||(x1==390 && y1<=130&&y1>=0)||(x1==325&&y1==650)||(x1==130&&y1==455)||(x1==130&&y1==325)||(x1==650&&y1==195)||(x1==715&&y1==65)||(x1==520&&y1==65)||(x1==325&&y1==195)||(x1==325&&y1==65)||(x1==650&&y1==650)||(x1==195&&y1==65));
            bu=((y1<=0)||(y1==130&&x1>=585&&x1<=650)||(y1==715&&x1>=455&&x1<=585)||(y1==715&&x1>=130&&x1<=260)||(y1==585&&x1>=325&&x1<=390)||(y1==455&&x1>=325&&x1<=390)||(y1==520&&x1>=0&&x1<=65)||(y1==390&&x1>=0&&x1<=65)||(y1==520&&x1>=650&&x1<=715)||(y1==390&&x1>=650&&x1<=715)||(y1==260&&x1>=455&&x1<=585)||(y1==260&&x1>=130&&x1<=260)||(y1==130&&x1>=65&&x1<=130)||(y1==715&&x1==0)||(y1==715&&x1==715)||(y1==455&&x1==520)||(y1==455&&x1==195)||(y1==130&&x1==455)||(y1==130&&x1==260)||(y1==715&&x1==0));
            bd=((y1>=715)||(y1==520&&x1==715)||(y1==585&&x1==585)||(y1==585&&x1==455)||(y1==585&&x1==260)||(y1==585&&x1==130)||(y1==520&&x1==715)||(y1==520&&x1==0)||(y1==455&&x1==195)||(y1==455&&x1==520)||(y1==260&&x1==520)||(y1==260&&x1==195)||(y1==0&&x1==455)||(y1==0&&x1==260)||(y1==455&&x1>=325&&x1<=390)||(y1==390&&x1>=0&&x1<=65)||(y1==390&&x1>=650&&x1<=715)||(y1==260&&x1>=650&&x1<=715)||(y1==260&&x1>=0&&x1<=65)||(y1==260&&x1>=325&&x1<=390)||(y1==0&&x1>=585&&x1<=650)||(y1==130&&x1>=455&&x1<=585)||(y1==0&&x1>=65&&x1<=130)||(y1==130&&x1>=130&&x1<=260));
            br=((x1>=715)||(x1==650 && y1<=650&&y1>=585)||(x1==325 && y1<=715&&y1>=650)||(x1==260 && y1==520)||(x1==390 && y1==650)||(x1==65 && y1==650)||(x1==455 && y1<=585&&y1>=520)||(x1==130 && y1<=585&&y1>=520)||(x1==585 && y1==455)||(x1==585 && y1==325)||(x1==455 && y1<=390&&y1>=325)||(x1==260 && y1<=390&&y1>=325)||(x1==130 && y1<=390&&y1>=325)||(x1==325 && y1<=130)||(y1==195&&x1==65)||(x1==195 && y1==65)||(x1==0 && y1==65)||(x1==390 && y1==195)||(x1==390 &&y1==65)||(x1==520&&y1==65));
        
        
        numeroR=Math.floor(Math.random() * 3);

        if(Number.isInteger(x1)&&Number.isInteger(y1)){
            if(fantasma1Mov=="u"){

                if(bu){
                    if(bl){
                        if(br){
                            fantasma1Mov="d";
                        }else{
                            fantasma1Mov="r";
                        }
                    }else if(br){
                        fantasma1Mov="l";
                    }else{
                        if(numeroR==0){
                            fantasma1Mov="r";
                        }else if(numeroR==1){
                            fantasma1Mov="l";
                        }else{
                            fantasma1Mov="l";
                        }
                    }
                }else{
                    if(bl){
                        if(br){
                            fantasma1Mov="u";
                        }else{
                            if(numeroR==0){
                                fantasma1Mov="u";
                            }else if(numeroR==1){
                                fantasma1Mov="r";
                            }else{
                                fantasma1Mov="r";
                            }
                        }
                    }else if(br){
                        if(numeroR==0){
                            fantasma1Mov="l";
                        }else if(numeroR==1){
                            fantasma1Mov="u";
                        }else{
                            fantasma1Mov="u";
                        }
                    }else{
                        if(numeroR==0){
                            fantasma1Mov="l";
                        }else if(numeroR==1){
                            fantasma1Mov="r";
                        }else{
                            fantasma1Mov="u";
                        }
                    }
                }


            }else if(fantasma1Mov=="d"){
                if(bd){
                    if(bl){
                        if(br){
                            fantasma1Mov="u";
                        }else{
                            fantasma1Mov="r";
                        }
                    }else if(br){
                        fantasma1Mov="l";
                    }else{
                        if(numeroR==0){
                            fantasma1Mov="r";
                        }else if(numeroR==1){
                            fantasma1Mov="l";
                        }else{
                            fantasma1Mov="l";
                        }
                    }
                }else{
                    if(bl){
                        if(br){
                            fantasma1Mov="d";
                        }else{
                            if(numeroR==0){
                                fantasma1Mov="d";
                            }else if(numeroR==1){
                                fantasma1Mov="r";
                            }else{
                                fantasma1Mov="r";
                            }
                        }
                    }else if(br){
                        if(numeroR==0){
                            fantasma1Mov="l";
                        }else if(numeroR==1){
                            fantasma1Mov="d";
                        }else{
                            fantasma1Mov="d";
                        }
                    }else{
                        if(numeroR==0){
                            fantasma1Mov="l";
                        }else if(numeroR==1){
                            fantasma1Mov="r";
                        }else{
                            fantasma1Mov="d";
                        }
                    }
                }
         
            }else if(fantasma1Mov=="l"){

                if(bl){
                    console.log(1)
                    if(bu){
                        if(bd){
                            fantasma1Mov="r";
                        }else{
                            fantasma1Mov="d";
                        }
                    }else if(bd){
                        fantasma1Mov="u";
                    }else{
                        if(numeroR==0){
                            fantasma1Mov="d";
                        }else if(numeroR==1){
                            fantasma1Mov="d";
                        }else{
                            fantasma1Mov="u";
                        }
                    }
                }else{
                    if(bu){
                        if(bd){
                            fantasma1Mov="l";
                        }else{
                            if(numeroR==0){
                                fantasma1Mov="l";
                            }else if(numeroR==1){
                                fantasma1Mov="d";
                            }else{
                                fantasma1Mov="l";
                            }
                        }
                    }else if(bd){
                        if(numeroR==0){
                            fantasma1Mov="l";
                        }else if(numeroR==1){
                            fantasma1Mov="u";
                        }else{
                            fantasma1Mov="l";
                        }
                    }else{
                        if(numeroR==0){
                            fantasma1Mov="u";
                        }else if(numeroR==1){
                            fantasma1Mov="d";
                        }else{
                            fantasma1Mov="u";
                        }
                    }
                }

            }else if(fantasma1Mov=="r"){
                if(br){
                    if(bu){
                        if(bd){
                            fantasma1Mov="l";
                        }else{
                            fantasma1Mov="d";
                        }
                    }else if(bd){
                        fantasma1Mov="u";
                    }else{
                        if(numeroR==0){
                            fantasma1Mov="d";
                        }else if(numeroR==1){
                            fantasma1Mov="d";
                        }else{
                            fantasma1Mov="u";
                        }
                    }
                }else{
                    if(bu){
                        if(bd){
                            fantasma1Mov="r";
                        }else{
                            if(numeroR==0){
                                fantasma1Mov="r";
                            }else if(numeroR==1){
                                fantasma1Mov="d";
                            }else{
                                fantasma1Mov="r";
                            }
                        }
                    }else if(bd){
                        if(numeroR==0){
                            fantasma1Mov="r";
                        }else if(numeroR==1){
                            fantasma1Mov="u";
                        }else{
                            fantasma1Mov="r";
                        }
                    }else{
                        if(numeroR==0){
                            fantasma1Mov="l";
                        }else if(numeroR==1){
                            fantasma1Mov="d";
                        }else{
                            fantasma1Mov="u";
                        }
                    }
                }
            }
        }

        switch (fantasma1Mov) {
            case "u":
                y1-=2.03125;
                break;
            case "d":
                y1+=2.03125;
                break;
            case "l":
                x1-=2.03125;
                break;
            case "r":
                x1+=2.03125;
                break;
            default:
                break;
        }
        fantasma1.style.left=`${x1-390}px`;
        fantasma1.style.top=`${y1-390}px`;
        }//FANTASMA 1//
        
        if(puntos==25){
            document.querySelector(".d78").appendChild(fantasma2);
            fantasma11=1;
        }else if(puntos==50){
            document.querySelector(".d66").appendChild(fantasma3);
            fantasma22=1;
        }else if(puntos==75){
            document.querySelector(".d67").appendChild(fantasma4);
            fantasma33=1;
        }

        if(fantasma11==1){
            bl2=((x2<=0)||(x2==390 && y2<=715&&y2>=650)||(x2==585 && y2<=585&&y2>=520)||(x2==455 && y2==520)||(x2==585 && y2<=585&&y2>=520)||(x2==260 && y2<=585&&y2>=520)||(x2==65 && y2<=650&&y2>=585)||(x2==585 && y2<=390&&y2>=325)||(x2==455 && y2<=390&&y2>=325)||(x2==260 && y2<=390&&y2>=325)||(x2==390 && y2<=130&&y2>=0)||(x2==325&&y2==650)||(x2==130&&y2==455)||(x2==130&&y2==325)||(x2==650&&y2==195)||(x2==715&&y2==65)||(x2==520&&y2==65)||(x2==325&&y2==195)||(x2==325&&y2==65)||(x2==650&&y2==650)||(x2==195&&y2==65));
            bu2=((y2<=0)||(y2==130&&x2>=585&&x2<=650)||(y2==715&&x2>=455&&x2<=585)||(y2==715&&x2>=130&&x2<=260)||(y2==585&&x2>=325&&x2<=390)||(y2==455&&x2>=325&&x2<=390)||(y2==520&&x2>=0&&x2<=65)||(y2==390&&x2>=0&&x2<=65)||(y2==520&&x2>=650&&x2<=715)||(y2==390&&x2>=650&&x2<=715)||(y2==260&&x2>=455&&x2<=585)||(y2==260&&x2>=130&&x2<=260)||(y2==130&&x2>=65&&x2<=130)||(y2==715&&x2==0)||(y2==715&&x2==715)||(y2==455&&x2==520)||(y2==455&&x2==195)||(y2==130&&x2==455)||(y2==130&&x2==260)||(y2==715&&x2==0));
            bd2=((y2>=715)||(y2==520&&x2==715)||(y2==585&&x2==585)||(y2==585&&x2==455)||(y2==585&&x2==260)||(y2==585&&x2==130)||(y2==520&&x2==715)||(y2==520&&x2==0)||(y2==455&&x2==195)||(y2==455&&x2==520)||(y2==260&&x2==520)||(y2==260&&x2==195)||(y2==0&&x2==455)||(y2==0&&x2==260)||(y2==455&&x2>=325&&x2<=390)||(y2==390&&x2>=0&&x2<=65)||(y2==390&&x2>=650&&x2<=715)||(y2==260&&x2>=650&&x2<=715)||(y2==260&&x2>=0&&x2<=65)||(y2==260&&x2>=325&&x2<=390)||(y2==0&&x2>=585&&x2<=650)||(y2==130&&x2>=455&&x2<=585)||(y2==0&&x2>=65&&x2<=130)||(y2==130&&x2>=130&&x2<=260));
            br2=((x2>=715)||(x2==650 && y2<=650&&y2>=585)||(x2==325 && y2<=715&&y2>=650)||(x2==260 && y2==520)||(x2==390 && y2==650)||(x2==65 && y2==650)||(x2==455 && y2<=585&&y2>=520)||(x2==130 && y2<=585&&y2>=520)||(x2==585 && y2==455)||(x2==585 && y2==325)||(x2==455 && y2<=390&&y2>=325)||(x2==260 && y2<=390&&y2>=325)||(x2==130 && y2<=390&&y2>=325)||(x2==325 && y2<=130)||(y2==195&&x2==65)||(x2==195 && y2==65)||(x2==0 && y2==65)||(x2==390 && y2==195)||(x2==390 &&y2==65)||(x2==520&&y2==65));
        
    
            numeroR2=Math.floor(Math.random() * 3);
    
            if(Number.isInteger(x2)&&Number.isInteger(y2)){
                if(fantasma2Mov=="u"){
    
                    if(bu2){
                        if(bl2){
                            if(br2){
                                fantasma2Mov="d";
                            }else{
                                fantasma2Mov="r";
                            }
                        }else if(br2){
                            fantasma2Mov="l";
                        }else{
                            if(numeroR2==0){
                                fantasma2Mov="r";
                            }else if(numeroR2==1){
                                fantasma2Mov="l";
                            }else{
                                fantasma2Mov="l";
                            }
                        }
                    }else{
                        if(bl2){
                            if(br2){
                                fantasma2Mov="u";
                            }else{
                                if(numeroR2==0){
                                    fantasma2Mov="u";
                                }else if(numeroR2==1){
                                    fantasma2Mov="r";
                                }else{
                                    fantasma2Mov="r";
                                }
                            }
                        }else if(br2){
                            if(numeroR2==0){
                                fantasma2Mov="l";
                            }else if(numeroR2==1){
                                fantasma2Mov="u";
                            }else{
                                fantasma2Mov="u";
                            }
                        }else{
                            if(numeroR2==0){
                                fantasma2Mov="l";
                            }else if(numeroR2==1){
                                fantasma2Mov="r";
                            }else{
                                fantasma2Mov="u";
                            }
                        }
                    }
    
    
                }else if(fantasma2Mov=="d"){
                    if(bd2){
                        if(bl2){
                            if(br2){
                                fantasma2Mov="u";
                            }else{
                                fantasma2Mov="r";
                            }
                        }else if(br2){
                            fantasma2Mov="l";
                        }else{
                            if(numeroR2==0){
                                fantasma2Mov="r";
                            }else if(numeroR2==1){
                                fantasma2Mov="l";
                            }else{
                                fantasma2Mov="l";
                            }
                        }
                    }else{
                        if(bl2){
                            if(br2){
                                fantasma2Mov="d";
                            }else{
                                if(numeroR2==0){
                                    fantasma2Mov="d";
                                }else if(numeroR2==1){
                                    fantasma2Mov="r";
                                }else{
                                    fantasma2Mov="r";
                                }
                            }
                        }else if(br2){
                            if(numeroR2==0){
                                fantasma2Mov="l";
                            }else if(numeroR2==1){
                                fantasma2Mov="d";
                            }else{
                                fantasma2Mov="d";
                            }
                        }else{
                            if(numeroR2==0){
                                fantasma2Mov="l";
                            }else if(numeroR2==1){
                                fantasma2Mov="r";
                            }else{
                                fantasma2Mov="d";
                            }
                        }
                    }
             
                }else if(fantasma2Mov=="l"){
    
                    if(bl2){
                        console.log(1)
                        if(bu2){
                            if(bd2){
                                fantasma2Mov="r";
                            }else{
                                fantasma2Mov="d";
                            }
                        }else if(bd2){
                            fantasma2Mov="u";
                        }else{
                            if(numeroR2==0){
                                fantasma2Mov="d";
                            }else if(numeroR2==1){
                                fantasma2Mov="d";
                            }else{
                                fantasma2Mov="u";
                            }
                        }
                    }else{
                        if(bu2){
                            if(bd2){
                                fantasma2Mov="l";
                            }else{
                                if(numeroR2==0){
                                    fantasma2Mov="l";
                                }else if(numeroR2==1){
                                    fantasma2Mov="d";
                                }else{
                                    fantasma2Mov="l";
                                }
                            }
                        }else if(bd2){
                            if(numeroR2==0){
                                fantasma2Mov="l";
                            }else if(numeroR2==1){
                                fantasma2Mov="u";
                            }else{
                                fantasma2Mov="l";
                            }
                        }else{
                            if(numeroR2==0){
                                fantasma2Mov="u";
                            }else if(numeroR2==1){
                                fantasma2Mov="d";
                            }else{
                                fantasma2Mov="u";
                            }
                        }
                    }
    
                }else if(fantasma2Mov=="r"){
                    if(br2){
                        if(bu2){
                            if(bd2){
                                fantasma2Mov="l";
                            }else{
                                fantasma2Mov="d";
                            }
                        }else if(bd2){
                            fantasma2Mov="u";
                        }else{
                            if(numeroR2==0){
                                fantasma2Mov="d";
                            }else if(numeroR2==1){
                                fantasma2Mov="d";
                            }else{
                                fantasma2Mov="u";
                            }
                        }
                    }else{
                        if(bu2){
                            if(bd2){
                                fantasma2Mov="r";
                            }else{
                                if(numeroR2==0){
                                    fantasma2Mov="r";
                                }else if(numeroR2==1){
                                    fantasma2Mov="d";
                                }else{
                                    fantasma2Mov="r";
                                }
                            }
                        }else if(bd2){
                            if(numeroR2==0){
                                fantasma2Mov="r";
                            }else if(numeroR2==1){
                                fantasma2Mov="u";
                            }else{
                                fantasma2Mov="r";
                            }
                        }else{
                            if(numeroR2==0){
                                fantasma2Mov="l";
                            }else if(numeroR2==1){
                                fantasma2Mov="d";
                            }else{
                                fantasma2Mov="u";
                            }
                        }
                    }
                }
            }
    
            switch (fantasma2Mov) {
                case "u":
                    y2-=2.03125;
                    break;
                case "d":
                    y2+=2.03125;
                    break;
                case "l":
                    x2-=2.03125;
                    break;
                case "r":
                    x2+=2.03125;
                    break;
                default:
                    break;
            }
            fantasma2.style.left=`${x2-325}px`;
            fantasma2.style.top=`${y2-390}px`;
        }//FANTASMA 2//
        if(fantasma22==1){
            bl3=((x3<=0)||(x3==390 && y3<=715&&y3>=650)||(x3==585 && y3<=585&&y3>=520)||(x3==455 && y3==520)||(x3==585 && y3<=585&&y3>=520)||(x3==260 && y3<=585&&y3>=520)||(x3==65 && y3<=650&&y3>=585)||(x3==585 && y3<=390&&y3>=325)||(x3==455 && y3<=390&&y3>=325)||(x3==260 && y3<=390&&y3>=325)||(x3==390 && y3<=130&&y3>=0)||(x3==325&&y3==650)||(x3==130&&y3==455)||(x3==130&&y3==325)||(x3==650&&y3==195)||(x3==715&&y3==65)||(x3==520&&y3==65)||(x3==325&&y3==195)||(x3==325&&y3==65)||(x3==650&&y3==650)||(x3==195&&y3==65));
            bu3=((y3<=0)||(y3==130&&x3>=585&&x3<=650)||(y3==715&&x3>=455&&x3<=585)||(y3==715&&x3>=130&&x3<=260)||(y3==585&&x3>=325&&x3<=390)||(y3==455&&x3>=325&&x3<=390)||(y3==520&&x3>=0&&x3<=65)||(y3==390&&x3>=0&&x3<=65)||(y3==520&&x3>=650&&x3<=715)||(y3==390&&x3>=650&&x3<=715)||(y3==260&&x3>=455&&x3<=585)||(y3==260&&x3>=130&&x3<=260)||(y3==130&&x3>=65&&x3<=130)||(y3==715&&x3==0)||(y3==715&&x3==715)||(y3==455&&x3==520)||(y3==455&&x3==195)||(y3==130&&x3==455)||(y3==130&&x3==260)||(y3==715&&x3==0));
            bd3=((y3>=715)||(y3==520&&x3==715)||(y3==585&&x3==585)||(y3==585&&x3==455)||(y3==585&&x3==260)||(y3==585&&x3==130)||(y3==520&&x3==715)||(y3==520&&x3==0)||(y3==455&&x3==195)||(y3==455&&x3==520)||(y3==260&&x3==520)||(y3==260&&x3==195)||(y3==0&&x3==455)||(y3==0&&x3==260)||(y3==455&&x3>=325&&x3<=390)||(y3==390&&x3>=0&&x3<=65)||(y3==390&&x3>=650&&x3<=715)||(y3==260&&x3>=650&&x3<=715)||(y3==260&&x3>=0&&x3<=65)||(y3==260&&x3>=325&&x3<=390)||(y3==0&&x3>=585&&x3<=650)||(y3==130&&x3>=455&&x3<=585)||(y3==0&&x3>=65&&x3<=130)||(y3==130&&x3>=130&&x3<=260));
            br3=((x3>=715)||(x3==650 && y3<=650&&y3>=585)||(x3==325 && y3<=715&&y3>=650)||(x3==260 && y3==520)||(x3==390 && y3==650)||(x3==65 && y3==650)||(x3==455 && y3<=585&&y3>=520)||(x3==130 && y3<=585&&y3>=520)||(x3==585 && y3==455)||(x3==585 && y3==325)||(x3==455 && y3<=390&&y3>=325)||(x3==260 && y3<=390&&y3>=325)||(x3==130 && y3<=390&&y3>=325)||(x3==325 && y3<=130)||(y3==195&&x3==65)||(x3==195 && y3==65)||(x3==0 && y3==65)||(x3==390 && y3==195)||(x3==390 &&y3==65)||(x3==520&&y3==65));
        
    
            numeroR3=Math.floor(Math.random() * 3);
    
            if(Number.isInteger(x3)&&Number.isInteger(y3)){
                if(fantasma3Mov=="u"){
    
                    if(bu3){
                        if(bl3){
                            if(br3){
                                fantasma3Mov="d";
                            }else{
                                fantasma3Mov="r";
                            }
                        }else if(br3){
                            fantasma3Mov="l";
                        }else{
                            if(numeroR3==0){
                                fantasma3Mov="r";
                            }else if(numeroR3==1){
                                fantasma3Mov="l";
                            }else{
                                fantasma3Mov="l";
                            }
                        }
                    }else{
                        if(bl3){
                            if(br3){
                                fantasma3Mov="u";
                            }else{
                                if(numeroR3==0){
                                    fantasma3Mov="u";
                                }else if(numeroR3==1){
                                    fantasma3Mov="r";
                                }else{
                                    fantasma3Mov="r";
                                }
                            }
                        }else if(br3){
                            if(numeroR3==0){
                                fantasma3Mov="l";
                            }else if(numeroR3==1){
                                fantasma3Mov="u";
                            }else{
                                fantasma3Mov="u";
                            }
                        }else{
                            if(numeroR3==0){
                                fantasma3Mov="l";
                            }else if(numeroR3==1){
                                fantasma3Mov="r";
                            }else{
                                fantasma3Mov="u";
                            }
                        }
                    }
    
    
                }else if(fantasma3Mov=="d"){
                    if(bd3){
                        if(bl3){
                            if(br3){
                                fantasma3Mov="u";
                            }else{
                                fantasma3Mov="r";
                            }
                        }else if(br3){
                            fantasma3Mov="l";
                        }else{
                            if(numeroR3==0){
                                fantasma3Mov="r";
                            }else if(numeroR3==1){
                                fantasma3Mov="l";
                            }else{
                                fantasma3Mov="l";
                            }
                        }
                    }else{
                        if(bl3){
                            if(br3){
                                fantasma3Mov="d";
                            }else{
                                if(numeroR3==0){
                                    fantasma3Mov="d";
                                }else if(numeroR3==1){
                                    fantasma3Mov="r";
                                }else{
                                    fantasma3Mov="r";
                                }
                            }
                        }else if(br3){
                            if(numeroR3==0){
                                fantasma3Mov="l";
                            }else if(numeroR3==1){
                                fantasma3Mov="d";
                            }else{
                                fantasma3Mov="d";
                            }
                        }else{
                            if(numeroR3==0){
                                fantasma3Mov="l";
                            }else if(numeroR3==1){
                                fantasma3Mov="r";
                            }else{
                                fantasma3Mov="d";
                            }
                        }
                    }
             
                }else if(fantasma3Mov=="l"){
    
                    if(bl3){

                        if(bu3){
                            if(bd3){
                                fantasma3Mov="r";
                            }else{
                                fantasma3Mov="d";
                            }
                        }else if(bd3){
                            fantasma3Mov="u";
                        }else{
                            if(numeroR3==0){
                                fantasma3Mov="d";
                            }else if(numeroR3==1){
                                fantasma3Mov="d";
                            }else{
                                fantasma3Mov="u";
                            }
                        }
                    }else{
                        if(bu3){
                            if(bd3){
                                fantasma3Mov="l";
                            }else{
                                if(numeroR3==0){
                                    fantasma3Mov="l";
                                }else if(numeroR3==1){
                                    fantasma3Mov="d";
                                }else{
                                    fantasma3Mov="l";
                                }
                            }
                        }else if(bd3){
                            if(numeroR3==0){
                                fantasma3Mov="l";
                            }else if(numeroR3==1){
                                fantasma3Mov="u";
                            }else{
                                fantasma3Mov="l";
                            }
                        }else{
                            if(numeroR3==0){
                                fantasma3Mov="u";
                            }else if(numeroR3==1){
                                fantasma3Mov="d";
                            }else{
                                fantasma3Mov="u";
                            }
                        }
                    }
    
                }else if(fantasma3Mov=="r"){
                    if(br3){
                        if(bu3){
                            if(bd3){
                                fantasma3Mov="l";
                            }else{
                                fantasma3Mov="d";
                            }
                        }else if(bd3){
                            fantasma3Mov="u";
                        }else{
                            if(numeroR3==0){
                                fantasma3Mov="d";
                            }else if(numeroR3==1){
                                fantasma3Mov="d";
                            }else{
                                fantasma3Mov="u";
                            }
                        }
                    }else{
                        if(bu3){
                            if(bd3){
                                fantasma3Mov="r";
                            }else{
                                if(numeroR3==0){
                                    fantasma3Mov="r";
                                }else if(numeroR3==1){
                                    fantasma3Mov="d";
                                }else{
                                    fantasma3Mov="r";
                                }
                            }
                        }else if(bd3){
                            if(numeroR3==0){
                                fantasma3Mov="r";
                            }else if(numeroR3==1){
                                fantasma3Mov="u";
                            }else{
                                fantasma3Mov="r";
                            }
                        }else{
                            if(numeroR3==0){
                                fantasma3Mov="l";
                            }else if(numeroR3==1){
                                fantasma3Mov="d";
                            }else{
                                fantasma3Mov="u";
                            }
                        }
                    }
                }
            }
    
            switch (fantasma3Mov) {
                case "u":
                    y3-=2.03125;
                    break;
                case "d":
                    y3+=2.03125;
                    break;
                case "l":
                    x3-=2.03125;
                    break;
                case "r":
                    x3+=2.03125;
                    break;
                default:
                    break;
            }
            fantasma3.style.left=`${x3-325}px`;
            fantasma3.style.top=`${y3-325}px`;
        }//FANTASMA 3//
        if(fantasma33==1){
            bl4=((x4<=0)||(x4==390 && y4<=715&&y4>=650)||(x4==585 && y4<=585&&y4>=520)||(x4==455 && y4==520)||(x4==585 && y4<=585&&y4>=520)||(x4==260 && y4<=585&&y4>=520)||(x4==65 && y4<=650&&y4>=585)||(x4==585 && y4<=390&&y4>=325)||(x4==455 && y4<=390&&y4>=325)||(x4==260 && y4<=390&&y4>=325)||(x4==390 && y4<=130&&y4>=0)||(x4==325&&y4==650)||(x4==130&&y4==455)||(x4==130&&y4==325)||(x4==650&&y4==195)||(x4==715&&y4==65)||(x4==520&&y4==65)||(x4==325&&y4==195)||(x4==325&&y4==65)||(x4==650&&y4==650)||(x4==195&&y4==65));
            bu4=((y4<=0)||(y4==130&&x4>=585&&x4<=650)||(y4==715&&x4>=455&&x4<=585)||(y4==715&&x4>=130&&x4<=260)||(y4==585&&x4>=325&&x4<=390)||(y4==455&&x4>=325&&x4<=390)||(y4==520&&x4>=0&&x4<=65)||(y4==390&&x4>=0&&x4<=65)||(y4==520&&x4>=650&&x4<=715)||(y4==390&&x4>=650&&x4<=715)||(y4==260&&x4>=455&&x4<=585)||(y4==260&&x4>=130&&x4<=260)||(y4==130&&x4>=65&&x4<=130)||(y4==715&&x4==0)||(y4==715&&x4==715)||(y4==455&&x4==520)||(y4==455&&x4==195)||(y4==130&&x4==455)||(y4==130&&x4==260)||(y4==715&&x4==0));
            bd4=((y4>=715)||(y4==520&&x4==715)||(y4==585&&x4==585)||(y4==585&&x4==455)||(y4==585&&x4==260)||(y4==585&&x4==130)||(y4==520&&x4==715)||(y4==520&&x4==0)||(y4==455&&x4==195)||(y4==455&&x4==520)||(y4==260&&x4==520)||(y4==260&&x4==195)||(y4==0&&x4==455)||(y4==0&&x4==260)||(y4==455&&x4>=325&&x4<=390)||(y4==390&&x4>=0&&x4<=65)||(y4==390&&x4>=650&&x4<=715)||(y4==260&&x4>=650&&x4<=715)||(y4==260&&x4>=0&&x4<=65)||(y4==260&&x4>=325&&x4<=390)||(y4==0&&x4>=585&&x4<=650)||(y4==130&&x4>=455&&x4<=585)||(y4==0&&x4>=65&&x4<=130)||(y4==130&&x4>=130&&x4<=260));
            br4=((x4>=715)||(x4==650 && y4<=650&&y4>=585)||(x4==325 && y4<=715&&y4>=650)||(x4==260 && y4==520)||(x4==390 && y4==650)||(x4==65 && y4==650)||(x4==455 && y4<=585&&y4>=520)||(x4==130 && y4<=585&&y4>=520)||(x4==585 && y4==455)||(x4==585 && y4==325)||(x4==455 && y4<=390&&y4>=325)||(x4==260 && y4<=390&&y4>=325)||(x4==130 && y4<=390&&y4>=325)||(x4==325 && y4<=130)||(y4==195&&x4==65)||(x4==195 && y4==65)||(x4==0 && y4==65)||(x4==390 && y4==195)||(x4==390 &&y4==65)||(x4==520&&y4==65));
        
    
            numeroR4=Math.floor(Math.random() * 3);
    
            if(Number.isInteger(x4)&&Number.isInteger(y4)){
                if(fantasma4Mov=="u"){
                    if(bu4){
                        if(bl4){
                            if(br4){
                                fantasma4Mov="d";
                            }else{
                                fantasma4Mov="r";
                            }
                        }else if(br4){
                            fantasma4Mov="l";
                        }else{
                            if(numeroR4==0){
                                fantasma4Mov="r";
                            }else if(numeroR4==1){
                                fantasma4Mov="l";
                            }else{
                                fantasma4Mov="l";
                            }
                        }
                    }else{
                        if(bl4){
                            if(br4){
                                fantasma4Mov="u";
                            }else{
                                if(numeroR4==0){
                                    fantasma4Mov="u";
                                }else if(numeroR4==1){
                                    fantasma4Mov="r";
                                }else{
                                    fantasma4Mov="r";
                                }
                            }
                        }else if(br4){
                            if(numeroR4==0){
                                fantasma4Mov="l";
                            }else if(numeroR4==1){
                                fantasma4Mov="u";
                            }else{
                                fantasma4Mov="u";
                            }
                        }else{
                            if(numeroR4==0){
                                fantasma4Mov="l";
                            }else if(numeroR4==1){
                                fantasma4Mov="r";
                            }else{
                                fantasma4Mov="u";
                            }
                        }
                    }
    
    
                }else if(fantasma4Mov=="d"){
                    if(bd4){
                        if(bl4){
                            if(br4){
                                fantasma4Mov="u";
                            }else{
                                fantasma4Mov="r";
                            }
                        }else if(br4){
                            fantasma4Mov="l";
                        }else{
                            if(numeroR4==0){
                                fantasma4Mov="r";
                            }else if(numeroR4==1){
                                fantasma4Mov="l";
                            }else{
                                fantasma4Mov="l";
                            }
                        }
                    }else{
                        if(bl4){
                            if(br4){
                                fantasma4Mov="d";
                            }else{
                                if(numeroR4==0){
                                    fantasma4Mov="d";
                                }else if(numeroR4==1){
                                    fantasma4Mov="r";
                                }else{
                                    fantasma4Mov="r";
                                }
                            }
                        }else if(br4){
                            if(numeroR4==0){
                                fantasma4Mov="l";
                            }else if(numeroR4==1){
                                fantasma4Mov="d";
                            }else{
                                fantasma4Mov="d";
                            }
                        }else{
                            if(numeroR4==0){
                                fantasma4Mov="l";
                            }else if(numeroR4==1){
                                fantasma4Mov="r";
                            }else{
                                fantasma4Mov="d";
                            }
                        }
                    }
             
                }else if(fantasma4Mov=="l"){
    
                    if(bl4){

                        if(bu4){
                            if(bd4){
                                fantasma4Mov="r";
                            }else{
                                fantasma4Mov="d";
                            }
                        }else if(bd4){
                            fantasma4Mov="u";
                        }else{
                            if(numeroR4==0){
                                fantasma4Mov="d";
                            }else if(numeroR4==1){
                                fantasma4Mov="d";
                            }else{
                                fantasma4Mov="u";
                            }
                        }
                    }else{
                        if(bu4){
                            if(bd4){
                                fantasma4Mov="l";
                            }else{
                                if(numeroR4==0){
                                    fantasma4Mov="l";
                                }else if(numeroR4==1){
                                    fantasma4Mov="d";
                                }else{
                                    fantasma4Mov="l";
                                }
                            }
                        }else if(bd4){
                            if(numeroR4==0){
                                fantasma4Mov="l";
                            }else if(numeroR4==1){
                                fantasma4Mov="u";
                            }else{
                                fantasma4Mov="l";
                            }
                        }else{
                            if(numeroR4==0){
                                fantasma4Mov="u";
                            }else if(numeroR4==1){
                                fantasma4Mov="d";
                            }else{
                                fantasma4Mov="u";
                            }
                        }
                    }
    
                }else if(fantasma4Mov=="r"){
                    if(br4){
                        if(bu4){
                            if(bd4){
                                fantasma4Mov="l";
                            }else{
                                fantasma4Mov="d";
                            }
                        }else if(bd4){
                            fantasma4Mov="u";
                        }else{
                            if(numeroR4==0){
                                fantasma4Mov="d";
                            }else if(numeroR4==1){
                                fantasma4Mov="d";
                            }else{
                                fantasma4Mov="u";
                            }
                        }
                    }else{
                        if(bu4){
                            if(bd4){
                                fantasma4Mov="r";
                            }else{
                                if(numeroR4==0){
                                    fantasma4Mov="r";
                                }else if(numeroR4==1){
                                    fantasma4Mov="d";
                                }else{
                                    fantasma4Mov="r";
                                }
                            }
                        }else if(bd4){
                            if(numeroR4==0){
                                fantasma4Mov="r";
                            }else if(numeroR4==1){
                                fantasma4Mov="u";
                            }else{
                                fantasma4Mov="r";
                            }
                        }else{
                            if(numeroR4==0){
                                fantasma4Mov="l";
                            }else if(numeroR4==1){
                                fantasma4Mov="d";
                            }else{
                                fantasma4Mov="u";
                            }
                        }
                    }
                }
            }
    
            switch (fantasma4Mov) {
                case "u":
                    y4-=2.03125;
                    break;
                case "d":
                    y4+=2.03125;
                    break;
                case "l":
                    x4-=2.03125;
                    break;
                case "r":
                    x4+=2.03125;
                    break;
                default:
                    break;
            }
            fantasma4.style.left=`${x4-390}px`;
            fantasma4.style.top=`${y4-325}px`;
        }//FANTASMA 4//

        if((((x1-x<=16&&x1-x>=0)||(x-x1<=16&&x-x1>=0))&&((y1-y<=16&&y1-y>=0)||(y-y1<=16&&y-y1>=0)))||(((x2-x<=16&&x2-x>=0)||(x-x2<=16&&x-x2>=0))&&((y2-y<=16&&y2-y>=0)||(y-y2<=16&&y-y2>=0)))||(((x3-x<=16&&x3-x>=0)||(x-x3<=16&&x-x3>=0))&&((y3-y<=16&&y3-y>=0)||(y-y3<=16&&y-y3>=0)))||(((x4-x<=16&&x4-x>=0)||(x-x4<=16&&x-x4>=0))&&((y4-y<=16&&y4-y>=0)||(y-y4<=16&&y-y4>=0)))){
            console.log("Game over");
            modal.style.display="flex";
            modal.classList.add("aparece");
            modal.classList.remove("remove")
            modal.firstChild.innerHTML="Game over";
            setTimeout(()=>{
                modal.opacity="1";
            },900)
            clearInterval(juego);
        }

        switch (movimiento) {
            case "r":
                movR();
                break;
            case "d":
                movD();
                break;
            case "u":
                movU();
                break;
            case "l":
                movL();
                break;
            default:
                break;
        }

        if(x==0&&y==390&&movimiento=="l"){
            x=715;
        }
        if(x==715&&y==390&&movimiento=="r"){
            x=0;
        }
        if(x==0&&y==520&&movimiento=="l"){
            x=715;
        }
        if(x==715&&y==520&&movimiento=="r"){
            x=0;
        }
        if(x==715&&y==715&&movimiento=="r"){
            x=0;
        }
        if(x==0&&y==715&&movimiento=="l"){
            x=715;
        }

        if(Number.isInteger(x) && Number.isInteger(y)){
            aEliminar=((numeros.indexOf(x)+1)+(numeros.indexOf(y))*12);
            if(posiciones.includes(aEliminar)){
                elementoAEliminar=document.querySelector(`.p${aEliminar}`);
                elementoAEliminar.style.opacity="0";
                posiciones.splice(posiciones.indexOf(aEliminar),1);
                puntos+=1;
                points.innerHTML=`${puntos}`;
            }
        }
        if(posiciones.length==0){
            console.log("youwin");
            modal.style.display="flex";
            modal.classList.add("aparece");
            modal.classList.remove("remove")
            setTimeout(()=>{
                modal.opacity="1";
            },900)
            clearInterval(juego);
        }
        
    },15)
}

play();

btn.addEventListener("click",()=>{
        modal.classList.add("remove");
        modal.classList.remove("aparece");
        setTimeout(()=>{
            modal.style.opacity="0";
            modal.style.display="none";
        },900)
        location.reload();
})




