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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.getSymbol("simBat").play();
         sym.getSymbol("simShootingS_1").play();
         sym.getSymbol("simShootingS_2").play();
         sym.getSymbol("simAstro").play();
         sym.$("simIntrucciones").css({"left":"68px"});
         sym.getSymbol("simIntrucciones").play();
         sym.$("simAstro").css({"left":"722px"});

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
          //Declaramos variables globales
          sym.setVariable("mySound1", 0);
          sym.setVariable("mySound2", 0);
          sym.setVariable("mySound3", 0);
          sym.setVariable("mySound4", 0);
          
          sym.$("simAstro").css({"left":"2000px"});
          sym.$("simIntrucciones").css({"left":"-2000px"});
          var cont1=0, cont2=0, cont3=0, cont4=0, cont5=0, valMp3=true;
          var myArray=["scene_3", "scene_5", "scene_1", "scene_4", "scene_2"];
          
          var hDiv=sym.getSymbol("simBlock3").$("").height();
          var wDiv=sym.$("divInput1").width();
          var hDiv1=sym.$("divTextArea").height();
          var wDiv1=sym.$("divTextArea").width();
          
          //Declarar e implementar funciones globales 
          sym.ChangeImage = function  (index, sim) {
          	var s1= sym.getSymbol(sim).$("containerImage");
          	var s=sym.getSymbol(sim).$("containerImage")[0]; 
          	 if(index==0){
          		//before image
          		switch (sim) {
          			case 'simBlock1': 
          								if(cont1!=0 && cont1!=1){
          									cont1--;
          									cont1--;
          									nextBeforeImage(cont1, s1, s, index);
          									cont1++;
          								}
          								break;
          			case 'simBlock2': 
          								if(cont2!=0 && cont2!=1){
          									cont2--;
          									cont2--;
          									nextBeforeImage(cont2, s1, s, index);
          									cont2++;
          								}
          								break;
          			case 'simBlock3': 
          								if(cont3!=0 && cont3!=1){
          									cont3--;
          									cont3--;
          									nextBeforeImage(cont3, s1, s, index);
          									cont3++;
          								}
          								break;
          			case 'simBlock4': 
          								if(cont4!=0 && cont4!=1){
          									cont4--;
          									cont4--;
          									nextBeforeImage(cont4, s1, s, index);
          									cont4++;
          								}
          								break;
          			case 'simBlock5': 
          								if(cont5!=0 && cont5!=1){
          									cont5--;
          									cont5--;
          									nextBeforeImage(cont5, s1, s, index);
          									cont5++;
          								}
          								break;
          		}
          	 }
          	 if(index==1){
          		//next image
          		switch (sim) {
          			case 'simBlock1': 
          								if(cont1!=5){
          									nextBeforeImage(cont1, s1, s, index);
          									cont1++;
          								}
          								break;
          			case 'simBlock2': 
          								if(cont2!=5){
          									nextBeforeImage(cont2, s1, s, index);
          									cont2++;
          								}
          								break;
          			case 'simBlock3': 
          								if(cont3!=5){
          									nextBeforeImage(cont3, s1, s, index);
          									cont3++;
          								}
          								break;
          			case 'simBlock4': 
          								if(cont4!=5){
          									nextBeforeImage(cont4, s1, s, index);
          									cont4++;
          								}
          								break;
          			case 'simBlock5': 
          								if(cont5!=5){
          									nextBeforeImage(cont5, s1, s, index);
          									cont5++;
          								}
          								break;					
          		}
          	}
          
           }
          
           sym.addEventIntrucciones = function  () {
          	sym.getSymbol("simMenu").$("simIntruccion3").click(function() {
          		mySound4.volume(0.25);
          		mySound3.play();		
          		bootbox.dialog({
          			message: "<h4 style='font-family=Arial, Helvetica, sans-serif'>"+
          		  "Crea tu propia historia y dime lo que sucede en tu historia."+"<br><br>"+
          		  "Selecciona las imágenes en el orden del 1 al 5 y luego escribe tu historia arriba. "+
          		  "</h4>",
          		  title: "<h2 style='font-family=Arial, Helvetica, sans-serif'>Instrucciones<h2>",
          		  closeButton:false,
          		  buttons: {
          			 main: {
          				label: "Aceptar!",
          				className: "btn-primary",
          				callback: function() {
          				    mySound4.volume(0.5);
          					 mySound3.stop();
          				}
          			 }
          		  }
          		});
          
          	});
          }
          
          drawTextArea();
          
          function drawTextArea(){
          	 var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
              // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
              var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
          	 var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
          	 var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
          	 var myTextArea='<textarea id="myT" style="color:black;" placeholder="Escribe aquí tu Historia..."></textarea>';
          	 sym.$("divTextArea").html(myTextArea);
          	 if(isOpera){
          		 jss.set('::-webkit-input-placeholder ', {
          		 'color': 'black',
          		 'text-align': 'center'
          		 });
          	 }
          	 if(isChrome){
          		 jss.set('::-webkit-input-placeholder ', {
          		 'color': 'black',
          		 'text-align': 'center'
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
          
          	 sym.$("#myT").css({"color" : "black", "font-style": "bold", "width": wDiv1/1.2, "height": hDiv1});
          	 sym.$("#myT").css({"background-color": "rgba(225,225,225,0.8", "resize": "none"});
          	 sym.$("#myT").css({"font-size": "150%", "text-shadow": "0 0 0.9em white, 0 0 0.9em #87F, 0 0 0.9em #87F"});
          	 sym.$("#myT").css({"position": "absolute","top":"50%","left":"50%","-ms-transform":"translate(-50%,-50%)",
              "-webkit-transform":"translate(-50%,-50%)","-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
          }
          
          
          
          //Cargar audio 
          
          mySound1 = new Howl({
            urls: ['media/pem165_1.ogg','media/pem165_1.mp3'],
             onend: function() {
                sym.getSymbol("simIntrucciones").play("second");
            }
          });
          
          mySound2 = new Howl({
            urls: ['media/pem165_2.ogg','media/pem165_2.mp3'],
             onend: function() {
                sym.getSymbol("simIntrucciones").play("end");
            }
          });
          
          mySound3 = new Howl({
            urls: ['media/pem165_3.ogg','media/pem165_3.mp3'],
             onend: function() {
            }
          });

          $( document ).ready(function() {
            mySound4 = new Howl({
              urls: ['media/modern_Inspiring_Acoustic.ogg','media/modern_Inspiring_Acoustic.mp3'],
              loop: true,
              onend: function() {
              }
            });
            mySound4.play();
            mySound4.volume(0.5);
          });    
          
          sym.getSymbol("simMenu").$("simSonido").click(function() {
          	if(valMp3){
          		mySound4.stop();
          		valMp3=false;
          	}		
          	else{
          		mySound4.play();
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
          
           function nextBeforeImage(index, s1, s, index2){
          	sym.$(s1).children().remove();
          	var myImage="<a href='images/"+myArray[index]+".png' data-lighter><img src='images/"+myArray[index]+".png'/></a>";
          	//var myImage="<img src='images/"+myArray[cont]+".png'></img>";
          	if(index2==0)
          		s1.css({"left":"200px"});
          	if(index2==1)
          		s1.css({"left":"-200px"});
          	s1.html(myImage);
          	sym.$(s1).find("*").css({"height": "100%", "width": "100%"});
          	TweenLite.to(s, 0.3, {left:"7px", ease: Power0.easeNone});
          	console.log(index);
           }
          
           //Cuadro 1
           sym.getSymbol("simBlock1").$("simMenuBlock_1").hide();
          
          sym.getSymbol("simBlock1").$("rectangleOver").mouseover(function () {
          
             sym.getSymbol("simBlock1").$("simMenuBlock_1").show();
             sym.getSymbol("simBlock1").getSymbol("simMenuBlock_1").stop(0);
             sym.getSymbol("simBlock1").getSymbol("simMenuBlock_1").play("start");
          });
          
          sym.getSymbol("simBlock1").$("containerImage").mouseover(function () {
          
             sym.getSymbol("simBlock1").$("simMenuBlock_1").show();
             sym.getSymbol("simBlock1").getSymbol("simMenuBlock_1").stop(0);
             sym.getSymbol("simBlock1").getSymbol("simMenuBlock_1").play("start");
          });
          
          sym.$("simBlock1").mouseleave(function () {
             sym.getSymbol("simBlock1").$("simMenuBlock_1").hide();
              sym.getSymbol("simBlock1").getSymbol("simMenuBlock_1").stop(0);
          });
          
          
          //cuadro 2 
          sym.getSymbol("simBlock2").$("simMenuBlock_2").hide();
          
          sym.getSymbol("simBlock2").$("rectangleOver").mouseover(function () {
          
             sym.getSymbol("simBlock2").$("simMenuBlock").show();
             sym.getSymbol("simBlock2").getSymbol("simMenuBlock_2").stop(0);
             sym.getSymbol("simBlock2").getSymbol("simMenuBlock_2").play("start");
          });
          
          sym.getSymbol("simBlock2").$("containerImage").mouseover(function () {
          
             sym.getSymbol("simBlock2").$("simMenuBlock_2").show();
             sym.getSymbol("simBlock2").getSymbol("simMenuBlock_2").stop(0);
             sym.getSymbol("simBlock2").getSymbol("simMenuBlock_2").play("start");
          });
          
          sym.$("simBlock2").mouseleave(function () {
             sym.getSymbol("simBlock2").$("simMenuBlock_2").hide();
              sym.getSymbol("simBlock2").getSymbol("simMenuBlock_2").stop(0);
          });
          
          //Cuadro3
          sym.getSymbol("simBlock3").$("simMenuBlock").hide();
          
          sym.getSymbol("simBlock3").$("rectangleOver").mouseover(function () {
          
             sym.getSymbol("simBlock3").$("simMenuBlock").show();
             sym.getSymbol("simBlock3").getSymbol("simMenuBlock").stop(0);
             sym.getSymbol("simBlock3").getSymbol("simMenuBlock").play("start");
          });
          
          sym.getSymbol("simBlock3").$("containerImage").mouseover(function () {
          
             sym.getSymbol("simBlock3").$("simMenuBlock").show();
             sym.getSymbol("simBlock3").getSymbol("simMenuBlock").stop(0);
             sym.getSymbol("simBlock3").getSymbol("simMenuBlock").play("start");
          });
          
          sym.$("simBlock3").mouseleave(function () {
             sym.getSymbol("simBlock3").$("simMenuBlock").hide();
              sym.getSymbol("simBlock3").getSymbol("simMenuBlock").stop(0);
          });
          
          //Cuadro4
          sym.getSymbol("simBlock4").$("simMenuBlock_4").hide();
          
          sym.getSymbol("simBlock4").$("rectangleOver").mouseover(function () {
          
             sym.getSymbol("simBlock4").$("simMenuBlock_4").show();
             sym.getSymbol("simBlock4").getSymbol("simMenuBlock_4").stop(0);
             sym.getSymbol("simBlock4").getSymbol("simMenuBlock_4").play("start");
          });
          
          sym.getSymbol("simBlock4").$("containerImage").mouseover(function () {
          
             sym.getSymbol("simBlock4").$("simMenuBlock_4").show();
             sym.getSymbol("simBlock4").getSymbol("simMenuBlock_4").stop(0);
             sym.getSymbol("simBlock4").getSymbol("simMenuBlock_4").play("start");
          });
          
          sym.$("simBlock4").mouseleave(function () {
             sym.getSymbol("simBlock4").$("simMenuBlock_4").hide();
              sym.getSymbol("simBlock4").getSymbol("simMenuBlock_4").stop(0);
          });
          
          //Cuadro5
          sym.getSymbol("simBlock5").$("simMenuBlock_5").hide();
          
          sym.getSymbol("simBlock5").$("rectangleOver").mouseover(function () {
          
             sym.getSymbol("simBlock5").$("simMenuBlock_5").show();
             sym.getSymbol("simBlock5").getSymbol("simMenuBlock_5").stop(0);
             sym.getSymbol("simBlock5").getSymbol("simMenuBlock_5").play("start");
          });
          
          sym.getSymbol("simBlock5").$("containerImage").mouseover(function () {
          
             sym.getSymbol("simBlock5").$("simMenuBlock_5").show();
             sym.getSymbol("simBlock5").getSymbol("simMenuBlock_5").stop(0);
             sym.getSymbol("simBlock5").getSymbol("simMenuBlock_5").play("start");
          });
          
          sym.$("simBlock5").mouseleave(function () {
             sym.getSymbol("simBlock5").$("simMenuBlock_5").hide();
              sym.getSymbol("simBlock5").getSymbol("simMenuBlock_5").stop(0);
          });

      });
      //Edge binding end

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         sym.getSymbol("simBlock1").play();
         sym.getSymbol("simBlock2").play();
         sym.getSymbol("simBlock3").play();
         sym.getSymbol("simBlock4").play();
         sym.getSymbol("simBlock5").play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'simBat'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();
         //Timer en javaScript
         var myTime; 
         myTime = setInterval(function(){myTimer()},20000)
         
         function myTimer() {
         	sym.play(0);
         	 clearInterval(myTime);
         }

      });
      //Edge binding end

   })("simBat");
   //Edge symbol end:'simBat'

   //=========================================================
   
   //Edge symbol: 'simShootingS_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simShootingS_1");
   //Edge symbol end:'simShootingS_1'

   //=========================================================
   
   //Edge symbol: 'simShootingS_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simShootingS_2");
   //Edge symbol end:'simShootingS_2'

   //=========================================================
   
   //Edge symbol: 'simAstro'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 70000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simAstro");
   //Edge symbol end:'simAstro'

   //=========================================================
   
   //Edge symbol: 'simMenuBlock'
   (function(symbolName) {   
         

      Symbol.bindElementAction(compId, symbolName, "${next}", "click", function(sym, e) {
         sym.getComposition().getStage().ChangeImage(1,"simBlock3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${before}", "click", function(sym, e) {
         sym.getComposition().getStage().ChangeImage(0,"simBlock3");

      });
      //Edge binding end

   })("simMenuBlock");
   //Edge symbol end:'simMenuBlock'

   //=========================================================
   
   //Edge symbol: 'simTest'
   (function(symbolName) {   
   
   })("simBlock3");
   //Edge symbol end:'simBlock3'

   //=========================================================
   
   //Edge symbol: 'simBlock3_1'
   (function(symbolName) {   
   
      })("simBlock1");
   //Edge symbol end:'simBlock1'

   //=========================================================
   
   //Edge symbol: 'simMenuBlock_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${next}", "click", function(sym, e) {
         sym.getComposition().getStage().ChangeImage(1,"simBlock1");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${before}", "click", function(sym, e) {
         sym.getComposition().getStage().ChangeImage(0,"simBlock1");

      });
      //Edge binding end

      })("simMenuBlock_1");
   //Edge symbol end:'simMenuBlock_1'

   //=========================================================
   
   //Edge symbol: 'simMenuBlock_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${next}", "click", function(sym, e) {
         sym.getComposition().getStage().ChangeImage(1,"simBlock2");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${before}", "click", function(sym, e) {
         sym.getComposition().getStage().ChangeImage(0,"simBlock2");

      });
      //Edge binding end

      })("simMenuBlock_2");
   //Edge symbol end:'simMenuBlock_2'

   //=========================================================
   
   //Edge symbol: 'simBlock3_1'
   (function(symbolName) {   
   
      })("simBlock2");
   //Edge symbol end:'simBlock2'

   //=========================================================
   
   //Edge symbol: 'simMenuBlock_3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${next}", "click", function(sym, e) {
         sym.getComposition().getStage().ChangeImage(1,"simBlock4");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${before}", "click", function(sym, e) {
         sym.getComposition().getStage().ChangeImage(0,"simBlock4");

      });
      //Edge binding end

      })("simMenuBlock_4");
   //Edge symbol end:'simMenuBlock_4'

   //=========================================================
   
   //Edge symbol: 'simBlock3_1'
   (function(symbolName) {   
   
      })("simBlock4");
   //Edge symbol end:'simBlock4'

   //=========================================================
   
   //Edge symbol: 'simBlock4_1'
   (function(symbolName) {   
   
      })("simBlock5");
   //Edge symbol end:'simBlock5'

   //=========================================================
   
   //Edge symbol: 'simMenuBlock_3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${next}", "click", function(sym, e) {
         sym.getComposition().getStage().ChangeImage(1,"simBlock5");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${before}", "click", function(sym, e) {
         sym.getComposition().getStage().ChangeImage(0,"simBlock5");

      });
      //Edge binding end

      })("simMenuBlock_5");
   //Edge symbol end:'simMenuBlock_5'

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
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2850, function(sym, e) {
         sym.stop();
         mySound4.volume(0.25);
         mySound1.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.getComposition().getStage().addEventIntrucciones();
         mySound4.volume(0.5);
         //sym.getComposition().getStage().otherfunction();
         this.deleteSymbol();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.$("Text2").remove();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.stop();
         mySound2.play();

      });
      //Edge binding end

   })("simIntrucciones");
   //Edge symbol end:'simIntrucciones'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-330560498");