import Flag from './components/Flag';

const flags = [
    new Flag({
        name: 'Red Hot Ideas',
        colour: '#E5393D',
        id: 'page-redHotIdeas',
        notes: [
            {
                id: 'note-rhi-0',
                title: 'Shopping List',
                body: 'Chicken, Lamb, Beef'
            },
            {
                id: 'note-rhi-1',
                title: 'noteTitle2',
                body: 'JOSHUA2'
            }
        ]
    }),
    new Flag({
        name: 'Blazing Breakthrough',
        colour: '#EC952F',
        id: 'page-blazingbreakthrough',
        notes: [
            {
                id: 'note-bb-0',
                title: 'Mermaid',
                body: 'Under The Sea'
            }
        ]
    }),
    new Flag({
        name: 'Rosy Outlook',
        colour: '#EC9186',
        id: 'page-rosyoutlook',
        notes: [
            {
                id: 'note-ro-0',
                title: 'Songs about Roses',
                body: 'Just Like a Rose'
            }
        ]
    }),
    new Flag({
        name: 'Twilight Insight',
        colour: '#CDA1B8',
        id: 'page-twilightinsight',
        notes: [
            {
                id: 'note-ti-0',
                title: 'Twilight Saga',
                body: 'New Moon, Eclipse, Breaking Dawn'
            }
        ]
    }),
    new Flag({
        name: 'Silver Linings',
        colour: '#D7D6DE',
        id: 'page-silverlinings',
        notes: [
            {
                id: 'note-sl-0',
                title: 'Every Cloud has....',
                body: 'which means there is good in everything'
            }
        ]
    }),
    new Flag({
        name: 'Deep Reflection',
        colour: '#80A4C4',
        id: 'page-deepReflection',
        notes: [
            {
                id: 'note-dr-0',
                title: 'Dream Boy',
                body: 'Joshua'
            }
        ]
    }),
    new Flag({
        name: 'Blue Sky Brainstorm',
        colour: '#92E2FC',
        id: 'page-blueskybrainstorm',
        notes: [
            {
                id: 'note-bsb-0',
                title: 'HSM',
                body: 'Troy Bolton'
            }
        ]
    }),
    new Flag({
        name: 'Evergreen Inspirations',
        colour: '#81BA99',
        id: 'page-evergreeninspirations',
        notes: [
            {
                id: 'note-ei-0',
                title: 'Plants',
                body: 'Fav plants list...'
            }
        ]
    }),
    new Flag({
        name: 'Freshly Minted Inventions',
        colour: '#B1C870',
        id: 'page-freshlymintedinventions',
        notes: [
            {
                id: 'note-fmi-0',
                title: 'Recipes?',
                body: 'Sounds like a recipe category...'
            }
        ]
    }),
    new Flag({
        name: 'Sunny Thoughts',
        colour: '#E8D880',
        id: 'page-sunnythoughts',
        notes: [
            {
                id: 'note-st-0',
                title: 'Happy Memories',
                body: 'Fondest memories to be written here.'
            }
        ]
    })
];

/*
Store the flags container
For each flag object in the flags array, append a div to the previously stored flags container
*/

flags.forEach(flag => {
    flag.render();
});