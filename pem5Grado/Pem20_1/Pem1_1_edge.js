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
                            id: 'cielo',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cielo.png",'0px','0px']
                        },
                        {
                            id: 'simNube',
                            symbolName: 'simNube',
                            type: 'rect',
                            rect: ['530px', '110px', '1024', '213', 'auto', 'auto']
                        },
                        {
                            id: 'fondo',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo.png",'0px','0px']
                        },
                        {
                            id: 'container',
                            type: 'rect',
                            rect: ['99px', '34px', '883px', '655px', 'auto', 'auto'],
                            fill: ["rgba(35,35,35,0.00)"],
                            stroke: [1,"rgb(22, 160, 133)","none"]
                        },
                        {
                            id: 'simAlimentos',
                            symbolName: 'simAlimentos',
                            type: 'rect',
                            rect: ['186', '40px', '654', '636', 'auto', 'auto']
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
                            id: 'simIntro',
                            symbolName: 'simIntro',
                            type: 'rect',
                            rect: ['207', '410', '614', '76', 'auto', 'auto']
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
                    duration: 20000,
                    autoPlay: true,
                    data: [

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
                            id: 'nubes',
                            rect: ['196px', '0px', '1024px', '213px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/nubes.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '213px']
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: true,
                    labels: {
                        "start": 0,
                        "end": 20000
                    },
                    data: [
                        [
                            "eid3",
                            "left",
                            0,
                            20000,
                            "linear",
                            "${nubes}",
                            '196px',
                            '-1478px'
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
                            rect: ['-508px', '17px', '553px', '103px', 'auto', 'auto'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            opacity: '1',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<font color=\"#ffffff\" face=\"Arial, Helvetica, sans-serif\">Ahora ayuda a tu abuelita a preparar un buen gallopinto. Coloca los ingredientes sobre la mesa, en el orden que vos creas conveniente.</font><font color=\"#ffffff\" face=\"Arial, Helvetica, sans-serif\">​</font><font color=\"#ffffff\" face=\"Arial, Helvetica, sans-serif\">​</font><font color=\"#ffffff\" face=\"Arial, Helvetica, sans-serif\">​</font><font color=\"#ffffff\" face=\"Arial, Helvetica, sans-serif\">​</font><font color=\"#ffffff\" face=\"Arial, Helvetica, sans-serif\">​</font><font color=\"#ffffff\" face=\"Arial, Helvetica, sans-serif\">​</font><font color=\"#ffffff\" face=\"Arial, Helvetica, sans-serif\">​</font><font color=\"#ffffff\" face=\"Arial, Helvetica, sans-serif\">​</font><font color=\"#ffffff\" face=\"Arial, Helvetica, sans-serif\">​</font><font color=\"#ffffff\" face=\"Arial, Helvetica, sans-serif\">​</font><font color=\"#ffffff\" face=\"Arial, Helvetica, sans-serif\">​</font><font color=\"#ffffff\" face=\"Arial, Helvetica, sans-serif\">​</font><font color=\"#ffffff\" face=\"Arial, Helvetica, sans-serif\">​</font><font color=\"#ffffff\" face=\"Arial, Helvetica, sans-serif\">​</font></p>'
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
                            1350,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "top",
                            1350,
                            1150,
                            "easeOutElastic",
                            "${Text2}",
                            '17px',
                            '15px'
                        ],
                        [
                            "eid24",
                            "width",
                            600,
                            500,
                            "easeInQuad",
                            "${Rectangle}",
                            '13px',
                            '686px'
                        ],
                        [
                            "eid35",
                            "left",
                            1350,
                            1150,
                            "easeOutElastic",
                            "${Text2}",
                            '-508px',
                            '56px'
                        ],
                        [
                            "eid26",
                            "width",
                            600,
                            500,
                            "easeInQuad",
                            "${Rectangle2}",
                            '13px',
                            '686px'
                        ]
                    ]
                }
            },
            "simAlimentos": {
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
                            id: 'simAceite',
                            symbolName: 'simAceite',
                            userClass: 'box',
                            rect: ['90', '10', '35', '89', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'simFrijoles',
                            symbolName: 'simFrijoles',
                            userClass: 'box',
                            rect: ['178px', '23px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'simCebolla',
                            symbolName: 'simCebolla',
                            userClass: 'box',
                            rect: ['311px', '23px', undefined, undefined, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'simArroz',
                            symbolName: 'simArroz',
                            userClass: 'box',
                            rect: ['59px', '152px', undefined, undefined, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'simSal',
                            symbolName: 'simSal',
                            userClass: 'box',
                            rect: ['234px', '130px', undefined, undefined, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'simAjo',
                            symbolName: 'simAjo',
                            userClass: 'box',
                            rect: ['312px', '142px', undefined, undefined, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '658px', '640px'],
                            overflow: 'visible'
                        }
                    }
                },
                timeline: {
                    duration: 1100,
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
            "simAceite": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '35px', '89px', 'auto', 'auto'],
                            id: 'alimento_0',
                            userClass: '',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/alimento_0.png', '0px', '0px']
                        },
                        {
                            rect: ['40px', '17px', '155', '56', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '0',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['7px', '17px', '148px', '31px', 'auto', 'auto'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(55,54,54,1.00)', 5, 0, 10],
                                id: 'Rectangle',
                                stroke: [1, 'rgba(22,160,133,1.00)', 'none'],
                                type: 'rect',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['9px', '6px', '35px', '44px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'RectangleCopy',
                                stroke: [1, 'rgba(22,160,133,1.00)', 'none'],
                                clip: 'rect(26.445537567138672px 23.33274269104004px 44px 0px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['52px', '21px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Aceite</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '300', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '35px', '89px']
                        }
                    }
                },
                timeline: {
                    duration: 1100,
                    autoPlay: true,
                    labels: {
                        "start": 1000
                    },
                    data: [
                        [
                            "eid22",
                            "left",
                            1100,
                            0,
                            "linear",
                            "${Group}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid21",
                            "opacity",
                            1000,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19",
                            "scaleY",
                            1000,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "scaleX",
                            1000,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simFrijoles": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'alimento_1',
                            type: 'image',
                            rect: ['0px', '0px', '112px', '89px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/alimento_1.png', '0px', '0px']
                        },
                        {
                            rect: ['115px', '17px', '155', '56', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '0',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['7px', '17px', '148px', '31px', 'auto', 'auto'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(55,54,54,1.00)', 5, 0, 10],
                                id: 'Rectangle',
                                stroke: [1, 'rgba(22,160,133,1.00)', 'none'],
                                type: 'rect',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['9px', '6px', '35px', '44px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'RectangleCopy',
                                stroke: [1, 'rgba(22,160,133,1.00)', 'none'],
                                clip: 'rect(26.445537567138672px 23.33274269104004px 44px 0px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['52px', '21px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Frijoles</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '300', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '112px', '89px']
                        }
                    }
                },
                timeline: {
                    duration: 1100,
                    autoPlay: true,
                    labels: {
                        "start": 1000
                    },
                    data: [
                        [
                            "eid31",
                            "left",
                            1100,
                            0,
                            "linear",
                            "${Group}",
                            '115px',
                            '115px'
                        ],
                        [
                            "eid21",
                            "opacity",
                            1000,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19",
                            "scaleY",
                            1000,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "scaleX",
                            1000,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simCebolla": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'alimento_2',
                            type: 'image',
                            rect: ['0px', '0px', '103px', '100px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/alimento_2.png', '0px', '0px']
                        },
                        {
                            rect: ['85px', '25px', '155', '56', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '0',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['7px', '17px', '148px', '31px', 'auto', 'auto'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(55,54,54,1.00)', 5, 0, 10],
                                id: 'Rectangle',
                                stroke: [1, 'rgba(22,160,133,1.00)', 'none'],
                                type: 'rect',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['9px', '6px', '35px', '44px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'RectangleCopy',
                                stroke: [1, 'rgba(22,160,133,1.00)', 'none'],
                                clip: 'rect(26.445537567138672px 23.33274269104004px 44px 0px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['52px', '21px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Cebolla</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '300', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '103px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 1100,
                    autoPlay: true,
                    labels: {
                        "start": 1000
                    },
                    data: [
                        [
                            "eid43",
                            "left",
                            1100,
                            0,
                            "linear",
                            "${Group}",
                            '85px',
                            '85px'
                        ],
                        [
                            "eid21",
                            "opacity",
                            1000,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19",
                            "scaleY",
                            1000,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "top",
                            1100,
                            0,
                            "linear",
                            "${Group}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid17",
                            "scaleX",
                            1000,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simArroz": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['120px', '0px', '155', '56', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '0',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['7px', '17px', '148px', '31px', 'auto', 'auto'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(55,54,54,1.00)', 5, 0, 10],
                                id: 'Rectangle',
                                stroke: [1, 'rgba(22,160,133,1.00)', 'none'],
                                type: 'rect',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['9px', '6px', '35px', '44px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'RectangleCopy',
                                stroke: [1, 'rgba(22,160,133,1.00)', 'none'],
                                clip: 'rect(26.445537567138672px 23.33274269104004px 44px 0px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['52px', '21px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Arroz</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '300', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            id: 'alimento_3',
                            type: 'image',
                            rect: ['0px', '0px', '121px', '72px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/alimento_3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '121px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 1100,
                    autoPlay: true,
                    labels: {
                        "start": 1000
                    },
                    data: [
                        [
                            "eid52",
                            "left",
                            1100,
                            0,
                            "linear",
                            "${Group}",
                            '120px',
                            '120px'
                        ],
                        [
                            "eid21",
                            "opacity",
                            1000,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19",
                            "scaleY",
                            1000,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid51",
                            "top",
                            1100,
                            0,
                            "linear",
                            "${Group}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid17",
                            "scaleX",
                            1000,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simSal": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['40px', '17px', '155', '56', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '0',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['7px', '17px', '148px', '31px', 'auto', 'auto'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(55,54,54,1.00)', 5, 0, 10],
                                id: 'Rectangle',
                                stroke: [1, 'rgba(22,160,133,1.00)', 'none'],
                                type: 'rect',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['9px', '6px', '35px', '44px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'RectangleCopy',
                                stroke: [1, 'rgba(22,160,133,1.00)', 'none'],
                                clip: 'rect(26.445537567138672px 23.33274269104004px 44px 0px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['60px', '21px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Sal</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '300', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            id: 'alimento_4',
                            type: 'image',
                            rect: ['0px', '7px', '36px', '74px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/alimento_4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '35px', '89px']
                        }
                    }
                },
                timeline: {
                    duration: 1100,
                    autoPlay: true,
                    labels: {
                        "start": 1000
                    },
                    data: [
                        [
                            "eid22",
                            "left",
                            1100,
                            0,
                            "linear",
                            "${Group}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid21",
                            "opacity",
                            1000,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19",
                            "scaleY",
                            1000,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "scaleX",
                            1000,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simAjo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['85px', '10px', '155', '56', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '0',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['7px', '17px', '148px', '31px', 'auto', 'auto'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(55,54,54,1.00)', 5, 0, 10],
                                id: 'Rectangle',
                                stroke: [1, 'rgba(22,160,133,1.00)', 'none'],
                                type: 'rect',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['9px', '6px', '35px', '44px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'RectangleCopy',
                                stroke: [1, 'rgba(22,160,133,1.00)', 'none'],
                                clip: 'rect(26.445537567138672px 23.33274269104004px 44px 0px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['65px', '21px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Ajo</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '300', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            id: 'alimento_5',
                            type: 'image',
                            rect: ['0px', '0', '82px', '73px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/alimento_5.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '82px', '73px']
                        }
                    }
                },
                timeline: {
                    duration: 1100,
                    autoPlay: true,
                    labels: {
                        "start": 1000
                    },
                    data: [
                        [
                            "eid43",
                            "left",
                            1100,
                            0,
                            "linear",
                            "${Group}",
                            '85px',
                            '85px'
                        ],
                        [
                            "eid49",
                            "top",
                            1100,
                            0,
                            "linear",
                            "${Group}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid19",
                            "scaleY",
                            1000,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            1000,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "scaleX",
                            1000,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simIntro": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '614px', '76px', 'auto', 'auto'],
                            stroke: [1, 'rgb(22, 160, 133)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(201,3,3,0.51)']
                        },
                        {
                            rect: ['-109px', '56', '64', '64', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '64px', '64px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse',
                                stroke: [1, 'rgb(22, 160, 133)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(217,30,24,1.00)']
                            },
                            {
                                rect: ['22px', '14px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-size: 35px; font-weight: 700;\">1</span></p>',
                                align: 'left',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['-109px', '56', '64', '64', 'auto', 'auto'],
                            id: 'GroupCopy',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                rect: ['99px', '0px', '64px', '64px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy',
                                stroke: [1, 'rgb(22, 160, 133)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(34,167,240,1.00)']
                            },
                            {
                                rect: ['119px', '14px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">​<font color=\"#ffffff\"><span style=\"font-size: 35px;\"><b>2</b></span></font></p>',
                                align: 'left',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['235', '56px', '64', '64', 'auto', 'auto'],
                            id: 'Group2',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '64px', '64px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy3',
                                stroke: [1, 'rgb(22, 160, 133)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(3,166,120,1.00)']
                            },
                            {
                                rect: ['22px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px;\">​<font color=\"#ffffff\"><span style=\"font-size: 35px;\"><b>3</b></span></font></p>',
                                align: 'left',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['564px', '56', '64', '64', 'auto', 'auto'],
                            id: 'Group3',
                            opacity: '1',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '64px', '64px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy4',
                                stroke: [1, 'rgb(22, 160, 133)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(248,148,6,1.00)']
                            },
                            {
                                rect: ['22px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'TextCopy5',
                                text: '<p style=\"margin: 0px;\">​<font color=\"#ffffff\"><span style=\"font-size: 35px;\"><b>4</b></span></font></p>',
                                align: 'left',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['720px', '56', '64', '64', 'auto', 'auto'],
                            id: 'Group4',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '64px', '64px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy6',
                                stroke: [1, 'rgb(22, 160, 133)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(102,51,153,1.00)']
                            },
                            {
                                rect: ['22px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'TextCopy6',
                                text: '<p style=\"margin: 0px;\">​<font color=\"#ffffff\"><span style=\"font-size: 35px;\"><b>5</b></span></font></p>',
                                align: 'left',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['538', '56', '64', '64', 'auto', 'auto'],
                            id: 'Group5',
                            opacity: '0',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '64px', '64px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'EllipseCopy7',
                                stroke: [1, 'rgb(22, 160, 133)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(247,202,24,1.00)']
                            },
                            {
                                rect: ['22px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '300', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'TextCopy7',
                                text: '<p style=\"margin: 0px;\">​<font color=\"#ffffff\"><span style=\"font-size: 35px;\"><b>6</b></span></font></p>',
                                align: 'left',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '614px', '76px']
                        }
                    }
                },
                timeline: {
                    duration: 9500,
                    autoPlay: true,
                    data: [
                        [
                            "eid140",
                            "opacity",
                            8000,
                            500,
                            "easeOutCubic",
                            "${Group3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid137",
                            "scaleY",
                            8000,
                            0,
                            "easeOutCubic",
                            "${Group3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid131",
                            "scaleX",
                            7500,
                            0,
                            "easeOutCubic",
                            "${Group2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid112",
                            "opacity",
                            6500,
                            500,
                            "easeOutCubic",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid128",
                            "left",
                            7000,
                            500,
                            "easeOutCubic",
                            "${GroupCopy}",
                            '-109px',
                            '31px'
                        ],
                        [
                            "eid136",
                            "scaleX",
                            8000,
                            0,
                            "easeOutCubic",
                            "${Group3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid145",
                            "opacity",
                            8500,
                            500,
                            "easeOutCubic",
                            "${Group4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid134",
                            "top",
                            7500,
                            500,
                            "easeOutCubic",
                            "${Group2}",
                            '-110px',
                            '56px'
                        ],
                        [
                            "eid151",
                            "scaleY",
                            9000,
                            500,
                            "easeOutBounce",
                            "${Group5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid60",
                            "opacity",
                            3000,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid61",
                            "opacity",
                            3500,
                            500,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid63",
                            "opacity",
                            4000,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid64",
                            "opacity",
                            4500,
                            500,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid65",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            5500,
                            500,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid141",
                            "scaleX",
                            8500,
                            0,
                            "easeOutCubic",
                            "${Group4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid147",
                            "opacity",
                            9000,
                            500,
                            "easeOutBounce",
                            "${Group5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid68",
                            "scaleY",
                            6500,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid125",
                            "scaleX",
                            7000,
                            0,
                            "linear",
                            "${GroupCopy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid144",
                            "left",
                            8500,
                            500,
                            "easeOutCubic",
                            "${Group4}",
                            '720px',
                            '444px'
                        ],
                        [
                            "eid67",
                            "scaleX",
                            6500,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid110",
                            "left",
                            6500,
                            500,
                            "easeOutCubic",
                            "${Group}",
                            '-109px',
                            '31px'
                        ],
                        [
                            "eid139",
                            "left",
                            8000,
                            500,
                            "easeOutCubic",
                            "${Group3}",
                            '564px',
                            '338px'
                        ],
                        [
                            "eid142",
                            "scaleY",
                            8500,
                            0,
                            "easeOutCubic",
                            "${Group4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid149",
                            "scaleX",
                            9000,
                            500,
                            "easeOutBounce",
                            "${Group5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "scaleY",
                            7500,
                            0,
                            "easeOutCubic",
                            "${Group2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid126",
                            "opacity",
                            7000,
                            500,
                            "easeOutCubic",
                            "${GroupCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid127",
                            "scaleY",
                            7000,
                            0,
                            "linear",
                            "${GroupCopy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid135",
                            "opacity",
                            7500,
                            500,
                            "easeOutCubic",
                            "${Group2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Pem1_1_edgeActions.js");
})("EDGE-169842270");
