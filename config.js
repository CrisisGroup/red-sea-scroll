var config = {
    style: 'mapbox://styles/daltonwb/cm8qcs95m002c01sb6vsihvea',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    projection: 'globe',
    inset: true,
    insetOptions: {
        markerColor: '#a4343a'
    },
    insetPosition: 'bottom-left',
    use3dTerrain: false,
    auto: false,
    title: '<h1>The Houthis’ Red Sea Attacks, Explained</h1><video id="background-video" autoplay loop muted poster="images/poster.webp"><source src="images/aerial.webm" type="video/webm">',
    subtitle: '',
    start: 'BEGIN',
    footer: '<strong>Lead contributors</strong>: Ahmed Nagi<br /><strong>Visualisations</strong>: Claire Boccon-Gibod and Paul Franz <br /><br /><strong>Sources and Data</strong>: Crisis Group research, ACLED, UNCTAD / Marine Benchmark.<br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a>',
    chapters: [
        {
            id: 'INTRO', // Always use INTRO as first chapter name
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<strong>In response to the war in Gaza in October 2023</strong>, Ansar Allah, a Yemeni group known as the Houthis, has attacked Israel alongside Hizbollah and other allies in the <strong>Iran-led Axis of Resistance</strong>.',
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
            description: 'Initially, the Houthis launched missiles and drones at Israel, but its most significant impact has been <strong>disrupting one of the world’s vital commercial waterways, the Red Sea</strong>, where it has struck commercial ships with missiles and drones.',
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
            callback: 'hideVideo',
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
            id: 'CH02',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<p><strong>In response to the war in Gaza in October 2023</strong>, Ansar Allah...</p>' + '<!--split-->' + '<p>The Houthis have attacked shipping in the Red Sea...</p>',
            legendId: '',
            location: {
                center: [44.205557, 15.354354],
                zoom: 15,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'placeVideoAt',
            onChapterEnter: [

                /* {
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
                }, */
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
            legendId: 'yemenlegend',
            description: 'They <strong>control approximately 28 per cent of Yemen’s territory</strong>, primarily in the north and west, its most densely populated areas. They also control extensive parts of the western coastline, as well as most Yemeni islands in the Red Sea.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                bbox: [[40.64210, 10.53028], [53.81968, 20.82401]]
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideVideo',
            onChapterEnter: [
                {
                    layer: 'territory',
                    opacity: 1,
                    duration: 3000
                }
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: '03',
            alignment: 'none',
            hidden: false,
            title: '',
            image: '',
            legendId: 'yemenlegend',
            description: '',
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
                },
                {
                    layer: 'ship_1',
                    opacity: 0,
                    duration: 3000
                },
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
            id: '04',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'The Gulf of Aden and Red Sea, which connect the Indian and Pacific Oceans to the Mediterranean Sea, and thus Asia and Africa to Europe, through the Bab al-Mandab Strait are strategic bodies of water through which <strong>freedom of navigation has become an imperative for global trade.</strong>',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                bbox: [
                    [14.79088, 7.81301],
                    [80.85535, 33.69661]
                ]
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ship_1',
                    opacity: 1,
                    duration: 3000
                },
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: '05',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'At the northern end of the Red Sea, the Suez Canal is a second vital passage for vessels bearing oil, gas and sundry goods to the Mediterranean. About <strong>12 per cent of global maritime trade – including 40 per cent of container ship traffic</strong> – chugs through the canal each year.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                bbox: [
                    [14.79088, 7.81301],
                    [80.85535, 33.69661]
                ]
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ship_1',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'acled_attacks',
                    opacity: 0,
                    duration: 3000
                }
            ],
            onChapterExit: []
        },
        {
            id: '05B',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'The Red Sea was already witnessing a major military build-up before October 2023. But since the onset of the war in Gaza, the Houthis have launched close to 500 attacks on shipping and Israel and <strong>hit more than a hundred ships with missiles and drones in the Red Sea, Gulf of Aden and Arabian Sea</strong>, claiming that these vessels were connected to Israel, the U.S. or UK, as well as warships protecting them.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0,
                bbox: [
                    [33.87779, 6.60372],
                    [58.62572, 21.38517]
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
            onChapterExit: []
        },
        {
            id: '06',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'The violence has hiked up shipping costs, with no international diplomatic or military response able to stop or even slow down these attacks. <strong>The Suez Canal has seen traffic fall by around 50 per cent</strong>, choking off revenues for Egypt’s fragile economy, while <strong>Israel’s Eilat port has seen a 85 per cent decline in commercial activity.</strong>',
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
        
            ],
            onChapterExit: [

            ]
        },
        {
            id: '06B',
            alignment: 'none',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0,
                bbox: [
                    [34.89355, 29.49886],
                    [35.02852, 29.58298]
                ],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 3000
                },
            ],
            onChapterExit: [
                {
                    layer: 'satellite',
                    opacity: 0,
                    duration: 3000
                },
            ]
        },
        {
            id: '09',
            alignment: 'none',
            hidden: false,
            title: '',
            image: '',
            description: 'Lengthened shipping times – with the journey between Asia and Europe extended by ten to fourteen days – have disrupted global supply chains.',
            location: {
                center: [33.63785, -17.55336],
                zoom: 3.2,
                pitch: -8,
                bearing: 2.5,
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
            id: '10',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'In response, the U.S. and its allies launched Operation Prosperity Guardian, a multinational naval mission to secure Red Sea trade routes. The EU launched Operation Aspides, while Iran announced its own naval escort operations. <strong>The U.S. and UK have conducted 931 airstrikes against Houthi positions between January 2024 and January 2025</strong>, yet the group continued its attacks. Most recently, on 15 March, the U.S. launched a new round of airstrikes targeting Houthi positions in Yemen following the group’s renewed attacks on Israel and Israel-linked vessels.',
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
        },
        {
            id: '10',
            alignment: 'full',
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
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: '11',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Alongside military action, the Trump administration has <strong>restored the group’s designation as a Foreign Terrorist Organization (FTO)</strong>, on top of the renewed Special Designated Global Terrorist listing it inherited from the Biden administration.',
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
        },
        {
            id: 'END',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h4>WHAT SHOULD BE DONE?</h4> The U.S., European countries, and regional governments should support efforts to reinstate a ceasefire in Gaza, which had previously helped de-escalate Red Sea tensions and reduced the Houthis’ stated motivation for attacks.' + '<br /><br />' + 'The U.S., the UN, Oman and other mediators should work to resume talks over a permanent truce in Yemen by re-engaging the Houthis and the Saudi-led coalition. Red Sea coastal states, especially Saudi Arabia and Egypt, should strengthen maritime diplomacy by inviting key regional players as observers. European support could ease the naval burden on Western powers and offer a more effective path to regional security than military action could.' + '<br /><br />' + 'The UN should establish a task force dedicated to addressing environmental threats in the Red Sea and Gulf of Aden. Its mission should include monitoring ships damaged or sunk by Houthi attacks, leading salvage operations, and coordinating with regional authorities and environmental organizations to prevent oil and chemical spills.',
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
