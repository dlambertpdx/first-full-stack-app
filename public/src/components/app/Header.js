import Component from './Component.js';

class Header extends Component {
    renderHTML() {
        const title = this.props.title || 'HEADER TITLE';
        return /*html*/`
            ${title} <!-- HTML GOES HERE --->
        `;
    }
}

export default Header;