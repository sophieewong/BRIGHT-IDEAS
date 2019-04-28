const flags = [
    {
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
    },
    {
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
    }
];

/*
Store the flags container
For each flag object in the flags array, append a div to the previously stored flags container
*/
const flagsContainer = document.getElementById('page-dashboard-flags');

flags.forEach(flag => {
    const flagDiv = document.createElement('div');
    flagDiv.classList = 'page-dashboard-flag';
    flagDiv.style.backgroundColor = flag.colour;
    const flagTitle = document.createElement('h2');
    flagTitle.innerText = flag.name;
    flagTitle.classList = 'page-dashboard-flag-title';
    flagDiv.appendChild(flagTitle);
    flagsContainer.appendChild(flagDiv);
});