var arrayColor=["F89406","22A7F0","1BBC9B"];
function getColorModal(){
	if (arrayColor.length==0){
		arrayColor=["F89406","22A7F0","1BBC9B"];
    }
  	var index=Math.floor(Math.random()*arrayColor.length);
  	var val=arrayColor[index];
 	arrayColor.splice(index,1);
  	return val
}

function setStyleModal(){
	$(".modal-header").css({"border-bottom":"none","padding":"0"});
	$(".modal-header").html(
			'<div class="wrapper">'+
				"<h2 style='font-family:Arial, Helvetica, sans-serif;margin-top:10;margin-bottom:0;'>Instrucciones</h2>"+
				"<div class='lamp'></div>"+
			'</div>'+
			'<div class="wrapper1"></div>'
			);
	 jss.set('.wrapper1:before', {
	 	'background-image': 'url("data:image/svg+xml,%3Csvg%20width%3D%2250px%22%20height%3D%2225px%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.00025863%2C0%20L0%2C6.59417725%20L0%2C8%20L8.00025885%2C1.40509033%20L16%2C8%20L16%2C6.59417725%20L8.00025863%2C0%20Z%22%20fill%3D%22%23'+getColorModal()+'%22%20transform%3D%22scale%283.125%29%20rotate%28180 8 4%29%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E")'
	 });
}