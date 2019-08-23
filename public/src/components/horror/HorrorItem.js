import Component from '../Component.js';

class HorrorItem extends Component {
    renderHTML() {
        const horror = this.props.horror;

        return /*html*/`
        <div class="horror-item">
            <div class="horror-img">
                <img class="url" src="${horror.url_image} alt="${horror.title}" />
            </div>
            <div class="horror-copy">
                <li class="horror-title">${horror.title}</li>
                <li class="year">${horror.year}</li>
                <li class="summary">${horror.summary}</li>
                <li class="worth-watch">Worth Watching: ${horror.worthWatch}</li>
            </div>
        </div>
        `;
    }
}

export default HorrorItem;