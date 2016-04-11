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
         sym.setVariable("mySoundClapHappy", 0);
         sym.setVariable("mySoundClapSad", 0);
         sym.setVariable("myIntruccion", 0);
         myIntruccion=sym.$("simIntrucciones")[0];
         sym.setVariable("mySoundAmbient", 0);
         var valMp3=true;
         var uniqueArray=[], uniqueArray2=[],numerosArray=[],romanNumber=0, elementCant=20, cont=0;
         var canastaI=0, canastaM=0, canastaD=0;
         var arrayRoman=['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'];
         pushOtherArray();
         
         //Declarar e implementar funciones globales 
         sym.addEventIntrucciones = function  () {
           		sym.getSymbol("simMenu").$("simIntruccion3").click(function() {
         		mySound1.stop();
         		mySound2.stop();
         		mySoundAmbient.volume(0.25);
         		mySoundClapHappy.stop();
         		mySoundClapSad.stop();
         		mySound1.play();
         		bootbox.dialog({
         		  message: "<h4 style='font-family=Arial, Helvetica, sans-serif'>"+
         		  "Lanza el balón en el tablero correspondiente. "+"<br><br>"+"Debes hacer click en el tablero!"+
         		  "</h4>",
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
         
         sym.addEventCanastas = function  () {
            // Remove fired class to 'reactivate' events
         	 sym.getSymbol("simCanastas").getSymbol("simCanastaI1").$("canastaI1").removeClass('fired');   
         	 sym.getSymbol("simCanastas").getSymbol("simCanastaC2").$("canastaM1").removeClass('fired');   
         	 sym.getSymbol("simCanastas").getSymbol("simCanastaD3").$("canastaD1").removeClass('fired');  
         }
         
         sym.loadNumbers = function  () {
         	/*if(cont==5){
         		uniqueArray=[];
         		cont=0;
         	}*/
         	if (uniqueArray.length!=0)
         		uniqueArray=[];
         	if (numerosArray.length!=0)
         		numerosArray=[];
         
         	//Lleanamos el arreglo
         	for (var i = 0; i < 3; i++) {
         		numerosArray.push(randomNoRepeat());	
         	}
         	canastaI=numerosArray[0];
         	canastaM=numerosArray[1];
         	canastaD=numerosArray[2];
         	sym.getSymbol("simCanastas").$("textI").html(canastaI);
         	sym.getSymbol("simCanastas").$("textM").html(canastaM);
         	sym.getSymbol("simCanastas").$("textD").html(canastaD);
         	var num=Math.floor((Math.random() * 3));
         	romanNumber=numerosArray[num];
         	var num2=changeToRoman(romanNumber)
         	sym.getSymbol("simPizarra2").$("textPizarra").html(num2);
         	if(num2.length==3){
         		sym.getSymbol("simPizarra2").$("textPizarra").css({"left":"0px"});
         		}
         	if(num2.length==2)
         		sym.getSymbol("simPizarra2").$("textPizarra").css({"left":"0px"});
         	if(num2.length==1)
         		sym.getSymbol("simPizarra2").$("textPizarra").css({"left":"20px"});
         	if(num2.length==4)
         		sym.getSymbol("simPizarra2").$("textPizarra").css({"left":"-15px"});
         	//sym.getSymbol("simPizarra2").$("Rectangle").$("textPizarra").css({"margin": "0 auto", "text-align":"center","position": "absolute","top":"50%","left":"50%","transform": "translate(-50%,-50%)"});
         	//cont++;
         }
         
         sym.validateNumber = function  (index) {
         	switch (index) {
             case 0:
             	  return (canastaI == romanNumber)?1:0;    	
                 break;
              case 1:
             	  return (canastaM == romanNumber)?1:0;
                 break;
              case 2:
             	  return (canastaD == romanNumber)?1:0;
                 break;
         
         	}
         }
         
         function randomNoRepeat () {
         	//Llenamos el arreglo
         	if (uniqueArray.length==0){
         		for (var i = 1; i < 21; i++) {
         			uniqueArray.push(i);
         		};
         	}
         	var index=Math.floor(Math.random()*uniqueArray.length);
         	var val=uniqueArray[index];
         	uniqueArray.splice(index,1);
         	return val;
         }
         
         function changeToRoman (index) {
         	var temp=0;
         	for (var i = 1; i < 21; i++) {
         			if(uniqueArray2[temp]==index)
         				{
         				return arrayRoman[temp];
         				}
         			temp++;
         		};
         }
         
         function pushOtherArray () {
         	for (var i = 1; i < 21; i++) {
         		uniqueArray2.push(i);
         	}
         }
         
         //Cargar audio 
         mySound1 = new Howl({
           urls: ['media/pem2_1.ogg','media/pem2_1.mp3'],
            onend: function() {
            	sym.getSymbol("simIntrucciones").play("end");
           }
         });
         
         mySound2 = new Howl({
           urls: ['media/pem2_2.ogg','media/pem2_2.mp3'],
            onend: function() {
           }
         });
         
         mySoundClapHappy = new Howl({
           urls: ['media/pem2_3.ogg','media/pem2_3.mp3'],
            onend: function() {
           }
         });
         
         mySoundClapSad = new Howl({
           urls: ['media/pem2_4.ogg','media/pem2_4.mp3'],
            onend: function() {
           }
         });
         
         $( document ).ready(function() {
            mySoundAmbient = new Howl({
              urls: ['media/edm_detection_mode.ogg','media/edm_detection_mode.mp3'],
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
                
         sym.$("simPizarra2").css({"top":"-200px"});
         sym.$("simCanastas").css({"top":"-1351px"});

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

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'simAnuncios'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 57000, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.$('PlayGame').textillate({ 
           in: { effect: 'tada' }
         });
         sym.$('PlayGame').css({"margin":"0px","text-align":"center","font-family":'Arial, Helvetica, sans-serif',"color": "rgb(213, 213, 213)", "font-weight": "700", "font-size": "42px"});

      });
      //Edge binding end

   })("simAnuncios");
   //Edge symbol end:'simAnuncios'

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
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();
         mySoundAmbient.volume(0.25);
         mySound1.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         mySoundAmbient.volume(0.5);
         sym.getComposition().getStage().$("simCanastas").css({"top":"179px"});
         sym.getComposition().getStage().getSymbol("simCanastas").play();
         sym.getComposition().getStage().addEventIntrucciones();
         sym.getComposition().getStage().loadNumbers();
         this.deleteSymbol();

      });
      //Edge binding end

   })("simIntrucciones");
   //Edge symbol end:'simIntrucciones'

   //=========================================================
   
   //Edge symbol: 'simCanastas'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 700, function(sym, e) {
         sym.getComposition().getStage().$("simPizarra2").css({"top":"0px"});
         sym.getComposition().getStage().getSymbol("simPizarra2").play(0);
         mySound2.play();
         sym.stop("m");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("simCanastaI1").play(0);
         sym.getSymbol("simCanastaC2").play(0);
         sym.getSymbol("simCanastaD3").play(0);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().addEventCanastas();
         sym.getComposition().getStage().loadNumbers();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().addEventCanastas();
         sym.getComposition().getStage().loadNumbers();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().addEventCanastas();
         sym.getComposition().getStage().loadNumbers();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7750, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().addEventCanastas();
         sym.getComposition().getStage().loadNumbers();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5200, function(sym, e) {
         mySoundClapHappy.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6900, function(sym, e) {
         mySoundClapSad.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1700, function(sym, e) {
         mySoundClapHappy.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3300, function(sym, e) {
         mySoundClapSad.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9300, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().addEventCanastas();
         sym.getComposition().getStage().loadNumbers();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8400, function(sym, e) {
         mySoundClapHappy.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10900, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().addEventCanastas();
         sym.getComposition().getStage().loadNumbers();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         mySoundClapSad.play();

      });
      //Edge binding end

   })("simCanastas");
   //Edge symbol end:'simCanastas'

   //=========================================================
   
   //Edge symbol: 'simCanastaI1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${canastaI1}", "mouseover", function(sym, e) {
         if (sym.$("canastaI1").hasClass('fired') == false) {
         		sym.stop("light");
         		sym.play("light");
         		sym.getComposition().getStage().getSymbol("simCanastas").stop("i");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 700, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${canastaI1}", "mouseout", function(sym, e) {
         if (sym.$("canastaI1").hasClass('fired') == false) {
         	sym.stop("light");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${canastaI1}", "click", function(sym, e) {
         if (sym.$("canastaI1").hasClass('fired') == false) {
         	sym.stop("light");
         	sym.$("canastaI1").addClass('fired');
         	sym.getComposition().getStage().getSymbol("simCanastas").getSymbol("simCanastaC2").$("canastaM1").addClass('fired');    
         	sym.getComposition().getStage().getSymbol("simCanastas").getSymbol("simCanastaD3").$("canastaD1").addClass('fired');    
         	
         	var num=sym.getComposition().getStage().validateNumber(0);
         	if(num==1){
         		sym.getComposition().getStage().getSymbol("simCanastas").stop("i");
         		sym.getComposition().getStage().getSymbol("simCanastas").play("i");
         	}
         	else{
         		sym.getComposition().getStage().getSymbol("simCanastas").stop("i_m");
         		sym.getComposition().getStage().getSymbol("simCanastas").play("i_m");
         	}
         }
         
         
         
         

      });
      //Edge binding end

   })("simCanastaI1");
   //Edge symbol end:'simCanastaI1'

   //=========================================================
   
   //Edge symbol: 'simPizarra'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.$('Rectangle').sBubble({
                 content: 'Pizarra que muestra los números a encestar!',
                 position: 'right',
                 height: 50,
                 width: 180,
                 theme: 'black'
          });
         
         
         

      });
      //Edge binding end

   })("simPizarra");
   //Edge symbol end:'simPizarra'

   //=========================================================
   
   //Edge symbol: 'simCanastaI1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 700, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${canastaM1}", "mouseover", function(sym, e) {
         if (sym.$("canastaM1").hasClass('fired') == false) {
         		sym.stop("light");
         		sym.play("light");
         		sym.getComposition().getStage().getSymbol("simCanastas").stop("m");
         }
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${canastaM1}", "mouseout", function(sym, e) {
         if (sym.$("canastaM1").hasClass('fired') == false) {
         	sym.stop("light");
         }
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${canastaM1}", "click", function(sym, e) {
         if (sym.$("canastaM1").hasClass('fired') == false) {
         	sym.stop("light");
         	sym.$("canastaM1").addClass('fired');
         	sym.getComposition().getStage().getSymbol("simCanastas").getSymbol("simCanastaI1").$("canastaI1").addClass('fired');   
         	sym.getComposition().getStage().getSymbol("simCanastas").getSymbol("simCanastaD3").$("canastaD1").addClass('fired');    
          
         
         	var num2=sym.getComposition().getStage().validateNumber(1);
         	if(num2==1){
         		sym.getComposition().getStage().getSymbol("simCanastas").stop("m");
         		sym.getComposition().getStage().getSymbol("simCanastas").play("m");
         	}
         	else{
         		sym.getComposition().getStage().getSymbol("simCanastas").stop("m_m");
         		sym.getComposition().getStage().getSymbol("simCanastas").play("m_m");
         	}
         }
         
         
         
         

      });
         //Edge binding end

      })("simCanastaC2");
   //Edge symbol end:'simCanastaC2'

   //=========================================================
   
   //Edge symbol: 'simCanastaI1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 700, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${canastaD1}", "mouseover", function(sym, e) {
         if (sym.$("canastaD1").hasClass('fired') == false) {
         		sym.stop("light");
         		sym.play("light");
         		sym.getComposition().getStage().getSymbol("simCanastas").stop("d");
         }

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${canastaD1}", "mouseout", function(sym, e) {
         if (sym.$("canastaD1").hasClass('fired') == false) {
         	sym.stop("light");
         }
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${canastaD1}", "click", function(sym, e) {
         if (sym.$("canastaD1").hasClass('fired') == false) {
         	sym.stop("light");
         	sym.$("canastaD1").addClass('fired');
         	sym.getComposition().getStage().getSymbol("simCanastas").getSymbol("simCanastaC2").$("canastaM1").addClass('fired');    
         	sym.getComposition().getStage().getSymbol("simCanastas").getSymbol("simCanastaI1").$("canastaI1").addClass('fired');   
         
         	var num3=sym.getComposition().getStage().validateNumber(2);
         	if(num3==1){
         		sym.getComposition().getStage().getSymbol("simCanastas").stop("d");
         		sym.getComposition().getStage().getSymbol("simCanastas").play("d");
         	}
         	else{
         		sym.getComposition().getStage().getSymbol("simCanastas").stop("d_m");
         		sym.getComposition().getStage().getSymbol("simCanastas").play("d_m");
         	}
         }
         
         
         
         

      });
         //Edge binding end

      })("simCanastaD3");
   //Edge symbol end:'simCanastaD3'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-16013193");