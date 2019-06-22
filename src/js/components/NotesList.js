class FlagNoteList {
    constructor(data) {
        this.data = data;
    }

    render() {
        const noteListDiv = document.createElement('div');
        flagDiv.classList = 'flag-note-list';

        //render logo

        // render flag title & effects

        //render plus sign

        //create box to display note title
        const noteList = document.createElement('div');
        noteList.classList = 'flag-note-list-item'
        noteList.style.backgroundColor = this.data.colour;

        //display note title
        const noteTitle = document.createElement('h3');
        noteTitle.innerText = this.data.notes.title;
        noteTitle.classList = 'page-dashboard-flag-title';

    }
}