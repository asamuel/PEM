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
         sym.getSymbol("simTabet").play();
         sym.getSymbol("simLuna").play();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         //Declaramos variables globales
         sym.setVariable("mySound1", 0);
         sym.setVariable("mySound2", 0);
         sym.setVariable("mySound3", 0);
         sym.setVariable("mySound4", 0);
         var cont=1;
         var last="";
         var last2="";
         var myArray=[];
         var valMp3=true;
         
         sym.getSymbol("simTabet").$("ruler1").hide();
         sym.getSymbol("simTabet").$("ruler2").hide();
         
         sym.changeReach = function  (index, sim, num) {
         	sym.getSymbol("simTabet").$("myReach").css({"font-size":"32px","font-family":"Arial, Helvetica, sans-serif ","font-weight": "medium"});
         	if(index==0 && last2!=sim && findElement(num)!=false){
         		if(cont!=1){
         			cont--;
         			findElementD(num);
         			sym.getSymbol("simTabet").$("myReach").html(cont-1);
         			last2=sim;
         			last="";
         		}
         	}  
         	if(index==1 && last!=sim && findElement(num)!=true ){
         		if(cont!=11 ){
         			cont++;
         			myArray.push(num);
         			sym.getSymbol("simTabet").$("myReach").html(cont-1)
         			last=sim;
         			last2="";
         		}
         		}
          }
         
         sym.cleanVar = function  () {
         	sym.getSymbol("simTabet").$("myReach").css({"font-size":"32px","font-family":"Arial, Helvetica, sans-serif","font-weight": "medium"});
         	cont=1;
         	last="";
         	last2="";
         	myArray=[];
         	sym.getSymbol("simTabet").$("myReach").html(0)
         }
         sym.addEventInstruccion = function  () {
         	sym.getSymbol("simMenu").$("simIntruccion3").click(function() {
         		mySound4.volume(0.25);
         		mySound3.play();
         		bootbox.dialog({
         		  message: "<h4 style='font-family=Arial, Helvetica, sans-serif'>"+
         		  "Poné a prueba tus habilidades, juega el siguiente sudoku."+"<br><br>"+
         		  "Recuerda que en cada línea, en cada columna y en cada cuadrado solo "+
         		  "deben de estar números del 1 al 4 y solamente una vez "+
         		  "</h4>",
         		  title: "<h2 style='font-family=Arial, Helvetica, sans-serif'>Instrucciones<h2>",
         		  closeButton:false,
         		  buttons: {
         			 main: {
         				label: "Aceptar!",
         				className: "btn-primary",
         				callback: function() {
         					 mySound3.stop();
         					 mySound4.volume(0.5);
         				}
         			 }
         		  }
         		});
         	});
         }
          function findElementD(sim){
           for(var i=0;i<myArray.length;i++){
            if(myArray[i]==sim){
            	myArray.splice(i,1);
            	}
          	}
          }
         
           function findElement(sim){
           for(var i=0;i<myArray.length;i++){
            if(myArray[i]==sim){
            	return true
            }
          }
          return false
          }
         
         //Cargar audio 
         mySound1 = new Howl({
           urls: ['media/pem193_1.ogg','media/pem193_1.mp3'],
            onend: function() {
               sym.getSymbol("simIntrucciones").play("second");
           }
         });
         
         mySound2 = new Howl({
           urls: ['media/pem193_2.ogg','media/pem193_2.mp3'],
            onend: function() {
               sym.getSymbol("simIntrucciones").play("end");
           }
         });
         
         mySound3 = new Howl({
           urls: ['media/pem193_3.ogg','media/pem193_3.mp3'],
            onend: function() {
           }
         });
         
         $( document ).ready(function() {
            mySound4 = new Howl({
               urls: ['media/pem193_4.ogg','media/pem193_4.mp3'],
               loop: true,
               onend: function() {
               }
            });
            mySound4.play();
            mySound4.volume(0.5);
         });
         
         sym.getSymbol("simMenu").$("simSonido").click(function() {
            if(valMp3){
               mySound4.stop();
               valMp3=false;
            }     
            else{
               mySound4.play();
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
   
   //Edge symbol: 'simTabet'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.getSymbol("simBateria").play();
         sym.getSymbol("simAntena").play();
         startTime() 
         
         
         function startTime() {
         	var today = new Date();
         	var h = today.getHours();
         	var m = today.getMinutes();
         	var s = today.getSeconds();
         	var dn="AM" 
         	if (h>12){
         		dn="PM"
         		h=h-12
         	}
         	if (h==0)
         		h=12
         	m = checkTime(m);
         	s = checkTime(s);
         	sym.$('txt').css({"color":"#1BBC9B"});
         	sym.$('txt').html(h + ":" + m + ":" + s +" "+dn);
         	var t = setTimeout(startTime, 500);
         }
         function checkTime(i) {
         	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
         	return i;
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         var myTime;
         sym.stop();
         
         //Timer en javaScript
         myTime = setInterval(function(){myTimer()},1500)
         
         function myTimer() {
                 clearInterval(myTime); //limpuar cronometro
                 sym.play("game");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         sym.$("infinite2").remove();
         sym.getComposition().getStage().getSymbol("simIntrucciones").play();
         var myInput1="<input placeholder='' type='number'  id=input1>";
         sym.$("inp3").html(myInput1);
         var hDiv=sym.$("inp3").height();
         var wDiv=sym.$("inp3").width();
         sym.$("#input1").css({"width":wDiv+"px","background-color":"#c0c0c0","font-size":"42px", "height":hDiv+"px", "margin": "0 auto"});
         sym.$("#input1").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold"});
         sym.$("#input1").css({"text-align":"center", "color":"black","position": "absolute","top":"50%","left":"50%",
            "-ms-transform":"translate(-50%,-50%)","-webkit-transform":"translate(-50%,-50%)",
            "-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         
         var myInput2="<input placeholder='' type='number'  id=input2>";
         sym.$("inp4").html(myInput2);
         var hDiv=sym.$("inp4").height();
         var wDiv=sym.$("inp4").width();
         sym.$("#input2").css({"width":wDiv+"px","background-color":"#c0c0c0","font-size":"42px", "height":hDiv+"px", "margin": "0 auto"});
         sym.$("#input2").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold"});
         sym.$("#input2").css({"text-align":"center", "color":"black","position": "absolute","top":"50%","left":"50%",
            "-ms-transform":"translate(-50%,-50%)","-webkit-transform":"translate(-50%,-50%)",
            "-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         
         var myInput3="<input placeholder='' type='number'  id=input3>";
         sym.$("inp5").html(myInput3);
         var hDiv=sym.$("inp5").height();
         var wDiv=sym.$("inp5").width();
         sym.$("#input3").css({"width":wDiv+"px","background-color":"#c0c0c0","font-size":"42px", "height":hDiv+"px", "margin": "0 auto"});
         sym.$("#input3").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold"});
         sym.$("#input3").css({"text-align":"center", "color":"black","position": "absolute","top":"50%","left":"50%",
            "-ms-transform":"translate(-50%,-50%)","-webkit-transform":"translate(-50%,-50%)",
            "-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         
         var myInput4="<input placeholder='' type='number'  id=input4>";
         sym.$("inp7").html(myInput4);
         var hDiv=sym.$("inp7").height();
         var wDiv=sym.$("inp7").width();
         sym.$("#input4").css({"width":wDiv+"px","background-color":"#c0c0c0","font-size":"42px", "height":hDiv+"px", "margin": "0 auto"});
         sym.$("#input4").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold"});
         sym.$("#input4").css({"text-align":"center", "color":"black","position": "absolute","top":"50%","left":"50%",
            "-ms-transform":"translate(-50%,-50%)","-webkit-transform":"translate(-50%,-50%)",
            "-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         
         var myInput5="<input placeholder='' type='number'  id=input5>";
         sym.$("inp8").html(myInput5);
         var hDiv=sym.$("inp8").height();
         var wDiv=sym.$("inp8").width();
         sym.$("#input5").css({"width":wDiv+"px","background-color":"#c0c0c0","font-size":"42px", "height":hDiv+"px", "margin": "0 auto"});
         sym.$("#input5").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold"});
         sym.$("#input5").css({"text-align":"center", "color":"black","position": "absolute","top":"50%","left":"50%",
            "-ms-transform":"translate(-50%,-50%)","-webkit-transform":"translate(-50%,-50%)",
            "-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         
         var myInput6="<input placeholder='' type='number'  id=input6>";
         sym.$("inp9").html(myInput6);
         var hDiv=sym.$("inp9").height();
         var wDiv=sym.$("inp9").width();
         sym.$("#input6").css({"width":wDiv+"px","background-color":"#c0c0c0","font-size":"42px", "height":hDiv+"px", "margin": "0 auto"});
         sym.$("#input6").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold"});
         sym.$("#input6").css({"text-align":"center", "color":"black","position": "absolute","top":"50%","left":"50%",
            "-ms-transform":"translate(-50%,-50%)","-webkit-transform":"translate(-50%,-50%)",
            "-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         
         var myInput7="<input placeholder='' type='number'  id=input7>";
         sym.$("inp10").html(myInput7);
         var hDiv=sym.$("inp10").height();
         var wDiv=sym.$("inp10").width();
         sym.$("#input7").css({"width":wDiv+"px","background-color":"#c0c0c0","font-size":"42px", "height":hDiv+"px", "margin": "0 auto"});
         sym.$("#input7").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold"});
         sym.$("#input7").css({"text-align":"center", "color":"black","position": "absolute","top":"50%","left":"50%",
            "-ms-transform":"translate(-50%,-50%)","-webkit-transform":"translate(-50%,-50%)",
            "-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         
         var myInput8="<input placeholder='' type='number'  id=input8>";
         sym.$("inp12").html(myInput8);
         var hDiv=sym.$("inp12").height();
         var wDiv=sym.$("inp12").width();
         sym.$("#input8").css({"width":wDiv+"px","background-color":"#c0c0c0","font-size":"42px", "height":hDiv+"px", "margin": "0 auto"});
         sym.$("#input8").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold"});
         sym.$("#input8").css({"text-align":"center", "color":"black","position": "absolute","top":"50%","left":"50%",
            "-ms-transform":"translate(-50%,-50%)","-webkit-transform":"translate(-50%,-50%)",
            "-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         
         var myInput9="<input placeholder='' type='number'  id=input9>";
         sym.$("inp13").html(myInput9);
         var hDiv=sym.$("inp13").height();
         var wDiv=sym.$("inp13").width();
         sym.$("#input9").css({"width":wDiv+"px","background-color":"#c0c0c0","font-size":"42px", "height":hDiv+"px", "margin": "0 auto"});
         sym.$("#input9").css({"font-family":"Arial, Helvetica, sans-serif","font-weight": "bold"});
         sym.$("#input9").css({"text-align":"center", "color":"black","position": "absolute","top":"50%","left":"50%",
            "-ms-transform":"translate(-50%,-50%)","-webkit-transform":"translate(-50%,-50%)",
            "-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         
         var myInput10="<input placeholder='' type='number'  id=input10>";
         sym.$("inp14").html(myInput10);
         var hDiv=sym.$("inp14").height();
         var wDiv=sym.$("inp14").width();
         sym.$("#input10").css({"width":wDiv+"px","background-color":"#c0c0c0","font-size":"42px", "height":hDiv+"px", "margin": "0 auto"});
         sym.$("#input10").css({"font-family":"Arial, Helvetica, sans-serif ","font-weight": "bold"});
         sym.$("#input10").css({"text-align":"center", "color":"black","position": "absolute","top":"50%","left":"50%",
            "-ms-transform":"translate(-50%,-50%)","-webkit-transform":"translate(-50%,-50%)",
            "-moz-transform":"translate(-50%,-50%)","transform": "translate(-50%,-50%)"});
         
         
         sym.$("#input1")[0].addEventListener('input', 
         function(){
         	var num = sym.$('#input1').val();
         	if(num>4 || num<1){
         		sym.$('#input1').val(""); 
         		sym.getComposition().getStage().changeReach(0, "input1_0", "input1");
         	}else
         		sym.getComposition().getStage().changeReach(1, "input1_1", "input1");
         
         }, true);
         
         sym.$("#input2")[0].addEventListener('input', 
         function(){
         	 var num = sym.$('#input2').val();
         	 if(num>4 || num<1){
         	 	sym.$('#input2').val("");
         	 	sym.getComposition().getStage().changeReach(0, "input2_0", "input2");
         	 	}
         	 else
         		sym.getComposition().getStage().changeReach(1, "input2_1", "input2");
         }, true);
         
         sym.$("#input3")[0].addEventListener('input', 
         function(){
         	 var num = sym.$('#input3').val();
         	 if(num>4 || num<1){
         	 	sym.$('#input3').val("");
         	 	sym.getComposition().getStage().changeReach(0, "input3_0", "input3");
         	 	}
         	 else
         		sym.getComposition().getStage().changeReach(1, "input3_1", "input3");
         
         }, true);
         
         sym.$("#input4")[0].addEventListener('input', 
         function(){
         	 var num = sym.$('#input4').val();
         	 if(num>4 || num<1){
         	 	sym.$('#input4').val("");
         	 	sym.getComposition().getStage().changeReach(0, "input4_0", "input4"); 	
         	 	}
         	 else
         		sym.getComposition().getStage().changeReach(1, "input4_1", "input4");
         }, true);
         
         sym.$("#input5")[0].addEventListener('input', 
         function(){
         	 var num = sym.$('#input5').val();
         	 if(num>4 || num<1){
         	 	sym.$('#input5').val("");
         	 	sym.getComposition().getStage().changeReach(0, "input5_0", "input5"); 	
         	 	}
         	 else
         		sym.getComposition().getStage().changeReach(1, "input5_1", "input5");
         }, true);
         
         sym.$("#input6")[0].addEventListener('input', 
         function(){
         	 var num = sym.$('#input6').val();
         	 if(num>4 || num<1){
         	 	sym.$('#input6').val("");
         	 	sym.getComposition().getStage().changeReach(0, "input6_0", "input6"); 	
         	 	}
         	 else
         		sym.getComposition().getStage().changeReach(1, "input6_1", "input6");
         }, true);
         
         sym.$("#input7")[0].addEventListener('input', 
         function(){
         	 var num = sym.$('#input7').val();
         	 if(num>4 || num<1){
         	 	sym.$('#input7').val("");
         	 	sym.getComposition().getStage().changeReach(0, "input7_0", "input7"); 	
         	 	}
         	 else
         		sym.getComposition().getStage().changeReach(1, "input7_1", "input7");
         }, true);
         
         sym.$("#input8")[0].addEventListener('input', 
         function(){
         	 var num = sym.$('#input8').val();
         	 if(num>4 || num<1){
         	 	sym.$('#input8').val("");
         		sym.getComposition().getStage().changeReach(0, "input8_0", "input8"); 
         	 	}
         	else
         		sym.getComposition().getStage().changeReach(1, "input8_1", "input8");
         }, true);
         
         sym.$("#input9")[0].addEventListener('input', 
         function(){
         	 var num = sym.$('#input9').val();
         	 if(num>4 || num<1){
         	 	sym.$('#input9').val("");
         	 	sym.getComposition().getStage().changeReach(0, "input9_0", "input9"); 
         	 	}
         	 else
         		sym.getComposition().getStage().changeReach(1, "input9_1", "input9");
         }, true);
         
         sym.$("#input10")[0].addEventListener('input', 
         function(){
         	 var num = sym.$('#input10').val();
         	 if(num>4 || num<1){
         	 	sym.$('#input10').val("");
         	 	sym.getComposition().getStage().changeReach(0, "input10_0", "input10"); 
         	 	}
         	 else
         		sym.getComposition().getStage().changeReach(1, "input10_1", "input10");
         }, true);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3300, function(sym, e) {
         var myButton='<a href="#" id="myClean" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-erase"></span> Limpiar!</a>';
         sym.$("containerButton").html(myButton);
         
         sym.$( "#myClean" ).bind( "click", function() {
           for(var i=1;i<11;i++){
         			sym.$('#input'+(i)).val("")
         	}
         	sym.getComposition().getStage().cleanVar();
         });
         sym.$("ruler1").show("slow");
         sym.$("ruler2").show("slow");

      });
      //Edge binding end

   })("simTabet");
   //Edge symbol end:'simTabet'

   //=========================================================
   
   //Edge symbol: 'simBateria'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simBateria");
   //Edge symbol end:'simBateria'

   //=========================================================
   
   //Edge symbol: 'simAntena'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simAntena");
   //Edge symbol end:'simAntena'

   //=========================================================
   
   //Edge symbol: 'simMoon'
   (function(symbolName) {   
   
   })("simMoon");
   //Edge symbol end:'simMoon'

   //=========================================================
   
   //Edge symbol: 'lunaSprite2_symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6625, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("lunaSprite2_symbol_1");
   //Edge symbol end:'lunaSprite2_symbol_1'

   //=========================================================
   
   //Edge symbol: 'simLuna'
   (function(symbolName) {   
   
   })("simLuna");
   //Edge symbol end:'simLuna'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'simIntrucciones'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2350, function(sym, e) {
         sym.stop();
         mySound1.play();
         mySound4.volume(0.25);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.getComposition().getStage().addEventInstruccion();
         mySound4.volume(0.5);
         this.deleteSymbol();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3800, function(sym, e) {
         sym.stop();
         mySound2.play();
         

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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-646464134");