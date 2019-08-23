import Component from '../Component.js';
import Header from '../app/Header.js';

class FormApp extends Component {

    onRender(dom) {
        const header = new Header({ title: 'Add a Cat' });
        dom.prepend(header.renderDOM());
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

export default FormApp;