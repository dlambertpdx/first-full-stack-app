import Component from './Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
        <header>
            <nav>
                <a href="./">HOME</a>
                <a href="./public/">LIST</a>
                <a href="./public/">FORM</a>
            </nav>
            <img src="public/assets/banner.png" alt="Grand Guignol di Dario Argento" />
        </header>
        `;
    }
}

export default Header;