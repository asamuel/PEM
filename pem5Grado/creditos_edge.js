/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            "../cdn/jquery-2.1.4.min.js",
            "../cdn/howler.min.js",
            "../cdn/jquery.sBubble-0.1.1.js",
            "../cdn/jquery.sBubble-0.1.1.css"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'back',
                            type: 'rect',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(43,43,43,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'screen',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '726px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)","../images/screen.png",'0px','0px']
                        },
                        {
                            id: 'simContent',
                            symbolName: 'simContent',
                            type: 'rect',
                            rect: ['51', '37', '934', '629', 'auto', 'auto'],
                            userClass: "simContentC"
                        },
                        {
                            id: 'simMenu',
                            symbolName: 'simMenu',
                            type: 'rect',
                            rect: ['90', '666', '838', '52', 'auto', 'auto']
                        },
                        {
                            id: 'backCre',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)","../images/backCre.png",'0px','0px']
                        },
                        {
                            id: 'backFirst',
                            type: 'rect',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '764px', 'auto', 'auto'],
                            sizeRange: ['320px','1920px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 53500,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${backFirst}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${screen}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simContent": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-51px', '727px', '1023px', '1532px', 'auto', 'auto'],
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['380px', '-200px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Créditos</p>',
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '700', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['249px', '-200px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text3',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 30px;\">Desarrolladores, diseñadores, </span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 30px;\">editores y guionistas </span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 30px;\"></span>&nbsp;</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            id: 'simPortraitRight_1',
                            symbolName: 'simPortraitRight_1',
                            rect: ['135px', '875px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'simPortrait3',
                            symbolName: 'simPortrait3',
                            rect: ['135px', '875px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'simPortraitRight_2',
                            symbolName: 'simPortraitRight_2',
                            rect: ['135px', '875px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['269px', '-70px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 30px;\">Acompañamiento, Revisión </span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 30px;\">y Aprobación</span>&nbsp;</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            id: 'simPortrait2',
                            symbolName: 'simPortrait2',
                            rect: ['135px', '875px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'simPortrait',
                            symbolName: 'simPortrait',
                            rect: ['135px', '-200px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'simPortraitRight',
                            symbolName: 'simPortraitRight',
                            rect: ['153px', '-200px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['421px', '875px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text6',
                            text: '<p style=\"margin: 0px; text-align: center;\">​Voces</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['208px', '875px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text7',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 20px; font-weight: 400;\">Francisco Javier Hernández Valle (6to. Grado de Primaria)</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 20px; font-weight: 400;\">​Abril del Rosario López Flores (4to. Grado de Primaria)</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 20px; font-weight: 400;\">​(Colegio San Francisco Xavier Ciudad Sandino)</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['339px', '875px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text10',
                            text: '<p style=\"margin: 0px; text-align: center;\">​Agradecimientos&nbsp;</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['181px', '875px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text11',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 20px;\">MSc. Carlos Antonio Leal (UCA)</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 20px;\"></span><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 20px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">MSc.&nbsp;</span><span style=\"font-size: 20px;\">Mariella Auxiliadora Cuadra (UCA)</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 20px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">MSc.&nbsp;</span><span style=\"font-size: 20px;\">Gastón Ortega Herrera (Coordinador Servicio Social UCA)​</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 20px;\">​Ruth Marina Barahona Rodríguez (Fe y Alegría)</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 20px;\">​Gretel Carolina Hernández Mora (Fe y Alegría)</span></p><p style=\"margin: 0px; text-align: center;\"> <span style=\"font-size: 20px;\"></span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 20px;\">Colegio San Francisco Xavier de Ciudad Sandino&nbsp;</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 20px;\">Colegio Roberto Clemente</span> </p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['355px', '875px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text8',
                            text: '<p style=\"margin: 0px; text-align: center;\">​Colaboradores&nbsp;</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['282px', '875px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text9',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 20px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">Pedro Luis López Gonzales (UCA)</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 20px;\">Melvin Antonio Rivera (Fe y Alegría)</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 20px; font-weight: 400;\">Gema Berenice Roa Pérez (Fe y Alegría)</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['409px', '-200px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text12',
                            text: '<p style=\"margin: 0px; text-align: center;\">​Sonido</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['268px', '-270px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text13',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 20px;\">\"Música de ambiente\" by Jamendo&nbsp;</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 20px;\">Is licensed under CC BY 2.0</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 20px;\">​</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 20px;\">​\"Música de ambiente\" by Free Music Archive</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 20px;\">Is licensed under CC BY 2.0</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 20px;\">​</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 20px;\">​\"Música de ambiente\" by Bensound</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 20px;\">Is licensed under CC BY 2.0</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 20px;\"></span> </p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['272px', '96px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text15',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 700; font-size: 24px;\">Contáctenos:</span>​</p><p style=\"margin: 0px;\"><span style=\"font-size: 20px;\"></span></p><p style=\"margin: 0px;\"><span style=\"font-size: 20px;\">Bayron Arias - byronarias.2011@gmail.com</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 20px;\">Alex Benavidez - samuelxlm0@gmail.com</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 20px;\">René Cortez -&nbsp;</span><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 20px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">renejcd95@gmail.com</span><span style=\"font-size: 20px;\"> </span></p><p style=\"margin: 0px;\"><span style=\"font-size: 20px;\">Fe y Alegría - tecnologia@feyalegria.org.ni</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 20px;\">​</span></p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['127px', '875px', '134px', '138px', 'auto', 'auto'],
                            id: 'feAlegriaLogo',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', '../images/feAlegriaLogo.png', '0px', '0px']
                        },
                        {
                            rect: ['659px', '875px', '118px', '156px', 'auto', 'auto'],
                            id: 'ucaLogo2',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', '../images/ucaLogo.png', '0px', '0px']
                        },
                        {
                            rect: ['272px', '875px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text14',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 20px;\">Este material educativo se ha desarrollado</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 20px;\"> con el apoyo de Fe y Alegría Nicaragua y </span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-size: 20px;\">la Universidad de Centroamericana&nbsp;</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            id: 'cCommons',
                            type: 'image',
                            rect: ['419px', '875px', '88px', '31px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '../images/cCommons.png', '0px', '0px']
                        },
                        {
                            rect: ['186px', '555px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text16',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 20px; font-style: italic;\">Esta obra está bajo una Licencia Creative Commons Atribución</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 20px; font-style: italic;\"> – No Comercial – Sin Obra Derivada 4.0 Internacional.</span></p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '934px', '629px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 52000,
                    autoPlay: true,
                    data: [
                        [
                            "eid72",
                            "top",
                            27500,
                            15000,
                            "linear",
                            "${Text11}",
                            '875px',
                            '-200px'
                        ],
                        [
                            "eid120",
                            "top",
                            42500,
                            2000,
                            "linear",
                            "${Text11}",
                            '-200px',
                            '-220px'
                        ],
                        [
                            "eid59",
                            "top",
                            8000,
                            15000,
                            "linear",
                            "${simPortraitRight_2}",
                            '875px',
                            '-200px'
                        ],
                        [
                            "eid77",
                            "top",
                            36000,
                            14000,
                            "linear",
                            "${Text12}",
                            '875px',
                            '-200px'
                        ],
                        [
                            "eid64",
                            "top",
                            23000,
                            15000,
                            "linear",
                            "${Text6}",
                            '875px',
                            '-200px'
                        ],
                        [
                            "eid40",
                            "top",
                            2000,
                            15000,
                            "linear",
                            "${simPortraitRight_1}",
                            '875px',
                            '-200px'
                        ],
                        [
                            "eid79",
                            "top",
                            39500,
                            12000,
                            "linear",
                            "${Text15}",
                            '875px',
                            '96px'
                        ],
                        [
                            "eid65",
                            "top",
                            24000,
                            15000,
                            "linear",
                            "${Text7}",
                            '875px',
                            '-200px'
                        ],
                        [
                            "eid81",
                            "top",
                            42000,
                            10000,
                            "linear",
                            "${feAlegriaLogo}",
                            '875px',
                            '318px'
                        ],
                        [
                            "eid82",
                            "top",
                            42000,
                            10000,
                            "linear",
                            "${ucaLogo2}",
                            '875px',
                            '318px'
                        ],
                        [
                            "eid10",
                            "top",
                            0,
                            13500,
                            "linear",
                            "${Text}",
                            '865px',
                            '-200px'
                        ],
                        [
                            "eid18",
                            "top",
                            16000,
                            15000,
                            "linear",
                            "${simPortrait}",
                            '875px',
                            '-200px'
                        ],
                        [
                            "eid28",
                            "top",
                            19500,
                            15000,
                            "linear",
                            "${simPortraitRight}",
                            '875px',
                            '-200px'
                        ],
                        [
                            "eid85",
                            "top",
                            44500,
                            7500,
                            "linear",
                            "${Text16}",
                            '875px',
                            '555px'
                        ],
                        [
                            "eid69",
                            "top",
                            26500,
                            15000,
                            "linear",
                            "${Text10}",
                            '875px',
                            '-200px'
                        ],
                        [
                            "eid80",
                            "top",
                            42000,
                            10000,
                            "linear",
                            "${Text14}",
                            '875px',
                            '336px'
                        ],
                        [
                            "eid68",
                            "top",
                            33000,
                            15000,
                            "linear",
                            "${Text9}",
                            '875px',
                            '-200px'
                        ],
                        [
                            "eid15",
                            "top",
                            12000,
                            15000,
                            "linear",
                            "${Text2}",
                            '865px',
                            '-200px'
                        ],
                        [
                            "eid32",
                            "top",
                            13000,
                            15000,
                            "linear",
                            "${simPortrait2}",
                            '875px',
                            '-200px'
                        ],
                        [
                            "eid67",
                            "top",
                            32000,
                            15000,
                            "linear",
                            "${Text8}",
                            '875px',
                            '-200px'
                        ],
                        [
                            "eid56",
                            "top",
                            5000,
                            15000,
                            "linear",
                            "${simPortrait3}",
                            '875px',
                            '-200px'
                        ],
                        [
                            "eid78",
                            "top",
                            37000,
                            15000,
                            "linear",
                            "${Text13}",
                            '875px',
                            '-270px'
                        ],
                        [
                            "eid84",
                            "top",
                            44500,
                            7500,
                            "linear",
                            "${cCommons}",
                            '875px',
                            '515px'
                        ],
                        [
                            "eid35",
                            "top",
                            1000,
                            15000,
                            "linear",
                            "${Text3}",
                            '875px',
                            '-200px'
                        ]
                    ]
                }
            },
            "simPortrait": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'potrait',
                            type: 'image',
                            rect: ['411px', '41px', '193px', '193px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '../images/cred_francisco.png', '0px', '0px']
                        },
                        {
                            rect: ['81px', '68px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text3',
                            text: '<p style=\"margin: 0px; text-align: right;\">​<span style=\"font-size: 20px; font-weight: 400;\">Francisco Antonio García Gómez</span></p><p style=\"margin: 0px; text-align: right;\"><span style=\"font-size: 20px; font-weight: 400;\">(Coordinador Tecnología Educativa</span></p><p style=\"margin: 0px; text-align: right;\"><span style=\"font-size: 20px; font-weight: 400;\"> Fe y Alegría Nicaragua)</span></p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '679px', '259px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "simPortraitRight": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'potrait',
                            type: 'image',
                            rect: ['31px', '41px', '193px', '193px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '../images/cred_peter.png', '0px', '0px']
                        },
                        {
                            rect: ['239px', '87px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 20px; font-weight: 400;\">Peter Robinsson Talavera </span></p><p style=\"margin: 0px;\"><span style=\"font-size: 20px; font-weight: 400;\">(Docente Colegio Juan XXIII Fe y Alegría)</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 20px; font-weight: 400;\"></span></p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '679px', '259px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "simPortrait2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'potrait',
                            type: 'image',
                            rect: ['35px', '41px', '193px', '193px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '../images/cred_justo.png', '0px', '0px']
                        },
                        {
                            rect: ['256px', '83px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 20px; font-weight: 400;\">Justo  Pastor Villanueva Rayo</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 20px; font-weight: 400;\">(Docente UCA y Tutor)</span></p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '679px', '259px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "simPortraitRight_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'potrait',
                            type: 'image',
                            rect: ['395px', '23px', '193px', '193px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '../images/cred_bayron.png', '0px', '0px']
                        },
                        {
                            rect: ['69px', '73px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​Bayron Alexander Arias Hernández</p><p style=\"margin: 0px;\">(byronarias.2011@gmail.com)​</p><p style=\"margin: 0px;\"><span style=\"font-size: 20px; font-weight: 400;\"></span></p><p style=\"margin: 0px;\"><span style=\"font-size: 20px; font-weight: 400;\"></span></p><p style=\"margin: 0px;\"><span style=\"font-size: 20px; font-weight: 400;\"></span></p>',
                            align: 'right',
                            type: 'text'
                        },
                        {
                            rect: ['313px', '123px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text4',
                            text: '<p style=\"margin: 0px;\">​/ariash</p>',
                            align: 'right',
                            type: 'text'
                        },
                        {
                            id: 'linkedin',
                            type: 'image',
                            rect: ['286px', '123px', '24px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '../images/linkedin.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '679px', '259px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "simPortrait3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['35px', '41px', '193px', '193px', 'auto', 'auto'],
                            id: 'potrait',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', '../images/cred_alex.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text3Copy2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">Alex Samuel Benavidez Zelaya​</p><p style=\"margin: 0px;\">(samuelxlm0@gmail.com)<span style=\"font-size: 20px; font-weight: 400;\"></span></p><p style=\"margin: 0px;\"><span style=\"font-size: 20px; font-weight: 400;\"></span></p><p style=\"margin: 0px;\"><span style=\"font-size: 20px; font-weight: 400;\"></span></p>',
                            rect: ['256px', '82px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'right',
                            id: 'Text4',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​/samuelbz</p>',
                            rect: ['283px', '133px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            rect: ['256px', '133px', '24px', '24px', 'auto', 'auto'],
                            id: 'linkedin',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', '../images/linkedin.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '679px', '259px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "simPortraitRight_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'potrait',
                            type: 'image',
                            rect: ['395px', '41px', '193px', '193px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '../images/cred_rene.png', '0px', '0px']
                        },
                        {
                            rect: ['108px', '98px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">Rene de Jesús Cortez Dinarte​</p><p style=\"margin: 0px;\">(renejcd95@gmail.com)<span style=\"font-size: 20px; font-weight: 400;\"></span></p><p style=\"margin: 0px;\"><span style=\"font-size: 20px; font-weight: 400;\"></span></p><p style=\"margin: 0px;\"><span style=\"font-size: 20px; font-weight: 400;\"></span></p>',
                            align: 'right',
                            type: 'text'
                        },
                        {
                            rect: ['252px', '146px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text4Copy',
                            text: '<p style=\"margin: 0px;\">​/cortesdinarte</p>',
                            align: 'right',
                            type: 'text'
                        },
                        {
                            id: 'linkedinCopy',
                            type: 'image',
                            rect: ['225px', '146px', '24px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '../images/linkedin.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '679px', '259px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "simMenu": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['360', '16', '26', '26', 'auto', 'auto'],
                            id: 'simBack',
                            symbolName: 'simBack',
                            type: 'rect'
                        },
                        {
                            rect: ['408px', '17px', null, null, 'auto', 'auto'],
                            id: 'simPlayPauseOccul',
                            symbolName: 'simPlayPauseOccul',
                            type: 'rect'
                        },
                        {
                            rect: ['408px', '17px', '33', '26', 'auto', 'auto'],
                            id: 'simPlayPause',
                            symbolName: 'simPlayPause',
                            type: 'rect'
                        },
                        {
                            rect: ['448px', '17px', null, null, 'auto', 'auto'],
                            id: 'simSound',
                            symbolName: 'simSound',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '838px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "simPlayPause": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'pauseIcon2',
                            opacity: '1',
                            rect: ['0px', '0px', '18px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '../images/pauseIcon.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'playIcon2',
                            opacity: '0',
                            rect: ['0px', '0px', '25px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '../images/playIcon.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '25px', '26px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '25px', '26px']
                        }
                    }
                },
                timeline: {
                    duration: 800,
                    autoPlay: false,
                    labels: {
                        "play": 100,
                        "stop": 500
                    },
                    data: [
                        [
                            "eid92",
                            "opacity",
                            100,
                            300,
                            "linear",
                            "${pauseIcon2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid97",
                            "opacity",
                            500,
                            300,
                            "linear",
                            "${pauseIcon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            100,
                            300,
                            "linear",
                            "${playIcon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid94",
                            "opacity",
                            500,
                            300,
                            "linear",
                            "${playIcon2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simBack": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'back2',
                            rect: ['0px', '0px', '26px', '26px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', '../images/back.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['-54px', '-129px', '160', '123', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            c: [
                            {
                                rect: ['34px', '43px', '134px', '37px', 'auto', 'auto'],
                                transform: [[], ['-46'], [0, 0, 0], [1, 1, 1]],
                                type: 'rect',
                                id: 'RectangleCopy',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.596907615661621px 28.516300201416016px 37px 0px)',
                                fill: ['rgba(27,51,93,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'Rectangle',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '75px', '134px', '37px', 'auto', 'auto'],
                                fill: ['rgba(11,96,147,1.00)']
                            },
                            {
                                rect: ['8px', '78px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 15px;\">Ir al menú anterior</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '26px', '26px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "start": 0,
                        "end": 400
                    },
                    data: [
                        [
                            "eid109",
                            "scaleY",
                            0,
                            200,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid111",
                            "scaleY",
                            400,
                            0,
                            "easeOutBounce",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid108",
                            "scaleX",
                            0,
                            200,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid110",
                            "scaleX",
                            400,
                            0,
                            "easeOutBounce",
                            "${Group}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simPlayPauseOccul": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['-54px', '-129px', '160', '123', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            c: [
                            {
                                rect: ['34px', '43px', '134px', '37px', 'auto', 'auto'],
                                transform: [[], ['-46'], [0, 0, 0], [1, 1, 1]],
                                type: 'rect',
                                id: 'RectangleCopy',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.596907615661621px 28.516300201416016px 37px 0px)',
                                fill: ['rgba(27,51,93,1.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['0px', '75px', '134px', '37px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                fill: ['rgba(11,96,147,1.00)'],
                                c: [
                                {
                                    rect: ['44px', '3px', 'auto', 'auto', 'auto', 'auto'],
                                    id: 'Text',
                                    text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 15px;\">Pausa</span></p>',
                                    font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                    type: 'text'
                                }]
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '26px', '26px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "start": 0,
                        "end": 400
                    },
                    data: [
                        [
                            "eid109",
                            "scaleY",
                            0,
                            200,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid111",
                            "scaleY",
                            400,
                            0,
                            "easeOutBounce",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid108",
                            "scaleX",
                            0,
                            200,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid110",
                            "scaleX",
                            400,
                            0,
                            "easeOutBounce",
                            "${Group}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simSound": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'soundIcon',
                            rect: ['0px', '0px', '30px', '31px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', '../images/soundIcon.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['-54px', '-129px', '160', '123', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            c: [
                            {
                                rect: ['34px', '43px', '134px', '37px', 'auto', 'auto'],
                                transform: [[], ['-46'], [0, 0, 0], [1, 1, 1]],
                                type: 'rect',
                                id: 'RectangleCopy',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.596907615661621px 28.516300201416016px 37px 0px)',
                                fill: ['rgba(27,51,93,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'Rectangle',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['-21px', '75px', '174px', '37px', 'auto', 'auto'],
                                fill: ['rgba(11,96,147,1.00)']
                            },
                            {
                                rect: ['-15px', '77px', '168px', '28px', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\"><span style=\"font-size: 15px;\">Encender/Apagar Sonido</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', ''],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '26px', '26px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "start": 0,
                        "end": 400
                    },
                    data: [
                        [
                            "eid109",
                            "scaleY",
                            0,
                            200,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid111",
                            "scaleY",
                            400,
                            0,
                            "easeOutBounce",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid108",
                            "scaleX",
                            0,
                            200,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid110",
                            "scaleX",
                            400,
                            0,
                            "easeOutBounce",
                            "${Group}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("creditos_edgeActions.js");
})("EDGE-1252794692");
