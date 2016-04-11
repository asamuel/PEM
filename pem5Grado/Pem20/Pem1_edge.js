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
            "../../cdn/Draggable.min.js",
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
                            id: 'Pem1Cielo',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pem1Cielo.png",'0px','0px']
                        },
                        {
                            id: 'simNube',
                            symbolName: 'simNube',
                            type: 'rect',
                            rect: ['50', '310', '286', '189', 'auto', 'auto']
                        },
                        {
                            id: 'Pem1',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Pem1.png",'0px','0px']
                        },
                        {
                            id: 'simRompeCabezas',
                            symbolName: 'simRompeCabezas',
                            type: 'rect',
                            rect: ['0', '190', '1024', '520', 'auto', 'auto']
                        },
                        {
                            id: 'simIntrucciones',
                            symbolName: 'simIntrucciones',
                            type: 'rect',
                            rect: ['68', '110', '686', '135', 'auto', 'auto']
                        },
                        {
                            id: 'simMenu',
                            symbolName: 'simMenu',
                            type: 'rect',
                            rect: ['0px', '64px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'relog',
                            type: 'image',
                            rect: ['837px', '73px', '150px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)","../../images/relog.png",'0px','0px']
                        },
                        {
                            id: 'clock',
                            type: 'rect',
                            rect: ['824px', '62px', '200px', '200px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1026px', '766px', 'auto', 'auto'],
                            sizeRange: ['320px','1920px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 35000,
                    autoPlay: true,
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
                            rect: ['0px', '0px', '64px', '308px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
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
                            id: 'simSiguiente',
                            symbolName: 'simSiguiente',
                            cursor: 'pointer',
                            rect: ['0px', '186px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'simSalir',
                            symbolName: 'simSalir',
                            cursor: 'pointer',
                            rect: ['0px', '248px', null, null, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '75px', '252px']
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
                            id: 'atras_4',
                            type: 'image',
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
                            text: '<p style=\"margin: 0px;\">​Ir al Menú Anterior</p>',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            transform: [[], [], [], ['0', '0']],
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['100px', '18px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '64px', '60px']
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
                            "eid139",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid141",
                            "scaleX",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid143",
                            "scaleX",
                            276,
                            0,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid147",
                            "top",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '18px',
                            '18px'
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
                            "eid145",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '-93px',
                            '-93px'
                        ],
                        [
                            "eid146",
                            "left",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '-93px',
                            '100px'
                        ],
                        [
                            "eid148",
                            "left",
                            276,
                            0,
                            "linear",
                            "${Text2}",
                            '100px',
                            '-93px'
                        ],
                        [
                            "eid140",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid142",
                            "scaleY",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid144",
                            "scaleY",
                            276,
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
                            "eid32",
                            "opacity",
                            200,
                            76,
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
                            id: 'menu_1',
                            type: 'image',
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
                            text: '<p style=\"margin: 0px;\">​Ir al Menú Principal</p>',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            transform: [[], [], [], ['0', '0']],
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['-96px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '64px', '60px']
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
                            "eid149",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid152",
                            "scaleX",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid155",
                            "scaleX",
                            276,
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
                            "eid151",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '-96px',
                            '-96px'
                        ],
                        [
                            "eid154",
                            "left",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '-96px',
                            '94px'
                        ],
                        [
                            "eid157",
                            "left",
                            276,
                            0,
                            "linear",
                            "${Text2}",
                            '94px',
                            '-96px'
                        ],
                        [
                            "eid150",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid153",
                            "scaleY",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid156",
                            "scaleY",
                            276,
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
                            "eid32",
                            "opacity",
                            200,
                            76,
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
                            id: 'sonido_3',
                            type: 'image',
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
                            text: '<p style=\"margin: 0px;\">​Encender/Apagar Sonido</p>',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            transform: [[], [], [], ['0', '0']],
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['71px', '17px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '64px', '60px']
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
                            "eid167",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid170",
                            "scaleX",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid173",
                            "scaleX",
                            276,
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
                            "eid169",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '-121px',
                            '-121px'
                        ],
                        [
                            "eid172",
                            "left",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '-121px',
                            '71px'
                        ],
                        [
                            "eid175",
                            "left",
                            276,
                            0,
                            "linear",
                            "${Text2}",
                            '71px',
                            '-121px'
                        ],
                        [
                            "eid168",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid171",
                            "scaleY",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid174",
                            "scaleY",
                            276,
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
                            "eid32",
                            "opacity",
                            200,
                            76,
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
                            id: 'instruccion_2',
                            type: 'image',
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
                            text: '<p style=\"margin: 0px;\">​Intrucciones</p>',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            transform: [[], [], [], ['0', '0']],
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['119px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '64px', '60px']
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
                            "eid158",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid161",
                            "scaleX",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid165",
                            "scaleX",
                            276,
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
                            "eid160",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '-61px',
                            '-61px'
                        ],
                        [
                            "eid163",
                            "left",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '-61px',
                            '119px'
                        ],
                        [
                            "eid164",
                            "left",
                            276,
                            0,
                            "linear",
                            "${Text2}",
                            '119px',
                            '-61px'
                        ],
                        [
                            "eid159",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid162",
                            "scaleY",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid166",
                            "scaleY",
                            276,
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
                            "eid32",
                            "opacity",
                            200,
                            76,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simSiguiente": {
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
                            rect: ['0px', '0px', '62px', '62px', 'auto', 'auto'],
                            id: 'atras_4',
                            transform: [[], ['180']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', '../../images/atras_4.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '62px', '62px', 'auto', 'auto'],
                            transform: [[], ['180']],
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
                            text: '<p style=\"margin: 0px;\">​Siguiente Escena</p>',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            transform: [[], [], [], ['0', '0']],
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['100px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '64px', '60px']
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
                            "eid176",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid179",
                            "scaleX",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid182",
                            "scaleX",
                            276,
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
                            "eid178",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '-88px',
                            '-88px'
                        ],
                        [
                            "eid181",
                            "left",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '-88px',
                            '100px'
                        ],
                        [
                            "eid184",
                            "left",
                            276,
                            0,
                            "linear",
                            "${Text2}",
                            '100px',
                            '-88px'
                        ],
                        [
                            "eid177",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid180",
                            "scaleY",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid183",
                            "scaleY",
                            276,
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
                            "eid32",
                            "opacity",
                            200,
                            76,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simNube": {
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
                            id: 'nube',
                            rect: ['692px', '0px', '286px', '189px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/nube.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'nube2',
                            rect: ['-334px', '0px', '286px', '189px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/nube.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '286px', '189px']
                        }
                    }
                },
                timeline: {
                    duration: 35000,
                    autoPlay: true,
                    labels: {
                        "start": 0,
                        "end": 35000
                    },
                    data: [
                        [
                            "eid14",
                            "left",
                            10000,
                            25000,
                            "linear",
                            "${nube}",
                            '692px',
                            '-338px'
                        ],
                        [
                            "eid20",
                            "left",
                            0,
                            25000,
                            "linear",
                            "${nube2}",
                            '-334px',
                            '944px'
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
                            rect: ['0px', '0px', '13px', '135px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(50,50,50,1.00)']
                        },
                        {
                            rect: ['0px', '135px', '13px', '8px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(22,160,133,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['-508px', '17px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            opacity: '1',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\">¡¡Hola!! El viento se llevó las piezas del rompecabezas.&nbsp;</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\">¿Podes ayudar a reconstruir el rostro de Francisco?</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\">Arrastra y ubica las piezas en su lugar.</span></p>'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '686px', '135px']
                        }
                    }
                },
                timeline: {
                    duration: 6250,
                    autoPlay: true,
                    labels: {
                        "end": 6250
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
                            4000,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "top",
                            4000,
                            1150,
                            "easeOutElastic",
                            "${Text2}",
                            '17px',
                            '15px'
                        ],
                        [
                            "eid24",
                            "width",
                            3250,
                            500,
                            "easeInQuad",
                            "${Rectangle}",
                            '13px',
                            '686px'
                        ],
                        [
                            "eid35",
                            "left",
                            4000,
                            1150,
                            "easeOutElastic",
                            "${Text2}",
                            '-508px',
                            '56px'
                        ],
                        [
                            "eid26",
                            "width",
                            3250,
                            500,
                            "easeInQuad",
                            "${Rectangle2}",
                            '13px',
                            '686px'
                        ]
                    ]
                }
            },
            "simRompeCabezas": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1024px', '520px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'image',
                            rect: ['764px', '183px', '61px', '57px', 'auto', 'auto'],
                            id: 'nariz',
                            userClass: 'box',
                            clip: 'rect(8px 53px 49px 9.33349609375px)',
                            fill: ['rgba(0,0,0,0)', 'images/nariz.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['163px', '101px', '148px', '171px', 'auto', 'auto'],
                            id: 'cabello',
                            userClass: 'box',
                            clip: 'rect(16px 148px 148.333251953125px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/cabello.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['178px', '196px', '118px', '54px', 'auto', 'auto'],
                            id: 'ojos',
                            userClass: 'box',
                            clip: 'rect(10.66650390625px 106px 46px 17.33349609375px)',
                            fill: ['rgba(0,0,0,0)', 'images/ojos.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['172px', '186px', '133px', '48px', 'auto', 'auto'],
                            id: 'cejas',
                            userClass: 'box',
                            clip: 'rect(13.333251953125px 114.33349609375px 36px 17.33349609375px)',
                            fill: ['rgba(0,0,0,0)', 'images/cejas.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['535px', '168px', '64px', '54px', 'auto', 'auto'],
                            id: 'boca',
                            userClass: 'box',
                            clip: 'rect(9.33349609375px 60px 39.333251953125px 5.33349609375px)',
                            fill: ['rgba(0,0,0,0)', 'images/boca.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['517px', '372px', '100px', '63px', 'auto', 'auto'],
                            id: 'barba1',
                            userClass: 'box',
                            clip: 'rect(12px 92px 47px 17.33349609375px)',
                            fill: ['rgba(0,0,0,0)', 'images/barba1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'barba2',
                            opacity: '1',
                            rect: ['617px', '48px', '97px', '84px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            userClass: 'box',
                            clip: 'rect(18.66650390625px 90.3330078125px 65.33349609375px 13.33349609375px)',
                            fill: ['rgba(0,0,0,0)', 'images/barba.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['787px', '503px', '79px', '57px', 'auto', 'auto'],
                            userClass: 'box',
                            id: 'bocacopia1',
                            opacity: '1',
                            clip: 'rect(12px 69.66650390625px 43.666748046875px 9.33349609375px)',
                            fill: ['rgba(0,0,0,0)', 'images/bocacopia1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['643px', '474px', '154px', '138px', 'auto', 'auto'],
                            userClass: 'box',
                            id: 'cabellocopia',
                            opacity: '1',
                            clip: 'rect(9.333251953125px 140.66650390625px 126px 9.33349609375px)',
                            fill: ['rgba(0,0,0,0)', 'images/cabellocopia.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['843px', '38px', '115px', '48px', 'auto', 'auto'],
                            userClass: 'box',
                            id: 'cejascopia',
                            opacity: '1',
                            clip: 'rect(5.33349609375px 105.66650390625px 38.66650390625px 14.66650390625px)',
                            fill: ['rgba(0,0,0,0)', 'images/cejascopia.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['1009px', '295px', '55px', '63px', 'auto', 'auto'],
                            userClass: 'box',
                            id: 'narizcopia',
                            opacity: '1',
                            clip: 'rect(16px 48.33349609375px 52.333251953125px 8px)',
                            fill: ['rgba(0,0,0,0)', 'images/narizcopia.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['972px', '346px', '103px', '51px', 'auto', 'auto'],
                            userClass: 'box',
                            id: 'ojosazules',
                            opacity: '1',
                            clip: 'rect(9.33349609375px 95px 37.66650390625px 14.6669921875px)',
                            fill: ['rgba(0,0,0,0)', 'images/ojosazules.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['864px', '241px', '127px', '63px', 'auto', 'auto'],
                            userClass: 'box',
                            id: 'ojoslentes',
                            opacity: '1',
                            clip: 'rect(14.666748046875px 103px 55px 12px)',
                            fill: ['rgba(0,0,0,0)', 'images/ojoslentes.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '520px']
                        }
                    }
                },
                timeline: {
                    duration: 5250,
                    autoPlay: true,
                    data: [
                        [
                            "eid52",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${boca}",
                            '205px',
                            '421px'
                        ],
                        [
                            "eid55",
                            "left",
                            1500,
                            1500,
                            "linear",
                            "${boca}",
                            '421px',
                            '535px'
                        ],
                        [
                            "eid87",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${cabello}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid88",
                            "rotateZ",
                            1500,
                            1500,
                            "linear",
                            "${cabello}",
                            '180deg',
                            '360deg'
                        ],
                        [
                            "eid125",
                            "top",
                            4500,
                            500,
                            "easeInExpo",
                            "${barba2}",
                            '48px',
                            '180px'
                        ],
                        [
                            "eid83",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${cabello}",
                            '163px',
                            '233px'
                        ],
                        [
                            "eid85",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${cabello}",
                            '233px',
                            '305px'
                        ],
                        [
                            "eid89",
                            "left",
                            1500,
                            1500,
                            "linear",
                            "${cabello}",
                            '305px',
                            '486px'
                        ],
                        [
                            "eid97",
                            "opacity",
                            0,
                            0,
                            "easeOutElastic",
                            "${ojosazules}",
                            '0',
                            '0'
                        ],
                        [
                            "eid98",
                            "opacity",
                            3000,
                            0,
                            "easeOutElastic",
                            "${ojosazules}",
                            '0',
                            '1'
                        ],
                        [
                            "eid66",
                            "left",
                            0,
                            500,
                            "linear",
                            "${ojos}",
                            '178px',
                            '367px'
                        ],
                        [
                            "eid68",
                            "left",
                            500,
                            500,
                            "linear",
                            "${ojos}",
                            '367px',
                            '492px'
                        ],
                        [
                            "eid72",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${ojos}",
                            '492px',
                            '661px'
                        ],
                        [
                            "eid111",
                            "left",
                            3500,
                            750,
                            "easeOutElastic",
                            "${narizcopia}",
                            '1009px',
                            '873px'
                        ],
                        [
                            "eid134",
                            "left",
                            4250,
                            750,
                            "easeOutElastic",
                            "${narizcopia}",
                            '873px',
                            '827px'
                        ],
                        [
                            "eid74",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${cejas}",
                            '172px',
                            '493px'
                        ],
                        [
                            "eid78",
                            "left",
                            1500,
                            750,
                            "linear",
                            "${cejas}",
                            '493px',
                            '737px'
                        ],
                        [
                            "eid81",
                            "left",
                            2250,
                            750,
                            "linear",
                            "${cejas}",
                            '737px',
                            '850px'
                        ],
                        [
                            "eid133",
                            "left",
                            3000,
                            2000,
                            "easeOutElastic",
                            "${cejas}",
                            '850px',
                            '856px'
                        ],
                        [
                            "eid116",
                            "opacity",
                            0,
                            0,
                            "easeOutElastic",
                            "${cabellocopia}",
                            '0',
                            '0'
                        ],
                        [
                            "eid117",
                            "opacity",
                            3750,
                            0,
                            "easeOutElastic",
                            "${cabellocopia}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "rotateZ",
                            1500,
                            500,
                            "linear",
                            "${nariz}",
                            '0deg',
                            '270deg'
                        ],
                        [
                            "eid65",
                            "rotateZ",
                            2000,
                            1000,
                            "linear",
                            "${nariz}",
                            '270deg',
                            '360deg'
                        ],
                        [
                            "eid100",
                            "left",
                            3000,
                            500,
                            "easeOutElastic",
                            "${ojosazules}",
                            '972px',
                            '864px'
                        ],
                        [
                            "eid112",
                            "opacity",
                            0,
                            0,
                            "easeOutElastic",
                            "${cejascopia}",
                            '0',
                            '0'
                        ],
                        [
                            "eid113",
                            "opacity",
                            3500,
                            0,
                            "easeOutElastic",
                            "${cejascopia}",
                            '0',
                            '1'
                        ],
                        [
                            "eid59",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${nariz}",
                            '208px',
                            '501px'
                        ],
                        [
                            "eid60",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${nariz}",
                            '501px',
                            '630px'
                        ],
                        [
                            "eid63",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${nariz}",
                            '630px',
                            '782px'
                        ],
                        [
                            "eid130",
                            "left",
                            3000,
                            2000,
                            "easeOutElastic",
                            "${nariz}",
                            '782px',
                            '764px'
                        ],
                        [
                            "eid75",
                            "top",
                            0,
                            1500,
                            "linear",
                            "${cejas}",
                            '186px',
                            '345px'
                        ],
                        [
                            "eid79",
                            "top",
                            1500,
                            750,
                            "linear",
                            "${cejas}",
                            '345px',
                            '356px'
                        ],
                        [
                            "eid82",
                            "top",
                            2250,
                            750,
                            "linear",
                            "${cejas}",
                            '356px',
                            '387px'
                        ],
                        [
                            "eid48",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${barba1}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid51",
                            "rotateZ",
                            1500,
                            1500,
                            "linear",
                            "${barba1}",
                            '180deg',
                            '360deg'
                        ],
                        [
                            "eid46",
                            "left",
                            0,
                            1500,
                            "linear",
                            "${barba1}",
                            '185px',
                            '393px'
                        ],
                        [
                            "eid49",
                            "left",
                            1500,
                            1500,
                            "linear",
                            "${barba1}",
                            '393px',
                            '517px'
                        ],
                        [
                            "eid58",
                            "top",
                            0,
                            1500,
                            "linear",
                            "${nariz}",
                            '222px',
                            '250px'
                        ],
                        [
                            "eid61",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${nariz}",
                            '250px',
                            '234px'
                        ],
                        [
                            "eid64",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${nariz}",
                            '234px',
                            '205px'
                        ],
                        [
                            "eid131",
                            "top",
                            3000,
                            2000,
                            "easeOutElastic",
                            "${nariz}",
                            '205px',
                            '183px'
                        ],
                        [
                            "eid84",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${cabello}",
                            '101px',
                            '116px'
                        ],
                        [
                            "eid86",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${cabello}",
                            '116px',
                            '157px'
                        ],
                        [
                            "eid90",
                            "top",
                            1500,
                            1500,
                            "linear",
                            "${cabello}",
                            '157px',
                            '214px'
                        ],
                        [
                            "eid76",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${cejas}",
                            '0deg',
                            '90deg'
                        ],
                        [
                            "eid77",
                            "rotateZ",
                            1500,
                            750,
                            "linear",
                            "${cejas}",
                            '90deg',
                            '270deg'
                        ],
                        [
                            "eid80",
                            "rotateZ",
                            2250,
                            750,
                            "linear",
                            "${cejas}",
                            '270deg',
                            '360deg'
                        ],
                        [
                            "eid70",
                            "rotateZ",
                            500,
                            500,
                            "linear",
                            "${ojos}",
                            '0deg',
                            '270deg'
                        ],
                        [
                            "eid71",
                            "rotateZ",
                            1000,
                            1000,
                            "linear",
                            "${ojos}",
                            '270deg',
                            '360deg'
                        ],
                        [
                            "eid47",
                            "top",
                            0,
                            1500,
                            "linear",
                            "${barba1}",
                            '268px',
                            '277px'
                        ],
                        [
                            "eid50",
                            "top",
                            1500,
                            1500,
                            "linear",
                            "${barba1}",
                            '277px',
                            '372px'
                        ],
                        [
                            "eid119",
                            "top",
                            3750,
                            750,
                            "easeOutElastic",
                            "${cabellocopia}",
                            '474px',
                            '318px'
                        ],
                        [
                            "eid93",
                            "left",
                            3000,
                            500,
                            "easeOutElastic",
                            "${ojoslentes}",
                            '864px',
                            '786px'
                        ],
                        [
                            "eid129",
                            "top",
                            4250,
                            750,
                            "easeInExpo",
                            "${bocacopia1}",
                            '503px',
                            '381px'
                        ],
                        [
                            "eid127",
                            "rotateZ",
                            4500,
                            500,
                            "easeInExpo",
                            "${barba2}",
                            '180deg',
                            '0deg'
                        ],
                        [
                            "eid67",
                            "top",
                            0,
                            500,
                            "linear",
                            "${ojos}",
                            '196px',
                            '221px'
                        ],
                        [
                            "eid69",
                            "top",
                            500,
                            500,
                            "linear",
                            "${ojos}",
                            '221px',
                            '260px'
                        ],
                        [
                            "eid73",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${ojos}",
                            '260px',
                            '273px'
                        ],
                        [
                            "eid132",
                            "top",
                            2000,
                            3000,
                            "easeOutElastic",
                            "${ojos}",
                            '273px',
                            '261px'
                        ],
                        [
                            "eid102",
                            "top",
                            3000,
                            500,
                            "easeOutElastic",
                            "${ojosazules}",
                            '346px',
                            '345px'
                        ],
                        [
                            "eid95",
                            "opacity",
                            0,
                            0,
                            "easeOutElastic",
                            "${ojoslentes}",
                            '0',
                            '0'
                        ],
                        [
                            "eid96",
                            "opacity",
                            3000,
                            0,
                            "easeOutElastic",
                            "${ojoslentes}",
                            '0',
                            '1'
                        ],
                        [
                            "eid53",
                            "top",
                            0,
                            1500,
                            "linear",
                            "${boca}",
                            '250px',
                            '210px'
                        ],
                        [
                            "eid56",
                            "top",
                            1500,
                            1500,
                            "linear",
                            "${boca}",
                            '210px',
                            '168px'
                        ],
                        [
                            "eid104",
                            "opacity",
                            0,
                            0,
                            "easeOutElastic",
                            "${narizcopia}",
                            '0',
                            '0'
                        ],
                        [
                            "eid107",
                            "opacity",
                            3500,
                            0,
                            "easeOutElastic",
                            "${narizcopia}",
                            '0',
                            '1'
                        ],
                        [
                            "eid120",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${bocacopia1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid121",
                            "opacity",
                            4250,
                            0,
                            "easeInQuad",
                            "${bocacopia1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid54",
                            "rotateZ",
                            0,
                            1500,
                            "linear",
                            "${boca}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid57",
                            "rotateZ",
                            1500,
                            1500,
                            "linear",
                            "${boca}",
                            '180deg',
                            '360deg'
                        ],
                        [
                            "eid122",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${barba2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid123",
                            "opacity",
                            4500,
                            0,
                            "easeInQuad",
                            "${barba2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid115",
                            "top",
                            3500,
                            750,
                            "easeOutElastic",
                            "${cejascopia}",
                            '38px',
                            '198px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Pem20_edgeActions.js");
})("EDGE-9143841");
