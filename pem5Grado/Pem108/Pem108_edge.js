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
            "../../cdn/jquery.sBubble-0.1.1.css",
            "../../cdn/jquery.sBubble-0.1.1.js",
            "../../cdn/jquery-ui.js",
            "../../cdn/jquery.ui.touch-punch.min.js",
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
                            id: 'fondo',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fondo.png",'0px','0px']
                        },
                        {
                            id: 'simSol',
                            symbolName: 'simSol',
                            type: 'rect',
                            rect: ['44px', '0', '241', '240', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'simNubes',
                            symbolName: 'simNubes',
                            type: 'rect',
                            rect: ['263', '48', '761', '111', 'auto', 'auto']
                        },
                        {
                            id: 'simGuardabarranco',
                            symbolName: 'simGuardabarranco',
                            type: 'rect',
                            rect: ['0', '-4', '1024', '192', 'auto', 'auto']
                        },
                        {
                            id: 'simLetrero',
                            symbolName: 'simLetrero',
                            type: 'rect',
                            rect: ['109', '204', '841', '564', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'simOtherFunction',
                            symbolName: 'simOtherFunction',
                            type: 'rect',
                            rect: ['502', '411', '487', '357', 'auto', 'auto']
                        },
                        {
                            id: 'siguiente',
                            type: 'image',
                            rect: ['485px', '669px', '45px', '99px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"siguiente.png",'0px','0px']
                        },
                        {
                            id: 'divTextArea',
                            type: 'rect',
                            rect: ['167px', '587px', '712px', '70px', 'auto', 'auto'],
                            fill: ["rgba(50,50,50,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'simIntrucciones',
                            symbolName: 'simIntrucciones',
                            type: 'rect',
                            rect: ['68px', '53px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'simMenu',
                            symbolName: 'simMenu',
                            type: 'rect',
                            rect: ['0px', '53px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
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
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid60",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${simLetrero}",
                            '0',
                            '1'
                        ],
                        [
                            "eid46",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${simMenu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${fondo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${simSol}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${simIntrucciones}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simGlobo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['204px', '0px', '118px', '168px', 'auto', 'auto'],
                            id: 'globo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/globo.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '118px', '168px']
                        }
                    }
                },
                timeline: {
                    duration: 50000,
                    autoPlay: false,
                    data: [
                        [
                            "eid4",
                            "top",
                            0,
                            16000,
                            "linear",
                            "${globo}",
                            '0px',
                            '84px'
                        ],
                        [
                            "eid6",
                            "top",
                            16000,
                            16000,
                            "linear",
                            "${globo}",
                            '84px',
                            '-20px'
                        ],
                        [
                            "eid10",
                            "top",
                            32000,
                            8000,
                            "linear",
                            "${globo}",
                            '-20px',
                            '-200px'
                        ],
                        [
                            "eid3",
                            "left",
                            0,
                            16000,
                            "linear",
                            "${globo}",
                            '204px',
                            '-216px'
                        ],
                        [
                            "eid5",
                            "left",
                            16000,
                            16000,
                            "linear",
                            "${globo}",
                            '-216px',
                            '-692px'
                        ],
                        [
                            "eid9",
                            "left",
                            32000,
                            8000,
                            "linear",
                            "${globo}",
                            '-692px',
                            '-1064px'
                        ]
                    ]
                }
            },
            "simSol": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '241px', '240px', 'auto', 'auto'],
                            id: 'sol',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sol.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '241px', '240px']
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: false,
                    data: [
                        [
                            "eid11",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${sol}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid12",
                            "rotateZ",
                            10000,
                            10000,
                            "linear",
                            "${sol}",
                            '180deg',
                            '360deg'
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
                            transform: [[], [], [], ['0.8', '0.8']],
                            rect: ['-1039px', '-72px', '761px', '111px', 'auto', 'auto'],
                            id: 'nubesCopy',
                            opacity: '0.72661870503597',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nubes.png', '0px', '0px']
                        },
                        {
                            rect: ['643px', '-36px', null, null, 'auto', 'auto'],
                            id: 'simGlobo',
                            symbolName: 'simGlobo',
                            type: 'rect'
                        },
                        {
                            rect: ['772px', '0px', '761px', '111px', 'auto', 'auto'],
                            id: 'nubes',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nubes.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '761px', '111px']
                        }
                    }
                },
                timeline: {
                    duration: 60000,
                    autoPlay: false,
                    data: [
                        [
                            "eid16",
                            "left",
                            0,
                            11765,
                            "linear",
                            "${nubesCopy}",
                            '708px',
                            '746px'
                        ],
                        [
                            "eid18",
                            "left",
                            11765,
                            48235,
                            "linear",
                            "${nubesCopy}",
                            '746px',
                            '-1039px'
                        ],
                        [
                            "eid15",
                            "left",
                            0,
                            60000,
                            "linear",
                            "${nubes}",
                            '772px',
                            '-1040px'
                        ],
                        [
                            "eid17",
                            "top",
                            0,
                            11765,
                            "linear",
                            "${nubesCopy}",
                            '-72px',
                            '-30px'
                        ],
                        [
                            "eid19",
                            "top",
                            11765,
                            48235,
                            "linear",
                            "${nubesCopy}",
                            '-30px',
                            '-28px'
                        ]
                    ]
                }
            },
            "simLetrero": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '841px', '564px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['27px', '-2px', '772px', '536px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'rotulo',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/rotulo.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            rect: ['57px', '32px', null, null, 'auto', 'auto'],
                            id: 'simImagen12',
                            symbolName: 'simImagen1',
                            opacity: '0',
                            type: 'rect'
                        },
                        {
                            rect: ['274px', '46px', '294px', '331px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'imagen_2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/imagen_2.png', '0px', '0px']
                        },
                        {
                            rect: ['261px', '46px', '338px', '320px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'imagen_3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/imagen_3.png', '0px', '0px']
                        },
                        {
                            rect: ['195px', '45px', '436px', '321px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'imagen_4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/imagen_4.png', '0px', '0px']
                        },
                        {
                            rect: ['161px', '44px', '520px', '314px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'imagen_5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/imagen_5.png', '0px', '0px']
                        },
                        {
                            rect: ['242px', '42px', '375px', '317px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'imagen_6',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/imagen_6.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '841px', '564px']
                        }
                    }
                },
                timeline: {
                    duration: 17750,
                    autoPlay: false,
                    labels: {
                        "start_1": 1000,
                        "end": 2000,
                        "end1": 5000,
                        "end2": 8000,
                        "end3": 11000,
                        "end4": 14000,
                        "end5": 16750
                    },
                    data: [
                        [
                            "eid130",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${imagen_3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid133",
                            "scaleX",
                            7250,
                            0,
                            "linear",
                            "${imagen_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid139",
                            "scaleX",
                            8000,
                            0,
                            "linear",
                            "${imagen_3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid148",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${imagen_4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid151",
                            "scaleX",
                            10250,
                            0,
                            "linear",
                            "${imagen_4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "scaleX",
                            11000,
                            0,
                            "linear",
                            "${imagen_4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid147",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${imagen_4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid150",
                            "opacity",
                            10250,
                            0,
                            "linear",
                            "${imagen_4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid153",
                            "opacity",
                            11000,
                            0,
                            "linear",
                            "${imagen_4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid175",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${imagen_6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid178",
                            "scaleX",
                            16250,
                            0,
                            "linear",
                            "${imagen_6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid185",
                            "scaleX",
                            16750,
                            0,
                            "linear",
                            "${imagen_6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid52",
                            "scaleY",
                            0,
                            1000,
                            "linear",
                            "${rotulo}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid54",
                            "scaleY",
                            2000,
                            1000,
                            "linear",
                            "${rotulo}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid113",
                            "scaleY",
                            3250,
                            1000,
                            "linear",
                            "${rotulo}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid122",
                            "scaleY",
                            5000,
                            1000,
                            "linear",
                            "${rotulo}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid128",
                            "scaleY",
                            6250,
                            1000,
                            "linear",
                            "${rotulo}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid137",
                            "scaleY",
                            8000,
                            1000,
                            "linear",
                            "${rotulo}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid143",
                            "scaleY",
                            9250,
                            1000,
                            "linear",
                            "${rotulo}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid146",
                            "scaleY",
                            11000,
                            1000,
                            "linear",
                            "${rotulo}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid158",
                            "scaleY",
                            12250,
                            1000,
                            "linear",
                            "${rotulo}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid161",
                            "scaleY",
                            14000,
                            1000,
                            "linear",
                            "${rotulo}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid173",
                            "scaleY",
                            15250,
                            1000,
                            "linear",
                            "${rotulo}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid182",
                            "scaleY",
                            16750,
                            1000,
                            "linear",
                            "${rotulo}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid174",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${imagen_6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid177",
                            "opacity",
                            16250,
                            0,
                            "linear",
                            "${imagen_6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid184",
                            "opacity",
                            16750,
                            0,
                            "linear",
                            "${imagen_6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid131",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${imagen_3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            7250,
                            0,
                            "linear",
                            "${imagen_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid140",
                            "scaleY",
                            8000,
                            0,
                            "linear",
                            "${imagen_3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid115",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${imagen_2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid117",
                            "scaleX",
                            4250,
                            0,
                            "linear",
                            "${imagen_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid124",
                            "scaleX",
                            5000,
                            0,
                            "linear",
                            "${imagen_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid129",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${imagen_3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid132",
                            "opacity",
                            7250,
                            0,
                            "linear",
                            "${imagen_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid138",
                            "opacity",
                            8000,
                            0,
                            "linear",
                            "${imagen_3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid63",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${simImagen12}",
                            '0',
                            '0'
                        ],
                        [
                            "eid66",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${simImagen12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid110",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${simImagen12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid65",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${simImagen12}",
                            '0',
                            '0'
                        ],
                        [
                            "eid68",
                            "scaleY",
                            1000,
                            0,
                            "linear",
                            "${simImagen12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid109",
                            "scaleY",
                            2000,
                            0,
                            "linear",
                            "${simImagen12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid164",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${imagen_5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid167",
                            "scaleY",
                            13250,
                            0,
                            "linear",
                            "${imagen_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid170",
                            "scaleY",
                            14000,
                            0,
                            "linear",
                            "${imagen_5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid116",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${imagen_2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid118",
                            "scaleY",
                            4250,
                            0,
                            "linear",
                            "${imagen_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid125",
                            "scaleY",
                            5000,
                            0,
                            "linear",
                            "${imagen_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid149",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${imagen_4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid152",
                            "scaleY",
                            10250,
                            0,
                            "linear",
                            "${imagen_4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid155",
                            "scaleY",
                            11000,
                            0,
                            "linear",
                            "${imagen_4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid176",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${imagen_6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid179",
                            "scaleY",
                            16250,
                            0,
                            "linear",
                            "${imagen_6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid186",
                            "scaleY",
                            16750,
                            0,
                            "linear",
                            "${imagen_6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid50",
                            "scaleX",
                            0,
                            1000,
                            "linear",
                            "${rotulo}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid53",
                            "scaleX",
                            2000,
                            1000,
                            "linear",
                            "${rotulo}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid111",
                            "scaleX",
                            3250,
                            1000,
                            "linear",
                            "${rotulo}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid120",
                            "scaleX",
                            5000,
                            1000,
                            "linear",
                            "${rotulo}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid126",
                            "scaleX",
                            6250,
                            1000,
                            "linear",
                            "${rotulo}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid135",
                            "scaleX",
                            8000,
                            1000,
                            "linear",
                            "${rotulo}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid141",
                            "scaleX",
                            9250,
                            1000,
                            "linear",
                            "${rotulo}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid144",
                            "scaleX",
                            11000,
                            1000,
                            "linear",
                            "${rotulo}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid156",
                            "scaleX",
                            12250,
                            1000,
                            "linear",
                            "${rotulo}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid159",
                            "scaleX",
                            14000,
                            1000,
                            "linear",
                            "${rotulo}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid171",
                            "scaleX",
                            15250,
                            1000,
                            "linear",
                            "${rotulo}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid180",
                            "scaleX",
                            16750,
                            1000,
                            "linear",
                            "${rotulo}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid163",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${imagen_5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid166",
                            "scaleX",
                            13250,
                            0,
                            "linear",
                            "${imagen_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid169",
                            "scaleX",
                            14000,
                            0,
                            "linear",
                            "${imagen_5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid162",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${imagen_5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid165",
                            "opacity",
                            13250,
                            0,
                            "linear",
                            "${imagen_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid168",
                            "opacity",
                            14000,
                            0,
                            "linear",
                            "${imagen_5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid64",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${simImagen12}",
                            '0',
                            '0'
                        ],
                        [
                            "eid67",
                            "scaleX",
                            1000,
                            0,
                            "linear",
                            "${simImagen12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid76",
                            "scaleX",
                            2000,
                            0,
                            "linear",
                            "${simImagen12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid57",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${rotulo}",
                            '1',
                            '1'
                        ],
                        [
                            "eid58",
                            "opacity",
                            2750,
                            250,
                            "linear",
                            "${rotulo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid112",
                            "opacity",
                            3250,
                            0,
                            "linear",
                            "${rotulo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid121",
                            "opacity",
                            5750,
                            250,
                            "linear",
                            "${rotulo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid127",
                            "opacity",
                            6250,
                            0,
                            "linear",
                            "${rotulo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid136",
                            "opacity",
                            8750,
                            250,
                            "linear",
                            "${rotulo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid142",
                            "opacity",
                            9250,
                            0,
                            "linear",
                            "${rotulo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid145",
                            "opacity",
                            11750,
                            250,
                            "linear",
                            "${rotulo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid157",
                            "opacity",
                            12250,
                            0,
                            "linear",
                            "${rotulo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid160",
                            "opacity",
                            14750,
                            250,
                            "linear",
                            "${rotulo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid172",
                            "opacity",
                            15250,
                            0,
                            "linear",
                            "${rotulo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid181",
                            "opacity",
                            17500,
                            250,
                            "linear",
                            "${rotulo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid114",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${imagen_2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid119",
                            "opacity",
                            4250,
                            0,
                            "linear",
                            "${imagen_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid123",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${imagen_2}",
                            '1',
                            '0'
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
                            opacity: '1',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            transform: [[], [], [], ['0', '0']],
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['39px', '34px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'center',
                            text: '<p style=\"margin: 0px; text-align: center;\">Observa en el letrero las imágenes y razona las preguntas.</p><p style=\"margin: 0px; text-align: center;\">​Escribe tu respuesta en el cuadro de texto.</p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\"></span></p>'
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
                    autoPlay: false,
                    labels: {
                        "end": 4000
                    },
                    data: [
                        [
                            "eid41",
                            "scaleX",
                            0,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid43",
                            "scaleX",
                            1750,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid36",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${Text2}",
                            '34px',
                            '34px'
                        ],
                        [
                            "eid38",
                            "top",
                            2900,
                            0,
                            "linear",
                            "${Text2}",
                            '34px',
                            '34px'
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
                            "eid26",
                            "width",
                            1000,
                            500,
                            "easeInQuad",
                            "${Rectangle2}",
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
                            '39px'
                        ],
                        [
                            "eid42",
                            "scaleY",
                            0,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid44",
                            "scaleY",
                            1750,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '1'
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
                            1750,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '1'
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
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '712px', '420px', 'auto', 'auto'],
                            fill: ['rgba(50,50,50,0.00)']
                        },
                        {
                            rect: ['205px', '26px', '324px', '319px', 'auto', 'auto'],
                            id: 'imagen_1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/imagen_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '712px', '420px']
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
            "simOtherFunction": {
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
                            id: 'rotulo_2',
                            rect: ['0px', '0px', '487px', '357px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rotulo_2.png', '0px', '0px']
                        },
                        {
                            rect: ['268px', '123px', '202px', '70px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'divReiniciar',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['22px', '15px', '202px', '70px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'divVer',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '487px', '357px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid192",
                            "left",
                            0,
                            1500,
                            "easeOutBack",
                            "${divVer}",
                            '556px',
                            '22px'
                        ],
                        [
                            "eid190",
                            "left",
                            0,
                            1500,
                            "easeOutBack",
                            "${divReiniciar}",
                            '802px',
                            '268px'
                        ],
                        [
                            "eid191",
                            "left",
                            0,
                            1500,
                            "easeOutBack",
                            "${rotulo_2}",
                            '534px',
                            '0px'
                        ]
                    ]
                }
            },
            "simGuardabarranco": {
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
                            rect: ['0px', '0px', '1024px', '192px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['-161px', '40px', '138px', '122px', 'auto', 'auto'],
                            id: 'container',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                rect: ['-23px', '14px', '184px', '84px', 'auto', 'auto'],
                                id: 'cuerpoGuarda',
                                transform: [[], [], [], ['0.75', '0.75']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/cuerpoGuarda.png', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'spritAlaDerecha_symbol_1',
                                symbolName: 'spritAlaDerecha_symbol_1',
                                transform: [[], [], [], ['0.75', '0.75']],
                                rect: ['77px', '73px', '59px', '77px', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'spritAlaIzquierda_symbol_1',
                                symbolName: 'spritAlaIzquierda_symbol_1',
                                transform: [[], [], [], ['0.75', '0.75']],
                                rect: ['92px', '15px', '41px', '73px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'containerCopy',
                            opacity: '0.87586206896552',
                            rect: ['203px', '62px', '138px', '122px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            transform: [[], [], [], ['0.8', '0.8']],
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                rect: ['-23px', '14px', '184px', '84px', 'auto', 'auto'],
                                id: 'cuerpoGuardaCopy',
                                transform: [[], [], [], ['0.75', '0.75']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/cuerpoGuarda.png', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'spritAlaDerecha_symbol_1Copy',
                                symbolName: 'spritAlaDerecha_symbol_1',
                                transform: [[], [], [], ['0.75', '0.75']],
                                rect: ['77px', '73px', '59px', '77px', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'spritAlaIzquierda_symbol_1Copy',
                                symbolName: 'spritAlaIzquierda_symbol_1',
                                transform: [[], [], [], ['0.75', '0.75']],
                                rect: ['92px', '15px', '41px', '73px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '192px']
                        }
                    }
                },
                timeline: {
                    duration: 57000,
                    autoPlay: false,
                    data: [
                        [
                            "eid347",
                            "left",
                            0,
                            45000,
                            "linear",
                            "${container}",
                            '-161px',
                            '1131px'
                        ],
                        [
                            "eid346",
                            "left",
                            0,
                            17000,
                            "linear",
                            "${containerCopy}",
                            '-245px',
                            '203px'
                        ],
                        [
                            "eid350",
                            "left",
                            17000,
                            40000,
                            "linear",
                            "${containerCopy}",
                            '203px',
                            '1021px'
                        ]
                    ]
                }
            },
            "spritAlaDerecha_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '512px', '512px', 'auto', 'auto'],
                            id: 'spritAlaDerecha',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spritAlaDerecha.png', '0px', '0px', '512px', '512px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '59px', '77px']
                        }
                    }
                },
                timeline: {
                    duration: 1208,
                    autoPlay: true,
                    data: [
                        [
                            "eid193",
                            "height",
                            0,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '0px',
                            '29px'
                        ],
                        [
                            "eid196",
                            "height",
                            41,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '29px',
                            '33px'
                        ],
                        [
                            "eid198",
                            "height",
                            83,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '33px',
                            '36px'
                        ],
                        [
                            "eid200",
                            "height",
                            125,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '36px',
                            '40px'
                        ],
                        [
                            "eid202",
                            "height",
                            166,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '40px',
                            '43px'
                        ],
                        [
                            "eid204",
                            "height",
                            208,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '43px',
                            '47px'
                        ],
                        [
                            "eid206",
                            "height",
                            250,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '47px',
                            '50px'
                        ],
                        [
                            "eid208",
                            "height",
                            291,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '50px',
                            '53px'
                        ],
                        [
                            "eid210",
                            "height",
                            333,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '53px',
                            '57px'
                        ],
                        [
                            "eid212",
                            "height",
                            375,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '57px',
                            '60px'
                        ],
                        [
                            "eid214",
                            "height",
                            416,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '60px',
                            '64px'
                        ],
                        [
                            "eid216",
                            "height",
                            458,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '64px',
                            '67px'
                        ],
                        [
                            "eid218",
                            "height",
                            500,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '67px',
                            '70px'
                        ],
                        [
                            "eid220",
                            "height",
                            541,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '70px',
                            '74px'
                        ],
                        [
                            "eid222",
                            "height",
                            583,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '74px',
                            '77px'
                        ],
                        [
                            "eid224",
                            "height",
                            625,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '77px',
                            '74px'
                        ],
                        [
                            "eid226",
                            "height",
                            666,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '74px',
                            '71px'
                        ],
                        [
                            "eid228",
                            "height",
                            708,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '71px',
                            '68px'
                        ],
                        [
                            "eid230",
                            "height",
                            750,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '68px',
                            '65px'
                        ],
                        [
                            "eid232",
                            "height",
                            791,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '65px',
                            '61px'
                        ],
                        [
                            "eid234",
                            "height",
                            833,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '61px',
                            '58px'
                        ],
                        [
                            "eid236",
                            "height",
                            875,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '58px',
                            '55px'
                        ],
                        [
                            "eid238",
                            "height",
                            916,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '55px',
                            '52px'
                        ],
                        [
                            "eid240",
                            "height",
                            958,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '52px',
                            '49px'
                        ],
                        [
                            "eid242",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '49px',
                            '45px'
                        ],
                        [
                            "eid244",
                            "height",
                            1041,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '45px',
                            '42px'
                        ],
                        [
                            "eid246",
                            "height",
                            1083,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '42px',
                            '39px'
                        ],
                        [
                            "eid248",
                            "height",
                            1125,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '39px',
                            '36px'
                        ],
                        [
                            "eid250",
                            "height",
                            1166,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '36px',
                            '33px'
                        ],
                        [
                            "eid252",
                            "height",
                            1208,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '33px',
                            '29px'
                        ],
                        [
                            "eid195",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [0,0],
                            [-12,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid197",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-12,-12],
                            [-83,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid199",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-83,-12],
                            [-154,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid201",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-154,-12],
                            [-225,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid203",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-225,-12],
                            [-296,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid205",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-296,-12],
                            [-367,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid207",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-367,-12],
                            [-438,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid209",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-438,-12],
                            [-12,-74],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid211",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-12,-74],
                            [-83,-74],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid213",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-83,-74],
                            [-154,-74],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid215",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-154,-74],
                            [-225,-74],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid217",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-225,-74],
                            [-296,-74],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid219",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-296,-74],
                            [-367,-74],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid221",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-367,-74],
                            [-438,-74],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid223",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-438,-74],
                            [-12,-160],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid225",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-12,-160],
                            [-83,-160],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid227",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-83,-160],
                            [-154,-160],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid229",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-154,-160],
                            [-225,-160],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid231",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-225,-160],
                            [-296,-160],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid233",
                            "background-position",
                            791,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-296,-160],
                            [-367,-160],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid235",
                            "background-position",
                            833,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-367,-160],
                            [-438,-160],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid237",
                            "background-position",
                            875,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-438,-160],
                            [-12,-249],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid239",
                            "background-position",
                            916,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-12,-249],
                            [-83,-249],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid241",
                            "background-position",
                            958,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-83,-249],
                            [-154,-249],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid243",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-154,-249],
                            [-225,-249],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid245",
                            "background-position",
                            1041,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-225,-249],
                            [-296,-249],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid247",
                            "background-position",
                            1083,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-296,-249],
                            [-367,-249],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid249",
                            "background-position",
                            1125,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-367,-249],
                            [-438,-249],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid251",
                            "background-position",
                            1166,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-438,-249],
                            [-12,-316],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid253",
                            "background-position",
                            1208,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            [-12,-316],
                            [-12,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid194",
                            "width",
                            0,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '0px',
                            '59px'
                        ]
                    ]
                }
            },
            "spritAlaIzquierda_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '256px', '512px', 'auto', 'auto'],
                            id: 'spritAlaIzquierda',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spritAlaIzquierda.png', '0px', '0px', '256px', '512px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '41px', '73px']
                        }
                    }
                },
                timeline: {
                    duration: 1208,
                    autoPlay: true,
                    data: [
                        [
                            "eid256",
                            "height",
                            0,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '0px',
                            '73px'
                        ],
                        [
                            "eid260",
                            "height",
                            41,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '73px',
                            '70px'
                        ],
                        [
                            "eid263",
                            "height",
                            83,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '70px',
                            '67px'
                        ],
                        [
                            "eid266",
                            "height",
                            125,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '67px',
                            '64px'
                        ],
                        [
                            "eid269",
                            "height",
                            166,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '64px',
                            '61px'
                        ],
                        [
                            "eid272",
                            "height",
                            208,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '61px',
                            '58px'
                        ],
                        [
                            "eid275",
                            "height",
                            250,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '58px',
                            '55px'
                        ],
                        [
                            "eid278",
                            "height",
                            291,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '55px',
                            '52px'
                        ],
                        [
                            "eid281",
                            "height",
                            333,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '52px',
                            '49px'
                        ],
                        [
                            "eid284",
                            "height",
                            375,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '49px',
                            '46px'
                        ],
                        [
                            "eid287",
                            "height",
                            416,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '46px',
                            '43px'
                        ],
                        [
                            "eid290",
                            "height",
                            458,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '43px',
                            '40px'
                        ],
                        [
                            "eid293",
                            "height",
                            500,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '40px',
                            '37px'
                        ],
                        [
                            "eid296",
                            "height",
                            541,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '37px',
                            '35px'
                        ],
                        [
                            "eid299",
                            "height",
                            583,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '35px',
                            '32px'
                        ],
                        [
                            "eid302",
                            "height",
                            625,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '32px',
                            '35px'
                        ],
                        [
                            "eid305",
                            "height",
                            666,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '35px',
                            '37px'
                        ],
                        [
                            "eid308",
                            "height",
                            708,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '37px',
                            '39px'
                        ],
                        [
                            "eid311",
                            "height",
                            750,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '39px',
                            '42px'
                        ],
                        [
                            "eid314",
                            "height",
                            791,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '42px',
                            '45px'
                        ],
                        [
                            "eid317",
                            "height",
                            833,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '45px',
                            '48px'
                        ],
                        [
                            "eid320",
                            "height",
                            875,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '48px',
                            '50px'
                        ],
                        [
                            "eid323",
                            "height",
                            916,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '50px',
                            '53px'
                        ],
                        [
                            "eid326",
                            "height",
                            958,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '53px',
                            '56px'
                        ],
                        [
                            "eid329",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '56px',
                            '59px'
                        ],
                        [
                            "eid332",
                            "height",
                            1041,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '59px',
                            '62px'
                        ],
                        [
                            "eid335",
                            "height",
                            1083,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '62px',
                            '64px'
                        ],
                        [
                            "eid338",
                            "height",
                            1125,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '64px',
                            '67px'
                        ],
                        [
                            "eid341",
                            "height",
                            1166,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '67px',
                            '70px'
                        ],
                        [
                            "eid344",
                            "height",
                            1208,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '70px',
                            '73px'
                        ],
                        [
                            "eid257",
                            "width",
                            0,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '0px',
                            '41px'
                        ],
                        [
                            "eid259",
                            "top",
                            41,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid262",
                            "top",
                            83,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '3px',
                            '6px'
                        ],
                        [
                            "eid265",
                            "top",
                            125,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '6px',
                            '9px'
                        ],
                        [
                            "eid268",
                            "top",
                            166,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '9px',
                            '12px'
                        ],
                        [
                            "eid271",
                            "top",
                            208,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '12px',
                            '15px'
                        ],
                        [
                            "eid274",
                            "top",
                            250,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '15px',
                            '18px'
                        ],
                        [
                            "eid277",
                            "top",
                            291,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '18px',
                            '21px'
                        ],
                        [
                            "eid280",
                            "top",
                            333,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '21px',
                            '24px'
                        ],
                        [
                            "eid283",
                            "top",
                            375,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '24px',
                            '27px'
                        ],
                        [
                            "eid286",
                            "top",
                            416,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '27px',
                            '30px'
                        ],
                        [
                            "eid289",
                            "top",
                            458,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '30px',
                            '33px'
                        ],
                        [
                            "eid292",
                            "top",
                            500,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '33px',
                            '36px'
                        ],
                        [
                            "eid295",
                            "top",
                            541,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '36px',
                            '38px'
                        ],
                        [
                            "eid298",
                            "top",
                            583,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '38px',
                            '41px'
                        ],
                        [
                            "eid301",
                            "top",
                            625,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '41px',
                            '38px'
                        ],
                        [
                            "eid304",
                            "top",
                            666,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '38px',
                            '36px'
                        ],
                        [
                            "eid307",
                            "top",
                            708,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '36px',
                            '34px'
                        ],
                        [
                            "eid310",
                            "top",
                            750,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '34px',
                            '31px'
                        ],
                        [
                            "eid313",
                            "top",
                            791,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '31px',
                            '28px'
                        ],
                        [
                            "eid316",
                            "top",
                            833,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '28px',
                            '25px'
                        ],
                        [
                            "eid319",
                            "top",
                            875,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '25px',
                            '23px'
                        ],
                        [
                            "eid322",
                            "top",
                            916,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '23px',
                            '20px'
                        ],
                        [
                            "eid325",
                            "top",
                            958,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '20px',
                            '17px'
                        ],
                        [
                            "eid328",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '17px',
                            '14px'
                        ],
                        [
                            "eid331",
                            "top",
                            1041,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '14px',
                            '11px'
                        ],
                        [
                            "eid334",
                            "top",
                            1083,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '11px',
                            '9px'
                        ],
                        [
                            "eid337",
                            "top",
                            1125,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '9px',
                            '6px'
                        ],
                        [
                            "eid340",
                            "top",
                            1166,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '6px',
                            '3px'
                        ],
                        [
                            "eid343",
                            "top",
                            1208,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid258",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid261",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [0,0],
                            [-41,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid264",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-41,0],
                            [-82,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid267",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-82,0],
                            [-123,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid270",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-123,0],
                            [-164,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid273",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-164,0],
                            [-205,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid276",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-205,0],
                            [0,-73],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid279",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [0,-73],
                            [-41,-73],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid282",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-41,-73],
                            [-82,-73],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid285",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-82,-73],
                            [-123,-73],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid288",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-123,-73],
                            [-164,-73],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid291",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-164,-73],
                            [-205,-73],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid294",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-205,-73],
                            [0,-128],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid297",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [0,-128],
                            [-41,-128],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid300",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-41,-128],
                            [-82,-128],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid303",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-82,-128],
                            [-123,-128],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid306",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-123,-128],
                            [-164,-128],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid309",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-164,-128],
                            [-205,-128],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid312",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-205,-128],
                            [0,-167],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid315",
                            "background-position",
                            791,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [0,-167],
                            [-41,-167],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid318",
                            "background-position",
                            833,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-41,-167],
                            [-82,-167],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid321",
                            "background-position",
                            875,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-82,-167],
                            [-123,-167],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid324",
                            "background-position",
                            916,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-123,-167],
                            [-164,-167],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid327",
                            "background-position",
                            958,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-164,-167],
                            [-205,-167],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid330",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-205,-167],
                            [0,-223],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid333",
                            "background-position",
                            1041,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [0,-223],
                            [-41,-223],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid336",
                            "background-position",
                            1083,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-41,-223],
                            [-82,-223],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid339",
                            "background-position",
                            1125,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-82,-223],
                            [-123,-223],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid342",
                            "background-position",
                            1166,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-123,-223],
                            [-164,-223],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid345",
                            "background-position",
                            1208,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-164,-223],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Pem108_edgeActions.js");
})("EDGE-345174481");
