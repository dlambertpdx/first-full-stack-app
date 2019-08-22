import Component from '../Component.js';

class HorrorItem extends Component {
    renderHTML() {
        const horror = this.props.horror;

        return /*html*/`
            <li class="horror-item">
                <div class="info-container">
                    <h2>${horror.name}</h2>
                    <p class="horror-type">${horror.type}</p>
                </div>
                <div class="image-container">
                    <img src='${horror.url}'' alt='${horror.title} image'>
                </div>
                <p class="year">${horror.year}</p>
            </li>
        `;
    }
}

export default HorrorItem;