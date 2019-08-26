import Component from '../Component.js';
import { addHorror } from '../../services/horror-api.js';

class HorrorForm extends Component {
    onRender(form) {
        
        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const horror = {
                title: formData.get('type'),
                release_year: +formData.get('release_year'),
                genre_id: +formData.get('genre_id'),
                url_image: formData.get('url_image'),
                summary: formData.get('summary'),
                director: formData.get('director'),
                worth_watch: formData.get('worth_watch') === 'on'
            };

            addHorror(horror)
                .then((/*saved*/) => {
                    
                    window.location = `horror-list.html`;
                })
                .catch(err => {
                    // eslint-disable-next-line no-console
                    console.log('horror not saved :(', err);
                });
        });

    }
    renderHTML() {
        const genres = this.props.genres;
        const optionsList = genres.map(genre => {
            return /*html*/`
                <option value="${genre.id}">${genre.name}</option>
            `;
        });

        return /*html*/`
            <form class="horror-form">
                <p>
                    <label for="title">Title</label>
                    <input id="title" name="title" required placeholder="Film Title">
                </p>

                <p>
                    <label for="release_year">Release Year</label>
                    <input id="release_year" 
                        name="release_year" 
                        required 
                        pattern="[0-9]{4}" 
                        placeholder="1971" 
                        title="Four digit release year">
                </p>

                <p>
                    <label for="genre">Genre</label>
                    <select id="genre" name="genre-id" required>
                        <option disabled selected>&lt;select a genre&gt;</option>
                        ${optionsList.join('')}
                    </select>
                </p>
                
                <p>
                    <label for="url_image">Image URL</label>
                    <input id="url_image" name="url_image" required placeholder="https://i.ebayimg.com/images/g/FpMAAOSwzfNbuL3N/s-l300.jpg">
                </p>

                <p>
                    <label for="summary">Synopsis</label>
                    <input id="summary" name="summary" required placeholder="Film Synopsis">
                </p>

                <p>
                    <label for="director">Director</label>
                    <input id="director" name="director" required placeholder="Director">
                </p>

                <fieldset for="worth_watch">
                    <legend>Worth the Watch?</legend>
                    <label class="horizontally-centered">
                        <input id="worth_watch" name="worth_watch" type="checkbox"> Yes
                    </label>
                </fieldset>

                <p>
                    <button>Add This Film</button>
                </p>
            </form>
        `;
    }
}

export default HorrorForm;