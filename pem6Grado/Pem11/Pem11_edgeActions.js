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
         sym.$("divEffect").remove();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         /*Variables globales-----------------------------------------------------------------------------------------*/
         sym.setVariable("counter", 1);
         sym.setVariable("s2", 0);
         sym.setVariable("myNoise", 0);
         sym.setVariable("mySoundAmbient", 0);
         counter=1;
         var temp;
         var valMp3=true;
         var anterior;
         var arrayPositions=[];
         var arrayOptions=[];
         var arrayOptionsGood=[12,7,8];
         var arraySelectedOptions=[];
         var arrayMain=[];
         var array1=[3,6,9,18,15,21,24,27];
         var array2=[5,3,9,2,6,4,12,2,0,0,-2];
         var array3=[13,23,38,32,17,7,2,5,10,20,35];
         arrayMain.push(array1);
         arrayMain.push(array2);
         arrayMain.push(array3);
         
         /*Clases---------------------------------------------------------------------------------------------------*/
         
         /*Cargar---------------------------------------------------------------------------------------------------*/
         mySoundAmbient = new Howl({
           urls: ['media/fiddles.ogg','media/fiddles.mp3'],
           loop: true
         });
         mySoundAmbient.play();
         mySoundAmbient.volume(0.5);
         
         myNoise = new Howl({
         	urls: ['media/noise.ogg','media/noise.mp3'],
         	onend: function() {
         	if(sym.$("simIntrucciones").length)
         		sym.getSymbol("simIntrucciones").play("end");
           }
         });
         /*Funciones Globales---------------------------------------------------------------------------------------*/
         sym.styleDropable=function (){
         	sym.$(".dropzone").css({
         	'background-color':'rgba(0,0,0,0.0)',
         	'border':'dashed 6px transparent',
         	'transition':'all 0.2s linear 0s',
         	'-webkit-transition':'all 0.2s linear 0s',
         	'-moz-transition':'all 0.2s linear 0s',
         	'-o-transition':'all 0.2s linear 0s',
         	'-ms-transition':'all 0.2s linear 0s',
         	});
         	sym.$(".drop-active").css({
         		'border':'6px dashed Chartreuse',
         	});
         	sym.$(".drop-target").css({
         		'background-color':'rgba(127, 255, 0, 0.5)',
         		'border': '2px solid white'
         	});
         	jss.set('.draggable:hover',{
         		'cursor':'move'
         	});
         
         }
         sym.addEventInstruccion = function  () {
         	sym.getSymbol("simMenu").$("simIntruccion3").click(function() {
         		mySoundAmbient.volume(0.25);
         		myNoise.play();
         		bootbox.dialog({
         		  message: "<p style='font-family:Arial, Helvetica, sans-serif;font-size:18px;'>"+
         		  "Ayuda al mono Nelson a escoger la naranja y así poder llenar su estante.</p>"+
         		  "<p style='font-family:Arial, Helvetica, sans-serif;font-size:18px;'>"+
         		  "Arrastra la naranja correspondiente.</p>",
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
         
         sym.startShow = function  () {
         	sym.getSymbol("simEstante").play();
         	sym.getSymbol(s2).play(0);
         	sym.$("simEstante").show();
         	sym.getSymbol("simHojas").play();
         	inicio();
         }
         
         /*Llamados a funciones y css-------------------------------------------------------------------------------*/       
         s2=sym.createChildSymbol("simContainerGlobal",sym.getSymbol("simEstante").$("containerContainer")).getSymbolElement();
         s2.css({"position": "absolute",  "top" : "0px", "left":'0px' });
         sym.$("simEstante").hide();
         sym.getSymbol("simEstante").$("simFrutas2").hide();
         sym.getSymbol("simEstante").$("simFrutas3").hide();
         
         sym.getSymbol(s2).stop(0);
         sym.getSymbol(s2).$(".divDrag").hide();
         
         putCss();
         
         
         /*Funciones Locales---------------------------------------------------------------------------------------*/
         function inicio(){
         	shuffle();
         	sym.getSymbol(s2).$("drop1").hide();
         	sym.getSymbol(s2).$("drop2").hide();
         	sym.getSymbol(s2).$("drop3").hide();
         	sym.getSymbol(s2).$("drop"+counter).show();
         	sym.getSymbol(s2).$("drop"+counter).addClass("dropzone");
         	sym.styleDropable();
         
            sym.getSymbol("simEstante").getSymbol("simFrutas"+counter).play();
         	temp=sym.getSymbol("simEstante").getSymbol("simFrutas"+counter);
         	for(var i=1;i<=arrayMain[counter-1].length;i++){
         		temp.$("fruta"+i).append("<div class='numbers'>"+arrayMain[counter-1][i-1]+"</div>");
         	}
         
         	sym.getSymbol(s2).$("frutaDrag"+getPosition()).
         		append("<div class='numbers'>"+arrayOptionsGood[counter-1]+"</div>");
         	for(var i=0;i<4;i++){
         		sym.getSymbol(s2).$("frutaDrag"+getPosition()).
         			append("<div class='numbers'>"+arrayOptions[i]+"</div>");
         	}
         }
         function putCss(){
         	sym.$('simHojas').css({'pointer-events':'none'});
         	sym.$(".btn").css({'transition':'all 0.3s linear 0s'});
         	jss.set('.btn:hover',{
         		'box-shadow':'0 0 30px white',
         		'cursor':'pointer'
         	});
         	jss.set('.numbers',{
         		'text-align':'center','color':'white','font-size':'2.625em',
         		'position':'absolute', 'top':'70%','left':'50%',"-ms-transform":"translate(-50%,-70%)",
         		"-webkit-transform":"translate(-50%,-70%)","-moz-transform":"translate(-50%,-70%)",
         		"transform": "translate(-50%,-70%)"
         	});
         	jss.set('td, th',{
         		'text-align':'center',
         		'font-size':'28px',
         		'vertical-align':'middle !important',
         		'font-family':'annie-use-your-telescope, sans-serif',
         		'font-weight':'bold',
         	}); 
         
         	jss.set('th',{
         		'background-color':'#4CAF50',
         		'color':'white'
         	});
         	jss.set('.otherRow',{
         		'border-bottom':'2px solid green',
         		'border-style': 'hidden'
         	});
         	jss.set('.lastRow',{
         		'border-bottom':'2px dashed green',
         	});
         	jss.set('.seleccionado',{
         		'font-family':'cabin-sketch, sans-serif',
         		'font-size':'2.825em',
         		'vertical-align':'middle',
         		'font-weight':'bold',
         		'border-bottom':'2px dashed green !important'
         	});
            jss.set('.incog',{
               'font-weight':'bold',
               'color':'green'
            });
            jss.set('span',{
               'font-size':'1.2em',
            });
         
         }
         
         function shuffle() {
         	arrayOptions = [];
         	while(arrayOptions.length < 4){
         	  var randomnumber=Math.ceil(Math.random()*30)
         	  var found=false;
         	  for(var i=0;i<arrayOptions.length;i++){
         		if(arrayOptions[i]==randomnumber){found=true;break}
         	  }
         	  if(!found && randomnumber!=arrayOptionsGood[counter-1])arrayOptions[arrayOptions.length]=randomnumber;
         	}
         }
         
         function getPosition() {
               if (arrayPositions.length==0){
                 for (var i = 1; i <= 5; i++) {
                   arrayPositions.push(i);
                 };
               }
               var index=Math.floor(Math.random()*arrayPositions.length);
               var val=arrayPositions[index];
               arrayPositions.splice(index,1);
               return val
         }
         function showResult(){
         //if(myArrayFeedbackObj.length!=0){
         	var myTable="<table class='table'>"+
         		"<thead>"+
         			"<tr>"+
         			  "<th>El que has Seleccionado!</th>"+
         			  "<th>Números</th>"+
         			"</tr>"+
         		 "</thead>"+
         		 "</thead>"+
         		 "<tbody>";
         
               if(arraySelectedOptions.length>0){
               if(arraySelectedOptions.length==1){
               myTable+="<tr>"+
                           "<td  rowspan='3' class='seleccionado'>"+arraySelectedOptions[0]+"</td>"+
                           "<td class='otherRow'>3 6 9</td>"+
                        "</tr>"+
                        "<tr>"+
                           "<td class='otherRow'>18 15 <em><span class='incog'>?</span></em></td>"+
                        "</tr>"+
                         "<tr class='lastRow'>"+
                           "<td>21 24 27</td>"+
                        "</tr>";
               }
         
         		if(arraySelectedOptions.length==2){
         		myTable+="<tr>"+
         						"<td  rowspan='3' class='seleccionado'>"+arraySelectedOptions[0]+"</td>"+
         		         	"<td class='otherRow'>3 6 9</td>"+
         		         "</tr>"+
         		         "<tr>"+
         						"<td class='otherRow'>18 15 <em><span class='incog'>?</span></em></td>"+
         		         "</tr>"+
         		          "<tr class='lastRow'>"+
         						"<td>21 24 27</td>"+
         		         "</tr>";
         		myTable+="<tr>"+
         						"<td  rowspan='3' class='seleccionado'>"+arraySelectedOptions[1]+"</td>"+
         		         	"<td class='otherRow'> 5 3 9 <em><span class='incog'>?</span></em></td>"+
         		         "</tr>"+
         		         "<tr>"+
         						"<td class='otherRow'>2 6 4 12</td>"+
         		         "</tr>"+
         		          "<tr class='lastRow'>"+
         						"<td>2 0 0 -2</td>"+
         		         "</tr>";
               }
               if(arraySelectedOptions.length==3){
               myTable+="<tr>"+
                           "<td  rowspan='3' class='seleccionado'>"+arraySelectedOptions[0]+"</td>"+
                           "<td class='otherRow'>3 6 9</td>"+
                        "</tr>"+
                        "<tr>"+
                           "<td class='otherRow'>18 15 <em><span class='incog'>?</span></em></td>"+
                        "</tr>"+
                         "<tr class='lastRow'>"+
                           "<td>21 24 27</td>"+
                        "</tr>";
               myTable+="<tr>"+
                           "<td  rowspan='3' class='seleccionado'>"+arraySelectedOptions[1]+"</td>"+
                           "<td class='otherRow'>5 3 9 <em><span class='incog'>?</span></em></td>"+
                        "</tr>"+
                        "<tr>"+
                           "<td class='otherRow'>2 6 4 12</td>"+
                        "</tr>"+
                         "<tr class='lastRow'>"+
                           "<td>2 0 0 -2</td>"+
                        "</tr>";
               myTable+="<tr>"+
                           "<td  rowspan='3' class='seleccionado'>"+arraySelectedOptions[2]+"</td>"+
                           "<td class='otherRow'><em><span class='incog'>?</span></em> 13 23 38</td>"+
                        "</tr>"+
                        "<tr>"+
                           "<td class='otherRow'>32 17 7 2</td>"+
                        "</tr>"+
                         "<tr class='lastRow'>"+
                           "<td>5 10 20 35</td>"+
                        "</tr>";
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
         sym.$("divBtnVer").click(function(){
            showResult()
         });
         
         sym.$("divBtnSig").click(function(){
         if(counter<3 && arraySelectedOptions.length==counter){
         	temp.deleteSymbol();
         	sym.getSymbol(s2).deleteSymbol();
         	counter++;
         	s2=sym.createChildSymbol("simContainerGlobal",sym.getSymbol("simEstante").$("containerContainer")).getSymbolElement();
         	s2.css({"position": "absolute",  "top" : "0px", "left":'0px' });
         	sym.getSymbol(s2).stop("start");
         	sym.getSymbol(s2).play("start");
         	sym.getSymbol("simEstante").$("simFrutas"+counter).show();
            if(counter==3){
               sym.$(".btn2").attr("disabled","disabled");
               sym.$(".btn2").css({"cursor":"not-allowed", "pointer-events":"none"})
            }
         
         	inicio();
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
         		window.location.href="../menu.html?indexCat=raz";            
         	}
         	else{
         		localStorage.setItem("indexCat","raz");
         		window.open("../menu.html", "_self");
         	}  
         }
         
         //Draggable
         interact('.draggable')
           .draggable({
             inertia: true,
             restrict: {
               restriction: "parent",
               endOnly: true,
               elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
             },
             autoScroll: true,
             onmove: dragMoveListener
           });
         
         function dragMoveListener (event) {
         	var target = event.target,
         	  x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
         	  y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
         
         	target.style.webkitTransform =
         	target.style.transform =
         	'translate(' + x + 'px, ' + y + 'px)';
         
         	target.setAttribute('data-x', x);
         	target.setAttribute('data-y', y);
         }
         
         //droppable
         interact('.dropzone').dropzone({
           accept: '.draggable',
           overlap: 0.75,
           ondropactivate: function (event) {
         	 event.target.classList.add('drop-active');
         	 sym.styleDropable();
           },
           ondragenter: function (event) {
         	var dropzoneElement = event.target;  
         	dropzoneElement.classList.add('drop-target');
         	sym.styleDropable();
           },
           ondragleave: function (event) {
         	 event.target.classList.remove('drop-target');
         	 sym.styleDropable();
           },
           ondrop: function (event) {
          	 var dropzoneElement = event.target;  
          	 var draggableElement = event.relatedTarget;
         	 dropzoneElement.classList.add('drop-target');
         	 arraySelectedOptions[counter-1]=$(draggableElement).text();
         	  sym.styleDropable();
           },
           ondropdeactivate: function (event) {
         	 event.target.classList.remove('drop-active');
         	 sym.styleDropable();
           }
         });
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'simEstante'
   (function(symbolName) {   
   
      

      

      

   })("simEstante");
   //Edge symbol end:'simEstante'

   //=========================================================
   
   //Edge symbol: 'simPrimeraRonda'
   (function(symbolName) {   
   
   })("simFrutas2");
   //Edge symbol end:'simFrutas2'

   //=========================================================
   
   //Edge symbol: 'simHojas'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26000, function(sym, e) {
         this.play(0);

      });
      //Edge binding end

   })("simHojas");
   //Edge symbol end:'simHojas'

   //=========================================================
   
   //Edge symbol: 'simFrutas2_1'
   (function(symbolName) {   
   
      })("simFrutas3");
   //Edge symbol end:'simFrutas3'

   //=========================================================
   
   //Edge symbol: 'simFrutas1'
   (function(symbolName) {   
   
   })("simFrutas1");
   //Edge symbol end:'simFrutas1'

   //=========================================================
   
   //Edge symbol: 'simFrutas1_1'
   (function(symbolName) {   
   
   })("simFrutas2");
   //Edge symbol end:'simFrutas2'

   //=========================================================
   
   //Edge symbol: 'simFrutas2_1'
   (function(symbolName) {   
   
      })("simFrutas3");
   //Edge symbol end:'simFrutas3'

   //=========================================================
   
   //Edge symbol: 'simContainerGlobal'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3200, function(sym, e) {
         for(var i=1;i<=5;i++){
         	sym.$("frutaMov"+i).hide();
         	sym.$("frutaDrag"+i).show();
         	sym.$("frutaDrag"+i).addClass("draggable");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1200, function(sym, e) {
         for(var i=1;i<=5;i++){
         	sym.$("frutaDrag"+i).hide();
         	sym.$("frutaDrag"+i).removeClass("draggable");
         	sym.$("frutaMov"+i).show();
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

   })("simContainerGlobal");
   //Edge symbol end:'simContainerGlobal'

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
         mySoundAmbient.volume(0.25);
         myNoise.play();

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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-107061666");