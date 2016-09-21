<?php
session_start(); 

if (!isset($_SESSION["user"])){ 
    $actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $_SESSION["link"] = $actual_link;
    header('Location: ../sesiones/form.php');
} 
else {
?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
	<title>6to Grado-Pem</title>
    <link id="favicon" rel="shortcut icon" type="image/png" href="../images/iconPage.png" />
<!--Adobe Edge Runtime-->
    <script type="text/javascript" charset="utf-8" src="../edge_includes/edge.6.0.0.min.js"></script>
    <style>
        .edgeLoad-EDGE-440784112 { visibility:hidden; }
    </style>
<script>
   AdobeEdge.loadComposition('Menu2', 'EDGE-440784112', {
    scaleToFit: "both",
    centerStage: "horizontal",
    minW: "320px",
    maxW: "1920px",
    width: "1024px",
    height: "768px"
}, {
    dom: [
        {
            id: 'preloader5',
            type: 'image',
            tag: 'img',
            rect: ['468', '340', '88px', '88px', 'auto', 'auto'],
            fill: ["rgba(0,0,0,0)",'../images/preloader5.gif','0px','0px']
        }
    ],
    style: {
        '${symbolSelector}': {
            isStage: true,
            rect: [undefined, undefined, '1024px', '768px'],
            fill: ["rgba(255,255,255,1)"]
        }
    }
}, {dom: [ ]});
</script>
<!--Adobe Edge Runtime End-->
<body style="margin:0;padding:0;overflow:hidden;">
	<div id="Stage" class="EDGE-440784112">
	</div>
</body>
<!-- Google Analytics -->
<?php 
include('../analytics.php');
?>
</html>
<?php
}
?>