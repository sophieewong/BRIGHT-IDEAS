class Flag {
    constructor(data) {
        this.data = data;
    }

    render() {
        const flagDiv = document.createElement('div');
        flagDiv.classList = 'page-dashboard-flag';
        flagDiv.style.backgroundColor = this.data.colour;

        const flagTitle = document.createElement('h2');
        flagTitle.innerText = this.data.name;
        flagTitle.classList = 'page-dashboard-flag-title';

        flagDiv.appendChild(flagTitle);

        document.getElementById('page-dashboard-flags').appendChild(flagDiv);

        flagDiv.onclick = () => {
            this.data.notes.forEach(note => {
                console.log(note);
            })
        };
    }
}

export default Flag;