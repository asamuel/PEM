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
         sym.setVariable("mySoundIntruccion", 0);
         sym.setVariable("mySoundIntruccion2", 0);
         sym.setVariable("mySoundAmbient", 0);
         sym.setVariable("mySoundViento", 0);
         sym.setVariable("myIntruccion", 0);
         myIntruccion=sym.getSymbol("simIntrucciones");
         
         //Creacion de Canvas Relog
         var myClock="<canvas id='canvas' width='150' height='150'>Your browser does not support the HTML5 canvas tag.</canvas>";
         var valMp3=true;
         sym.$("clock").html(myClock);
         
         
         mySoundViento = new Howl({
           urls: ['media/viento.ogg','media/viento.mp3']
         }).play();
         
         mySoundIntruccion = new Howl({
           urls: ['media/sonido1.ogg','media/sonido1.mp3'],
            onend: function() {
           	  sym.getSymbol("simIntrucciones").play("end");
           }
         });
         
         mySoundIntruccion2 = new Howl({
           urls: ['media/sonido2.ogg','media/sonido2.mp3']
         });
         
         
         $( document ).ready(function() {
          mySoundAmbient = new Howl({
            urls: ['media/smile_for_me.ogg','media/smile_for_me.mp3'],
            loop: true,
            onend: function() {
            }
          });
          mySoundAmbient.play();
          mySoundAmbient.volume(0.5);
          });

         //Activar y desactivar audio
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
         
         //Desarrollo del Canvas Relog 
         var canvas = sym.$("canvas")[0];
         var ctx = canvas.getContext("2d");
         var radius = canvas.height / 2;
         ctx.translate(radius, radius);
         radius = radius * 0.90
         setInterval(drawClock, 1000);
         
         function drawClock() {
           drawFace(ctx, radius);
           drawNumbers(ctx, radius);
           drawTime(ctx, radius);
         }
         
         function drawFace(ctx, radius) {
           var grad;
           ctx.beginPath();
           ctx.arc(0, 0, radius, 0, 2*Math.PI);
           ctx.fillStyle = 'white';
           ctx.fill();
           grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
           grad.addColorStop(0, 'black');
           grad.addColorStop(0.5, '#03C9A9');
           grad.addColorStop(1, '#019875');
           ctx.strokeStyle = grad;
           ctx.lineWidth = radius*0.1;
           ctx.stroke();
           ctx.beginPath();
           ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
           ctx.fillStyle = 'black';
           ctx.fill();
         }
         
         function drawNumbers(ctx, radius) {
           var ang;
           var num;
           ctx.font = radius*0.23 + "px arial";
           ctx.textBaseline="middle";
           ctx.textAlign="center";
           for(num = 1; num < 13; num++){
             ang = num * Math.PI / 6;
             ctx.rotate(ang);
             ctx.translate(0, -radius*0.85);
             ctx.rotate(-ang);
             ctx.fillText(num.toString(), 0, 0);
             ctx.rotate(ang);
             ctx.translate(0, radius*0.85);
             ctx.rotate(-ang);
           }
         }
         
         function drawTime(ctx, radius){
             var now = new Date();
             var hour = now.getHours();
             var minute = now.getMinutes();
             var second = now.getSeconds();
             //hour
             hour=hour%12;
             hour=(hour*Math.PI/6)+
             (minute*Math.PI/(6*60))+
             (second*Math.PI/(360*60));
             drawHand(ctx, hour, radius*0.5, radius*0.07);
             //minute
             minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
             drawHand(ctx, minute, radius*0.7, radius*0.07);
             // second
             second=(second*Math.PI/30);
             drawHand(ctx, second, radius*0.9, radius*0.02);
         }
         
         function drawHand(ctx, pos, length, width) {
             ctx.beginPath();
             ctx.lineWidth = width;
             ctx.lineCap = "round";
             ctx.moveTo(0,0);
             ctx.rotate(pos);
             ctx.lineTo(0, -length);
             ctx.stroke();
             ctx.rotate(-pos);
         }
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'simMenu'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${simIntruccion3}", "click", function(sym, e) {
         //myIntruccion.remove();
         myIntruccion.deleteSymbol();
         mySoundIntruccion.stop();
         mySoundAmbient.volume(0.2);
         mySoundIntruccion2.play();
         bootbox.dialog({
           message: "<h4 style='font-family=Arial, Helvetica, sans-serif'> El viento se llevó las piezas del rompecabezas."
           +"<br>"+"¿Podes ayudar a reconstruir el rostro de Francisco?"+
           "Arrastra y ubica las piezas en su lugar.</h4>",
           title: "<h2 style='font-family=Arial, Helvetica, sans-serif'>Instrucciones<h2>",
           closeButton:false,
           buttons: {
             main: {
               label: "Aceptar!",
               className: "btn-primary",
               callback: function() {
              	 mySoundIntruccion2.stop()
              	 mySoundAmbient.volume(0.5);
               }
             }
           }
         });

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${simSiguiente}", "click", function(sym, e) {
         window.open("../Pem20_1/Pem1_1.html", "_self");

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
   
   //Edge symbol: 'simSalir_1'
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

      })("simSiguiente");
   //Edge symbol end:'simSiguiente'

   //=========================================================
   
   //Edge symbol: 'simNube'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35000, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

   })("simNube");
   //Edge symbol end:'simNube'

   //=========================================================
   
   //Edge symbol: 'simIntrucciones'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //Cargar audio 
         
         //mySound1.play();
         //mySound1.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.stop();
         mySoundAmbient.volume(0.2);
         mySoundIntruccion.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6250, function(sym, e) {
         this.deleteSymbol();
         mySoundAmbient.volume(0.5);

      });
      //Edge binding end

   })("simIntrucciones");
   //Edge symbol end:'simIntrucciones'

   //=========================================================
   
   //Edge symbol: 'simRompeCabezas'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         //Draggable 
         Draggable.create(sym.$(".box"), {type:"x,y", edgeResistance:0.65, throwProps:true});

      });
      //Edge binding end

   })("simRompeCabezas");
   //Edge symbol end:'simRompeCabezas'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-9143841");