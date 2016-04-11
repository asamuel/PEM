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
         sym.$("backDel").remove();
         sym.getSymbol("simPayaso").play();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.setVariable("mySound1", 0);
         sym.setVariable("mySoundAmbient", 0);
         var valMp3=true;
         
         sym.addEventInstruccion = function  () {
         	sym.getSymbol("simMenu").$("simIntruccion3").click(function() {
         		mySoundAmbient.volume(0.25);
         		mySound1.play();
         		bootbox.dialog({
         		  message: "<h4 style='font-family=Arial, Helvetica, sans-serif'>"+
         		  "Anímate a formar conjuntos buscando elementos que coincidan. "+
         		  "Arrastra las imágenes al interior de los aros. </h4>",
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
         mySound1 = new Howl({
           urls: ['media/pem38.ogg','media/pem38.mp3'],
            onend: function() {
               sym.getSymbol("simIntrucciones").play("end");
           }
         });
         $( document ).ready(function() {
         		mySoundAmbient = new Howl({
         			 urls: ['media/akashic.ogg','media/akashic.mp3'],
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
              window.location.href="../Menu2.html?indexCat=raz";           
            }
            else{
               localStorage.setItem("indexCat","raz");
               window.open("../Menu2.html", "_self");
            }
         
         }  
         
          //Eventos de mostrar tooltip a objetos
          sym.getSymbol("simObj").$("simRata2").mouseover(function() {
          	sym.getSymbol("simObj").getSymbol("simRata2").stop("start");
          	sym.getSymbol("simObj").getSymbol("simRata2").play("start");
          });
         
          sym.getSymbol("simObj").$("simRata2").mouseout(function() {
          		sym.getSymbol("simObj").getSymbol("simRata2").stop("end");
          });
         
         sym.getSymbol("simObj").getSymbol("simPollo").$("pollo").mouseover(function() {
          	sym.getSymbol("simObj").getSymbol("simPollo").stop("start");
          	sym.getSymbol("simObj").getSymbol("simPollo").play("start");
          });
         
          sym.getSymbol("simObj").getSymbol("simPollo").$("pollo").mouseout(function() {
          		sym.getSymbol("simObj").getSymbol("simPollo").stop("end");
          });
         
         sym.getSymbol("simObj").getSymbol("simPez").$("pez").mouseover(function() {
          	sym.getSymbol("simObj").getSymbol("simPez").stop("start");
          	sym.getSymbol("simObj").getSymbol("simPez").play("start");
          });
         
         sym.getSymbol("simObj").getSymbol("simPez").$("pez").mouseout(function() {
          		sym.getSymbol("simObj").getSymbol("simPez").stop("end");
          });
         
          sym.getSymbol("simObj").getSymbol("simPapa").$("papa").mouseover(function() {
          	sym.getSymbol("simObj").getSymbol("simPapa").stop("start");
          	sym.getSymbol("simObj").getSymbol("simPapa").play("start");
          });
         
          sym.getSymbol("simObj").getSymbol("simPapa").$("papa").mouseout(function() {
          		sym.getSymbol("simObj").getSymbol("simPapa").stop("end");
          });
         
         sym.getSymbol("simObj").getSymbol("simMesa").$("mesa").mouseover(function() {
          	sym.getSymbol("simObj").getSymbol("simMesa").stop("start");
          	sym.getSymbol("simObj").getSymbol("simMesa").play("start");
          });
         
         sym.getSymbol("simObj").getSymbol("simMesa").$("mesa").mouseout(function() {
          		sym.getSymbol("simObj").getSymbol("simMesa").stop("end");
          });
         
          sym.getSymbol("simObj").getSymbol("simEnsalada").$("enslada").mouseover(function() {
          	sym.getSymbol("simObj").getSymbol("simEnsalada").stop("start");
          	sym.getSymbol("simObj").getSymbol("simEnsalada").play("start");
          });
         
          sym.getSymbol("simObj").getSymbol("simEnsalada").$("enslada").mouseout(function() {
          		sym.getSymbol("simObj").getSymbol("simEnsalada").stop("end");
          });
         
         sym.getSymbol("simObj").getSymbol("simCamion").$("camion").mouseover(function() {
          	sym.getSymbol("simObj").getSymbol("simCamion").stop("start");
          	sym.getSymbol("simObj").getSymbol("simCamion").play("start");
          });
         
         sym.getSymbol("simObj").getSymbol("simCamion").$("camion").mouseout(function() {
          		sym.getSymbol("simObj").getSymbol("simCamion").stop("end");
          });
         
          sym.getSymbol("simObj").getSymbol("simCama").$("cama").mouseover(function() {
          	sym.getSymbol("simObj").getSymbol("simCama").stop("start");
          	sym.getSymbol("simObj").getSymbol("simCama").play("start");
          });
         
         sym.getSymbol("simObj").getSymbol("simCama").$("cama").mouseout(function() {
          		sym.getSymbol("simObj").getSymbol("simCama").stop("end");
          });
          
         sym.getSymbol("simObj").getSymbol("simCaballo").$("caballo").mouseover(function() {
          	sym.getSymbol("simObj").getSymbol("simCaballo").stop("start");
          	sym.getSymbol("simObj").getSymbol("simCaballo").play("start");
          });
         
         sym.getSymbol("simObj").getSymbol("simCaballo").$("caballo").mouseout(function() {
          		sym.getSymbol("simObj").getSymbol("simCaballo").stop("end");
          });
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'simObj'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         Draggable.create(sym.$(".box"), {type:"x,y", edgeResistance:0.65, bounds:sym.getComposition().getStage().$("container"), throwProps:true});

      });
      //Edge binding end

   })("simObj");
   //Edge symbol end:'simObj'

   //=========================================================
   
   //Edge symbol: 'simPayaso'
   (function(symbolName) {   
   
   })("simPayaso");
   //Edge symbol end:'simPayaso'

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

   //=========================================================
   
   //Edge symbol: 'simIntrucciones'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.stop();
         mySoundAmbient.volume(0.25);
         mySound1.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.getComposition().getStage().addEventInstruccion();
         mySoundAmbient.volume(0.5);
         this.deleteSymbol();

      });
      //Edge binding end

   })("simIntrucciones");
   //Edge symbol end:'simIntrucciones'

   //=========================================================
   
   //Edge symbol: 'simRata'
   (function(symbolName) {   
   
   })("simRata");
   //Edge symbol end:'simRata'

   //=========================================================
   
   //Edge symbol: 'simPollo'
   (function(symbolName) {   
   
   })("simPollo");
   //Edge symbol end:'simPollo'

   //=========================================================
   
   //Edge symbol: 'simPez'
   (function(symbolName) {   
   
   })("simPez");
   //Edge symbol end:'simPez'

   //=========================================================
   
   //Edge symbol: 'simPapa'
   (function(symbolName) {   
   
   })("simPapa");
   //Edge symbol end:'simPapa'

   //=========================================================
   
   //Edge symbol: 'simMesa'
   (function(symbolName) {   
   
   })("simMesa");
   //Edge symbol end:'simMesa'

   //=========================================================
   
   //Edge symbol: 'simEnsalada'
   (function(symbolName) {   
   
   })("simEnsalada");
   //Edge symbol end:'simEnsalada'

   //=========================================================
   
   //Edge symbol: 'simCamion'
   (function(symbolName) {   
   
   })("simCamion");
   //Edge symbol end:'simCamion'

   //=========================================================
   
   //Edge symbol: 'simCama'
   (function(symbolName) {   
   
   })("simCama");
   //Edge symbol end:'simCama'

   //=========================================================
   
   //Edge symbol: 'simCaballo'
   (function(symbolName) {   
   
   })("simCaballo");
   //Edge symbol end:'simCaballo'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-135751845");