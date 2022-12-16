const capitalize = require('./capitalize');

test('capitalize h in hello to Hello', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('capitalizee e in essAy to EssAy', () => {
    expect(capitalize('essAy')).toBe('EssAy');
})