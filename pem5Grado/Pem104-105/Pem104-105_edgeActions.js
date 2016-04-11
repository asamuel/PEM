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
         sym.$("backDel").remove();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         /*Variables globales----------------------------------------------------------------------------------------*/
         sym.setVariable("mySound1", 0);
         sym.setVariable("mySound2", 0);
         sym.setVariable("mySoundAmbient", 0);
         sym.setVariable("mySoundAmbient2", 0);
         
         /*Variables------------------------------------------------------------------------------------------------*/
         var antonimoSelect=0;
         var flag=true, indexChangeColor=0, valMp3=true;
         var nbDrop = 150;  // number of drops created.
         var myAntonimo=["madre", "tengo hambre", "rápido", "me gusta ir a la escuela", "mal", 
         "no quiero pelearme contigo", "suma", "me encanta el pastel", "agudo", 
         "la suma es mayor que 125","agua","un triángulo tiene 3 ángulos", "felicidad",
         "yo mido 1 metro y 26 centímetros", "esperanza", "Dios es amor"];
         var myArrayFeedbackObj=[];
         
         /*Clases---------------------------------------------------------------------------------------------------*/
         function feedBackObj(antonimo, feedback) {
         	this.antonimo = antonimo;
         	this.feedback = feedback;
         }
         /*Cargar---------------------------------------------------------------------------------------------------*/
         mySound1 = new Howl({
         	  urls: ['media/pem104-105_1.ogg','media/pem104-105_1.mp3'],
         	  onend: function() {
         	  }
         });
         
         mySound2 = new Howl({
         	  urls: ['media/signalSound.ogg','media/signalSound.mp3'],
         	  onend: function() {
         	  }
         });
         /*Funciones Globales---------------------------------------------------------------------------------------*/
         sym.startShow = function  () {
         	var ref=sym.createChildSymbol("simZeppelin", "simZeppelinContainer").getSymbolElement();
         	sym.getSymbol("simZeppelinContainer").$(ref).css({"left":"235px"});
         	antonimoSelect=randomNoRepeat();
         	var selectPadding = (antonimoSelect.length>24) ? "13px" : "23px";
         
            sym.getSymbol("simZeppelinContainer").getSymbol(ref).
            $("divText").html('<p id="pAntonimo">'+antonimoSelect+'</p>');
            sym.getSymbol("simZeppelinContainer").getSymbol(ref).
            $("#pAntonimo").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "normal","font-size":"24px", 
         	"color":"white"});
         	sym.getSymbol("simZeppelinContainer").getSymbol(ref).
            $("#pAntonimo").css({"text-align":"center","vertical-align": "middle","padding-top":selectPadding});
         
            sym.getSymbol("simZeppelinContainer").getSymbol(ref).stop(flag ? 0 : "middle");
         	sym.getSymbol("simZeppelinContainer").getSymbol(ref).play(flag ? 0 : "middle");
         	flag=flag ? false : true;
         }
         sym.addEventInstruccion = function  () {
         	sym.getSymbol("simMenu").$("simIntruccion3").click(function() {
         		mySoundAmbient.volume(0.20);
         		mySound1.play();
         		bootbox.dialog({
         		  message: "<h4 style='font-family=Arial, Helvetica, sans-serif'>"+
         		  "Los policías han parado el tráfico. Ayúdalos a encontrar el antónimo "+
         		  "de las siguientes frases o palabras. "+
         		  "Escribe en el rótulo cuando aparezca la señal."+"</h4>",
         		  title: "<h2 style='font-family=Arial, Helvetica, sans-serif'>Instrucciones<h2>",
         		  closeButton:false,
         		  buttons: {
         			 main: {
         				label: "Aceptar!",
         				className: "btn-primary",
         				callback: function() {
         					 mySound1.stop();
         					 mySoundAmbient.volume(0.4);
         				}
         			 }
         		  }
         		});
         	});
         }
         
         /*Llamados a funciones y css-------------------------------------------------------------------------------*/
         //Agregar css al boton de ver, ademas de agregar el efecto brillo
         sym.$("divVer").css({"overflow":"hidden","text-align":"center","cursor":"pointer"});
         sym.$("divVer").html('<div class="mydivEllipse"></div>');
         sym.$("divVer").append('<p id="pVer">Ver</p>');
         $("#pVer").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold","font-size":"28px", 
         "color":"black", "margin-top": "-8px"});
         //Agregar css al boton de siguiente, ademas de agregar el efecto brillo
         sym.$("divSiguien").css({"overflow":"hidden","text-align":"center","cursor":"pointer"});
         sym.$("divSiguien").html('<div class="mydivCuadra"></div>');
         sym.$("divSiguien").append('<p id="pSiguien">Siguiente</p>');
         $("#pSiguien").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold","font-size":"24px", 
         "color":"black","margin-top": "-35px"});
         
         sym.$("simSignal").hide();
         createRain(); // Make it rain
         drawTextArea(); // Draw the placeholder
         $("#myT").hide();
         
         /*Funciones Locales---------------------------------------------------------------------------------------*/
         // function to generate a random number range.
         function randRange( minNum, maxNum) {
           return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
         }
         // function to generate drops
         function createRain() {
         
         	for( i=1;i<nbDrop;i++) {
         	var dropLeft = randRange(0,1600);
         	var dropTop = randRange(-1000,1400);
         
         	$('.rain').append('<div class="drop" id="drop'+i+'"></div>');
         	$('#drop'+i).css('left',dropLeft);
         	$('#drop'+i).css('top',dropTop);
         	}
         }
         function drawTextArea(){
         	var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
         	// Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
         	var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
         	var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
         	var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
         	var myTextArea='<textarea id="myT" style="color:black;" placeholder="Escribe aquí..."></textarea>';
         	var hDiv=sym.$("divTextArea").height();
            var wDiv=sym.$("divTextArea").width();
            sym.$("divTextArea").html(myTextArea);
         	if(isOpera){
         	 jss.set('::-webkit-input-placeholder ', {
         	 'color': 'black',
         	 'text-align': 'center',
         	 'font-style': 'italic'
         	 });
         	}
         	if(isChrome){
         	 jss.set('::-webkit-input-placeholder ', {
         	 'color': 'black',
         	 'text-align': 'center',
         	 'font-style': 'italic'
         	 });
         	}
         	if(isFirefox){
         	 jss.set(':-moz-placeholder', {
         	 'color': 'black',
         	 'text-align': 'center'
         	 });
         	 jss.set('::-moz-placeholder', {
         	 'color': 'black',
         	 'text-align': 'center'
         	 });
         	}
         	if(isIE){
         	 jss.set(':-ms-input-placeholder', {
         	 'color': 'black',
         	 'text-align': 'center'
         	 });
         	}
         	sym.$("#myT").css({"color" : "black", "font-style": "bold", "width": wDiv/1.07, "height": hDiv/1.19});
         	sym.$("#myT").css({"background-color": "rgba(225,225,225,0.85", "resize": "none",'text-align': 'center'});
         	sym.$("#myT").css({"font-size": "200%", "text-shadow": "0 0 0.9em white, 0 0 0.9em #87F, 0 0 0.9em #87F"});
         	sym.$("#myT").css({"position": "absolute","top":"50%","left":"50%","-ms-transform":"translate(-50%,-50%)",
         	"-webkit-transform":"translate(-50%,-50%)","-moz-transform":"translate(-50%,-50%)",
         	"transform": "translate(-50%,-50%)"});
         }
         
         function randomNoRepeat() {
         	if (myAntonimo.length==0){
         		myAntonimo=["madre", "tengo hambre", "rápido", "me gusta ir a la escuela", "mal", 
         		"no quiero pelearme contigo", "suma", "me encanta el pastel", "agudo", 
         		"la suma es mayor que 125","agua","un triángulo tiene 3 ángulos", "felicidad",
         		"yo mido 1 metro y 26 centímetros", "esperanza", "Dios es amor"];
         	}
         	var index=Math.floor(Math.random()*myAntonimo.length);
         	var val=myAntonimo[index];
         	myAntonimo.splice(index,1);
         	return val
         }
         function nextAntonimo(feedBack){
         		myClassTemp = new feedBackObj(antonimoSelect, feedBack);
         		myArrayFeedbackObj.push(myClassTemp);
         		console.log("antonimo-->"+myArrayFeedbackObj[0].antonimo+" feedback-->"+myArrayFeedbackObj[0].feedback);
         		sym.$("#myT").val("");
         		sym.$("simZeppelinContainer").children().remove();
         		sym.startShow();
         }
         function showFeedback (myTable) {
         	var box = bootbox.dialog({
         		message: myTable,
         		title: "¡Ver!",
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
         function changeColorTable(){
         	var result="";
         	if(indexChangeColor==5)
         		indexChangeColor=0;
         	if(indexChangeColor==0)
         		result="success";
         	if(indexChangeColor==1)
         		result= "warning";
         	if(indexChangeColor==2)
         		result= "danger";
         	if(indexChangeColor==3)
         		result= "info";
         	if(indexChangeColor==4)
         		result= "active";
         	indexChangeColor++;
         	return result;
         }
         function putValue () {  
         	/*var isIE = /*@cc_on!@*//*false || !!document.documentMode;   // At least IE6
         	if(isIE){
         	  window.location.href="../Menu2.html?indexCat=raz";           
         	}
         	else{
         		localStorage.setItem("indexCat","raz");
         		window.open("../Menu2.html", "_self");
         	}*/
         }
         
         /*Eventos--------------------------------------------------------------------------------------------------*/
         // A $( document ).ready() block.
         $( document ).ready(function() {
             mySoundAmbient = new Howl({
         		 urls: ['media/skypeCuillin.ogg','media/skypeCuillin.mp3'],
         		 loop: true,
         		 onend: function() {
         		 }
         	});
         	mySoundAmbient.play();
         	mySoundAmbient.volume(0.4);
         
         	mySoundAmbient2 = new Howl({
         		 urls: ['media/rain.ogg','media/rain.mp3'],
         		 loop: true,
         		 onend: function() {
         		 }
         	});
         	mySoundAmbient2.play();
         	mySoundAmbient2.volume(0.4);
         });
         
         sym.getSymbol("simMenu").$("simSonido").click(function() {
         	if(valMp3){
         		mySoundAmbient.stop();
         		mySoundAmbient2.stop();
         		valMp3=false;
         	}     
         	else{
         		mySoundAmbient.play();
         		mySoundAmbient2.play();
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

         sym.$("divVer").click(function() {
         	if(myArrayFeedbackObj.length!=0){
         		var myTable="<table class='table table-hover'>"+
         			"<thead>"+
         				"<tr>"+
         				  "<th>Frase o Palabra</th>"+
         				  "<th>Antónimo</th>"+
         				"</tr>"+
         			 "</thead>";
         
         		for(var i=0; i<myArrayFeedbackObj.length; i++){
         			myTable+="<tbody>"+
         				"<tr class='"+changeColorTable()+"'>"+
         				  "<td>"+myArrayFeedbackObj[i].antonimo+"</td>"+
         				  "<td>"+myArrayFeedbackObj[i].feedback+"</td>"+
         				"</tr>";
         		}
         		myTable+="</tbody>"+
         				"</table>";
         		indexChangeColor=0;
         		showFeedback(myTable);
         	}
         });
         sym.$("divSiguien").click(function() {
         	var feedBack=sym.$("#myT").val();
         	if(sym.$("#divSiguien").hasClass('fired') == false && feedBack!="")
         		nextAntonimo(feedBack);
         });
         sym.$("#myT").keypress(function (event) {
         	if(event.keyCode == 10 || event.keyCode == 13)  // the enter key code
         	{
         		if(sym.$("#divSiguien").hasClass('fired') == false && sym.$("#myT").val()!=""){
         			nextAntonimo(sym.$("#myT").val());
         			return false;  
         		}
         		else
         			 event.preventDefault(); 
         	}
         });
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'simCloud'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 120000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simCloud");
   //Edge symbol end:'simCloud'

   //=========================================================
   
   //Edge symbol: 'simZeppelin'
   (function(symbolName) {   
   
   })("simZeppelinContainer");
   //Edge symbol end:'simZeppelinContainer'

   //=========================================================
   
   //Edge symbol: 'simZeppelin'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         sym.$("Group3").css({"-moz-transform":"scaleX(-1)","-o-transform":" scaleX(-1)",
         " -webkit-transform":"scaleX(-1)",  "transform": "scaleX(-1)","filter":"FlipH",
         "-ms-filter":"FlipH","-ms-transform":"scaleX(-1)"});
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.$("Group3").css({"-moz-transform":"scaleX(1)","-o-transform":" scaleX(1)",
         " -webkit-transform":"scaleX(1)", "transform": "scaleX(1)", "filter":"FlipH",
         "-ms-filter":"FlipH","-ms-transform":"scaleX(1)"});
         

      });
      //Edge binding end

      

   })("simZeppelin");
   //Edge symbol end:'simZeppelin'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'simIntrucciones'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         mySoundAmbient.volume(0.20);
         mySound1.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         sym.$("Text2").remove();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16500, function(sym, e) {
         sym.getComposition().getStage().$("simSignal").show( "slow" );
         sym.getComposition().getStage().getSymbol("simSignal").play();
         this.deleteSymbol();

      });
      //Edge binding end

   })("simIntrucciones");
   //Edge symbol end:'simIntrucciones'

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
   
   //Edge symbol: 'simSignal'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getComposition().getStage().addEventInstruccion();
         sym.getComposition().getStage().startShow();
         mySound2.stop();
         mySoundAmbient.volume(0.4);
         sym.getComposition().getStage().$("#myT").show( "slow" );
         sym.getComposition().getStage().$("simSignal").hide('slow', 
         function(){sym.getComposition().getStage().getSymbol("simSignal").deleteSymbol();});
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         mySound2.play();

      });
      //Edge binding end

   })("simSignal");
   //Edge symbol end:'simSignal'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-15184992");