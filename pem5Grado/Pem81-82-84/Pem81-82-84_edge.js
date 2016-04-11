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
            js+"myCss.css",
            "../../cdn/bootbox.min.js",
            "../../cdn/howler.min.js",
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
                            id: 'back',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"back.png",'0px','0px']
                        },
                        {
                            id: 'simSelect',
                            symbolName: 'simSelect',
                            type: 'rect',
                            rect: ['0', '63', '1024', '270', 'auto', 'auto']
                        },
                        {
                            id: 'simQuestion',
                            symbolName: 'simQuestion',
                            type: 'rect',
                            rect: ['578', '600', '47', '65', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'simTruck',
                            symbolName: 'simTruck',
                            type: 'rect',
                            rect: ['-548', '314', '548', '454', 'auto', 'auto']
                        },
                        {
                            id: 'simContainerObj',
                            symbolName: 'simContainerObj',
                            type: 'rect',
                            rect: ['188', '303', '836', '307', 'auto', 'auto']
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
                            id: 'divExpre',
                            type: 'rect',
                            rect: ['329px', '721px', '306px', '33px', 'auto', 'auto'],
                            fill: ["rgba(102,204,0,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'simJoke',
                            symbolName: 'simJoke',
                            type: 'rect',
                            rect: ['798', '303', '188', '166', 'auto', 'auto']
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['965px', '723px', '26px', '26px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(93,93,93,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseG',
                            type: 'ellipse',
                            rect: ['965px', '723px', '26px', '26px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(224,52,5,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "myShineG"
                        },
                        {
                            id: 'EllipseB',
                            type: 'ellipse',
                            rect: ['965px', '723px', '26px', '26px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(102,204,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "myShineB"
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
                    duration: 13750,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "simSelect": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['272', '86', '679', '38', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '2px', '13px', '38px', 'auto', 'auto'],
                                id: 'r1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(45,45,45,1.00)']
                            },
                            {
                                rect: ['167px', '2px', '13px', '35px', 'auto', 'auto'],
                                id: 'r2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(45,45,45,1.00)']
                            },
                            {
                                rect: ['331px', '3px', '13px', '35px', 'auto', 'auto'],
                                id: 'r3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(45,45,45,1.00)']
                            },
                            {
                                rect: ['498px', '2px', '13px', '35px', 'auto', 'auto'],
                                id: 'r4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(45,45,45,1.00)']
                            },
                            {
                                rect: ['666px', '2px', '13px', '35px', 'auto', 'auto'],
                                id: 'r5',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(45,45,45,1.00)']
                            }]
                        },
                        {
                            rect: ['231px', '122px', '94px', '94px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'div1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(45,45,45,0.00)'],
                            c: [
                            {
                                id: 'circle1',
                                type: 'image',
                                rect: ['1px', '0px', '94px', '94px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/circle1.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['400px', '122px', '94px', '94px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'div2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(142,142,142,0.00)'],
                            c: [
                            {
                                id: 'circle2',
                                type: 'image',
                                rect: ['0px', '0px', '94px', '94px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/circle2.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['563px', '122px', '94px', '94px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'div3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(142,142,142,0.00)'],
                            c: [
                            {
                                id: 'circle3',
                                type: 'image',
                                rect: ['0px', '0px', '94px', '94px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/circle3.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['729px', '122px', '94px', '94px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'div4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(142,142,142,0.00)'],
                            c: [
                            {
                                id: 'circle4',
                                type: 'image',
                                rect: ['0px', '0px', '94px', '94px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/circle4.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['898px', '122px', '94px', '94px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'div5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(142,142,142,0.00)'],
                            c: [
                            {
                                id: 'circle5',
                                type: 'image',
                                rect: ['0px', '0px', '94px', '94px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/circle5.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['231px', '122px', '94px', '94px', 'auto', 'auto'],
                            id: 'divtext1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(45,45,45,0)']
                        },
                        {
                            rect: ['400px', '122px', '94px', '94px', 'auto', 'auto'],
                            id: 'divtext2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(45,45,45,0)']
                        },
                        {
                            rect: ['563px', '122px', '94px', '94px', 'auto', 'auto'],
                            id: 'divtext3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(45,45,45,0)']
                        },
                        {
                            rect: ['729px', '122px', '94px', '94px', 'auto', 'auto'],
                            id: 'divtext4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(45,45,45,0)']
                        },
                        {
                            rect: ['898px', '122px', '94px', '94px', 'auto', 'auto'],
                            id: 'divtext5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(45,45,45,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1024px', '270px']
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
            "simTruck": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'truck',
                            type: 'image',
                            rect: ['188px', '0px', '548px', '454px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/truck.png', '0px', '0px']
                        },
                        {
                            rect: ['559px', '346px', '109px', '109px', 'auto', 'auto'],
                            id: 'wheel',
                            transform: [[], ['180']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wheel.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '548px', '454px']
                        }
                    }
                },
                timeline: {
                    duration: 4250,
                    autoPlay: false,
                    data: [
                        [
                            "eid13",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${truck}",
                            '0px',
                            '188px'
                        ],
                        [
                            "eid20",
                            "rotateZ",
                            0,
                            4000,
                            "linear",
                            "${wheel}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid15",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${wheel}",
                            '371px',
                            '559px'
                        ],
                        [
                            "eid14",
                            "top",
                            0,
                            4000,
                            "linear",
                            "${truck}",
                            '0px',
                            '-1px'
                        ],
                        [
                            "eid16",
                            "top",
                            0,
                            4000,
                            "linear",
                            "${wheel}",
                            '346px',
                            '345px'
                        ]
                    ]
                }
            },
            "simContainerObj": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '836px', '307px']
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
            "simCua1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'cua1',
                            type: 'image',
                            rect: ['540px', '13px', '210px', '193px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cua1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '193px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    labels: {
                        "end": 6000
                    },
                    data: [
                        [
                            "eid24",
                            "left",
                            0,
                            5000,
                            "easeOutQuad",
                            "${cua1}",
                            '-525px',
                            '0px'
                        ],
                        [
                            "eid25",
                            "left",
                            6000,
                            2000,
                            "easeInBack",
                            "${cua1}",
                            '0px',
                            '540px'
                        ]
                    ]
                }
            },
            "simCua2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'cua2',
                            type: 'image',
                            rect: ['-35px', '13px', '263px', '193px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cua2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '193px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    labels: {
                        "end": 6000
                    },
                    data: [
                        [
                            "eid35",
                            "left",
                            0,
                            5000,
                            "easeOutQuad",
                            "${cua2}",
                            '-587px',
                            '-35px'
                        ],
                        [
                            "eid36",
                            "left",
                            6000,
                            2000,
                            "easeInBack",
                            "${cua2}",
                            '-35px',
                            '549px'
                        ]
                    ]
                }
            },
            "simRec1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'rec1',
                            type: 'image',
                            rect: ['-851px', '44px', '539px', '162px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rec1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '193px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    labels: {
                        "end": 6000
                    },
                    data: [
                        [
                            "eid37",
                            "left",
                            0,
                            5000,
                            "easeOutQuad",
                            "${rec1}",
                            '-851px',
                            '-164px'
                        ],
                        [
                            "eid38",
                            "left",
                            6000,
                            2000,
                            "easeInBack",
                            "${rec1}",
                            '-164px',
                            '549px'
                        ]
                    ]
                }
            },
            "simTrian1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'trian1',
                            type: 'image',
                            rect: ['-537px', '-58px', '213px', '264px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/trian1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '193px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    labels: {
                        "end": 6000
                    },
                    data: [
                        [
                            "eid40",
                            "left",
                            0,
                            5000,
                            "easeOutQuad",
                            "${trian1}",
                            '-537px',
                            '-1px'
                        ],
                        [
                            "eid41",
                            "left",
                            6000,
                            2000,
                            "easeInBack",
                            "${trian1}",
                            '-1px',
                            '558px'
                        ]
                    ]
                }
            },
            "simRec2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'rec2',
                            type: 'image',
                            rect: ['-998px', '24px', '686px', '182px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rec2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '193px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    labels: {
                        "end": 6000
                    },
                    data: [
                        [
                            "eid42",
                            "left",
                            0,
                            5000,
                            "easeOutQuad",
                            "${rec2}",
                            '-998px',
                            '-230px'
                        ],
                        [
                            "eid43",
                            "left",
                            6000,
                            2000,
                            "easeInBack",
                            "${rec2}",
                            '-230px',
                            '557px'
                        ]
                    ]
                }
            },
            "simTrian2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'trian2',
                            type: 'image',
                            rect: ['-40px', '-74px', '295px', '280px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/trian2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '193px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    labels: {
                        "end": 6000
                    },
                    data: [
                        [
                            "eid44",
                            "left",
                            0,
                            5000,
                            "easeOutQuad",
                            "${trian2}",
                            '-619px',
                            '-40px'
                        ],
                        [
                            "eid45",
                            "left",
                            6000,
                            2000,
                            "easeInBack",
                            "${trian2}",
                            '-40px',
                            '558px'
                        ]
                    ]
                }
            },
            "simCua3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'cua3',
                            type: 'image',
                            rect: ['-741px', '13px', '417px', '194px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cua3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '193px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    labels: {
                        "end": 6000
                    },
                    data: [
                        [
                            "eid46",
                            "left",
                            0,
                            5000,
                            "easeOutQuad",
                            "${cua3}",
                            '-741px',
                            '-104px'
                        ],
                        [
                            "eid47",
                            "left",
                            6000,
                            2000,
                            "easeInBack",
                            "${cua3}",
                            '-104px',
                            '549px'
                        ]
                    ]
                }
            },
            "simRec3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'rec3',
                            type: 'image',
                            rect: ['-634px', '-28px', '322px', '234px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rec3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '193px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    labels: {
                        "end": 6000
                    },
                    data: [
                        [
                            "eid48",
                            "left",
                            0,
                            5000,
                            "easeOutQuad",
                            "${rec3}",
                            '-634px',
                            '-48px'
                        ],
                        [
                            "eid49",
                            "left",
                            6000,
                            2000,
                            "easeInBack",
                            "${rec3}",
                            '-48px',
                            '552px'
                        ]
                    ]
                }
            },
            "simTrian3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'trian3',
                            type: 'image',
                            rect: ['-614px', '-34px', '290px', '240px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/trian3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '193px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    labels: {
                        "end": 6000
                    },
                    data: [
                        [
                            "eid52",
                            "left",
                            0,
                            5000,
                            "easeOutQuad",
                            "${trian3}",
                            '-614px',
                            '-35px'
                        ],
                        [
                            "eid54",
                            "left",
                            6000,
                            2000,
                            "easeInBack",
                            "${trian3}",
                            '-35px',
                            '558px'
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
                            rect: ['45px', '40px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text2',
                            opacity: '1',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255);\">Encuentra cuantos triángulos, cuadrados y rectángulos</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255);\">&nbsp;hay en los siguientes objetos.&nbsp;</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: lato, sans-serif; color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: lato, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\"></span></p>',
                            type: 'text'
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['-508px', '40px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text3',
                            opacity: '1',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255);\">Selecciona tu respuesta haciendo clic </span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255);\">en las opciones que te aparecen.</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: lato, sans-serif; color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: lato, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\"></span></p>',
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
                    duration: 13750,
                    autoPlay: true,
                    labels: {
                        "Etiqueta 1": 9750,
                        "end": 13750
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
                            1750,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid64",
                            "left",
                            9250,
                            1250,
                            "easeOutElastic",
                            "${Text3}",
                            '-508px',
                            '140px'
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
                            "eid35",
                            "left",
                            1750,
                            1150,
                            "easeOutElastic",
                            "${Text2}",
                            '-508px',
                            '45px'
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
                        ]
                    ]
                }
            },
            "simQuestion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'question',
                            type: 'image',
                            rect: ['7px', '12px', '34px', '48px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/question.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '47px', '65px']
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    data: [
                        [
                            "eid65",
                            "rotateZ",
                            0,
                            400,
                            "easeInBounce",
                            "${question}",
                            '0deg',
                            '25deg'
                        ],
                        [
                            "eid67",
                            "rotateZ",
                            1000,
                            400,
                            "easeInBounce",
                            "${question}",
                            '25deg',
                            '0deg'
                        ],
                        [
                            "eid109",
                            "rotateZ",
                            2300,
                            400,
                            "easeInBounce",
                            "${question}",
                            '0deg',
                            '-25deg'
                        ],
                        [
                            "eid111",
                            "rotateZ",
                            3300,
                            400,
                            "easeInBounce",
                            "${question}",
                            '-25deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "simJoke": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '188px', '166px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(102,204,0,0)']
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['94px', '69px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'TextJoke',
                            opacity: '1',
                            text: '<p style=\"margin: 0px;\">​0</p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '188px', '166px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid116",
                            "opacity",
                            0,
                            667,
                            "linear",
                            "${TextJoke}",
                            '0',
                            '1'
                        ],
                        [
                            "eid118",
                            "opacity",
                            667,
                            333,
                            "linear",
                            "${TextJoke}",
                            '1',
                            '0'
                        ],
                        [
                            "eid114",
                            "font-size",
                            0,
                            667,
                            "linear",
                            "${TextJoke}",
                            '24px',
                            '54px'
                        ],
                        [
                            "eid117",
                            "font-size",
                            667,
                            333,
                            "linear",
                            "${TextJoke}",
                            '54px',
                            '24px'
                        ]
                    ]
                }
            },
            "simEnd": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-525px', '13px', '210px', '193px', 'auto', 'auto'],
                            id: 'refresh',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/refresh.png', '0px', '0px']
                        },
                        {
                            id: 'simEndTooltip',
                            symbolName: 'simEndTooltip',
                            rect: ['16', '-134', '160', '86', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '210px', '193px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid119",
                            "left",
                            0,
                            5000,
                            "easeOutQuad",
                            "${refresh}",
                            '-525px',
                            '0px'
                        ]
                    ]
                }
            },
            "simEndTooltip": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '30px', '160', '86', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '160px', '66px', 'auto', 'auto'],
                                id: 'Rectangle3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(45,45,45,1.00)']
                            },
                            {
                                rect: ['70px', '13px', '47px', '66px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(45,45,45,1.00)']
                            },
                            {
                                rect: ['35px', '18px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'Text2',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 400;\">Repetir!</span></p>',
                                align: 'left',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '160px', '86px']
                        }
                    }
                },
                timeline: {
                    duration: 1300,
                    autoPlay: false,
                    labels: {
                        "start": 500
                    },
                    data: [
                        [
                            "eid121",
                            "top",
                            500,
                            400,
                            "easeOutQuad",
                            "${Group}",
                            '30px',
                            '56px'
                        ],
                        [
                            "eid123",
                            "top",
                            900,
                            400,
                            "easeOutQuad",
                            "${Group}",
                            '56px',
                            '30px'
                        ],
                        [
                            "eid120",
                            "opacity",
                            0,
                            500,
                            "easeOutQuad",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Pem81-82-84_edgeActions.js");
})("EDGE-521998336");
