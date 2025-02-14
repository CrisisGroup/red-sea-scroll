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
    footer: '<strong>Lead contributors</strong>: Ahmed Nagi<br /><strong>Visualisations</strong>: Claire Boccon-Gibod and Paul Franz <br /><br /><strong>Sources and Data</strong>: Crisis Group research, ACLED, UNCTAD / Marine Benchmark.<br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a>',
    chapters: [
        {
            id: 'INTRO', // Always use INTRO as first chapter name
            alignment: 'none',
            hidden: false,
            title: '',
            image: '',
            description: '',
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
            ],
            onChapterExit: [
               
            ]
        },
        {
            id: 'INTRO1', // Always use INTRO as first chapter name
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'In response to the war in Gaza in October 2023, Ansar Allah, a Yemeni group known as the Houthis, has attacked Israel alongside Hizbollah and other allies in the Iran-led Axis of Resistance. Initially, the Houthis launched missiles and drones at Israel, but its most significant impact has been disrupting one of the world’s vital commercial waterways, the Red Sea, where it has struck commercial ships with missiles and drones.',
            location: {
                center: [34.36204, 31.43325],
                zoom: 7,
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
            legendId: 'axislegend',
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
            description: 'The Houthis emerged in the 1990s as a Zaydi Shiite movement in northern Yemen and expanded, over the years, into a formidable military force, seizing the capital, Sanaa, in 2014 and engaging in a prolonged war against a Saudi-led coalition that intervened the next year. They control approximately 28 per cent of Yemen’s territory, primarily in the north and west, its most densely populated areas. They also control extensive parts of the western coastline, as well as most Yemeni islands in the Red Sea.',
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
            description: 'The Gulf of Aden and Red Sea, which connect the Indian and Pacific Oceans to the Mediterranean Sea, and thus Asia and Africa to Europe, through the Bab al-Mandab Strait are strategic bodies of water through which freedom of navigation has become an imperative for global trade. At the northern end of the Red Sea, the Suez Canal is a second vital passage for vessels bearing oil, gas and sundry goods to the Mediterranean. About 12 per cent of global maritime trade – including 40 per cent of container ship traffic – chugs through the canal each year.' + '<br />' + 'The Red Sea was already witnessing a major military build-up before October 2023. But since the onset of the war in Gaza, the Houthis have launched around 468 attacks on shipping and Israel and hit more than a hundred ships with missiles and drones in the Red Sea, Gulf of Aden and Arabian Sea, claiming that these vessels were connected to Israel, the U.S. or UK, as well as warships protecting them.',
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
                {
                    layer: 'closure',
                    opacity: 0,
                    duration: 3000
                },
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
            description: 'The violence has hiked up shipping costs, with no international diplomatic or military response able to stop or even slow down these attacks. The Suez Canal has seen traffic fall by 50 per cent, choking off revenues for Egypt’s fragile economy, while Israel’s Eilat port has seen a 85 per cent decline in commercial activity. Lengthened shipping times – with the journey between Asia and Europe extended by ten to fourteen days – have disrupted global supply chains. ',
            location: {
                center: [32.79566, 27.94906],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'closure',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'acled_attacks',
                    opacity: 0,
                    duration: 1000
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
                    layer: 'closure',
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
        },
        {
            id: 'END',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'A Gaza ceasefire brought down Red Sea turmoil. But until it is permanent, and even if fighting continues, Red Sea coastal states and outside powers should make greater efforts at dampening military tensions in the region, while the U.S. and its allies should support the resumption of peace talks in Yemen.' + '<ol><li><strong>Support a Gaza ceasefire</strong> – Reduce the Houthis’ stated motivation for attacks.</li><li><strong>Resume talks over a permanent truce in Yemen</strong> – Re-engage the Houthis and Saudi-led coalition.</li><li><strong>Strengthen diplomacy in the Red Sea basin</strong> – Encourage regional states to manage maritime security cooperatively.</li><li><strong>Address environmental risks</strong> – Prevent further oil and chemical spills from attacked ships.</li></ol>' + 'Although the Houthis suspended their operations following the Gaza truce, they have warned that they will resume attacks if Israel renews its military campaign. Without action to contain military build-up and escalation, the likely casualty will be stability across the Red Sea basin, with effects felt worldwide.',
            location: {
                center: [23.96141, 8.17259],
                zoom: 2.5,
                pitch: 0,
                bearing: 0,
                speed: .4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        }
    ]
};
