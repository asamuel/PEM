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
         //Variables 
         var anterior="";
         var myIndexCat;
         var myArray=[];
       
         //Css
         jss.set('.box:hover', {
         	'-webkit-box-shadow': '0px 0px 15px 5px #f2e1f2',
         	'-moz-box-shadow': '0px 0px 15px 5px #f2e1f2',
         	'box-shadow': '0px 0px 15px 5px #f2e1f2',
         });
       
         //Agregar tooltip
         sym.getSymbol("simMenu3").$('credit').sBubble({
                 content: 'Créditos',
                 position: 'bottom',
                 height: 30,
                 width: 65,
                 theme: 'black'
          });
         sym.getSymbol("simMenu3").$('back').sBubble({
                 content: 'Ir al menú principal',
                 position: 'bottom',
                 height: 30,
                 width: 130,
                 theme: 'black'
          });
         //Cargar audio 
         mySound1 = new Howl({
           urls: ['../media/Speech_Sleep.ogg','../media/Speech_Sleep.mp3']
         });
       
         sym.getSymbol("simMenu2").$('calculoGrupo').css({'pointer-events':'none'});
         sym.getSymbol("simMenu2").$('imaginacionGrupo').css({'pointer-events':'none'});
         sym.getSymbol("simMenu2").$('razonamientoGrupo').css({'pointer-events':'none'});
         myArray.push(sym.getSymbol("simMenu2").$("calculo"));
         myArray.push(sym.getSymbol("simMenu2").$("imaginacion"));
         myArray.push(sym.getSymbol("simMenu2").$("razonamiento"));
       
         //null:para inicializar la variable
         //raz: razonamiento
         //imag:imaginacion
         //calc:calculo
         //console.log("saved data-->"+localStorage.getItem("indexCat"));
         getValue();
          function getValue () {  
             var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
             if(isIE){
             	myIndexCat = getUrlVars()["indexCat"];
             	console.log("value-->"+myIndexCat);
             	/*var  value;
             	value = load_data_from_server()
             	$.jStorage.set("indexCat",value);
                myIndexCat = $.jStorage.get("indexCat");
                console.log("value-->"+myIndexCat);  */          
             }
             else
                myIndexCat = localStorage.getItem("indexCat")
          }
          function getUrlVars() {
 				var vars = {};
 				var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
 				vars[key] = value;
 				});
 				return vars;
 			}
 
         //Ocultar dos secciones
         if(myIndexCat=="null" || myIndexCat==null){
 			  sym.getSymbol("simCont").$("simCalculo").hide();
 			  sym.getSymbol("simCont").$("simImaginacion").hide();
 			  sym.$("Stage").css({"background-color":"#eb9532"});
 			  anterior="simRazonamientoM";
         }
         if(myIndexCat=="imag"){
 			  sym.getSymbol("simCont").$("simRazonamientoM").hide();
 			  sym.getSymbol("simCont").$("simCalculo").hide();
 			  sym.$("Stage").css({"background-color":"#2574a9"});
 			  anterior="simImaginacion";
         }
         if(myIndexCat=="calc"){
 			  sym.getSymbol("simCont").$("simRazonamientoM").hide();
 			  sym.getSymbol("simCont").$("simImaginacion").hide();
 			  sym.$("Stage").css({"background-color":"#019875"});
 			  anterior="simCalculo";
         }
         if(myIndexCat=="raz"){
 			  sym.getSymbol("simCont").$("simCalculo").hide();
 			  sym.getSymbol("simCont").$("simImaginacion").hide();
 			  sym.$("Stage").css({"background-color":"#eb9532"});
 			  anterior="simRazonamientoM";
         }
 
         //Funciones del mouse hover
         sym.getSymbol("simMenu2").$("razonamiento").mouseover(function() {
         	if(anterior!="simRazonamientoM"){
         		manejarCambio("simRazonamientoM");
         		}
         	changeZIndex("razonamiento");
         });
         sym.getSymbol("simMenu2").$("imaginacion").mouseover(function() {
         	if(anterior!="simImaginacion"){
         		manejarCambio("simImaginacion");
         		}
         	changeZIndex("imaginacion");
         });
 
         sym.getSymbol("simMenu2").$("calculo").mouseover(function() {
         	if(anterior!="simCalculo"){
         		manejarCambio("simCalculo");
         		}
         	changeZIndex("calculo");
         });
 
         function manejarCambio(index){
         	sym.getSymbol("simCont").$(anterior).hide( "fast" );
         	sym.getSymbol("simCont").$(index).show( "slow" );
         	if(index=="simRazonamientoM")
         		sym.$("Stage").css({"background-color":"#eb9532"});
         	if(index=="simImaginacion")
         		sym.$("Stage").css({"background-color":"#2574a9"});
         	if(index=="simCalculo")
         		sym.$("Stage").css({"background-color":"#019875"});
         	mySound1.play();
         	anterior=index;
         }
 
         sym.getSymbol("simMenu3").$("simQuestion").mouseover(function() {
         	sym.getSymbol("simMenu3").getSymbol("simQuestion").stop("start");
         	sym.getSymbol("simMenu3").getSymbol("simQuestion").play("start");
         });
         sym.getSymbol("simMenu3").$("simQuestion").mouseout(function() {
         	sym.getSymbol("simMenu3").getSymbol("simQuestion").stop("end");
         });
 
         sym.getSymbol("simMenu3").$("simCredit").mouseover(function() {
         	sym.getSymbol("simMenu3").getSymbol("simCredit").stop("start");
         	sym.getSymbol("simMenu3").getSymbol("simCredit").play("start");
         });
         sym.getSymbol("simMenu3").$("simCredit").mouseout(function() {
         	sym.getSymbol("simMenu3").getSymbol("simCredit").stop("end");
         });
 
         sym.getSymbol("simMenu3").$("simBack").mouseover(function() {
         	sym.getSymbol("simMenu3").getSymbol("simBack").stop("start");
         	sym.getSymbol("simMenu3").getSymbol("simBack").play("start");
         });
         sym.getSymbol("simMenu3").$("simBack").mouseout(function() {
         	sym.getSymbol("simMenu3").getSymbol("simBack").stop("end");
         });
 
         sym.getSymbol("simMenu3").$("simObj").mouseover(function() {
         	sym.getSymbol("simMenu3").getSymbol("simObj").stop("start");
         	sym.getSymbol("simMenu3").getSymbol("simObj").play("start");
         });
         sym.getSymbol("simMenu3").$("simObj").mouseout(function() {
         	sym.getSymbol("simMenu3").getSymbol("simObj").stop("end");
         });
 
 
         //Imaginacion
         /*sym.getSymbol("simCont").getSymbol("simImaginacion").$("fondo1").wrap( "<a href=\"Pem20/Pem20.html\"  target='_self'></a>" );
 
         sym.getSymbol("simCont").getSymbol("simImaginacion").$("fondo2").wrap( "<a href=\"Pem25/Pem25.html\"  target='_self'></a>" );
 
         sym.getSymbol("simCont").getSymbol("simImaginacion").$("fondo3").wrap( "<a href=\"Pem165/Pem165.html\"  target='_self'></a>" );
 
         sym.getSymbol("simCont").getSymbol("simImaginacion").$("fondo4").wrap( "<a href=\"Pem28/Pem28.html\"  target='_self'></a>" );
 
         sym.getSymbol("simCont").getSymbol("simImaginacion").$("fondo5").wrap( "<a href=\"Pem20_1/Pem1_1.html\"  target='_self'></a>" );
         
         sym.getSymbol("simCont").getSymbol("simImaginacion").$("fondo6").wrap( "<a href=\"Pem156/Pem156.html\"  target='_self'></a>" );
 
         //Razonamiento
         sym.getSymbol("simCont").getSymbol("simRazonamientoM").$("fondo1").wrap( "<a href=\"Pem94/Pem94.html\"  target='_self'></a>" );
 
         sym.getSymbol("simCont").getSymbol("simRazonamientoM").$("fondo2").wrap( "<a href=\"Pem96/Pem96.html\"  target='_self'></a>" );
 
         sym.getSymbol("simCont").getSymbol("simRazonamientoM").$("fondo3").wrap( "<a href=\"Pem108/Pem108.html\"  target='_self'></a>" );
 
         sym.getSymbol("simCont").getSymbol("simRazonamientoM").$("fondo4").wrap( "<a href=\"Pem35/Pem35.html\"  target='_self'></a>" );
 
         sym.getSymbol("simCont").getSymbol("simRazonamientoM").$("fondo6").wrap( "<a href=\"Pem38/Pem38.html\"  target='_self'></a>" );
 
         sym.getSymbol("simCont").getSymbol("simRazonamientoM").$("fondo7").wrap( "<a href=\"Pem104-105/Pem104-105.html\"  target='_self'></a>" );
 
 
         //Calculo
         sym.getSymbol("simCont").getSymbol("simCalculo").$("fondo1").wrap( "<a href=\"Pem22/Pem2.html\"  target='_self'></a>" );
 
         sym.getSymbol("simCont").getSymbol("simCalculo").$("fondo2").wrap( "<a href=\"Pem24/Pem24.html\"  target='_self'></a>" );
 
         sym.getSymbol("simCont").getSymbol("simCalculo").$("fondo3").wrap( "<a href=\"Pem171/Pem171.html\"  target='_self'></a>" );
 
   		  sym.getSymbol("simCont").getSymbol("simCalculo").$("fondo4").wrap( "<a href=\"Pem71/Pem71.html\"  target='_self'></a>" );
 
   		  sym.getSymbol("simCont").getSymbol("simCalculo").$("fondo5").wrap( "<a href=\"Pem193/Pem193.html\"  target='_self'></a>" );
 
   		  sym.getSymbol("simCont").getSymbol("simCalculo").$("fondo6").wrap( "<a href=\"Pem81-82-84/Pem81-82-84.html\"  target='_self'></a>" );*/
 
 		  sym.getSymbol("simMenu3").getSymbol("simBack").$("back2").wrap(
          "<a href=\"../index.html\"  target='_self'></a>" );
 
          /*sym.getSymbol("simMenu3").getSymbol("simCredit").$("credit2").wrap(
          "<a href=\"creditos.html\"  target='_self'></a>" );*/

        sym.getSymbol("simMenu3").getSymbol("simCredit").$("credit2").click(function() {
             //Modal 
        bootbox.dialog({
          message: "<p style='font-family:Arial, Helvetica, sans-serif; text-align:center'>Nuevos creditos habrán en este sección!</p>"+
          "<img src='../images/octocat.png' alt='Octacat' style='display: block;margin-left: auto; margin-right: auto'>",
          title: "<h2 style='font-family:Arial, Helvetica, sans-serif; text-align:center'>Proximamente...<h2>",
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
          });
 
         sym.getSymbol("simMenu3").getSymbol("simQuestion").$("questionManual").click(function() {
          	 //Modal 
 				bootbox.dialog({
 				  message: "<p style='font-family:Arial, Helvetica, sans-serif; text-align:center'><big>Motivar el proceso de enseñanza – aprendizaje "+
 				  "en la asignatura de matemática, para los estudiantes "+
 				  "de 5to grado en los centros educativos de fe "+
 				  "y alegría, de la ciudad de Managua. </big></p>",
 				  title: "<h2 style='font-family:Arial, Helvetica, sans-serif; text-align:center'>Objetivo del Software Educativo<h2>",
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
          });
    
      $( window ).resize(function() {
        console.log("resize");
  //$( "#log" ).append( "<div>Handler for .resize() called.</div>" );
});
         sym.getSymbol("simMenu3").getSymbol("simObj").$("objective").wrap(
          "<a href=\"../manual/Manual-de-Usuario.pdf\"  target='_blank'></a>" );
 
         function changeZIndex(index){
         	for(var i=0;i<myArray.length;i++){
         		myArray[i].css({"position": "absolute", "z-index":"initial"}); 
         	}
         	sym.getSymbol("simMenu2").$(index).css({"position": "absolute","z-index":-1});
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'simCont'
   (function(symbolName) {   
   
   })("simCont");
   //Edge symbol end:'simCont'

   //=========================================================
   
   //Edge symbol: 'simImaginacion'
   (function(symbolName) {   
   
   })("simImaginacion");
   //Edge symbol end:'simImaginacion'

   //=========================================================
   
   //Edge symbol: 'simImaginacion_1'
   (function(symbolName) {   
   
      })("simRazonamientoM");
   //Edge symbol end:'simRazonamientoM'

   //=========================================================
   
   //Edge symbol: 'simImaginacion_1'
   (function(symbolName) {   
   
      })("simCalculo");
   //Edge symbol end:'simCalculo'

   //=========================================================
   
   //Edge symbol: 'simMenu2'
   (function(symbolName) {   
   
   })("simMenu2");
   //Edge symbol end:'simMenu2'

   //=========================================================
   
   //Edge symbol: 'simMenu3'
   (function(symbolName) {   
   
   })("simMenu3");
   //Edge symbol end:'simMenu3'

   //=========================================================
   
   //Edge symbol: 'simQuestion'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("simQuestion");
   //Edge symbol end:'simQuestion'

   //=========================================================
   
   //Edge symbol: 'simQuestion_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("simCredit");
   //Edge symbol end:'simCredit'

   //=========================================================
   
   //Edge symbol: 'simQuestion_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("simBack");
   //Edge symbol end:'simBack'

   //=========================================================
   
   //Edge symbol: 'simBack_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("simObj");
   //Edge symbol end:'simObj'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-440784112");

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-440784112");