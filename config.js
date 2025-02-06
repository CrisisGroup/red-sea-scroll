var config = {
    style: 'mapbox://styles/daltonwb/cm6tiz5d8008901s19nzm9kuy',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    projection: 'globe',
    inset: true,
    insetOptions: {
        markerColor: '#a4343a'
    },
    insetPosition: 'bottom-left',
    use3dTerrain: false,
    auto: false,
    title: '<h1>Yemen and Beyond: Militarisation in the Red Sea</h1><video id="background-video" autoplay loop muted poster="images/poster.webp"><source src="images/aerial.webm" type="video/webm">',
    subtitle: '',
    start: 'BEGIN',
    footer: '<strong>Lead contributors</strong>: Ahmed Nagi<br /><strong>Visualisations</strong>: Paul Franz and Claire Boccon-Gibod <br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a>',
    chapters: [
        {
            id: 'INTRO', // Always use INTRO as first chapter name
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Since 7 October, groups within the <strong>Iran-led axis of resistance have exhibited varying levels of reaction to the Gaza war</strong>, resulting in differing impacts. Hamas and Hezbollah fought intensively but were both weakened by Israel’s large-scale military campaigns. Iran engaged in a few exchanges of attacks with Israel but has attempted to avoid further escalation. Meanwhile, Syrian Assad’s regime remained inactive before being overthrown by Syrian opposition groups in December 2024. The Iraqi militias launched a limited number of attacks during the first four months of the Gaza war.' + '<br /><br />' + '<strong>The Houthis remain the most active group within the axis.</strong>',
            location: {
                center: [34.36204, 31.43325],
                zoom: 7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'gaza',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'gazaa-place-label',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'iran',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'iran_destablizing',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'syria_fill',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'syria_pattern',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'iraq_fill',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'iraq_pattern',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'jordan-place-label',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'oman-place-label',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'sudan-place-label',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'egypt-place-label',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'saudi-place-label',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'somalia-place-label',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'ethiopia-place-label',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'eritrea-place-label',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'yemen-place-label',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'iran-place-label',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'syria-place-label',
                    opacity: 0,
                    duration: 3000
                },
            ],
            onChapterExit: [
                {
                    layer: 'gaza',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'gazaa-place-label',
                    opacity: 0,
                    duration: 3000
                },
            ]
        },
        {
            id: '02',
            alignment: 'none',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [39.84162, 28.83781],
                zoom: 2.4,
                pitch: 0,
                bearing: 0,
                bbox: [
                    [18.73172, 2.56429],
                    [79.01917, 40.35184]
                ]
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'iran',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'iran_destablizing',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'syria_fill',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'syria_pattern',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'iraq_fill',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'iraq_pattern',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'yemen-place-label',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'iran-place-label',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'iraq-place-label',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'syria-place-label',
                    opacity: 1,
                    duration: 3000
                },
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: '03',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<strong>The Houthis control approximately 28% of Yemen’s territory</strong>, primarily in the north and west—its most densely populated areas. Meanwhile, the internationally recognised government holds the remainder of the country. The Houthis also maintain control over extensive sections of the western coastline, as well as most Yemeni islands in the Red Sea. Territorial control has remained unchanged since the truce in April 2022',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                bbox: [[40.64210, 10.53028], [53.81968, 20.82401]]
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'iran',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'iran_destablizing',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'syria_fill',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'syria_pattern',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'iraq_fill',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'iraq_pattern',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'jordan-place-label',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'oman-place-label',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'sudan-place-label',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'egypt-place-label',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'saudi-place-label',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'somalia-place-label',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'ethiopia-place-label',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'eritrea-place-label',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'iraq-place-label',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'yemen-place-label',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'iran-place-label',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'syria-place-label',
                    opacity: 1,
                    duration: 3000
                },
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: '04',
            alignment: 'none',
            hidden: false,
            title: '',
            image: '',
            description: '',
            legendId: 'yemenlegend',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                bbox: [[40.64210, 10.53028], [53.81968, 20.82401]]
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'territory',
                    opacity: 1,
                    duration: 3000
                }
            ],
            onChapterExit: [
                {
                    layer: 'territory',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'iran',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'iran_destablizing',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'syria_fill',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'syria_pattern',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'iraq_fill',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'iraq_pattern',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'yemen-place-label',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'iran-place-label',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'syria-place-label',
                    opacity: 0,
                    duration: 3000
                },
            ]
        },
        {
            id: '05',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'The Red Sea experienced <strong>growing militarisation over the past two decades</strong>, driven by escalating security concerns, particularly since piracy incidents occured in 2008. Following the Houthis’ military escalation in the Red Sea and Gulf of Aden after 7 October, several countries deployed military assets to protect shipping routes. New maritime missions have been established alongside existing ones. The US launched Operation Prosperity Guardians, while the EU initiated its Apsides mission. These efforts have further intensified militarisation in the region amid the Houthis’ continued military activities.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0,
                bbox: [
                    [31.14583, 3.10875],
                    [68.55402, 23.97224]
                ]
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'acled_attacks',
                    opacity: 0,
                    duration: 3000
                }
            ],
            onChapterExit: []
        },
        {
            id: '06',
            alignment: 'none',
            hidden: false,
            title: '',
            image: '',
            description: '',
            legendId: 'acledlegend',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0,
                bbox: [
                    [31.14583, 3.10875],
                    [68.55402, 23.97224]
                ]
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'acled_attacks',
                    opacity: 1,
                    duration: 3000
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: '07',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Due to the Houthis’ escalating attacks as of November 2024, <strong>the volume of shipping traffic along the Red Sea route has decreased by 60%</strong> over the past year. Most ships now avoid the Red Sea, opting for alternative routes. This shift has resulted in a 134% increase in the monthly average of voyages through the Cape of Good Hope.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0,
                bbox: [
                    [31.14583, 3.10875],
                    [68.55402, 23.97224]
                ]
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'acled_attacks',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'ship_1_011223',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'ship_2_011223',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'ship_3_011223',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'ship_4_011223',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'haifa-fix-79ruok',
                    opacity: 1,
                    duration: 3000
                },
            ],
            onChapterExit: [
                {
                    layer: 'acled_attacks',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'ship_1_011223',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'ship_2_011223',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'ship_3_011223',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'ship_4_011223',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'haifa-fix-79ruok',
                    opacity: 0,
                    duration: 3000
                },
            ]
        },
        {
            id: '08',
            alignment: 'none',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [23.96141, 8.17259],
                zoom: 2.5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ports',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'straits',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'ports',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'yemen-place-label',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'sea-points-6v3o20',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'ship_alt_1_140224',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'ship_alt_2_140224',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'ship_alt_3_140224',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'ship_alt_4_140224',
                    opacity: 1,
                    duration: 3000
                },
            ],
            onChapterExit: [
                {
                    layer: 'ports',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'straits',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'ports',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'yemen-place-label',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'sea-points-6v3o20',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'ship_alt_1_140224',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'ship_alt_2_140224',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'ship_alt_3_140224',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'ship_alt_4_140224',
                    opacity: 0,
                    duration: 3000
                },
            ]
        }
    ]
};
