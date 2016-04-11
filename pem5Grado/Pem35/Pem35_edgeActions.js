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
         sym.setVariable("myIntruccion", 0);
         sym.setVariable("myIntruccion2", 0);
         myIntruccion=sym.$("simIntrucciones")[0];
         myIntruccion2=sym.getSymbol("simIntrucciones");
         var valMp3=true;
         //Cargar audio 
         mySound1 = new Howl({
           urls: ['media/pem35_1.ogg','media/pem35_1.mp3'],
            onend: function() {
           	  sym.getSymbol("simIntrucciones").play("endF");
           }
         });
         
         mySound2 = new Howl({
           urls: ['media/pem35_2.ogg','media/pem35_2.mp3'],
            onend: function() {
           	  sym.getSymbol("simIntrucciones").play("end");
           }
         });
         
         mySound3 = new Howl({
           urls: ['media/pem35_3.ogg','media/pem35_3.mp3']
         });
         
        $( document ).ready(function() {
          mySoundAmbient = new Howl({
            urls: ['media/addict_sound_happy_hippie.ogg','media/addict_sound_happy_hippie.mp3'],
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
              window.location.href="../Menu2.html?indexCat=raz";           
            }
            else{
               localStorage.setItem("indexCat","raz");
               window.open("../Menu2.html", "_self");
            }
              
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1600, function(sym, e) {
         sym.getSymbol("simIntrucciones").play();
         sym.getSymbol("simDragConjunto").play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'simNub'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 80000, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

   })("simNub");
   //Edge symbol end:'simNub'

   //=========================================================
   
   //Edge symbol: 'simGuardabarranco'
   (function(symbolName) {   
   
   })("simGuardabarranco");
   //Edge symbol end:'simGuardabarranco'

   //=========================================================
   
   //Edge symbol: 'spritAlaDerecha_symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1208, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("spritAlaDerecha_symbol_1");
   //Edge symbol end:'spritAlaDerecha_symbol_1'

   //=========================================================
   
   //Edge symbol: 'spritAlaIzquierda_symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1208, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("spritAlaIzquierda_symbol_1");
   //Edge symbol end:'spritAlaIzquierda_symbol_1'

   //=========================================================
   
   //Edge symbol: 'spriteGoat_symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7041, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("spriteGoat_symbol_1");
   //Edge symbol end:'spriteGoat_symbol_1'

   //=========================================================
   
   //Edge symbol: 'simCabra'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 65000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simCabra");
   //Edge symbol end:'simCabra'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'simIntrucciones'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2400, function(sym, e) {
         sym.stop();
         mySoundAmbient.volume(0.25);
         mySound1.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         mySoundAmbient.volume(0.5);
         this.deleteSymbol();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.$("Text2").remove();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4317, function(sym, e) {
         sym.stop();
         mySound2.play();
         

      });
      //Edge binding end

   })("simIntrucciones");
   //Edge symbol end:'simIntrucciones'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'simMenu'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${simIntruccion3}", "click", function(sym, e) {
         myIntruccion.remove();
         myIntruccion2.stop()
         mySound1.stop();
         mySound2.stop();
         mySoundAmbient.volume(0.25);
         mySound3.play();
         bootbox.dialog({
           message: "<h4 style='font-family=Arial, Helvetica, sans-serif'>Arma Conjuntos."+"<br><br>"+
           "Observa en el árbol los objetos y forma grupos con objetos similares. "+
           "Los círculos anaranjados son los conjuntos donde puedes agrupar los elementos. </h4>",
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
   
   //Edge symbol: 'simDragConjunto'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         //Draggable 
         Draggable.create(sym.$(".box"), {type:"x,y", edgeResistance:0.65, bounds:sym.$("rectangleContainer"), throwProps:true});
         
         /*sym.$('Pem35_FrutaPina').sBubble({
                 content: 'Una Piña!',
                 position: 'right',
                 height: 30,
                 width: 180,
                 theme: 'blue'
          });
         
          sym.$('Pem35_ArbolFrutal').sBubble({
                 content: 'Árbol con frutas!',
                 position: 'left',
                 height: 30,
                 width: 180,
                 theme: 'green'
          });*/

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("simArbolFrutal").play();
         sym.getSymbol("simArbolFrutal_1").play();
         sym.getSymbol("simArbolFrutal_2").play();
         sym.getSymbol("simArbolFrutal_3").play();
         sym.getSymbol("simArbolFrutal_4").play();
         sym.getSymbol("simArbolFrutal_5").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${simArbolFrutal}", "mouseover", function(sym, e) {
         sym.getSymbol("simArbolFrutal").stop("tooltip");
         sym.getSymbol("simArbolFrutal").play("tooltip");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${simArbolFrutal}", "mouseout", function(sym, e) {
         sym.getSymbol("simArbolFrutal").stop("hide");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${simArbolFrutal_1}", "mouseover", function(sym, e) {
         sym.getSymbol("simArbolFrutal_1").stop("tooltip");
         sym.getSymbol("simArbolFrutal_1").play("tooltip");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${simArbolFrutal_1}", "mouseout", function(sym, e) {
         sym.getSymbol("simArbolFrutal_1").stop("hide");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${simArbolFrutal_2}", "mouseover", function(sym, e) {
         sym.getSymbol("simArbolFrutal_2").stop("tooltip");
         sym.getSymbol("simArbolFrutal_2").play("tooltip");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${simArbolFrutal_2}", "mouseout", function(sym, e) {
         sym.getSymbol("simArbolFrutal_2").stop("hide");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${simArbolFrutal_3}", "mouseover", function(sym, e) {
         sym.getSymbol("simArbolFrutal_3").stop("tooltip");
         sym.getSymbol("simArbolFrutal_3").play("tooltip");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${simArbolFrutal_3}", "mouseout", function(sym, e) {
         sym.getSymbol("simArbolFrutal_3").stop("hide");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${simArbolFrutal_4}", "mouseover", function(sym, e) {
         sym.getSymbol("simArbolFrutal_4").stop("tooltip");
         sym.getSymbol("simArbolFrutal_4").play("tooltip");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${simArbolFrutal_5}", "mouseover", function(sym, e) {
         sym.getSymbol("simArbolFrutal_5").stop("tooltip");
         sym.getSymbol("simArbolFrutal_5").play("tooltip");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${simArbolFrutal_4}", "mouseout", function(sym, e) {
         sym.getSymbol("simArbolFrutal_4").stop("hide");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${simArbolFrutal_5}", "mouseout", function(sym, e) {
         sym.getSymbol("simArbolFrutal_5").stop("hide");

      });
      //Edge binding end

   })("simDragConjunto");
   //Edge symbol end:'simDragConjunto'

   //=========================================================
   
   //Edge symbol: 'simArbolFrutal'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Pem35_ArbolFrutal}", "mouseover", function(sym, e) {
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("simArbolFrutal");
   //Edge symbol end:'simArbolFrutal'

   //=========================================================
   
   //Edge symbol: 'simArbolFrutal_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("simArbolFrutal_1");
   //Edge symbol end:'simArbolFrutal_1'

   //=========================================================
   
   //Edge symbol: 'simArbolFrutal_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("simArbolFrutal_2");
   //Edge symbol end:'simArbolFrutal_2'

   //=========================================================
   
   //Edge symbol: 'simArbolFrutal_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("simArbolFrutal_3");
   //Edge symbol end:'simArbolFrutal_3'

   //=========================================================
   
   //Edge symbol: 'simArbolFrutal_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("simArbolFrutal_4");
   //Edge symbol end:'simArbolFrutal_4'

   //=========================================================
   
   //Edge symbol: 'simArbolFrutal_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("simArbolFrutal_5");
   //Edge symbol end:'simArbolFrutal_5'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-4459864");