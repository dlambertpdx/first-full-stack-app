import Component from '../Component.js';
import HorrorItem from './horror-item.js';

class HorrorList extends Component {
    
    onRender(dom) {
        const horror = this.props.horror;
        horror.forEach(horror => {
            const props = { horror };
            const horrorItem = new HorrorItem(props);
            const horrorItemDOM = horrorItem.renderDOM();
            dom.appendChild(horrorItemDOM);
        });
    }

    renderHTML() {
        
        return /*html*/`
            <ul class="horrordex"></ul>
        `;
    }
}

export default HorrorList;
