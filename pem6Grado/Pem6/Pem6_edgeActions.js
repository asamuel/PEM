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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.$("effect").remove();
         //sym.$("simCloud").css({"left":"1024px"});
         sym.$("simCloud").show();
         sym.getSymbol("simCloud").play();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         /*Variables super globales----------------------------------------------------------------------------------*/
         sym.setVariable("mySound1", 0);
         sym.setVariable("mySound2", 0);
         sym.setVariable("mySoundAmbient", 0);
         
         /*Variables globales-----------------------------------------------------------------------------------------*/
         var valMp3=true
         var myIntruccion=sym.getSymbol("simIntrucciones");
         var myWords=["Ana", "Juan", "Flora", "Ana", "Brenda","Carlos",
                  "Ana", "Juan", "Pedro", "Tim","Ana","Silvio"];
         var myOrders=["f", "m", "f", "f", "f","m",
                  "f", "m", "m", "m","f","m"];
         var uniqueArray=[0,1];
         
         /*Clases---------------------------------------------------------------------------------------------------*/
         
         /*Cargar---------------------------------------------------------------------------------------------------*/
         mySound1 = new Howl({
         	urls: ['media/noise.ogg','media/noise.mp3'],
            onend: function() {
               sym.getSymbol("simIntrucciones").play("int2");
           }
         });
         mySound2 = new Howl({
         	urls: ['media/Train_Honk_Horn.ogg','media/Train_Honk_Horn.mp3'],
         	 onend: function() {
             	mySoundAmbient.volume(0.5);
           }
         });
         
         /*Funciones Globales---------------------------------------------------------------------------------------*/
         sym.startShow = function  () {
         	console.log("the show beginning");
         	mySoundAmbient.volume(0.25);
         	mySound2.play();
         	sym.$("simTrain").show();
         	sym.getSymbol("simTrain").play();
         }
         
         sym.startShow2 = function  () {
         	if (myWords.length!=0){
         	putNames();
         	for(var i=0; i<3; i++){
         		var val=myOrders[i];
           	   if(val=="m"){
         			sym.getSymbol("simTrain").$("portrait"+(i+1)).html(
         			'<img src="images/male'+randomNoRepeat()+'.png" alt="Smiley face" height="143" width="121">');
         		}
           	    if(val=="f"){
           	   	sym.getSymbol("simTrain").$("portrait"+(i+1)).html(
         			'<img src="images/female.png" alt="Smiley face" height="143" width="121">');
           	   }
         	}	
         	for(var i=0; i<3; i++){
         		  myOrders.splice(0,1);
         	}
         
         	sym.getSymbol("simTrain").$("portrait4").html(
         			'<img id="imgQuestion" src="images/question.png" alt="Smiley face" height="73" width="53">');
         	sym.$("#imgQuestion").css({"position": "absolute","top":"50%","left":"50%","-ms-transform":"translate(-50%,-50%)",
            "-webkit-transform":"translate(-50%,-50%)","-moz-transform":"translate(-50%,-50%)",
            "transform": "translate(-50%,-50%)"});
         
            sym.getSymbol("simTrain").$("portrait1").delay(300).show("slow");
            sym.getSymbol("simTrain").$("portrait2").delay(600).show("slow");
            sym.getSymbol("simTrain").$("portrait3").delay(900).show("slow");
            sym.getSymbol("simTrain").$("portrait4").delay(1200).show("slow");
            }
            else
            	sym.$("next").addClass('fired');
         }
         
         sym.addEventInstruccion = function  () {
         	sym.getSymbol("simMenu").$("simIntruccion3").click(function() {
         		mySoundAmbient.volume(0.25);
         		mySound1.play();
         		bootbox.dialog({
         		  message: "<h4 style='font-family=Arial, Helvetica, sans-serif'>"+
         		  "¡Necesitamos tu ayuda!. <br><br>"+
         		  "¿Qué pasajero debe de abordar el tren?"+
         		  " Arrastra la imagen y escribe su nombre en el cuadro de texto. </h4>",
         		  title: "<h2 style='font-family=Arial, Helvetica, sans-serif'>Instrucciones<h2>",
         		  closeButton:false,
         		  buttons: {
         			 main: {
         				label: "Aceptar!",
         				className: "btn-primary",
         				callback: function() {
         					 mySound1.stop();
         					 mySoundAmbient.volume(0.5);
         				}
         			 }
         		  }
         		});
         	});
         }
         
         /*Llamados a funciones y css-------------------------------------------------------------------------------*/ 
         styleAndOther();
         addLabel();
         drawTextArea();
         addTooltipNext();
         
         /*Funciones Locales---------------------------------------------------------------------------------------*/
         function styleAndOther(){
         	sym.$("simCloud").hide();
         	sym.$("simTrain").hide();
         	sym.$("simLabel").hide();
         	sym.$("simTooltip").hide();
         	sym.getSymbol("simTrain").$("cuadroInte").css({"overflow":"hidden","text-align":"center","cursor":"pointer"});
         	sym.getSymbol("simTrain").$("cuadroInte").html('<div id="myDivCuadroInter"></div>');
         	for(var i=0; i<4; i++){
         	sym.getSymbol("simTrain").$("portrait"+(i+1)).hide();
         	sym.$("next").addClass("fired");
         	}
         }
         function addLabel(){
         	console.log("gfdfg");
         	 sym.getSymbol("simLabel").$("text1").append('<p id="myP1" class="myPclass"><i>Null</i></p>');
         	 sym.getSymbol("simLabel").$("text2").append('<p id="myP2" class="myPclass"><i>Null</i></p>');
         	 sym.getSymbol("simLabel").$("text3").append('<p id="myP3" class="myPclass"><i>Null</i></p>');
         	 sym.$(".labelClass").css({"padding-top":"8px","color" : "black", "text-align": "center", "vertical-align": "middle"});
         	 sym.$(".myPclass").css({"color" : "black", "font-family":"Arial, Helvetica, sans-serif","font-weight": "normal","font-size":"24px"});
         	 sym.$(".myPclass").css({"text-shadow": "0 0 0.9em white, 0 0 0.9em #87F, 0 0 0.9em #87F"});
         }
         function drawTextArea(){
         	var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
         	// Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
         	var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
         	var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
         	var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
         	var myTextArea='<textarea id="myT" style="color:black;" placeholder="?.?.?"></textarea>';
         	var hDiv=sym.getSymbol("simLabel").$("text4").height();
         	var wDiv=sym.getSymbol("simLabel").$("text4").width();
         	sym.getSymbol("simLabel").$("text4").append(myTextArea);
         	if(isOpera){
         	 jss.set('::-webkit-input-placeholder ', {
         	 'color': 'black',
         	 'text-align': 'center',
         	 'font-style': 'italic'
         	 });
         	}
         	if(isChrome){
         	 jss.set('::-webkit-input-placeholder ', {
         	 'color': 'black',
         	 'text-align': 'center',
         	 'font-style': 'italic'
         	 });
         	}
         	if(isFirefox){
         	 jss.set(':-moz-placeholder', {
         	 'color': 'black',
         	 'text-align': 'center'
         	 });
         	 jss.set('::-moz-placeholder', {
         	 'color': 'black',
         	 'text-align': 'center'
         	 });
         	}
         	if(isIE){
         	 jss.set(':-ms-input-placeholder', {
         	 'color': 'black',
         	 'text-align': 'center'
         	 });
         	}
         	sym.$("#myT").css({"color" : "black", "font-style": "bold", "width": wDiv, "height": hDiv});
         	sym.$("#myT").css({"padding-top":"8px","color" : "black", "text-align": "center", "vertical-align": "middle"});
         	sym.$("#myT").css({"background-color": "rgba(225,225,225,0.0", "resize": "none"});
         	sym.$("#myT").css({"font-size":"24px", "text-shadow": "0 0 0.9em white, 0 0 0.9em #87F, 0 0 0.9em #87F"});
         	sym.$("#myT").css({"position": "absolute","top":"50%","left":"50%","-ms-transform":"translate(-50%,-50%)",
         	"-webkit-transform":"translate(-50%,-50%)","-moz-transform":"translate(-50%,-50%)",
         	"transform": "translate(-50%,-50%)"});
         }
         
         function putNames(){
         
         	for(var i=0; i<3; i++){
         		 var val=myWords[i];
         		 sym.$("#myP"+(i+1)).html("<i>"+val+"</i>")
         	}
         	for(var i=0; i<3; i++){
         		  myWords.splice(0,1);
         	}
         }
         
         function randomNoRepeat () {
         	//Llenamos el arreglo
         	if (uniqueArray.length==0){
         	  for (var i = 0; i < 2; i++) {
         		 uniqueArray.push(i);
         	  };
         	}
         	var index=Math.floor(Math.random()*uniqueArray.length);
         	var val=uniqueArray[index];
         	uniqueArray.splice(index,1);
         	return (val+1)
         }
         
         function addTooltipNext(){
         	sym.$('next').sBubble({
         		  content: 'Siguientes palabras!',
         		  position: 'top',
         		  height: 30,
         		  width: 150,
         		  theme: 'black'
         	});
         }
         /*Eventos--------------------------------------------------------------------------------------------------*/
         // A $( document ).ready() block.
         $( document ).ready(function() {
         	mySoundAmbient = new Howl({
         		 urls: ['media/happyUkelele.ogg','media/happyUkelele.mp3'],
         		 loop: true
         	});
         	mySoundAmbient.play();
         	mySoundAmbient.volume(0.5);
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
         	window.location.href="../Menu2.html?indexCat=imag";            
         }
         else{
         	localStorage.setItem("indexCat","imag");
         	window.open("../Menu2.html", "_self");
         }  
         }
         sym.$("next").click(function() {
         	if(sym.$("next").hasClass('fired') == false)
         	{console.log("nextClick");
         		sym.startShow2();}
         });
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'simCloud'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 72500, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

   })("simCloud");
   //Edge symbol end:'simCloud'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'simMenu'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${simIntruccion3}", "click", function(sym, e) {
         

      });
      //Edge binding end

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

   //=========================================================
   
   //Edge symbol: 'simIntrucciones'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();
         mySoundAmbient.volume(0.25);
         mySound1.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.getComposition().getStage().addEventInstruccion();
         sym.getComposition().getStage().startShow();
         mySoundAmbient.volume(0.5);
         this.deleteSymbol();

      });
      //Edge binding end

   })("simIntrucciones");
   //Edge symbol end:'simIntrucciones'

   //=========================================================
   
   //Edge symbol: 'simTrain'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.getComposition().getStage().startShow2();
         sym.getComposition().getStage().$("simLabel").show("slow");
         sym.getComposition().getStage().getSymbol("simTrain").$("#myDivCuadroInter").addClass("mydivCuadra");
         sym.getComposition().getStage().$("simTooltip").delay(1000).show("slow",
         function(){sym.getComposition().getStage().getSymbol("simTooltip").play();
         sym.getComposition().getStage().$("next").removeClass("fired");});
         

      });
      //Edge binding end

   })("simTrain");
   //Edge symbol end:'simTrain'

   //=========================================================
   
   //Edge symbol: 'simLabel'
   (function(symbolName) {   
   
   })("simLabel");
   //Edge symbol end:'simLabel'

   //=========================================================
   
   //Edge symbol: 'simTooltip'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2400, function(sym, e) {
         sym.getComposition().getStage().$("simTooltip").hide('slow',
         function(){sym.getComposition().getStage().$("simTooltip").remove();});

      });
      //Edge binding end

   })("simTooltip");
   //Edge symbol end:'simTooltip'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-250268");