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
         sym.getSymbol("simScreen").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getSymbol("simSponsor").play();
         sym.getSymbol("simLapizes").play();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         //Declaramos variables globales
         sym.setVariable("cont", 0);
         sym.setVariable("mySound1", 0);
         sym.setVariable("mySound2", 0);
         sym.setVariable("mySound3", 0);
         sym.setVariable("mySoundAmbient", 0);
         var cont2=0, valMp3=true, cont=0;
         
         sym.getSymbol("simEraser").$("Rectangle6").addClass('fired');
         sym.$("simIntrucciones").hide();
         sym.rearmarLapices = function  () {
         	if(cont2==0){
         		sym.getSymbol("simLapizes").deleteSymbol();
         		cont2++;
         	}
         	else{
         		sym.$("simContainer2").children().remove();
         		//sym.getSymbol("simContainer2").getSymbol("simLapizes2").deleteSymbol();
         		}
         	var s = sym.createChildSymbol("simLapizes2", "simContainer2").getSymbolElement();
         
         }
         
         sym.addEventEraser = function  () {
         	// Remove fired class to 'reactivate' events
         	 sym.getSymbol("simEraser").$("Rectangle6").removeClass('fired');   
         }
         
         sym.addEventIntrucciones = function  () {
         	sym.getSymbol("simMenu").$("simIntruccion3").click(function() {
         	mySound1.stop();
         	mySound2.stop();
         	mySoundAmbient.volume(0.25);
         	mySound3.play();
         	bootbox.dialog({
         		message: "<h4 style='font-family=Arial, Helvetica, sans-serif'>"+
         	  "Pedro está intentando formar 3 cuadros con estos lápices, "+
         	  "pero necesita de tu ayuda."+"<br><br>"+
         	  "Él debe quitar 5 lápices para lograr resolver el problema.  "+
         	  "</h4>",
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
         
         //Cargar audio 
         mySound1 = new Howl({
           urls: ['media/pem171_1.ogg','media/171_1.mp3'],
         	onend: function() {
         		sym.getSymbol("simIntrucciones").play("endF");
           }
         });
         
         mySound2 = new Howl({
           urls: ['media/pem171_2.ogg','media/171_2.mp3'],
         	onend: function() {
         		sym.getSymbol("simIntrucciones").play("end");
           }
         });
         
         mySound3 = new Howl({
           urls: ['media/pem171_3.ogg','media/171_3.mp3']
         });

         $(document).ready(function(){
            mySoundAmbient = new Howl({
              urls: ['media/adventure_Darling.ogg','media/adventure_Darling.mp3'],
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
   
   //Edge symbol: 'simScreen'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simScreen");
   //Edge symbol end:'simScreen'

   //=========================================================
   
   //Edge symbol: 'simSponsor'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         if(cont!=5){
         	sym.play(0);
         	cont++;	
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27000, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

      

   })("simSponsor");
   //Edge symbol end:'simSponsor'

   //=========================================================
   
   //Edge symbol: 'simLapizes'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         Draggable.create(sym.$(".box"), {type:"x,y", edgeResistance:0.65, bounds:sym.getComposition().getStage().$("container"), throwProps:true});
         sym.getComposition().getStage().addEventEraser();
         sym.getComposition().getStage().$("simIntrucciones").show();
         sym.getComposition().getStage().getSymbol("simIntrucciones").play();

      });
      //Edge binding end

   })("simLapizes");
   //Edge symbol end:'simLapizes'

   //=========================================================
   
   //Edge symbol: 'simEraser'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle6}", "click", function(sym, e) {
         if (sym.$("Rectangle6").hasClass('fired') == false) {
         	sym.$("Rectangle6").addClass('fired');
         	sym.getComposition().getStage().rearmarLapices();
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.$('Rectangle6').sBubble({
                 content: '¡Reordenar lápices!',
                 position: 'top',
                 height: 30,
                 width: 180,
                 theme: 'black'
          });

      });
      //Edge binding end

   })("simEraser");
   //Edge symbol end:'simEraser'

   //=========================================================
   
   //Edge symbol: 'simContainer2'
   (function(symbolName) {   
   
   })("simContainer2");
   //Edge symbol end:'simContainer2'

   //=========================================================
   
   //Edge symbol: 'simLapizes_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         Draggable.create(sym.$(".box"), {type:"x,y", edgeResistance:0.65, bounds:sym.getComposition().getStage().$("container"), throwProps:true});
         sym.getComposition().getStage().addEventEraser();

      });
         //Edge binding end

      })("simLapizes2");
   //Edge symbol end:'simLapizes2'

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
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();
         mySoundAmbient.volume(0.25);
         mySound1.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.getComposition().getStage().addEventIntrucciones();
         mySoundAmbient.volume(0.5);
         this.deleteSymbol();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.$("Text2").remove();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.stop();
         mySound2.play();
         

      });
      //Edge binding end

   })("simIntrucciones");
   //Edge symbol end:'simIntrucciones'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-429139117");