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
            "../../cdn/bootbox.min.js",
            "../../cdn/bootstrap.min.js",
            "../../cdn/Draggable.min.js",
            "../../cdn/howler.min.js",
            "../../cdn/bootstrap.min.css",
            "../../cdn/TweenMax.min.js",
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
                            id: 'fondo',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo.png",'0px','0px']
                        },
                        {
                            id: 'container',
                            type: 'rect',
                            rect: ['0px', '131px', '970px', '637px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'simPayaso',
                            symbolName: 'simPayaso',
                            type: 'rect',
                            rect: ['826', '486', '207', '282', 'auto', 'auto']
                        },
                        {
                            id: 'simObj',
                            symbolName: 'simObj',
                            type: 'rect',
                            rect: ['0', '641', '809', '127', 'auto', 'auto']
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
                            id: 'backDel',
                            type: 'rect',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
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
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${backDel}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simObj": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '809px', '127px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            userClass: 'box',
                            id: 'simCaballo',
                            symbolName: 'simCaballo',
                            opacity: '0',
                            rect: ['-154px', '33px', '77', '53', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            userClass: 'box',
                            id: 'simCamion',
                            symbolName: 'simCamion',
                            opacity: '0',
                            rect: ['914px', '19px', '108', '69', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], ['-90']],
                            userClass: 'box',
                            id: 'simEnsalada',
                            symbolName: 'simEnsalada',
                            opacity: '0',
                            rect: ['346', '-120px', '71', '45', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            userClass: 'box',
                            id: 'simMesa',
                            symbolName: 'simMesa',
                            opacity: '0',
                            rect: ['-273px', '18px', '74', '35', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'simPez',
                            symbolName: 'simPez',
                            userClass: 'box',
                            rect: ['296', '184px', '57', '32', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            userClass: 'box',
                            id: 'simPollo',
                            symbolName: 'simPollo',
                            opacity: '0',
                            rect: ['-262px', '58px', '48', '58', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], ['180']],
                            userClass: 'box',
                            id: 'simRata2',
                            symbolName: 'simRata',
                            opacity: '0',
                            rect: ['517', '-113px', '55', '39', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            userClass: 'box',
                            id: 'simPapa',
                            symbolName: 'simPapa',
                            opacity: '0',
                            rect: ['825px', '37px', '38', '52', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'simCama',
                            symbolName: 'simCama',
                            userClass: 'box',
                            rect: ['476', '175px', '62', '48', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '809px', '127px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid120",
                            "left",
                            1000,
                            500,
                            "easeOutCubic",
                            "${simPapa}",
                            '825px',
                            '599px'
                        ],
                        [
                            "eid116",
                            "opacity",
                            500,
                            500,
                            "easeOutCubic",
                            "${simMesa}",
                            '0',
                            '1'
                        ],
                        [
                            "eid112",
                            "top",
                            500,
                            500,
                            "easeOutCubic",
                            "${simPollo}",
                            '58px',
                            '62px'
                        ],
                        [
                            "eid122",
                            "top",
                            1000,
                            500,
                            "easeOutCubic",
                            "${simPapa}",
                            '37px',
                            '36px'
                        ],
                        [
                            "eid61",
                            "rotateZ",
                            0,
                            500,
                            "easeOutCubic",
                            "${simRata2}",
                            '180deg',
                            '0deg'
                        ],
                        [
                            "eid128",
                            "opacity",
                            1000,
                            500,
                            "easeOutCubic",
                            "${simPapa}",
                            '0',
                            '1'
                        ],
                        [
                            "eid126",
                            "top",
                            1000,
                            500,
                            "easeOutCubic",
                            "${simCamion}",
                            '19px',
                            '18px'
                        ],
                        [
                            "eid134",
                            "opacity",
                            1500,
                            500,
                            "easeOutCubic",
                            "${simEnsalada}",
                            '0',
                            '1'
                        ],
                        [
                            "eid65",
                            "top",
                            500,
                            500,
                            "easeOutCubic",
                            "${simCaballo}",
                            '33px',
                            '37px'
                        ],
                        [
                            "eid57",
                            "top",
                            0,
                            500,
                            "easeOutCubic",
                            "${simRata2}",
                            '-113px',
                            '15px'
                        ],
                        [
                            "eid67",
                            "left",
                            500,
                            500,
                            "easeOutCubic",
                            "${simMesa}",
                            '-273px',
                            '48px'
                        ],
                        [
                            "eid76",
                            "top",
                            500,
                            500,
                            "easeOutCubic",
                            "${simMesa}",
                            '18px',
                            '22px'
                        ],
                        [
                            "eid132",
                            "top",
                            1500,
                            500,
                            "easeOutCubic",
                            "${simEnsalada}",
                            '-120px',
                            '18px'
                        ],
                        [
                            "eid124",
                            "left",
                            1000,
                            500,
                            "easeOutCubic",
                            "${simCamion}",
                            '914px',
                            '688px'
                        ],
                        [
                            "eid140",
                            "top",
                            2000,
                            500,
                            "easeOutElastic",
                            "${simCama}",
                            '175px',
                            '66px'
                        ],
                        [
                            "eid110",
                            "left",
                            500,
                            500,
                            "easeOutCubic",
                            "${simPollo}",
                            '-262px',
                            '59px'
                        ],
                        [
                            "eid59",
                            "opacity",
                            0,
                            500,
                            "easeOutCubic",
                            "${simRata2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid138",
                            "top",
                            2000,
                            500,
                            "easeOutElastic",
                            "${simPez}",
                            '184px',
                            '75px'
                        ],
                        [
                            "eid136",
                            "rotateZ",
                            1500,
                            500,
                            "easeOutCubic",
                            "${simEnsalada}",
                            '-90deg',
                            '0deg'
                        ],
                        [
                            "eid130",
                            "opacity",
                            1000,
                            500,
                            "easeOutCubic",
                            "${simCamion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid63",
                            "left",
                            500,
                            500,
                            "easeOutCubic",
                            "${simCaballo}",
                            '-154px',
                            '167px'
                        ],
                        [
                            "eid118",
                            "opacity",
                            500,
                            500,
                            "easeOutCubic",
                            "${simPollo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid114",
                            "opacity",
                            500,
                            500,
                            "easeOutCubic",
                            "${simCaballo}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simPayaso": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['269px', '0px', '207px', '282px', 'auto', 'auto'],
                            id: 'payaso',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/payaso.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '207px', '282px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid3",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${payaso}",
                            '269px',
                            '0px'
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
                            fill: ['rgba(0,0,0,0)', '../../images/atras_4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'atras_4_over',
                            opacity: '0',
                            rect: ['0px', '0px', '62px', '62px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '../../images/atras_4_over.png', '0px', '0px']
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
                            fill: ['rgba(0,0,0,0)', '../../images/menu_1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'menu_1_over',
                            opacity: '0',
                            rect: ['1px', '0px', '59px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '../../images/menu_1_over.png', '0px', '0px']
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
                            fill: ['rgba(0,0,0,0)', '../../images/sonido_3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'sonido_3_over',
                            opacity: '0',
                            rect: ['0px', '0px', '64px', '62px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '../../images/sonido_3_over.png', '0px', '0px']
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
                            rect: ['1px', '0px', '61px', '60px', 'auto', 'auto'],
                            id: 'instruccion_2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', '../../images/instruccion_2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'instruccion_2_over',
                            opacity: '0',
                            rect: ['1px', '0px', '61px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', '../../images/instruccion_2_over.png', '0px', '0px']
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
                            rect: ['9px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Intrucciones</p>',
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
                            rect: ['41px', '34px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255);\">Anímate a formar conjuntos buscando elementos que</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255);\"> coincidan. Arrastra las imágenes al interior de los aros.</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: lato, sans-serif; color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: lato, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\"></span></p>',
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
                    duration: 4000,
                    autoPlay: true,
                    labels: {
                        "end": 4000
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
                            1750,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "top",
                            1750,
                            1150,
                            "easeOutElastic",
                            "${Text2}",
                            '34px',
                            '31px'
                        ],
                        [
                            "eid24",
                            "width",
                            1000,
                            500,
                            "easeInQuad",
                            "${Rectangle}",
                            '13px',
                            '686px'
                        ],
                        [
                            "eid35",
                            "left",
                            1750,
                            1150,
                            "easeOutElastic",
                            "${Text2}",
                            '-508px',
                            '41px'
                        ],
                        [
                            "eid26",
                            "width",
                            1000,
                            500,
                            "easeInQuad",
                            "${Rectangle2}",
                            '13px',
                            '686px'
                        ]
                    ]
                }
            },
            "simRata": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '55px', '39px', 'auto', 'auto'],
                            id: 'rata',
                            userClass: '',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/rata.png', '0px', '0px']
                        },
                        {
                            rect: ['-44', '-69px', '143', '65', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                rect: ['28px', '18px', '63px', '29px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                clip: 'rect(7.273221015930176px 63px 29px 35.55748748779297px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['0px', '28px', '143px', '29px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                rect: ['39px', '25px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Ratón</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '37px', '37px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 500
                    },
                    data: [
                        [
                            "eid146",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid147",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${Group}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "simPollo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '58px', 'auto', 'auto'],
                            id: 'pollo',
                            userClass: '',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pollo.png', '0px', '0px']
                        },
                        {
                            rect: ['-71px', '-32px', '143', '65', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '0',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['28px', '18px', '63px', '29px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'RectangleCopy3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                clip: 'rect(7.273221015930176px 63px 29px 35.55748748779297px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['0px', '28px', '143px', '29px', 'auto', 'auto'],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                rect: ['43px', '25px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Pollo</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '48px', '58px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 500
                    },
                    data: [
                        [
                            "eid167",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '-71px',
                            '-71px'
                        ],
                        [
                            "eid165",
                            "left",
                            500,
                            0,
                            "linear",
                            "${Group}",
                            '-71px',
                            '-44px'
                        ],
                        [
                            "eid168",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '-32px',
                            '-32px'
                        ],
                        [
                            "eid166",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Group}",
                            '-32px',
                            '-69px'
                        ],
                        [
                            "eid170",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid172",
                            "scaleY",
                            500,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid149",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid148",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid169",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid171",
                            "scaleX",
                            500,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simPez": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '57px', '32px', 'auto', 'auto'],
                            id: 'pez',
                            userClass: '',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pez.png', '0px', '0px']
                        },
                        {
                            rect: ['-71px', '-32px', '143', '65', 'auto', 'auto'],
                            id: 'GroupCopy',
                            opacity: '0',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['28px', '18px', '63px', '29px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'RectangleCopy5',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                clip: 'rect(7.273221015930176px 63px 29px 35.55748748779297px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['0px', '28px', '143px', '29px', 'auto', 'auto'],
                                id: 'RectangleCopy4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                rect: ['23px', '24px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Pescado</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '57px', '32px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 500
                    },
                    data: [
                        [
                            "eid178",
                            "top",
                            0,
                            0,
                            "linear",
                            "${GroupCopy}",
                            '-32px',
                            '-32px'
                        ],
                        [
                            "eid174",
                            "top",
                            500,
                            0,
                            "linear",
                            "${GroupCopy}",
                            '-32px',
                            '-69px'
                        ],
                        [
                            "eid177",
                            "left",
                            0,
                            0,
                            "linear",
                            "${GroupCopy}",
                            '-71px',
                            '-71px'
                        ],
                        [
                            "eid173",
                            "left",
                            500,
                            0,
                            "linear",
                            "${GroupCopy}",
                            '-71px',
                            '-44px'
                        ],
                        [
                            "eid150",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${GroupCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid151",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${GroupCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid180",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${GroupCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid176",
                            "scaleY",
                            500,
                            0,
                            "linear",
                            "${GroupCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid179",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${GroupCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid175",
                            "scaleX",
                            500,
                            0,
                            "linear",
                            "${GroupCopy}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simPapa": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '38px', '52px', 'auto', 'auto'],
                            userClass: '',
                            id: 'papa',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/papa.png', '0px', '0px']
                        },
                        {
                            rect: ['-71px', '-32px', '143', '65', 'auto', 'auto'],
                            id: 'GroupCopy2',
                            opacity: '0',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['28px', '18px', '63px', '29px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'RectangleCopy7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                clip: 'rect(7.273221015930176px 63px 29px 35.55748748779297px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['0px', '28px', '143px', '29px', 'auto', 'auto'],
                                id: 'RectangleCopy6',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                rect: ['36px', '24px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy2',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Papas</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '38px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 500
                    },
                    data: [
                        [
                            "eid186",
                            "top",
                            0,
                            0,
                            "linear",
                            "${GroupCopy2}",
                            '-32px',
                            '-32px'
                        ],
                        [
                            "eid182",
                            "top",
                            500,
                            0,
                            "linear",
                            "${GroupCopy2}",
                            '-32px',
                            '-69px'
                        ],
                        [
                            "eid187",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${GroupCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid183",
                            "scaleX",
                            500,
                            0,
                            "linear",
                            "${GroupCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid185",
                            "left",
                            0,
                            0,
                            "linear",
                            "${GroupCopy2}",
                            '-71px',
                            '-71px'
                        ],
                        [
                            "eid181",
                            "left",
                            500,
                            0,
                            "linear",
                            "${GroupCopy2}",
                            '-71px',
                            '-44px'
                        ],
                        [
                            "eid188",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${GroupCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid184",
                            "scaleY",
                            500,
                            0,
                            "linear",
                            "${GroupCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid156",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${GroupCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid157",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${GroupCopy2}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "simMesa": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '74px', '35px', 'auto', 'auto'],
                            userClass: '',
                            id: 'mesa',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mesa.png', '0px', '0px']
                        },
                        {
                            rect: ['-71px', '-32px', '143', '65', 'auto', 'auto'],
                            id: 'GroupCopy3',
                            opacity: '0',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['28px', '18px', '63px', '29px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'RectangleCopy9',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                clip: 'rect(7.273221015930176px 63px 29px 35.55748748779297px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['0px', '28px', '143px', '29px', 'auto', 'auto'],
                                id: 'RectangleCopy8',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                rect: ['42px', '24px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Mesa</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '74px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 500
                    },
                    data: [
                        [
                            "eid197",
                            "left",
                            0,
                            0,
                            "linear",
                            "${GroupCopy3}",
                            '-71px',
                            '-71px'
                        ],
                        [
                            "eid192",
                            "left",
                            500,
                            0,
                            "linear",
                            "${GroupCopy3}",
                            '-71px',
                            '-44px'
                        ],
                        [
                            "eid158",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${GroupCopy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid159",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${GroupCopy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid195",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${GroupCopy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid193",
                            "scaleX",
                            500,
                            0,
                            "linear",
                            "${GroupCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid198",
                            "top",
                            0,
                            0,
                            "linear",
                            "${GroupCopy3}",
                            '-32px',
                            '-32px'
                        ],
                        [
                            "eid191",
                            "top",
                            500,
                            0,
                            "linear",
                            "${GroupCopy3}",
                            '-32px',
                            '-69px'
                        ],
                        [
                            "eid196",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${GroupCopy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid194",
                            "scaleY",
                            500,
                            0,
                            "linear",
                            "${GroupCopy3}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simEnsalada": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '71px', '45px', 'auto', 'auto'],
                            userClass: '',
                            id: 'enslada',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/enslada.png', '0px', '0px']
                        },
                        {
                            rect: ['-71px', '-32px', '143', '65', 'auto', 'auto'],
                            id: 'GroupCopy4',
                            opacity: '0',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['28px', '18px', '63px', '29px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'RectangleCopy11',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                clip: 'rect(7.273221015930176px 63px 29px 35.55748748779297px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['0px', '28px', '143px', '29px', 'auto', 'auto'],
                                id: 'RectangleCopy10',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                rect: ['23px', '24px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy4',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Ensalada</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '71px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 500
                    },
                    data: [
                        [
                            "eid160",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${GroupCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid161",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${GroupCopy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid203",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${GroupCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid201",
                            "scaleX",
                            500,
                            0,
                            "linear",
                            "${GroupCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid206",
                            "top",
                            0,
                            0,
                            "linear",
                            "${GroupCopy4}",
                            '-32px',
                            '-32px'
                        ],
                        [
                            "eid200",
                            "top",
                            500,
                            0,
                            "linear",
                            "${GroupCopy4}",
                            '-32px',
                            '-69px'
                        ],
                        [
                            "eid204",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${GroupCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid202",
                            "scaleY",
                            500,
                            0,
                            "linear",
                            "${GroupCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid205",
                            "left",
                            0,
                            0,
                            "linear",
                            "${GroupCopy4}",
                            '-71px',
                            '-71px'
                        ],
                        [
                            "eid199",
                            "left",
                            500,
                            0,
                            "linear",
                            "${GroupCopy4}",
                            '-71px',
                            '-44px'
                        ]
                    ]
                }
            },
            "simCamion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '108px', '69px', 'auto', 'auto'],
                            userClass: '',
                            id: 'camion',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/camion.png', '0px', '0px']
                        },
                        {
                            rect: ['-71px', '-32px', '143', '65', 'auto', 'auto'],
                            id: 'GroupCopy6',
                            opacity: '0',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['28px', '18px', '63px', '29px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'RectangleCopy15',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                clip: 'rect(7.273221015930176px 63px 29px 35.55748748779297px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['0px', '28px', '143px', '29px', 'auto', 'auto'],
                                id: 'RectangleCopy14',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                rect: ['27px', '24px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy6',
                                text: '<p style=\"margin: 0px;\">​<font color=\"#ffffff\">Camión</font></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '108px', '69px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 500
                    },
                    data: [
                        [
                            "eid233",
                            "left",
                            0,
                            0,
                            "linear",
                            "${GroupCopy6}",
                            '-71px',
                            '-71px'
                        ],
                        [
                            "eid227",
                            "left",
                            500,
                            0,
                            "linear",
                            "${GroupCopy6}",
                            '-71px',
                            '-18px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${GroupCopy6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid229",
                            "scaleX",
                            500,
                            0,
                            "linear",
                            "${GroupCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${GroupCopy6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid230",
                            "scaleY",
                            500,
                            0,
                            "linear",
                            "${GroupCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid207",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${GroupCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "top",
                            0,
                            0,
                            "linear",
                            "${GroupCopy6}",
                            '-32px',
                            '-32px'
                        ],
                        [
                            "eid228",
                            "top",
                            500,
                            0,
                            "linear",
                            "${GroupCopy6}",
                            '-32px',
                            '-68px'
                        ]
                    ]
                }
            },
            "simCama": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '62px', '48px', 'auto', 'auto'],
                            id: 'cama',
                            userClass: '',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cama.png', '0px', '0px']
                        },
                        {
                            rect: ['-71px', '-32px', '143', '65', 'auto', 'auto'],
                            id: 'GroupCopy7',
                            opacity: '0',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['28px', '18px', '63px', '29px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'RectangleCopy17',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                clip: 'rect(7.273221015930176px 63px 29px 35.55748748779297px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['0px', '28px', '143px', '29px', 'auto', 'auto'],
                                id: 'RectangleCopy16',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                rect: ['39px', '24px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy7',
                                text: '<p style=\"margin: 0px;\">​<font color=\"#ffffff\">Cama</font></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '62px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 500
                    },
                    data: [
                        [
                            "eid226",
                            "top",
                            0,
                            0,
                            "linear",
                            "${GroupCopy7}",
                            '-32px',
                            '-32px'
                        ],
                        [
                            "eid220",
                            "top",
                            500,
                            0,
                            "linear",
                            "${GroupCopy7}",
                            '-32px',
                            '-70px'
                        ],
                        [
                            "eid223",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${GroupCopy7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid221",
                            "scaleX",
                            500,
                            0,
                            "linear",
                            "${GroupCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid225",
                            "left",
                            0,
                            0,
                            "linear",
                            "${GroupCopy7}",
                            '-71px',
                            '-71px'
                        ],
                        [
                            "eid219",
                            "left",
                            500,
                            0,
                            "linear",
                            "${GroupCopy7}",
                            '-71px',
                            '-39px'
                        ],
                        [
                            "eid209",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${GroupCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid224",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${GroupCopy7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid222",
                            "scaleY",
                            500,
                            0,
                            "linear",
                            "${GroupCopy7}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simCaballo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '77px', '53px', 'auto', 'auto'],
                            userClass: '',
                            id: 'caballo',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/caballo.png', '0px', '0px']
                        },
                        {
                            rect: ['-71px', '-32px', '143', '65', 'auto', 'auto'],
                            id: 'GroupCopy8',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                rect: ['28px', '18px', '63px', '29px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'RectangleCopy19',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                clip: 'rect(7.273221015930176px 63px 29px 35.55748748779297px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['0px', '28px', '143px', '29px', 'auto', 'auto'],
                                id: 'RectangleCopy18',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                rect: ['29px', '24px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy8',
                                text: '<p style=\"margin: 0px;\">​<font color=\"#ffffff\">Caballo</font></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '77px', '53px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 500
                    },
                    data: [
                        [
                            "eid215",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${GroupCopy8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid218",
                            "scaleY",
                            500,
                            0,
                            "linear",
                            "${GroupCopy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid210",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${GroupCopy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid217",
                            "top",
                            0,
                            0,
                            "linear",
                            "${GroupCopy8}",
                            '-32px',
                            '-32px'
                        ],
                        [
                            "eid212",
                            "top",
                            500,
                            0,
                            "linear",
                            "${GroupCopy8}",
                            '-32px',
                            '-70px'
                        ],
                        [
                            "eid214",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${GroupCopy8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid213",
                            "scaleX",
                            500,
                            0,
                            "linear",
                            "${GroupCopy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid216",
                            "left",
                            0,
                            0,
                            "linear",
                            "${GroupCopy8}",
                            '-71px',
                            '-71px'
                        ],
                        [
                            "eid211",
                            "left",
                            500,
                            0,
                            "linear",
                            "${GroupCopy8}",
                            '-71px',
                            '-39px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Pem38_edgeActions.js");
})("EDGE-135751845");
