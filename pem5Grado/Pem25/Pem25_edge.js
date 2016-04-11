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
            "../../cdn/bootstrap.min.css",
            "../../cdn/jquery-ui.js",
            "../../cdn/jquery.ui.touch-punch.min.js",
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
                            id: 'fondo1',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo1.png",'0px','0px']
                        },
                        {
                            id: 'simNubes',
                            symbolName: 'simNubes',
                            type: 'rect',
                            rect: ['0', '46', '1024', '194', 'auto', 'auto']
                        },
                        {
                            id: 'fondo2',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo2.png",'0px','0px']
                        },
                        {
                            id: 'simDragDrop',
                            symbolName: 'simDragDrop',
                            type: 'rect',
                            rect: ['68', '38', '938', '702', 'auto', 'auto']
                        },
                        {
                            id: 'simImagen6',
                            symbolName: 'simImagen6',
                            type: 'rect',
                            rect: ['0', '0', '1024', '768', 'auto', 'auto']
                        },
                        {
                            id: 'simImagen5',
                            symbolName: 'simImagen5',
                            type: 'rect',
                            rect: ['0', '0', '1024', '768', 'auto', 'auto']
                        },
                        {
                            id: 'simImagen4',
                            symbolName: 'simImagen4',
                            type: 'rect',
                            rect: ['0', '0', '1024', '768', 'auto', 'auto']
                        },
                        {
                            id: 'simImagen3',
                            symbolName: 'simImagen3',
                            type: 'rect',
                            rect: ['0', '0', '1024', '768', 'auto', 'auto']
                        },
                        {
                            id: 'simImagen2',
                            symbolName: 'simImagen2',
                            type: 'rect',
                            rect: ['0', '0', '1024', '768', 'auto', 'auto']
                        },
                        {
                            id: 'simImagen1',
                            symbolName: 'simImagen1',
                            type: 'rect',
                            rect: ['0', '0', '1024', '768', 'auto', 'auto']
                        },
                        {
                            id: 'simLetras',
                            symbolName: 'simLetras',
                            type: 'rect',
                            rect: ['0', '332', '1024', '136', 'auto', 'auto']
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
                    duration: 30750,
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
            "simImagen1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            id: 'imagen1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/imagen1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid5",
                            "left",
                            0,
                            1000,
                            "easeInOutCubic",
                            "${imagen1}",
                            '0px',
                            '-1076px'
                        ]
                    ]
                }
            },
            "simLetras": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '465px', '1024px', '57px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(35,35,35,1.00)']
                        },
                        {
                            rect: ['0px', '465px', '11px', '79px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(26,188,156,1.00)']
                        },
                        {
                            rect: ['266px', '476px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(244, 244, 244); font-size: 32px;\">Juan va de camino a la escuela</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['0px', '335px', '1024px', '109px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle3',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(35,35,35,1.00)']
                        },
                        {
                            rect: ['0px', '335px', '11px', '109px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle4',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(26,188,156,1.00)']
                        },
                        {
                            rect: ['54px', '344px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(235,235,235,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            id: 'Text2',
                            opacity: '1',
                            text: '<p style=\"margin: 0px; text-align: center;\">​Mientras camina, él no se da cuenta que su mochila se va abriendo,&nbsp;</p><p style=\"margin: 0px; text-align: center;\">por eso sus útiles escolares caen al suelo.</p>',
                            type: 'text'
                        },
                        {
                            rect: ['0px', '-637px', '1024px', '161px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle5',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(35,35,35,1.00)']
                        },
                        {
                            rect: ['0px', '-637px', '11px', '161px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle6',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(26,188,156,1.00)']
                        },
                        {
                            rect: ['25px', '-506px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(235,235,235,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            id: 'Text3',
                            opacity: '1',
                            text: '<p style=\"margin: 0px; text-align: center;\">​Ayuda a Juan a recoger sus útiles escolares, ubicando aquellos </p><p style=\"margin: 0px; text-align: center;\">elementos similares en cada canasta; al final cuenta los elementos y </p><p style=\"margin: 0px; text-align: center;\">escribe el dato en el cuadro de texto.</p><p style=\"margin: 0px; text-align: center;\"></p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1024px', '136px'],
                            overflow: 'visible'
                        }
                    }
                },
                timeline: {
                    duration: 30750,
                    autoPlay: true,
                    labels: {
                        "end": 4250,
                        "start1": 5250,
                        "end1": 9500,
                        "start2": 10509,
                        "end2": 30000
                    },
                    data: [
                        [
                            "eid145",
                            "top",
                            0,
                            1000,
                            "easeInQuad",
                            "${Rectangle2}",
                            '-447px',
                            '57px'
                        ],
                        [
                            "eid160",
                            "top",
                            1000,
                            2750,
                            "easeInQuad",
                            "${Rectangle2}",
                            '57px',
                            '361px'
                        ],
                        [
                            "eid174",
                            "top",
                            4250,
                            375,
                            "easeInQuad",
                            "${Rectangle2}",
                            '361px',
                            '273px'
                        ],
                        [
                            "eid177",
                            "top",
                            4625,
                            375,
                            "easeInQuad",
                            "${Rectangle2}",
                            '273px',
                            '469px'
                        ],
                        [
                            "eid249",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid237",
                            "top",
                            10509,
                            2664,
                            "easeInQuad",
                            "${Rectangle6}",
                            '-517px',
                            '31px'
                        ],
                        [
                            "eid238",
                            "top",
                            13173,
                            12827,
                            "easeInQuad",
                            "${Rectangle6}",
                            '31px',
                            '279px'
                        ],
                        [
                            "eid244",
                            "top",
                            30000,
                            250,
                            "easeInQuad",
                            "${Rectangle6}",
                            '279px',
                            '291px'
                        ],
                        [
                            "eid245",
                            "top",
                            30250,
                            500,
                            "easeInQuad",
                            "${Rectangle6}",
                            '291px',
                            '463px'
                        ],
                        [
                            "eid147",
                            "top",
                            0,
                            1000,
                            "easeInQuad",
                            "${Text}",
                            '-441px',
                            '68px'
                        ],
                        [
                            "eid161",
                            "top",
                            1000,
                            2750,
                            "easeInQuad",
                            "${Text}",
                            '68px',
                            '372px'
                        ],
                        [
                            "eid175",
                            "top",
                            4250,
                            375,
                            "easeInQuad",
                            "${Text}",
                            '372px',
                            '284px'
                        ],
                        [
                            "eid178",
                            "top",
                            4625,
                            375,
                            "easeInQuad",
                            "${Text}",
                            '284px',
                            '480px'
                        ],
                        [
                            "eid219",
                            "height",
                            5250,
                            0,
                            "easeInQuad",
                            "${Rectangle4}",
                            '109px',
                            '109px'
                        ],
                        [
                            "eid151",
                            "height",
                            1000,
                            0,
                            "easeInQuad",
                            "${Rectangle2}",
                            '79px',
                            '58px'
                        ],
                        [
                            "eid201",
                            "top",
                            5250,
                            1000,
                            "easeInQuad",
                            "${Rectangle4}",
                            '-441px',
                            '31px'
                        ],
                        [
                            "eid204",
                            "top",
                            6250,
                            2750,
                            "easeInQuad",
                            "${Rectangle4}",
                            '31px',
                            '335px'
                        ],
                        [
                            "eid207",
                            "top",
                            9500,
                            250,
                            "easeInQuad",
                            "${Rectangle4}",
                            '335px',
                            '291px'
                        ],
                        [
                            "eid210",
                            "top",
                            9750,
                            500,
                            "easeInQuad",
                            "${Rectangle4}",
                            '291px',
                            '463px'
                        ],
                        [
                            "eid203",
                            "top",
                            5250,
                            1000,
                            "easeInQuad",
                            "${Text2}",
                            '-432px',
                            '40px'
                        ],
                        [
                            "eid206",
                            "top",
                            6250,
                            2750,
                            "easeInQuad",
                            "${Text2}",
                            '40px',
                            '344px'
                        ],
                        [
                            "eid209",
                            "top",
                            9500,
                            250,
                            "easeInQuad",
                            "${Text2}",
                            '344px',
                            '300px'
                        ],
                        [
                            "eid212",
                            "top",
                            9750,
                            500,
                            "easeInQuad",
                            "${Text2}",
                            '300px',
                            '472px'
                        ],
                        [
                            "eid240",
                            "top",
                            10509,
                            2664,
                            "easeInQuad",
                            "${Rectangle5}",
                            '-517px',
                            '31px'
                        ],
                        [
                            "eid241",
                            "top",
                            13173,
                            12827,
                            "easeInQuad",
                            "${Rectangle5}",
                            '31px',
                            '279px'
                        ],
                        [
                            "eid246",
                            "top",
                            30000,
                            250,
                            "easeInQuad",
                            "${Rectangle5}",
                            '279px',
                            '291px'
                        ],
                        [
                            "eid247",
                            "top",
                            30250,
                            500,
                            "easeInQuad",
                            "${Rectangle5}",
                            '291px',
                            '463px'
                        ],
                        [
                            "eid202",
                            "top",
                            5250,
                            1000,
                            "easeInQuad",
                            "${Rectangle3}",
                            '-441px',
                            '31px'
                        ],
                        [
                            "eid205",
                            "top",
                            6250,
                            2750,
                            "easeInQuad",
                            "${Rectangle3}",
                            '31px',
                            '335px'
                        ],
                        [
                            "eid208",
                            "top",
                            9500,
                            250,
                            "easeInQuad",
                            "${Rectangle3}",
                            '335px',
                            '291px'
                        ],
                        [
                            "eid211",
                            "top",
                            9750,
                            500,
                            "easeInQuad",
                            "${Rectangle3}",
                            '291px',
                            '463px'
                        ],
                        [
                            "eid239",
                            "height",
                            10509,
                            0,
                            "easeInQuad",
                            "${Rectangle6}",
                            '161px',
                            '161px'
                        ],
                        [
                            "eid149",
                            "top",
                            0,
                            1000,
                            "easeInQuad",
                            "${Rectangle}",
                            '-447px',
                            '57px'
                        ],
                        [
                            "eid162",
                            "top",
                            1000,
                            2750,
                            "easeInQuad",
                            "${Rectangle}",
                            '57px',
                            '361px'
                        ],
                        [
                            "eid176",
                            "top",
                            4250,
                            375,
                            "easeInQuad",
                            "${Rectangle}",
                            '361px',
                            '273px'
                        ],
                        [
                            "eid179",
                            "top",
                            4625,
                            375,
                            "easeInQuad",
                            "${Rectangle}",
                            '273px',
                            '469px'
                        ],
                        [
                            "eid248",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '-506px',
                            '-506px'
                        ],
                        [
                            "eid235",
                            "top",
                            10509,
                            2664,
                            "easeInQuad",
                            "${Text3}",
                            '-508px',
                            '40px'
                        ],
                        [
                            "eid236",
                            "top",
                            13173,
                            12827,
                            "easeInQuad",
                            "${Text3}",
                            '40px',
                            '288px'
                        ],
                        [
                            "eid242",
                            "top",
                            30000,
                            250,
                            "easeInQuad",
                            "${Text3}",
                            '288px',
                            '300px'
                        ],
                        [
                            "eid243",
                            "top",
                            30250,
                            500,
                            "easeInQuad",
                            "${Text3}",
                            '300px',
                            '472px'
                        ]
                    ]
                }
            },
            "simImagen2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            id: 'imagen2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/imagen2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid30",
                            "left",
                            0,
                            1000,
                            "easeOutSine",
                            "${imagen2}",
                            '0px',
                            '1024px'
                        ]
                    ]
                }
            },
            "simImagen3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            id: 'imagen3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/imagen3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid35",
                            "top",
                            0,
                            1000,
                            "easeInQuart",
                            "${imagen3}",
                            '0px',
                            '798px'
                        ]
                    ]
                }
            },
            "simImagen4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            id: 'imagen4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/imagen4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid218",
                            "left",
                            0,
                            1000,
                            "easeInQuad",
                            "${imagen4}",
                            '0px',
                            '-1072px'
                        ]
                    ]
                }
            },
            "simImagen5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            id: 'imagen5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/imagen5.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid220",
                            "left",
                            0,
                            1000,
                            "easeInBack",
                            "${imagen5}",
                            '0px',
                            '1072px'
                        ]
                    ]
                }
            },
            "simImagen6": {
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
                            id: 'imagen6',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/imagen6.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid221",
                            "top",
                            0,
                            1000,
                            "easeInBack",
                            "${imagen6}",
                            '0px',
                            '-848px'
                        ]
                    ]
                }
            },
            "simNubes": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1024px', '194px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'image',
                            id: 'Nubes2',
                            rect: ['286px', '24px', '540px', '155px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Nubes.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Nubes2Copy',
                            rect: ['286px', '24px', '540px', '155px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Nubes.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '194px']
                        }
                    }
                },
                timeline: {
                    duration: 22864,
                    autoPlay: false,
                    data: [
                        [
                            "eid252",
                            "left",
                            0,
                            21518,
                            "linear",
                            "${Nubes2}",
                            '286px',
                            '-532px'
                        ],
                        [
                            "eid255",
                            "left",
                            21518,
                            1345,
                            "linear",
                            "${Nubes2}",
                            '-532px',
                            '-545px'
                        ],
                        [
                            "eid253",
                            "left",
                            2690,
                            20174,
                            "linear",
                            "${Nubes2Copy}",
                            '1006px',
                            '286px'
                        ]
                    ]
                }
            },
            "simDragDrop": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '938px', '702px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['-2px', '392px', '938px', '306px', 'auto', 'auto'],
                            userClass: 'drop_zone',
                            id: 'Rectangle3',
                            stroke: [2, 'rgb(0, 0, 0)', 'dashed'],
                            type: 'rect',
                            fill: ['rgba(184,184,184,0.82)']
                        },
                        {
                            rect: ['-547px', '423px', '116px', '156px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.8', '0.8']],
                            id: 'Pem25_102',
                            userClass: 'draggable',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_10.png', '0px', '0px']
                        },
                        {
                            rect: ['1009px', '381px', '130px', '169px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.8', '0.8']],
                            id: 'Pem25_112',
                            userClass: 'draggable',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_11.png', '0px', '0px']
                        },
                        {
                            rect: ['1045px', '586px', '274px', '90px', 'auto', 'auto'],
                            transform: [[], ['150'], [], ['0.6', '0.6']],
                            id: 'Pem25_3',
                            userClass: 'draggable',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_3.png', '0px', '0px']
                        },
                        {
                            rect: ['-330px', '594px', '226px', '108px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.6', '0.6']],
                            id: 'Pem25_4',
                            userClass: 'draggable',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_4.png', '0px', '0px']
                        },
                        {
                            rect: ['474px', '772px', '139px', '111px', 'auto', 'auto'],
                            id: 'Pem25_5',
                            userClass: 'draggable',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_5.png', '0px', '0px']
                        },
                        {
                            rect: ['-402px', '466px', '301px', '54px', 'auto', 'auto'],
                            transform: [[], ['60'], [], ['0.5', '0.5']],
                            id: 'Pem25_6',
                            userClass: '',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_6.png', '0px', '0px']
                        },
                        {
                            rect: ['1194px', '450px', '112px', '105px', 'auto', 'auto'],
                            id: 'Pem25_7',
                            userClass: 'draggable',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_7.png', '0px', '0px']
                        },
                        {
                            rect: ['430px', '882px', '133px', '96px', 'auto', 'auto'],
                            id: 'Pem25_8',
                            userClass: 'draggable',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_8.png', '0px', '0px']
                        },
                        {
                            rect: ['-505px', '598px', '112px', '99px', 'auto', 'auto'],
                            id: 'Pem25_9',
                            userClass: 'draggable',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_9.png', '0px', '0px']
                        },
                        {
                            rect: ['55px', '594px', '112px', '99px', 'auto', 'auto'],
                            userClass: 'draggable',
                            id: 'borrador1',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_9.png', '0px', '0px']
                        },
                        {
                            rect: ['430px', '550px', '133px', '96px', 'auto', 'auto'],
                            userClass: 'draggable',
                            id: 'borrador2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_8.png', '0px', '0px']
                        },
                        {
                            rect: ['798px', '450px', '112px', '105px', 'auto', 'auto'],
                            userClass: 'draggable',
                            id: 'borrador3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_7.png', '0px', '0px']
                        },
                        {
                            rect: ['158px', '462px', '301px', '54px', 'auto', 'auto'],
                            transform: [[], ['60'], [], ['0.5', '0.5']],
                            userClass: 'draggable',
                            id: 'lapiz1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_6.png', '0px', '0px']
                        },
                        {
                            rect: ['474px', '440px', '139px', '111px', 'auto', 'auto'],
                            userClass: 'draggable',
                            id: 'lapiz2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_5.png', '0px', '0px']
                        },
                        {
                            rect: ['230px', '590px', '226px', '108px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.6', '0.6']],
                            userClass: 'draggable',
                            id: 'lapiz3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_4.png', '0px', '0px']
                        },
                        {
                            rect: ['649px', '586px', '274px', '90px', 'auto', 'auto'],
                            transform: [[], ['150'], [], ['0.6', '0.6']],
                            userClass: 'draggable',
                            id: 'lapiz4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_3.png', '0px', '0px']
                        },
                        {
                            rect: ['13px', '419px', '116px', '156px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.8', '0.8']],
                            userClass: 'draggable',
                            id: 'libro1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_10.png', '0px', '0px']
                        },
                        {
                            rect: ['617px', '381px', '130px', '169px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.8', '0.8']],
                            userClass: 'draggable',
                            id: 'libro2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_11.png', '0px', '0px']
                        },
                        {
                            rect: ['321px', '-28px', '286px', '222px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'Pem25_1',
                            userClass: 'drop_zone',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_1.png', '0px', '0px']
                        },
                        {
                            rect: ['637px', '-32px', '292px', '228px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'Pem25_0',
                            userClass: 'drop_zone',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_0.png', '0px', '0px']
                        },
                        {
                            rect: ['18px', '-34px', '278px', '234px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'Pem25_2',
                            userClass: 'drop_zone',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem25_2.png', '0px', '0px']
                        },
                        {
                            rect: ['71px', '184px', '159px', '76px', 'auto', 'auto'],
                            id: 'divInput1',
                            stroke: [2, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(184,184,184,0.00)']
                        },
                        {
                            rect: ['386px', '184px', '159px', '76px', 'auto', 'auto'],
                            id: 'divInput2',
                            stroke: [2, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(184,184,184,0.00)']
                        },
                        {
                            rect: ['706px', '184px', '159px', '76px', 'auto', 'auto'],
                            id: 'divInput3',
                            stroke: [2, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(184,184,184,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '938px', '702px'],
                            overflow: 'visible'
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "start": 750
                    },
                    data: [
                        [
                            "eid287",
                            "left",
                            0,
                            500,
                            "easeInBack",
                            "${Pem25_6}",
                            '-402px',
                            '158px'
                        ],
                        [
                            "eid293",
                            "top",
                            0,
                            500,
                            "easeInBack",
                            "${Pem25_8}",
                            '882px',
                            '550px'
                        ],
                        [
                            "eid261",
                            "scaleX",
                            0,
                            500,
                            "easeInBack",
                            "${Pem25_1}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid348",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${lapiz1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid349",
                            "opacity",
                            750,
                            0,
                            "linear",
                            "${lapiz1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid315",
                            "opacity",
                            0,
                            0,
                            "easeInBack",
                            "${borrador3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid316",
                            "opacity",
                            750,
                            0,
                            "easeInBack",
                            "${borrador3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid313",
                            "opacity",
                            0,
                            0,
                            "easeInBack",
                            "${borrador2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid314",
                            "opacity",
                            750,
                            0,
                            "easeInBack",
                            "${borrador2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid273",
                            "left",
                            0,
                            500,
                            "easeInBack",
                            "${Pem25_3}",
                            '1045px',
                            '649px'
                        ],
                        [
                            "eid265",
                            "scaleX",
                            0,
                            500,
                            "easeInBack",
                            "${Pem25_2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid257",
                            "scaleX",
                            0,
                            500,
                            "easeInBack",
                            "${Pem25_0}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid259",
                            "scaleY",
                            0,
                            500,
                            "easeInBack",
                            "${Pem25_0}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid279",
                            "left",
                            0,
                            500,
                            "easeInBack",
                            "${Pem25_4}",
                            '-330px',
                            '230px'
                        ],
                        [
                            "eid267",
                            "scaleY",
                            0,
                            500,
                            "easeInBack",
                            "${Pem25_2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid325",
                            "opacity",
                            0,
                            0,
                            "easeInBack",
                            "${libro2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid326",
                            "opacity",
                            750,
                            0,
                            "easeInBack",
                            "${libro2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid263",
                            "scaleY",
                            0,
                            500,
                            "easeInBack",
                            "${Pem25_1}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid289",
                            "top",
                            0,
                            500,
                            "easeInBack",
                            "${Pem25_6}",
                            '466px',
                            '462px'
                        ],
                        [
                            "eid319",
                            "opacity",
                            0,
                            0,
                            "easeInBack",
                            "${lapiz2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid320",
                            "opacity",
                            750,
                            0,
                            "easeInBack",
                            "${lapiz2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid311",
                            "opacity",
                            0,
                            0,
                            "easeInBack",
                            "${borrador1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid312",
                            "opacity",
                            750,
                            0,
                            "easeInBack",
                            "${borrador1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid285",
                            "top",
                            0,
                            500,
                            "easeInBack",
                            "${Pem25_9}",
                            '598px',
                            '594px'
                        ],
                        [
                            "eid275",
                            "left",
                            0,
                            500,
                            "easeInBack",
                            "${Pem25_102}",
                            '-547px',
                            '13px'
                        ],
                        [
                            "eid281",
                            "top",
                            0,
                            500,
                            "easeInBack",
                            "${Pem25_4}",
                            '594px',
                            '590px'
                        ],
                        [
                            "eid309",
                            "opacity",
                            0,
                            0,
                            "easeInBack",
                            "${libro1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid310",
                            "opacity",
                            750,
                            0,
                            "easeInBack",
                            "${libro1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid321",
                            "opacity",
                            0,
                            0,
                            "easeInBack",
                            "${lapiz3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid322",
                            "opacity",
                            750,
                            0,
                            "easeInBack",
                            "${lapiz3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid323",
                            "opacity",
                            0,
                            0,
                            "easeInBack",
                            "${lapiz4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid324",
                            "opacity",
                            750,
                            0,
                            "easeInBack",
                            "${lapiz4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid283",
                            "left",
                            0,
                            500,
                            "easeInBack",
                            "${Pem25_9}",
                            '-505px',
                            '55px'
                        ],
                        [
                            "eid291",
                            "top",
                            0,
                            500,
                            "easeInBack",
                            "${Pem25_5}",
                            '772px',
                            '440px'
                        ],
                        [
                            "eid271",
                            "left",
                            0,
                            500,
                            "easeInBack",
                            "${Pem25_7}",
                            '1194px',
                            '798px'
                        ],
                        [
                            "eid269",
                            "left",
                            0,
                            500,
                            "easeInBack",
                            "${Pem25_112}",
                            '1009px',
                            '613px'
                        ],
                        [
                            "eid294",
                            "left",
                            500,
                            250,
                            "easeInQuart",
                            "${Pem25_112}",
                            '613px',
                            '617px'
                        ],
                        [
                            "eid277",
                            "top",
                            0,
                            500,
                            "easeInBack",
                            "${Pem25_102}",
                            '423px',
                            '419px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Pem25_edgeActions.js");
})("EDGE-172432891");
