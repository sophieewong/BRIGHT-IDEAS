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
    })
];

/*
Store the flags container
For each flag object in the flags array, append a div to the previously stored flags container
*/

flags.forEach(flag => {
    flag.render();
});