import App from './components/app/App.js';

const app = new App();
const document = document.body.prepend(app.renderDOM());