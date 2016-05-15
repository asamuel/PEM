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
         sym.$("effectDiv").remove();
      
      });
      //Edge binding end
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         /*Variables globales-----------------------------------------------------------------------------------------*/
         sym.setVariable("mySoundEvent", 0);
         sym.setVariable("mySoundError", 0);
         sym.setVariable("mySoundAmbient", 0);
         sym.setVariable("myNoise", 0);
         var shadow1 = "0 1px 3px  0 rgba(0, 0, 0, 0.5), 0 1px 2px 0 rgba(0, 0, 0, 0.6)";
         var shadow2 = "0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2)";
         var shadow3 = "10px 8px 15px  0 rgba(0, 0, 0, 0.3), 0 1px 1px 0 rgba(0, 0, 0, 0.3)"
         var arrayTile = [];
         var arrayNumb1 = [1,3,5,7,2,4,6,8,2,5,8,11,1,9,17,25,1,1,2,4];
         var arrayNumb2 = [2,4,8,9,7,3,3,10,24,28,19,1,4,5,10];
         var cont=0,valMp3=true;
         var uniqueArrayIdentifier = [true,false];
         var arrayTempo=[],myArrayFeedbackObj=[];
         var beforeBool;
         var chars=null,limit=2, text="", textGlobal;
         /*Clases---------------------------------------------------------------------------------------------------*/
         function feedBackObj(arrayNumb, feedback) {
           this.arrayNumb = arrayNumb;
           this.feedback = feedback;
         }
         /*Cargar---------------------------------------------------------------------------------------------------*/
         mySoundEvent = new Howl({
           urls: ['media/TinyButtonPush.ogg','media/TinyButtonPush.mp3']
         });
         mySoundError = new Howl({
           urls: ['media/beep-10.ogg','media/beep-10.mp3']
         });
         myNoise = new Howl({
         	urls: ['media/noise.ogg','media/noise.mp3'],
         	onend: function() {
         		sym.getSymbol("simIntrucciones").play("end");
           }
         });
         (function($){
             $.fn.extend({
                 numAnim: function(options) {
                     if ( ! this.length)
                         return false;
         
                     this.defaults = {
                         endAt: 2560,
                         numClass: 'autogen-num',
                         duration: 5,   // seconds
                         interval: 90  // ms
                     };
                     var settings = $.extend({}, this.defaults, options);
         
                     var $num = $('<span/>', {
                         'class': settings.numClass 
                     });
         
                     return this.each(function() {
                         var $this = $(this);
         
                         // Wrap each number in a tag.
                         var frag = document.createDocumentFragment(),
                             numLen = settings.endAt.toString().length;
                         for (x = 0; x < numLen; x++) {
                             var rand_num = Math.floor( Math.random() * 10 );
                             frag.appendChild( $num.clone().text(rand_num)[0] )
                         }
                         $this.empty().append(frag);
         
                         var get_next_num = function(num) {
                             ++num;
                             if (num > 9) return 0;
                             return num;
                         };
         
                         // Iterate each number.
                         $this.find('.' + settings.numClass).each(function() {
                             var $num = $(this),
                                 num = parseInt( $num.text() );
         
                             var interval = setInterval( function() {
                                 num = get_next_num(num);
                                 $num.text(num);
                             }, settings.interval);
         
                             setTimeout( function() {
                                 clearInterval(interval);
                             }, settings.duration * 1000 - settings.interval);
                         });
         
                         setTimeout( function() {
                             $this.text( settings.endAt.toString() );
                         }, settings.duration * 1000);
                     });
                 }
             });
         })(jQuery);
         
         /*Funciones Globales---------------------------------------------------------------------------------------*/
         sym.addEventInstruccion = function  () {
         	sym.getSymbol("simMenu").$("simIntruccion3").click(function() {
         		mySoundAmbient.volume(0.25);
         		myNoise.play();
         		bootbox.dialog({
         		  message: "<p style='font-family:Arial, Helvetica, sans-serif;font-size:18px;font-style:;'>"+
         		  "Digita el número que falta en la secuencia que aparece en la pantalla</p>",
         		  title: "<h2 style='font-family:Arial, Helvetica, sans-serif;margin-top:10;margin-bottom:0;'>Instrucciones<h2>",
         		  closeButton:false,
         		  buttons: {
         			 main: {
         				label: "Aceptar!",
         				className: "btn-primary",
         				callback: function() {
         					 myNoise.stop(); 
         					 mySoundAmbient.volume(0.5);
         				}
         			 }
         		  }
         		});
         	setStyleModal();
         	});
         }
         sym.putNumbers = function (){
         if(arrayNumb1.length != 0 && arrayNumb1.length != 0){
         	for(var i=0;i<5;i++)
         		sym.$("hed"+(i)).children().remove();
         
         	var x=randomArray();
         	arrayTempo=[];
         
         	if(x){
         		if(arrayNumb1.length != 0){
         			sym.$("hed0").show();
         			for(var i=0;i<4;i++){
         				sym.$("hed"+(i)).html("<p id='p"+i+"' class='pClass'><p>")
         				$("#p"+(i)).numAnim({
         					endAt: arrayNumb1[i],
         					duration: 2
         				});
         			}
         			createPlaceholder("hed4");
         			for(var i=0; i<4; i++){
         				arrayTempo[i]=arrayNumb1[0];
         				arrayNumb1.splice(0,1);
         			}
         		}
           }
         
         	else{
         		if(arrayNumb1.length != 0){
         		createPlaceholder("hed3");
         		sym.$("hed0").hide();
         		for(var i=0;i<3;i++){
         			if(i==2)
         					sym.$("hed"+(i+2)).html("<p id='p"+i+"' class='pClass'><p>")
         			else			
         					sym.$("hed"+(i+1)).html("<p id='p"+i+"' class='pClass'><p>")
         
         				$("#p"+(i)).numAnim({
         					endAt: arrayNumb2[i],
         					duration: 2
         				});
         			}
         
         		for(var i=0; i<3; i++){
         			arrayTempo[i]=arrayNumb2[0];
               	arrayNumb2.splice(0,1);
               }
            }
         	}
         }
         else{
         $('#myT1').attr('readonly', 'true');
         sym.$("dintro").addClass("fired");
         sym.$("dC").addClass("fired");
         for(var i=0;i<10;i++){
         	sym.$("d"+(i)).addClass("fired");
         }
         
         for(var i=0;i<5;i++)
         		sym.$("hed"+(i)).children().remove();
         }
         }
         
         /*Llamados a funciones y css-------------------------------------------------------------------------------*/ 
         setStyle();
         
         /*Funciones Locales---------------------------------------------------------------------------------------*/
         function setStyle(){
         	sym.$(".tile").css({"box-shadow":shadow1});
         	sym.$("calcContainer").css({"box-shadow":shadow3});
         	 mySoundEvent.volume(1.0);
         }
         
         sym.createTileEvents = function (){
         	var elementX;
         	for(var i=0;i<13;i++){
         		if(i==12)
         			elementX=sym.$("dWatch");
         		if(i==11)
         			elementX=sym.$("dC");
         		if(i==10)
         			elementX=sym.$("dintro");
         		if(i<10)
         			elementX=sym.$("d"+(i));
         
         		elementX.click(function(){
         		if(sym.$(this).hasClass('fired') == false){
         			mySoundEvent.play();
         		}
         		});
         		elementX.mousedown(function(event) {
         			if(sym.$(this).hasClass('fired') == false){
         				tweenDown(this);
         				writeCalc(this);
         			}
         		});
         
         		elementX.mouseup(function(event) {
         		if(sym.$(this).hasClass('fired') == false){
         			tweenUp(this);
         		}
         		});
         		arrayTile[i]=elementX;
         	}
         }
         
         function tweenDown(index){
         	TweenLite.to(index, 0.2, {
         		autoAlpha : 0.75,
         		boxShadow : shadow2,
         		scale     : 0.95
         	});
         }
         
         function tweenUp(index, indexText){
         	TweenLite.to(index, 0.2, {
         			autoAlpha : 1,
         			boxShadow: shadow1,
         			scale     : 1,
         			x         : this.x,
         			y         : this.y,
         	  });
         }
         
         function writeCalc(index){
         	if(index.id=="Stage_dWatch"){
         		setTimeout(function(){
         		showResult()},100);
         	}
         	else{
         	 dd();
         	 switch (index.id) {
         			case "Stage_d0": 
         								if(chars < limit){
         										sym.$("#myT1").val(textGlobal+"0");
         									   mySoundEvent.volume(1.0);
         									}
         									else{
         										mySoundError.play();mySoundEvent.volume(0.0);}
         									break;
         		   case "Stage_d1": 
         									if(chars < limit){
         										sym.$("#myT1").val(textGlobal+"1");
         										 mySoundEvent.volume(1.0);
         									}
         									else{
         										mySoundError.play();mySoundEvent.volume(0.0);}
         									break;
         		   case "Stage_d2": 
         									if(chars < limit){
         										mySoundEvent.volume(1.0);
         										sym.$("#myT1").val(textGlobal+"2");
         									}
         									else{
         										mySoundError.play();mySoundEvent.volume(0.0);}
         									break;
         		   case "Stage_d3": 
         									if(chars < limit){
         										mySoundEvent.volume(1.0);
         										sym.$("#myT1").val(textGlobal+"3");
         									}
         									else{
         										mySoundError.play();mySoundEvent.volume(0.0);}
         									break;
         
         			case "Stage_d4": 
         									if(chars < limit){
         										mySoundEvent.volume(1.0);
         										sym.$("#myT1").val(textGlobal+"4");
         									}
         									else{
         										mySoundError.play();mySoundEvent.volume(0.0);}
         									break;
         		  case "Stage_d5": 
         									if(chars < limit){
         										mySoundEvent.volume(1.0);
         										sym.$("#myT1").val(textGlobal+"5");
         									}
         									else{
         										mySoundError.play();mySoundEvent.volume(0.0);}
         									break;
         		   case "Stage_d6": 
         									if(chars < limit){
         										mySoundEvent.volume(1.0);
         										sym.$("#myT1").val(textGlobal+"6");
         									}
         									else{
         										mySoundError.play();mySoundEvent.volume(0.0);}
         									break;
         		   case "Stage_d7": 
         									if(chars < limit){
         										mySoundEvent.volume(1.0);
         										sym.$("#myT1").val(textGlobal+"7");
         									}
         									else{
         										mySoundError.play();mySoundEvent.volume(0.0);}
         									break;
         		   case "Stage_d8": 
         									if(chars < limit){
         										mySoundEvent.volume(1.0);
         										sym.$("#myT1").val(textGlobal+"8");
         									}
         									else{
         										mySoundError.play();mySoundEvent.volume(0.0);}
         									break;
         			case "Stage_d9": 
         									if(chars < limit){
         										mySoundEvent.volume(1.0);
         										sym.$("#myT1").val(textGlobal+"9");
         									}
         									else{
         										mySoundError.play();mySoundEvent.volume(0.0);}
         									break;
         		   case "Stage_dintro": 
         									if(nextStep())
             									sym.putNumbers(); 
         									else{
         										mySoundEvent.volume(0.0);
         										mySoundError.play();
         									}
         
         		   case "Stage_dC": 
         		   					   mySoundEvent.volume(1.0);
         									sym.$("#myT1").val("");
         									break;
         	}
         	}
         }
         
         function effectKey(index){
         	tweenDown(index);
         	setTimeout(function(){
         	tweenUp(index)},100);
         }
         function dd(){
         	textGlobal = $("#myT1").val();  
         	chars = textGlobal.length;  
         }
         
         function randomArray () {
         	if (uniqueArrayIdentifier.length==0){
         		uniqueArrayIdentifier=[true,false];
         	}
            do{
               var index=Math.floor(Math.random()*uniqueArrayIdentifier.length);
         		var val=uniqueArrayIdentifier[index];
            }while(val==beforeBool);
         
            beforeBool=val;
         	uniqueArrayIdentifier.splice(index,1);
         	return val;
         }
         function createPlaceholder(index){
         	var myTextArea1='<textarea id="myT1" maxlength="2" type="number" class="myPlaceholder" style="color:white;" placeholder="?"></textarea>';
         	var hDiv=sym.$(index).height();
         	var wDiv=sym.$(index).width();
         	sym.$(index).html(myTextArea1);
         	sym.$(".myPlaceholder").css({"color" : "white", "font-style": "bold", "width": wDiv, "height": hDiv});
         	sym.$(".myPlaceholder").css({"background-color": "rgba(0,0,0,0.9", "resize": "none",'text-align': 'center'});
         	sym.$(".myPlaceholder").css({"font-size": "60px","overflow":"hidden"});
         	attachEvents();
         }
         
         function nextStep(){
         	text = sym.$("#myT1").val();
         	if((sym.$("#myT1").hasClass('fired') == false) && text !=""){
         		sym.$("#myT1").val("");
         		effectKey(arrayTile[10]);
         		myClassTemp = new feedBackObj(arrayTempo, text);
         		myArrayFeedbackObj.push(myClassTemp);
         		return 1;
         	}
         	else
         		return 0;
         }
         
         function showResult(){
         	if(myArrayFeedbackObj.length!=0){
         		var myString="",myString2="";
         		var myTable="<table class='table table-hover'>"+
         			"<thead>"+
         				"<tr>"+
         				  "<th style='text-align:center; font-size:19px'>Num.</th>"+
         				  "<th style='text-align:center; font-size:19px'>Secuencia</th>"+
         				"</tr>"+
         			 "</thead>";
         
         		for(var i=0; i<myArrayFeedbackObj.length; i++){
         			myTable+="<tbody>"+
         				"<tr class='success'>";
         				if(myArrayFeedbackObj[i].arrayNumb.length==4){
         					myString="";
         					for(var j=0;j<4;j++){
         						myString+=myArrayFeedbackObj[i].arrayNumb[j]+"		->		";
         					}
         					myTable+="<td style='text-align:center; font-size:19px'>"+(i+1)+"</td>"
         					myTable+="<td style='text-align:center; font-size:19px'>"+
         					myString+"<strong><em><span style='color:#ffa500'>"+
         					myArrayFeedbackObj[i].feedback+"</span></em></strong></td>"+
         					"</tr>";
         				}
         				else{
         					myString="";
         					myString2="";
         					for(var j=0;j<3;j++){
         						if(j==2)
         							myString2="		->		"+myArrayFeedbackObj[i].arrayNumb[j];
         						else
         							myString+=myArrayFeedbackObj[i].arrayNumb[j]+"		->		";
         					}
         					myTable+="<td style='text-align:center; font-size:19px'>"+(i+1)+"</td>"
         					myTable+="<td style='text-align:center; font-size:19px'>"+
         					myString+"<strong><em><span style='color:#ffa500'>"+
         					myArrayFeedbackObj[i].feedback+"</span></em></strong>"+myString2+"</td>"+
         					"</tr>";
         				}
         
         		}
         		myTable+="</tbody>"+
         				"</table>";
         		showFeedback(myTable);
         	}
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
         
         /*Eventos--------------------------------------------------------------------------------------------------*/
         $( document ).ready(function() {
         	mySoundAmbient = new Howl({
         		 urls: ['media/mellowtron.ogg','media/mellowtron.mp3'],
         		 loop: true
         	});
         	mySoundAmbient.play();
         	mySoundAmbient.volume(0.5);
         });
         
         $(document).keypress(function(event){
         	var keyCodeString = String.fromCharCode(event.which);
         
         	switch (keyCodeString) {
            	case "0": 
                 			effectKey(arrayTile[0]);mySoundEvent.play(); 
                 			break;
            	case "1": 
              				effectKey(arrayTile[1]);mySoundEvent.play(); 
                 			break;
               case "2": 
                 			effectKey(arrayTile[2]);mySoundEvent.play(); 
                 			break;
            	case "3": 
              				effectKey(arrayTile[3]);mySoundEvent.play(); 
                 			break;
               case "4": 
                 			effectKey(arrayTile[4]);mySoundEvent.play(); 
                 			break;
            	case "5": 
              				effectKey(arrayTile[5]);mySoundEvent.play(); 
                 			break;
               case "6": 
                 			effectKey(arrayTile[6]);mySoundEvent.play(); 
                 			break;
            	case "7": 
              				effectKey(arrayTile[7]);mySoundEvent.play(); 
                 			break;
               case "8": 
                 			effectKey(arrayTile[8]);mySoundEvent.play(); 
                 			break;
            	case "9": 
              				effectKey(arrayTile[9]);mySoundEvent.play(); 
                 			break;    			
            }
         });
         
         function attachEvents(){
         	sym.$('.myPlaceholder').keyup(keyUpFunction);  
         
         	sym.$('.myPlaceholder').keypress(function(e) {
         		 mySoundEvent.volume(1.0);
         		 var a = [];
         		 text = sym.$("#myT1").val();
         		 chars = text.length; 
         		 var k = e.which;
         		 var keyCodeString = String.fromCharCode(event.which);
         		 for (i = 48; i < 58; i++)
         			  a.push(i);
         
         		 if (!(a.indexOf(k)>=0) || (chars == limit)){
         			if(e.keyCode == 13){
         				if(nextStep()){
         					sym.putNumbers();mySoundEvent.play(); }
         				else{
         					mySoundEvent.volume(0.0);
         					mySoundError.play();
         					e.preventDefault(); 
         				}
         			}
         			else{
         				e.preventDefault();
         				mySoundEvent.volume(0.0);
         				mySoundError.play();
         			}
         		  }
         	});
         
         function keyUpFunction(){
         		var text1 = $("#myT1").val();  
         		chars = text1.length;  
         		if(chars > limit){  
         			var new_text = text1.substr(0, limit);  
         			$("#myT1").val(new_text); 
         		}
         	}
         }
         
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

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

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
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2100, function(sym, e) {
         sym.stop();
         mySoundAmbient.volume(0.25);
         myNoise.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.getComposition().getStage().addEventInstruccion();
         sym.getComposition().getStage().putNumbers();
         sym.getComposition().getStage().createTileEvents();
         mySoundAmbient.volume(0.5);
         this.deleteSymbol();

      });
      //Edge binding end

   })("simIntrucciones");
   //Edge symbol end:'simIntrucciones'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-20746995");