import hashStorage from '../src/components/services/hash-storage.js';
const test = QUnit.test;

QUnit.module('Hash Storage');

test('reads window location hash as object', assert => {
    // arrange
    window.location.hash = 'title=SUSPIRIA&releaseYear=1971';
    const expected = {
        title: 'SUSPIRIA',
        releaseYear: '1971'
    };

    // act
    const result = hashStorage.get();

    // assert
    assert.deepEqual(result, expected);
});

test('sets window location with new props', assert => {
    // arrange
    window.location.hash = '';
    const queryProps = {
        title: 'SUSPIRIA',
        releaseYear: '1971'
    };
    const expected = 'title=SUSPIRIA&releaseYear=1971';

    // act
    hashStorage.set(queryProps);
    const result = window.location.hash.slice(1);

    // assert
    assert.equal(result, expected);
});

test('only sets new props on location', assert => {
    // arrange
    window.location.hash = 'title=SUSPIRIA&releaseYear=1971';
    const queryProps = {
        releaseYear: '1975'
    };
    const expected = 'title=INFERNO&releaseYear=1975';

    // act
    hashStorage.set(queryProps);
    const result = window.location.hash.slice(1);

    // assert
    assert.equal(result, expected);
});

test('removes key from storage', assert => {
    // arrange
    window.location.hash = 'title=SUSPIRIA&releaseYear=1971';
    const key = 'releaseYear';
    const expected = 'title=SUSPIRIA';

    // act
    hashStorage.remove(key);
    const result = window.location.hash.slice(1);

    // assert
    assert.equal(result, expected);
});