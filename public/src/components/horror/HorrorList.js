import Component from '../Component.js';
import HorrorItem from './HorrorItem.js';

class HorrorList extends Component {

    onRender(dom) {
        const horrors = this.props.horrors;

        horrors.forEach(horror => {
            const props = { horror: horror };
            const horrorItem = new HorrorItem(props);
            const horrorItemDOM = horrorItem.renderDOM();
            dom.appendChild(horrorItemDOM);
        });
    }

    renderHTML() {
        return /*html*/`
        <ul></ul>
        `;
    }
}

export default HorrorList;