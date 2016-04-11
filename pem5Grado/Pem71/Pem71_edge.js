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
                            id: 'Pem71',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo/Pem71.jpg",'0px','0px']
                        },
                        {
                            id: 'simCircTrian',
                            symbolName: 'simCircTrian',
                            type: 'rect',
                            rect: ['214px', '179px', '792', '504', 'auto', 'auto']
                        },
                        {
                            id: 'divResult',
                            type: 'rect',
                            rect: ['858px', '646px', '66px', '54px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'divInput1',
                            type: 'rect',
                            rect: ['847px', '431px', '100px', '66px', 'auto', 'auto'],
                            fill: ["rgba(189,66,66,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'divInput2',
                            type: 'rect',
                            rect: ['853px', '541px', '100px', '66px', 'auto', 'auto'],
                            fill: ["rgba(189,66,66,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'simLetras',
                            symbolName: 'simLetras',
                            type: 'rect',
                            rect: ['206', '42', '792', '114', 'auto', 'auto']
                        },
                        {
                            id: 'simIntrucciones',
                            symbolName: 'simIntrucciones',
                            type: 'rect',
                            rect: ['68', '107', '686', '135', 'auto', 'auto']
                        },
                        {
                            id: 'simMenu',
                            symbolName: 'simMenu',
                            type: 'rect',
                            rect: ['0px', '107px', 'undefined', 'undefined', 'auto', 'auto']
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
                    duration: 51000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "simCircTrian": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '792px', '504px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'simCircTrian',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.74194', '0.74194']],
                            id: 'Triangle1',
                            symbolName: 'Triangle1',
                            userClass: 'box',
                            rect: ['-101px', '-6px', null, null, 'auto', 'auto']
                        },
                        {
                            userClass: 'box',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['200px', '-90px', '92px', '92px', 'auto', 'auto'],
                            id: 'Ellips1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            userClass: 'box',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['-258px', '116px', '92px', '92px', 'auto', 'auto'],
                            id: 'Ellips3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellips4',
                            opacity: '0',
                            rect: ['350px', '280px', '92px', '92px', 'auto', 'auto'],
                            userClass: 'box',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            userClass: 'box',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['952px', '116px', '92px', '92px', 'auto', 'auto'],
                            id: 'Ellips5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.74194', '0.74194']],
                            id: 'Triangle4',
                            symbolName: 'Triangle4',
                            userClass: 'box',
                            rect: ['-118px', '100px', null, null, 'auto', 'auto']
                        },
                        {
                            userClass: 'box',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['502px', '-112px', '92px', '92px', 'auto', 'auto'],
                            id: 'Ellips2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.74194', '0.74194']],
                            id: 'Triangle3',
                            symbolName: 'Triangle3',
                            userClass: 'box',
                            rect: ['802px', '-6px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.74194', '0.74194']],
                            id: 'Triangle5',
                            symbolName: 'Triangle5',
                            userClass: 'box',
                            rect: ['796px', '100px', null, null, 'auto', 'auto']
                        },
                        {
                            userClass: 'box',
                            transform: [[], [], [], ['0.74194', '0.74194']],
                            symbolName: 'Triangle2',
                            id: 'Triangle2',
                            opacity: '0',
                            rect: ['344px', '144px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '792px', '504px']
                        }
                    }
                },
                timeline: {
                    duration: 2400,
                    autoPlay: true,
                    data: [
                        [
                            "eid89",
                            "opacity",
                            500,
                            500,
                            "easeInOutBack",
                            "${Triangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid87",
                            "top",
                            500,
                            500,
                            "easeInOutBack",
                            "${Triangle2}",
                            '144px',
                            '-6px'
                        ],
                        [
                            "eid64",
                            "top",
                            900,
                            500,
                            "easeInQuart",
                            "${Ellips2}",
                            '-112px',
                            '10px'
                        ],
                        [
                            "eid67",
                            "left",
                            1100,
                            500,
                            "easeOutQuart",
                            "${Triangle3}",
                            '802px',
                            '626px'
                        ],
                        [
                            "eid75",
                            "left",
                            1700,
                            500,
                            "easeOutExpo",
                            "${Ellips5}",
                            '952px',
                            '642px'
                        ],
                        [
                            "eid58",
                            "top",
                            200,
                            500,
                            "easeOutQuad",
                            "${Ellips1}",
                            '-90px',
                            '10px'
                        ],
                        [
                            "eid79",
                            "opacity",
                            1900,
                            500,
                            "easeInOutSine",
                            "${Ellips4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid77",
                            "top",
                            1900,
                            500,
                            "easeInOutSine",
                            "${Ellips4}",
                            '280px',
                            '116px'
                        ],
                        [
                            "eid69",
                            "left",
                            1300,
                            500,
                            "easeOutQuart",
                            "${Triangle4}",
                            '-118px',
                            '184px'
                        ],
                        [
                            "eid56",
                            "left",
                            0,
                            900,
                            "easeOutElastic",
                            "${Triangle1}",
                            '-101px',
                            '28px'
                        ],
                        [
                            "eid73",
                            "left",
                            1700,
                            500,
                            "easeOutQuart",
                            "${Triangle5}",
                            '796px',
                            '486px'
                        ],
                        [
                            "eid71",
                            "left",
                            1300,
                            500,
                            "easeOutQuart",
                            "${Ellips3}",
                            '-258px',
                            '44px'
                        ],
                        [
                            "eid85",
                            "left",
                            500,
                            500,
                            "easeInOutBack",
                            "${Triangle2}",
                            '344px',
                            '340px'
                        ]
                    ]
                }
            },
            "Triangle1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '124px', '124px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            transform: [[], [], ['27', '-45'], [1, 1, 1]],
                            rect: ['0px', '66px', '124px', '124px', 'auto', 'auto'],
                            id: 'triangleRec1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['0px', '0px', '124px', '124px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'triangle1text',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '124px', '124px']
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
            "Triangle2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '124px', '124px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            transform: [[], [], ['27', '-45'], [1, 1, 1]],
                            rect: ['0px', '66px', '124px', '124px', 'auto', 'auto'],
                            id: 'triangleRec2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['0px', '0px', '124px', '124px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'triangle2text',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '124px', '124px']
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
            "Triangle3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '124px', '124px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle2',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['0px', '66px', '124px', '124px', 'auto', 'auto'],
                            transform: [[], [], ['27', '-45'], [1, 1, 1]],
                            id: 'triangleRec3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['0px', '0px', '124px', '124px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'triangle3text',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '124px', '124px']
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
            "Triangle4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '124px', '124px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            transform: [[], [], ['27', '-45'], [1, 1, 1]],
                            rect: ['0px', '66px', '124px', '124px', 'auto', 'auto'],
                            id: 'triangleRec4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['0px', '0px', '124px', '124px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'triangle4text',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '124px', '124px']
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
            "Triangle5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '124px', '124px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            transform: [[], [], ['27', '-45'], [1, 1, 1]],
                            rect: ['0px', '66px', '124px', '124px', 'auto', 'auto'],
                            id: 'triangleRec5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['0px', '0px', '124px', '124px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'triangle5text',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '124px', '124px']
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
                            rect: ['0px', '0px', '792px', '114px', 'auto', 'auto'],
                            id: 'simLetras',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(189,66,66,0)']
                        },
                        {
                            rect: ['17px', '-102px', '757px', '96px', 'auto', 'auto'],
                            id: 'Letras_32',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fondo/Letras_3.png', '0px', '0px']
                        },
                        {
                            rect: ['11px', '9px', '769px', '99px', 'auto', 'auto'],
                            id: 'Letras_2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fondo/Letras_2.png', '0px', '0px']
                        },
                        {
                            rect: ['17px', '1px', '760px', '98px', 'auto', 'auto'],
                            id: 'Letras_1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fondo/Letras_1.png', '0px', '0px']
                        },
                        {
                            rect: ['17px', '3px', '763px', '99px', 'auto', 'auto'],
                            id: 'Letras_02',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fondo/Letras_0.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '792px', '114px']
                        }
                    }
                },
                timeline: {
                    duration: 51000,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid126",
                            "opacity",
                            25000,
                            2000,
                            "linear",
                            "${Letras_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid127",
                            "opacity",
                            36000,
                            2000,
                            "linear",
                            "${Letras_1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid108",
                            "left",
                            1000,
                            2000,
                            "easeOutElastic",
                            "${Letras_32}",
                            '17px',
                            '20px'
                        ],
                        [
                            "eid116",
                            "opacity",
                            12000,
                            2000,
                            "linear",
                            "${Letras_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid124",
                            "opacity",
                            23000,
                            2000,
                            "linear",
                            "${Letras_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid110",
                            "top",
                            1000,
                            2000,
                            "easeOutElastic",
                            "${Letras_32}",
                            '-102px',
                            '10px'
                        ],
                        [
                            "eid102",
                            "opacity",
                            10000,
                            2000,
                            "linear",
                            "${Letras_32}",
                            '1',
                            '0'
                        ],
                        [
                            "eid134",
                            "opacity",
                            38000,
                            2000,
                            "linear",
                            "${Letras_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid133",
                            "opacity",
                            49000,
                            2000,
                            "linear",
                            "${Letras_02}",
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
                            id: 'simTrianMov2',
                            symbolName: 'simTrianMov',
                            opacity: '0',
                            rect: ['299px', '90px', null, null, 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '0px', '13px', '135px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(50,50,50,0.95)']
                        },
                        {
                            rect: ['0px', '135px', '13px', '46px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(22,160,133,1.00)'],
                            c: [
                            {
                                type: 'text',
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 600;\">Saltar Instrucciones</span></p>',
                                rect: ['258px', '3px', 'auto', 'auto', 'auto', 'auto'],
                                overflow: 'visible',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'left',
                                opacity: '1'
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text2',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: Arial, Helvetica, sans-serif;\">Ubica 3 triángulos en la parte </span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: Arial, Helvetica, sans-serif;\">superior del renglón</span>&nbsp;</p>',
                            rect: ['150px', '22px', 'auto', 'auto', 'auto', 'auto'],
                            overflow: 'hidden',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            opacity: '1'
                        },
                        {
                            rect: ['776px', '291px', '576px', '120px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle4',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(188,48,48,0.60)']
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['98px', '45px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text3',
                            opacity: '1',
                            text: '<p style=\"margin: 0px;\">​Luego suma y escribe el dato a la par.</p>',
                            type: 'text'
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['10px', '48px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text4',
                            opacity: '1',
                            text: '<p style=\"margin: 0px;\">Ubica 3 círculos en la parte inferior del renglón</p>',
                            type: 'text'
                        },
                        {
                            rect: ['776px', '411px', '580px', '120px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle5',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(188,48,48,0.6)']
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['-213px', '48px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text5',
                            opacity: '1',
                            text: '<p style=\"margin: 0px;\">​Suma y escribe el dato a la par.</p>',
                            type: 'text'
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['10px', '3px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'center',
                            id: 'Text12',
                            opacity: '1',
                            text: '<p style=\"margin: 0px;\">​Recuerda que la suma de los triángulos, menos</p><p style=\"margin: 0px;\"> la suma de los círculos, es el resultado</p><p style=\"margin: 0px;\">que se muestra en el hexágono</p>',
                            type: 'text'
                        },
                        {
                            rect: ['762px', '531px', '120px', '62px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle6',
                            opacity: '0.52413793103448',
                            type: 'rect',
                            fill: ['rgba(188,48,48,0.6)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '686px', '135px']
                        }
                    }
                },
                timeline: {
                    duration: 10250,
                    autoPlay: true,
                    labels: {
                        "start": 0,
                        "int2": 3700,
                        "int3": 4600,
                        "int4": 6000,
                        "int5": 7500,
                        "int6": 9500,
                        "end": 10250
                    },
                    data: [
                        [
                            "eid255",
                            "left",
                            6500,
                            397,
                            "easeOutElastic",
                            "${Text5}",
                            '-213px',
                            '109px'
                        ],
                        [
                            "eid230",
                            "left",
                            4000,
                            400,
                            "easeOutElastic",
                            "${Text3}",
                            '-82px',
                            '98px'
                        ],
                        [
                            "eid182",
                            "top",
                            2600,
                            0,
                            "linear",
                            "${simTrianMov2}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid277",
                            "top",
                            8500,
                            0,
                            "easeOutElastic",
                            "${simTrianMov2}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid243",
                            "opacity",
                            0,
                            0,
                            "easeOutElastic",
                            "${Text3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid244",
                            "opacity",
                            4000,
                            0,
                            "easeOutElastic",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid157",
                            "width",
                            2000,
                            600,
                            "linear",
                            "${Rectangle2}",
                            '13px',
                            '686px'
                        ],
                        [
                            "eid212",
                            "width",
                            3700,
                            0,
                            "easeOutElastic",
                            "${Rectangle4}",
                            '576px',
                            '576px'
                        ],
                        [
                            "eid223",
                            "width",
                            4600,
                            200,
                            "easeOutElastic",
                            "${Rectangle4}",
                            '576px',
                            '106px'
                        ],
                        [
                            "eid196",
                            "opacity",
                            0,
                            0,
                            "easeOutElastic",
                            "${Rectangle4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid224",
                            "opacity",
                            3700,
                            0,
                            "easeOutElastic",
                            "${Rectangle4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid163",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${simTrianMov2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid162",
                            "opacity",
                            2600,
                            0,
                            "linear",
                            "${simTrianMov2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid156",
                            "width",
                            2000,
                            600,
                            "linear",
                            "${Rectangle}",
                            '13px',
                            '686px'
                        ],
                        [
                            "eid234",
                            "left",
                            5200,
                            444,
                            "easeOutElastic",
                            "${Text4}",
                            '-315px',
                            '10px'
                        ],
                        [
                            "eid187",
                            "opacity",
                            0,
                            0,
                            "easeInQuint",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid188",
                            "opacity",
                            2600,
                            0,
                            "easeInQuint",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid191",
                            "opacity",
                            0,
                            0,
                            "easeInQuint",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid192",
                            "opacity",
                            2596,
                            0,
                            "easeInQuint",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid278",
                            "opacity",
                            0,
                            0,
                            "easeOutElastic",
                            "${Text12}",
                            '0',
                            '0'
                        ],
                        [
                            "eid279",
                            "opacity",
                            8501,
                            0,
                            "easeOutElastic",
                            "${Text12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid275",
                            "left",
                            7500,
                            412,
                            "linear",
                            "${Rectangle5}",
                            '196px',
                            '776px'
                        ],
                        [
                            "eid194",
                            "left",
                            2596,
                            996,
                            "easeOutElastic",
                            "${Text2}",
                            '-144px',
                            '150px'
                        ],
                        [
                            "eid276",
                            "width",
                            7500,
                            412,
                            "easeOutElastic",
                            "${Rectangle5}",
                            '580px',
                            '106px'
                        ],
                        [
                            "eid257",
                            "opacity",
                            0,
                            0,
                            "easeOutElastic",
                            "${Text5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid258",
                            "opacity",
                            6500,
                            0,
                            "easeOutElastic",
                            "${Text5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid242",
                            "opacity",
                            0,
                            0,
                            "easeOutElastic",
                            "${Text4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid245",
                            "opacity",
                            5200,
                            0,
                            "easeOutElastic",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid293",
                            "opacity",
                            0,
                            0,
                            "easeOutElastic",
                            "${Rectangle6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid296",
                            "opacity",
                            9500,
                            362,
                            "easeOutElastic",
                            "${Rectangle6}",
                            '0.52413793103448',
                            '1'
                        ],
                        [
                            "eid282",
                            "left",
                            8500,
                            398,
                            "easeOutElastic",
                            "${Text12}",
                            '-202px',
                            '0px'
                        ],
                        [
                            "eid211",
                            "left",
                            3700,
                            0,
                            "easeOutElastic",
                            "${Rectangle4}",
                            '198px',
                            '198px'
                        ],
                        [
                            "eid222",
                            "left",
                            4600,
                            200,
                            "easeOutElastic",
                            "${Rectangle4}",
                            '198px',
                            '776px'
                        ],
                        [
                            "eid259",
                            "opacity",
                            0,
                            0,
                            "easeOutElastic",
                            "${Rectangle5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid241",
                            "opacity",
                            6000,
                            250,
                            "easeOutElastic",
                            "${Rectangle5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid232",
                            "top",
                            4000,
                            400,
                            "easeOutElastic",
                            "${Text3}",
                            '45px',
                            '48px'
                        ]
                    ]
                }
            },
            "simTrianMov": {
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
                            id: 'triangle2',
                            rect: ['-20px', '26px', '171px', '142px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fondo/triangle.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '132px', '132px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid164",
                            "top",
                            0,
                            500,
                            "linear",
                            "${triangle2}",
                            '17px',
                            '25px'
                        ],
                        [
                            "eid180",
                            "top",
                            500,
                            500,
                            "linear",
                            "${triangle2}",
                            '25px',
                            '17px'
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Pem71_edgeActions.js");
})("EDGE-103672555");
