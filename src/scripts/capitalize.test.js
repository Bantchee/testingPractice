const capitalize = require('./capitalize');

test('capitalize h in hello to Hello', () => {
    expect(capitalize('hello')).toBe('Hello');
});