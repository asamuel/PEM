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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.$("backFirst").remove();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.setVariable("mySoundAmbient", 0);
         var valMp3=true, zoom, valPlayPause=true;
         
         //funciones globales 
         
         function getScaleStage () {	
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
         
         sym.$('backCre').css({'pointer-events':'none'});
         
         sym.getSymbol("simContent").getSymbol("simPortraitRight_1").$("Text4").html(
         "<a href='https://www.linkedin.com/in/ariash' target='_blank'>/ariash</a>");
         sym.getSymbol("simContent").getSymbol("simPortraitRight_1").$("linkedin").wrap(
         "<a href=\"https://www.linkedin.com/in/ariash\"  target='_blank'></a>" );
         
         sym.getSymbol("simContent").getSymbol("simPortrait3").$("Text4").html(
         "<a href='https://www.linkedin.com/in/samuelbz' target='_blank'>/samuelbz</a>");
         sym.getSymbol("simContent").getSymbol("simPortrait3").$("linkedin").wrap(
         "<a href=\"https://www.linkedin.com/in/samuelbz\"  target='_blank'></a>" );
         
         sym.getSymbol("simContent").getSymbol("simPortraitRight_2").$("Text4Copy").html(
         "<a href='https://www.linkedin.com/in/cortesdinarte' target='_blank'>/cortesdinarte</a>");
         sym.getSymbol("simContent").getSymbol("simPortraitRight_2").$("linkedinCopy").wrap(
         "<a href=\"https://www.linkedin.com/in/cortesdinarte\"  target='_blank'></a>" );
         
         sym.getSymbol("simContent").$('Text13').css({"font-size":"20px","font-family":"Arial, Helvetica, sans-serif ",
         "font-weight": "normal","text-align":"center"})
         sym.getSymbol("simContent").$("Text13").html(
         "\"Música de ambiente\" by <a href='https://www.jamendo.com' target='_blank'>Jamendo</a><br>Is licensed under CC BY 2.0​​ <br><br>"+
         "\"Música de ambiente\" by <a href='http://freemusicarchive.org' target='_blank'>Free Music Archive</a><br>Is licensed under CC BY 2.0​​<br><br>"+
         "\"Música de ambiente\" by <a href='http://www.bensound.com' target='_blank'>Bensound</a><br>Is licensed under CC BY 2.0");
         
         var oldString = 'Licencia Creative Commons Atribución – No Comercial – Sin Obra Derivada 4.0 Internacional.',
             newString = '<i><a href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">Licencia Creative Commons Atribución <br/>'+
             '– No Comercial – Sin Obra Derivada 4.0 Internacional.</a></i>',
             newText = sym.getSymbol("simContent").$('Text16').text().replace(RegExp(oldString,"gi"),newString);
         sym.getSymbol("simContent").$('Text16').css({"font-size":"20px"});
         sym.getSymbol("simContent").$('Text16').html(newText);
         
         
         
         
         var newString1 = 'Este material educativo se ha desarrollado<br>'+
             'con el apoyo de <a href="http://www.feyalegria.org.ni" target="_blank">Fe y Alegría Nicaragua</a> y<br>'+
             'la Universidad de Centroamericana<a href="http://www.uca.edu.ni" target="_blank"> UCA</a>';
         sym.getSymbol("simContent").$('Text14').css({"font-size":"20px"})
         sym.getSymbol("simContent").$('Text14').html(newString1);
         sym.getSymbol("simContent").$('feAlegriaLogo').wrap( "<a href=\"http://www.feyalegria.org.ni\"  target='_blank'></a>" );
         sym.getSymbol("simContent").$('ucaLogo2').wrap( "<a href=\"http://www.uca.edu.ni\"  target='_blank'></a>" );
         
         // A $( document ).ready() block.
         $( document ).ready(function() {
         	mySoundAmbient = new Howl({
         		urls: ['../media/bensoundSadDay.ogg','../media/bensoundSadDay.mp3'],
         		loop: true
         	});
         	mySoundAmbient.play();
         	mySoundAmbient.volume(0.75);
         });
         
         sym.getSymbol("simMenu").$("simSound").click(function() {
           if(valMp3){
         	 mySoundAmbient.stop();
         	 valMp3=false;
           }     
           else{
         	 mySoundAmbient.play();
         	 valMp3=true;
           }
         });
         
         sym.getSymbol("simMenu").$("simSound").mouseover(function() {
         	sym.getSymbol("simMenu").getSymbol("simSound").stop("start");
         	sym.getSymbol("simMenu").getSymbol("simSound").play("start");
         });
         
         sym.getSymbol("simMenu").$("simSound").mouseout(function() {
         	sym.getSymbol("simMenu").getSymbol("simSound").stop("end");
         });
         
         //Ir al menu anterior 
         sym.getSymbol("simMenu").$("simBack").click(function() {
         	putValue();
         });
         
         sym.getSymbol("simMenu").$("simBack").mouseover(function() {
         	sym.getSymbol("simMenu").getSymbol("simBack").stop("start");
         	sym.getSymbol("simMenu").getSymbol("simBack").play("start");
         });
         
         sym.getSymbol("simMenu").$("simBack").mouseout(function() {
         	sym.getSymbol("simMenu").getSymbol("simBack").stop("end");
         });
         
         sym.getSymbol("simMenu").$("simPlayPause").click(function() {
         	if(valPlayPause){
         		sym.getSymbol("simMenu").getSymbol("simPlayPause").stop("play");
         		sym.getSymbol("simMenu").getSymbol("simPlayPause").play("play");
         		sym.getSymbol("simContent").stop();
         		sym.getSymbol("simMenu").getSymbol("simPlayPauseOccul").$("Text").css({
         		"font-family":"Arial, Helvetica, sans-serif ","font-weight": "normal","font-size":"15px","color":"white"
         		,"text-align":"center","position": "absolute","top":"50%","left":"50%",
                "-ms-transform":"translate(-50%,-50%)","-webkit-transform":"translate(-50%,-50%)",
                "transform": "translate(-50%,-50%)"});
         		sym.getSymbol("simMenu").getSymbol("simPlayPauseOccul").$("Text").html("Reproducir");
         		valPlayPause=false;
         		}
         	else{
         		sym.getSymbol("simMenu").getSymbol("simPlayPause").stop("stop");
         		sym.getSymbol("simMenu").getSymbol("simPlayPause").play("stop");
         		sym.getSymbol("simContent").play();
         		sym.getSymbol("simMenu").getSymbol("simPlayPauseOccul").$("Text").css({
         		"font-family":"Arial, Helvetica, sans-serif ","font-weight": "normal","font-size":"15px","color":"white"});
         		sym.getSymbol("simMenu").getSymbol("simPlayPauseOccul").$("Text").html("Pausa");
         		valPlayPause=true;
         		}
         });
         
         sym.getSymbol("simMenu").$("simPlayPause").mouseover(function() {
         	sym.getSymbol("simMenu").getSymbol("simPlayPauseOccul").stop("start");
         	sym.getSymbol("simMenu").getSymbol("simPlayPauseOccul").play("start");
         });
         
         sym.getSymbol("simMenu").$("simPlayPause").mouseout(function() {
         	sym.getSymbol("simMenu").getSymbol("simPlayPauseOccul").stop("end");
         });
         
         function putValue () {  
            var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
         
            if(isIE){
              window.location.href="Menu2.html?indexCat=raz";           
            }
            else{
               localStorage.setItem("indexCat","raz");
               window.open("Menu2.html", "_self");
            }
              
         }       
         
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'simContent'
   (function(symbolName) {   
   
   })("simContent");
   //Edge symbol end:'simContent'

   //=========================================================
   
   //Edge symbol: 'simPortrait'
   (function(symbolName) {   
   
   })("simPortrait");
   //Edge symbol end:'simPortrait'

   //=========================================================
   
   //Edge symbol: 'simPortrait_1'
   (function(symbolName) {   
   
   })("simPortraitRight");
   //Edge symbol end:'simPortraitRight'

   //=========================================================
   
   //Edge symbol: 'simPortrait_1'
   (function(symbolName) {   
   
   })("simPortrait2");
   //Edge symbol end:'simPortrait2'

   //=========================================================
   
   //Edge symbol: 'simPortraitRight_1'
   (function(symbolName) {   
   
   })("simPortraitRight_1");
   //Edge symbol end:'simPortraitRight_1'

   //=========================================================
   
   //Edge symbol: 'simPortrait_1'
   (function(symbolName) {   
   
   })("simPortrait3");
   //Edge symbol end:'simPortrait3'

   //=========================================================
   
   //Edge symbol: 'simPortraitRight_2'
   (function(symbolName) {   
   
   })("simPortraitRight_2");
   //Edge symbol end:'simPortraitRight_2'

   //=========================================================
   
   //Edge symbol: 'simMenu'
   (function(symbolName) {   
   
   })("simMenu");
   //Edge symbol end:'simMenu'

   //=========================================================
   
   //Edge symbol: 'simPlayPause'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 400, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 800, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("simPlayPause");
   //Edge symbol end:'simPlayPause'

   //=========================================================
   
   //Edge symbol: 'simBack'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("simBack");
   //Edge symbol end:'simBack'

   //=========================================================
   
   //Edge symbol: 'simBack_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      })("simPlayPauseOccul");
   //Edge symbol end:'simPlayPauseOccul'

   //=========================================================
   
   //Edge symbol: 'simBack_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      })("simSound");
   //Edge symbol end:'simSound'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1252794692");