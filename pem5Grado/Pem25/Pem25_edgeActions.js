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
         //Declaramos variables globales
         sym.setVariable("mySound1", 0);
         sym.setVariable("mySound2", 0);
         sym.setVariable("mySound3", 0);
         sym.setVariable("mySoundAmbient", 0);
         sym.setVariable("position", 0);
         sym.setVariable("cont", 0);
         position=0,cont=0;
         var myTime=0, valMp3=true;

         sym.myStartTimer = function  (interval, index) {	
         		 myTime = setInterval(function(){myTimer(index)},interval)
         }
         
         sym.getScaleStage = function  () {	
            var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
            // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
            var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
            var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
            var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
         
            if(isOpera){
            var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/,
            matches = sym.$("stage").css('-webkit-transform').match(matrixRegex);
            }
            if(isChrome){
            var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/,
            matches = sym.$("stage").css('-webkit-transform').match(matrixRegex);
            }
            if(isFirefox){
            var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/,
            matches = sym.$("stage").css('-moz-transform').match(matrixRegex);
            }
            if(isIE){
            var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/,
            matches = sym.$("stage").css('-ms-transform').match(matrixRegex);
            }
            return matches[1];
         }
         sym.addEventIntrucciones = function  () {
         	sym.getSymbol("simMenu").$("simIntruccion3").click(function() {
         	mySound3.stop();
         	mySoundAmbient.volume(0.25);
         	mySound3.play();
         	bootbox.dialog({
         	  message: "<h4 style='font-family=Arial, Helvetica, sans-serif'>"+
         	  "Ayuda a Juan a recoger sus útiles escolares, ubicando "+
         	  "aquellos elementos similares en cada canasta. "+
         	  "<br><br>"+"Al final cuenta los elementos y escribe el dato en el cuadro de texto.</h4>",
         	  title: "<h2 style='font-family=Arial, Helvetica, sans-serif'>Instrucciones<h2>",
         	  closeButton:false,
         	  buttons: {
         		 main: {
         			label: "Aceptar!",
         			className: "btn-primary",
         			callback: function() {
         				 mySoundAmbient.volume(0.5);
         				 mySound3.stop();
         			}
         		 }
         	  }
         	});
         
          });
         }
         
         sym.activateSymbols = function  () {	
         	sym.getSymbol("simNubes").play();
         	//sym.$("simDragDrop").css({"top":"38px"});
         	sym.$("simDragDrop").css({"opacity":"1"});
         	sym.getSymbol("simDragDrop").play();
         }
         
         sym.myStartTimer (5000,"simImagen1");
         
         function myTimer(index) {
         	sym.getSymbol(index).play();
         	clearInterval(myTime);
         	//sym.myStartTimer (4000);
         }
         sym.changeLetras = function  (index) {	
         	sym.getSymbol("simLetras").play(index);
         }
         
         //Cargar audio 
         mySound1 = new Howl({
           urls: ['media/pem25_1.ogg','media/pem25_1.mp3'],
            onend: function() {
               sym.getSymbol("simLetras").play("end");
               mySoundAmbient.volume(0.5);
           }
         });
         
         mySound2 = new Howl({
           urls: ['media/pem25_2.ogg','media/pem25_2.mp3'],
            onend: function() {
               sym.getSymbol("simLetras").play("end1");
               mySoundAmbient.volume(0.5);
           }
         });
         
         mySound3 = new Howl({
           urls: ['media/pem25_3.ogg','media/pem25_3.mp3'],
            onend: function() {
               sym.getSymbol("simLetras").play("end2");
               mySoundAmbient.volume(0.5);
           }
         });
         
         $( document ).ready(function() {
            mySoundAmbient = new Howl({
              urls: ['media/bensound_littleidea.ogg','media/bensound_littleidea.mp3'],
              loop: true,
              onend: function() {
              }
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

         
         sym.$("simDragDrop").css({"opacity":"0"});

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

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
   
   //Edge symbol: 'simImagen1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.getComposition().getStage().myStartTimer(2000,"simImagen2");
         this.deleteSymbol();

      });
      //Edge binding end

   })("simImagen1");
   //Edge symbol end:'simImagen1'

   //=========================================================
   
   //Edge symbol: 'simLetras'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         mySoundAmbient.volume(0.25);
         mySound1.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();
         sym.$("Text").remove();
         sym.$("Rectangle2").remove();
         sym.$("Rectangle").remove();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13173, function(sym, e) {
         mySoundAmbient.volume(0.25);
         mySound3.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30750, function(sym, e) {
         sym.stop();
         sym.$("Text3").remove();
         sym.$("Rectangle6").remove();
         sym.$("Rectangle5").remove();
         sym.getComposition().getStage().addEventIntrucciones();
         sym.getComposition().getStage().activateSymbols();
         this.deleteSymbol();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10250, function(sym, e) {
         sym.stop();
         sym.$("Text2").remove();
         sym.$("Rectangle4").remove();
         sym.$("Rectangle3").remove();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6250, function(sym, e) {
         mySoundAmbient.volume(0.25);
         mySound2.play();

      });
      //Edge binding end

   })("simLetras");
   //Edge symbol end:'simLetras'

   //=========================================================
   
   //Edge symbol: 'simImagen2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.getComposition().getStage().myStartTimer(2000,"simImagen3");
         this.deleteSymbol();

      });
      //Edge binding end

   })("simImagen2");
   //Edge symbol end:'simImagen2'

   //=========================================================
   
   //Edge symbol: 'simImagen3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.getComposition().getStage().myStartTimer(10000,"simImagen4");
         sym.getComposition().getStage().changeLetras("start1");
         this.deleteSymbol();

      });
      //Edge binding end

   })("simImagen3");
   //Edge symbol end:'simImagen3'

   //=========================================================
   
   //Edge symbol: 'simImagen4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.getComposition().getStage().myStartTimer(2000,"simImagen5");
         this.deleteSymbol();

      });
      //Edge binding end

   })("simImagen4");
   //Edge symbol end:'simImagen4'

   //=========================================================
   
   //Edge symbol: 'simImagen5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.getComposition().getStage().myStartTimer(2000,"simImagen6");
         this.deleteSymbol();

      });
      //Edge binding end

   })("simImagen5");
   //Edge symbol end:'simImagen5'

   //=========================================================
   
   //Edge symbol: 'simImagen6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.getComposition().getStage().changeLetras("start2");
         this.deleteSymbol();

      });
      //Edge binding end

   })("simImagen6");
   //Edge symbol end:'simImagen6'

   //=========================================================
   
   //Edge symbol: 'simNubes'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22863, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simNubes");
   //Edge symbol end:'simNubes'

   //=========================================================
   
   //Edge symbol: 'simDragDrop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         var position=0;
         var click = {
         	 x: 0,
         	 y: 0
         }
         
         sym.$('Pem25_1').css({'pointer-events':'none'});
         sym.$('Pem25_0').css({'pointer-events':'none'});
         sym.$('Pem25_2').css({'pointer-events':'none'});
         
         sym.$(".draggable").draggable({
         	opacity:.5,
         	revert : function(event, ui) {
         	// on older version of jQuery use "draggable"
         	// $(this).data("draggable")
         	// on 2.x versions of jQuery use "ui-draggable"
         	// $(this).data("ui-draggable")
         	var zoom=sym.getComposition().getStage().getScaleStage(); 
         	//sym.$("cuadrado").css({"top" : positionTop+"px", "left": positionLeft+"px"});
         	sym.$(this).data("ui-draggable").originalPosition = {
         		 top :  position.top/zoom,
         		 left : position.left/zoom
         	};
         	// return boolean
         	return !event;
         	// that evaluate like this:
         	// return event !== false ? false : true;
         	}
         });
         
         sym.$('.draggable').on('dragstart',function(event,ui){
         	scaleFactor=sym.getComposition().getStage().getScaleStage();
         	click.x = event.clientX;
         	click.y = event.clientY;
         	var p = sym.$(this);
         	position = p.position();
         })
         
         sym.$('.draggable').on('drag',function(event,ui){
         	var zoom=sym.getComposition().getStage().getScaleStage();
         	var original = ui.originalPosition;
         
         	ui.position = {
         		left: (event.clientX - click.x + original.left) / zoom,
         		top:  (event.clientY - click.y + original.top ) / zoom
         	};
         })
         
         sym.$('.draggable').on('dragend',function(event,ui){
         	click.x = 0;
         	click.y = 0;
         })
         
         sym.$('.drop_zone').droppable({
         	tolerance: 'pointer',
         	accept: ".draggable"
          });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.$("Pem25_102").remove();
         sym.$("Pem25_112").remove();
         sym.$("Pem25_3").remove();
         sym.$("Pem25_4").remove();
         sym.$("Pem25_5").remove();
         sym.$("Pem25_6").remove();
         sym.$("Pem25_7").remove();
         sym.$("Pem25_8").remove();
         sym.$("Pem25_9").remove();
         
         var myInput1="<input placeholder='' type='number'  id=input1>";
         sym.$("divInput1").html(myInput1);
         var hDiv=sym.$("divInput1").height();
         var wDiv=sym.$("divInput1").width();
         sym.$("#input1").css({"width":wDiv/1.4+"px","background-color":"white","font-size":"32px", "height":hDiv/1.4+"px", "margin": "0 auto"});
         sym.$("#input1").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold"});
         sym.$("#input1").css({"text-align":"center", "color":"black","position": "absolute",
            "top":"50%","left":"50%","-ms-transform":"translate(-50%,-50%)","-webkit-transform":"translate(-50%,-50%)",
            "-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});


         var myInput2="<input placeholder='' type='number'  id=input2>";
         sym.$("divInput2").html(myInput2);
         hDiv=sym.$("divInput2").height();
         wDiv=sym.$("divInput2").width();
         sym.$("#input2").css({"width":wDiv/1.4+"px","background-color":"white","font-size":"32px", "height":hDiv/1.4+"px", "margin": "0 auto"});
         sym.$("#input2").css({"font-family":"Arial, Helvetica, sans-serif ","font-weight": "bold"});
         sym.$("#input2").css({"text-align":"center", "color":"black","position": "absolute",
            "top":"50%","left":"50%","-ms-transform":"translate(-50%,-50%)","-webkit-transform":"translate(-50%,-50%)",
            "-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         
         var myInput3="<input placeholder='' type='number'  id=input3>";
         sym.$("divInput3").html(myInput3);
         hDiv=sym.$("divInput3").height();
         wDiv=sym.$("divInput3").width();
         sym.$("#input3").css({"width":wDiv/1.4+"px","background-color":"white","font-size":"32px", "height":hDiv/1.4+"px", "margin": "0 auto"});
         sym.$("#input3").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold"});
         sym.$("#input3").css({"text-align":"center", "color":"black","position": "absolute",
            "top":"50%","left":"50%","-ms-transform":"translate(-50%,-50%)","-webkit-transform":"translate(-50%,-50%)",
            "-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});

      });
      //Edge binding end

      

   })("simDragDrop");
   //Edge symbol end:'simDragDrop'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-172432891");