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
                            id: 'simMask',
                            symbolName: 'simMask',
                            type: 'rect',
                            rect: ['833px', '23px', '212', '179', 'auto', 'auto']
                        },
                        {
                            id: 'back',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"back.png",'0px','0px']
                        },
                        {
                            id: 'simPot',
                            symbolName: 'simPot',
                            type: 'rect',
                            rect: ['814', '524', '182', '226', 'auto', 'auto']
                        },
                        {
                            id: 'divCube',
                            type: 'rect',
                            rect: ['110px', '188px', '420px', '260px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [3,"rgba(85,16,158,1.00)","dashed"],
                            userClass: "box"
                        },
                        {
                            id: 'divQ',
                            type: 'rect',
                            rect: ['565px', '188px', '420px', '260px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [3,"rgba(85,16,158,1.00)","dashed"],
                            userClass: "box"
                        },
                        {
                            id: 'simWizard',
                            symbolName: 'simWizard',
                            type: 'rect',
                            rect: ['-76', '208', '433', '555', 'auto', 'auto']
                        },
                        {
                            id: 'simWizardShine',
                            symbolName: 'simWizardShine',
                            type: 'rect',
                            rect: ['294', '431', '90', '96', 'auto', 'auto']
                        },
                        {
                            id: 'simButtons',
                            symbolName: 'simButtons',
                            type: 'rect',
                            rect: ['349px', '486', '325', '53', 'auto', 'auto']
                        },
                        {
                            id: 'simSmoke',
                            symbolName: 'simSmoke',
                            type: 'rect',
                            rect: ['820', '486', '158', '151', 'auto', 'auto']
                        },
                        {
                            id: 'simIntrucciones',
                            symbolName: 'simIntrucciones',
                            type: 'rect',
                            rect: ['68px', '53px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['92px', '7px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 28px; color: rgb(255, 255, 255);\">¿Con cuáles de los diseños siguientes se puede armar un cubo?</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
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
                    duration: 16000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "simWizard": {
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
                            id: 'Rectangle6',
                            stroke: [3, 'rgb(85, 16, 158)', 'none'],
                            rect: ['143px', '49px', '81px', '116px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['-400px', '0px', '433px', '555px', 'auto', 'auto'],
                            id: 'wizard',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wizard.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '433px', '555px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid5",
                            "left",
                            0,
                            1500,
                            "easeOutExpo",
                            "${wizard}",
                            '-400px',
                            '0px'
                        ]
                    ]
                }
            },
            "simPot": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['380px', '0px', '182px', '226px', 'auto', 'auto'],
                            id: 'pot',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pot.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '182px', '226px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid7",
                            "left",
                            0,
                            1500,
                            "easeOutExpo",
                            "${pot}",
                            '380px',
                            '0px'
                        ]
                    ]
                }
            },
            "simMask": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-211px', '212px', '179px', 'auto', 'auto'],
                            id: 'mask',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mask.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '212px', '179px']
                        }
                    }
                },
                timeline: {
                    duration: 1441,
                    autoPlay: false,
                    data: [
                        [
                            "eid13",
                            "top",
                            0,
                            1441,
                            "easeOutExpo",
                            "${mask}",
                            '-211px',
                            '0px'
                        ]
                    ]
                }
            },
            "simButtons": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '325', '53', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            c: [
                            {
                                type: 'rect',
                                id: 'simNot',
                                symbolName: 'simNot',
                                cursor: 'pointer',
                                rect: ['113px', '0', '100', '48', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '325px', '53px']
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
            "simNot": {
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
                            rect: ['14px', '0px', '150px', '48px', 'auto', 'auto'],
                            id: 'containerButton2',
                            stroke: [3, 'rgb(85, 16, 158)', 'none'],
                            fill: ['rgba(85,16,158,1.00)'],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<font color=\"#ffffff\">Siguiente</font></p>',
                                type: 'text',
                                rect: ['8px', '7px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                rect: ['126px', '8px', '20px', '31px', 'auto', 'auto'],
                                id: 'next',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/next.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '150px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid18",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${containerButton2}",
                            'rgba(85,16,158,1)',
                            'rgba(37,15,56,1.00)'
                        ],
                        [
                            "eid39",
                            "left",
                            0,
                            0,
                            "linear",
                            "${containerButton2}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid41",
                            "width",
                            0,
                            0,
                            "linear",
                            "${containerButton2}",
                            '150px',
                            '150px'
                        ]
                    ]
                }
            },
            "simSmoke": {
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
                            id: 'Rectangle4',
                            stroke: [3, 'rgb(85, 16, 158)', 'none'],
                            rect: ['0px', '0px', '158px', '151px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'image',
                            id: 'smokeCopy',
                            opacity: '0.8705035971223',
                            rect: ['79px', '105px', '17px', '33px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/smoke.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.85', '0.85']],
                            rect: ['54px', '89px', '17px', '33px', 'auto', 'auto'],
                            id: 'smokeCopy3',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/smoke.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.85', '0.85']],
                            rect: ['25px', '103px', '17px', '33px', 'auto', 'auto'],
                            id: 'smokeCopy6',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/smoke.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '158px', '151px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid31",
                            "location",
                            0,
                            1500,
                            "linear",
                            "${smokeCopy3}",
                            [[62.52, 105.5, 0, 0, 0, 0,0],[44.08, 60.69, -7.28, -84.54, -8.11, -94.22,49.36],[52.23, -14.02, 0, 0, 0, 0,124.71]]
                        ],
                        [
                            "eid35",
                            "location",
                            0,
                            1500,
                            "linear",
                            "${smokeCopy6}",
                            [[33.79, 119.03, 0, 0, 0, 0,0],[38.1, 47.77, -41.96, -107.41, -35.07, -89.77,72.71],[-17.98, -13.49, 0, 0, 0, 0,156.96]]
                        ],
                        [
                            "eid24",
                            "location",
                            0,
                            1500,
                            "linear",
                            "${smokeCopy}",
                            [[87.5, 121.56, 0, 0, 0, 0,0],[79.59, 74.25, 0.01, -141.07, 0.01, -77.21,48.15],[118.52, -26.02, 0, 0, 0, 0,157.11]]
                        ],
                        [
                            "eid37",
                            "opacity",
                            0,
                            1500,
                            "linear",
                            "${smokeCopy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid26",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${smokeCopy}",
                            '0.8705035971223',
                            '0.8705035971223'
                        ],
                        [
                            "eid28",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${smokeCopy}",
                            '0.8705040216445923',
                            '0'
                        ],
                        [
                            "eid34",
                            "opacity",
                            0,
                            1500,
                            "linear",
                            "${smokeCopy3}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simWizardShine": {
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
                            id: 'Rectangle5',
                            stroke: [3, 'rgb(85, 16, 158)', 'none'],
                            rect: ['0px', '0px', '90px', '96px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['45px', '7px', '8px', '30px', 'auto', 'auto'],
                            id: 'shine1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/shine1.png', '0px', '0px']
                        },
                        {
                            rect: ['17px', '16px', '19px', '26px', 'auto', 'auto'],
                            id: 'shine2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/shine2.png', '0px', '0px']
                        },
                        {
                            rect: ['-3px', '43px', '29px', '9px', 'auto', 'auto'],
                            id: 'shine3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/shine3.png', '0px', '0px']
                        },
                        {
                            rect: ['31px', '67px', '9px', '29px', 'auto', 'auto'],
                            id: 'shine4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/shine4.png', '0px', '0px']
                        },
                        {
                            rect: ['45px', '60px', '19px', '26px', 'auto', 'auto'],
                            id: 'shine5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/shine5.png', '0px', '0px']
                        },
                        {
                            rect: ['60px', '52px', '30px', '9px', 'auto', 'auto'],
                            id: 'shine6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/shine6.png', '0px', '0px']
                        },
                        {
                            rect: ['60px', '22px', '26px', '18px', 'auto', 'auto'],
                            id: 'shine7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/shine7.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '96px']
                        }
                    }
                },
                timeline: {
                    duration: 467,
                    autoPlay: true,
                    data: [
                        [
                            "eid54",
                            "top",
                            0,
                            400,
                            "linear",
                            "${shine3}",
                            '43px',
                            '40px'
                        ],
                        [
                            "eid53",
                            "left",
                            0,
                            400,
                            "linear",
                            "${shine3}",
                            '-3px',
                            '-30px'
                        ],
                        [
                            "eid59",
                            "left",
                            0,
                            400,
                            "linear",
                            "${shine6}",
                            '60px',
                            '96px'
                        ],
                        [
                            "eid52",
                            "top",
                            67,
                            400,
                            "linear",
                            "${shine2}",
                            '16px',
                            '-12px'
                        ],
                        [
                            "eid51",
                            "left",
                            67,
                            400,
                            "linear",
                            "${shine2}",
                            '17px',
                            '-7px'
                        ],
                        [
                            "eid61",
                            "left",
                            0,
                            400,
                            "linear",
                            "${shine7}",
                            '60px',
                            '90px'
                        ],
                        [
                            "eid55",
                            "left",
                            0,
                            400,
                            "linear",
                            "${shine4}",
                            '31px',
                            '18px'
                        ],
                        [
                            "eid57",
                            "left",
                            23,
                            444,
                            "linear",
                            "${shine5}",
                            '45px',
                            '66px'
                        ],
                        [
                            "eid50",
                            "top",
                            0,
                            400,
                            "linear",
                            "${shine1}",
                            '7px',
                            '-16px'
                        ],
                        [
                            "eid49",
                            "left",
                            0,
                            400,
                            "linear",
                            "${shine1}",
                            '45px',
                            '55px'
                        ],
                        [
                            "eid58",
                            "top",
                            23,
                            444,
                            "linear",
                            "${shine5}",
                            '60px',
                            '92px'
                        ],
                        [
                            "eid60",
                            "top",
                            0,
                            400,
                            "linear",
                            "${shine6}",
                            '52px',
                            '60px'
                        ],
                        [
                            "eid62",
                            "top",
                            0,
                            400,
                            "linear",
                            "${shine7}",
                            '22px',
                            '5px'
                        ],
                        [
                            "eid56",
                            "top",
                            0,
                            400,
                            "linear",
                            "${shine4}",
                            '67px',
                            '105px'
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
                            rect: ['116px', '54px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255);\">Bienvenido y bienvenida a la casa mágica.</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: lato, sans-serif; color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: lato, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\"></span></p>',
                            opacity: '1',
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'Text2Copy',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            rect: ['-570px', '0px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px; text-align: center;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">&nbsp;Ayuda al mago Justo a encontrar con cuales de los </p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">diseños se puede formar un cubo. Da clic en lo que </p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">creas conveniente.</p><p></p><p style=\"margin: 0px; text-align: center;\">.<span style=\"color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: lato, sans-serif; color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: lato, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\"></span></p>',
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
                    duration: 16000,
                    autoPlay: true,
                    labels: {
                        "end": 16000
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
                            "eid109",
                            "top",
                            2750,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '54px',
                            '54px'
                        ],
                        [
                            "eid76",
                            "top",
                            3900,
                            0,
                            "linear",
                            "${Text2}",
                            '54px',
                            '54px'
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
                            '-508px',
                            '116px'
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
                        ],
                        [
                            "eid114",
                            "opacity",
                            0,
                            0,
                            "easeOutElastic",
                            "${Text2Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid115",
                            "opacity",
                            7000,
                            0,
                            "easeOutElastic",
                            "${Text2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid112",
                            "left",
                            7000,
                            1500,
                            "easeOutElastic",
                            "${Text2Copy}",
                            '-570px',
                            '64px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Pem156_edgeActions.js");
})("EDGE-96866825");
