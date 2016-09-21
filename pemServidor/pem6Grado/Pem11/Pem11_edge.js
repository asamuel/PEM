/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'cabin-sketch, sans-serif': '<script src=\"http://use.edgefonts.net/cabin-sketch:n4,n7:all.js\"></script>',
            'annie-use-your-telescope, sans-serif': '<script src=\"http://use.edgefonts.net/annie-use-your-telescope:n4:all.js\"></script>',
            'lato, sans-serif': '<script src=\"http://use.edgefonts.net/lato:n9,i4,n1,i7,i9,n7,i1,i3,n4,n3:all.js\"></script>'        },
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
            "../../cdn/jquery-ui.js",
            "../../cdn/jquery.ui.touch-punch.min.js",
            "../../cdn/mycss.css",
            "../../cdn/sass/sassAnimation.css",
            "../../cdn/getColorModal.js",
            "../../cdn/jss.min.js",
            "../../cdn/interact.min.js"
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
                            rect: ['0px', '0px', '1024px', '769px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo.jpg",'0px','0px']
                        },
                        {
                            id: 'simHojas',
                            symbolName: 'simHojas',
                            type: 'rect',
                            rect: ['0', '-2px', '1024', '535', 'auto', 'auto'],
                            transform: [[],[],[],['1','0.99252']]
                        },
                        {
                            id: 'simEstante',
                            symbolName: 'simEstante',
                            type: 'rect',
                            rect: ['331', '28', '513', '463', 'auto', 'auto']
                        },
                        {
                            id: 'botones',
                            type: 'rect',
                            rect: ['594px', '690px', '430px', '78px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'divBtnSig',
                                type: 'rect',
                                rect: ['241px', '-2px', '178px', '64px', 'auto', 'auto'],
                                fill: ["rgba(192,192,192,0.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                userClass: "btn btn2",
                                c: [
                                {
                                    id: 'rotuloSiguiente',
                                    type: 'image',
                                    rect: ['0px', '2px', '175px', '63px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"rotulo.jpg",'0px','0px']
                                },
                                {
                                    id: 'TextSig',
                                    type: 'text',
                                    rect: ['15px', '12px', '147px', '40px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​Siguiente</p>",
                                    font: ['cabin-sketch, sans-serif', [34, "px"], "rgba(255,255,255,1.00)", "700", "none", "", "break-word", ""]
                                }]
                            },
                            {
                                id: 'divBtnVer',
                                type: 'rect',
                                rect: ['47px', '-2px', '178px', '64px', 'auto', 'auto'],
                                fill: ["rgba(192,192,192,0.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"],
                                userClass: "btn btn1",
                                c: [
                                {
                                    id: 'rotuloVer',
                                    type: 'image',
                                    rect: ['0px', '2px', '175px', '63px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"rotulo.jpg",'0px','0px']
                                },
                                {
                                    id: 'TextVer',
                                    type: 'text',
                                    rect: ['67px', '12px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​Ver</p>",
                                    font: ['cabin-sketch, sans-serif', [34, "px"], "rgba(255,255,255,1.00)", "700", "none", "", "break-word", "nowrap"]
                                }]
                            }]
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
                            id: 'divEffect',
                            type: 'rect',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
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
                            "eid1",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${divEffect}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simHojas": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['360'], [], ['0.7', '0.7']],
                            rect: ['95px', '-130px', '49px', '118px', 'auto', 'auto'],
                            id: 'hoja',
                            opacity: '0.8',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hoja.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['90'], [], ['0.7', '0.7']],
                            rect: ['517px', '-130px', '49px', '118px', 'auto', 'auto'],
                            id: 'hojaCopy3',
                            opacity: '0.8',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hoja.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['180'], [], ['0.7', '0.7']],
                            rect: ['709px', '-110px', '40px', '97px', 'auto', 'auto'],
                            id: 'hojaCopy4',
                            opacity: '0.73381294964029',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hoja.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['45'], [], ['0.8', '0.8']],
                            rect: ['236px', '-115px', '36px', '86px', 'auto', 'auto'],
                            id: 'hojaCopy',
                            opacity: '0.8',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hoja.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['45'], [], ['0.8', '0.8']],
                            rect: ['912px', '-114px', '36px', '86px', 'auto', 'auto'],
                            id: 'hojaCopy6',
                            opacity: '0.8',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hoja.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['90'], [], ['0.8', '0.8']],
                            rect: ['8px', '-114px', '36px', '86px', 'auto', 'auto'],
                            id: 'hojaCopy2',
                            opacity: '0.69784172661871',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hoja.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-270'], [], ['0.8', '0.8']],
                            rect: ['380px', '-114px', '36px', '86px', 'auto', 'auto'],
                            id: 'hojaCopy7',
                            opacity: '0.69784172661871',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hoja.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-45'], [], ['0.8', '0.8']],
                            rect: ['809px', '-114px', '36px', '86px', 'auto', 'auto'],
                            id: 'hojaCopy5',
                            opacity: '0.69784172661871',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hoja.png', '0px', '0px']
                        },
                        {
                            rect: ['2px', '373px', '1022px', '395px', 'auto', 'auto'],
                            id: 'mono2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mono.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '1024px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 26000,
                    autoPlay: false,
                    data: [
                        [
                            "eid108",
                            "location",
                            7000,
                            6050,
                            "linear",
                            "${hojaCopy3}",
                            [[541.5, -71, 0, 0, 0, 0,0],[474.14, 56.47, -17, 109.19, -28.67, 184.15,145.69],[524.35, 162.43, 15.7, 167.4, 9.41, 100.32,265.09],[489.5, 263, 0, 0, 0, 0,374.14]]
                        ],
                        [
                            "eid112",
                            "location",
                            13050,
                            4950,
                            "linear",
                            "${hojaCopy3}",
                            [[489.5, 263, 0, 0, 0, 0,0],[471.36, 457.28, 53.6, 213.08, 65.24, 259.35,197.51],[569.5, 581, 0, 0, 0, 0,358.46]]
                        ],
                        [
                            "eid66",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${hoja}",
                            '0.7',
                            '0.7'
                        ],
                        [
                            "eid82",
                            "location",
                            9000,
                            4290,
                            "linear",
                            "${hojaCopy}",
                            [[254, -72, 0, 0, 0, 0,0],[229.68, 88.25, 34.25, 168.38, 37.6, 184.85,163.66],[302, 164, 0, 0, 0, 0,272.92]]
                        ],
                        [
                            "eid84",
                            "location",
                            13290,
                            3210,
                            "linear",
                            "${hojaCopy}",
                            [[302, 164, 0, 0, 0, 0,0],[333, 267.72, -27.96, 147.58, -25.96, 137.03,110.47],[266, 354, 0, 0, 0, 0,222.22]]
                        ],
                        [
                            "eid86",
                            "location",
                            16500,
                            3000,
                            "linear",
                            "${hojaCopy}",
                            [[266, 354, 0, 0, 0, 0,0],[291.87, 482.01, 93.32, 153.23, 104.63, 171.81,132.68],[398.4, 571.4, 0, 0, 0, 0,273.15]]
                        ],
                        [
                            "eid83",
                            "rotateZ",
                            9000,
                            4290,
                            "linear",
                            "${hojaCopy}",
                            '45deg',
                            '90deg'
                        ],
                        [
                            "eid85",
                            "rotateZ",
                            13290,
                            3210,
                            "linear",
                            "${hojaCopy}",
                            '90deg',
                            '180deg'
                        ],
                        [
                            "eid87",
                            "rotateZ",
                            16500,
                            3000,
                            "linear",
                            "${hojaCopy}",
                            '180deg',
                            '270deg'
                        ],
                        [
                            "eid51",
                            "rotateZ",
                            0,
                            2750,
                            "linear",
                            "${hoja}",
                            '0deg',
                            '90deg'
                        ],
                        [
                            "eid52",
                            "rotateZ",
                            2750,
                            2750,
                            "linear",
                            "${hoja}",
                            '90deg',
                            '180deg'
                        ],
                        [
                            "eid54",
                            "rotateZ",
                            5500,
                            2200,
                            "linear",
                            "${hoja}",
                            '180deg',
                            '270deg'
                        ],
                        [
                            "eid55",
                            "rotateZ",
                            7700,
                            3300,
                            "linear",
                            "${hoja}",
                            '270deg',
                            '360deg'
                        ],
                        [
                            "eid100",
                            "location",
                            14790,
                            4210,
                            "linear",
                            "${hojaCopy5}",
                            [[827, -71, 0, 0, 0, 0,0],[817.41, 70.45, 54.9, 152.02, 61.71, 170.88,144.02],[905, 145, 0, 0, 0, 0,262.3]]
                        ],
                        [
                            "eid102",
                            "location",
                            19000,
                            4000,
                            "linear",
                            "${hojaCopy5}",
                            [[905, 145, 0, 0, 0, 0,0],[922.62, 313.95, -48.97, 191.45, -43.74, 170.99,171.22],[843, 387.4, 0, 0, 0, 0,285.49]]
                        ],
                        [
                            "eid104",
                            "location",
                            23000,
                            2000,
                            "linear",
                            "${hojaCopy5}",
                            [[843, 387.4, 0, 0, 0, 0,0],[864.61, 505.63, 73.04, 133.83, 78.84, 144.47,121.49],[944.4, 573.21, 0, 0, 0, 0,227.73]]
                        ],
                        [
                            "eid50",
                            "location",
                            0,
                            5500,
                            "linear",
                            "${hoja}",
                            [[119.26, -71, 0, 0, 0, 0,0],[147.26, 55.69, 0, 210.67, 0, 176.24,130.35],[119.26, 189, 0, 0, 0, 0,267.37]]
                        ],
                        [
                            "eid53",
                            "location",
                            5500,
                            6000,
                            "linear",
                            "${hoja}",
                            [[119.26, 189, 0, 0, 0, 0,0],[47.68, 313.19, -11.73, 48.56, -43.15, 178.68,144.46],[57.69, 474.02, -0.31, 58.93, -1.03, 197.85,305.74],[55.98, 620.87, 0, 0, 0, 0,452.6]]
                        ],
                        [
                            "eid56",
                            "location",
                            11500,
                            17,
                            "linear",
                            "${hoja}",
                            [[44.08, 606.65, 11.95, 90.11, 0, 0,0],[93.5, 649, 0, 0, 0, 0,68.32]]
                        ],
                        [
                            "eid110",
                            "location",
                            5500,
                            5500,
                            "linear",
                            "${hojaCopy4}",
                            [[729, -61.5, 0, 0, 0, 0,0],[695.27, 61.59, -7.44, 77.27, -15.74, 163.45,127.96],[730.02, 142.27, 6.95, 129.77, 3.52, 65.67,216.89],[703, 208.5, 0, 0, 0, 0,290.86]]
                        ],
                        [
                            "eid114",
                            "location",
                            11000,
                            5500,
                            "linear",
                            "${hojaCopy4}",
                            [[703, 208.5, 0, 0, 0, 0,0],[671.82, 343.96, 32.27, 131.5, 47.85, 195.02,142.41],[793.63, 447.64, 95.99, 167.26, 67.82, 118.17,305.12],[791.95, 571, 0, 0, 0, 0,432.96]]
                        ],
                        [
                            "eid125",
                            "rotateZ",
                            15000,
                            5500,
                            "linear",
                            "${hojaCopy7}",
                            '-45deg',
                            '-120deg'
                        ],
                        [
                            "eid127",
                            "rotateZ",
                            20500,
                            5500,
                            "linear",
                            "${hojaCopy7}",
                            '-120deg',
                            '-300deg'
                        ],
                        [
                            "eid101",
                            "rotateZ",
                            14790,
                            4210,
                            "linear",
                            "${hojaCopy5}",
                            '-45deg',
                            '170deg'
                        ],
                        [
                            "eid103",
                            "rotateZ",
                            19000,
                            4000,
                            "linear",
                            "${hojaCopy5}",
                            '170deg',
                            '230deg'
                        ],
                        [
                            "eid105",
                            "rotateZ",
                            23000,
                            2000,
                            "linear",
                            "${hojaCopy5}",
                            '230deg',
                            '-250deg'
                        ],
                        [
                            "eid68",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${hoja}",
                            '0.8',
                            '0.8'
                        ],
                        [
                            "eid121",
                            "rotateZ",
                            11000,
                            6001,
                            "linear",
                            "${hojaCopy6}",
                            '45deg',
                            '120deg'
                        ],
                        [
                            "eid123",
                            "rotateZ",
                            17001,
                            4999,
                            "linear",
                            "${hojaCopy6}",
                            '120deg',
                            '270deg'
                        ],
                        [
                            "eid71",
                            "location",
                            3500,
                            5500,
                            "linear",
                            "${hojaCopy2}",
                            [[26, -71, 0, 0, 0, 0,0],[112.16, 49.26, 42.94, 165.53, 44.76, 172.56,149.61],[84.49, 154.49, 0, 0, 0, 0,262.09]]
                        ],
                        [
                            "eid73",
                            "location",
                            9000,
                            2000,
                            "linear",
                            "${hojaCopy2}",
                            [[84.49, 154.49, 0, 0, 0, 0,0],[41.12, 238, 0, 0, 0, 0,94.1]]
                        ],
                        [
                            "eid75",
                            "location",
                            11000,
                            4000,
                            "linear",
                            "${hojaCopy2}",
                            [[41.12, 238, 0, 0, 0, 0,0],[57, 408, 0, 0, 0, 0,170.74]]
                        ],
                        [
                            "eid79",
                            "location",
                            15000,
                            2500,
                            "linear",
                            "${hojaCopy2}",
                            [[57, 408, 0, 0, 0, 0,0],[18.53, 472.16, -84.95, 61.78, -79.89, 58.11,75.96],[-53, 488, 0, 0, 0, 0,150.6]]
                        ],
                        [
                            "eid120",
                            "location",
                            11000,
                            6001,
                            "linear",
                            "${hojaCopy6}",
                            [[930, -71, 0, 0, 0, 0,0],[979.86, 126.8, -27.69, 198.93, -36.36, 261.24,206.85],[886.51, 241.51, 0, 0, 0, 0,359.05]]
                        ],
                        [
                            "eid122",
                            "location",
                            17001,
                            4999,
                            "linear",
                            "${hojaCopy6}",
                            [[886.51, 241.51, 0, 0, 0, 0,0],[937.64, 359.74, 23.83, 151.51, 25.71, 163.5,129.58],[887.42, 506.33, -3.39, 135.88, -3.29, 131.88,286.64],[941, 588, 0, 0, 0, 0,387.9]]
                        ],
                        [
                            "eid111",
                            "rotateZ",
                            5500,
                            5500,
                            "linear",
                            "${hojaCopy4}",
                            '180deg',
                            '270deg'
                        ],
                        [
                            "eid115",
                            "rotateZ",
                            11000,
                            5500,
                            "linear",
                            "${hojaCopy4}",
                            '270deg',
                            '360deg'
                        ],
                        [
                            "eid124",
                            "location",
                            15000,
                            5500,
                            "linear",
                            "${hojaCopy7}",
                            [[398, -71, 0, 0, 0, 0,0],[340.82, 15.56, 15.2, 111.62, 19.77, 145.19,108.99],[407.17, 132.62, -41.34, 83.66, -54.25, 109.8,248.94],[390.35, 240.6, -158.85, 124.07, -76.51, 59.76,360.85],[230, 269, 0, 0, 0, 0,526.99]]
                        ],
                        [
                            "eid126",
                            "location",
                            20500,
                            5500,
                            "linear",
                            "${hojaCopy7}",
                            [[230, 269, 0, 0, 0, 0,0],[133.96, 346.96, -41.4, 102.36, -68.53, 169.46,127.35],[167.89, 474.29, -9.78, 160.61, -6.83, 112.2,261.42],[112.99, 558.33, 0, 0, 0, 0,365.4]]
                        ],
                        [
                            "eid67",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${hoja}",
                            '0.7',
                            '0.7'
                        ],
                        [
                            "eid109",
                            "rotateZ",
                            7000,
                            6050,
                            "linear",
                            "${hojaCopy3}",
                            '90deg',
                            '180deg'
                        ],
                        [
                            "eid113",
                            "rotateZ",
                            13050,
                            4950,
                            "linear",
                            "${hojaCopy3}",
                            '180deg',
                            '270deg'
                        ],
                        [
                            "eid72",
                            "rotateZ",
                            3500,
                            5500,
                            "linear",
                            "${hojaCopy2}",
                            '-45deg',
                            '90deg'
                        ],
                        [
                            "eid74",
                            "rotateZ",
                            9000,
                            2000,
                            "linear",
                            "${hojaCopy2}",
                            '90deg',
                            '125deg'
                        ],
                        [
                            "eid76",
                            "rotateZ",
                            11000,
                            4000,
                            "linear",
                            "${hojaCopy2}",
                            '125deg',
                            '270deg'
                        ],
                        [
                            "eid80",
                            "rotateZ",
                            15000,
                            2500,
                            "linear",
                            "${hojaCopy2}",
                            '270deg',
                            '320deg'
                        ]
                    ]
                }
            },
            "simEstante": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '513px', '463px', 'auto', 'auto'],
                            id: 'estante',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/estante.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', null, null, 'auto', 'auto'],
                            id: 'simFrutas3',
                            symbolName: 'simFrutas3',
                            type: 'rect'
                        },
                        {
                            rect: ['0px', '0px', null, null, 'auto', 'auto'],
                            id: 'simFrutas2',
                            symbolName: 'simFrutas2',
                            type: 'rect'
                        },
                        {
                            rect: ['0', '0', '513', '463', 'auto', 'auto'],
                            id: 'simFrutas1',
                            symbolName: 'simFrutas1',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'containerContainer',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-303px', '0px', '964px', '903px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '513px', '463px']
                        }
                    }
                },
                timeline: {
                    duration: 3200,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "simFrutas1": {
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
                            id: 'fruta1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-33px', '61px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg1',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['232px', '61px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg2',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-33px', '61px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg3',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['93px', '185px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg4',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['232px', '442px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg5',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'frutaIncog',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['356px', '442px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0.00)'],
                            c: [
                            {
                                rect: ['3px', '1px', '77px', '105px', 'auto', 'auto'],
                                id: 'frutaIncognita',
                                opacity: '1',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/frutaIncognita.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['93px', '442px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg6',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['232px', '442px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg7',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['356px', '442px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg8',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '513px', '463px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                        [
                            "eid163",
                            "opacity",
                            1500,
                            500,
                            "easeOutBack",
                            "${fruta5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid161",
                            "top",
                            1500,
                            500,
                            "easeOutBack",
                            "${fruta4}",
                            '442px',
                            '185px'
                        ],
                        [
                            "eid159",
                            "left",
                            1000,
                            500,
                            "easeOutSine",
                            "${fruta3}",
                            '-33px',
                            '356px'
                        ],
                        [
                            "eid155",
                            "opacity",
                            0,
                            500,
                            "easeOutSine",
                            "${fruta1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid171",
                            "opacity",
                            1500,
                            500,
                            "easeOutBack",
                            "${frutaIncog}",
                            '0',
                            '1'
                        ],
                        [
                            "eid168",
                            "opacity",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid162",
                            "top",
                            1500,
                            500,
                            "easeOutBack",
                            "${fruta5}",
                            '442px',
                            '185px'
                        ],
                        [
                            "eid157",
                            "left",
                            500,
                            500,
                            "easeOutSine",
                            "${fruta2}",
                            '-33px',
                            '232px'
                        ],
                        [
                            "eid154",
                            "left",
                            0,
                            500,
                            "easeOutSine",
                            "${fruta1}",
                            '-33px',
                            '93px'
                        ],
                        [
                            "eid166",
                            "opacity",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid169",
                            "top",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta8}",
                            '442px',
                            '301px'
                        ],
                        [
                            "eid164",
                            "top",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta6}",
                            '442px',
                            '301px'
                        ],
                        [
                            "eid167",
                            "top",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta7}",
                            '442px',
                            '301px'
                        ],
                        [
                            "eid165",
                            "opacity",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid156",
                            "opacity",
                            500,
                            500,
                            "easeOutSine",
                            "${fruta2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid160",
                            "opacity",
                            1500,
                            500,
                            "easeOutBack",
                            "${fruta4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid158",
                            "opacity",
                            1000,
                            500,
                            "easeOutSine",
                            "${fruta3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid170",
                            "top",
                            1500,
                            500,
                            "easeOutBack",
                            "${frutaIncog}",
                            '442px',
                            '185px'
                        ]
                    ]
                }
            },
            "simFrutas2": {
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
                            id: 'fruta1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['72px', '61px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg1',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['168px', '61px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg2',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['268px', '61px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg3',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'frutaIncog',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['360px', '61px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0.00)'],
                            c: [
                            {
                                rect: ['3px', '1px', '77px', '105px', 'auto', 'auto'],
                                id: 'frutaIncognita',
                                opacity: '1',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/frutaIncognita.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['72px', '185px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg4',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['168px', '442px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg5',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['268px', '442px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg6',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['360px', '442px', '80px', '107px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg7',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['72px', '442px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg8',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['168px', '442px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg9',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['268px', '442px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg10',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['360px', '442px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg11',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '513px', '463px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                        [
                            "eid163",
                            "opacity",
                            1500,
                            500,
                            "easeOutBack",
                            "${fruta5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid161",
                            "top",
                            1500,
                            500,
                            "easeOutBack",
                            "${fruta4}",
                            '442px',
                            '185px'
                        ],
                        [
                            "eid166",
                            "opacity",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid186",
                            "opacity",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid174",
                            "left",
                            1500,
                            500,
                            "easeOutBack",
                            "${frutaIncog}",
                            '-33px',
                            '360px'
                        ],
                        [
                            "eid162",
                            "top",
                            1500,
                            500,
                            "easeOutBack",
                            "${fruta5}",
                            '442px',
                            '185px'
                        ],
                        [
                            "eid159",
                            "left",
                            1000,
                            500,
                            "easeOutSine",
                            "${fruta3}",
                            '-33px',
                            '268px'
                        ],
                        [
                            "eid155",
                            "opacity",
                            0,
                            500,
                            "easeOutSine",
                            "${fruta1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid175",
                            "opacity",
                            1500,
                            500,
                            "easeOutBack",
                            "${frutaIncog}",
                            '0',
                            '1'
                        ],
                        [
                            "eid157",
                            "left",
                            500,
                            500,
                            "easeOutSine",
                            "${fruta2}",
                            '-33px',
                            '168px'
                        ],
                        [
                            "eid165",
                            "opacity",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid178",
                            "top",
                            1500,
                            500,
                            "easeOutBack",
                            "${fruta6}",
                            '442px',
                            '185px'
                        ],
                        [
                            "eid160",
                            "opacity",
                            1500,
                            500,
                            "easeOutBack",
                            "${fruta4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid158",
                            "opacity",
                            1000,
                            500,
                            "easeOutSine",
                            "${fruta3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid183",
                            "left",
                            2000,
                            0,
                            "easeOutBack",
                            "${fruta9}",
                            '168px',
                            '168px'
                        ],
                        [
                            "eid154",
                            "left",
                            0,
                            500,
                            "easeOutSine",
                            "${fruta1}",
                            '-33px',
                            '72px'
                        ],
                        [
                            "eid177",
                            "left",
                            2000,
                            0,
                            "easeOutBack",
                            "${fruta5}",
                            '168px',
                            '168px'
                        ],
                        [
                            "eid164",
                            "top",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta8}",
                            '442px',
                            '301px'
                        ],
                        [
                            "eid176",
                            "left",
                            1500,
                            0,
                            "easeOutBack",
                            "${fruta4}",
                            '72px',
                            '72px'
                        ],
                        [
                            "eid168",
                            "opacity",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid169",
                            "top",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta10}",
                            '442px',
                            '301px'
                        ],
                        [
                            "eid181",
                            "opacity",
                            1500,
                            500,
                            "easeOutBack",
                            "${fruta7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid167",
                            "top",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta9}",
                            '442px',
                            '301px'
                        ],
                        [
                            "eid180",
                            "top",
                            1500,
                            500,
                            "easeOutBack",
                            "${fruta7}",
                            '442px',
                            '185px'
                        ],
                        [
                            "eid179",
                            "opacity",
                            1500,
                            500,
                            "easeOutBack",
                            "${fruta6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid156",
                            "opacity",
                            500,
                            500,
                            "easeOutSine",
                            "${fruta2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid182",
                            "left",
                            2000,
                            0,
                            "easeOutBack",
                            "${fruta8}",
                            '72px',
                            '72px'
                        ],
                        [
                            "eid185",
                            "left",
                            2000,
                            0,
                            "easeOutBack",
                            "${fruta10}",
                            '268px',
                            '268px'
                        ],
                        [
                            "eid187",
                            "top",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta11}",
                            '442px',
                            '301px'
                        ]
                    ]
                }
            },
            "simFrutas3": {
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
                            id: 'frutaIncog',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['72px', '61px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0.00)'],
                            c: [
                            {
                                rect: ['3px', '1px', '77px', '105px', 'auto', 'auto'],
                                id: 'frutaIncognita',
                                opacity: '1',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/frutaIncognita.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['168px', '61px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg1',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['268px', '61px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg2',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['360px', '61px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg3',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['72px', '185px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg4',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['168px', '442px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg5',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['268px', '442px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg6',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['360px', '442px', '80px', '107px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg7',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['72px', '442px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg8',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['168px', '442px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg9',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['268px', '442px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg10',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'fruta11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['360px', '442px', '80px', '107px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                type: 'image',
                                id: 'frutaimg11',
                                rect: ['2px', '0px', '77px', '105px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '513px', '463px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                        [
                            "eid163",
                            "opacity",
                            1500,
                            500,
                            "easeOutBack",
                            "${fruta5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid161",
                            "top",
                            1500,
                            500,
                            "easeOutBack",
                            "${fruta4}",
                            '442px',
                            '185px'
                        ],
                        [
                            "eid166",
                            "opacity",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid186",
                            "opacity",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid165",
                            "opacity",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid185",
                            "left",
                            2000,
                            0,
                            "easeOutBack",
                            "${fruta10}",
                            '268px',
                            '268px'
                        ],
                        [
                            "eid154",
                            "left",
                            1500,
                            500,
                            "easeOutSine",
                            "${fruta3}",
                            '-33px',
                            '360px'
                        ],
                        [
                            "eid156",
                            "opacity",
                            500,
                            500,
                            "easeOutSine",
                            "${fruta1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid175",
                            "opacity",
                            0,
                            500,
                            "easeOutBack",
                            "${frutaIncog}",
                            '0',
                            '1'
                        ],
                        [
                            "eid160",
                            "opacity",
                            1500,
                            500,
                            "easeOutBack",
                            "${fruta4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid174",
                            "left",
                            0,
                            500,
                            "easeOutBack",
                            "${frutaIncog}",
                            '-33px',
                            '72px'
                        ],
                        [
                            "eid162",
                            "top",
                            1500,
                            500,
                            "easeOutBack",
                            "${fruta5}",
                            '442px',
                            '185px'
                        ],
                        [
                            "eid159",
                            "left",
                            1000,
                            500,
                            "easeOutSine",
                            "${fruta2}",
                            '-33px',
                            '268px'
                        ],
                        [
                            "eid155",
                            "opacity",
                            1500,
                            500,
                            "easeOutSine",
                            "${fruta3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid183",
                            "left",
                            2000,
                            0,
                            "easeOutBack",
                            "${fruta9}",
                            '168px',
                            '168px'
                        ],
                        [
                            "eid157",
                            "left",
                            500,
                            500,
                            "easeOutSine",
                            "${fruta1}",
                            '-33px',
                            '168px'
                        ],
                        [
                            "eid177",
                            "left",
                            2000,
                            0,
                            "easeOutBack",
                            "${fruta5}",
                            '168px',
                            '168px'
                        ],
                        [
                            "eid164",
                            "top",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta8}",
                            '442px',
                            '301px'
                        ],
                        [
                            "eid176",
                            "left",
                            1500,
                            0,
                            "easeOutBack",
                            "${fruta4}",
                            '72px',
                            '72px'
                        ],
                        [
                            "eid168",
                            "opacity",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid169",
                            "top",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta10}",
                            '442px',
                            '301px'
                        ],
                        [
                            "eid181",
                            "opacity",
                            1500,
                            500,
                            "easeOutBack",
                            "${fruta7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid167",
                            "top",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta9}",
                            '442px',
                            '301px'
                        ],
                        [
                            "eid180",
                            "top",
                            1500,
                            500,
                            "easeOutBack",
                            "${fruta7}",
                            '442px',
                            '185px'
                        ],
                        [
                            "eid179",
                            "opacity",
                            1500,
                            500,
                            "easeOutBack",
                            "${fruta6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid158",
                            "opacity",
                            1000,
                            500,
                            "easeOutSine",
                            "${fruta2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid182",
                            "left",
                            2000,
                            0,
                            "easeOutBack",
                            "${fruta8}",
                            '72px',
                            '72px'
                        ],
                        [
                            "eid178",
                            "top",
                            1500,
                            500,
                            "easeOutBack",
                            "${fruta6}",
                            '442px',
                            '185px'
                        ],
                        [
                            "eid187",
                            "top",
                            2000,
                            500,
                            "easeOutBack",
                            "${fruta11}",
                            '442px',
                            '301px'
                        ]
                    ]
                }
            },
            "simContainerGlobal": {
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
                            rect: ['0px', '0px', '964px', '666px', 'auto', 'auto'],
                            id: 'containerGlobal',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(255,255,255,0.00)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'drop1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['659px', '184px', '80px', '107px', 'auto', 'auto'],
                                fill: ['rgba(201,5,5,0.87)']
                            },
                            {
                                type: 'rect',
                                id: 'drop2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['663px', '61px', '80px', '107px', 'auto', 'auto'],
                                fill: ['rgba(201,5,5,0.87)']
                            },
                            {
                                rect: ['375px', '61px', '80px', '107px', 'auto', 'auto'],
                                opacity: '1',
                                id: 'drop3',
                                stroke: [1, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(201,5,5,0.87)']
                            },
                            {
                                type: 'rect',
                                userClass: 'divMov',
                                rect: ['46px', '524px', '77px', '105px', 'auto', 'auto'],
                                id: 'frutaMov1',
                                stroke: [1, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(201,5,5,0)'],
                                c: [
                                {
                                    id: 'frutaMovImg1',
                                    type: 'image',
                                    rect: ['0px', '0px', '77px', '105px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'rect',
                                userClass: 'divMov',
                                rect: ['244px', '524px', '77px', '105px', 'auto', 'auto'],
                                id: 'frutaMov2',
                                stroke: [1, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(201,5,5,0)'],
                                c: [
                                {
                                    id: 'frutaMovImg2',
                                    type: 'image',
                                    rect: ['0px', '0px', '77px', '105px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'rect',
                                userClass: 'divMov',
                                rect: ['445px', '524px', '77px', '105px', 'auto', 'auto'],
                                id: 'frutaMov3',
                                stroke: [1, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(201,5,5,0)'],
                                c: [
                                {
                                    id: 'frutaMovImg3',
                                    type: 'image',
                                    rect: ['0px', '0px', '77px', '105px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'rect',
                                userClass: 'divMov',
                                rect: ['652px', '524px', '77px', '105px', 'auto', 'auto'],
                                id: 'frutaMov4',
                                stroke: [1, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(201,5,5,0)'],
                                c: [
                                {
                                    id: 'frutaMovImg4',
                                    type: 'image',
                                    rect: ['0px', '0px', '77px', '105px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'rect',
                                userClass: 'divMov',
                                rect: ['846px', '524px', '77px', '105px', 'auto', 'auto'],
                                id: 'frutaMov5',
                                stroke: [1, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(201,5,5,0)'],
                                c: [
                                {
                                    id: 'frutaMovImg5',
                                    type: 'image',
                                    rect: ['0px', '0px', '77px', '105px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'rect',
                                userClass: 'divDrag',
                                rect: ['46px', '524px', '77px', '105px', 'auto', 'auto'],
                                id: 'frutaDrag1',
                                stroke: [1, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(201,5,5,0)'],
                                c: [
                                {
                                    id: 'frutaDragImg1',
                                    type: 'image',
                                    rect: ['0px', '0px', '77px', '105px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'rect',
                                userClass: 'divDrag',
                                rect: ['244px', '524px', '77px', '105px', 'auto', 'auto'],
                                id: 'frutaDrag2',
                                stroke: [1, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(201,5,5,0)'],
                                c: [
                                {
                                    id: 'frutaDragImg2',
                                    type: 'image',
                                    rect: ['0px', '0px', '77px', '105px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'rect',
                                userClass: 'divDrag',
                                rect: ['445px', '524px', '77px', '105px', 'auto', 'auto'],
                                id: 'frutaDrag3',
                                stroke: [1, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(201,5,5,0)'],
                                c: [
                                {
                                    id: 'frutaDragImg3',
                                    type: 'image',
                                    rect: ['0px', '0px', '77px', '105px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'rect',
                                userClass: 'divDrag',
                                rect: ['652px', '524px', '77px', '105px', 'auto', 'auto'],
                                id: 'frutaDrag4',
                                stroke: [1, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(201,5,5,0)'],
                                c: [
                                {
                                    id: 'frutaDragImg4',
                                    type: 'image',
                                    rect: ['0px', '0px', '77px', '105px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'rect',
                                userClass: 'divDrag',
                                rect: ['846px', '524px', '77px', '105px', 'auto', 'auto'],
                                id: 'frutaDrag5',
                                stroke: [1, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(201,5,5,0)'],
                                c: [
                                {
                                    id: 'frutaDragImg5',
                                    type: 'image',
                                    rect: ['0px', '0px', '77px', '105px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/fruta.png', '0px', '0px']
                                }]
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '964px', '903px']
                        }
                    }
                },
                timeline: {
                    duration: 3200,
                    autoPlay: false,
                    labels: {
                        "start": 1200
                    },
                    data: [
                        [
                            "eid195",
                            "top",
                            1700,
                            700,
                            "easeInOutBack",
                            "${frutaMov2}",
                            '798px',
                            '524px'
                        ],
                        [
                            "eid196",
                            "top",
                            2000,
                            600,
                            "easeInOutBack",
                            "${frutaMov3}",
                            '798px',
                            '524px'
                        ],
                        [
                            "eid198",
                            "top",
                            2600,
                            600,
                            "easeInOutBack",
                            "${frutaMov5}",
                            '798px',
                            '524px'
                        ],
                        [
                            "eid197",
                            "top",
                            2300,
                            500,
                            "easeInOutBack",
                            "${frutaMov4}",
                            '798px',
                            '524px'
                        ],
                        [
                            "eid192",
                            "top",
                            1300,
                            900,
                            "easeInOutBack",
                            "${frutaMov1}",
                            '798px',
                            '524px'
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
                            fill: ['rgba(0,0,0,0)', 'images/atras_4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'atras_4_over',
                            opacity: '0',
                            rect: ['0px', '0px', '62px', '62px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/atras_4_over.png', '0px', '0px']
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
                            fill: ['rgba(0,0,0,0)', 'images/menu_1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'menu_1_over',
                            opacity: '0',
                            rect: ['1px', '0px', '59px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/menu_1_over.png', '0px', '0px']
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
                            fill: ['rgba(0,0,0,0)', 'images/sonido_3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'sonido_3_over',
                            opacity: '0',
                            rect: ['0px', '0px', '64px', '62px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sonido_3_over.png', '0px', '0px']
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
                            fill: ['rgba(0,0,0,0)', 'images/instruccion_2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'instruccion_2_over',
                            opacity: '0',
                            rect: ['1px', '0px', '61px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/instruccion_2_over.png', '0px', '0px']
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
                            rect: ['113px', '10px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text2',
                            opacity: '1',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); font-family: lato, sans-serif;\">Ayuda al mono Nelson a escoger la naranja </span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255); font-family: lato, sans-serif;\">y así poder&nbsp;llenar su estante.</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255); font-family: lato, sans-serif;\">Arrastra la naranja correspondiente.</span><span style=\"font-family: lato, sans-serif; color: rgb(255, 255, 255); font-weight: 500;\">&nbsp;</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: lato, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\"></span></p>',
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
                            "eid209",
                            "top",
                            2750,
                            0,
                            "linear",
                            "${Text2}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid210",
                            "top",
                            3900,
                            0,
                            "linear",
                            "${Text2}",
                            '10px',
                            '10px'
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
                            '113px'
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Pem11_edgeActions.js");
})("EDGE-107061666");
