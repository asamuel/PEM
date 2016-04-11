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
         sym.getSymbol("simSol").play();
         sym.getSymbol("simNubes").play();
         sym.getSymbol("simIntrucciones").play();
         sym.$("simGuardabarranco").show();
         sym.getSymbol("simGuardabarranco").play();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.setVariable("mySound1", 0);
         sym.setVariable("mySound2", 0);
         sym.setVariable("mySound3", 0);
         sym.setVariable("mySound4", 0);
         sym.setVariable("mySound5", 0);
         sym.setVariable("mySound6", 0);
         sym.setVariable("mySound7", 0);
         sym.setVariable("mySound8", 0);
         sym.setVariable("mySound9", 0);
         sym.setVariable("cont", 0);
         sym.setVariable("arrayState", 0);
         sym.setVariable("arraySave", 0);
         var valMp3=true,valMp32=false,cont=0,arrayState=["end","end1","end2","end3","end4","end5"], arraySave=[];
         
         sym.$("siguiente").hide();
         sym.$("simOtherFunction").hide();
         sym.$("simGuardabarranco").hide();
         
         sym.addEventInstruccion = function  () {
         	sym.getSymbol("simMenu").$("simIntruccion3").click(function() {
         		mySound2.volume(0.2);
         		mySound4.stop();
         		mySound5.stop();
         		mySound6.stop();
         		mySound7.stop();
         		mySound8.stop();
         		mySound9.stop();
         		mySound3.play();
         		bootbox.dialog({
         		  message: "<h4 style='font-family=Arial, Helvetica, sans-serif'>"+
         		  "Observa en el letrero las imágenes y razona las preguntas. "+
         		  "Escribe tu respuesta en el cuadro de texto."+"</h4>",
         		  title: "<h2 style='font-family=Arial, Helvetica, sans-serif'>Instrucciones<h2>",
         		  closeButton:false,
         		  buttons: {
         			 main: {
         				label: "Aceptar!",
         				className: "btn-primary",
         				callback: function() {
         					 mySound3.stop();
         					 mySound2.volume(0.5);
         				}
         			 }
         		  }
         		});
         	});
         }
         
         sym.addEventPlaceHolder = function () {
         	sym.$("#myT").keypress(function (event) {
         	  if(event.keyCode == 10 || event.keyCode == 13)  // the enter key code
         	  {
         			if(valMp32!=false){
         				nextWord();
         				return false;   //no acceptar el enter
         			}
         			else
         				event.preventDefault(); 
         	  }        
         	});
         }
         
         sym.cambiarRotulo = function  () {
         	sym.getSymbol("simLetrero").play();
         }
         sym.siguiente = function  () {
         	nextWord();
         }
         sym.showOtherFunction = function  () {
         	sym.$("simOtherFunction").show();
         	sym.getSymbol("simOtherFunction").play();
         	sym.$("siguiente").hide();
         	sym.$("simLetrero").hide();
         }
         sym.addTooltip=function (){
         	sym.$('siguiente').sBubble({
                 content: 'Da click para pasar a otra imágen!',
                 position: 'left',
                 height: 45,
                 width: 150,
                 theme: 'black'
          });
         }
         
         $( document ).ready(function() {
           mySound2 = new Howl({
           urls: ['media/ukulele_2.ogg','media/ukulele_2.mp3'],
           loop: true,
           onend: function() {
           }
           });
           mySound2.play();
           mySound2.volume(0.5);
         });
         //Cargar audio 
         mySound1 = new Howl({
           urls: ['media/pem108_1.ogg','media/pem108_1.mp3'],
         	onend: function() {
         		sym.getSymbol("simIntrucciones").play("end");
           }
         });
        
         
         mySound3 = new Howl({
           urls: ['media/pem108_1.ogg','media/pem108_1.mp3'],
         	onend: function() {
           }
         });
         
         mySound4 = new Howl({
           urls: ['media/pem108_2.ogg','media/pem108_2.mp3'],
         	onend: function() {
         	valMp32=true;
         	mySound2.volume(0.5);
           }
         });
         mySound5 = new Howl({
           urls: ['media/pem108_3.ogg','media/pem108_3.mp3'],
         	onend: function() {
         	valMp32=true;
         	mySound2.volume(0.5);
           }
         });
         mySound6 = new Howl({
           urls: ['media/pem108_4.ogg','media/pem108_4.mp3'],
         	onend: function() {
         	valMp32=true;
         	mySound2.volume(0.5);
           }
         });
         mySound7 = new Howl({
           urls: ['media/pem108_5.ogg','media/pem108_5.mp3'],
         	onend: function() {
         	valMp32=true;
         	mySound2.volume(0.5);
           }
         });
         mySound8 = new Howl({
           urls: ['media/pem108_6.ogg','media/pem108_6.mp3'],
         	onend: function() {
         	valMp32=true;
         	mySound2.volume(0.5);
           }
         });
         
         mySound9 = new Howl({
           urls: ['media/pem108_7.ogg','media/pem108_7.mp3'],
         	onend: function() {
         	valMp32=true;
         	mySound2.volume(0.5);
           }
         });
         
         sym.getSymbol("simMenu").$("simSonido").click(function() {
         	if(valMp3){
         		mySound2.stop();
         		valMp3=false;
         	}		
         	else{
         		mySound2.play();
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

         sym.drawTextArea = function (){
          var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
          var hDiv1=sym.$("divTextArea").height();
          var wDiv1=sym.$("divTextArea").width();
           // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
          var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
          var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
          var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
          var myTextArea='<textarea id="myT" style="color:black;" placeholder="Escribe aquí.."></textarea>';
          sym.$("divTextArea").html(myTextArea);
          if(isOpera){
         	 jss.set('::-webkit-input-placeholder ', {
         	 'color': 'black',
         	 'text-align': 'center',
         	 'font-style': 'italic',
         	 });
          }
          if(isChrome){
         	 jss.set('::-webkit-input-placeholder ', {
         	 'color': 'black',
         	 'text-align': 'center',
         	 'font-style': 'italic',
         	 });
          }
          if(isFirefox){
         	 jss.set(':-moz-placeholder', {
         	 'color': 'black',
         	 'text-align': 'center',
         	 'font-style': 'italic',
         	 });
         	 jss.set('::-moz-placeholder', {
         	 'color': 'black',
         	 'text-align': 'center',
         	 'font-style': 'italic',
         	 });
          }
          if(isIE){
         	 jss.set(':-ms-input-placeholder', {
         	 'color': 'black',
         	 'text-align': 'center',
         	 'font-style': 'italic',
         	 });
          }
         
          sym.$("#myT").css({"color" : "black", "font-style": "bold", "width": wDiv1, "height": hDiv1});
          sym.$("#myT").css({"background-color": "#E4F1FE", "resize": "none"});
          sym.$("#myT").css({"font-size": "150%", "text-shadow": "0 0 0.9em white, 0 0 0.9em #87F, 0 0 0.9em #87F"});
          sym.$("#myT").css({"text-align":"center"});
          //sym.$("#myT").css({"position": "absolute","top":"50%","left":"50%","transform": "translate(-50%,-50%)"});
         }
         
         
         //Funciones de click de los botones
         sym.getSymbol("simOtherFunction").$( "divVer" ).bind( "click", function() {
         
         	var myTable1="<table class='table'>"+
         			"<thead>"+
         				"<tr>"+
         				  "<th>¿Por qué no hay luz?</th>"+
         				"</tr>"+
         			 "</thead>";
         	myTable1+="<tbody>"+
         				"<tr class='success'>"+
         				 	"<td>"+"	"+arraySave[0]+"</td>"+
         				"</tr>"+
         				"</tbody>";+
         				"</table>";
          	var myTable2="<table class='table'>"+
         			"<thead>"+
         				"<tr>"+
         				  "<th>¿Por qué no hay agua?</th>"+
         				"</tr>"+
         			 "</thead>";
         	myTable2+="<tbody>"+
         				"<tr class='info'>"+
         				 	"<td>"+"	"+arraySave[1]+"</td>"+
         				"</tr>"+
         				"</tbody>";+
         				"</table>";
          	var myTable3="<table class='table'>"+
         			"<thead>"+
         				"<tr>"+
         				  "<th>¿Por qué Abril está triste?</th>"+
         				"</tr>"+
         			 "</thead>";
         	myTable3+="<tbody>"+
         				"<tr class='success'>"+
         				 	"<td>"+"	"+arraySave[2]+"</td>"+
         				"</tr>"+
         				"</tbody>";+
         				"</table>";
         	var myTable4="<table class='table'>"+
         			"<thead>"+
         				"<tr>"+
         				  "<th>¿Por qué el perro mordió al niño?</th>"+
         				"</tr>"+
         			 "</thead>";
         	myTable4+="<tbody>"+
         				"<tr class='info'>"+
         				 	"<td>"+"	"+arraySave[3]+"</td>"+
         				"</tr>"+
         				"</tbody>";+
         				"</table>";
         	var myTable5="<table class='table'>"+
         			"<thead>"+
         				"<tr>"+
         				  "<th>¿Por qué Pedro salió mal en el examen?</th>"+
         				"</tr>"+
         			 "</thead>";
         	myTable5+="<tbody>"+
         				"<tr class='success'>"+
         				 	"<td>"+"	"+arraySave[4]+"</td>"+
         				"</tr>"+
         				"</tbody>";+
         				"</table>";
           var myTable6="<table class='table'>"+
         			"<thead>"+
         				"<tr>"+
         				  "<th>¿Por qué Juan está cansado?</th>"+
         				"</tr>"+
         			 "</thead>";
         	myTable6+="<tbody>"+
         				"<tr class='info'>"+
         				 	"<td>"+"	"+arraySave[5]+"</td>"+
         				"</tr>"+
         				"</tbody>";+
         				"</table>";
         		/*for(var i=0; i<myWordSelected.length; i++){
         			myTable+="<tbody>"+
         				"<tr class='success'>"+
         				  "<td>"+myWordSelected[i].myWordSelected+"</td>"+
         				  "<td>"+myWordSelected[i].feedback+"</td>"+
         				"</tr>";
         			console.log("Palabra-->"+myWordSelected[i].myWordSelected+" "+"FeedBack-->"+myWordSelected[i].feedback);
         		}
         		myTable+="</tbody>"+
         				"</table>";*/
         		showFeedback (myTable1,myTable2, myTable3,myTable4,myTable5,myTable6)
         });
         
         sym.getSymbol("simOtherFunction").$( "divReiniciar" ).bind( "click", function() {
         	 location.reload();
         });
         
         function showFeedback(myTable1,myTable2, myTable3,myTable4,myTable5,myTable6){
          var box = bootbox.dialog({
         	  message: myTable1+myTable2+myTable3+myTable4+myTable5+myTable6,
         	  title: "¡Resultados!",
         	  closeButton:false,
         	  buttons: {
         		main: {
         		 label: "Aceptar!",
         		 className: "btn-primary",
         		 callback: function() {
         		 }
         		}
         	  }
         	});
         }
         
         function nextWord(){
         	var feedBack=sym.$("#myT").val();
         		if(feedBack!="" && cont!=6 && valMp32!=false){
         			arraySave.push(feedBack);
         			valMp32=false;
         			sym.$("#myT").val("");
         			sym.$("#myT").hide();
         			sym.$("siguiente").hide();
         			sym.getSymbol("simLetrero").play(arrayState[cont]);
         			cont++;
         		}
         }
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${siguiente}", "click", function(sym, e) {
         sym.siguiente();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'simGlobo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simGlobo");
   //Edge symbol end:'simGlobo'

   //=========================================================
   
   //Edge symbol: 'simSol'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simSol");
   //Edge symbol end:'simSol'

   //=========================================================
   
   //Edge symbol: 'simNubes'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("simGlobo").play();

      });
      //Edge binding end

   })("simNubes");
   //Edge symbol end:'simNubes'

   //=========================================================
   
   //Edge symbol: 'simLetrero'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         mySound4.play();
         mySound2.volume(0.2);
         sym.getComposition().getStage().drawTextArea();
         sym.getComposition().getStage().addEventPlaceHolder();
         sym.getComposition().getStage().$("siguiente").show( "slow" );
         sym.getComposition().getStage().addTooltip();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.stop();
         //sym.getComposition().getStage().drawTextArea();
         mySound5.play();
         mySound2.volume(0.2);
         sym.getComposition().getStage().$("siguiente").show( "slow" );
         sym.getComposition().getStage().addTooltip();
         sym.getComposition().getStage().$("#myT").show( "slow" );

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.$("imagen_2").remove();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getSymbol("simImagen12").deleteSymbol();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym, e) {
         sym.stop();
         mySound6.play();
         mySound2.volume(0.2);
         sym.getComposition().getStage().$("siguiente").show( "slow" );
         sym.getComposition().getStage().addTooltip();
         sym.getComposition().getStage().$("#myT").show( "slow" );

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.$("imagen_3").remove();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10250, function(sym, e) {
         sym.stop();
         mySound7.play();
         mySound2.volume(0.2);
         sym.getComposition().getStage().$("siguiente").show( "slow" );
         sym.getComposition().getStage().addTooltip();
         sym.getComposition().getStage().$("#myT").show( "slow" );

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.$("imagen_4").remove();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13250, function(sym, e) {
         sym.stop();
         mySound8.play();
         mySound2.volume(0.2);
         sym.getComposition().getStage().$("siguiente").show( "slow" );
         sym.getComposition().getStage().addTooltip();
         sym.getComposition().getStage().$("#myT").show( "slow" );

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.$("imagen_5").remove();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16250, function(sym, e) {
         sym.stop();
         mySound9.play();
         mySound2.volume(0.2);
         sym.getComposition().getStage().$("siguiente").show( "slow" );
         sym.getComposition().getStage().addTooltip();
         sym.getComposition().getStage().$("#myT").show( "slow" );

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16750, function(sym, e) {
         sym.$("imagen_6").remove();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17750, function(sym, e) {
         sym.getComposition().getStage().showOtherFunction();

      });
      //Edge binding end

   })("simLetrero");
   //Edge symbol end:'simLetrero'

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
         mySound2.volume(0.2);
         mySound1.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.getComposition().getStage().addEventInstruccion();
         sym.getComposition().getStage().cambiarRotulo();
         mySound2.volume(0.5);
         this.deleteSymbol();

      });
      //Edge binding end

   })("simIntrucciones");
   //Edge symbol end:'simIntrucciones'

   //=========================================================
   
   //Edge symbol: 'simImagen1'
   (function(symbolName) {   
   
   })("simImagen1");
   //Edge symbol end:'simImagen1'

   //=========================================================
   
   //Edge symbol: 'simOtherFunction'
   (function(symbolName) {   
   
   })("simOtherFunction");
   //Edge symbol end:'simOtherFunction'

   //=========================================================
   
   //Edge symbol: 'simGuardabarranco'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 57000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

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
         sym.play(0);// introducir código aquí

      });
      //Edge binding end

   })("spritAlaIzquierda_symbol_1");
   //Edge symbol end:'spritAlaIzquierda_symbol_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-345174481");