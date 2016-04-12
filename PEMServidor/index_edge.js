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
            "cdn/jquery-2.1.4.min.js"
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
                            id: 'background',
                            type: 'rect',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(177,231,252,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'simSun',
                            symbolName: 'simSun',
                            type: 'rect',
                            rect: ['-266', '-250', '1500', '1400', 'auto', 'auto']
                        },
                        {
                            id: 'simCloud',
                            symbolName: 'simCloud',
                            type: 'rect',
                            rect: ['279', '4px', '183', '88', 'auto', 'auto']
                        },
                        {
                            id: 'simGuarda',
                            symbolName: 'simGuarda',
                            type: 'rect',
                            rect: ['-234', '303', '211', '194', 'auto', 'auto']
                        },
                        {
                            id: 'raimbow_1',
                            type: 'image',
                            rect: ['0px', '260px', '909px', '393px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"raimbow_1.png",'0px','0px']
                        },
                        {
                            id: 'raimbow_2',
                            type: 'image',
                            rect: ['0px', '170px', '925px', '382px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"raimbow_2.png",'0px','0px']
                        },
                        {
                            id: 'raimbow_3',
                            type: 'image',
                            rect: ['0px', '122px', '933px', '365px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"raimbow_3.png",'0px','0px']
                        },
                        {
                            id: 'raimbow_4',
                            type: 'image',
                            rect: ['0px', '217px', '925px', '401px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"raimbow_4.png",'0px','0px']
                        },
                        {
                            id: 'raimbow_5',
                            type: 'image',
                            rect: ['0px', '77px', '971px', '380px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"raimbow_5.png",'0px','0px']
                        },
                        {
                            id: 'raimbow_6',
                            type: 'image',
                            rect: ['0px', '82px', '973px', '426px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"raimbow_6.png",'0px','0px']
                        },
                        {
                            id: 'backMenu_1',
                            type: 'image',
                            rect: ['0px', '355px', '1024px', '413px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"backMenu_1.png",'0px','0px']
                        },
                        {
                            id: 'paloBandera',
                            type: 'image',
                            rect: ['55px', '237px', '29px', '495px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"paloBandera.png",'0px','0px']
                        },
                        {
                            id: 'banderaOndeando',
                            type: 'image',
                            rect: ['63px', '266px', '300px', '190px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"banderaOndeando.gif",'0px','0px']
                        },
                        {
                            id: 'firstRainbow',
                            type: 'rect',
                            rect: ['338px', '234px', '308px', '68px', 'auto', 'auto'],
                            clip: 'rect(-0.9846100807189941px 290.9762878417969px 72.7877197265625px 31.31747817993164px)',
                            cursor: 'pointer',
                            fill: ["rgba(255,0,0,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['20'],[],['1','0.59047']]
                        },
                        {
                            id: 'secondRainbow',
                            type: 'rect',
                            rect: ['344px', '186px', '308px', '68px', 'auto', 'auto'],
                            clip: 'rect(-6.9173736572265625px 290.9762878417969px 72.7877197265625px 42.68707275390625px)',
                            cursor: 'pointer',
                            fill: ["rgba(255,0,0,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['17'],[],['0.9026','0.59047']]
                        },
                        {
                            id: 'thirdRainbow',
                            type: 'rect',
                            rect: ['366px', '144px', '308px', '68px', 'auto', 'auto'],
                            clip: 'rect(-6.9173736572265625px 290.9762878417969px 72.7877197265625px 42.68707275390625px)',
                            cursor: 'pointer',
                            fill: ["rgba(255,0,0,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['17'],[],['0.93905','0.59047']]
                        },
                        {
                            id: 'fourRainbow',
                            type: 'rect',
                            rect: ['382px', '97px', '308px', '68px', 'auto', 'auto'],
                            clip: 'rect(-6.9173736572265625px 290.9762878417969px 72.7877197265625px 42.68707275390625px)',
                            cursor: 'pointer',
                            fill: ["rgba(255,0,0,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['17'],[],['0.93905','0.59047']]
                        },
                        {
                            id: 'backFirst',
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
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid195",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${backFirst}",
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
                            id: 'cloud_menu_1',
                            rect: ['770px', '23px', '158px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cloud_menu_1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cloud_menu_2',
                            rect: ['1573px', '39px', '158px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cloud_menu_1.png', '0px', '0px']
                        },
                        {
                            rect: ['971px', '9px', '136px', '65px', 'auto', 'auto'],
                            id: 'cloud_menu_3',
                            opacity: '0.94244604316547',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cloud_menu_1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cloud_menu_4',
                            rect: ['1235px', '50px', '136px', '65px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cloud_menu_1.png', '0px', '0px']
                        },
                        {
                            rect: ['1397px', '11px', '136px', '65px', 'auto', 'auto'],
                            id: 'cloud_menu_5',
                            opacity: '0.94244604316547',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cloud_menu_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '183px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 117500,
                    autoPlay: false,
                    data: [
                        [
                            "eid2",
                            "left",
                            5000,
                            75000,
                            "linear",
                            "${cloud_menu_3}",
                            '971px',
                            '-448px'
                        ],
                        [
                            "eid10",
                            "left",
                            87500,
                            0,
                            "linear",
                            "${cloud_menu_3}",
                            '-448px',
                            '783px'
                        ],
                        [
                            "eid7",
                            "left",
                            0,
                            107500,
                            "linear",
                            "${cloud_menu_5}",
                            '1397px',
                            '-453px'
                        ],
                        [
                            "eid4",
                            "left",
                            0,
                            96130,
                            "linear",
                            "${cloud_menu_4}",
                            '1235px',
                            '-434px'
                        ],
                        [
                            "eid8",
                            "left",
                            0,
                            117500,
                            "linear",
                            "${cloud_menu_2}",
                            '1573px',
                            '-445px'
                        ],
                        [
                            "eid3",
                            "top",
                            5000,
                            75000,
                            "linear",
                            "${cloud_menu_3}",
                            '9px',
                            '11px'
                        ],
                        [
                            "eid1",
                            "left",
                            0,
                            70000,
                            "linear",
                            "${cloud_menu_1}",
                            '770px',
                            '-466px'
                        ],
                        [
                            "eid9",
                            "left",
                            87500,
                            0,
                            "linear",
                            "${cloud_menu_1}",
                            '-466px',
                            '765px'
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
                            rect: ['8px', '-20px', '1500px', '1400px', 'auto', 'auto'],
                            id: 'solnaciente',
                            transform: [[], ['195'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/solnaciente.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1500px', '1400px']
                        }
                    }
                },
                timeline: {
                    duration: 60000,
                    autoPlay: false,
                    data: [
                        [
                            "eid14",
                            "top",
                            0,
                            0,
                            "linear",
                            "${solnaciente}",
                            '-20px',
                            '-20px'
                        ],
                        [
                            "eid12",
                            "rotateZ",
                            0,
                            60000,
                            "linear",
                            "${solnaciente}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "simGuarda": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '211px', '194px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['6', '-80px', '184', '159', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            transform: [[], [], [], ['0.6', '0.6']],
                            c: [
                            {
                                type: 'rect',
                                id: 'spritAlaDerecha_symbol_1',
                                symbolName: 'spritAlaDerecha_symbol_1',
                                rect: ['111px', '82px', '59px', '77px', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'spritAlaIzquierda_symbol_1',
                                symbolName: 'spritAlaIzquierda_symbol_1',
                                rect: ['126px', '0px', '41px', '73px', 'auto', 'auto']
                            },
                            {
                                type: 'image',
                                id: 'cuerpoGuarda',
                                rect: ['0px', '1px', '184px', '84px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/cuerpoGuarda.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['-118px', '-80px', '184', '159', 'auto', 'auto'],
                            id: 'GroupCopy',
                            type: 'group',
                            transform: [[], [], [], ['0.5', '0.5']],
                            c: [
                            {
                                type: 'rect',
                                id: 'spritAlaDerecha_symbol_1Copy',
                                symbolName: 'spritAlaDerecha_symbol_1',
                                rect: ['111px', '82px', '59px', '77px', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'spritAlaIzquierda_symbol_1Copy',
                                symbolName: 'spritAlaIzquierda_symbol_1',
                                rect: ['126px', '0px', '41px', '73px', 'auto', 'auto']
                            },
                            {
                                type: 'image',
                                id: 'cuerpoGuardaCopy',
                                rect: ['0px', '1px', '184px', '84px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/cuerpoGuarda.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['1410', '-176', '184', '158', 'auto', 'auto'],
                            id: 'Group2',
                            type: 'group',
                            transform: [[], [], [], ['0.6', '0.6']],
                            c: [
                            {
                                type: 'image',
                                id: 'cuerpoGuarda2',
                                rect: ['0px', '1px', '184px', '84px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/cuerpoGuarda2.png', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'spritAlaDerecha_symbol_12',
                                symbolName: 'spritAlaDerecha_symbol_1',
                                rect: ['6px', '81px', '59px', '77px', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'spritAlaIzquierda_symbol_12',
                                symbolName: 'spritAlaIzquierda_symbol_1',
                                rect: ['26px', '0px', '41px', '73px', 'auto', 'auto']
                            }]
                        },
                        {
                            rect: ['1410', '-176', '184', '158', 'auto', 'auto'],
                            id: 'Group2Copy',
                            type: 'group',
                            transform: [[], [], [], ['0.55', '0.55']],
                            c: [
                            {
                                type: 'image',
                                id: 'cuerpoGuarda2Copy',
                                rect: ['0px', '1px', '184px', '84px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/cuerpoGuarda2.png', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'spritAlaDerecha_symbol_12Copy',
                                symbolName: 'spritAlaDerecha_symbol_1',
                                rect: ['6px', '81px', '59px', '77px', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'spritAlaIzquierda_symbol_12Copy',
                                symbolName: 'spritAlaIzquierda_symbol_1',
                                rect: ['26px', '0px', '41px', '73px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '211px', '194px']
                        }
                    }
                },
                timeline: {
                    duration: 135000,
                    autoPlay: false,
                    data: [
                        [
                            "eid192",
                            "scaleY",
                            1500,
                            0,
                            "linear",
                            "${Group2}",
                            '0.6',
                            '0.6'
                        ],
                        [
                            "eid179",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '-80px',
                            '-80px'
                        ],
                        [
                            "eid174",
                            "left",
                            0,
                            60000,
                            "linear",
                            "${Group}",
                            '6px',
                            '1290px'
                        ],
                        [
                            "eid175",
                            "left",
                            10000,
                            55000,
                            "linear",
                            "${GroupCopy}",
                            '-118px',
                            '1305px'
                        ],
                        [
                            "eid191",
                            "scaleX",
                            1500,
                            0,
                            "linear",
                            "${Group2}",
                            '0.6',
                            '0.6'
                        ],
                        [
                            "eid190",
                            "left",
                            72500,
                            52500,
                            "linear",
                            "${Group2Copy}",
                            '1410px',
                            '37px'
                        ],
                        [
                            "eid189",
                            "left",
                            65000,
                            55000,
                            "linear",
                            "${Group2}",
                            '1410px',
                            '14px'
                        ],
                        [
                            "eid178",
                            "top",
                            0,
                            0,
                            "linear",
                            "${GroupCopy}",
                            '-80px',
                            '-80px'
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
                            type: 'image',
                            id: 'spritAlaDerecha',
                            rect: ['0px', '0px', '512px', '512px', 'auto', 'auto'],
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
                            "eid15",
                            "height",
                            0,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '0px',
                            '29px'
                        ],
                        [
                            "eid18",
                            "height",
                            41,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '29px',
                            '33px'
                        ],
                        [
                            "eid20",
                            "height",
                            83,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '33px',
                            '36px'
                        ],
                        [
                            "eid22",
                            "height",
                            125,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '36px',
                            '40px'
                        ],
                        [
                            "eid24",
                            "height",
                            166,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '40px',
                            '43px'
                        ],
                        [
                            "eid26",
                            "height",
                            208,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '43px',
                            '47px'
                        ],
                        [
                            "eid28",
                            "height",
                            250,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '47px',
                            '50px'
                        ],
                        [
                            "eid30",
                            "height",
                            291,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '50px',
                            '53px'
                        ],
                        [
                            "eid32",
                            "height",
                            333,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '53px',
                            '57px'
                        ],
                        [
                            "eid34",
                            "height",
                            375,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '57px',
                            '60px'
                        ],
                        [
                            "eid36",
                            "height",
                            416,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '60px',
                            '64px'
                        ],
                        [
                            "eid38",
                            "height",
                            458,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '64px',
                            '67px'
                        ],
                        [
                            "eid40",
                            "height",
                            500,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '67px',
                            '70px'
                        ],
                        [
                            "eid42",
                            "height",
                            541,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '70px',
                            '74px'
                        ],
                        [
                            "eid44",
                            "height",
                            583,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '74px',
                            '77px'
                        ],
                        [
                            "eid46",
                            "height",
                            625,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '77px',
                            '74px'
                        ],
                        [
                            "eid48",
                            "height",
                            666,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '74px',
                            '71px'
                        ],
                        [
                            "eid50",
                            "height",
                            708,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '71px',
                            '68px'
                        ],
                        [
                            "eid52",
                            "height",
                            750,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '68px',
                            '65px'
                        ],
                        [
                            "eid54",
                            "height",
                            791,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '65px',
                            '61px'
                        ],
                        [
                            "eid56",
                            "height",
                            833,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '61px',
                            '58px'
                        ],
                        [
                            "eid58",
                            "height",
                            875,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '58px',
                            '55px'
                        ],
                        [
                            "eid60",
                            "height",
                            916,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '55px',
                            '52px'
                        ],
                        [
                            "eid62",
                            "height",
                            958,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '52px',
                            '49px'
                        ],
                        [
                            "eid64",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '49px',
                            '45px'
                        ],
                        [
                            "eid66",
                            "height",
                            1041,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '45px',
                            '42px'
                        ],
                        [
                            "eid68",
                            "height",
                            1083,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '42px',
                            '39px'
                        ],
                        [
                            "eid70",
                            "height",
                            1125,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '39px',
                            '36px'
                        ],
                        [
                            "eid72",
                            "height",
                            1166,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '36px',
                            '33px'
                        ],
                        [
                            "eid74",
                            "height",
                            1208,
                            0,
                            "linear",
                            "${spritAlaDerecha}",
                            '33px',
                            '29px'
                        ],
                        [
                            "eid17",
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
                            "eid19",
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
                            "eid21",
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
                            "eid23",
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
                            "eid25",
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
                            "eid27",
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
                            "eid29",
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
                            "eid31",
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
                            "eid33",
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
                            "eid35",
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
                            "eid37",
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
                            "eid39",
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
                            "eid41",
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
                            "eid43",
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
                            "eid45",
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
                            "eid47",
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
                            "eid49",
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
                            "eid51",
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
                            "eid53",
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
                            "eid55",
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
                            "eid57",
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
                            "eid59",
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
                            "eid61",
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
                            "eid63",
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
                            "eid65",
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
                            "eid67",
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
                            "eid69",
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
                            "eid71",
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
                            "eid73",
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
                            "eid75",
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
                            "eid16",
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
                            type: 'image',
                            id: 'spritAlaIzquierda',
                            rect: ['0px', '0px', '256px', '512px', 'auto', 'auto'],
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
                            "eid78",
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
                            "eid81",
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
                            "eid84",
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
                            "eid87",
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
                            "eid90",
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
                            "eid93",
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
                            "eid96",
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
                            "eid99",
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
                            "eid102",
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
                            "eid105",
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
                            "eid108",
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
                            "eid111",
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
                            "eid114",
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
                            "eid117",
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
                            "eid120",
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
                            "eid123",
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
                            "eid126",
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
                            "eid129",
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
                            "eid132",
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
                            "eid135",
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
                            "eid138",
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
                            "eid141",
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
                            "eid144",
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
                            "eid147",
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
                            "eid150",
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
                            "eid153",
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
                            "eid156",
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
                            "eid159",
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
                            "eid162",
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
                            "eid165",
                            "background-position",
                            1208,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            [-164,-223],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid77",
                            "width",
                            0,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '0px',
                            '41px'
                        ],
                        [
                            "eid79",
                            "top",
                            41,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid82",
                            "top",
                            83,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '3px',
                            '6px'
                        ],
                        [
                            "eid85",
                            "top",
                            125,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '6px',
                            '9px'
                        ],
                        [
                            "eid88",
                            "top",
                            166,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '9px',
                            '12px'
                        ],
                        [
                            "eid91",
                            "top",
                            208,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '12px',
                            '15px'
                        ],
                        [
                            "eid94",
                            "top",
                            250,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '15px',
                            '18px'
                        ],
                        [
                            "eid97",
                            "top",
                            291,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '18px',
                            '21px'
                        ],
                        [
                            "eid100",
                            "top",
                            333,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '21px',
                            '24px'
                        ],
                        [
                            "eid103",
                            "top",
                            375,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '24px',
                            '27px'
                        ],
                        [
                            "eid106",
                            "top",
                            416,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '27px',
                            '30px'
                        ],
                        [
                            "eid109",
                            "top",
                            458,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '30px',
                            '33px'
                        ],
                        [
                            "eid112",
                            "top",
                            500,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '33px',
                            '36px'
                        ],
                        [
                            "eid115",
                            "top",
                            541,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '36px',
                            '38px'
                        ],
                        [
                            "eid118",
                            "top",
                            583,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '38px',
                            '41px'
                        ],
                        [
                            "eid121",
                            "top",
                            625,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '41px',
                            '38px'
                        ],
                        [
                            "eid124",
                            "top",
                            666,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '38px',
                            '36px'
                        ],
                        [
                            "eid127",
                            "top",
                            708,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '36px',
                            '34px'
                        ],
                        [
                            "eid130",
                            "top",
                            750,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '34px',
                            '31px'
                        ],
                        [
                            "eid133",
                            "top",
                            791,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '31px',
                            '28px'
                        ],
                        [
                            "eid136",
                            "top",
                            833,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '28px',
                            '25px'
                        ],
                        [
                            "eid139",
                            "top",
                            875,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '25px',
                            '23px'
                        ],
                        [
                            "eid142",
                            "top",
                            916,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '23px',
                            '20px'
                        ],
                        [
                            "eid145",
                            "top",
                            958,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '20px',
                            '17px'
                        ],
                        [
                            "eid148",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '17px',
                            '14px'
                        ],
                        [
                            "eid151",
                            "top",
                            1041,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '14px',
                            '11px'
                        ],
                        [
                            "eid154",
                            "top",
                            1083,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '11px',
                            '9px'
                        ],
                        [
                            "eid157",
                            "top",
                            1125,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '9px',
                            '6px'
                        ],
                        [
                            "eid160",
                            "top",
                            1166,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '6px',
                            '3px'
                        ],
                        [
                            "eid163",
                            "top",
                            1208,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid76",
                            "height",
                            0,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '0px',
                            '73px'
                        ],
                        [
                            "eid80",
                            "height",
                            41,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '73px',
                            '70px'
                        ],
                        [
                            "eid83",
                            "height",
                            83,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '70px',
                            '67px'
                        ],
                        [
                            "eid86",
                            "height",
                            125,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '67px',
                            '64px'
                        ],
                        [
                            "eid89",
                            "height",
                            166,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '64px',
                            '61px'
                        ],
                        [
                            "eid92",
                            "height",
                            208,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '61px',
                            '58px'
                        ],
                        [
                            "eid95",
                            "height",
                            250,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '58px',
                            '55px'
                        ],
                        [
                            "eid98",
                            "height",
                            291,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '55px',
                            '52px'
                        ],
                        [
                            "eid101",
                            "height",
                            333,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '52px',
                            '49px'
                        ],
                        [
                            "eid104",
                            "height",
                            375,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '49px',
                            '46px'
                        ],
                        [
                            "eid107",
                            "height",
                            416,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '46px',
                            '43px'
                        ],
                        [
                            "eid110",
                            "height",
                            458,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '43px',
                            '40px'
                        ],
                        [
                            "eid113",
                            "height",
                            500,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '40px',
                            '37px'
                        ],
                        [
                            "eid116",
                            "height",
                            541,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '37px',
                            '35px'
                        ],
                        [
                            "eid119",
                            "height",
                            583,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '35px',
                            '32px'
                        ],
                        [
                            "eid122",
                            "height",
                            625,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '32px',
                            '35px'
                        ],
                        [
                            "eid125",
                            "height",
                            666,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '35px',
                            '37px'
                        ],
                        [
                            "eid128",
                            "height",
                            708,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '37px',
                            '39px'
                        ],
                        [
                            "eid131",
                            "height",
                            750,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '39px',
                            '42px'
                        ],
                        [
                            "eid134",
                            "height",
                            791,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '42px',
                            '45px'
                        ],
                        [
                            "eid137",
                            "height",
                            833,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '45px',
                            '48px'
                        ],
                        [
                            "eid140",
                            "height",
                            875,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '48px',
                            '50px'
                        ],
                        [
                            "eid143",
                            "height",
                            916,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '50px',
                            '53px'
                        ],
                        [
                            "eid146",
                            "height",
                            958,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '53px',
                            '56px'
                        ],
                        [
                            "eid149",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '56px',
                            '59px'
                        ],
                        [
                            "eid152",
                            "height",
                            1041,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '59px',
                            '62px'
                        ],
                        [
                            "eid155",
                            "height",
                            1083,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '62px',
                            '64px'
                        ],
                        [
                            "eid158",
                            "height",
                            1125,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '64px',
                            '67px'
                        ],
                        [
                            "eid161",
                            "height",
                            1166,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '67px',
                            '70px'
                        ],
                        [
                            "eid164",
                            "height",
                            1208,
                            0,
                            "linear",
                            "${spritAlaIzquierda}",
                            '70px',
                            '73px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-1026182543");
