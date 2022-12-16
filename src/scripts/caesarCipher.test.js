const caesarCipher = require('./caesarCipher');

test("a -> b", () => {
    expect(caesarCipher('a')).toBe('b');
});

test("CD -> DE", () => {
    expect(caesarCipher('CD')).toBe('DE');
});

test("abcdefghijklmnopqrstuvwxyz -> bcdefghijklmnopqrstuvwxyza", () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz')).toBe('bcdefghijklmnopqrstuvwxyza');
});

test("/ abc. def! ghi? / -> / bcd. efg! hij? /", () => {
    expect(caesarCipher('/ abc. def! ghi? /')).toBe('/ bcd. efg! hij? /');
});