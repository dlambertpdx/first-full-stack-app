import Component from '../Component.js';
import Header from '../app/Header.js';
import HorrorForm from '../horror/HorrorForm.js';
import { getGenres } from '../../services/horror-api.js';


class FormApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        // const headerOne = document.createElement('h1');
        const main = dom.querySelector('main');
        // headerOne.textContent = 'Submit a film';
        // main.prepend(headerOne);

        // const summary = document.createElement('p');
        // summary.classList.add('summary');
        // summary.textContent = 'Add a film to be included in our library.';
        // main.appendChild(summary);

        getGenres()
            .then(genres => {
                const horrorForm = new HorrorForm({ genres });
                main.appendChild(horrorForm.renderDOM());
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

export default FormApp;