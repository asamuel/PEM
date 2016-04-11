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
                            id: 'Pem35_Fondo',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pem35_Fondo.png",'0px','0px']
                        },
                        {
                            id: 'Pem35_Sol',
                            type: 'image',
                            rect: ['0px', '760px', '262px', '244px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pem35_Sol.png",'0px','0px']
                        },
                        {
                            id: 'simNub',
                            symbolName: 'simNub',
                            type: 'rect',
                            rect: ['45', '784', '979', '174', 'auto', 'auto']
                        },
                        {
                            id: 'Pem35_Monte2',
                            type: 'image',
                            rect: ['0px', '789px', '1024px', '239px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pem35_Monte2.png",'0px','0px']
                        },
                        {
                            id: 'Pem35_Monte1',
                            type: 'image',
                            rect: ['0px', '792px', '1024px', '258px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pem35_Monte1.png",'0px','0px']
                        },
                        {
                            id: 'Pem35_Arboles',
                            type: 'image',
                            rect: ['0px', '816px', '1024px', '231px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pem35_Arboles.png",'0px','0px']
                        },
                        {
                            id: 'simCabra',
                            symbolName: 'simCabra',
                            type: 'rect',
                            rect: ['-214', '618', '150', '142', 'auto', 'auto']
                        },
                        {
                            id: 'Pem35_Rama',
                            type: 'image',
                            rect: ['480px', '257px', '248px', '482px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Pem35_Rama.png",'0px','0px']
                        },
                        {
                            id: 'Pem35_Zacate',
                            type: 'image',
                            rect: ['0px', '819px', '1024px', '65px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pem35_Zacate.png",'0px','0px']
                        },
                        {
                            id: 'simGuardabarranco',
                            symbolName: 'simGuardabarranco',
                            type: 'rect',
                            rect: ['-286', '300', '194', '164', 'auto', 'auto']
                        },
                        {
                            id: 'simDragConjunto',
                            symbolName: 'simDragConjunto',
                            type: 'rect',
                            rect: ['218', '102', '806', '601', 'auto', 'auto']
                        },
                        {
                            id: 'simIntrucciones',
                            symbolName: 'simIntrucciones',
                            type: 'rect',
                            rect: ['68px', '53px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'simMenu',
                            symbolName: 'simMenu',
                            type: 'rect',
                            rect: ['0px', '53px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '1'
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
                    duration: 90000,
                    autoPlay: true,
                    data: [
                        [
                            "eid697",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${simMenu}",
                            '0',
                            '0'
                        ],
                        [
                            "eid698",
                            "opacity",
                            1600,
                            0,
                            "linear",
                            "${simMenu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "top",
                            800,
                            200,
                            "easeOutExpo",
                            "${Pem35_Arboles}",
                            '816px',
                            '508px'
                        ],
                        [
                            "eid14",
                            "top",
                            1000,
                            332,
                            "easeOutBack",
                            "${Pem35_Monte1}",
                            '792px',
                            '464px'
                        ],
                        [
                            "eid6",
                            "top",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Pem35_Sol}",
                            '760px',
                            '0px'
                        ],
                        [
                            "eid727",
                            "opacity",
                            0,
                            0,
                            "easeOutElastic",
                            "${Pem35_Rama}",
                            '0',
                            '0'
                        ],
                        [
                            "eid726",
                            "opacity",
                            1600,
                            0,
                            "easeOutElastic",
                            "${Pem35_Rama}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "top",
                            600,
                            200,
                            "easeOutExpo",
                            "${Pem35_Zacate}",
                            '819px',
                            '703px'
                        ],
                        [
                            "eid16",
                            "top",
                            1300,
                            300,
                            "easeOutSine",
                            "${Pem35_Monte2}",
                            '789px',
                            '358px'
                        ],
                        [
                            "eid699",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${simIntrucciones}",
                            '0',
                            '0'
                        ],
                        [
                            "eid700",
                            "opacity",
                            1600,
                            0,
                            "linear",
                            "${simIntrucciones}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simNub": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '979px', '174px', 'auto', 'auto'],
                            id: 'Pem35_Nub',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem35_Nub.png', '0px', '0px']
                        },
                        {
                            rect: ['996px', '-701px', '979px', '174px', 'auto', 'auto'],
                            id: 'Pem35_NubCopy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem35_Nub.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '979px', '174px']
                        }
                    }
                },
                timeline: {
                    duration: 90000,
                    autoPlay: true,
                    labels: {
                        "start": 1200
                    },
                    data: [
                        [
                            "eid22",
                            "left",
                            15000,
                            65000,
                            "linear",
                            "${Pem35_NubCopy}",
                            '996px',
                            '0px'
                        ],
                        [
                            "eid8",
                            "top",
                            300,
                            900,
                            "easeOutBounce",
                            "${Pem35_Nub}",
                            '0px',
                            '-696px'
                        ],
                        [
                            "eid21",
                            "left",
                            1200,
                            88800,
                            "linear",
                            "${Pem35_Nub}",
                            '0px',
                            '-1040px'
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
                            rect: ['0px', '0px', '194px', '164px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['102px', '86px', '59px', '77px', 'auto', 'auto'],
                            id: 'spritAlaDerecha_symbol_1',
                            symbolName: 'spritAlaDerecha_symbol_1',
                            type: 'rect',
                            transform: [[], [], [], ['0.7', '0.7']]
                        },
                        {
                            rect: ['117px', '32px', '41px', '73px', 'auto', 'auto'],
                            id: 'spritAlaIzquierda_symbol_1',
                            symbolName: 'spritAlaIzquierda_symbol_1',
                            type: 'rect',
                            transform: [[], [], [], ['0.7', '0.7']]
                        },
                        {
                            type: 'image',
                            id: 'cuerpoGuarda',
                            rect: ['5px', '32px', '184px', '84px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.7', '0.7']],
                            fill: ['rgba(0,0,0,0)', 'images/cuerpoGuarda.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cuerpoGuarda2',
                            rect: ['1440px', '32px', '184px', '84px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.7', '0.7']],
                            fill: ['rgba(0,0,0,0)', 'images/cuerpoGuarda2.png', '0px', '0px']
                        },
                        {
                            rect: ['1467px', '87px', '59px', '77px', 'auto', 'auto'],
                            id: 'spritAlaDerecha_symbol_12',
                            symbolName: 'spritAlaDerecha_symbol_1',
                            type: 'rect',
                            transform: [[], [], [], ['0.7', '0.7']]
                        },
                        {
                            rect: ['1480px', '33px', '41px', '73px', 'auto', 'auto'],
                            id: 'spritAlaIzquierda_symbol_12',
                            symbolName: 'spritAlaIzquierda_symbol_1',
                            type: 'rect',
                            transform: [[], [], [], ['0.7', '0.7']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '194px', '164px']
                        }
                    }
                },
                timeline: {
                    duration: 90000,
                    autoPlay: true,
                    data: [
                        [
                            "eid683",
                            "left",
                            0,
                            45000,
                            "linear",
                            "${spritAlaIzquierda_symbol_1}",
                            '117px',
                            '1479px'
                        ],
                        [
                            "eid685",
                            "left",
                            0,
                            45000,
                            "linear",
                            "${spritAlaDerecha_symbol_1}",
                            '102px',
                            '1464px'
                        ],
                        [
                            "eid687",
                            "left",
                            0,
                            45000,
                            "linear",
                            "${cuerpoGuarda}",
                            '5px',
                            '1367px'
                        ],
                        [
                            "eid690",
                            "top",
                            45000,
                            45000,
                            "linear",
                            "${spritAlaIzquierda_symbol_12}",
                            '33px',
                            '34px'
                        ],
                        [
                            "eid694",
                            "top",
                            45000,
                            45000,
                            "linear",
                            "${spritAlaDerecha_symbol_12}",
                            '87px',
                            '88px'
                        ],
                        [
                            "eid688",
                            "top",
                            0,
                            45000,
                            "linear",
                            "${cuerpoGuarda}",
                            '32px',
                            '34px'
                        ],
                        [
                            "eid693",
                            "left",
                            45000,
                            45000,
                            "linear",
                            "${spritAlaDerecha_symbol_12}",
                            '1467px',
                            '55px'
                        ],
                        [
                            "eid689",
                            "left",
                            45000,
                            45000,
                            "linear",
                            "${spritAlaIzquierda_symbol_12}",
                            '1480px',
                            '68px'
                        ],
                        [
                            "eid692",
                            "top",
                            45000,
                            45000,
                            "linear",
                            "${cuerpoGuarda2}",
                            '32px',
                            '33px'
                        ],
                        [
                            "eid686",
                            "top",
                            0,
                            45000,
                            "linear",
                            "${spritAlaDerecha_symbol_1}",
                            '86px',
                            '88px'
                        ],
                        [
                            "eid691",
                            "left",
                            45000,
                            45000,
                            "linear",
                            "${cuerpoGuarda2}",
                            '1440px',
                            '28px'
                        ],
                        [
                            "eid684",
                            "top",
                            0,
                            45000,
                            "linear",
                            "${spritAlaIzquierda_symbol_1}",
                            '32px',
                            '34px'
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
                            "eid23",
                            "height",
                            0,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '0px',
                            '29px'
                        ],
                        [
                            "eid26",
                            "height",
                            41,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '29px',
                            '33px'
                        ],
                        [
                            "eid28",
                            "height",
                            83,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '33px',
                            '36px'
                        ],
                        [
                            "eid30",
                            "height",
                            125,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '36px',
                            '40px'
                        ],
                        [
                            "eid32",
                            "height",
                            166,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '40px',
                            '43px'
                        ],
                        [
                            "eid34",
                            "height",
                            208,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '43px',
                            '47px'
                        ],
                        [
                            "eid36",
                            "height",
                            250,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '47px',
                            '50px'
                        ],
                        [
                            "eid38",
                            "height",
                            291,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '50px',
                            '53px'
                        ],
                        [
                            "eid40",
                            "height",
                            333,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '53px',
                            '57px'
                        ],
                        [
                            "eid42",
                            "height",
                            375,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '57px',
                            '60px'
                        ],
                        [
                            "eid44",
                            "height",
                            416,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '60px',
                            '64px'
                        ],
                        [
                            "eid46",
                            "height",
                            458,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '64px',
                            '67px'
                        ],
                        [
                            "eid48",
                            "height",
                            500,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '67px',
                            '70px'
                        ],
                        [
                            "eid50",
                            "height",
                            541,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '70px',
                            '74px'
                        ],
                        [
                            "eid52",
                            "height",
                            583,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '74px',
                            '77px'
                        ],
                        [
                            "eid54",
                            "height",
                            625,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '77px',
                            '74px'
                        ],
                        [
                            "eid56",
                            "height",
                            666,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '74px',
                            '71px'
                        ],
                        [
                            "eid58",
                            "height",
                            708,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '71px',
                            '68px'
                        ],
                        [
                            "eid60",
                            "height",
                            750,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '68px',
                            '65px'
                        ],
                        [
                            "eid62",
                            "height",
                            791,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '65px',
                            '61px'
                        ],
                        [
                            "eid64",
                            "height",
                            833,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '61px',
                            '58px'
                        ],
                        [
                            "eid66",
                            "height",
                            875,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '58px',
                            '55px'
                        ],
                        [
                            "eid68",
                            "height",
                            916,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '55px',
                            '52px'
                        ],
                        [
                            "eid70",
                            "height",
                            958,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '52px',
                            '49px'
                        ],
                        [
                            "eid72",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '49px',
                            '45px'
                        ],
                        [
                            "eid74",
                            "height",
                            1041,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '45px',
                            '42px'
                        ],
                        [
                            "eid76",
                            "height",
                            1083,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '42px',
                            '39px'
                        ],
                        [
                            "eid78",
                            "height",
                            1125,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '39px',
                            '36px'
                        ],
                        [
                            "eid80",
                            "height",
                            1166,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '36px',
                            '33px'
                        ],
                        [
                            "eid82",
                            "height",
                            1208,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '33px',
                            '29px'
                        ],
                        [
                            "eid25",
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
                            "eid27",
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
                            "eid29",
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
                            "eid31",
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
                            "eid33",
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
                            "eid35",
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
                            "eid37",
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
                            "eid39",
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
                            "eid41",
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
                            "eid43",
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
                            "eid45",
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
                            "eid47",
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
                            "eid49",
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
                            "eid51",
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
                            "eid53",
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
                            "eid55",
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
                            "eid57",
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
                            "eid59",
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
                            "eid61",
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
                            "eid63",
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
                            "eid65",
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
                            "eid67",
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
                            "eid69",
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
                            "eid71",
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
                            "eid73",
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
                            "eid75",
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
                            "eid77",
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
                            "eid79",
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
                            "eid81",
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
                            "eid83",
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
                            "eid24",
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
                            "eid84",
                            "height",
                            0,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '0px',
                            '73px'
                        ],
                        [
                            "eid88",
                            "height",
                            41,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '73px',
                            '70px'
                        ],
                        [
                            "eid91",
                            "height",
                            83,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '70px',
                            '67px'
                        ],
                        [
                            "eid94",
                            "height",
                            125,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '67px',
                            '64px'
                        ],
                        [
                            "eid97",
                            "height",
                            166,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '64px',
                            '61px'
                        ],
                        [
                            "eid100",
                            "height",
                            208,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '61px',
                            '58px'
                        ],
                        [
                            "eid103",
                            "height",
                            250,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '58px',
                            '55px'
                        ],
                        [
                            "eid106",
                            "height",
                            291,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '55px',
                            '52px'
                        ],
                        [
                            "eid109",
                            "height",
                            333,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '52px',
                            '49px'
                        ],
                        [
                            "eid112",
                            "height",
                            375,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '49px',
                            '46px'
                        ],
                        [
                            "eid115",
                            "height",
                            416,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '46px',
                            '43px'
                        ],
                        [
                            "eid118",
                            "height",
                            458,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '43px',
                            '40px'
                        ],
                        [
                            "eid121",
                            "height",
                            500,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '40px',
                            '37px'
                        ],
                        [
                            "eid124",
                            "height",
                            541,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '37px',
                            '35px'
                        ],
                        [
                            "eid127",
                            "height",
                            583,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '35px',
                            '32px'
                        ],
                        [
                            "eid130",
                            "height",
                            625,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '32px',
                            '35px'
                        ],
                        [
                            "eid133",
                            "height",
                            666,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '35px',
                            '37px'
                        ],
                        [
                            "eid136",
                            "height",
                            708,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '37px',
                            '39px'
                        ],
                        [
                            "eid139",
                            "height",
                            750,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '39px',
                            '42px'
                        ],
                        [
                            "eid142",
                            "height",
                            791,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '42px',
                            '45px'
                        ],
                        [
                            "eid145",
                            "height",
                            833,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '45px',
                            '48px'
                        ],
                        [
                            "eid148",
                            "height",
                            875,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '48px',
                            '50px'
                        ],
                        [
                            "eid151",
                            "height",
                            916,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '50px',
                            '53px'
                        ],
                        [
                            "eid154",
                            "height",
                            958,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '53px',
                            '56px'
                        ],
                        [
                            "eid157",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '56px',
                            '59px'
                        ],
                        [
                            "eid160",
                            "height",
                            1041,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '59px',
                            '62px'
                        ],
                        [
                            "eid163",
                            "height",
                            1083,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '62px',
                            '64px'
                        ],
                        [
                            "eid166",
                            "height",
                            1125,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '64px',
                            '67px'
                        ],
                        [
                            "eid169",
                            "height",
                            1166,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '67px',
                            '70px'
                        ],
                        [
                            "eid172",
                            "height",
                            1208,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '70px',
                            '73px'
                        ],
                        [
                            "eid85",
                            "width",
                            0,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '0px',
                            '41px'
                        ],
                        [
                            "eid87",
                            "top",
                            41,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid90",
                            "top",
                            83,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '3px',
                            '6px'
                        ],
                        [
                            "eid93",
                            "top",
                            125,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '6px',
                            '9px'
                        ],
                        [
                            "eid96",
                            "top",
                            166,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '9px',
                            '12px'
                        ],
                        [
                            "eid99",
                            "top",
                            208,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '12px',
                            '15px'
                        ],
                        [
                            "eid102",
                            "top",
                            250,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '15px',
                            '18px'
                        ],
                        [
                            "eid105",
                            "top",
                            291,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '18px',
                            '21px'
                        ],
                        [
                            "eid108",
                            "top",
                            333,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '21px',
                            '24px'
                        ],
                        [
                            "eid111",
                            "top",
                            375,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '24px',
                            '27px'
                        ],
                        [
                            "eid114",
                            "top",
                            416,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '27px',
                            '30px'
                        ],
                        [
                            "eid117",
                            "top",
                            458,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '30px',
                            '33px'
                        ],
                        [
                            "eid120",
                            "top",
                            500,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '33px',
                            '36px'
                        ],
                        [
                            "eid123",
                            "top",
                            541,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '36px',
                            '38px'
                        ],
                        [
                            "eid126",
                            "top",
                            583,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '38px',
                            '41px'
                        ],
                        [
                            "eid129",
                            "top",
                            625,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '41px',
                            '38px'
                        ],
                        [
                            "eid132",
                            "top",
                            666,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '38px',
                            '36px'
                        ],
                        [
                            "eid135",
                            "top",
                            708,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '36px',
                            '34px'
                        ],
                        [
                            "eid138",
                            "top",
                            750,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '34px',
                            '31px'
                        ],
                        [
                            "eid141",
                            "top",
                            791,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '31px',
                            '28px'
                        ],
                        [
                            "eid144",
                            "top",
                            833,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '28px',
                            '25px'
                        ],
                        [
                            "eid147",
                            "top",
                            875,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '25px',
                            '23px'
                        ],
                        [
                            "eid150",
                            "top",
                            916,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '23px',
                            '20px'
                        ],
                        [
                            "eid153",
                            "top",
                            958,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '20px',
                            '17px'
                        ],
                        [
                            "eid156",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '17px',
                            '14px'
                        ],
                        [
                            "eid159",
                            "top",
                            1041,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '14px',
                            '11px'
                        ],
                        [
                            "eid162",
                            "top",
                            1083,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '11px',
                            '9px'
                        ],
                        [
                            "eid165",
                            "top",
                            1125,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '9px',
                            '6px'
                        ],
                        [
                            "eid168",
                            "top",
                            1166,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '6px',
                            '3px'
                        ],
                        [
                            "eid171",
                            "top",
                            1208,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid86",
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
                            "eid89",
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
                            "eid92",
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
                            "eid95",
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
                            "eid98",
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
                            "eid101",
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
                            "eid104",
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
                            "eid107",
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
                            "eid110",
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
                            "eid113",
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
                            "eid116",
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
                            "eid119",
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
                            "eid122",
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
                            "eid125",
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
                            "eid128",
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
                            "eid131",
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
                            "eid134",
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
                            "eid137",
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
                            "eid140",
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
                            "eid143",
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
                            "eid146",
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
                            "eid149",
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
                            "eid152",
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
                            "eid155",
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
                            "eid158",
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
                            "eid161",
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
                            "eid164",
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
                            "eid167",
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
                            "eid170",
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
                            "eid173",
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
            },
            "spriteGoat_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '2048px', '2048px', 'auto', 'auto'],
                            id: 'spriteGoat',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/spriteGoat.png', '0px', '0px', '2048px', '2048px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '212px', '234px']
                        }
                    }
                },
                timeline: {
                    duration: 7041,
                    autoPlay: true,
                    data: [
                        [
                            "eid174",
                            "left",
                            0,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '0px',
                            '17px'
                        ],
                        [
                            "eid179",
                            "left",
                            41,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '17px',
                            '14px'
                        ],
                        [
                            "eid182",
                            "left",
                            83,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '14px',
                            '10px'
                        ],
                        [
                            "eid185",
                            "left",
                            125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '10px',
                            '7px'
                        ],
                        [
                            "eid188",
                            "left",
                            166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '7px',
                            '3px'
                        ],
                        [
                            "eid191",
                            "left",
                            208,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid194",
                            "left",
                            250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid197",
                            "left",
                            291,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '1px',
                            '2px'
                        ],
                        [
                            "eid200",
                            "left",
                            333,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '2px',
                            '3px'
                        ],
                        [
                            "eid203",
                            "left",
                            375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '3px',
                            '4px'
                        ],
                        [
                            "eid206",
                            "left",
                            416,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '4px',
                            '5px'
                        ],
                        [
                            "eid209",
                            "left",
                            458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '5px',
                            '7px'
                        ],
                        [
                            "eid214",
                            "left",
                            500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '7px',
                            '9px'
                        ],
                        [
                            "eid219",
                            "left",
                            541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '9px',
                            '11px'
                        ],
                        [
                            "eid224",
                            "left",
                            583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '11px',
                            '13px'
                        ],
                        [
                            "eid229",
                            "left",
                            625,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '13px',
                            '15px'
                        ],
                        [
                            "eid232",
                            "left",
                            666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '15px',
                            '14px'
                        ],
                        [
                            "eid235",
                            "left",
                            708,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '14px',
                            '15px'
                        ],
                        [
                            "eid238",
                            "left",
                            750,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '15px',
                            '18px'
                        ],
                        [
                            "eid241",
                            "left",
                            791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '18px',
                            '23px'
                        ],
                        [
                            "eid244",
                            "left",
                            833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '23px',
                            '28px'
                        ],
                        [
                            "eid253",
                            "left",
                            1083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '28px',
                            '30px'
                        ],
                        [
                            "eid257",
                            "left",
                            1125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '30px',
                            '32px'
                        ],
                        [
                            "eid260",
                            "left",
                            1166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '32px',
                            '30px'
                        ],
                        [
                            "eid263",
                            "left",
                            1208,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '30px',
                            '28px'
                        ],
                        [
                            "eid266",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '28px',
                            '25px'
                        ],
                        [
                            "eid278",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '25px',
                            '22px'
                        ],
                        [
                            "eid282",
                            "left",
                            1541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '22px',
                            '18px'
                        ],
                        [
                            "eid286",
                            "left",
                            1583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '18px',
                            '14px'
                        ],
                        [
                            "eid290",
                            "left",
                            1625,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '14px',
                            '11px'
                        ],
                        [
                            "eid294",
                            "left",
                            1666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '11px',
                            '8px'
                        ],
                        [
                            "eid301",
                            "left",
                            1833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '8px',
                            '9px'
                        ],
                        [
                            "eid307",
                            "left",
                            1916,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '9px',
                            '10px'
                        ],
                        [
                            "eid310",
                            "left",
                            1958,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '10px',
                            '12px'
                        ],
                        [
                            "eid315",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '12px',
                            '14px'
                        ],
                        [
                            "eid320",
                            "left",
                            2041,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '14px',
                            '15px'
                        ],
                        [
                            "eid325",
                            "left",
                            2083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '15px',
                            '18px'
                        ],
                        [
                            "eid330",
                            "left",
                            2125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '18px',
                            '20px'
                        ],
                        [
                            "eid333",
                            "left",
                            2166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '20px',
                            '23px'
                        ],
                        [
                            "eid337",
                            "left",
                            2208,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '23px',
                            '27px'
                        ],
                        [
                            "eid340",
                            "left",
                            2250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '27px',
                            '26px'
                        ],
                        [
                            "eid343",
                            "left",
                            2291,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '26px',
                            '17px'
                        ],
                        [
                            "eid346",
                            "left",
                            2333,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '17px',
                            '14px'
                        ],
                        [
                            "eid349",
                            "left",
                            2375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '14px',
                            '10px'
                        ],
                        [
                            "eid352",
                            "left",
                            2416,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '10px',
                            '7px'
                        ],
                        [
                            "eid355",
                            "left",
                            2458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '7px',
                            '3px'
                        ],
                        [
                            "eid358",
                            "left",
                            2500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid361",
                            "left",
                            2541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid364",
                            "left",
                            2583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '1px',
                            '2px'
                        ],
                        [
                            "eid367",
                            "left",
                            2625,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '2px',
                            '3px'
                        ],
                        [
                            "eid370",
                            "left",
                            2666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '3px',
                            '4px'
                        ],
                        [
                            "eid373",
                            "left",
                            2708,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '4px',
                            '5px'
                        ],
                        [
                            "eid376",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '5px',
                            '7px'
                        ],
                        [
                            "eid381",
                            "left",
                            2791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '7px',
                            '9px'
                        ],
                        [
                            "eid386",
                            "left",
                            2833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '9px',
                            '11px'
                        ],
                        [
                            "eid391",
                            "left",
                            2875,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '11px',
                            '13px'
                        ],
                        [
                            "eid396",
                            "left",
                            2916,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '13px',
                            '15px'
                        ],
                        [
                            "eid399",
                            "left",
                            2958,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '15px',
                            '14px'
                        ],
                        [
                            "eid402",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '14px',
                            '15px'
                        ],
                        [
                            "eid405",
                            "left",
                            3041,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '15px',
                            '18px'
                        ],
                        [
                            "eid408",
                            "left",
                            3083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '18px',
                            '23px'
                        ],
                        [
                            "eid411",
                            "left",
                            3125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '23px',
                            '28px'
                        ],
                        [
                            "eid420",
                            "left",
                            3375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '28px',
                            '30px'
                        ],
                        [
                            "eid424",
                            "left",
                            3416,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '30px',
                            '32px'
                        ],
                        [
                            "eid427",
                            "left",
                            3458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '32px',
                            '30px'
                        ],
                        [
                            "eid430",
                            "left",
                            3500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '30px',
                            '28px'
                        ],
                        [
                            "eid433",
                            "left",
                            3541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '28px',
                            '25px'
                        ],
                        [
                            "eid445",
                            "left",
                            3791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '25px',
                            '22px'
                        ],
                        [
                            "eid449",
                            "left",
                            3833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '22px',
                            '18px'
                        ],
                        [
                            "eid453",
                            "left",
                            3875,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '18px',
                            '14px'
                        ],
                        [
                            "eid457",
                            "left",
                            3916,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '14px',
                            '11px'
                        ],
                        [
                            "eid461",
                            "left",
                            3958,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '11px',
                            '8px'
                        ],
                        [
                            "eid468",
                            "left",
                            4125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '8px',
                            '9px'
                        ],
                        [
                            "eid474",
                            "left",
                            4208,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '9px',
                            '10px'
                        ],
                        [
                            "eid477",
                            "left",
                            4250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '10px',
                            '12px'
                        ],
                        [
                            "eid482",
                            "left",
                            4291,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '12px',
                            '14px'
                        ],
                        [
                            "eid487",
                            "left",
                            4333,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '14px',
                            '15px'
                        ],
                        [
                            "eid492",
                            "left",
                            4375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '15px',
                            '18px'
                        ],
                        [
                            "eid497",
                            "left",
                            4416,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '18px',
                            '20px'
                        ],
                        [
                            "eid500",
                            "left",
                            4458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '20px',
                            '23px'
                        ],
                        [
                            "eid504",
                            "left",
                            4500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '23px',
                            '27px'
                        ],
                        [
                            "eid507",
                            "left",
                            4541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '27px',
                            '26px'
                        ],
                        [
                            "eid510",
                            "left",
                            4583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '26px',
                            '17px'
                        ],
                        [
                            "eid513",
                            "left",
                            4625,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '17px',
                            '14px'
                        ],
                        [
                            "eid516",
                            "left",
                            4666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '14px',
                            '10px'
                        ],
                        [
                            "eid519",
                            "left",
                            4708,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '10px',
                            '7px'
                        ],
                        [
                            "eid522",
                            "left",
                            4750,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '7px',
                            '3px'
                        ],
                        [
                            "eid525",
                            "left",
                            4791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid528",
                            "left",
                            4833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid531",
                            "left",
                            4875,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '1px',
                            '2px'
                        ],
                        [
                            "eid534",
                            "left",
                            4916,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '2px',
                            '3px'
                        ],
                        [
                            "eid537",
                            "left",
                            4958,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '3px',
                            '4px'
                        ],
                        [
                            "eid540",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '4px',
                            '5px'
                        ],
                        [
                            "eid543",
                            "left",
                            5041,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '5px',
                            '7px'
                        ],
                        [
                            "eid548",
                            "left",
                            5083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '7px',
                            '9px'
                        ],
                        [
                            "eid553",
                            "left",
                            5125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '9px',
                            '11px'
                        ],
                        [
                            "eid558",
                            "left",
                            5166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '11px',
                            '13px'
                        ],
                        [
                            "eid563",
                            "left",
                            5208,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '13px',
                            '15px'
                        ],
                        [
                            "eid566",
                            "left",
                            5250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '15px',
                            '14px'
                        ],
                        [
                            "eid569",
                            "left",
                            5291,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '14px',
                            '15px'
                        ],
                        [
                            "eid572",
                            "left",
                            5333,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '15px',
                            '18px'
                        ],
                        [
                            "eid575",
                            "left",
                            5375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '18px',
                            '23px'
                        ],
                        [
                            "eid578",
                            "left",
                            5416,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '23px',
                            '28px'
                        ],
                        [
                            "eid587",
                            "left",
                            5666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '28px',
                            '30px'
                        ],
                        [
                            "eid591",
                            "left",
                            5708,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '30px',
                            '32px'
                        ],
                        [
                            "eid594",
                            "left",
                            5750,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '32px',
                            '30px'
                        ],
                        [
                            "eid597",
                            "left",
                            5791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '30px',
                            '28px'
                        ],
                        [
                            "eid600",
                            "left",
                            5833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '28px',
                            '25px'
                        ],
                        [
                            "eid612",
                            "left",
                            6083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '25px',
                            '22px'
                        ],
                        [
                            "eid616",
                            "left",
                            6125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '22px',
                            '18px'
                        ],
                        [
                            "eid620",
                            "left",
                            6166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '18px',
                            '14px'
                        ],
                        [
                            "eid624",
                            "left",
                            6208,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '14px',
                            '11px'
                        ],
                        [
                            "eid628",
                            "left",
                            6250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '11px',
                            '8px'
                        ],
                        [
                            "eid635",
                            "left",
                            6416,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '8px',
                            '9px'
                        ],
                        [
                            "eid641",
                            "left",
                            6500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '9px',
                            '10px'
                        ],
                        [
                            "eid644",
                            "left",
                            6541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '10px',
                            '12px'
                        ],
                        [
                            "eid649",
                            "left",
                            6583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '12px',
                            '14px'
                        ],
                        [
                            "eid654",
                            "left",
                            6625,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '14px',
                            '15px'
                        ],
                        [
                            "eid659",
                            "left",
                            6666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '15px',
                            '18px'
                        ],
                        [
                            "eid664",
                            "left",
                            6708,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '18px',
                            '21px'
                        ],
                        [
                            "eid667",
                            "left",
                            6750,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '21px',
                            '24px'
                        ],
                        [
                            "eid670",
                            "left",
                            6791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '24px',
                            '28px'
                        ],
                        [
                            "eid176",
                            "height",
                            0,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '0px',
                            '229px'
                        ],
                        [
                            "eid211",
                            "height",
                            458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '229px',
                            '230px'
                        ],
                        [
                            "eid216",
                            "height",
                            500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '230px',
                            '231px'
                        ],
                        [
                            "eid221",
                            "height",
                            541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '231px',
                            '232px'
                        ],
                        [
                            "eid226",
                            "height",
                            583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '232px',
                            '233px'
                        ],
                        [
                            "eid247",
                            "height",
                            875,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '233px',
                            '232px'
                        ],
                        [
                            "eid254",
                            "height",
                            1083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '232px',
                            '231px'
                        ],
                        [
                            "eid267",
                            "height",
                            1250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '231px',
                            '230px'
                        ],
                        [
                            "eid270",
                            "height",
                            1291,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '230px',
                            '231px'
                        ],
                        [
                            "eid273",
                            "height",
                            1375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '231px',
                            '232px'
                        ],
                        [
                            "eid276",
                            "height",
                            1458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '232px',
                            '233px'
                        ],
                        [
                            "eid279",
                            "height",
                            1500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '233px',
                            '232px'
                        ],
                        [
                            "eid283",
                            "height",
                            1541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '232px',
                            '231px'
                        ],
                        [
                            "eid287",
                            "height",
                            1583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '231px',
                            '229px'
                        ],
                        [
                            "eid291",
                            "height",
                            1625,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '229px',
                            '228px'
                        ],
                        [
                            "eid295",
                            "height",
                            1666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '228px',
                            '227px'
                        ],
                        [
                            "eid302",
                            "height",
                            1833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '227px',
                            '230px'
                        ],
                        [
                            "eid305",
                            "height",
                            1875,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '230px',
                            '234px'
                        ],
                        [
                            "eid312",
                            "height",
                            1958,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '234px',
                            '233px'
                        ],
                        [
                            "eid317",
                            "height",
                            2000,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '233px',
                            '232px'
                        ],
                        [
                            "eid322",
                            "height",
                            2041,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '232px',
                            '231px'
                        ],
                        [
                            "eid327",
                            "height",
                            2083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '231px',
                            '230px'
                        ],
                        [
                            "eid334",
                            "height",
                            2166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '230px',
                            '229px'
                        ],
                        [
                            "eid378",
                            "height",
                            2750,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '229px',
                            '230px'
                        ],
                        [
                            "eid383",
                            "height",
                            2791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '230px',
                            '231px'
                        ],
                        [
                            "eid388",
                            "height",
                            2833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '231px',
                            '232px'
                        ],
                        [
                            "eid393",
                            "height",
                            2875,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '232px',
                            '233px'
                        ],
                        [
                            "eid414",
                            "height",
                            3166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '233px',
                            '232px'
                        ],
                        [
                            "eid421",
                            "height",
                            3375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '232px',
                            '231px'
                        ],
                        [
                            "eid434",
                            "height",
                            3541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '231px',
                            '230px'
                        ],
                        [
                            "eid437",
                            "height",
                            3583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '230px',
                            '231px'
                        ],
                        [
                            "eid440",
                            "height",
                            3666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '231px',
                            '232px'
                        ],
                        [
                            "eid443",
                            "height",
                            3750,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '232px',
                            '233px'
                        ],
                        [
                            "eid446",
                            "height",
                            3791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '233px',
                            '232px'
                        ],
                        [
                            "eid450",
                            "height",
                            3833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '232px',
                            '231px'
                        ],
                        [
                            "eid454",
                            "height",
                            3875,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '231px',
                            '229px'
                        ],
                        [
                            "eid458",
                            "height",
                            3916,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '229px',
                            '228px'
                        ],
                        [
                            "eid462",
                            "height",
                            3958,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '228px',
                            '227px'
                        ],
                        [
                            "eid469",
                            "height",
                            4125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '227px',
                            '230px'
                        ],
                        [
                            "eid472",
                            "height",
                            4166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '230px',
                            '234px'
                        ],
                        [
                            "eid479",
                            "height",
                            4250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '234px',
                            '233px'
                        ],
                        [
                            "eid484",
                            "height",
                            4291,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '233px',
                            '232px'
                        ],
                        [
                            "eid489",
                            "height",
                            4333,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '232px',
                            '231px'
                        ],
                        [
                            "eid494",
                            "height",
                            4375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '231px',
                            '230px'
                        ],
                        [
                            "eid501",
                            "height",
                            4458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '230px',
                            '229px'
                        ],
                        [
                            "eid545",
                            "height",
                            5041,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '229px',
                            '230px'
                        ],
                        [
                            "eid550",
                            "height",
                            5083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '230px',
                            '231px'
                        ],
                        [
                            "eid555",
                            "height",
                            5125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '231px',
                            '232px'
                        ],
                        [
                            "eid560",
                            "height",
                            5166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '232px',
                            '233px'
                        ],
                        [
                            "eid581",
                            "height",
                            5458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '233px',
                            '232px'
                        ],
                        [
                            "eid588",
                            "height",
                            5666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '232px',
                            '231px'
                        ],
                        [
                            "eid601",
                            "height",
                            5833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '231px',
                            '230px'
                        ],
                        [
                            "eid604",
                            "height",
                            5875,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '230px',
                            '231px'
                        ],
                        [
                            "eid607",
                            "height",
                            5958,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '231px',
                            '232px'
                        ],
                        [
                            "eid610",
                            "height",
                            6041,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '232px',
                            '233px'
                        ],
                        [
                            "eid613",
                            "height",
                            6083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '233px',
                            '232px'
                        ],
                        [
                            "eid617",
                            "height",
                            6125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '232px',
                            '231px'
                        ],
                        [
                            "eid621",
                            "height",
                            6166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '231px',
                            '229px'
                        ],
                        [
                            "eid625",
                            "height",
                            6208,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '229px',
                            '228px'
                        ],
                        [
                            "eid629",
                            "height",
                            6250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '228px',
                            '227px'
                        ],
                        [
                            "eid636",
                            "height",
                            6416,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '227px',
                            '230px'
                        ],
                        [
                            "eid639",
                            "height",
                            6458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '230px',
                            '234px'
                        ],
                        [
                            "eid646",
                            "height",
                            6541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '234px',
                            '233px'
                        ],
                        [
                            "eid651",
                            "height",
                            6583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '233px',
                            '232px'
                        ],
                        [
                            "eid656",
                            "height",
                            6625,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '232px',
                            '231px'
                        ],
                        [
                            "eid661",
                            "height",
                            6666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '231px',
                            '230px'
                        ],
                        [
                            "eid175",
                            "top",
                            0,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '0px',
                            '4px'
                        ],
                        [
                            "eid210",
                            "top",
                            458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '4px',
                            '3px'
                        ],
                        [
                            "eid215",
                            "top",
                            500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '3px',
                            '2px'
                        ],
                        [
                            "eid220",
                            "top",
                            541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '2px',
                            '1px'
                        ],
                        [
                            "eid225",
                            "top",
                            583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid311",
                            "top",
                            1958,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid316",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '1px',
                            '2px'
                        ],
                        [
                            "eid321",
                            "top",
                            2041,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '2px',
                            '3px'
                        ],
                        [
                            "eid326",
                            "top",
                            2083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '3px',
                            '4px'
                        ],
                        [
                            "eid377",
                            "top",
                            2750,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '4px',
                            '3px'
                        ],
                        [
                            "eid382",
                            "top",
                            2791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '3px',
                            '2px'
                        ],
                        [
                            "eid387",
                            "top",
                            2833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '2px',
                            '1px'
                        ],
                        [
                            "eid392",
                            "top",
                            2875,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid478",
                            "top",
                            4250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid483",
                            "top",
                            4291,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '1px',
                            '2px'
                        ],
                        [
                            "eid488",
                            "top",
                            4333,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '2px',
                            '3px'
                        ],
                        [
                            "eid493",
                            "top",
                            4375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '3px',
                            '4px'
                        ],
                        [
                            "eid544",
                            "top",
                            5041,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '4px',
                            '3px'
                        ],
                        [
                            "eid549",
                            "top",
                            5083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '3px',
                            '2px'
                        ],
                        [
                            "eid554",
                            "top",
                            5125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '2px',
                            '1px'
                        ],
                        [
                            "eid559",
                            "top",
                            5166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid645",
                            "top",
                            6541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid650",
                            "top",
                            6583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '1px',
                            '2px'
                        ],
                        [
                            "eid655",
                            "top",
                            6625,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '2px',
                            '3px'
                        ],
                        [
                            "eid660",
                            "top",
                            6666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '3px',
                            '4px'
                        ],
                        [
                            "eid178",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [0,0],
                            [-12,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid181",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-12,-12],
                            [-219,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid184",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-219,-12],
                            [-429,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid187",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-429,-12],
                            [-643,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid190",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-643,-12],
                            [-860,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid193",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-860,-12],
                            [-1080,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid196",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1080,-12],
                            [-1303,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid199",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1303,-12],
                            [-1525,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid202",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1525,-12],
                            [-1746,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid205",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1746,-12],
                            [-12,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid208",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-12,-253],
                            [-230,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid213",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-230,-253],
                            [-447,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid218",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-447,-253],
                            [-662,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid223",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-662,-253],
                            [-876,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid228",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-876,-253],
                            [-1088,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid231",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1088,-253],
                            [-1299,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid234",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1299,-253],
                            [-1508,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid237",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1508,-253],
                            [-1718,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid240",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1718,-253],
                            [-12,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid243",
                            "background-position",
                            791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-12,-498],
                            [-218,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid246",
                            "background-position",
                            833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-218,-498],
                            [-419,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid248",
                            "background-position",
                            875,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-419,-498],
                            [-615,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid249",
                            "background-position",
                            916,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-615,-498],
                            [-811,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid250",
                            "background-position",
                            958,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-811,-498],
                            [-1007,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid251",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1007,-498],
                            [-1203,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid252",
                            "background-position",
                            1041,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1203,-498],
                            [-1399,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid256",
                            "background-position",
                            1083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1399,-498],
                            [-1595,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid259",
                            "background-position",
                            1125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1595,-498],
                            [-1789,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid262",
                            "background-position",
                            1166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1789,-498],
                            [-12,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid265",
                            "background-position",
                            1208,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-12,-743],
                            [-206,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid269",
                            "background-position",
                            1250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-206,-743],
                            [-402,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid271",
                            "background-position",
                            1291,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-402,-743],
                            [-601,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid272",
                            "background-position",
                            1333,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-601,-743],
                            [-800,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid274",
                            "background-position",
                            1375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-800,-743],
                            [-999,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid275",
                            "background-position",
                            1416,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-999,-743],
                            [-1198,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid277",
                            "background-position",
                            1458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1198,-743],
                            [-1397,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid281",
                            "background-position",
                            1500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1397,-743],
                            [-1596,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid285",
                            "background-position",
                            1541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1596,-743],
                            [-1798,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid289",
                            "background-position",
                            1583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1798,-743],
                            [-12,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid293",
                            "background-position",
                            1625,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-12,-988],
                            [-222,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid297",
                            "background-position",
                            1666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-222,-988],
                            [-435,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid298",
                            "background-position",
                            1708,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-435,-988],
                            [-651,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid299",
                            "background-position",
                            1750,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-651,-988],
                            [-867,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid300",
                            "background-position",
                            1791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-867,-988],
                            [-1083,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid304",
                            "background-position",
                            1833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1083,-988],
                            [-1299,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid306",
                            "background-position",
                            1875,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1299,-988],
                            [-1514,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid309",
                            "background-position",
                            1916,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1514,-988],
                            [-1729,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid314",
                            "background-position",
                            1958,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1729,-988],
                            [-12,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid319",
                            "background-position",
                            2000,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-12,-1234],
                            [-224,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid324",
                            "background-position",
                            2041,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-224,-1234],
                            [-434,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid329",
                            "background-position",
                            2083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-434,-1234],
                            [-642,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid332",
                            "background-position",
                            2125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-642,-1234],
                            [-847,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid336",
                            "background-position",
                            2166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-847,-1234],
                            [-1050,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid339",
                            "background-position",
                            2208,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1050,-1234],
                            [-1251,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid342",
                            "background-position",
                            2250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1251,-1234],
                            [-1448,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid345",
                            "background-position",
                            2291,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1448,-1234],
                            [-12,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid348",
                            "background-position",
                            2333,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-12,-12],
                            [-219,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid351",
                            "background-position",
                            2375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-219,-12],
                            [-429,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid354",
                            "background-position",
                            2416,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-429,-12],
                            [-643,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid357",
                            "background-position",
                            2458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-643,-12],
                            [-860,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid360",
                            "background-position",
                            2500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-860,-12],
                            [-1080,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid363",
                            "background-position",
                            2541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1080,-12],
                            [-1303,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid366",
                            "background-position",
                            2583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1303,-12],
                            [-1525,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid369",
                            "background-position",
                            2625,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1525,-12],
                            [-1746,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid372",
                            "background-position",
                            2666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1746,-12],
                            [-12,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid375",
                            "background-position",
                            2708,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-12,-253],
                            [-230,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid380",
                            "background-position",
                            2750,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-230,-253],
                            [-447,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid385",
                            "background-position",
                            2791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-447,-253],
                            [-662,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid390",
                            "background-position",
                            2833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-662,-253],
                            [-876,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid395",
                            "background-position",
                            2875,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-876,-253],
                            [-1088,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid398",
                            "background-position",
                            2916,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1088,-253],
                            [-1299,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid401",
                            "background-position",
                            2958,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1299,-253],
                            [-1508,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid404",
                            "background-position",
                            3000,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1508,-253],
                            [-1718,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid407",
                            "background-position",
                            3041,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1718,-253],
                            [-12,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid410",
                            "background-position",
                            3083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-12,-498],
                            [-218,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid413",
                            "background-position",
                            3125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-218,-498],
                            [-419,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid415",
                            "background-position",
                            3166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-419,-498],
                            [-615,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid416",
                            "background-position",
                            3208,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-615,-498],
                            [-811,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid417",
                            "background-position",
                            3250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-811,-498],
                            [-1007,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid418",
                            "background-position",
                            3291,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1007,-498],
                            [-1203,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid419",
                            "background-position",
                            3333,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1203,-498],
                            [-1399,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid423",
                            "background-position",
                            3375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1399,-498],
                            [-1595,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid426",
                            "background-position",
                            3416,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1595,-498],
                            [-1789,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid429",
                            "background-position",
                            3458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1789,-498],
                            [-12,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid432",
                            "background-position",
                            3500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-12,-743],
                            [-206,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid436",
                            "background-position",
                            3541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-206,-743],
                            [-402,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid438",
                            "background-position",
                            3583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-402,-743],
                            [-601,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid439",
                            "background-position",
                            3625,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-601,-743],
                            [-800,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid441",
                            "background-position",
                            3666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-800,-743],
                            [-999,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid442",
                            "background-position",
                            3708,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-999,-743],
                            [-1198,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid444",
                            "background-position",
                            3750,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1198,-743],
                            [-1397,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid448",
                            "background-position",
                            3791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1397,-743],
                            [-1596,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid452",
                            "background-position",
                            3833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1596,-743],
                            [-1798,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid456",
                            "background-position",
                            3875,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1798,-743],
                            [-12,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid460",
                            "background-position",
                            3916,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-12,-988],
                            [-222,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid464",
                            "background-position",
                            3958,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-222,-988],
                            [-435,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid465",
                            "background-position",
                            4000,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-435,-988],
                            [-651,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid466",
                            "background-position",
                            4041,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-651,-988],
                            [-867,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid467",
                            "background-position",
                            4083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-867,-988],
                            [-1083,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid471",
                            "background-position",
                            4125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1083,-988],
                            [-1299,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid473",
                            "background-position",
                            4166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1299,-988],
                            [-1514,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid476",
                            "background-position",
                            4208,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1514,-988],
                            [-1729,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid481",
                            "background-position",
                            4250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1729,-988],
                            [-12,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid486",
                            "background-position",
                            4291,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-12,-1234],
                            [-224,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid491",
                            "background-position",
                            4333,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-224,-1234],
                            [-434,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid496",
                            "background-position",
                            4375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-434,-1234],
                            [-642,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid499",
                            "background-position",
                            4416,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-642,-1234],
                            [-847,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid503",
                            "background-position",
                            4458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-847,-1234],
                            [-1050,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid506",
                            "background-position",
                            4500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1050,-1234],
                            [-1251,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid509",
                            "background-position",
                            4541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1251,-1234],
                            [-1448,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid512",
                            "background-position",
                            4583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1448,-1234],
                            [-12,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid515",
                            "background-position",
                            4625,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-12,-12],
                            [-219,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid518",
                            "background-position",
                            4666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-219,-12],
                            [-429,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid521",
                            "background-position",
                            4708,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-429,-12],
                            [-643,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid524",
                            "background-position",
                            4750,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-643,-12],
                            [-860,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid527",
                            "background-position",
                            4791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-860,-12],
                            [-1080,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid530",
                            "background-position",
                            4833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1080,-12],
                            [-1303,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid533",
                            "background-position",
                            4875,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1303,-12],
                            [-1525,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid536",
                            "background-position",
                            4916,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1525,-12],
                            [-1746,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid539",
                            "background-position",
                            4958,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1746,-12],
                            [-12,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid542",
                            "background-position",
                            5000,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-12,-253],
                            [-230,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid547",
                            "background-position",
                            5041,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-230,-253],
                            [-447,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid552",
                            "background-position",
                            5083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-447,-253],
                            [-662,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid557",
                            "background-position",
                            5125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-662,-253],
                            [-876,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid562",
                            "background-position",
                            5166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-876,-253],
                            [-1088,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid565",
                            "background-position",
                            5208,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1088,-253],
                            [-1299,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid568",
                            "background-position",
                            5250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1299,-253],
                            [-1508,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid571",
                            "background-position",
                            5291,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1508,-253],
                            [-1718,-253],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid574",
                            "background-position",
                            5333,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1718,-253],
                            [-12,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid577",
                            "background-position",
                            5375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-12,-498],
                            [-218,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid580",
                            "background-position",
                            5416,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-218,-498],
                            [-419,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid582",
                            "background-position",
                            5458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-419,-498],
                            [-615,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid583",
                            "background-position",
                            5500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-615,-498],
                            [-811,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid584",
                            "background-position",
                            5541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-811,-498],
                            [-1007,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid585",
                            "background-position",
                            5583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1007,-498],
                            [-1203,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid586",
                            "background-position",
                            5625,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1203,-498],
                            [-1399,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid590",
                            "background-position",
                            5666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1399,-498],
                            [-1595,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid593",
                            "background-position",
                            5708,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1595,-498],
                            [-1789,-498],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid596",
                            "background-position",
                            5750,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1789,-498],
                            [-12,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid599",
                            "background-position",
                            5791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-12,-743],
                            [-206,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid603",
                            "background-position",
                            5833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-206,-743],
                            [-402,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid605",
                            "background-position",
                            5875,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-402,-743],
                            [-601,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid606",
                            "background-position",
                            5916,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-601,-743],
                            [-800,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid608",
                            "background-position",
                            5958,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-800,-743],
                            [-999,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid609",
                            "background-position",
                            6000,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-999,-743],
                            [-1198,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid611",
                            "background-position",
                            6041,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1198,-743],
                            [-1397,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid615",
                            "background-position",
                            6083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1397,-743],
                            [-1596,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid619",
                            "background-position",
                            6125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1596,-743],
                            [-1798,-743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid623",
                            "background-position",
                            6166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1798,-743],
                            [-12,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid627",
                            "background-position",
                            6208,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-12,-988],
                            [-222,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid631",
                            "background-position",
                            6250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-222,-988],
                            [-435,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid632",
                            "background-position",
                            6291,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-435,-988],
                            [-651,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid633",
                            "background-position",
                            6333,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-651,-988],
                            [-867,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid634",
                            "background-position",
                            6375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-867,-988],
                            [-1083,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid638",
                            "background-position",
                            6416,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1083,-988],
                            [-1299,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid640",
                            "background-position",
                            6458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1299,-988],
                            [-1514,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid643",
                            "background-position",
                            6500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1514,-988],
                            [-1729,-988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid648",
                            "background-position",
                            6541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1729,-988],
                            [-12,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid653",
                            "background-position",
                            6583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-12,-1234],
                            [-224,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid658",
                            "background-position",
                            6625,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-224,-1234],
                            [-434,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid663",
                            "background-position",
                            6666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-434,-1234],
                            [-642,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid666",
                            "background-position",
                            6708,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-642,-1234],
                            [-1646,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid669",
                            "background-position",
                            6750,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1646,-1234],
                            [-1848,-1234],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid672",
                            "background-position",
                            6791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-1848,-1234],
                            [-12,-1479],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid673",
                            "background-position",
                            6833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-12,-1479],
                            [-207,-1479],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid674",
                            "background-position",
                            6875,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-207,-1479],
                            [-402,-1479],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid675",
                            "background-position",
                            6916,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-402,-1479],
                            [-597,-1479],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid676",
                            "background-position",
                            6958,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-597,-1479],
                            [-792,-1479],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid677",
                            "background-position",
                            7000,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-792,-1479],
                            [-987,-1479],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid678",
                            "background-position",
                            7041,
                            0,
                            "linear",
                            "${spriteGoat}",
                            [-987,-1479],
                            [-1182,-1479],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid177",
                            "width",
                            0,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '0px',
                            '195px'
                        ],
                        [
                            "eid180",
                            "width",
                            41,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '195px',
                            '198px'
                        ],
                        [
                            "eid183",
                            "width",
                            83,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '198px',
                            '202px'
                        ],
                        [
                            "eid186",
                            "width",
                            125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '202px',
                            '205px'
                        ],
                        [
                            "eid189",
                            "width",
                            166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '205px',
                            '208px'
                        ],
                        [
                            "eid192",
                            "width",
                            208,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '208px',
                            '211px'
                        ],
                        [
                            "eid195",
                            "width",
                            250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '211px',
                            '210px'
                        ],
                        [
                            "eid198",
                            "width",
                            291,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '210px',
                            '209px'
                        ],
                        [
                            "eid201",
                            "width",
                            333,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '209px',
                            '207px'
                        ],
                        [
                            "eid204",
                            "width",
                            375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '207px',
                            '206px'
                        ],
                        [
                            "eid207",
                            "width",
                            416,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '206px',
                            '205px'
                        ],
                        [
                            "eid212",
                            "width",
                            458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '205px',
                            '203px'
                        ],
                        [
                            "eid217",
                            "width",
                            500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '203px',
                            '202px'
                        ],
                        [
                            "eid222",
                            "width",
                            541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '202px',
                            '200px'
                        ],
                        [
                            "eid227",
                            "width",
                            583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '200px',
                            '199px'
                        ],
                        [
                            "eid230",
                            "width",
                            625,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '199px',
                            '197px'
                        ],
                        [
                            "eid233",
                            "width",
                            666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '197px',
                            '198px'
                        ],
                        [
                            "eid236",
                            "width",
                            708,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '198px',
                            '197px'
                        ],
                        [
                            "eid239",
                            "width",
                            750,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '197px',
                            '194px'
                        ],
                        [
                            "eid242",
                            "width",
                            791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '194px',
                            '189px'
                        ],
                        [
                            "eid245",
                            "width",
                            833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '189px',
                            '184px'
                        ],
                        [
                            "eid255",
                            "width",
                            1083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '184px',
                            '182px'
                        ],
                        [
                            "eid258",
                            "width",
                            1125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '182px',
                            '180px'
                        ],
                        [
                            "eid261",
                            "width",
                            1166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '180px',
                            '182px'
                        ],
                        [
                            "eid264",
                            "width",
                            1208,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '182px',
                            '184px'
                        ],
                        [
                            "eid268",
                            "width",
                            1250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '184px',
                            '187px'
                        ],
                        [
                            "eid280",
                            "width",
                            1500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '187px',
                            '190px'
                        ],
                        [
                            "eid284",
                            "width",
                            1541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '190px',
                            '194px'
                        ],
                        [
                            "eid288",
                            "width",
                            1583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '194px',
                            '198px'
                        ],
                        [
                            "eid292",
                            "width",
                            1625,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '198px',
                            '201px'
                        ],
                        [
                            "eid296",
                            "width",
                            1666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '201px',
                            '204px'
                        ],
                        [
                            "eid303",
                            "width",
                            1833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '204px',
                            '203px'
                        ],
                        [
                            "eid308",
                            "width",
                            1916,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '203px',
                            '202px'
                        ],
                        [
                            "eid313",
                            "width",
                            1958,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '202px',
                            '200px'
                        ],
                        [
                            "eid318",
                            "width",
                            2000,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '200px',
                            '198px'
                        ],
                        [
                            "eid323",
                            "width",
                            2041,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '198px',
                            '196px'
                        ],
                        [
                            "eid328",
                            "width",
                            2083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '196px',
                            '193px'
                        ],
                        [
                            "eid331",
                            "width",
                            2125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '193px',
                            '191px'
                        ],
                        [
                            "eid335",
                            "width",
                            2166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '191px',
                            '189px'
                        ],
                        [
                            "eid338",
                            "width",
                            2208,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '189px',
                            '185px'
                        ],
                        [
                            "eid341",
                            "width",
                            2250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '185px',
                            '186px'
                        ],
                        [
                            "eid344",
                            "width",
                            2291,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '186px',
                            '195px'
                        ],
                        [
                            "eid347",
                            "width",
                            2333,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '195px',
                            '198px'
                        ],
                        [
                            "eid350",
                            "width",
                            2375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '198px',
                            '202px'
                        ],
                        [
                            "eid353",
                            "width",
                            2416,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '202px',
                            '205px'
                        ],
                        [
                            "eid356",
                            "width",
                            2458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '205px',
                            '208px'
                        ],
                        [
                            "eid359",
                            "width",
                            2500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '208px',
                            '211px'
                        ],
                        [
                            "eid362",
                            "width",
                            2541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '211px',
                            '210px'
                        ],
                        [
                            "eid365",
                            "width",
                            2583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '210px',
                            '209px'
                        ],
                        [
                            "eid368",
                            "width",
                            2625,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '209px',
                            '207px'
                        ],
                        [
                            "eid371",
                            "width",
                            2666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '207px',
                            '206px'
                        ],
                        [
                            "eid374",
                            "width",
                            2708,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '206px',
                            '205px'
                        ],
                        [
                            "eid379",
                            "width",
                            2750,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '205px',
                            '203px'
                        ],
                        [
                            "eid384",
                            "width",
                            2791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '203px',
                            '202px'
                        ],
                        [
                            "eid389",
                            "width",
                            2833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '202px',
                            '200px'
                        ],
                        [
                            "eid394",
                            "width",
                            2875,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '200px',
                            '199px'
                        ],
                        [
                            "eid397",
                            "width",
                            2916,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '199px',
                            '197px'
                        ],
                        [
                            "eid400",
                            "width",
                            2958,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '197px',
                            '198px'
                        ],
                        [
                            "eid403",
                            "width",
                            3000,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '198px',
                            '197px'
                        ],
                        [
                            "eid406",
                            "width",
                            3041,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '197px',
                            '194px'
                        ],
                        [
                            "eid409",
                            "width",
                            3083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '194px',
                            '189px'
                        ],
                        [
                            "eid412",
                            "width",
                            3125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '189px',
                            '184px'
                        ],
                        [
                            "eid422",
                            "width",
                            3375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '184px',
                            '182px'
                        ],
                        [
                            "eid425",
                            "width",
                            3416,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '182px',
                            '180px'
                        ],
                        [
                            "eid428",
                            "width",
                            3458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '180px',
                            '182px'
                        ],
                        [
                            "eid431",
                            "width",
                            3500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '182px',
                            '184px'
                        ],
                        [
                            "eid435",
                            "width",
                            3541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '184px',
                            '187px'
                        ],
                        [
                            "eid447",
                            "width",
                            3791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '187px',
                            '190px'
                        ],
                        [
                            "eid451",
                            "width",
                            3833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '190px',
                            '194px'
                        ],
                        [
                            "eid455",
                            "width",
                            3875,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '194px',
                            '198px'
                        ],
                        [
                            "eid459",
                            "width",
                            3916,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '198px',
                            '201px'
                        ],
                        [
                            "eid463",
                            "width",
                            3958,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '201px',
                            '204px'
                        ],
                        [
                            "eid470",
                            "width",
                            4125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '204px',
                            '203px'
                        ],
                        [
                            "eid475",
                            "width",
                            4208,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '203px',
                            '202px'
                        ],
                        [
                            "eid480",
                            "width",
                            4250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '202px',
                            '200px'
                        ],
                        [
                            "eid485",
                            "width",
                            4291,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '200px',
                            '198px'
                        ],
                        [
                            "eid490",
                            "width",
                            4333,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '198px',
                            '196px'
                        ],
                        [
                            "eid495",
                            "width",
                            4375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '196px',
                            '193px'
                        ],
                        [
                            "eid498",
                            "width",
                            4416,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '193px',
                            '191px'
                        ],
                        [
                            "eid502",
                            "width",
                            4458,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '191px',
                            '189px'
                        ],
                        [
                            "eid505",
                            "width",
                            4500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '189px',
                            '185px'
                        ],
                        [
                            "eid508",
                            "width",
                            4541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '185px',
                            '186px'
                        ],
                        [
                            "eid511",
                            "width",
                            4583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '186px',
                            '195px'
                        ],
                        [
                            "eid514",
                            "width",
                            4625,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '195px',
                            '198px'
                        ],
                        [
                            "eid517",
                            "width",
                            4666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '198px',
                            '202px'
                        ],
                        [
                            "eid520",
                            "width",
                            4708,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '202px',
                            '205px'
                        ],
                        [
                            "eid523",
                            "width",
                            4750,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '205px',
                            '208px'
                        ],
                        [
                            "eid526",
                            "width",
                            4791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '208px',
                            '211px'
                        ],
                        [
                            "eid529",
                            "width",
                            4833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '211px',
                            '210px'
                        ],
                        [
                            "eid532",
                            "width",
                            4875,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '210px',
                            '209px'
                        ],
                        [
                            "eid535",
                            "width",
                            4916,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '209px',
                            '207px'
                        ],
                        [
                            "eid538",
                            "width",
                            4958,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '207px',
                            '206px'
                        ],
                        [
                            "eid541",
                            "width",
                            5000,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '206px',
                            '205px'
                        ],
                        [
                            "eid546",
                            "width",
                            5041,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '205px',
                            '203px'
                        ],
                        [
                            "eid551",
                            "width",
                            5083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '203px',
                            '202px'
                        ],
                        [
                            "eid556",
                            "width",
                            5125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '202px',
                            '200px'
                        ],
                        [
                            "eid561",
                            "width",
                            5166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '200px',
                            '199px'
                        ],
                        [
                            "eid564",
                            "width",
                            5208,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '199px',
                            '197px'
                        ],
                        [
                            "eid567",
                            "width",
                            5250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '197px',
                            '198px'
                        ],
                        [
                            "eid570",
                            "width",
                            5291,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '198px',
                            '197px'
                        ],
                        [
                            "eid573",
                            "width",
                            5333,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '197px',
                            '194px'
                        ],
                        [
                            "eid576",
                            "width",
                            5375,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '194px',
                            '189px'
                        ],
                        [
                            "eid579",
                            "width",
                            5416,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '189px',
                            '184px'
                        ],
                        [
                            "eid589",
                            "width",
                            5666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '184px',
                            '182px'
                        ],
                        [
                            "eid592",
                            "width",
                            5708,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '182px',
                            '180px'
                        ],
                        [
                            "eid595",
                            "width",
                            5750,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '180px',
                            '182px'
                        ],
                        [
                            "eid598",
                            "width",
                            5791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '182px',
                            '184px'
                        ],
                        [
                            "eid602",
                            "width",
                            5833,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '184px',
                            '187px'
                        ],
                        [
                            "eid614",
                            "width",
                            6083,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '187px',
                            '190px'
                        ],
                        [
                            "eid618",
                            "width",
                            6125,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '190px',
                            '194px'
                        ],
                        [
                            "eid622",
                            "width",
                            6166,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '194px',
                            '198px'
                        ],
                        [
                            "eid626",
                            "width",
                            6208,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '198px',
                            '201px'
                        ],
                        [
                            "eid630",
                            "width",
                            6250,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '201px',
                            '204px'
                        ],
                        [
                            "eid637",
                            "width",
                            6416,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '204px',
                            '203px'
                        ],
                        [
                            "eid642",
                            "width",
                            6500,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '203px',
                            '202px'
                        ],
                        [
                            "eid647",
                            "width",
                            6541,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '202px',
                            '200px'
                        ],
                        [
                            "eid652",
                            "width",
                            6583,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '200px',
                            '198px'
                        ],
                        [
                            "eid657",
                            "width",
                            6625,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '198px',
                            '196px'
                        ],
                        [
                            "eid662",
                            "width",
                            6666,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '196px',
                            '193px'
                        ],
                        [
                            "eid665",
                            "width",
                            6708,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '193px',
                            '190px'
                        ],
                        [
                            "eid668",
                            "width",
                            6750,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '190px',
                            '187px'
                        ],
                        [
                            "eid671",
                            "width",
                            6791,
                            0,
                            "linear",
                            "${spriteGoat}",
                            '187px',
                            '183px'
                        ]
                    ]
                }
            },
            "simCabra": {
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
                            rect: ['0px', '0px', '150px', '142px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['-31px', '-67px', '212px', '234px', 'auto', 'auto'],
                            id: 'spriteGoat_symbol_1',
                            symbolName: 'spriteGoat_symbol_1',
                            type: 'rect',
                            transform: [[], [], [], ['0.60684', '0.60684']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '150px', '142px']
                        }
                    }
                },
                timeline: {
                    duration: 65000,
                    autoPlay: true,
                    data: [
                        [
                            "eid695",
                            "left",
                            0,
                            65000,
                            "linear",
                            "${spriteGoat_symbol_1}",
                            '-31px',
                            '1229px'
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
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            rect: ['89px', '20px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255);\"></span>Arma Conjuntos.</p><p style=\"margin: 0px; text-align: center;\">&nbsp; Observa en el árbol los objetos y forma grupos </p><p style=\"margin: 0px; text-align: center;\">con objetos similares.&nbsp;</p><p style=\"margin: 0px; text-align: center;\"></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\"> </span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\"></span></p>',
                            opacity: '1',
                            align: 'left'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; text-align: center;\">​Los círculos anaranjados son los conjuntos donde puedes </p><p style=\"margin: 0px; text-align: center;\">agrupar los elementos.</p>',
                            rect: ['-812px', '34px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '686px', '135px']
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: false,
                    labels: {
                        "endF": 3000,
                        "end": 6000
                    },
                    data: [
                        [
                            "eid952",
                            "left",
                            3000,
                            1000,
                            "easeOutElastic",
                            "${Text}",
                            '-812px',
                            '30px'
                        ],
                        [
                            "eid24",
                            "width",
                            182,
                            500,
                            "easeInQuad",
                            "${Rectangle}",
                            '13px',
                            '686px'
                        ],
                        [
                            "eid26",
                            "width",
                            182,
                            500,
                            "easeInQuad",
                            "${Rectangle2}",
                            '13px',
                            '686px'
                        ],
                        [
                            "eid35",
                            "left",
                            932,
                            463,
                            "linear",
                            "${Text2}",
                            '-508px',
                            '95px'
                        ],
                        [
                            "eid701",
                            "left",
                            1395,
                            105,
                            "linear",
                            "${Text2}",
                            '95px',
                            '94px'
                        ],
                        [
                            "eid950",
                            "left",
                            1500,
                            100,
                            "linear",
                            "${Text2}",
                            '94px',
                            '90px'
                        ],
                        [
                            "eid705",
                            "left",
                            1600,
                            482,
                            "easeOutElastic",
                            "${Text2}",
                            '90px',
                            '89px'
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
                            932,
                            0,
                            "easeOutElastic",
                            "${Text2}",
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
                            rect: ['0px', '4px', '64px', '242px', 'auto', 'auto'],
                            fill: ['rgba(67,67,67,1.00)']
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
                            rect: ['-25px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], [], [], ['0']]
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
                            "eid878",
                            "opacity",
                            200,
                            0,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid873",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '-25px',
                            '-25px'
                        ],
                        [
                            "eid875",
                            "left",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '-25px',
                            '97px'
                        ],
                        [
                            "eid876",
                            "left",
                            200,
                            0,
                            "linear",
                            "${Text2}",
                            '97px',
                            '-25px'
                        ],
                        [
                            "eid872",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid874",
                            "scaleX",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid877",
                            "scaleX",
                            200,
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
                            rect: ['-28px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], [], [], ['0']]
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
                            "eid867",
                            "opacity",
                            177,
                            0,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid863",
                            "left",
                            0,
                            0,
                            "easeOutQuad",
                            "${Text2}",
                            '-28px',
                            '-28px'
                        ],
                        [
                            "eid865",
                            "left",
                            150,
                            0,
                            "easeOutQuad",
                            "${Text2}",
                            '-28px',
                            '88px'
                        ],
                        [
                            "eid868",
                            "left",
                            177,
                            0,
                            "easeOutQuad",
                            "${Text2}",
                            '88px',
                            '-28px'
                        ],
                        [
                            "eid862",
                            "scaleX",
                            0,
                            0,
                            "easeOutQuad",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid864",
                            "scaleX",
                            150,
                            0,
                            "easeOutQuad",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid866",
                            "scaleX",
                            177,
                            0,
                            "easeOutQuad",
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
                            rect: ['70px', '17px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], [], [], ['0']]
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
                            "eid891",
                            "opacity",
                            218,
                            0,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid887",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '-55px',
                            '-55px'
                        ],
                        [
                            "eid889",
                            "left",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '-55px',
                            '70px'
                        ],
                        [
                            "eid892",
                            "left",
                            218,
                            0,
                            "linear",
                            "${Text2}",
                            '70px',
                            '-55px'
                        ],
                        [
                            "eid886",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid888",
                            "scaleX",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid890",
                            "scaleX",
                            218,
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
                            rect: ['5px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], [], [], ['0']]
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
                            "eid884",
                            "opacity",
                            200,
                            0,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid880",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid882",
                            "left",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '5px',
                            '113px'
                        ],
                        [
                            "eid885",
                            "left",
                            200,
                            0,
                            "linear",
                            "${Text2}",
                            '113px',
                            '5px'
                        ],
                        [
                            "eid879",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid881",
                            "scaleX",
                            150,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid883",
                            "scaleX",
                            200,
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
                        ]
                    ]
                }
            },
            "simDragConjunto": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '806px', '601px', 'auto', 'auto'],
                            id: 'rectangleContainer',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(23,59,139,0)']
                        },
                        {
                            rect: ['443px', '196px', '290px', '291px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'Pem35_Conjunto',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem35_Conjunto.png', '0px', '0px']
                        },
                        {
                            rect: ['248px', '-58px', '290px', '291px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'Pem35_Conjunto2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem35_Conjunto.png', '0px', '0px']
                        },
                        {
                            rect: ['42px', '164px', '290px', '291px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'Pem35_Conjunto3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem35_Conjunto.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'simArbolFrutal',
                            symbolName: 'simArbolFrutal',
                            userClass: 'box',
                            rect: ['487px', '337', '51', '72', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'simArbolFrutal_1',
                            symbolName: 'simArbolFrutal_1',
                            userClass: 'box',
                            rect: ['644px', '286px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'simArbolFrutal_2',
                            symbolName: 'simArbolFrutal_2',
                            userClass: 'box',
                            rect: ['328px', '88px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'simArbolFrutal_3',
                            symbolName: 'simArbolFrutal_3',
                            userClass: 'box',
                            rect: ['436px', '6px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'simArbolFrutal_4',
                            symbolName: 'simArbolFrutal_4',
                            userClass: 'box',
                            rect: ['78px', '232px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'simArbolFrutal_5',
                            symbolName: 'simArbolFrutal_5',
                            userClass: 'box',
                            rect: ['238', '322', null, null, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '806px', '601px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    labels: {
                        "end": 1000
                    },
                    data: [
                        [
                            "eid935",
                            "opacity",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Pem35_Conjunto3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid913",
                            "scaleX",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Pem35_Conjunto2}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid933",
                            "scaleY",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Pem35_Conjunto3}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid739",
                            "opacity",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Pem35_Conjunto}",
                            '0',
                            '1'
                        ],
                        [
                            "eid743",
                            "scaleY",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Pem35_Conjunto}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid741",
                            "scaleX",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Pem35_Conjunto}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid931",
                            "scaleX",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Pem35_Conjunto3}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid911",
                            "opacity",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Pem35_Conjunto2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid915",
                            "scaleY",
                            0,
                            1000,
                            "easeOutElastic",
                            "${Pem35_Conjunto2}",
                            '0.3',
                            '1'
                        ],
                        [
                            "eid850",
                            "left",
                            0,
                            0,
                            "easeInCirc",
                            "${simArbolFrutal}",
                            '487px',
                            '487px'
                        ]
                    ]
                }
            },
            "simArbolFrutal": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-25px', '-36px', '102px', '143px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: '',
                            id: 'Pem35_ArbolFrutal',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem35_ArbolFrutal.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            rect: ['77px', '119px', '231px', '34px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle6',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(46,46,46,1.00)'],
                            c: [
                            {
                                rect: ['91px', '-15px', '42px', '44px', 'auto', 'auto'],
                                transform: [[], ['45'], [], ['0.41755', '0.5542']],
                                id: 'Rectangle7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(46,46,46,1)']
                            },
                            {
                                rect: ['226px', '0px', '5px', '34px', 'auto', 'auto'],
                                id: 'Rectangle8',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['42px', '1px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'Text2',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 20px; color: rgb(255, 255, 255); font-family: Arial, Helvetica, sans-serif;\">Árbol con frutas</span></p>',
                                align: 'left',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '51px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 1353,
                    autoPlay: false,
                    labels: {
                        "hide": 1200,
                        "tooltip": 1250
                    },
                    data: [
                        [
                            "eid745",
                            "opacity",
                            500,
                            500,
                            "easeOutElastic",
                            "${Pem35_ArbolFrutal}",
                            '0',
                            '1'
                        ],
                        [
                            "eid747",
                            "scaleX",
                            500,
                            500,
                            "easeOutElastic",
                            "${Pem35_ArbolFrutal}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid851",
                            "opacity",
                            1250,
                            0,
                            "linear",
                            "${Rectangle6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid858",
                            "opacity",
                            1269,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid859",
                            "scaleX",
                            1200,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid964",
                            "scaleX",
                            1250,
                            103,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid749",
                            "scaleY",
                            500,
                            500,
                            "easeOutElastic",
                            "${Pem35_ArbolFrutal}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid965",
                            "scaleY",
                            1250,
                            103,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid860",
                            "left",
                            1200,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '-89px',
                            '-205px'
                        ],
                        [
                            "eid857",
                            "left",
                            1250,
                            103,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '-205px',
                            '-90px'
                        ]
                    ]
                }
            },
            "simArbolFrutal_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-25px', '-36px', '78px', '153px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'Pem35_FrutaPina2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem35_FrutaPina.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            rect: ['-89px', '128px', '231px', '34px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle6',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(46,46,46,1.00)'],
                            c: [
                            {
                                rect: ['95px', '-15px', '42px', '44px', 'auto', 'auto'],
                                transform: [[], ['140'], [], ['0.41755', '0.5542']],
                                id: 'Rectangle7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(46,46,46,1)']
                            },
                            {
                                rect: ['226px', '0px', '5px', '34px', 'auto', 'auto'],
                                id: 'Rectangle8',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['69px', '2px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'Text2',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 20px; color: rgb(255, 255, 255); font-family: Arial, Helvetica, sans-serif;\">¡Una piña!</span></p>',
                                align: 'left',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '51px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 1353,
                    autoPlay: false,
                    labels: {
                        "hide": 1200,
                        "tooltip": 1250
                    },
                    data: [
                        [
                            "eid962",
                            "scaleY",
                            1250,
                            103,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid909",
                            "scaleY",
                            500,
                            500,
                            "easeOutElastic",
                            "${Pem35_FrutaPina2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid851",
                            "opacity",
                            1250,
                            0,
                            "linear",
                            "${Rectangle6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid858",
                            "opacity",
                            1269,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid859",
                            "scaleX",
                            1200,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid961",
                            "scaleX",
                            1250,
                            103,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid860",
                            "left",
                            1200,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '-89px',
                            '-89px'
                        ],
                        [
                            "eid955",
                            "left",
                            1250,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '-89px',
                            '-102px'
                        ],
                        [
                            "eid956",
                            "left",
                            1353,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '-102px',
                            '-102px'
                        ],
                        [
                            "eid907",
                            "scaleX",
                            500,
                            500,
                            "easeOutElastic",
                            "${Pem35_FrutaPina2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid905",
                            "opacity",
                            500,
                            500,
                            "easeOutElastic",
                            "${Pem35_FrutaPina2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simArbolFrutal_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-62px', '-44px', '175px', '160px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'Pem35_ArbolFloresido',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem35_ArbolFloresido.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['-89px', '35px', '231px', '34px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle6',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(46,46,46,1.00)'],
                            c: [
                            {
                                rect: ['-15px', '-8px', '42px', '44px', 'auto', 'auto'],
                                transform: [[], ['45'], [], ['0.41755', '0.5542']],
                                id: 'Rectangle7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(46,46,46,1)']
                            },
                            {
                                rect: ['226px', '0px', '5px', '34px', 'auto', 'auto'],
                                id: 'Rectangle8',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['45px', '1px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'Text2',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 20px; color: rgb(255, 255, 255); font-family: Arial, Helvetica, sans-serif;\">Árbol florecido</span></p>',
                                align: 'left',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '51px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 1353,
                    autoPlay: false,
                    labels: {
                        "hide": 1200,
                        "tooltip": 1250
                    },
                    data: [
                        [
                            "eid921",
                            "scaleY",
                            500,
                            500,
                            "easeOutElastic",
                            "${Pem35_ArbolFloresido}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid851",
                            "opacity",
                            1250,
                            0,
                            "linear",
                            "${Rectangle6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid858",
                            "opacity",
                            1269,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid859",
                            "scaleX",
                            1200,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid861",
                            "scaleX",
                            1250,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid860",
                            "left",
                            1200,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '-89px',
                            '-89px'
                        ],
                        [
                            "eid857",
                            "left",
                            1250,
                            103,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '102px',
                            '77px'
                        ],
                        [
                            "eid919",
                            "scaleX",
                            500,
                            500,
                            "easeOutElastic",
                            "${Pem35_ArbolFloresido}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid923",
                            "opacity",
                            500,
                            500,
                            "easeOutElastic",
                            "${Pem35_ArbolFloresido}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simArbolFrutal_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            rect: ['-13px', '-18px', '78px', '90px', 'auto', 'auto'],
                            id: 'Pem35_FrutaGusano',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem35_FrutaGusano.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle6',
                            opacity: '1',
                            rect: ['-89px', '35px', '231px', '34px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            transform: [[], [], [], ['0']],
                            fill: ['rgba(46,46,46,1.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [], ['0.41755', '0.5542']],
                                rect: ['-15px', '-8px', '42px', '44px', 'auto', 'auto'],
                                id: 'Rectangle7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(46,46,46,1)']
                            },
                            {
                                type: 'rect',
                                id: 'Rectangle8',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['226px', '0px', '5px', '34px', 'auto', 'auto'],
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                type: 'text',
                                rect: ['34px', '1px', 'auto', 'auto', 'auto', 'auto'],
                                align: 'left',
                                id: 'Text2',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 20px; color: rgb(255, 255, 255); font-family: Arial, Helvetica, sans-serif;\">¡Fruta con gusanos!</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '51px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 1353.4030689581,
                    autoPlay: false,
                    labels: {
                        "hide": 1200,
                        "tooltip": 1250
                    },
                    data: [
                        [
                            "eid929",
                            "opacity",
                            500,
                            500,
                            "easeOutElastic",
                            "${Pem35_FrutaGusano}",
                            '0',
                            '1'
                        ],
                        [
                            "eid851",
                            "opacity",
                            1250,
                            0,
                            "linear",
                            "${Rectangle6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid858",
                            "opacity",
                            1269,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid859",
                            "scaleX",
                            1200,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid861",
                            "scaleX",
                            1250,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid860",
                            "left",
                            1200,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '-89px',
                            '-89px'
                        ],
                        [
                            "eid857",
                            "left",
                            1250,
                            103,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '102px',
                            '77px'
                        ],
                        [
                            "eid927",
                            "scaleY",
                            500,
                            500,
                            "easeOutElastic",
                            "${Pem35_FrutaGusano}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid925",
                            "scaleX",
                            500,
                            500,
                            "easeOutElastic",
                            "${Pem35_FrutaGusano}",
                            '0.5',
                            '1'
                        ]
                    ]
                }
            },
            "simArbolFrutal_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            rect: ['-10px', '-39px', '103px', '150px', 'auto', 'auto'],
                            id: 'Pem35_Arbol',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem35_Arbol.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle6',
                            opacity: '1',
                            rect: ['-89px', '35px', '231px', '34px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            transform: [[], [], [], ['0']],
                            fill: ['rgba(46,46,46,1.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [], ['0.41755', '0.5542']],
                                rect: ['-15px', '-8px', '42px', '44px', 'auto', 'auto'],
                                id: 'Rectangle7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(46,46,46,1)']
                            },
                            {
                                type: 'rect',
                                id: 'Rectangle8',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['226px', '0px', '5px', '34px', 'auto', 'auto'],
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                type: 'text',
                                rect: ['76px', '2px', 'auto', 'auto', 'auto', 'auto'],
                                align: 'left',
                                id: 'Text2',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 20px; color: rgb(255, 255, 255); font-family: Arial, Helvetica, sans-serif;\">¡Un árbol&nbsp;</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '51px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 1353.4030689581,
                    autoPlay: false,
                    labels: {
                        "hide": 1200,
                        "tooltip": 1250
                    },
                    data: [
                        [
                            "eid943",
                            "scaleY",
                            500,
                            500,
                            "easeOutElastic",
                            "${Pem35_Arbol}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid939",
                            "opacity",
                            500,
                            500,
                            "easeOutElastic",
                            "${Pem35_Arbol}",
                            '0',
                            '1'
                        ],
                        [
                            "eid851",
                            "opacity",
                            1250,
                            0,
                            "linear",
                            "${Rectangle6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid858",
                            "opacity",
                            1269,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid859",
                            "scaleX",
                            1200,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid861",
                            "scaleX",
                            1250,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid860",
                            "left",
                            1200,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '-89px',
                            '-89px'
                        ],
                        [
                            "eid857",
                            "left",
                            1250,
                            103,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '102px',
                            '77px'
                        ],
                        [
                            "eid941",
                            "scaleX",
                            500,
                            500,
                            "easeOutElastic",
                            "${Pem35_Arbol}",
                            '0.5',
                            '1'
                        ]
                    ]
                }
            },
            "simArbolFrutal_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            rect: ['-25px', '-40px', '87px', '105px', 'auto', 'auto'],
                            id: 'Pem35_Buo',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem35_Buo.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle6',
                            opacity: '1',
                            rect: ['-89px', '35px', '231px', '34px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            transform: [[], [], [], ['0']],
                            fill: ['rgba(46,46,46,1.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [], ['0.41755', '0.5542']],
                                rect: ['-15px', '-8px', '42px', '44px', 'auto', 'auto'],
                                id: 'Rectangle7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(46,46,46,1)']
                            },
                            {
                                type: 'rect',
                                id: 'Rectangle8',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['226px', '0px', '5px', '34px', 'auto', 'auto'],
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'left',
                                id: 'Text2',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 20px; color: rgb(255, 255, 255); font-family: Arial, Helvetica, sans-serif;\">¡Un Búho!</span></p>',
                                rect: ['70px', '1px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '51px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 1353,
                    autoPlay: false,
                    labels: {
                        "hide": 1200,
                        "tooltip": 1250
                    },
                    data: [
                        [
                            "eid945",
                            "opacity",
                            500,
                            500,
                            "easeOutElastic",
                            "${Pem35_Buo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid851",
                            "opacity",
                            1250,
                            0,
                            "linear",
                            "${Rectangle6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid858",
                            "opacity",
                            1269,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid859",
                            "scaleX",
                            1200,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid861",
                            "scaleX",
                            1250,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid860",
                            "left",
                            1200,
                            0,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '-89px',
                            '-89px'
                        ],
                        [
                            "eid857",
                            "left",
                            1250,
                            103,
                            "easeOutQuad",
                            "${Rectangle6}",
                            '102px',
                            '77px'
                        ],
                        [
                            "eid947",
                            "scaleX",
                            500,
                            500,
                            "easeOutElastic",
                            "${Pem35_Buo}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid949",
                            "scaleY",
                            500,
                            500,
                            "easeOutElastic",
                            "${Pem35_Buo}",
                            '0.5',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Pem35_edgeActions.js");
})("EDGE-4459864");
