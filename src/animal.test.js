const animal = require('./animal');

test("The animal has to be a cat", () => {
    expect(animal('cat')).toBe('its a cat');
});
