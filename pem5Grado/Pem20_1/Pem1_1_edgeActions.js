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
         sym.setVariable("mySoundIntruccion", 0);
         sym.setVariable("myIntruccion", 0);
         sym.setVariable("mySoundAmbient", 0);
         myIntruccion=sym.getSymbol("simIntrucciones");
         var valMp3=true;
         var myArray=[];
         
         myArray.push(sym.getSymbol("simAlimentos").$("simAceite"));
         myArray.push(sym.getSymbol("simAlimentos").$("simFrijoles"));
         myArray.push(sym.getSymbol("simAlimentos").$("simCebolla"));
         myArray.push(sym.getSymbol("simAlimentos").$("simArroz"));
         myArray.push(sym.getSymbol("simAlimentos").$("simSal"));
         myArray.push(sym.getSymbol("simAlimentos").$("simAjo"));
         
         mySoundIntruccion = new Howl({
           urls: ['media/pem1_1_1.ogg','media/pem1_1_1.mp3'],
            onend: function() {
           	  sym.getSymbol("simIntrucciones").play("end");
           }
         });
         
         $( document ).ready(function() {
            mySoundAmbient = new Howl({
              urls: ['media/sunny_2.ogg','media/sunny_2.mp3'],
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

         
         //agregar eventos por medio de jQuery 
         sym.getSymbol("simAlimentos").$("simAceite").mouseover(function() {
         	changeZIndex("simAceite");
         	sym.getSymbol("simAlimentos").getSymbol("simAceite").stop("start");
         	sym.getSymbol("simAlimentos").getSymbol("simAceite").play("start");
         });
         sym.getSymbol("simAlimentos").$("simAceite").mouseout(function() {
         	sym.getSymbol("simAlimentos").getSymbol("simAceite").stop(0);
         });
         
         sym.getSymbol("simAlimentos").$("simFrijoles").mouseover(function() {
         	changeZIndex("simFrijoles");
         	sym.getSymbol("simAlimentos").getSymbol("simFrijoles").stop("start");
         	sym.getSymbol("simAlimentos").getSymbol("simFrijoles").play("start");
         });
         sym.getSymbol("simAlimentos").$("simFrijoles").mouseout(function() {
         	sym.getSymbol("simAlimentos").getSymbol("simFrijoles").stop(0);
         });
         
         sym.getSymbol("simAlimentos").$("simCebolla").mouseover(function() {
         	changeZIndex("simCebolla");
         	sym.getSymbol("simAlimentos").getSymbol("simCebolla").stop("start");
         	sym.getSymbol("simAlimentos").getSymbol("simCebolla").play("start");
         });
         sym.getSymbol("simAlimentos").$("simCebolla").mouseout(function() {
         	sym.getSymbol("simAlimentos").getSymbol("simCebolla").stop(0);
         });
         
         sym.getSymbol("simAlimentos").$("simArroz").mouseover(function() {
         	changeZIndex("simArroz");
         	sym.getSymbol("simAlimentos").getSymbol("simArroz").stop("start");
         	sym.getSymbol("simAlimentos").getSymbol("simArroz").play("start");
         });
         sym.getSymbol("simAlimentos").$("simArroz").mouseout(function() {
         	sym.getSymbol("simAlimentos").getSymbol("simArroz").stop(0);
         });
         
         sym.getSymbol("simAlimentos").$("simSal").mouseover(function() {
         	changeZIndex("simSal");
         	sym.getSymbol("simAlimentos").getSymbol("simSal").stop("start");
         	sym.getSymbol("simAlimentos").getSymbol("simSal").play("start");
         });
         sym.getSymbol("simAlimentos").$("simSal").mouseout(function() {
         	sym.getSymbol("simAlimentos").getSymbol("simSal").stop(0);
         });
         
         sym.getSymbol("simAlimentos").$("simAjo").mouseover(function() {
         	changeZIndex("simAjo");
         	sym.getSymbol("simAlimentos").getSymbol("simAjo").stop("start");
         	sym.getSymbol("simAlimentos").getSymbol("simAjo").play("start");
         });
         sym.getSymbol("simAlimentos").$("simAjo").mouseout(function() {
         	sym.getSymbol("simAlimentos").getSymbol("simAjo").stop(0);
         });
         
         
         function changeZIndex(index){
         //	sym.getSymbol("simAlimentos").$(index).css({"position": "absolute","z-index":5}); z-index:initial;
         	for(var i=0;i<myArray.length;i++){
         		myArray[i].css({"position": "absolute", "z-index":"initial"}); 
         	}
         	sym.getSymbol("simAlimentos").$(index).css({"position": "absolute","z-index":5});
         }
         
         
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'simNube'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

   })("simNube");
   //Edge symbol end:'simNube'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'simIntrucciones'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         mySoundAmbient.volume(0.25);
         mySoundIntruccion.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6250, function(sym, e) {
         mySoundAmbient.volume(0.5);
         sym.getComposition().getStage().$("simIntro").hide('slow', function(){ sym.getComposition().getStage().$("simIntro").remove(); });
         this.deleteSymbol();

      });
      //Edge binding end

   })("simIntrucciones");
   //Edge symbol end:'simIntrucciones'

   //=========================================================
   
   //Edge symbol: 'simAlimentos'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         Draggable.create(sym.$(".box"), {type:"x,y", edgeResistance:0.65, bounds:sym.getComposition().getStage().$("container"), throwProps:true});

      });
      //Edge binding end

   })("simAlimentos");
   //Edge symbol end:'simAlimentos'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'simMenu'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${simIntruccion3}", "click", function(sym, e) {
         myIntruccion.deleteSymbol();
         mySoundIntruccion.stop();
         mySoundAmbient.volume(0.25);
         mySoundIntruccion.play();
         bootbox.dialog({
           message: "<h4 style='font-family=Arial, Helvetica, sans-serif'>Ahora ayuda a tu abuelita a preparar un buen gallopinto."+"<br>"+"Coloca los ingredientes sobre la mesa"+" en el orden que vos creas conveniente.</h4>",
           title: "<h2 style='font-family=Arial, Helvetica, sans-serif'>Instrucciones<h2>",
           closeButton:false,
           buttons: {
             main: {
               label: "Aceptar!",
               className: "btn-primary",
               callback: function() {
               mySoundIntruccion.stop();
               mySoundAmbient.volume(0.5);
               }
             }
           }
         });

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
   
   //Edge symbol: 'simAceite'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1100, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("simAceite");
   //Edge symbol end:'simAceite'

   //=========================================================
   
   //Edge symbol: 'simAceite_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1100, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("simFrijoles");
   //Edge symbol end:'simFrijoles'

   //=========================================================
   
   //Edge symbol: 'simAceite_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1100, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("simCebolla");
   //Edge symbol end:'simCebolla'

   //=========================================================
   
   //Edge symbol: 'simFrijoles_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1100, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("simArroz");
   //Edge symbol end:'simArroz'

   //=========================================================
   
   //Edge symbol: 'simAceite_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1100, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("simSal");
   //Edge symbol end:'simSal'

   //=========================================================
   
   //Edge symbol: 'simCebolla_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1100, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("simAjo");
   //Edge symbol end:'simAjo'

   //=========================================================
   
   //Edge symbol: 'simIntro'
   (function(symbolName) {   
   
   })("simIntro");
   //Edge symbol end:'simIntro'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-169842270");