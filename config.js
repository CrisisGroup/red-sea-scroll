var config = {
    style: 'mapbox://styles/daltonwb/cm8yu189z001901s00eboagnv',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    projection: 'globe',
    inset: true,
    insetOptions: {
        markerColor: '#a4343a'
    },
    insetPosition: 'bottom-left',
    use3dTerrain: false,
    auto: false,
    title: '<h1>The Houthis’ Red Sea Attacks Explained</h1><video id="background-video" autoplay loop muted poster="images/poster.webp"><source src="images/aerial.webm" type="video/webm">',
    subtitle: '',
    start: 'BEGIN',
    footer: '<strong>Lead contributors</strong>: Ahmed Nagi<br /><strong>Visualisations</strong>: Claire Boccon-Gibod and Paul Franz <br /><strong>Support</strong>: Christina Boutros and Cassandra van Douveren<br /><br /><strong>Sources and Data</strong>: Crisis Group research, ACLED, UNCTAD / Marine Benchmark. Originally published on X April 2025<br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a>',
    chapters: [
        {
            id: 'INTRO', // Always use INTRO as first chapter name
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'In October 2023, as <strong>Israel bombarded Gaza in response to Hamas’s attacks</strong>, Ansar Allah, the Yemeni group known as the Houthis, began firing missiles and armed drones at Israeli targets.',
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
                    duration: 1000
                },
                {
                    layer: 'gazaa-place-label',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'israel-place-label',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'med-sea',
                    opacity: 1,
                    duration: 1000
                },
                /* CH1 HIDES */
                {
                    layer: 'iran',
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
                    layer: 'yemen_fill',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'lebanon_fill',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'lebanon_pattern',
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
                    layer: 'iraq-place-label',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'syria-place-label',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'yemen_pattern',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'palestine_fill',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'palestine_pattern',
                    opacity: 0,
                    duration: 3000
                },
                /* END CH01 HIDES */
            ],
            onChapterExit: [
                {
                    layer: 'gaza',
                    opacity: 0,
                    duration: 2000
                },
                {
                    layer: 'gazaa-place-label',
                    opacity: 0,
                    duration: 2000
                },
                {
                    layer: 'israel-place-label',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'med-sea',
                    opacity: 0,
                    duration: 1000
                },
            ]
        },
        {
            id: 'INTRO1', // Always use INTRO as first chapter name
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            legendId: 'axislegend',
            description: 'The Houthis were acting in support of Hamas and in solidarity with the Palestinians, alongside Hizbollah and other members of the <span class="axis-nobg">Iran-led</span> <span class="axis"> “axis of resistance”.</span> <strong>They have consistently linked their attacks to Israel’s war in Gaza, saying they will stand down when that war ends.</strong>',
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
                    layer: 'iran',
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
                    opacity: .5,
                    duration: 3000
                },
                {
                    layer: 'syria_fill',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'syria_pattern',
                    opacity: .5,
                    duration: 3000
                },
                {
                    layer: 'yemen_fill',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'yemen_pattern',
                    opacity: .5,
                    duration: 3000
                },
                {
                    layer: 'lebanon_fill',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'lebanon_pattern',
                    opacity: .5,
                    duration: 3000
                },
                {
                    layer: 'palestine_fill',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'palestine_pattern',
                    opacity: .5,
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
            id: 'INTRO1B', // Always use INTRO as first chapter name
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            legendId: 'axislegend',
            description: 'At first, the Houthis aimed their <span class="axis">projectiles</span> at Israeli territory, but when those attempts failed, they switched to striking Israel-linked cargo ships in the Red Sea. Since then, their <span class="axis">maritime campaign</span> has expanded to disrupt traffic in <strong>one of the world’s vital commercial waterways.</strong> The U.S. and other Western navies began escorting merchant vessels, leading to exchanges of fire with the Houthis at sea and U.S. bombing of Houthi-linked sites in Yemen.',
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
                    layer: 'iran',
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
                    opacity: .5,
                    duration: 3000
                },
                {
                    layer: 'syria_fill',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'syria_pattern',
                    opacity: .5,
                    duration: 3000
                },
                {
                    layer: 'yemen_fill',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'yemen_pattern',
                    opacity: .5,
                    duration: 3000
                },
                {
                    layer: 'lebanon_fill',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'lebanon_pattern',
                    opacity: .5,
                    duration: 3000
                },
                {
                    layer: 'palestine_fill',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'palestine_pattern',
                    opacity: .5,
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
                    layer: 'iran',
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
                    layer: 'yemen_fill',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'yemen_pattern',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'lebanon_fill',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'lebanon_pattern',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'palestine_fill',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'palestine_pattern',
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
                    layer: 'iraq-place-label',
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
            id: 'CH02',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<p>The Houthis, a Zaydi Shiite movement, emerged in the 1990s in Yemen’s northern highlands, developing <strong>over the years into a formidable military force.</strong></p>' + '<!--split-->' + '<p>In 2014, they <strong>seized the capital, Sanaa, entering a prolonged war</strong> both with other Yemeni factions and a Saudi-led coalition that intervened the next year.</p>',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                bbox: [[40.64210, 10.53028], [53.81968, 20.82401]]
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'placeVideoAt',
            onChapterEnter: [
                {
                    layer: 'territory',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'sea_pts',
                    opacity: 0,
                    duration: 2000
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
            description: '<strong>The <span class="axis">Houthis</span> control approximately 28 per cent of Yemen’s territory,</strong> primarily in the north and west, the most densely populated areas. They also hold long stretches of the western coastline, as well as most Yemeni islands in the Red Sea.',
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
                    layer: 'yemen_fill',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'yemen-place-label',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'sea_pts',
                    opacity: 1,
                    duration: 2000
                },
            ],
            onChapterExit: [
                {
                    layer: 'yemen_fill',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'yemen-place-label',
                    opacity: 0,
                    duration: 500
                },
            ]
        },
        {
            id: '03B',
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
                    duration: 500
                },
                {
                    layer: 'bg-countries-labels',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'sea_pts',
                    opacity: 1,
                    duration: 3000
                },
            ],
            onChapterExit: [

                {
                    layer: 'territory',
                    opacity: 0,
                    duration: 1500
                },
            ]
        },
        {
            id: 'CH04',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'The Red Sea is <strong>a strategic body of water</strong> connecting the Indian and Pacific Oceans to the Mediterranean Sea, and thus Asia and Africa to Europe, through the Bab al-Mandab Strait. <strong>Freedom of navigation in the Red Sea has become imperative for <span class="trade">global trade.</span></strong>',
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
                    layer: 'bg-countries-labels',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'sea_pts',
                    opacity: 1,
                    duration: 3000
                },
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'CH05',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'At its northern end is the <span class="suez">Suez Canal</span>, a crucial passage for vessels bearing oil, gas and sundry goods to the Mediterranean. <strong>About 12 per cent of global maritime trade – including 40 per cent of container ship traffic</strong> – chugs through the canal each year.',
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
            callback: 'drawCircleStroke',
            onChapterEnter: [
                {
                    layer: 'acled_attacks',
                    opacity: 0,
                    duration: 3000
                },
                {
                    layer: 'bg-countries-labels',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'sea_pts',
                    opacity: 1,
                    duration: 3000
                },
            ],
            onChapterExit: [
                {
                    layer: 'sea_pts',
                    opacity: 0,
                    duration: 3000
                },
            ]
        },
        {
            id: '05B',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            legendId: 'acledlegend',
            description: 'Since the onset of the war in Gaza, the Houthis have <strong>launched close to 500 <span class="axis">attacks on shipping</span> and on Israel. Their missiles and drones have hit more than a hundred ships in the Red Sea, Gulf of Aden and Arabian Sea</strong>. They have claimed that these vessels were connected to Israel, the U.S. or the UK.',
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
                    duration: 1000
                },
                {
                    layer: 'bg-countries-labels',
                    opacity: 1,
                    duration: 1000
                },
            ],
            onChapterExit: [
                {
                    layer: 'acled_attacks',
                    opacity: 0,
                    duration: 1000
                },
            ]
        },
        {
            id: '05C',
            alignment: 'none',
            hidden: false,
            title: '',
            image: '',
            description: '',
            legendId: 'acled-target-legend',
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
                    layer: 'acled_attacks_target',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'bg-countries-labels',
                    opacity: 1,
                    duration: 1000
                },
                /* SHIP ROUTES OPACITY */
                {
                    layer: 'ship_2',
                    opacity: 0,
                    duration: 2000
                },
                {
                    layer: 'haifa-closed',
                    opacity: 0,
                    duration: 2000
                },
                {
                    layer: 'closure',
                    opacity: 0,
                    duration: 2000
                }
            ],
            onChapterExit: [
                {
                    layer: 'acled_attacks_target',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'bg-countries-labels',
                    opacity: 0,
                    duration: 2000
                },

            ]
        },
        {
            id: '06A',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span class="axis">The turbulence</span> <strong>in the Red Sea</strong> has driven up shipping costs, as firms are paying more for insurance and <strong>rerouting their vessels around the southern tip of Africa.</strong>',
            location: {
                center: [30.49570, 13.83790],
                zoom: 3.2,
                pitch: 15,
                bearing: 0,
                speed: 0.4,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ship_2',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'haifa-closed',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'closure',
                    opacity: 1,
                    duration: 2000
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: '06B',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Lengthened shipping times – with the journey between Asia and Europe <strong>extended by ten to fourteen days</strong> – have disrupted <span class="trade">global supply chains.</span>',
            location: {
                center: [16.61336, 5.05021],
                zoom: 2.25,
                pitch: 0,
                bearing: 0,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ship_2',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'haifa-closed',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'closure',
                    opacity: 1,
                    duration: 2000
                }
            ],
            onChapterExit: [
                {
                    layer: 'ship_2',
                    opacity: 0,
                    duration: 2000
                },
                {
                    layer: 'haifa-closed',
                    opacity: 0,
                    duration: 2000
                },
                {
                    layer: 'closure',
                    opacity: 0,
                    duration: 2000
                }
            ]
        },
        {
            id: '06C',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<strong>The Suez Canal has seen traffic fall by around 50 per cent</strong>, cutting deeply into important revenue for Egyptian state coffers, while <strong>Israel’s Eilat port has witnessed an 85 per cent decline in commercial activity.</strong>',
            location: {
                center: [32.51020, 30.02708],
                zoom: 9,
                pitch: 61,
                bearing: -11.25,
                speed: 0.4,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: .5,
                    duration: 3000
                },
                {
                    layer: 'closure',
                    opacity: 1,
                    duration: 2000
                },
            ],
            onChapterExit: [
                {
                    layer: 'closure',
                    opacity: 0,
                    duration: 2000
                },
            ]
        },
        {
            id: '06D',
            alignment: 'none',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [34.96262, 29.55416],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
                speed: 0.6,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hidePhoto',
            onChapterEnter: [
                {
                    layer: 'eilat',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'satellite',
                    opacity: .5,
                    duration: 3000
                },
            ],
            onChapterExit: [
                {
                    layer: 'eilat',
                    opacity: 0,
                    duration: 3000
                },
            ]
        },
        {
            id: 'CH09',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<p>In response to the Houthis’ campaign, the U.S. and its allies launched Operation Prosperity Guardian, a multinational naval mission to secure Red Sea trade routes. The EU embarked on a similar endeavour called Operation Aspides. The U.S. and UK <strong>conducted 931 airstrikes on Houthi positions between January 2024 and January 2025</strong>, when the Gaza ceasefire came into effect, but these strikes failed to deter the group, which continued its attacks throughout.</p>' + '<!--split-->' + '<p>The Houthis largely held their fire during the Gaza truce, but they threatened to resume attacks when Israel cut off aid shipments into the enclave, in violation of the ceasefire terms. In response, and perhaps in retaliation for Houthi fire at its aircraft, <strong>the U.S. launched a new round of airstrikes on Houthi positions in Yemen on 15 March.</strong> Now, with the Gaza ceasefire shattered, the brief calm in the Red Sea is also over.</p>' ,
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                bbox: [[40.64210, 10.53028], [53.81968, 20.82401]]
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'addStaticImageToMap',
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 0,
                    duration: 3000
                },
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: '10',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Alongside military action, the U.S. has tried to silence the Houthis’ guns by other means, for instance <strong>imposing sanctions on Houthi leaders.</strong> Most recently, the <strong>Trump administration has restored the group’s previous designation as a Foreign Terrorist Organization,</strong> on top of the Special Designated Global Terrorist listing the Biden administration had renewed.',
            location: {
                center: [-77.13153, 38.94273],
                zoom: 3.5,
                pitch: 0,
                bearing: 0,
                speed: .6
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hidePhoto',
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
            description: '<h4>What Should be Done?</h4>&#8195;The U.S., European countries and regional governments should support efforts to reinstate the ceasefire in Gaza, which had previously helped de-escalate Red Sea tensions by addressing the Houthis’ stated motivation for attacks.' + '<br /><br />' + 'The U.S., the UN, Oman and other mediators should also work to resume talks about a permanent truce in Yemen by re-engaging the Houthis and the Saudi-led coalition. Red Sea coastal states, especially Saudi Arabia and Egypt, should strengthen existing efforts to bolster maritime diplomacy and conflict prevention, and invite other key players from the region as observers. European support for security cooperation in these waters could ease the naval burden on Western powers, and offer a more effective long-term path to peace in the Red Sea than military action.' + '<br /><br />' + 'The UN should establish a task force dedicated to addressing environmental threats in the Red Sea and Gulf of Aden. Its mission should include monitoring ships damaged or sunk by Houthi attacks, leading salvage operations, and coordinating with regional authorities and environmental organisations to prevent oil and chemical spills.',
            location: {
                center: [-77.13153, 38.94273],
                zoom: 3.5,
                pitch: 0,
                bearing: 0,
                speed: .6
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        }
    ]
};
