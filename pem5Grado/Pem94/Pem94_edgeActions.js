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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.getSymbol("simNube").play();
      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         //Declaramos variables globales
         sym.setVariable("myArrayGhost", 0);
         sym.setVariable("myArrayCont", 0);
         sym.setVariable("uniqueArray", 0);
         sym.setVariable("word3", 0);
         sym.setVariable("word4", 0);
         sym.setVariable("word5", 0);
         sym.setVariable("cant", 0);
         sym.setVariable("mySound1", 0);
         sym.setVariable("mySound2", 0);
         sym.setVariable("mySound3", 0);
         myArrayGhost=[];
         myArrayCont=[];
         uniqueArray=[];
         myWordSelected=[];
         //Prototype de la clase wordSelected
         function wordSelected(myWordSelected, feedback) {
         	 this.myWordSelected = myWordSelected;
         	 this.feedback = feedback;
         }
         word3=["sal", "oso", "uva", "bus", "Ana", "sol", "uña", "tío", "sur", "ojo", "año", "ajo", "paz", "fin", "luz"];
         word4=["alma","amor","agua","gato","baul","arte","luna","Dios","flor","casa","hoja","aire","pino","león","lobo"];
         word5=["barco","ábaco","lluvia","salud","hueso","zuela","verde","tigre","fuego","enero","libro","mixto","nieve","dulce","oasis"];
         cant=0;
         var myWord, myTime, valMp3=true; 
         
          //Funciones globales
         sym.startShow = function  () {
         	myArrayGhost=[];
         	myArrayCont=[];
         	uniqueArray=[];
         	cant=0
         	cant=getCant(3,5);
         	for(var i=0;i<cant; i++){
         		myArrayGhost.push("simGhost"+getGhost(3));
         	}
         	createGhost(cant);	
         }
         sym.addEventInstruccion = function  () {
         	sym.getSymbol("simMenu").$("simIntruccion3").click(function() {
         		mySound3.volume(0.25);
         		mySound2.play();
         		bootbox.dialog({
         		  message: "<h4 style='font-family=Arial, Helvetica, sans-serif'>"+
         		  "Observa las letras que aparecerán y forma palabras. Escríbelas en el espacio que está abajo."+"</h4>",
         		  title: "<h2 style='font-family=Arial, Helvetica, sans-serif'>Instrucciones<h2>",
         		  closeButton:false,
         		  buttons: {
         			 main: {
         				label: "Aceptar!",
         				className: "btn-primary",
         				callback: function() {
         					 mySound2.stop();
         					 mySound3.volume(0.5);
         				}
         			 }
         		  }
         		});
         	});
         }
        $( document ).ready(function() {
          mySound3 = new Howl({
                urls: ['media/seastock_Groovy_Ukulele.ogg','media/seastock_Groovy_Ukulele.mp3'],
                loop: true,
                onend: function() {
                }
            });
            mySound3.play();
            mySound3.volume(0.5);
          });

         
         //Cargar audio 
         mySound1 = new Howl({
           urls: ['media/pem94_1.ogg','media/pem94_1.mp3'],
            onend: function() {
               sym.getSymbol("simIntrucciones").play("end");
           }
         });
         mySound2 = new Howl({
           urls: ['media/pem94_1.ogg','media/pem94_1.mp3'],
            onend: function() {
           }
         });
         
         sym.getSymbol("simMenu").$("simSonido").click(function() {
         	if(valMp3){
         		mySound3.stop();
         		valMp3=false;
         	}		
         	else{
         		mySound3.play();
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
              window.location.href="../Menu2.html?indexCat=raz";           
            }
            else{
              localStorage.setItem("indexCat","raz");
              window.open("../Menu2.html", "_self");
            }
              
         }
         
         function createGhost(cant){
         	myArrayString=[];
         	for(var i=0;i<cant; i++){
         		myArrayCont.push(sym.createChildSymbol(myArrayGhost[i], "simContainer").getSymbolElement());
         	}
         	if(cant==3){
         		myArrayCont[0].css({"position": "absolute", "top" : "650px", "left":'80px' });
         		myArrayCont[1].css({"position": "absolute", "top" : "650px", "left":'480px' });
         		myArrayCont[2].css({"position": "absolute", "top" : "650px", "left":'800px' });
         		myWord=getWord(word3, "arrayWord3");
         		myArrayString=myWord.split("");
         	}
         	if(cant==4){
         		myArrayCont[0].css({"position": "absolute", "top" : "650px", "left":'80px' });
         		myArrayCont[1].css({"position": "absolute", "top" : "650px", "left":'300px' });
         		myArrayCont[2].css({"position": "absolute", "top" : "650px", "left":'600px' });
         		myArrayCont[3].css({"position": "absolute", "top" : "650px", "left":'800px' });
         		myWord=getWord(word4, "arrayWord4");
         		myArrayString=myWord.split("");
         	}
         	if(cant==5){
         		myArrayCont[0].css({"position": "absolute", "top" : "650px", "left":'80px' });
         		myArrayCont[1].css({"position": "absolute", "top" : "650px", "left":'230px' });
         		myArrayCont[2].css({"position": "absolute", "top" : "650px", "left":'430px' });
         		myArrayCont[3].css({"position": "absolute", "top" : "650px", "left":'630px' });
         		myArrayCont[4].css({"position": "absolute", "top" : "650px", "left":'850px' });
         		myWord=getWord(word5, "arrayWord5");
         		myArrayString=myWord.split("");
         	}
         
         	for(var i=0;i<cant; i++){
         		sym.getSymbol("simContainer").getSymbol(myArrayCont[i]).play();
         		sym.getSymbol("simContainer").getSymbol(myArrayCont[i]).$("text1").css({
         		"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold","text-align":"center",
         		"font-size":"32px", "color":"#fff"});
         		sym.getSymbol("simContainer").getSymbol(myArrayCont[i]).$("text1").html(myArrayString[randomNoRepeat(cant)]);
         	}
         }
         
         
         function getCant(min, max) {
             return Math.floor(Math.random() * (max - min + 1)) + min;
         }
         
         function getGhost(cant) {
             return Math.floor((Math.random() * cant) + 1);
         }
         
         function randomNoRepeat (num) {
         	if (uniqueArray.length==0){
         	for (var i = 0; i < num; i++) {
         		uniqueArray.push(i);
         	};
          }
         	var index=Math.floor(Math.random()*uniqueArray.length);
         	var val=uniqueArray[index];
         	uniqueArray.splice(index,1);
         	return val
         }
         
         function getWord (indexArray, arrayWord) {
         	if (indexArray.length==0){
         		if(arrayWord=="arrayWord3")
         			indexArray=["sal", "oso", "uva", "bus", "Ana", "sol", "uña", "tío", "sur", "ojo", "año", "ajo", "paz", "fin", "luz"];
         		if(arrayWord=="arrayWord4")
         			indexArray=["alma","amor","agua","gato","baul","arte","luna","Dios","flor","casa","Hoja","aire","pino","león","lobo"];
         		if(arrayWord=="arrayWord5")
         			indexArray=["barco","ábaco","lluvia","salud","hueso","zuela","verde","tigre","fuego","enero","libro","mixto","nieve","dulce","oasis"];
         	}
         	var index=Math.floor(Math.random()*indexArray.length);
         	var val=indexArray[index];
         	indexArray.splice(index,1);
         	return val
         }
         
         drawTextArea();
         drawButton();
         
         function drawTextArea(){
          var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
          var hDiv1=sym.$("divTextArea").height();
          var wDiv1=sym.$("divTextArea").width();
           // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
          var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
          var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
          var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
          var myTextArea='<textarea id="myT" style="color:black;" placeholder="Escribe aquí.."></textarea>';
          sym.$("divTextArea").html(myTextArea);
          if(isOpera){
         	 jss.set('::-webkit-input-placeholder ', {
         	 'color': 'black',
         	 'text-align': 'center',
         	 'font-style': 'italic',
         	 });
          }
          if(isChrome){
         	 jss.set('::-webkit-input-placeholder ', {
         	 'color': 'black',
         	 'text-align': 'center',
         	 'font-style': 'italic',
         	 });
          }
          if(isFirefox){
         	 jss.set(':-moz-placeholder', {
         	 'color': 'black',
         	 'text-align': 'center',
         	 'font-style': 'italic',
         	 });
         	 jss.set('::-moz-placeholder', {
         	 'color': 'black',
         	 'text-align': 'center',
         	 'font-style': 'italic',
         	 });
          }
          if(isIE){
         	 jss.set(':-ms-input-placeholder', {
         	 'color': 'black',
         	 'text-align': 'center',
         	 'font-style': 'italic',
         	 });
          }
         
          sym.$("#myT").css({"color" : "black", "font-style": "bold", "width": wDiv1, "height": hDiv1});
          sym.$("#myT").css({"background-color": "rgba(225,225,225,0.8", "resize": "none"});
          sym.$("#myT").css({"font-size": "200%", "text-shadow": "0 0 0.9em white, 0 0 0.9em #87F, 0 0 0.9em #87F"});
          sym.$("#myT").css({"text-align":"center"});
          //sym.$("#myT").css({"position": "absolute","top":"50%","left":"50%","transform": "translate(-50%,-50%)"});
         }
         
         function drawButton(){
         	var myButton='<a href="#" id="myNext" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-chevron-right"></span> Siguiente!</a>';
         	var myButton2='<a href="#" id="myView" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-eye-open"></span> Ver!</a>';
         	//Agregar tooltip
         	sym.$('containerButton').sBubble({
                 content: 'Siguiente Palabra!',
                 position: 'top',
                 height: 30,
                 width: 150,
                 theme: 'black'
          	});
          	sym.$('containerButton2').sBubble({
                 content: 'Ver Resultados!',
                 position: 'top',
                 height: 30,
                 width: 150,
                 theme: 'black'
          	});
         	sym.$("containerButton").html(myButton);
         	sym.$("containerButton2").html(myButton2);
         	sym.$("#myNext").addClass('fired');
          	runTimer(25000);
         }
         
         //Funciones de click de los botones
         sym.$( "#myNext" ).bind( "click", function() {
         	nextWord();
          });
          
         sym.$( "#myT" ).keypress(function (event) {
         	if(event.keyCode == 10 || event.keyCode == 13)  // the enter key code
         	{
         		if(sym.$("#myNext").hasClass('fired') == false){
         			nextWord();
         			return false;  
         		}
         			
         		else
         			 event.preventDefault();
         	}
         });
          
         sym.$( "#myView" ).bind( "click", function() {
         	var myTable="<table class='table'>"+
         		"<thead>"+
         			"<tr>"+
         			  "<th>Palabra Generada</th>"+
         			  "<th>Palabra Escrita</th>"+
         			"</tr>"+
         		 "</thead>";
         
         	for(var i=0; i<myWordSelected.length; i++){
         		myTable+="<tbody>"+
         			"<tr class='success'>"+
         			  "<td>"+myWordSelected[i].myWordSelected+"</td>"+
         			  "<td>"+myWordSelected[i].feedback+"</td>"+
         			"</tr>";
         	}
         	myTable+="</tbody>"+
                  "</table>";
            showFeedback (myTable)
          });
         
         function runTimer(interval){
         	//Timer en javaScript
         	myTime = setInterval(function(){myTimer()},interval)
         }
         
         function myTimer() {
         	clearInterval(myTime); //limpiar cronometro
         	sym.$("#myNext").removeClass('fired');  
          }
         
         function showFeedback (myTable) {
           var box = bootbox.dialog({
           message: myTable,
           title: "¡Resultados!",
           closeButton:false,
           buttons: {
            main: {
             label: "Aceptar!",
             className: "btn-primary",
             callback: function() {
             }
            }
           }
           });
         }
         
         function nextWord(){
         	var myMosaicosSelect1, feedBack=sym.$("#myT").val();
         	if(feedBack!="" && sym.$("#myNext").hasClass('fired') == false){
         		sym.$("#myNext").addClass('fired');
         		runTimer(13000);
         		myClassTemp = new wordSelected(myWord, feedBack);
               myWordSelected.push(myClassTemp);
         		sym.$("#myT").val("");
         		sym.$("simContainer").children().remove();
         		sym.startShow();
         	}
         }
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'simNube'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 75000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simNube");
   //Edge symbol end:'simNube'

   //=========================================================
   
   //Edge symbol: 'simContainer'
   (function(symbolName) {   
   
   })("simContainer");
   //Edge symbol end:'simContainer'

   //=========================================================
   
   //Edge symbol: 'simGhost1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simGhost1");
   //Edge symbol end:'simGhost1'

   //=========================================================
   
   //Edge symbol: 'simGhost1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simGhost2");
   //Edge symbol end:'simGhost2'

   //=========================================================
   
   //Edge symbol: 'simGhost1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simGhost3");
   //Edge symbol end:'simGhost3'

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

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'simIntrucciones'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.stop();
         mySound3.volume(0.25);
         mySound1.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.getComposition().getStage().addEventInstruccion();
         sym.getComposition().getStage().startShow();
         mySound3.volume(0.5);
         this.deleteSymbol();

      });
      //Edge binding end

   })("simIntrucciones");
   //Edge symbol end:'simIntrucciones'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-586994922");