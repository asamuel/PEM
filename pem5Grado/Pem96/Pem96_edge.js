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
            "../../cdn/bootstrap.min.css",
            "../../cdn/howler.min.js",
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
                            id: 'back',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '300px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"back.png",'0px','0px']
                        },
                        {
                            id: 'simSun',
                            symbolName: 'simSun',
                            type: 'rect',
                            rect: ['878', '0', '146', '110', 'auto', 'auto']
                        },
                        {
                            id: 'simSeagullContainer',
                            symbolName: 'simSeagullContainer',
                            type: 'rect',
                            rect: ['1024', '0', '198', '126', 'auto', 'auto']
                        },
                        {
                            id: 'simCloud',
                            symbolName: 'simCloud',
                            type: 'rect',
                            rect: ['52', '15', '165', '96', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'simSea',
                            symbolName: 'simSea',
                            type: 'rect',
                            rect: ['0', '70', '1024', '703', 'auto', 'auto']
                        },
                        {
                            id: 'simFishes',
                            symbolName: 'simFishes',
                            type: 'rect',
                            rect: ['0', '202', '1024', '538', 'auto', 'auto']
                        },
                        {
                            id: 'simBubbleNone',
                            symbolName: 'simBubbleNone',
                            type: 'rect',
                            rect: ['0', '202', '1024', '566', 'auto', 'auto']
                        },
                        {
                            id: 'simText',
                            symbolName: 'simText',
                            type: 'rect',
                            rect: ['219px', '220', '596', '80', 'auto', 'auto']
                        },
                        {
                            id: 'simBubbleContainer',
                            symbolName: 'simBubbleContainer',
                            type: 'rect',
                            rect: ['0', '208', '1024', '560', 'auto', 'auto']
                        },
                        {
                            id: 'groundSea',
                            type: 'image',
                            rect: ['0px', '712px', '1024px', '56px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"groundSea.png",'0px','0px']
                        },
                        {
                            id: 'simSeaStar',
                            symbolName: 'simSeaStar',
                            type: 'rect',
                            rect: ['835', '576', '189', '192', 'auto', 'auto']
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
                            id: 'backfirst',
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
                            rect: ['null', 'null', '1024px', '768px', 'auto', 'auto'],
                            sizeRange: ['320px','1920px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid60",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${backfirst}",
                            '1',
                            '0'
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
                            type: 'image',
                            id: 'cloud',
                            rect: ['-240px', '-13px', '138px', '80px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cloud.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cloudCopy',
                            rect: ['-553px', '-3px', '121px', '70px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cloud.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '165px', '96px']
                        }
                    }
                },
                timeline: {
                    duration: 105000,
                    autoPlay: false,
                    data: [
                        [
                            "eid13",
                            "height",
                            0,
                            0,
                            "linear",
                            "${cloudCopy}",
                            '70px',
                            '70px'
                        ],
                        [
                            "eid14",
                            "width",
                            0,
                            0,
                            "linear",
                            "${cloudCopy}",
                            '121px',
                            '121px'
                        ],
                        [
                            "eid10",
                            "top",
                            0,
                            105000,
                            "linear",
                            "${cloudCopy}",
                            '-3px',
                            '-12px'
                        ],
                        [
                            "eid8",
                            "left",
                            0,
                            75000,
                            "linear",
                            "${cloud}",
                            '-240px',
                            '1003px'
                        ],
                        [
                            "eid9",
                            "left",
                            0,
                            105000,
                            "linear",
                            "${cloudCopy}",
                            '-553px',
                            '1200px'
                        ]
                    ]
                }
            },
            "simSea": {
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
                            id: 'sea',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1024px', '703px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'image',
                            id: 'seaBack',
                            opacity: '1',
                            rect: ['0px', '42px', '1024px', '182px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/seaBack.png', '0px', '0px']
                        },
                        {
                            rect: ['-203px', '-104px', null, null, 'auto', 'auto'],
                            id: 'simSailBoat',
                            symbolName: 'simSailBoat',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'seaMiddle',
                            opacity: '1',
                            rect: ['0px', '74px', '1024px', '187px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/seaMiddle.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'seaFront',
                            opacity: '1',
                            rect: ['0px', '106px', '1024px', '589px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/seaFront.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '703px']
                        }
                    }
                },
                timeline: {
                    duration: 3200,
                    autoPlay: false,
                    data: [
                        [
                            "eid62",
                            "top",
                            0,
                            800,
                            "linear",
                            "${seaFront}",
                            '106px',
                            '100px'
                        ],
                        [
                            "eid63",
                            "top",
                            800,
                            800,
                            "linear",
                            "${seaFront}",
                            '100px',
                            '106px'
                        ],
                        [
                            "eid66",
                            "top",
                            1600,
                            800,
                            "linear",
                            "${seaBack}",
                            '42px',
                            '36px'
                        ],
                        [
                            "eid67",
                            "top",
                            2400,
                            800,
                            "linear",
                            "${seaBack}",
                            '36px',
                            '42px'
                        ],
                        [
                            "eid64",
                            "top",
                            800,
                            800,
                            "linear",
                            "${seaMiddle}",
                            '74px',
                            '68px'
                        ],
                        [
                            "eid65",
                            "top",
                            1600,
                            800,
                            "linear",
                            "${seaMiddle}",
                            '68px',
                            '74px'
                        ]
                    ]
                }
            },
            "simSailBoat": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '49px', '151px', '144px', 'auto', 'auto'],
                            id: 'sailboat2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sailboat.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '203px', '193px']
                        }
                    }
                },
                timeline: {
                    duration: 60000,
                    autoPlay: false,
                    data: [
                        [
                            "eid68",
                            "left",
                            0,
                            55000,
                            "linear",
                            "${sailboat2}",
                            '0px',
                            '1302px'
                        ]
                    ]
                }
            },
            "simSun": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-25px', '45px', '17px', '4px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle5',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(235,149,50,1.00)']
                        },
                        {
                            rect: ['-18px', '45px', '10px', '4px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle5Copy4',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(235,149,50,1.00)']
                        },
                        {
                            rect: ['112px', '45px', '17px', '4px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle5Copy',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(235,149,50,1.00)']
                        },
                        {
                            rect: ['102px', '45px', '10px', '4px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle5Copy5',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(235,149,50,1.00)']
                        },
                        {
                            rect: ['63px', '94px', '17px', '4px', 'auto', 'auto'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle5Copy2',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(235,149,50,1.00)']
                        },
                        {
                            rect: ['66px', '80px', '10px', '4px', 'auto', 'auto'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle5Copy6',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(235,149,50,1.00)']
                        },
                        {
                            rect: ['65px', '-2px', '17px', '4px', 'auto', 'auto'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle5Copy3',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(235,149,50,1.00)']
                        },
                        {
                            rect: ['70px', '16px', '10px', '4px', 'auto', 'auto'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle5Copy7',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(235,149,50,1.00)']
                        },
                        {
                            rect: ['141px', '-12px', '17px', '4px', 'auto', 'auto'],
                            transform: [[], ['145'], [0, 0, 0], [1, 1, 1]],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle5Copy8',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(235,149,50,1.00)']
                        },
                        {
                            rect: ['92px', '21px', '10px', '4px', 'auto', 'auto'],
                            transform: [[], ['145'], [0, 0, 0], [1, 1, 1]],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle5Copy9',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(235,149,50,1.00)']
                        },
                        {
                            rect: ['28px', '15px', '17px', '4px', 'auto', 'auto'],
                            transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle5Copy12',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(235,149,50,1.00)']
                        },
                        {
                            rect: ['40px', '24px', '10px', '4px', 'auto', 'auto'],
                            transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle5Copy13',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(235,149,50,1.00)']
                        },
                        {
                            rect: ['32px', '77px', '17px', '4px', 'auto', 'auto'],
                            transform: [[], ['145'], [0, 0, 0], [1, 1, 1]],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle5Copy15',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(235,149,50,1.00)']
                        },
                        {
                            rect: ['44px', '70px', '10px', '4px', 'auto', 'auto'],
                            transform: [[], ['145'], [0, 0, 0], [1, 1, 1]],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle5Copy14',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(235,149,50,1.00)']
                        },
                        {
                            rect: ['97px', '78px', '17px', '4px', 'auto', 'auto'],
                            transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle5Copy17',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(235,149,50,1.00)']
                        },
                        {
                            rect: ['92px', '70px', '10px', '4px', 'auto', 'auto'],
                            transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle5Copy16',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(235,149,50,1.00)']
                        },
                        {
                            rect: ['33px', '8px', '79px', '79px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(235,149,50,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '146px', '110px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    labels: {
                        "start": 300
                    },
                    data: [
                        [
                            "eid133",
                            "left",
                            900,
                            500,
                            "linear",
                            "${Rectangle5Copy14}",
                            '44px',
                            '-13px'
                        ],
                        [
                            "eid129",
                            "left",
                            900,
                            500,
                            "linear",
                            "${Rectangle5Copy13}",
                            '40px',
                            '-13px'
                        ],
                        [
                            "eid127",
                            "left",
                            300,
                            500,
                            "linear",
                            "${Rectangle5Copy12}",
                            '28px',
                            '-16px'
                        ],
                        [
                            "eid122",
                            "top",
                            900,
                            500,
                            "linear",
                            "${Rectangle5Copy9}",
                            '21px',
                            '-12px'
                        ],
                        [
                            "eid148",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle5Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid164",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Rectangle5Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid138",
                            "top",
                            900,
                            500,
                            "linear",
                            "${Rectangle5Copy16}",
                            '70px',
                            '113px'
                        ],
                        [
                            "eid90",
                            "left",
                            200,
                            500,
                            "linear",
                            "${Rectangle5Copy}",
                            '112px',
                            '153px'
                        ],
                        [
                            "eid128",
                            "top",
                            300,
                            500,
                            "linear",
                            "${Rectangle5Copy12}",
                            '15px',
                            '-12px'
                        ],
                        [
                            "eid121",
                            "left",
                            900,
                            500,
                            "linear",
                            "${Rectangle5Copy9}",
                            '92px',
                            '143px'
                        ],
                        [
                            "eid153",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle5Copy14}",
                            '0',
                            '0'
                        ],
                        [
                            "eid169",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Rectangle5Copy14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "left",
                            800,
                            500,
                            "linear",
                            "${Rectangle5Copy5}",
                            '102px',
                            '157px'
                        ],
                        [
                            "eid130",
                            "top",
                            900,
                            500,
                            "linear",
                            "${Rectangle5Copy13}",
                            '24px',
                            '-12px'
                        ],
                        [
                            "eid99",
                            "top",
                            800,
                            500,
                            "linear",
                            "${Rectangle5Copy7}",
                            '16px',
                            '-18px'
                        ],
                        [
                            "eid150",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle5Copy6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid166",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Rectangle5Copy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid134",
                            "top",
                            900,
                            500,
                            "linear",
                            "${Rectangle5Copy14}",
                            '70px',
                            '113px'
                        ],
                        [
                            "eid143",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle5Copy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid159",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Rectangle5Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid149",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle5Copy15}",
                            '0',
                            '0'
                        ],
                        [
                            "eid165",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Rectangle5Copy15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid89",
                            "top",
                            800,
                            500,
                            "linear",
                            "${Rectangle5Copy6}",
                            '80px',
                            '122px'
                        ],
                        [
                            "eid154",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle5Copy16}",
                            '0',
                            '0'
                        ],
                        [
                            "eid170",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Rectangle5Copy16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle5Copy9}",
                            '0',
                            '0'
                        ],
                        [
                            "eid158",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Rectangle5Copy9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid140",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid156",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Rectangle5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid135",
                            "left",
                            300,
                            500,
                            "linear",
                            "${Rectangle5Copy17}",
                            '97px',
                            '150px'
                        ],
                        [
                            "eid144",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle5Copy13}",
                            '0',
                            '0'
                        ],
                        [
                            "eid160",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Rectangle5Copy13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid152",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle5Copy7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid168",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Rectangle5Copy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid88",
                            "left",
                            800,
                            500,
                            "linear",
                            "${Rectangle5Copy6}",
                            '66px',
                            '67px'
                        ],
                        [
                            "eid147",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle5Copy5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid163",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Rectangle5Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid93",
                            "top",
                            200,
                            500,
                            "linear",
                            "${Rectangle5Copy3}",
                            '-2px',
                            '-44px'
                        ],
                        [
                            "eid92",
                            "left",
                            200,
                            500,
                            "linear",
                            "${Rectangle5Copy3}",
                            '65px',
                            '66px'
                        ],
                        [
                            "eid146",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle5Copy17}",
                            '0',
                            '0'
                        ],
                        [
                            "eid162",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Rectangle5Copy17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid151",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle5Copy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid167",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Rectangle5Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid141",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle5Copy8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid157",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Rectangle5Copy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid120",
                            "top",
                            300,
                            500,
                            "linear",
                            "${Rectangle5Copy8}",
                            '14px',
                            '-12px'
                        ],
                        [
                            "eid136",
                            "top",
                            300,
                            500,
                            "linear",
                            "${Rectangle5Copy17}",
                            '78px',
                            '115px'
                        ],
                        [
                            "eid84",
                            "left",
                            200,
                            500,
                            "linear",
                            "${Rectangle5}",
                            '16px',
                            '-25px'
                        ],
                        [
                            "eid145",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle5Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid161",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Rectangle5Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid119",
                            "left",
                            300,
                            500,
                            "linear",
                            "${Rectangle5Copy8}",
                            '99px',
                            '141px'
                        ],
                        [
                            "eid132",
                            "top",
                            300,
                            500,
                            "linear",
                            "${Rectangle5Copy15}",
                            '77px',
                            '115px'
                        ],
                        [
                            "eid87",
                            "top",
                            200,
                            500,
                            "linear",
                            "${Rectangle5Copy2}",
                            '94px',
                            '122px'
                        ],
                        [
                            "eid137",
                            "left",
                            900,
                            500,
                            "linear",
                            "${Rectangle5Copy16}",
                            '92px',
                            '157px'
                        ],
                        [
                            "eid131",
                            "left",
                            300,
                            500,
                            "linear",
                            "${Rectangle5Copy15}",
                            '32px',
                            '-23px'
                        ],
                        [
                            "eid86",
                            "left",
                            200,
                            500,
                            "linear",
                            "${Rectangle5Copy2}",
                            '63px',
                            '64px'
                        ],
                        [
                            "eid139",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle5Copy12}",
                            '0',
                            '0'
                        ],
                        [
                            "eid155",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Rectangle5Copy12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid85",
                            "left",
                            800,
                            500,
                            "linear",
                            "${Rectangle5Copy4}",
                            '33px',
                            '-18px'
                        ]
                    ]
                }
            },
            "simSeagull": {
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
                            id: 'wingLeft',
                            rect: ['0px', '25px', '61px', '30px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wingLeft.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'wing_right',
                            rect: ['59px', '25px', '61px', '30px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wing_right.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '118px', '96px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: false,
                    data: [
                        [
                            "eid181",
                            "rotateZ",
                            0,
                            600,
                            "linear",
                            "${wingLeft}",
                            '0deg',
                            '-22deg'
                        ],
                        [
                            "eid185",
                            "rotateZ",
                            600,
                            600,
                            "linear",
                            "${wingLeft}",
                            '-22deg',
                            '0deg'
                        ],
                        [
                            "eid188",
                            "rotateZ",
                            1300,
                            600,
                            "linear",
                            "${wingLeft}",
                            '0deg',
                            '-22deg'
                        ],
                        [
                            "eid189",
                            "rotateZ",
                            1900,
                            600,
                            "linear",
                            "${wingLeft}",
                            '-22deg',
                            '0deg'
                        ],
                        [
                            "eid192",
                            "rotateZ",
                            2500,
                            600,
                            "linear",
                            "${wingLeft}",
                            '0deg',
                            '-22deg'
                        ],
                        [
                            "eid193",
                            "rotateZ",
                            3100,
                            600,
                            "linear",
                            "${wingLeft}",
                            '-22deg',
                            '0deg'
                        ],
                        [
                            "eid183",
                            "rotateZ",
                            0,
                            600,
                            "linear",
                            "${wing_right}",
                            '0deg',
                            '22deg'
                        ],
                        [
                            "eid184",
                            "rotateZ",
                            600,
                            600,
                            "linear",
                            "${wing_right}",
                            '22deg',
                            '0deg'
                        ],
                        [
                            "eid186",
                            "rotateZ",
                            1300,
                            600,
                            "linear",
                            "${wing_right}",
                            '0deg',
                            '22deg'
                        ],
                        [
                            "eid187",
                            "rotateZ",
                            1900,
                            600,
                            "linear",
                            "${wing_right}",
                            '22deg',
                            '0deg'
                        ],
                        [
                            "eid190",
                            "rotateZ",
                            2500,
                            600,
                            "linear",
                            "${wing_right}",
                            '0deg',
                            '22deg'
                        ],
                        [
                            "eid191",
                            "rotateZ",
                            3100,
                            600,
                            "linear",
                            "${wing_right}",
                            '22deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "simSeagullContainer": {
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
                            transform: [[], [], [], ['0.48475', '0.48475']],
                            id: 'simSeagull',
                            symbolName: 'simSeagull',
                            autoOrient: false,
                            rect: ['40px', '0px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.48475', '0.48475']],
                            id: 'simSeagullCopy',
                            symbolName: 'simSeagull',
                            autoOrient: false,
                            rect: ['56px', '15px', null, null, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '198px', '126px']
                        }
                    }
                },
                timeline: {
                    duration: 32000,
                    autoPlay: false,
                    data: [
                        [
                            "eid219",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${simSeagull}",
                            '0.48475',
                            '0.48475'
                        ],
                        [
                            "eid212",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${simSeagull}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid213",
                            "rotateZ",
                            2500,
                            2000,
                            "linear",
                            "${simSeagull}",
                            '0deg',
                            '22deg'
                        ],
                        [
                            "eid216",
                            "rotateZ",
                            10000,
                            2000,
                            "linear",
                            "${simSeagull}",
                            '22deg',
                            '0deg'
                        ],
                        [
                            "eid228",
                            "rotateZ",
                            13468,
                            4532,
                            "linear",
                            "${simSeagullCopy}",
                            '0deg',
                            '22deg'
                        ],
                        [
                            "eid231",
                            "rotateZ",
                            18000,
                            7000,
                            "linear",
                            "${simSeagullCopy}",
                            '22deg',
                            '-22deg'
                        ],
                        [
                            "eid227",
                            "top",
                            10000,
                            3468,
                            "linear",
                            "${simSeagullCopy}",
                            '15px',
                            '101px'
                        ],
                        [
                            "eid230",
                            "top",
                            13468,
                            4532,
                            "linear",
                            "${simSeagullCopy}",
                            '101px',
                            '41px'
                        ],
                        [
                            "eid233",
                            "top",
                            18000,
                            7000,
                            "linear",
                            "${simSeagullCopy}",
                            '41px',
                            '15px'
                        ],
                        [
                            "eid218",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${simSeagull}",
                            '0.48475',
                            '0.48475'
                        ],
                        [
                            "eid206",
                            "location",
                            0,
                            10000,
                            "linear",
                            "${simSeagull}",
                            [[99, 48, 0, 0, 0, 0,0],[-155.9, 47.14, -398.26, 74.36, -314.84, 58.79,255.74],[-375, 150, 0, 0, 0, 0,500.27]]
                        ],
                        [
                            "eid215",
                            "location",
                            10000,
                            10000,
                            "linear",
                            "${simSeagull}",
                            [[-375, 150, 0, 0, 0, 0,0],[-492.17, 38.62, -294.32, -99.62, -290.66, -98.38,167.51],[-765, 18, 0, 0, 0, 0,442.44]]
                        ],
                        [
                            "eid217",
                            "location",
                            20000,
                            5000,
                            "linear",
                            "${simSeagull}",
                            [[-765, 18, 0, 0, 0, 0,0],[-933.48, 40.54, -271.57, 75.17, -228.74, 63.31,170.32],[-1101, 111, 0, 0, 0, 0,352.47]]
                        ],
                        [
                            "eid226",
                            "left",
                            10000,
                            3468,
                            "linear",
                            "${simSeagullCopy}",
                            '56px',
                            '-94px'
                        ],
                        [
                            "eid229",
                            "left",
                            13468,
                            4532,
                            "linear",
                            "${simSeagullCopy}",
                            '-94px',
                            '-374px'
                        ],
                        [
                            "eid232",
                            "left",
                            18000,
                            7000,
                            "linear",
                            "${simSeagullCopy}",
                            '-374px',
                            '-768px'
                        ],
                        [
                            "eid234",
                            "left",
                            25000,
                            5000,
                            "linear",
                            "${simSeagullCopy}",
                            '-768px',
                            '-1202px'
                        ]
                    ]
                }
            },
            "simSeaStar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.4', '0.4']],
                            type: 'image',
                            rect: ['39px', '46px', '143px', '146px', 'auto', 'auto'],
                            id: 'starSea',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/starSea.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.4', '0.4']],
                            id: 'Text',
                            opacity: '0',
                            rect: ['90px', '109px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(190,221,229,1.00)', '500', 'none', '', 'break-word', 'nowrap'],
                            userClass: 'boxing',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 26px;\">Ver!</span></p>',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            id: 'simTooltip',
                            symbolName: 'simTooltip',
                            rect: ['-255', '101', '282', '64', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '189px', '192px']
                        }
                    }
                },
                timeline: {
                    duration: 28000,
                    autoPlay: false,
                    labels: {
                        "start": 4000
                    },
                    data: [
                        [
                            "eid247",
                            "scaleX",
                            0,
                            2000,
                            "easeInOutElastic",
                            "${Text}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid238",
                            "scaleX",
                            0,
                            2000,
                            "easeInOutElastic",
                            "${starSea}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid242",
                            "opacity",
                            0,
                            2000,
                            "easeInOutElastic",
                            "${starSea}",
                            '0',
                            '1'
                        ],
                        [
                            "eid249",
                            "scaleY",
                            0,
                            2000,
                            "easeInOutElastic",
                            "${Text}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid236",
                            "rotateZ",
                            6000,
                            1000,
                            "easeInOutElastic",
                            "${starSea}",
                            '0deg',
                            '-10deg'
                        ],
                        [
                            "eid245",
                            "rotateZ",
                            15000,
                            1000,
                            "easeInOutElastic",
                            "${starSea}",
                            '-10deg',
                            '0deg'
                        ],
                        [
                            "eid240",
                            "scaleY",
                            0,
                            2000,
                            "easeInOutElastic",
                            "${starSea}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid251",
                            "opacity",
                            0,
                            2000,
                            "easeInOutElastic",
                            "${Text}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simBubbleNone": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1024px', '566px', 'auto', 'auto'],
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'image',
                            id: 'bubble',
                            rect: ['14px', '782px', '53px', '53px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bubble.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bubbleCopy3',
                            rect: ['548px', '594px', '37px', '37px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bubble.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bubbleCopy4',
                            rect: ['843px', '674px', '37px', '37px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bubble.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bubbleCopy5',
                            rect: ['705px', '741px', '41px', '41px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bubble.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bubbleCopy2',
                            rect: ['176px', '720px', '36px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bubble.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bubbleCopy',
                            rect: ['381px', '663px', '27px', '27px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bubble.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bubbleCopy6',
                            rect: ['855px', '968px', '36px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bubble.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bubbleCopy7',
                            rect: ['219px', '941px', '27px', '27px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bubble.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bubbleCopy9',
                            rect: ['486px', '1053px', '41px', '41px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bubble.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bubbleCopy10',
                            rect: ['53px', '1005px', '27px', '27px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bubble.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bubbleCopy11',
                            rect: ['434px', '882px', '41px', '41px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bubble.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bubbleCopy8',
                            rect: ['676px', '914px', '22px', '22px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bubble.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1024px', '566px']
                        }
                    }
                },
                timeline: {
                    duration: 45000,
                    autoPlay: false,
                    labels: {
                        "start": 12000
                    },
                    data: [
                        [
                            "eid258",
                            "top",
                            0,
                            32000,
                            "linear",
                            "${bubbleCopy5}",
                            '741px',
                            '-120px'
                        ],
                        [
                            "eid311",
                            "top",
                            33000,
                            12000,
                            "linear",
                            "${bubbleCopy5}",
                            '705px',
                            '418px'
                        ],
                        [
                            "eid252",
                            "top",
                            0,
                            32000,
                            "linear",
                            "${bubble}",
                            '782px',
                            '-79px'
                        ],
                        [
                            "eid308",
                            "top",
                            33000,
                            12000,
                            "linear",
                            "${bubble}",
                            '782px',
                            '459px'
                        ],
                        [
                            "eid286",
                            "left",
                            32000,
                            0,
                            "linear",
                            "${bubbleCopy2}",
                            '176px',
                            '176px'
                        ],
                        [
                            "eid260",
                            "top",
                            0,
                            45000,
                            "linear",
                            "${bubbleCopy6}",
                            '968px',
                            '-154px'
                        ],
                        [
                            "eid254",
                            "top",
                            0,
                            45000,
                            "linear",
                            "${bubbleCopy11}",
                            '882px',
                            '-240px'
                        ],
                        [
                            "eid253",
                            "top",
                            0,
                            32000,
                            "linear",
                            "${bubbleCopy3}",
                            '594px',
                            '-267px'
                        ],
                        [
                            "eid309",
                            "top",
                            33000,
                            12000,
                            "linear",
                            "${bubbleCopy3}",
                            '594px',
                            '271px'
                        ],
                        [
                            "eid282",
                            "left",
                            32000,
                            0,
                            "linear",
                            "${bubbleCopy5}",
                            '705px',
                            '705px'
                        ],
                        [
                            "eid285",
                            "left",
                            32000,
                            0,
                            "linear",
                            "${bubbleCopy}",
                            '381px',
                            '381px'
                        ],
                        [
                            "eid261",
                            "top",
                            0,
                            45000,
                            "linear",
                            "${bubbleCopy8}",
                            '914px',
                            '-208px'
                        ],
                        [
                            "eid259",
                            "top",
                            0,
                            45000,
                            "linear",
                            "${bubbleCopy10}",
                            '1005px',
                            '-117px'
                        ],
                        [
                            "eid257",
                            "top",
                            0,
                            45000,
                            "linear",
                            "${bubbleCopy9}",
                            '1053px',
                            '-69px'
                        ],
                        [
                            "eid287",
                            "left",
                            32000,
                            0,
                            "linear",
                            "${bubble}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid263",
                            "top",
                            0,
                            32000,
                            "linear",
                            "${bubbleCopy2}",
                            '720px',
                            '-141px'
                        ],
                        [
                            "eid312",
                            "top",
                            33000,
                            12000,
                            "linear",
                            "${bubbleCopy2}",
                            '720px',
                            '397px'
                        ],
                        [
                            "eid284",
                            "left",
                            32000,
                            0,
                            "linear",
                            "${bubbleCopy3}",
                            '548px',
                            '548px'
                        ],
                        [
                            "eid262",
                            "top",
                            0,
                            45000,
                            "linear",
                            "${bubbleCopy7}",
                            '941px',
                            '-181px'
                        ],
                        [
                            "eid283",
                            "left",
                            32000,
                            0,
                            "linear",
                            "${bubbleCopy4}",
                            '843px',
                            '843px'
                        ],
                        [
                            "eid256",
                            "top",
                            0,
                            32000,
                            "linear",
                            "${bubbleCopy}",
                            '663px',
                            '-198px'
                        ],
                        [
                            "eid313",
                            "top",
                            33000,
                            12000,
                            "linear",
                            "${bubbleCopy}",
                            '663px',
                            '340px'
                        ],
                        [
                            "eid255",
                            "top",
                            0,
                            32000,
                            "linear",
                            "${bubbleCopy4}",
                            '674px',
                            '-187px'
                        ],
                        [
                            "eid310",
                            "top",
                            33000,
                            12000,
                            "linear",
                            "${bubbleCopy4}",
                            '674px',
                            '351px'
                        ]
                    ]
                }
            },
            "simFishes": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1024px', '538px', 'auto', 'auto'],
                            id: 'Rectangle9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0)']
                        },
                        {
                            type: 'image',
                            id: 'fish_1',
                            rect: ['-188px', '298px', '63px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fish_1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'fish_1Copy',
                            rect: ['-88px', '110px', '63px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fish_1.png', '0px', '0px']
                        },
                        {
                            rect: ['1104px', '334', '118px', '33px', 'auto', 'auto'],
                            id: 'fish_2',
                            transform: [[], [], [], ['0.8', '0.8']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fish_2.png', '0px', '0px']
                        },
                        {
                            rect: ['-240px', '122px', '191px', '70px', 'auto', 'auto'],
                            id: 'fish_3',
                            transform: [[], [], [], ['0.8', '0.8']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fish_3.png', '0px', '0px']
                        },
                        {
                            rect: ['1076px', '351px', '158px', '204px', 'auto', 'auto'],
                            id: 'octopus',
                            transform: [[], [], [], ['0.6', '0.6']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/octopus.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '538px']
                        }
                    }
                },
                timeline: {
                    duration: 90000,
                    autoPlay: false,
                    data: [
                        [
                            "eid318",
                            "left",
                            0,
                            60000,
                            "linear",
                            "${fish_1}",
                            '-188px',
                            '1212px'
                        ],
                        [
                            "eid323",
                            "left",
                            40000,
                            50000,
                            "linear",
                            "${fish_3}",
                            '-240px',
                            '1148px'
                        ],
                        [
                            "eid319",
                            "left",
                            0,
                            60000,
                            "linear",
                            "${fish_1Copy}",
                            '-88px',
                            '1312px'
                        ],
                        [
                            "eid330",
                            "scaleY",
                            1000,
                            0,
                            "easeInSine",
                            "${octopus}",
                            '0.6',
                            '0.6'
                        ],
                        [
                            "eid322",
                            "left",
                            0,
                            60000,
                            "linear",
                            "${fish_2}",
                            '1104px',
                            '-184px'
                        ],
                        [
                            "eid329",
                            "scaleX",
                            1000,
                            0,
                            "easeInSine",
                            "${octopus}",
                            '0.6',
                            '0.6'
                        ],
                        [
                            "eid324",
                            "location",
                            40000,
                            15000,
                            "linear",
                            "${octopus}",
                            [[1155, 453, 0, 0, 0, 0,0],[890.65, 434.14, 0, 0, 0, 0,265.02]]
                        ],
                        [
                            "eid325",
                            "location",
                            55000,
                            5000,
                            "easeInQuad",
                            "${octopus}",
                            [[890.65, 434.14, -139.72, -31.97, 0, 0,0],[767.73, 383.52, -359.71, -265.25, -97.39, -71.82,133.77],[679, 102, 0, 0, 0, 0,442.69]]
                        ],
                        [
                            "eid326",
                            "location",
                            60000,
                            7500,
                            "linear",
                            "${octopus}",
                            [[679, 102, 0, 0, 0, 0,0],[476.85, 177.39, -237.42, 159.32, -217.73, 146.11,216.78],[375, 306, 0, 0, 0, 0,383.51]]
                        ],
                        [
                            "eid327",
                            "location",
                            67500,
                            2500,
                            "easeInSine",
                            "${octopus}",
                            [[375, 306, 0, 0, 0, 0,0],[195, 418.6, 0, 0, 0, 0,212.32]]
                        ],
                        [
                            "eid328",
                            "location",
                            70000,
                            20000,
                            "easeInSine",
                            "${octopus}",
                            [[195, 418.6, 0, 0, 0, 0,0],[73.54, 161.23, -260.05, -259.88, -215.43, -215.29,286.94],[-124.8, 99, 0, 0, 0, 0,502.78]]
                        ]
                    ]
                }
            },
            "simText": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '596px', '80px', 'auto', 'auto'],
                            id: 'Rectangle10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0)']
                        },
                        {
                            rect: ['74px', '2px', '138px', '40px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'div1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(255,255,255,0.00)'],
                            c: [
                            {
                                type: 'text',
                                align: 'left',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['19px', '5px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                                userClass: 'myClass',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 28px;\">Ejemplo</span></p>',
                                id: 'textIzq'
                            }]
                        },
                        {
                            rect: ['343px', '2px', '138px', '40px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'div2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(255,255,255,0.00)'],
                            c: [
                            {
                                type: 'text',
                                align: 'left',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['18px', '5px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                                userClass: 'myClass',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 28px;\">Ejemplo</span></p>',
                                id: 'textDer'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'simDivSilaba',
                            symbolName: 'simDivSilaba',
                            rect: ['216', '2', '120', '40', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'textDecor',
                            rect: ['75px', '42px', '138px', '22px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/textDecor.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'textDecorCopy',
                            rect: ['343px', '42px', '138px', '22px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/textDecor.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'hook',
                            rect: ['264px', '43px', '24px', '46px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/hook.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '596px', '80px']
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
            "simBubbleContainer": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1024px', '560px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1024px', '560px']
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
            "simBubble": {
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
                            rect: ['0', '0', '65', '65', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '65px', '65px', 'auto', 'auto'],
                                id: 'bubble',
                                type: 'image',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/bubble2png.png', '0px', '0px']
                            },
                            {
                                userClass: 'boxing',
                                type: 'text',
                                textStyle: ['', '', '', '', 'none'],
                                id: 'text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px;\">gua</span></p>',
                                rect: ['12px', '19px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '65px', '65px']
                        }
                    }
                },
                timeline: {
                    duration: 40000,
                    autoPlay: false,
                    data: [
                        [
                            "eid335",
                            "top",
                            0,
                            40000,
                            "linear",
                            "${Group}",
                            '0px',
                            '-640px'
                        ]
                    ]
                }
            },
            "simExploit": {
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
                            id: 'exploit',
                            rect: ['0px', '0px', '177px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/exploit.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '177px', '141px']
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: true,
                    data: [
                        [
                            "eid337",
                            "scaleX",
                            0,
                            200,
                            "linear",
                            "${exploit}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid339",
                            "scaleY",
                            0,
                            200,
                            "linear",
                            "${exploit}",
                            '0.5',
                            '1'
                        ]
                    ]
                }
            },
            "simDivSilaba": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '120px', '40px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'divSilaba',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(255,255,255,1)'],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(21,21,21,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                id: 'Text',
                                opacity: '0',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 28px;\">Par</span></p>',
                                rect: ['40px', '200px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '120px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid352",
                            "scaleX",
                            1000,
                            250,
                            "linear",
                            "${divSilaba}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid354",
                            "scaleX",
                            1250,
                            250,
                            "linear",
                            "${divSilaba}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid349",
                            "top",
                            0,
                            1000,
                            "easeInQuad",
                            "${Text}",
                            '200px',
                            '2px'
                        ],
                        [
                            "eid353",
                            "scaleY",
                            1000,
                            250,
                            "linear",
                            "${divSilaba}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid355",
                            "scaleY",
                            1250,
                            250,
                            "linear",
                            "${divSilaba}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid351",
                            "opacity",
                            0,
                            1000,
                            "easeInQuad",
                            "${Text}",
                            '0',
                            '1'
                        ]
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
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            id: 'Group',
                            opacity: '0',
                            rect: ['10px', '0', '301', '64', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['34px', '8px', '248px', '43px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(21,21,21,1.00)']
                            },
                            {
                                rect: ['267px', '17px', '24px', '21px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(21,21,21,1)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(168,213,229,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                textStyle: ['', '', '', '', 'none'],
                                id: 'Text2',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 400; color: rgb(224, 243, 249);\">Ver Respuestas!</span></p>',
                                align: 'left',
                                rect: ['70px', '14px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '282px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 250
                    },
                    data: [
                        [
                            "eid359",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid362",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid357",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid360",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid363",
                            "left",
                            250,
                            250,
                            "linear",
                            "${Group}",
                            '-36px',
                            '10px'
                        ],
                        [
                            "eid358",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid361",
                            "scaleX",
                            250,
                            250,
                            "linear",
                            "${Group}",
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
                            text: '<p style=\"margin: 0px;\">​Ir al Menú Anterior</p>',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            transform: [[], [], [], ['0', '0']],
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['-23px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            opacity: '1'
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
                            text: '<p style=\"margin: 0px;\">​Ir al Menú Principal</p>',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            transform: [[], [], [], ['0', '0']],
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['-26px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            opacity: '0'
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
                            text: '<p style=\"margin: 0px;\">​Intrucciones</p>',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            transform: [[], [], [], ['0', '0']],
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['9px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            opacity: '0'
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
                            rect: ['-612px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            opacity: '1',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255);\">Con una misma sílaba deberás completar dos</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255);\"> palabras distintas. </span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255);\">Da clic en la burbuja para hacerla explotar y formar las </span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255);\">dos palabras.</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: lato, sans-serif; color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: lato, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\"></span></p>'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '686px', '135px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    labels: {
                        "end": 5000
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
                            2750,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid364",
                            "top",
                            2750,
                            0,
                            "linear",
                            "${Text2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid365",
                            "top",
                            3900,
                            0,
                            "linear",
                            "${Text2}",
                            '12px',
                            '0px'
                        ],
                        [
                            "eid24",
                            "width",
                            2000,
                            500,
                            "easeInQuad",
                            "${Rectangle}",
                            '13px',
                            '686px'
                        ],
                        [
                            "eid35",
                            "left",
                            2750,
                            1150,
                            "easeOutElastic",
                            "${Text2}",
                            '-612px',
                            '54px'
                        ],
                        [
                            "eid26",
                            "width",
                            2000,
                            500,
                            "easeInQuad",
                            "${Rectangle2}",
                            '13px',
                            '686px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Pem96_edgeActions.js");
})("EDGE-562482664");
