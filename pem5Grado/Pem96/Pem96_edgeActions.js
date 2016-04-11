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
         sym.$("backfirst").remove();
         sym.getSymbol("simCloud").play();
         sym.getSymbol("simSea").play();
         sym.getSymbol("simSun").play();
         sym.getSymbol("simSea").getSymbol("simSailBoat").play();
         sym.getSymbol("simSeagullContainer").play();
         sym.getSymbol("simSeaStar").play();
         sym.getSymbol("simFishes").play();
         sym.getSymbol("simSeagullContainer").getSymbol("simSeagull").play();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         //Declaramos variables globales/////////////////////////////////////
         sym.setVariable("myArrayCont", 0);
         sym.setVariable("uniqueArray", 0);
         sym.setVariable("mySilaba", 0);
         sym.setVariable("otherSilaba", 0);
         sym.setVariable("wordArray1", 0);
         sym.setVariable("wordArray2", 0);
         sym.setVariable("mySound1", 0);
         sym.setVariable("mySoundAmbient", 0);
         sym.setVariable("soundBubble_1", 0);
         sym.setVariable("soundBubble_2", 0);
         
         //Inicializamos algunas variables/////////////////////////////////////
         myArrayFeedbackObj=[];
         myBubbleArrayObj=[];
         var position=0, zoom, myTime, silabaTemp, objTemp, valMp3=true;
         mySilaba=["ta", "ma", "te", "go", "to", "na", "bro", "na", "no", "gua"];
         otherSilaba=["lo","se", "mo", "me", "mi", "pu","pe","po","ti","te","la","li","lu","le","su","so","sa","si","cu","gue","ju","ba","bra","fla", "dro","rro","cra","za","ña","llo"];
         wordArray1=["puer", "ca", "toma", "man", "zapa", "ante", "li", "corti", "telefo", "nicara"];
         wordArray2=["pa", "sa", "levisión", "ma", "que", "catamal", "ma", "riz", "che", "temala"];
         
         //Clases/////////////////////////////////////////////////
         //Prototype de la clase bubleObj
         function bubleObj(word1, word2, silaba) {
         	 this.word1 = word1;
         	 this.word2 = word2;
         	 this.silaba = silaba;
         }
         //Prototype de la clase myFeedback
         function myFeedbackObj(word1, word2, silaba, silabaSelected) {
         	 this.word1 = word1;
         	 this.word2 = word2;
         	 this.silaba = silaba;
         	 this.silabaSelected = silabaSelected;
         }
         
         //Cargamos el audio, menos el sonido de ambiente//////////////////////////////////////
         mySound1 = new Howl({
           urls: ['media/pem96_1.ogg','media/pem96_1.mp3'],
           onend: function() {
           		if (sym.$("simIntrucciones").length!=0) 
           			sym.getSymbol("simIntrucciones").play("end");
           }
         });
         soundBubble_1 = new Howl({
           urls: ['media/bubble_1.ogg','media/bubble_1.mp3']
         });
         soundBubble_2 = new Howl({
           urls: ['media/bubble_2.ogg','media/bubble_2.mp3']
         });
         
         //Funciones globales/////////////////////////////////////
         sym.fullArray = function  () {
         	for(var i=0;i<10; i++){
         		myClassTemp = new bubleObj(wordArray1[i], wordArray2[i], mySilaba[i]);
         		myBubbleArrayObj.push(myClassTemp);
         	}	
         }
         
         sym.startShow = function  () {
         	myArrayCont=[];
         	uniqueArray=[];
         	/*for(var i=0;i<cant; i++){
         		myArrayBubble.push("simBubble"+(i+1));
         	}*/
         	createBubble();	
         }
         
         sym.myStartTimer = function  (interval, option) { 
           myTime = setInterval(function(){myTimer(option)},interval)
         }
         
         sym.addEventSeaStar = function  () { 
         	sym.getSymbol("simSeaStar").$("starSea").click(function() {
         	var myTable="<table class='table'>"+
         			"<thead>"+
         				"<tr>"+
         				  "<th>Sílabas</th>"+
         				  "<th>Palabras Creadas</th>"+
         				"</tr>"+
         			 "</thead>";
         		for (var i = 0; i < myArrayFeedbackObj.length; i++) {
         			 myTable+="<tbody>"+
         				"<tr class='info'>"+
         				  "<td>"+myArrayFeedbackObj[i].word1+"<span style='color:#F89406'>"+
         				  "<u><b>"+myArrayFeedbackObj[i].silaba+"</b></u></span>"+
         				  " "+"<span style='color:#F89406'>"+"<u><b>"+myArrayFeedbackObj[i].silaba+"</b></u></span>"+
         				  myArrayFeedbackObj[i].word2+"</td>"+
         				  "<td>"+myArrayFeedbackObj[i].word1+"<span style='color:#F89406'>"+
         				  "<u><b>"+myArrayFeedbackObj[i].silabaSelected+"</b></u></span>"+
         				  " "+"<span style='color:#F89406'>"+"<u><b>"+myArrayFeedbackObj[i].silabaSelected+"</b></u></span>"+
         				  myArrayFeedbackObj[i].word2+"</td>"+
         				"</tr>";
         		};
         
         		  myTable+="</tbody>"+
         		  "</table>";
         		  showFeedback(myTable);
         	});
         
         	sym.getSymbol("simSeaStar").$("starSea").mouseover(function() {
         		sym.getSymbol("simSeaStar").getSymbol("simTooltip").stop("start");
         		sym.getSymbol("simSeaStar").getSymbol("simTooltip").play("start");
         	});
         
         	sym.getSymbol("simSeaStar").$("starSea").mouseout(function() {
         			sym.getSymbol("simSeaStar").getSymbol("simTooltip").stop("end");
         	});
         }
         
         sym.addEventInstruccion = function  () {
         	sym.getSymbol("simMenu").$("simIntruccion3").click(function() {
         		mySoundAmbient.volume(0.20);
         		mySound1.play();
         		bootbox.dialog({
         		  message: "<h4 style='font-family=Arial, Helvetica, sans-serif'>"+
         		  "Con una misma sílaba deberás completar dos palabras distintas. "+
         		  "Da clic en la burbuja para hacerla explotar y formar las dos palabras."+"</h4>",
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
         
         //Eventos/////////////////////////////////////////////
         sym.$("stage").click(function(ev) {
            if (sym.$("stage").hasClass('fired') == false) {
         		var myStage=sym.$("stage")
         		zoom=getScaleStage(); 
         		var target = this //ev.originalEvent.currentTarget;
         		var offset = $(target).offset();
         		var bb = target.getBoundingClientRect();
         		var cursorY = ev.clientY;
         		var cursorX = ev.clientX;
         		var x = ev.originalEvent.pageX / zoom - bb.left;
         		var y = ev.originalEvent.pageY / zoom - bb.top;
         		// find current location on screen 
         		var xScreen = ev.pageX - $(this).offset().left;
         		var yScreen = ev.pageY - $(this).offset().top;
         
         		//console.log("x-->"+xScreen/zoom+"    y-->"+cursorY/zoom+" zoom-->"+zoom);
         		var selectTitle4=sym.createChildSymbol("simExploit", "stage").getSymbolElement();
         
         		selectTitle4.css({"top" :(cursorY/zoom)-71 , "left":(xScreen/zoom)-89 });
         		sym.$("stage").addClass('fired');
         		soundBubble_2.play();
         	}
         });
         
         // A $( document ).ready() block.
         $( document ).ready(function() {
            mySoundAmbient = new Howl({
                urls: ['media/masterOfTheFeast.ogg','media/masterOfTheFeast.mp3'],
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
         
         //LLamados a funciones y css/////////////////////////////////////
         $('html, body').css('overflow', 'hidden'); 
         sym.$("stage").addClass('fired');
         sym.getSymbol("simText").getSymbol("simDivSilaba").$("Text").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold","font-size":"28px", "color":"#151515", "text-align":"center"});
         sym.getSymbol("simText").getSymbol("simDivSilaba").$("Text").html("");
         sym.fullArray();
         
         //Funciones Locales////////////////////////////////////////////
         function createBubble(){
         	var bubleSelected;
         	objTemp=getObj();
         	//Creamos las 4 burbujas que llevan las silabas
         	for(var i=0;i<4; i++){
         		myArrayCont.push(sym.createChildSymbol("simBubble", "simBubbleContainer").getSymbolElement());
         	}
         	changePointerEvent();
         	//Le damos a las 4 burbujas las posiciones top y lef en el simBubbleContainer
         	//getPositionTop() manda aleatoriamente la posicion top de la burbuja,
         	//para que no salgan igualmente en la misma posicion
         	myArrayCont[0].css({"position": "absolute", "top" : getPositionTop(), "left":'80px' });
         	myArrayCont[1].css({"position": "absolute", "top" : getPositionTop(), "left":'300px' });
         	myArrayCont[2].css({"position": "absolute", "top" : getPositionTop(), "left":'550px' });
         	myArrayCont[3].css({"position": "absolute", "top" : getPositionTop(), "left":'750px' });
         
         	//Damos estilo a las pablabras que hay que completar con la silaba, ademas se les añade la palabra
         	sym.$(".myClass").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "initial","font-size":"28px", "color":"#fff", "text-align":"center"});
         
         	sym.getSymbol("simText").$("textIzq").css({"text-align":"right","position": "absolute",
         	"top":"50%","left":"65%","-ms-transform":"translate(-50%,-50%)",
         	"-webkit-transform":"translate(-50%,-50%)","-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         
         	sym.getSymbol("simText").$("textIzq").html(objTemp.word1);
         	sym.getSymbol("simText").$("textDer").html(objTemp.word2);
         
         	//Damos estilo a la silaba correcta, y se le asigna a una burbuja
         	bubleSelected=Math.floor((Math.random() * 4));
         
         	sym.getSymbol("simBubbleContainer").getSymbol(myArrayCont[bubleSelected]).$("text").
         	css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "normal","font-size":"24px", "color":"#000000"});
         
         	sym.getSymbol("simBubbleContainer").getSymbol(myArrayCont[bubleSelected]).$("text").
         	css({"text-align":"center","position": "absolute","top":"50%","left":"50%",
         	"-ms-transform":"translate(-50%,-50%)","-webkit-transform":"translate(-50%,-50%)",
            "-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         
         	sym.getSymbol("simBubbleContainer").getSymbol(myArrayCont[bubleSelected]).$("text").html(objTemp.silaba);
         	sym.getSymbol("simBubbleContainer").getSymbol(myArrayCont[bubleSelected]).play();
         	soundBubble_1.play();
         
         	//agregamos estilos a las demas burbujas y las mandamos a correr
         	for(var i=0;i<4; i++){
         		if(i!=bubleSelected){
         			sym.getSymbol("simBubbleContainer").getSymbol(myArrayCont[i]).$("text").
         			css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "normal","font-size":"24px", "color":"#000000"});
         
         			sym.getSymbol("simBubbleContainer").getSymbol(myArrayCont[i]).$("text").
         			css({"text-align":"center","position": "absolute","top":"50%","left":"50%",
         			"-ms-transform":"translate(-50%,-50%)","-webkit-transform":"translate(-50%,-50%)",
                    "-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         
         			sym.getSymbol("simBubbleContainer").getSymbol(myArrayCont[i]).$("text").html(getOtherSilaba());
         			sym.getSymbol("simBubbleContainer").getSymbol(myArrayCont[i]).play();
         		}
         	}
         
         	//Le agregamos evento de click a la burbuja 
         	sym.getSymbol("simBubbleContainer").$(myArrayCont[0]).click(function(ev) {
         		var temp=sym.getSymbol("simBubbleContainer").getSymbol(myArrayCont[0]).$("text");
         		sym.$("stage").removeClass('fired');  
         		nextBubbles(temp.text(),objTemp);
         	});
         	sym.getSymbol("simBubbleContainer").$(myArrayCont[1]).click(function() {
         		var temp=sym.getSymbol("simBubbleContainer").getSymbol(myArrayCont[1]).$("text");
         		sym.$("stage").removeClass('fired');  
         		nextBubbles(temp.text(),objTemp);
         	});
         	sym.getSymbol("simBubbleContainer").$(myArrayCont[2]).click(function() {
         		var temp=sym.getSymbol("simBubbleContainer").getSymbol(myArrayCont[2]).$("text");
         		sym.$("stage").removeClass('fired');  
         		nextBubbles(temp.text(),objTemp);
         	});
         	sym.getSymbol("simBubbleContainer").$(myArrayCont[3]).click(function() {
         		var temp=sym.getSymbol("simBubbleContainer").getSymbol(myArrayCont[3]).$("text");
         		sym.$("stage").removeClass('fired');  
         		nextBubbles(temp.text(),objTemp);
         	});
         }
         
         function randomNoRepeat () {
         	if (uniqueArray.length==0){
         	for (var i = 0; i < 4; i++) {
         		uniqueArray.push(i);
         	};
          }
         	var index=Math.floor(Math.random()*uniqueArray.length);
         	var val=uniqueArray[index];
         	uniqueArray.splice(index,1);
         	return val
         }
         
         function getOtherSilaba () {
         	if (otherSilaba.length==0){
         		otherSilaba=["lo","se", "mo", "me", "mi", "pu","pe","po","ti","te","la","li","lu","le","su","so","sa","si","cu","gue","ju","ba","bra","fla", "dro","rro","cra","za","ña","llo"];
          }
         	var index=Math.floor(Math.random()*otherSilaba.length);
         	var val=otherSilaba[index];
         	otherSilaba.splice(index,1);
         	return val
         }
         
         function getObj () {
         	if (myBubbleArrayObj.length==0){
         		sym.fullArray();
          }
         	var index=Math.floor(Math.random()*myBubbleArrayObj.length);
         	var val=myBubbleArrayObj[index];
         	myBubbleArrayObj.splice(index,1);
         	return val
         }
         
         function getPositionTop(){
         	switch (randomNoRepeat()) {
              case 0:
              	  return "530px"
                 break;
              case 1:
              	  return "570px"
                 break;
              case 2:
              	  return "610px"
                 break;
              case 3:
              	  return "650px"
                 break;
         }    
         } 
         
         function changePointerEvent(){
         	sym.$('.boxing').css({'pointer-events':'none'});
         } 
         
         function nextBubbles(silaba, objTemp){
          	silabaTemp=silaba;
          	sym.$("simBubbleContainer").children().unbind();
          	sym.$("simBubbleContainer").children().hide('slow', function(){ sym.$("simBubbleContainer").children().remove(); });
          	sym.getSymbol("simText").getSymbol("simDivSilaba").$("Text").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold","font-size":"30px", "color":"#151515"});
          	sym.getSymbol("simText").getSymbol("simDivSilaba").$("Text").
         	css({"text-align":"center","position": "absolute","top":"0%","left":"50%",
         	"-ms-transform":"translate(-50%,-50%)","-webkit-transform":"translate(0%,-50%)","-moz-transform":"translate(0%,-50%)",
         	"transform": "translate(-50%,-50%)"});

            
         	sym.getSymbol("simText").getSymbol("simDivSilaba").$("Text").html(silaba);
         	sym.getSymbol("simText").getSymbol("simDivSilaba").play();
         	myClassTemp = new myFeedbackObj(objTemp.word1, objTemp.word2, objTemp.silaba, silaba);
         	myArrayFeedbackObj.push(myClassTemp);
         	sym.myStartTimer(2000,0);
         }
         
         function getScaleStage () {	
         	var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
            // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
         	var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
         	var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
         	var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
         
         	if(isOpera){
         	var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/,
         	matches = sym.$("stage").css('-webkit-transform').match(matrixRegex);
         	}
         	if(isChrome){
         	var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/,
         	matches = sym.$("stage").css('-webkit-transform').match(matrixRegex);
         	}
         	if(isFirefox){
         	var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/,
         	matches = sym.$("stage").css('-moz-transform').match(matrixRegex);
         	}
         	if(isIE){
         	var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/,
         	matches = sym.$("stage").css('-ms-transform').match(matrixRegex);
         	}
         	return matches[1];
         }
         
         $(window).on('resize', function(){
         	zoom=getScaleStage(); 
         });
         
         function myTimer(num) {
         	switch (num) {
         		  case 0:
         			  clearInterval(myTime); //limpiar cronometro
         			  sym.getSymbol("simText").$("simDivSilaba").hide( "slow" );
         			  sym.getSymbol("simText").$("hook").hide( "slow" );
         			  sym.getSymbol("simText").$("textDer").html("<span style='color:#151515'>"+"<u><b>"+silabaTemp+"</b></u></span>"+objTemp.word2);
         			  sym.getSymbol("simText").$("textIzq").html(objTemp.word1+"<span style='color:#151515'>"+"<u><b>"+silabaTemp+"</b></u></span>");
         			  sym.myStartTimer (3000,1); //llamar funcion del cronometro
         			  break;
         		  case 1: 
         		     clearInterval(myTime);//limpiar cronometro
         		     sym.getSymbol("simText").getSymbol("simDivSilaba").$("Text").html("");
         		     sym.getSymbol("simText").$("simDivSilaba").show( "slow" );
         			  sym.getSymbol("simText").getSymbol("simDivSilaba").stop(0);
         			  sym.getSymbol("simText").$("hook").show( "slow" );
         			  sym.startShow();
         		     break;
         }}
         
         function showFeedback(myTable){
          var box = bootbox.dialog({
         	  message: myTable,
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

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("simBubbleNone").play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'simCloud'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 95000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simCloud");
   //Edge symbol end:'simCloud'

   //=========================================================
   
   //Edge symbol: 'simSea'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3200, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simSea");
   //Edge symbol end:'simSea'

   //=========================================================
   
   //Edge symbol: 'simSailBoat'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simSailBoat");
   //Edge symbol end:'simSailBoat'

   //=========================================================
   
   //Edge symbol: 'simSun'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

   })("simSun");
   //Edge symbol end:'simSun'

   //=========================================================
   
   //Edge symbol: 'simSeagull'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simSeagull");
   //Edge symbol end:'simSeagull'

   //=========================================================
   
   //Edge symbol: 'simSeagullContainer'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32000, function(sym, e) {
         sym.play(0);
         

      });
      //Edge binding end

   })("simSeagullContainer");
   //Edge symbol end:'simSeagullContainer'

   //=========================================================
   
   //Edge symbol: 'simSeaStar'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getComposition().getStage().addEventSeaStar();

      });
      //Edge binding end

   })("simSeaStar");
   //Edge symbol end:'simSeaStar'

   //=========================================================
   
   //Edge symbol: 'simBubbleNone'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45000, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

   })("simBubbleNone");
   //Edge symbol end:'simBubbleNone'

   //=========================================================
   
   //Edge symbol: 'simFishes'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simFishes");
   //Edge symbol end:'simFishes'

   //=========================================================
   
   //Edge symbol: 'simText'
   (function(symbolName) {   
   
   })("simText");
   //Edge symbol end:'simText'

   //=========================================================
   
   //Edge symbol: 'simBubble'
   (function(symbolName) {   
   
   })("simBubbleContainer");
   //Edge symbol end:'simBubbleContainer'

   //=========================================================
   
   //Edge symbol: 'simBubble'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simBubble");
   //Edge symbol end:'simBubble'

   //=========================================================
   
   //Edge symbol: 'simExploit'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 300, function(sym, e) {
         this.deleteSymbol();

      });
      //Edge binding end

   })("simExploit");
   //Edge symbol end:'simExploit'

   //=========================================================
   
   //Edge symbol: 'simDivSilaba'
   (function(symbolName) {   
   
   })("simDivSilaba");
   //Edge symbol end:'simDivSilaba'

   //=========================================================
   
   //Edge symbol: 'simTooltip'
   (function(symbolName) {   
   
   })("simTooltip");
   //Edge symbol end:'simTooltip'

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
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.stop();
         mySoundAmbient.volume(0.20);
         mySound1.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.getComposition().getStage().addEventInstruccion();
         sym.getComposition().getStage().startShow();
         mySoundAmbient.volume(0.5);
         this.deleteSymbol();

      });
      //Edge binding end

   })("simIntrucciones");
   //Edge symbol end:'simIntrucciones'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-562482664");