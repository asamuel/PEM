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
                            id: 'fondo',
                            type: 'image',
                            rect: ['0px', '0px', '1027px', '770px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fondo.png",'0px','0px']
                        },
                        {
                            id: 'simScreen',
                            symbolName: 'simScreen',
                            type: 'rect',
                            rect: ['321', '-203px', '416', '77', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'compu',
                            type: 'image',
                            rect: ['300px', '-228px', '461px', '201px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"compu.png",'0px','0px']
                        },
                        {
                            id: 'tablet',
                            type: 'image',
                            rect: ['778px', '-189px', '75px', '124px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"tablet.png",'0px','0px']
                        },
                        {
                            id: 'container',
                            type: 'rect',
                            rect: ['26px', '35px', '978px', '512px', 'auto', 'auto'],
                            fill: ["rgba(82,146,152,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'simSponsor',
                            symbolName: 'simSponsor',
                            type: 'rect',
                            rect: ['788px', '-172px', '56', '89', 'auto', 'auto']
                        },
                        {
                            id: 'simContainer2',
                            symbolName: 'simContainer2',
                            type: 'rect',
                            rect: ['256', '179', '678', '284', 'auto', 'auto']
                        },
                        {
                            id: 'simLapizes',
                            symbolName: 'simLapizes',
                            type: 'rect',
                            rect: ['256px', '179', '678', '284', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'simEraser',
                            symbolName: 'simEraser',
                            type: 'rect',
                            rect: ['801', '445', '148', '102', 'auto', 'auto']
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
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid220",
                            "opacity",
                            0,
                            2000,
                            "easeOutElastic",
                            "${simMenu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28",
                            "left",
                            2000,
                            1000,
                            "easeOutQuart",
                            "${tablet}",
                            '778px',
                            '782px'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            1500,
                            "linear",
                            "${compu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid218",
                            "opacity",
                            0,
                            2000,
                            "easeOutElastic",
                            "${simIntrucciones}",
                            '0',
                            '1'
                        ],
                        [
                            "eid32",
                            "left",
                            2000,
                            1000,
                            "easeOutQuart",
                            "${simSponsor}",
                            '788px',
                            '792px'
                        ],
                        [
                            "eid34",
                            "top",
                            2000,
                            1000,
                            "easeOutQuart",
                            "${simSponsor}",
                            '-172px',
                            '49px'
                        ],
                        [
                            "eid30",
                            "top",
                            2000,
                            1000,
                            "easeOutQuart",
                            "${tablet}",
                            '-189px',
                            '35px'
                        ],
                        [
                            "eid22",
                            "top",
                            1500,
                            1000,
                            "easeOutQuart",
                            "${compu}",
                            '-228px',
                            '0px'
                        ],
                        [
                            "eid14",
                            "opacity",
                            0,
                            1500,
                            "linear",
                            "${fondo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "top",
                            1500,
                            1000,
                            "easeOutQuart",
                            "${simScreen}",
                            '-203px',
                            '25px'
                        ],
                        [
                            "eid161",
                            "opacity",
                            0,
                            2000,
                            "easeOutQuad",
                            "${simLapizes}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            0,
                            1500,
                            "linear",
                            "${simScreen}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simScreen": {
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
                            id: 'screen',
                            rect: ['0px', '0px', '416px', '77px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/screen.png', '0px', '0px']
                        },
                        {
                            rect: ['279px', '46px', '214px', '137px', 'auto', 'auto'],
                            transform: [[], ['-2'], [0, 0, 0], [1, 1, 1]],
                            id: 'brillo',
                            opacity: '0.74820152675505',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/brillo.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '416px', '77px']
                        }
                    }
                },
                timeline: {
                    duration: 25000,
                    autoPlay: false,
                    data: [
                        [
                            "eid6",
                            "top",
                            0,
                            500,
                            "linear",
                            "${brillo}",
                            '-86px',
                            '46px'
                        ],
                        [
                            "eid5",
                            "left",
                            0,
                            500,
                            "linear",
                            "${brillo}",
                            '-87px',
                            '279px'
                        ],
                        [
                            "eid8",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${brillo}",
                            '0.74820152675505',
                            '0.74820152675505'
                        ]
                    ]
                }
            },
            "simSponsor": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '56px', '89px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['9px', '40px', '10px', '10px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(82,146,152,1.00)']
                        },
                        {
                            rect: ['22px', '40px', '10px', '10px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(82,146,152,1.00)']
                        },
                        {
                            rect: ['37px', '40px', '10px', '10px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(82,146,152,1.00)']
                        },
                        {
                            rect: ['0px', '23px', '56px', '51px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.9', '0.9']],
                            id: 'logoFeAlegria',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/logoFeAlegria.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '10px', '56px', '69px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'logoUca',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/logoUca.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '17px', '56px', '57px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.4', '0.4']],
                            id: 'logoJesuita',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/logoJesuita.jpg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['16px', '93px', '27px', '12px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.6', '0.6']],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(82,146,152,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '56px', '110px']
                        }
                    }
                },
                timeline: {
                    duration: 27750,
                    autoPlay: false,
                    labels: {
                        "start": 2750,
                        "end": 27750
                    },
                    data: [
                        [
                            "eid59",
                            "opacity",
                            3000,
                            750,
                            "easeOutBack",
                            "${logoFeAlegria}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            10000,
                            750,
                            "easeOutBack",
                            "${logoFeAlegria}",
                            '1',
                            '0'
                        ],
                        [
                            "eid80",
                            "scaleX",
                            19250,
                            750,
                            "easeOutQuart",
                            "${logoJesuita}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid86",
                            "scaleX",
                            26000,
                            1000,
                            "easeOutQuart",
                            "${logoJesuita}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid69",
                            "opacity",
                            11000,
                            750,
                            "easeOutQuart",
                            "${logoUca}",
                            '0',
                            '1'
                        ],
                        [
                            "eid74",
                            "opacity",
                            18000,
                            750,
                            "easeOutQuart",
                            "${logoUca}",
                            '1',
                            '0'
                        ],
                        [
                            "eid53",
                            "left",
                            2500,
                            250,
                            "easeOutBack",
                            "${Ellipse3}",
                            '37px',
                            '-24px'
                        ],
                        [
                            "eid45",
                            "top",
                            500,
                            250,
                            "easeOutQuart",
                            "${Ellipse2}",
                            '40px',
                            '35px'
                        ],
                        [
                            "eid46",
                            "top",
                            750,
                            250,
                            "easeOutQuart",
                            "${Ellipse2}",
                            '35px',
                            '40px'
                        ],
                        [
                            "eid73",
                            "scaleY",
                            11000,
                            750,
                            "easeOutQuart",
                            "${logoUca}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid76",
                            "scaleY",
                            18000,
                            750,
                            "easeOutQuart",
                            "${logoUca}",
                            '1',
                            '0.4'
                        ],
                        [
                            "eid43",
                            "top",
                            0,
                            250,
                            "easeOutQuart",
                            "${Ellipse1}",
                            '40px',
                            '35px'
                        ],
                        [
                            "eid44",
                            "top",
                            250,
                            250,
                            "easeOutQuart",
                            "${Ellipse1}",
                            '35px',
                            '40px'
                        ],
                        [
                            "eid78",
                            "opacity",
                            19250,
                            750,
                            "easeOutQuart",
                            "${logoJesuita}",
                            '0',
                            '1'
                        ],
                        [
                            "eid85",
                            "opacity",
                            26000,
                            1000,
                            "easeOutQuart",
                            "${logoJesuita}",
                            '1',
                            '0'
                        ],
                        [
                            "eid47",
                            "top",
                            1000,
                            250,
                            "easeOutQuart",
                            "${Ellipse3}",
                            '40px',
                            '35px'
                        ],
                        [
                            "eid48",
                            "top",
                            1250,
                            250,
                            "easeOutQuart",
                            "${Ellipse3}",
                            '35px',
                            '40px'
                        ],
                        [
                            "eid82",
                            "scaleY",
                            19250,
                            750,
                            "easeOutQuart",
                            "${logoJesuita}",
                            '0.4',
                            '1'
                        ],
                        [
                            "eid87",
                            "scaleY",
                            26000,
                            1000,
                            "easeOutQuart",
                            "${logoJesuita}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid52",
                            "left",
                            2250,
                            250,
                            "easeOutBack",
                            "${Ellipse2}",
                            '22px',
                            '-29px'
                        ],
                        [
                            "eid57",
                            "scaleY",
                            3000,
                            750,
                            "easeOutBack",
                            "${logoFeAlegria}",
                            '0.5',
                            '0.9'
                        ],
                        [
                            "eid61",
                            "scaleY",
                            10000,
                            750,
                            "easeOutBack",
                            "${logoFeAlegria}",
                            '0.9',
                            '0.4'
                        ],
                        [
                            "eid49",
                            "left",
                            2000,
                            250,
                            "easeOutBack",
                            "${Ellipse1}",
                            '9px',
                            '-24px'
                        ],
                        [
                            "eid71",
                            "scaleX",
                            11000,
                            750,
                            "easeOutQuart",
                            "${logoUca}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid75",
                            "scaleX",
                            18000,
                            750,
                            "easeOutQuart",
                            "${logoUca}",
                            '1',
                            '0.4'
                        ],
                        [
                            "eid55",
                            "scaleX",
                            3000,
                            750,
                            "easeOutBack",
                            "${logoFeAlegria}",
                            '0.5',
                            '0.9'
                        ],
                        [
                            "eid60",
                            "scaleX",
                            10000,
                            750,
                            "easeOutBack",
                            "${logoFeAlegria}",
                            '0.9',
                            '0.4'
                        ]
                    ]
                }
            },
            "simLapizes": {
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-3px', '0px', '678px', '284px', 'auto', 'auto'],
                            fill: ['rgba(82,146,152,0)']
                        },
                        {
                            userClass: 'box',
                            rect: ['374px', '-46px', '118px', '17px', 'auto', 'auto'],
                            id: 'lapiz1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lapiz1.png', '0px', '0px']
                        },
                        {
                            userClass: 'box',
                            rect: ['374px', '68px', '118px', '17px', 'auto', 'auto'],
                            id: 'lapiz2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lapiz2.png', '0px', '0px']
                        },
                        {
                            userClass: 'box',
                            rect: ['374px', '177px', '118px', '17px', 'auto', 'auto'],
                            id: 'lapiz3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lapiz3.png', '0px', '0px']
                        },
                        {
                            userClass: 'box',
                            rect: ['220px', '161px', '119px', '17px', 'auto', 'auto'],
                            id: 'lapiz4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lapiz4.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            type: 'image',
                            id: 'lapiz132',
                            opacity: '0',
                            rect: ['191px', '153px', '20px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lapiz13.png', '0px', '0px']
                        },
                        {
                            userClass: 'box',
                            rect: ['64px', '215px', '119px', '17px', 'auto', 'auto'],
                            id: 'lapiz6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lapiz6.png', '0px', '0px']
                        },
                        {
                            userClass: 'box',
                            rect: ['64px', '76px', '119px', '17px', 'auto', 'auto'],
                            id: 'lapiz8',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lapiz8.png', '0px', '0px']
                        },
                        {
                            userClass: 'box',
                            rect: ['64px', '9px', '119px', '19px', 'auto', 'auto'],
                            id: 'lapiz9',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lapiz9.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            type: 'image',
                            id: 'lapiz12',
                            opacity: '0',
                            rect: ['36px', '28px', '20px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lapiz12.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            type: 'image',
                            id: 'lapiz14',
                            opacity: '0',
                            rect: ['191px', '28px', '20px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lapiz14.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            type: 'image',
                            id: 'lapiz17',
                            opacity: '0',
                            rect: ['36px', '153px', '20px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lapiz17.png', '0px', '0px']
                        },
                        {
                            userClass: 'box',
                            rect: ['221px', '-56px', '118px', '17px', 'auto', 'auto'],
                            id: 'lapiz5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lapiz5.png', '0px', '0px']
                        },
                        {
                            userClass: 'box',
                            rect: ['220px', '68px', '119px', '17px', 'auto', 'auto'],
                            id: 'lapiz7',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lapiz7.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            type: 'image',
                            id: 'lapiz16',
                            opacity: '0',
                            rect: ['344px', '28px', '20px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lapiz16.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            type: 'image',
                            id: 'lapiz15',
                            opacity: '0',
                            rect: ['344px', '157px', '19px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lapiz15.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            type: 'image',
                            id: 'lapiz18',
                            opacity: '0',
                            rect: ['496px', '28px', '20px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lapiz18.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            type: 'image',
                            id: 'lapiz122',
                            opacity: '0',
                            rect: ['496px', '158px', '20px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lapiz12.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '678px', '284px']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: false,
                    data: [
                        [
                            "eid187",
                            "opacity",
                            389,
                            361,
                            "easeOutBounce",
                            "${lapiz16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid149",
                            "opacity",
                            2750,
                            250,
                            "easeOutBounce",
                            "${lapiz1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid163",
                            "opacity",
                            0,
                            389,
                            "easeOutBounce",
                            "${lapiz122}",
                            '0',
                            '1'
                        ],
                        [
                            "eid114",
                            "top",
                            1500,
                            250,
                            "easeOutBounce",
                            "${lapiz8}",
                            '76px',
                            '140px'
                        ],
                        [
                            "eid197",
                            "scaleY",
                            389,
                            361,
                            "easeOutBounce",
                            "${lapiz16}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid127",
                            "left",
                            2000,
                            250,
                            "easeOutBounce",
                            "${lapiz5}",
                            '221px',
                            '224px'
                        ],
                        [
                            "eid183",
                            "scaleX",
                            0,
                            389,
                            "easeOutBounce",
                            "${lapiz12}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid133",
                            "top",
                            2250,
                            250,
                            "easeOutBounce",
                            "${lapiz7}",
                            '68px',
                            '144px'
                        ],
                        [
                            "eid92",
                            "rotateZ",
                            750,
                            250,
                            "easeOutQuad",
                            "${lapiz12}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid94",
                            "rotateZ",
                            1000,
                            250,
                            "easeOutQuad",
                            "${lapiz12}",
                            '180deg',
                            '360deg'
                        ],
                        [
                            "eid137",
                            "top",
                            2500,
                            250,
                            "easeOutBounce",
                            "${lapiz4}",
                            '161px',
                            '254px'
                        ],
                        [
                            "eid165",
                            "opacity",
                            0,
                            389,
                            "easeOutBounce",
                            "${lapiz18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid97",
                            "rotateZ",
                            750,
                            250,
                            "easeOutQuad",
                            "${lapiz122}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid98",
                            "rotateZ",
                            1000,
                            250,
                            "easeOutQuad",
                            "${lapiz122}",
                            '180deg',
                            '360deg'
                        ],
                        [
                            "eid120",
                            "top",
                            1750,
                            250,
                            "easeOutBounce",
                            "${lapiz6}",
                            '215px',
                            '250px'
                        ],
                        [
                            "eid177",
                            "scaleY",
                            0,
                            389,
                            "easeOutBounce",
                            "${lapiz18}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid131",
                            "opacity",
                            2000,
                            250,
                            "easeOutBounce",
                            "${lapiz5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid139",
                            "opacity",
                            2500,
                            250,
                            "easeOutBounce",
                            "${lapiz4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid153",
                            "top",
                            3000,
                            250,
                            "easeOutBounce",
                            "${lapiz2}",
                            '68px',
                            '144px'
                        ],
                        [
                            "eid167",
                            "opacity",
                            0,
                            389,
                            "easeOutBounce",
                            "${lapiz17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid104",
                            "rotateZ",
                            2750,
                            500,
                            "easeOutQuad",
                            "${lapiz15}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid135",
                            "opacity",
                            2250,
                            250,
                            "easeOutBounce",
                            "${lapiz7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid157",
                            "top",
                            3250,
                            250,
                            "easeOutBounce",
                            "${lapiz3}",
                            '177px',
                            '255px'
                        ],
                        [
                            "eid209",
                            "scaleY",
                            389,
                            361,
                            "easeOutBounce",
                            "${lapiz14}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid191",
                            "opacity",
                            389,
                            361,
                            "easeOutBounce",
                            "${lapiz132}",
                            '0',
                            '1'
                        ],
                        [
                            "eid201",
                            "scaleY",
                            389,
                            361,
                            "easeOutBounce",
                            "${lapiz15}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid189",
                            "opacity",
                            389,
                            361,
                            "easeOutBounce",
                            "${lapiz15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid193",
                            "opacity",
                            389,
                            361,
                            "easeOutBounce",
                            "${lapiz14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid106",
                            "top",
                            1250,
                            250,
                            "easeOutBounce",
                            "${lapiz9}",
                            '9px',
                            '28px'
                        ],
                        [
                            "eid199",
                            "scaleX",
                            389,
                            361,
                            "easeOutBounce",
                            "${lapiz15}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid101",
                            "rotateZ",
                            1750,
                            500,
                            "easeOutQuad",
                            "${lapiz14}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid159",
                            "opacity",
                            3250,
                            250,
                            "easeOutBounce",
                            "${lapiz3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid169",
                            "opacity",
                            0,
                            389,
                            "easeOutBounce",
                            "${lapiz12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid207",
                            "scaleX",
                            389,
                            361,
                            "easeOutBounce",
                            "${lapiz14}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid179",
                            "scaleX",
                            0,
                            389,
                            "easeOutBounce",
                            "${lapiz17}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid99",
                            "rotateZ",
                            1250,
                            250,
                            "easeOutQuad",
                            "${lapiz18}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid100",
                            "rotateZ",
                            1500,
                            250,
                            "easeOutQuad",
                            "${lapiz18}",
                            '180deg',
                            '360deg'
                        ],
                        [
                            "eid175",
                            "scaleX",
                            0,
                            389,
                            "easeOutBounce",
                            "${lapiz18}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid195",
                            "scaleX",
                            389,
                            361,
                            "easeOutBounce",
                            "${lapiz16}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid155",
                            "opacity",
                            3000,
                            250,
                            "easeOutBounce",
                            "${lapiz2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid95",
                            "rotateZ",
                            1250,
                            250,
                            "easeOutQuad",
                            "${lapiz17}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid96",
                            "rotateZ",
                            1500,
                            250,
                            "easeOutQuad",
                            "${lapiz17}",
                            '180deg',
                            '360deg'
                        ],
                        [
                            "eid102",
                            "rotateZ",
                            1750,
                            500,
                            "easeOutQuad",
                            "${lapiz132}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid171",
                            "scaleX",
                            0,
                            389,
                            "easeOutBounce",
                            "${lapiz122}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid129",
                            "top",
                            2000,
                            250,
                            "easeOutBounce",
                            "${lapiz5}",
                            '-56px',
                            '28px'
                        ],
                        [
                            "eid203",
                            "scaleX",
                            389,
                            361,
                            "easeOutBounce",
                            "${lapiz132}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid116",
                            "opacity",
                            1500,
                            250,
                            "easeOutBounce",
                            "${lapiz8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid151",
                            "top",
                            2750,
                            250,
                            "easeOutBounce",
                            "${lapiz1}",
                            '-46px',
                            '28px'
                        ],
                        [
                            "eid205",
                            "scaleY",
                            389,
                            361,
                            "easeOutBounce",
                            "${lapiz132}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid173",
                            "scaleY",
                            0,
                            389,
                            "easeOutBounce",
                            "${lapiz122}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid185",
                            "scaleY",
                            0,
                            389,
                            "easeOutBounce",
                            "${lapiz12}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid103",
                            "rotateZ",
                            2750,
                            500,
                            "easeOutQuad",
                            "${lapiz16}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid122",
                            "opacity",
                            1750,
                            250,
                            "easeOutBounce",
                            "${lapiz6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid181",
                            "scaleY",
                            0,
                            389,
                            "easeOutBounce",
                            "${lapiz17}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid108",
                            "opacity",
                            1250,
                            250,
                            "easeOutBounce",
                            "${lapiz9}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simEraser": {
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
                            rect: ['-18px', '-13px', '185px', '128px', 'auto', 'auto'],
                            id: 'eraser',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/eraser.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['19px', '30px', '101px', '49px', 'auto', 'auto'],
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(82,146,152,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '102px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid211",
                            "opacity",
                            0,
                            2000,
                            "easeOutBounce",
                            "${eraser}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simContainer2": {
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
                            id: 'container2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '678px', '284px', 'auto', 'auto'],
                            fill: ['rgba(82,146,152,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '678px', '284px']
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
            "simLapizes2": {
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-3px', '0px', '678px', '284px', 'auto', 'auto'],
                            fill: ['rgba(82,146,152,0)']
                        },
                        {
                            userClass: 'box',
                            rect: ['374px', '-46px', '118px', '17px', 'auto', 'auto'],
                            id: 'lapiz1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lapiz1.png', '0px', '0px']
                        },
                        {
                            userClass: 'box',
                            rect: ['374px', '68px', '118px', '17px', 'auto', 'auto'],
                            id: 'lapiz2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lapiz2.png', '0px', '0px']
                        },
                        {
                            userClass: 'box',
                            rect: ['374px', '177px', '118px', '17px', 'auto', 'auto'],
                            id: 'lapiz3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lapiz3.png', '0px', '0px']
                        },
                        {
                            userClass: 'box',
                            rect: ['220px', '161px', '119px', '17px', 'auto', 'auto'],
                            id: 'lapiz4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lapiz4.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            type: 'image',
                            id: 'lapiz132',
                            opacity: '0',
                            rect: ['191px', '153px', '20px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lapiz13.png', '0px', '0px']
                        },
                        {
                            userClass: 'box',
                            rect: ['64px', '215px', '119px', '17px', 'auto', 'auto'],
                            id: 'lapiz6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lapiz6.png', '0px', '0px']
                        },
                        {
                            userClass: 'box',
                            rect: ['64px', '76px', '119px', '17px', 'auto', 'auto'],
                            id: 'lapiz8',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lapiz8.png', '0px', '0px']
                        },
                        {
                            userClass: 'box',
                            rect: ['64px', '9px', '119px', '19px', 'auto', 'auto'],
                            id: 'lapiz9',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lapiz9.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            type: 'image',
                            id: 'lapiz12',
                            opacity: '0',
                            rect: ['36px', '28px', '20px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lapiz12.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            type: 'image',
                            id: 'lapiz14',
                            opacity: '0',
                            rect: ['191px', '28px', '20px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lapiz14.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            type: 'image',
                            id: 'lapiz17',
                            opacity: '0',
                            rect: ['36px', '153px', '20px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lapiz17.png', '0px', '0px']
                        },
                        {
                            userClass: 'box',
                            rect: ['221px', '-56px', '118px', '17px', 'auto', 'auto'],
                            id: 'lapiz5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lapiz5.png', '0px', '0px']
                        },
                        {
                            userClass: 'box',
                            rect: ['220px', '68px', '119px', '17px', 'auto', 'auto'],
                            id: 'lapiz7',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lapiz7.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            type: 'image',
                            id: 'lapiz16',
                            opacity: '0',
                            rect: ['344px', '28px', '20px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lapiz16.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            type: 'image',
                            id: 'lapiz15',
                            opacity: '0',
                            rect: ['344px', '157px', '19px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lapiz15.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            type: 'image',
                            id: 'lapiz18',
                            opacity: '0',
                            rect: ['496px', '28px', '20px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lapiz18.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            type: 'image',
                            id: 'lapiz122',
                            opacity: '0',
                            rect: ['496px', '158px', '20px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lapiz12.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '678px', '284px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    data: [
                        [
                            "eid187",
                            "opacity",
                            0,
                            238,
                            "easeOutBounce",
                            "${lapiz16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid149",
                            "opacity",
                            707,
                            250,
                            "easeOutBounce",
                            "${lapiz1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid163",
                            "opacity",
                            0,
                            174,
                            "easeOutBounce",
                            "${lapiz122}",
                            '0',
                            '1'
                        ],
                        [
                            "eid114",
                            "top",
                            316,
                            142,
                            "easeOutBounce",
                            "${lapiz8}",
                            '76px',
                            '140px'
                        ],
                        [
                            "eid197",
                            "scaleY",
                            0,
                            238,
                            "easeOutBounce",
                            "${lapiz16}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid127",
                            "left",
                            0,
                            250,
                            "easeOutBounce",
                            "${lapiz5}",
                            '221px',
                            '224px'
                        ],
                        [
                            "eid183",
                            "scaleX",
                            0,
                            118,
                            "easeOutBounce",
                            "${lapiz12}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid133",
                            "top",
                            250,
                            250,
                            "easeOutBounce",
                            "${lapiz7}",
                            '68px',
                            '144px'
                        ],
                        [
                            "eid92",
                            "rotateZ",
                            113,
                            118,
                            "easeOutQuad",
                            "${lapiz12}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid94",
                            "rotateZ",
                            231,
                            118,
                            "easeOutQuad",
                            "${lapiz12}",
                            '180deg',
                            '360deg'
                        ],
                        [
                            "eid137",
                            "top",
                            457,
                            250,
                            "easeOutBounce",
                            "${lapiz4}",
                            '161px',
                            '254px'
                        ],
                        [
                            "eid165",
                            "opacity",
                            0,
                            174,
                            "easeOutBounce",
                            "${lapiz18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid97",
                            "rotateZ",
                            349,
                            125,
                            "easeOutQuad",
                            "${lapiz122}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid98",
                            "rotateZ",
                            474,
                            125,
                            "easeOutQuad",
                            "${lapiz122}",
                            '180deg',
                            '360deg'
                        ],
                        [
                            "eid120",
                            "top",
                            457,
                            142,
                            "easeOutBounce",
                            "${lapiz6}",
                            '215px',
                            '250px'
                        ],
                        [
                            "eid177",
                            "scaleY",
                            0,
                            174,
                            "easeOutBounce",
                            "${lapiz18}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid131",
                            "opacity",
                            0,
                            250,
                            "easeOutBounce",
                            "${lapiz5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid139",
                            "opacity",
                            457,
                            250,
                            "easeOutBounce",
                            "${lapiz4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid153",
                            "top",
                            707,
                            250,
                            "easeOutBounce",
                            "${lapiz2}",
                            '68px',
                            '144px'
                        ],
                        [
                            "eid167",
                            "opacity",
                            0,
                            250,
                            "easeOutBounce",
                            "${lapiz17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid104",
                            "rotateZ",
                            750,
                            500,
                            "easeOutQuad",
                            "${lapiz15}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid135",
                            "opacity",
                            250,
                            250,
                            "easeOutBounce",
                            "${lapiz7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid157",
                            "top",
                            707,
                            250,
                            "easeOutBounce",
                            "${lapiz3}",
                            '177px',
                            '255px'
                        ],
                        [
                            "eid108",
                            "opacity",
                            174,
                            142,
                            "easeOutBounce",
                            "${lapiz9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid191",
                            "opacity",
                            0,
                            238,
                            "easeOutBounce",
                            "${lapiz132}",
                            '0',
                            '1'
                        ],
                        [
                            "eid181",
                            "scaleY",
                            0,
                            250,
                            "easeOutBounce",
                            "${lapiz17}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid159",
                            "opacity",
                            707,
                            250,
                            "easeOutBounce",
                            "${lapiz3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid193",
                            "opacity",
                            0,
                            238,
                            "easeOutBounce",
                            "${lapiz14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid103",
                            "rotateZ",
                            750,
                            500,
                            "easeOutQuad",
                            "${lapiz16}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid199",
                            "scaleX",
                            0,
                            238,
                            "easeOutBounce",
                            "${lapiz15}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid189",
                            "opacity",
                            0,
                            238,
                            "easeOutBounce",
                            "${lapiz15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid207",
                            "scaleX",
                            0,
                            238,
                            "easeOutBounce",
                            "${lapiz14}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid179",
                            "scaleX",
                            0,
                            250,
                            "easeOutBounce",
                            "${lapiz17}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid106",
                            "top",
                            174,
                            142,
                            "easeOutBounce",
                            "${lapiz9}",
                            '9px',
                            '28px'
                        ],
                        [
                            "eid205",
                            "scaleY",
                            0,
                            238,
                            "easeOutBounce",
                            "${lapiz132}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid99",
                            "rotateZ",
                            349,
                            125,
                            "easeOutQuad",
                            "${lapiz18}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid100",
                            "rotateZ",
                            474,
                            125,
                            "easeOutQuad",
                            "${lapiz18}",
                            '180deg',
                            '360deg'
                        ],
                        [
                            "eid151",
                            "top",
                            707,
                            250,
                            "easeOutBounce",
                            "${lapiz1}",
                            '-46px',
                            '28px'
                        ],
                        [
                            "eid209",
                            "scaleY",
                            0,
                            238,
                            "easeOutBounce",
                            "${lapiz14}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid155",
                            "opacity",
                            707,
                            250,
                            "easeOutBounce",
                            "${lapiz2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid116",
                            "opacity",
                            316,
                            142,
                            "easeOutBounce",
                            "${lapiz8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid203",
                            "scaleX",
                            0,
                            238,
                            "easeOutBounce",
                            "${lapiz132}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid95",
                            "rotateZ",
                            457,
                            127,
                            "easeOutQuad",
                            "${lapiz17}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid96",
                            "rotateZ",
                            585,
                            127,
                            "easeOutQuad",
                            "${lapiz17}",
                            '180deg',
                            '360deg'
                        ],
                        [
                            "eid175",
                            "scaleX",
                            0,
                            174,
                            "easeOutBounce",
                            "${lapiz18}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid129",
                            "top",
                            0,
                            250,
                            "easeOutBounce",
                            "${lapiz5}",
                            '-56px',
                            '28px'
                        ],
                        [
                            "eid171",
                            "scaleX",
                            0,
                            174,
                            "easeOutBounce",
                            "${lapiz122}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid102",
                            "rotateZ",
                            457,
                            293,
                            "easeOutQuad",
                            "${lapiz132}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid195",
                            "scaleX",
                            0,
                            238,
                            "easeOutBounce",
                            "${lapiz16}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid173",
                            "scaleY",
                            0,
                            174,
                            "easeOutBounce",
                            "${lapiz122}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid185",
                            "scaleY",
                            0,
                            118,
                            "easeOutBounce",
                            "${lapiz12}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid169",
                            "opacity",
                            0,
                            118,
                            "easeOutBounce",
                            "${lapiz12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid122",
                            "opacity",
                            457,
                            142,
                            "easeOutBounce",
                            "${lapiz6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid101",
                            "rotateZ",
                            457,
                            401,
                            "easeOutQuad",
                            "${lapiz14}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid201",
                            "scaleY",
                            0,
                            238,
                            "easeOutBounce",
                            "${lapiz15}",
                            '0.5',
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
                            rect: ['76px', '30px', 'auto', '76px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'left',
                            id: 'Text2',
                            opacity: '1',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255);\">¡</span><span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500;\">Hola! Pedro está intentando formar 3 cuadros con</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500;\">&nbsp;estos lápices, pero necesita de tu ayuda.</span></p><p style=\"margin: 0px;\"><span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500;\"></span></p><p style=\"margin: 0px;\"><span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500;\">​</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\"></span></p>',
                            type: 'text'
                        },
                        {
                            rect: ['-492px', '30px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 500; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">Él debe quitar 5 lápices para lograr </p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 500; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">resolver el problema.&nbsp;</p>',
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
                    duration: 5000,
                    autoPlay: false,
                    labels: {
                        "endF": 3000,
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
                            1000,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid223",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${Text2}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid224",
                            "top",
                            2150,
                            0,
                            "linear",
                            "${Text2}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid24",
                            "width",
                            250,
                            500,
                            "easeInQuad",
                            "${Rectangle}",
                            '13px',
                            '686px'
                        ],
                        [
                            "eid26",
                            "width",
                            250,
                            500,
                            "easeInQuad",
                            "${Rectangle2}",
                            '13px',
                            '686px'
                        ],
                        [
                            "eid227",
                            "left",
                            3000,
                            1000,
                            "easeOutElastic",
                            "${Text}",
                            '-492px',
                            '148px'
                        ],
                        [
                            "eid216",
                            "left",
                            0,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '-658px',
                            '-658px'
                        ],
                        [
                            "eid35",
                            "left",
                            1000,
                            1150,
                            "easeOutElastic",
                            "${Text2}",
                            '-508px',
                            '76px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Pem171_edgeActions.js");
})("EDGE-429139117");
