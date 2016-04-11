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
            "../../cdn/jquery-2.1.4.min.js",
            "../../cdn/bootstrap.min.js",
            "../../cdn/bootbox.min.js",
            "../../cdn/howler.min.js",
            "../../cdn/TweenMax.min.js",
            "../../cdn/bootstrap.min.css",
            "../../cdn/jquery.sBubble-0.1.1.css",
            "../../cdn/jquery.sBubble-0.1.1.js",
            "../../cdn/jquery.lettering.min.js",
            "../../cdn/animate.min.css",
            "../../cdn/jquery.textillate.min.js",
            "../../cdn/mycss.css"
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
                            id: 'Pem2',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pem2.jpg",'0px','0px']
                        },
                        {
                            id: 'simAnuncios',
                            symbolName: 'simAnuncios',
                            type: 'rect',
                            rect: ['0', '292', '1024', '140', 'auto', 'auto']
                        },
                        {
                            id: 'simCanastas',
                            symbolName: 'simCanastas',
                            type: 'rect',
                            rect: ['98', '179px', '870', '345', 'auto', 'auto']
                        },
                        {
                            id: 'simPizarra2',
                            symbolName: 'simPizarra',
                            type: 'rect',
                            rect: ['423px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'simIntrucciones',
                            symbolName: 'simIntrucciones',
                            type: 'rect',
                            rect: ['68px', '53px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'simMenu',
                            symbolName: 'simMenu',
                            type: 'rect',
                            rect: ['0px', '53px', 'undefined', 'undefined', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '768px', 'auto', 'auto'],
                            sizeRange: ['320px','1920px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 57000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "simAnuncios": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1024px', '140px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['-262px', '51px', '256px', '38px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.3', '0.3']],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', ''],
                            id: 'PlayGame',
                            opacity: '0',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(213, 213, 213); font-weight: 700; font-size: 42px;\">¡A Jugar!</span></p>',
                            type: 'text'
                        },
                        {
                            rect: ['-262px', '51px', '256px', '38px', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(213, 213, 213); font-weight: 700; font-size: 42px;\">Fe y Alegría</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', ''],
                            type: 'text'
                        },
                        {
                            rect: ['-262px', '27px', '436px', '94px', 'auto', 'auto'],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(213, 213, 213); font-weight: 700; font-size: 42px;\">Universidad Centroamericana</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', ''],
                            type: 'text'
                        },
                        {
                            rect: ['-262px', '51px', '564px', '38px', 'auto', 'auto'],
                            id: 'Text4',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(213, 213, 213); font-weight: 700; font-size: 42px;\">Matemáticas Divertidas!</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', ''],
                            type: 'text'
                        },
                        {
                            id: 'logoFeAlegria',
                            type: 'image',
                            rect: ['384px', '27px', '104px', '94px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/logoFeAlegria.png', '0px', '0px']
                        },
                        {
                            id: 'logoJesuita',
                            type: 'image',
                            rect: ['518px', '21px', '104px', '105px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/logoJesuita.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1024px', '140px']
                        }
                    }
                },
                timeline: {
                    duration: 57000,
                    autoPlay: true,
                    labels: {
                        "start": 12000
                    },
                    data: [
                        [
                            "eid29",
                            "scaleX",
                            27000,
                            500,
                            "easeOutElastic",
                            "${Text2}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid33",
                            "scaleX",
                            27500,
                            500,
                            "easeOutElastic",
                            "${Text2}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid486",
                            "top",
                            32000,
                            6000,
                            "easeInOutBack",
                            "${logoJesuita}",
                            '31px',
                            '21px'
                        ],
                        [
                            "eid487",
                            "left",
                            32000,
                            6000,
                            "easeInOutBack",
                            "${logoFeAlegria}",
                            '1066px',
                            '384px'
                        ],
                        [
                            "eid492",
                            "left",
                            39750,
                            5750,
                            "easeInOutBack",
                            "${logoFeAlegria}",
                            '384px',
                            '-294px'
                        ],
                        [
                            "eid18",
                            "left",
                            22000,
                            5000,
                            "easeOutCirc",
                            "${Text2}",
                            '1056px',
                            '286px'
                        ],
                        [
                            "eid35",
                            "left",
                            28000,
                            5000,
                            "linear",
                            "${Text2}",
                            '286px',
                            '-450px'
                        ],
                        [
                            "eid30",
                            "scaleY",
                            27000,
                            500,
                            "easeOutElastic",
                            "${Text2}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid34",
                            "scaleY",
                            27500,
                            500,
                            "easeOutElastic",
                            "${Text2}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid488",
                            "top",
                            32000,
                            6000,
                            "easeInOutBack",
                            "${logoFeAlegria}",
                            '37px',
                            '27px'
                        ],
                        [
                            "eid16",
                            "left",
                            12000,
                            10000,
                            "easeInCubic",
                            "${Text}",
                            '1056px',
                            '-262px'
                        ],
                        [
                            "eid54",
                            "top",
                            0,
                            0,
                            "easeInBack",
                            "${Text2}",
                            '27px',
                            '27px'
                        ],
                        [
                            "eid48",
                            "scaleX",
                            0,
                            1000,
                            "easeOutElastic",
                            "${PlayGame}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid52",
                            "opacity",
                            0,
                            1000,
                            "easeOutElastic",
                            "${PlayGame}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "left",
                            12000,
                            10000,
                            "easeInCubic",
                            "${Text4}",
                            '1056px',
                            '1058px'
                        ],
                        [
                            "eid40",
                            "left",
                            45500,
                            5000,
                            "easeOutBounce",
                            "${Text4}",
                            '1058px',
                            '230px'
                        ],
                        [
                            "eid41",
                            "left",
                            52000,
                            5000,
                            "easeInBounce",
                            "${Text4}",
                            '230px',
                            '-550px'
                        ],
                        [
                            "eid50",
                            "scaleY",
                            0,
                            1000,
                            "easeOutElastic",
                            "${PlayGame}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid485",
                            "left",
                            32000,
                            6000,
                            "easeInOutBack",
                            "${logoJesuita}",
                            '1200px',
                            '518px'
                        ],
                        [
                            "eid491",
                            "left",
                            39750,
                            5750,
                            "easeInOutBack",
                            "${logoJesuita}",
                            '518px',
                            '-160px'
                        ],
                        [
                            "eid53",
                            "left",
                            7000,
                            5000,
                            "easeInBack",
                            "${PlayGame}",
                            '368px',
                            '-364px'
                        ]
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
                            rect: ['0px', '0px', '75px', '252px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '64px', '246px', 'auto', 'auto'],
                            fill: ['rgba(35,35,35,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'simHome',
                            symbolName: 'simHome',
                            cursor: 'pointer',
                            rect: ['0', '0', '64', '60', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'simIntruccion3',
                            symbolName: 'simIntruccion',
                            cursor: 'pointer',
                            rect: ['0px', '62px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'simSonido',
                            symbolName: 'simSonido',
                            cursor: 'pointer',
                            rect: ['0px', '124px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'simSalir',
                            symbolName: 'simSalir',
                            cursor: 'pointer',
                            rect: ['0px', '186px', null, null, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '75px', '252px']
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
            "simSalir": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '64px', '60px', 'auto', 'auto'],
                            id: 'fondo',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(243,243,243,1.00)']
                        },
                        {
                            rect: ['64px', '0px', '4px', '60px', 'auto', 'auto'],
                            id: 'puntaLarga',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(26,188,156,1.00)']
                        },
                        {
                            rect: ['64px', '0px', '4px', '60px', 'auto', 'auto'],
                            id: 'punta',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(22,160,133,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'atras_4',
                            rect: ['0px', '0px', '62px', '62px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '../../images/atras_4.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '62px', '62px', 'auto', 'auto'],
                            id: 'atras_4_over',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', '../../images/atras_4_over.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '64px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'invisibleRectangulo',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(26,188,156,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text2',
                            opacity: '1',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            transform: [[], [], [], ['0', '0']],
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['-23px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​Ir al Menú Anterior</p>'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '64px', '60px']
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: false,
                    labels: {
                        "start": 0,
                        "medium": 150
                    },
                    data: [
                        [
                            "eid99",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid102",
                            "scaleX",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "scaleX",
                            210,
                            0,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1",
                            "width",
                            0,
                            150,
                            "linear",
                            "${puntaLarga}",
                            '4px',
                            '252px'
                        ],
                        [
                            "eid2",
                            "width",
                            150,
                            150,
                            "linear",
                            "${puntaLarga}",
                            '252px',
                            '4px'
                        ],
                        [
                            "eid101",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '-23px',
                            '-23px'
                        ],
                        [
                            "eid104",
                            "left",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '-23px',
                            '97px'
                        ],
                        [
                            "eid107",
                            "left",
                            210,
                            0,
                            "linear",
                            "${Text2}",
                            '97px',
                            '-23px'
                        ],
                        [
                            "eid100",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid103",
                            "scaleY",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid108",
                            "scaleY",
                            210,
                            0,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid27",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid28",
                            "opacity",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid106",
                            "opacity",
                            210,
                            0,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simHome": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '64px', '60px', 'auto', 'auto'],
                            id: 'fondo',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(243,243,243,1.00)']
                        },
                        {
                            rect: ['64px', '0px', '4px', '60px', 'auto', 'auto'],
                            id: 'puntaLarga',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(26,188,156,1.00)']
                        },
                        {
                            rect: ['64px', '0px', '4px', '60px', 'auto', 'auto'],
                            id: 'punta',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(22,160,133,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'menu_1',
                            rect: ['1px', '0px', '59px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '../../images/menu_1.png', '0px', '0px']
                        },
                        {
                            rect: ['1px', '0px', '59px', '60px', 'auto', 'auto'],
                            id: 'menu_1_over',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', '../../images/menu_1_over.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '64px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'invisibleRectangulo',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(26,188,156,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text2',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            transform: [[], [], [], ['0', '0']],
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['-26px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​Ir al Menú Principal</p>'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '64px', '60px']
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: false,
                    labels: {
                        "start": 0,
                        "medium": 150
                    },
                    data: [
                        [
                            "eid69",
                            "scaleX",
                            0,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid72",
                            "scaleX",
                            150,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid75",
                            "scaleX",
                            200,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1",
                            "width",
                            0,
                            150,
                            "linear",
                            "${puntaLarga}",
                            '4px',
                            '252px'
                        ],
                        [
                            "eid2",
                            "width",
                            150,
                            150,
                            "linear",
                            "${puntaLarga}",
                            '252px',
                            '4px'
                        ],
                        [
                            "eid71",
                            "left",
                            0,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '-26px',
                            '-26px'
                        ],
                        [
                            "eid74",
                            "left",
                            150,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '-26px',
                            '89px'
                        ],
                        [
                            "eid77",
                            "left",
                            200,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '89px',
                            '-26px'
                        ],
                        [
                            "eid70",
                            "scaleY",
                            0,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid73",
                            "scaleY",
                            150,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid78",
                            "scaleY",
                            200,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid27",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid28",
                            "opacity",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            200,
                            0,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simSonido": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '64px', '60px', 'auto', 'auto'],
                            id: 'fondo',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(243,243,243,1.00)']
                        },
                        {
                            rect: ['64px', '0px', '4px', '60px', 'auto', 'auto'],
                            id: 'puntaLarga',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(26,188,156,1.00)']
                        },
                        {
                            rect: ['64px', '0px', '4px', '60px', 'auto', 'auto'],
                            id: 'punta',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(22,160,133,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'sonido_3',
                            rect: ['0px', '0px', '64px', '62px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '../../images/sonido_3.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '64px', '62px', 'auto', 'auto'],
                            id: 'sonido_3_over',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', '../../images/sonido_3_over.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '64px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'invisibleRectangulo',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(26,188,156,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text2',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            transform: [[], [], [], ['0', '0']],
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['71px', '17px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​Encender/Apagar Sonido</p>'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '64px', '60px']
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: false,
                    labels: {
                        "start": 0,
                        "medium": 150
                    },
                    data: [
                        [
                            "eid89",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid92",
                            "scaleX",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid95",
                            "scaleX",
                            219,
                            0,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1",
                            "width",
                            0,
                            150,
                            "linear",
                            "${puntaLarga}",
                            '4px',
                            '252px'
                        ],
                        [
                            "eid2",
                            "width",
                            150,
                            150,
                            "linear",
                            "${puntaLarga}",
                            '252px',
                            '4px'
                        ],
                        [
                            "eid91",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '-51px',
                            '-51px'
                        ],
                        [
                            "eid94",
                            "left",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '-51px',
                            '71px'
                        ],
                        [
                            "eid97",
                            "left",
                            219,
                            0,
                            "linear",
                            "${Text2}",
                            '71px',
                            '-51px'
                        ],
                        [
                            "eid90",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid93",
                            "scaleY",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid98",
                            "scaleY",
                            219,
                            0,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid27",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid28",
                            "opacity",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "opacity",
                            219,
                            0,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simIntruccion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '64px', '60px', 'auto', 'auto'],
                            id: 'fondo',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(243,243,243,1.00)']
                        },
                        {
                            rect: ['64px', '0px', '4px', '60px', 'auto', 'auto'],
                            id: 'puntaLarga',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(26,188,156,1.00)']
                        },
                        {
                            rect: ['64px', '0px', '4px', '60px', 'auto', 'auto'],
                            id: 'punta',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(22,160,133,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'instruccion_2',
                            rect: ['1px', '0px', '61px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '../../images/instruccion_2.png', '0px', '0px']
                        },
                        {
                            rect: ['1px', '0px', '61px', '60px', 'auto', 'auto'],
                            id: 'instruccion_2_over',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', '../../images/instruccion_2_over.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '64px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'invisibleRectangulo',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(26,188,156,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text2',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            transform: [[], [], [], ['0', '0']],
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['9px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​Intrucciones</p>'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '64px', '60px']
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: false,
                    labels: {
                        "start": 0,
                        "medium": 150
                    },
                    data: [
                        [
                            "eid79",
                            "scaleX",
                            0,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid82",
                            "scaleX",
                            150,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid85",
                            "scaleX",
                            213,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1",
                            "width",
                            0,
                            150,
                            "linear",
                            "${puntaLarga}",
                            '4px',
                            '252px'
                        ],
                        [
                            "eid2",
                            "width",
                            150,
                            150,
                            "linear",
                            "${puntaLarga}",
                            '252px',
                            '4px'
                        ],
                        [
                            "eid81",
                            "left",
                            0,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid84",
                            "left",
                            150,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '9px',
                            '118px'
                        ],
                        [
                            "eid87",
                            "left",
                            213,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '118px',
                            '9px'
                        ],
                        [
                            "eid80",
                            "scaleY",
                            0,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid83",
                            "scaleY",
                            150,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid88",
                            "scaleY",
                            213,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid27",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid28",
                            "opacity",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            213,
                            0,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simIntrucciones": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '13px', '135px', 'auto', 'auto'],
                            fill: ['rgba(50,50,50,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '135px', '13px', '8px', 'auto', 'auto'],
                            fill: ['rgba(22,160,133,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            rect: ['90px', '34px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\">&nbsp;</span><span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255);\">Lanza el balón en el tablero correspondiente.&nbsp;</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255); font-weight: 500; font-family: Arial, Helvetica, sans-serif;\">Debes hacer click en el tablero!</span></p>',
                            opacity: '1',
                            align: 'left'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '686px', '135px']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: true,
                    labels: {
                        "end": 3500
                    },
                    data: [
                        [
                            "eid39",
                            "opacity",
                            0,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid40",
                            "opacity",
                            1250,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid59",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${Text2}",
                            '34px',
                            '34px'
                        ],
                        [
                            "eid60",
                            "top",
                            2094,
                            0,
                            "linear",
                            "${Text2}",
                            '35px',
                            '34px'
                        ],
                        [
                            "eid24",
                            "width",
                            500,
                            500,
                            "easeInQuad",
                            "${Rectangle}",
                            '13px',
                            '686px'
                        ],
                        [
                            "eid35",
                            "left",
                            1250,
                            844,
                            "easeOutElastic",
                            "${Text2}",
                            '-508px',
                            '52px'
                        ],
                        [
                            "eid57",
                            "left",
                            2094,
                            306,
                            "easeOutElastic",
                            "${Text2}",
                            '52px',
                            '90px'
                        ],
                        [
                            "eid26",
                            "width",
                            500,
                            500,
                            "easeInQuad",
                            "${Rectangle2}",
                            '13px',
                            '686px'
                        ]
                    ]
                }
            },
            "simCanastas": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['14px', '27px', '834px', '298px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)'],
                            c: [
                            {
                                id: 'canastaI',
                                type: 'image',
                                rect: ['-14px', '-595px', '274px', '345px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/canasta.png', '0px', '0px']
                            },
                            {
                                rect: ['280px', '-27px', '274px', '345px', 'auto', 'auto'],
                                id: 'canastaC',
                                opacity: '0',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/canasta.png', '0px', '0px']
                            },
                            {
                                rect: ['582px', '-27px', '274px', '345px', 'auto', 'auto'],
                                id: 'canastaCopyD',
                                opacity: '0',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/canasta.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['398px', '25px', 'auto', 'auto', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            font: ['Arial, Helvetica, sans-serif', [48, 'px'], 'rgba(211,84,0,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            id: 'textM',
                            opacity: '0',
                            text: '<p style=\"margin: 0px; text-align: center;\">​20</p>',
                            type: 'text'
                        },
                        {
                            rect: ['110px', '25px', 'auto', 'auto', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            font: ['Arial, Helvetica, sans-serif', [48, 'px'], 'rgba(211,84,0,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            id: 'textI',
                            opacity: '0',
                            text: '<p style=\"margin: 0px; text-align: center;\">​20</p>',
                            type: 'text'
                        },
                        {
                            rect: ['706px', '25px', 'auto', 'auto', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            font: ['Arial, Helvetica, sans-serif', [48, 'px'], 'rgba(211,84,0,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            id: 'textD',
                            opacity: '0',
                            text: '<p style=\"margin: 0px; text-align: center;\">​20</p>',
                            type: 'text'
                        },
                        {
                            id: 'simCanastaI1',
                            symbolName: 'simCanastaI1',
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'simCanastaC2',
                            symbolName: 'simCanastaC2',
                            rect: ['294px', '0px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'simCanastaD3',
                            symbolName: 'simCanastaD3',
                            rect: ['596px', '0px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['-2px', '108px', '178px', '174px', 'auto', 'auto'],
                            id: 'pelota3',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pelota.png', '0px', '0px']
                        },
                        {
                            rect: ['305px', '360px', '259px', '354px', 'auto', 'auto'],
                            id: 'persona13',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/persona1.png', '0px', '0px']
                        },
                        {
                            rect: ['305px', '360px', '268px', '360px', 'auto', 'auto'],
                            id: 'persona3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/persona3.png', '0px', '0px']
                        },
                        {
                            rect: ['305px', '360px', '229px', '354px', 'auto', 'auto'],
                            id: 'persona2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/persona2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '870px', '345px']
                        }
                    }
                },
                timeline: {
                    duration: 10900,
                    autoPlay: false,
                    labels: {
                        "m": 1000,
                        "m_m": 2750,
                        "i": 4500,
                        "i_m": 6250,
                        "d": 7900,
                        "d_m": 9500
                    },
                    data: [
                        [
                            "eid261",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${pelota3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid308",
                            "opacity",
                            1000,
                            500,
                            "easeOutBounce",
                            "${pelota3}",
                            '1',
                            '0.81'
                        ],
                        [
                            "eid309",
                            "opacity",
                            1500,
                            750,
                            "easeOutBounce",
                            "${pelota3}",
                            '0.81',
                            '1'
                        ],
                        [
                            "eid287",
                            "opacity",
                            2250,
                            250,
                            "linear",
                            "${pelota3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid310",
                            "opacity",
                            2750,
                            520,
                            "easeOutBounce",
                            "${pelota3}",
                            '1',
                            '0.81'
                        ],
                        [
                            "eid312",
                            "opacity",
                            4000,
                            250,
                            "linear",
                            "${pelota3}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid340",
                            "opacity",
                            4500,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '1',
                            '0.81'
                        ],
                        [
                            "eid344",
                            "opacity",
                            5750,
                            250,
                            "easeOutBounce",
                            "${pelota3}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid352",
                            "opacity",
                            6250,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '1',
                            '0.81'
                        ],
                        [
                            "eid395",
                            "opacity",
                            7500,
                            250,
                            "linear",
                            "${pelota3}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid464",
                            "opacity",
                            7900,
                            500,
                            "linear",
                            "${pelota3}",
                            '1',
                            '0.81'
                        ],
                        [
                            "eid420",
                            "opacity",
                            9100,
                            200,
                            "easeOutBounce",
                            "${pelota3}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid475",
                            "opacity",
                            9500,
                            500,
                            "linear",
                            "${pelota3}",
                            '1',
                            '0.81'
                        ],
                        [
                            "eid432",
                            "opacity",
                            10700,
                            200,
                            "easeOutBounce",
                            "${pelota3}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid369",
                            "scaleY",
                            0,
                            0,
                            "easeOutBounce",
                            "${textI}",
                            '0',
                            '0'
                        ],
                        [
                            "eid370",
                            "scaleY",
                            700,
                            0,
                            "easeOutBounce",
                            "${textI}",
                            '0',
                            '1'
                        ],
                        [
                            "eid366",
                            "top",
                            700,
                            0,
                            "easeOutBounce",
                            "${textI}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid278",
                            "left",
                            1000,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '337px',
                            '336px'
                        ],
                        [
                            "eid298",
                            "left",
                            2750,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '337px',
                            '414px'
                        ],
                        [
                            "eid307",
                            "left",
                            3250,
                            750,
                            "easeOutBounce",
                            "${pelota3}",
                            '414px',
                            '410px'
                        ],
                        [
                            "eid337",
                            "left",
                            4500,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '410px',
                            '48px'
                        ],
                        [
                            "eid350",
                            "left",
                            6250,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '356px',
                            '-31px'
                        ],
                        [
                            "eid359",
                            "left",
                            6750,
                            500,
                            "linear",
                            "${pelota3}",
                            '-31px',
                            '-54px'
                        ],
                        [
                            "eid415",
                            "left",
                            7900,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '337px',
                            '644px'
                        ],
                        [
                            "eid426",
                            "left",
                            9500,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '337px',
                            '565px'
                        ],
                        [
                            "eid431",
                            "left",
                            10000,
                            700,
                            "easeOutBounce",
                            "${pelota3}",
                            '565px',
                            '553px'
                        ],
                        [
                            "eid401",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${persona2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid402",
                            "opacity",
                            7900,
                            0,
                            "easeOutCirc",
                            "${persona2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid367",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${textI}",
                            '0',
                            '0'
                        ],
                        [
                            "eid368",
                            "opacity",
                            700,
                            0,
                            "easeOutBounce",
                            "${textI}",
                            '0',
                            '1'
                        ],
                        [
                            "eid375",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${textD}",
                            '0',
                            '0'
                        ],
                        [
                            "eid376",
                            "opacity",
                            700,
                            0,
                            "easeOutBounce",
                            "${textD}",
                            '0',
                            '1'
                        ],
                        [
                            "eid119",
                            "scaleX",
                            0,
                            0,
                            "easeOutBounce",
                            "${textM}",
                            '0',
                            '0'
                        ],
                        [
                            "eid121",
                            "scaleX",
                            700,
                            0,
                            "easeOutBounce",
                            "${textM}",
                            '0',
                            '1'
                        ],
                        [
                            "eid126",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${canastaC}",
                            '0',
                            '0'
                        ],
                        [
                            "eid127",
                            "opacity",
                            100,
                            0,
                            "easeOutBounce",
                            "${canastaC}",
                            '0',
                            '1'
                        ],
                        [
                            "eid112",
                            "top",
                            0,
                            300,
                            "easeOutBounce",
                            "${canastaI}",
                            '-595px',
                            '-27px'
                        ],
                        [
                            "eid117",
                            "top",
                            400,
                            300,
                            "easeOutBounce",
                            "${canastaCopyD}",
                            '-573px',
                            '-27px'
                        ],
                        [
                            "eid377",
                            "scaleY",
                            0,
                            0,
                            "easeOutBounce",
                            "${textD}",
                            '0',
                            '0'
                        ],
                        [
                            "eid378",
                            "scaleY",
                            700,
                            0,
                            "easeOutBounce",
                            "${textD}",
                            '0',
                            '1'
                        ],
                        [
                            "eid113",
                            "left",
                            200,
                            0,
                            "easeOutBounce",
                            "${canastaC}",
                            '280px',
                            '280px'
                        ],
                        [
                            "eid396",
                            "top",
                            1000,
                            100,
                            "linear",
                            "${persona13}",
                            '360px',
                            '308px'
                        ],
                        [
                            "eid397",
                            "top",
                            1100,
                            100,
                            "linear",
                            "${persona13}",
                            '308px',
                            '360px'
                        ],
                        [
                            "eid398",
                            "top",
                            2750,
                            150,
                            "linear",
                            "${persona13}",
                            '360px',
                            '308px'
                        ],
                        [
                            "eid399",
                            "top",
                            2900,
                            100,
                            "linear",
                            "${persona13}",
                            '308px',
                            '360px'
                        ],
                        [
                            "eid379",
                            "top",
                            700,
                            0,
                            "easeOutBounce",
                            "${textD}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid314",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${persona3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid315",
                            "opacity",
                            4500,
                            0,
                            "linear",
                            "${persona3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid403",
                            "opacity",
                            7900,
                            0,
                            "easeOutCirc",
                            "${persona3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid448",
                            "scaleX",
                            1000,
                            500,
                            "linear",
                            "${pelota3}",
                            '1',
                            '0.45'
                        ],
                        [
                            "eid449",
                            "scaleX",
                            1500,
                            0,
                            "linear",
                            "${pelota3}",
                            '0.45',
                            '0.45'
                        ],
                        [
                            "eid300",
                            "scaleX",
                            2750,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '1',
                            '0.45'
                        ],
                        [
                            "eid456",
                            "scaleX",
                            4250,
                            0,
                            "linear",
                            "${pelota3}",
                            '0.45',
                            '1'
                        ],
                        [
                            "eid341",
                            "scaleX",
                            4500,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '1',
                            '0.45'
                        ],
                        [
                            "eid458",
                            "scaleX",
                            6000,
                            0,
                            "linear",
                            "${pelota3}",
                            '0.45',
                            '1'
                        ],
                        [
                            "eid411",
                            "scaleX",
                            6250,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '1',
                            '0.45'
                        ],
                        [
                            "eid462",
                            "scaleX",
                            7750,
                            0,
                            "linear",
                            "${pelota3}",
                            '0.45',
                            '1'
                        ],
                        [
                            "eid417",
                            "scaleX",
                            7900,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '1',
                            '0.45'
                        ],
                        [
                            "eid472",
                            "scaleX",
                            9300,
                            0,
                            "linear",
                            "${pelota3}",
                            '0.45',
                            '1'
                        ],
                        [
                            "eid428",
                            "scaleX",
                            9500,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '1',
                            '0.45'
                        ],
                        [
                            "eid477",
                            "scaleX",
                            10000,
                            0,
                            "linear",
                            "${pelota3}",
                            '0.45',
                            '0.45'
                        ],
                        [
                            "eid481",
                            "scaleX",
                            10700,
                            0,
                            "linear",
                            "${pelota3}",
                            '0.45',
                            '0.45'
                        ],
                        [
                            "eid482",
                            "scaleX",
                            10900,
                            0,
                            "linear",
                            "${pelota3}",
                            '0.45',
                            '1'
                        ],
                        [
                            "eid118",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${textM}",
                            '0',
                            '0'
                        ],
                        [
                            "eid123",
                            "opacity",
                            700,
                            0,
                            "easeOutBounce",
                            "${textM}",
                            '0',
                            '1'
                        ],
                        [
                            "eid120",
                            "scaleY",
                            0,
                            0,
                            "easeOutBounce",
                            "${textM}",
                            '0',
                            '0'
                        ],
                        [
                            "eid122",
                            "scaleY",
                            700,
                            0,
                            "easeOutBounce",
                            "${textM}",
                            '0',
                            '1'
                        ],
                        [
                            "eid400",
                            "top",
                            0,
                            0,
                            "easeOutCirc",
                            "${simCanastaC2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid256",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${persona13}",
                            '305px',
                            '305px'
                        ],
                        [
                            "eid450",
                            "scaleY",
                            1000,
                            500,
                            "linear",
                            "${pelota3}",
                            '1',
                            '0.45'
                        ],
                        [
                            "eid451",
                            "scaleY",
                            1500,
                            0,
                            "linear",
                            "${pelota3}",
                            '0.45',
                            '0.45'
                        ],
                        [
                            "eid301",
                            "scaleY",
                            2750,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '1',
                            '0.45'
                        ],
                        [
                            "eid457",
                            "scaleY",
                            4250,
                            0,
                            "linear",
                            "${pelota3}",
                            '0.45',
                            '1'
                        ],
                        [
                            "eid342",
                            "scaleY",
                            4500,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '1',
                            '0.45'
                        ],
                        [
                            "eid459",
                            "scaleY",
                            6000,
                            0,
                            "linear",
                            "${pelota3}",
                            '0.45',
                            '1'
                        ],
                        [
                            "eid412",
                            "scaleY",
                            6250,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '1',
                            '0.45'
                        ],
                        [
                            "eid463",
                            "scaleY",
                            7750,
                            0,
                            "linear",
                            "${pelota3}",
                            '0.45',
                            '1'
                        ],
                        [
                            "eid418",
                            "scaleY",
                            7900,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '1',
                            '0.45'
                        ],
                        [
                            "eid473",
                            "scaleY",
                            9300,
                            0,
                            "linear",
                            "${pelota3}",
                            '0.45',
                            '1'
                        ],
                        [
                            "eid429",
                            "scaleY",
                            9500,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '1',
                            '0.45'
                        ],
                        [
                            "eid478",
                            "scaleY",
                            10000,
                            0,
                            "linear",
                            "${pelota3}",
                            '0.45',
                            '0.45'
                        ],
                        [
                            "eid483",
                            "scaleY",
                            10700,
                            0,
                            "linear",
                            "${pelota3}",
                            '0.45',
                            '0.45'
                        ],
                        [
                            "eid484",
                            "scaleY",
                            10900,
                            0,
                            "linear",
                            "${pelota3}",
                            '0.45',
                            '1'
                        ],
                        [
                            "eid371",
                            "scaleX",
                            0,
                            0,
                            "easeOutBounce",
                            "${textI}",
                            '0',
                            '0'
                        ],
                        [
                            "eid372",
                            "scaleX",
                            700,
                            0,
                            "easeOutBounce",
                            "${textI}",
                            '0',
                            '1'
                        ],
                        [
                            "eid433",
                            "top",
                            7900,
                            100,
                            "linear",
                            "${persona2}",
                            '360px',
                            '308px'
                        ],
                        [
                            "eid434",
                            "top",
                            8000,
                            100,
                            "linear",
                            "${persona2}",
                            '308px',
                            '360px'
                        ],
                        [
                            "eid437",
                            "top",
                            9500,
                            100,
                            "linear",
                            "${persona2}",
                            '360px',
                            '308px'
                        ],
                        [
                            "eid438",
                            "top",
                            9600,
                            100,
                            "linear",
                            "${persona2}",
                            '308px',
                            '360px'
                        ],
                        [
                            "eid125",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${canastaCopyD}",
                            '0',
                            '0'
                        ],
                        [
                            "eid128",
                            "opacity",
                            100,
                            0,
                            "easeOutBounce",
                            "${canastaCopyD}",
                            '0',
                            '1'
                        ],
                        [
                            "eid116",
                            "top",
                            200,
                            300,
                            "easeOutBounce",
                            "${canastaC}",
                            '-573px',
                            '-27px'
                        ],
                        [
                            "eid279",
                            "top",
                            1000,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '273px',
                            '-4px'
                        ],
                        [
                            "eid285",
                            "top",
                            1500,
                            750,
                            "easeOutBounce",
                            "${pelota3}",
                            '-4px',
                            '268px'
                        ],
                        [
                            "eid299",
                            "top",
                            2750,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '273px',
                            '-11px'
                        ],
                        [
                            "eid306",
                            "top",
                            3250,
                            750,
                            "easeOutBounce",
                            "${pelota3}",
                            '-11px',
                            '275px'
                        ],
                        [
                            "eid338",
                            "top",
                            4500,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '275px',
                            '-9px'
                        ],
                        [
                            "eid343",
                            "top",
                            5000,
                            750,
                            "easeOutBounce",
                            "${pelota3}",
                            '-9px',
                            '273px'
                        ],
                        [
                            "eid351",
                            "top",
                            6250,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '273px',
                            '-3px'
                        ],
                        [
                            "eid360",
                            "top",
                            6750,
                            500,
                            "linear",
                            "${pelota3}",
                            '-3px',
                            '99px'
                        ],
                        [
                            "eid361",
                            "top",
                            7250,
                            500,
                            "easeOutBounce",
                            "${pelota3}",
                            '99px',
                            '265px'
                        ],
                        [
                            "eid416",
                            "top",
                            7900,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '273px',
                            '-15px'
                        ],
                        [
                            "eid419",
                            "top",
                            8400,
                            700,
                            "easeOutBounce",
                            "${pelota3}",
                            '-15px',
                            '273px'
                        ],
                        [
                            "eid427",
                            "top",
                            9500,
                            500,
                            "easeOutCirc",
                            "${pelota3}",
                            '273px',
                            '-4px'
                        ],
                        [
                            "eid430",
                            "top",
                            10000,
                            700,
                            "easeOutBounce",
                            "${pelota3}",
                            '-4px',
                            '284px'
                        ],
                        [
                            "eid389",
                            "top",
                            4500,
                            100,
                            "linear",
                            "${persona3}",
                            '360px',
                            '296px'
                        ],
                        [
                            "eid390",
                            "top",
                            4600,
                            100,
                            "linear",
                            "${persona3}",
                            '296px',
                            '360px'
                        ],
                        [
                            "eid391",
                            "top",
                            6250,
                            150,
                            "linear",
                            "${persona3}",
                            '360px',
                            '325px'
                        ],
                        [
                            "eid392",
                            "top",
                            6400,
                            100,
                            "linear",
                            "${persona3}",
                            '325px',
                            '360px'
                        ],
                        [
                            "eid260",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${persona13}",
                            '0',
                            '0'
                        ],
                        [
                            "eid264",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${persona13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid313",
                            "opacity",
                            4500,
                            0,
                            "linear",
                            "${persona13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid373",
                            "scaleX",
                            0,
                            0,
                            "easeOutBounce",
                            "${textD}",
                            '0',
                            '0'
                        ],
                        [
                            "eid374",
                            "scaleX",
                            700,
                            0,
                            "easeOutBounce",
                            "${textD}",
                            '0',
                            '1'
                        ],
                        [
                            "eid124",
                            "top",
                            700,
                            0,
                            "easeOutBounce",
                            "${textM}",
                            '25px',
                            '25px'
                        ]
                    ]
                }
            },
            "simCanastaI1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-194px', '271px', '50px', 'auto', 'auto'],
                            id: 'luz12',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/luz1.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['16px', '27px', '230px', '110px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'canastaI1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(151,0,0,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "light": 800
                    },
                    data: [
                        [
                            "eid148",
                            "height",
                            800,
                            200,
                            "linear",
                            "${luz12}",
                            '50px',
                            '552px'
                        ],
                        [
                            "eid149",
                            "opacity",
                            800,
                            0,
                            "linear",
                            "${luz12}",
                            '0',
                            '0'
                        ],
                        [
                            "eid151",
                            "opacity",
                            850,
                            0,
                            "linear",
                            "${luz12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid150",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${luz12}",
                            '1',
                            '1'
                        ],
                        [
                            "eid129",
                            "scaleX",
                            0,
                            0,
                            "easeOutBounce",
                            "${canastaI1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid135",
                            "scaleX",
                            700,
                            0,
                            "easeOutBounce",
                            "${canastaI1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "scaleY",
                            0,
                            0,
                            "easeOutBounce",
                            "${canastaI1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid136",
                            "scaleY",
                            700,
                            0,
                            "easeOutBounce",
                            "${canastaI1}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simPizarra": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-205px', '30px', '46px', 'auto', 'auto'],
                            id: 'manga1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(35,35,35,1.00)']
                        },
                        {
                            rect: ['191px', '-205px', '30px', '46px', 'auto', 'auto'],
                            id: 'manga2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(35,35,35,1.00)']
                        },
                        {
                            rect: ['0', '39px', '280', '140', 'auto', 'auto'],
                            id: 'Group2',
                            cursor: 'help',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '140px', '140px', 'auto', 'auto'],
                                id: 'noise',
                                opacity: '1',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/noise.jpg', '0px', '0px']
                            },
                            {
                                rect: ['138px', '0px', '140px', '140px', 'auto', 'auto'],
                                type: 'image',
                                id: 'noiseCopy2',
                                opacity: '1',
                                clip: 'rect(0px 82.66650390625px 140px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/noise.jpg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['0px', '39px', '220px', '140px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(35,35,35,0.00)'],
                            c: [
                            {
                                transform: [[], [], [], ['0.5', '0.5']],
                                id: 'textPizarra',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['81px', '32px', 'auto', 'auto', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">​45</p>',
                                font: ['Arial, Helvetica, sans-serif', [48, 'px'], 'rgba(211,84,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'left',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '220px', '180px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid244",
                            "top",
                            100,
                            900,
                            "easeOutBounce",
                            "${manga2}",
                            '-205px',
                            '0px'
                        ],
                        [
                            "eid223",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${noiseCopy2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid177",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${textPizarra}",
                            '0',
                            '0'
                        ],
                        [
                            "eid221",
                            "scaleY",
                            100,
                            0,
                            "easeOutBounce",
                            "${textPizarra}",
                            '0',
                            '1'
                        ],
                        [
                            "eid245",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${noiseCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid247",
                            "opacity",
                            100,
                            0,
                            "easeOutBounce",
                            "${noiseCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid224",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${noiseCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid225",
                            "scaleY",
                            100,
                            0,
                            "easeOutBounce",
                            "${noiseCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid181",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${noise}",
                            '0',
                            '0'
                        ],
                        [
                            "eid222",
                            "scaleY",
                            100,
                            0,
                            "easeOutBounce",
                            "${noise}",
                            '0',
                            '1'
                        ],
                        [
                            "eid236",
                            "top",
                            100,
                            900,
                            "easeOutBounce",
                            "${noise}",
                            '-196px',
                            '0px'
                        ],
                        [
                            "eid242",
                            "top",
                            100,
                            900,
                            "easeOutBounce",
                            "${noiseCopy2}",
                            '-196px',
                            '0px'
                        ],
                        [
                            "eid240",
                            "top",
                            100,
                            900,
                            "easeOutBounce",
                            "${textPizarra}",
                            '-173px',
                            '32px'
                        ],
                        [
                            "eid176",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${textPizarra}",
                            '0',
                            '0'
                        ],
                        [
                            "eid220",
                            "scaleX",
                            100,
                            0,
                            "easeOutBounce",
                            "${textPizarra}",
                            '0',
                            '1'
                        ],
                        [
                            "eid246",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${noise}",
                            '0',
                            '0'
                        ],
                        [
                            "eid248",
                            "opacity",
                            100,
                            0,
                            "easeOutBounce",
                            "${noise}",
                            '0',
                            '1'
                        ],
                        [
                            "eid188",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${noise}",
                            '0',
                            '1'
                        ],
                        [
                            "eid226",
                            "left",
                            100,
                            0,
                            "easeOutBounce",
                            "${noiseCopy2}",
                            '138px',
                            '138px'
                        ],
                        [
                            "eid249",
                            "left",
                            1000,
                            0,
                            "easeOutBounce",
                            "${manga2}",
                            '191px',
                            '191px'
                        ],
                        [
                            "eid238",
                            "top",
                            100,
                            900,
                            "easeOutBounce",
                            "${manga1}",
                            '-205px',
                            '0px'
                        ],
                        [
                            "eid250",
                            "width",
                            1000,
                            0,
                            "easeOutBounce",
                            "${manga2}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid251",
                            "width",
                            1000,
                            0,
                            "easeOutBounce",
                            "${manga1}",
                            '30px',
                            '30px'
                        ]
                    ]
                }
            },
            "simCanastaC2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-194px', '271px', '50px', 'auto', 'auto'],
                            id: 'luz12',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/luz1.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['16px', '27px', '230px', '110px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'canastaM1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(151,0,0,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "light": 800
                    },
                    data: [
                        [
                            "eid148",
                            "height",
                            800,
                            200,
                            "linear",
                            "${luz12}",
                            '50px',
                            '552px'
                        ],
                        [
                            "eid149",
                            "opacity",
                            800,
                            0,
                            "linear",
                            "${luz12}",
                            '0',
                            '0'
                        ],
                        [
                            "eid151",
                            "opacity",
                            850,
                            0,
                            "linear",
                            "${luz12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid150",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${luz12}",
                            '1',
                            '1'
                        ],
                        [
                            "eid130",
                            "scaleY",
                            0,
                            0,
                            "easeOutBounce",
                            "${canastaM1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid136",
                            "scaleY",
                            700,
                            0,
                            "easeOutBounce",
                            "${canastaM1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid129",
                            "scaleX",
                            0,
                            0,
                            "easeOutBounce",
                            "${canastaM1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid135",
                            "scaleX",
                            700,
                            0,
                            "easeOutBounce",
                            "${canastaM1}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simCanastaD3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-194px', '271px', '50px', 'auto', 'auto'],
                            id: 'luz12',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/luz1.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['16px', '27px', '230px', '110px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'canastaD1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(151,0,0,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "light": 800
                    },
                    data: [
                        [
                            "eid148",
                            "height",
                            800,
                            200,
                            "linear",
                            "${luz12}",
                            '50px',
                            '552px'
                        ],
                        [
                            "eid149",
                            "opacity",
                            800,
                            0,
                            "linear",
                            "${luz12}",
                            '0',
                            '0'
                        ],
                        [
                            "eid151",
                            "opacity",
                            850,
                            0,
                            "linear",
                            "${luz12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid150",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${luz12}",
                            '1',
                            '1'
                        ],
                        [
                            "eid129",
                            "scaleX",
                            0,
                            0,
                            "easeOutBounce",
                            "${canastaD1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid135",
                            "scaleX",
                            700,
                            0,
                            "easeOutBounce",
                            "${canastaD1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "scaleY",
                            0,
                            0,
                            "easeOutBounce",
                            "${canastaD1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid136",
                            "scaleY",
                            700,
                            0,
                            "easeOutBounce",
                            "${canastaD1}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Pem2_edgeActions.js");
})("EDGE-16013193");
