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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.getSymbol("simEstante").play();
         sym.getSymbol("simEstante").getSymbol("simMostrador").play();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         //Declaramos variables globales
         sym.setVariable("mySound1", 0);
         sym.setVariable("mySoundAmbient", 0);
         var valMp3=true;
         
         sym.addEventIntrucciones = function  () {
         	sym.getSymbol("simMenu").$("simIntruccion3").click(function() {
         	mySound1.stop();
         	mySoundAmbient.volume(0.25);
         	mySound1.play();
         	bootbox.dialog({
         		message: "<h4 style='font-family=Arial, Helvetica, sans-serif'>"+
         	  "Verifica los precios en la pulpería, sólo debes de arrastrar​ los productos "+ 
         	  "según la cantidad de dinero que aparece en cada canasta. "+ 
         	  "</h4>",
         	  title: "<h2 style='font-family=Arial, Helvetica, sans-serif'>Instrucciones<h2>",
         	  closeButton:false,
         	  buttons: {
         		 main: {
         			label: "Aceptar!",
         			className: "btn-primary",
         			callback: function() {
         				 mySoundAmbient.volume(0.5);
         				 mySound1.stop();
         			}
         		 }
         	  }
         	});
         
          });
         }
         
         //Creacion de Canvas Relog
         var myClock="<canvas id='canvas' width='150' height='150'>Your browser does not support the HTML5 canvas tag.</canvas>";
         sym.$("clock").html(myClock);
         
         //se puede acceder al elemento que esta detras de un div 
         sym.$('simCesto').css({'pointer-events':'none'});
         
         //Cargar audio 
        mySound1 = new Howl({
           urls: ['media/pem28_1.ogg','media/pem28_1.mp3'],
            onend: function() {
             	sym.getSymbol("simIntrucciones").play("end");
           }
        });

        $( document ).ready(function() {
            mySoundAmbient = new Howl({
              urls: ['media/bensound-jazzyfrenchy.ogg','media/bensound-jazzyfrenchy.mp3'],
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
         
         //Eventos de mostrar tooltip estante
         sym.getSymbol("simEstante").$("Pem28_22").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("Pem28_22").stop("start");
         	sym.getSymbol("simEstante").getSymbol("Pem28_22").play("start");
         });
         
         sym.getSymbol("simEstante").$("Pem28_22").mouseout(function() {
         		sym.getSymbol("simEstante").getSymbol("Pem28_22").stop("end");
         });
         
         sym.getSymbol("simEstante").$("Pem28_26").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("Pem28_26").stop("start");
         	sym.getSymbol("simEstante").getSymbol("Pem28_26").play("start");
         });
         
         sym.getSymbol("simEstante").$("Pem28_26").mouseout(function() {
         		sym.getSymbol("simEstante").getSymbol("Pem28_26").stop("end");
         });
         
         sym.getSymbol("simEstante").$("Pem28_27").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("Pem28_27").stop("start");
         	sym.getSymbol("simEstante").getSymbol("Pem28_27").play("start");
         });
         
         sym.getSymbol("simEstante").$("Pem28_27").mouseout(function() {
         		sym.getSymbol("simEstante").getSymbol("Pem28_27").stop("end");
         });
         
         sym.getSymbol("simEstante").$("Pem28_28").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("Pem28_28").stop("start");
         	sym.getSymbol("simEstante").getSymbol("Pem28_28").play("start");
         });
         
         sym.getSymbol("simEstante").$("Pem28_28").mouseout(function() {
         		sym.getSymbol("simEstante").getSymbol("Pem28_28").stop("end");
         });
         
         sym.getSymbol("simEstante").$("Pem28_29").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("Pem28_29").stop("start");
         	sym.getSymbol("simEstante").getSymbol("Pem28_29").play("start");
         });
         
         sym.getSymbol("simEstante").$("Pem28_29").mouseout(function() {
         		sym.getSymbol("simEstante").getSymbol("Pem28_29").stop("end");
         });
         
         sym.getSymbol("simEstante").$("Pem28_30").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("Pem28_30").stop("start");
         	sym.getSymbol("simEstante").getSymbol("Pem28_30").play("start");
         });
         
         sym.getSymbol("simEstante").$("Pem28_30").mouseout(function() {
         		sym.getSymbol("simEstante").getSymbol("Pem28_30").stop("end");
         });
         
         sym.getSymbol("simEstante").$("Pem28_31").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("Pem28_31").stop("start");
         	sym.getSymbol("simEstante").getSymbol("Pem28_31").play("start");
         });
         
         sym.getSymbol("simEstante").$("Pem28_31").mouseout(function() {
         		sym.getSymbol("simEstante").getSymbol("Pem28_31").stop("end");
         });
         
         sym.getSymbol("simEstante").$("Pem28_32").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("Pem28_32").stop("start");
         	sym.getSymbol("simEstante").getSymbol("Pem28_32").play("start");
         });
         
         sym.getSymbol("simEstante").$("Pem28_32").mouseout(function() {
         		sym.getSymbol("simEstante").getSymbol("Pem28_32").stop("end");
         });
         
         sym.getSymbol("simEstante").$("Pem28_33").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("Pem28_33").stop("start");
         	sym.getSymbol("simEstante").getSymbol("Pem28_33").play("start");
         });
         
         sym.getSymbol("simEstante").$("Pem28_33").mouseout(function() {
         		sym.getSymbol("simEstante").getSymbol("Pem28_33").stop("end");
         });
         
         sym.getSymbol("simEstante").$("Pem28_34").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("Pem28_34").stop("start");
         	sym.getSymbol("simEstante").getSymbol("Pem28_34").play("start");
         });
         
         sym.getSymbol("simEstante").$("Pem28_34").mouseout(function() {
         		sym.getSymbol("simEstante").getSymbol("Pem28_34").stop("end");
         });
         
         sym.getSymbol("simEstante").$("Pem28_35").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("Pem28_35").stop("start");
         	sym.getSymbol("simEstante").getSymbol("Pem28_35").play("start");
         });
         
         sym.getSymbol("simEstante").$("Pem28_35").mouseout(function() {
         		sym.getSymbol("simEstante").getSymbol("Pem28_35").stop("end");
         });
         
         sym.getSymbol("simEstante").$("Pem28_36").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("Pem28_36").stop("start");
         	sym.getSymbol("simEstante").getSymbol("Pem28_36").play("start");
         });
         
         sym.getSymbol("simEstante").$("Pem28_36").mouseout(function() {
         		sym.getSymbol("simEstante").getSymbol("Pem28_36").stop("end");
         });
         
         sym.getSymbol("simEstante").$("Pem28_37").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("Pem28_37").stop("start");
         	sym.getSymbol("simEstante").getSymbol("Pem28_37").play("start");
         });
         
         sym.getSymbol("simEstante").$("Pem28_37").mouseout(function() {
         		sym.getSymbol("simEstante").getSymbol("Pem28_37").stop("end");
         });
         
         sym.getSymbol("simEstante").$("Pem28_38").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("Pem28_38").stop("start");
         	sym.getSymbol("simEstante").getSymbol("Pem28_38").play("start");
         });
         
         sym.getSymbol("simEstante").$("Pem28_38").mouseout(function() {
         		sym.getSymbol("simEstante").getSymbol("Pem28_38").stop("end");
         });
         
         sym.getSymbol("simEstante").$("Pem28_39").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("Pem28_39").stop("start");
         	sym.getSymbol("simEstante").getSymbol("Pem28_39").play("start");
         });
         
         sym.getSymbol("simEstante").$("Pem28_39").mouseout(function() {
         		sym.getSymbol("simEstante").getSymbol("Pem28_39").stop("end");
         });
         
         sym.getSymbol("simEstante").$("Pem28_40").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("Pem28_40").stop("start");
         	sym.getSymbol("simEstante").getSymbol("Pem28_40").play("start");
         });
         
         sym.getSymbol("simEstante").$("Pem28_40").mouseout(function() {
         		sym.getSymbol("simEstante").getSymbol("Pem28_40").stop("end");
         });
         
         sym.getSymbol("simEstante").$("Pem28_41").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("Pem28_41").stop("start");
         	sym.getSymbol("simEstante").getSymbol("Pem28_41").play("start");
         });
         
         sym.getSymbol("simEstante").$("Pem28_41").mouseout(function() {
         		sym.getSymbol("simEstante").getSymbol("Pem28_41").stop("end");
         });
         
         //Eventos de mostrar tooltip mostrador
         sym.getSymbol("simEstante").getSymbol("simMostrador").$("Pem28_42").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_42").stop("start");
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_42").play("start");
         });
         
         sym.getSymbol("simEstante").getSymbol("simMostrador").$("Pem28_42").mouseout(function() {
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_42").stop("end");
         });
         
         sym.getSymbol("simEstante").getSymbol("simMostrador").$("Pem28_43").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_43").stop("start");
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_43").play("start");
         });
         
         sym.getSymbol("simEstante").getSymbol("simMostrador").$("Pem28_43").mouseout(function() {
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_43").stop("end");
         });
         
         sym.getSymbol("simEstante").getSymbol("simMostrador").$("Pem28_44").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_44").stop("start");
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_44").play("start");
         });
         
         sym.getSymbol("simEstante").getSymbol("simMostrador").$("Pem28_44").mouseout(function() {
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_44").stop("end");
         });
         
         sym.getSymbol("simEstante").getSymbol("simMostrador").$("Pem28_45").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_45").stop("start");
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_45").play("start");
         });
         
         sym.getSymbol("simEstante").getSymbol("simMostrador").$("Pem28_45").mouseout(function() {
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_45").stop("end");
         });
         
         sym.getSymbol("simEstante").getSymbol("simMostrador").$("Pem28_46").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_46").stop("start");
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_46").play("start");
         });
         
         sym.getSymbol("simEstante").getSymbol("simMostrador").$("Pem28_46").mouseout(function() {
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_46").stop("end");
         });
         
         sym.getSymbol("simEstante").getSymbol("simMostrador").$("Pem28_47").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_47").stop("start");
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_47").play("start");
         });
         
         sym.getSymbol("simEstante").getSymbol("simMostrador").$("Pem28_47").mouseout(function() {
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_47").stop("end");
         });
         
         sym.getSymbol("simEstante").getSymbol("simMostrador").$("Pem28_48").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_48").stop("start");
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_48").play("start");
         });
         
         sym.getSymbol("simEstante").getSymbol("simMostrador").$("Pem28_48").mouseout(function() {
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_48").stop("end");
         });
         
         sym.getSymbol("simEstante").getSymbol("simMostrador").$("Pem28_49").mouseover(function() {
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_49").stop("start");
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_49").play("start");
         });
         
         sym.getSymbol("simEstante").getSymbol("simMostrador").$("Pem28_49").mouseout(function() {
         	sym.getSymbol("simEstante").getSymbol("simMostrador").getSymbol("Pem28_49").stop("end");
         });
         
         
         
         
         
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'simEstante'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         Draggable.create(sym.$(".box"), {type:"x,y", edgeResistance:0.65, bounds:sym.getComposition().getStage().$("container"),throwProps:true});
         

      });
      //Edge binding end

   })("simEstante");
   //Edge symbol end:'simEstante'

   //=========================================================
   
   //Edge symbol: 'simMostrador'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1600, function(sym, e) {
         Draggable.create(sym.$(".box1"), {type:"x,y", edgeResistance:0.65, bounds:sym.getComposition().getStage().$("container"),throwProps:true});

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1200, function(sym, e) {
         sym.getComposition().getStage().getSymbol("simCesto").play();

      });
      //Edge binding end

   })("simMostrador");
   //Edge symbol end:'simMostrador'

   //=========================================================
   
   //Edge symbol: 'simTest2'
   (function(symbolName) {   
   
   })("simTest2");
   //Edge symbol end:'simTest2'

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
   
   //Edge symbol: 'simCesto'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("simIntrucciones").play();

      });
      //Edge binding end

   })("simCesto");
   //Edge symbol end:'simCesto'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'simIntrucciones'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2455, function(sym, e) {
         sym.stop();
         mySoundAmbient.volume(0.25);
         mySound1.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3205, function(sym, e) {
         sym.getComposition().getStage().addEventIntrucciones();
         mySoundAmbient.volume(0.5);
         this.deleteSymbol();

      });
      //Edge binding end

   })("simIntrucciones");
   //Edge symbol end:'simIntrucciones'

   //=========================================================
   
   //Edge symbol: 'Pem28_22'
   (function(symbolName) {   
   
   })("Pem28_22");
   //Edge symbol end:'Pem28_22'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
   })("Pem28_26");
   //Edge symbol end:'Pem28_26'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
   })("Pem28_27");
   //Edge symbol end:'Pem28_27'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
   })("Pem28_28");
   //Edge symbol end:'Pem28_28'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
   })("Pem28_29");
   //Edge symbol end:'Pem28_29'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
   })("Pem28_30");
   //Edge symbol end:'Pem28_30'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
   })("Pem28_31");
   //Edge symbol end:'Pem28_31'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
   })("Pem28_32");
   //Edge symbol end:'Pem28_32'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
   })("Pem28_33");
   //Edge symbol end:'Pem28_33'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
   })("Pem28_34");
   //Edge symbol end:'Pem28_34'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
   })("Pem28_35");
   //Edge symbol end:'Pem28_35'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
   })("Pem28_36");
   //Edge symbol end:'Pem28_36'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
   })("Pem28_37");
   //Edge symbol end:'Pem28_37'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
   })("Pem28_38");
   //Edge symbol end:'Pem28_38'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
   })("Pem28_39");
   //Edge symbol end:'Pem28_39'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
   })("Pem28_40");
   //Edge symbol end:'Pem28_40'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
   })("Pem28_41");
   //Edge symbol end:'Pem28_41'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
   })("Pem28_42");
   //Edge symbol end:'Pem28_42'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
      })("Pem28_43");
   //Edge symbol end:'Pem28_43'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
      })("Pem28_44");
   //Edge symbol end:'Pem28_44'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
      })("Pem28_45");
   //Edge symbol end:'Pem28_45'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
      })("Pem28_46");
   //Edge symbol end:'Pem28_46'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
      })("Pem28_47");
   //Edge symbol end:'Pem28_47'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
      })("Pem28_48");
   //Edge symbol end:'Pem28_48'

   //=========================================================
   
   //Edge symbol: 'Pem28_1'
   (function(symbolName) {   
   
      })("Pem28_49");
   //Edge symbol end:'Pem28_49'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-206117551");