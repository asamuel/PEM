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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.getSymbol("simCloud").play();
         sym.getSymbol("simSun").play();
         sym.getSymbol("simGuarda").play();
         sym.$("backFirst").remove();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         //sym.$("rainbow_3").css({"opacity":"0.65","filter":"alpha(opacity=65)"});
         //sym.$("rainbow_2").css({"opacity":"0.65","filter":"alpha(opacity=65)"});
         //sym.$("rainbow_1").css({"opacity":"0.65","filter":"alpha(opacity=65)"});
         
         //null:para inicializar la variable
         //raz: razonamiento
         //imag:imaginacion
         //calc:calculo
         putValue();
          function putValue () {  
            var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
         
            if(isIE){
               // window.location.href="../Menu2.html?lat='mmyyy'";  
               //sessionStorage.insurance = "checked"
               //console.log("value-->"+sessionStorage.insurance);                
            }
            else
               localStorage.setItem("indexCat","null");
         }
         
         
         sym.$("firstRainbow").click(function() {
           window.open("http://www.feyalegria.org.ni/es/recursos/pem/menu.swf", "_blank");
         });
         
         sym.$("secondRainbow").click(function() {
              window.open("pem4Grado/index.php", "_self");
         });
         sym.$("thirdRainbow").click(function() {
            window.open("pem5Grado/Menu2.php", "_self");
         });
         sym.$("fourRainbow").click(function() {
            window.open("pem6Grado/Menu2.php", "_self");
         });
         
         sym.$("firstRainbow").mouseover(function() {
         	sym.$("raimbow_4").fadeTo( "slow", 0.65 );
         });
         
         sym.$("secondRainbow").mouseover(function() {
         	sym.$("raimbow_2").fadeTo( "slow", 0.65 );
         });
         
         sym.$("thirdRainbow").mouseover(function() {
         	sym.$("raimbow_3").fadeTo( "slow", 0.65 );
         });
         sym.$("fourRainbow").mouseover(function() {
         	sym.$("raimbow_6").fadeTo( "slow", 0.65 );
         });
         
         
         sym.$("firstRainbow").mouseout(function() {
         	sym.$("raimbow_4").fadeTo( "slow", 1.0 );
         });
         
         sym.$("secondRainbow").mouseout(function() {
         	sym.$("raimbow_2").fadeTo( "slow", 1.0 );
         });
         
         sym.$("thirdRainbow").mouseout(function() {
         	sym.$("raimbow_3").fadeTo( "slow", 1.0 );
         });
         
         sym.$("fourRainbow").mouseout(function() {
         	sym.$("raimbow_6").fadeTo( "slow", 1.0 );
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Precargador'
   (function(symbolName) {   
   
   })("Precargador");
   //Edge symbol end:'Precargador'

   //=========================================================
   
   //Edge symbol: 'simCloud'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 117500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simCloud");
   //Edge symbol end:'simCloud'

   //=========================================================
   
   //Edge symbol: 'simSun'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simSun");
   //Edge symbol end:'simSun'

   //=========================================================
   
   //Edge symbol: 'simGuarda'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 135000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("simGuarda");
   //Edge symbol end:'simGuarda'

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
         sym.play(0);

      });
      //Edge binding end

   })("spritAlaIzquierda_symbol_1");
   //Edge symbol end:'spritAlaIzquierda_symbol_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1026182543");
})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1026182543");