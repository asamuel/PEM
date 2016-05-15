//Scripts
https://code.jquery.com/jquery-2.1.4.min.js
http://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenMax.min.js
http://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/utils/Draggable.min.js
https://cdnjs.cloudflare.com/ajax/libs/howler/1.1.26/howler.js
https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js
https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css
https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.4.0/bootbox.min.js

//Inyectamos css boostrap
$("<link/>",{"rel":"stylesheet","type":"text/css","href":"css/bootstrap.min.css"}).appendTo("#Stage");

//Declaramos variables globales
sym.setVariable("total", 0);
//Declarar e implementar funciones globales 
 sym.sayHello = function  () {
  alert("Hello!!");
}
//Llamar una función global desde el stage
sym.sayHello();
//Llamar una función global desde un simbolo 
sym.getComposition().getStage().sayHello();

//Inyectar un nuevo elemento dentro del html
var myTextArea='<textarea id="myT" style="color:black;" placeholder="Escribe aquí..."></textarea>';
var hDiv=sym.$("divTextArea").height();
var wDiv=sym.$("divTextArea").width();
sym.$("divTextArea").html(myTextArea);
sym.$("#myT").css({"color" : "black", "font-style": "bold", "width": wDiv/1.07, "height": hDiv/1.19});
sym.$("#myT").css({"background-color": "rgba(225,225,225,0.85", "resize": "none",'text-align': 'center'});
sym.$("#myT").css({"font-size": "200%", "text-shadow": "0 0 0.9em white, 0 0 0.9em #87F, 0 0 0.9em #87F"});
sym.$("#myT").css({"position": "absolute","top":"50%","left":"50%","-ms-transform":"translate(-50%,-50%)",
"-webkit-transform":"translate(-50%,-50%)","-moz-transform":"translate(-50%,-50%)",
"transform": "translate(-50%,-50%)"});


//Añadir estilo
sym.$("Ellips1").css({"-webkit-text-stroke-width":"2px","-webkit-text-stroke-color": "#000000","font-size":"42px", "color":"#fff"});
sym.$("Ellips1").css({"font-family":"lato, sans-serif ","font-weight": "bold"});
sym.$("Ellips1").css({"background":getRandomColor(),"text-align":"center","line-height":"90px"});

sym.getSymbol("Triangle1").$("triangle1text").css({"-webkit-text-stroke-width":"2px","-webkit-text-stroke-color": "#000000","font-size":"58px", "color":"#fff"});
sym.getSymbol("Triangle1").$("triangle1text").css({"font-family":"lato, sans-serif ","font-weight": "bold","text-align":"center","line-height":"175px"});
sym.getSymbol("Triangle1").$("triangleRec1").css({"background":getRandomColor()});

//Mostrar resultados
sym.$("Ellips5").html(numerosArray[4]);
sym.getSymbol("Triangle1").$("triangle1text").html(numerosArray[5]);

//Draggable 
Draggable.create(sym.$(".box"), {type:"x,y", edgeResistance:0.65, bounds:sym.$("simCircTrian"), throwProps:true});

//Cargar audio 
mySound1 = new Howl({
  urls: ['media/intruccion01.ogg','media/intruccion01.mp3'],
   onend: function() {
      sym.play("int2");
  }
});
mySound1.play();
mySound1.stop();

//Borrar simbolo 
this.deleteSymbol();
sym.getSymbol("Anim").deleteSymbol();
sym.$("Stage").children().remove();
sym.$("Text3").remove();

//Agarrar elemento del HTML
myIntruccion=sym.$("simIntrucciones")[0];
// Agarrar un simbolo desde otro simbolo
sym.getComposition().getStage().getSymbol("symbolName").play();
// Acceder a un simbolo anidado desde otro simbolo
sym.getComposition().getStage().getSymbol("symbolName1").getSymbol("symbolName2").play(0);
// Acceder a un elemento de otro simbolo dentro de un simbolo 
sym.getComposition().getStage().getSymbol("sim2").$("Rectangle2").hide();

//Crear un simbolo desde el stage, y obtener su instancia
//el primer parametro es el nombre del simbolo que está en la librería 
//el segundo parametro es un selector, que devuelve el container del simbolo, es decir donde estará metido
var s = sym.createChildSymbol("sim1", "simContainer").getSymbolElement();
//Crear un simbolo desde un simbolo  y obtener su instancia
var s2=sym.createChildSymbol("sim2",sym.getComposition().getStage().$("simContainer")).getSymbolElement();
s2.css({"position": "absolute",  "top" : "100px", "left":'100px' });

//Modal 
bootbox.dialog({
  message: "<h4 style='font-family=lato, sans-serif'>Ubica 3 triángulos en la parte superior del renglón, "+
  "luego puedes sumar y escribir el dato a la par, luego ubica 3 círculos,"+
   "sumando el resultado a la par también."+"<br><br>"+
   "Recuerda que la suma de los triángulos menos la suma de los círculos"+
   " es el resultado que se muestra en el hexágono de la parte inferior derecha.</h4>",
  title: "<h2 style='font-family=lato, sans-serif'>Instrucciones<h2>",
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

//Usar librerias globales (modificar la sección de scripts del archivo xxx_edge.js)
        scripts = [
            "../cdn/jquery-2.1.4.min.js",
            "../cdn/bootstrap.min.js",
            "../cdn/bootbox.min.js",
            "../cdn/howler.min.js",
            "../cdn/TweenMax.min.js",
            "../cdn/bootstrap.min.css",
            "../cdn/Draggable.min.js",
            "../cdn/jquery.sBubble-0.1.1.css",
            "../cdn/jquery.sBubble-0.1.1.js",
            "../cdn/jquery-ui.js",
            "../cdn/jquery.ui.touch-punch.min.js"
        ],

//Usar el script global de edge runtime (modificar la sección de scripts del archivo xxx.html)
src="../cdn/edge.6.0.0.min.js"

//Agregar tooltip

sym.$('Pem35_FrutaPina').sBubble({
        content: 'Una Piña!',
        position: 'right',
        height: 30,
        width: 180,
        theme: 'blue'
 });

 sym.$('Pem35_ArbolFrutal').sBubble({
        content: 'Árbol con frutas!',
        position: 'left',
        height: 30,
        width: 180,
        theme: 'green'
 });

//Agregar tooltip con bootstrap
sym.$('[data-toggle="tooltip"]').tooltip();   
sym.$('#Ellipse').attr('data-toggle', 'tooltip');
sym.$('#Ellipse').attr('title', 'Hooray!');

//Operador ternario javaScript
var status = ( user.name && user.pass ) ? 'Logged' : 'Unlogged';

//se puede acceder al elemento que esta detras de un div 
sym.$('canasta1').css({'pointer-events':'none'});

//agregar eventos por medio de jQuery 
sym.getSymbol("simMenu").$("simIntruccion3").click(function() {});
//Funciones del mouse hover
sym.getSymbol("simMenu2").$("razonamiento").mouseover(function() {});
//Funciones del mouse out
sym.getSymbol("simMenu3").$("simQuestion").mouseout(function() {});

//sonido de ambiente 
sym.setVariable("mySoundAmbient", 0);
var valMp3=true;
mySoundAmbient = new Howl({
  urls: ['media/smile_for_me.ogg','media/smile_for_me.mp3'],
  loop: true,
  onend: function() {
  }
});
mySoundAmbient.play();
mySoundAmbient.volume(0.5);

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

//Establecer el z index en el inicial
myArray[i].css({"position": "absolute", "z-index":"initial"}); 
//encontrar el z index más alto 
var index_highest = 0;   
// more effective to have a class for the div you want to search and 
// pass that to your selector
$("#layer-1,#layer-2,#layer-3,#layer-4").each(function() {
    // always use a radix when using parseInt
    var index_current = parseInt($(this).css("zIndex"), 10);
    if(index_current > index_highest) {
        index_highest = index_current;
    }
});

//Evento keypress, en este caso nos permite saber cuando se toca la tecla enter
sym.$( "#myT" ).keypress(function (event) {
  if(event.keyCode == 10 || event.keyCode == 13)  // the enter key code
  {
    if(sym.$("#myNext").hasClass('fired') == false){
      nextWord();
      return false;   //no acceptar el enter
    } 
    else
       event.preventDefault(); 
  }
});

 //Ir al menu anterior 
sym.getSymbol("simMenu").$("simSalir").click(function() {
  window.open("../Menu2.html", "_self");
 });
//Ir  al menu principal 
sym.getSymbol("simMenu").$("simHome").click(function() {
window.open("../index.html", "_self");
});

//icono de la pagina 
 <link id="favicon" rel="shortcut icon" type="image/png" href="images/iconPage.png" />
 <link id="favicon" rel="shortcut icon" type="image/png" href="../images/iconPage.png" />

//cargar audio de ambiente cuando la pagina este lista 
// A $( document ).ready() block.
$( document ).ready(function() {
console.log( "ready!" );
mySoundAmbient = new Howl({
  urls: ['media/masterOfTheFeast.ogg','media/masterOfTheFeast.mp3'],
  loop: true,
  onend: function() {
  }
});
mySoundAmbient.play();
mySoundAmbient.volume(0.5);
});

//Agregar hipervinculo a un elemento
sym.getSymbol("simMenu3").getSymbol("simBack").$("back2").wrap(
          "<a href=\"index.html\"  target='_self'></a>" );

//Clases en javascrip 
function feedBackObj(antonimo, feedback) {
  this.antonimo = antonimo;
  this.feedback = feedback;
 }

 //Instanciar una clase
myClassTemp = new feedBackObj(antonimoSelect, feedBack);
//Guardarla en un arreglo y acceder a la clase por medio de un arreglo
myArrayFeedbackObj.push(myClassTemp);
myArrayFeedbackObj[i].antonimo
myArrayFeedbackObj[i].feedback

//agregar un atributo booleano mediante jQuery
sym.$('#myT').prop('readonly', true);
//agregar un atributo mediante jquery
sym.$("#myT").attr("placeholder", "FIN");

//elimina un objeto del dom, despues de que termine una accion posterior
sym.$("simTrain").hide('slow', function(){ sym.$("simTrain").remove();});

//retrasar animacion con delay 
sym.getSymbol("simTrain").$("portrait1").delay(100).show("slow");


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

//Return a random number between 1 and 10:
Math.floor((Math.random() * 10) + 1);

//Timer en javaScript
var myTime; 
sym.myStartTimer = function  (interval, option) { 
  myTime = setInterval(function(){myTimer(option)},interval)
}
function myTimer(num) {
switch (num) {
     case 0:
        clearInterval(myTime); //limpuar cronometro
        sym.myStartTimer (4000,1); //llamar funcion del cronometro
        break;
}}

//otra forma de time, mas sencilla 
setTimeout(function(){},200);

//relog con canvas y javaScript

   var myClock="<canvas id='canvas' width='150' height='150'>Your browser does not support the HTML5 canvas tag.</canvas>";
   sym.$("clock").html(myClock);

   var canvas = sym.$("canvas")[0];
   var ctx = canvas.getContext("2d");
   var radius = canvas.height / 2;
   ctx.translate(radius, radius);
   radius = radius * 0.90
   setInterval(drawClock, 1000);
   
   function drawClock() {
     drawFace(ctx, radius);
     drawNumbers(ctx, radius);
     drawTime(ctx, radius);
   }
   
   function drawFace(ctx, radius) {
     var grad;
     ctx.beginPath();
     ctx.arc(0, 0, radius, 0, 2*Math.PI);
     ctx.fillStyle = 'white';
     ctx.fill();
     grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
     grad.addColorStop(0, 'black');
     grad.addColorStop(0.5, '#03C9A9');
     grad.addColorStop(1, '#019875');
     ctx.strokeStyle = grad;
     ctx.lineWidth = radius*0.1;
     ctx.stroke();
     ctx.beginPath();
     ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
     ctx.fillStyle = 'black';
     ctx.fill();
   }
   
   function drawNumbers(ctx, radius) {
     var ang;
     var num;
     ctx.font = radius*0.23 + "px arial";
     ctx.textBaseline="middle";
     ctx.textAlign="center";
     for(num = 1; num < 13; num++){
       ang = num * Math.PI / 6;
       ctx.rotate(ang);
       ctx.translate(0, -radius*0.85);
       ctx.rotate(-ang);
       ctx.fillText(num.toString(), 0, 0);
       ctx.rotate(ang);
       ctx.translate(0, radius*0.85);
       ctx.rotate(-ang);
     }
   }
   
   function drawTime(ctx, radius){
       var now = new Date();
       var hour = now.getHours();
       var minute = now.getMinutes();
       var second = now.getSeconds();
       //hour
       hour=hour%12;
       hour=(hour*Math.PI/6)+
       (minute*Math.PI/(6*60))+
       (second*Math.PI/(360*60));
       drawHand(ctx, hour, radius*0.5, radius*0.07);
       //minute
       minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
       drawHand(ctx, minute, radius*0.7, radius*0.07);
       // second
       second=(second*Math.PI/30);
       drawHand(ctx, second, radius*0.9, radius*0.02);
   }
   
   function drawHand(ctx, pos, length, width) {
       ctx.beginPath();
       ctx.lineWidth = width;
       ctx.lineCap = "round";
       ctx.moveTo(0,0);
       ctx.rotate(pos);
       ctx.lineTo(0, -length);
       ctx.stroke();
       ctx.rotate(-pos);
   }

