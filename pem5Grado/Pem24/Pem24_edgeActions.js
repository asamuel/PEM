/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         //Establecemos variables globales
         //Sonidos de las instrucciones
         sym.setVariable("mySound1", 0);
         sym.setVariable("mySound2", 0);
         sym.setVariable("mySound3", 0);
         sym.setVariable("mySound4", 0);
         //Sonidos de 50 es mucho o poco
         sym.setVariable("mySound5", 0); 
         sym.setVariable("mySound6", 0);
         sym.setVariable("mySound7", 0);
         sym.setVariable("mySound8", 0);
         sym.setVariable("mySound9", 0);
         sym.setVariable("mySound10", 0);
         
         //Sonidos de 100 es mucho o poco
         sym.setVariable("mySound11", 0); 
         sym.setVariable("mySound12", 0);
         sym.setVariable("mySound13", 0);
         sym.setVariable("mySound14", 0);
         sym.setVariable("mySound15", 0);
         sym.setVariable("mySound16", 0);
         
         sym.setVariable("variableFeed", 0);
         sym.setVariable("mySoundAmbient", 0);
         sym.setVariable("myIntruccion", 0);
         myIntruccion=sym.$("simIntrucciones")[0];
         sym.setVariable("uniqueArray", 0);
         sym.setVariable("elementCant", 0);
         
         uniqueArray=[];elementCant=4;var cont=0, cont2=0,myTime,simLetra1,simLetra2,simLetra3,simLetra4,simFeedback;
         var myMosaicos = {};
         var myMosaicosSelectedArray = [];
         var wDiv, hDiv, mySimSeleccion1, valMp3=true, variableFeed=0;
         
         //Prototype de la clase myMosaicosSelect
         function myMosaicosSelect(mosaiSelected, feedback) {
             this.mosaiSelected = mosaiSelected;
             this.feedback = feedback;
         }
         
         //Establecemos funciones globales
          sym.randomNoRepeat = function  () {
         	if (uniqueArray.length==0){
         			for (var i = 0; i < elementCant; i++) {
         				uniqueArray.push(i);
         			};
         	}
         		var index=Math.floor(Math.random()*uniqueArray.length);
         		var val=uniqueArray[index];
         		uniqueArray.splice(index,1);
         		return val
         }
         
         
          sym.myStartTimer = function  (interval, option) {	
          myTime = setInterval(function(){myTimer(option)},interval)
         	//sym.createChildSymbol("simTest", "simContainer").getSymbolElement();
         }
         
          sym.selectEscene = function  () {
          var selectTitle1;
          if(cont!=4){
         	switch (sym.randomNoRepeat()) {
         		 case 0:
         			  sym.createChildSymbol("simEscene1", "simContainer").getSymbolElement();
         			  myMosaicos[cont]="sim50Km";
         			  break;
         		 case 1:
         				sym.createChildSymbol("simEscene2", "simContainer").getSymbolElement();
         				myMosaicos[cont]="sim50seg";
         			  break;
         		 case 2:
         				sym.createChildSymbol("simEscene3", "simContainer").getSymbolElement();
         				myMosaicos[cont]="sim50Anios";
         			  break;
         
         		 case 3:
         				sym.createChildSymbol("simEscene4", "simContainer").getSymbolElement();
         				 myMosaicos[cont]="sim50Azucar";
         			  break;	  
         
         	 }
         	 cont++;
         	 }
         	 else{
         		if(variableFeed==0){
         			selectTitle1=sym.createChildSymbol("simTitle1", "simTitle").getSymbolElement();
         		   selectTitle1.css({"top":"50%","left":"50%","position": "absolute", "margin": "0 auto",
                    "-moz-transform":"translate(-50%,-50%)","-ms-transform":"translate(-50%,-50%)",
                    "-webkit-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         		}
         		putEscene1();
         	 }
         }
         
          sym.selectEscene2 = function  () {
          var selectTitle3;
          if(cont!=8){
         	switch (sym.randomNoRepeat()) {
         		 case 0:
         			  sym.createChildSymbol("simEscene5", "simContainer").getSymbolElement();
         			  myMosaicos[cont]="sim100Arboles";
         			  break;
         		 case 1:
         				sym.createChildSymbol("simEscene6", "simContainer").getSymbolElement();
         				myMosaicos[cont]="sim100Billetes";
         			  break;
         		 case 2:
         				sym.createChildSymbol("simEscene7", "simContainer").getSymbolElement();
         				myMosaicos[cont]="sim100Puntos";
         			  break;
         
         		 case 3:
         				sym.createChildSymbol("simEscene8", "simContainer").getSymbolElement();
         				 myMosaicos[cont]="sim100Zapatos";
         			  break;	  
         
         	 }
         	 cont++;
         	 }
         	 else{
         		cont=0;
         		if(variableFeed==2){
         			selectTitle3=sym.createChildSymbol("simTitle3", "simTitle").getSymbolElement();
         		   selectTitle3.css({"top":"50%","left":"50%","position": "absolute", "margin": "0 auto",
                    "-moz-transform":"translate(-50%,-50%)","-ms-transform":"translate(-50%,-50%)",
                    "-webkit-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         		}
         		putEscene2();
         	 }
         }
         
         sym.showFeedback = function  (sim) {
           var myMessege="";
           //console.log("variableFeed-->"+variableFeed);
           if(variableFeed==0){
           		myMessege="¡Escribe otro ejemplo similar de cuando 50 es mucho!";}
           if(variableFeed==1){
           		myMessege="¡Escribe otro ejemplo similar de cuando 50 es poco!";}
           if(variableFeed==2){
           		myMessege="¡Escribe otro ejemplo similar de cuando 100 es mucho!";}
           if(variableFeed==3){
           		myMessege="¡Escribe otro ejemplo similar de cuando 100 es poco!";}
           var box = bootbox.dialog({
           message: "<input class='bootbox-input bootbox-input-text form-control' autocomplete='off' type='text' id='result' autofocus>",
           title: myMessege,
           closeButton:false,
           buttons: {
             main: {
               label: "Aceptar!",
               className: "btn-primary",
               callback: function() {
         			var result= $('#result').val();
         			if ( result === null || result == "" ){
         				variableFeed--;  	
         				sym.showFeedback(sim);				
         			}
         			else{
         				var myMosaicosSelect1 = new myMosaicosSelect(sim, result);
         				myMosaicosSelectedArray.push(myMosaicosSelect1);
         				if(cont2==0)
         					sym.myStartTimer (0,2);
         				if(cont2==1){
         					sym.myStartTimer (0,4);
         				}
         				if(cont2==2){
         					sym.myStartTimer (0,6);
         				}
         				if(cont2==3){
         					sym.myStartTimer (0,8);
         				}
         				sym.$("simTitle").children().remove();
         				//sym.myStartTimer (0,2);
         				//alert("Mosaic "+myMosaicosSelectedArray[0].mosaiSelected +" Feedback: "+ myMosaicosSelectedArray[0].feedback);  
         				cont2++;
              		}
                 //console.log("Hi "+ $('#first_name').val());
               }
             }
           }
         });
         	box.bind('shown.bs.modal', function(){
            box.find("input").focus();
         });
         variableFeed++;
         }
         sym.addEventIntrucciones = function  () {
         	sym.getSymbol("simMenu").$("simIntruccion3").click(function() {
         	mySound5.stop();
         	mySound6.stop();
         	mySound7.stop();
         	mySound8.stop();
         	mySound9.stop();
         	mySound10.stop();
         	mySound11.stop();
         	mySound12.stop();
         	mySound13.stop();
         	mySound14.stop();
         	mySound15.stop();
         	mySound16.stop();
         	mySoundAmbient.volume(0.25);
         	mySound4.play();
         	bootbox.dialog({
         		message: "<h4 style='font-family=Arial, Helvetica, sans-serif'>"+
         	  "Imagínate que estás en el cine, a continuación se te presentarán una serie "+
         	  "de imágenes que te ayudarán a razonar cuando una cantidad es mucho o poco."+"<br><br>"+
         	  "Selecciona dando click.  "+
         	  "</h4>",
         	  title: "<h2 style='font-family=Arial, Helvetica, sans-serif'>Instrucciones<h2>",
         	  closeButton:false,
         	  buttons: {
         		 main: {
         			label: "Aceptar!",
         			className: "btn-primary",
         			callback: function() {
         				mySoundAmbient.volume(0.5);
         				mySound4.stop();
         			}
         		 }
         	  }
         	});
         
          });
         }
         
         
         
         //Funciones locales
         function putEscene1() {
         	sym.$("simContainer").children().remove();
         	mySimSeleccion1=sym.createChildSymbol("simSeleccion1", "simContainer").getSymbolElement();
         	hDiv=531;
         	wDiv=832;
         
         	 for (var k in myMosaicos) {
             if (myMosaicos.hasOwnProperty(k)) {
             	switch (k) {
         			 case '0':
         				  if(myMosaicos[k]=="sim50Km"){
         				 	 accommodateMosai(0, "sim50kmMoi");
         				  }
         				  if(myMosaicos[k]=="sim50seg"){
         				  	 accommodateMosai(0, "simSegundoMoi");
         				  }	
         				  if(myMosaicos[k]=="sim50Anios"){
         				  	 accommodateMosai(0, "sim50Anios");
         				  }	
         				  if(myMosaicos[k]=="sim50Azucar"){
         				  	 accommodateMosai(0, "sim50Azucar");
         				  }	  
         				  break;
         			 case '1':
         				  if(myMosaicos[k]=="sim50Km"){
         				   accommodateMosai(1, "sim50kmMoi");
         				  }
         				  if(myMosaicos[k]=="sim50seg"){
         					accommodateMosai(1, "simSegundoMoi");
         				  }
         				  if(myMosaicos[k]=="sim50Anios"){
         				  	 accommodateMosai(1, "sim50Anios");
         				  }	
         				  if(myMosaicos[k]=="sim50Azucar"){
         				  	 accommodateMosai(1, "sim50Azucar");
         				  }
         				  break;
         
         				case '2':
         				  if(myMosaicos[k]=="sim50Km"){
         					accommodateMosai(2, "sim50kmMoi");
         				  }
         				  if(myMosaicos[k]=="sim50seg"){
         					accommodateMosai(2, "simSegundoMoi");
         				  }
         				  if(myMosaicos[k]=="sim50Anios"){
         					 accommodateMosai(2, "sim50Anios");
         				  }	
         				  if(myMosaicos[k]=="sim50Azucar"){
         					 accommodateMosai(2, "sim50Azucar");
         				  }
         				  break;
         
         				 case '3':
         				  if(myMosaicos[k]=="sim50Km"){
         					accommodateMosai(3, "sim50kmMoi");
         				  }
         				  if(myMosaicos[k]=="sim50seg"){
         					accommodateMosai(3, "simSegundoMoi");
         				  }
         				  if(myMosaicos[k]=="sim50Anios"){
         					 accommodateMosai(3, "sim50Anios");
         				  }	
         				  if(myMosaicos[k]=="sim50Azucar"){
         					 accommodateMosai(3, "sim50Azucar");
         				  }
         				  break;
         		 } 
             }
         }
         }
         function putEscene2() {
         	sym.$("simContainer").children().remove();
         	mySimSeleccion1=sym.createChildSymbol("simSeleccion1", "simContainer").getSymbolElement();
         
         	 for (var k in myMosaicos) {
             if (myMosaicos.hasOwnProperty(k)) {
             	switch (k) {
         			 case '4':
         				  if(myMosaicos[k]=="sim100Arboles"){
         				 	 accommodateMosai(0, "sim100Arboles");
         				  }
         				  if(myMosaicos[k]=="sim100Billetes"){
         				  	 accommodateMosai(0, "sim100Billetes");
         				  }	
         				  if(myMosaicos[k]=="sim100Puntos"){
         				  	 accommodateMosai(0, "sim100Puntos");
         				  }	
         				  if(myMosaicos[k]=="sim100Zapatos"){
         				  	 accommodateMosai(0, "sim100Zapatos");
         				  }	  
         				  break;
         			 case '5':			 
         			 	 if(myMosaicos[k]=="sim100Arboles"){
         				 	 accommodateMosai(1, "sim100Arboles");
         				  }
         				  if(myMosaicos[k]=="sim100Billetes"){
         				  	 accommodateMosai(1, "sim100Billetes");
         				  }	
         				  if(myMosaicos[k]=="sim100Puntos"){
         				  	 accommodateMosai(1, "sim100Puntos");
         				  }	
         				  if(myMosaicos[k]=="sim100Zapatos"){
         				  	 accommodateMosai(1, "sim100Zapatos");
         				  }	  
         				  break;
         				case '6':
         				  if(myMosaicos[k]=="sim100Arboles"){
         				 	 accommodateMosai(2, "sim100Arboles");
         				  }
         				  if(myMosaicos[k]=="sim100Billetes"){
         				  	 accommodateMosai(2, "sim100Billetes");
         				  }	
         				  if(myMosaicos[k]=="sim100Puntos"){
         				  	 accommodateMosai(2, "sim100Puntos");
         				  }	
         				  if(myMosaicos[k]=="sim100Zapatos"){
         				  	 accommodateMosai(2, "sim100Zapatos");
         				  }	  
         				  break;
         				 case '7':
         				  if(myMosaicos[k]=="sim100Arboles"){
         				 	 accommodateMosai(3, "sim100Arboles");
         				  }
         				  if(myMosaicos[k]=="sim100Billetes"){
         				  	 accommodateMosai(3, "sim100Billetes");
         				  }	
         				  if(myMosaicos[k]=="sim100Puntos"){
         				  	 accommodateMosai(3, "sim100Puntos");
         				  }	
         				  if(myMosaicos[k]=="sim100Zapatos"){
         				  	 accommodateMosai(3, "sim100Zapatos");
         				  }	  
         				  break;
         		 } 
             }
         }
         }
         
          function accommodateMosai(index, sim) {	
         
         	 var s=sym.createChildSymbol(sim, mySimSeleccion1).getSymbolElement();
         	 s.css({"margin": "0 auto","position": "absolute","top":"50%","left":"50%",
                "-moz-transform":"translate(-50%,-50%)","-ms-transform":"translate(-50%,-50%)",
                "-webkit-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         	 if(index==0)
         		  	TweenLite.to(s, 2, {x:-wDiv+s.width(),y:-hDiv+s.height(),  ease:Power4.easeOut});
         	 if(index==1)
         		  	TweenLite.to(s, 2, {x:0,y:-hDiv+s.height(),  ease:Power4.easeOut, delay:0.5});
         	 if(index==2)
         		 	 TweenLite.to(s, 1, {x:-wDiv+s.width(),y:0,  ease: Bounce.easeOut, delay:1.0});
         	 if(index==3)
         		 	 TweenLite.to(s, 0.5, {x:0,y:0, ease: Expo.easeIn, delay:1.3});
          }
         
         //Cargar audio 
         mySound1 = new Howl({
           urls: ['media/pem24_1.ogg','media/pem24_1.mp3'],
            onend: function() {
         		sym.getSymbol("simIntrucciones").play("start_1");
           }
         });
         
         mySound2 = new Howl({
           urls: ['media/pem24_2.ogg','media/pem24_2.mp3'],
             onend: function() {
         		sym.getSymbol("simIntrucciones").play("start_2");
           }
         });
         
         mySound3 = new Howl({
           urls: ['media/pem24_3.ogg','media/pem24_3.mp3'],
            onend: function() {
         		sym.getSymbol("simIntrucciones").play("end");
           }
         });
         
         mySound4 = new Howl({
           urls: ['media/pem24_4.ogg','media/pem24_4.mp3']
         });
         
         $( document ).ready(function() {
            mySoundAmbient = new Howl({
              urls: ['media/bensound-buddy.ogg','media/bensound-buddy.mp3'],
              loop: true,
              onend: function() {
              }
            });
            mySoundAmbient.play();
            mySoundAmbient.volume(0.5);
         });
         
         //cuando 50 es mucho
         mySound5 = new Howl({
           urls: ['media/pem24_5.ogg','media/pem24_5.mp3'],
            onend: function() {
         		sym.getSymbol(simLetra1).play("end");
         		mySoundAmbient.volume(0.5); 
           }
         });
         
         //kilometros
         mySound6 = new Howl({
           urls: ['media/pem24_6.ogg','media/pem24_6.mp3'],
              onend: function() {
         		mySoundAmbient.volume(0.5);
           }
         });
         
         //segundos
         mySound7 = new Howl({
           urls: ['media/pem24_7.ogg','media/pem24_7.mp3'],
              onend: function() {
         		mySoundAmbient.volume(0.5);
           }
         });
         
         //azucar
         mySound8 = new Howl({
           urls: ['media/pem24_8.ogg','media/pem24_8.mp3'],
              onend: function() {
         		mySoundAmbient.volume(0.5);
           }
         });
         
         //anios
         mySound9 = new Howl({
           urls: ['media/pem24_9.ogg','media/pem24_9.mp3'],
              onend: function() {
         		mySoundAmbient.volume(0.5);
           }
         });
         
         //cuando 50 es poco
         mySound10 = new Howl({
           urls: ['media/pem24_10.ogg','media/pem24_10.mp3'],
              onend: function() {
         		mySoundAmbient.volume(0.5);
         		sym.getSymbol(simLetra2).play("end");
           }
         });
         
         //cuando 100 es mucho
         mySound11 = new Howl({
           urls: ['media/pem24_11.ogg','media/pem24_11.mp3'],
              onend: function() {
         		mySoundAmbient.volume(0.5);
         		sym.getSymbol(simLetra3).play("end");
           }
         });
         
         //arboles
         mySound12 = new Howl({
           urls: ['media/pem24_12.ogg','media/pem24_12.mp3'],
              onend: function() {
         		mySoundAmbient.volume(0.5);
           }
         });
         
         //cordobas
         mySound13 = new Howl({
           urls: ['media/pem24_13.ogg','media/pem24_13.mp3'],
              onend: function() {
         		mySoundAmbient.volume(0.5);
           }
         });
         
         //zapatos
         mySound14 = new Howl({
           urls: ['media/pem24_14.ogg','media/pem24_14.mp3'],
              onend: function() {
         		mySoundAmbient.volume(0.5);
           }
         });
         
         //agujas
         mySound15 = new Howl({
           urls: ['media/pem24_15.ogg','media/pem24_15.mp3'],
              onend: function() {
         		mySoundAmbient.volume(0.5);
           }
         });
         
         //cuando 100 es poco
         mySound16 = new Howl({
           urls: ['media/pem24_16.ogg','media/pem24_16.mp3'],
              onend: function() {
         		mySoundAmbient.volume(0.5);
         		sym.getSymbol(simLetra4).play("end");
           }
         });
         
         
         sym.getSymbol("simMenu").$("simSonido").click(function() {
           if(valMp3){
             mySoundAmbient.stop();
             valMp3=false;
           }     
           else{
             mySoundAmbient.play();
             valMp3=true;
           }
         });
         
        //Ir  al menu principal 
        sym.getSymbol("simMenu").$("simHome").click(function() {
            window.open("../../index.html", "_self");
        });
        //Ir al menu anterior 
        sym.getSymbol("simMenu").$("simSalir").click(function() {
            putValue();   
        });

        function putValue () {  
            var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
         
            if(isIE){
              window.location.href="../Menu2.html?indexCat=calc";           
            }
            else{
               localStorage.setItem("indexCat","calc");
               window.open("../Menu2.html", "_self");
            }              
         }
         
         /*
         mySound3 = new Howl({
           urls: ['media/pem24_3.ogg','media/pem24_3.mp3'],
            onend: function() {
         		sym.getSymbol(simLetra1).play("end");
           }
         });
         
         mySound4 = new Howl({
           urls: ['media/pem24_4.ogg','media/pem24_4.mp3'],
            onend: function() {
         		sym.getSymbol(simLetra2).play("end");
           }
         });
         
         mySound5 = new Howl({
           urls: ['media/pem24_5.ogg','media/pem24_5.mp3'],
            onend: function() {
         		sym.getSymbol(simLetra3).play("end");
           }
         });
         
         mySound6 = new Howl({
           urls: ['media/pem24_6.ogg','media/pem24_6.mp3'],
            onend: function() {
         		sym.getSymbol(simLetra4).play("end");
           }
         });
         */
         //sym.myStartTimer (10000,0); //mando la intervalo de tiempo que tiene el timer para llamar a la función  myTimer, y a la ves le paso un parametro que decide que agregar al escenario
         
         function myTimer(num) {
         	switch (num) {
         			 case 0:
         				  simLetra1=sym.createChildSymbol("simLetra1", "simContainer").getSymbolElement();
         				  simLetra1.css({"top":"50%","left":"50%","position": "absolute", "margin": "0 auto",
                            "-moz-transform":"translate(-50%,-50%)","-ms-transform":"translate(-50%,-50%)",
                            "-webkit-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         				  clearInterval(myTime);
         				  sym.myStartTimer (4000,1);
         				  break;
         			 case 1:
         			 		sym.$("simContainer").children().remove();
         				   sym.selectEscene();
         				   clearInterval(myTime);
         				  	break;
         			 case 2:
         				  sym.$("simContainer").children().remove();
         				  simLetra2=sym.createChildSymbol("simLetra2", "simContainer").getSymbolElement();
         				  simLetra2.css({"top":"50%","left":"50%","position": "absolute", "margin": "0 auto",
                            "-moz-transform":"translate(-50%,-50%)","-ms-transform":"translate(-50%,-50%)",
                            "-webkit-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         				  clearInterval(myTime);
         				  sym.myStartTimer (3000,3);
         				  break;
         			 case 3:
         					sym.$("simContainer").children().remove();
         					var selectTitle2=sym.createChildSymbol("simTitle2", "simTitle").getSymbolElement();
         				   selectTitle2.css({"top":"50%","left":"50%","position": "absolute", "margin": "0 auto",
                            "-moz-transform":"translate(-50%,-50%)","-ms-transform":"translate(-50%,-50%)",
                            "-webkit-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         					putEscene1();
         					clearInterval(myTime);
         					break;
         			 case 4:
         				  sym.$("simContainer").children().remove();
         				  simLetra3=sym.createChildSymbol("simLetra3", "simContainer").getSymbolElement();
         				  simLetra3.css({"top":"50%","left":"50%","position": "absolute", "margin": "0 auto",
                            "-moz-transform":"translate(-50%,-50%)","-ms-transform":"translate(-50%,-50%)",
                            "-webkit-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         				  clearInterval(myTime);
         				  sym.myStartTimer (4000,5);
         				  break;
         			 case 5:
         					sym.$("simContainer").children().remove();
         					uniqueArray=[];
         					sym.selectEscene2();
         					clearInterval(myTime);
         					break;
         			case 6:
         				  sym.$("simContainer").children().remove();
         				  simLetra4=sym.createChildSymbol("simLetra4", "simContainer").getSymbolElement();
         				  simLetra4.css({"top":"50%","left":"50%","position": "absolute", "margin": "0 auto",
                            "-moz-transform":"translate(-50%,-50%)","-ms-transform":"translate(-50%,-50%)",
                            "-webkit-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         				  clearInterval(myTime);
         				  sym.myStartTimer (3000,7);
         				  break;
         			 case 7:
         					sym.$("simContainer").children().remove();
         					var selectTitle4=sym.createChildSymbol("simTitle4", "simTitle").getSymbolElement();
         				    selectTitle4.css({"position": "absolute", "margin": "0 auto","top":"50%","left":"50%",
                                "-moz-transform":"translate(-50%,-50%)","-ms-transform":"translate(-50%,-50%)",
                                "-webkit-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
                            

         					putEscene2();
         					clearInterval(myTime);
         					break;
         			 case 8:
         				  sym.$("simContainer").children().remove();
         				  simFeedback=sym.createChildSymbol("simFeedback", "simContainer").getSymbolElement();
         				 // simLetra3.css({"top":"50%","left":"50%","transform": "translate(-50%,-50%)","position": "absolute", "margin": "0 auto"});
         				  clearInterval(myTime);
         				  myFeedback();
         				  //sym.myStartTimer (4000,5);
         				  break;
         			 case 9:
         					sym.$("simContainer").children().remove();
         					uniqueArray=[];
         					sym.selectEscene2();
         					clearInterval(myTime);
         					break;
         		 }
         }
         
         function myFeedback(){
         	var myTable="<table class='table'>"+
         	"<thead>"+
               "<tr>"+
                 "<th>Pregunta</th>"+
                 "<th>Respuestas</th>"+
               "</tr>"+
             "</thead>";
         
         	var cont3=1;
         		for (var i = 0; i < myMosaicosSelectedArray.length; i++) {
         
         			switch (myMosaicosSelectedArray[i].mosaiSelected) {
         				 case "sim50Km":
         					  sym.createChildSymbol("simFeed1", sym.getSymbol(simFeedback).$("container"+cont3)).getSymbolElement();
         					  sym.getSymbol(simFeedback).$("Text"+cont3).html("50 KM");
         					  sym.getSymbol(simFeedback).$("Text"+cont3).css({"color":"white"});
         					 // sym.getSymbol(simFeedback).$("container"+cont3).$("letra"+cont3).$("Text"+cont3).html="50 KM";
         					  break;
         				 case "sim50seg":
         					  sym.createChildSymbol("simFeed2", sym.getSymbol(simFeedback).$("container"+cont3)).getSymbolElement();
         					  sym.getSymbol(simFeedback).$("Text"+cont3).html("50 Segundos");
         					  sym.getSymbol(simFeedback).$("Text"+cont3).css({"color":"white"});
         					  break;
         				 case "sim50Anios":
         					  sym.createChildSymbol("simFeed3", sym.getSymbol(simFeedback).$("container"+cont3)).getSymbolElement();
         					  sym.getSymbol(simFeedback).$("Text"+cont3).html("50 Años");
         					  sym.getSymbol(simFeedback).$("Text"+cont3).css({"color":"white"});
         					  break;
         				 case "sim50Azucar":
         					  sym.createChildSymbol("simFeed4", sym.getSymbol(simFeedback).$("container"+cont3)).getSymbolElement();
         					  sym.getSymbol(simFeedback).$("Text"+cont3).html("50 Azúcar");
         					  sym.getSymbol(simFeedback).$("Text"+cont3).css({"color":"white"});
         					  break;
         				 case "sim100Arboles":
         					  sym.createChildSymbol("simFeed5", sym.getSymbol(simFeedback).$("container"+cont3)).getSymbolElement();
         					  sym.getSymbol(simFeedback).$("Text"+cont3).html("100 Árboles");
         					  sym.getSymbol(simFeedback).$("Text"+cont3).css({"color":"white"});
         					  break;
         				 case "sim100Billetes":
         					  sym.createChildSymbol("simFeed6", sym.getSymbol(simFeedback).$("container"+cont3)).getSymbolElement();
         					  sym.getSymbol(simFeedback).$("Text"+cont3).html("100 Córdobas");
         					  sym.getSymbol(simFeedback).$("Text"+cont3).css({"color":"white"});
         					  break;
         				 case "sim100Puntos":
         					  sym.createChildSymbol("simFeed7", sym.getSymbol(simFeedback).$("container"+cont3)).getSymbolElement();
         					  sym.getSymbol(simFeedback).$("Text"+cont3).html("100 Agujas");
         					  sym.getSymbol(simFeedback).$("Text"+cont3).css({"color":"white"});
         					  break;
         				 case "sim100Zapatos":
         					  sym.createChildSymbol("simFeed8", sym.getSymbol(simFeedback).$("container"+cont3)).getSymbolElement();
         					  sym.getSymbol(simFeedback).$("Text"+cont3).html("100 Zapatos");
         					  sym.getSymbol(simFeedback).$("Text"+cont3).css({"color":"white"});
         					  break;
         			 }
         			 myTable+="<tbody>"+
         				"<tr class='"+changeColorTable(i)+"'>"+
         				  "<td>"+getQuestion(i)+"</td>"+
         				  "<td>"+myMosaicosSelectedArray[i].feedback+"</td>"+
         				"</tr>";
         				//console.log("Mosaic "+myMosaicosSelectedArray[i].mosaiSelected +" Feedback: "+ myMosaicosSelectedArray[i].feedback);
         				cont3++;
         		};
         
         		  myTable+="</tbody>"+
         		  "</table>";
         		  sym.getSymbol(simFeedback).$("divtable").html(myTable);
         }
         
         
         function changeColorTable(index){
         	if(index==0)
         		return "success"
         	if(index==1)
         		return "danger"
         	if(index==2)
         		return "info"
         	if(index==3)
         		return "success"
         }
         
         function getQuestion(i){
         	switch(i){
         	case 0: return "¿Cuándo 50 es mucho?"
         			  break;
         	case 1: return "¿Cuándo 50 es poco?"
         			  break;
         	case 2: return "¿Cuándo 100 es mucho?"
         			  break;
         	case 3: return "¿Cuándo 100 es poco?"
         			  break;
         	}
         }
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'simIntrucciones'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();
         mySoundAmbient.volume(0.25);
         mySound1.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         mySoundAmbient.volume(0.5);
         sym.getComposition().getStage().addEventIntrucciones();
         sym.getComposition().getStage().myStartTimer(0,0);
         this.deleteSymbol();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();
         mySound2.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.$("Text2").remove();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.$("Text").remove();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();
         mySound3.play();

      });
      //Edge binding end

   })("simIntrucciones");
   //Edge symbol end:'simIntrucciones'

   //=========================================================
   
   //Edge symbol: 'simPrimeraEscena'
   (function(symbolName) {   
   
   })("simPrimeraEscena");
   //Edge symbol end:'simPrimeraEscena'

   //=========================================================
   
   //Edge symbol: 'simEscena1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.getComposition().getStage().selectEscene();
         this.deleteSymbol();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         mySoundAmbient.volume(0.25); 
         mySound6.play();

      });
      //Edge binding end

   })("simEscene1");
   //Edge symbol end:'simEscene1'

   //=========================================================
   
   //Edge symbol: 'simEscene2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         
         sym.getComposition().getStage().selectEscene();
         this.deleteSymbol();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         mySoundAmbient.volume(0.25); 
         mySound9.play();

      });
      //Edge binding end

         })("simEscene3");
   //Edge symbol end:'simEscene3'

   //=========================================================
   
   //Edge symbol: 'simEscene1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         
         sym.getComposition().getStage().selectEscene();
         this.deleteSymbol();
         
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         mySoundAmbient.volume(0.25); 
         mySound7.play();

      });
      //Edge binding end

      })("simEscene2");
   //Edge symbol end:'simEscene2'

   //=========================================================
   
   //Edge symbol: 'simLetra1'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         this.deleteSymbol();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         mySoundAmbient.volume(0.25); 
         mySound5.play();

      });
      //Edge binding end

   })("simLetra1");
   //Edge symbol end:'simLetra1'

   //=========================================================
   
   //Edge symbol: 'simEscene2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.getComposition().getStage().selectEscene();
         this.deleteSymbol();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         mySoundAmbient.volume(0.25); 
         mySound8.play();

      });
      //Edge binding end

      })("simEscene4");
   //Edge symbol end:'simEscene4'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'sim50kmMoi_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 300, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "mouseover", function(sym, e) {
         sym.stop("inicio");
         sym.play("inicio");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "mouseout", function(sym, e) {
         sym.stop("fin");
         sym.play("fin");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "click", function(sym, e) {
         sym.getComposition().getStage().showFeedback("sim50Anios");

      });
         //Edge binding end

      })("sim50Anios");
   //Edge symbol end:'sim50Anios'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'sim50kmMoi_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 300, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "mouseover", function(sym, e) {
         sym.stop("inicio");
         sym.play("inicio");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "mouseout", function(sym, e) {
         sym.stop("fin");
         sym.play("fin");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "click", function(sym, e) {
         sym.getComposition().getStage().showFeedback("sim50Azucar");

      });
         //Edge binding end

      })("sim50Azucar");
   //Edge symbol end:'sim50Azucar'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'sim50kmMoi'
   (function(symbolName) {   
   
      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 300, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "mouseover", function(sym, e) {
         sym.stop("inicio");
         sym.play("inicio");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "mouseout", function(sym, e) {
         sym.stop("fin");
         sym.play("fin");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "click", function(sym, e) {
         sym.getComposition().getStage().showFeedback("sim50Km");

      });
      //Edge binding end

   })("sim50kmMoi");
   //Edge symbol end:'sim50kmMoi'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'sim50kmMoi_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 300, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "mouseover", function(sym, e) {
         sym.stop("inicio");
         sym.play("inicio");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "mouseout", function(sym, e) {
         sym.stop("fin");
         sym.play("fin");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "click", function(sym, e) {
         sym.getComposition().getStage().showFeedback("sim50seg");

      });
         //Edge binding end

      })("simSegundoMoi");
   //Edge symbol end:'simSegundoMoi'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'simEscena1'
   (function(symbolName) {   
   
   })("simSeleccion1");
   //Edge symbol end:'simSeleccion1'

   //=========================================================
   
   //Edge symbol: 'simLetra1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         this.deleteSymbol();

      });
         //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         mySoundAmbient.volume(0.25);
         mySound10.play();

      });
         //Edge binding end

      })("simLetra2");
   //Edge symbol end:'simLetra2'

   //=========================================================
   
   //Edge symbol: 'simLetra2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         this.deleteSymbol();

      });
            //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         mySoundAmbient.volume(0.25);
         mySound11.play();

      });
            //Edge binding end

         })("simLetra3");
   //Edge symbol end:'simLetra3'

   //=========================================================
   
   //Edge symbol: 'simEscene4_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.getComposition().getStage().selectEscene2();
         this.deleteSymbol();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         mySoundAmbient.volume(0.25);
         mySound12.play();

      });
      //Edge binding end

         })("simEscene5");
   //Edge symbol end:'simEscene5'

   //=========================================================
   
   //Edge symbol: 'simEscene5_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.getComposition().getStage().selectEscene2();
         this.deleteSymbol();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         mySoundAmbient.volume(0.25);
         mySound13.play();

      });
      //Edge binding end

         })("simEscene6");
   //Edge symbol end:'simEscene6'

   //=========================================================
   
   //Edge symbol: 'simEscene6_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.getComposition().getStage().selectEscene2();
         this.deleteSymbol();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         mySoundAmbient.volume(0.25);
         mySound15.play();

      });
      //Edge binding end

         })("simEscene7");
   //Edge symbol end:'simEscene7'

   //=========================================================
   
   //Edge symbol: 'simEscene7_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.getComposition().getStage().selectEscene2();
         this.deleteSymbol();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         mySoundAmbient.volume(0.25);
         mySound14.play();

      });
      //Edge binding end

         })("simEscene8");
   //Edge symbol end:'simEscene8'

   //=========================================================
   
   //Edge symbol: 'sim50Anios_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 300, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "click", function(sym, e) {
         sym.getComposition().getStage().showFeedback("sim100Arboles");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "mouseout", function(sym, e) {
         sym.stop("fin");
         sym.play("fin");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "mouseover", function(sym, e) {
         sym.stop("inicio");
         sym.play("inicio");
         

      });
            //Edge binding end

         })("sim100Arboles");
   //Edge symbol end:'sim100Arboles'

   //=========================================================
   
   //Edge symbol: 'sim100Arboles_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 300, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "click", function(sym, e) {
         sym.getComposition().getStage().showFeedback("sim100Billetes");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "mouseout", function(sym, e) {
         sym.stop("fin");
         sym.play("fin");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "mouseover", function(sym, e) {
         sym.stop("inicio");
         sym.play("inicio");
         

      });
            //Edge binding end

         })("sim100Billetes");
   //Edge symbol end:'sim100Billetes'

   //=========================================================
   
   //Edge symbol: 'sim100Arboles_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 300, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "click", function(sym, e) {
         sym.getComposition().getStage().showFeedback("sim100Puntos");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "mouseout", function(sym, e) {
         sym.stop("fin");
         sym.play("fin");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "mouseover", function(sym, e) {
         sym.stop("inicio");
         sym.play("inicio");
         

      });
            //Edge binding end

         })("sim100Puntos");
   //Edge symbol end:'sim100Puntos'

   //=========================================================
   
   //Edge symbol: 'sim100Arboles_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 300, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "click", function(sym, e) {
         sym.getComposition().getStage().showFeedback("sim100Zapatos");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "mouseout", function(sym, e) {
         sym.stop("fin");
         sym.play("fin");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangle}", "mouseover", function(sym, e) {
         sym.stop("inicio");
         sym.play("inicio");
         

      });
            //Edge binding end

         })("sim100Zapatos");
   //Edge symbol end:'sim100Zapatos'

   //=========================================================
   
   //Edge symbol: 'simLetra3_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         this.deleteSymbol();

      });
               //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         mySoundAmbient.volume(0.25);
         mySound16.play();

      });
               //Edge binding end

            })("simLetra4");
   //Edge symbol end:'simLetra4'

   //=========================================================
   
   //Edge symbol: 'simSeleccion1_1'
   (function(symbolName) {   
   
      })("simFeedback");
   //Edge symbol end:'simFeedback'

   //=========================================================
   
   //Edge symbol: 'simFeed1'
   (function(symbolName) {   
   
   })("simFeed1");
   //Edge symbol end:'simFeed1'

   //=========================================================
   
   //Edge symbol: 'simFeed1_1'
   (function(symbolName) {   
   
   })("simFeed2");
   //Edge symbol end:'simFeed2'

   //=========================================================
   
   //Edge symbol: 'simFeed2_1'
   (function(symbolName) {   
   
   })("simFeed3");
   //Edge symbol end:'simFeed3'

   //=========================================================
   
   //Edge symbol: 'simFeed3_1'
   (function(symbolName) {   
   
   })("simFeed4");
   //Edge symbol end:'simFeed4'

   //=========================================================
   
   //Edge symbol: 'simFeed4_1'
   (function(symbolName) {   
   
   })("simFeed5");
   //Edge symbol end:'simFeed5'

   //=========================================================
   
   //Edge symbol: 'simFeed5_1'
   (function(symbolName) {   
   
   })("simFeed6");
   //Edge symbol end:'simFeed6'

   //=========================================================
   
   //Edge symbol: 'simFeed6_1'
   (function(symbolName) {   
   
   })("simFeed7");
   //Edge symbol end:'simFeed7'

   //=========================================================
   
   //Edge symbol: 'simFeed7_1'
   (function(symbolName) {   
   
   })("simFeed8");
   //Edge symbol end:'simFeed8'

   //=========================================================
   
   //Edge symbol: 'simTitle'
   (function(symbolName) {   
   
   })("simTitle");
   //Edge symbol end:'simTitle'

   //=========================================================
   
   //Edge symbol: 'simTitle1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         this.deleteSymbol();

      });
      //Edge binding end

   })("simTitle1");
   //Edge symbol end:'simTitle1'

   //=========================================================
   
   //Edge symbol: 'simTitle1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         this.deleteSymbol();

      });
      //Edge binding end

   })("simTitle2");
   //Edge symbol end:'simTitle2'

   //=========================================================
   
   //Edge symbol: 'simTitle2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         this.deleteSymbol();

      });
      //Edge binding end

   })("simTitle3");
   //Edge symbol end:'simTitle3'

   //=========================================================
   
   //Edge symbol: 'simTitle3_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         this.deleteSymbol();

      });
      //Edge binding end

   })("simTitle4");
   //Edge symbol end:'simTitle4'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'simMenu'
   (function(symbolName) {   
   
      

   })("simMenu");
   //Edge symbol end:'simMenu'

   //=========================================================
   
   //Edge symbol: 'simHome_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 150, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangulo}", "mouseover", function(sym, e) {
         sym.stop("start");
         sym.play("start");
         sym.$("atras_4_over").css("opacity","1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangulo}", "mouseout", function(sym, e) {
         sym.stop("medium");
         sym.play("medium");
         sym.$("atras_4_over").css("opacity","0");
         

      });
      //Edge binding end

   })("simSalir");
   //Edge symbol end:'simSalir'

   //=========================================================
   
   //Edge symbol: 'simHome'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangulo}", "mouseover", function(sym, e) {
         sym.stop("start");
         sym.play("start");
         sym.$("menu_1_over").css("opacity","1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangulo}", "mouseout", function(sym, e) {
         sym.stop("medium");
         sym.play("medium");
         sym.$("menu_1_over").css("opacity","0");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 150, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("simHome");
   //Edge symbol end:'simHome'

   //=========================================================
   
   //Edge symbol: 'simHome_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 150, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangulo}", "mouseover", function(sym, e) {
         sym.stop("start");
         sym.play("start");
         sym.$("sonido_3_over").css("opacity","1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangulo}", "mouseout", function(sym, e) {
         sym.stop("medium");
         sym.play("medium");
         sym.$("sonido_3_over").css("opacity","0");
         

      });
      //Edge binding end

   })("simSonido");
   //Edge symbol end:'simSonido'

   //=========================================================
   
   //Edge symbol: 'simHome_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 150, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangulo}", "mouseover", function(sym, e) {
         sym.stop("start");
         sym.play("start");
         sym.$("instruccion_2_over").css("opacity","1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invisibleRectangulo}", "mouseout", function(sym, e) {
         sym.stop("medium");
         sym.play("medium");
         sym.$("instruccion_2_over").css("opacity","0");
         

      });
      //Edge binding end

   })("simIntruccion");
   //Edge symbol end:'simIntruccion'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-475251853");