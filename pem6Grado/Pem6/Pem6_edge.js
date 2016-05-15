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
            "../../cdn/jquery.sBubble-0.1.1.css",
            "../../cdn/jquery.sBubble-0.1.1.js",
            "../../cdn/jquery-ui.js",
            "../../cdn/jquery.ui.touch-punch.min.js",
            "../../cdn/mycss.css",
            "../../cdn/sass/sassAnimation.css",
            "../../cdn/getColorModal.js",
            "../../cdn/jss.min.js",
            js+"shine.css"
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
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"back.png",'0px','0px']
                        },
                        {
                            id: 'sun',
                            type: 'image',
                            rect: ['64px', '0px', '895px', '449px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sun.png",'0px','0px']
                        },
                        {
                            id: 'simCloud',
                            symbolName: 'simCloud',
                            type: 'rect',
                            rect: ['733', '51', '286', '189', 'auto', 'auto']
                        },
                        {
                            id: 'simTrain',
                            symbolName: 'simTrain',
                            type: 'rect',
                            rect: ['0', '338', '1024', '423', 'auto', 'auto']
                        },
                        {
                            id: 'simLabel',
                            symbolName: 'simLabel',
                            type: 'rect',
                            rect: ['73px', '330px', '699', '50', 'auto', 'auto']
                        },
                        {
                            id: 'simTooltip',
                            symbolName: 'simTooltip',
                            type: 'rect',
                            rect: ['556', '253px', '258', '50', 'auto', 'auto']
                        },
                        {
                            id: 'next',
                            type: 'rect',
                            rect: ['820px', '355px', '190px', '75px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'nextCopy',
                            type: 'rect',
                            rect: ['833px', '368px', '143px', '50px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'container',
                            type: 'rect',
                            rect: ['89px', '35px', '731px', '286px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
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
                        },
                        {
                            id: 'effect',
                            type: 'rect',
                            rect: ['2px', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '768px', 'auto', 'auto'],
                            sizeRange: ['320px','1920px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 3250,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${effect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid111",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${effect}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid5",
                            "top",
                            1000,
                            750,
                            "easeInOutCirc",
                            "${sun}",
                            '-449px',
                            '0px'
                        ],
                        [
                            "eid4",
                            "left",
                            1000,
                            750,
                            "easeInOutCirc",
                            "${sun}",
                            '64px',
                            '65px'
                        ]
                    ]
                }
            },
            "simCloud": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-1633px', '0px', '286px', '189px', 'auto', 'auto'],
                            id: 'nube',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nube.png', '0px', '0px']
                        },
                        {
                            rect: ['-702px', '0px', '286px', '189px', 'auto', 'auto'],
                            id: 'nubeCopy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nube.png', '0px', '0px']
                        },
                        {
                            rect: ['-1158px', '0px', '286px', '189px', 'auto', 'auto'],
                            id: 'nubeCopy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nube.png', '0px', '0px']
                        },
                        {
                            rect: ['-202px', '0px', '286px', '189px', 'auto', 'auto'],
                            id: 'nubeCopy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nube.png', '0px', '0px']
                        },
                        {
                            rect: ['1779px', '0px', '286px', '189px', 'auto', 'auto'],
                            id: 'nubeCopy4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nube.png', '0px', '0px']
                        },
                        {
                            rect: ['-1551px', '0px', '286px', '189px', 'auto', 'auto'],
                            id: 'nubeCopy6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nube.png', '0px', '0px']
                        },
                        {
                            rect: ['-1051px', '0px', '286px', '189px', 'auto', 'auto'],
                            id: 'nubeCopy5',
                            type: 'image',
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
                    duration: 72500,
                    autoPlay: false,
                    labels: {
                        "start": 43752
                    },
                    data: [
                        [
                            "eid18",
                            "left",
                            0,
                            62500,
                            "linear",
                            "${nubeCopy6}",
                            '1279px',
                            '-1551px'
                        ],
                        [
                            "eid16",
                            "left",
                            0,
                            45000,
                            "linear",
                            "${nube}",
                            '298px',
                            '-1633px'
                        ],
                        [
                            "eid17",
                            "left",
                            0,
                            62500,
                            "linear",
                            "${nubeCopy5}",
                            '1779px',
                            '-1051px'
                        ],
                        [
                            "eid15",
                            "left",
                            0,
                            45000,
                            "linear",
                            "${nubeCopy2}",
                            '773px',
                            '-1158px'
                        ],
                        [
                            "eid23",
                            "left",
                            27500,
                            45000,
                            "linear",
                            "${nubeCopy}",
                            '773px',
                            '-702px'
                        ],
                        [
                            "eid24",
                            "left",
                            30000,
                            42500,
                            "linear",
                            "${nubeCopy3}",
                            '1279px',
                            '-202px'
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
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['0px', '0px', '64px', '246px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
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
                            type: 'rect',
                            id: 'fondo',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '64px', '60px', 'auto', 'auto'],
                            fill: ['rgba(243,243,243,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'puntaLarga',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['64px', '0px', '4px', '60px', 'auto', 'auto'],
                            fill: ['rgba(26,188,156,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'punta',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['64px', '0px', '4px', '60px', 'auto', 'auto'],
                            fill: ['rgba(22,160,133,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '62px', '62px', 'auto', 'auto'],
                            id: 'atras_4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/atras_4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'atras_4_over',
                            opacity: '0',
                            rect: ['0px', '0px', '62px', '62px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/atras_4_over.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '64px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'invisibleRectangulo',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(26,188,156,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text2',
                            opacity: '1',
                            rect: ['-23px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Ir al Menú Anterior</p>',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], [], [], ['0', '0']]
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
                            type: 'rect',
                            id: 'fondo',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '64px', '60px', 'auto', 'auto'],
                            fill: ['rgba(243,243,243,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'puntaLarga',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['64px', '0px', '4px', '60px', 'auto', 'auto'],
                            fill: ['rgba(26,188,156,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'punta',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['64px', '0px', '4px', '60px', 'auto', 'auto'],
                            fill: ['rgba(22,160,133,1.00)']
                        },
                        {
                            rect: ['1px', '0px', '59px', '60px', 'auto', 'auto'],
                            id: 'menu_1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/menu_1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'menu_1_over',
                            opacity: '0',
                            rect: ['1px', '0px', '59px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/menu_1_over.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '64px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'invisibleRectangulo',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(26,188,156,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text2',
                            opacity: '0',
                            rect: ['-26px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Ir al Menú Principal</p>',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], [], [], ['0', '0']]
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
                            type: 'rect',
                            id: 'fondo',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '64px', '60px', 'auto', 'auto'],
                            fill: ['rgba(243,243,243,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'puntaLarga',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['64px', '0px', '4px', '60px', 'auto', 'auto'],
                            fill: ['rgba(26,188,156,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'punta',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['64px', '0px', '4px', '60px', 'auto', 'auto'],
                            fill: ['rgba(22,160,133,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '64px', '62px', 'auto', 'auto'],
                            id: 'sonido_3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sonido_3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'sonido_3_over',
                            opacity: '0',
                            rect: ['0px', '0px', '64px', '62px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sonido_3_over.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '64px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'invisibleRectangulo',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(26,188,156,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text2',
                            opacity: '0',
                            rect: ['71px', '17px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Encender/Apagar Sonido</p>',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], [], [], ['0', '0']]
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
                            fill: ['rgba(0,0,0,0)', 'images/instruccion_2.png', '0px', '0px']
                        },
                        {
                            rect: ['1px', '0px', '61px', '60px', 'auto', 'auto'],
                            id: 'instruccion_2_over',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/instruccion_2_over.png', '0px', '0px']
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
                            rect: ['12px', '6px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            opacity: '1',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); font-weight: 300;\">¡Necesitamos tu ayuda!</span><span style=\"font-weight: 300;\">.</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-weight: 300;\">​</span><span style=\"color: rgb(255, 255, 255); font-weight: 300;\">¿Qué pasajera o pasajero debe de abordar el tren?</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255); font-weight: 300;\">​Arrastra la imagen y escribe su nombre en el cuadro de texto.</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: lato, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\"></span></p>'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '686px', '135px']
                        }
                    }
                },
                timeline: {
                    duration: 3250,
                    autoPlay: true,
                    labels: {
                        "end": 3250
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
                            1000,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "top",
                            1000,
                            1150,
                            "easeOutElastic",
                            "${Text2}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid24",
                            "width",
                            250,
                            500,
                            "easeInQuad",
                            "${Rectangle}",
                            '13px',
                            '686px'
                        ],
                        [
                            "eid35",
                            "left",
                            1000,
                            1150,
                            "easeOutElastic",
                            "${Text2}",
                            '-742px',
                            '12px'
                        ],
                        [
                            "eid26",
                            "width",
                            250,
                            500,
                            "easeInQuad",
                            "${Rectangle2}",
                            '13px',
                            '686px'
                        ]
                    ]
                }
            },
            "simTrain": {
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
                            id: 'trainHead',
                            rect: ['823px', '103px', '571px', '304px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/trainHead.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'train',
                            rect: ['14px', '50px', '833px', '336px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/train.png', '0px', '0px']
                        },
                        {
                            rect: ['624px', '103px', '124px', '139px', 'auto', 'auto'],
                            userClass: '',
                            id: 'cuadroInte',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['87px', '103px', '124px', '139px', 'auto', 'auto'],
                            userClass: 'portrait',
                            id: 'portrait1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['265px', '103px', '124px', '139px', 'auto', 'auto'],
                            userClass: 'portrait',
                            id: 'portrait2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['445px', '103px', '124px', '139px', 'auto', 'auto'],
                            userClass: 'portrait',
                            id: 'portrait3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['625px', '103px', '124px', '139px', 'auto', 'auto'],
                            userClass: 'portrait',
                            id: 'portrait4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '423px']
                        }
                    }
                },
                timeline: {
                    duration: 10500,
                    autoPlay: false,
                    labels: {
                        "endTrain": 6000
                    },
                    data: [
                        [
                            "eid34",
                            "left",
                            0,
                            4321,
                            "linear",
                            "${trainHead}",
                            '-536px',
                            '760px'
                        ],
                        [
                            "eid38",
                            "left",
                            4321,
                            1179,
                            "easeOutElastic",
                            "${trainHead}",
                            '760px',
                            '823px'
                        ],
                        [
                            "eid113",
                            "left",
                            6000,
                            4500,
                            "linear",
                            "${trainHead}",
                            '823px',
                            '1907px'
                        ],
                        [
                            "eid33",
                            "left",
                            0,
                            4321,
                            "linear",
                            "${train}",
                            '-1344px',
                            '-48px'
                        ],
                        [
                            "eid36",
                            "left",
                            4321,
                            1179,
                            "easeOutElastic",
                            "${train}",
                            '-48px',
                            '14px'
                        ],
                        [
                            "eid112",
                            "left",
                            6000,
                            4500,
                            "linear",
                            "${train}",
                            '14px',
                            '1098px'
                        ]
                    ]
                }
            },
            "simLabel": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-1px', '-2px', '175px', '50px', 'auto', 'auto'],
                            userClass: 'labelClass',
                            id: 'text1',
                            stroke: [1, 'rgb(0, 0, 0)', 'dashed'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.82)']
                        },
                        {
                            rect: ['174px', '-2px', '175px', '50px', 'auto', 'auto'],
                            userClass: 'labelClass',
                            id: 'text2',
                            stroke: [1, 'rgb(0, 0, 0)', 'dashed'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.82)']
                        },
                        {
                            rect: ['349px', '-2px', '175px', '50px', 'auto', 'auto'],
                            userClass: 'labelClass',
                            id: 'text3',
                            stroke: [1, 'rgb(0, 0, 0)', 'dashed'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.82)']
                        },
                        {
                            rect: ['524px', '-2px', '175px', '50px', 'auto', 'auto'],
                            id: 'text4',
                            stroke: [1, 'rgb(0, 0, 0)', 'dashed'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.82)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '699px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "simTooltip": {
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
                            rect: ['0px', '0px', '262', '71', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['115px', '11px', '22px', '35px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(43,103,147,1.00)']
                            },
                            {
                                rect: ['40px', '0px', '162px', '36px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [2, 'rgba(43,103,147,1.00)', 'none'],
                                type: 'rect',
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">¡Escribe aquí!</span></p>',
                                type: 'text',
                                rect: ['58px', '0px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '258px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 2400,
                    autoPlay: false,
                    data: [
                        [
                            "eid47",
                            "top",
                            0,
                            400,
                            "linear",
                            "${Group}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid48",
                            "top",
                            400,
                            400,
                            "linear",
                            "${Group}",
                            '20px',
                            '0px'
                        ],
                        [
                            "eid49",
                            "top",
                            800,
                            400,
                            "linear",
                            "${Group}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid50",
                            "top",
                            1200,
                            400,
                            "linear",
                            "${Group}",
                            '20px',
                            '0px'
                        ],
                        [
                            "eid51",
                            "top",
                            1600,
                            400,
                            "linear",
                            "${Group}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid52",
                            "top",
                            2000,
                            400,
                            "linear",
                            "${Group}",
                            '20px',
                            '0px'
                        ]
                    ]
                }
            },
            "simDrag": {
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '699px', '232px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            userClass: 'box',
                            rect: ['27px', '69px', '124px', '139px', 'auto', 'auto'],
                            id: 'portraitDrag1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,0.00)']
                        },
                        {
                            userClass: 'box',
                            rect: ['203px', '-1px', '124px', '139px', 'auto', 'auto'],
                            id: 'portraitDrag2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,0.00)']
                        },
                        {
                            userClass: 'box',
                            rect: ['382px', '82px', '124px', '139px', 'auto', 'auto'],
                            id: 'portraitDrag3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,0.00)']
                        },
                        {
                            userClass: 'box',
                            rect: ['569px', '-1px', '124px', '139px', 'auto', 'auto'],
                            id: 'portraitDrag4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(34,34,34,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '699px', '232px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid117",
                            "left",
                            0,
                            0,
                            "linear",
                            "${portraitDrag1}",
                            '27px',
                            '27px'
                        ],
                        [
                            "eid123",
                            "left",
                            0,
                            0,
                            "linear",
                            "${portraitDrag2}",
                            '203px',
                            '203px'
                        ],
                        [
                            "eid58",
                            "top",
                            0,
                            0,
                            "linear",
                            "${portraitDrag3}",
                            '82px',
                            '82px'
                        ],
                        [
                            "eid63",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(255,255,255,0.00)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid56",
                            "top",
                            0,
                            0,
                            "linear",
                            "${portraitDrag1}",
                            '69px',
                            '69px'
                        ],
                        [
                            "eid119",
                            "top",
                            0,
                            0,
                            "linear",
                            "${portraitDrag2}",
                            '-1px',
                            '-1px'
                        ],
                        [
                            "eid125",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${portraitDrag4}",
                            'rgba(34,34,34,0.00)',
                            'rgba(34,34,34,0.00)'
                        ],
                        [
                            "eid126",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${portraitDrag1}",
                            'rgba(34,34,34,0.00)',
                            'rgba(34,34,34,0.00)'
                        ],
                        [
                            "eid128",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${portraitDrag2}",
                            'rgba(34,34,34,0.00)',
                            'rgba(34,34,34,0.00)'
                        ],
                        [
                            "eid122",
                            "left",
                            0,
                            0,
                            "linear",
                            "${portraitDrag3}",
                            '382px',
                            '382px'
                        ],
                        [
                            "eid127",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${portraitDrag3}",
                            'rgba(34,34,34,0.00)',
                            'rgba(34,34,34,0.00)'
                        ],
                        [
                            "eid124",
                            "left",
                            0,
                            0,
                            "linear",
                            "${portraitDrag4}",
                            '569px',
                            '569px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Pem6_edgeActions.js");
})("EDGE-250268");
