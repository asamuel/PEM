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
            "../../cdn/bootstrap.min.css",
            "../../cdn/bootbox.min.js",
            "../../cdn/howler.min.js",
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
                            id: 'fondoAtras',
                            type: 'rect',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(37,37,37,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'cielo',
                            type: 'image',
                            rect: ['399px', '0px', '625px', '414px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"cielo.png",'0px','0px']
                        },
                        {
                            id: 'simLuna',
                            symbolName: 'simLuna',
                            type: 'rect',
                            rect: ['729', '41', '264', '234', 'auto', 'auto']
                        },
                        {
                            id: 'fondo',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fondo.png",'0px','0px']
                        },
                        {
                            id: 'simTabet',
                            symbolName: 'simTabet',
                            type: 'rect',
                            rect: ['5', '216', '1024', '552', 'auto', 'auto']
                        },
                        {
                            id: 'simIntrucciones',
                            symbolName: 'simIntrucciones',
                            type: 'rect',
                            rect: ['68px', '38px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'simMenu',
                            symbolName: 'simMenu',
                            type: 'rect',
                            rect: ['0px', '38px', 'undefined', 'undefined', 'auto', 'auto'],
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
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1107",
                            "top",
                            1000,
                            0,
                            "easeOutElastic",
                            "${simIntrucciones}",
                            '38px',
                            '38px'
                        ],
                        [
                            "eid1109",
                            "opacity",
                            0,
                            0,
                            "easeOutElastic",
                            "${simIntrucciones}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1110",
                            "opacity",
                            1000,
                            0,
                            "easeOutElastic",
                            "${simIntrucciones}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1108",
                            "left",
                            1000,
                            0,
                            "easeOutElastic",
                            "${simIntrucciones}",
                            '68px',
                            '68px'
                        ],
                        [
                            "eid1106",
                            "opacity",
                            0,
                            1000,
                            "easeOutElastic",
                            "${simMenu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${fondo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1111",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${simMenu}",
                            '38px',
                            '38px'
                        ],
                        [
                            "eid7",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cielo}",
                            '0',
                            '0'
                        ],
                        [
                            "eid6",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${cielo}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simTabet": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1031px', '87px', '229px', '366px', 'auto', 'auto'],
                            id: 'mujer',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mujer.png', '0px', '0px']
                        },
                        {
                            rect: ['1040px', '0px', '1024px', '552px', 'auto', 'auto'],
                            id: 'tablet',
                            transform: [[], ['90']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tablet.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'simBateria',
                            symbolName: 'simBateria',
                            opacity: '0',
                            rect: ['857', '493', '14', '23', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'simAntena',
                            symbolName: 'simAntena',
                            opacity: '1',
                            rect: ['1360px', '489px', '36', '28', 'auto', 'auto']
                        },
                        {
                            rect: ['1408px', '488px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            id: 'txt',
                            opacity: '1',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(0, 209, 209);\">00:00:00</span></p>',
                            type: 'text'
                        },
                        {
                            rect: ['1383px', '276px', '82px', '54px', 'auto', 'auto'],
                            id: 'infinite2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/infinite.gif', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.4', '0.4']],
                            rect: ['279px', '120px', '466px', '366px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'container',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)'],
                            c: [
                            {
                                rect: ['0px', '0px', '110px', '84px', 'auto', 'auto'],
                                id: 'inp1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,1.00)'],
                                c: [
                                {
                                    rect: ['38px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                    textStyle: ['', '', '', '', 'none'],
                                    font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                    id: 'Text1',
                                    text: '<p style=\"margin: 0px;\">​<font face=\"Arial, Helvetica, sans-serif\"><span style=\"font-size: 42px;\"><b>2</b></span></font></p>',
                                    align: 'left',
                                    type: 'text'
                                }]
                            },
                            {
                                rect: ['118px', '0px', '110px', '84px', 'auto', 'auto'],
                                id: 'inp2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,1.00)'],
                                c: [
                                {
                                    rect: ['43px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                    textStyle: ['', '', '', '', 'none'],
                                    font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                    id: 'Text2',
                                    text: '<p style=\"margin: 0px;\">​<font face=\"Arial, Helvetica, sans-serif\"><span style=\"font-size: 42px;\"><b>1</b></span></font></p>',
                                    align: 'left',
                                    type: 'text'
                                }]
                            },
                            {
                                rect: ['237px', '0px', '110px', '84px', 'auto', 'auto'],
                                id: 'inp3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,1.00)']
                            },
                            {
                                rect: ['355px', '0px', '110px', '84px', 'auto', 'auto'],
                                id: 'inp4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,1.00)']
                            },
                            {
                                rect: ['0px', '92px', '110px', '84px', 'auto', 'auto'],
                                id: 'inp5',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,1.00)']
                            },
                            {
                                rect: ['118px', '92px', '110px', '84px', 'auto', 'auto'],
                                id: 'inp6',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,1.00)'],
                                c: [
                                {
                                    rect: ['43px', '1px', 'auto', 'auto', 'auto', 'auto'],
                                    textStyle: ['', '', '', '', 'none'],
                                    font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                    id: 'Text3',
                                    text: '<p style=\"margin: 0px;\">​<font face=\"Arial, Helvetica, sans-serif\"><span style=\"font-size: 42px;\"><b>3</b></span></font></p>',
                                    align: 'left',
                                    type: 'text'
                                }]
                            },
                            {
                                rect: ['237px', '92px', '110px', '84px', 'auto', 'auto'],
                                id: 'inp7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,1.00)']
                            },
                            {
                                rect: ['355px', '92px', '110px', '84px', 'auto', 'auto'],
                                id: 'inp8',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,1.00)']
                            },
                            {
                                rect: ['0px', '184px', '110px', '84px', 'auto', 'auto'],
                                id: 'inp9',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,1.00)']
                            },
                            {
                                rect: ['118px', '184px', '110px', '84px', 'auto', 'auto'],
                                id: 'inp10',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,1.00)']
                            },
                            {
                                rect: ['237px', '184px', '110px', '84px', 'auto', 'auto'],
                                id: 'inp11',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,1.00)'],
                                c: [
                                {
                                    rect: ['37px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                    textStyle: ['', '', '', '', 'none'],
                                    font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                    id: 'Text4',
                                    text: '<p style=\"margin: 0px;\">​<font face=\"Arial, Helvetica, sans-serif\"><span style=\"font-size: 42px;\"><b>2</b></span></font></p>',
                                    align: 'left',
                                    type: 'text'
                                }]
                            },
                            {
                                rect: ['355px', '184px', '110px', '84px', 'auto', 'auto'],
                                id: 'inp12',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,1.00)']
                            },
                            {
                                rect: ['0px', '278px', '110px', '84px', 'auto', 'auto'],
                                id: 'inp13',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,1.00)']
                            },
                            {
                                rect: ['118px', '278px', '110px', '84px', 'auto', 'auto'],
                                id: 'inp14',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,1.00)']
                            },
                            {
                                rect: ['237px', '278px', '110px', '84px', 'auto', 'auto'],
                                id: 'inp15',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,1.00)'],
                                c: [
                                {
                                    rect: ['37px', '2px', 'auto', 'auto', 'auto', 'auto'],
                                    textStyle: ['', '', '', '', 'none'],
                                    font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                    id: 'Text5',
                                    text: '<p style=\"margin: 0px;\">​<font face=\"Arial, Helvetica, sans-serif\"><span style=\"font-size: 42px;\"><b>4</b></span></font></p>',
                                    align: 'left',
                                    type: 'text'
                                }]
                            },
                            {
                                rect: ['355px', '278px', '110px', '84px', 'auto', 'auto'],
                                id: 'inp16',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,1.00)'],
                                c: [
                                {
                                    rect: ['43px', '2px', 'auto', 'auto', 'auto', 'auto'],
                                    textStyle: ['', '', '', '', 'none'],
                                    font: ['Arial, Helvetica, sans-serif', [50, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                    id: 'Text6',
                                    text: '<p style=\"margin: 0px;\">​<font face=\"Arial, Helvetica, sans-serif\"><span style=\"font-size: 42px;\"><b>3</b></span></font></p>',
                                    align: 'left',
                                    type: 'text'
                                }]
                            }]
                        },
                        {
                            rect: ['761px', '276px', '110px', '84px', 'auto', 'auto'],
                            id: 'containerButton',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['1529px', '221px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'myReach',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 500; font-size: 32px;\">0</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['1555px', '221px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text7',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; font-size: 32px; font-weight: 500;\">/10</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['508px', '120px', '7px', '362px', 'auto', 'auto'],
                            id: 'ruler1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(42,42,42,1.00)']
                        },
                        {
                            rect: ['508px', '67px', '7px', '465px', 'auto', 'auto'],
                            transform: [[], ['90']],
                            id: 'ruler2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(42,42,42,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1024px', '552px']
                        }
                    }
                },
                timeline: {
                    duration: 3300,
                    autoPlay: false,
                    labels: {
                        "game": 2700
                    },
                    data: [
                        [
                            "eid68",
                            "top",
                            1500,
                            1000,
                            "easeOutQuint",
                            "${mujer}",
                            '87px',
                            '-221px'
                        ],
                        [
                            "eid39",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${infinite2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid40",
                            "opacity",
                            1500,
                            0,
                            "linear",
                            "${infinite2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1079",
                            "scaleX",
                            2800,
                            500,
                            "easeOutBounce",
                            "${container}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid1095",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text7}",
                            '1555px',
                            '1555px'
                        ],
                        [
                            "eid1098",
                            "left",
                            3300,
                            0,
                            "linear",
                            "${Text7}",
                            '1555px',
                            '811px'
                        ],
                        [
                            "eid35",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${simAntena}",
                            '0',
                            '0'
                        ],
                        [
                            "eid36",
                            "opacity",
                            1500,
                            0,
                            "linear",
                            "${simAntena}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1096",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text7}",
                            '221px',
                            '221px'
                        ],
                        [
                            "eid47",
                            "left",
                            0,
                            0,
                            "linear",
                            "${txt}",
                            '1408px',
                            '1408px'
                        ],
                        [
                            "eid43",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${txt}",
                            '1408px',
                            '706px'
                        ],
                        [
                            "eid46",
                            "top",
                            0,
                            0,
                            "linear",
                            "${simAntena}",
                            '489px',
                            '489px'
                        ],
                        [
                            "eid1081",
                            "scaleY",
                            2800,
                            500,
                            "easeOutBounce",
                            "${container}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid61",
                            "left",
                            0,
                            0,
                            "linear",
                            "${mujer}",
                            '1031px',
                            '1031px'
                        ],
                        [
                            "eid62",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${mujer}",
                            '1031px',
                            '391px'
                        ],
                        [
                            "eid1093",
                            "left",
                            0,
                            0,
                            "linear",
                            "${myReach}",
                            '1529px',
                            '1529px'
                        ],
                        [
                            "eid1097",
                            "left",
                            3300,
                            0,
                            "linear",
                            "${myReach}",
                            '1529px',
                            '775px'
                        ],
                        [
                            "eid12",
                            "rotateZ",
                            0,
                            1500,
                            "easeOutElastic",
                            "${tablet}",
                            '90deg',
                            '0deg'
                        ],
                        [
                            "eid10",
                            "left",
                            0,
                            1500,
                            "easeOutElastic",
                            "${tablet}",
                            '1040px',
                            '0px'
                        ],
                        [
                            "eid37",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${txt}",
                            '0',
                            '0'
                        ],
                        [
                            "eid38",
                            "opacity",
                            1500,
                            0,
                            "linear",
                            "${txt}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "top",
                            0,
                            0,
                            "linear",
                            "${txt}",
                            '488px',
                            '488px'
                        ],
                        [
                            "eid49",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${txt}",
                            '488px',
                            '489px'
                        ],
                        [
                            "eid1094",
                            "top",
                            0,
                            0,
                            "linear",
                            "${myReach}",
                            '221px',
                            '221px'
                        ],
                        [
                            "eid60",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${mujer}",
                            '0',
                            '0'
                        ],
                        [
                            "eid63",
                            "opacity",
                            1500,
                            0,
                            "linear",
                            "${mujer}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1083",
                            "top",
                            0,
                            0,
                            "easeOutBounce",
                            "${container}",
                            '120px',
                            '120px'
                        ],
                        [
                            "eid45",
                            "left",
                            0,
                            0,
                            "linear",
                            "${simAntena}",
                            '1360px',
                            '1360px'
                        ],
                        [
                            "eid44",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${simAntena}",
                            '1360px',
                            '658px'
                        ],
                        [
                            "eid22",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${simBateria}",
                            '0',
                            '0'
                        ],
                        [
                            "eid23",
                            "opacity",
                            1500,
                            0,
                            "linear",
                            "${simBateria}",
                            '0',
                            '1'
                        ],
                        [
                            "eid41",
                            "left",
                            0,
                            0,
                            "linear",
                            "${infinite2}",
                            '1383px',
                            '1383px'
                        ],
                        [
                            "eid42",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${infinite2}",
                            '1383px',
                            '471px'
                        ],
                        [
                            "eid1085",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${container}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1086",
                            "opacity",
                            2700,
                            0,
                            "easeOutBounce",
                            "${container}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1082",
                            "left",
                            0,
                            0,
                            "easeOutBounce",
                            "${container}",
                            '913px',
                            '913px'
                        ],
                        [
                            "eid1084",
                            "left",
                            2800,
                            0,
                            "easeOutBounce",
                            "${container}",
                            '913px',
                            '279px'
                        ]
                    ]
                }
            },
            "simBateria": {
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
                            rect: ['0px', '0px', '14px', '23px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['0px', '37px', '14px', '23px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(241,254,45,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '14px', '23px', 'auto', 'auto'],
                            id: 'bateria',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bateria.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '14px', '23px']
                        }
                    }
                },
                timeline: {
                    duration: 15000,
                    autoPlay: false,
                    data: [
                        [
                            "eid20",
                            "top",
                            0,
                            5000,
                            "linear",
                            "${Rectangle3}",
                            '37px',
                            '0px'
                        ],
                        [
                            "eid21",
                            "top",
                            10000,
                            5000,
                            "linear",
                            "${Rectangle3}",
                            '0px',
                            '37px'
                        ]
                    ]
                }
            },
            "simAntena": {
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
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '36px', '28px', 'auto', 'auto'],
                            fill: ['rgba(241,254,45,0.00)']
                        },
                        {
                            type: 'image',
                            id: 'ant_4',
                            rect: ['4px', '10px', '27px', '19px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.6', '0.6']],
                            fill: ['rgba(0,0,0,0)', 'images/ant_4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'ant_32',
                            opacity: '0',
                            rect: ['5px', '10px', '25px', '6px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ant_3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'ant_2',
                            opacity: '0',
                            rect: ['2px', '6px', '30px', '7px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ant_2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'ant_12',
                            opacity: '0',
                            rect: ['0px', '2px', '35px', '8px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ant_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '36px', '28px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: false,
                    data: [
                        [
                            "eid25",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${ant_32}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ant_2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid32",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${ant_2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${ant_12}",
                            '0',
                            '0'
                        ],
                        [
                            "eid34",
                            "opacity",
                            2250,
                            500,
                            "linear",
                            "${ant_12}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "simMoon": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '268px', '234px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(37,37,37,0.00)']
                        },
                        {
                            id: 'lunaSprite2_symbol_1',
                            symbolName: 'lunaSprite2_symbol_1',
                            rect: ['307px', '175px', '264px', '316px', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'estrella',
                            type: 'image',
                            rect: ['429px', '297px', '24px', '23px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/estrella.png', '0px', '0px']
                        },
                        {
                            rect: ['541px', '279px', '17px', '16px', 'auto', 'auto'],
                            id: 'estrella2',
                            opacity: '0.7841726618705',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/estrella.png', '0px', '0px']
                        },
                        {
                            rect: ['573px', '253px', '28px', '27px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.6', '0.6']],
                            id: 'estrella3',
                            opacity: '0.64028777707395',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/estrella.png', '0px', '0px']
                        },
                        {
                            rect: ['538px', '262px', '24px', '23px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.8', '0.8']],
                            id: 'estrella4',
                            opacity: '0.73381294964029',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/estrella.png', '0px', '0px']
                        },
                        {
                            rect: ['471px', '262px', '24px', '23px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.7', '0.7']],
                            id: 'estrella5',
                            opacity: '0.56115107913669',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/estrella.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '250px', '180px']
                        }
                    }
                },
                timeline: {
                    duration: 6625,
                    autoPlay: false,
                    data: [
                        [
                            "eid999",
                            "left",
                            0,
                            0,
                            "linear",
                            "${estrella3}",
                            '573px',
                            '573px'
                        ],
                        [
                            "eid1003",
                            "left",
                            100,
                            0,
                            "linear",
                            "${estrella3}",
                            '573px',
                            '222px'
                        ],
                        [
                            "eid994",
                            "left",
                            0,
                            0,
                            "linear",
                            "${lunaSprite2_symbol_1}",
                            '307px',
                            '307px'
                        ],
                        [
                            "eid959",
                            "left",
                            100,
                            600,
                            "linear",
                            "${lunaSprite2_symbol_1}",
                            '-77px',
                            '-75px'
                        ],
                        [
                            "eid975",
                            "top",
                            1000,
                            400,
                            "easeOutElastic",
                            "${estrella3}",
                            '253px',
                            '30px'
                        ],
                        [
                            "eid981",
                            "top",
                            1500,
                            500,
                            "easeOutQuart",
                            "${estrella5}",
                            '262px',
                            '6px'
                        ],
                        [
                            "eid997",
                            "left",
                            0,
                            0,
                            "linear",
                            "${estrella2}",
                            '541px',
                            '541px'
                        ],
                        [
                            "eid1002",
                            "left",
                            100,
                            0,
                            "linear",
                            "${estrella2}",
                            '541px',
                            '190px'
                        ],
                        [
                            "eid967",
                            "left",
                            900,
                            400,
                            "easeOutElastic",
                            "${estrella2}",
                            '157px',
                            '159px'
                        ],
                        [
                            "eid995",
                            "left",
                            0,
                            0,
                            "linear",
                            "${estrella}",
                            '429px',
                            '429px'
                        ],
                        [
                            "eid1004",
                            "left",
                            100,
                            0,
                            "linear",
                            "${estrella}",
                            '429px',
                            '78px'
                        ],
                        [
                            "eid963",
                            "left",
                            800,
                            400,
                            "easeOutElastic",
                            "${estrella}",
                            '45px',
                            '43px'
                        ],
                        [
                            "eid969",
                            "top",
                            900,
                            400,
                            "easeOutElastic",
                            "${estrella2}",
                            '279px',
                            '175px'
                        ],
                        [
                            "eid996",
                            "left",
                            0,
                            0,
                            "linear",
                            "${estrella5}",
                            '471px',
                            '471px'
                        ],
                        [
                            "eid1001",
                            "left",
                            100,
                            0,
                            "linear",
                            "${estrella5}",
                            '471px',
                            '120px'
                        ],
                        [
                            "eid979",
                            "top",
                            1400,
                            500,
                            "easeOutQuart",
                            "${estrella4}",
                            '262px',
                            '105px'
                        ],
                        [
                            "eid998",
                            "left",
                            0,
                            0,
                            "linear",
                            "${estrella4}",
                            '538px',
                            '538px'
                        ],
                        [
                            "eid1000",
                            "left",
                            100,
                            0,
                            "linear",
                            "${estrella4}",
                            '538px',
                            '187px'
                        ],
                        [
                            "eid977",
                            "left",
                            1400,
                            500,
                            "easeOutQuart",
                            "${estrella4}",
                            '154px',
                            '152px'
                        ],
                        [
                            "eid961",
                            "top",
                            100,
                            600,
                            "linear",
                            "${lunaSprite2_symbol_1}",
                            '175px',
                            '-114px'
                        ],
                        [
                            "eid965",
                            "top",
                            800,
                            400,
                            "easeOutElastic",
                            "${estrella}",
                            '297px',
                            '145px'
                        ]
                    ]
                }
            },
            "lunaSprite2_symbol_1": {
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
                            id: 'lunaSprite2',
                            rect: ['0px', '0px', '4096px', '4096px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lunaSprite2.png', '0px', '0px', '4096px', '4096px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '264px', '316px']
                        }
                    }
                },
                timeline: {
                    duration: 6625,
                    autoPlay: true,
                    data: [
                        [
                            "eid798",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [0,0],
                            [-12,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid799",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-12,-12],
                            [-288,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid800",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-288,-12],
                            [-564,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid801",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-564,-12],
                            [-840,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid802",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-840,-12],
                            [-1116,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid803",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1116,-12],
                            [-1392,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid804",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1392,-12],
                            [-1668,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid805",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1668,-12],
                            [-1944,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid806",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1944,-12],
                            [-2220,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid807",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2220,-12],
                            [-2496,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid808",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2496,-12],
                            [-2772,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid809",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2772,-12],
                            [-3048,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid810",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3048,-12],
                            [-3324,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid811",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3324,-12],
                            [-3600,-12],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid812",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3600,-12],
                            [-12,-340],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid813",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-12,-340],
                            [-288,-340],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid814",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-288,-340],
                            [-564,-340],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid815",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-564,-340],
                            [-840,-340],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid816",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-840,-340],
                            [-1116,-340],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid817",
                            "background-position",
                            791,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1116,-340],
                            [-1392,-340],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid818",
                            "background-position",
                            833,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1392,-340],
                            [-1668,-340],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid819",
                            "background-position",
                            875,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1668,-340],
                            [-1944,-340],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid820",
                            "background-position",
                            916,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1944,-340],
                            [-2220,-340],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid821",
                            "background-position",
                            958,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2220,-340],
                            [-2496,-340],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid822",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2496,-340],
                            [-2772,-340],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid823",
                            "background-position",
                            1041,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2772,-340],
                            [-3048,-340],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid824",
                            "background-position",
                            1083,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3048,-340],
                            [-3324,-340],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid825",
                            "background-position",
                            1125,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3324,-340],
                            [-3600,-340],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid826",
                            "background-position",
                            1166,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3600,-340],
                            [-12,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid827",
                            "background-position",
                            1208,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-12,-668],
                            [-288,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid828",
                            "background-position",
                            1250,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-288,-668],
                            [-564,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid829",
                            "background-position",
                            1291,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-564,-668],
                            [-840,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid830",
                            "background-position",
                            1333,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-840,-668],
                            [-1116,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid831",
                            "background-position",
                            1375,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1116,-668],
                            [-1392,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid832",
                            "background-position",
                            1416,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1392,-668],
                            [-1668,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid833",
                            "background-position",
                            1458,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1668,-668],
                            [-1944,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid834",
                            "background-position",
                            1500,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1944,-668],
                            [-2220,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid835",
                            "background-position",
                            1541,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2220,-668],
                            [-2496,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid836",
                            "background-position",
                            1583,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2496,-668],
                            [-2772,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid837",
                            "background-position",
                            1625,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2772,-668],
                            [-3048,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid838",
                            "background-position",
                            1666,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3048,-668],
                            [-3324,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid839",
                            "background-position",
                            1708,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3324,-668],
                            [-3600,-668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid840",
                            "background-position",
                            1750,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3600,-668],
                            [-12,-996],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid841",
                            "background-position",
                            1791,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-12,-996],
                            [-288,-996],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid842",
                            "background-position",
                            1833,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-288,-996],
                            [-564,-996],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid843",
                            "background-position",
                            1875,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-564,-996],
                            [-840,-996],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid844",
                            "background-position",
                            1916,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-840,-996],
                            [-1116,-996],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid845",
                            "background-position",
                            1958,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1116,-996],
                            [-1392,-996],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid846",
                            "background-position",
                            2000,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1392,-996],
                            [-1668,-996],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid847",
                            "background-position",
                            2041,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1668,-996],
                            [-1944,-996],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid848",
                            "background-position",
                            2083,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1944,-996],
                            [-2220,-996],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid849",
                            "background-position",
                            2125,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2220,-996],
                            [-2496,-996],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid850",
                            "background-position",
                            2166,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2496,-996],
                            [-2772,-996],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid851",
                            "background-position",
                            2208,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2772,-996],
                            [-3048,-996],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid852",
                            "background-position",
                            2250,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3048,-996],
                            [-3324,-996],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid853",
                            "background-position",
                            2291,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3324,-996],
                            [-3600,-996],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid854",
                            "background-position",
                            2333,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3600,-996],
                            [-12,-1324],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid855",
                            "background-position",
                            2375,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-12,-1324],
                            [-288,-1324],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid856",
                            "background-position",
                            2416,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-288,-1324],
                            [-564,-1324],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid857",
                            "background-position",
                            2458,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-564,-1324],
                            [-840,-1324],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid858",
                            "background-position",
                            2500,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-840,-1324],
                            [-1116,-1324],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid859",
                            "background-position",
                            2541,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1116,-1324],
                            [-1392,-1324],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid860",
                            "background-position",
                            2583,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1392,-1324],
                            [-1668,-1324],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid861",
                            "background-position",
                            2625,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1668,-1324],
                            [-1944,-1324],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid862",
                            "background-position",
                            2666,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1944,-1324],
                            [-2220,-1324],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid863",
                            "background-position",
                            2708,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2220,-1324],
                            [-2496,-1324],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid864",
                            "background-position",
                            2750,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2496,-1324],
                            [-2772,-1324],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid865",
                            "background-position",
                            2791,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2772,-1324],
                            [-3048,-1324],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid866",
                            "background-position",
                            2833,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3048,-1324],
                            [-3324,-1324],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid867",
                            "background-position",
                            2875,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3324,-1324],
                            [-3600,-1324],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid868",
                            "background-position",
                            2916,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3600,-1324],
                            [-12,-1652],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid869",
                            "background-position",
                            2958,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-12,-1652],
                            [-288,-1652],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid870",
                            "background-position",
                            3000,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-288,-1652],
                            [-564,-1652],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid871",
                            "background-position",
                            3041,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-564,-1652],
                            [-840,-1652],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid872",
                            "background-position",
                            3083,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-840,-1652],
                            [-1116,-1652],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid873",
                            "background-position",
                            3125,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1116,-1652],
                            [-1392,-1652],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid874",
                            "background-position",
                            3166,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1392,-1652],
                            [-1668,-1652],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid875",
                            "background-position",
                            3208,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1668,-1652],
                            [-1944,-1652],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid876",
                            "background-position",
                            3250,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1944,-1652],
                            [-2220,-1652],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid877",
                            "background-position",
                            3291,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2220,-1652],
                            [-2496,-1652],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid878",
                            "background-position",
                            3333,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2496,-1652],
                            [-2772,-1652],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid879",
                            "background-position",
                            3375,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2772,-1652],
                            [-3048,-1652],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid880",
                            "background-position",
                            3416,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3048,-1652],
                            [-3324,-1652],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid881",
                            "background-position",
                            3458,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3324,-1652],
                            [-3600,-1652],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid882",
                            "background-position",
                            3500,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3600,-1652],
                            [-12,-1980],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid883",
                            "background-position",
                            3541,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-12,-1980],
                            [-288,-1980],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid884",
                            "background-position",
                            3583,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-288,-1980],
                            [-564,-1980],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid885",
                            "background-position",
                            3625,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-564,-1980],
                            [-840,-1980],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid886",
                            "background-position",
                            3666,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-840,-1980],
                            [-1116,-1980],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid887",
                            "background-position",
                            3708,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1116,-1980],
                            [-1392,-1980],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid888",
                            "background-position",
                            3750,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1392,-1980],
                            [-1668,-1980],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid889",
                            "background-position",
                            3791,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1668,-1980],
                            [-1944,-1980],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid890",
                            "background-position",
                            3833,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1944,-1980],
                            [-2220,-1980],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid891",
                            "background-position",
                            3875,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2220,-1980],
                            [-2496,-1980],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid892",
                            "background-position",
                            3916,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2496,-1980],
                            [-2772,-1980],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid893",
                            "background-position",
                            3958,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2772,-1980],
                            [-3048,-1980],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid894",
                            "background-position",
                            4000,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3048,-1980],
                            [-3324,-1980],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid895",
                            "background-position",
                            4041,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3324,-1980],
                            [-3600,-1980],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid896",
                            "background-position",
                            4083,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3600,-1980],
                            [-12,-2308],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid897",
                            "background-position",
                            4125,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-12,-2308],
                            [-288,-2308],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid898",
                            "background-position",
                            4166,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-288,-2308],
                            [-564,-2308],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid899",
                            "background-position",
                            4208,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-564,-2308],
                            [-840,-2308],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid900",
                            "background-position",
                            4250,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-840,-2308],
                            [-1116,-2308],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid901",
                            "background-position",
                            4291,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1116,-2308],
                            [-1392,-2308],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid902",
                            "background-position",
                            4333,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1392,-2308],
                            [-1668,-2308],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid903",
                            "background-position",
                            4375,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1668,-2308],
                            [-1944,-2308],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid904",
                            "background-position",
                            4416,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1944,-2308],
                            [-2220,-2308],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid905",
                            "background-position",
                            4458,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2220,-2308],
                            [-2496,-2308],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid906",
                            "background-position",
                            4500,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2496,-2308],
                            [-2772,-2308],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid907",
                            "background-position",
                            4541,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2772,-2308],
                            [-3048,-2308],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid908",
                            "background-position",
                            4583,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3048,-2308],
                            [-3324,-2308],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid909",
                            "background-position",
                            4625,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3324,-2308],
                            [-3600,-2308],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid910",
                            "background-position",
                            4666,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3600,-2308],
                            [-12,-2636],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid911",
                            "background-position",
                            4708,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-12,-2636],
                            [-288,-2636],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid912",
                            "background-position",
                            4750,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-288,-2636],
                            [-564,-2636],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid913",
                            "background-position",
                            4791,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-564,-2636],
                            [-840,-2636],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid914",
                            "background-position",
                            4833,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-840,-2636],
                            [-1116,-2636],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid915",
                            "background-position",
                            4875,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1116,-2636],
                            [-1392,-2636],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid916",
                            "background-position",
                            4916,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1392,-2636],
                            [-1668,-2636],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid917",
                            "background-position",
                            4958,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1668,-2636],
                            [-1944,-2636],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid918",
                            "background-position",
                            5000,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1944,-2636],
                            [-2220,-2636],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid919",
                            "background-position",
                            5041,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2220,-2636],
                            [-2496,-2636],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid920",
                            "background-position",
                            5083,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2496,-2636],
                            [-2772,-2636],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid921",
                            "background-position",
                            5125,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2772,-2636],
                            [-3048,-2636],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid922",
                            "background-position",
                            5166,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3048,-2636],
                            [-3324,-2636],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid923",
                            "background-position",
                            5208,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3324,-2636],
                            [-3600,-2636],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid924",
                            "background-position",
                            5250,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3600,-2636],
                            [-12,-2964],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid925",
                            "background-position",
                            5291,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-12,-2964],
                            [-288,-2964],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid926",
                            "background-position",
                            5333,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-288,-2964],
                            [-564,-2964],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid927",
                            "background-position",
                            5375,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-564,-2964],
                            [-840,-2964],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid928",
                            "background-position",
                            5416,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-840,-2964],
                            [-1116,-2964],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid929",
                            "background-position",
                            5458,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1116,-2964],
                            [-1392,-2964],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid930",
                            "background-position",
                            5500,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1392,-2964],
                            [-1668,-2964],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid931",
                            "background-position",
                            5541,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1668,-2964],
                            [-1944,-2964],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid932",
                            "background-position",
                            5583,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1944,-2964],
                            [-2220,-2964],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid933",
                            "background-position",
                            5625,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2220,-2964],
                            [-2496,-2964],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid934",
                            "background-position",
                            5666,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2496,-2964],
                            [-2772,-2964],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid935",
                            "background-position",
                            5708,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2772,-2964],
                            [-3048,-2964],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid936",
                            "background-position",
                            5750,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3048,-2964],
                            [-3324,-2964],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid937",
                            "background-position",
                            5791,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3324,-2964],
                            [-3600,-2964],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid938",
                            "background-position",
                            5833,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3600,-2964],
                            [-12,-3292],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid939",
                            "background-position",
                            5875,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-12,-3292],
                            [-288,-3292],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid940",
                            "background-position",
                            5916,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-288,-3292],
                            [-564,-3292],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid941",
                            "background-position",
                            5958,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-564,-3292],
                            [-840,-3292],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid942",
                            "background-position",
                            6000,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-840,-3292],
                            [-1116,-3292],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid943",
                            "background-position",
                            6041,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1116,-3292],
                            [-1392,-3292],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid944",
                            "background-position",
                            6083,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1392,-3292],
                            [-1668,-3292],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid945",
                            "background-position",
                            6125,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1668,-3292],
                            [-1944,-3292],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid946",
                            "background-position",
                            6166,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1944,-3292],
                            [-2220,-3292],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid947",
                            "background-position",
                            6208,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2220,-3292],
                            [-2496,-3292],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid948",
                            "background-position",
                            6250,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2496,-3292],
                            [-2772,-3292],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid949",
                            "background-position",
                            6291,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-2772,-3292],
                            [-3048,-3292],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid950",
                            "background-position",
                            6333,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3048,-3292],
                            [-3324,-3292],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid951",
                            "background-position",
                            6375,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3324,-3292],
                            [-3600,-3292],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid952",
                            "background-position",
                            6416,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-3600,-3292],
                            [-12,-3620],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid953",
                            "background-position",
                            6458,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-12,-3620],
                            [-288,-3620],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid954",
                            "background-position",
                            6500,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-288,-3620],
                            [-564,-3620],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid955",
                            "background-position",
                            6541,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-564,-3620],
                            [-840,-3620],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid956",
                            "background-position",
                            6583,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-840,-3620],
                            [-1116,-3620],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid957",
                            "background-position",
                            6625,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            [-1116,-3620],
                            [-1392,-3620],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid796",
                            "height",
                            0,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            '0px',
                            '316px'
                        ],
                        [
                            "eid797",
                            "width",
                            0,
                            0,
                            "linear",
                            "${lunaSprite2}",
                            '0px',
                            '264px'
                        ]
                    ]
                }
            },
            "simLuna": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '264px', '234px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            rect: ['284px', '-82px', '264px', '316px', 'auto', 'auto'],
                            id: 'lunaSprite2_symbol_12',
                            symbolName: 'lunaSprite2_symbol_1',
                            opacity: '0',
                            type: 'rect'
                        },
                        {
                            rect: ['394px', '32px', '28px', '27px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'estrella2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/estrella.png', '0px', '0px']
                        },
                        {
                            rect: ['491px', '59px', '28px', '27px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.6', '0.6']],
                            id: 'estrella2Copy2',
                            opacity: '0.8489208817481995',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/estrella.png', '0px', '0px']
                        },
                        {
                            rect: ['433px', '147px', '28px', '27px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.4', '0.4']],
                            id: 'estrella2Copy',
                            opacity: '0.7410072088241577',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/estrella.png', '0px', '0px']
                        },
                        {
                            rect: ['467px', '14px', '28px', '27px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.4', '0.4']],
                            id: 'estrella2Copy6',
                            opacity: '0.7410072088241577',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/estrella.png', '0px', '0px']
                        },
                        {
                            rect: ['312px', '174px', '28px', '27px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.4', '0.4']],
                            id: 'estrella2Copy5',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/estrella.png', '0px', '0px']
                        },
                        {
                            rect: ['356px', '139px', '28px', '27px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            id: 'estrella2Copy4',
                            opacity: '0.8489208817481995',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/estrella.png', '0px', '0px']
                        },
                        {
                            rect: ['445px', '195px', '28px', '27px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'estrella2Copy3',
                            opacity: '0.7410072088241577',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/estrella.png', '0px', '0px']
                        },
                        {
                            rect: ['494px', '147px', '28px', '27px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.4', '0.4']],
                            id: 'estrella2Copy7',
                            opacity: '0.7410072088241577',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/estrella.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '264px', '234px']
                        }
                    }
                },
                timeline: {
                    duration: 6625,
                    autoPlay: false,
                    data: [
                        [
                            "eid1039",
                            "left",
                            0,
                            0,
                            "linear",
                            "${estrella2Copy}",
                            '433px',
                            '433px'
                        ],
                        [
                            "eid1047",
                            "left",
                            100,
                            0,
                            "linear",
                            "${estrella2Copy}",
                            '433px',
                            '134px'
                        ],
                        [
                            "eid1027",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${estrella2Copy6}",
                            '0.7410072088241577',
                            '0.7410072088241577'
                        ],
                        [
                            "eid1019",
                            "opacity",
                            100,
                            0,
                            "linear",
                            "${estrella2Copy6}",
                            '0.7410072088241577',
                            '0.7410072088241577'
                        ],
                        [
                            "eid1034",
                            "left",
                            0,
                            0,
                            "linear",
                            "${estrella2}",
                            '394px',
                            '394px'
                        ],
                        [
                            "eid1042",
                            "left",
                            100,
                            0,
                            "linear",
                            "${estrella2}",
                            '394px',
                            '95px'
                        ],
                        [
                            "eid1028",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${estrella2Copy5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1020",
                            "opacity",
                            100,
                            0,
                            "linear",
                            "${estrella2Copy5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1053",
                            "scaleY",
                            100,
                            200,
                            "linear",
                            "${estrella2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1031",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${estrella2Copy7}",
                            '0.7410072088241577',
                            '0.7410072088241577'
                        ],
                        [
                            "eid1023",
                            "opacity",
                            100,
                            0,
                            "linear",
                            "${estrella2Copy7}",
                            '0.7410072088241577',
                            '0.7410072088241577'
                        ],
                        [
                            "eid1033",
                            "left",
                            0,
                            0,
                            "linear",
                            "${estrella2Copy3}",
                            '445px',
                            '445px'
                        ],
                        [
                            "eid1041",
                            "left",
                            100,
                            0,
                            "linear",
                            "${estrella2Copy3}",
                            '445px',
                            '146px'
                        ],
                        [
                            "eid1013",
                            "scaleX",
                            100,
                            900,
                            "linear",
                            "${lunaSprite2_symbol_12}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1032",
                            "left",
                            0,
                            0,
                            "linear",
                            "${estrella2Copy6}",
                            '467px',
                            '467px'
                        ],
                        [
                            "eid1040",
                            "left",
                            100,
                            0,
                            "linear",
                            "${estrella2Copy6}",
                            '467px',
                            '168px'
                        ],
                        [
                            "eid1026",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${estrella2Copy}",
                            '0.7410072088241577',
                            '0.7410072088241577'
                        ],
                        [
                            "eid1018",
                            "opacity",
                            100,
                            0,
                            "linear",
                            "${estrella2Copy}",
                            '0.7410072088241577',
                            '0.7410072088241577'
                        ],
                        [
                            "eid1025",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${estrella2Copy2}",
                            '0.8489208817481995',
                            '0.8489208817481995'
                        ],
                        [
                            "eid1017",
                            "opacity",
                            100,
                            0,
                            "linear",
                            "${estrella2Copy2}",
                            '0.8489208817481995',
                            '0.8489208817481995'
                        ],
                        [
                            "eid1015",
                            "scaleY",
                            100,
                            900,
                            "linear",
                            "${lunaSprite2_symbol_12}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1029",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${estrella2Copy4}",
                            '0.8489208817481995',
                            '0.8489208817481995'
                        ],
                        [
                            "eid1021",
                            "opacity",
                            100,
                            0,
                            "linear",
                            "${estrella2Copy4}",
                            '0.8489208817481995',
                            '0.8489208817481995'
                        ],
                        [
                            "eid1055",
                            "scaleX",
                            100,
                            200,
                            "linear",
                            "${estrella2Copy3}",
                            '0.3',
                            '0.8'
                        ],
                        [
                            "eid1069",
                            "scaleY",
                            300,
                            200,
                            "easeOutBounce",
                            "${estrella2Copy7}",
                            '0.4',
                            '0.8'
                        ],
                        [
                            "eid1057",
                            "scaleY",
                            100,
                            200,
                            "linear",
                            "${estrella2Copy3}",
                            '0.3',
                            '0.8'
                        ],
                        [
                            "eid1071",
                            "scaleX",
                            300,
                            200,
                            "easeOutBounce",
                            "${estrella2Copy4}",
                            '0.2',
                            '0.6'
                        ],
                        [
                            "eid1051",
                            "scaleX",
                            100,
                            200,
                            "linear",
                            "${estrella2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1067",
                            "scaleX",
                            300,
                            200,
                            "easeOutBounce",
                            "${estrella2Copy7}",
                            '0.4',
                            '0.8'
                        ],
                        [
                            "eid1007",
                            "left",
                            0,
                            0,
                            "linear",
                            "${lunaSprite2_symbol_12}",
                            '284px',
                            '284px'
                        ],
                        [
                            "eid1009",
                            "left",
                            100,
                            0,
                            "linear",
                            "${lunaSprite2_symbol_12}",
                            '284px',
                            '-72px'
                        ],
                        [
                            "eid1037",
                            "left",
                            0,
                            0,
                            "linear",
                            "${estrella2Copy5}",
                            '312px',
                            '312px'
                        ],
                        [
                            "eid1045",
                            "left",
                            100,
                            0,
                            "linear",
                            "${estrella2Copy5}",
                            '312px',
                            '13px'
                        ],
                        [
                            "eid1073",
                            "scaleY",
                            300,
                            200,
                            "easeOutBounce",
                            "${estrella2Copy4}",
                            '0.2',
                            '0.6'
                        ],
                        [
                            "eid1030",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${estrella2Copy3}",
                            '0.7410072088241577',
                            '0.7410072088241577'
                        ],
                        [
                            "eid1022",
                            "opacity",
                            100,
                            0,
                            "linear",
                            "${estrella2Copy3}",
                            '0.7410072088241577',
                            '0.7410072088241577'
                        ],
                        [
                            "eid1063",
                            "scaleX",
                            200,
                            200,
                            "linear",
                            "${estrella2Copy}",
                            '0.4',
                            '0.8'
                        ],
                        [
                            "eid1061",
                            "scaleY",
                            200,
                            200,
                            "linear",
                            "${estrella2Copy5}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid1059",
                            "scaleX",
                            200,
                            200,
                            "linear",
                            "${estrella2Copy5}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid1036",
                            "left",
                            0,
                            0,
                            "linear",
                            "${estrella2Copy2}",
                            '491px',
                            '491px'
                        ],
                        [
                            "eid1044",
                            "left",
                            100,
                            0,
                            "linear",
                            "${estrella2Copy2}",
                            '491px',
                            '192px'
                        ],
                        [
                            "eid1008",
                            "top",
                            0,
                            0,
                            "linear",
                            "${lunaSprite2_symbol_12}",
                            '-82px',
                            '-82px'
                        ],
                        [
                            "eid1077",
                            "scaleY",
                            400,
                            200,
                            "easeOutBounce",
                            "${estrella2Copy6}",
                            '0.4',
                            '0.8'
                        ],
                        [
                            "eid1075",
                            "scaleX",
                            400,
                            200,
                            "easeOutBounce",
                            "${estrella2Copy6}",
                            '0.4',
                            '0.8'
                        ],
                        [
                            "eid1011",
                            "opacity",
                            100,
                            900,
                            "linear",
                            "${lunaSprite2_symbol_12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1035",
                            "left",
                            0,
                            0,
                            "linear",
                            "${estrella2Copy7}",
                            '494px',
                            '494px'
                        ],
                        [
                            "eid1043",
                            "left",
                            100,
                            0,
                            "linear",
                            "${estrella2Copy7}",
                            '494px',
                            '195px'
                        ],
                        [
                            "eid1048",
                            "opacity",
                            0,
                            100,
                            "linear",
                            "${estrella2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1049",
                            "opacity",
                            100,
                            200,
                            "linear",
                            "${estrella2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1038",
                            "left",
                            0,
                            0,
                            "linear",
                            "${estrella2Copy4}",
                            '356px',
                            '356px'
                        ],
                        [
                            "eid1046",
                            "left",
                            100,
                            0,
                            "linear",
                            "${estrella2Copy4}",
                            '356px',
                            '57px'
                        ],
                        [
                            "eid1065",
                            "scaleY",
                            200,
                            200,
                            "linear",
                            "${estrella2Copy}",
                            '0.4',
                            '0.8'
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
                            rect: ['-764px', '54px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255);\">Poné a prueba tus habilidades, juega el siguiente sudoku.&nbsp;</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\"></span></p>',
                            opacity: '1',
                            align: 'left'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(240, 240, 240); font-weight: 500;\">Recuerda que en cada línea, en cada columna y en </span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(240, 240, 240); font-weight: 500;\">cada cuadrado solo deben de estar números del 1 al 4 </span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(240, 240, 240); font-weight: 500;\">y solamente una vez.</span><span style=\"font-weight: 500;\">&nbsp;</span></p>',
                            rect: ['-832px', '26px', 'auto', 'auto', 'auto', 'auto']
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
                    autoPlay: false,
                    labels: {
                        "second": 2700,
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
                            850,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "top",
                            850,
                            1150,
                            "easeOutElastic",
                            "${Text2}",
                            '54px',
                            '51px'
                        ],
                        [
                            "eid1100",
                            "top",
                            2700,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '51px',
                            '54px'
                        ],
                        [
                            "eid24",
                            "width",
                            100,
                            500,
                            "easeInQuad",
                            "${Rectangle}",
                            '13px',
                            '686px'
                        ],
                        [
                            "eid35",
                            "left",
                            850,
                            1150,
                            "easeOutElastic",
                            "${Text2}",
                            '-764px',
                            '30px'
                        ],
                        [
                            "eid1099",
                            "left",
                            2700,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '30px',
                            '-1348px'
                        ],
                        [
                            "eid1102",
                            "left",
                            2700,
                            900,
                            "easeOutElastic",
                            "${Text}",
                            '-832px',
                            '50px'
                        ],
                        [
                            "eid26",
                            "width",
                            100,
                            500,
                            "easeInQuad",
                            "${Rectangle2}",
                            '13px',
                            '686px'
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Pem193_edgeActions.js");
})("EDGE-646464134");
