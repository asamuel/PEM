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
         /*Variables super globales----------------------------------------------------------------------------------*/
         sym.setVariable("mySound1", 0);
         sym.setVariable("mySoundAmbient", 0);
         
         /*Variables globales-----------------------------------------------------------------------------------------*/
         var cont=0, ref,objTemp,myTime,valMp3=true, flag="";
         var arrayObj=[];
         var uniqueArray=[];
         var arrayImg=["cube1_1","cube2_2","cube3_3","noCube1_1", "noCube3_3","noCube5_5"];
         
         var arrayCubeImg=["cube1_1","cube2_2","cube3_3"];
         var arrayNoCubeImg=["noCube1_1","noCube3_3","noCube5_5"];
         var arrayCubeGif=["cube1","cube2","cube3"];
         var arrayNoCubeGig=["noCube1","noCube3","noCube5"];
         
         var arrayGig=["cube1","cube2","cube3","noCube1","noCube3","noCube5"];
         
         
         /*Clases---------------------------------------------------------------------------------------------------*/
         function Obj(cubImg, nocubImg,cubGig,nocubGig) {
         	this.cubImg = cubImg;
         	this.nocubImg = nocubImg;
         	this.cubGig = cubGig;
         	this.nocubGig = nocubGig;
         }
         /*Cargar---------------------------------------------------------------------------------------------------*/
         mySound1 = new Howl({
         	urls: ['media/pem156.ogg','media/pem156.mp3']
         });
         /*Funciones Globales---------------------------------------------------------------------------------------*/
         sym.changeCube = function  () {
         	 objTemp=randomNoRepeat(); 	
         	 console.log(objTemp);
         	 
         	 var myImg='<img src="images/'+myRandon(objTemp,"divCube")+'.jpg" alt="cube" class="myCenter">';
         	 sym.$("divCube").html(myImg);
         	 sym.$("divCube").children("img").css({"pointer-events":"none","cursor":"pointer"});
         	 sym.$("divCube").children("img").hide();
         	 sym.$("divCube").children("img").fadeIn( "slow" );
         
         	 var myImg2='<img src="images/'+myRandon(objTemp,"divQ")+'.jpg" alt="cube2" class="myCenter">';
         	 sym.$("divQ").html(myImg2);
         	 sym.$("divQ").children("img").css({"pointer-events":"none","cursor":"pointer"});
         	 sym.$("divQ").children("img").hide();
         	 sym.$("divQ").children("img").fadeIn( "slow" );
         
             sym.$(".myCenter").css({"position": "absolute","top":"50%","left":"50%",
             "-ms-transform":"translate(-50%,-50%)", "-webkit-transform":"translate(-50%,-50%)",
             "-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
          }
         
         sym.fullArray = function  () {
         	for(var i=0;i<arrayCubeImg.length; i++){
         		myClassTemp = new Obj(arrayCubeImg[i], arrayNoCubeImg[i],arrayCubeGif[i],arrayNoCubeGig[i]);
         		arrayObj.push(myClassTemp);
         	}	
         }
         
         sym.myStartTimer = function  (interval, option) { 
           myTime = setInterval(function(){myTimer(option)},interval)
         }
         
         sym.addEventInstruccion = function  () {
         	sym.getSymbol("simMenu").$("simIntruccion3").click(function() {
         		mySoundAmbient.volume(0.25);
         		mySound1.play();
         		bootbox.dialog({
         		  message: "<h4 style='font-family=Arial, Helvetica, sans-serif'>"+
         		  "Bienvenido y bienvenida a la casa mágica. <br><br>"+
         		  "Ayuda al mago Justo a encontrar con cuales de los diseños "+
         		  "se puede formar un cubo. Da clic en lo que creas conveniente. </h4>",
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
         
         sym.shadow = function  () {
         	jss.set('.box:hover', {
         	 '-webkit-box-shadow': '0px 0px 40px 7px gray',
         	 '-moz-box-shadow': '0px 0px 40px 7px gray',
         	 'box-shadow': '0px 0px 40px 7px gray'
            });
            sym.$("divCube").removeClass('fired');
         	sym.$("divQ").removeClass('fired');
         }
         
         /*Llamados a funciones y css-------------------------------------------------------------------------------*/ 
         sym.$("simWizardShine").hide();
         sym.$("simSmoke").hide();
         sym.$("Text2").hide();
         sym.$("simWizard").css({"pointer-events":"none"});
         sym.getSymbol("simButtons" ).$("simNot").addClass('fired');
         sym.$("divCube").addClass('fired');
         sym.$("divQ").addClass('fired');
         sym.fullArray();
         
         /*Funciones Locales---------------------------------------------------------------------------------------*/
         function randomNoRepeat () {
         	if (arrayObj.length==0){
         		sym.fullArray();
         	}
         	var index=Math.floor(Math.random()*arrayObj.length);
         	var val=arrayObj[index];
         	arrayObj.splice(index,1);
         	return val
         }
         function myRandon (indexObj, indexDiv) {
         	if (uniqueArray.length==0){
         		for (var i = 0; i < 2; i++) {
         			uniqueArray.push(i);
         		};
         	}
         	var index=Math.floor(Math.random()*uniqueArray.length);
         	var val=uniqueArray[index];
         	uniqueArray.splice(index,1);
         	var myR;
         //console.log("indexObj.cubImg-->"+indexObj.cubImg+" val-->"+val)
         	if(val==1){
         	myR=indexObj.cubImg;
         	flag=indexDiv;
         	}
            else{
         	myR=indexObj.nocubImg;
         	}
         	return myR;
         }
         
         function next (index) {
         	if(index==0){
         		if(flag=="divCube"){
         			var myImg='<img src="images/'+objTemp.cubGig+'.gif" alt="cube" class="myCenter">';
         			sym.$("divCube").html(myImg);
         			sym.$("divCube").children("img").hide();
         			sym.$("divCube").children("img").fadeIn( "slow" );
         		}
         		else{
         			var myImg='<img src="images/'+objTemp.nocubGig+'.gif" alt="cube" class="myCenter">';
         			sym.$("divCube").html(myImg);
         			sym.$("divCube").children("img").hide();
         			sym.$("divCube").children("img").fadeIn( "slow" );
         		}
         	}
         	if(index==1){
         		if(flag=="divQ"){
         				var myImg='<img src="images/'+objTemp.cubGig+'.gif" alt="cube" class="myCenter">';
         				sym.$("divQ").html(myImg);
         				sym.$("divQ").children("img").hide();
         				sym.$("divQ").children("img").fadeIn( "slow" );
         			}
         			else{
         				var myImg='<img src="images/'+objTemp.nocubGig+'.gif" alt="cube" class="myCenter">';
         				sym.$("divQ").html(myImg);
         				sym.$("divQ").children("img").hide();
         				sym.$("divQ").children("img").fadeIn( "slow" );
         			}
         	}
         
         	sym.$(".myCenter").css({"position": "absolute","top":"50%","left":"50%",
         	"-ms-transform":"translate(-50%,-50%)", "-webkit-transform":"translate(-50%,-50%)",
         	"-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         }
         
         function myTimer(num) {
         	clearInterval(myTime);
         	sym.getSymbol("simButtons" ).$("simNot").removeClass('fired');
         }
         
         /*Eventos--------------------------------------------------------------------------------------------------*/
         // A $( document ).ready() block.
         $( document ).ready(function() {
         	mySoundAmbient = new Howl({
         		 urls: ['media/briganSetReel.ogg','media/briganSetReel.mp3'],
         		 loop: true
         	});
         	mySoundAmbient.play();
         	mySoundAmbient.volume(0.5);
         });
         
         sym.getSymbol("simButtons" ).$("simNot").on( "mouseenter", function() {
             sym.getSymbol("simButtons" ).getSymbol("simNot").stop(0);
             sym.getSymbol("simButtons" ).getSymbol("simNot").play(0);
         });
         sym.getSymbol("simButtons" ).$("simNot").on( "mouseleave", function() {
             sym.getSymbol("simButtons" ).getSymbol("simNot").stop(0);
         });
         
         sym.getSymbol("simButtons" ).$("simNot").click(function() {
         	if(sym.getSymbol("simButtons" ).$("simNot").hasClass('fired') == false){
         		sym.getSymbol("simButtons" ).$("simNot").addClass('fired');
         	   sym.$("divQ").children("img").remove();
         	   sym.$("divCube").children("img").remove();
         	   sym.$("divCube").removeClass('fired');
         	   sym.$("divQ").removeClass('fired');
         		sym.changeCube();
         	}
         });
         
         sym.$("divCube").click(function() {
         	if(sym.$("divCube").hasClass('fired') == false){
         		sym.$("divCube").addClass('fired');
         		sym.$("divQ").addClass('fired');
         	   sym.myStartTimer(5000,2);
         		console.log("sdfdf");
         		next(0);
         	}
         });
         
         sym.$("divQ").click(function() {
         	if(sym.$("divQ").hasClass('fired') == false){
         		sym.$("divCube").addClass('fired');
         		sym.$("divQ").addClass('fired');
         	   sym.myStartTimer(5000,2);
         		console.log("sdfdf");
         		next(1);
         	}
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
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'simWizard'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.getComposition().getStage().$("simWizardShine").show("slow");

      });
      //Edge binding end

   })("simWizard");
   //Edge symbol end:'simWizard'

   //=========================================================
   
   //Edge symbol: 'simPot'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.getComposition().getStage().getSymbol("simMask").play();
         sym.getComposition().getStage().$("simSmoke").show("slow");
         sym.getComposition().getStage().getSymbol("simSmoke").play();

      });
      //Edge binding end

   })("simPot");
   //Edge symbol end:'simPot'

   //=========================================================
   
   //Edge symbol: 'simMask'
   (function(symbolName) {   
   
   })("simMask");
   //Edge symbol end:'simMask'

   //=========================================================
   
   //Edge symbol: 'simButtons'
   (function(symbolName) {   
   
   })("simButtons");
   //Edge symbol end:'simButtons'

   //=========================================================
   
   //Edge symbol: 'simNot'
   (function(symbolName) {   
   
   })("simNot");
   //Edge symbol end:'simNot'

   //=========================================================
   
   //Edge symbol: 'simSmoke'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simSmoke");
   //Edge symbol end:'simSmoke'

   //=========================================================
   
   //Edge symbol: 'simWizardShine'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 467, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simWizardShine");
   //Edge symbol end:'simWizardShine'

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
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         mySoundAmbient.volume(0.25);
         mySound1.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         sym.getComposition().getStage().addEventInstruccion();
         sym.getComposition().getStage().shadow()
         sym.getComposition().getStage().changeCube();
         sym.getComposition().getStage().$("Text2").fadeIn( "slow" );
         sym.$("Text2").hide();
         mySoundAmbient.volume(0.5);
         this.deleteSymbol();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.$("Text2").remove();

      });
      //Edge binding end

   })("simIntrucciones");
   //Edge symbol end:'simIntrucciones'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-96866825");