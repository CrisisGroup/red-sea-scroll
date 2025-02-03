var config = {
    style: 'mapbox://styles/daltonwb/cm693bb9v00ka01sg322ocm1f',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    projection: 'globe',
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    use3dTerrain: false,
    auto: false,
    title: '<h1>Red Sea</h1><video id="background-video" autoplay loop muted poster="images/poster.jpg"><source src="images/aerial.mp4" type="video/mp4">',
    subtitle: 'Laboris ex culpa dolore excepteur et exercitation culpa cupidatat anim labore ut.',
    start: 'BEGIN',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'INTRO', // Always use INTRO as first chapter name
            alignment: 'center',
            hidden: false,
            title: 'Shipping Routes via Bab al-Mandab and the Suez Canal',
            image: '',
            description: 'The volume of shipping traffic along the Red Sea route has decreased by 60% over the past year due to the Houthis escalating attacks as of November 2024. Most ships now avoid the Red Sea, opting for alternative routes. This shift has resulted in a 134% increase in the monthly average of voyages through the Cape of Good Hope.',
            location: {
                center: [39.84162, 28.83781],
                zoom: 2.4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'shipping-routes',
                    opacity: 1,
                    duration: 3000
                }
            ],
            onChapterExit: [
                {
                    layer: 'shipping-routes',
                    opacity: 0,
                    duration: 2000
                }
            ]
        },
        {
            id: '02',
            alignment: 'center',
            hidden: false,
            title: 'Territorial Control within Yemen',
            image: '',
            description: 'The Houthis control approximately 28% of Yemen’s territory, primarily in the north and west—its most densely populated areas. Meanwhile, the internationally recognised government holds the remainder of the country. The Houthis also maintain control over extensive sections of the western coastline, as well as most Yemeni islands in the Red Sea. Territorial control has remained unchanged since the truce in April 2022',
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
                }
            ]
        },
        {
            id: '03',
            alignment: 'center',
            hidden: false,
            title: 'Actors within the Iran-led Axis of Resistance',
            image: '',
            description: 'Since 7 October, groups within the Iran-led axis of resistance have exhibited varying levels of reaction to the Gaza war, resulting in differing impacts. Hamas and Hezbollah fought intensively but were both weakened by Israel’s large-scale military campaigns. Iran engaged in a few exchanges of attacks with Israel but has attempted to avoid further escalation. Meanwhile, Syrian Assad’s regime remained inactive before being overthrown by Syrian opposition groups in December 2024. The Iraqi militias launched a limited number of attacks during the first four months of the Gaza war. The Houthis remain the most active group within the axis.',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00,
                bbox: [[15.95904, 5.04785], [79.69360, 40.40719]]
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '04',
            alignment: 'center',
            hidden: false,
            title: 'Militarisation of the Red Sea',
            image: '',
            description: 'The Red Sea experienced growing militarisation over the past two decades, driven by escalating security concerns, particularly since piracy incidents occured in 2008. Following the Houthis’ military escalation in the Red Sea and Gulf of Aden after 7 October, several countries deployed military assets to protect shipping routes. New maritime missions have been established alongside existing ones. The US launched Operation Prosperity Guardians, while the EU initiated its Apsides mission. These efforts have further intensified militarisation in the region amid the Houthis’ continued military activities.',
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
        }
    ]
};
