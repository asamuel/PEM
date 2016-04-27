 #target illustrator
//This file was autogenerated by BatchExportUI.jsx from wundes.com
// it is safe to erase, as it will be recreated the next time exportLayers.jsx is run.
var fileName = '';
doIt();
function doIt(){    
    // for each layer
    if(false){
        var allDocsLen = app.documents.length;
        while (allDocsLen--){
            app.documents[app.documents.length-1].activate();
            redraw();
            processDocument(app.documents[0]);
        }
    }else{
           processDocument(app.activeDocument);
    }
   }

function processDocument(currDoc){

    doc = currDoc;
    var len = doc.layers.length;
    var fname = doc.name;
    fname = fname.substr(0,fname.lastIndexOf("."));
    fileName = "Sin t�tulo-3" == "Sin t�tulo-3" ? fname : "Sin t�tulo-3";
    while (len--){
        
           //if layer isn't locked
        var thisLayer = doc.layers[len];
        if(thisLayer.locked == false){
            hideAllUnlocked();
            thisLayer.visible=true;
            app.redraw();


            var suffix =  false ? thisLayer.name:len;
            switch("PNG")
            {
                case "JPG":
                    exportJPG(suffix);
                    break;
                case "GIF":
                    exportGIF(suffix);
                    break;
                case"PNG":
                    exportPNG(suffix);
                    break;
                default:
                    break;
                
            }
            
            }
       }
}
function hideAllUnlocked(){
    var all = doc.layers.length;
    while(all--){
        if( doc.layers[all].locked==false){
        doc.layers[all].visible=false;
        }
     }
   }

function exportJPG(num){
     var exportOptions = new ExportOptionsJPEG();   
    var exportName = ("~/Desktop/TestEdge"+"/"+ fileName+"_"+num);
    var dest = new File(exportName);
    var type = ExportType.JPEG;
    exportOptions.antiAliasing = true;
    exportOptions.qualitySetting = 85;
    exportOptions.horizontalScale = 100;
    exportOptions.verticalScale = 100;
    exportOptions.optimization=true;
    exportOptions.artBoardClipping=true;

    doc.exportFile(dest,type,exportOptions);
    }
function exportGIF(num){
     var exportOptions = new ExportOptionsGIF(); 
    var exportName = ("~/Desktop/TestEdge"+"/"+ fileName+"_"+num);
    var dest = new File(exportName);
    var type = ExportType.GIF;
     exportOptions.antiAliasing = true;
     exportOptions.artBoardClipping=true;
     exportOptions.transparency=true ;
     exportOptions.horizontalScale = 100;
     exportOptions.verticalScale = 100;
    doc.exportFile(dest,type,exportOptions);
    }
function exportPNG(num){
     var exportOptions = new ExportOptionsPNG24();  
    var exportName = ("~/Desktop/TestEdge"+"/"+ fileName+"_"+num);
    var dest = new File(exportName);
    var type = ExportType.PNG24;
     exportOptions.antiAliasing = true;
     exportOptions.artBoardClipping=true;
     exportOptions.transparency=true ;
     exportOptions.horizontalScale = 100;
     exportOptions.verticalScale = 100;
    doc.exportFile(dest,type,exportOptions); 
    }