import Component from './Component.js';

class HorrorItem extends Component {
    renderHTML() {
        const horror = this.props.horror;
        return /*html*/`
        ${horror.url}
            <!-- Horror Item goes here -->
        `;
    }
}

export default HorrorItem;