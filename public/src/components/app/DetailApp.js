import Component from '../Component.js';
import Header from './Header.js';
import Loading from './Loading.js';
import QUERY from '../../services/QUERY.js';
import { getHorror } from '../../services/horror-api.js';

class DetailApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');

        const loading = new Loading({ loading: true });
        main.appendChild(loading.renderDOM());
        
        // example of extracting query param for data get
        const params = QUERY.parse(window.location.search);
        const id = params.id;

        // no id? bail and go back to list
        if(!id) {
            window.location = 'horror-list.html';
            return;
        }

        getHorror(id)
            .then(horror => {
                // eslint-disable-next-line no-console
                console.log(horror);
                // TODO: update cat detail component...
            })
            .finally(() => {
                setTimeout(() => {
                    loading.update({ loading: false });
                }, 500);
            });
    }

    renderHTML() {
        return /*html*/`
            <div>
            <!-- header goes here -->
                <main></main>
            </div>
        `;
    }
}

export default DetailApp;