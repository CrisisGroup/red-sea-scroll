var config = {
    style: 'mapbox://styles/daltonwb/cm6tiz5d8008901s19nzm9kuy',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    projection: 'globe',
    inset: true,
    insetOptions: {
        markerColor: '#a4343a'
    },
    insetPosition: 'bottom-right',
    use3dTerrain: false,
    auto: false,
    title: '<h1>Yemen and Beyond: Militarisation in the Red Sea</h1><video id="background-video" autoplay loop muted poster="images/poster.webp"><source src="images/aerial.webm" type="video/webm">',
    subtitle: '',
    start: 'BEGIN',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
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
                    duration: 3000
                },
                {
                    layer: 'gazaa-place-label',
                    opacity: 1,
                    duration: 3000
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
            ],
            onChapterExit: [
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
            ]
        },
        {
            id: '04',
            alignment: 'none',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                bbox: [[40.64210, 10.53028], [53.81968, 20.82401]]
            },
            legend: {
                title: "Control by Faction",
                position: "bottom-left", 
                items: [
                    { color: "#7c0e24", label: "Huthis" },
                    { color: "#a5343a", label: "STC and local aligned forces" },
                    { color: "#764d50", label: "National Resistance Forces" },
                    { color: "#dab7bb", label: "Hadramawt Elite Forces" },
                    { color: "#e7d7dc", label: "Shebwa Defence Forces & Giants Brigades" },
                    { color: "#000000", label: "Flashpoints" }
                ]
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
                }
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
            legend: {
                title: "Territorial Control by Faction",
                position: "bottom-left", 
                items: [
                    { color: "#a4343a", label: "Recorded attack" },
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
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '08',
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
                    [18.73172, 2.56429],
                    [79.01917, 40.35184]
                ]
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
