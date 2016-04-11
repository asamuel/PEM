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
         sym.setVariable("soundTruck", 0);
         sym.setVariable("mySoundAmbient", 0);
         
         
         /*Variables globales-----------------------------------------------------------------------------------------*/
         var myArrayForm=["simCua1","simRec1", "simTrian1", "simCua2", "simRec2", "simTrian2",
         "simCua3", "simRec3", "simTrian3"];
         var myArrayObj=[];
         var uniqueArray=[];
         var myArrayNum=["1","2","9","2","18","33","4","28","32"];
         var myArrayExpre=["1","1+1","5+4","1+1","(4+2+2+1)*2","23+4+5+1","1+1+1+1","8+1+4+2+6+5+2","8*3+5+3"];
         var cont=0, ref, valG=0, flag=true, contFlag=0, valMp3=true;
         
         /*Clases---------------------------------------------------------------------------------------------------*/
          function Obj(form, numb, expre) {
         	 this.form = form;
         	 this.numb = numb;
         	 this.expre = expre;
         }
         /*Cargar---------------------------------------------------------------------------------------------------*/
         mySound1 = new Howl({
         	urls: ['media/pem81-82-84.ogg','media/pem81-82-84.mp3']
         });
         soundTruck = new Howl({
         	urls: ['media/truckReverse.ogg','media/truckReverse.mp3']
         });
         
         /*Funciones Globales---------------------------------------------------------------------------------------*/
          sym.startShow = function  () {
         	flag=true;
         	ref=sym.createChildSymbol(myArrayObj[cont].form, "simContainerObj").getSymbolElement();
         	sym.getSymbol("simContainerObj").$(ref).css({"left":"301px","top":"94px"});
         	putNumber();
         	cont++;
          }
          sym.endShow = function  () {
         	ref=sym.createChildSymbol("simEnd", "simContainerObj").getSymbolElement();
         	sym.getSymbol("simContainerObj").$(ref).css({"left":"301px","top":"94px"});
          }
         sym.changeState = function  (state) {
         	if(state=="addClass"){
         		sym.getSymbol("simSelect").$("div1").addClass('fired');
         		sym.getSymbol("simSelect").$("div2").addClass('fired');
         		sym.getSymbol("simSelect").$("div3").addClass('fired');
         		sym.getSymbol("simSelect").$("div4").addClass('fired');
         		sym.getSymbol("simSelect").$("div5").addClass('fired');
         	}
         	if(state=="removeClass"){
         		sym.getSymbol("simSelect").$("div1").removeClass('fired');
         		sym.getSymbol("simSelect").$("div2").removeClass('fired');
         		sym.getSymbol("simSelect").$("div3").removeClass('fired');
         		sym.getSymbol("simSelect").$("div4").removeClass('fired');
         		sym.getSymbol("simSelect").$("div5").removeClass('fired');
         	}
          }
         sym.fullArray = function  () {
         	for(var i=0;i<9; i++){
         		myClassTemp = new Obj(myArrayForm[i], myArrayNum[i], myArrayExpre[i]);
         		myArrayObj.push(myClassTemp);
         	}	
         }
         sym.addEventInstruccion = function  () {
         	sym.getSymbol("simMenu").$("simIntruccion3").click(function() {
         		mySoundAmbient.volume(0.25);
         		mySound1.play();
         		bootbox.dialog({
         		  message: "<h4 style='font-family=Arial, Helvetica, sans-serif'>"+
         		  "Encuentra cuantos triángulos, cuadrados y rectángulos hay en "+
         		  "los siguientes objetos. Selecciona tu respuesta haciendo "+
         		  "clic en las opciones que te aparecen.</h4>",
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
         sym.controlLed = function (val,index){
         	console.log("val--"+val+"myArrayObj-->"+myArrayObj[cont-1].numb);
         	if(index==0){
         		if(parseInt(val)==parseInt(myArrayObj[cont-1].numb)){
         			sym.$("EllipseB").show();
         			sym.$("EllipseG").hide();
         			sym.$("Ellipse").hide();
         		}
         		else{
         			sym.$("EllipseG").show();
         			sym.$("EllipseB").hide();
         			sym.$("Ellipse").hide();
         		}
         	}
         	if(index==1){
         		sym.$("EllipseB").hide();
         		sym.$("EllipseG").hide();
         		sym.$("Ellipse").show();
         	}
         }
         
         /*Llamados a funciones y css-------------------------------------------------------------------------------*/ 
         //Agregar texto
         
         //Agregar css al boton de ver, ademas de agregar el efecto brillo
         sym.getSymbol("simSelect").$("div1").css({"overflow":"hidden","text-align":"center","cursor":"pointer"});
         sym.getSymbol("simSelect").$("div1").append('<div class="mydivEllipse1"></div>');
         sym.getSymbol("simSelect").$("div2").css({"overflow":"hidden","text-align":"center","cursor":"pointer"});
         sym.getSymbol("simSelect").$("div2").append('<div class="mydivEllipse1"></div>');
         sym.getSymbol("simSelect").$("div3").css({"overflow":"hidden","text-align":"center","cursor":"pointer"});
         sym.getSymbol("simSelect").$("div3").append('<div class="mydivEllipse1"></div>');
         sym.getSymbol("simSelect").$("div4").css({"overflow":"hidden","text-align":"center","cursor":"pointer"});
         sym.getSymbol("simSelect").$("div4").append('<div class="mydivEllipse1"></div>');
         sym.getSymbol("simSelect").$("div5").css({"overflow":"hidden","text-align":"center","cursor":"pointer"});
         sym.getSymbol("simSelect").$("div5").append('<div class="mydivEllipse1"></div>');
         
         //Agregar Texto
         sym.getSymbol("simSelect").$("divtext1").css({"text-align":"center","pointer-events":"none" });
         sym.getSymbol("simSelect").$("divtext2").css({"text-align":"center","pointer-events":"none" });
         sym.getSymbol("simSelect").$("divtext3").css({"text-align":"center","pointer-events":"none" });
         sym.getSymbol("simSelect").$("divtext4").css({"text-align":"center","pointer-events":"none" });
         sym.getSymbol("simSelect").$("divtext5").css({"text-align":"center","pointer-events":"none" });
         sym.getSymbol("simSelect").$("divtext1").append('<p id="p1" class="myP">0</p>')
         sym.getSymbol("simSelect").$("divtext2").append('<p id="p2" class="myP">0</p>')
         sym.getSymbol("simSelect").$("divtext3").append('<p id="p3" class="myP">0</p>')
         sym.getSymbol("simSelect").$("divtext4").append('<p id="p4" class="myP">0</p>')
         sym.getSymbol("simSelect").$("divtext5").append('<p id="p5" class="myP">0</p>')
         $(".myP").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold","font-size":"35px", 
         "color":"white", "margin-top": "25px"});
         
         sym.$("divExpre").css({"pointer-events":"none" });
         sym.$("divExpre").append('<p id="myExpre">testtt</p>')
         $("#myExpre").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold","font-size":"24px", 
         "color":"#E03405"});
         
         //Quitar el evento click de los circulos
         sym.getSymbol("simSelect").$("div1").addClass('fired');
         sym.changeState("addClass");
         sym.fullArray();
         sym.$("simTruck").hide();sym.$("simSelect").hide();sym.$("simQuestion").hide();
         sym.$("EllipseG").hide();sym.$("EllipseB").hide();sym.$("divExpre").hide();sym.$("simJoke").hide();
         
         
         /*Funciones Locales---------------------------------------------------------------------------------------*/
         function randomNoRepeat (min, max) {
         	if (uniqueArray.length==0){
         		for (var i = min; i < max; i++) {
         			uniqueArray.push(i);
         		};
            }
         	var index=Math.floor(Math.random()*uniqueArray.length);
         	var val=uniqueArray[index];
         	if(val==myArrayObj[cont].numb){
         		uniqueArray.splice(index,1);
         		index=Math.floor(Math.random()*uniqueArray.length);
         		val=uniqueArray[index];
         	}
         	uniqueArray.splice(index,1);
         	return val
         }
         
         function putNumber(){
         	var num=Math.floor((Math.random() * 5));
         	var min, max;
         	if(myArrayObj[cont].numb>17){
         		min=5;
         		max=35;
         	}
         	else{
         		min=1;
         		max=21;
         	}
         	for(var i=0;i<5;i++){
         		sym.$("#p"+(i+1)).html(randomNoRepeat(min,max));
         	}
         	sym.$("#p"+(num+1)).html(myArrayObj[cont].numb);
         	sym.$("#myExpre").html(myArrayObj[cont].expre);
         	uniqueArray=[];
         }
       
         
         
         /*Eventos--------------------------------------------------------------------------------------------------*/
         // A $( document ).ready() block.
         $( document ).ready(function() {
         	mySoundAmbient = new Howl({
         		 urls: ['media/ashtonManor.ogg','media/ashtonManor.mp3'],
         		 loop: true
         	});
         	mySoundAmbient.play();
         	mySoundAmbient.volume(0.5);
         });
         sym.getSymbol("simSelect").$("div1").click(function() {
         
         	if(sym.getSymbol("simSelect").$("div1").hasClass('fired') == false){
         		sym.controlLed(sym.$("#p1").text(),0);
         		sym.getSymbol("simContainerObj").getSymbol(ref).stop("end");
         		sym.getSymbol("simContainerObj").getSymbol(ref).play("end");
         		sym.changeState("addClass");
         	}
         });
         sym.getSymbol("simSelect").$("div2").click(function() {
         	if(sym.getSymbol("simSelect").$("div2").hasClass('fired') == false){
         		sym.controlLed(sym.$("#p2").text(),0);
         		sym.getSymbol("simContainerObj").getSymbol(ref).stop("end");
         		sym.getSymbol("simContainerObj").getSymbol(ref).play("end");
         		sym.changeState("addClass");
         	}
         });
         sym.getSymbol("simSelect").$("div3").click(function() {
         	if(sym.getSymbol("simSelect").$("div3").hasClass('fired') == false){
         		sym.controlLed(sym.$("#p3").text(),0);
         		sym.getSymbol("simContainerObj").getSymbol(ref).stop("end");
         		sym.getSymbol("simContainerObj").getSymbol(ref).play("end");
         		sym.changeState("addClass");
         	}
         });
         sym.getSymbol("simSelect").$("div4").click(function() {
         	if(sym.getSymbol("simSelect").$("div4").hasClass('fired') == false){
         		sym.controlLed(sym.$("#p4").text(),0);
         		sym.getSymbol("simContainerObj").getSymbol(ref).stop("end");
         		sym.getSymbol("simContainerObj").getSymbol(ref).play("end");
         		sym.changeState("addClass");
         	}
         });
         sym.getSymbol("simSelect").$("div5").click(function() {
         	if(sym.getSymbol("simSelect").$("div5").hasClass('fired') == false){
         		sym.controlLed(sym.$("#p5").text(),0);
         		sym.getSymbol("simContainerObj").getSymbol(ref).stop("end");
         		sym.getSymbol("simContainerObj").getSymbol(ref).play("end");
         		sym.changeState("addClass");
         	}
         });
         sym.$("simQuestion").mousedown(function() {
         	if(flag && contFlag<3){
         		sym.$("divExpre").show("slow");
         		sym.getSymbol("simJoke").$("TextJoke").html("-"+(contFlag+1));
         		sym.$("simJoke").show();
         		sym.getSymbol("simJoke").play();
         		flag=false;
         		contFlag++;
         	}
         });
         sym.$("simQuestion").mouseup(function() {
         	sym.$("divExpre").hide();
         });
         
         $("#simQuestion").bind('touchstart', function(){
         	 if(flag && contFlag<3){
         		sym.$("divExpre").show("slow");
         		sym.getSymbol("simJoke").$("TextJoke").html("-"+(contFlag+1));
         		sym.$("simJoke").show();
         		sym.getSymbol("simJoke").play();
         		flag=false;
         		contFlag++;
         	}
          }).bind('touchend', function(){
         	  sym.$("divExpre").hide();;
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
   
   //Edge symbol: 'simSelect'
   (function(symbolName) {   
   
   })("simSelect");
   //Edge symbol end:'simSelect'

   //=========================================================
   
   //Edge symbol: 'simTruck'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         mySoundAmbient.volume(0.5);
         sym.getComposition().getStage().$("simQuestion").show("slow");
         sym.getComposition().getStage().startShow();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().$("simTruck").show();
         sym.getComposition().getStage().$("simSelect").show("slow");
         soundTruck.play();

      });
      //Edge binding end

   })("simTruck");
   //Edge symbol end:'simTruck'

   //=========================================================
   
   //Edge symbol: 'simContainerObj'
   (function(symbolName) {   
   
   })("simContainerObj");
   //Edge symbol end:'simContainerObj'

   //=========================================================
   
   //Edge symbol: 'simCua1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().changeState("removeClass");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.getComposition().getStage().controlLed("",1);
         sym.getComposition().getStage().startShow();
         this.deleteSymbol();

      });
      //Edge binding end

   })("simCua1");
   //Edge symbol end:'simCua1'

   //=========================================================
   
   //Edge symbol: 'simCua1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().changeState("removeClass");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.getComposition().getStage().controlLed("",1);
         sym.getComposition().getStage().startShow();
         this.deleteSymbol();

      });
      //Edge binding end

   })("simCua2");
   //Edge symbol end:'simCua2'

   //=========================================================
   
   //Edge symbol: 'simCua2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().changeState("removeClass");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.getComposition().getStage().controlLed("",1);
         sym.getComposition().getStage().startShow();
         this.deleteSymbol();

      });
      //Edge binding end

   })("simRec1");
   //Edge symbol end:'simRec1'

   //=========================================================
   
   //Edge symbol: 'simCua2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().changeState("removeClass");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.getComposition().getStage().controlLed("",1);
         sym.getComposition().getStage().startShow();
         this.deleteSymbol();

      });
      //Edge binding end

   })("simTrian1");
   //Edge symbol end:'simTrian1'

   //=========================================================
   
   //Edge symbol: 'simRec1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().changeState("removeClass");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.getComposition().getStage().controlLed("",1);
         sym.getComposition().getStage().startShow();
         this.deleteSymbol();

      });
      //Edge binding end

   })("simRec2");
   //Edge symbol end:'simRec2'

   //=========================================================
   
   //Edge symbol: 'simTrian1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().changeState("removeClass");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.getComposition().getStage().controlLed("",1);
         sym.getComposition().getStage().startShow();
         this.deleteSymbol();

      });
      //Edge binding end

   })("simTrian2");
   //Edge symbol end:'simTrian2'

   //=========================================================
   
   //Edge symbol: 'simCua2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().changeState("removeClass");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.getComposition().getStage().controlLed("",1);
         sym.getComposition().getStage().startShow();
         this.deleteSymbol();

      });
      //Edge binding end

   })("simCua3");
   //Edge symbol end:'simCua3'

   //=========================================================
   
   //Edge symbol: 'simRec2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().changeState("removeClass");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.getComposition().getStage().controlLed("",1);
         sym.getComposition().getStage().startShow();
         this.deleteSymbol();

      });
      //Edge binding end

   })("simRec3");
   //Edge symbol end:'simRec3'

   //=========================================================
   
   //Edge symbol: 'simTrian2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().changeState("removeClass");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         //sym.getComposition().getStage().startShow();
         sym.getComposition().getStage().controlLed("",1);
         sym.getComposition().getStage().changeState("addClass");
         sym.getComposition().getStage().endShow();
         this.deleteSymbol();

      });
      //Edge binding end

   })("simTrian3");
   //Edge symbol end:'simTrian3'

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
         mySoundAmbient.volume(0.25);
         mySound1.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13750, function(sym, e) {
         sym.getComposition().getStage().getSymbol("simTruck").play();
         sym.getComposition().getStage().addEventInstruccion();
         this.deleteSymbol();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.$("Text2").remove();
         

      });
      //Edge binding end

   })("simIntrucciones");
   //Edge symbol end:'simIntrucciones'

   //=========================================================
   
   //Edge symbol: 'simQuestion'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simQuestion");
   //Edge symbol end:'simQuestion'

   //=========================================================
   
   //Edge symbol: 'simJoke'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.getComposition().getStage().$("simJoke").hide();

      });
      //Edge binding end

   })("simJoke");
   //Edge symbol end:'simJoke'

   //=========================================================
   
   //Edge symbol: 'simCua1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.getSymbol("simEndTooltip").play();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${refresh}", "click", function(sym, e) {
         location.reload();

      });
      //Edge binding end

      })("simEnd");
   //Edge symbol end:'simEnd'

   //=========================================================
   
   //Edge symbol: 'simEndTooltip'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1300, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

   })("simEndTooltip");
   //Edge symbol end:'simEndTooltip'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-521998336");