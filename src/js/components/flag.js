class Flag {
    constructor(data) {
        this.data = data;
    }

    render() {
        const flagDiv = document.createElement('div');
        flagDiv.classList = 'page-dashboard-flag';
        flagDiv.style.backgroundImage = `linear-gradient(to top, ${this.data.colour} 50%, transparent 50%)`;
        console.log(`linear-gradient(to top, ${this.data.colour} 50%, transparent 50%);`);
        // flagDiv.style.borderBottom = 2rem solid this.data.colour; <- is this correct? 
        // flagDiv.style. <- to hover

        flagDiv.style.borderBottom = `10px solid ${this.data.colour}`;

        const flagTitle = document.createElement('h2');
        flagTitle.innerText = this.data.name;
        flagTitle.classList = 'page-dashboard-flag-title';

        flagDiv.appendChild(flagTitle);

        flagDiv.onclick = () => {
            this.data.notes.forEach(note => {
                console.log(note);
            })
        };

        return flagDiv;
    }
}

export default Flag;