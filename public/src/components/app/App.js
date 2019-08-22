import Component from './Component.js';
import Header from '../app/Header.js';

class App extends Component {
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDom());
    }

    renderHTML() {
        return /*html*/`
            
        `;
    }
}

export default App;