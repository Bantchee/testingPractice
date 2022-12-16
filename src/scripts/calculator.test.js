const Calculator = require('./calculator');

test(("adds 6 + 7 to equal 13"), () => {
    expect(Calculator.add(6,7)).toBe(13);
});

test(("subtracts 6 - 7 to equal -1"), () => {
    expect(Calculator.sub(6,7)).toBe(-1);
});

test(("multiply 6 * 7 to equal 35"), () => {
    expect(Calculator.mul(6,7)).toBe(42);
});

test(("divide 6 / 3 to equal 2"), () => {
    expect(Calculator.div(6,3)).toBe(2);
});