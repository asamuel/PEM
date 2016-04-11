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
            "../../cdn/TweenMax.min.js",
            "../../cdn/jquery.lighter.js",
            "../../cdn/jquery.lighter.css",
            "../../cdn/jss.min.js",
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
                            id: 'sky',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sky.png",'0px','0px']
                        },
                        {
                            id: 'moon',
                            type: 'image',
                            rect: ['678px', '0px', '352px', '405px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"moon.png",'0px','0px']
                        },
                        {
                            id: 'simBat',
                            symbolName: 'simBat',
                            type: 'rect',
                            rect: ['918', '44', '64', '128', 'auto', 'auto']
                        },
                        {
                            id: 'simShootingS_1',
                            symbolName: 'simShootingS_1',
                            type: 'rect',
                            rect: ['-182px', '-152px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'simShootingS_2',
                            symbolName: 'simShootingS_2',
                            type: 'rect',
                            rect: ['778px', '-128px', '279', '138', 'auto', 'auto']
                        },
                        {
                            id: 'simAstro',
                            symbolName: 'simAstro',
                            type: 'rect',
                            rect: ['722', '480', '205', '230', 'auto', 'auto']
                        },
                        {
                            id: 'simBlock3',
                            symbolName: 'simBlock3',
                            type: 'rect',
                            rect: ['406px', '202px', '258', '318', 'auto', 'auto']
                        },
                        {
                            id: 'simBlock1',
                            symbolName: 'simBlock1',
                            type: 'rect',
                            rect: ['38px', '460px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'simBlock2',
                            symbolName: 'simBlock2',
                            type: 'rect',
                            rect: ['74px', '157px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'simBlock4',
                            symbolName: 'simBlock4',
                            type: 'rect',
                            rect: ['720px', '172px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'simBlock5',
                            symbolName: 'simBlock5',
                            type: 'rect',
                            rect: ['730px', '467px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'divTextArea',
                            type: 'rect',
                            rect: ['0px', '2px', '1024px', '100px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
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
                    duration: 1250,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "top",
                            0,
                            400,
                            "easeInSine",
                            "${moon}",
                            '836px',
                            '0px'
                        ]
                    ]
                }
            },
            "simBat": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['164px', '0px', '64px', '128px', 'auto', 'auto'],
                            id: 'batFlap',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/batFlap.gif', '0px', '0px']
                        },
                        {
                            rect: ['120px', '32px', '64px', '128px', 'auto', 'auto'],
                            id: 'batFlapCopy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/batFlap.gif', '0px', '0px']
                        },
                        {
                            rect: ['264px', '32px', '64px', '128px', 'auto', 'auto'],
                            id: 'batFlapCopy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/batFlap.gif', '0px', '0px']
                        },
                        {
                            rect: ['368px', '-4px', '64px', '128px', 'auto', 'auto'],
                            id: 'batFlapCopy4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/batFlap.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '64px', '128px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                        [
                            "eid28",
                            "top",
                            250,
                            0,
                            "linear",
                            "${batFlapCopy4}",
                            '-4px',
                            '-4px'
                        ],
                        [
                            "eid24",
                            "left",
                            250,
                            2000,
                            "linear",
                            "${batFlapCopy3}",
                            '264px',
                            '-1096px'
                        ],
                        [
                            "eid23",
                            "top",
                            0,
                            0,
                            "linear",
                            "${batFlapCopy2}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid20",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${batFlapCopy2}",
                            '120px',
                            '-1096px'
                        ],
                        [
                            "eid25",
                            "top",
                            250,
                            0,
                            "linear",
                            "${batFlapCopy3}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid19",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${batFlap}",
                            '164px',
                            '-1096px'
                        ],
                        [
                            "eid27",
                            "left",
                            250,
                            2000,
                            "linear",
                            "${batFlapCopy4}",
                            '368px',
                            '-1096px'
                        ]
                    ]
                }
            },
            "simShootingS_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.7', '0.7']],
                            rect: ['-224px', '-132px', '297px', '144px', 'auto', 'auto'],
                            id: 'shootingStart_2',
                            opacity: '0.44604247058038',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/shootingStart_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '297px', '144px']
                        }
                    }
                },
                timeline: {
                    duration: 50000,
                    autoPlay: false,
                    data: [
                        [
                            "eid46",
                            "scaleX",
                            10000,
                            750,
                            "easeOutSine",
                            "${shootingStart_2}",
                            '0.7',
                            '0.9'
                        ],
                        [
                            "eid47",
                            "scaleY",
                            10000,
                            750,
                            "easeOutSine",
                            "${shootingStart_2}",
                            '0.7',
                            '0.9'
                        ],
                        [
                            "eid40",
                            "opacity",
                            10000,
                            750,
                            "easeOutSine",
                            "${shootingStart_2}",
                            '0.44604247058038',
                            '0.90311791485162'
                        ],
                        [
                            "eid41",
                            "opacity",
                            10750,
                            250,
                            "easeOutSine",
                            "${shootingStart_2}",
                            '0.90311791485162',
                            '1'
                        ],
                        [
                            "eid38",
                            "top",
                            10000,
                            1000,
                            "easeOutSine",
                            "${shootingStart_2}",
                            '-132px',
                            '468px'
                        ],
                        [
                            "eid37",
                            "left",
                            10000,
                            1000,
                            "easeOutSine",
                            "${shootingStart_2}",
                            '-224px',
                            '1216px'
                        ]
                    ]
                }
            },
            "simShootingS_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['752px', '-113px', '279px', '138px', 'auto', 'auto'],
                            id: 'shootingStar_1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/shootingStar_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '279px', '138px']
                        }
                    }
                },
                timeline: {
                    duration: 35000,
                    autoPlay: false,
                    data: [
                        [
                            "eid52",
                            "left",
                            34000,
                            1000,
                            "easeOutSine",
                            "${shootingStar_1}",
                            '752px',
                            '-1120px'
                        ],
                        [
                            "eid53",
                            "top",
                            34000,
                            1000,
                            "easeOutSine",
                            "${shootingStar_1}",
                            '-113px',
                            '480px'
                        ]
                    ]
                }
            },
            "simAstro": {
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
                            id: 'rope',
                            rect: ['515px', '-86px', '711px', '210px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rope.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'astronaut',
                            rect: ['-360px', '0px', '205px', '230px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/astronaut.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '205px', '230px']
                        }
                    }
                },
                timeline: {
                    duration: 70000,
                    autoPlay: false,
                    data: [
                        [
                            "eid57",
                            "top",
                            0,
                            6136,
                            "linear",
                            "${rope}",
                            '-86px',
                            '-128px'
                        ],
                        [
                            "eid61",
                            "top",
                            6136,
                            12273,
                            "linear",
                            "${rope}",
                            '-128px',
                            '-64px'
                        ],
                        [
                            "eid67",
                            "top",
                            18409,
                            12273,
                            "linear",
                            "${rope}",
                            '-64px',
                            '-167px'
                        ],
                        [
                            "eid70",
                            "top",
                            30682,
                            6136,
                            "linear",
                            "${rope}",
                            '-167px',
                            '-263px'
                        ],
                        [
                            "eid56",
                            "left",
                            0,
                            6136,
                            "linear",
                            "${rope}",
                            '515px',
                            '179px'
                        ],
                        [
                            "eid60",
                            "left",
                            6136,
                            12273,
                            "linear",
                            "${rope}",
                            '179px',
                            '-214px'
                        ],
                        [
                            "eid66",
                            "left",
                            18409,
                            12273,
                            "linear",
                            "${rope}",
                            '-214px',
                            '-536px'
                        ],
                        [
                            "eid71",
                            "left",
                            30682,
                            6136,
                            "linear",
                            "${rope}",
                            '-536px',
                            '-794px'
                        ],
                        [
                            "eid73",
                            "left",
                            36818,
                            30682,
                            "linear",
                            "${rope}",
                            '-794px',
                            '-1538px'
                        ],
                        [
                            "eid54",
                            "left",
                            0,
                            6136,
                            "linear",
                            "${astronaut}",
                            '368px',
                            '36px'
                        ],
                        [
                            "eid58",
                            "left",
                            6136,
                            12273,
                            "linear",
                            "${astronaut}",
                            '36px',
                            '-360px'
                        ],
                        [
                            "eid64",
                            "left",
                            18409,
                            12273,
                            "linear",
                            "${astronaut}",
                            '-360px',
                            '-680px'
                        ],
                        [
                            "eid69",
                            "left",
                            30682,
                            6136,
                            "linear",
                            "${astronaut}",
                            '-680px',
                            '-952px'
                        ],
                        [
                            "eid72",
                            "left",
                            36818,
                            30682,
                            "linear",
                            "${astronaut}",
                            '-952px',
                            '-1696px'
                        ],
                        [
                            "eid55",
                            "top",
                            0,
                            6136,
                            "linear",
                            "${astronaut}",
                            '-8px',
                            '-68px'
                        ],
                        [
                            "eid59",
                            "top",
                            6136,
                            12273,
                            "linear",
                            "${astronaut}",
                            '-68px',
                            '0px'
                        ],
                        [
                            "eid65",
                            "top",
                            18409,
                            12273,
                            "linear",
                            "${astronaut}",
                            '0px',
                            '-108px'
                        ],
                        [
                            "eid68",
                            "top",
                            30682,
                            6136,
                            "linear",
                            "${astronaut}",
                            '-108px',
                            '-168px'
                        ]
                    ]
                }
            },
            "simMenuBlock": {
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
                            rect: ['0px', '0px', '258px', '35px', 'auto', 'auto'],
                            fill: ['rgba(17,122,102,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            rect: ['201px', '2px', '30px', '35px', 'auto', 'auto'],
                            id: 'next',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/next.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            rect: ['27px', '2px', '30px', '35px', 'auto', 'auto'],
                            id: 'before',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/before.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '258px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "start": 250
                    },
                    data: [
                        [
                            "eid132",
                            "opacity",
                            250,
                            150,
                            "linear",
                            "${next}",
                            '0',
                            '1'
                        ],
                        [
                            "eid136",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${next}",
                            '0',
                            '0'
                        ],
                        [
                            "eid140",
                            "scaleY",
                            250,
                            0,
                            "linear",
                            "${next}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "opacity",
                            250,
                            150,
                            "linear",
                            "${before}",
                            '0',
                            '1'
                        ],
                        [
                            "eid128",
                            "top",
                            250,
                            150,
                            "linear",
                            "${next}",
                            '67px',
                            '2px'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${before}",
                            '0',
                            '0'
                        ],
                        [
                            "eid138",
                            "scaleY",
                            250,
                            0,
                            "linear",
                            "${before}",
                            '0',
                            '1'
                        ],
                        [
                            "eid135",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${next}",
                            '0',
                            '0'
                        ],
                        [
                            "eid139",
                            "scaleX",
                            250,
                            0,
                            "linear",
                            "${next}",
                            '0',
                            '1'
                        ],
                        [
                            "eid133",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${before}",
                            '0',
                            '0'
                        ],
                        [
                            "eid137",
                            "scaleX",
                            250,
                            0,
                            "linear",
                            "${before}",
                            '0',
                            '1'
                        ],
                        [
                            "eid126",
                            "top",
                            250,
                            150,
                            "linear",
                            "${before}",
                            '67px',
                            '2px'
                        ]
                    ]
                }
            },
            "simBlock3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '258px', '258px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'block2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/block.png', '0px', '0px']
                        },
                        {
                            rect: ['6px', '0px', '93px', '129px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'number_3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/number_3.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'rectangleOver',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            userClass: '',
                            transform: [[], [], [], ['0.3', '0.3']],
                            rect: ['6px', '6px', '244px', '244px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'containerImage',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            userClass: '',
                            transform: [[], [], [], ['0.3', '0.3']],
                            rect: ['6px', '6px', '244px', '244px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'simMenuBlock',
                            symbolName: 'simMenuBlock',
                            rect: ['0px', '260px', null, null, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '258px', '318px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid152",
                            "scaleX",
                            0,
                            1000,
                            "easeOutExpo",
                            "${block2}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid156",
                            "scaleX",
                            0,
                            1000,
                            "easeOutExpo",
                            "${rectangleOver}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid144",
                            "opacity",
                            0,
                            1000,
                            "easeOutExpo",
                            "${block2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid162",
                            "scaleY",
                            0,
                            1000,
                            "easeOutExpo",
                            "${number_3}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid146",
                            "opacity",
                            0,
                            1000,
                            "easeOutExpo",
                            "${rectangleOver}",
                            '0',
                            '1'
                        ],
                        [
                            "eid166",
                            "scaleY",
                            0,
                            1000,
                            "easeOutExpo",
                            "${containerImage}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid148",
                            "opacity",
                            0,
                            1000,
                            "easeOutExpo",
                            "${number_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid164",
                            "scaleX",
                            0,
                            1000,
                            "easeOutExpo",
                            "${containerImage}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid158",
                            "scaleY",
                            0,
                            1000,
                            "easeOutExpo",
                            "${rectangleOver}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid154",
                            "scaleY",
                            0,
                            1000,
                            "easeOutExpo",
                            "${block2}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid160",
                            "scaleX",
                            0,
                            1000,
                            "easeOutExpo",
                            "${number_3}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid150",
                            "opacity",
                            0,
                            1000,
                            "easeOutExpo",
                            "${containerImage}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simBlock1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '258px', '258px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'block2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/block.png', '0px', '0px']
                        },
                        {
                            rect: ['-6px', '0px', '114px', '135px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'number_1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/number_1.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'rectangleOver',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            userClass: '',
                            transform: [[], [], [], ['0.3', '0.3']],
                            rect: ['6px', '6px', '244px', '244px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'containerImage',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            userClass: '',
                            transform: [[], [], [], ['0.3', '0.3']],
                            rect: ['6px', '6px', '244px', '244px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'simMenuBlock_1',
                            symbolName: 'simMenuBlock_1',
                            rect: ['0px', '258px', null, null, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '258px', '318px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid152",
                            "scaleX",
                            0,
                            1000,
                            "easeOutExpo",
                            "${block2}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid156",
                            "scaleX",
                            0,
                            1000,
                            "easeOutExpo",
                            "${rectangleOver}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid144",
                            "opacity",
                            0,
                            1000,
                            "easeOutExpo",
                            "${block2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "scaleY",
                            0,
                            1000,
                            "easeOutExpo",
                            "${block2}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid166",
                            "scaleY",
                            0,
                            1000,
                            "easeOutExpo",
                            "${containerImage}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid172",
                            "opacity",
                            0,
                            1000,
                            "easeOutExpo",
                            "${number_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid164",
                            "scaleX",
                            0,
                            1000,
                            "easeOutExpo",
                            "${containerImage}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid170",
                            "scaleY",
                            0,
                            1000,
                            "easeOutExpo",
                            "${number_1}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid158",
                            "scaleY",
                            0,
                            1000,
                            "easeOutExpo",
                            "${rectangleOver}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid146",
                            "opacity",
                            0,
                            1000,
                            "easeOutExpo",
                            "${rectangleOver}",
                            '0',
                            '1'
                        ],
                        [
                            "eid168",
                            "scaleX",
                            0,
                            1000,
                            "easeOutExpo",
                            "${number_1}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid150",
                            "opacity",
                            0,
                            1000,
                            "easeOutExpo",
                            "${containerImage}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simMenuBlock_1": {
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
                            rect: ['0px', '0px', '258px', '35px', 'auto', 'auto'],
                            fill: ['rgba(17,122,102,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            rect: ['201px', '2px', '30px', '35px', 'auto', 'auto'],
                            id: 'next',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/next.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            rect: ['27px', '2px', '30px', '35px', 'auto', 'auto'],
                            id: 'before',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/before.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '258px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "start": 250
                    },
                    data: [
                        [
                            "eid126",
                            "top",
                            250,
                            150,
                            "linear",
                            "${before}",
                            '67px',
                            '2px'
                        ],
                        [
                            "eid132",
                            "opacity",
                            250,
                            150,
                            "linear",
                            "${next}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "opacity",
                            250,
                            150,
                            "linear",
                            "${before}",
                            '0',
                            '1'
                        ],
                        [
                            "eid128",
                            "top",
                            250,
                            150,
                            "linear",
                            "${next}",
                            '67px',
                            '2px'
                        ],
                        [
                            "eid133",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${before}",
                            '0',
                            '0'
                        ],
                        [
                            "eid137",
                            "scaleX",
                            250,
                            0,
                            "linear",
                            "${before}",
                            '0',
                            '1'
                        ],
                        [
                            "eid135",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${next}",
                            '0',
                            '0'
                        ],
                        [
                            "eid139",
                            "scaleX",
                            250,
                            0,
                            "linear",
                            "${next}",
                            '0',
                            '1'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${before}",
                            '0',
                            '0'
                        ],
                        [
                            "eid138",
                            "scaleY",
                            250,
                            0,
                            "linear",
                            "${before}",
                            '0',
                            '1'
                        ],
                        [
                            "eid136",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${next}",
                            '0',
                            '0'
                        ],
                        [
                            "eid140",
                            "scaleY",
                            250,
                            0,
                            "linear",
                            "${next}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simMenuBlock_2": {
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
                            rect: ['0px', '0px', '258px', '35px', 'auto', 'auto'],
                            fill: ['rgba(17,122,102,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            rect: ['201px', '2px', '30px', '35px', 'auto', 'auto'],
                            id: 'next',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/next.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            rect: ['27px', '2px', '30px', '35px', 'auto', 'auto'],
                            id: 'before',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/before.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '258px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "start": 250
                    },
                    data: [
                        [
                            "eid136",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${next}",
                            '0',
                            '0'
                        ],
                        [
                            "eid140",
                            "scaleY",
                            250,
                            0,
                            "linear",
                            "${next}",
                            '0',
                            '1'
                        ],
                        [
                            "eid126",
                            "top",
                            250,
                            150,
                            "linear",
                            "${before}",
                            '67px',
                            '2px'
                        ],
                        [
                            "eid130",
                            "opacity",
                            250,
                            150,
                            "linear",
                            "${before}",
                            '0',
                            '1'
                        ],
                        [
                            "eid128",
                            "top",
                            250,
                            150,
                            "linear",
                            "${next}",
                            '67px',
                            '2px'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${before}",
                            '0',
                            '0'
                        ],
                        [
                            "eid138",
                            "scaleY",
                            250,
                            0,
                            "linear",
                            "${before}",
                            '0',
                            '1'
                        ],
                        [
                            "eid135",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${next}",
                            '0',
                            '0'
                        ],
                        [
                            "eid139",
                            "scaleX",
                            250,
                            0,
                            "linear",
                            "${next}",
                            '0',
                            '1'
                        ],
                        [
                            "eid133",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${before}",
                            '0',
                            '0'
                        ],
                        [
                            "eid137",
                            "scaleX",
                            250,
                            0,
                            "linear",
                            "${before}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "opacity",
                            250,
                            150,
                            "linear",
                            "${next}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simBlock2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '258px', '258px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'block2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/block.png', '0px', '0px']
                        },
                        {
                            rect: ['-20px', '-10px', '136px', '144px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.4', '0.4']],
                            id: 'number_2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/number_2.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'rectangleOver',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            userClass: '',
                            transform: [[], [], [], ['0.3', '0.3']],
                            rect: ['6px', '6px', '244px', '244px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'containerImage',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            userClass: '',
                            transform: [[], [], [], ['0.3', '0.3']],
                            rect: ['6px', '6px', '244px', '244px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'simMenuBlock_2',
                            symbolName: 'simMenuBlock_2',
                            rect: ['0px', '257px', null, null, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '258px', '318px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid152",
                            "scaleX",
                            0,
                            1000,
                            "easeOutExpo",
                            "${block2}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid156",
                            "scaleX",
                            0,
                            1000,
                            "easeOutExpo",
                            "${rectangleOver}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid178",
                            "opacity",
                            0,
                            1000,
                            "easeOutExpo",
                            "${number_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid144",
                            "opacity",
                            0,
                            1000,
                            "easeOutExpo",
                            "${block2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid146",
                            "opacity",
                            0,
                            1000,
                            "easeOutExpo",
                            "${rectangleOver}",
                            '0',
                            '1'
                        ],
                        [
                            "eid166",
                            "scaleY",
                            0,
                            1000,
                            "easeOutExpo",
                            "${containerImage}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid164",
                            "scaleX",
                            0,
                            1000,
                            "easeOutExpo",
                            "${containerImage}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid182",
                            "scaleY",
                            0,
                            1000,
                            "easeOutExpo",
                            "${number_2}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid158",
                            "scaleY",
                            0,
                            1000,
                            "easeOutExpo",
                            "${rectangleOver}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid154",
                            "scaleY",
                            0,
                            1000,
                            "easeOutExpo",
                            "${block2}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid150",
                            "opacity",
                            0,
                            1000,
                            "easeOutExpo",
                            "${containerImage}",
                            '0',
                            '1'
                        ],
                        [
                            "eid180",
                            "scaleX",
                            0,
                            1000,
                            "easeOutExpo",
                            "${number_2}",
                            '0.4',
                            '1'
                        ]
                    ]
                }
            },
            "simMenuBlock_4": {
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
                            rect: ['0px', '0px', '258px', '35px', 'auto', 'auto'],
                            fill: ['rgba(17,122,102,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            rect: ['201px', '2px', '30px', '35px', 'auto', 'auto'],
                            id: 'next',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/next.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            rect: ['27px', '2px', '30px', '35px', 'auto', 'auto'],
                            id: 'before',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/before.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '258px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "start": 250
                    },
                    data: [
                        [
                            "eid132",
                            "opacity",
                            250,
                            150,
                            "linear",
                            "${next}",
                            '0',
                            '1'
                        ],
                        [
                            "eid136",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${next}",
                            '0',
                            '0'
                        ],
                        [
                            "eid140",
                            "scaleY",
                            250,
                            0,
                            "linear",
                            "${next}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "opacity",
                            250,
                            150,
                            "linear",
                            "${before}",
                            '0',
                            '1'
                        ],
                        [
                            "eid128",
                            "top",
                            250,
                            150,
                            "linear",
                            "${next}",
                            '67px',
                            '2px'
                        ],
                        [
                            "eid133",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${before}",
                            '0',
                            '0'
                        ],
                        [
                            "eid137",
                            "scaleX",
                            250,
                            0,
                            "linear",
                            "${before}",
                            '0',
                            '1'
                        ],
                        [
                            "eid135",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${next}",
                            '0',
                            '0'
                        ],
                        [
                            "eid139",
                            "scaleX",
                            250,
                            0,
                            "linear",
                            "${next}",
                            '0',
                            '1'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${before}",
                            '0',
                            '0'
                        ],
                        [
                            "eid138",
                            "scaleY",
                            250,
                            0,
                            "linear",
                            "${before}",
                            '0',
                            '1'
                        ],
                        [
                            "eid126",
                            "top",
                            250,
                            150,
                            "linear",
                            "${before}",
                            '67px',
                            '2px'
                        ]
                    ]
                }
            },
            "simBlock4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '258px', '258px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'block2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/block.png', '0px', '0px']
                        },
                        {
                            rect: ['-20px', '-20px', '136px', '162px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.4', '0.4']],
                            id: 'number_4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/number_4.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'rectangleOver',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            userClass: '',
                            transform: [[], [], [], ['0.3', '0.3']],
                            rect: ['6px', '6px', '244px', '244px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'containerImage',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            userClass: '',
                            transform: [[], [], [], ['0.3', '0.3']],
                            rect: ['6px', '6px', '244px', '244px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'simMenuBlock_4',
                            symbolName: 'simMenuBlock_4',
                            rect: ['0px', '257px', null, null, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '258px', '318px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid184",
                            "opacity",
                            0,
                            1000,
                            "easeOutExpo",
                            "${number_4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid152",
                            "scaleX",
                            0,
                            1000,
                            "easeOutExpo",
                            "${block2}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid188",
                            "scaleY",
                            0,
                            1000,
                            "easeOutExpo",
                            "${number_4}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid144",
                            "opacity",
                            0,
                            1000,
                            "easeOutExpo",
                            "${block2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid146",
                            "opacity",
                            0,
                            1000,
                            "easeOutExpo",
                            "${rectangleOver}",
                            '0',
                            '1'
                        ],
                        [
                            "eid166",
                            "scaleY",
                            0,
                            1000,
                            "easeOutExpo",
                            "${containerImage}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid164",
                            "scaleX",
                            0,
                            1000,
                            "easeOutExpo",
                            "${containerImage}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid156",
                            "scaleX",
                            0,
                            1000,
                            "easeOutExpo",
                            "${rectangleOver}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid158",
                            "scaleY",
                            0,
                            1000,
                            "easeOutExpo",
                            "${rectangleOver}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid186",
                            "scaleX",
                            0,
                            1000,
                            "easeOutExpo",
                            "${number_4}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid150",
                            "opacity",
                            0,
                            1000,
                            "easeOutExpo",
                            "${containerImage}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "scaleY",
                            0,
                            1000,
                            "easeOutExpo",
                            "${block2}",
                            '0.3',
                            '1'
                        ]
                    ]
                }
            },
            "simBlock5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '258px', '258px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'block2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/block.png', '0px', '0px']
                        },
                        {
                            rect: ['-11px', '-16px', '139px', '144px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.4', '0.4']],
                            id: 'number_5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/number_5.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'rectangleOver',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            userClass: '',
                            transform: [[], [], [], ['0.3', '0.3']],
                            rect: ['6px', '6px', '244px', '244px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'containerImage',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            userClass: '',
                            transform: [[], [], [], ['0.3', '0.3']],
                            rect: ['6px', '6px', '244px', '244px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'simMenuBlock_5',
                            symbolName: 'simMenuBlock_5',
                            rect: ['0px', '257px', null, null, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '258px', '318px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid152",
                            "scaleX",
                            0,
                            1000,
                            "easeOutExpo",
                            "${block2}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid156",
                            "scaleX",
                            0,
                            1000,
                            "easeOutExpo",
                            "${rectangleOver}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid144",
                            "opacity",
                            0,
                            1000,
                            "easeOutExpo",
                            "${block2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "scaleY",
                            0,
                            1000,
                            "easeOutExpo",
                            "${block2}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid166",
                            "scaleY",
                            0,
                            1000,
                            "easeOutExpo",
                            "${containerImage}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid190",
                            "opacity",
                            0,
                            1000,
                            "easeOutExpo",
                            "${number_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid164",
                            "scaleX",
                            0,
                            1000,
                            "easeOutExpo",
                            "${containerImage}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid192",
                            "scaleX",
                            0,
                            1000,
                            "easeOutExpo",
                            "${number_5}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid158",
                            "scaleY",
                            0,
                            1000,
                            "easeOutExpo",
                            "${rectangleOver}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid146",
                            "opacity",
                            0,
                            1000,
                            "easeOutExpo",
                            "${rectangleOver}",
                            '0',
                            '1'
                        ],
                        [
                            "eid194",
                            "scaleY",
                            0,
                            1000,
                            "easeOutExpo",
                            "${number_5}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid150",
                            "opacity",
                            0,
                            1000,
                            "easeOutExpo",
                            "${containerImage}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simMenuBlock_5": {
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
                            rect: ['0px', '0px', '258px', '35px', 'auto', 'auto'],
                            fill: ['rgba(17,122,102,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            rect: ['201px', '2px', '30px', '35px', 'auto', 'auto'],
                            id: 'next',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/next.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            rect: ['27px', '2px', '30px', '35px', 'auto', 'auto'],
                            id: 'before',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/before.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '258px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "start": 250
                    },
                    data: [
                        [
                            "eid126",
                            "top",
                            250,
                            150,
                            "linear",
                            "${before}",
                            '67px',
                            '2px'
                        ],
                        [
                            "eid132",
                            "opacity",
                            250,
                            150,
                            "linear",
                            "${next}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "opacity",
                            250,
                            150,
                            "linear",
                            "${before}",
                            '0',
                            '1'
                        ],
                        [
                            "eid128",
                            "top",
                            250,
                            150,
                            "linear",
                            "${next}",
                            '67px',
                            '2px'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${before}",
                            '0',
                            '0'
                        ],
                        [
                            "eid138",
                            "scaleY",
                            250,
                            0,
                            "linear",
                            "${before}",
                            '0',
                            '1'
                        ],
                        [
                            "eid135",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${next}",
                            '0',
                            '0'
                        ],
                        [
                            "eid139",
                            "scaleX",
                            250,
                            0,
                            "linear",
                            "${next}",
                            '0',
                            '1'
                        ],
                        [
                            "eid133",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${before}",
                            '0',
                            '0'
                        ],
                        [
                            "eid137",
                            "scaleX",
                            250,
                            0,
                            "linear",
                            "${before}",
                            '0',
                            '1'
                        ],
                        [
                            "eid136",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${next}",
                            '0',
                            '0'
                        ],
                        [
                            "eid140",
                            "scaleY",
                            250,
                            0,
                            "linear",
                            "${next}",
                            '0',
                            '1'
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
                            text: '<p style=\"margin: 0px;\">​Ir al Menú Anterior</p>',
                            rect: ['-23px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
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
                            text: '<p style=\"margin: 0px;\">​Ir al Menú Principal</p>',
                            rect: ['-26px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
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
                            text: '<p style=\"margin: 0px;\">​Encender/Apagar Sonido</p>',
                            rect: ['71px', '17px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
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
                            text: '<p style=\"margin: 0px;\">​Intrucciones</p>',
                            rect: ['9px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
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
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['30px', '39px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text2',
                            opacity: '1',
                            text: '<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 500; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">Crea tu propia historia y dime lo que sucede &nbsp;en tu historia.&nbsp;</p><p style=\"margin: 0px; text-align: center; font-family: Arial, Helvetica, sans-serif; font-weight: 500; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-indent: 0px; line-height: normal;\"><span style=\"color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 500; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\"></p><p></p>',
                            type: 'text'
                        },
                        {
                            rect: ['-636px', '34px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 500; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">Selecciona las imágenes&nbsp;​en el orden del 1 al 5 y luego </p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 500; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">escribe tu historia arriba.</p><p style=\"margin: 0px;\"><span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500;\"></span></p>',
                            align: 'left',
                            type: 'text'
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
                    duration: 6500,
                    autoPlay: false,
                    labels: {
                        "second": 4000,
                        "end": 6500
                    },
                    data: [
                        [
                            "eid204",
                            "left",
                            4000,
                            1000,
                            "easeOutElastic",
                            "${Text}",
                            '-636px',
                            '76px'
                        ],
                        [
                            "eid195",
                            "top",
                            1350,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '39px',
                            '39px'
                        ],
                        [
                            "eid196",
                            "top",
                            2500,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '34px',
                            '40px'
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
                            '30px'
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
                        ],
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
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Pem165_edgeActions.js");
})("EDGE-330560498");
