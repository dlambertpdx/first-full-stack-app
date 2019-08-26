import Component from '../Component.js';
import Header from '../app/Header.js';
import HorrorList from '../horror/HorrorList.js';
import { getHorror } from '../../services/horror-api.js';

class HorrorListApp extends Component {
    
    onRender(dom) {
        const header = new Header({ title: 'List of Films' });
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');

        const list = new HorrorList({ horror: [] });
        main.appendChild(list.renderDOM());

        getHorror().then(horror => {
            list.update({ horror });
        });

    }
    
    renderHTML() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default HorrorListApp;