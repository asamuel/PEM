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
         sym.setVariable("total", 0);
         sym.setVariable("test", 0);
         sym.setVariable("mySound1", 0);
         sym.setVariable("mySound2", 0);
         sym.setVariable("mySound3", 0);
         sym.setVariable("mySound4", 0);
         sym.setVariable("mySound5", 0);
         sym.setVariable("mySound6", 0);
         sym.setVariable("mySoundAmbient", 0);
         sym.setVariable("myIntruccion", 0);
         var valMp3=true;
         myIntruccion=sym.getSymbol("simIntrucciones");
         
         var myInput1="<input placeholder='' type='number'  id=input1>";
         sym.$("divInput1").html(myInput1);
         var hDiv=sym.$("divInput1").height();
         var wDiv=sym.$("divInput1").width();
         sym.$("#input1").css({"width":wDiv/1.4+"px","background-color":"#1BBC9B","font-size":"32px", "height":hDiv/1.4+"px", "margin": "0 auto"});
         sym.$("#input1").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold"});
         sym.$("#input1").css({"text-align":"center", "color":"#fff","position": "absolute","top":"50%","left":"50%",
             "-ms-transform":"translate(-50%,-50%)","-webkit-transform":"translate(-50%,-50%)",
             "-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         
         var myInput2="<input placeholder='' type='number'  id=input2>";
         sym.$("divInput2").html(myInput2);
         sym.$("#input2").css({"width":wDiv/1.4+"px","background-color":"#1BBC9B","font-size":"32px", "height":hDiv/1.4+"px", "margin": "0 auto"});
         sym.$("#input2").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold"});
         sym.$("#input2").css({"text-align":"center", "color":"#fff","position": "absolute","top":"50%","left":"50%",
            "-ms-transform":"translate(-50%,-50%)","-webkit-transform":"translate(-50%,-50%)",
            "-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         
         sym.$("divResult").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold","text-align":"center"});
         sym.$("divResult").css({"font-size":"32px", "color":"red", "line-height":"45px"});
         sym.$("divResult").html(total.toString());
         
         
         //Cargar audio 
         
         mySound1 = new Howl({
           urls: ['media/pem71_1.ogg','media/pem71_1.mp3'],
            onend: function() {
               sym.getSymbol("simIntrucciones").play("int2");
           }
         });
         
         mySound2 = new Howl({
           urls: ['media/pem71_2.ogg','media/pem71_2.mp3'],
            onend: function() {
                sym.getSymbol("simIntrucciones").play("int3");
         
           }
         });
         
         mySound3 = new Howl({
           urls: ['media/pem71_3.ogg','media/pem71_3.mp3'],
            onend: function() {
               sym.getSymbol("simIntrucciones").play("int4");
           }
         });
         
         mySound4 = new Howl({
           urls: ['media/pem71_4.ogg','media/pem71_4.mp3'],
            onend: function() {
               sym.getSymbol("simIntrucciones").play("int5");
         
           }
         });
         
         mySound5 = new Howl({
           urls: ['media/pem71_5.ogg','media/pem71_5.mp3'],
            onend: function() {
               sym.getSymbol("simIntrucciones").play("int6");
           }
         });
         
         mySound6 = new Howl({
           urls: ['media/pem71_6.ogg','media/pem71_6.mp3']
         });

         $( document ).ready(function() {
            console.log( "ready!" );
            mySoundAmbient = new Howl({
              urls: ['media/Bright_Wish.ogg','media/Bright_Wish.mp3'],
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
   
   //Edge symbol: 'Precargador'
   (function(symbolName) {   
   
   })("Precargador");
   //Edge symbol end:'Precargador'

   //=========================================================
   
   //Edge symbol: 'simCircTrian'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var uniqueArray=[],uniqueArray1=[],numerosArray=[],elementCant=10, rand="", sumaCirculo=0, sumaTriangulo=0;
         
         //Añadir estilo
         sym.$("Ellips1").css({"text-shadow":" -2px -2px 0 #000,  2px -2px 0 #000,-2px 2px 0 #000, 2px 2px 0 #000","font-size":"42px", "color":"#fff"});
         sym.$("Ellips1").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold"});
         sym.$("Ellips1").css({"background":getRandomColor(),"text-align":"center","line-height":"90px"});
         
         sym.$("Ellips2").css({"text-shadow":" -2px -2px 0 #000,  2px -2px 0 #000,-2px 2px 0 #000, 2px 2px 0 #000","font-size":"42px", "color":"#fff"});
         sym.$("Ellips2").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold"});
         sym.$("Ellips2").css({"background":getRandomColor(),"text-align":"center","line-height":"90px"});
         
         sym.$("Ellips3").css({"text-shadow":" -2px -2px 0 #000,  2px -2px 0 #000,-2px 2px 0 #000, 2px 2px 0 #000","font-size":"42px", "color":"#fff"});
         sym.$("Ellips3").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold"});
         sym.$("Ellips3").css({"background":getRandomColor(),"text-align":"center","line-height":"90px"});
         
         sym.$("Ellips4").css({"text-shadow":" -2px -2px 0 #000,  2px -2px 0 #000,-2px 2px 0 #000, 2px 2px 0 #000","font-size":"42px", "color":"#fff"});
         sym.$("Ellips4").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold"});
         sym.$("Ellips4").css({"background":getRandomColor(),"text-align":"center","line-height":"90px"});
         
         sym.$("Ellips5").css({"text-shadow":" -2px -2px 0 #000,  2px -2px 0 #000,-2px 2px 0 #000, 2px 2px 0 #000","font-size":"42px", "color":"#fff"});
         sym.$("Ellips5").css({"font-family":"Arial, Helvetica, sans-serif ","font-weight": "bold"});
         sym.$("Ellips5").css({"background":getRandomColor(),"text-align":"center","line-height":"90px"});
         
         sym.getSymbol("Triangle1").$("triangle1text").css({"text-shadow":" -2px -2px 0 #000,  2px -2px 0 #000,-2px 2px 0 #000, 2px 2px 0 #000","font-size":"58px", "color":"#fff"});
         sym.getSymbol("Triangle1").$("triangle1text").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold","text-align":"center","line-height":"175px"});
         sym.getSymbol("Triangle1").$("triangleRec1").css({"background":getRandomColor()});
         
         sym.getSymbol("Triangle2").$("triangle2text").css({"text-shadow":" -2px -2px 0 #000,  2px -2px 0 #000,-2px 2px 0 #000, 2px 2px 0 #000","font-size":"58px", "color":"#fff"});
         sym.getSymbol("Triangle2").$("triangle2text").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold","text-align":"center","line-height":"175px"});
         sym.getSymbol("Triangle2").$("triangleRec2").css({"background":getRandomColor()});
         
         sym.getSymbol("Triangle3").$("triangle3text").css({"text-shadow":" -2px -2px 0 #000,  2px -2px 0 #000,-2px 2px 0 #000, 2px 2px 0 #000","font-size":"58px", "color":"#fff"});
         sym.getSymbol("Triangle3").$("triangle3text").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold","text-align":"center","line-height":"175px"});
         sym.getSymbol("Triangle3").$("triangleRec3").css({"background":getRandomColor()});
         
         sym.getSymbol("Triangle4").$("triangle4text").css({"text-shadow":" -2px -2px 0 #000,  2px -2px 0 #000,-2px 2px 0 #000, 2px 2px 0 #000","font-size":"58px", "color":"#fff"});
         sym.getSymbol("Triangle4").$("triangle4text").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold","text-align":"center","line-height":"175px"});
         sym.getSymbol("Triangle4").$("triangleRec4").css({"background":getRandomColor()});
         
         sym.getSymbol("Triangle5").$("triangle5text").css({"text-shadow":" -2px -2px 0 #000,  2px -2px 0 #000,-2px 2px 0 #000, 2px 2px 0 #000","font-size":"58px", "color":"#fff"});
         sym.getSymbol("Triangle5").$("triangle5text").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold","text-align":"center","line-height":"175px"});
         sym.getSymbol("Triangle5").$("triangleRec5").css({"background":getRandomColor()});
         
         //Lleanamos el arreglo
         for (var i = 0; i < elementCant; i++) {
         	numerosArray.push(randomNoRepeat());
         	//rand+=(i==4)?randomNoRepeat():randomNoRepeat()+",";
         }
         
         //Mostrar Resultados
         sym.$("Ellips1").html(numerosArray[0]);
         sym.$("Ellips2").html(numerosArray[1]);
         sym.$("Ellips3").html(numerosArray[2]);
         sym.$("Ellips4").html(numerosArray[3]);
         sym.$("Ellips5").html(numerosArray[4]);
         sym.getSymbol("Triangle1").$("triangle1text").html(numerosArray[5]);
         sym.getSymbol("Triangle2").$("triangle2text").html(numerosArray[6]);
         sym.getSymbol("Triangle3").$("triangle3text").html(numerosArray[7]);
         sym.getSymbol("Triangle4").$("triangle4text").html(numerosArray[8]);
         sym.getSymbol("Triangle5").$("triangle5text").html(numerosArray[9]);
         
         for (var i = 0; i < 3; i++) {
         	sumaCirculo=sumaCirculo+parseInt(numerosArray[randomNoRepeat1(0)]);
         }
         uniqueArray1=[];
         for (var i = 0; i < 3; i++) {
         	sumaTriangulo=sumaTriangulo+parseInt(numerosArray[randomNoRepeat1(1)]);
         }
         console.log(sumaTriangulo);
         console.log(sumaCirculo);
         total=sumaTriangulo-sumaCirculo;
         
         //funciones 
         function getRandomColor() {
         	    var letters = '0123456789ABCDEF'.split('');
         	    var color = '#';
         	    for (var i = 0; i < 6; i++ ) {
         	        color += letters[Math.floor(Math.random() * 16)];
         	    }
         	    return color;
         }
         
         function randomNoRepeat () {
         			//Llenamos el arreglo
         			if (uniqueArray.length==0){
         				for (var i = 0; i < 20; i++) {
         					uniqueArray.push(i);
         				};
         			}
         			var index=Math.floor(Math.random()*uniqueArray.length);
         			var val=uniqueArray[index];
         			uniqueArray.splice(index,1);
         			return val
         		}
         
         function randomNoRepeat1 (cantid) {
         			//Llenamos el arreglo
         			if (uniqueArray1.length==0){
         				if(cantid==0){
         					for (var i = 0; i < 5; i++) {
         					uniqueArray1.push(i);
         					};
         				}
         				else{
         					for (var i = 5; i < 10; i++) {
         					uniqueArray1.push(i);
         					};
         				}
         			}
         			var index=Math.floor(Math.random()*uniqueArray1.length);
         			var val=uniqueArray1[index];
         			uniqueArray1.splice(index,1);
         			return val
         		}
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2300, function(sym, e) {
         Draggable.create(sym.$(".box"), {type:"x,y", edgeResistance:0.65, bounds:sym.$("simCircTrian"), throwProps:true});

      });
      //Edge binding end

   })("simCircTrian");
   //Edge symbol end:'simCircTrian'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
   })("Triangle1");
   //Edge symbol end:'Triangle1'

   //=========================================================
   
   //Edge symbol: 'Triangle1_1'
   (function(symbolName) {   
   
      })("Triangle2");
   //Edge symbol end:'Triangle2'

   //=========================================================
   
   //Edge symbol: 'Triangle2_1'
   (function(symbolName) {   
   
      })("Triangle3");
   //Edge symbol end:'Triangle3'

   //=========================================================
   
   //Edge symbol: 'Triangle1_1'
   (function(symbolName) {   
   
      })("Triangle4");
   //Edge symbol end:'Triangle4'

   //=========================================================
   
   //Edge symbol: 'Triangle1_1'
   (function(symbolName) {   
   
      })("Triangle5");
   //Edge symbol end:'Triangle5'

   //=========================================================
   
   //Edge symbol: 'simLetras'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 51000, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

   })("simLetras");
   //Edge symbol end:'simLetras'

   //=========================================================
   
   //Edge symbol: 'simIntrucciones'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3592, function(sym, e) {
         sym.stop();
         mySound1.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();
         mySound2.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5200, function(sym, e) {
         sym.$("Text3").remove();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.$("Text2").remove();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5750, function(sym, e) {
         sym.stop();
         mySound3.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.$("Text4").remove();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.$("Rectangle4").remove();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym, e) {
         sym.stop();
         mySound4.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         sym.$("Text5").remove();
         sym.$("Rectangle5").remove();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9250, function(sym, e) {
         sym.stop();
         mySound5.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10250, function(sym, e) {
         mySoundAmbient.volume(0.5);
         this.deleteSymbol();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "click", function(sym, e) {
         mySound1.stop();
         mySound2.stop();
         mySound3.stop();
         mySound4.stop();
         mySound5.stop();
         sym.play("end");
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         mySoundAmbient.volume(0.25);

      });
      //Edge binding end

   })("simIntrucciones");
   //Edge symbol end:'simIntrucciones'

   //=========================================================
   
   //Edge symbol: 'simTrianMov'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

   })("simTrianMov");
   //Edge symbol end:'simTrianMov'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'simMenu'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${simIntruccion3}", "click", function(sym, e) {
         myIntruccion.deleteSymbol();
         mySound1.stop();
         mySound2.stop();
         mySound3.stop();
         mySound4.stop();
         mySound5.stop();
         mySoundAmbient.volume(0.25);
         mySound6.play();
         bootbox.dialog({
           message: "<h4 style='font-family=Arial, Helvetica, sans-serif'>Ubica 3 triángulos en la parte superior del renglón, "+
           "luego suma y escribe el dato a la par."+"<br>"+" Ubica 3 círculos en la parte inferior del renglón, "+
           "suma y escribe el dato a la par."+"<br><br>"+
            "Recuerda que la suma de los triángulos, menos la suma de los círculos, "+
            "es el resultado que se muestra en el hexágono.</h4>",
           title: "<h2 style='font-family=Arial, Helvetica, sans-serif'>Instrucciones<h2>",
           closeButton:false,
           buttons: {
             main: {
               label: "Aceptar!",
               className: "btn-primary",
               callback: function() {
               mySoundAmbient.volume(0.5);
               mySound6.stop();
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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-103672555");