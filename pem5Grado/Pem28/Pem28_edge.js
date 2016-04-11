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
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo.png",'0px','0px']
                        },
                        {
                            id: 'relog',
                            type: 'image',
                            rect: ['790px', '9px', '150px', '150px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)","../../images/relog.png",'0px','0px']
                        },
                        {
                            id: 'clock',
                            type: 'rect',
                            rect: ['780px', '0px', '200px', '200px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'estante',
                            type: 'image',
                            rect: ['516px', '149px', '549px', '607px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"estante.png",'0px','0px']
                        },
                        {
                            id: 'container',
                            type: 'rect',
                            rect: ['52px', '42px', '972px', '714px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'simEstante',
                            symbolName: 'simEstante',
                            type: 'rect',
                            rect: ['542', '162', '460', '460', 'auto', 'auto']
                        },
                        {
                            id: 'simCesto',
                            symbolName: 'simCesto',
                            type: 'rect',
                            rect: ['0', '63', '542', '375', 'auto', 'auto']
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
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid155",
                            "top",
                            500,
                            0,
                            "linear",
                            "${relog}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid157",
                            "left",
                            500,
                            0,
                            "linear",
                            "${relog}",
                            '790px',
                            '790px'
                        ],
                        [
                            "eid146",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${estante}",
                            '0',
                            '1'
                        ],
                        [
                            "eid147",
                            "width",
                            500,
                            0,
                            "linear",
                            "${relog}",
                            '150px',
                            '150px'
                        ],
                        [
                            "eid142",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${relog}",
                            '0',
                            '1'
                        ],
                        [
                            "eid148",
                            "height",
                            500,
                            0,
                            "linear",
                            "${relog}",
                            '150px',
                            '150px'
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
                            type: 'rect',
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            id: 'Pem28_41',
                            symbolName: 'Pem28_41',
                            opacity: '0',
                            rect: ['58', '63px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            id: 'Pem28_40',
                            symbolName: 'Pem28_40',
                            opacity: '0',
                            rect: ['161', '62px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            id: 'Pem28_39',
                            symbolName: 'Pem28_39',
                            opacity: '0',
                            rect: ['275px', '55px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            id: 'Pem28_38',
                            symbolName: 'Pem28_38',
                            opacity: '0',
                            rect: ['362px', '55px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            id: 'Pem28_37',
                            symbolName: 'Pem28_37',
                            opacity: '0',
                            rect: ['65px', '133px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            id: 'Pem28_36',
                            symbolName: 'Pem28_36',
                            opacity: '0',
                            rect: ['205px', '178px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            id: 'Pem28_35',
                            symbolName: 'Pem28_35',
                            opacity: '0',
                            rect: ['330px', '180px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            userClass: 'box',
                            id: 'Pem28_34',
                            symbolName: 'Pem28_34',
                            opacity: '0',
                            rect: ['370px', '287', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            userClass: 'box',
                            id: 'Pem28_33',
                            symbolName: 'Pem28_33',
                            opacity: '0',
                            rect: ['370px', '275px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            userClass: 'box',
                            id: 'Pem28_32',
                            symbolName: 'Pem28_32',
                            opacity: '0',
                            rect: ['160px', '265px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            userClass: 'box',
                            id: 'Pem28_31',
                            symbolName: 'Pem28_31',
                            opacity: '0',
                            rect: ['471px', '300px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            userClass: 'box',
                            id: 'Pem28_30',
                            symbolName: 'Pem28_30',
                            opacity: '0',
                            rect: ['300px', '255px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.5', '0.5']],
                            userClass: 'box',
                            id: 'Pem28_29',
                            symbolName: 'Pem28_29',
                            opacity: '0',
                            rect: ['367px', '296px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            userClass: 'box',
                            id: 'Pem28_28',
                            symbolName: 'Pem28_28',
                            opacity: '0',
                            rect: ['35px', '371px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            userClass: 'box',
                            id: 'Pem28_27',
                            symbolName: 'Pem28_27',
                            opacity: '0',
                            rect: ['160px', '378px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            userClass: 'box',
                            id: 'Pem28_26',
                            symbolName: 'Pem28_26',
                            opacity: '0',
                            rect: ['-5px', '380px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            userClass: 'box',
                            id: 'Pem28_22',
                            symbolName: 'Pem28_22',
                            opacity: '0',
                            rect: ['15px', '380', '63', '64', 'auto', 'auto']
                        },
                        {
                            id: 'simMostrador',
                            symbolName: 'simMostrador',
                            rect: ['-522', '290', null, null, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '460px', '460px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid315",
                            "top",
                            900,
                            0,
                            "easeOutElastic",
                            "${Pem28_36}",
                            '178px',
                            '178px'
                        ],
                        [
                            "eid303",
                            "top",
                            900,
                            600,
                            "easeOutElastic",
                            "${Pem28_35}",
                            '180px',
                            '161px'
                        ],
                        [
                            "eid250",
                            "left",
                            600,
                            600,
                            "easeOutCubic",
                            "${Pem28_27}",
                            '-190px',
                            '160px'
                        ],
                        [
                            "eid289",
                            "left",
                            300,
                            600,
                            "easeOutCubic",
                            "${Pem28_33}",
                            '370px',
                            '99px'
                        ],
                        [
                            "eid341",
                            "scaleX",
                            400,
                            500,
                            "easeOutElastic",
                            "${Pem28_39}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid281",
                            "opacity",
                            600,
                            700,
                            "easeOutCubic",
                            "${Pem28_32}",
                            '0',
                            '1'
                        ],
                        [
                            "eid288",
                            "opacity",
                            300,
                            600,
                            "easeOutCubic",
                            "${Pem28_33}",
                            '0',
                            '1'
                        ],
                        [
                            "eid258",
                            "opacity",
                            900,
                            600,
                            "easeOutElastic",
                            "${Pem28_29}",
                            '0',
                            '1'
                        ],
                        [
                            "eid300",
                            "scaleX",
                            900,
                            600,
                            "easeOutElastic",
                            "${Pem28_35}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid279",
                            "top",
                            600,
                            0,
                            "easeOutCubic",
                            "${Pem28_32}",
                            '265px',
                            '265px'
                        ],
                        [
                            "eid325",
                            "top",
                            0,
                            600,
                            "easeOutElastic",
                            "${Pem28_37}",
                            '163px',
                            '133px'
                        ],
                        [
                            "eid351",
                            "scaleY",
                            249,
                            551,
                            "easeOutBounce",
                            "${Pem28_40}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid294",
                            "left",
                            0,
                            600,
                            "easeOutCubic",
                            "${Pem28_34}",
                            '370px',
                            '30px'
                        ],
                        [
                            "eid302",
                            "scaleY",
                            900,
                            600,
                            "easeOutElastic",
                            "${Pem28_35}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid237",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Pem28_22}",
                            '15px',
                            '374px'
                        ],
                        [
                            "eid334",
                            "scaleY",
                            900,
                            600,
                            "easeOutElastic",
                            "${Pem28_38}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid256",
                            "left",
                            900,
                            600,
                            "easeOutCubic",
                            "${Pem28_28}",
                            '-157px',
                            '35px'
                        ],
                        [
                            "eid272",
                            "top",
                            700,
                            0,
                            "easeOutCubic",
                            "${Pem28_31}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid255",
                            "opacity",
                            900,
                            600,
                            "easeOutCubic",
                            "${Pem28_28}",
                            '0',
                            '1'
                        ],
                        [
                            "eid360",
                            "scaleX",
                            0,
                            600,
                            "easeOutBounce",
                            "${Pem28_41}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid247",
                            "opacity",
                            249,
                            551,
                            "easeOutCubic",
                            "${Pem28_26}",
                            '0',
                            '1'
                        ],
                        [
                            "eid239",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Pem28_22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid293",
                            "opacity",
                            0,
                            600,
                            "easeOutCubic",
                            "${Pem28_34}",
                            '0',
                            '1'
                        ],
                        [
                            "eid275",
                            "left",
                            700,
                            600,
                            "easeOutCubic",
                            "${Pem28_31}",
                            '471px',
                            '241px'
                        ],
                        [
                            "eid282",
                            "left",
                            600,
                            700,
                            "easeOutCubic",
                            "${Pem28_32}",
                            '391px',
                            '160px'
                        ],
                        [
                            "eid245",
                            "left",
                            249,
                            551,
                            "easeOutCubic",
                            "${Pem28_26}",
                            '-5px',
                            '265px'
                        ],
                        [
                            "eid260",
                            "scaleX",
                            900,
                            600,
                            "easeOutElastic",
                            "${Pem28_29}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid349",
                            "scaleX",
                            249,
                            551,
                            "easeOutBounce",
                            "${Pem28_40}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid320",
                            "opacity",
                            0,
                            600,
                            "easeOutElastic",
                            "${Pem28_37}",
                            '0',
                            '1'
                        ],
                        [
                            "eid298",
                            "opacity",
                            900,
                            600,
                            "easeOutElastic",
                            "${Pem28_35}",
                            '0',
                            '1'
                        ],
                        [
                            "eid356",
                            "top",
                            0,
                            0,
                            "easeOutElastic",
                            "${Pem28_41}",
                            '63px',
                            '63px'
                        ],
                        [
                            "eid286",
                            "top",
                            300,
                            0,
                            "easeOutCubic",
                            "${Pem28_33}",
                            '275px',
                            '275px'
                        ],
                        [
                            "eid309",
                            "opacity",
                            300,
                            600,
                            "easeOutElastic",
                            "${Pem28_36}",
                            '0',
                            '1'
                        ],
                        [
                            "eid274",
                            "opacity",
                            700,
                            600,
                            "easeOutCubic",
                            "${Pem28_31}",
                            '0',
                            '1'
                        ],
                        [
                            "eid339",
                            "opacity",
                            400,
                            500,
                            "easeOutElastic",
                            "${Pem28_39}",
                            '0',
                            '1'
                        ],
                        [
                            "eid311",
                            "scaleX",
                            300,
                            600,
                            "easeOutElastic",
                            "${Pem28_36}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid313",
                            "scaleY",
                            300,
                            600,
                            "easeOutElastic",
                            "${Pem28_36}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid358",
                            "opacity",
                            0,
                            600,
                            "easeOutBounce",
                            "${Pem28_41}",
                            '0',
                            '1'
                        ],
                        [
                            "eid347",
                            "opacity",
                            249,
                            551,
                            "easeOutBounce",
                            "${Pem28_40}",
                            '0',
                            '1'
                        ],
                        [
                            "eid264",
                            "opacity",
                            800,
                            600,
                            "easeOutCubic",
                            "${Pem28_30}",
                            '0',
                            '1'
                        ],
                        [
                            "eid345",
                            "top",
                            249,
                            0,
                            "easeOutElastic",
                            "${Pem28_40}",
                            '62px',
                            '62px'
                        ],
                        [
                            "eid267",
                            "top",
                            800,
                            0,
                            "easeOutElastic",
                            "${Pem28_30}",
                            '255px',
                            '255px'
                        ],
                        [
                            "eid268",
                            "top",
                            1400,
                            0,
                            "easeOutElastic",
                            "${Pem28_30}",
                            '255px',
                            '255px'
                        ],
                        [
                            "eid265",
                            "left",
                            800,
                            600,
                            "easeOutCubic",
                            "${Pem28_30}",
                            '490px',
                            '300px'
                        ],
                        [
                            "eid343",
                            "scaleY",
                            400,
                            500,
                            "easeOutElastic",
                            "${Pem28_39}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid324",
                            "scaleY",
                            0,
                            600,
                            "easeOutElastic",
                            "${Pem28_37}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid330",
                            "opacity",
                            900,
                            600,
                            "easeOutElastic",
                            "${Pem28_38}",
                            '0',
                            '1'
                        ],
                        [
                            "eid322",
                            "scaleX",
                            0,
                            600,
                            "easeOutElastic",
                            "${Pem28_37}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid362",
                            "scaleY",
                            0,
                            600,
                            "easeOutBounce",
                            "${Pem28_41}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid262",
                            "scaleY",
                            900,
                            600,
                            "easeOutElastic",
                            "${Pem28_29}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid327",
                            "left",
                            900,
                            0,
                            "easeOutElastic",
                            "${Pem28_38}",
                            '362px',
                            '362px'
                        ],
                        [
                            "eid326",
                            "left",
                            0,
                            600,
                            "easeOutElastic",
                            "${Pem28_37}",
                            '36px',
                            '65px'
                        ],
                        [
                            "eid328",
                            "top",
                            900,
                            0,
                            "easeOutElastic",
                            "${Pem28_38}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid332",
                            "scaleX",
                            900,
                            600,
                            "easeOutElastic",
                            "${Pem28_38}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid249",
                            "opacity",
                            600,
                            600,
                            "easeOutCubic",
                            "${Pem28_27}",
                            '0',
                            '1'
                        ],
                        [
                            "eid304",
                            "left",
                            900,
                            600,
                            "easeOutElastic",
                            "${Pem28_35}",
                            '330px',
                            '346px'
                        ]
                    ]
                }
            },
            "simMostrador": {
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
                            userClass: 'box1',
                            id: 'Pem28_49',
                            symbolName: 'Pem28_49',
                            opacity: '0',
                            rect: ['45', '-32px', undefined, undefined, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            userClass: 'box1',
                            id: 'Pem28_48',
                            symbolName: 'Pem28_48',
                            opacity: '0',
                            rect: ['130px', '-70px', undefined, undefined, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            userClass: 'box1',
                            id: 'Pem28_47',
                            symbolName: 'Pem28_47',
                            opacity: '0',
                            rect: ['245px', '25px', undefined, undefined, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            userClass: 'box1',
                            id: 'Pem28_46',
                            symbolName: 'Pem28_46',
                            opacity: '0',
                            rect: ['350px', '-110', undefined, undefined, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            userClass: 'box1',
                            id: 'Pem28_45',
                            symbolName: 'Pem28_45',
                            opacity: '0',
                            rect: ['45', '220px', undefined, undefined, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            userClass: 'box1',
                            id: 'Pem28_44',
                            symbolName: 'Pem28_44',
                            opacity: '0',
                            rect: ['130px', '216px', undefined, undefined, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            userClass: 'box1',
                            id: 'Pem28_43',
                            symbolName: 'Pem28_43',
                            opacity: '0',
                            rect: ['251', '232', undefined, undefined, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            userClass: 'box1',
                            id: 'Pem28_42',
                            symbolName: 'Pem28_42',
                            opacity: '0',
                            rect: ['350', '232', undefined, undefined, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '440px', '180px']
                        }
                    }
                },
                timeline: {
                    duration: 1600,
                    autoPlay: false,
                    data: [
                        [
                            "eid387",
                            "left",
                            600,
                            0,
                            "easeOutBounce",
                            "${Pem28_47}",
                            '245px',
                            '245px'
                        ],
                        [
                            "eid401",
                            "left",
                            0,
                            600,
                            "easeOutBounce",
                            "${Pem28_49}",
                            '45px',
                            '41px'
                        ],
                        [
                            "eid377",
                            "top",
                            0,
                            600,
                            "easeOutBounce",
                            "${Pem28_45}",
                            '220px',
                            '122px'
                        ],
                        [
                            "eid399",
                            "opacity",
                            0,
                            600,
                            "easeOutBounce",
                            "${Pem28_49}",
                            '0',
                            '1'
                        ],
                        [
                            "eid381",
                            "top",
                            1000,
                            600,
                            "easeOutBounce",
                            "${Pem28_46}",
                            '-110px',
                            '20px'
                        ],
                        [
                            "eid383",
                            "left",
                            1000,
                            0,
                            "easeOutBounce",
                            "${Pem28_46}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid384",
                            "left",
                            1600,
                            0,
                            "easeOutBounce",
                            "${Pem28_46}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid395",
                            "opacity",
                            300,
                            600,
                            "easeOutBounce",
                            "${Pem28_48}",
                            '0',
                            '1'
                        ],
                        [
                            "eid393",
                            "left",
                            300,
                            0,
                            "easeOutBounce",
                            "${Pem28_48}",
                            '130px',
                            '130px'
                        ],
                        [
                            "eid396",
                            "top",
                            300,
                            600,
                            "easeOutBounce",
                            "${Pem28_48}",
                            '-70px',
                            '41px'
                        ],
                        [
                            "eid390",
                            "top",
                            600,
                            600,
                            "easeOutBounce",
                            "${Pem28_47}",
                            '-110px',
                            '25px'
                        ],
                        [
                            "eid389",
                            "opacity",
                            600,
                            600,
                            "easeOutBounce",
                            "${Pem28_47}",
                            '0',
                            '1'
                        ],
                        [
                            "eid367",
                            "opacity",
                            600,
                            600,
                            "easeOutBounce",
                            "${Pem28_43}",
                            '0',
                            '1'
                        ],
                        [
                            "eid372",
                            "top",
                            300,
                            600,
                            "easeOutBounce",
                            "${Pem28_44}",
                            '216px',
                            '123px'
                        ],
                        [
                            "eid364",
                            "opacity",
                            900,
                            600,
                            "easeOutBounce",
                            "${Pem28_42}",
                            '0',
                            '1'
                        ],
                        [
                            "eid365",
                            "top",
                            900,
                            600,
                            "easeOutBounce",
                            "${Pem28_42}",
                            '232px',
                            '115px'
                        ],
                        [
                            "eid368",
                            "top",
                            600,
                            600,
                            "easeOutBounce",
                            "${Pem28_43}",
                            '232px',
                            '106px'
                        ],
                        [
                            "eid400",
                            "top",
                            0,
                            600,
                            "easeOutBounce",
                            "${Pem28_49}",
                            '-32px',
                            '22px'
                        ],
                        [
                            "eid380",
                            "opacity",
                            1000,
                            600,
                            "easeOutBounce",
                            "${Pem28_46}",
                            '0',
                            '1'
                        ],
                        [
                            "eid376",
                            "opacity",
                            0,
                            600,
                            "easeOutBounce",
                            "${Pem28_45}",
                            '0',
                            '1'
                        ],
                        [
                            "eid373",
                            "left",
                            300,
                            600,
                            "easeOutBounce",
                            "${Pem28_44}",
                            '109px',
                            '130px'
                        ],
                        [
                            "eid371",
                            "opacity",
                            300,
                            600,
                            "easeOutBounce",
                            "${Pem28_44}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "simTest2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'canasta1',
                            type: 'image',
                            rect: ['-240px', '44px', '211px', '174px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/canasta.png', '0px', '0px']
                        },
                        {
                            id: 'canasta2',
                            type: 'image',
                            rect: ['289px', '44px', '211px', '174px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/canasta.png', '0px', '0px']
                        },
                        {
                            id: 'canasta3',
                            type: 'image',
                            rect: ['80px', '228px', '211px', '174px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/canasta.png', '0px', '0px']
                        },
                        {
                            id: 'canasta4',
                            type: 'image',
                            rect: ['289px', '228px', '211px', '174px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/canasta.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '270px', '244px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid209",
                            "left",
                            0,
                            500,
                            "easeOutQuart",
                            "${canasta1}",
                            '-240px',
                            '80px'
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
                            text: '<p style=\"margin: 0px;\">​Ir al Menú Anterior</p>',
                            rect: ['-23px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
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
                            text: '<p style=\"margin: 0px;\">​Ir al Menú Principal</p>',
                            rect: ['-26px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
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
                            text: '<p style=\"margin: 0px;\">​Encender/Apagar Sonido</p>',
                            rect: ['71px', '17px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
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
                            text: '<p style=\"margin: 0px;\">​Intrucciones</p>',
                            rect: ['9px', '16px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
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
            "simCesto": {
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
                            id: 'canasta2',
                            rect: ['-226px', '-21px', '211px', '174px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/canasta.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'canasta3',
                            rect: ['289px', '-221px', '211px', '174px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/canasta.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'canasta4',
                            rect: ['-220px', '169px', '211px', '174px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/canasta.png', '0px', '0px']
                        },
                        {
                            rect: ['289px', '169px', '211px', '174px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'canasta5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/canasta.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '542px', '375px']
                        }
                    }
                },
                timeline: {
                    duration: 1100,
                    autoPlay: false,
                    data: [
                        [
                            "eid213",
                            "left",
                            0,
                            500,
                            "easeOutQuart",
                            "${canasta2}",
                            '-226px',
                            '78px'
                        ],
                        [
                            "eid224",
                            "left",
                            500,
                            500,
                            "easeOutQuart",
                            "${canasta4}",
                            '-220px',
                            '78px'
                        ],
                        [
                            "eid223",
                            "scaleY",
                            600,
                            500,
                            "easeOutQuart",
                            "${canasta5}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid215",
                            "top",
                            200,
                            500,
                            "easeOutQuart",
                            "${canasta3}",
                            '-221px',
                            '-21px'
                        ],
                        [
                            "eid219",
                            "opacity",
                            600,
                            500,
                            "easeOutQuart",
                            "${canasta5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid221",
                            "scaleX",
                            600,
                            500,
                            "easeOutQuart",
                            "${canasta5}",
                            '0.5',
                            '1'
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
                            rect: ['-666px', '17px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500;\">Verifica los precios en la pulpería, sólo debes de arrastrar</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500;\">​los productos según la cantidad de dinero que</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500;\"> aparece en cada canasta.</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 500; color: rgb(255, 255, 255);\"></span></p>',
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
                    duration: 3205,
                    autoPlay: false,
                    labels: {
                        "end": 3205
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
                            955,
                            0,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid225",
                            "top",
                            955,
                            0,
                            "easeInQuad",
                            "${Text2}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid226",
                            "top",
                            2105,
                            0,
                            "easeInQuad",
                            "${Text2}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid24",
                            "width",
                            205,
                            500,
                            "easeInQuad",
                            "${Rectangle}",
                            '13px',
                            '686px'
                        ],
                        [
                            "eid35",
                            "left",
                            955,
                            1150,
                            "easeOutElastic",
                            "${Text2}",
                            '-666px',
                            '49px'
                        ],
                        [
                            "eid26",
                            "width",
                            205,
                            500,
                            "easeInQuad",
                            "${Rectangle2}",
                            '13px',
                            '686px'
                        ]
                    ]
                }
            },
            "Pem28_22": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '63px', '64px', 'auto', 'auto'],
                            userClass: '',
                            id: 'Pem28_22',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem28_22.png', '0px', '0px']
                        },
                        {
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '1',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                rect: ['50px', '25px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Pollo</span></p>',
                                align: 'left',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_26": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-7px', '0px', '79px', '63px', 'auto', 'auto'],
                            id: 'Pem28_21',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem28_21.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            id: 'Group',
                            opacity: '1',
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                type: 'rect',
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'left',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-family:Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Carne</span></p>',
                                rect: ['50px', '25px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_27": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-46px', '-6px', '130px', '83px', 'auto', 'auto'],
                            id: 'pescado_19',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pescado_19.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            id: 'Group',
                            opacity: '1',
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                type: 'rect',
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'left',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Pescado</span></p>',
                                rect: ['36px', '25px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_28": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-14px', '0px', '80px', '72px', 'auto', 'auto'],
                            id: 'objeto4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/objeto4.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            id: 'Group',
                            opacity: '1',
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                type: 'rect',
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'left',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Naranja</span></p>',
                                rect: ['36px', '25px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_29": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['12px', '12px', '46px', '39px', 'auto', 'auto'],
                            id: 'Pem28_23',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem28_23.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            id: 'Group',
                            opacity: '1',
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                type: 'rect',
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'left',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Conos</span></p>',
                                rect: ['45px', '24px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_30": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['21px', '6px', '28px', '89px', 'auto', 'auto'],
                            id: 'Pem28_20',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem28_20.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            id: 'Group',
                            opacity: '1',
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                type: 'rect',
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'left',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Salsa Tomate</span></p>',
                                rect: ['11px', '24px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_31": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1px', '12px', '67px', '40px', 'auto', 'auto'],
                            id: 'objeto5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/objeto5.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            id: 'Group',
                            opacity: '1',
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                type: 'rect',
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'left',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Peras</span></p>',
                                rect: ['50px', '24px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_32": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['17px', '6px', '37px', '77px', 'auto', 'auto'],
                            id: 'objeto1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/objeto1.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            id: 'Group',
                            opacity: '1',
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                type: 'rect',
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'left',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Galletas</span></p>',
                                rect: ['40px', '24px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_33": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1px', '6px', '61px', '69px', 'auto', 'auto'],
                            id: 'objeto2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/objeto2.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            id: 'Group',
                            opacity: '1',
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                type: 'rect',
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'left',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Pan</span></p>',
                                rect: ['60px', '24px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_34": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1px', '-1px', '61px', '66px', 'auto', 'auto'],
                            id: 'objeto3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/objeto3.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            id: 'Group',
                            opacity: '1',
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                type: 'rect',
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'left',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Manzana Verde</span></p>',
                                rect: ['2px', '24px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_35": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-20px', '0px', '104px', '75px', 'auto', 'auto'],
                            id: 'Pem28_24',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem28_24.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            id: 'Group',
                            opacity: '1',
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                type: 'rect',
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'left',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Leche</span></p>',
                                rect: ['50px', '24px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_36": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-13px', '4px', '90px', '55px', 'auto', 'auto'],
                            id: 'Pem28_10',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem28_10.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            id: 'Group',
                            opacity: '1',
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                type: 'rect',
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'left',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Pan</span></p>',
                                rect: ['50px', '24px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_37": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-29px', '4px', '125px', '98px', 'auto', 'auto'],
                            id: 'Pem28_272',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem28_27.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            id: 'Group',
                            opacity: '1',
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                type: 'rect',
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'left',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\"><span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Leche</span></p>',
                                rect: ['45px', '24px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_38": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-8px', '6px', '79px', '52px', 'auto', 'auto'],
                            id: 'Pem28_282',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem28_28.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            id: 'Group',
                            opacity: '1',
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                type: 'rect',
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'left',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\"><span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Vaso de Café</span></p>',
                                rect: ['10px', '24px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_39": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-8px', '6px', '79px', '52px', 'auto', 'auto'],
                            id: 'Pem28_282',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem28_28.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            id: 'Group',
                            opacity: '1',
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                type: 'rect',
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'left',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\"><span style=\"font-family:Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Vaso de Café</span></p>',
                                rect: ['10px', '24px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_40": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-18px', '12px', '100px', '39px', 'auto', 'auto'],
                            id: 'Pem28_25',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem28_25.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            id: 'Group',
                            opacity: '1',
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                type: 'rect',
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'left',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\"><span style=\"font-family:Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Huevos</span></p>',
                                rect: ['35px', '24px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_41": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-18px', '12px', '100px', '39px', 'auto', 'auto'],
                            id: 'Pem28_25',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pem28_25.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            id: 'Group',
                            opacity: '1',
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                type: 'rect',
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'left',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\"><span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Huevos</span></p>',
                                rect: ['35px', '24px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_42": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Pem28_18',
                            type: 'image',
                            rect: ['0px', '2px', '68px', '62px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pem28_18.png', '0px', '0px']
                        },
                        {
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '1',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                rect: ['40px', '24px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\"><span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Brócoli</span></p>',
                                align: 'left',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_43": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Pem28_17',
                            type: 'image',
                            rect: ['-7px', '-3px', '74px', '74px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pem28_17.png', '0px', '0px']
                        },
                        {
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '1',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                rect: ['28px', '24px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\"><span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Berenjena</span></p>',
                                align: 'left',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_44": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Pem28_16',
                            type: 'image',
                            rect: ['-21px', '0px', '115px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pem28_16.png', '0px', '0px']
                        },
                        {
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '1',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                rect: ['28px', '24px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\"><span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Zanahoria</span></p>',
                                align: 'left',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_45": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Pem28_13',
                            type: 'image',
                            rect: ['2px', '3px', '59px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pem28_13.png', '0px', '0px']
                        },
                        {
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '1',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                rect: ['28px', '24px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\"><span style=\"font-family:Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Manzana</span></p>',
                                align: 'left',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_46": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Pem28_15',
                            type: 'image',
                            rect: ['-3px', '-3px', '69px', '69px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pem28_15.png', '0px', '0px']
                        },
                        {
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '1',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                rect: ['40px', '24px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\"><span style=\"font-family:Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Sandía</span></p>',
                                align: 'left',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_47": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Pem28_14',
                            type: 'image',
                            rect: ['-30px', '-3px', '138px', '65px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pem28_14.png', '0px', '0px']
                        },
                        {
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '1',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                rect: ['50px', '24px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\"><span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Piña</span></p>',
                                align: 'left',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_48": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Pem28_122',
                            type: 'image',
                            rect: ['-22px', '0px', '107px', '45px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pem28_12.png', '0px', '0px']
                        },
                        {
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '1',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                rect: ['32px', '24px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\"><span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Tomates</span></p>',
                                align: 'left',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Pem28_49": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'objeto6',
                            type: 'image',
                            rect: ['5px', '0px', '58px', '64px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/objeto6.png', '0px', '0px']
                        },
                        {
                            rect: ['-40px', '-121px', '143', '65', 'auto', 'auto'],
                            id: 'Group',
                            opacity: '1',
                            transform: [[], [], [], ['0', '0']],
                            type: 'group',
                            c: [
                            {
                                rect: ['34px', '18px', '63px', '29px', 'auto', 'auto'],
                                transform: [[], ['45']],
                                type: 'rect',
                                id: 'punta',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                clip: 'rect(4.5257568359375px 63px 29px 38.46617126464844px)',
                                fill: ['rgba(22,160,133,1.00)']
                            },
                            {
                                rect: ['0px', '26px', '143px', '29px', 'auto', 'auto'],
                                id: 'cuerpo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(35,35,35,1.00)']
                            },
                            {
                                rect: ['40px', '24px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\"><span style=\"font-family: Arial, Helvetica, sans-serif; color: rgb(255, 255, 255); font-weight: 500; font-size: 20px;\">Fresas</span></p>',
                                align: 'left',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '63px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 400,
                    autoPlay: false,
                    labels: {
                        "end": 0,
                        "start": 300
                    },
                    data: [
                        [
                            "eid232",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "opacity",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            400,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '1'
                        ],
                        [
                            "eid228",
                            "top",
                            300,
                            100,
                            "linear",
                            "${Group}",
                            '-121px',
                            '-67px'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '0'
                        ],
                        [
                            "eid233",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Pem28_edgeActions.js");
})("EDGE-206117551");
