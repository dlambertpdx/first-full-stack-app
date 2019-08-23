import HorrorItem from '../src/components/horror-item.js';

const test = QUnit.test;

QUnit.module('Render Horror Item');

test('test name', assert => {
    // arrange
    const horror = {
        title: 'SUSPIRIA',
        summary: 'From the moment she arrives in Freiberg, Germany, to attend the prestigious Tans Academy, American ballet-dancer Suzy Bannion senses that something horribly evil lurks within the walls of the age-old institution.',
        worthWatch: true,
        releaseYear: 1977,
        director: 'Dario Argento',
        url_image: 'https://n2n7w2w4jmg4f5rtr2b482vt-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/suspiria-previous-design-2.jpg'
    };

    const expected = /*html*/ `
        <div class="horror-item">
            <div class="horror-img">
                <img class="url" src="${horror.url_image} alt="${horror.title}" />
            </div>
            <div class="horror-copy">
                <li class="horror-title">${horror.title}</li>
                <li class="year">${horror.year}</li>
                <li class="summary">${horror.summary}</li>
                <li class="worth-watch">Worth Watching: ${horror.worthWatch}</li>
            </div>
        </div>
    `;

    // act
    const props = { horror: horror };
    const horrorItem = new HorrorItem(props);
    const html = horrorItem.renderHTML();
    // assert
    assert.htmlEqual(html, expected);
});