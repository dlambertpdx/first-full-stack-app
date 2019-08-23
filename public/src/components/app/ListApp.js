import Component from '../Component.js';
import Header from '../app/Header.js';
import { getHorror } from '../services/horror-api.js';

class ListApp extends Component {

    onRender(dom) {
        const header = new Header({ title: 'This is the title' });
        dom.prepend(header.renderDom());

        const list = new ListApp({ horror: [] });
        const main = dom.querySelector('GET SELECTOR');
        main.appendChild(list.renderDom());

        getHorror().then(horrors => {
            list.update({ horrors });
        });
    }

    renderHTML() {
        return /*html*/`
            <ul></ul>
        `;
    }
}

export default ListApp;