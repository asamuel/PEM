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
                            id: 'Pem24',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pem24.png",'0px','0px']
                        },
                        {
                            id: 'simContainer',
                            symbolName: 'simPrimeraEscena',
                            type: 'rect',
                            rect: ['97px', '105px', '832', '531', 'auto', 'auto']
                        },
                        {
                            id: 'simTitle',
                            symbolName: 'simTitle',
                            type: 'rect',
                            rect: ['90', '644', '842', '72', 'auto', 'auto']
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
                            overflow: 'visible',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    data: [

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
                            rect: ['170px', '46px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text2',
                            opacity: '1',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\">Imagínate que estás en el cine</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\"></span></p>',
                            type: 'text'
                        },
                        {
                            rect: ['-808px', '46px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500;\">A continuación se</span></p><p style=\"margin: 0px; text-align: center; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-indent: 0px; line-height: normal;\"><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\">​te presentarán una serie de imágenes que te ayudarán a</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 500; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\"><span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500;\">​razonar cuando una cantidad es mucho o poco.</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['-368px', '41px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif;\">Selecciona dando click.</span></p>',
                            align: 'center',
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
                    duration: 8000,
                    autoPlay: true,
                    labels: {
                        "start": 0,
                        "start_1": 3250,
                        "start_2": 5500,
                        "end": 8000
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
                            "eid226",
                            "left",
                            5500,
                            1000,
                            "easeOutElastic",
                            "${Text3}",
                            '-368px',
                            '196px'
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
                        ],
                        [
                            "eid220",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '-808px',
                            '-808px'
                        ],
                        [
                            "eid222",
                            "left",
                            3250,
                            1355,
                            "easeOutElastic",
                            "${Text}",
                            '-808px',
                            '45px'
                        ],
                        [
                            "eid218",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${Text2}",
                            '46px',
                            '46px'
                        ],
                        [
                            "eid219",
                            "top",
                            2400,
                            0,
                            "linear",
                            "${Text2}",
                            '46px',
                            '46px'
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
                            1150,
                            "easeOutElastic",
                            "${Text2}",
                            '-508px',
                            '170px'
                        ],
                        [
                            "eid221",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '46px',
                            '12px'
                        ],
                        [
                            "eid224",
                            "top",
                            3250,
                            0,
                            "linear",
                            "${Text}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid225",
                            "top",
                            4605,
                            0,
                            "linear",
                            "${Text}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid228",
                            "top",
                            5500,
                            0,
                            "easeOutElastic",
                            "${Text3}",
                            '41px',
                            '41px'
                        ],
                        [
                            "eid229",
                            "top",
                            6500,
                            0,
                            "easeOutElastic",
                            "${Text3}",
                            '41px',
                            '41px'
                        ]
                    ]
                }
            },
            "simPrimeraEscena": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '832px', '531px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '832px', '531px']
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
            "simEscene1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '832px', '581px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['630px', '0px', '832px', '531px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            id: '_50km',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/50km.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['315px', '552px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​50 Kilómetros</p>',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '831px', '625px']
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: true,
                    data: [
                        [
                            "eid96",
                            "left",
                            4250,
                            500,
                            "easeOutQuint",
                            "${_50km}",
                            '0px',
                            '630px'
                        ],
                        [
                            "eid15",
                            "scaleX",
                            500,
                            1000,
                            "easeOutQuint",
                            "${_50km}",
                            '0.45',
                            '1'
                        ],
                        [
                            "eid36",
                            "scaleX",
                            3750,
                            500,
                            "easeOutQuint",
                            "${_50km}",
                            '1',
                            '0.45'
                        ],
                        [
                            "eid29",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "opacity",
                            4250,
                            500,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid99",
                            "opacity",
                            4250,
                            500,
                            "easeOutQuint",
                            "${_50km}",
                            '1',
                            '0'
                        ],
                        [
                            "eid97",
                            "top",
                            4250,
                            500,
                            "easeOutQuint",
                            "${_50km}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid17",
                            "scaleY",
                            500,
                            1000,
                            "easeOutQuint",
                            "${_50km}",
                            '0.45',
                            '1'
                        ],
                        [
                            "eid38",
                            "scaleY",
                            3750,
                            500,
                            "easeOutQuint",
                            "${_50km}",
                            '1',
                            '0.45'
                        ]
                    ]
                }
            },
            "simEscene3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '832px', '531px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'text',
                            rect: ['363px', '552px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​50 Años</p>',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'image',
                            id: 'adulto',
                            rect: ['0px', '0px', '832px', '531px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            fill: ['rgba(0,0,0,0)', 'images/adulto.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '832px', '625px']
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: true,
                    data: [
                        [
                            "eid145",
                            "scaleY",
                            500,
                            750,
                            "easeOutExpo",
                            "${adulto}",
                            '0.45',
                            '1'
                        ],
                        [
                            "eid147",
                            "scaleY",
                            3750,
                            500,
                            "easeOutExpo",
                            "${adulto}",
                            '1',
                            '0.46'
                        ],
                        [
                            "eid150",
                            "top",
                            4250,
                            500,
                            "easeOutExpo",
                            "${adulto}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid143",
                            "scaleX",
                            500,
                            750,
                            "easeOutExpo",
                            "${adulto}",
                            '0.45',
                            '1'
                        ],
                        [
                            "eid146",
                            "scaleX",
                            3750,
                            500,
                            "easeOutExpo",
                            "${adulto}",
                            '1',
                            '0.46'
                        ],
                        [
                            "eid148",
                            "left",
                            3750,
                            0,
                            "easeOutExpo",
                            "${adulto}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid149",
                            "left",
                            4250,
                            500,
                            "easeOutExpo",
                            "${adulto}",
                            '0px',
                            '632px'
                        ],
                        [
                            "eid29",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "opacity",
                            4250,
                            500,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simEscene2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '832px', '581px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'text',
                            rect: ['315px', '552px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​50 Segundos</p>',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['0px', '0px', '832px', '531px', 'auto', 'auto'],
                            type: 'image',
                            id: '_50segundo',
                            opacity: '1',
                            clip: 'rect(0px 46px 531px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/50segundo.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '831px', '625px']
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: true,
                    data: [
                        [
                            "eid168",
                            "scaleX",
                            3750,
                            500,
                            "easeInQuint",
                            "${_50segundo}",
                            '1',
                            '0.45'
                        ],
                        [
                            "eid172",
                            "left",
                            4250,
                            500,
                            "easeInQuint",
                            "${_50segundo}",
                            '0px',
                            '603px'
                        ],
                        [
                            "eid173",
                            "top",
                            4250,
                            500,
                            "easeInQuint",
                            "${_50segundo}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid169",
                            "scaleY",
                            3750,
                            500,
                            "easeInQuint",
                            "${_50segundo}",
                            '1',
                            '0.45'
                        ],
                        [
                            "eid161",
                            "clip",
                            500,
                            750,
                            "linear",
                            "${_50segundo}",
                            [0,46,531,0],
                            [0,832,531,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid29",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "opacity",
                            4250,
                            500,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simLetra1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '742px', '146px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            rect: ['104px', '36px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 52px;\">¿Cuándo 50 es mucho?</span></p>',
                            opacity: '1',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '742px', '146px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "end": 1000
                    },
                    data: [
                        [
                            "eid182",
                            "opacity",
                            1000,
                            750,
                            "easeOutQuint",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid175",
                            "top",
                            0,
                            750,
                            "easeOutQuint",
                            "${Text}",
                            '-116px',
                            '36px'
                        ],
                        [
                            "eid179",
                            "top",
                            1000,
                            750,
                            "easeOutQuint",
                            "${Text}",
                            '36px',
                            '200px'
                        ]
                    ]
                }
            },
            "simEscene4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '832px', '581px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'text',
                            rect: ['269px', '552px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​50 Granos de Azúcar</p>',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['0px', '0px', '832px', '531px', 'auto', 'auto'],
                            id: 'azucar',
                            type: 'image',
                            clip: 'rect(498px 832px 531px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/azucar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '831px', '625px']
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: true,
                    data: [
                        [
                            "eid190",
                            "top",
                            4250,
                            500,
                            "easeOutBack",
                            "${azucar}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid186",
                            "scaleX",
                            3750,
                            500,
                            "easeOutBack",
                            "${azucar}",
                            '1',
                            '0.45'
                        ],
                        [
                            "eid189",
                            "left",
                            4250,
                            500,
                            "easeOutBack",
                            "${azucar}",
                            '0px',
                            '624px'
                        ],
                        [
                            "eid187",
                            "scaleY",
                            3750,
                            500,
                            "easeOutBack",
                            "${azucar}",
                            '1',
                            '0.45'
                        ],
                        [
                            "eid185",
                            "clip",
                            500,
                            750,
                            "easeOutBack",
                            "${azucar}",
                            [498,832,531,0],
                            [0,832,531,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid29",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "opacity",
                            4250,
                            500,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "sim50Anios": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'adulto',
                            type: 'image',
                            rect: ['0px', '0px', '415px', '265px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/adulto.png', '0px', '0px']
                        },
                        {
                            rect: ['387px', '247px', '28px', '18px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle',
                            opacity: '0.8',
                            cursor: 'pointer',
                            fill: ['rgba(54,54,54,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [52, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 700; color: rgb(255, 255, 255);\">50 AÑOS</span></p>',
                            id: 'Text',
                            opacity: '1',
                            cursor: 'pointer',
                            rect: ['99px', '96px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '0px', '415px', '265px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'invisibleRectangle',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(54,54,54,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '415px', '265px']
                        }
                    }
                },
                timeline: {
                    duration: 600,
                    autoPlay: true,
                    labels: {
                        "inicio": 100,
                        "fin": 600
                    },
                    data: [
                        [
                            "eid63",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid82",
                            "opacity",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid88",
                            "opacity",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0.8',
                            '0'
                        ],
                        [
                            "eid81",
                            "width",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '28px',
                            '415px'
                        ],
                        [
                            "eid90",
                            "width",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '415px',
                            '28px'
                        ],
                        [
                            "eid79",
                            "top",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '247px',
                            '-2px'
                        ],
                        [
                            "eid86",
                            "top",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '-2px',
                            '247px'
                        ],
                        [
                            "eid83",
                            "background-color",
                            300,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            'rgba(54,54,54,1.00)',
                            'rgba(54,54,54,1.00)'
                        ],
                        [
                            "eid80",
                            "left",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '387px',
                            '0px'
                        ],
                        [
                            "eid89",
                            "left",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0px',
                            '387px'
                        ],
                        [
                            "eid78",
                            "height",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '18px',
                            '267px'
                        ],
                        [
                            "eid87",
                            "height",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '267px',
                            '18px'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid85",
                            "opacity",
                            200,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            600,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "sim50Azucar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'azucar',
                            type: 'image',
                            rect: ['0px', '0px', '415px', '265px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/azucar.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['387px', '247px', '28px', '18px', 'auto', 'auto'],
                            opacity: '0.8',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(54,54,54,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['67px', '61px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 700; color: rgb(255, 255, 255);\">50 GRANOS </span></p><p style=\"margin: 0px;\"><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 700; color: rgb(255, 255, 255);\">DE AZÚCAR</span></p>',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [52, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '415px', '265px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'invisibleRectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(54,54,54,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '415px', '265px']
                        }
                    }
                },
                timeline: {
                    duration: 600,
                    autoPlay: true,
                    labels: {
                        "inicio": 100,
                        "fin": 600
                    },
                    data: [
                        [
                            "eid63",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid82",
                            "opacity",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid88",
                            "opacity",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0.8',
                            '0'
                        ],
                        [
                            "eid81",
                            "width",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '28px',
                            '415px'
                        ],
                        [
                            "eid90",
                            "width",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '415px',
                            '28px'
                        ],
                        [
                            "eid79",
                            "top",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '247px',
                            '-2px'
                        ],
                        [
                            "eid86",
                            "top",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '-2px',
                            '247px'
                        ],
                        [
                            "eid83",
                            "background-color",
                            300,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            'rgba(54,54,54,1.00)',
                            'rgba(54,54,54,1.00)'
                        ],
                        [
                            "eid80",
                            "left",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '387px',
                            '0px'
                        ],
                        [
                            "eid89",
                            "left",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0px',
                            '387px'
                        ],
                        [
                            "eid78",
                            "height",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '18px',
                            '267px'
                        ],
                        [
                            "eid87",
                            "height",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '267px',
                            '18px'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid85",
                            "opacity",
                            200,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            600,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "sim50kmMoi": {
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
                            id: '_50km2',
                            rect: ['0px', '0px', '415px', '265px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/50km.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['387px', '247px', '28px', '18px', 'auto', 'auto'],
                            opacity: '0.8',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(54,54,54,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['129px', '96px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 700; color: rgb(255, 255, 255);\">50 KM</span></p>',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [52, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '415px', '265px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'invisibleRectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(54,54,54,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '415px', '265px']
                        }
                    }
                },
                timeline: {
                    duration: 600,
                    autoPlay: true,
                    labels: {
                        "inicio": 100,
                        "fin": 600
                    },
                    data: [
                        [
                            "eid63",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid82",
                            "opacity",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid88",
                            "opacity",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0.8',
                            '0'
                        ],
                        [
                            "eid79",
                            "top",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '247px',
                            '-2px'
                        ],
                        [
                            "eid86",
                            "top",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '-2px',
                            '247px'
                        ],
                        [
                            "eid81",
                            "width",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '28px',
                            '415px'
                        ],
                        [
                            "eid90",
                            "width",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '415px',
                            '28px'
                        ],
                        [
                            "eid78",
                            "height",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '18px',
                            '267px'
                        ],
                        [
                            "eid87",
                            "height",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '267px',
                            '18px'
                        ],
                        [
                            "eid80",
                            "left",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '387px',
                            '0px'
                        ],
                        [
                            "eid89",
                            "left",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0px',
                            '387px'
                        ],
                        [
                            "eid83",
                            "background-color",
                            300,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            'rgba(54,54,54,1.00)',
                            'rgba(54,54,54,1.00)'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid85",
                            "opacity",
                            200,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            600,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simSegundoMoi": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_50segundo',
                            type: 'image',
                            rect: ['0px', '0px', '415px', '265px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/50segundo.png', '0px', '0px']
                        },
                        {
                            rect: ['387px', '247px', '28px', '18px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle',
                            opacity: '0.8',
                            cursor: 'pointer',
                            fill: ['rgba(54,54,54,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['28px', '96px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 700; color: rgb(255, 255, 255);\">50 SEGUNDOS</span></p>',
                            id: 'Text',
                            opacity: '1',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [52, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['0px', '0px', '415px', '265px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'invisibleRectangle',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(54,54,54,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '415px', '265px']
                        }
                    }
                },
                timeline: {
                    duration: 600,
                    autoPlay: true,
                    labels: {
                        "inicio": 100,
                        "fin": 600
                    },
                    data: [
                        [
                            "eid63",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid82",
                            "opacity",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid88",
                            "opacity",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0.8',
                            '0'
                        ],
                        [
                            "eid81",
                            "width",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '28px',
                            '415px'
                        ],
                        [
                            "eid90",
                            "width",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '415px',
                            '28px'
                        ],
                        [
                            "eid79",
                            "top",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '247px',
                            '-2px'
                        ],
                        [
                            "eid86",
                            "top",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '-2px',
                            '247px'
                        ],
                        [
                            "eid83",
                            "background-color",
                            300,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            'rgba(54,54,54,1.00)',
                            'rgba(54,54,54,1.00)'
                        ],
                        [
                            "eid80",
                            "left",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '387px',
                            '0px'
                        ],
                        [
                            "eid89",
                            "left",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0px',
                            '387px'
                        ],
                        [
                            "eid78",
                            "height",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '18px',
                            '267px'
                        ],
                        [
                            "eid87",
                            "height",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '267px',
                            '18px'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid85",
                            "opacity",
                            200,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            600,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simSeleccion1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'mosaico',
                            type: 'image',
                            rect: ['0px', '0px', '832px', '531px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mosaico.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '832px', '531px']
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
            "simLetra2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '742px', '146px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            rect: ['104px', '36px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 52px;\">¿Cuándo 50 es poco?</span></p>',
                            opacity: '1',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '742px', '146px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "end": 1000
                    },
                    data: [
                        [
                            "eid175",
                            "top",
                            0,
                            750,
                            "easeOutQuint",
                            "${Text}",
                            '-116px',
                            '36px'
                        ],
                        [
                            "eid179",
                            "top",
                            1000,
                            750,
                            "easeOutQuint",
                            "${Text}",
                            '36px',
                            '200px'
                        ],
                        [
                            "eid182",
                            "opacity",
                            1000,
                            750,
                            "easeOutQuint",
                            "${Text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simLetra3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '742px', '146px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            rect: ['104px', '36px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 52px;\">¿Cuándo 100 es mucho?</span></p>',
                            opacity: '1',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '742px', '146px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "end": 1000
                    },
                    data: [
                        [
                            "eid182",
                            "opacity",
                            1000,
                            750,
                            "easeOutQuint",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid175",
                            "top",
                            0,
                            750,
                            "easeOutQuint",
                            "${Text}",
                            '-116px',
                            '36px'
                        ],
                        [
                            "eid179",
                            "top",
                            1000,
                            750,
                            "easeOutQuint",
                            "${Text}",
                            '36px',
                            '200px'
                        ]
                    ]
                }
            },
            "simEscene5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '832px', '581px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'text',
                            rect: ['323px', '558px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​100 Árboles</p>',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            id: 'arboles',
                            type: 'image',
                            rect: ['832px', '0px', '832px', '531px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/arboles.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '831px', '625px']
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: true,
                    data: [
                        [
                            "eid199",
                            "left",
                            500,
                            750,
                            "easeInQuint",
                            "${arboles}",
                            '-832px',
                            '0px'
                        ],
                        [
                            "eid200",
                            "left",
                            4250,
                            500,
                            "easeOutSine",
                            "${arboles}",
                            '0px',
                            '832px'
                        ],
                        [
                            "eid29",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "opacity",
                            4250,
                            500,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simEscene6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '832px', '581px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'text',
                            rect: ['317px', '558px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​100 Córdobas&nbsp;</p>',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            id: 'billete',
                            type: 'image',
                            rect: ['831px', '0px', '832px', '531px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/billete.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '831px', '625px']
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: true,
                    data: [
                        [
                            "eid205",
                            "left",
                            500,
                            750,
                            "easeOutSine",
                            "${billete}",
                            '831px',
                            '0px'
                        ],
                        [
                            "eid208",
                            "left",
                            4250,
                            500,
                            "easeOutSine",
                            "${billete}",
                            '0px',
                            '-832px'
                        ],
                        [
                            "eid29",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "opacity",
                            4250,
                            500,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simEscene7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '832px', '581px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'text',
                            rect: ['317px', '558px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​100 Agujas</p>',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            id: 'Nota',
                            type: 'image',
                            rect: ['838px', '0px', '832px', '531px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Nota.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '831px', '625px']
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: true,
                    data: [
                        [
                            "eid210",
                            "left",
                            500,
                            750,
                            "easeInOutCirc",
                            "${Nota}",
                            '-832px',
                            '0px'
                        ],
                        [
                            "eid211",
                            "left",
                            4250,
                            500,
                            "easeInOutCirc",
                            "${Nota}",
                            '0px',
                            '838px'
                        ],
                        [
                            "eid29",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "opacity",
                            4250,
                            500,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simEscene8": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '832px', '581px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'text',
                            rect: ['317px', '558px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​100 Zapatos</p>',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            id: 'zapatos',
                            type: 'image',
                            rect: ['831px', '0px', '832px', '531px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/zapatos.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '831px', '625px']
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: true,
                    data: [
                        [
                            "eid213",
                            "left",
                            500,
                            750,
                            "easeInOutCirc",
                            "${zapatos}",
                            '831px',
                            '0px'
                        ],
                        [
                            "eid214",
                            "left",
                            4250,
                            500,
                            "easeInOutCirc",
                            "${zapatos}",
                            '0px',
                            '-832px'
                        ],
                        [
                            "eid29",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "opacity",
                            4250,
                            500,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "sim100Arboles": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'arboles2',
                            type: 'image',
                            rect: ['0px', '0px', '415px', '265px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/arboles.png', '0px', '0px']
                        },
                        {
                            rect: ['387px', '247px', '28px', '18px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle',
                            opacity: '0.8',
                            cursor: 'pointer',
                            fill: ['rgba(54,54,54,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['41px', '96px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 700;\">100 ÁRBOLES</span></p>',
                            id: 'Text',
                            opacity: '1',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [52, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['0px', '0px', '415px', '265px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'invisibleRectangle',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(54,54,54,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '415px', '265px']
                        }
                    }
                },
                timeline: {
                    duration: 600,
                    autoPlay: true,
                    labels: {
                        "inicio": 100,
                        "fin": 600
                    },
                    data: [
                        [
                            "eid63",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid82",
                            "opacity",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid88",
                            "opacity",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0.8',
                            '0'
                        ],
                        [
                            "eid79",
                            "top",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '247px',
                            '-2px'
                        ],
                        [
                            "eid86",
                            "top",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '-2px',
                            '247px'
                        ],
                        [
                            "eid81",
                            "width",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '28px',
                            '415px'
                        ],
                        [
                            "eid90",
                            "width",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '415px',
                            '28px'
                        ],
                        [
                            "eid78",
                            "height",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '18px',
                            '267px'
                        ],
                        [
                            "eid87",
                            "height",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '267px',
                            '18px'
                        ],
                        [
                            "eid80",
                            "left",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '387px',
                            '0px'
                        ],
                        [
                            "eid89",
                            "left",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0px',
                            '387px'
                        ],
                        [
                            "eid83",
                            "background-color",
                            300,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            'rgba(54,54,54,1.00)',
                            'rgba(54,54,54,1.00)'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid85",
                            "opacity",
                            200,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            600,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "sim100Billetes": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'billete3',
                            type: 'image',
                            rect: ['0px', '0px', '415px', '265px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/billete.png', '0px', '0px']
                        },
                        {
                            rect: ['387px', '247px', '28px', '18px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle',
                            opacity: '0.8',
                            cursor: 'pointer',
                            fill: ['rgba(54,54,54,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['11px', '96px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 700;\">100 CÓRDOBAS</span></p>',
                            id: 'Text',
                            opacity: '1',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [52, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['0px', '0px', '415px', '265px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'invisibleRectangle',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(54,54,54,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '415px', '265px']
                        }
                    }
                },
                timeline: {
                    duration: 600,
                    autoPlay: true,
                    labels: {
                        "inicio": 100,
                        "fin": 600
                    },
                    data: [
                        [
                            "eid63",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid82",
                            "opacity",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid88",
                            "opacity",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0.8',
                            '0'
                        ],
                        [
                            "eid81",
                            "width",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '28px',
                            '415px'
                        ],
                        [
                            "eid90",
                            "width",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '415px',
                            '28px'
                        ],
                        [
                            "eid79",
                            "top",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '247px',
                            '-2px'
                        ],
                        [
                            "eid86",
                            "top",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '-2px',
                            '247px'
                        ],
                        [
                            "eid83",
                            "background-color",
                            300,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            'rgba(54,54,54,1.00)',
                            'rgba(54,54,54,1.00)'
                        ],
                        [
                            "eid80",
                            "left",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '387px',
                            '0px'
                        ],
                        [
                            "eid89",
                            "left",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0px',
                            '387px'
                        ],
                        [
                            "eid78",
                            "height",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '18px',
                            '267px'
                        ],
                        [
                            "eid87",
                            "height",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '267px',
                            '18px'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid85",
                            "opacity",
                            200,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            600,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "sim100Puntos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Nota3',
                            type: 'image',
                            rect: ['0px', '0px', '415px', '265px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Nota.png', '0px', '0px']
                        },
                        {
                            rect: ['387px', '247px', '28px', '18px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle',
                            opacity: '0.8',
                            cursor: 'pointer',
                            fill: ['rgba(54,54,54,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['50px', '96px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 700;\">100 AGUJAS</span></p>',
                            id: 'Text',
                            opacity: '1',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [52, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['0px', '0px', '415px', '265px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'invisibleRectangle',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(54,54,54,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '415px', '265px']
                        }
                    }
                },
                timeline: {
                    duration: 600,
                    autoPlay: true,
                    labels: {
                        "inicio": 100,
                        "fin": 600
                    },
                    data: [
                        [
                            "eid63",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid82",
                            "opacity",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid88",
                            "opacity",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0.8',
                            '0'
                        ],
                        [
                            "eid81",
                            "width",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '28px',
                            '415px'
                        ],
                        [
                            "eid90",
                            "width",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '415px',
                            '28px'
                        ],
                        [
                            "eid79",
                            "top",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '247px',
                            '-2px'
                        ],
                        [
                            "eid86",
                            "top",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '-2px',
                            '247px'
                        ],
                        [
                            "eid83",
                            "background-color",
                            300,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            'rgba(54,54,54,1.00)',
                            'rgba(54,54,54,1.00)'
                        ],
                        [
                            "eid80",
                            "left",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '387px',
                            '0px'
                        ],
                        [
                            "eid89",
                            "left",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0px',
                            '387px'
                        ],
                        [
                            "eid78",
                            "height",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '18px',
                            '267px'
                        ],
                        [
                            "eid87",
                            "height",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '267px',
                            '18px'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid85",
                            "opacity",
                            200,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            600,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "sim100Zapatos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'zapatos2',
                            type: 'image',
                            rect: ['0px', '0px', '415px', '265px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/zapatos.png', '0px', '0px']
                        },
                        {
                            rect: ['387px', '247px', '28px', '18px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle',
                            opacity: '0.8',
                            cursor: 'pointer',
                            fill: ['rgba(54,54,54,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [52, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 700;\">100 ZAPATOS</span></p>',
                            id: 'Text',
                            opacity: '1',
                            cursor: 'pointer',
                            rect: ['38px', '96px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '0px', '415px', '265px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'invisibleRectangle',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(54,54,54,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '415px', '265px']
                        }
                    }
                },
                timeline: {
                    duration: 600,
                    autoPlay: true,
                    labels: {
                        "inicio": 100,
                        "fin": 600
                    },
                    data: [
                        [
                            "eid63",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid82",
                            "opacity",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid88",
                            "opacity",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0.8',
                            '0'
                        ],
                        [
                            "eid81",
                            "width",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '28px',
                            '415px'
                        ],
                        [
                            "eid90",
                            "width",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '415px',
                            '28px'
                        ],
                        [
                            "eid79",
                            "top",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '247px',
                            '-2px'
                        ],
                        [
                            "eid86",
                            "top",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '-2px',
                            '247px'
                        ],
                        [
                            "eid83",
                            "background-color",
                            300,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            'rgba(54,54,54,1.00)',
                            'rgba(54,54,54,1.00)'
                        ],
                        [
                            "eid80",
                            "left",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '387px',
                            '0px'
                        ],
                        [
                            "eid89",
                            "left",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '0px',
                            '387px'
                        ],
                        [
                            "eid78",
                            "height",
                            100,
                            200,
                            "easeOutCirc",
                            "${Rectangle}",
                            '18px',
                            '267px'
                        ],
                        [
                            "eid87",
                            "height",
                            600,
                            0,
                            "easeOutCirc",
                            "${Rectangle}",
                            '267px',
                            '18px'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid85",
                            "opacity",
                            200,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            600,
                            0,
                            "easeOutCirc",
                            "${Text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simLetra4": {
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
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '742px', '146px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'text',
                            rect: ['104px', '36px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 52px;\">¿Cuándo 100 es poco?</span></p>',
                            id: 'Text',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '742px', '146px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "end": 1000
                    },
                    data: [
                        [
                            "eid175",
                            "top",
                            0,
                            750,
                            "easeOutQuint",
                            "${Text}",
                            '-116px',
                            '36px'
                        ],
                        [
                            "eid179",
                            "top",
                            1000,
                            750,
                            "easeOutQuint",
                            "${Text}",
                            '36px',
                            '200px'
                        ],
                        [
                            "eid182",
                            "opacity",
                            1000,
                            750,
                            "easeOutQuint",
                            "${Text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simFeedback": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '60px', '208px', '133px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'container1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)'],
                            c: [
                            {
                                rect: ['0px', '133px', '208px', '41px', 'auto', 'auto'],
                                id: 'letra1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(22,160,133,1.00)']
                            }]
                        },
                        {
                            rect: ['208px', '60px', '208px', '133px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'container2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)'],
                            c: [
                            {
                                rect: ['0px', '133px', '208px', '41px', 'auto', 'auto'],
                                id: 'letra2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(26,188,156,1.00)']
                            }]
                        },
                        {
                            rect: ['416px', '60px', '208px', '133px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'container3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)'],
                            c: [
                            {
                                rect: ['0px', '133px', '208px', '41px', 'auto', 'auto'],
                                id: 'letra3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(22,160,133,1.00)']
                            }]
                        },
                        {
                            rect: ['624px', '60px', '208px', '133px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'container4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)'],
                            c: [
                            {
                                rect: ['0px', '133px', '208px', '41px', 'auto', 'auto'],
                                id: 'letra4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(26,188,156,1.00)']
                            }]
                        },
                        {
                            rect: ['0px', '294px', '832px', '237px', 'auto', 'auto'],
                            userClass: 'table-responsive',
                            id: 'divtable',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.84)']
                        },
                        {
                            type: 'text',
                            rect: ['61px', '193px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Ejemplo</span></p>',
                            id: 'Text1',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['454px', '193px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Ejemplo3</span></p>',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['258px', '193px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Ejemplo 2</span></p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['674px', '193px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Ejemplo 4</span></p>',
                            id: 'Text4',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['15px', '249px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​¡Otras Respuestas!</p>',
                            id: 'Text5',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['0px', '0px', '832px', '60px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.8431)']
                        },
                        {
                            type: 'text',
                            rect: ['8px', '20px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​¿50 es mucho?</p>',
                            id: 'Text6',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['232px', '20px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​¿50 es poco?</p>',
                            id: 'Text7',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['432px', '20px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​¿100 es mucho?</p>',
                            id: 'Text8',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['646px', '20px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​¿100 es poco?</p>',
                            id: 'Text9',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '832px', '531px']
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
            "simFeed1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '208px', '133px', 'auto', 'auto'],
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            id: '_50km3',
                            type: 'image',
                            rect: ['0px', '0px', '208px', '133px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/50km.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '208px', '133px']
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
            "simFeed2": {
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '208px', '133px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            id: '_50segundo3',
                            type: 'image',
                            rect: ['0px', '0px', '208px', '133px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/50segundo.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '208px', '133px']
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
            "simFeed3": {
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '208px', '133px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            id: 'adulto2',
                            type: 'image',
                            rect: ['0px', '0px', '208px', '133px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/adulto.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '208px', '133px']
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
            "simFeed4": {
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '208px', '133px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            id: 'azucar',
                            type: 'image',
                            rect: ['0px', '0px', '208px', '133px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/azucar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '208px', '133px']
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
            "simFeed5": {
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '208px', '133px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            id: 'arboles2',
                            type: 'image',
                            rect: ['0px', '0px', '208px', '133px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/arboles.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '208px', '133px']
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
            "simFeed6": {
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '208px', '133px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            id: 'billete',
                            type: 'image',
                            rect: ['0px', '0px', '208px', '133px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/billete.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '208px', '133px']
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
            "simFeed7": {
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '208px', '133px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            id: 'Nota',
                            type: 'image',
                            rect: ['0px', '0px', '208px', '133px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Nota.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '208px', '133px']
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
            "simFeed8": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '208px', '133px', 'auto', 'auto'],
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            id: 'zapatos',
                            type: 'image',
                            rect: ['0px', '0px', '208px', '133px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/zapatos.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '208px', '133px']
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
            "simTitle": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '842px', '72px', 'auto', 'auto'],
                            id: 'divTitle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '842px', '72px']
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
            "simTitle1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            rect: ['182px', '27px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text4',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​¿Cuándo 50 es mucho?</p>',
                            opacity: '1',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '708px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: true,
                    labels: {
                        "end": 1250
                    },
                    data: [
                        [
                            "eid233",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            1250,
                            1000,
                            "linear",
                            "${Text4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid237",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '27px',
                            '27px'
                        ]
                    ]
                }
            },
            "simTitle2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            rect: ['182px', '27px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text4',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​¿Cuándo 50 es poco?</p>',
                            opacity: '1',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '708px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: true,
                    labels: {
                        "end": 1250
                    },
                    data: [
                        [
                            "eid233",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            1250,
                            1000,
                            "linear",
                            "${Text4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid238",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '27px',
                            '27px'
                        ]
                    ]
                }
            },
            "simTitle3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            rect: ['172px', '27px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text4',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​¿Cuándo 100 es mucho?</p>',
                            opacity: '1',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '708px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: true,
                    labels: {
                        "end": 1250
                    },
                    data: [
                        [
                            "eid241",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${Text4}",
                            '172px',
                            '172px'
                        ],
                        [
                            "eid233",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            1250,
                            1000,
                            "linear",
                            "${Text4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid238",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '27px',
                            '27px'
                        ]
                    ]
                }
            },
            "simTitle4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            rect: ['172px', '27px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text4',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​¿Cuándo 100 es poco?</p>',
                            opacity: '1',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '708px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: true,
                    labels: {
                        "end": 1250
                    },
                    data: [
                        [
                            "eid241",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${Text4}",
                            '172px',
                            '172px'
                        ],
                        [
                            "eid233",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            1250,
                            1000,
                            "linear",
                            "${Text4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid238",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '27px',
                            '27px'
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Pem24_edgeActions.js");
})("EDGE-475251853");
