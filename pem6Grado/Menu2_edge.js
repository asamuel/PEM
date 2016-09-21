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
            "../cdn/jquery-2.1.4.min.js",
            "../cdn/bootstrap.min.js",
            "../cdn/bootstrap.min.css",
            "../cdn/bootbox.min.js",
            "../cdn/howler.min.js",
            "../cdn/jss.min.js",
            "../cdn/jquery.sBubble-0.1.1.css",
            "../cdn/jquery.sBubble-0.1.1.js",
            "../cdn/mycss.css"
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
                            id: 'simCont',
                            symbolName: 'simCont',
                            type: 'rect',
                            rect: ['0px', '104', '1024', '620', 'auto', 'auto']
                        },
                        {
                            id: 'simMenu3',
                            symbolName: 'simMenu3',
                            type: 'rect',
                            rect: ['0', '57', '1024', '36', 'auto', 'auto']
                        },
                        {
                            id: 'simMenu2',
                            symbolName: 'simMenu2',
                            type: 'rect',
                            rect: ['0', '0', '1024', '57', 'auto', 'auto']
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

                    ]
                }
            },
            "simCont": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'simImaginacion',
                            symbolName: 'simImaginacion',
                            rect: ['0', '0', '1024', '620', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'simRazonamientoM',
                            symbolName: 'simRazonamientoM',
                            rect: ['0px', '0px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'simCalculo',
                            symbolName: 'simCalculo',
                            rect: ['0px', '0px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1024px', '620px']
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
            "simImaginacion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Group1',
                            type: 'group',
                            rect: ['85px', '11', '250', '227px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: '',
                                id: 'fondon_1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(244,244,244,1.00)']
                            },
                            {
                                id: 'calculo_3',
                                type: 'image',
                                rect: ['5px', '5px', '240px', '179px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', '../images/default.png', '0px', '0px']
                            },
                            {
                                rect: ['81px', '189px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px; font-weight: 300;\">Pem 20</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: 'box',
                                type: 'rect',
                                id: 'fondo1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(244,244,244,0.00)']
                            }]
                        },
                        {
                            id: 'Group2',
                            type: 'group',
                            rect: ['665px', '11px', '250', '227px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: '',
                                id: 'fondon_2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(244,244,244,1.00)']
                            },
                            {
                                id: 'imaginacion_2',
                                type: 'image',
                                rect: ['5px', '5px', '240px', '180px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', '../images/default.png', '0px', '0px']
                            },
                            {
                                rect: ['84px', '189px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px; font-weight: 300;\">Pem 25</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: 'box',
                                type: 'rect',
                                id: 'fondo2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(244,244,244,0.00)']
                            }]
                        },
                        {
                            id: 'Group3',
                            type: 'group',
                            rect: ['665px', '321px', '250', '227px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: '',
                                id: 'fondon_3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(244,244,244,1.00)']
                            },
                            {
                                id: 'razonamiento_3',
                                type: 'image',
                                rect: ['5px', '5px', '240px', '180px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', '../images/default.png', '0px', '0px']
                            },
                            {
                                rect: ['78px', '192px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy2',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px; font-weight: 300;\">Pem 165</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: 'box',
                                type: 'rect',
                                id: 'fondo3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(244,244,244,0.00)']
                            }]
                        },
                        {
                            id: 'Group4',
                            type: 'group',
                            rect: ['85px', '321px', '250', '227px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: '',
                                id: 'fondon_4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(244,244,244,1.00)']
                            },
                            {
                                id: 'imaginacion_3',
                                type: 'image',
                                rect: ['5px', '5px', '240px', '180px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', '../images/default.png', '0px', '0px']
                            },
                            {
                                rect: ['84px', '192px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px; font-weight: 300;\">Pem 28</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: 'box',
                                type: 'rect',
                                id: 'fondo4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(244,244,244,0.00)']
                            }]
                        },
                        {
                            id: 'Group6',
                            type: 'group',
                            rect: ['379px', '321px', '250', '227px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: '',
                                id: 'fondon_4Copy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(244,244,244,1.00)']
                            },
                            {
                                id: 'pem156',
                                type: 'image',
                                rect: ['5px', '5px', '240px', '180px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', '../images/default.png', '0px', '0px']
                            },
                            {
                                rect: ['84px', '192px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy5',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px; font-weight: 300;\">Pem 156</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: 'box',
                                type: 'rect',
                                id: 'fondo6',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(244,244,244,0.00)']
                            }]
                        },
                        {
                            id: 'Group5',
                            type: 'group',
                            rect: ['379px', '11px', '250', '227px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: '',
                                id: 'fondon_4Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(244,244,244,1.00)']
                            },
                            {
                                id: 'calculo_2',
                                type: 'image',
                                rect: ['5px', '5px', '240px', '181px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', '../images/default.png', '0px', '0px']
                            },
                            {
                                rect: ['70px', '192px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy4',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px; font-weight: 300;\">Pem 20_1</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: 'box',
                                type: 'rect',
                                id: 'fondo5',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(244,244,244,0.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1024px', '620px']
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
            "simRazonamientoM": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Group1',
                            type: 'group',
                            rect: ['665px', '11px', '250', '227px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                id: 'fondon_1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(244,244,244,1.00)']
                            },
                            {
                                id: 'razonamiento_1',
                                type: 'image',
                                rect: ['5px', '5px', '240px', '181px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', '../images/pem11.jpg', '0px', '0px']
                            },
                            {
                                rect: ['84px', '189px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy4',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px; font-weight: 300;\">Pem 11</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: 'box',
                                type: 'rect',
                                id: 'fondo1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(244,244,244,0.00)']
                            }]
                        },
                        {
                            id: 'Group6',
                            type: 'group',
                            rect: ['379px', '11px', '250', '227px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                id: 'fondon_1Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(244,244,244,1.00)']
                            },
                            {
                                id: 'pem38',
                                type: 'image',
                                rect: ['5px', '5px', '240px', '179px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', '../images/pem1-2.jpg', '0px', '0px']
                            },
                            {
                                rect: ['84px', '189px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy2',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px; font-weight: 300;\">Pem 1-2</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: 'box',
                                type: 'rect',
                                id: 'fondo6',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(244,244,244,0.00)']
                            }]
                        },
                        {
                            id: 'Group2',
                            type: 'group',
                            rect: ['85px', '321px', '250', '227px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                id: 'fondon_2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(244,244,244,1.00)']
                            },
                            {
                                id: 'imaginacion_5',
                                type: 'image',
                                rect: ['5px', '5px', '240px', '180px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', '../images/default.png', '0px', '0px']
                            },
                            {
                                rect: ['83px', '189px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy5',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px; font-weight: 300;\">Pem 96</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: 'box',
                                type: 'rect',
                                id: 'fondo2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(244,244,244,0.00)']
                            }]
                        },
                        {
                            id: 'Group7',
                            type: 'group',
                            rect: ['379px', '321px', '250', '227px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                id: 'fondon_2Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(244,244,244,1.00)']
                            },
                            {
                                id: 'pem104-105',
                                type: 'image',
                                rect: ['5px', '5px', '240px', '181px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', '../images/default.png', '0px', '0px']
                            },
                            {
                                rect: ['63px', '189px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px; font-weight: 300;\">Pem 104-105</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: 'box',
                                type: 'rect',
                                id: 'fondo7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(244,244,244,0.00)']
                            }]
                        },
                        {
                            id: 'Group3',
                            type: 'group',
                            rect: ['85px', '11px', '250', '227px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                id: 'fondon_4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(244,244,244,1.00)']
                            },
                            {
                                id: 'calculo_1',
                                type: 'image',
                                rect: ['5px', '5px', '240px', '180px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', '../images/pem6.jpg', '0px', '0px']
                            },
                            {
                                rect: ['81px', '189px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy6',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px; font-weight: 300;\">Pem 6</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: 'box',
                                type: 'rect',
                                id: 'fondo4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(244,244,244,0.00)']
                            }]
                        },
                        {
                            id: 'Group5',
                            type: 'group',
                            rect: ['665px', '321px', '250', '227px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                id: 'fondon_3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(244,244,244,1.00)']
                            },
                            {
                                id: 'razonamiento_2',
                                type: 'image',
                                rect: ['5px', '5px', '240px', '180px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', '../images/default.png', '0px', '0px']
                            },
                            {
                                rect: ['74px', '189px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy8',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px; font-weight: 300;\">Pem 108</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: 'box',
                                type: 'rect',
                                id: 'fondo3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(244,244,244,0.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1024px', '620px']
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
            "simCalculo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Group1',
                            type: 'group',
                            rect: ['85px', '11', '250', '227px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                id: 'fondon_1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(244,244,244,1.00)']
                            },
                            {
                                id: 'imaginacion_4',
                                type: 'image',
                                rect: ['5px', '5px', '240px', '180px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', '../images/default.png', '0px', '0px']
                            },
                            {
                                rect: ['78px', '189px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy9',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px; font-weight: 300;\">Pem 22</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: 'box',
                                type: 'rect',
                                id: 'fondo1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(244,244,244,0.00)']
                            }]
                        },
                        {
                            id: 'Group2',
                            type: 'group',
                            rect: ['379px', '11', '250', '227px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                id: 'fondon_2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(244,244,244,1.00)']
                            },
                            {
                                id: 'imaginacion_1',
                                type: 'image',
                                rect: ['5px', '5px', '240px', '180px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', '../images/default.png', '0px', '0px']
                            },
                            {
                                rect: ['84px', '189px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy10',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px; font-weight: 300;\">Pem 24</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: 'box',
                                type: 'rect',
                                id: 'fondo2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(244,244,244,0.00)']
                            }]
                        },
                        {
                            id: 'Group3',
                            type: 'group',
                            rect: ['379px', '321px', '250', '227px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                id: 'fondon_3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(244,244,244,1.00)']
                            },
                            {
                                id: 'razonamiento_4',
                                type: 'image',
                                rect: ['5px', '5px', '240px', '180px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', '../images/default.png', '0px', '0px']
                            },
                            {
                                rect: ['78px', '188px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy12',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px; font-weight: 300;\">Pem 171</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: 'box',
                                type: 'rect',
                                id: 'fondo3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(244,244,244,0.00)']
                            }]
                        },
                        {
                            id: 'Group6',
                            type: 'group',
                            rect: ['85px', '321px', '250', '227px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                id: 'fondon_3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(244,244,244,1.00)']
                            },
                            {
                                id: 'pem81-82-84',
                                type: 'image',
                                rect: ['5px', '5px', '240px', '180px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', '../images/default.png', '0px', '0px']
                            },
                            {
                                rect: ['47px', '188px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px; font-weight: 300;\">Pem&nbsp;</span>81-82-84<span style=\"font-size: 24px; font-weight: 300;\"></span></p>',
                                font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: 'box',
                                type: 'rect',
                                id: 'fondo6',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(244,244,244,0.00)']
                            }]
                        },
                        {
                            id: 'Group4',
                            type: 'group',
                            rect: ['665px', '11px', '250', '227px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                id: 'fondon_4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(244,244,244,1.00)']
                            },
                            {
                                id: 'calculo_4',
                                type: 'image',
                                rect: ['5px', '5px', '240px', '180px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', '../images/default.png', '0px', '0px']
                            },
                            {
                                rect: ['88px', '188px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy13',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px; font-weight: 300;\">Pem 71</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: 'box',
                                type: 'rect',
                                id: 'fondo4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(244,244,244,0.00)']
                            }]
                        },
                        {
                            id: 'Group5',
                            type: 'group',
                            rect: ['665px', '321px', '250', '227px', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                id: 'fondon_4Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(244,244,244,1.00)']
                            },
                            {
                                id: 'razonamiento_5',
                                type: 'image',
                                rect: ['5px', '5px', '240px', '180px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', '../images/default.png', '0px', '0px']
                            },
                            {
                                rect: ['85px', '188px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px; font-weight: 300;\">Pem 193</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(0,0,0,1)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '250px', '227px', 'auto', 'auto'],
                                userClass: 'box',
                                type: 'rect',
                                id: 'fondo5',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(244,244,244,0.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1024px', '620px']
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
            "simMenu2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '341', '57', 'auto', 'auto'],
                            id: 'razonamientoGrupo',
                            type: 'group',
                            c: [
                            {
                                userClass: '',
                                rect: ['0px', '0px', '341px', '57px', 'auto', 'auto'],
                                id: 'Rectangle2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(235,149,50,1.00)']
                            },
                            {
                                type: 'text',
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">Razonamiento</span></p>',
                                rect: ['64px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap']
                            }]
                        },
                        {
                            rect: ['341px', '0', '341', '57', 'auto', 'auto'],
                            id: 'imaginacionGrupo',
                            type: 'group',
                            c: [
                            {
                                userClass: '',
                                rect: ['0px', '0px', '341px', '57px', 'auto', 'auto'],
                                id: 'Rectangle2Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(37,116,169,1.00)']
                            },
                            {
                                type: 'text',
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">Imaginación</span></p>',
                                rect: ['74px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap']
                            }]
                        },
                        {
                            rect: ['682px', '0', '341', '57', 'auto', 'auto'],
                            id: 'calculoGrupo',
                            type: 'group',
                            c: [
                            {
                                userClass: '',
                                rect: ['0px', '0px', '341px', '57px', 'auto', 'auto'],
                                id: 'Rectangle2Copy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(1,152,117,1.00)']
                            },
                            {
                                type: 'text',
                                id: 'TextCopy2',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">Cálculo</span></p>',
                                rect: ['111px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap']
                            }]
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '341px', '57px', 'auto', 'auto'],
                            userClass: 'box',
                            id: 'razonamiento',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(210,77,87,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['341px', '0px', '341px', '57px', 'auto', 'auto'],
                            userClass: 'box',
                            id: 'imaginacion',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(34,49,63,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['682px', '0px', '341px', '57px', 'auto', 'auto'],
                            userClass: 'box',
                            id: 'calculo',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(1,152,117,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid268",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,149,50,1.00)',
                            'rgba(235,149,50,1.00)'
                        ]
                    ]
                }
            },
            "simMenu3": {
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1024px', '36px', 'auto', 'auto'],
                            fill: ['rgba(35,35,35,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'simQuestion',
                            symbolName: 'simQuestion',
                            cursor: 'pointer',
                            rect: ['921px', '1', '25', '34', 'auto', 'auto']
                        },
                        {
                            rect: ['862px', '0px', null, null, 'auto', 'auto'],
                            id: 'simCredit',
                            symbolName: 'simCredit',
                            type: 'rect'
                        },
                        {
                            rect: ['815px', '2px', null, null, 'auto', 'auto'],
                            id: 'simBack',
                            symbolName: 'simBack',
                            type: 'rect'
                        },
                        {
                            rect: ['971px', '0px', null, null, 'auto', 'auto'],
                            id: 'simObj',
                            symbolName: 'simObj',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '36px']
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
                            rect: ['0px', '0px', '25px', '34px', 'auto', 'auto'],
                            id: 'questionManual',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', '../images/questionManual.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['-138', '34', '199', '72', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            c: [
                            {
                                type: 'rect',
                                borderRadius: ['3px', '3px', '3px', '3px 3px'],
                                id: 'Rectangle2Copy',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['132px', '19px', '68px', '34px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                clip: 'rect(1.696986198425293px 15.663397789001465px 34px 0px)',
                                fill: ['rgba(19,19,19,1.00)']
                            },
                            {
                                rect: ['68px', '12px', '101px', '34px', 'auto', 'auto'],
                                borderRadius: ['3px', '3px', '3px', '3px 3px'],
                                id: 'Rectangle2Copy2',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(19,19,19,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; color: rgb(255, 255, 255); font-weight: 300;\">Objetivo</span></p>',
                                type: 'text',
                                rect: ['90px', '13px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '25px', '34px']
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: false,
                    labels: {
                        "start": 100,
                        "end": 300
                    },
                    data: [
                        [
                            "eid274",
                            "scaleY",
                            100,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid278",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid272",
                            "scaleX",
                            100,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid277",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simCredit": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['-108px', '34', '199', '72', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            c: [
                            {
                                type: 'rect',
                                borderRadius: ['3px', '3px', '3px', '3px 3px'],
                                id: 'Rectangle2Copy',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['106px', '19px', '68px', '34px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                clip: 'rect(1.696986198425293px 15.663397789001465px 34px 0px)',
                                fill: ['rgba(19,19,19,1.00)']
                            },
                            {
                                rect: ['71px', '12px', '102px', '34px', 'auto', 'auto'],
                                borderRadius: ['3px', '3px', '3px', '3px 3px'],
                                id: 'Rectangle2Copy2',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(19,19,19,1.00)']
                            },
                            {
                                type: 'text',
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; color: rgb(255, 255, 255); font-weight: 300;\">Créditos</span></p>',
                                rect: ['92px', '12px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap']
                            }]
                        },
                        {
                            type: 'image',
                            id: 'credit2',
                            rect: ['0px', '0px', '40px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', '../images/credit.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '25px', '34px']
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: false,
                    labels: {
                        "start": 100,
                        "end": 300
                    },
                    data: [
                        [
                            "eid274",
                            "scaleY",
                            100,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid278",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid272",
                            "scaleX",
                            100,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid277",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simBack": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['-75px', '34', '199', '72', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            c: [
                            {
                                type: 'rect',
                                borderRadius: ['3px', '3px', '3px', '3px 3px'],
                                id: 'Rectangle2Copy',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['71px', '19px', '68px', '34px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                clip: 'rect(1.696986198425293px 15.663397789001465px 34px 0px)',
                                fill: ['rgba(19,19,19,1.00)']
                            },
                            {
                                rect: ['0px', '12px', '169px', '34px', 'auto', 'auto'],
                                borderRadius: ['3px', '3px', '3px', '3px 3px'],
                                id: 'Rectangle2Copy2',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(19,19,19,1.00)']
                            },
                            {
                                type: 'text',
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; color: rgb(255, 255, 255); font-weight: 300;\">Ir al menú principal</span></p>',
                                rect: ['14px', '12px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap']
                            }]
                        },
                        {
                            type: 'image',
                            id: 'back2',
                            rect: ['-5px', '-1px', '35px', '35px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', '../images/back.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '25px', '34px']
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: false,
                    labels: {
                        "start": 100,
                        "end": 300
                    },
                    data: [
                        [
                            "eid274",
                            "scaleY",
                            100,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid278",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid272",
                            "scaleX",
                            100,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid277",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "simObj": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['-75px', '34', '199', '72', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            c: [
                            {
                                type: 'rect',
                                borderRadius: ['3px', '3px', '3px', '3px 3px'],
                                id: 'Rectangle2Copy',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                rect: ['71px', '19px', '68px', '34px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                clip: 'rect(1.696986198425293px 15.663397789001465px 34px 0px)',
                                fill: ['rgba(19,19,19,1.00)']
                            },
                            {
                                rect: ['-54px', '12px', '159px', '34px', 'auto', 'auto'],
                                borderRadius: ['3px', '3px', '3px', '3px 3px'],
                                id: 'Rectangle2Copy2',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(19,19,19,1.00)']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; color: rgb(255, 255, 255); font-weight: 300;\">Manual de Usuario</span></p>',
                                type: 'text',
                                rect: ['-41px', '13px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'image',
                            id: 'objective',
                            rect: ['-5px', '4px', '40px', '30px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', '../images/objective.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '25px', '34px']
                        }
                    }
                },
                timeline: {
                    duration: 300,
                    autoPlay: false,
                    labels: {
                        "start": 100,
                        "end": 300
                    },
                    data: [
                        [
                            "eid274",
                            "scaleY",
                            100,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid278",
                            "scaleY",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid272",
                            "scaleX",
                            100,
                            100,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid277",
                            "scaleX",
                            300,
                            0,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Menu2_edgeActions.js");
})("EDGE-440784112");
